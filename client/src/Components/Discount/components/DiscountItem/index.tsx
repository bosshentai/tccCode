import styles from "./styles.module.scss";

type discountProps = {
  id: string;
  name: string;
  amount: number;
};

export const DiscountItem = (props: discountProps) => {
  const { id, name, amount } = props;
  return (
    <li key={id} id={id} className={styles.discountContainer}>
      <div>
        <span>{name}</span>
      </div>

      <div className={styles.amount}>
        <span>Preço</span>
        <span>{amount}</span>
      </div>
    </li>
  );
};
