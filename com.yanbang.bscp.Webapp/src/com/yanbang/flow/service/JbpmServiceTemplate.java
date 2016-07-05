package com.yanbang.flow.service;

import org.jbpm.api.ExecutionService;
import org.jbpm.api.HistoryService;
import org.jbpm.api.IdentityService;
import org.jbpm.api.ManagementService;
import org.jbpm.api.RepositoryService;
import org.jbpm.api.TaskService;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * JBPM服务模板类<br>
 * 
 * 提供工作流的各种服务接口<br>
 * 
 * 工作流中的相关概念解释
 * <ol>
 * <li>流程定义:流程定义是对业务过程步骤的详细描述，在JBPM4中表现为若干“活动”节点通过“转移”线条串联</li>
 * <li>流程实例:流程实例表示流程定义在运行时特有的执行例程</li>
 * <li>流程执行:流程实例在其生命周期中，指向当前执行活动的指针</li>
 * </ol>
 * 
 * @author 徐春福
 * 
 */
public class JbpmServiceTemplate {
	/**
	 * 流程资源服务的接口<br>
	 * 
	 * 提供对流程定义的部署、查询、删除等操作
	 */
	public RepositoryService repositoryService;
	/**
	 * 流程执行服务的接口<br>
	 * 
	 * 提供启动流程实例、“执行”推进，设置流程实例变量等操作
	 */
	public ExecutionService executionService;
	/**
	 * 流程管理控制服务接口<br>
	 * 
	 * 提供异步工作相关的执行和查询操作
	 */
	public ManagementService managementService;
	/**
	 * 人工任务服务接口<br>
	 * 
	 * 提供对任务（Task）的创建、提交、查询、保存、删除等操作
	 */
	public TaskService taskService;
	/**
	 * 流程历史服务的接口<br>
	 * 
	 * 提供对流程历史库（即已经完成的流程实例归档）中历史流程实例、历史活动实例的查询操作。
	 * 还提供诸如某个流程定义中所有活动的平均持续时间、某个流程定义中某转 移的结果次数等数据分析服务
	 */
	public HistoryService historyService;

	/**
	 * 身份认证服务的接口<br>
	 * 
	 * 提供对流程用户、用户组以及组成员关系的相关服务
	 */
	public IdentityService identityService;

	@SuppressWarnings("resource")
	public JbpmServiceTemplate() {
		ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext(
				"jbpm-spring.xml");
		repositoryService = (RepositoryService) applicationContext
				.getBean("repositoryService");
		executionService = (ExecutionService) applicationContext
				.getBean("executionService");
		managementService = (ManagementService) applicationContext
				.getBean("managementService");
		taskService = (TaskService) applicationContext.getBean("taskService");
		historyService = (HistoryService) applicationContext
				.getBean("historyService");
		identityService = (IdentityService) applicationContext
				.getBean("identityService");
	}
}
