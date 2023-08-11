"use client";
import { useState } from "react";
import styles from "./BudgetTrackerSection.module.scss";
import BudgetTrackerDataComponent from "./components/budget-tracker-data/BudgetTrackerDataComponent";
import useLocalStorage from "@/app/util/useLocalStorage";

const BudgetTrackerSection = () => {
  const date = new Date();
  const formatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const [budgets, setBudgets] = useLocalStorage<Budget[]>("budgets", []);
  const [budget, setBudget] = useState<Budget>({
    type: "",
    date: "",
    description: "",
    price: 0,
  });

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setBudget((prev) => {
      return {
        ...prev,
        date: formatedDate,
        [name]:
          name === "price"
            ? !isNaN(parseInt(value))
              ? parseInt(value)
              : 0
            : value,
      };
    });
  };

  const onSubmit = () => {
    if (budget.type !== "" && budget.description !== "" && budget.price !== 0) {
      setBudgets([...budgets, budget]);
      setBudget({ type: "", date: "", description: "", price: 0 });
    }
  };

  return (
    <section className={styles.budget_tracker}>
      <h1>Track Your Budget</h1>
      <select
        className={styles.budget_select}
        name="type"
        value={budget.type}
        onChange={onInputChange}
      >
        <option value={"-"}>-</option>
        <option value={"income"}>Income</option>
        <option value={"outcome"}>Outcome</option>
      </select>
      <h2>Tracking Expenses</h2>
      <div className={styles.budget_description}>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={budget.description}
          onChange={onInputChange}
        />
        <input
          type="number"
          placeholder="Value"
          name="price"
          value={budget.price === 0 ? "" : budget.price}
          onChange={onInputChange}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
      <BudgetTrackerDataComponent budgets={budgets} />
    </section>
  );
};

export default BudgetTrackerSection;
