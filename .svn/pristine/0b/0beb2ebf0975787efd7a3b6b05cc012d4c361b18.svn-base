package com.yanbang.base.dao;
import java.util.Collection;

import com.yanbang.base.entity.BaseRegion;
import com.yanbang.security.entity.SysOrg;


/**
 * 持久层接口
 * 地理区域管理DAO
 * @author yechuncheng
 *
 */
public interface ISysRegionDAO {
	/**
	 * 根据主键查地理区域管理信息
	 * 
	 * @param uuid
	 * @return 一笔地理区域管理信息
	 */
	public BaseRegion findByPk(String uuid);
	/**
	 * 查询地理区域管理信息列表
	 * 
	 * @return 多笔地理区域管理信息
	 */
	public Collection<BaseRegion> findAll();
	
	/**
	 * 查询地理区域管理信息列表(有效的)
	 * 
	 * @return 多笔地理区域管理信息
	 */
	public Collection<BaseRegion> findAllByFlag();
	/**
	 * 新增地理区域管理信息
	 * @param org
	 */
	public void insByOrg(BaseRegion org);
	/**
	 * 更新地理区域管理信息
	 * @param org
	 */
	public void updByOrg(BaseRegion org);
	/**
	 * 根据主键删除地理区域管理信息
	 * @param uuid
	 */
	public void delByPk(String uuid);
	
	/**
	 * 删除一笔地理区域管理信息
	 * @param org
	 */
	public void delByOrg(BaseRegion org);
}
