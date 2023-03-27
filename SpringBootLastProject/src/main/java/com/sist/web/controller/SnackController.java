package com.sist.web.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.web.dao.SnackDAO;
import com.sist.web.entity.JejuFindVO;
import com.sist.web.entity.JejuFoodEntity;
import com.sist.web.entity.JejuPageVO;
import com.sist.web.entity.RecipeEntity;
import com.sist.web.entity.SnackEntity;
import com.sist.web.entity.SnackFindVO;

@RestController
@CrossOrigin("http://localhost:3000")
public class SnackController {
	
	@Autowired
	private SnackDAO dao;
	
	@GetMapping("snack/snack1_top3")
	public List<SnackEntity> snack1_top3() {
		List<SnackEntity> list=  dao.snack1Top3Data();
		return list;
	}
	@GetMapping("snack/snack2_top3")
	public List<SnackEntity> snack2_top3() {
		List<SnackEntity> list=  dao.snack2Top3Data();
		return list;
	}
	@GetMapping("snack/snack3_top3")
	public List<SnackEntity> snack3_top3() {
		List<SnackEntity> list=  dao.snack3Top3Data();
		return list;
	}
	@GetMapping("snack/snack4_top3")
	public List<SnackEntity> snack4_top3() {
		List<SnackEntity> list=  dao.snack4Top3Data();
		return list;
	}
	@GetMapping("snack/snack5_top3")
	public List<SnackEntity> snack5_top3() {
		List<SnackEntity> list=  dao.snack5Top3Data();
		return list;
	}
	@GetMapping("snack/snack6_top3")
	public List<SnackEntity> snack6_top3() {
		List<SnackEntity> list=  dao.snack6Top3Data();
		return list;
	}
	@GetMapping("snack/snack7_top3")
	public List<SnackEntity> snack7_top3() {
		List<SnackEntity> list=  dao.snack7Top3Data();
		return list;
	}
	@GetMapping("snack/snackFooter_top6")
	public List<SnackEntity> snackFooter_top6() {
		List<SnackEntity> list=  dao.snackFooterData();
		return list;
	}
	
	@GetMapping("snack/snackFooter2_top6")
	public List<SnackEntity> snackFooter2_top6() {
		List<SnackEntity> list=  dao.snackFooterData2();
		return list;
	}
	
	@GetMapping("snack/snack1_list_react")
	   public List<SnackEntity> snack1_list(String page)
	   {
	      if(page==null)
	         page="1";
	      int curpage=Integer.parseInt(page);
	      int rowSize=20;
	      int start =(rowSize*curpage)-rowSize;
	      
	      List<SnackEntity> list=dao.snack1ListData(start);
	      
	      return list;
	   }
	   
	   @GetMapping("snack/snack1_page_react")
	   public JejuPageVO recipePage(String page)
	   {
	      if(page == null)
	            page = "1";
	         int curpage = Integer.parseInt(page);
	         int totalpage = dao.snack1TotalPage();
	         
	         final int BLOCK = 5;
	         int startPage = ((curpage-1)/BLOCK*BLOCK)+1;
	         int endPage = ((curpage-1)/BLOCK*BLOCK)+BLOCK;
	         
	         if(endPage>totalpage)
	            endPage = totalpage;
	         
	         JejuPageVO vo=new JejuPageVO();
	         vo.setCurpage(curpage);
	         vo.setEndPage(endPage);
	         vo.setStartPage(startPage);
	         vo.setTotalpage(totalpage);
	         return vo;
	        
	   }
	   
	   @GetMapping("snack/snack2_list_react")
	   public List<SnackEntity> snack2_list(String page)
	   {
		   if(page==null)
			   page="1";
		   int curpage=Integer.parseInt(page);
		   int rowSize=20;
		   int start =(rowSize*curpage)-rowSize;
		   
		   List<SnackEntity> list=dao.snack2ListData(start);
		   
		   return list;
	   }
	   
	   @GetMapping("snack/snack2_page_react")
	   public JejuPageVO recipePage2(String page)
	   {
		   if(page == null)
			   page = "1";
		   int curpage = Integer.parseInt(page);
		   int totalpage = dao.snack2TotalPage();
		   
		   final int BLOCK = 5;
		   int startPage = ((curpage-1)/BLOCK*BLOCK)+1;
		   int endPage = ((curpage-1)/BLOCK*BLOCK)+BLOCK;
		   
		   if(endPage>totalpage)
			   endPage = totalpage;
		   
		   JejuPageVO vo=new JejuPageVO();
		   vo.setCurpage(curpage);
		   vo.setEndPage(endPage);
		   vo.setStartPage(startPage);
		   vo.setTotalpage(totalpage);
		   return vo;
		   
	   }
	   
	   @GetMapping("snack/snack3_list_react")
	   public List<SnackEntity> snack3_list(String page)
	   {
		   if(page==null)
			   page="1";
		   int curpage=Integer.parseInt(page);
		   int rowSize=20;
		   int start =(rowSize*curpage)-rowSize;
		   
		   List<SnackEntity> list=dao.snack3ListData(start);
		   
		   return list;
	   }
	   
	   @GetMapping("snack/snack3_page_react")
	   public JejuPageVO recipePage3(String page)
	   {
		   if(page == null)
			   page = "1";
		   int curpage = Integer.parseInt(page);
		   int totalpage = dao.snack3TotalPage();
		   
		   final int BLOCK = 5;
		   int startPage = ((curpage-1)/BLOCK*BLOCK)+1;
		   int endPage = ((curpage-1)/BLOCK*BLOCK)+BLOCK;
		   
		   if(endPage>totalpage)
			   endPage = totalpage;
		   
		   JejuPageVO vo=new JejuPageVO();
		   vo.setCurpage(curpage);
		   vo.setEndPage(endPage);
		   vo.setStartPage(startPage);
		   vo.setTotalpage(totalpage);
		   return vo;
		   
	   }
	   
	   @GetMapping("snack/snack_detail_react")
	   public SnackEntity snack_detail(int no) {
		   SnackEntity vo = dao.findByNo(no);
		   return vo;
	   }
	   
	   @GetMapping("snack/snack_find_react")
	   public List<SnackFindVO> snack_find(String page, String name) {
		   List<SnackFindVO> list = new ArrayList<SnackFindVO>();
		   if(page == null)
			   page = "1";
		   int curpage = Integer.parseInt(page);
		   int start = (curpage * 20) - 20;
		   List<SnackEntity> sList = dao.snackFindData(name, start);
		   int totalpage = dao.snackFindTotalPage(name);
		   int i = 0;
		   for(SnackEntity svo:sList) {
			   SnackFindVO vo = new SnackFindVO();
			   vo.setNo(svo.getNo());
			   vo.setImage(svo.getImage());
			   vo.setName(svo.getName());
			   vo.setCost(svo.getCost());
			   vo.setPoint(svo.getPoint());
			   if(i == 0) {
				   vo.setCurpage(curpage);
				   vo.setTotalpage(totalpage);
			   }
			   list.add(vo);
			   i++;
		   }
		   return list;
	   }
}
