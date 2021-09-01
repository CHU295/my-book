```
1. 安装Openssl

　　下载地址：http://slproweb.com/products/Win32OpenSSL.html （根据系统选择32位或者64位版本下载安装）。

　　下载完成后，进行安装，我安装在了 C:\OpenSSL-Win64文件夹中。
  
2. 配置环境变量

　　在环境变量中添加环境变量

　　　　变量名： OPENSSL_HOME            变量值：C:\OpenSSL-Win64\bin;        （变量值为openssl安装位置）

　　　　在path变量结尾添加如下 ： %OPENSSL_HOME%;
    
3. 生成证书　　 

　　（1） 首先在 nginx安装目录中存放证书。比如我的文件目录为 D:\nginx

　　（2） 创建私钥

　　　　　在命令行中执行命令： openssl genrsa -des3 -out chu.key 1024     （chu文件名可以自定义）
     
         会提示输入密码，密码得记住
         
    （3）创建csr证书

　　　　　在命令行中执行命令：  openssl req -new -key chu.key -out chu.csr    （key文件为刚才生成的文件，chu为自定义文件名）
     
         执行上述命令后，需要输入信息。输入的信息中最重要的为 Common Name，这里输入的域名即为我们要使用https访问的域名
         
         完成以后会生成两个文件
     
    （4）去除密码。

　　　　 在加载SSL支持的Nginx并使用上述私钥时除去必须的口令，否则会在启动nginx的时候需要输入密码。

　　　　　复制chu.key并重命名为chu.key.org 

　　　　　可以使用此命令行，也可以使用鼠标操作     copy chu.key chu.key.org

　　　　　去除口令，在命令行中执行此命令：  openssl rsa -in chu.key.org -out chu.key  （chu为自定义文件名）
     
         此命令需要输入刚才设置的密码
         
    （5）生成crt证书

　　　　　在命令行中执行此命令： openssl x509 -req -days 365 -in chu.csr -signkey chu.key -out chu.crt  （chu为自定义文件名）
     
         证书生成完毕，ssl文件夹中一共生成如下4个文件，我们需要使用到的是lee.crt和lee.key。
         
  4. 修改nginx.conf文件

　　　　nginx.conf文件位于：nginx\conf

　　　　找到该文件中进行修改： 保证本机的端口不被占用 443 和 80
    
      server {
        listen       443 ssl;
        server_name  localhost;

        ssl_certificate      ../chu.crt;
        ssl_certificate_key  ../chu.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            root   项目文件夹路径;
            index  index.html index.htm;
        }
    }

```



