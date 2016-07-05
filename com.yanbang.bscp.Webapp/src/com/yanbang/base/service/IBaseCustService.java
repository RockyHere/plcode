
package com.yanbang.base.service;
import java.util.Collection;

import com.yanbang.base.entity.BaseCust;
import com.yanbang.base.entity.BaseCustAccount;
import com.yanbang.base.entity.BaseCustContactsinfo;
import com.yanbang.base.entity.BaseCustEnterprisetype;
import com.yanbang.base.entity.BaseCustReceivinfo;
import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.base.entity.BaseRegion;
import com.yanbang.page.Page;
import com.yanbang.security.entity.SysOrg;


/**
 * 持久层接口
 * 组织机构DAO
 * @author yechuncheng
 *
 */
public interface IBaseCustService {
	/**
	 * 根据主键查询组织机构信息
	 * 
	 * @param uuid
	 * @return 一笔组织机构信息
	 */
	public BaseCust findByPk(String uuid);
	/**
	 * 查询组织机构信息列表
	 * 
	 * @return 多笔组织机构信息
	 */
	public Collection<BaseCust> findAll();
	
	/**
	 * 查询组织机构信息列表(有效的)
	 * 
	 * @return 多笔组织机构信息
	 */
	public Collection<BaseCust> findAllByFlag();
	/**
	 * 根据主键删除客户信息
	 * @param uuid
	 */
	public void delByPk(String uuid);
	
	/**
	 * 根据主键删除客户信息
	 * @param uuid
	 */
	public void delByPk(String crm_cust_id,String updUser);
	
	/**
	 * 根据主键删除客户联系人信息
	 * @param uuid
	 */
	public void delContactsinfoByPk(String uuid,String updUser);
	
	/**
	 * 根据主键删除客户二级账号信息
	 * @param uuid
	 */
	public void delAccountByPk(String uuid,String updUser);
	
	
	/**
	 * 根据主键删除客户收货人信息
	 * @param uuid
	 */
	public void delReceivinfoByPk(String uuid,String updUser);
	
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
	 * @param receivinfo
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
	 * 新增客户信息
	 * @param cust
	 */
	public void insBySysJob(BaseCust cust);
	
	/**
	 * 新增客户联系人信息
	 * @param contactsinfo
	 */
	public void insByContactsinfo(BaseCustContactsinfo contactsinfo);
	
	/**
	 * 新增客户收货人信息
	 * @param contactsinfo
	 */
	public void insByReceivinfo(BaseCustReceivinfo receivinfo);
	
	/**
	 * 新增客户二级账号信息
	 * @param custaccount
	 */
	public void insByAccount(BaseCustAccount custaccount);
	
	
	/**
	 * 查询区域信息列表(有效的)
	 * 
	 * @return 多笔城市信息
	 */
	public Collection<BaseRegion> findAllRegionByParentId(String pId);
	
	/**
	 * 查询企业类型信息列表(有效的)
	 * 
	 * @return 多笔企业类型信息
	 */
	public Collection<BaseCustEnterprisetype> findAllEnterprisetype();
	
	/**
	 * 更新客户信息
	 * @param cust
	 */
	public void updBySysJob(BaseCust cust);
	
	/**
	 * 根据主键查询客户联系人信息
	 * 
	 * @param uuid
	 * @return 一笔联系人信息
	 */
	public BaseCustContactsinfo findContactsinfoByPk(String uuid);
	
	/**
	 * 根据主键查询客户收货人信息
	 * 
	 * @param uuid
	 * @return 一笔收货人信息
	 */
	public BaseCustReceivinfo findReceivinfoByPk(String uuid);
	
	/**
	 * 根据主键查询客户二级账号信息
	 * 
	 * @param uuid
	 * @return 一笔二级账号信息
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
	public void updByAccount(BaseCustAccount account);
	
	
}
