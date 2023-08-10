import BudgetTrackerDataItemComponent from "../budget-tracker-data-item/BudgetTrackerDataItemComponent";
import styles from "./BudgetTrackerDataComponent.module.scss";

interface BudgetTrackerDataComponentProps {
  budgets: Budget[];
}

const BudgetTrackerDataComponent: React.FC<BudgetTrackerDataComponentProps> = ({
  budgets,
}) => {
  return (
    <div className={styles.budget_data}>
      {budgets.map((budget, index) => {
        return <BudgetTrackerDataItemComponent key={index} {...budget} />;
      })}
    </div>
  );
};

export default BudgetTrackerDataComponent;
