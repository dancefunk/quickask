(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{589:function(s,n,a){"use strict";a.r(n);var t=a(5),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"方案一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[s._v("#")]),s._v(" 方案一")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("状态码库  6位、100000 开始\n\n例如：101001 \n前三位：代表模块 例如、101 用户模块\n后三位：代表状态 例如、001 登录成功\n\n200、404、500等默认HTTP状态码不变\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"方案二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[s._v("#")]),s._v(" 方案二")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('5 位 局部码 定义规则：ABBCC 自动补零\n\n* 1) A 消息级别码 1 位, \n\t1=控制性操作(如登录成功 /添加成功 需要跳转) \n\t2=提示性消息(发送成功,无后续操作) \n\t3=隐藏性提示(操作成功)\n\t\n* 2) BB 模块标识码 2 位, 00 禁止使用 具体看 module 定义\n\n* 3) CC 消息状态码 2 位, 00 禁止使用 10 以下预留\n\n{"code":10110,"message":"尚未登录","data":{"url":"/login"}}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"restful-api-状态码和对应的消息文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-api-状态码和对应的消息文本"}},[s._v("#")]),s._v(" Restful API 状态码和对应的消息文本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('-----------------------------------------------------------状态码\nOK                         ="200"\nCREATED                    ="201"\nACCEPTED                   ="202"\nNOCONTENT                  ="204"\nMOVEDPERMANENTLY           ="301"\nSEEOTHER                   ="303"\nNOTMODIFIED                ="304"\nBADREQUEST                 ="400"\nUNAUTHORIZED               ="401"\nFORBIDDEN                  ="403"\nNOTFOUND                   ="404"\nMethodNotAllowed           ="405"\nNOTACCEPTABLE              ="406"\nCONFLICT                   ="409"\nINTERNALSERVERERROR        ="500"\nSERVICEUNAVAILABLE         ="503"\n\nDBERR                      = "4001"\nNODATA                     = "4002"\nDATAEXIST                  = "4003"\nDATAERR                    = "4004"\nSESSIONERR                 = "4101"\nLOGINERR                   = "4102"\nPARAMERR                   = "4103"\nUSERERR                    = "4104"\nROLEERR                    = "4105"\nPWDERR                     = "4106"\nREQERR                     = "4201"\nIPERR                      = "4202"\nTHIRDERR                   = "4301"\nIOERR                      = "4302"\nSERVERERR                  = "4500"\nUNKOWNERR                  = "4501"\n\n-----------------------------------------------------------消息文本\n\nRET.OK                    :\'请求成功\',\nRET.CREATED               :\'创建成功\',\nRET.ACCEPTED              :\'更新成功\',\nRET.NOCONTENT             :\'表示资源有空\',\nRET.MOVEDPERMANENTLY      :\'资源的URI已被更新\',\nRET.SEEOTHER              :\'其他（如，负载均衡)\',\nRET.NOTMODIFIED           :\'资源未更改（缓存）\',\nRET.BADREQUEST            :\'坏请求（如，参数错误）\',\nRET.UNAUTHORIZED          :\'未授权\',\nRET.FORBIDDEN             :\'被禁止访问\',\nRET.NOTFOUND              :\'请求的资源不存在\',\nRET.METHODNOTALLOWED      :\'请求方法对指定的资源不适用\',\nRET.NOTACCEPTABLE         :\'请求格式错误\',\nRET.CONFLICT              :\'通用冲突 \' , \nRET.INTERNALSERVERERROR   :\'内部错误 \' , \nRET.SERVICEUNAVAILABLE    :\'服务当前无法处理请求 \' , \n\nRET.DBERR                 :"数据库查询错误 " , \nRET.NODATA                :"无数据 " , \nRET.DATAEXIST             :"数据已存在 " , \nRET.DATAERR               :"数据错误 " , \nRET.SESSIONERR            :"用户未登录 " , \nRET.LOGINERR              :"用户登录失败 " , \nRET.PARAMERR              :"参数错误 " , \nRET.USERERR               :"用户不存在或未激活 " , \nRET.ROLEERR               :"用户身份错误 " , \nRET.PWDERR                :"密码错误 " , \nRET.REQERR                :"非法请求或请求次数受限 " , \nRET.IPERR                 :"P 受限 " , \nRET.THIRDERR              :"第三方系统错误 " , \nRET.IOERR                 :"文件读写错误 " , \nRET.SERVERERR             :"内部错误 " , \nRET.UNKOWNERR             :"未知错误 " \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);