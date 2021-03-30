package com.app.bizily.controller;

import com.app.bizily.model.Achievement;
import com.app.bizily.repository.AchievementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/achievements")
public class AchievementController {
    @Autowired
    AchievementRepository achievementRepository;

    private int completedTasks;

    // method that checks the task database for a given user and gets
    // the total amount of completed tasks, sets completedTasks and then
    // goes through a list of switch statements that check if the total matches
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
    // an achievement - maybe just completing a task initially.

    public ResponseEntity<List<Achievement>> achievementCheck(@PathVariable("id") long id) {
        // does this actually need to return an Entity? It probably just needs the user id
        // so maybe this can be void - not sure path variable will be usable either.

        completedTasks = achievementRepository.findByUserId(id).size();
        // what I want this to do is search the achievement database by the userid, generate a list
        // of all those items, and then set completedTasks to equal the size of that list
        // I think that id might need to be userid though

        switch(completedTasks) {
            case 1:
                // create an entry in the achievements database for the achievement for one completed task
                try {
                    // not sure the new achievement needs to be declared and then get's, maybe just put it straight into the
                    // save
                    Achievement achievement = new Achievement("Gettin Bizi With It!",
                            id,
                            "/src/frontend/badges/bizi_ach.png");
                     achievementRepository
                            .save(new Achievement(achievement.getName(), achievement.getUserId(), achievement.getBadge()));
                } catch (Exception e) {
                    return null;
                }
                break;
            case 5:
                // create an entry in the achievements database for the achievement for one completed task
                try {
                    Achievement achievement = new Achievement("In the pipe, 5 by 5!",
                            id,
                            "/src/frontend/badges/five_ach.png");
                    achievementRepository
                            .save(new Achievement(achievement.getName(), achievement.getUserId(), achievement.getBadge()));
                } catch (Exception e) {
                    return null;
                }
                break;
            default:
                break;
        }


        return new ResponseEntity<>(HttpStatus.I_AM_A_TEAPOT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Achievement> getAchievementsByUserId(@PathVariable("userid") long userid) {
        Optional<Achievement> achievementData = achievementRepository.findById(userid);

        return achievementData.map(achievement -> new ResponseEntity<>(achievement, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


}
