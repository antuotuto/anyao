webpackJsonp([2],{632:function(e,t,a){"use strict";function s(e){a(659)}Object.defineProperty(t,"__esModule",{value:!0});var n=a(643),i=a(653),l=a(253),r=s,c=l(n.a,i.a,!1,r,"data-v-a889009c",null);t.default=c.exports},643:function(e,t,a){"use strict";t.a={data:function(){return{fileList2:[{name:"food.jpeg",url:"http://ooi407n8x.bkt.clouddn.com/an.jpg"}],dialogVisible:!1}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},open3:function(){var e=this;this.$prompt("请输入id：","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(t){var a=t.value;e.$message({type:"success",message:"提交成功"+a})}).catch(function(){e.$message({type:"info",message:"取消输入"})})}}}},647:function(e,t,a){t=e.exports=a(67)(void 0),t.push([e.i,".buyheader h2[data-v-a889009c]{line-height:50px;font-size:20px;text-align:left;padding-left:15px}.el-breadcrumb[data-v-a889009c]{padding-left:15px;width:100%}li[data-v-a889009c]{background-color:#f5f7fa;margin:15px;padding:15px;border-radius:4px}li .e-on[data-v-a889009c]:first-child,li .e-on[data-v-a889009c]:nth-child(2){width:100%}li .e-on[data-v-a889009c]{padding:10px 0;background-color:#f5f7fa}li .e-on span[data-v-a889009c]{color:#99a9bf}.plus[data-v-a889009c]{text-align:center;font-size:40px;margin-bottom:30px;color:#461b93}",""])},653:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"telephone"},[e._m(0),e._v(" "),a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("首页编辑")])],1),e._v(" "),a("ul",[a("li",[e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList2,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),a("li",[e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList2,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),a("li",[e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList2,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),a("li",[e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList2,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)]),e._v(" "),a("div",{staticClass:"plus"},[a("i",{staticClass:"el-icon-circle-plus",on:{click:e.open3}})])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"buyheader"},[a("h2",[e._v("热销产品")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("id：")]),e._v("0")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("产品名称：")]),e._v("安安科技")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("厂家：")]),e._v("武汉安艺科技")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("批号：")]),e._v("20171201")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("规格：")]),e._v("17粒")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("库存：")]),e._v("2件以上")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("id：")]),e._v("1")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("产品名称：")]),e._v("安安科技")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("厂家：")]),e._v("武汉安艺科技")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("批号：")]),e._v("20171201")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("规格：")]),e._v("17粒")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("库存：")]),e._v("2件以上")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("id：")]),e._v("2")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("产品名称：")]),e._v("安安科技")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("厂家：")]),e._v("武汉安艺科技")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("批号：")]),e._v("20171201")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("规格：")]),e._v("17粒")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("库存：")]),e._v("2件以上")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("id：")]),e._v("3")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("产品名称：")]),e._v("安安科技")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("厂家：")]),e._v("武汉安艺科技")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("批号：")]),e._v("20171201")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("规格：")]),e._v("17粒")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"e-on"},[a("span",[e._v("库存：")]),e._v("2件以上")])}],i={render:s,staticRenderFns:n};t.a=i},659:function(e,t,a){var s=a(647);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(254)("933d0cea",s,!0)}});
//# sourceMappingURL=2.js.map?b5e9f160f6f17b501fb2