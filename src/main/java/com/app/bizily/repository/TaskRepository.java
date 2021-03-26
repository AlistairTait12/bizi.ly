package com.app.bizily.repository;

import com.app.bizily.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
//    List<Task> findByCompletedBy(boolean completedBy);
//
//    List<Task> findByTaskContaining(String task);
//
//    List<Task> findByCompleted(boolean completed);
}
