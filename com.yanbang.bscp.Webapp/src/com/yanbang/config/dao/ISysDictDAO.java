package com.yanbang.config.dao;

import java.util.Collection;

import com.yanbang.page.Page;
import com.yanbang.config.entity.SysDict;

/**
 * 持久层接口
 * 
 * 词条DAO接口
 * 
 * @author Tong Baojun
 * 
 */
public interface ISysDictDAO {
	/**
	 * 保存词条
	 * 
	 * @param dict
	 */
	public void saveDict(SysDict dict);

	/**
	 * 删除指定dictCode（ID）的记录
	 * 
	 * @param dictCode
	 */
	public void deleteDict(Long dictCode);

	/**
	 * 修改词条
	 * 
	 * @param dict
	 */
	public void updateDict(SysDict dict);

	/**
	 * 查询所有词条
	 * 
	 * @return
	 */
	public Collection<SysDict> findAllDict();

	/**
	 * 动态参数分页查询词条
	 * 
	 * @param dict
	 * @param page
	 * @return
	 */
	public Page<SysDict> findAllDicts(SysDict dict, Page<SysDict> page);

	/**
	 * 查询指定ID的记录
	 * 
	 * @param dictCode
	 * @return
	 */
	public SysDict findByDictCode(Long dictCode);

	/**
	 * 根据关键字查询数据词条
	 * 
	 * @param dictKey
	 * @return
	 */
	public SysDict findByDictKey(String dictKey);

	/**
	 * 动态参数查询（不分页）
	 * 
	 * @param dict
	 * @return
	 */
	public Collection<SysDict> findMutiCondition(SysDict dict);

	/**
	 * 查询指定ID的子记录
	 * 
	 * @param parentId
	 * @return
	 */
	public Collection<SysDict> findChildsDict(Long parentId);

	/**
	 * 获取自增长+1的编号
	 * 
	 * @return
	 */
	public Long findDictMaxId();

	/**
	 * 查询词条的子词条
	 * @param parentKey 父词条key
	 * @return
	 */
	public  Collection<SysDict> findChildsDict(String parentKey);
}
