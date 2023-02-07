import { Employee } from "../../entities/Employee";
import { IEmployeeRepository } from "../../repositories/interfaces/IEmployeeRepository"
import { CreateEmployeeService } from "./CreateEmployeeService";


describe("Create employee",() =>{

  let employeesRepository: IEmployeeRepository;
  let createEmployeeService: CreateEmployeeService


  beforeAll(()=>{
    // employeeRepositor
    createEmployeeService = new CreateEmployeeService(employeesRepository)
  })


  it("should be able to create new user", async ()=>{
    const employeeData: Employee = {
      name: "Hernani Baptista",
      email: "tes@test.com",
      phone: "9541850",
      cni: "19931022M003R",
      nif: "136124520",
      birth: new Date("1993/10/22"),

    }

    const employee = await createEmployeeService.execute(employeeData);

    expect(employee).toHaveProperty("id"),
    expect(employee.name).toBe("Hernani Baptista")
  })

})


