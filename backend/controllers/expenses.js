const Expense = require("../models/expense");
const sequelize = require("../util/database");

exports.getExpenses = async (req, res, next) => {
  try {
    const page = +req.query.page || 0;
    const rows = +req.query.rows || 5;
    const offSetNow = page * 5;
    const totalCount = await Expense.count({
      where: {
        userId: req.user.id,
      },
    });
    const response = await req.user.getExpenses({
      attributes: ["id", "category", "description", "expenses", "date"],
      offset: offSetNow,
      limit: rows,
    });
    res.json({
      expenses: response,
      currentPage: page,
      hasNextPage: offSetNow + rows < totalCount,
      nextPage: page + 1,
      hasPreviousPage: page > 0,
      previousPage: page - 1,
      lastPage: Math.ceil(totalCount / rows),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: err });
  }
};

exports.addNewExpense = async (req, res, next) => {
  try {
    const { amount, category, isExpense, date } = req.body;
    const { totalExpenses } = req.user;
    const data = await req.user.createExpense({
      amount,
      category,
      isExpense,
      date,
    });
    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: err });
  }
};
exports.deleteExpense = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const expenseid = +req.params.expenseId;
    const { totalExpenses } = req.user;
    const expesneRows = await req.user.getExpenses({
      where: { id: expenseid },
    });
    const expense = expesneRows[0];

    const response2 = await req.user.update(
      {
        totalExpenses: totalExpenses - expense.expenses,
      },
      { transaction: t }
    );
    const response = await Expense.destroy(
      {
        where: {
          id: expenseid,
          userId: req.user.id,
        },
      },
      { transaction: t }
    );

    await t.commit();
    if (response > 0) {
      res.json({ success: true, msg: "Expense deleted successfully" });
    } else {
      res.status(404).json({ success: false, msg: "Expense not found" });
    }
  } catch (err) {
    await t.rollback();
    console.error(err);
    res.status(500).json({ success: false, msg: err });
  }
};
