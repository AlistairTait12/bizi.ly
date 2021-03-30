package com.app.bizily.controller;

import com.app.bizily.model.Task;
import com.app.bizily.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
@RequestMapping("/api")
public class TaskController {

    @Autowired
    TaskRepository taskRepository;

    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> getAllTutorials(@RequestParam(required = false) String task) {
        try {
            List<Task> tasks = new ArrayList<>();
            tasks.addAll(taskRepository.findAll());
            return new ResponseEntity<>(tasks, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//
//    @GetMapping("/tasks/{id}")
//    public ResponseEntity<Task> getTaskById(@PathVariable("id") long id) {
//        Optional<Task> taskData = taskRepository.findById(id);
//
//        if (taskData.isPresent()) {
//            return new ResponseEntity<>(taskData.get(), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    @PostMapping("/tasks")
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        try {
            Task _task = taskRepository
                    .save(new Task(task.getId(), task.getText(), task.getDay(), task.isReminder()));
            return new ResponseEntity<>(_task, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @PutMapping("/tasks/{id}")
//    public ResponseEntity<Task> updateTask(@PathVariable("id") long id, @RequestBody Task task) {
//        Optional<Task> taskData = taskRepository.findById(id);
//
//        if (taskData.isPresent()) {
//            Task _task = taskData.get();
//            _task.setTask(task.getTask());
//            _task.setCompletedBy(task.getCompletedBy());
//            _task.setCreatedOn(task.getCreatedOn());
//            _task.setCompleted(task.getCompleted());
//            _task.setStamp(task.getStamp());
//            return new ResponseEntity<>(taskRepository.save(_task), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<HttpStatus> deleteTask(@PathVariable("id") long id) {
        try {
            taskRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//
//    @DeleteMapping("/tasks")
//    public ResponseEntity<HttpStatus> deleteAllTasks() {
//        try {
//            taskRepository.deleteAll();
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//
//    }
//
//    @GetMapping("/tasks/completed")
//    public ResponseEntity<List<Task>> findByCompleted() {
//        try {
//            List<Task> tasks = taskRepository.findByCompleted(true);
//
//            if (tasks.isEmpty()) {
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//            return new ResponseEntity<>(tasks, HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}