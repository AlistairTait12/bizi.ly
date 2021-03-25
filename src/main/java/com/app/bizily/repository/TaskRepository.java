package com.app.bizily.repository;

import com.app.bizily.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByCompletedBy(boolean completedBy);

    List<Task> findByTaskContaining(String task);

    List<Task> findByCompleted(boolean completed);
}
