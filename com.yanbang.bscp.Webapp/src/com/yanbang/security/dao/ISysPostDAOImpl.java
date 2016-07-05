package com.yanbang.security.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.security.entity.SysPost;
import com.yanbang.util.AssertUtil;
import com.yanbang.util.ConstantMethod;

@Repository
@Transactional
public class ISysPostDAOImpl extends BaseDAO implements ISysPostDAO {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public SysPost findByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("select * from sys_Post where uuid='"+uuid+"'")
		.append(" and useFlag='"+ConstantMethod.FLAG_1+"'" );
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),new BeanPropertyRowMapper(SysPost.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysPost> findAll() {
		String strSQL = "select * from SYS_POST where useFlag='"+ConstantMethod.FLAG_1+"'";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysPost.class));
	}

	@Override
	public void insByPost(SysPost post) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("insert into SYS_POST(uuid,postCode,postName,orgId,orgCode,orgName,updateUser,updateTime,comments,useFlag) values('")
		      .append(post.getUuid()).append("','")
		      .append(post.getPostCode()).append("','")
		      .append(post.getPostName()).append("','")
		      .append(post.getOrgId()).append("','")
		      .append(post.getOrgCode()).append("','")
		      .append(post.getOrgName()).append("','")
		      .append(post.getUpdateUser()).append("','")
		      .append(post.getUpdateTime()).append("','")
		      .append(post.getComments()).append("','")
		      .append(post.getUseFlag()).append("')");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void updByPost(SysPost post) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update SYS_POST set ")
		      .append("postCode='").append(post.getPostCode())
		      .append("',postName='").append(post.getPostName())
              .append("',orgId='").append(post.getOrgId())
              .append("',orgCode='").append(post.getOrgCode())
		      .append("',orgName='").append(post.getOrgName())
              .append("',updateUser='").append(post.getUpdateUser())
              .append("',updateTime='").append(post.getUpdateTime())
              .append("',comments='").append(post.getComments())
              .append("',useFlag='").append(post.getUseFlag())            
		      .append("' where uuid='").append(post.getUuid()).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update SYS_POST set useFlag='").append(ConstantMethod.FLAG_0)
		 .append("' where uuid='").append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delByPk(String uuid,String updateUser,String updateTime) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update SYS_POST set useFlag='").append(ConstantMethod.FLAG_0)
		 .append("',updateUser='").append(updateUser)
         .append("',updateTime='").append(updateTime)
		 .append("' where uuid='").append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}
	
	@Override
	public void delByPost(SysPost post) {
		if(AssertUtil.isVal(post)){
			this.delByPk(post.getUuid(),post.getUpdateUser(),post.getUpdateTime());
		}
	}

	/**
	 * 页面查询条件sql
	 * @param post
	 * @return
	 */
	private String createCondition(SysPost post) {
		StringBuffer condition = new StringBuffer(" and  useFlag='"+ConstantMethod.FLAG_1+"'");
		//若无组织机构id，则不查询岗位
		if (AssertUtil.isVal(post.getOrgId())) {
			condition.append(" and orgId = '").append(post.getOrgId())
					.append("'");
		}else{
			condition.append(" and 1=2");
			return condition.toString();
		}
		if (AssertUtil.isVal(post.getPostCode())) {
			condition.append(" and postCode like'%").append(post.getPostCode())
					.append("%'");
		}
		if (AssertUtil.isVal(post.getPostName())) {
			condition.append(" and postName like '%").append(post.getPostName())
					.append("%'");
		}
		condition.append(" order by updatetime asc");
		return condition.toString();
	}

	@SuppressWarnings({ "deprecation","unchecked", "rawtypes" })
	@Override
	public Page<SysPost> findAllPost(SysPost post, Page<SysPost> page) {
		String strSQL = "select * from SYS_POST where 1=1 "
				+ this.createCondition(post);
		String strCountSQL = "select count(*) from SYS_POST where 1=1 "
				+ this.createCondition(post);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<SysPost> list = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(SysPost.class));
		page.setPageResult(list);
		return page;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysPost> findMutiCondition(SysPost post) {
		String strSQL = "select * from SYS_POST where 1=1 "
				+ this.createCondition(post);
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysPost.class));
	}
}
