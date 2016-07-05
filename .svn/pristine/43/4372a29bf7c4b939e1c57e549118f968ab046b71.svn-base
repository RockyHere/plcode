package com.yanbang.config.service;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yanbang.page.Page;
import com.yanbang.config.dao.ISysDictDAO;
import com.yanbang.config.entity.SysDict;

@Service
public class ISysDictServiceImpl implements ISysDictService {
	@Autowired
	private ISysDictDAO sysDictDAO;

	@Override
	public void saveDict(SysDict dict) {
		sysDictDAO.saveDict(dict);
	}

	@Override
	public void deleteDict(Long dictCode) {
		sysDictDAO.deleteDict(dictCode);
	}

	@Override
	public void updateDict(SysDict dict) {
		sysDictDAO.updateDict(dict);
	}

	@Override
	public Collection<SysDict> findAllDict() {
		return sysDictDAO.findAllDict();
	}

	@Override
	public Page<SysDict> findAllDicts(SysDict dict, Page<SysDict> page) {
		return sysDictDAO.findAllDicts(dict, page);
	}

	@Override
	public SysDict findByDictCode(Long dictCode) {
		return sysDictDAO.findByDictCode(dictCode);
	}

	@Override
	public SysDict findByDictKey(String dictKey) {
		return sysDictDAO.findByDictKey(dictKey);
	}

	@Override
	public Collection<SysDict> findMutiCondition(SysDict dict) {
		return sysDictDAO.findMutiCondition(dict);
	}

	@Override
	public Collection<SysDict> findChildsDict(Long parentId) {
		return sysDictDAO.findChildsDict(parentId);
	}

	@Override
	public Long findDictMaxId() {
		return sysDictDAO.findDictMaxId();
	}

	@Override
	public Collection<SysDict> findParentDict(Long dictCode) {
		Collection<SysDict> dictlist = new ArrayList<SysDict>();
		SysDict dict = sysDictDAO.findByDictCode(dictCode);
		while (dict.getDictParentId() != -1l) {
			SysDict parentdict = sysDictDAO.findByDictCode(dict
					.getDictParentId());
			dictlist.add(parentdict);
			dict = parentdict;
		}
		dictlist.add(dict);
		return dictlist;
	}

	@Override
	public Collection<SysDict> findChildsDict(String parentKey) {
		return sysDictDAO.findChildsDict(parentKey);
	}

}
