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

    @Column(name = "stamp")
    private String stamp;

    @Column(name = "completed")
    private boolean completed;

    public Task() {

    }

    public Task(String task, String createdOn, String completedBy, String stamp, boolean completed) {
        this.task = task;
        this.createdOn = createdOn;
        this.completedBy = completedBy;
        this.stamp = stamp;
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

    public String getStamp() {
        return stamp;
    }

    public void setStamp(String stamp) {
        this.stamp = stamp;
    }

    public boolean getCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        return "Task [id=" + id + ", task=" + task + ", completedBy=" + completedBy + ", createdOn=" + createdOn + ", stamp=" + stamp + ", completed=" + completed + "]";
    }
}
