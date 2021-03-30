package com.app.bizily.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="achievements",
        uniqueConstraints = {
        @UniqueConstraint(columnNames = "name")
})
public class Achievement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "userId")
    private long userId;

    @NotBlank
    @Column(name = "badge")
    private String badge;

    public Achievement() {}

    public Achievement(@NotBlank String name, long userId, @NotBlank String badge) {
        this.name = name;
        this.userId = userId;
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
        return userId;
    }

    public void setUserId(long usedId) {
        this.userId = usedId;
    }
}
