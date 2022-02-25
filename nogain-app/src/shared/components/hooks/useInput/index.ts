import React from "react";
import { useState } from "react";

type propsType = {
  validateValue: (value: string) => boolean;
}

// custom hook

export const useInput = (props: propsType) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouch, setIsTouch] = useState(false);
    const enteredValueIsNotEmpty = enteredValue !== "";
    const enteredvalueIsValid = props.validateValue(enteredValue);
    const valueInputIsInvalid = !enteredvalueIsValid && enteredValueIsNotEmpty;
    const valueIsValid = !isTouch || (enteredValueIsNotEmpty && enteredvalueIsValid);

} 