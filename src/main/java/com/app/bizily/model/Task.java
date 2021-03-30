package com.app.bizily.model;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "text")
    private String text;

    @Column(name = "day")
    private String day;

    @Column(name = "reminder")
    private boolean reminder;

    @Column(name = "complete")
    private boolean complete;

    public Task() {

    }

    public long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public boolean isReminder() {
        return reminder;
    }

    public void setReminder(boolean reminder) {
        this.reminder = reminder;
    }

    public boolean isComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;

    }

    public Task(long id, String text, String day, boolean reminder, boolean complete) {
        this.id = id;
        this.text = text;
        this.day = day;
        this.reminder = reminder;
        this.complete = complete;
    }
}
