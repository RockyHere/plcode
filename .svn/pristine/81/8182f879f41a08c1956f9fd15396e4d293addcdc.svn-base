package com.yanbang.config.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;
import com.yanbang.config.entity.SysAttachFile;
import com.yanbang.config.service.ISysAttachFileService;
import com.yanbang.util.DateUtil;
import com.yanbang.util.RandCodeUtil;

/**
 * 业务控制层<br>
 * 
 * 附件上传控制器
 * 
 * @author Tong Baojun
 * 
 */
@Controller
@RequestMapping("/attachFile.do")
@Scope("prototype")
public class AttachFileController extends BaseController {
	@Autowired
	private ISysAttachFileService attachFileService;

	/**
	 * 上传首页
	 * 
	 * @param request
	 * @param model
	 * @param type
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=index")
	public String index(HttpServletRequest request) throws Exception {
		return "attachfile/index";
	}

	/**
	 * 上传结果页面
	 * 
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=result")
	public ModelAndView result(HttpServletRequest request, ModelMap model)
			throws Exception {
		model.put("result", "init");
		model.put("attachFileId", "");
		model.put("origFileName", "");
		model.put("relativeURL", "");
		model.put("attachfileComment", "");
		model.put("attachfileUser", "");
		model.put("attachfileTime", "");
		return new ModelAndView("attachfile/result", model);
	}

	/**
	 * 文件上传
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=uploadFile")
	public ModelAndView uploadFile(HttpServletRequest request) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
			MultipartFile multFile = multiRequest.getFile("attachfile");
			String origFileName = multFile.getOriginalFilename(); // 原始文件名称
			String attachfileComment = multiRequest.getParameter("attachfileComment");
			String attachfileUser = this.getLoginUserName(request);
			String attachfileTime = DateUtil.Now();
			String upfilepath = System.getProperty("user.dir").replace("bin",
					"webapps\\upfile\\");
			if (origFileName != null && !"".equals(origFileName.trim())) {
				String fileExtension = origFileName.substring(origFileName
						.indexOf(".") + 1); // 原始文件扩展名
				String newFileName = RandCodeUtil.getUUIDStr() + "."
						+ fileExtension; // 新文件名称
				String uploadFileUrl = upfilepath + newFileName; // 上传文件实际的物理路径
				String relativeURL = "/upfile/" + newFileName; // 文件相对路径
				try {
					SysAttachFile attachFile = new SysAttachFile();
					attachFile.setOrigFileName(origFileName);
					attachFile.setRelativeURL(relativeURL);
					attachFile.setAttachfileComment(attachfileComment);
					attachFile.setAttachfileUser(attachfileUser);
					attachFile.setAttachfileTime(attachfileTime);
					long attachFileId = attachFileService
							.saveAttachFile(attachFile);
					FileCopyUtils.copy(multFile.getBytes(), new File(
							uploadFileUrl));

					map.put("result", "succ");
					map.put("attachFileId", attachFileId);
					map.put("origFileName", origFileName);
					map.put("relativeURL", relativeURL);
					map.put("attachfileComment", attachfileComment);
					map.put("attachfileUser", attachfileUser);
					map.put("attachfileTime", attachfileTime);
				} catch (IOException e) {
					e.printStackTrace();
					map.put("result", "err1");
				}
			} else {
				map.put("result", "err2");
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			map.put("result", "err3");
		}
		return new ModelAndView("attachfile/result", map);
	}
}
