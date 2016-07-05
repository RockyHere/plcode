package com.yanbang.base.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.security.entity.SysRole;
import com.yanbang.util.AssertUtil;
import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.util.ConstantMethod;

@Repository
@Transactional
public class IBaseIndustryDAOImpl extends BaseDAO implements IBaseIndustryDAO {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public BaseIndustry findByPk(String bas_industry_id) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"select * from BAS_INDUSTRY where bas_industry_id='"
						+ bas_industry_id + "'").append(
				" and useflag='" + ConstantMethod.FLAG_1 + "'");
		System.out.print(strSQL.toString());
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),
				new BeanPropertyRowMapper(BaseIndustry.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseIndustry> findAll() {
		String strSQL = "select * from BAS_INDUSTRY ";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseIndustry.class));

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseIndustry> findAllByFlag() {
		String strSQL = "select * from BAS_INDUSTRY where useflag='"
				+ ConstantMethod.FLAG_1 + "'";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseIndustry.class));
	}

	@SuppressWarnings({ "deprecation", "unchecked", "rawtypes" })
	@Override
	public Page<BaseIndustry> findAllSysJob(BaseIndustry sysJob,
			Page<BaseIndustry> page) {
		/*String strSQL = "select * from BAS_INDUSTRY order by industry_Code asc";
		String strCountSQL = "select count(*) from BAS_INDUSTRY ";
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<BaseIndustry> menulist = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(BaseIndustry.class));
		page.setPageResult(menulist);
		return page;*/
		
		
		String strSQL = "select * from BAS_INDUSTRY where 1=1 "
				+ this.createCondition(sysJob);
		String strCountSQL = "select count(*) from BAS_INDUSTRY where 1=1 "
				+ this.createCondition(sysJob);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<BaseIndustry> list = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(BaseIndustry.class));
		page.setPageResult(list);
		return page;
	}

	@Override
	public void insBySysJob(BaseIndustry sysJob) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"insert into BAS_INDUSTRY (Bas_industry_id,parentId,Industry_code,Industry_name,Useflag,memo,created_by_user,created_time_zone) values('")
				.append(sysJob.getBas_industry_id()).append("','")
				.append(sysJob.getParentId()).append("','")
				.append(sysJob.getIndustry_code()).append("','")
				.append(sysJob.getIndustry_name()).append("','")
				.append(sysJob.getUseflag()).append("','")
				.append(sysJob.getMemo()).append("','")
				.append(sysJob.getUpdated_by_user()).append("','")
				.append(sysJob.getCreated_time_zone()).append("')");
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void updBySysJob(BaseIndustry sysJob) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update BAS_INDUSTRY set ")
				.append("ParentId='" + sysJob.getParentId())
				.append("',Industry_code='" + sysJob.getIndustry_code())
				.append("',Industry_name='" + sysJob.getIndustry_name())
				.append("',Useflag='" + sysJob.getUseflag())
				.append("',memo='" + sysJob.getMemo())
				.append("',Updated_by_user='" + sysJob.getUpdated_by_user())
				.append("',Updated_time_zone='" + sysJob.getUpdated_time_zone())
				.append("' where Bas_industry_id='"
						+ sysJob.getBas_industry_id() + "'");
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void delByPk(String uuid, String updateUser, String updateTime) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update BAS_INDUSTRY set useFlag='")
				.append(ConstantMethod.FLAG_0).append("',updated_by_user='")
				.append(updateUser).append("',updated_time_zone='")
				.append(updateTime).append("' where bas_industry_id='")
				.append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delBySysJob(BaseIndustry sysJob) {
		if (AssertUtil.isVal(sysJob)) {
			this.delByPk(sysJob.getBas_industry_id(),
					sysJob.getUpdated_by_user(), sysJob.getUpdated_time_zone());
		}
	}

	/**
	 * 页面查询条件sql
	 * 
	 * @param sysJbo
	 * @return
	 */
	private String createCondition(BaseIndustry sysJob) {
		StringBuffer condition = new StringBuffer(" and  useFlag='"
				+ ConstantMethod.FLAG_1 + "'");
		// 若无组织机构id，则不查询职位
		System.out.print("sysJob"+sysJob.getParentId());
		if (AssertUtil.isVal(sysJob.getParentId())) {
			condition.append(" and parentId = '").append(sysJob.getParentId())
					.append("'");
		} else {
			condition.append(" and parentId is null");
			//condition.append(" and 1=2");
			//return condition.toString();
		}
		if (AssertUtil.isVal(sysJob.getIndustry_code())) {
			condition.append(" and industry_code like'%")
					.append(sysJob.getIndustry_code()).append("%'");
		}
		if (AssertUtil.isVal(sysJob.getIndustry_name())) {
			condition.append(" and industry_name like '%")
					.append(sysJob.getIndustry_name()).append("%'");
		}
		condition.append(" order by created_time_zone asc");
		return condition.toString();
	}
}
