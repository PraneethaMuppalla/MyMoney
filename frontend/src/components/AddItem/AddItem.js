import React, { useState, useRef } from "react";

import Container from "../Layout/Container";
import ToggleButton from "../Layout/ToggleButton";
import { expenseCategories, incomeCategories } from "../../utils/DUMMY_VALUES";
import axiosInstance from "../../utils/constants";

const AddItem = () => {
  const amountRef = useRef();
  const dateRef = useRef();
  const categoryRef = useRef();

  const [isExpense, setIsExpense] = useState(true);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const amount = amountRef.current.value;
      const date = dateRef.current.value;
      const category = categoryRef.current.value;
      axiosInstance.post("/add-expense", { amount, date, category, isExpense });
    } catch (err) {
      console.error(err);
      alert("Some error occured. Please try again.");
    }
  };

  return (
    <Container height={`min-h-[80vh] md:min-h-[60vh]`}>
      <div className="main-card w-full p-6 md:p-8 lg:w-[50vw]">
        <div className=" grid grid-cols-2 para-font">
          <ToggleButton
            isActive={isExpense}
            onClick={() => {
              setIsExpense(true);
            }}
          >
            Expense
          </ToggleButton>
          <ToggleButton
            isActive={!isExpense}
            onClick={() => {
              setIsExpense(false);
            }}
          >
            Income
          </ToggleButton>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div
              className="grid md:grid-cols-2  
             gap-2"
            >
              <div className=" my-2">
                <label
                  htmlFor="category"
                  className="block para-font  text-base"
                >
                  Category
                </label>
                <select
                  className="mt-2 w-full px-3 py-2 border-2  rounded-md text-sm 
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:"
                  required
                  ref={categoryRef}
                >
                  {isExpense
                    ? expenseCategories.map((item) => {
                        return (
                          <option value={item.name} key={item.id}>
                            {item.name}
                          </option>
                        );
                      })
                    : incomeCategories.map((item) => {
                        return (
                          <option value={item.name} key={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                </select>
              </div>

              <div className=" my-2">
                <label htmlFor="amount" className="block para-font  text-base">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  className="mt-2 w-full px-3 py-2 border-2  rounded-md text-sm 
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:"
                  required
                  ref={amountRef}
                />
              </div>
              <div className=" my-2">
                <label htmlFor="date" className="block para-font  text-base">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-2 w-full px-3 py-2 border-2  rounded-md text-sm 
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 required:"
                  required
                  ref={dateRef}
                />
              </div>
              <div className=" my-2  text-right">
                <button
                  className="block  para-font rounded text-white w-full  p-2  text-base brand-bg-color mt-4 md:mt-8 "
                  type="submit"
                >
                  Add Expense
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddItem;
