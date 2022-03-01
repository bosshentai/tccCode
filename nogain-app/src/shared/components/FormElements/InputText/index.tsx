import React, { useReducer } from "react";

// type FormState = {

// }

enum ActionType {
  CHANGE,
  TOUCH,
}

type Action =
  | { type: ActionType.CHANGE; val: string }
  | { type: ActionType.TOUCH };

const inputReducer = (_state: any, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGE:
      return {
        ..._state,
        value: action.val,
      };

    case ActionType.TOUCH: {
      return {
        ..._state,
      };
    }
    default:
      return _state;
  }
};

type inputProps = {
  id: string;
  placeHolder: string;
  initialValue?: string;
};

export const InputText = (props: inputProps) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.CHANGE,
      val: event.target.value,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: ActionType.TOUCH,
    });
  };

  return (
    <div>
    <input
      id={props.id}
      type="text"
      onBlur={touchHandler}
      placeholder={props.placeHolder}
    />
    </div>
  );
};