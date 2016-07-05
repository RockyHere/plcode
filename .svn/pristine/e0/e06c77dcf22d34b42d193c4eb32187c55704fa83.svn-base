package com.yanbang.config.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;

@Repository
@Transactional
public class ISysConfigDAOImpl extends BaseDAO implements ISysConfigDAO {

	@Override
	public String findValueBykey(String key) {
		try {
			String strSQL = "select sysValue from sys_config where syskey='"
					+ key + "'";
			return this.getJdbcTemplate().queryForObject(strSQL, String.class);
		} catch (Exception ex) {
			ex.printStackTrace();
			return "N/A";
		}
	}
}
