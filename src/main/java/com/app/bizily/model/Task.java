package com.app.bizily.model;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "task")
    private String task;

    @Column(name = "createdOn")
    private String createdOn;

    @Column(name = "completedBy")
    private String completedBy;

    @Column(name = "completed")
    private boolean completed;

    @Column(name = "stamp")
    private String stamp;

    public Task() {

    }

    public Task(String task, String createdOn, boolean completed) {
        this.task = task;
        this.createdOn = createdOn;
        this.completed = completed;
    }

    public long getId() {
        return id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getCompletedBy() {
        return completedBy;
    }

    public void setCompletedBy(String completedBy) {
        this.completedBy = completedBy;
    }

    public String getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(String createdOn) {
        this.createdOn = createdOn;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean isCompleted) {
        this.completed = isCompleted;
    }

    public String getStamp() {
        return stamp;
    }

    public void setStamp(String stamp) {
        this.stamp = stamp;
    }

    @Override
    public String toString() {
        return "Tutorial [id=" + id + ", task=" + task + ", createdOn=" + createdOn + ", completed=" + completed + "]";
    }
}
