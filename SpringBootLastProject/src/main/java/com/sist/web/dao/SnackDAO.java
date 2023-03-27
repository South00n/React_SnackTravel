package com.sist.web.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sist.web.entity.JejuFoodEntity;
import com.sist.web.entity.JejuLocationEntity;
import com.sist.web.entity.SnackEntity;

@Repository
public interface SnackDAO extends JpaRepository<SnackEntity, Integer> {
	@Query(value="SELECT * FROM snack " 
	        +"WHERE type = 1 LIMIT 0,3",nativeQuery = true)
	public List<SnackEntity> snack1Top3Data();
	
	@Query(value="SELECT * FROM snack " 
			+"WHERE type = 2 LIMIT 0,3",nativeQuery = true)
	public List<SnackEntity> snack2Top3Data();
	
	@Query(value="SELECT * FROM snack " 
			+"WHERE type = 3 ORDER BY no DESC LIMIT 0,3",nativeQuery = true)
	public List<SnackEntity> snack3Top3Data();
	
	@Query(value="SELECT * FROM snack " 
			+"WHERE type = 4 LIMIT 0,3",nativeQuery = true)
	public List<SnackEntity> snack4Top3Data();
	
	@Query(value="SELECT * FROM snack " 
			+"WHERE type = 5 LIMIT 0,3",nativeQuery = true)
	public List<SnackEntity> snack5Top3Data();
	
	@Query(value="SELECT * FROM snack " 
			+"WHERE type = 6 LIMIT 0,3",nativeQuery = true)
	public List<SnackEntity> snack6Top3Data();
	
	@Query(value="SELECT * FROM snack " 
			+"WHERE type = 7 LIMIT 0,3",nativeQuery = true)
	public List<SnackEntity> snack7Top3Data();
	
	@Query(value="SELECT * FROM snack " 
			+"WHERE type = 1 OR type = 2 LIMIT 0,6",nativeQuery = true)
	public List<SnackEntity> snackFooterData();
	
	@Query(value="SELECT * FROM snack "
			+ "WHERE type = 4 ORDER BY no DESC "
			+ "LIMIT 0,6", nativeQuery = true)
	public List<SnackEntity> snackFooterData2();
  
	@Query(value="SELECT * FROM snack "
	  	    + "WHERE type=1 OR type=2 ORDER BY no DESC LIMIT :start,20", nativeQuery = true)
	public List<SnackEntity> snack1ListData(@Param("start") Integer start);
	  
	@Query(value="SELECT CEIL(COUNT(*)/20.0) FROM snack WHERE type=1 OR type=2", nativeQuery = true)
	public int snack1TotalPage();
	
	@Query(value="SELECT * FROM snack "
	  	    + "WHERE type=3 OR type=4 OR type=5 ORDER BY no DESC LIMIT :start,20", nativeQuery = true)
	public List<SnackEntity> snack2ListData(@Param("start") Integer start);
	  
	@Query(value="SELECT CEIL(COUNT(*)/20.0) FROM snack WHERE type=3 OR type=4 OR type=5", nativeQuery = true)
	public int snack2TotalPage();
	
	@Query(value="SELECT * FROM snack "
	  	    + "WHERE type=6 OR type=7 ORDER BY no DESC LIMIT :start,20", nativeQuery = true)
	public List<SnackEntity> snack3ListData(@Param("start") Integer start);
	  
	@Query(value="SELECT CEIL(COUNT(*)/20.0) FROM snack WHERE type=6 OR type=7", nativeQuery = true)
	public int snack3TotalPage();
	
	public SnackEntity findByNo(@Param("no") Integer no);
	
	@Query(value="SELECT * FROM snack "
   			+ "WHERE name LIKE CONCAT('%',:name,'%') "
   			+ "LIMIT :start, 20",nativeQuery = true)
    public List<SnackEntity> snackFindData(@Param("name") String name, @Param("start") Integer start);
   
    @Query(value="SELECT CEIL(COUNT(*)/20.0) FROM snack "
  			+ "WHERE name LIKE CONCAT('%',:name,'%') ",nativeQuery = true)
    public int snackFindTotalPage(@Param("name") String name);
}
