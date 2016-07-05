package com.yanbang.flow.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yanbang.page.Page;
import com.yanbang.flow.dao.IWorkFlowDesignDAO;
import com.yanbang.flow.entity.FlowDesign;

/**
 * @title 服务接口实现类
 * 
 *        工作流设计服务接口实现
 * @version 1.0
 * @author 徐春福
 * 
 */
@Service
public class IWorkFlowDesignServiceImpl implements IWorkFlowDesignService {
	@Autowired
	private IWorkFlowDesignDAO workFlowDesignDAO;

	@Override
	public Page<FlowDesign> findWorkFlowDesign(Page<FlowDesign> page) {
		return workFlowDesignDAO.findWorkFlowDesign(page);
	}

	@Override
	public Page<FlowDesign> findAllFlowDesignByMutiConditon(
			Page<FlowDesign> page, FlowDesign fd) {
		return workFlowDesignDAO.findAllFlowDesignByMutiConditon(page, fd);
	}

	@Override
	public Collection<FlowDesign> findAllFlowDesign() {
		return workFlowDesignDAO.findAllFlowDesign();
	}

	@Override
	public Collection<FlowDesign> findFlowDesignByKey(String key) {
		return workFlowDesignDAO.findFlowDesignByKey(key);
	}

	@Override
	public void deleteFlowDesign(String name, String version) {
		workFlowDesignDAO.deleteFlowDesign(name, version);
	}

	@Override
	public void updateFlowDesign(String name, FlowDesign fd) {
		workFlowDesignDAO.updateFlowDesign(name, fd);
	}

	@Override
	public void updateFLowDesignStatus(String name, String status,
			String version) {
		workFlowDesignDAO.updateFLowDesignStatus(name, status, version);
	}

	@Override
	public void updateFlowDeploy(String name, String version, String deployId,
			String deploydatetime, String deployUser) {
		workFlowDesignDAO.updateFlowDeploy(name, version, deployId,
				deploydatetime, deployUser);
	}

	@Override
	public void saveFlowDesign(FlowDesign fd) {
		workFlowDesignDAO.saveFlowDesign(fd);
	}

	@Override
	public boolean checkFileNameExists(String flowName) {
		return workFlowDesignDAO.checkFileNameExists(flowName);
	}

	@Override
	public FlowDesign findFlowDesignByName(String name, String version) {
		return workFlowDesignDAO.findFlowDesignByName(name, version);
	}
}
