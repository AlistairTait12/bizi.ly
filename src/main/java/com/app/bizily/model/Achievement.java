package com.app.bizily.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="achievements")
public class Achievement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @Column(name = "userid")
    private long userid;

    @NotBlank
    @Column(name = "badge")
    private String badge;

    public Achievement() {}

    public Achievement(@NotBlank String name, long userid, @NotBlank String badge) {
        this.name = name;
        this.userid = userid;
        this.badge = badge;
    }

    public String getBadge() {
        return badge;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getUserId() {
        return userid;
    }

    public void setUserId(long usedId) {
        this.userid = usedId;
    }
}