import React, { useEffect, useReducer } from "react";

import styles from "./styles.module.scss";

import { validName } from "../../../util/validName";
import { validEmail } from "../../../util/validEmail";
import { validPhoneNumber } from "../../../util/validPhoneNumber";
import { validCNI } from "../../../util/validCNI";
import { validNIF } from "../../../util/validNIF";
import { validBirth } from "../../../util/validBirth";

enum ActionType {
  CHANGE,
  TOUCH,
}

type Action =
  | {
      type: ActionType.CHANGE;
      value: string;
      isValid: boolean;
    }
  | { type: ActionType.TOUCH; isTouch: boolean };

const inputReducer = (_state: any, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGE:
      return {
        ..._state,
        value: action.value,
        isValid: action.isValid,
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
  type: string;
  onInput: (id: string, value: string, isValid: boolean) => void;
  initialValue?: string;
  initialValid?: boolean;
};

const chooseValidator = (id: string, value: string): boolean => {
  switch (id) {
    case "name":
      return validName(value);
    case "email":
      return validEmail(value);
    case "tel":
      return validPhoneNumber(value);
    case "cni":
      return validCNI(value);
    case "nif":
      return validNIF(value);
    case "birth":
      return validBirth(
        Number(value.slice(8, 10)),
        Number(value.slice(5, 7)),
        Number(value.slice(0, 4))
      );
    default:
      return false;
  }
};

export const InputText = (props: inputProps) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, onInput, value]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.CHANGE,
      value: event.target.value,
      isValid: chooseValidator(props.id, event.target.value),
    });
  };

  const touchHandler = () => {
    dispatch({
      type: ActionType.TOUCH,
      isTouch: true,
    });
  };

  const teste = inputState.isTouched && !inputState.isValid;

  const classeController = teste ? ` ${styles.invalidInput} ` : `  `;

  const chooseType = (type: string) => {
    switch (type) {
      case "text":
        return (
          <input
            className={classeController}
            id={props.id}
            type={props.type}
            placeholder={props.placeHolder}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
          />
        );
      case "email":
        return (
          <input
            className={classeController}
            id={props.id}
            type={props.type}
            placeholder={props.placeHolder}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
          />
        );
      case "tel":
        return (
          <input
            className={classeController}
            id={props.id}
            type={props.type}
            placeholder={props.placeHolder}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
          />
        );
      case "date":
        return (
          <input
            className={classeController}
            id={props.id}
            type={props.type}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value}
            placeholder={props.placeHolder}
          />
        );
    }
  };

  const element = chooseType(props.type);

  // console.table(inputState);

  // console.table(inputState.value);

  // console.log(inputState.value.length);

  return (
    <div className={styles.inputContainer}>
      <label>{props.label}</label>
      {element}
    </div>
  );
};
