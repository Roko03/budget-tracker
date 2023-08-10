"use client";
import useLocalStorage from "@/app/util/useLocalStorage";
import styles from "./BudgetResultsSection.module.scss";
import { useEffect, useState } from "react";
import PieChart from "@/app/components/pie-chart/PieChart";

const BudgetResultsSection = () => {
  const date = new Date();
  const formatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  const [budgets] = useLocalStorage<Budget[]>("budgets", []);
  const [budget, setBudget] = useState<number>(0);

  const getPriceSum = (budgets: Budget[]) => {
    let sum = 0;
    budgets.forEach((budget) => {
      if (budget.type === "income") {
        sum += budget.price;
      } else {
        sum -= budget.price;
      }
    });

    return sum;
  };

  useEffect(() => {
    setBudget(getPriceSum(budgets));
  }, [budgets]);

  return (
    <section className={styles.budget_results}>
      <h1>Your Budget</h1>
      <span className={styles.budget_date}>{formatedDate}</span>
      <div className={styles.budget_price_box}>
        <span>{budget}</span> euro
      </div>
      <PieChart />
    </section>
  );
};

export default BudgetResultsSection;
