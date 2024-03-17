const express = require("express");

const expensesController = require("../controllers/expenses");
const authUser = require("../middlewares/auth");
const router = express.Router();

router.get("/get-expenses/:month", authUser, expensesController.getExpenses);
router.post("/add-expense", authUser, expensesController.addNewExpense);
router.delete(
  "/delete-expense/:expenseId",
  authUser,
  expensesController.deleteExpense
);

module.exports = router;
