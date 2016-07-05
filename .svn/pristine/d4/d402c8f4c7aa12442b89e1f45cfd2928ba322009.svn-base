package com.yanbang.base.dao;
import java.util.Collection;

import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.page.Page;

/**
 * 持久层接口
 * 信息DAO
 * @author zhouyibin
 *
 */
public interface IBaseIndustryDAO {
	/**
	 * 根据主键查询行业信息
	 * 
	 * @param bas_industry_id
	 * @return 一笔行业信息
	 */
	public BaseIndustry findByPk(String bas_industry_id);
	/**
	 * 查询行业信息列表
	 * 
	 * @return 多笔行业信息
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
	public void delByPk(String uuid, String updateUser,String updateTime);
	
	/**
	 * 删除一笔行业信息
	 * @param sysJob
	 */
	public void delBySysJob(BaseIndustry sysJob);
}
