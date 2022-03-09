import styles from "./styles.module.scss";

type client = {
  id: string;
  name: string;
  email: string;
  trainPlan: string;
};


type clientListProps = {
  clients: client[] | [];
}


export const ClientList = (props: clientListProps) => {
  const clientData = props.clients;

  return (
    <ul className={styles.clientList}>

    </ul>
  )

}