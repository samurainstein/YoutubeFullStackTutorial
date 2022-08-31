package com.ericmatelyan.YoutubeFullStackTutorial.Controller;

import java.nio.file.ReadOnlyFileSystemException;
import java.util.List;

import com.ericmatelyan.YoutubeFullStackTutorial.Exception.ResourceNotFoundException;
import com.ericmatelyan.YoutubeFullStackTutorial.Model.Employee;
import com.ericmatelyan.YoutubeFullStackTutorial.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
              .orElseThrow(() -> new ResourceNotFoundException("Employee not found with Id: " + id));
        return ResponseEntity.ok(employee);
    }
}
