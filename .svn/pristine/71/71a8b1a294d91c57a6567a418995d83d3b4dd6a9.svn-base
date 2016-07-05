package com.yanbang.flow.controller;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;
import com.yanbang.flow.entity.FlowDesign;
import com.yanbang.flow.service.IWorkFlowDesignService;
import com.yanbang.flow.service.IWorkFlowInfoService;
import com.yanbang.flow.service.IWorkFlowManageService;

/**
 * @title 工作流控制器
 * 
 *        工作流执行情况跟踪
 * @version 1.0
 * @author 徐春福
 * 
 */
@Controller
@RequestMapping("/workflowTrace.do")
@Scope("prototype")
public class WorkFlowTraceController extends BaseController {
	@Autowired
	private IWorkFlowDesignService workFlowDesignService;

	@Autowired
	private IWorkFlowInfoService workFlowInfoService;

	@Autowired
	private IWorkFlowManageService workFlowManageService;

	@RequestMapping(params = "action=workFlowTrace")
	public ModelAndView workFlowTrace(HttpServletRequest request,
			String flowName, String processId, String flowKey, String version)
			throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			String filePath = "/upfile/workflow/";
			String error_image_url = "/resource/images/global/error.png";
			try {
				if (flowName != null) {
					FlowDesign flowDesign = workFlowDesignService
							.findFlowDesignByName(flowName, version);
					String image_url = filePath + flowDesign.getPath() + "\\"
							+ flowDesign.getPath() + ".png";
					map.put("image_url", image_url);
				} else {
					map.put("image_url", error_image_url);
				}
			} catch (Exception ex) {
				map.put("image_url", error_image_url);
				ex.printStackTrace();
			}
			map.put("actlist", workFlowInfoService.findHistoryActivity(
					processId, flowKey, version));
			map.put("curActivity",
					workFlowInfoService.findCurrentActivity(processId));
			map.put("instanceState", true);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return new ModelAndView("workflow/workFlowTrace", map);
	}

	@RequestMapping(params = "action=findImage")
	public void findImage(HttpServletRequest request,
			HttpServletResponse response, String deploymentId) {
		try {
			InputStream inputStream = workFlowManageService
					.findImage(deploymentId);
			byte[] b = new byte[2048];
			int len = -1;
			while ((len = inputStream.read(b, 0, 2048)) != -1) {
				response.getOutputStream().write(b, 0, len);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	/**
	 * 显示完成的流程实例图
	 * 
	 * @param request
	 * @param flowName
	 * @param processId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=workFlowHistoryTrace")
	public ModelAndView workFlowHistoryTrace(HttpServletRequest request,
			String flowName, String processId, String flowKey, String version)
			throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			String filePath = "/upfile/workflow/";
			String error_image_url = "/resource/images/global/error.png";
			try {
				if (flowName != null) {
					FlowDesign flowDesign = workFlowDesignService
							.findFlowDesignByName(flowName, version);
					String image_url = filePath + flowDesign.getPath() + "\\"
							+ flowDesign.getPath() + ".png";
					map.put("image_url", image_url);
				} else {
					map.put("image_url", error_image_url);
				}
			} catch (Exception ex) {
				map.put("image_url", error_image_url);
				ex.printStackTrace();
			}
			map.put("actlist", workFlowInfoService.findHistoryActivity(
					processId, flowKey, version));

			map.put("instanceState", false);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return new ModelAndView("workflow/workFlowTrace", map);
	}
}
