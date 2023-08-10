"use client";
import { useEffect, useState } from "react";
import { Chart } from "chart.js";
import useLocalStorage from "@/app/util/useLocalStorage";

const PieChart = () => {
  const [budgets] = useLocalStorage<Budget[]>("budgets", []);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);

  const getIncomeAndOutcome = (budgets: Budget[]) => {
    let totalIncome = 0;
    let totalOutcome = 0;

    budgets.forEach((budget) => {
      if (budget.type === "income") {
        totalIncome += budget.price;
      } else {
        totalOutcome += budget.price;
      }
    });

    setIncome(totalIncome);
    setOutcome(totalOutcome);
  };

  useEffect(() => {
    getIncomeAndOutcome(budgets);
  }, [budgets]);

  useEffect(() => {
    const canvas = document.getElementById(
      "myChart"
    ) as HTMLCanvasElement | null;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Income", "Outcome"],
            datasets: [
              {
                data: [income, outcome],
                backgroundColor: ["rgb(10, 135, 10)", "rgb(220, 12, 12)"],
                borderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              xAxes: [
                {
                  display: false,
                },
              ],
              yAxes: [
                {
                  display: false,
                },
              ],
            },
          },
        });
      }
    }
  }, [budgets, income, outcome]);

  return (
    <>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl pb-2">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
};

export default PieChart;
