package ch08.dto;

import ch08.vo.GuestbookVo;

public class JsonResult {
	private String result; // "success" or "fail"
	private Object data; // if success, set!
	private String message; // if fail, set!

	////////////// 생성자 //////////////////
	private JsonResult() {
	}
	
	private JsonResult(Object data) {
		this.result = "success";
		this.data = data;
	}
	
	private JsonResult(String message) {
		this.result = "fail";
		this.message = message;
	}
	///////////////////////////////////////
	
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public static JsonResult success(GuestbookVo vo) {
		return new JsonResult(vo);
	}

	public static JsonResult fail(String message) {
		return new JsonResult(message);
	}

}
