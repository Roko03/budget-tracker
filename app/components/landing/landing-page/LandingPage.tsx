import BudgetResults from "../budget/budget-results/BudgetResultsSection";
import BudgetTrackerSection from "../budget/budget-tracker/BudgetTrackerSection";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.budget_container}>
      <BudgetResults />
      <BudgetTrackerSection />
    </div>
  );
};

export default LandingPage;
