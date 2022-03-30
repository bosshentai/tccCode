import { render, screen } from "@testing-library/react";
import { EmployeeItem } from "../../../components/EmployeeItem";

describe("Component EmployeeItem", () => {
  const props = {
    id: "1",
    name: "Fulano",
    email: "fulano@teste.com",
    status: "Ativo",
  };

  test("name", () => {
    render(<EmployeeItem {...props} />);
    expect(screen.getByText("Fulano")).toBeInTheDocument();
  });

  test("email", () => {
    render(<EmployeeItem {...props} />);
    expect(screen.getByText("fulano@teste.com")).toBeInTheDocument();	
  })

  test("status", () => {
    render(<EmployeeItem {...props} />);
    expect(screen.getByText("Ativo")).toBeInTheDocument();
  })

  test("status class active", () => {
    render(<EmployeeItem {...props} />);
    expect(screen.getByText("Ativo")).toHaveClass("statusActive");
  })

  test("status class inactive", () => {
    props.status = "Inativo";
    render(<EmployeeItem {...props} />);
    expect(screen.getByText("Inativo")).toHaveClass("statusInactive");
  })

});


