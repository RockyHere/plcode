package com.yanbang.flow.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yanbang.flow.dao.IWorkFlowProcessDAO;
import com.yanbang.flow.entity.FlowProcess;

/**
 * @title 服务接口实现类
 * 
 *        工作流执行情况接口实现
 * @version 1.0
 * @author 徐春福
 * 
 */
@Service
public class IWorkFlowProcessServiceImpl implements IWorkFlowProcessService {
	@Autowired
	private IWorkFlowProcessDAO workFlowProcessDAO;

	@Override
	public void saveWorkFlowProcess(FlowProcess flowProcess) {
		workFlowProcessDAO.saveWorkFlowProcess(flowProcess);
	}

	@Override
	public void deleteWorkFlowProcess(String processInstanceId) {
		workFlowProcessDAO.deleteWorkFlowProcess(processInstanceId);
	}

	@Override
	public Collection<FlowProcess> findFlowProcessByFlowId(String flowId) {
		return workFlowProcessDAO.findFlowProcessByFlowId(flowId);
	}

}
