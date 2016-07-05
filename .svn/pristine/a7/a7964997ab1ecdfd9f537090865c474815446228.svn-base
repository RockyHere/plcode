package com.yanbang.test.controller;


import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import com.yanbang.controller.BaseController;


/**
 * 下拉框测试主页控制器
 * @author xiaoqiao wu
 *
 */
@Controller
@RequestMapping("/testSel.do")
@Scope("prototype")
public class TestSelController extends BaseController{

	
	/**
	 * 下拉选单测试页
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=index")
	public ModelAndView index(HttpServletRequest request,ModelMap model) throws Exception{
		return new ModelAndView("test/testSelIndex");
	}
	
	
	
}

