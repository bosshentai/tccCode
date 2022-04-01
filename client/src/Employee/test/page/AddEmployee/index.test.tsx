import { fireEvent, render, screen } from "@testing-library/react";
import { AddEmployee } from "../../../page/AddEmployee";

describe("Page AddEmployee", () => {
  test("should render the component", () => {
    render(
      <AddEmployee
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.getByTestId("addEmployee")).toBeInTheDocument();
  });

  test("Render Form", () => {
    render(
      <AddEmployee
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const form = screen.getByTestId("form");
    
   expect (form).toBeInTheDocument();
  });


  // test("Render InputText", () => {
  //   render(
  //     <AddEmployee
  //       onClose={function (): void {
  //         throw new Error("Function not implemented.");
  //       }}
  //     />
  //   );

  //   const input = screen.get
  //   expect(input).toBeInTheDocument();

  // })


  test( "Render Button", () => {
    render(
      <AddEmployee
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  })
  

  

});
