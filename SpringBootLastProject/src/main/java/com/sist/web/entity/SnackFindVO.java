package com.sist.web.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SnackFindVO {
	private int no;
	private String image;
	private String name;
	private String cost;
	private String point;
	private int curpage;
	private int totalpage;
	
}
