package com.yanbang.security.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.page.Page;
import com.yanbang.security.dao.ISysEmployeeDAO;
import com.yanbang.security.entity.SysEmployee;
import com.yanbang.security.model.EmpModel;
import com.yanbang.util.ConstantMethod;
import com.yanbang.util.DateUtil;
import com.yanbang.util.UtilMethod;

@Service
@Transactional
public class ISysEmployeeServiceImpl implements ISysEmployeeService {
	@Autowired
	private ISysEmployeeDAO sysEmployeeDAO;

	@Override
	public SysEmployee findByPk(String uuid) {
		return sysEmployeeDAO.findByPk(uuid);
	}

	@Override
	public Collection<SysEmployee> findAll() {
		return sysEmployeeDAO.findAll();
	}

	@Override
	public void insBySysEmployee(SysEmployee sysEmployee) {
		sysEmployee.setUuid(UtilMethod.getUUID());
		sysEmployee.setUpdateTime(DateUtil.Now());
		sysEmployee.setUseFlag(ConstantMethod.FLAG_1);
		sysEmployeeDAO.insBySysEmployee(sysEmployee);
	}

	@Override
	public void updBySysEmployee(SysEmployee sysEmployee) {
		//更新SysEmployee
		sysEmployee.setUpdateTime(DateUtil.Now());
		sysEmployeeDAO.updBySysEmployee(sysEmployee);
	}

	@Override
	public void delByPk(String uuid) {
		sysEmployeeDAO.delByPk(uuid);
	}

	@Override
	public void delBySysEmployee(SysEmployee sysEmployee) {
		sysEmployeeDAO.delBySysEmployee(sysEmployee);
	}

	@Override
	public Page<SysEmployee> findAllSysEmployee(SysEmployee sysEmployee, Page<SysEmployee> page) {
		return sysEmployeeDAO.findAllSysEmployee(sysEmployee, page);
	}

	@Override
	public Collection<SysEmployee> findMutiCondition(SysEmployee sysEmployee) {
		return sysEmployeeDAO.findMutiCondition(sysEmployee);
	}

	@Override
	public Page<EmpModel> findAllSysEmployeeByModel(SysEmployee sysEmployee,
			Page<EmpModel> page) {
		return sysEmployeeDAO.findAllSysEmployeeByModel(sysEmployee, page);
	}
}
