package com.yanbang.page;

import java.util.Collection;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * Data paging function base class
 * 
 * @author Xu Chunfu
 * <br>
 * The use of data paging function description 
 * <ul>
 *   <li>The use of Service layer：<br>
 *      <code>
 *         import com.yanbang.page.Page;<br>
 *         public Page<T> findAllXX(Page<T> page);<br>
 *       </code>
 *   </li>
 *   <li>The use of Data Access layer：<br>
 *      <code>
 *      public Page<T> findAllXX(Page<T> page) {
 * 	      String strSQL = "select * from dbowner.table_name"; //Query result statement
 * 	      String strCountSQL = "select count(*) from dbowner.table_name"; //Query rows result statement
 * 	      page.paginationProcess(this.getJdbcTemplate().queryForLong(strCountSQL)); //Calculation of the total number, the total number of pages
 * 	      String paginationSQL = page.getPaginationSQL(strSQL);//package query statement
 * 	      Collection<T> list= this.getJdbcTemplate().query(paginationSQL,
 * 			new ParameterizedRowMapper<T>() {
 * 				@Override
 * 				public T mapRow(ResultSet rs, int rowNum)
 * 						throws SQLException {
 * 					T t = new T();
 * 					t.setPropertyName(rs.getString("column name"));
 * 					......
 * 					return t;
 * 				}
 * 			});
 * 	     page.setPageResult(list);
 * 	     return page;
 *     }
 *     <font color="red">Note: parameter T is a universal entity object</font>
 *     </code>
 *  </li>
 *  <li>The use of Controller layer：<br>
 *    <code> 
 *      @Controller
 *      @RequestMapping("/webService.do")
 *      @Scope("prototype")
 *      public class WebServiceMangeController extends BaseController {
 * 	      @RequestMapping(params ="action=index")
 * 	      public ModelAndView index(HttpServletRequest request,
 * 			HttpServletResponse response, Long curPage, Long pageRows) throws Exception {
 * 		       Map<String, Object> map = new HashMap&lt;String, Object&gt;();
 * 		       Page<T> page = new Page<T>(curPage, pageRows);
 * 		       page.setUrl("webService.do?action=index"); 
 * 		       page = webservice.findAllXX(page);
 * 		       map.put("page", page);
 * 		       return new ModelAndView("ws/index", map);
 * 	       }
 *        }
 *     </code>
 *    </li>
 *    <li>The use of view layer：<br>
 *      <code>
 *       <script language="JavaScript" src="/resource/js/global/page.js"></script>
 *       
 * 	     <input type="hidden" id="page_per_num" value="3">
 * 	     <span>
 *         All Page${page.totalRowsCount},
 *         per Page:${page.pagePerRows},
 *         currentPage:${page.pageCurrent}/${page.totalPageCount}
 *       </span>  
 * 	
 * 		<img style="cursor:hand;margin-right:10px;" src="/resource/images/admin/first.gif" onclick="navigationPage('${page.url}',${page.topPageNo})" title="first"/>
 *      <img style="cursor:hand;margin-right:10px;" src="/resource/images/admin/prev.gif" onclick="navigationPage('${page.url}',${page.previousPageNo})"  title="prev"/>
 *      <img style="cursor:hand;margin-right:10px;" src="/resource/images/admin/next.gif" onclick="navigationPage('${page.url}',${page.nextPageNo})"  title="next"/>
 *      <img style="cursor:hand;margin-right:10px;" src="/resource/images/admin/last.gif" onclick="navigationPage('${page.url}',${page.bottomPageNo})"  title="last"/>
 *     </code>
 *   </li>
 * </ul>
 */
@XmlRootElement(name = "Pages")
@XmlType(name = "Page")
@XmlAccessorType(XmlAccessType.FIELD)
public class Page<T> implements java.io.Serializable {
	private static final long serialVersionUID = -8523555055477423700L;
	/**
	 * Total number of records
	 */
	@XmlElement(name = "totalRowsCount")
	private Long totalRowsCount;
	/**
	 * Total number of pages
	 */
	@XmlElement(name = "totalPageCount")
	private Long totalPageCount;
	/**
	 * current page
	 */
	@XmlElement(name = "pageCurrent")
	private Long pageCurrent = new Long(1);
	/**
	 * each page show how many
	 */
	@XmlElement(name = "pagePerRows")
	private Long pagePerRows = new Long(1);

	/**
	 * call back page result
	 */
	private Collection<T> pageResult;
	/**
	 * first
	 */
	@XmlElement(name = "topPageNo")
	private Long topPageNo;
	/**
	 * prev
	 */
	@XmlElement(name = "previousPageNo")
	private Long previousPageNo;
	/**
	 * next
	 */
	@XmlElement(name = "nextPageNo")
	private Long nextPageNo;
	/**
	 * last
	 */
	@XmlElement(name = "bottomPageNo")
	private Long bottomPageNo;
	/**
	 * Navigation address
	 */
	@XmlElement(name = "url")
	private String url;

	public Page() {
	}

	public Page(Long pageCurrent, Long pagePerRows) {
		this.pageCurrent = pageCurrent;
		this.pagePerRows = pagePerRows;
	}

	public Long getTopPageNo() {
		topPageNo = new Long(1);
		return topPageNo;
	}

	public Long getPreviousPageNo() {
		if (this.getPageCurrent() <= 1) {
			previousPageNo = new Long(1);
		} else {
			previousPageNo = this.getPageCurrent() - 1;
		}
		return previousPageNo;
	}

	public Long getNextPageNo() {
		if (this.getPageCurrent() >= getBottomPageNo()) {
			nextPageNo = getBottomPageNo();
		} else {
			nextPageNo = this.getPageCurrent() + 1;
		}
		return nextPageNo;
	}

	public Long getBottomPageNo() {
		bottomPageNo = this.getTotalPageCount();
		return bottomPageNo;
	}

	public void paginationProcess(Long totalRowsCount) {
		this.totalRowsCount = totalRowsCount;
		if (totalRowsCount % pagePerRows == 0) {
			totalPageCount = totalRowsCount / pagePerRows;
		} else {
			totalPageCount = totalRowsCount / pagePerRows + 1;
		}
	}

	public String getPaginationSQL(String strSQL) {
		StringBuffer paginationSQL = new StringBuffer(" select * from ( ");
		paginationSQL.append(" select temp.* ,rownum num from ( ");
		paginationSQL.append(strSQL);
		paginationSQL.append("  ) temp where rownum <= " + this.getEndIndex());
		paginationSQL.append(" ) where  num >= " + this.getStartIndex());
		return paginationSQL.toString();
	}

	public Long getTotalRowsCount() {
		return totalRowsCount;
	}

	public Long getTotalPageCount() {
		return totalPageCount;
	}

	public Long getPageCurrent() {
		return pageCurrent;
	}

	public void setPageCurrent(Long pageCurrent) {
		this.pageCurrent = pageCurrent;
	}

	public Long getPagePerRows() {
		return pagePerRows;
	}

	public void setPagePerRows(Long pagePerRows) {
		this.pagePerRows = pagePerRows;
	}

	public Long getEndIndex() {
		long endIndex = 0;
		if (this.getPageCurrent() == this.getTotalPageCount()) {
			endIndex = this.getTotalRowsCount();
		} else {
			endIndex = this.getPageCurrent() * this.getPagePerRows();
		}
		return endIndex;
	}

	public Long getStartIndex() {
		long startIndex = (this.getPageCurrent() - 1) * this.getPagePerRows()
				+ 1;
		return startIndex;
	}

	public Collection<T> getPageResult() {
		return pageResult;
	}

	public void setPageResult(Collection<T> pageResult) {
		this.pageResult = pageResult;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public void setTotalRowsCount(Long totalRowsCount) {
		this.totalRowsCount = totalRowsCount;
	}

	public void setTotalPageCount(Long totalPageCount) {
		this.totalPageCount = totalPageCount;
	}

	public void setTopPageNo(Long topPageNo) {
		this.topPageNo = topPageNo;
	}

	public void setPreviousPageNo(Long previousPageNo) {
		this.previousPageNo = previousPageNo;
	}

	public void setNextPageNo(Long nextPageNo) {
		this.nextPageNo = nextPageNo;
	}

	public void setBottomPageNo(Long bottomPageNo) {
		this.bottomPageNo = bottomPageNo;
	}

}
