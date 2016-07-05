package com.yanbang.base.service;
import java.util.Collection;

import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.page.Page;


/**
 * 持久层接口
 * 行业DAO
 * @author zhouyibin
 *
 */
public interface IBaseIndustryService {
	/**
	 * 根据主键查询行业信息
	 * 
	 * @param uuid
	 * @return 一笔行业信息
	 */
	public BaseIndustry findByPk(String uuid);
	/**
	 * 查询职位信息列表
	 * 
	 * @return 多笔职位信息
	 */
	public Collection<BaseIndustry> findAll();
	
	/**
	 * 查询职位信息列表(有效的)
	 * 
	 * @return 多笔行业信息
	 */
	public Collection<BaseIndustry> findAllByFlag();
	/**
	 * 动态参数分页查询
	 * 
	 * @param sysJob
	 * @param page
	 * @return
	 */
	public Page<BaseIndustry> findAllSysJob(BaseIndustry sysJob, Page<BaseIndustry> page);
	/**
	 * 新增行业信息
	 * @param sysJob
	 */
	public void insBySysJob(BaseIndustry sysJob);
	/**
	 * 更新行业信息
	 * @param sysJob
	 */
	public void updBySysJob(BaseIndustry sysJob);
	
	/**
	 * 根据主键删除行业信息
	 * @param uuid
	 */
	public void delByPk(String uuid,String updUser);
	
	/**
	 * 删除一笔行业信息
	 * @param sysJob
	 */
	public void delBySysJob(BaseIndustry sysJob);
	
	
}
