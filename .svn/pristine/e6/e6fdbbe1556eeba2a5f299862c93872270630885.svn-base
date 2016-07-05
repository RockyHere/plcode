package com.yanbang.base.service;
import java.util.Collection;

import com.yanbang.base.entity.BaseRegion;
import com.yanbang.security.entity.SysOrg;


/**
 * 持久层接口
 * 组织机构DAO
 * @author yechuncheng
 *
 */
public interface IBaseRegionService {
	/**
	 * 根据主键查询组织机构信息
	 * 
	 * @param uuid
	 * @return 一笔组织机构信息
	 */
	public BaseRegion findByPk(String uuid);
	/**
	 * 查询组织机构信息列表
	 * 
	 * @return 多笔组织机构信息
	 */
	public Collection<BaseRegion> findAll();
	
	/**
	 * 查询组织机构信息列表(有效的)
	 * 
	 * @return 多笔组织机构信息
	 */
	public Collection<BaseRegion> findAllByFlag();
	/**
	 * 新增组织机构信息
	 * @param org
	 */
	public void insByOrg(BaseRegion org);
	/**
	 * 更新组织机构信息
	 * @param org
	 */
	public void updByOrg(BaseRegion org);
	/**
	 * 根据主键删除组织机构信息
	 * @param uuid
	 */
	public void delByPk(String uuid);
	
	/**
	 * 删除一笔组织机构信息
	 * @param org
	 */
	public void delByOrg(BaseRegion org);
}
