package com.userservice.entity;

import jakarta.persistence.Embeddable;

@Embeddable
public class Role {
	
	private Long id;
	
	private String name;
	
	public Role() {}

	public Role(String name) {
		super();
		this.name = name;
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
	
	
}
