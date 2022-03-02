import React, { useReducer } from "react";

import styles from "./styles.module.scss";

import { validEmail } from "../../../util/validEmail";
import { displayPartsToString } from "typescript";

enum ActionType {
  CHANGE,
  TOUCH,
}

type Action =
  | {
      type: ActionType.CHANGE;
      email: string;
      isValid: boolean;
      isNotEmpty: boolean;
    }
  | { type: ActionType.TOUCH; isTouch: boolean };

const inputReducer = (_state: any, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGE:
      return {
        ..._state,
        value: action.email,
        isValid: action.isValid,
        isNotEmpty: action.isNotEmpty,
      };

    case ActionType.TOUCH: {
      return {
        ..._state,
        isTouched: action.isTouch,
      };
    }
    default:
      return _state;
  }
};

type inputProps = {
  id: string;
  placeHolder: string;
  label: string;
  initialEmail?: string;
  initialValid?: boolean;
  initialNotEmpty?: boolean;
};

export const InputEmail = (props: inputProps) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    email: "",
    isTouched: false,
    isValid: false,
    isNotEmpty: false,
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.CHANGE,
      email: event.target.value,
      isValid: validEmail(event.target.value),
      isNotEmpty: event.target.value !== "",
    });
  };

  const touchHandler = () => {
    dispatch({
      type: ActionType.TOUCH,
      isTouch: true,
    });
  };


  const teste = inputState.isTouched && !inputState.isValid;




  const classController = teste ? ` ${styles.invalidInput} ` : "";


  return (
    <div className={styles.inputContainer}>
      <label>{props.label}</label>
      <input
      />
     </div> 
  )


};
