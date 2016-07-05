package com.yanbang.flow.service;

import java.util.List;

import com.yanbang.page.Page;
import com.yanbang.flow.entity.FlowInfo;
import com.yanbang.flow.entity.WorkFlowActivity;
import com.yanbang.flow.entity.WorkFlowInstance;

/**
 * @title 服务接口
 * 
 *        工作流启动信息接口
 * @version 1.0
 * @author 徐春福
 * 
 */
public interface IWorkFlowInfoService {
	/**
	 * 查询工作流实例
	 * 
	 * @param page
	 * @return
	 */
	public Page<WorkFlowInstance> findWorkFlowInstance(
			Page<WorkFlowInstance> page, String status);

	/**
	 * 多条件查询工作流实例
	 * 
	 * @param page
	 * @param wfd
	 * @return
	 */
	public Page<WorkFlowInstance> findWorkFlowInstanceMutiConditon(
			Page<WorkFlowInstance> page, WorkFlowInstance instance,
			String status);

	/**
	 * 
	 * 动态参数查询未完成的流程，不分页
	 * 
	 * @param conditionForm
	 * @return
	 */
	public List<WorkFlowInstance> findWorkFlowInstances(
			WorkFlowInstance conditionForm);

	/**
	 * 记录流程启动信息
	 * 
	 * @param flowInfo
	 */
	public void saveWorkFlowInfo(FlowInfo flowInfo);

	/**
	 * 删除流程启动信息
	 * 
	 * @param processId
	 *            业务处理编号
	 */
	public void deleteWorkFlowInfo(String processId);

	/**
	 * 修改流程记录状态
	 * 
	 * @param status
	 *            流程实例状态：active(活动)|final(终结)|delete(删除)
	 */
	public void updateWorkFlowStatus(String status, String processId);

	/**
	 * 查询流程启动信息
	 * 
	 * 
	 * @param processId
	 * @return
	 */
	public FlowInfo findFlowInfoByBase(String processId);

	/**
	 * 查询流程已经经过的节点
	 * 
	 * @param processId
	 * @return
	 */
	public List<WorkFlowActivity> findHistoryActivity(String processId,
			String flowKey, String version);

	/**
	 * 查询当前节点坐标信息
	 * 
	 * @param processId
	 * @return
	 */
	public WorkFlowActivity findCurrentActivity(String processId);
}
