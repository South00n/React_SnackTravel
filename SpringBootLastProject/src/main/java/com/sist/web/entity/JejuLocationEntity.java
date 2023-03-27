package com.sist.web.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/*
	TITLE text 
	URL text 
	POSTER text 
	CONTENT text 
	PRICE text 
	PRICE2 int 
	IMAGE text 
	INFO text 
	NO int 
	ADDR text 
	TYPE text 
	HIT int
 */
@Entity
@Table(name="jeju_location")
@Getter
@Setter
public class JejuLocationEntity {
	@Id
	private int no;
	private int hit;
	private int price2;
	private String title;
	private String url;
	private String poster;
	private String content;
	private String price;
	private String image;
	private String info;
	private String addr;
	private String type;
}
