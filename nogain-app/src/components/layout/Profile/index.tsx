import profileIcon from "../../../assets/icons/blueProfile.svg";

import styles from "./styles.module.scss";

// user Profile
export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img  src={profileIcon} alt="profile" />
   </div>
  );
};
