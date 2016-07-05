package com.yanbang.flow.service;

import java.util.Collection;

import com.yanbang.flow.entity.FlowProcess;

/**
 * @title 服务接口
 * 
 *        工作流执行情况接口
 * @version 1.0
 * @author 徐春福
 * 
 */
public interface IWorkFlowProcessService {
	/**
	 * 记录流程执行情况
	 * 
	 * 执行编号processkey,执行时间processdatetime系统自动计算
	 * 
	 * @param flowProcess
	 */
	public void saveWorkFlowProcess(FlowProcess flowProcess);

	/**
	 * 删除流程执行情况
	 * 
	 * @param processkey
	 */
	public void deleteWorkFlowProcess(String processInstanceId);

	/**
	 * 查询流程执行情况
	 * 
	 * @param processId
	 * @return
	 */
	public Collection<FlowProcess> findFlowProcessByFlowId(String flowId);
}
