import React, { useState, useEffect } from 'react';
import './EmployeeTable.css'; // Optional: Add styles for the employee table

// Define the structure of an employee object
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
}

interface TableProps {
    show_delete: boolean;
}

const EmployeeTable: React.FC<TableProps> = ({show_delete}) => {

  // State to store the list of employees
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the employee data from the API when the component mounts
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8080/api/employees');

        console.log(response);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setEmployees(data); // Update state with fetched employee data
      } catch (err: any) {
        setError(err.message); // Set error message if the fetch fails
      } finally {
        setLoading(false); // Set loading to false after the fetch completes
      }
    };

    fetchEmployees();
  }, []); // Empty dependency array means this runs only once on mount

  // Render loading, error, or the employee table
  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>Error fetching employees: {error}</p>;

  const handleDelete = (id: number) => {
    console.log(id);

    // send a request to the server to remove a specific ID??
    fetch(`http://localhost:8080/api/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Basic ' + btoa('admin:adminpass'),
        'Content-Type': 'application/json', 
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response;
      })
      .then((data) => {
        console.log(data);
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        );
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
    })
  }

  return (
    <div className="employee-table-container">
        <div>
            <h2>Employee List</h2>
        </div>
        <div style={{display: `flex`}}>
            <table className="employee-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Position</th>
                    {show_delete && <th>Delete</th>}
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.firstName + " " + employee.lastName}</td>
                      <td>{employee.department}</td>
                      <td>{employee.position}</td>
                      {show_delete && <td><button className="delete-button" onClick={() => {
                          handleDelete(employee.id);
                      }}>Delete</button></td>}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default EmployeeTable;