$(document).on("click","#btnLogin",function()
{
	var result= isValidFormLogin();
	if(result=="true")
	{
		$("#formLogin").submit();
	}
	else
	{
		$("#divStsMsgLogin").html(result);
	}
	
});

function isValidFormLogin()
{
	if($.trim($("#txtUserName").val())=="")
	{
		return "Enter Username";
	}
	if($.trim($("#txtPassword").val())=="")
	{
		return "Enter Password";
	}
	return "true";
}

function isValidFormLogin()
{
	if($.trim($("#txtItemName").val())=="")
	{
		return "Enter Item Name";
	}
	if($.trim($("#txtItemDesc").val())=="")
	{
		return "Enter Item Description";
	}
	return "true";
}

$(document).on("click","#btnSave",function()
{
	var result= isValidFormLogin();
	if(result=="true")
	{
		$("#formItems").submit();
	}
	else
	{
		$("#divStsMsgItem").html(result);
	}
			
});