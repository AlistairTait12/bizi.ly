package com.app.bizily.controller;

import com.app.bizily.model.Achievement;
import com.app.bizily.model.Task;
import com.app.bizily.repository.AchievementRepository;
import com.app.bizily.repository.TaskRepository;
import com.app.bizily.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/achievements")
public class AchievementController {
    @Autowired
    AchievementRepository achievementRepository;

    @Autowired
    TaskRepository taskRepository;


    @PostMapping("/check")
    public HttpStatus achievementCheck(@AuthenticationPrincipal UserDetailsImpl userDetails)  {
        List<Task> tasks = new ArrayList<>(taskRepository.findByUserid(userDetails.getId()));
        List<Task> filterCompleteTasks = tasks.stream()
                .filter(Task::isComplete).collect(Collectors.toList());
        int completedTasks = filterCompleteTasks.size();
        if (completedTasks == 1) {
            achievementRepository
                    .save(new Achievement("Gettin' Bizi With It!",
                            userDetails.getId(),
                            "/src/frontend/badges/bizi_ach.png"));
            return HttpStatus.OK;
        } else if (completedTasks == 5) {
            achievementRepository
                    .save(new Achievement("In the pipe, 5 by 5!",
                            userDetails.getId(),
                            "/src/frontend/badges/five_ach.png"));
            return HttpStatus.OK;
        } else {
            return HttpStatus.NO_CONTENT;
        }
    }

    @GetMapping("/currentuser")
    public ResponseEntity<List<Achievement>> getAllCurrentUserTasks(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        try {
            List<Achievement> usersAchievements = new ArrayList<>(achievementRepository.findByUserid(userDetails.getId()));
            return new ResponseEntity<>(usersAchievements, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
