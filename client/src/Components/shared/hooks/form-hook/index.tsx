import { useCallback, useReducer } from "react";

enum ActionType {
  INPUTCHANGE,
  SETDATA,
}

type input = {
  [id: string]: {

    value: string;
    isValid: boolean;
  };
};

type Action =
  | {
      type: ActionType.INPUTCHANGE;

      inputId: string;
      value: string;
      isValid: boolean;
      inputs?: input[] ;
     
      
    }
  | { type: ActionType.SETDATA; inputs: any };

const formReducer = (_state: any, action: Action) => {
  switch (action.type) {
    case ActionType.INPUTCHANGE: {
      let formIsValid = true;
      for (const inputId in _state.inputs){
        if(!_state.inputs[inputId]){
          continue;
        }
        if (inputId === action.inputId){
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && _state.inputs[inputId].isValid;
        }
      }
      return {
        ..._state,
        inputs: {
          ..._state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid
      };
    }

    case ActionType.SETDATA: {
      return {
        inputs: action.inputs,
        // isValid: action.formIsValid
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
};

export const useForm = (initialInputs: object, initialIsValid: any) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialIsValid,
  });

  const inputHandler = useCallback((id :string, value:string, isValid: boolean) => {
    dispatch({
      type: ActionType.INPUTCHANGE,
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData: any) => {
    dispatch({
      type: ActionType.SETDATA,
      inputs: inputData,
    });
  }, []);

  return [formState, inputHandler];
};
