import { fireEvent } from "@testing-library/react";
import { render } from "react-dom";
import { Employee } from "../../../page/Employee";

describe("Page Employee", () => {
  test("render Page", () => {

    const div = document.createElement("div");

    render(<Employee />, div);
    
    // expect(div.querySelector("#employee")).toBeInTheDocument();
  });
});
