package com.yanbang.base.dao;

import java.util.Collection;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.base.entity.BaseCargo;
import com.yanbang.dao.BaseDAO;
import com.yanbang.util.AssertUtil;
import com.yanbang.util.ConstantMethod;

@Repository
@Transactional
public class IBaseCargoDAOImpl extends BaseDAO implements IBaseCargoDAO {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public BaseCargo findByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("select * from sys_org where uuid='" + uuid + "'")
				.append(" and useFlag='" + ConstantMethod.FLAG_1
						+ "' order by orgcode");
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),
				new BeanPropertyRowMapper(BaseCargo.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseCargo> findAll() {
		String strSQL = "select * from BAS_REGION order by country_code asc";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseCargo.class));

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseCargo> findAllByFlag() {
		String strSQL = "select * from BAS_CARGO_CLASS where USEFLAG='"
				+ ConstantMethod.FLAG_1 + "' order by CREATED_TIME_ZONE asc";
		// String strSQL = "select * from BAS_REGION";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseCargo.class));
	}

	@Override
	public void insByData(BaseCargo data) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"insert into BAS_CARGO_CLASS (" + "BAS_CARGO_CLASS_ID,"
						+ "CARGO_CLASS_CODE," + "CARGO_CLASS_NAME,"
						+ "CARGO_CLASS_NAME_EN," + "CREATED_BY_USER,"
						+ "CREATED_TIME_ZONE," + "USEFLAG," + "PARENT_ID"
						+ ") values('").append(data.getBas_cargo_class_id())
				.append("','").append(data.getCargo_class_code()).append("','")
				.append(data.getCargo_class_name()).append("','")
				.append(data.getCargo_class_name_en()).append("','")
				.append(data.getCreated_by_user()).append("','")
				.append(data.getCreated_time_zone()).append("','")
				.append(ConstantMethod.CONFIRMFLAG_1).append("','")
				.append(data.getParent_id()).append("')");
		System.out.println(strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void updByData(BaseCargo data) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update BAS_CARGO_CLASS set ")
				.append("CARGO_CLASS_CODE='" + data.getCargo_class_code())
				.append("',Cargo_class_name='" + data.getCargo_class_name())
				.append("',CARGO_CLASS_NAME_EN='"
						+ data.getCargo_class_name_en())
				.append("',UPDATED_BY_USER='" + data.getUpdated_by_user())
				.append("',UPDATED_TIME_ZONE='" + data.getUpdated_by_time())
				.append("' where BAS_CARGO_CLASS_ID='")
				.append(data.getBas_cargo_class_id()).append("'");
		System.out.println(strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void delByPk(String uuid) {

		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update BAS_CARGO_CLASS set USEFLAG='")
				.append(ConstantMethod.FLAG_0)
				.append("' where BAS_CARGO_CLASS_ID='").append(uuid)
				.append("'");
		System.out.println("删除货物"+strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void delByData(BaseCargo data) {

		if (AssertUtil.isVal(data)) {
			StringBuffer strSQL = new StringBuffer("");
			strSQL.append(
					"update BAS_REGION set useFlag='" + ConstantMethod.FLAG_0)
					.append("',Created_by_user='")
					.append(data.getCreated_by_user())
					.append("',Created_time_zone='")
					.append(data.getCreated_time_zone())
					.append("' where uuid in (select Bas_region_id from BAS_REGION start with Bas_region_id = '"
							+ data.getBas_cargo_class_id()
							+ "' connect by prior Bas_region_id = parentid)");
			this.getJdbcTemplate().update(strSQL.toString());
		}

	}

}
