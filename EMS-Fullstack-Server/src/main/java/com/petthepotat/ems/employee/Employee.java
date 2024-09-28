package com.petthepotat.ems.employee;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

// Marks the class as an entity that maps to a table in the database
@Entity
@Table(name = "employees")  // Optional: Specifies the name of the table in the database
public class Employee {

    // Marks this field as the primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generates values for the primary key
    private Long id;

    private String name;
    private String position;
    private String department;

    // Default constructor required by JPA
    public Employee() {
    }

    // Constructor for easier instantiation
    public Employee(String name, String position, String department) {
        this.name = name;
        this.position = position;
        this.department = department;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}