package com.yanbang.security.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.security.entity.SysRole;

@Repository
@Transactional
public class ISysRoleDAOImpl extends BaseDAO implements ISysRoleDAO {
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysRole> findAllRoleByUserUUID(Long userUUID) {
		String strSQL = "select * from sys_role where rolecode in(select rolecode from sys_userrole where useruuid="
				+ userUUID + ")";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysRole.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes", "deprecation" })
	@Override
	public Page<SysRole> findAllSysRoles(Page<SysRole> page) {
		String strSQL = "select * from sys_role order by roleCode asc";
		String strCountSQL = "select count(*) from sys_role ";
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<SysRole> menulist = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(SysRole.class));
		page.setPageResult(menulist);
		return page;
	}

	@SuppressWarnings({ "unchecked", "rawtypes", "deprecation" })
	@Override
	public Page<SysRole> findAllByMutiConditon(Page<SysRole> page, SysRole role) {
		String condtionSQL = "";
		if (role.getRoleCode() != null) {
			condtionSQL = condtionSQL + " and roleCode= " + role.getRoleCode();
		}
		if (role.getRoleName() != null && !"".equals(role.getRoleName().trim())) {
			condtionSQL = condtionSQL + " and roleName like '%"
					+ role.getRoleName() + "%' ";
		}
		if (role.getRoleRemark() != null
				&& !"".equals(role.getRoleRemark().trim())) {
			condtionSQL = condtionSQL + " and roleRemark like '%"
					+ role.getRoleRemark() + "%' ";
		}
		if (role.getRoleStatus() != -2) {
			condtionSQL = condtionSQL + " and roleStatus = "
					+ role.getRoleStatus();
		}
		String strSQL = "select * from sys_role where 1=1 ";
		strSQL += condtionSQL;
		strSQL += " order by roleCode asc";
		String strCountSQL = "select count(*) from sys_role where 1=1 ";
		strCountSQL += condtionSQL;
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<SysRole> menulist = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(SysRole.class));
		page.setPageResult(menulist);
		return page;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public SysRole findSysRoleById(String roleId) {
		String strSQL = "select * from sys_role where roleCode=" + roleId;
		return this.getJdbcTemplate().queryForObject(strSQL,
				new BeanPropertyRowMapper(SysRole.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysRole> findAllSysRole() {
		String strSQL = "select * from sys_role order by roleCode";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysRole.class));
	}

	@Override
	public void saveSysRole(SysRole role) {
		String strSQL = "insert into sys_role(roleCode,roleName,roleRemark,roleMenus,roleStatus) values("
				+ role.getRoleCode()
				+ ",'"
				+ role.getRoleName()
				+ "','"
				+ role.getRoleRemark()
				+ "','"
				+ role.getRoleMenus()
				+ "',"
				+ role.getRoleStatus() + ")";
		
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public void updateSysRole(SysRole role) {
		String strSQL = "update sys_role set roleName='" + role.getRoleName()
				+ "',roleRemark='" + role.getRoleRemark() + "',roleStatus="
				+ role.getRoleStatus() + " where roleCode="
				+ role.getRoleCode();
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public void deleteSysRole(String roleId) {
//		String strSQL = "delete from sys_role where roleCode=" + roleId;
		String strSQL = "update sys_role set roleStatus=0 where roleCode=" + roleId;
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public Long findMaxRoleId() {
		String strSQL = "select nvl(max(rolecode)+1,100) from sys_role";
		return this.getJdbcTemplate().queryForObject(strSQL, Long.class);
	}

	@Override
	public void updateRoleMenus(String roleId, String menuIds) {
		String strSQL = "update sys_role set roleMenus='" + menuIds
				+ "' where roleCode=" + roleId;
		this.getJdbcTemplate().update(strSQL);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysRole> findAllRoles() {
		String strSQL = "select * from sys_role";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysRole.class));
	}
}
