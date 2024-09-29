
import React from 'react';

import EmployeeForm from '../components/EmployeeForm';



const AddInfo: React.FC = () => {



    return (
        <div>
            <main>
                <h1>Add A New Employee</h1>
                <div className="employee-form-container">
                    <EmployeeForm/>
                </div>

            </main>
        </div>
    )

}

export default AddInfo;