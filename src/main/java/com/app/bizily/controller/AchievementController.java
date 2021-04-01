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

        checkAchievement(userDetails.getId(), 1, "Gettin' Bizi With It!","/src/frontend/badges/one_ach.png" );
        checkAchievement(userDetails.getId(), 5, "In the pipe, 5 by 5!","/src/frontend/badges/five_ach.png" );
        checkAchievement(userDetails.getId(), 7, "Lucky number s(l)even!","/src/frontend/badges/seven_ach.png" );
        checkAchievement(userDetails.getId(), 10,"Bizi beaver!","/src/frontend/badges/ten_ach.png" );
        checkAchievement(userDetails.getId(), 12,"Leave some for the rest of us!", "/src/frontend/badges/eleven_ach.png");

        return HttpStatus.OK;
    }

    public void checkAchievement(long userid, int completed, String achievement, String badge) {
        List<Task> tasks = new ArrayList<>(taskRepository.findByUserid(userid));
        List<Task> filterCompleteTasks = tasks.stream()
                .filter(Task::isComplete).collect(Collectors.toList());
        int completedTasks = filterCompleteTasks.size();

        List<Achievement> achievements = new ArrayList<>(achievementRepository.findByUserid(userid));

        if ((completedTasks >= completed) && !containsAchievement(achievements, achievement)) {
            achievementRepository
                    .save(new Achievement(achievement,
                            userid,
                            badge));
        }
    }

    public boolean containsAchievement(final List<Achievement> list, final String name){
        return list.stream().anyMatch(o -> o.getName().equals(name));
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
