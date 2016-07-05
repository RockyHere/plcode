package com.yanbang.flow.controller;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;
import com.yanbang.page.Page;
import com.yanbang.view.JsonView;
import com.yanbang.config.entity.SysDict;
import com.yanbang.config.service.ISysDictService;
import com.yanbang.flow.entity.FlowProcess;
import com.yanbang.flow.entity.WorkFlowInstance;
import com.yanbang.flow.service.IWorkFlowInfoService;
import com.yanbang.flow.service.IWorkFlowManageService;
import com.yanbang.flow.service.IWorkFlowProcessService;
import com.yanbang.security.entity.SysUser;

/**
 * @title 工作流控制器
 * 
 *        工作流控制器
 * @version 1.0
 * @author 徐春福
 * 
 */
@Controller
@RequestMapping("/workflowInstance.do")
@Scope("prototype")
public class WorkFlowInstanceController extends BaseController {
	@Autowired
	private IWorkFlowInfoService workFlowInfoService;
	@Autowired
	private IWorkFlowManageService workFlowManageService;
	@Autowired
	private IWorkFlowProcessService workFlowProcessService;
	@Autowired
	private ISysDictService dictService;

	/**
	 * 流程实例(首页)
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=workFlowInstance")
	public ModelAndView workFlowInstance(HttpServletRequest request,
			Long curPage, Long pageRows) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		Page<WorkFlowInstance> page = new Page<WorkFlowInstance>(curPage,
				pageRows);
		page.setUrl("workflowInstance.do?action=workFlowInstance");
		page = workFlowInfoService.findWorkFlowInstance(page, "active");
		map.put("page", page);
		SysDict dict = new SysDict();
		dict.setDictKey("FLOW_TYPE");
		dict.setDictGrade(2);
		map.put("ftlist", dictService.findMutiCondition(dict));
		return new ModelAndView("workflow/workFlowIntance", map);
	}

	/**
	 * 多条件查询流程实例
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @param wfm
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=workFlowInstanceMutil")
	public ModelAndView workFlowInstanceMutil(HttpServletRequest request,
			Long curPage, Long pageRows, WorkFlowInstance instance)
			throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		Page<WorkFlowInstance> page = new Page<WorkFlowInstance>(curPage,
				pageRows);
		page.setUrl("workflowInstance.do?action=workFlowInstanceMutil");
		page = workFlowInfoService.findWorkFlowInstanceMutiConditon(page,
				instance, "active");
		map.put("page", page);
		map.put("instance", instance);
		SysDict dict = new SysDict();
		dict.setDictKey("FLOW_TYPE");
		dict.setDictGrade(2);
		map.put("ftlist", dictService.findMutiCondition(dict));
		return new ModelAndView("workflow/workFlowIntance", map);
	}

	/**
	 * 删除流程实例
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=deleteFlowInstance")
	public JsonView deleteFlowInstance(HttpServletRequest request,
			String processInstanceId) throws Exception {
		JsonView view = new JsonView();
		try {
			workFlowProcessService.deleteWorkFlowProcess(processInstanceId);

			workFlowManageService.deleteFlowInstance(processInstanceId);
			workFlowInfoService.updateWorkFlowStatus("delete",
					processInstanceId);

			view.setProperty("result", "删除流程实例成功");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "删除流程实例失败");
		}
		return view;
	}

	/**
	 * 终止流程实例
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=endFlowIntance")
	public JsonView endFlowIntance(HttpServletRequest request,
			String processInstanceId, String taskId) throws Exception {
		JsonView view = new JsonView();
		SysUser user = (SysUser) this.getLoginUser(request);
		try {
			// 跟踪流程执行情况
			FlowProcess process = new FlowProcess();
			process.setFlowid(processInstanceId);// 流程编号
			process.setProcessoper("终止");// 处理操作
			process.setProcessremark("终止流程实例");//
			process.setProcesssuggestion("终止流程实例");// 处理意见
			process.setProcessnodename(workFlowManageService
					.getFlowCurLoaction(processInstanceId));// 待处理的任务节点
			process.setProcessuser(user.getUserName()); // 任务处理人
			process.setHistoryTaskId(Long.parseLong(taskId));// 任务编号
			workFlowProcessService.saveWorkFlowProcess(process);

			workFlowManageService.endFlowInstance(processInstanceId, "强制终止流程");
			workFlowInfoService
					.updateWorkFlowStatus("final", processInstanceId);
			view.setProperty("result", "终止流程实例成功");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "终止流程实例失败");
		}
		return view;
	}

	/**
	 * 回退流程实例
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=backStepFlowIntance")
	public JsonView backStepFlowIntance(HttpServletRequest request,
			String taskId, String flowKey, String version,
			String processInstanceId) throws Exception {
		JsonView view = new JsonView();
		SysUser user = (SysUser) this.getLoginUser(request);
		try {
			// 获取回退的关联，关联名字中必须有回退两个字
			Collection<String> outgoinglist = workFlowManageService
					.getOutcomingTransitions(taskId, flowKey, version);
			String backTrans = "";
			for (String outgoing : outgoinglist) {
				if (outgoing.indexOf("回退") != -1) {
					backTrans = outgoing;
				}
			}
			// 跟踪流程执行情况
			String nodeName = workFlowManageService
					.getFlowCurLoaction(processInstanceId);
			workFlowManageService.completeTaskC(taskId, backTrans);

			// 跟踪流程执行情况
			FlowProcess process = new FlowProcess();
			process.setFlowid(processInstanceId);// 流程编号
			process.setProcessoper("回退");// 处理操作
			process.setProcessremark("回退流程实例");//
			process.setProcesssuggestion("回退");// 处理意见
			process.setProcessnodename(nodeName);// 待处理的任务节点
			process.setProcessuser(user.getUserName()); // 任务处理人
			process.setHistoryTaskId(Long.parseLong(taskId));// 任务编号
			workFlowProcessService.saveWorkFlowProcess(process);

			// workFlowManageService.backStep(taskId, flowName);
			view.setProperty("result", "回退流程实例成功");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "回退流程实例失败");
		}
		return view;
	}

	/**
	 * 前进流程实例
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=nextStepFlowIntance")
	public JsonView nextStepFlowIntance(HttpServletRequest request,
			String taskId, String processInstanceId, String flowKey,
			String version) throws Exception {
		JsonView view = new JsonView();
		SysUser user = (SysUser) this.getLoginUser(request);
		try {
			// 获取前进的关联，关联名字中不能有回退两个字
			Collection<String> outgoinglist = workFlowManageService
					.getOutcomingTransitions(taskId, flowKey, version);
			String backTrans = "";
			for (String outgoing : outgoinglist) {
				if (outgoing.indexOf("回退") == -1) {
					backTrans = outgoing;
				}
			}

			// 跟踪流程执行情况
			String nodeName = workFlowManageService
					.getFlowCurLoaction(processInstanceId);

			workFlowManageService.completeTaskC(taskId, backTrans);

			FlowProcess process = new FlowProcess();
			process.setFlowid(processInstanceId);// 流程编号
			process.setProcessoper("提交");// 处理操作
			process.setProcessremark("提交流程实例");//
			process.setProcesssuggestion("同意");// 处理意见
			process.setProcessnodename(nodeName);// 待处理的任务节点
			process.setProcessuser(user.getUserName()); // 任务处理人
			process.setHistoryTaskId(Long.parseLong(taskId));// 任务编号
			workFlowProcessService.saveWorkFlowProcess(process);

			view.setProperty("result", "流程实例推进下一步成功");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "流程实例推进下一步失败");
		}
		return view;
	}
}
