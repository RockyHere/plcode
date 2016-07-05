package com.yanbang.util;

import java.util.Date;
import java.util.UUID;

/**
 * 产生随机字符串
 * 
 * @author Xu Chunfu
 * 
 */
public final class RandCodeUtil {
	/**
	 * 返回UUID字符串
	 * 
	 * @return
	 */
	public static String getUUIDStr() {
		UUID uuid = UUID.randomUUID();
		return uuid.toString().replaceAll("-", "");
	}

	/**
	 * 返回时间戳字符串
	 * 
	 * @return
	 */
	public static String getTimeStr() {
		return String.format("%1$tY%1$tm%1$td%1$tH%1$tM%1$tS%1$tL", new Date());
	}

	public static void main(String[] args) {
		System.out.println(RandCodeUtil.getUUIDStr());
		System.out.println(RandCodeUtil.getTimeStr());
	}
}
