package com.petthepotat.ems.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// Annotation to indicate this is a repository component
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // No need to define basic CRUD methods; they are inherited from JpaRepository

    // Custom query method: Find employees by department
    List<Employee> findByDepartment(String department);

}