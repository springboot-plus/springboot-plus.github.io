(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{209:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"生成crud代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成crud代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成CRUD代码")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("代码生成内容")]),t._v(" "),a("p",[t._v("spring-boot-plus在mybatis-plus基础上，新增param/vo等模板")]),t._v(" "),a("p",[t._v("拓展controller/service/mapper/xml，生成通用CRUD/分页方法")]),t._v(" "),a("p",[t._v("代码生成模板：spring-boot-plus/src/test/resources/templates")])]),t._v(" "),a("h2",{attrs:{id:"代码生成步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码生成步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码生成步骤")]),t._v(" "),a("ol",[a("li",[t._v("创建数据库表，例如：sys_log")])]),t._v(" "),a("blockquote",[a("p",[t._v("注意：记得加上表注释，字段列注释，方便生成类注释、swagger注释")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- ----------------------------")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Table structure for sys_log")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- ----------------------------")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("sys_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("sys_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("log_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主键'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tinyint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'类型'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" utf8 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLLATE")]),t._v(" utf8_general_ci "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("create_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建人ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("create_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("log_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utf8 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLLATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utf8_general_ci "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'系统日志'")]),t._v(" ROW_FORMAT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Dynamic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("代码生成配置")])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("spring-boot-plus/src/test/java/io/geekidea/springbootplus/test/SpringBootPlusGenerator.java\n")])])]),a("p",[a("img",{attrs:{src:"https://geekidea.oss-cn-chengdu.aliyuncs.com/spring-boot-plus/img/generator-config-location.png",alt:"代码生成器位置"}})]),t._v(" "),a("blockquote",[a("p",[t._v("修改数据库连接配置,修改模块、表、作者等配置")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringBootPlusGenerator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CodeGenerator")]),t._v(" codeGenerator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CodeGenerator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 公共配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据库配置")]),t._v("\n        codeGenerator\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDriverName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.mysql.jdbc.Driver"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDriverUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jdbc:mysql://localhost:3306/spring_boot_plus?useUnicode=true&characterEncoding=UTF-8&useSSL=false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包信息")]),t._v("\n        codeGenerator\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProjectPackagePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io/geekidea/springbootplus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setParentPackage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.geekidea.springbootplus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件作者等配置")]),t._v("\n        codeGenerator\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setModuleName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"system"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAuthor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geekidea"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPkIdColumnName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成策略")]),t._v("\n        codeGenerator\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGeneratorStrategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CodeGenerator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GeneratorStrategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPageListOrder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setParamValidation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成实体映射相关代码,可用于数据库字段更新")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当数据库字段更新时，可自定义自动生成哪些那文件")]),t._v("\n        codeGenerator\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGeneratorEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGeneratorQueryParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGeneratorQueryVo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成业务相关代码")]),t._v("\n        codeGenerator\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGeneratorController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGeneratorService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGeneratorServiceImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGeneratorMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGeneratorMapperXml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否生成Shiro RequiresPermissions注解")]),t._v("\n        codeGenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequiresPermissions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否覆盖已有文件")]),t._v("\n        codeGenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFileOverride")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化公共变量")]),t._v("\n        codeGenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要生成的表数组")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// xxx,yyy,zzz为需要生成代码的表名称")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" tables "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sys_log"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环生成")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" table "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tables"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置需要生成的表名称")]),t._v("\n            codeGenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTableName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成代码")]),t._v("\n            codeGenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("MODULE_NAME：模块名称，在目前项目上以单独的文件夹形式体现")]),t._v(" "),a("li",[t._v("AUTHOR：作者名称，在类的注释上体现")]),t._v(" "),a("li",[t._v("TABLE_NAME：表名称，当前需要生成的表名称，关联实体类等")]),t._v(" "),a("li",[t._v("PK_ID_COLUMN_NAME：主键列名称，默认是id，如果是其它名称，可在这里配置")]),t._v(" "),a("li",[t._v("GENERATOR_STRATEGY：代码生成策略 true：All/false:SIMPLE")]),t._v(" "),a("li",[t._v("PAGE_LIST_ORDER：分页列表查询是否排序 true：有排序参数/false：无")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("运行CodeGenerator.java")])]),t._v(" "),a("blockquote",[a("p",[t._v("3.1 控制台输出生成日志")])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("11:33:43.442 [main] DEBUG com.baomidou.mybatisplus.generator.AutoGenerator - ==========================准备生成文件...==========================\n11:33:44.167 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\entity]\n11:33:44.169 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\web\\controller]\n11:33:44.170 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\service]\n11:33:44.170 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\mapper]\n11:33:44.171 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 创建目录： [E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\service\\impl]\n...\n11:33:44.294 [main] DEBUG org.apache.velocity - ResourceManager : found /templates/mapper.xml.vm with loader org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader\n11:33:44.308 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/mapper.xml.vm;  文件:E:\\github\\spring-boot-plus/src/main/resources/mapper/system/SysLogMapper.xml\n11:33:44.313 [main] DEBUG org.apache.velocity - ResourceManager : found /templates/queryParam.java.vm with loader org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader\n11:33:44.314 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/queryParam.java.vm;  文件:E:\\github\\spring-boot-plus/src/main/java/io/geekidea/springbootplus/system/web/param/SysLogQueryParam.java\n11:33:44.332 [main] DEBUG org.apache.velocity - ResourceManager : found /templates/queryVo.java.vm with loader org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader\n11:33:44.337 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/queryVo.java.vm;  文件:E:\\github\\spring-boot-plus/src/main/java/io/geekidea/springbootplus/system/web/vo/SysLogQueryVo.java\n11:33:44.347 [main] DEBUG org.apache.velocity - ResourceManager : found /templates/entity.java.vm with loader org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader\n11:33:44.357 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/entity.java.vm;  文件:E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\entity\\SysLog.java\n11:33:44.359 [main] DEBUG org.apache.velocity - ResourceManager : found /templates/mapper.java.vm with loader org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader\n11:33:44.360 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/mapper.java.vm;  文件:E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\mapper\\SysLogMapper.java\n11:33:44.362 [main] DEBUG org.apache.velocity - ResourceManager : found /templates/service.java.vm with loader org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader\n11:33:44.364 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/service.java.vm;  文件:E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\service\\SysLogService.java\n11:33:44.367 [main] DEBUG org.apache.velocity - ResourceManager : found /templates/serviceImpl.java.vm with loader org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader\n11:33:44.369 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/serviceImpl.java.vm;  文件:E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\service\\impl\\SysLogServiceImpl.java\n11:33:44.373 [main] DEBUG org.apache.velocity - ResourceManager : found /templates/controller.java.vm with loader org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader\n11:33:44.376 [main] DEBUG com.baomidou.mybatisplus.generator.engine.AbstractTemplateEngine - 模板:/templates/controller.java.vm;  文件:E:\\github\\spring-boot-plus/src/main/java\\io\\geekidea\\springbootplus\\system\\web\\controller\\SysLogController.java\n11:33:44.376 [main] DEBUG com.baomidou.mybatisplus.generator.AutoGenerator - ==========================文件生成完成！！！==========================\n\nProcess finished with exit code 0\n")])])]),a("blockquote",[a("p",[t._v("3.2 生成的模块和包结构")])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├─system                模块包\n│  ├─entity             实体类包\n│  ├─mapper             mybatis mapper接口包\n│  ├─service            服务接口包\n│  │  └─impl            服务实现包\n│  └─web                提供前端结果相关包\n│      ├─controller     控制器包\n│      ├─param          参数包\n│      └─vo             值对象,响应结果包\n")])])]),a("blockquote",[a("p",[t._v("3.3 生成的包及相关的类")])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├─system                                \n│  ├─entity                             \n│  │      SysLog.java                   实体类，已生成swagger注释\n│  ├─mapper                             \n│  │      SysLogMapper.java             mapper接口\n│  ├─service                            \n│  │  │  SysLogService.java             服务接口，已继承公共service\n│  │  └─impl                            \n│  │          SysLogServiceImpl.java    服务实现类，已继承公共service impl\n│  └─web                                \n│      ├─controller                     \n│      │      SysLogController.java     控制器类，已生成CRUD，分页controller方法，已生成swagger文档\n│      ├─param                                                \n│      │      SysLogQueryParam.java     请求参数类，用于条件分页查询等\n│      └─vo                             \n│              SysLogQueryVo.java       响应结果类，用于自定义查询响应结果等\n")])])]),a("h2",{attrs:{id:"启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动项目")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringBootPlusApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java\n")])])]),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("2019-07-27 12:11:45.298  INFO 21856 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8888 (http) with context path ''\n2019-07-27 12:11:45.301  INFO 21856 --- [           main] i.g.s.SpringBootPlusApplication          : Started SpringBootPlusApplication in 9.66 seconds (JVM running for 10.988)\n2019-07-27 12:11:45.304  INFO 21856 --- [           main] i.g.s.util.PrintApplicationInfo          : projectFinalName : spring-boot-plus\n2019-07-27 12:11:45.305  INFO 21856 --- [           main] i.g.s.util.PrintApplicationInfo          : projectVersion : 1.0.0.RELEASE\n2019-07-27 12:11:45.305  INFO 21856 --- [           main] i.g.s.util.PrintApplicationInfo          : profileActive : local\n2019-07-27 12:11:45.305  INFO 21856 --- [           main] i.g.s.util.PrintApplicationInfo          : contextPath : /\n2019-07-27 12:11:45.305  INFO 21856 --- [           main] i.g.s.util.PrintApplicationInfo          : port : 8888\n2019-07-27 12:11:45.308  INFO 21856 --- [           main] i.g.s.util.PrintApplicationInfo          : home:http://192.168.1.168:8888/\n2019-07-27 12:11:45.308  INFO 21856 --- [           main] i.g.s.util.PrintApplicationInfo          : docs:http://192.168.1.168:8888/docs\n2019-07-27 12:11:45.308  INFO 21856 --- [           main] i.g.s.util.PrintApplicationInfo          : spring-boot-plus project start success...........\n2019-07-27 12:11:45.309  INFO 21856 --- [           main] i.g.s.util.PrintApplicationInfo          : \n ____    __                    __        ____                                                   \n/\\  _`\\ /\\ \\__                /\\ \\__    /\\  _`\\                                                 \n\\ \\,\\L\\_\\ \\ ,_\\    __     _ __\\ \\ ,_\\   \\ \\,\\L\\_\\  __  __    ___    ___     __    ____    ____  \n \\/_\\__ \\\\ \\ \\/  /'__`\\  /\\`'__\\ \\ \\/    \\/_\\__ \\ /\\ \\/\\ \\  /'___\\ /'___\\ /'__`\\ /',__\\  /',__\\ \n   /\\ \\L\\ \\ \\ \\_/\\ \\L\\.\\_\\ \\ \\/ \\ \\ \\_     /\\ \\L\\ \\ \\ \\_\\ \\/\\ \\__//\\ \\__//\\  __//\\__, `\\/\\__, `\\\n   \\ `\\____\\ \\__\\ \\__/.\\_\\\\ \\_\\  \\ \\__\\    \\ `\\____\\ \\____/\\ \\____\\ \\____\\ \\____\\/\\____/\\/\\____/\n    \\/_____/\\/__/\\/__/\\/_/ \\/_/   \\/__/     \\/_____/\\/___/  \\/____/\\/____/\\/____/\\/___/  \\/___/ \n")])])]),a("h2",{attrs:{id:"访问项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 访问项目")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://localhost:8888/swagger-ui.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8888/swagger-ui.html"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("或者访问本地ip")])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://192.168.xxx.xxx:8888/swagger-ui.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.xxx.xxx:8888/swagger-ui.html"),a("OutboundLink")],1)])]),t._v(" "),a("ul",[a("li",[t._v("自动生成swagger CRUD、分页接口文档\n"),a("img",{attrs:{src:"https://geekidea.oss-cn-chengdu.aliyuncs.com/spring-boot-plus/img/sys-log-swagger.png",alt:"swagger"}})])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("add 添加接口swagger\n"),a("img",{attrs:{src:"https://geekidea.oss-cn-chengdu.aliyuncs.com/spring-boot-plus/img/sys-log-add-swagger.png",alt:"add 添加接口swagger"}})])]),t._v(" "),a("li",[a("p",[t._v("delete 删除接口swagger\n"),a("img",{attrs:{src:"https://geekidea.oss-cn-chengdu.aliyuncs.com/spring-boot-plus/img/sys-log-delete-swagger.png",alt:"delete 删除接口swagger"}})])]),t._v(" "),a("li",[a("p",[t._v("getPageList 分页接口swagger\n"),a("img",{attrs:{src:"https://geekidea.oss-cn-chengdu.aliyuncs.com/spring-boot-plus/img/sys-log-getPageList-swagger.png",alt:"getPageList 分页接口swagger"}})])]),t._v(" "),a("li",[a("p",[t._v("info 详情接口swagger\n"),a("img",{attrs:{src:"https://geekidea.oss-cn-chengdu.aliyuncs.com/spring-boot-plus/img/sys-log-info-swagger.png",alt:"info 详情接口swagger"}})])]),t._v(" "),a("li",[a("p",[t._v("update 修改接口swagger\n"),a("img",{attrs:{src:"https://geekidea.oss-cn-chengdu.aliyuncs.com/spring-boot-plus/img/sys-log-update-swagger.png",alt:"update 修改接口swagger"}})])])])])}),[],!1,null,null,null);s.default=e.exports}}]);