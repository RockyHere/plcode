package com.yanbang.flow.dao;

import java.util.Collection;

import com.yanbang.flow.entity.FlowProcess;

/**
 * @title 工作流 DAO接口
 * 
 *        记录流程的执行情况
 * 
 *        entitybean:FlowProcess
 * @version 1.0
 * @author 徐春福
 * 
 */
public interface IWorkFlowProcessDAO {
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
	 * @param processInstanceId
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
