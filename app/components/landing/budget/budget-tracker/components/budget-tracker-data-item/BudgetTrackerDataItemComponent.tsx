import styles from "./BudgetTrackerDataItemComponent.module.scss";

const BudgetTrackerDataItemComponent: React.FC<Budget> = ({
  type,
  date,
  price,
  description,
}) => {
  const priceClass = type === "income" ? styles.income : styles.outcome;

  return (
    <div className={styles.budget_data_item}>
      <span className={styles.budget_data_item__date}>{date}</span>
      <span className={styles.budget_data_item__description}>
        {description}
      </span>
      <span className={`${styles.budget_data_item__price} ${priceClass}`}>
        {price} euro
      </span>
    </div>
  );
};

export default BudgetTrackerDataItemComponent;
