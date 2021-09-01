```
<?php
//php接口的写法，php访问mysql数据库的基本步骤,获取用户

//1 连接数据库服务器：  mysql_connect("服务器名称","用户名","密码");or die("前面语句执行不成功后返回的信息".mysql_error());
//.mysql_error() 这个函数的意思是什么原因导致前面的sql语句执行失败

$conn = mysql_connect("localhost","root","root") or die("connect fieled!".mysql_error());

//防止中文乱码
mysql_query("SET NAMES UTF8");

//2 选择数据库： mysql_select_db("数据库的名称[可选的资源号，也就是第一步的变量名 $conn]"),返回值为true / false

$select = mysql_select_db("test",$conn) or die("select db failed!".mysql_errno());

//3 执行sql语句：mysql_query 可以在php中执行sql语句，先在数据库中执行这个语句，看是否能查出数据来

$sql = "select * from t_user"; //从表t_user中选择
$result = mysql_query($sql);

//4 获取执行结果： mysql_fetch_array(),会返回多行，因此要使用while循环，把返回的$result这个数组，按每次读一行显示
$array = array(); //自定义一个数组，存放数据
$i = 0; //初始数据为 0
while ($row = mysql_fetch_array($result)){
    //从返回到$row中所有的数据中取出需要的字段，并把它储存在数组$array中
    $array[$i]["user_id"] = $row["user_id"];
    $array[$i]["user_phone"] = $row["user_phone"];
    $array[$i]["user_name"] = $row["user_name"];
    //所有的数据都累加显示
    $i ++;
}

//5 关闭数据库连接：mysql_close(连接到数据库的变量)
mysql_close($conn);

//6 将结果转换为JSON输出到客户端
$json = json_encode(
    //array()是组织要显示的数据结构
    array(
        "resultCode"=>200,
        "message"=>"success",
        "data"=>$array
    )
); //转换为JSON
echo ($json); //显示在客户端
?>

```



