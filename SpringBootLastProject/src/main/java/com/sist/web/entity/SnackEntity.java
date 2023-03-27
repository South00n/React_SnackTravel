package com.sist.web.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/*
	NO int 
	IMAGE text 
	NAME text 
	MANU text 
	ORIGIN text 
	COST text 
	POINT text 
	CONTENT text 
	TYPE int
 */
@Entity
@Table(name="snack")
@Getter
@Setter
public class SnackEntity {
	@Id
	private int no;
	private int type;
	private String image;
	private String name;
	private String manu;
	private String origin;
	private String cost;
	private String point;
	private String content;
}
