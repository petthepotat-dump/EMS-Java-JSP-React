package com.petthepotat.ems.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")  // Base URL for all endpoints in this controller
public class EmployeeController {


    @Autowired
    private EmployeeService employeeService;  // Service layer to handle business logic

    // Example endpoint to get all employees (awaits a GET request from the frontend)
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // Example endpoint to add a new employee (awaits a POST request with employee data)
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        System.out.println(employee);
        return employeeService.addEmployee(employee);
    }

    // Example endpoint to update an employee (awaits a PUT request with employee data)
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }

    // Example endpoint to delete an employee (awaits a DELETE request)
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
    }
}