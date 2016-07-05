package com.yanbang.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 * Access to data access object implementation template
 * 
 * @author Xu Chunfu
 * 
 * @see org.springframework.jdbc.core.JdbcTemplate
 * <br>Note:This package needs to be scanned in the Spring configuration file to convert to bean Spring
 */
@Repository
public abstract class BaseDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
}
