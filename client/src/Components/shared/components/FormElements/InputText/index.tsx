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
  VERIFICATION
}

type Action =
  | {
      type: ActionType.CHANGE;
      value: string;
      isValid: boolean;
    }
  | { type: ActionType.TOUCH; isTouch: boolean };
  // | { type: ActionType.VERIFICATION; isValid: boolean };

type StateType = {
  value: string;
  isValid: boolean;
  isTouched: boolean;

}



const inputReducer = (_state: StateType, action: Action) => {

  /**
   *
   * @description - Reducer for the input component
   *
   * @param _state - The current state of the input
   *
   * @param action - The action to be performed
   *
   * @returns - The new state of the input
   *
   */


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
    // case ActionType.VERIFICATION: {
    //   return {
    //     ..._state,
    //     isValid: action.isValid,
    //   }
    // }
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
  // isTouched?: boolean;
  isValid?: boolean;
};

const chooseValidator = (id: string, value: string): boolean => {

  /**
   * @description - Chooses the validator to be used
   * @param id :string - The id of the input
   * @param value:string - The value of the input
   * @returns {boolean}- The validity of the input
   *
   */

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

  /**
   *
   * @description - The input component
   * @param props - The props of the input
   * @returns - The input component
   */
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

  // const verificationHandler = () => {
  //   dispatch({
  //     type: ActionType.VERIFICATION,
  //     isValid: props.isValid || false,
  //   });
  // }


  const teste = inputState.isTouched && !inputState.isValid ;

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
            // isValid={props.isValid}
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
