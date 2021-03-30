package com.app.bizily.repository;

import com.app.bizily.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
//    default Iterable<Object> findByTaskContaining(List<Task> tasks) {
//        return null;
//    }

    //    List<Task> findByCompletedBy(boolean completedBy);
//
//    List<Task> findByTaskContaining(String task);

    //
//    List<Task> findByCompleted(boolean completed);
}
