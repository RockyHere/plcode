package com.yanbang.base.dao;

import java.util.Collection;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.base.entity.BaseRegion;
import com.yanbang.dao.BaseDAO;
import com.yanbang.security.entity.SysOrg;
import com.yanbang.util.AssertUtil;
import com.yanbang.util.ConstantMethod;

@Repository
@Transactional
public class ISysRegionDAOImpl extends BaseDAO implements ISysRegionDAO {

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public BaseRegion findByPk(String uuid) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("select * from sys_org where uuid='" + uuid + "'")
				.append(" and useFlag='" + ConstantMethod.FLAG_1
						+ "' order by orgcode");
		return this.getJdbcTemplate().queryForObject(strSQL.toString(),
				new BeanPropertyRowMapper(BaseRegion.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseRegion> findAll() {
		String strSQL = "select * from BAS_REGION order by country_code asc";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseRegion.class));

	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<BaseRegion> findAllByFlag() {
		String strSQL = "select * from BAS_REGION where useFlag='"
				+ ConstantMethod.FLAG_1 + "' order by country_code asc";
		// String strSQL = "select * from BAS_REGION";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(BaseRegion.class));
	}

	@Override
	public void insByOrg(BaseRegion org) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append(
				"insert into BAS_REGION (Bas_region_id,country_code,country_name,country_name_eg,Created_by_user,Created_time_zone,useFlag,Memo,Parentid) values('")
				.append(org.getBas_region_id()).append("','")
				.append(org.getCountry_code()).append("','")
				.append(org.getCountry_name()).append("','")
				.append(org.getCountry_name_eg()).append("','")
				.append(org.getCreated_by_user()).append("','")
				.append(org.getCreated_time_zone()).append("','")
				.append(ConstantMethod.CONFIRMFLAG_1).append("','")
				.append(org.getMemo()).append("','").append(org.getParentId())
				.append("')");
		System.out.print(strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void updByOrg(BaseRegion org) {
		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update BAS_REGION set ")
				.append("country_code='" + org.getCountry_code())
				.append("',country_name='" + org.getCountry_name())
				.append("',country_name_eg='"
						+ org.getCountry_name_eg())
				.append("',Created_by_user='" + org.getCreated_by_user())
				.append("',Created_time_zone='" + org.getCreated_time_zone())
				.append("',Memo='" + org.getMemo())
				.append("' where Bas_region_id='")
				.append(org.getBas_region_id()).append("'");
		System.out.print(strSQL.toString());
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void delByPk(String uuid) {

		StringBuffer strSQL = new StringBuffer("");
		strSQL.append("update BAS_REGION set useFlag='")
				.append(ConstantMethod.FLAG_0)
				.append("' where Bas_region_id='").append(uuid).append("'");
		this.getJdbcTemplate().update(strSQL.toString());

	}

	@Override
	public void delByOrg(BaseRegion org) {

		if (AssertUtil.isVal(org)) {
			StringBuffer strSQL = new StringBuffer("");
			strSQL.append(
					"update BAS_REGION set useFlag='" + ConstantMethod.FLAG_0)
					.append("',Created_by_user='")
					.append(org.getCreated_by_user())
					.append("',Created_time_zone='")
					.append(org.getCreated_time_zone())
					.append("' where uuid in (select Bas_region_id from BAS_REGION start with Bas_region_id = '"
							+ org.getBas_region_id()
							+ "' connect by prior Bas_region_id = parentid)");
			this.getJdbcTemplate().update(strSQL.toString());
		}

	}

}
