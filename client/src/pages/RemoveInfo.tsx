
import React from 'react';

import EmployeeTable from '../components/EmployeeTable';



const RemoveInfo: React.FC = () => {



    return (
        <div>
            <main>
                <h1>Remove Employees</h1>
                <EmployeeTable show_delete={true} />

            </main>
        </div>
    )

}

export default RemoveInfo;