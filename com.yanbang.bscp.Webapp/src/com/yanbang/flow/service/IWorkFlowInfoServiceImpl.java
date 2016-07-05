package com.yanbang.flow.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yanbang.page.Page;
import com.yanbang.flow.dao.IWorkFlowInfoDAO;
import com.yanbang.flow.entity.FlowInfo;
import com.yanbang.flow.entity.WorkFlowActivity;
import com.yanbang.flow.entity.WorkFlowInstance;

/**
 * @title 服务接口实现类
 * 
 *        工作流启动信息接口实现
 * @version 1.0
 * @author 徐春福
 * 
 */
@Service
public class IWorkFlowInfoServiceImpl implements IWorkFlowInfoService {
	@Autowired
	private IWorkFlowInfoDAO workFlowInfoDAO;

	@Override
	public Page<WorkFlowInstance> findWorkFlowInstance(
			Page<WorkFlowInstance> page, String status) {
		return workFlowInfoDAO.findWorkFlowInstance(page, status);
	}

	@Override
	public Page<WorkFlowInstance> findWorkFlowInstanceMutiConditon(
			Page<WorkFlowInstance> page, WorkFlowInstance instance,
			String status) {
		return workFlowInfoDAO.findWorkFlowInstanceMutiConditon(page, instance,
				status);
	}

	@Override
	public List<WorkFlowInstance> findWorkFlowInstances(
			WorkFlowInstance conditionForm) {
		return workFlowInfoDAO.findWorkFlowInstanceMutiConditon(conditionForm);
	}

	@Override
	public void saveWorkFlowInfo(FlowInfo flowInfo) {
		workFlowInfoDAO.saveWorkFlowInfo(flowInfo);
	}

	@Override
	public void deleteWorkFlowInfo(String processId) {
		workFlowInfoDAO.deleteWorkFlowInfo(processId);
	}

	@Override
	public void updateWorkFlowStatus(String status, String processId) {
		workFlowInfoDAO.updateWorkFlowStatus(status, processId);
	}

	@Override
	public FlowInfo findFlowInfoByBase(String processId) {
		return workFlowInfoDAO.findFlowInfoByBase(processId);
	}

	@Override
	public List<WorkFlowActivity> findHistoryActivity(String processId,
			String flowKey, String version) {
		return workFlowInfoDAO.findHistoryActivity(processId, flowKey, version);
	}

	@Override
	public WorkFlowActivity findCurrentActivity(String processId) {
		return workFlowInfoDAO.findCurrentActivity(processId);
	}

}
