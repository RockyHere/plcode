package com.yanbang.flow.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;
import com.yanbang.page.Page;
import com.yanbang.view.JSAlertView;
import com.yanbang.view.JsonView;
import com.yanbang.config.entity.SysDict;
import com.yanbang.config.service.ISysDictService;
import com.yanbang.flow.entity.FlowDesign;
import com.yanbang.flow.jpdl.FileManager;
import com.yanbang.flow.jpdl.JpdlFileBuilder;
import com.yanbang.flow.jpdl.JpdlToPNG;
import com.yanbang.flow.jpdl.JpdlXMLParser;
import com.yanbang.flow.service.IWorkFlowDesignService;
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
@RequestMapping("/workflowDesign.do")
@Scope("prototype")
public class WorkFlowDesignController extends BaseController {
	@Autowired
	private IWorkFlowDesignService workFlowDesignService;
	@Autowired
	private ISysDictService dictService;

	/**
	 * 流程设计器首页
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=workFlowDesign")
	public ModelAndView workFlowDesign(HttpServletRequest request,
			Long curPage, Long pageRows) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		FlowDesign fd = new FlowDesign();
		Page<FlowDesign> page = new Page<FlowDesign>(curPage, pageRows);
		page.setUrl("workflowDesign.do?action=workFlowDesign");
		page = workFlowDesignService.findWorkFlowDesign(page);
		fd.setStatus(-2);
		map.put("page", page);
		map.put("fd", fd);
		// --------------------------------------------
		SysDict dict = new SysDict();
		dict.setDictKey("FLOW_TYPE");
		dict.setDictGrade(2);
		map.put("ftlist", dictService.findMutiCondition(dict));
		// --------------------------------------------
		return new ModelAndView("workflow/workFlowDesign", map);
	}

	/**
	 * 多条件查询流程设计信息
	 * 
	 * @param request
	 * @param curPage
	 * @param pageRows
	 * @param fd
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=findByMutil")
	public ModelAndView findByMutil(HttpServletRequest request, Long curPage,
			Long pageRows, FlowDesign fd) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		Page<FlowDesign> page = new Page<FlowDesign>(curPage, pageRows);
		page.setUrl("workflowDesign.do?action=findByMutil");
		page = workFlowDesignService.findAllFlowDesignByMutiConditon(page, fd);
		map.put("page", page);
		map.put("fd", fd);
		SysDict dict = new SysDict();
		dict.setDictKey("FLOW_TYPE");
		dict.setDictGrade(2);
		map.put("ftlist", dictService.findMutiCondition(dict));
		// --------------------------------------------
		return new ModelAndView("workflow/workFlowDesign", map);
	}

	/**
	 * 删除流程设计
	 * 
	 * @param request
	 * @param userIds
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=deleteFlowDesign")
	public JsonView deleteFlowDesign(HttpServletRequest request,
			String flowNames, String versions) throws Exception {
		JsonView view = new JsonView();
		try {
			String arrFlowNames[] = flowNames.split("#");
			String arrVersion[] = versions.split("#");
			for (int i = 0; i < arrFlowNames.length; i++) {
				workFlowDesignService.deleteFlowDesign(arrFlowNames[i],
						arrVersion[i]);
			}
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 获取流程定义类型
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=flowdefTypelist")
	public JsonView flowdefTypelist(HttpServletRequest request)
			throws Exception {
		JsonView view = new JsonView();
		try {
			SysDict dict = new SysDict();
			dict.setDictKey("FLOW_TYPE");
			dict.setDictGrade(2);
			view.setProperty("ftlist", dictService.findMutiCondition(dict));
			view.setProperty("result", Boolean.TRUE);
		} catch (Exception ex) {
			view.setProperty("result", Boolean.FALSE);
		}
		return view;
	}

	/**
	 * 检查流程文件名是否存在
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=checkFileNameExists")
	public JsonView checkFileNameExists(HttpServletRequest request,
			String soa_flow_name) throws Exception {
		JsonView view = new JsonView();
		try {
			if (workFlowDesignService.checkFileNameExists(soa_flow_name)) {
				view.setProperty("success", Boolean.TRUE);
			} else {
				view.setProperty("success", Boolean.FALSE);
			}
		} catch (Exception ex) {
			view.setProperty("success", Boolean.FALSE);
		}
		return view;
	}

	/**
	 * 更新工作流设计
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=updateFlowDesign")
	public JsonView updateFlowDesign(HttpServletRequest request,
			String flowName, String flowKey, String flowDesc,
			String flowVersion, String xml, String flowtype) throws Exception {
		JsonView view = new JsonView();
		// ==================================================
		SysUser user = (SysUser) this.getLoginUser(request);
		try {
			String fileName = "flow" + "_" + flowName + "_" + flowVersion;
			String filePath = System.getProperty("user.dir").replace("bin",
					"webapps\\upfile\\workflow\\");
			// ------------------------------------------------
			String tempDir = filePath + fileName;

			String targetPath = filePath + fileName + ".zip";
			File fileDir = new File(tempDir);
			String jpdlFilePath = tempDir + "\\" + fileName + ".jpdl.xml";
			String jpdlPngPath = tempDir + "\\" + fileName + ".png";
			try {
				File xmlFile = new File(jpdlFilePath);
				xmlFile.delete();
				File pngFile = new File(jpdlPngPath);
				pngFile.delete();
				fileDir.delete();
				File zipFile = new File(targetPath);
				zipFile.delete();
			} catch (Exception ex) {
				ex.printStackTrace();
			}
			if (fileDir.mkdir()) {

				if (JpdlFileBuilder.builderXMLFile(xml, jpdlFilePath)) {
					if (JpdlToPNG.builderImagePNG(jpdlFilePath, jpdlPngPath)) {
						// ***********************************************
						if (FileManager.unzip(tempDir, targetPath)) {
							FlowDesign fd = new FlowDesign();
							fd.setName(flowName);
							fd.setKey(flowKey);
							fd.setDescription(flowDesc);
							fd.setVersion(Integer.parseInt(flowVersion));
							fd.setContent(xml);
							fd.setCreateusername(user.getUserName());
							fd.setRemark("修改流程");
							fd.setStatus(0);
							fd.setPath(fileName);
							fd.setFlowType(flowtype);
							workFlowDesignService
									.updateFlowDesign(flowName, fd);
							view.setProperty("success", Boolean.TRUE);
						} else {
							view.setProperty("msg", "压缩文件失败");
							view.setProperty("success", Boolean.FALSE);
						}
						// ***********************************************
					} else {
						view.setProperty("msg", "生成png文件失败");
						view.setProperty("success", Boolean.FALSE);
					}
				} else {
					view.setProperty("msg", "生成XML文件失败");
					view.setProperty("success", Boolean.FALSE);
				}
			} else {
				view.setProperty("msg", "临时目录创建失败");
				view.setProperty("success", Boolean.FALSE);
			}
			// ------------------------------------------------
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("success", Boolean.FALSE);
		}
		// ==================================================
		return view;
	}

	/**
	 * 保存工作流设计
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=saveFlowDesign")
	public JsonView saveFlowDesign(HttpServletRequest request, String flowName,
			String flowKey, String flowDesc, String flowVersion, String xml,
			String flowtype) throws Exception {
		JsonView view = new JsonView();
		// ==================================================
		SysUser user = (SysUser) this.getLoginUser(request);
		try {
			String fileName = "flow" + "_" + flowName + "_" + flowVersion;
			String filePath = System.getProperty("user.dir").replace("bin",
					"webapps\\upfile\\workflow\\");
			// ------------------------------------------------
			String tempDir = filePath + fileName;
			String targetPath = filePath + fileName + ".zip";
			File fileDir = new File(tempDir);
			if (fileDir.mkdir()) {
				String jpdlFilePath = tempDir + "\\" + fileName + ".jpdl.xml";
				String jpdlPngPath = tempDir + "\\" + fileName + ".png";
				if (JpdlFileBuilder.builderXMLFile(xml, jpdlFilePath)) {
					if (JpdlToPNG.builderImagePNG(jpdlFilePath, jpdlPngPath)) {
						// ***********************************************
						if (FileManager.unzip(tempDir, targetPath)) {
							FlowDesign fd = new FlowDesign();
							fd.setName(flowName);
							fd.setKey(flowKey);
							fd.setDescription(flowDesc);
							fd.setVersion(Integer.parseInt(flowVersion));
							fd.setContent(xml);
							fd.setCreateusername(user.getUserName());
							fd.setRemark("新增流程");
							fd.setStatus(0);
							fd.setPath(fileName);
							fd.setFlowType(flowtype);
							workFlowDesignService.saveFlowDesign(fd);
							view.setProperty("success", Boolean.TRUE);
						} else {
							view.setProperty("msg", "压缩文件失败");
							view.setProperty("success", Boolean.FALSE);
						}
						// ***********************************************
					} else {
						view.setProperty("msg", "生成png文件失败");
						view.setProperty("success", Boolean.FALSE);
					}
				} else {
					view.setProperty("msg", "生成XML文件失败");
					view.setProperty("success", Boolean.FALSE);
				}
			} else {
				view.setProperty("msg", "临时目录创建失败");
				view.setProperty("success", Boolean.FALSE);
			}
			// ------------------------------------------------
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("success", Boolean.FALSE);
		}
		// ==================================================
		return view;
	}

	/**
	 * 打开工作流文件
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(params = "action=openJpdlFile")
	public JsonView openJpdlFile(HttpServletRequest request, String flowName,
			String version) {
		JsonView view = new JsonView();
		try {
			if (flowName != null) {
				FlowDesign flowDesign = workFlowDesignService
						.findFlowDesignByName(flowName, version);
				view.setProperty("success", Boolean.TRUE);
				view.setProperty("jpdl", flowDesign.getContent());
			} else {
				view.setProperty("success", Boolean.FALSE);
				view.setProperty("jpdl", "流程不存在或出错，无法打开");
			}
		} catch (Exception ex) {
			view.setProperty("success", Boolean.FALSE);
			view.setProperty("jpdl", "流程打开失败");
			ex.printStackTrace();
		}
		return view;
	}

	/**
	 * 打开JPDL图片
	 * 
	 * @param request
	 * @param flowName
	 * @return
	 */
	@RequestMapping(params = "action=previewJpdlImage")
	public JsonView previewJpdlImage(HttpServletRequest request,
			String flowName, String version) {
		JsonView view = new JsonView();
		String filePath = "/upfile/workflow/";
		String error_image_url = "/resource/images/global/error.png";
		try {
			if (flowName != null) {
				FlowDesign flowDesign = workFlowDesignService
						.findFlowDesignByName(flowName, version);
				view.setProperty("success", Boolean.TRUE);
				String image_url = filePath + flowDesign.getPath() + "\\"
						+ flowDesign.getPath() + ".png";
				view.setProperty("image_url", image_url);
			} else {
				view.setProperty("success", Boolean.FALSE);
				view.setProperty("image_url", error_image_url);
			}
		} catch (Exception ex) {
			view.setProperty("success", Boolean.FALSE);
			view.setProperty("image_url", error_image_url);
			ex.printStackTrace();
		}
		return view;
	}

	/**
	 * 下载流程文件包
	 * 
	 * @param request
	 * @param flowName
	 * @return
	 */
	@RequestMapping(params = "action=downFlowFile")
	public JsonView downFlowFile(HttpServletRequest request, String flowName,
			String version) {
		JsonView view = new JsonView();
		String filePath = "/upfile/workflow/";
		try {
			if (flowName != null) {
				FlowDesign flowDesign = workFlowDesignService
						.findFlowDesignByName(flowName, version);
				view.setProperty("success", Boolean.TRUE);
				String flowFile_url = filePath + flowDesign.getPath() + ".zip";
				view.setProperty("flowFile_url", flowFile_url);
			} else {
				view.setProperty("success", Boolean.FALSE);
				view.setProperty("flowFile_url", "流程文件包查找失败");
			}
		} catch (Exception ex) {
			view.setProperty("success", Boolean.FALSE);
			view.setProperty("flowFile_url", "流程文件包查找失败");
			ex.printStackTrace();
		}
		return view;
	}

	/**
	 * 上传流程文件
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=uploadFlowFile")
	public JSAlertView uploadFlowFile(HttpServletRequest request)
			throws Exception {
		JSAlertView view = new JSAlertView("");
		SysUser user = (SysUser) this.getLoginUser(request);
		try {
			MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
			MultipartFile multFile = multiRequest.getFile("localfile");
			String fileName = "flow" + "_" + FileManager.getTimeStr();
			String filePath = System.getProperty("user.dir").replace("bin",
					"webapps\\upfile\\workflow\\");
			String uploadFileUrl = filePath + fileName;
			File fileDir = new File(uploadFileUrl);
			String targetPath = filePath + fileName + ".zip";
			if (fileDir.mkdir()) {
				try {
					String jpdlFilePath = uploadFileUrl + "\\" + fileName
							+ ".jpdl.xml";
					String jpdlPngPath = uploadFileUrl + "\\" + fileName
							+ ".png";
					FileCopyUtils.copy(multFile.getBytes(), new File(
							jpdlFilePath));
					// 获取流程的基本信息
					Map<String, Object> jpdlmap = JpdlXMLParser
							.getFlowInfo(jpdlFilePath);
					if (JpdlToPNG.builderImagePNG(jpdlFilePath, jpdlPngPath)) {
						// ***********************************************
						if (FileManager.unzip(uploadFileUrl, targetPath)) {
							FlowDesign fd = new FlowDesign();
							fd.setName(jpdlmap.get(JpdlXMLParser.FLOW_NAME)
									.toString());
							fd.setKey(jpdlmap.get(JpdlXMLParser.FLOW_KEY)
									.toString());
							fd.setDescription(jpdlmap.get(
									JpdlXMLParser.FLOW_DESCRIPTION).toString());
							String vers = jpdlmap.get(
									JpdlXMLParser.FLOW_VERSTION).toString();
							if (vers != null) {
								fd.setVersion(Integer.parseInt(vers));
							}
							fd.setContent(JpdlXMLParser
									.getFlowFileContent(jpdlFilePath));
							fd.setCreateusername(user.getUserName());
							fd.setRemark("上传流程");
							fd.setStatus(0);
							fd.setPath(fileName);
							String flowtype = jpdlmap.get(
									JpdlXMLParser.FLOW_TYPE).toString();
							if (flowtype != null) {
								fd.setFlowType(flowtype);
							} else {
								fd.setFlowType("N/A");
							}
							workFlowDesignService.saveFlowDesign(fd);
							view = new JSAlertView("上传流程成功");

						} else {
							view = new JSAlertView("压缩文件失败");
						}
						// ***********************************************
					} else {
						view = new JSAlertView("生成png文件失败");
					}

				} catch (IOException e) {
					view = new JSAlertView("流程文件上传失败");
					e.printStackTrace();
				}
			} else {
				view = new JSAlertView("流程文件上传失败");
			}
			view = new JSAlertView("流程文件上传成功");
		} catch (Exception e) {
			view = new JSAlertView("流程文件上传失败");
		}
		return view;
	}
}
