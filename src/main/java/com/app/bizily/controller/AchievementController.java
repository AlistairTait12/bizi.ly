package com.app.bizily.controller;

import com.app.bizily.model.Achievement;
import com.app.bizily.repository.AchievementRepository;
import com.app.bizily.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/achievements")
public class AchievementController {
    @Autowired
    AchievementRepository achievementRepository;

    // an API call that checks the task database for a given user and gets
    // the total amount of completed tasks, sets completedTasks and then
    // goes through if/else statements that check if the total matches -
    // if the total matches, add an entry to the achievements database with the
    // name of the achievement and the users id:
    //
    // for example, completing 1 task (i.e. a first task) awards the achievement
    // "gettin' bizi with it" (Sorry I wrote this at 5am I couldn't sleep)
    //
    // id | name                 | userid | badge
    //  1 | gettin' bizi with it | 2      | "/src/frontend/badges/bizi_ach.png"
    //  2 | gettin' bizi with it | 5      | "/src/frontend/badges/bizi_ach.png"
    //
    // the GET mapping will take the user id of the user currently in local storage
    // and return all the achievements related to them - the frontend will need an
    // achievements component that renders these (probably similar to the way tasks
    // handled?)
    //
    // This method will get called when the user does something that could trigger
    // an achievement - maybe just completing a task initially - this will have to be
    // handled by the front end services and just make the call (check the user data
    // services test call for an example)

    @PostMapping("/test")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public HttpStatus achievementCheck(@AuthenticationPrincipal UserDetailsImpl userDetails)  {
        int completedTasks = achievementRepository.findAll().size();

        // using the size of the tasks table as a proxy for now - this will use the tasks repository
        // to find all completed tasks that match the users id and use that number to decide if
        // the user is awarded the achievement

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
            return HttpStatus.OK;
        }
    }

// This method can probably just use the @AuthenticationPrincipal to retrieve just the user achievements
// and we can probably also use that on the task table?
//
//    @GetMapping("/{id}")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
//    public ResponseEntity<Achievement> getAchievementsByUserId(@PathVariable("userid") long userid) {
//        Optional<Achievement> achievementData = achievementRepository.findById(userid);
//
//        return achievementData.map(achievement -> new ResponseEntity<>(achievement, HttpStatus.OK))
//                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }


}
