package com.app.bizily.controller;

import com.app.bizily.model.Task;
import com.app.bizily.repository.TaskRepository;
import com.app.bizily.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    TaskRepository taskRepository;

    @GetMapping("/currentuser")
    public ResponseEntity<List<Task>> getAllCurrentUserTasks(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        try {
            List<Task> usersTasks = new ArrayList<>(taskRepository.findByUserid(userDetails.getId()));
            return new ResponseEntity<>(usersTasks, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        try {
            Task _task = taskRepository
                    .save(new Task(task.getId(), task.getName(), task.getText(), task.getDay(), task.isComplete(), task.getUserid()));
            return new ResponseEntity<>(_task, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<HttpStatus> updateTask(@PathVariable("id") long id) {
        Optional<Task> taskData = taskRepository.findById(id);

        if (taskData.isPresent()) {
            Task _task = taskData.get();
            _task.setComplete(!_task.isComplete());
            taskRepository.save(_task);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteTask(@PathVariable("id") long id) {
        try {
            taskRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/complete")
    public ResponseEntity<List<Task>> findCompleteByUser(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        try {
            List<Task> tasks = new ArrayList<>(taskRepository.findByUserid(userDetails.getId()));
            List<Task> completedTasks = tasks.stream()
                    .filter(Task::isComplete).collect(Collectors.toList());
            if (tasks.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(completedTasks, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/notcomplete")
    public ResponseEntity<List<Task>> findNotCompleteByUser(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        try {
            List<Task> tasks = new ArrayList<>(taskRepository.findByUserid(userDetails.getId()));
            List<Task> completedTasks = tasks.stream()
                    .filter(Task::isNotComplete).collect(Collectors.toList());
            if (tasks.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(completedTasks, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
