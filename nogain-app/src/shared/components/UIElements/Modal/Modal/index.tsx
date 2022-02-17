import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "../../../../shared/components/UIElements/Backdrop";
import { ModalOverlay } from "../ModalOverlay";

type modalProps = {
  portalElement: HTMLElement | null;
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = (props: any) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
