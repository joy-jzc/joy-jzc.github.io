(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{499:function(t,s,v){"use strict";v.r(s);var _=v(57),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_1-前端网络基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端网络基础"}},[t._v("#")]),t._v(" 1.前端网络基础")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("注意此处：内容不全，结构完整...")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("在我看来这里的重要性简直是太高了，相当一人体的脊柱一样，这块搞不明白，你就高不起来。")]),t._v(" "),v("p",[t._v("因为有一些名词是需要有一定的网络基础的，例如 CDN， 缓存，cookie，session，token，TCP/IP，HTTP，请求响应报文... 这些都是至关重要，所以我也在思考，如何将这个重要的一块好好的写一下")]),t._v(" "),v("p",[t._v("我之前的书写时基于 HTTP，缓存，等等一块块零散的知识点进行，最后感觉起来，并不是很好，于是最后准备换一条路，从源头来一步一步进行分析，看看是否对理解前端中需要用到的网络知识有所帮助。")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"🥚第一部分-计算机网络概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🥚第一部分-计算机网络概述"}},[t._v("#")]),t._v(" 🥚第一部分：计算机网络概述")]),t._v(" "),v("h3",{attrs:{id:"_1-互联网结构发展的三个历史"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-互联网结构发展的三个历史"}},[t._v("#")]),t._v(" 1.互联网结构发展的三个历史")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("第一阶段：从单网络 ARPANET 向互联网发展的过程")])]),t._v(" "),v("p",[t._v("1969年美国国防部建立的 第一个分组交换网 ARPANET 最初只是一个单个的分组交换网，后来发现单个网络并不能满足使用")]),t._v(" "),v("p",[t._v("于是 ARPA 开始研究多种网络（分组无线电网络）互联的技术，这就导致了互联网络的出现，也是现在互联网的雏形")]),t._v(" "),v("p",[t._v("1983年 TCP/IP 协议成为 ARPANET 上的标准协议，使得使用 "),v("strong",[t._v("TCP/IP协议")]),t._v(" 的计算机都能利用互联网相互通信，因此人们就把 1983年定义为互联网的诞生时间")]),t._v(" "),v("hr"),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("第二阶段：构建三级结构的互联网")])]),t._v(" "),v("p",[t._v("1985年起，美国国家科学基金会 NSF 就围绕留个大型计算机中心 建设计算机网络（NSFNET）")]),t._v(" "),v("p",[t._v("这是一个三级计算机网络，分为 主干网，地域网，校园网（或企业网）")]),t._v(" "),v("p",[t._v("1991年，NSF 和 美国其他部门认识到，互联网必将扩大使用范围，不再仅限于大学和研究机构，于是美国政府决定将互联网的主干网交给私人公司来经营，并且开始对接入互联网的单位进行收费")]),t._v(" "),v("hr"),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("第三阶段：形成 多层次ISP结构的互联网")])]),t._v(" "),v("p",[t._v("ISP 就是一个进行商业活动的公司（互联网服务提供者），中国电信，中国联通，中国移动等公司都是我国有名的 ISP")]),t._v(" "),v("p",[t._v("ISP 可以从互联网管理机构申请到很多IP地址，同时拥有通信线路，以及路由器等联网设备")]),t._v(" "),v("p",[t._v("根据提供服务的覆盖面积，ISP也被分为：主干IPS，地区IPS，本地IPS")]),t._v(" "),v("p",[t._v("从原理上讲，只要每个本地IPS都按照了路由器，连接到了某个地区的IPS，而每个地区的IPS也有路由器连接到主干IPS，那么就能完成互联网中的所有的分组转发任务")]),t._v(" "),v("p",[t._v("随着互联网上数据流量的急剧增长，人们开始研究如何更快的转发分组，于是 "),v("strong",[t._v("互联网交换点 IXP 就应用而生了（了解）")])]),t._v(" "),v("img",{attrs:{src:"https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/notes/2.notes/8.0%E7%BD%91%E7%BB%9C/1.%E5%89%8D%E7%AB%AF%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/2.jpg"}}),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"_2-路由器-实现分组交换的关键构件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-路由器-实现分组交换的关键构件"}},[t._v("#")]),t._v(" 2.路由器（实现分组交换的关键构件）")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("分组交换则采用了 "),v("strong",[t._v("存储转发技术")]),t._v("，通常我们把要发送的整块数据成为一个报文，而分组交换技术 就是把一个报文划分为几个分组后再进行发送。")])]),t._v(" "),v("p",[t._v("把较长的报文划分为一个个更小的等长数据段，并且在每一个数据段的前面，加上一些由必要的控制信息组成的首部（Header）之后，就构成了一个分组（分组又称之为包，不知道大家听没听过抓包）")]),t._v(" "),v("p",[t._v("分组是互联网中传送的数据单元，分组的首部是非常重要的，正是由于分组的首部包含了诸如目的地址和源地址等重要控制信息，每一个分组才能在互联网中独立的进行传输路径，并正确的交付到分组传输的终点。")]),t._v(" "),v("img",{attrs:{src:"https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/notes/2.notes/8.0%E7%BD%91%E7%BB%9C/1.%E5%89%8D%E7%AB%AF%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/3.jpg"}}),t._v(" "),v("hr"),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("路由器是一种专用计算器（不叫主机），是实现分组交换的关键构件，其任务是 转发收到的分组。")])]),t._v(" "),v("p",[t._v("主机是为用户进行信息处理的，路由器是用来转发分组的")]),t._v(" "),v("p",[t._v("路由器收到一个分组，会暂时存储一下，检查其首部，查找转发表，按照首部中的目的地址，找到合适的接口转发出去，把分组交给下一个路由器")]),t._v(" "),v("p",[t._v("这样一步一步的（可能会经过十几个路由器）以存储转发的方式，把分组交付给最终的目的主机")]),t._v(" "),v("p",[t._v("各路由器之间必须经常交换彼此掌握的路由信息，以便创建和动态维护路由器中的转发表，使得转发表能够在整个网络拓扑发生改变的时候，及时更新")]),t._v(" "),v("img",{attrs:{src:"https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/notes/2.notes/8.0%E7%BD%91%E7%BB%9C/1.%E5%89%8D%E7%AB%AF%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/4.jpg"}}),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"_3-计算机网络体系结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-计算机网络体系结构"}},[t._v("#")]),t._v(" 3.计算机网络体系结构")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("主要有三种划分方式，分别是 OSI的七层协议（国际标准），TCP/IP四层协议，五层协议（广泛使用）")]),t._v(" "),v("p",[t._v("而我也主要是以五层协议为根本，接下里的内容也是以五层协议模型为核心书写的")])]),t._v(" "),v("img",{attrs:{src:"https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/notes/2.notes/8.0%E7%BD%91%E7%BB%9C/1.%E5%89%8D%E7%AB%AF%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/5.jpg"}}),t._v(" "),v("hr"),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("应用层 的任务是 通过应用进程间的交互来完成特定网络应用（没太懂）")])]),t._v(" "),v("p",[t._v("应用层协议定义的是 应用进程间通信和交互的规则（这里进程就是指正在运行的程序）")]),t._v(" "),v("p",[t._v("对于不同的应用程序需要有不同的应用层协议，例如域名系统DNS，万维网应用 HTTP协议，电子邮件 SMTP协议等等")]),t._v(" "),v("p",[t._v("我们把应用层交互的数据单元称为报文")]),t._v(" "),v("hr"),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("传输层 的任务是 负责向两台主机中进程之间的通信 提供通用的数据传输服务")])]),t._v(" "),v("p",[t._v("传输层主要使用两种协议")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("传输控制协议 TCP")]),t._v("，提供面向连接的，可靠的数据传输服务，数据传输单位是报文段")]),t._v(" "),v("li",[v("strong",[t._v("用户数据报协议 UDP")]),t._v("，提供无连接的，尽最大努力的数据传输服务（不保证数据传输的可靠性），数据传输单位是用户数据报")])]),t._v(" "),v("img",{attrs:{src:"https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/notes/2.notes/8.0%E7%BD%91%E7%BB%9C/1.%E5%89%8D%E7%AB%AF%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/7.jpg"}}),t._v(" "),v("hr"),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("网络层 的任务是 为分组交换网上的不同主机提供通信服务")])]),t._v(" "),v("p",[t._v("在发送数据的时候，网络层把传输层产生的报文段（或用户数据报）封装成分组或包的形式传送")]),t._v(" "),v("img",{attrs:{src:"https://itzkp-1253302184.cos.ap-beijing.myqcloud.com/notes/2.notes/8.0%E7%BD%91%E7%BB%9C/1.%E5%89%8D%E7%AB%AF%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/6.jpg"}}),t._v(" "),v("hr"),t._v(" "),v("blockquote",[v("p",[t._v("数据链路层，物理层，省略...")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"🍖第二部分-应用层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🍖第二部分-应用层"}},[t._v("#")]),t._v(" 🍖第二部分：应用层")]),t._v(" "),v("blockquote",[v("p",[t._v("书写中...")])]),t._v(" "),v("h2",{attrs:{id:"🥞第三部分-运输层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🥞第三部分-运输层"}},[t._v("#")]),t._v(" 🥞第三部分：运输层")]),t._v(" "),v("blockquote",[v("p",[t._v("书写中...")])]),t._v(" "),v("h2",{attrs:{id:"🧀第四部分-网络层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#🧀第四部分-网络层"}},[t._v("#")]),t._v(" 🧀第四部分：网络层")]),t._v(" "),v("blockquote",[v("p",[t._v("书写中...")])]),t._v(" "),v("h2",{attrs:{id:"📚参考列表-致敬"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#📚参考列表-致敬"}},[t._v("#")]),t._v(" 📚参考列表（致敬）")]),t._v(" "),v("ul",[v("li",[t._v("《计算机网络》（第七版）谢希仁 编著")])])])}),[],!1,null,null,null);s.default=a.exports}}]);