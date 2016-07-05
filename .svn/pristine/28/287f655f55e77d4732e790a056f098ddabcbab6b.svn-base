package com.yanbang.base.service;
import java.util.Collection;

import com.yanbang.base.entity.BaseFinance;
import com.yanbang.page.Page;


/**
 * 持久层接口
 * 行业DAO
 * @author zhouyibin
 *
 */
public interface IBaseFinanceService {
	/**
	 * 根据主键查询金融机构信息
	 * 
	 * @param uuid
	 * @return 一笔金融机构信息
	 */
	public BaseFinance findByPk(String uuid);
	/**
	 * 查询金融机构列表
	 * 
	 * @return 多笔金融机构信息
	 */
	public Collection<BaseFinance> findAll();
	
	/**
	 * 查询金融机构信息列表(有效的)
	 * 
	 * @return 多笔金融机构信息
	 */
	public Collection<BaseFinance> findAllByFlag();
	/**
	 * 动态参数分页查询
	 * 
	 * @param data
	 * @param page
	 * @return
	 */
	public Page<BaseFinance> findAllData(BaseFinance data, Page<BaseFinance> page);
	/**
	 * 新增金融机构信息
	 * @param data
	 */
	public void insByData(BaseFinance data);
	/**
	 * 更新金融机构信息
	 * @param data
	 */
	public void updByData(BaseFinance data);
	
	/**
	 * 根据主键删除金融机构信息
	 * @param uuid
	 */
	public void delByPk(String uuid,String updUser);
	
	/**
	 * 删除一笔金融机构信息
	 * @param data
	 */
	public void delByData(BaseFinance data);
	
	
}
