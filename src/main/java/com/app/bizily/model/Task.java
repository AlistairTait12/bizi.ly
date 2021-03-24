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
}
