package com.yanbang.security.dao;

import java.util.Collection;

import com.yanbang.page.Page;
import com.yanbang.security.entity.SysPost;

/**
 * 持久层接口
 * 
 * 岗位DAO接口
 * 
 * @author solvejack
 * 
 */
public interface ISysPostDAO {
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
	 * 新增岗位信息
	 * 
	 * @param post
	 */
	public void insByPost(SysPost post);

	/**
	 * 更新岗位信息
	 * 
	 * @param post
	 */
	public void updByPost(SysPost post);

	/**
	 * 根据主键删除岗位信息
	 * 
	 * @param uuid
	 */
	public void delByPk(String uuid);

	/**
	 * 根据主键删除岗位信息
	 * 
	 * @param uuid
	 * @param updateUser
	 * @param updateTime
	 */
	public void delByPk(String uuid, String updateUser, String updateTime);

	/**
	 * 删除一笔岗位信息
	 * 
	 * @param post
	 */
	public void delByPost(SysPost post);

	/**
	 * 动态参数分页查询
	 * 
	 * @param post
	 * @param page
	 * @return
	 */
	public Page<SysPost> findAllPost(SysPost post, Page<SysPost> page);

	/**
	 * 动态参数查询（不分页）
	 * 
	 * @param post
	 * @return
	 */
	public Collection<SysPost> findMutiCondition(SysPost post);
}
