import { useCallback, useReducer } from "react";

enum ActionType {
  INPUTCHANGE,
  SETDATA,
}

type Action =
  | {
      type: ActionType.INPUTCHANGE;
    }
  | { type: ActionType.SETDATA; inputs: any };

const formReducer = (_state: any, action: Action) => {
  switch (action.type) {
    case ActionType.SETDATA: {
      return {
        inputs: action.inputs,
      };
    }
    default:
      return _state;
  }
};

type AddEmployeetype = {
  name: string;
  email: string;
  CNI: string;
  NIF: string;
  Birth: string;
  tel: string; 
}



export const useForm = (initialInputs: any, initialIsValid: any) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialIsValid,
  });

  const setFormData = useCallback((inputData: any) => {
    dispatch({
      type: ActionType.SETDATA,
      inputs: inputData,
    });
  }, []);

  return [formState,setFormData];
};
