package com.yanbang.security.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.security.entity.SysJob;
import com.yanbang.util.AssertUtil;
import com.yanbang.util.ConstantMethod;

@Repository
@Transactional
public class ISysJobDAOImpl extends BaseDAO implements ISysJobDAO {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public SysJob findByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("select * from sys_Job where uuid='" + uuid + "'")
				.append(" and useFlag='" + ConstantMethod.FLAG_1 + "'");
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),
				new BeanPropertyRowMapper(SysJob.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysJob> findAll() {
		String strSQL = "select * from sys_Job ";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysJob.class));

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysJob> findAllByFlag() {
		String strSQL = "select * from sys_Job where useFlag='"
				+ ConstantMethod.FLAG_1 + "'";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysJob.class));
	}

	@SuppressWarnings({ "deprecation", "unchecked", "rawtypes" })
	@Override
	public Page<SysJob> findAllSysJob(SysJob sysJob, Page<SysJob> page) {
		String strSQL = "select * from sys_Job where 1=1 "
				+ this.createCondition(sysJob);
		String strCountSQL = "select count(*) from sys_Job where 1=1 "
				+ this.createCondition(sysJob);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<SysJob> list = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(SysJob.class));
		page.setPageResult(list);
		return page;
	}

	@Override
	public void insBySysJob(SysJob sysJob) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"insert into sys_Job (UUID,ORGID,ORGCODE,ORGNAME,JOBCODE,JOBNAME,USEFLAG,COMMENTS,UPDATEUSER,UPDATETIME ) values('")
				.append(sysJob.getUuid()).append("','")
				.append(sysJob.getOrgId()).append("','")
				.append(sysJob.getOrgCode()).append("','")
				.append(sysJob.getOrgName()).append("','")
				.append(sysJob.getJobCode()).append("','")
				.append(sysJob.getJobName()).append("','")
				.append(sysJob.getUseFlag()).append("','")
				.append(sysJob.getComments()).append("','")
				.append(sysJob.getUpdateUser()).append("','")
				.append(sysJob.getUpdateTime()).append("')");
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void updBySysJob(SysJob sysJob) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update sys_Job set ")
				.append("ORGID='" + sysJob.getOrgId())
				.append("',ORGCODE='" + sysJob.getOrgCode())
				.append("',ORGNAME='" + sysJob.getOrgName())
				.append("',JOBCODE='" + sysJob.getJobCode())
				.append("',JOBNAME='" + sysJob.getJobName())
				.append("',USEFLAG='" + sysJob.getUseFlag())
				.append("',COMMENTS='" + sysJob.getComments())
				.append("',UPDATEUSER='" + sysJob.getUpdateUser())
				.append("',UPDATETIME='" + sysJob.getUpdateTime())
				.append("' where uuid='" + sysJob.getUuid() + "'");
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void delByPk(String uuid,String updateUser,String updateTime) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update SYS_job set useFlag='").append(ConstantMethod.FLAG_0)
		 .append("',updateUser='").append(updateUser)
         .append("',updateTime='").append(updateTime)
		 .append("' where uuid='").append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delBySysJob(SysJob sysJob) {
		if(AssertUtil.isVal(sysJob)){
			this.delByPk(sysJob.getUuid(),sysJob.getUpdateUser(),sysJob.getUpdateTime());
		}
	}

	/**
	 * 页面查询条件sql
	 * 
	 * @param sysJbo
	 * @return
	 */
	private String createCondition(SysJob sysJob) {
		StringBuffer condition = new StringBuffer(" and  useFlag='"
				+ ConstantMethod.FLAG_1 + "'");
		//若无组织机构id，则不查询职位
		if (AssertUtil.isVal(sysJob.getOrgId())) {
			condition.append(" and orgId = '").append(sysJob.getOrgId())
					.append("'");
		}else{
			condition.append(" and 1=2");
			return condition.toString();
		}
		if (AssertUtil.isVal(sysJob.getJobCode())) {
			condition.append(" and jobCode like'%").append(sysJob.getJobCode())
					.append("%'");
		}
		if (AssertUtil.isVal(sysJob.getJobName())) {
			condition.append(" and jobName like '%")
					.append(sysJob.getJobName()).append("%'");
		}
		condition.append(" order by updatetime asc");
		return condition.toString();
	}
}
