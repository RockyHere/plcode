package com.yanbang.security.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.security.entity.SysEmployee;
import com.yanbang.security.model.EmpModel;
import com.yanbang.util.AssertUtil;
import com.yanbang.util.ConstantMethod;

@Repository
@Transactional

public class ISysEmployeeDAOImpl extends BaseDAO implements ISysEmployeeDAO {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public SysEmployee findByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("select * from Sys_Employee where uuid='"+uuid+"'")
		.append(" and useFlag='"+ConstantMethod.FLAG_1+"'");
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),new BeanPropertyRowMapper(SysEmployee.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysEmployee> findAll() {
		String strSQL = "select * from Sys_Employee where useFlag='"+ConstantMethod.FLAG_1+"'";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysEmployee.class));
	}

	@Override
	public void insBySysEmployee(SysEmployee sysEmployee) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("insert into Sys_Employee(UUID,ORGID,ORGCODE,ORGNAME,JOBID,JOBCODE,JOBNAME,POSTID,POSTCODE,POSTNAME,EMPNO,EMPNAME,SEX,BIRTHDAY,CARD,")
			  .append(" TELEPHONE,DEGRESS,ENTRYDATE,COLLEGE,USEFLAG,UPDATEUSER,UPDATETIME,COMMENTS,EMAIL) values('")
		      .append(sysEmployee.getUuid()).append("','")
		      .append(sysEmployee.getOrgId()).append("','")
		      .append(sysEmployee.getOrgCode()).append("','")
		      .append(sysEmployee.getOrgName()).append("','")
		      .append(sysEmployee.getJobId()).append("','")
		      .append(sysEmployee.getJobCode()).append("','")
		      .append(sysEmployee.getJobName()).append("','")
		      .append(sysEmployee.getPostId()).append("','")
		      .append(sysEmployee.getPostCode()).append("','")
		      .append(sysEmployee.getPostName()).append("','")
		      .append(sysEmployee.getEmpNo()).append("','")
		      .append(sysEmployee.getEmpName()).append("','")
		      .append(sysEmployee.getSex()).append("','")
		      .append(sysEmployee.getBirthday()).append("','")
		      .append(sysEmployee.getCard()).append("','")
		      .append(sysEmployee.getTelephone()).append("','")
		      .append(sysEmployee.getDegress()).append("','")
		      .append(sysEmployee.getEntryDate()).append("','")
		      .append(sysEmployee.getCollege()).append("','")
		      .append(sysEmployee.getUseFlag()).append("','")
		      .append(sysEmployee.getUpdateUser()).append("','")
		      .append(sysEmployee.getUpdateTime()).append("','")
		      .append(sysEmployee.getComments()).append("','")
		      .append(sysEmployee.getEmail()).append("')");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void updBySysEmployee(SysEmployee  sysEmployee) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update Sys_Employee set ")
		      .append("ORGID='").append( sysEmployee.getOrgId())
		      .append("',ORGCODE='").append( sysEmployee.getOrgCode())
              .append("',ORGNAME='").append( sysEmployee.getOrgName())
              .append("',JOBID='").append( sysEmployee.getJobId())
              .append("',JOBCODE='").append( sysEmployee.getJobCode())
              .append("',JOBNAME='").append( sysEmployee.getJobName())
              .append("',POSTID='").append( sysEmployee.getPostId())
              .append("',POSTCODE='").append( sysEmployee.getPostCode())  
              .append("',POSTNAME='").append( sysEmployee.getPostName())
		      .append("',EMPNO='").append( sysEmployee.getEmpNo())
              .append("',EMPNAME='").append( sysEmployee.getEmpName())
              .append("',SEX='").append( sysEmployee.getSex())
              .append("',BIRTHDAY='").append( sysEmployee.getBirthday())
              .append("',CARD='").append( sysEmployee.getCard())
              .append("',TELEPHONE='").append( sysEmployee.getTelephone())
              .append("',DEGRESS='").append( sysEmployee.getDegress())
              .append("',ENTRYDATE='").append( sysEmployee.getEntryDate())
              .append("',COLLEGE='").append( sysEmployee.getCollege())
              .append("',useflag='").append( sysEmployee.getUseFlag())
              .append("',updateUser='").append( sysEmployee.getUpdateUser())
              .append("',updateTime='").append( sysEmployee.getUpdateTime())
              .append("',comments='").append( sysEmployee.getComments())
              .append("',EMAIL='").append( sysEmployee.getEmail())
		      .append("' where uuid='").append( sysEmployee.getUuid()).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update sys_Employee set useFlag='").append(ConstantMethod.FLAG_0)
		 .append("' where uuid='").append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delBySysEmployee(SysEmployee sysEmployee) {
		if(AssertUtil.isVal(sysEmployee)){
			this.delByPk(sysEmployee.getUuid());
		}
	}

	/**
	 * 页面查询条件sql
	 * @param sysEmployee
	 * @return
	 */
	private String createCondition(SysEmployee sysEmployee) {
		StringBuffer condition = new StringBuffer(" and  useFlag='"+ConstantMethod.FLAG_1+"'");
		if (AssertUtil.isVal( sysEmployee.getEmpNo())) {
			condition.append(" and empno like'%").append( sysEmployee.getEmpNo())
					.append("%'");
		}
		if (AssertUtil.isVal( sysEmployee.getEmpName())) {
			condition.append(" and empName like '%").append( sysEmployee.getEmpName())
					.append("%'");
		}
		condition.append(" order by updatetime asc");
		return condition.toString();
	}

	@SuppressWarnings({ "deprecation","unchecked", "rawtypes" })
	@Override
	public Page<SysEmployee> findAllSysEmployee(SysEmployee sysEmployee, Page<SysEmployee> page) {
		String strSQL = "select * from Sys_Employee where 1=1 "
				+ this.createCondition(sysEmployee);
		String strCountSQL = "select count(*) from Sys_Employee where 1=1 "
				+ this.createCondition(sysEmployee);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<SysEmployee> list = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(SysEmployee.class));
		page.setPageResult(list);
		return page;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysEmployee> findMutiCondition(SysEmployee sysEmployee) {
		String strSQL = "select * from Sys_Employee where 1=1 "
				+ this.createCondition(sysEmployee);
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysEmployee.class));
	}

	@SuppressWarnings({ "deprecation","unchecked", "rawtypes" })
	@Override
	public Page<EmpModel> findAllSysEmployeeByModel(SysEmployee sysEmployee,
			Page<EmpModel> page) {
		String strSQL = "select A.*,nvl(B.POSTNUM,0) as POSTNUM  from SYS_EMPLOYEE A left join (select EMPID,COUNT(*) as POSTNUM from SYS_POSTEMP group by EMPID) B on A.UUID = B.EMPID  where 1=1 "
				+ this.createCondition(sysEmployee);
		String strCountSQL = "select count(*) from Sys_Employee where 1=1 "
				+ this.createCondition(sysEmployee);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<EmpModel> list = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(EmpModel.class));
		page.setPageResult(list);
		return page;
	}

//	@SuppressWarnings({ "unchecked", "rawtypes" })
//	@Override
//	public Collection<EmpModel> findAllByModel() {
//		String strSQL = "select A.*,nvl(B.POSTNUM,0) AS POSTNUM  FROM Sys_Employee A left join (SELECT EMPID,COUNT(*) AS POSTNUM FROM SYS_POSTEMP GROUP BY EMPID) B on A.UUID = B.EMPID  WHERE A.useFlag='"+ConstantMethod.FLAG_1+"'";
//		return this.getJdbcTemplate().query(strSQL,
//				new BeanPropertyRowMapper(EmpModel.class));
//	}
}
