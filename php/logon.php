<?php
	include "public.php";
	$username = $GET["uname"];
	$userpwd = $GET["upwd"];
	$sql = "select * from tmgj where `uname` ='$username' or `email` ='$username' or `unam` ='$username'";
	$res = mysql_query( $sql );
	$arr = mysql_fetch_array( $res );
	if( $arr ){
		if( $userpwd == $arr["upwd"] ){
			echo "<script>alert('登录成功');location.href='../index.html';</script>";
		}else{
			echo "<script>alert('密码错误');location.href='../logon.html';</script>";
		}
	}else{
		echo "<script>alert('该用户不存在');location.href='../logon.html';</script>";
	}
?>