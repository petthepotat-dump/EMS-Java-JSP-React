import React from 'react';

import './EmployeeTable.css'; // Optional: Add styles for the employee table


interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
}

interface EditEmployeeTableProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void; // Callback for when edit is triggered
}

const EditEmployeeTable: React.FC<EditEmployeeTableProps> = ({ employees, onEdit }) => {
  return (
    <div className="edit-employee-table-container">
      <h2>Edit Employee List</h2>
      <table className="edit-employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>
                <button onClick={() => onEdit(employee)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditEmployeeTable;