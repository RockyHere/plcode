package com.yanbang.flow.jpdl;

import java.io.File;
import java.util.Date;
import java.util.Random;
import java.util.UUID;

/**
 * 文件管理器
 * 
 * @author 徐春福
 * 
 */
public class FileManager {

	/**
	 * 创建临时文件
	 * 
	 * @param folder
	 * @return
	 */
	public static File createTempFolder(File folder) {
		Random RND = new Random();
		String s = Integer.toString(RND.nextInt());
		try {
			File f = new File(folder, s);
			if (!f.exists()) {
				f.mkdir();
				return f;
			}
		} catch (Exception e) {
			return createTempFolder(folder);
		}
		return createTempFolder(folder);
	}

	/**
	 * 删除文件夹
	 * 
	 * @param dir
	 * @return
	 */
	public static boolean deleteFolder(File dir) {
		File filelist[] = dir.listFiles();
		int listlen = filelist.length;
		for (int i = 0; i < listlen; i++)
			if (filelist[i].isDirectory())
				deleteFolder(filelist[i]);
			else
				filelist[i].delete();

		return dir.delete();
	}

	/**
	 * 删除文件
	 * 
	 * @param folder
	 */
	public static void delete(File folder) {
		File arr$[] = folder.listFiles();
		int len$ = arr$.length;
		for (int i$ = 0; i$ < len$; i$++) {
			File f = arr$[i$];
			if (f.isDirectory())
				delete(f);
			else
				f.delete();
		}

		folder.delete();
	}

	/**
	 * 创建临时目录
	 * 
	 * @return
	 */
	public static File TempFolder() {
		File folder = new File(System.getProperty("java.io.tmpdir"));
		folder = createTempFolder(folder);
		return folder;
	}

	/**
	 * 压缩文件或者文件夹
	 * 
	 * @param sourcePath
	 *            压缩目标目录
	 * @param targetPath
	 *            压缩文件存储的位置目录
	 * @return
	 */
	public static boolean unzip(String sourcePath, String targetPath) {
		try {
			ZipCompressor zc = new ZipCompressor(targetPath);
			zc.compress(sourcePath);
			return true;
		} catch (Exception ex) {
			ex.printStackTrace();
			return false;
		}
	}

	/**
	 * 获取UUID的编码
	 * 
	 * @return
	 */
	public static String getUUIDCode() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}

	/**
	 * 返回时间戳字符串
	 * 
	 * @return
	 */
	public static String getTimeStr() {
		return String.format("%1$tY%1$tm%1$td%1$tH%1$tM%1$tS%1$tL", new Date());
	}
}
