package com.yanbang.flow.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.jbpm.api.JbpmException;
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
import com.yanbang.flow.entity.DeployWorkFlow;
import com.yanbang.flow.entity.FlowDesign;
import com.yanbang.flow.entity.FlowInfo;
import com.yanbang.flow.entity.FlowProcess;
import com.yanbang.flow.entity.MyEntry;
import com.yanbang.flow.service.IWorkFlowDesignService;
import com.yanbang.flow.service.IWorkFlowInfoService;
import com.yanbang.flow.service.IWorkFlowManageService;
import com.yanbang.flow.service.IWorkFlowProcessService;
import com.yanbang.security.entity.SysUser;
import com.yanbang.util.DateUtil;

/**
 * @title 工作流控制器
 * 
 *        工作流控制器
 * @version 1.0
 * @author 徐春福
 * 
 */
@Controller
@RequestMapping("/workflowManage.do")
@Scope("prototype")
public class WorkFlowManageController extends BaseController {
	@Autowired
	private IWorkFlowManageService workFlowManageService;
	@Autowired
	private IWorkFlowDesignService workFlowDesignService;
	@Autowired
	private IWorkFlowInfoService workFlowInfoService;
	@Autowired
	private IWorkFlowProcessService workFlowProcessService;
	@Autowired
	private ISysDictService dictService;

	/**
	 * 流程部署
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=deployFlow")
	public JsonView deployFlow(HttpServletRequest request, String flowName,
			String version) throws Exception {
		JsonView view = new JsonView();
		SysUser user = (SysUser) this.getLoginUser(request);
		String filePath = System.getProperty("user.dir").replace("bin",
				"webapps\\upfile\\workflow\\");
		try {
			FlowDesign flowDesign = workFlowDesignService.findFlowDesignByName(
					flowName, version);
			String jpdlZipFile = filePath + flowDesign.getPath() + ".zip";
			String deployId = workFlowManageService.zipDeploy(jpdlZipFile);
			// 修改部署信息
			workFlowDesignService.updateFlowDeploy(flowName, version, deployId,
					DateUtil.getCurrDateTime(), user.getUserNickName());
			// 修改流程状态
			workFlowDesignService
					.updateFLowDesignStatus(flowName, "1", version);
			view.setProperty("result", "流程部署成功");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "流程部署成功失败");
		}
		return view;
	}

	/**
	 * 流程启动
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=startWorkFlow")
	public JsonView startWorkFlow(HttpServletRequest request, String flowKey,
			String deploymentId) throws Exception {
		JsonView view = new JsonView();
		SysUser user = (SysUser) this.getLoginUser(request);
		String usrNickName = user.getUserNickName();
		try {
			// 流程启动
			ArrayList<MyEntry> variable = new ArrayList<MyEntry>();
			String executeId = workFlowManageService.startWorkFlow(variable,
					flowKey);
			// 记录流程启动信息
			FlowInfo info = new FlowInfo();
			info.setFlowid(executeId);
			info.setDeployId(deploymentId);
			info.setStartDate(DateUtil.getCurrDateTime());
			info.setStartUsr(usrNickName);
			info.setBussiessId("N/A"); // 业务流程编号
			workFlowInfoService.saveWorkFlowInfo(info);

			// 跟踪流程执行情况
			FlowProcess process = new FlowProcess();
			process.setFlowid(executeId);// 流程编号
			process.setProcessoper("启动流程");// 处理操作
			process.setProcessremark("启动流程");//
			process.setProcesssuggestion("N/A");// 处理意见
			process.setProcessnodename(workFlowManageService
					.getFlowCurLoaction(executeId));// 待处理的任务节点
			process.setProcessuser(user.getUserName()); // 任务处理人
			process.setHistoryTaskId(workFlowManageService
					.getCurTaskId(executeId)); // 任务编号
			workFlowProcessService.saveWorkFlowProcess(process);

			view.setProperty("result", "流程启动成功");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "流程启动失败");
		}
		return view;
	}

	/**
	 * 流程作废
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=suspendFlow")
	public JsonView suspendFlow(HttpServletRequest request, String deploymentId)
			throws Exception {
		JsonView view = new JsonView();
		try {
			workFlowManageService.suspendFlow(deploymentId);
			view.setProperty("result", "流程作废成功");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "流程作废失败");
		}
		return view;
	}

	/**
	 * 流程作废->恢复
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=resumeFlow")
	public JsonView resumeFlow(HttpServletRequest request, String deploymentId)
			throws Exception {
		JsonView view = new JsonView();
		try {
			workFlowManageService.resumeFlow(deploymentId);
			view.setProperty("result", "流程恢复成功");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "流程恢复失败");
		}
		return view;
	}

	/**
	 * 流程删除
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=deleteFlow")
	public JsonView deleteFlow(HttpServletRequest request, String deploymentId,
			String flowname, String version, String flowStatus)
			throws Exception {
		JsonView view = new JsonView();
		try {
			if ("active".equals(flowStatus)) {
				workFlowManageService.deleteFlow(deploymentId);
			} else {
				workFlowManageService.deleteFlowCascade(deploymentId);
			}
			// 修改流程状态
			workFlowDesignService
					.updateFLowDesignStatus(flowname, "0", version);
			view.setProperty("result", "流程删除成功");
		} catch (JbpmException je) {
			je.printStackTrace();
			view.setProperty("result", "存在活动的流程实例,不能删除");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "流程删除失败");
		}
		return view;
	}

	/**
	 * 流程管理(首页)
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=workFlowManage")
	public ModelAndView workFlowManage(HttpServletRequest request,
			Long curPage, Long pageRows) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		DeployWorkFlow wfm = new DeployWorkFlow();
		Page<DeployWorkFlow> page = new Page<DeployWorkFlow>(curPage, pageRows);
		page.setUrl("workflowManage.do?action=workFlowManage");
		page = workFlowManageService.findWorkFlows(page);
		wfm.setFlowStatus("all");
		map.put("page", page);
		map.put("wfm", wfm);
		// --------------------------------------------
		SysDict dict = new SysDict();
		dict.setDictKey("FLOW_TYPE");
		dict.setDictGrade(2);
		map.put("ftlist", dictService.findMutiCondition(dict));
		// --------------------------------------------
		return new ModelAndView("workflow/workFlowManage", map);
	}

	/**
	 * 多条件查询已部署的流程
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @param wfm
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=findByWorkFlowManageMutil")
	public ModelAndView findByWorkFlowManageMutil(HttpServletRequest request,
			Long curPage, Long pageRows, DeployWorkFlow wfm) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		Page<DeployWorkFlow> page = new Page<DeployWorkFlow>(curPage, pageRows);
		page.setUrl("workflowManage.do?action=findByWorkFlowManageMutil");
		page = workFlowManageService.findAllWorkFlowsByMutiConditon(page, wfm);
		map.put("page", page);
		map.put("wfm", wfm);
		// --------------------------------------------

		SysDict dict = new SysDict();
		dict.setDictKey("FLOW_TYPE");
		dict.setDictGrade(2);
		map.put("ftlist", dictService.findMutiCondition(dict));
		// --------------------------------------------
		return new ModelAndView("workflow/workFlowManage", map);
	}

	/**
	 * 查询所有流程（流程设计器中使用的）
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=findAllFlow")
	public JsonView findAllFlow(HttpServletRequest request) throws Exception {
		JsonView view = new JsonView();
		try {
			view.setProperty("flowList",
					workFlowManageService.findAllWorkFlow());
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "error");
		}
		return view;
	}
}
