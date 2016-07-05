package com.yanbang.flow.dao;

import java.io.InputStream;
import java.util.Collection;
import java.util.List;
import java.util.Map;

import com.yanbang.page.Page;
import com.yanbang.flow.entity.DeployWorkFlow;
import com.yanbang.flow.entity.WorkFlowHistoryActivity;
import com.yanbang.flow.entity.WorkFlowHistoryDetail;
import com.yanbang.flow.entity.WorkFlowHistoryInstance;
import com.yanbang.flow.entity.WorkFlowHistoryProcess;
import com.yanbang.flow.entity.WorkFlowHistoryTask;
import com.yanbang.flow.entity.WorkFlowTask;
import com.yanbang.security.entity.SysUser;

/**
 * @title 工作流管理 DAO接口
 * 
 *        工作流管理 DAO接口
 * @version 1.0
 * @author 徐春福
 * 
 */
public interface IWorkFlowManageDAO {
	/**
	 * 工作流流程部署
	 * 
	 * @param jpdlFile
	 *            *.jpdl.xml文件的路径信息，例如：com/jbpm/demo/demo.jpdl.xml
	 * @param jdplPNGImageFile
	 *            *.png工作流产生的图片信息，例如：com/jbpm/demo/demo.png
	 * @return 资源服务接口产生的唯一的deploymentId
	 */
	public String deploy(String jpdlFile, String jdplPNGImageFile);

	/**
	 * 工作流流程部署
	 * 
	 * @param jpdlZipFile
	 *            由*.jpdl.xml和*.png所组成的zip格式压缩文件包
	 * @return 资源服务接口产生的唯一的deploymentId
	 */
	public String deploy(String jpdlZipFile);

	/**
	 * 启动流程实例
	 * 
	 * @param variable
	 *            流程变量 <br>
	 *            例如：Map<String, Object> variable = new HashMap<String,
	 *            Object>();<br>
	 *            variable.put("unitId", "1002");
	 * @param flowKey
	 *            流程关键字
	 * @return 流程实例编号executeId
	 */
	public String startWorkFlow(Map<String, Object> variable, String flowKey);

	/**
	 * 获取用户个人待办任务
	 * 
	 * @param userNickName
	 *            用户呢称
	 * @return
	 */
	public List<WorkFlowTask> findPersonalTasks(String userNickName);

	/**
	 * 获取用户个人待办任务(事务)
	 * 
	 * @param userNickName
	 *            用户呢称
	 * @return
	 */
	public List<WorkFlowTask> findTransPersonalTasks(String userNickName,
			String flowType);

	/**
	 * 获取用户组可以办理的任务
	 * 
	 * @return
	 */
	public List<WorkFlowTask> findGroupTasks(String userNickName);

	/**
	 * 获取用户组可以办理的任务(事务)
	 * 
	 * @return
	 */
	public List<WorkFlowTask> findTransGroupTasks(String userNickName,
			String flowType);

	/**
	 * 分配任务给某个用户
	 * 
	 * @param taskId
	 * @param userNickName
	 */
	public void takeTask(String taskId, String userNickName);

	/**
	 * 办理任务 根据任务编号
	 * 
	 * @param taskId
	 */
	public void completeTask(String taskId);

	/**
	 * 办理任务 根据任务编号
	 * 
	 * @param taskId
	 * @param variable
	 *            设置变量，可以指定下一步用户 <br>
	 *            Map<String, Object> vars = new HashMap<String, Object>(); <br>
	 *            vars.put("assignUsers", "usr1,usr2");
	 */
	public void completeTask(String taskId, Map<String, Object> variable);

	/**
	 * 办理任务，指定流程方向的
	 * 
	 * @param taskId
	 * @param transitionName
	 *            "to drector"
	 */
	public void completeTask(String taskId, String transitionName);

	/**
	 * 流程执行的当前结点位置
	 * 
	 * @param executeId
	 *            流程实例编号
	 * @return
	 */
	public String getFlowCurLoaction(String executeId);

	/**
	 * 获取流程变量
	 * 
	 * @param executeId
	 * @param key
	 * @return
	 */
	public String getFlowVariables(String executeId, String key);

	/**
	 * 修改流程变量
	 * 
	 * @param executeId
	 * @param key
	 * @param value
	 */
	public void updateFlowVariable(String executeId, String key, Object value);

	/**
	 * 创建流程变量<br>
	 * 流程变量:只要流程不完成，在那个结点都可以取到变量,如果流程结束，需要从历史表中获取
	 * 
	 * @param executeId
	 * @param key
	 * @param value
	 */
	public void createFlowVariable(String executeId, String key, Object value);

	/**
	 * 创建任务变量<br>
	 * 任务变量：是针对某个任务定义的变量
	 * 
	 * @param taskId
	 * @param variable
	 * <br>
	 *            Map<String, Object> variable = new HashMap<String, Object>(); <br>
	 *            variable.put("taskuserId", "task001"); <br>
	 *            variable.put("taskuserName", "taskxuchunfu");
	 */
	public void createTaskVariable(String taskId, Map<String, Object> variable);

	/**
	 * 获取任务变量
	 * 任务变量可以取到流程变量的值,流程实例比任务大，流程的作用域比任务的作用域大,一个流程的变量在另一个流程中是不能访问的,任务与任务之间不能访问
	 * 
	 * @param taskId
	 * @param key
	 */
	public String getTaskVariable(String taskId, String key);

	/**
	 * 流程作废
	 * 
	 * @param deploymentId
	 */
	public void suspendFlow(String deploymentId);

	/**
	 * 流程恢复
	 * 
	 * @param deploymentId
	 */
	public void resumeFlow(String deploymentId);

	/**
	 * 删除流程
	 * 
	 * 存在活动的流程实例， 这个方法就会抛出异常
	 * 
	 * @param deploymentId
	 */
	public void deleteFlow(String deploymentId);

	/**
	 * 级联删除流程部署
	 * 
	 * 级联删除一个发布中流程定义的所有流程实例
	 * 
	 * @param deploymentId
	 */
	public void deleteFlowCascade(String deploymentId);

	/**
	 * 删除流程实例
	 * 
	 * @param processInstanceId
	 *            流程实例编号
	 * 
	 *            ProcessInstance pi
	 *            =executionService.startProcessInstanceByKey(flowKey);
	 *            pi.getId()
	 */
	public void deleteFlowInstance(String processInstanceId);

	/**
	 * 终止流程实例
	 * 
	 * @param processInstanceId
	 *            流程实例编号
	 * @param state
	 *            强制终结流程的理由,本程序中只能为ended，否则历史实例中无法查询<br>
	 *            ProcessInstance pi
	 *            =executionService.startProcessInstanceByKey("key");
	 *            endProcessInstance(pi.getId(), "结束流程");
	 */
	public void endFlowInstance(String processInstanceId, String state);

	/**
	 * 节点向下执行
	 * 
	 * @param executionId
	 *            ProcessInstance pi =
	 *            executionService.startProcessInstanceByKey("helloworld"); pi=
	 *            executionService.signalExecutionById(pi.getId());
	 *            pi.isEnded();
	 */
	public void nextStep(String executionId);

	/**
	 * 流程回退
	 * 
	 * @param taskId
	 */
	public void backStep(String taskId, String flowName);

	/**
	 * 查询已部署的工作流
	 * 
	 * @param page
	 * @return
	 */
	public Page<DeployWorkFlow> findWorkFlows(Page<DeployWorkFlow> page);

	/**
	 * 查询已部署的工作流
	 * 
	 * @return
	 */
	public Collection<DeployWorkFlow> findAllWorkFlow();

	/**
	 * 多条件查询已部署工作流
	 * 
	 * @param page
	 * @param wfm
	 * @return
	 */
	public Page<DeployWorkFlow> findAllWorkFlowsByMutiConditon(
			Page<DeployWorkFlow> page, DeployWorkFlow wfm);

	/**
	 * 获取流程图数据流
	 */
	public InputStream findImage(String deploymentId);

	/**
	 * 获取当前节点的输入联结
	 * 
	 * @param taskId
	 * @param flowkey
	 * @return
	 */
	public Collection<String> getIncomingTransitions(String taskId,
			String flowkey, String verison);

	/**
	 * 获取当前节点的输出联结
	 * 
	 * @param taskId
	 * @param flowkey
	 * @return
	 */
	public Collection<String> getOutcomingTransitions(String taskId,
			String flowkey, String verison);

	/**
	 * 获取当前任务实例的当前任务编号（只在任务启动的时候使用，任务执行过程中产生多个任务情况，此方法不能使用）
	 * 
	 * @param executeId
	 * @return
	 */
	public Long getCurTaskId(String executeId);

	/**
	 * 查询历史活动实例信息
	 * 
	 * 对应数据库表：soa_flow_hist_actinst
	 * 
	 * @param processId
	 * @return
	 */
	public Collection<WorkFlowHistoryActivity> findWorkFlowHistoryActivityInstance(
			String processId);

	/**
	 * 查询历史实例的过程信息
	 * 
	 * 对应数据库表：soa_flow__HIST_PROCINST
	 * 
	 * @param processId
	 * @return
	 */
	public Collection<WorkFlowHistoryProcess> findWorkFlowHistoryProcessInstance(
			String processId);

	/**
	 * 查询历史任务信息
	 * 
	 * 对应数据库表：soa_flow__HIST_TASK
	 * 
	 * @param executionId
	 * @return
	 */
	public Collection<WorkFlowHistoryTask> findWorkFlowHistoryTask(
			String executionId);

	/**
	 * 查询历史记录细节
	 * 
	 * 对应数据库表：soa_flow__HIST_Detail
	 * 
	 * @param processId
	 * @return
	 */
	public Collection<WorkFlowHistoryDetail> findWorkFlowHistoryDetail(
			String processId);

	/**
	 * 查询历史的工作流
	 * 
	 * @param orgId
	 * @return
	 */
	public Collection<WorkFlowHistoryInstance> findAllHistoryWorkFlow(
			String executId);

	/**
	 * 查询历史的工作流
	 * 
	 * @param orgId
	 * @param page
	 * @return
	 */
	public Page<WorkFlowHistoryProcess> findHistoryWorkFlows(String flowTypeId,
			Page<WorkFlowHistoryProcess> page);

	/**
	 * 多条件查询历史工作流
	 * 
	 * @param orgId
	 * @param page
	 * @param wfhi
	 * @return
	 */
	public Page<WorkFlowHistoryProcess> findHistoryWorkFlowsByMutiConditon(
			Page<WorkFlowHistoryProcess> page, WorkFlowHistoryProcess wfhi);

	/**
	 * 查找他人事务
	 * 
	 * @param userNickName
	 * @return
	 */
	public Collection<WorkFlowTask> findOtherPersonTask(String userNickName);

	/**
	 * 查找他人事务(事务)
	 * 
	 * @param userNickName
	 * @return
	 */
	public Collection<WorkFlowTask> findTransOtherPersonTask(
			String userNickName, String flowType);

	/**
	 * 查找完成事务
	 * 
	 * @param userNickName
	 * @return
	 */
	public Collection<WorkFlowTask> findFinishedPersonTask(String userNickName);

	/**
	 * 查找完成事务(事务)
	 * 
	 * @param userNickName
	 * @return
	 */
	public Collection<WorkFlowTask> findTransFinishedPersonTask(
			String userNickName, String flowType);

	/**
	 * 根据流程关键字查询流程部署编号
	 * 
	 * @param flowKey
	 * @return
	 */
	public String findDeployId(String flowKey);

	/**
	 * 创建用户组
	 * 
	 * @param groupName
	 *            用户组名称
	 * @return 返回用户组编号
	 */
	public String createGroup(String groupName);

	/**
	 * 创建用户
	 * 
	 * @param userId
	 * @param givenName
	 * @param familyName
	 */
	public String createUser(String userId, String givenName, String familyName);

	/**
	 * 创建用户与组的关系
	 * 
	 * @param userId
	 * @param groupId
	 */
	public void createMembership(String userId, String groupId);

	/**
	 * 根据任务ID获取当前节点设置的用户角色值
	 * 
	 * @param taskId
	 * @return
	 */
	public String findCurTaskNodeRoleValue(String taskId);

	/**
	 * 撤消已完成的任务
	 * 
	 * @param flowInstanceId
	 *            例如：projectcheck_1001_110.2990011
	 */
	public void undoFinishedTask(String flowInstanceId);

	/**
	 * 根据任务节点角色查找用户列表
	 * 
	 * @param taskId
	 * @return
	 */
	public Collection<SysUser> findUserNameByRole(String taskId);
}
