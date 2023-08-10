import styles from "./BudgetResults.module.scss";

const BudgetResults = () => {
  return (
    <section className={styles.budget_results}>
      <h1>Your Budget</h1>
      <span className={styles.budget_date}>19/1/2022</span>
      <div className={styles.budget_price_box}>
        <span>19</span> kn
      </div>
    </section>
  );
};

export default BudgetResults;
