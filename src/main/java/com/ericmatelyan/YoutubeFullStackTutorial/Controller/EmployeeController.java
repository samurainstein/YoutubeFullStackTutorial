package com.ericmatelyan.YoutubeFullStackTutorial.Controller;

import java.util.List;

import com.ericmatelyan.YoutubeFullStackTutorial.Model.Employee;
import com.ericmatelyan.YoutubeFullStackTutorial.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
