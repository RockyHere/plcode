package com.yanbang.security.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.dao.BaseDAO;
import com.yanbang.page.Page;
import com.yanbang.security.entity.SysMenu;

@Repository
@Transactional
public class ISysMenuDAOImpl extends BaseDAO implements ISysMenuDAO {
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysMenu> findAllChildMenus(Long menuParentId,
			String menuIds) {
		String strSQL = "select *from sys_menu where menuparentid="
				+ menuParentId + " and menuid in(" + menuIds
				+ ") and menustatus=0  order by menuorder";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysMenu.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysMenu> findMenusByListId(String menuIds) {
		String strSQL = "select *from sys_menu where menuId in(" + menuIds
				+ ")  and menustatus=0 order by menuOrder";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysMenu.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysMenu> findAllSysMenu() {
		String strSQL = "select *from sys_menu order by menuOrder";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysMenu.class));
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Collection<SysMenu> findAllUsefulSysMenu() {
		String strSQL = "select *from sys_menu where menuStatus=0 order by menuOrder";
		return this.getJdbcTemplate().query(strSQL,
				new BeanPropertyRowMapper(SysMenu.class));
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes", "deprecation" })
	@Override
	public Page<SysMenu> findAllSysMenus(Page<SysMenu> page) {
		String strSQL = "select * from sys_menu order by menuOrder asc";
		String strCountSQL = "select count(*) from sys_menu ";
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<SysMenu> menulist = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(SysMenu.class));
		page.setPageResult(menulist);
		return page;
	}

	@SuppressWarnings({ "unchecked", "rawtypes", "deprecation" })
	@Override
	public Page<SysMenu> findAllByMutiConditon(Page<SysMenu> page, SysMenu menu) {
		String condtionSQL = "";
		if (menu.getMenuId() != null) {
			condtionSQL = condtionSQL + " and menuId= " + menu.getMenuId();
		}
		if (menu.getMenuId() != null) {
			condtionSQL = condtionSQL + " and menuId= " + menu.getMenuId();
		}
		if (menu.getMenuName() != null && !"".equals(menu.getMenuName().trim())) {
			condtionSQL = condtionSQL + " and menuName like '%"
					+ menu.getMenuName() + "%' ";
		}
		if (menu.getMenuStatus() != -2) {
			condtionSQL = condtionSQL + " and menuStatus = "
					+ menu.getMenuStatus();
		}
		if (menu.getMenuGrade() != -1) {
			condtionSQL = condtionSQL + " and menuGrade = "
					+ menu.getMenuGrade();
		}
		String strSQL = "select * from sys_menu where 1=1 ";
		strSQL += condtionSQL;
		strSQL += " order by menuOrder asc";
		String strCountSQL = "select count(*) from sys_menu where 1=1 ";
		strCountSQL += condtionSQL;
		page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL));
		String paginationSQL = page.getPaginationSQL(strSQL);
		List<SysMenu> menulist = this.getJdbcTemplate().query(paginationSQL,
				new BeanPropertyRowMapper(SysMenu.class));
		page.setPageResult(menulist);
		return page;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public SysMenu findSysMenuById(String menuId) {
		String strSQL = "select *from sys_menu where menuid=" + menuId;
		return this.getJdbcTemplate().queryForObject(strSQL,
				new BeanPropertyRowMapper(SysMenu.class));
	}

	@Override
	public void saveSysMenu(SysMenu menu) {
		String strSQL = "insert into sys_menu(menuId,menuName,menuURL,menuGrade,menuParentId,menuIsLastNode,menuStatus,menuOrder,menuTarget) values("
				+ menu.getMenuId()
				+ ",'"
				+ menu.getMenuName()
				+ "','"
				+ menu.getMenuURL()
				+ "',"
				+ menu.getMenuGrade()
				+ ","
				+ menu.getMenuParentId()
				+ ","
				+ menu.getMenuIsLastNode()
				+ ","
				+ menu.getMenuStatus()
				+ ","
				+ menu.getMenuOrder()
				+ ",'"
				+ menu.getMenuTarget() + "')";
		this.getJdbcTemplate().update(strSQL);
	}

	@Override
	public void updateSysMenu(SysMenu menu) {
		String strSQL = "update sys_menu set menuName='" + menu.getMenuName()
				+ "',menuURL='" + menu.getMenuURL() + "',menuGrade="
				+ menu.getMenuGrade() + ",menuParentId="
				+ menu.getMenuParentId() + ",menuStatus="
				+ menu.getMenuStatus() + ",menuOrder=" + menu.getMenuOrder()
				+ ",menuTarget='" + menu.getMenuTarget() + "' where menuId="
				+ menu.getMenuId();
		this.getJdbcTemplate().update(strSQL);
	}
}
