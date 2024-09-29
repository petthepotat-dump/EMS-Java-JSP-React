
import React, {useEffect, useState} from 'react';

import EditEmployeeTable from '../components/EditEmployeeTable';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
}


const RemoveInfo: React.FC = () => {

    const onEdit = () => {
        console.log("Edit button clicked");
    }


  // State to store the list of employees
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [employees, setEmployees] = useState<Employee[]>([]);
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



    return (
        <div>
            <main>
                <h1>Edit Employees</h1>
                
                {/* create a section that shows the "editing object" */}
                <EditEmployeeTable employees={employees} onEdit={() => onEdit()}/>
            </main>
        </div>
    )

}

export default RemoveInfo;