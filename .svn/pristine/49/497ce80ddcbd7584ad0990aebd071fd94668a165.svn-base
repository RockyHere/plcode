package com.yanbang.security.service;

import java.util.Collection;



import com.yanbang.page.Page;
import com.yanbang.security.entity.SysPost;

/**
 * 服务层接口
 * 
 * 岗位服务接口
 * 
 * @author solvejack
 * 
 */
public interface ISysPostService {
	/**
	 * 根据主键查询岗位信息
	 * 
	 * @param uuid
	 * @return 一笔岗位信息
	 */
	public SysPost findByPk(String uuid);

	/**
	 * 查询岗位信息列表
	 * 
	 * @return 多笔岗位信息
	 */
	public Collection<SysPost> findAll();
	
	/**
	 * 动态参数分页查询
	 * 
	 * @param SysPost
	 * @param page
	 * @return
	 */
	public Page<SysPost> findAllPost(SysPost post, Page<SysPost> page);
	
	/**
	 * 动态参数查询（不分页）
	 * 
	 * @param SysPost
	 * @return
	 */
	public Collection<SysPost> findMutiCondition(SysPost post);
	
	/**
	 * 新增岗位信息
	 * @param post
	 */
	public void insByPost(SysPost post);
	
	/**
	 * 更新岗位信息
	 * @param post
	 */
	public void updByPost(SysPost post);
	
	/**
	 * 根据主键删除岗位信息
	 * @param uuid
	 * @param updUser 当前操作人
	 */
	public void delByPk(String uuid,String updUser);
	
	/**
	 * 删除一笔岗位信息
	 * @param post
	 */
	public void delByPost(SysPost post);
}
