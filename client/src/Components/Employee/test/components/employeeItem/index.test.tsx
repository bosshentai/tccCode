import { render, screen } from "@testing-library/react";
import { EmployeeItem } from "../../../components/EmployeeItem";

describe("Component EmployeeItem", () => {
  const employee = {
    id: "1",
    name: "Fulano",
    email: "fulano@teste.com",
    status: "Ativo",
  };

  // test("name", () => {
  //   render(
  //     <EmployeeItem
  //       key={employee.id}
  //       id={employee.id}
  //       name={employee.name}
  //       email={employee.email}
  //       status={employee.status}
  //     />
  //   );
  //   // expect(screen.getByText("Fulano")).toBeInTheDocument();
  //   // expect(scree)
  //   // expect(screen);
  // });

  // test("email", () => {
  //   render(<EmployeeItem {...props} />);
  //   expect(screen.getByText("fulano@teste.com")).toBeInTheDocument();
  // })

  // test("status", () => {
  //   render(<EmployeeItem {...props} />);
  //   expect(screen.getByText("Ativo")).toBeInTheDocument();
  // })

  // test("status class active", () => {
  //   render(<EmployeeItem {...props} />);
  //   expect(screen.getByText("Ativo")).toHaveClass("statusActive");
  // })

  // test("status class inactive", () => {
  //   props.status = "Inativo";
  //   render(<EmployeeItem {...props} />);
  //   expect(screen.getByText("Inativo")).toHaveClass("statusInactive");
  // })
});
