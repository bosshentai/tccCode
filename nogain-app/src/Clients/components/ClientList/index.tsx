import { ClientItem } from "../ClientItem";
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
      {clientData.map((client: client) => (
        <ClientItem
        key={client.id}
        id={client.id}
        name={client.name}
        email={client.email}
        trainPlan={client.trainPlan}
        />
      ))}
    </ul>
  )

}