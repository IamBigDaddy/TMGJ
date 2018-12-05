<?php
	include "public.php";
	$uname = $_GET['uname'];
	$umail = $_GET['umail'];
	$upwd = $_GET['upwd1'];
	$unam = $_GET['unum'];
	$sql = "INSERT INTO `tmj`(`uname`, `email`, `upwd`, `unam`) VALUES ('$uname','$umail','$upwd','$unam')";
	$row = mysql_query($sql);
	if( $row ){
		echo "<script>alert('注册成功');location.href='../register3.html'</script>";
	}else{
		echo "<scpipt>alert('注册失败');location.href='../register2.html';</script>";
	}
?>