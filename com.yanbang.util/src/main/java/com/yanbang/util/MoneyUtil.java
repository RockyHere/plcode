package com.yanbang.util;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.NumberFormat;

/**
 * 金额辅助类
 * 
 * @author Xu Chunfu
 * 
 */
public class MoneyUtil {

	/**
	 * 反转金额
	 * 
	 * @param moneyd
	 * @return
	 */
	public static String UnMoneyNumber(String moneyd) {
		return moneyd.replaceAll(",", "");
	}

	/**
	 * 不保留0位有效数字
	 */
	public static String getFormatReturn(double d) {
		return new BigDecimal(d).setScale(0, BigDecimal.ROUND_UP) + "";
	}

	/**
	 * 保留两位有效数字
	 */
	public static String getFormatDoubleReturn2(double d) {
		return new BigDecimal(d).setScale(2, BigDecimal.ROUND_UP) + "";
	}

	/**
	 * 保留两位有效数字
	 */
	public static String getFormatDoubleReturn3(double d) {
		return new BigDecimal(d).setScale(2, BigDecimal.ROUND_HALF_UP) + "";
	}

	/**
	 * 如果小数位上有数字则 保留小数，如果没有则不保留小数
	 * 
	 * @param str
	 * @return 123,456.46
	 */
	public static String getFormatter(String str) {
		NumberFormat n = NumberFormat.getNumberInstance();
		double d;
		String outStr = null;
		try {
			d = Double.parseDouble(str);
			outStr = n.format(d);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return outStr;
	}

	/**
	 * 自动填补位数 123,456.46000
	 */
	public static String getDecimalFormat(String str) {
		DecimalFormat fmt = new DecimalFormat("##,###,###,###,##0.00000");
		String outStr = null;
		double d;
		try {
			d = Double.parseDouble(str);
			outStr = fmt.format(d);
		} catch (Exception e) {
		}
		return outStr;
	}

	/**
	 * 金额转化，不保留小数位(四舍五入)
	 * 
	 * @param str
	 *            123456.56
	 * @return 123,457
	 */
	public static String getCurrencynopoint(String str) {
		String outStr = null;
		DecimalFormat fmt = new DecimalFormat("##,###,###,###,##0");
		try {
			double d = Double.parseDouble(str);
			String str2 = new BigDecimal(d).setScale(0,
					BigDecimal.ROUND_HALF_UP) + "";
			d = Double.parseDouble(str2);
			outStr = fmt.format(d);
		} catch (Exception ex) {
		}
		return outStr;
	}

	/**
	 * 金额转化万元单位，保留两小数位
	 * 
	 * @param str
	 * @return
	 */
	public static String getCurrencywan(String str) {
		if (str == null || str == "") {
			return "";
		} else {
			NumberFormat n = NumberFormat.getCurrencyInstance();
			double d;
			String outStr = null;
			try {
				d = Double.parseDouble(str);
				d = d / 10000;
				outStr = n.format(d);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return outStr.replace("￥", "");
		}
	}

	/**
	 * 不带￥金额转换 始终保留两位小数
	 * 
	 * @param str
	 * @return 123,456.46
	 */
	public static String getCurrency(String str) {
		if (str == null || str == "") {
			return "";
		} else {
			NumberFormat n = NumberFormat.getCurrencyInstance();
			double d;
			String outStr = null;
			try {
				d = Double.parseDouble(str);
				outStr = n.format(d);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return outStr.replace("￥", "");
		}
	}

	/**
	 * 带￥金额转换 始终保留两位小数
	 * 
	 * @param str
	 * @return ￥123,456.46
	 */
	public static String getCurrencys(String str) {
		NumberFormat n = NumberFormat.getCurrencyInstance();
		double d;
		String outStr = null;
		try {
			d = Double.parseDouble(str);
			outStr = n.format(d);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return outStr;
	}

	/**
	 * 数字金额大写转换，思想先写个完整的然后将如零拾替换成零 要用到正则表达式
	 */
	public static String digitUppercase(double n) {
		String fraction[] = { "角", "分" };
		String digit[] = { "零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖" };
		String unit[][] = { { "元", "万", "亿" }, { "", "拾", "佰", "仟" } };
		String head = n < 0 ? "负" : "";
		n = Math.abs(n);
		String s = "";
		for (int i = 0; i < fraction.length; i++) {
			s += (digit[(int) (Math.floor(n * 10 * Math.pow(10, i)) % 10)] + fraction[i])
					.replaceAll("(零.)+", "");
		}
		if (s.length() < 1) {
			s = "整";
		}
		int integerPart = (int) Math.floor(n);
		for (int i = 0; i < unit[0].length && integerPart > 0; i++) {
			String p = "";
			for (int j = 0; j < unit[1].length && n > 0; j++) {
				p = digit[integerPart % 10] + unit[1][j] + p;
				integerPart = integerPart / 10;
			}
			s = p.replaceAll("(零.)*零$", "").replaceAll("^$", "零") + unit[0][i]
					+ s;
		}
		return head
				+ s.replaceAll("(零.)*零元", "元").replaceFirst("(零.)+", "")
						.replaceAll("(零.)+", "零").replaceAll("^整$", "零元整");
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// String str = "123455.5";
		// MoneyUtil t = new MoneyUtil();
		// System.out.println(t.getCurrencywan(str));
		// System.out.println(t.getCurrencynopoint(str));
		// System.out.println(t.getFormatter(str));
		// System.out.println(t.getCurrency(str));
		// System.out.println(t.getCurrencys(str));
		// System.out.println(t.getDecimalFormat(str));
		// System.out.println(t.getFormatDoubleReturn2(9570518.541));
		// System.out.println(digitUppercase(12345.67));
		// System.out.println(getFormatDoubleReturn3(9570518.546));
		// System.out.println(UnMoneyNumber("9,570,518.541"));

	}

}
