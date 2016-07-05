package com.yanbang.base.dao;
import java.util.Collection;

import com.yanbang.base.entity.BaseFinance;
import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.page.Page;

/**
 * 持久层接口
 * 金融机构DAO
 * @author zhouyibin
 *
 */
public interface IBaseFinanceDAO {
	/**
	 * 根据主键查询金融机构信息
	 * 
	 * @param id
	 * @return 一笔金融机构信息
	 */
	public BaseFinance findByPk(String id);
	/**
	 * 查询行业信息列表
	 * 
	 * @return 多笔金融机构信息信息
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
	 * @param finance
	 * @param page
	 * @return
	 */
	public Page<BaseFinance> findAllData(BaseFinance data, Page<BaseFinance> page);
	/**
	 * 新增金融机构信息
	 * @param finance
	 */
	public void insByData(BaseFinance finance);
	/**
	 * 更新金融机构信息
	 * @param finance
	 */
	public void updByData(BaseFinance finance);
	/**
	 * 根据主键删除金融机构信息
	 * @param uuid
	 */
	public void delByPk(String uuid, String updateUser,String updateTime);
	
	/**
	 * 删除一笔金融机构信息信息
	 * @param finance
	 */
	public void delByData(BaseFinance finance);
}
