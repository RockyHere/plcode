package com.yanbang.base.dao;

import java.util.Collection;

import com.yanbang.base.entity.BaseCust;
import com.yanbang.base.entity.BaseCustAccount;
import com.yanbang.base.entity.BaseCustContactsinfo;
import com.yanbang.base.entity.BaseCustEnterprisetype;
import com.yanbang.base.entity.BaseCustReceivinfo;
import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.base.entity.BaseRegion;
import com.yanbang.page.Page;

/**
 * 持久层接口 客户管理DAO
 * 
 * @author zhouyibin
 * 
 */
public interface IBaseCustDAO {
	/**
	 * 根据主键查地理区域管理信息
	 * 
	 * @param uuid
	 * @return 一笔地理区域管理信息
	 */
	public BaseCust findByPk(String uuid);

	/**
	 * 查询地理区域管理信息列表
	 * 
	 * @return 多笔地理区域管理信息
	 */
	public Collection<BaseCust> findAll();

	/**
	 * 查询地理区域管理信息列表(有效的)
	 * 
	 * @return 多笔地理区域管理信息
	 */
	public Collection<BaseCust> findAllByFlag();

	/**
	 * 根据主键删除地理区域管理信息
	 * 
	 * @param crm_cust_id
	 */
	public void delByPk(String crm_cust_id);
	
	/**
	 * 客户动态参数分页查询
	 * 
	 * @param sysJob
	 * @param page
	 * @return
	 */
	public Page<BaseCust> findAllSysJob(BaseCust sysJob, Page<BaseCust> page);
	
	/**
	 * 客户收货人动态参数分页查询
	 * 
	 * @param receivinfo
	 * @param page
	 * @return
	 */
	public Page<BaseCustReceivinfo> findAllReceivinfo(BaseCustReceivinfo receivinfo, Page<BaseCustReceivinfo> page);
	
	/**
	 * 客户联系人动态参数分页查询
	 * 
	 * @param contactsinfo
	 * @param page
	 * @return
	 */
	public Page<BaseCustContactsinfo> findAllContactsinfo(BaseCustContactsinfo contactsinfo, Page<BaseCustContactsinfo> page);
	
	/**
	 * 客户二级账号动态参数分页查询
	 * 
	 * @param account
	 * @param page
	 * @return
	 */
	public Page<BaseCustAccount> findAllAccount(BaseCustAccount account, Page<BaseCustAccount> page);
	
	/**
	 * 根据主键删除客户信息
	 * @param uuid
	 */
	public void delByPk(String crm_cust_id, String updateUser,String updateTime);
	
	/**
	 * 根据主键删除客户联系人信息
	 * @param uuid
	 */
	public void delContactsinfoByPk(String uuid, String updateUser,String updateTime);
	
	/**
	 * 根据主键删除客户二级账号信息
	 * @param uuid
	 */
	public void delAccountByPk(String uuid, String updateUser,String updateTime);
	
	
	/**
	 * 根据主键删除客户收货人信息
	 * @param uuid
	 */
	public void delReceivinfoByPk(String uuid, String updateUser,String updateTime);
	
	
	
	/**
	 * 新增客户信息
	 * @param cust
	 */
	public void insByCust(BaseCust cust);
	
	/**
	 * 新增客户收货人信息
	 * @param receivinfo
	 */
	public void insByCustRece(BaseCustReceivinfo receivinfo);
	
	/**
	 * 新增客户联系人信息
	 * @param contactsinfo
	 */
	public void insByCustCon(BaseCustContactsinfo contactsinfo);
	
	/**
	 * 新增客户二级账号信息
	 * @param account
	 */
	public void insByCustAcc(BaseCustAccount account);
	
	/**
	 * 获取国家，省份，城市，县区
	 * @param id
	 */
	public Collection<BaseRegion> getRegionByParentID(String PId);
	
	/**
	 * 获取国家，省份，城市，县区
	 * @param id
	 */
	public Collection<BaseCustEnterprisetype> getEnterprisetype();
	
	/**
	 * 更新客户信息
	 * @param cust
	 */
	public void updByCust(BaseCust cust);
	
	
	/**
	 * 根据主键查询客户联系人信息
	 * 
	 * @param uuid
	 * @return 一笔客户联系人信息
	 */
	public BaseCustContactsinfo findContactsinfoByPk(String uuid);
	
	/**
	 * 根据主键查询客户收货人信息
	 * 
	 * @param uuid
	 * @return 一笔客户收货人信息
	 */
	public BaseCustReceivinfo findReceivinfoByPk(String uuid);
	
	/**
	 * 根据主键查询客户二级账号信息
	 * 
	 * @param uuid
	 * @return 一笔客户二级账号信息
	 */
	public BaseCustAccount findAccountByPk(String uuid);
	
	
	/**
	 * 更新联系人信息
	 * @param cust
	 */
	public void updBySContactsinfo(BaseCustContactsinfo contactsinfo);
	
	/**
	 * 更新收货人信息
	 * @param cust
	 */
	public void updByReceivinfo(BaseCustReceivinfo receivinfo);
	
	/**
	 * 更新二级账号信息
	 * @param cust
	 */
	public void  updByAccount(BaseCustAccount account) ;
	
}