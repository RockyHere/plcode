package com.yanbang.test.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;


/**
 * Jquery测试主页控制器
 * @author solovejack
 *
 */
@Controller
@RequestMapping("/testJquery.do")
@Scope("prototype")
public class TestJqueryController extends BaseController{

	/**
	 * table增行测试
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=testInsertRow")
	public ModelAndView index(HttpServletRequest request,ModelMap model) throws Exception{
		return new ModelAndView("test/testInsertRow");
	}
}

