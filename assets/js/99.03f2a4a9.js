(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{540:function(e,v,_){"use strict";_.r(v);var i=_(57),a=Object(i.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"_4-linux速查"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-linux速查"}},[e._v("#")]),e._v(" 4.Linux速查")]),e._v(" "),_("blockquote",[_("p",[e._v("内容尚未梳理")])]),e._v(" "),_("h2",{attrs:{id:"文件和目录-查看删除复制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件和目录-查看删除复制"}},[e._v("#")]),e._v(" 文件和目录（查看删除复制）")]),e._v(" "),_("ul",[_("li",[e._v("cd /home 进入 '/ home' 目录'")]),e._v(" "),_("li",[e._v("cd .. 返回上一级目录")]),e._v(" "),_("li",[e._v("cd ../.. 返回上两级目录")]),e._v(" "),_("li",[e._v("cd 进入个人的主目录")]),e._v(" "),_("li",[e._v("pwd 显示工作路径")]),e._v(" "),_("li",[e._v("ls 查看目录中的文件")]),e._v(" "),_("li",[e._v("ls -F 查看目录中的文件")]),e._v(" "),_("li",[e._v("ls -l 显示文件和目录的详细资料")]),e._v(" "),_("li",[e._v("ls -a 显示隐藏文件（ls -la 经常这样用）🔥")]),e._v(" "),_("li",[e._v("rm -rf dir1 删除一个叫做 'dir1' 的目录并同时删除其内容  🔥")]),e._v(" "),_("li",[e._v("rm -rf dir1 dir2 同时删除两个目录及它们的内容")]),e._v(" "),_("li",[e._v("复制文件：cp 文件地址 目标文件地址 🔥")]),e._v(" "),_("li",[e._v("复制文件夹：cp -r 文件夹地址 目标文件夹地址 🔥")]),e._v(" "),_("li",[e._v("ln -s file1 lnk1 创建一个指向文件或目录的软链接")]),e._v(" "),_("li",[e._v("ln file1 lnk1 创建一个指向文件或目录的物理链接")])]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"打包和压缩文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#打包和压缩文件"}},[e._v("#")]),e._v(" 打包和压缩文件")]),e._v(" "),_("ul",[_("li",[e._v("tar -cvf archive.tar file1 创建一个非压缩的 tarball")]),e._v(" "),_("li",[e._v("tar -cvf archive.tar file1 file2 dir1 创建一个包含了 'file1', 'file2' 以及 'dir1'的档案文件")]),e._v(" "),_("li",[e._v("tar -tf archive.tar 显示一个包中的内容")]),e._v(" "),_("li",[e._v("tar -xvf archive.tar 释放一个包")]),e._v(" "),_("li",[e._v("tar -xvf archive.tar -C /tmp 将压缩包释放到 /tmp目录下")]),e._v(" "),_("li",[e._v("tar -cvfj archive.tar.bz2 dir1 创建一个bzip2格式的压缩包")]),e._v(" "),_("li",[e._v("tar -jxvf archive.tar.bz2 解压一个bzip2格式的压缩包")]),e._v(" "),_("li",[e._v("tar -cvfz archive.tar.gz dir1 创建一个gzip格式的压缩包")]),e._v(" "),_("li",[e._v("tar -zxvf archive.tar.gz 解压一个gzip格式的压缩包")]),e._v(" "),_("li",[e._v("......")])]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"文件搜索"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件搜索"}},[e._v("#")]),e._v(" 文件搜索")]),e._v(" "),_("ul",[_("li",[e._v("find / -name file1 从 '/' 开始进入根文件系统搜索文件和目录")]),e._v(" "),_("li",[e._v("find / -user user1 搜索属于用户 'user1' 的文件和目录")]),e._v(" "),_("li",[e._v("find /home/user1 -name *.bin 在目录 '/ home/user1' 中搜索带有'.bin' 结尾的文件")]),e._v(" "),_("li",[e._v("find /usr/bin -type f -atime +100 搜索在过去100天内未被使用过的执行文件")]),e._v(" "),_("li",[e._v("find /usr/bin -type f -mtime -10 搜索在10天内被创建或者修改过的文件")]),e._v(" "),_("li",[e._v("find / -name *.rpm -exec chmod 755 '{}' ; 搜索以 '.rpm' 结尾的文件并定义其权限")]),e._v(" "),_("li",[e._v("find / -xdev -name *.rpm 搜索以 '.rpm' 结尾的文件，忽略光驱、捷盘等可移动设备")]),e._v(" "),_("li",[e._v("locate *.ps 寻找以 '.ps' 结尾的文件 - 先运行 'updatedb' 命令")]),e._v(" "),_("li",[e._v("whereis halt 显示一个二进制文件、源码或man的位置")]),e._v(" "),_("li",[e._v("which halt 显示一个二进制文件或可执行文件的完整路径")])]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"用户和群组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户和群组"}},[e._v("#")]),e._v(" 用户和群组")]),e._v(" "),_("p",[e._v("groupadd group_name 创建一个新用户组\ngroupdel group_name 删除一个用户组\ngroupmod -n new_group_name old_group_name 重命名一个用户组\nuseradd -c \"Name Surname \" -g admin -d /home/user1 -s /bin/bash user1 创建一个属于 \"admin\" 用户组的用户\nuseradd user1 创建一个新用户\nuserdel -r user1 删除一个用户 ( '-r' 排除主目录)\nusermod -c \"User FTP\" -g system -d /ftp/user1 -s /bin/nologin user1 修改用户属性\npasswd 修改口令\npasswd user1 修改一个用户的口令 (只允许root执行)\nchage -E 2005-12-31 user1 设置用户口令的失效期限\npwck 检查 '/etc/passwd' 的文件格式和语法修正以及存在的用户\ngrpck 检查 '/etc/passwd' 的文件格式和语法修正以及存在的群组\nnewgrp group_name 登陆进一个新的群组以改变新创建文件的预设群组")]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"文件的权限-使用-设置权限-使用-用于取消"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件的权限-使用-设置权限-使用-用于取消"}},[e._v("#")]),e._v(' 文件的权限 - 使用 "+" 设置权限，使用 "-" 用于取消')]),e._v(" "),_("p",[e._v("ls -lh 显示权限\nls /tmp | pr -T5 -W$COLUMNS 将终端划分成5栏显示\nchmod ugo+rwx directory1 设置目录的所有人(u)、群组(g)以及其他人(o)以读（r ）、写(w)和执行(x)的权限\nchmod go-rwx directory1 删除群组(g)与其他人(o)对目录的读写执行权限\nchown user1 file1 改变一个文件的所有人属性\nchown -R user1 directory1 改变一个目录的所有人属性并同时改变改目录下所有文件的属性\nchgrp group1 file1 改变文件的群组\nchown user1:group1 file1 改变一个文件的所有人和群组属性\nfind / -perm -u+s 罗列一个系统中所有使用了SUID控制的文件\nchmod u+s /bin/file1 设置一个二进制文件的 SUID 位 - 运行该文件的用户也被赋予和所有者同样的权限\nchmod u-s /bin/file1 禁用一个二进制文件的 SUID位\nchmod g+s /home/public 设置一个目录的SGID 位 - 类似SUID ，不过这是针对目录的\nchmod g-s /home/public 禁用一个目录的 SGID 位\nchmod o+t /home/public 设置一个文件的 STIKY 位 - 只允许合法所有人删除文件\nchmod o-t /home/public 禁用一个目录的 STIKY 位")]),e._v(" "),_("hr"),e._v(" "),_("h2",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),_("h3",{attrs:{id:"系统信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统信息"}},[e._v("#")]),e._v(" 系统信息")]),e._v(" "),_("ul",[_("li",[e._v("arch 显示机器的处理器架构(1)")]),e._v(" "),_("li",[e._v("uname -m 显示机器的处理器架构(2)")]),e._v(" "),_("li",[e._v("uname -r 显示正在使用的内核版本")]),e._v(" "),_("li",[e._v("dmidecode -q 显示硬件系统部件 - (SMBIOS / DMI)")]),e._v(" "),_("li",[e._v("hdparm -i /dev/hda 罗列一个磁盘的架构特性")]),e._v(" "),_("li",[e._v("hdparm -tT /dev/sda 在磁盘上执行测试性读取操作")]),e._v(" "),_("li",[e._v("cat /proc/cpuinfo 显示CPU info的信息")]),e._v(" "),_("li",[e._v("cat /proc/interrupts 显示中断")]),e._v(" "),_("li",[e._v("cat /proc/meminfo 校验内存使用")]),e._v(" "),_("li",[e._v("cat /proc/swaps 显示哪些swap被使用")]),e._v(" "),_("li",[e._v("cat /proc/version 显示内核的版本")]),e._v(" "),_("li",[e._v("cat /proc/net/dev 显示网络适配器及统计")]),e._v(" "),_("li",[e._v("cat /proc/mounts 显示已加载的文件系统")]),e._v(" "),_("li",[e._v("lspci -tv 罗列 PCI 设备")]),e._v(" "),_("li",[e._v("lsusb -tv 显示 USB 设备")]),e._v(" "),_("li",[e._v("date 显示系统日期")]),e._v(" "),_("li",[e._v("cal 2007 显示2007年的日历表")]),e._v(" "),_("li",[e._v("date 041217002007.00 设置日期和时间 - 月日时分年.秒")]),e._v(" "),_("li",[e._v("clock -w 将时间修改保存到 BIOS")])]),e._v(" "),_("h3",{attrs:{id:"关机-系统的关机、重启以及登出"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关机-系统的关机、重启以及登出"}},[e._v("#")]),e._v(" 关机 (系统的关机、重启以及登出 )")]),e._v(" "),_("p",[e._v("shutdown -h now 关闭系统(1)\ninit 0 关闭系统(2)\ntelinit 0 关闭系统(3)\nshutdown -h hours:minutes & 按预定时间关闭系统\nshutdown -c 取消按预定时间关闭系统\nshutdown -r now 重启(1)\nreboot 重启(2)\nlogout 注销")]),e._v(" "),_("h3",{attrs:{id:"yum-软件包升级器-fedora-redhat及类似系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#yum-软件包升级器-fedora-redhat及类似系统"}},[e._v("#")]),e._v(" YUM 软件包升级器 - （Fedora, RedHat及类似系统）")]),e._v(" "),_("ul",[_("li",[e._v("yum install package_name 下载并安装一个rpm包")]),e._v(" "),_("li",[e._v("yum localinstall package_name.rpm 将安装一个rpm包，使用你自己的软件仓库为你解决所有依赖关系")]),e._v(" "),_("li",[e._v("yum update package_name.rpm 更新当前系统中所有安装的rpm包")]),e._v(" "),_("li",[e._v("yum update package_name 更新一个rpm包")]),e._v(" "),_("li",[e._v("yum remove package_name 删除一个rpm包")]),e._v(" "),_("li",[e._v("yum list 列出当前系统中安装的所有包")]),e._v(" "),_("li",[e._v("yum search package_name 在rpm仓库中搜寻软件包")]),e._v(" "),_("li",[e._v("yum clean packages 清理rpm缓存删除下载的包")]),e._v(" "),_("li",[e._v("yum clean headers 删除所有头文件")]),e._v(" "),_("li",[e._v("yum clean all 删除所有缓存的包和头文件")])]),e._v(" "),_("h3",{attrs:{id:"查看文件内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看文件内容"}},[e._v("#")]),e._v(" 查看文件内容")]),e._v(" "),_("ul",[_("li",[e._v("cat file1 从第一个字节开始正向查看文件的内容")]),e._v(" "),_("li",[e._v("tac file1 从最后一行开始反向查看一个文件的内容")]),e._v(" "),_("li",[e._v("more file1 查看一个长文件的内容")]),e._v(" "),_("li",[e._v("less file1 类似于 'more' 命令，但是它允许在文件中和正向操作一样的反向操作")]),e._v(" "),_("li",[e._v("head -2 file1 查看一个文件的前两行")]),e._v(" "),_("li",[e._v("tail -2 file1 查看一个文件的最后两行")]),e._v(" "),_("li",[e._v("tail -f /var/log/messages 实时查看被添加到一个文件中的内容")])]),e._v(" "),_("h3",{attrs:{id:"文本处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文本处理"}},[e._v("#")]),e._v(" 文本处理")]),e._v(" "),_("ul",[_("li",[e._v("cat file1 file2 ... | command <> file1_in.txt_or_file1_out.txt general syntax for text manipulation using PIPE,STDIN and STDOUT")]),e._v(" "),_("li",[e._v("cat file1 | command( sed, grep, awk, grep, etc...) > result.txt 合并一个文件的详细说明文本，并将简介写入一个新文件中")]),e._v(" "),_("li",[e._v("cat file1 | command( sed, grep, awk, grep, etc...) >> result.txt 合并一个文件的详细说明文本，并将简介写入一个已有的文件中")]),e._v(" "),_("li",[e._v("grep Aug /var/log/messages 在文件 '/var/log/messages'中查找关键词\"Aug\"")]),e._v(" "),_("li",[e._v("grep ^Aug /var/log/messages 在文件 '/var/log/messages'中查找以\"Aug\"开始的词汇")]),e._v(" "),_("li",[e._v("grep [0-9] /var/log/messages 选择 '/var/log/messages' 文件中所有包含数字的行")]),e._v(" "),_("li",[e._v("grep Aug -R /var/log/* 在目录 '/var/log' 及随后的目录中搜索字符串\"Aug\"")]),e._v(" "),_("li",[e._v('sed \'s/stringa1/stringa2/g\' example.txt 将example.txt文件中的 "string1" 替换成 "string2"')]),e._v(" "),_("li",[e._v("sed '/^$/d' example.txt 从example.txt文件中删除所有空白行")]),e._v(" "),_("li",[e._v("sed '/ *#/d; /^$/d' example.txt 从example.txt文件中删除所有注释和空白行")]),e._v(" "),_("li",[e._v("echo 'esempio' | tr '[:lower:]' '[:upper:]' 合并上下单元格内容")]),e._v(" "),_("li",[e._v("sed -e '1d' result.txt 从文件example.txt 中排除第一行")]),e._v(" "),_("li",[e._v("sed -n '/stringa1/p' 查看只包含词汇 \"string1\"的行")]),e._v(" "),_("li",[e._v("sed -e 's/ *$//' example.txt 删除每一行最后的空白字符")]),e._v(" "),_("li",[e._v("sed -e 's/stringa1//g' example.txt 从文档中只删除词汇 \"string1\" 并保留剩余全部")]),e._v(" "),_("li",[e._v("sed -n '1,5p;5q' example.txt 查看从第一行到第5行内容")]),e._v(" "),_("li",[e._v("sed -n '5p;5q' example.txt 查看第5行")]),e._v(" "),_("li",[e._v("sed -e 's/00*/0/g' example.txt 用单个零替换多个零")]),e._v(" "),_("li",[e._v("cat -n file1 标示文件的行数")]),e._v(" "),_("li",[e._v("cat example.txt | awk 'NR%2==1' 删除example.txt文件中的所有偶数行")]),e._v(" "),_("li",[e._v("echo a b c | awk '{print $1}' 查看一行第一栏")]),e._v(" "),_("li",[e._v("echo a b c | awk '{print $1,$3}' 查看一行的第一和第三栏")]),e._v(" "),_("li",[e._v("paste file1 file2 合并两个文件或两栏的内容")]),e._v(" "),_("li",[e._v("paste -d '+' file1 file2 合并两个文件或两栏的内容，中间用\"+\"区分")]),e._v(" "),_("li",[e._v("sort file1 file2 排序两个文件的内容")]),e._v(" "),_("li",[e._v("sort file1 file2 | uniq 取出两个文件的并集(重复的行只保留一份)")]),e._v(" "),_("li",[e._v("sort file1 file2 | uniq -u 删除交集，留下其他的行")]),e._v(" "),_("li",[e._v("sort file1 file2 | uniq -d 取出两个文件的交集(只留下同时存在于两个文件中的文件)")]),e._v(" "),_("li",[e._v("comm -1 file1 file2 比较两个文件的内容只删除 'file1' 所包含的内容")]),e._v(" "),_("li",[e._v("comm -2 file1 file2 比较两个文件的内容只删除 'file2' 所包含的内容")]),e._v(" "),_("li",[e._v("comm -3 file1 file2 比较两个文件的内容只删除两个文件共有的部分")])])])}),[],!1,null,null,null);v.default=a.exports}}]);