import BudgetResults from "../budget/budget-results/BudgetResults";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.budget_container}>
      <BudgetResults />
    </div>
  );
};

export default LandingPage;
