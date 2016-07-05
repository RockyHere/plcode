package com.yanbang.flow.service;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yanbang.page.Page;
import com.yanbang.flow.dao.IWorkFlowManageDAO;
import com.yanbang.flow.entity.DeployWorkFlow;
import com.yanbang.flow.entity.MyEntry;
import com.yanbang.flow.entity.WorkFlowHistoryActivity;
import com.yanbang.flow.entity.WorkFlowHistoryDetail;
import com.yanbang.flow.entity.WorkFlowHistoryInstance;
import com.yanbang.flow.entity.WorkFlowHistoryProcess;
import com.yanbang.flow.entity.WorkFlowHistoryTask;
import com.yanbang.flow.entity.WorkFlowTask;
import com.yanbang.security.entity.SysUser;

/**
 * @title 服务接口
 * 
 *        工作流管理接口实现
 * @version 1.0
 * @author 徐春福
 * 
 */
@Service
public class IWorkFlowManageServiceImpl implements IWorkFlowManageService {
	@Autowired
	private IWorkFlowManageDAO workFlowManageDAO;

	@Override
	public String fileDeploy(String jpdlFile, String jdplPNGImageFile) {
		return workFlowManageDAO.deploy(jpdlFile, jdplPNGImageFile);
	}

	@Override
	public String zipDeploy(String jpdlZipFile) {
		return workFlowManageDAO.deploy(jpdlZipFile);
	}

	@Override
	public String startWorkFlow(ArrayList<MyEntry> variable, String flowKey) {
		HashMap<String, Object> result = new HashMap<String, Object>();
		for (MyEntry entry : variable) {
			result.put(entry.getKey(), entry.getValue());
		}
		return workFlowManageDAO.startWorkFlow(result, flowKey);
	}

	@Override
	public List<WorkFlowTask> findPersonalTasks(String userNickName) {
		return workFlowManageDAO.findPersonalTasks(userNickName);
	}

	@Override
	public List<WorkFlowTask> findTransPersonalTasks(String userNickName,
			String flowType) {
		return workFlowManageDAO.findTransPersonalTasks(userNickName, flowType);
	}

	@Override
	public List<WorkFlowTask> findGroupTasks(String userNickName) {
		return workFlowManageDAO.findGroupTasks(userNickName);
	}

	@Override
	public List<WorkFlowTask> findTransGroupTasks(String userNickName,
			String flowType) {
		return workFlowManageDAO.findTransGroupTasks(userNickName, flowType);
	}

	@Override
	public void takeTask(String taskId, String userNickName) {
		workFlowManageDAO.takeTask(taskId, userNickName);
	}

	@Override
	public void completeTaskA(String taskId) {
		workFlowManageDAO.completeTask(taskId);
	}

	@Override
	public void completeTaskB(String taskId, ArrayList<MyEntry> variable) {
		HashMap<String, Object> result = new HashMap<String, Object>();
		for (MyEntry entry : variable) {
			result.put(entry.getKey(), entry.getValue());
		}
		workFlowManageDAO.completeTask(taskId, result);
	}

	@Override
	public void completeTaskC(String taskId, String transitionName) {
		workFlowManageDAO.completeTask(taskId, transitionName);
	}

	@Override
	public String getFlowCurLoaction(String executeId) {
		return workFlowManageDAO.getFlowCurLoaction(executeId);
	}

	@Override
	public String getFlowVariables(String executeId, String key) {
		return workFlowManageDAO.getFlowVariables(executeId, key);
	}

	@Override
	public void updateFlowVariable(String executeId, String key, Object value) {
		workFlowManageDAO.updateFlowVariable(executeId, key, value);
	}

	@Override
	public void createFlowVariable(String executeId, String key, Object value) {
		workFlowManageDAO.createFlowVariable(executeId, key, value);
	}

	@Override
	public void createFlowTaskVariable(String taskId,
			ArrayList<MyEntry> variable) {
		HashMap<String, Object> result = new HashMap<String, Object>();
		for (MyEntry entry : variable) {
			result.put(entry.getKey(), entry.getValue());
		}
		workFlowManageDAO.createTaskVariable(taskId, result);
	}

	@Override
	public String getTaskVariable(String taskId, String key) {
		return workFlowManageDAO.getTaskVariable(taskId, key);
	}

	@Override
	public void suspendFlow(String deploymentId) {
		workFlowManageDAO.suspendFlow(deploymentId);
	}

	@Override
	public void resumeFlow(String deploymentId) {
		workFlowManageDAO.resumeFlow(deploymentId);
	}

	@Override
	public void deleteFlow(String deploymentId) {
		workFlowManageDAO.deleteFlow(deploymentId);
	}

	@Override
	public void deleteFlowCascade(String deploymentId) {
		workFlowManageDAO.deleteFlowCascade(deploymentId);
	}

	@Override
	public void deleteFlowInstance(String processInstanceId) {
		workFlowManageDAO.deleteFlowInstance(processInstanceId);
	}

	@Override
	public void endFlowInstance(String processInstanceId, String state) {
		workFlowManageDAO.endFlowInstance(processInstanceId, state);
	}

	@Override
	public void nextStep(String executionId) {
		workFlowManageDAO.nextStep(executionId);
	}

	@Override
	public void backStep(String taskId, String flowName) {
		workFlowManageDAO.backStep(taskId, flowName);
	}

	@Override
	public Page<DeployWorkFlow> findWorkFlows(Page<DeployWorkFlow> page) {
		return workFlowManageDAO.findWorkFlows(page);
	}

	@Override
	public Collection<DeployWorkFlow> findAllWorkFlow() {
		return workFlowManageDAO.findAllWorkFlow();
	}

	@Override
	public Page<DeployWorkFlow> findAllWorkFlowsByMutiConditon(
			Page<DeployWorkFlow> page, DeployWorkFlow wfm) {
		return workFlowManageDAO.findAllWorkFlowsByMutiConditon(page, wfm);
	}

	@Override
	public InputStream findImage(String deploymentId) {
		return workFlowManageDAO.findImage(deploymentId);
	}

	@Override
	public Collection<String> getIncomingTransitions(String taskId,
			String flowkey, String verison) {
		return workFlowManageDAO.getIncomingTransitions(taskId, flowkey,
				verison);
	}

	@Override
	public Collection<String> getOutcomingTransitions(String taskId,
			String flowkey, String verison) {
		return workFlowManageDAO.getOutcomingTransitions(taskId, flowkey,
				verison);
	}

	@Override
	public Long getCurTaskId(String executeId) {
		return workFlowManageDAO.getCurTaskId(executeId);
	}

	@Override
	public Collection<WorkFlowHistoryActivity> findWorkFlowHistoryActivityInstance(
			String processId) {
		return workFlowManageDAO.findWorkFlowHistoryActivityInstance(processId);
	}

	@Override
	public Collection<WorkFlowHistoryProcess> findWorkFlowHistoryProcessInstance(
			String processId) {
		return workFlowManageDAO.findWorkFlowHistoryProcessInstance(processId);
	}

	@Override
	public Collection<WorkFlowHistoryTask> findWorkFlowHistoryTask(
			String executionId) {
		return workFlowManageDAO.findWorkFlowHistoryTask(executionId);
	}

	@Override
	public Collection<WorkFlowHistoryDetail> findWorkFlowHistoryDetail(
			String processId) {
		return workFlowManageDAO.findWorkFlowHistoryDetail(processId);
	}

	@Override
	public Collection<WorkFlowHistoryInstance> findAllHistoryWorkFlow(
			String executId) {
		return workFlowManageDAO.findAllHistoryWorkFlow(executId);
	}

	@Override
	public Page<WorkFlowHistoryProcess> findHistoryWorkFlows(String flowTypeId,
			Page<WorkFlowHistoryProcess> page) {
		return workFlowManageDAO.findHistoryWorkFlows(flowTypeId, page);
	}

	@Override
	public Page<WorkFlowHistoryProcess> findHistoryWorkFlowsByMutiConditon(
			Page<WorkFlowHistoryProcess> page, WorkFlowHistoryProcess wfhi) {
		return workFlowManageDAO.findHistoryWorkFlowsByMutiConditon(page, wfhi);
	}

	@Override
	public Collection<WorkFlowTask> findOtherPersonTask(String userNickName) {
		return workFlowManageDAO.findOtherPersonTask(userNickName);
	}

	@Override
	public Collection<WorkFlowTask> findTransOtherPersonTask(
			String userNickName, String flowType) {
		return workFlowManageDAO.findTransOtherPersonTask(userNickName,
				flowType);
	}

	@Override
	public Collection<WorkFlowTask> findFinishedPersonTask(String userNickName) {
		return workFlowManageDAO.findFinishedPersonTask(userNickName);
	}

	@Override
	public Collection<WorkFlowTask> findTransFinishedPersonTask(
			String userNickName, String flowType) {
		return workFlowManageDAO.findTransFinishedPersonTask(userNickName,
				flowType);
	}

	@Override
	public String findDeployId(String flowKey) {
		return workFlowManageDAO.findDeployId(flowKey);
	}

	@Override
	public String createGroup(String roleId, String roleValue, String roleKey) {
		String StrGroup = roleId + "#" + roleValue + "#" + roleKey;
		return workFlowManageDAO.createGroup(StrGroup);
	}

	@Override
	public String createUser(String userId, String givenName, String familyName) {
		return workFlowManageDAO.createUser(userId, givenName, familyName);
	}

	@Override
	public void createMembership(String userId, String groupId) {
		workFlowManageDAO.createMembership(userId, groupId);
	}

	@Override
	public String findCurTaskNodeRoleValue(String taskId) {
		return workFlowManageDAO.findCurTaskNodeRoleValue(taskId);
	}

	@Override
	public void undoFinishedTask(String flowInstanceId) {
		workFlowManageDAO.undoFinishedTask(flowInstanceId);
	}

	@Override
	public Collection<SysUser> findUserNameByRole(String taskId) {
		return workFlowManageDAO.findUserNameByRole(taskId);
	}
}
