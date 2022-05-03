import {render,screen} from '@testing-library/react';
import { EmployeeList } from '../../../components/EmployeeList';

// describe('Component EmployeeList', () => {

    // const props = {
    //     employees: [
    //         {
    //             id: "1",
    //             name: "Fulano",
    //             email: "fulano@test.com",
    //             status: "Ative"
    //         },
    //         {
    //             id: "2",
    //             name: "Ciclano",
    //             email: "ciclano@test.com",	
    //             status: "Inactivo",
    //         }
    //       ]
    //     };

    // test('should render the component', () => {
    //     render(<EmployeeList  employees={props.employees} />);

    //     expect(screen.getByTestId('employeeList')).toBeInTheDocument();
      
    //     // expect(screen.getByText('')).toBeInTheDocument();
    // })


    // test('should render the component with not empty list', () => {
    //     render(<EmployeeList {...props} />);
    //     expect(screen.getByTestId('employeeList')).toBeInTheDocument();
    //     expect(screen.getByTestId('employeeList')).not.toBeEmptyDOMElement();
    //     expect(screen.getByTestId('employeeList')).toHaveTextContent('Fulano');
    //     expect(screen.getByTestId('employeeList')).toHaveTextContent('Ciclano');
    // })

// })