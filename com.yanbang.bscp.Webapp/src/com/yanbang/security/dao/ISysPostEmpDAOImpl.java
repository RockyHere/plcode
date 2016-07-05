package com.yanbang.security.dao;


import java.util.Collection;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;
import com.yanbang.security.entity.SysPostEmp;
import com.yanbang.security.model.PostEmpModel;
import com.yanbang.util.AssertUtil;

@Repository
@Transactional
public class ISysPostEmpDAOImpl extends BaseDAO implements ISysPostEmpDAO {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<PostEmpModel> queryPostByEmp(String empId) {
		// TODO 自动生成的方法存根
		String strSQL = "select A.*,B.POSTCODE POSTCODE,B.POSTNAME POSTNAME,B.ORGCODE ORGCODE,B.ORGNAME ORGNAME from SYS_POSTEMP A left join SYS_POST B on A.POSTID=B.UUID where A.EMPID='"+empId+"'";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(PostEmpModel.class));
	}

	@Override
	public void insByPostEmp(SysPostEmp postEmp) {
		// TODO 自动生成的方法存根
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("insert into SYS_POSTEMP(uuid,empId,postId) values('")
		      .append(postEmp.getUuid()).append("','")
		      .append(postEmp.getEmpId()).append("','")
		      .append(postEmp.getPostId()).append("')");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void updByPostEmp(SysPostEmp postEmp) {
		// TODO 自动生成的方法存根
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update SYS_POSTEMP set ")
		      .append("empId='").append(postEmp.getEmpId())
		       .append("',postId='").append(postEmp.getPostId())
		      .append("' where uuid='").append(postEmp.getUuid()).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delByPostEmp(SysPostEmp postEmp) {
		// TODO 自动生成的方法存根
		if(AssertUtil.isVal(postEmp)){
			this.delByPk(postEmp.getUuid());
		}
	}

	@Override
	public void delByPk(String uuid) {
		// TODO 自动生成的方法存根
		String strSQL = "delete SYS_POSTEMP where uuid='"+uuid+"'";
		this.getJdbcTemplate().update(strSQL);
	}
}
