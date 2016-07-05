package com.yanbang.base.dao;
import java.util.Collection;
import com.yanbang.base.entity.BaseCargo;
import com.yanbang.security.entity.SysOrg;


/**
 * 持久层接口
 * 货物信息管理DAO
 * @author zhouyibin
 *
 */
public interface IBaseCargoDAO {
	/**
	 * 根据主键查货物信息
	 * 
	 * @param uuid
	 * @return 一笔货物信息
	 */
	public BaseCargo findByPk(String uuid);
	/**
	 * 查询货物信息列表
	 * 
	 * @return 多笔货物信息
	 */
	public Collection<BaseCargo> findAll();
	
	/**
	 * 查询货物信息列表(有效的)
	 * 
	 * @return 多笔货物信息
	 */
	public Collection<BaseCargo> findAllByFlag();
	/**
	 * 新增货物信息
	 * @param org
	 */
	public void insByData(BaseCargo data);
	/**
	 * 更新货物信息
	 * @param org
	 */
	public void updByData(BaseCargo data);
	/**
	 * 根据主键删除货物信息
	 * @param uuid
	 */
	public void delByPk(String uuid);
	
	/**
	 * 删除一笔货物信息
	 * @param org
	 */
	public void delByData(BaseCargo data);
}
