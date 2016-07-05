package com.yanbang.flow.jpdl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import javax.imageio.ImageIO;

/**
 * XML转化为图片
 * 
 * JPDL XML 文件转化为PNG图片<br>
 * 
 * Web Designer generated jPDL XML document workflow of jbpm4.4 into PNG
 * pictures, easy deployment workflow <br>
 * ImageIO 该类包含一些用来查找 ImageReader 和 ImageWriter 以及执行简单编码和解码的静态便捷方法
 * 
 * @author 徐春福
 * 
 */
public class JpdlToPNG {

	/**
	 * JPDL XML 文件转化为PNG图片
	 * 
	 * @param sourcePath
	 *            JPDL XML 存储路径
	 * @param targetFormate
	 *            文件格式 ，例如png
	 * @param targetPath
	 *            PNG 图片存储路径
	 * @return true :转化成功 false :转化失败
	 * @throws Exception
	 */
	public static boolean modelDrawer(String sourcePath, String targetFormate,
			String targetPath) throws Exception {
		try {
			InputStream inputstream = new FileInputStream(new File(sourcePath));
			JpdlModel jpdlModel = new JpdlModel(inputstream);
			// 使用支持给定格式的任意 ImageWriter 将一个图像写入 File。如果已经有一个 File 存在，则丢弃其内容
			return ImageIO.write(new JpdlModelDrawer().draw(jpdlModel),
					targetFormate, new File(targetPath));
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	/**
	 * JPDL XML 文件转化为PNG图片
	 * 
	 * @param inputstream
	 *            JPDL XML 存储流
	 * @param targetFormate
	 *            文件格式 ，例如png
	 * @param targetPath
	 *            PNG 图片存储路径
	 * @return true :转化成功 false :转化失败
	 * @throws Exception
	 */
	public static boolean modelDrawer(InputStream inputstream,
			String targetFormate, String targetPath) throws Exception {
		try {
			JpdlModel jpdlModel = new JpdlModel(inputstream);
			// 使用支持给定格式的任意 ImageWriter 将一个图像写入 File。如果已经有一个 File 存在，则丢弃其内容
			return ImageIO.write(new JpdlModelDrawer().draw(jpdlModel),
					targetFormate, new File(targetPath));
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	/**
	 * jpdl转化图片png
	 * 
	 * @param sourcePath
	 * @param targetPath
	 * @return
	 * @throws Exception
	 */
	public static boolean builderImagePNG(String sourcePath, String targetPath)
			throws Exception {
		return modelDrawer(sourcePath, "png", targetPath);
	}

	/**
	 * 测试用例
	 */
	public static void main(String args[]) {
		try {
			boolean ret = builderImagePNG("bin/demo1.jpdl.xml",
					"c:/abc/test.png");
			if (ret) {
				System.out.println("convert  success");
			} else {
				System.out.println("convert  failure");
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
