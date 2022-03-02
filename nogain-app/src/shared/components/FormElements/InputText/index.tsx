import React, { useReducer } from "react";

import styles from "./styles.module.scss";

import { validName } from "../../../util/validName";



enum ActionType {
  CHANGE,
  TOUCH,
}

type Action =
  | {
      type: ActionType.CHANGE;
      value: string;
      isValid: boolean;
      isNotEmpty: boolean;
    }
  | { type: ActionType.TOUCH; isTouch: boolean };

const inputReducer = (_state: any, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGE:
      return {
        ..._state,
        value: action.value,
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

  initialValue?: string;
  initialValid?: boolean;
  initialNotEmpty?: boolean;
};

export const InputText = (props: inputProps) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
    isNotEmpty: props.initialNotEmpty || false,
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.CHANGE,
      value: event.target.value,
      isValid: validName(event.target.value),
      isNotEmpty: event.target.value !== "",
    });
  };

  const touchHandler = () => {
    dispatch({
      type: ActionType.TOUCH,
      isTouch: true,
    });
  };

  const teste =
    !inputState.isTouched || (!inputState.isValid && inputState.isNotEmpty);

  const classeController = teste ? ` ` : `  ${styles.invalidInput} `;

  return (
    <div className={styles.inputContainer}>
      <label>{props.label}</label>
      <input
        className={`${teste && styles.invalidInput}`}
        id={props.id}
        type="text"
        onBlur={touchHandler}
        onChange={changeHandler}
        placeholder={props.placeHolder}
        value={inputState.value}
      />
    </div>
  );
};
