

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

// include .css file
import './EmployeeForm.css';




const EmployeeForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        position: '',
        department: ''
    });

    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        console.log(event);

        // input checking
        if (name.trim() == 'firstName' || name.trim() == 'lastName') {
            if (value.split(' ').length > 1) {
                setError('First Name cannot contain spaces.');
                return;
            }
        }

        setFormData({
            ...formData,
            [name]: value, // Correctly update the formData based on the name attribute
        });
    };

    // verification that input is valid
    const validate = () => {
        // check if entries area valid
        if (!formData.firstName.trim()) {
            setError('First Name is required');
            return false;
        }
        if (!formData.lastName.trim()) {
            setError('Last Name is required');
            return false;
        }
        if (!formData.position.trim()) {
            setError('Position is required');
            return false;
        }
        if (formData.department.trim() === 'Select Department') {
            setError('Department is required');
            return false;
        }
        return true;
    }

    // handle form submission
    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (validate()) {
            // add employee to database
            console.log(formData);
            setError('');

            // create request to server
            fetch('http://localhost:8080/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then((response) => {
                if (response.ok) {
                    console.log('Employee added successfully');
                    // clear form
                    setFormData({
                        firstName: '',
                        lastName: '',
                        position: '',
                        department: ''
                    });
                    // redirect to home page
                    navigate('/');
                } else {
                    console.log('Error adding employee');
                    // TODO - create error ui notification thing
                }
            })

            // redirect to home page

        } else {
            // create a popup (not window) that says the error
            console.log(error);
            // TODO - create error ui notification thing
        }
    }

    return (
        <>
            {/* Create a form to add new info */}
            <form className="employee-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName" // Add name attribute
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName" // Add name attribute
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    id="position"
                    name="position" // Add name attribute
                    placeholder="Position"
                    value={formData.position}
                    onChange={handleChange}
                />

                <label htmlFor="department">Department</label>
                <select
                    id="department"
                    name="department" // Add name attribute
                    value={formData.department}
                    onChange={handleChange}
                >
                    <option value="Select Department">Select Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="R&D and Product">R&D and Product</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Legal">Legal</option>
                    <option value="Executive Team">Executive Team</option>
                    <option value="Finance/Accounting">Finance/Accounting</option>
                    <option value="Operations">Operations</option>
                    <option value="Customer Service">Customer Service</option>
                </select>

                <button type="submit">Add Employee</button>
            </form>
        </>
    )
}


export default EmployeeForm;