import React, {useReducer} from "react";


import styles from "./styles.module.scss";

import { validEmail} from "../../../util/validEmail";



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
  }



  type inputProps = {
    id: string;
    placeHolder: string;
    label: string;
    initialValue?: string;
    initialValid?: boolean;
    initialNotEmpty?: boolean;
  }

  const initialState = {
    
  }



export const InputEmail = (props: inputProps) => {
  const [inputState, dispatch] = useReducer(inputReducer, {

  })
}