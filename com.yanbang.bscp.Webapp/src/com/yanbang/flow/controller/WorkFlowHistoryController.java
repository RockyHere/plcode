package com.yanbang.flow.controller;

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
import com.yanbang.config.entity.SysDict;
import com.yanbang.config.service.ISysDictService;
import com.yanbang.flow.entity.WorkFlowHistoryProcess;
import com.yanbang.flow.service.IWorkFlowManageService;

/**
 * @title 工作流控制器
 * 
 *        工作流历史信息
 * @version 1.0
 * @author 徐春福
 * 
 */
@Controller
@RequestMapping("/workflowHistory.do")
@Scope("prototype")
public class WorkFlowHistoryController extends BaseController {

	@Autowired
	private IWorkFlowManageService workFlowManageService;
	@Autowired
	private ISysDictService dictService;

	/**
	 * 流程历史实例查询
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=findHistoryFlowInstance")
	public ModelAndView findHistoryFlowInstance(HttpServletRequest request,
			Long curPage, Long pageRows, String flowTypeId) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		Page<WorkFlowHistoryProcess> page = new Page<WorkFlowHistoryProcess>(
				curPage, pageRows);
		page.setUrl("workflowHistory.do?action=findHistoryFlowInstance");
		page = workFlowManageService.findHistoryWorkFlows(flowTypeId, page);
		map.put("page", page);
		SysDict dict = new SysDict();
		dict.setDictKey("FLOW_TYPE");
		dict.setDictGrade(2);
		map.put("ftlist", dictService.findMutiCondition(dict));
		return new ModelAndView("workflow/workFlowHistoryIntance", map);
	}

	/**
	 * 多条件流程历史实例查询
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @param fd
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=findHistoryFlowInstanceByMutil")
	public ModelAndView findHistoryFlowInstanceByMutil(
			HttpServletRequest request, Long curPage, Long pageRows,
			WorkFlowHistoryProcess wfhp) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		Page<WorkFlowHistoryProcess> page = new Page<WorkFlowHistoryProcess>(
				curPage, pageRows);
		page.setUrl("workflowHistory.do?action=findHistoryFlowInstanceByMutil");
		page = workFlowManageService.findHistoryWorkFlowsByMutiConditon(page,
				wfhp);
		map.put("page", page);
		SysDict dict = new SysDict();
		dict.setDictKey("FLOW_TYPE");
		dict.setDictGrade(2);
		map.put("ftlist", dictService.findMutiCondition(dict));
		map.put("wfhp", wfhp);
		return new ModelAndView("workflow/workFlowHistoryIntance", map);
	}

	/**
	 * 流程的执行过程
	 * 
	 * @param request
	 * @param executId
	 * @return
	 */
	@RequestMapping(params = "action=findHistoryTaskProc")
	public ModelAndView findHistoryTaskProc(HttpServletRequest request,
			String executId) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("historyTaskProcList",
				workFlowManageService.findAllHistoryWorkFlow(executId));
		return new ModelAndView("workflow/workFlowProceList", map);
	}
}
