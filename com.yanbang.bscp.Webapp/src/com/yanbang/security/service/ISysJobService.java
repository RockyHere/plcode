package com.yanbang.security.service;
import java.util.Collection;

import com.yanbang.page.Page;
import com.yanbang.security.entity.SysJob;


/**
 * 持久层接口
 * 职位DAO
 * @author xiaoqiao wu
 *
 */
public interface ISysJobService {
	/**
	 * 根据主键查询职位信息
	 * 
	 * @param uuid
	 * @return 一笔职位信息
	 */
	public SysJob findByPk(String uuid);
	/**
	 * 查询职位信息列表
	 * 
	 * @return 多笔职位信息
	 */
	public Collection<SysJob> findAll();
	
	/**
	 * 查询职位信息列表(有效的)
	 * 
	 * @return 多笔职位信息
	 */
	public Collection<SysJob> findAllByFlag();
	/**
	 * 动态参数分页查询
	 * 
	 * @param sysJob
	 * @param page
	 * @return
	 */
	public Page<SysJob> findAllSysJob(SysJob sysJob, Page<SysJob> page);
	/**
	 * 新增职位信息
	 * @param sysJob
	 */
	public void insBySysJob(SysJob sysJob);
	/**
	 * 更新职位信息
	 * @param sysJob
	 */
	public void updBySysJob(SysJob sysJob);
	/**
	 * 根据主键删除职位信息
	 * @param uuid
	 */
	public void delByPk(String uuid,String updUser);
	
	/**
	 * 删除一笔职位信息
	 * @param sysJob
	 */
	public void delBySysJob(SysJob sysJob);
}
