import { Fragment } from "react";
import styles from "./Modal.module.css";
const BackDrop = ({}) => {
  return <div className={styles.backdrop}></div>;
};

const Modal = ({ children }) => {
  return (
    <Fragment>
      <Fragment>
        <BackDrop />
        <div className={styles.modal}>
          <div className={styles.modalMain}>{children}</div>
        </div>
      </Fragment>
      ;
    </Fragment>
  );
};

export default Modal;
