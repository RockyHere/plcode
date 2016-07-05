package com.yanbang.base.dao;

import java.util.Collection;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.yanbang.security.entity.SysRole;
import com.yanbang.util.AssertUtil;
import com.yanbang.base.entity.BaseFinance;
import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.util.ConstantMethod;

@Repository
@Transactional
public class IBaseFinanceDAOImpl extends BaseDAO implements IBaseFinanceDAO {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public BaseFinance findByPk(String id) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"select * from BAS_FINANCIALINS where BAS_FINANCIALINS_ID='" + id + "'")
				.append(" and USEFLAG='" + ConstantMethod.FLAG_1 + "'");
		System.out.println(strSQL);
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),
				new BeanPropertyRowMapper(BaseFinance.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseFinance> findAll() {
		String strSQL = "select * from BAS_INDUSTRY ";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseFinance.class));

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseFinance> findAllByFlag() {
		String strSQL = "select * from BAS_FINANCIALINS where useflag='"
				+ ConstantMethod.FLAG_1 + "'" + "and DEL_FLAG='"
				+ ConstantMethod.FLAG_0 + "'";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseFinance.class));
	}

	@SuppressWarnings({ "deprecation", "unchecked", "rawtypes" })
	@Override
	public Page<BaseFinance> findAllData(BaseFinance data,
			Page<BaseFinance> page) {
		String strSQL = "select * from BAS_FINANCIALINS where 1=1"
				+ this.createCondition(data);
		String strCountSQL = "select count(*) from BAS_FINANCIALINS where 1=1 "
				+ this.createCondition(data);
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<BaseFinance> list = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(BaseFinance.class));
		page.setPageResult(list);
		return page;
	}

	@Override
	public void insByData(BaseFinance data) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"insert into BAS_FINANCIALINS (" + "BAS_FINANCIALINS_ID,"
						+ "PARENTID," + "FINANCIALINS_CODE,"
						+ "FINANCIALINS_NAME," + "USEFLAG,MEMO,"
						+ "CREATED_BY_USER," + "DEL_FLAG,"
						+ "FINANCIALINS_ADDR," + "IS_BANK,IN_FLAG,"
						+ "link_man," + "PARENTNAME," + "TAX," + "TEL,"
						+ "CREATED_TIME_ZONE" + ") values('")
				.append(data.getBas_financialins_id()).append("','")
				.append(data.getParentid()).append("','")
				.append(data.getFinancialins_code()).append("','")
				.append(data.getFinancialins_name()).append("','")
				.append(data.getUseflag()).append("','").append(data.getMemo())
				.append("','").append(data.getCreated_by_user()).append("','")
				.append(data.getDel_flag()).append("','")
				.append(data.getFinancialins_addr()).append("','")
				.append(data.getIs_bank()).append("','")
				.append(data.getIn_flag()).append("','")
				.append(data.getLink_man()).append("','")
				.append(data.getParentname()).append("','")
				.append(data.getTax()).append("','").append(data.getTel())
				.append("','").append(data.getCreated_time_zone()).append("')");
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void updByData(BaseFinance data) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update BAS_FINANCIALINS set ")
				.append("PARENTID='" + data.getParentid())
				.append("',FINANCIALINS_CODE='" + data.getFinancialins_code())
				.append("',FINANCIALINS_NAME='" + data.getFinancialins_name())
				.append("',MEMO='" + data.getMemo())
				.append("',UPDATED_BY_USER='" + data.getUpdated_by_user())
				.append("',UPDATED_TIME_ZONE='" + data.getUpdated_time_zone())
				.append("',FINANCIALINS_ADDR='" + data.getFinancialins_addr())
				.append("',IS_BANK='" + data.getIs_bank())
				.append("',IN_FLAG='" + data.getIn_flag())
				.append("',LINK_MAN='" + data.getLink_man())
				.append("',PARENTNAME='" + data.getParentname())
				.append("',TAX='" + data.getTax())
				.append("',TEL='" + data.getTel())
				.append("' where BAS_FINANCIALINS_ID='"
						+ data.getBas_financialins_id() + "'");
		System.out.println(strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void delByPk(String uuid, String updateUser, String updateTime) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update BAS_FINANCIALINS set DEL_FLAG='")
				.append(ConstantMethod.FLAG_1).append("',UPDATED_BY_USER='")
				.append(updateUser).append("',UPDATED_TIME_ZONE='")
				.append(updateTime).append("' where BAS_FINANCIALINS_ID='")
				.append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());
	}

	@Override
	public void delByData(BaseFinance data) {
		if (AssertUtil.isVal(data)) {
			this.delByPk(data.getBas_financialins_id(),
					data.getUpdated_by_user(), data.getUpdated_time_zone());
		}
	}

	/**
	 * 页面查询条件sql
	 * 
	 * @param sysJbo
	 * @return
	 */
	private String createCondition(BaseFinance data) {
		StringBuffer condition = new StringBuffer(" and  useFlag='"
				+ ConstantMethod.FLAG_1 + "' and del_flag='"
				+ ConstantMethod.FLAG_0 + "'");
		// 若无组织机构id，则不查询职位
		if (AssertUtil.isVal(data.getParentid())) {
			condition.append(" and parentId = '").append(data.getParentid())
					.append("'");
		} else {
			condition.append(" and parentId is null");
			// condition.append(" and 1=2");
			// return condition.toString();
		}
		/*
		 * if (AssertUtil.isVal(data.getFinancialins_code())) {
		 * condition.append(" and finance_code like'%")
		 * .append(data.getFinancialins_code()).append("%'"); } if
		 * (AssertUtil.isVal(data.getFinancialins_name())) {
		 * condition.append(" and finance_name like '%")
		 * .append(data.getFinancialins_name()).append("%'"); }
		 */
		// condition.append(" order by created_time_zone asc");
		return condition.toString();
	}
}
