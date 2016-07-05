package com.yanbang.util;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.Map;

/**
 * 断言工具类
 * 
 * @author 100494
 */
public final class AssertUtil {

	/**
	 * 构造方法
	 */
	private AssertUtil() {
		super();
	}

	/**
	 * 字符串是否有值
	 * 
	 * @param string
	 *            字符串
	 * @return 字符串是否有值
	 */
	public static boolean isVal(String string) {
		if (string == null || string.isEmpty()) {
			return false;
		}
		return true;
	}

	/**
	 * 字符串是否无值
	 * 
	 * @param string
	 *            字符串
	 * @return 字符串是否无值
	 */
	public static boolean isInval(String string) {
		return !isVal(string);
	}

	/**
	 * 字符串是否有值
	 * 
	 * @param stringBuffer
	 *            字符串
	 * @return 字符串是否有值
	 */
	public static boolean isVal(StringBuffer stringBuffer) {
		if (stringBuffer == null || stringBuffer.length() == 0) {
			return false;
		}
		return true;
	}

	/**
	 * 字符串是否无值
	 * 
	 * @param stringBuffer
	 *            字符串
	 * @return 字符串是否无值
	 */
	public static boolean isInval(StringBuffer stringBuffer) {
		return !isVal(stringBuffer);
	}

	/**
	 * 数字是否有值
	 * 
	 * @param number
	 *            数字
	 * @return 数字是否有值
	 */
	public static boolean isVal(Number number) {
		if (number == null) {
			return false;
		}
		return true;
	}

	/**
	 * 数字是否无值
	 * 
	 * @param number
	 *            数字
	 * @return 数字是否无值
	 */
	public static boolean isInval(Number number) {
		return !isVal(number);
	}

	/**
	 * 对象是否非空
	 * 
	 * @param object
	 *            对象
	 * @return 对象是否非空
	 */
	public static boolean isVal(Object object) {
		if (object == null) {
			return false;
		}
		return true;
	}

	/**
	 * 对象是否为空
	 * 
	 * @param object
	 *            对象
	 * @return 对象是否为空
	 */
	public static boolean isInval(Object object) {
		return !isVal(object);
	}

	/**
	 * 对象数组是否非空
	 * 
	 * @param array
	 *            对象数组
	 * @return 对象数组是否非空
	 */
	public static boolean isVal(Object[] array) {
		if (array == null || array.length == 0) {
			return false;
		}
		return true;
	}

	/**
	 * 对象数组是否为空
	 * 
	 * @param array
	 *            对象数组
	 * @return 对象数组是否为空
	 */
	public static boolean isInval(Object[] array) {
		return !isVal(array);
	}

	/**
	 * 验证映射是否为非空
	 * 
	 * @param map
	 *            映射
	 * @return 验证映射是否为非空
	 */
	// @SuppressWarnings("unchecked")
	public static boolean isVal(Map<?, ?> map) {
		if (map != null && !map.isEmpty()) {
			return true;
		}
		return false;
	}

	/**
	 * 验证映射是否为空
	 * 
	 * @param map
	 *            映射
	 * @return 验证映射是否为空
	 */
	public static boolean isInval(Map<?, ?> map) {
		return !isVal(map);
	}

	/**
	 * 验证集合是否为非空集合
	 * 
	 * @param collection
	 *            集合
	 * @return 验证集合是否为非空集合
	 */
	public static boolean isVal(Collection<?> collection) {
		if (collection != null && !collection.isEmpty()) {
			return true;
		}
		return false;
	}

	/**
	 * 验证集合是否为空集合
	 * 
	 * @param collection
	 *            集合
	 * @return 验证集合是否为空集合
	 */
	public static boolean isInval(Collection<?> collection) {
		return !isVal(collection);
	}

	/**
	 * 验证对象是否为整数
	 * 
	 * @param string
	 *            字符串对象
	 * @return 验证对象是否为整数
	 */
	public static boolean isInteger(String string) {
		boolean isInteger = false;
		if (AssertUtil.isVal(string)) {
			isInteger = string.matches("\\d*");
		}
		return isInteger;
	}

	/**
	 * 验证对象是否为整数
	 * 
	 * @param number
	 *            数字对象
	 * @return 验证对象是否为整数
	 */
	public static boolean isInteger(Number number) {
		boolean isInteger = false;
		if (AssertUtil.isVal(number)) {
			isInteger = number.toString().matches("\\d*");
		}
		return isInteger;
	}

	/**
	 * 是否是正数
	 * 
	 * @param number
	 *            数字对象
	 * @return 是否是正数
	 */
	public static boolean isPositiveNumber(BigDecimal number) {
		if (isVal(number) && number.compareTo(BigDecimal.ZERO) > 0) {
			return true;
		}
		return false;
	}

	/**
	 * 是否是负数
	 * 
	 * @param number
	 *            数字对象
	 * @return 是否是负数
	 */
	public static boolean isNegativeNumber(BigDecimal number) {
		if (isVal(number) && number.compareTo(BigDecimal.ZERO) < 0) {
			return true;
		}
		return false;
	}

	/**
	 * 验证数字是否为0
	 * 
	 * @param number
	 *            数字
	 * @return 验证数字是否为0
	 */
	public static boolean isZero(BigDecimal number) {
		boolean isZero = false;
		if (isVal(number) && BigDecimal.ZERO.compareTo(number) == 0) {
			isZero = true;
		}
		return isZero;
	}

	/**
	 * 得到int值
	 * 
	 * @param obj
	 * @return String
	 */
	public static Integer intValue(Object obj) {
		return AssertUtil.isVal(obj) ? Integer.valueOf(obj.toString()) : 0;
	}

	/**
	 * 得到long值
	 * 
	 * @param obj
	 * @return String
	 */
	public static Long longValue(Object obj) {
		return AssertUtil.isVal(obj) ? Long.valueOf(obj.toString()) : 0L;
	}

	/**
	 * 得到String值
	 * 
	 * @param obj
	 * @return String
	 */
	public static String stringValue(Object obj) {
		return AssertUtil.isVal(obj) ? obj.toString() : "";
	}

	/**
	 * 将0转化为空字符串
	 * 
	 * @param obj
	 * @return String
	 */
	public static String removeZero(BigDecimal obj) {
		return AssertUtil.isVal(obj) && obj.compareTo(BigDecimal.ZERO) == 0 ? ""
				: obj.toString();
	}

	/**
	 * 将0转化为空字符串
	 * 
	 * @param num
	 * @return String
	 */
	public static String removeZero(int num) {
		return num == 0 ? "" : String.valueOf(num);
	}

	/**
	 * 得到bigDecimal值
	 * 
	 * @param obj
	 * @return BigDecimal
	 */
	public static BigDecimal bigDecimalValue(Object obj) {
		return AssertUtil.isVal(obj) ? new BigDecimal(obj.toString())
				: BigDecimal.ZERO;
	}

	/**
	 * 得到objec值
	 * 
	 * @param obj
	 * @param realObj
	 * @return Object
	 */
	public static Object objectValue(Object obj, Object realObj) {
		return AssertUtil.isVal(obj) ? obj : realObj;
	}
}
