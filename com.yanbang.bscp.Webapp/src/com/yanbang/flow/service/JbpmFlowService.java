package com.yanbang.flow.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.zip.ZipInputStream;

import org.jbpm.api.Deployment;
import org.jbpm.api.ProcessDefinition;
import org.jbpm.api.ProcessInstance;
import org.jbpm.api.history.HistoryActivityInstance;
import org.jbpm.api.history.HistoryDetail;
import org.jbpm.api.history.HistoryProcessInstance;
import org.jbpm.api.history.HistoryProcessInstanceQuery;
import org.jbpm.api.history.HistoryTask;
import org.jbpm.api.model.Activity;
import org.jbpm.api.model.ActivityCoordinates;
import org.jbpm.api.model.Transition;
import org.jbpm.api.task.Task;
import org.jbpm.pvm.internal.model.ActivityCoordinatesImpl;
import org.jbpm.pvm.internal.model.ActivityImpl;
import org.jbpm.pvm.internal.model.ProcessDefinitionImpl;
import org.jbpm.pvm.internal.model.TransitionImpl;
import org.jbpm.pvm.internal.task.TaskImpl;

import com.yanbang.flow.entity.DeployWorkFlow;
import com.yanbang.flow.entity.WorkFlowActivity;
import com.yanbang.flow.entity.WorkFlowHistoryActivity;
import com.yanbang.flow.entity.WorkFlowHistoryDetail;
import com.yanbang.flow.entity.WorkFlowHistoryProcess;
import com.yanbang.flow.entity.WorkFlowHistoryTask;
import com.yanbang.flow.entity.WorkFlowInstance;

/**
 * JBPM工作流服务类
 * 
 * @author 徐春福
 * 
 */
public final class JbpmFlowService extends JbpmServiceTemplate {
	private static JbpmFlowService instance = null;

	private JbpmFlowService() {
	}

	/**
	 * 获取工作流服务对象
	 * 
	 * @return
	 */
	public static JbpmFlowService getInstance() {
		if (instance == null) {
			instance = new JbpmFlowService();
		}
		return instance;
	}

	/**
	 * 工作流流程部署
	 * 
	 * @param jpdlFile
	 *            *.jpdl.xml文件的路径信息，例如：com/jbpm/demo/demo.jpdl.xml
	 * @param jdplPNGImageFile
	 *            *.png工作流产生的图片信息，例如：com/jbpm/demo/demo.png
	 * @return 资源服务接口产生的唯一的deploymentId
	 */
	public String deploy(String jpdlFile, String jdplPNGImageFile) {
		try {
			return repositoryService.createDeployment()
					.addResourceFromClasspath(jpdlFile)
					.addResourceFromClasspath(jdplPNGImageFile).deploy();
		} catch (Exception ex) {
			throw new RuntimeException("deploy flow error:" + ex.getMessage());
		}
	}

	/**
	 * 工作流流程部署
	 * 
	 * @param jpdlZipFile
	 *            由*.jpdl.xml和*.png所组成的zip格式压缩文件包
	 * @return 资源服务接口产生的唯一的deploymentId
	 */
	public String deploy(String jpdlZipFile) {
		try {
			ZipInputStream zis = new ZipInputStream(new FileInputStream(
					new File(jpdlZipFile)));
			return repositoryService.createDeployment()
					.addResourcesFromZipInputStream(zis).deploy();
		} catch (Exception ex) {
			throw new RuntimeException("deploy flow error:" + ex.getMessage());
		}
	}

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
	public String startWorkFlow(Map<String, Object> variable, String flowKey) {
		return executionService.startProcessInstanceByKey(flowKey, variable)
				.getId();
	}

	/**
	 * 获取流程实例信息
	 * 
	 * @return Map<instanceId, WorkFlowInstance><br>
	 *         instance.setProcessId(pi.getId());//流程实例编号<br>
	 *         instance.setFlowId(pi.getProcessDefinitionId());//流程定义的编号<br>
	 *         instance.setCurTaskId(task.getId());<br>
	 *         instance.setCurTaskUserNickName(task.getAssignee());<br>
	 *         instance.setCurFlowNodeName(pi.findActiveActivityNames().toString
	 *         ())//当前节点名称;
	 */
	public Map<String, WorkFlowInstance> findAllProcessInstance() {
		Map<String, WorkFlowInstance> map = new HashMap<String, WorkFlowInstance>();
		List<ProcessInstance> piList = executionService
				.createProcessInstanceQuery().list();
		for (ProcessInstance pi : piList) {
			WorkFlowInstance instance = new WorkFlowInstance();
			Task task = taskService.createTaskQuery()
					.processInstanceId(pi.getId()).uniqueResult();

			if (task != null) {
				instance.setCurTaskId(task.getId());
				instance.setCurTaskUserNickName(task.getAssignee());
			}

			instance.setProcessId(pi.getId());
			instance.setFlowId(pi.getProcessDefinitionId());
			instance.setCurFlowNodeName(pi.findActiveActivityNames().toString());
			map.put(pi.getId(), instance);
		}
		return map;
	}

	/**
	 * 获取用户个人待办任务
	 * 
	 * @param userNickName
	 *            用户呢称
	 * @return
	 */
	public List<Task> findPersonalTasks(String userNickName) {
		return taskService.findPersonalTasks(userNickName);
	}

	/**
	 * 获取用户组可以办理的任务
	 * 
	 * @return
	 */
	public List<Task> findGroupTasks(String userNickName) {
		return taskService.findGroupTasks(userNickName);
	}

	/**
	 * 分配任务给某个用户
	 * 
	 * @param taskId
	 * @param userNickName
	 */
	public void takeTask(String taskId, String userNickName) {
		try {
			taskService.takeTask(taskId, userNickName);
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		}
	}

	/**
	 * 办理任务 根据任务编号
	 * 
	 * @param taskId
	 */
	public void completeTask(String taskId) {
		taskService.completeTask(taskId);
	}

	/**
	 * 办理任务 根据任务编号
	 * 
	 * @param taskId
	 * @param variable
	 *            设置变量，可以指定下一步用户 <br>
	 *            Map<String, Object> vars = new HashMap<String, Object>(); <br>
	 *            vars.put("assignUsers", "usr1,usr2");
	 */
	public void completeTask(String taskId, Map<String, Object> variable) {
		taskService.completeTask(taskId, variable);
	}

	/**
	 * 办理任务 指定流程方向的
	 * 
	 * @param taskId
	 * @param transitionName
	 *            "to drector"
	 */
	public void completeTask(String taskId, String transitionName) {
		taskService.completeTask(taskId, transitionName);
	}

	/**
	 * 级联删除流程实例
	 * 
	 * @param processInstanceId
	 *            流程实例编号
	 * 
	 *            ProcessInstance pi
	 *            =executionService.startProcessInstanceByKey(flowKey);
	 *            pi.getId()
	 */
	public void deleteFlowInstance(String processInstanceId) {
		executionService.deleteProcessInstanceCascade(processInstanceId);
	}

	/**
	 * 终止流程实例
	 * 
	 * @param processInstanceId
	 *            流程实例编号
	 * @param reason
	 *            强制终结流程的理由,本程序中只能为ended，否则历史实例中无法查询<br>
	 *            ProcessInstance pi
	 *            =executionService.startProcessInstanceByKey("key");
	 *            endProcessInstance(pi.getId(), "结束流程");
	 */
	public void endFlowInstance(String processInstanceId, String reason) {
		executionService.endProcessInstance(processInstanceId, reason);
	}

	/**
	 * 节点向下执行
	 * 
	 * @param executionId
	 *            ProcessInstance pi =
	 *            executionService.startProcessInstanceByKey("helloworld"); pi=
	 *            executionService.signalExecutionById(pi.getId());
	 *            pi.isEnded();
	 */
	public void nextStep(String executionId) {
		executionService.signalExecutionById(executionId);
	}

	/**
	 * 流程回退 <br>
	 * 思路： <br>
	 * 取得上一步节点活动，建立联结，重新指向，交换源，目标的位置 <br>
	 * 只能实现一个目标源的流程
	 * 
	 * @param taskId
	 */
	public void backStep(String taskId, String flowName) {
		ProcessDefinition pd = repositoryService.createProcessDefinitionQuery()
				.processDefinitionName(flowName).uniqueResult();
		ProcessDefinitionImpl pdi = (ProcessDefinitionImpl) pd;
		TaskImpl sourceTask = (TaskImpl) taskService.getTask(taskId);
		// 取得当前流程的活动节点定义
		ActivityImpl currentActivity = pdi.findActivity(sourceTask
				.getActivityName());

		// 获取当前活动节点的IncomingTransition
		TransitionImpl incomingTransition = (TransitionImpl) currentActivity
				.getIncomingTransitions().get(0);

		// 获取IncomingTransition的源活动节点
		ActivityImpl sourceActivity = incomingTransition.getSource();

		TransitionImpl backTransition = currentActivity
				.createOutgoingTransition();
		// 当前活动节点为新的回退Transition的源，而原来的“源”活动节点变成了目标活动节点
		backTransition.setSource(currentActivity);
		backTransition.setDestination(sourceActivity);
		backTransition.setName("回退 " + incomingTransition.getName());
		taskService.completeTask(taskId, backTransition.getName());
	}

	/**
	 * 流程执行的当前结点位置
	 * 
	 * @param executeId
	 *            流程实例编号
	 * @return
	 */
	public String getFlowCurLoaction(String executeId) {

		return executionService.createProcessInstanceQuery()
				.processInstanceId(executeId).uniqueResult()
				.findActiveActivityNames().toString();
	}

	/**
	 * 获取流程变量
	 * 
	 * @param executeId
	 * @param key
	 * @return
	 */
	public String getFlowVariables(String executeId, String key) {
		return executionService.getVariable(executeId, key).toString();
	}

	/**
	 * 修改流程变量
	 * 
	 * @param executeId
	 * @param key
	 * @param value
	 */
	public void updateFlowVariable(String executeId, String key, Object value) {
		executionService.setVariable(executeId, key, value);
	}

	/**
	 * 创建流程变量<br>
	 * 流程变量:只要流程不完成，在那个结点都可以取到变量,如果流程结束，需要从历史表中获取
	 * 
	 * @param executeId
	 * @param key
	 * @param value
	 */
	public void createFlowVariable(String executeId, String key, Object value) {
		executionService.createVariable(executeId, key, value, true);
	}

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
	public void createTaskVariable(String taskId, Map<String, Object> variable) {
		taskService.setVariables(taskId, variable);
	}

	/**
	 * 获取任务变量
	 * 任务变量可以取到流程变量的值,流程实例比任务大，流程的作用域比任务的作用域大,一个流程的变量在另一个流程中是不能访问的,任务与任务之间不能访问
	 * 
	 * @param taskId
	 * @param key
	 */
	public String getTaskVariable(String taskId, String key) {
		return taskService.getVariable(taskId, key).toString();
	}

	/**
	 * 流程作废
	 * 
	 * @param deploymentId
	 */
	public void suspendFlow(String deploymentId) {
		repositoryService.suspendDeployment(deploymentId);
	}

	/**
	 * 流程恢复
	 * 
	 * @param deploymentId
	 */
	public void resumeFlow(String deploymentId) {
		repositoryService.resumeDeployment(deploymentId);
	}

	/**
	 * 删除流程
	 * 
	 * 存在活动的流程实例， 这个方法就会抛出异常
	 * 
	 * @param deploymentId
	 */
	public void deleteFlow(String deploymentId) {
		repositoryService.deleteDeployment(deploymentId);

	}

	/**
	 * 级联删除流程部署
	 * 
	 * 级联删除一个发布中流程定义的所有流程实例
	 * 
	 * @param deploymentId
	 */
	public void deleteFlowCascade(String deploymentId) {
		repositoryService.deleteDeploymentCascade(deploymentId);
	}

	/**
	 * 查询所有已部署流程
	 * 
	 * @param pageStart
	 * @param pageEnd
	 * @return
	 */
	public List<DeployWorkFlow> findAllDeployWorkflow() {
		List<DeployWorkFlow> deployWorkflowList = new ArrayList<DeployWorkFlow>();
		List<Deployment> deploylist = repositoryService.createDeploymentQuery()
				.list();
		for (Deployment deployment : deploylist) {
			DeployWorkFlow dwf = new DeployWorkFlow();
			ProcessDefinition pd = repositoryService
					.createProcessDefinitionQuery()
					.deploymentId(deployment.getId()).uniqueResult();
			InputStream jpdlImgInputStream = repositoryService
					.getResourceAsStream(deployment.getId(),
							pd.getImageResourceName());

			dwf.setFlowImage(pd.getImageResourceName());
			dwf.setJpdlImgInputStream(jpdlImgInputStream);
			dwf.setFlowId(pd.getId());
			dwf.setFlowKey(pd.getKey());
			dwf.setFlowName(pd.getName());
			dwf.setFlowVersion(pd.getVersion() + "");
			dwf.setFlowDesc(pd.getDescription());
			dwf.setFlowDeployId(deployment.getId());
			dwf.setFlowStatus(deployment.getState());
			dwf.setFlowDeploymentDatetime("N/A");
			dwf.setFlowType("N/A");
			deployWorkflowList.add(dwf);
		}
		return deployWorkflowList;
	}

	/**
	 * 流程实例当前节点坐标
	 * 
	 * @param id
	 * @return
	 */
	public ActivityCoordinates findActivityCoordinates(String processId) {
		ProcessInstance processInstance = executionService
				.findProcessInstanceById(processId);
		if (null == processInstance || processInstance.isSuspended()) {
			return null;
		}
		Set<String> activityNames = processInstance.findActiveActivityNames();
		return repositoryService.getActivityCoordinates(processInstance
				.getProcessDefinitionId(), activityNames.iterator().next());
	}

	/**
	 * 流程实例经过节点坐标（当前节点）
	 * 
	 * @param processId
	 * @return
	 */
	public List<WorkFlowActivity> findHistoryActivityInfo(String processId,
			String flowKey, String version) {
		List<WorkFlowActivity> WorkFlowActivitylist = new ArrayList<WorkFlowActivity>();
		// 查询经过的历史节点
		List<HistoryActivityInstance> hisIns = historyService
				.createHistoryActivityInstanceQuery()
				.processInstanceId(processId).list();
		// 添加流程的开始和结束的节点
		ProcessDefinition definition = repositoryService
				.createProcessDefinitionQuery()
				.processDefinitionId(flowKey + "-" + version).uniqueResult();
		// ProcessDefinition definition = repositoryService
		// .createProcessDefinitionQuery().processDefinitionKey(flowKey)
		// .uniqueResult();
		ProcessDefinitionImpl definitionimpl = (ProcessDefinitionImpl) definition;
		List<? extends Activity> list = definitionimpl.getActivities();
		for (Activity activity : list) {
			ActivityImpl activityimp = definitionimpl.getActivity(activity
					.getName());
			WorkFlowActivity instance = new WorkFlowActivity();
			ActivityCoordinatesImpl coordinate = activityimp.getCoordinates();
			instance.setActiveName(activityimp.getName());
			instance.setX(coordinate.getX());
			instance.setY(coordinate.getY());
			instance.setWidth(coordinate.getWidth());
			instance.setHeight(coordinate.getHeight());
			instance.setNodeType(activityimp.getType());

			if (activityimp.getType().equals("start")) {
				WorkFlowActivitylist.add(instance);
			}
			if (activityimp.getType().equals("end")) {
				// 如果流程结束，在添加结束节点
				if (this.processInstanceIsEnd(processId)) {
					WorkFlowActivitylist.add(instance);
				}
			}
		}
		// 添加流程的历史经过节点
		for (Iterator<HistoryActivityInstance> iter = hisIns.iterator(); iter
				.hasNext();) {
			WorkFlowActivity instance = new WorkFlowActivity();
			// 获取流程节点的名称
			String activityName = iter.next().getActivityName();
			// 根据流程节点名称查询活动
			ActivityImpl activity = definitionimpl.getActivity(activityName);
			// 得到坐标
			ActivityCoordinatesImpl coordinate = activity.getCoordinates();
			instance.setActiveName(activityName);
			instance.setX(coordinate.getX());
			instance.setY(coordinate.getY());
			instance.setWidth(coordinate.getWidth());
			instance.setHeight(coordinate.getHeight());
			instance.setNodeType(activity.getType());
			WorkFlowActivitylist.add(instance);
		}
		return WorkFlowActivitylist;
	}

	/**
	 * 判断流程实例是否结束
	 * 
	 * @param processId
	 * @return 未结束=false|结束=true
	 */
	public boolean processInstanceIsEnd(String processId) {
		try {
			return executionService.createProcessInstanceQuery()
					.processInstanceId(processId).uniqueResult().isEnded();
		} catch (Exception ex) {
			return true;
		}
	}

	/**
	 * 查询所有的接点
	 * 
	 * @param definitionId
	 * @return
	 */
	public List<? extends Activity> findAllActivites(String definitionId) {
		ProcessDefinition definition = repositoryService
				.createProcessDefinitionQuery()
				.processDefinitionId(definitionId).uniqueResult();
		ProcessDefinitionImpl definitionimpl = (ProcessDefinitionImpl) definition;
		return definitionimpl.getActivities();
	}

	/**
	 * 查询历史活动实例信息
	 * 
	 * 对应数据库表：soa_flow_hist_actinst
	 * 
	 * @param processId
	 * @return
	 */
	public Collection<WorkFlowHistoryActivity> findWorkFlowHistoryActivityInstance(
			String processId) {
		Collection<WorkFlowHistoryActivity> retlist = new ArrayList<WorkFlowHistoryActivity>();
		List<HistoryActivityInstance> haInstance = historyService
				.createHistoryActivityInstanceQuery()
				.processInstanceId(processId)
				.orderAsc(HistoryProcessInstanceQuery.PROPERTY_STARTTIME)
				.list();
		Iterator<HistoryActivityInstance> it = haInstance.iterator();

		while (it.hasNext()) {
			HistoryActivityInstance history = it.next();
			WorkFlowHistoryActivity wfha = new WorkFlowHistoryActivity();
			wfha.setActivityName(history.getActivityName());
			wfha.setDuration(convertMillSeconds(history.getDuration()));
			wfha.setEndTime(dateFormate(history.getEndTime()));
			wfha.setExecutionId(history.getExecutionId());
			wfha.setStartTime(dateFormate(history.getStartTime()));
			wfha.setTransitionName(history.getTransitionNames());
			retlist.add(wfha);
		}
		return retlist;
	}

	/**
	 * 查询历史实例的过程信息
	 * 
	 * 对应数据库表：soa_flow__HIST_PROCINST
	 * 
	 * @param processId
	 * @return
	 */
	public Collection<WorkFlowHistoryProcess> findWorkFlowHistoryProcessInstance(
			String processId) {
		Collection<WorkFlowHistoryProcess> retlist = new ArrayList<WorkFlowHistoryProcess>();
		List<HistoryProcessInstance> list = historyService
				.createHistoryProcessInstanceQuery()
				.processInstanceId(processId).list();
		for (HistoryProcessInstance history : list) {
			WorkFlowHistoryProcess wfhp = new WorkFlowHistoryProcess();
			wfhp.setDefinitionId(history.getProcessDefinitionId());
			wfhp.setDuration(convertMillSeconds(history.getDuration()));
			wfhp.setEndActivityName(history.getEndActivityName());
			wfhp.setEndTime(dateFormate(history.getEndTime()));
			wfhp.setInstanceId(history.getProcessInstanceId());
			wfhp.setKey(history.getKey());
			wfhp.setStartTime(dateFormate(history.getStartTime()));
			wfhp.setState(history.getState());
			retlist.add(wfhp);
		}
		return retlist;
	}

	/**
	 * 查询历史任务信息
	 * 
	 * 对应数据库表：soa_flow__HIST_TASK
	 * 
	 * @param executionId
	 * @return
	 */
	public Collection<WorkFlowHistoryTask> findWorkFlowHistoryTask(
			String executionId) {
		Collection<WorkFlowHistoryTask> retlist = new ArrayList<WorkFlowHistoryTask>();
		List<HistoryTask> list = historyService.createHistoryTaskQuery()
				.executionId(executionId).list();
		for (HistoryTask history : list) {
			WorkFlowHistoryTask wfht = new WorkFlowHistoryTask();
			wfht.setAssignee(history.getAssignee());
			wfht.setCreateTime(dateFormate(history.getCreateTime()));
			wfht.setDuration(convertMillSeconds(history.getDuration()));
			wfht.setEndTime(dateFormate(history.getEndTime()));
			wfht.setExecutionId(history.getExecutionId());
			wfht.setOutcome(history.getOutcome());
			wfht.setState(history.getState());
			wfht.setTaskId(history.getId());
			retlist.add(wfht);
		}
		return retlist;
	}

	/**
	 * 查询历史记录细节
	 * 
	 * 对应数据库表：soa_flow__HIST_Detail
	 * 
	 * @param processId
	 * @return
	 */
	public Collection<WorkFlowHistoryDetail> findWorkFlowHistoryDetail(
			String processId) {
		Collection<WorkFlowHistoryDetail> retlist = new ArrayList<WorkFlowHistoryDetail>();
		List<HistoryDetail> list = historyService.createHistoryDetailQuery()
				.processInstanceId(processId).list();
		for (HistoryDetail history : list) {
			WorkFlowHistoryDetail whd = new WorkFlowHistoryDetail();
			whd.setId(history.getId());
			whd.setTime(dateFormate(history.getTime()));
			whd.setUserId(history.getUserId());
			retlist.add(whd);
		}
		return retlist;
	}

	/**
	 * 获取流程图数据流
	 * 
	 * @param deploymentId
	 * @return
	 */
	public InputStream findImage(String deploymentId) {
		ProcessDefinition pd = repositoryService.createProcessDefinitionQuery()
				.deploymentId(deploymentId).uniqueResult();
		return repositoryService.getResourceAsStream(deploymentId,
				pd.getImageResourceName());
	}

	/**
	 * 获取当前节点的输入联结
	 * 
	 * @param taskId
	 * @param flowKey
	 * @return
	 */
	public Collection<String> getIncomingTransitions(String taskId,
			String flowKey, String version) {
		Collection<String> retlist = new ArrayList<String>();
		ProcessDefinition pd = repositoryService.createProcessDefinitionQuery()
				.processDefinitionId(flowKey + "-" + version).uniqueResult();
		// ProcessDefinition pd =
		// repositoryService.createProcessDefinitionQuery()
		// .processDefinitionName(flowName).uniqueResult();
		ProcessDefinitionImpl pdi = (ProcessDefinitionImpl) pd;
		TaskImpl sourceTask = (TaskImpl) taskService.getTask(taskId);
		ActivityImpl currentActivity = pdi.findActivity(sourceTask
				.getActivityName());
		List<? extends Transition> list = currentActivity
				.getIncomingTransitions();
		for (int i = 0; i < list.size(); i++) {
			TransitionImpl incomingTransition = (TransitionImpl) list.get(i);
			retlist.add(incomingTransition.getName());
		}
		return retlist;
	}

	/**
	 * 获取当前节点的输出联结
	 * 
	 * @param taskId
	 * @param flowKey
	 * @return
	 */
	public Collection<String> getOutcomingTransitions(String taskId,
			String flowKey, String version) {
		Collection<String> retlist = new ArrayList<String>();
		ProcessDefinition pd = repositoryService.createProcessDefinitionQuery()
				.processDefinitionId(flowKey + "-" + version).uniqueResult();
		// ProcessDefinition pd =
		// repositoryService.createProcessDefinitionQuery()
		// .processDefinitionName(flowName).uniqueResult();
		ProcessDefinitionImpl pdi = (ProcessDefinitionImpl) pd;
		TaskImpl sourceTask = (TaskImpl) taskService.getTask(taskId);
		ActivityImpl currentActivity = pdi.findActivity(sourceTask
				.getActivityName());
		List<? extends Transition> list = currentActivity
				.getOutgoingTransitions();
		for (int i = 0; i < list.size(); i++) {
			TransitionImpl outgoingTransition = (TransitionImpl) list.get(i);
			retlist.add(outgoingTransition.getName());
		}
		return retlist;
	}

	/**
	 * 将时间毫秒转化为字符串
	 * 
	 * @param ms
	 * @return
	 */
	private String convertMillSeconds(long ms) {
		String ret = "N/A";
		if (ms <= 60000) {
			ret = "<1 分钟";
		} else if (ms <= 3600000) {
			ret = (ms / 60000) + " 分钟";
		} else if (ms <= 86400000) {
			ret = (ms / 3600000) + " 小时";
		} else {
			ret = (ms / 86400000) + " 天";
		}
		return ret;
	}

	/**
	 * 日期转化格式
	 * 
	 * @param date
	 * @return
	 */
	private String dateFormate(Date date) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return format.format(date);
	}

	/**
	 * 创建用户组
	 * 
	 * @param groupName
	 *            用户组名称
	 * @return 返回用户组编号
	 */
	public String createGroup(String groupName) {
		return identityService.createGroup(groupName);
	}

	/**
	 * 创建用户
	 * 
	 * @param userId
	 * @param givenName
	 * @param familyName
	 */
	public void createUser(String userId, String givenName, String familyName) {
		identityService.createUser(userId, givenName, familyName);
	}

	/**
	 * 创建用户与组的关系
	 * 
	 * @param userId
	 * @param groupId
	 */
	public void createMembership(String userId, String groupId) {
		identityService.createMembership(userId, groupId);
	}
}
