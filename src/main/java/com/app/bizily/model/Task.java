package com.app.bizily.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="name")
    private String name;

    @Column(name = "text")
    private String text;

    @Column(name = "day")
    private String day;

    @Column(name = "iscomplete")
    private boolean iscomplete;

    @Column(name="userid")
    private long userid;

    public Task() {}

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
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
        String unformatted = this.day;
        String date = unformatted.substring(8, 10);
        String month = unformatted.substring(5, 7);
        String year = unformatted.substring(0, 4);
        return date + "/" + month + "/" + year;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public boolean isComplete() {
        return iscomplete;
    }

    @JsonIgnore
    public boolean isNotComplete() {
        return !this.isComplete();
    }

    public void setComplete(boolean complete) {
        this.iscomplete = complete;
    }

    public Task(long id, String name, String text, String day, boolean iscomplete, long userid) {
        this.id = id;
        this.name = name;
        this.text = text;
        this.day = day;
        this.iscomplete = iscomplete;
        this.userid = userid;
    }
}
