// import { type } from "os";
import { DiscountItem } from "../DiscountItem";
import styles from "./styles.module.scss";

type discount = {
  id: string;
  name: string;
  value: number;
  // descrition: string;
};

type discountProps = {
  discounts: discount[] | [];
};

export const DiscountList = (props: discountProps) => {
  const discountData = props.discounts;

  return (
    <ul className={styles.discountList}>
      {discountData.map((discount: discount) => (
        <DiscountItem
          key={discount.id}
          id={discount.id}
          name={discount.name}
          amount={discount.value}
        />
      ))}
    </ul>
  );
};
