package com.yanbang.security.service;

import java.util.Collection;

import com.yanbang.page.Page;
import com.yanbang.security.entity.SysEmployee;
import com.yanbang.security.model.EmpModel;

/**
 * 服务层接口
 * 
 * 员工服务接口
 * 
 * @author xiaoqiao wu
 * 
 */
public interface ISysEmployeeService {
	/**
	 * 根据主键查询员工信息
	 * 
	 * @param uuid
	 * @return 一笔港口信息
	 */
	public SysEmployee findByPk(String uuid);

	/**
	 * 查询员工信息列表
	 * 
	 * @return 多笔员工信息
	 */
	public Collection<SysEmployee> findAll();
	
	/**
	 * 查询员工信息列表（含岗位个数）
	 * 
	 * @return 多笔员工信息
	 */
	public Page<EmpModel> findAllSysEmployeeByModel(SysEmployee sysEmployee, Page<EmpModel> page);
	
	/**
	 * 动态参数分页查询
	 * 
	 * @param sysEmployee
	 * @param page
	 * @return
	 */
	public Page<SysEmployee> findAllSysEmployee(SysEmployee sysEmployee, Page<SysEmployee> page);
	
	/**
	 * 动态参数查询（不分页）
	 * 
	 * @param sysEmployee
	 * @return
	 */
	public Collection<SysEmployee> findMutiCondition(SysEmployee sysEmployee);
	
	/**
	 * 新增员工信息
	 * @param sysEmployee
	 */
	public void insBySysEmployee(SysEmployee sysEmployee);
	
	/**
	 * 更新员工信息
	 * @param sysEmployee
	 */
	public void updBySysEmployee(SysEmployee sysEmployee);
	
	/**
	 * 根据主键删除员工信息
	 * @param uuid
	 */
	public void delByPk(String uuid);
	
	/**
	 * 删除一笔员工信息
	 * @param Boat
	 */
	public void delBySysEmployee(SysEmployee sysEmployee);
}
