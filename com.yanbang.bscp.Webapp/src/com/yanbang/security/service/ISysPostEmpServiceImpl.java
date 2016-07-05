package com.yanbang.security.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.security.dao.ISysPostEmpDAO;
import com.yanbang.security.entity.SysPostEmp;
import com.yanbang.security.model.PostEmpModel;
import com.yanbang.util.UtilMethod;
@Service
@Transactional
public class ISysPostEmpServiceImpl implements  ISysPostEmpService{
	@Autowired
	private ISysPostEmpDAO sysPostEmpDAO;

	@Override
	public Collection<PostEmpModel> queryPostByEmp(String empId) {
		// TODO 自动生成的方法存根
		return sysPostEmpDAO.queryPostByEmp(empId);
	}

	@Override
	public void insByPostEmp(SysPostEmp postEmp) {
		// TODO 自动生成的方法存根
		postEmp.setUuid(UtilMethod.getUUID());
		sysPostEmpDAO.insByPostEmp(postEmp);
	}

	@Override
	public void updByPostEmp(SysPostEmp postEmp) {
		// TODO 自动生成的方法存根
		sysPostEmpDAO.updByPostEmp(postEmp);
	}

	@Override
	public void delByPostEmp(SysPostEmp postEmp) {
		// TODO 自动生成的方法存根
		sysPostEmpDAO.delByPostEmp(postEmp);
	}

	@Override
	public void delByPk(String uuid) {
		// TODO 自动生成的方法存根
		sysPostEmpDAO.delByPk(uuid);
	}
}
