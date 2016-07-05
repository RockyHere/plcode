package com.yanbang.security.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.page.Page;
import com.yanbang.security.dao.ISysPostDAO;
import com.yanbang.security.entity.SysPost;
import com.yanbang.util.ConstantMethod;
import com.yanbang.util.DateUtil;
import com.yanbang.util.UtilMethod;

@Service
@Transactional
public class ISysPostServiceImpl implements ISysPostService {
	@Autowired
	private ISysPostDAO sysPostDAO;

	@Override
	public SysPost findByPk(String uuid) {
		return sysPostDAO.findByPk(uuid);
	}

	@Override
	public Collection<SysPost> findAll() {
		return sysPostDAO.findAll();
	}

	@Override
	public Page<SysPost> findAllPost(SysPost post, Page<SysPost> page) {
		return sysPostDAO.findAllPost(post, page);
	}

	@Override
	public Collection<SysPost> findMutiCondition(SysPost post) {
		return sysPostDAO.findMutiCondition(post);
	}

	@Override
	public void insByPost(SysPost post) {
		post.setUuid(UtilMethod.getUUID());
		post.setUpdateTime(DateUtil.Now());
		post.setUseFlag(ConstantMethod.FLAG_1);
		sysPostDAO.insByPost(post);
	}

	@Override
	public void updByPost(SysPost post) {
		post.setUpdateTime(DateUtil.Now());
		sysPostDAO.updByPost(post);
	}

	@Override
	public void delByPk(String uuid,String updUser) {
		sysPostDAO.delByPk(uuid, updUser, DateUtil.Now());
	}

	@Override
	public void delByPost(SysPost post) {
		post.setUpdateTime(DateUtil.Now());
		sysPostDAO.delByPost(post);
	}
}
