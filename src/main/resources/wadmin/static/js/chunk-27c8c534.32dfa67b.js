(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27c8c534"],{ae45:function(e,t,s){"use strict";var a=s("bdd7"),i=s.n(a);i.a},b104:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-button",{attrs:{type:"primary"},on:{click:e.addShare}},[e._v("添加分享")]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[s("el-table-column",{attrs:{prop:"username",label:"Share Key"}}),e._v(" "),s("el-table-column",{attrs:{prop:"passwd",label:"Share Passwd"}}),e._v(" "),s("el-table-column",{attrs:{prop:"marks",label:"备注"}}),e._v(" "),s("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-tooltip",{attrs:{content:"更改分享状态"}},[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},on:{change:function(s){return e.changeStatus(t.row)}},model:{value:t.row["status"],callback:function(s){e.$set(t.row,"status",s)},expression:"scope.row['status']"}})],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.handlePermission(t.row)}}},[e._v("查看授权")]),e._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.handleDelete(t.row)}}},[e._v("删除分享")])]}}])})],1),e._v(" "),s("el-dialog",{attrs:{title:"查看授权",visible:e.dialogPermissionVisible},on:{"update:visible":function(t){e.dialogPermissionVisible=t}}},[s("el-form",{attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"分享备注"}},[s("el-input",{model:{value:e.shareMarks,callback:function(t){e.shareMarks=t},expression:"shareMarks"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"权限树"}},[s("el-tree",{ref:"dataUpdateTree",attrs:{data:e.treeData,"show-checkbox":"","node-key":"id"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogPermissionVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.updatePermission}},[e._v("更 新")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"添加分享",visible:e.dialogAddPermissionVisible},on:{"update:visible":function(t){e.dialogAddPermissionVisible=t}}},[s("el-form",{attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"分享备注"}},[s("el-input",{model:{value:e.shareMarks,callback:function(t){e.shareMarks=t},expression:"shareMarks"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"权限树"}},[s("el-tree",{ref:"dataAddTree",attrs:{data:e.treeData,"show-checkbox":"","node-key":"id"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogAddPermissionVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.hanlderAddShareItem}},[e._v("确 定")])],1)],1)],1)},i=[],r=s("b775");function n(e){return Object(r["a"])({url:"",method:"post",data:e})}function o(e){return Object(r["a"])({url:"",method:"post",data:e})}function l(e){return Object(r["a"])({url:"",method:"post",data:e})}function c(e){return Object(r["a"])({url:"",method:"post",data:e})}function u(e){return Object(r["a"])({url:"",method:"post",data:e})}var d={data:function(){return{shareMarks:"",dialogAddPermissionVisible:!1,dialogPermissionVisible:!1,choose:"",treeData:[],tableData:[],tempRow:{}}},mounted:function(){this.initListData(),this.initTreeData()},methods:{changeStatus:function(e){var t=this,s={u:"ushare",username:e.username,marks:e.marks,permission:e.permission,status:e.status};c(s).then((function(e){1017==e.code&&(t.$message({message:"更新分享成功",type:"success"}),t.dialogPermissionVisible=!1,t.shareMarks="",t.initListData())})).catch((function(e){console.log(e),alert("加载数据出错")}))},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该分享, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var s={u:"dshare",username:e.username};u(s).then((function(e){1021==e.code&&(t.$message({message:"删除成功",type:"success"}),t.initListData())})).catch((function(e){console.log(e),alert("加载数据出错")}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},hanlderAddShareItem:function(){var e=this;if(""==this.shareMarks)this.$message.error("备注不能为空");else{var t={u:"ashare",marks:this.shareMarks,permission:this.getKeys("dataAddTree")};o(t).then((function(t){1019==t.code&&(e.$message({message:"添加分享成功",type:"success"}),e.dialogAddPermissionVisible=!1,e.shareMarks="",e.initListData())})).catch((function(e){console.log(e),alert("加载数据出错")}))}},addShare:function(){var e=this;this.dialogAddPermissionVisible=!0,this.shareMarks="",setTimeout((function(){e.$refs.dataAddTree.setCheckedKeys([])}),200)},updatePermission:function(){var e=this;if(""==this.shareMarks)this.$message.error("备注不能为空");else{var t={u:"ushare",username:this.tempRow.username,marks:this.shareMarks,permission:this.getKeys("dataUpdateTree"),status:this.tempRow.status};c(t).then((function(t){1017==t.code&&(e.$message({message:"更新分享成功",type:"success"}),e.dialogPermissionVisible=!1,e.shareMarks="",e.initListData())})).catch((function(e){console.log(e),alert("加载数据出错")}))}},handlePermission:function(e){var t=this;this.dialogPermissionVisible=!0,this.tempRow=e;var s=e.permission.filter((function(e){if(e.indexOf("permission.")>-1||e.indexOf("fields.")>-1)return e}));this.shareMarks=e.marks,setTimeout((function(){t.$refs.dataUpdateTree.setCheckedKeys(s)}),200)},getKeys:function(e){var t=this.getCheckedKeys(this.treeData,this.$refs[e].getCheckedKeys(),"id");return t},getCheckedKeys:function(e,t,s){var a=[];return i(e,!1),a;function i(e,r){for(var n=[],o=0;o<e.length;o++){var l=e[o];n[o]=!1,l.children&&(n[o]=!!i(l.children,!0)||n[o],n[o]&&a.push(l[s]));for(var c=0;c<t.length;c++)if(l[s]==t[c]){n[o]=!0,-1==a.indexOf(l[s])&&a.push(l[s]);break}}if(r)return-1!=n.indexOf(!0)}},initTreeData:function(){var e=this,t={u:"gsharepermissionlist"};n(t).then((function(t){var s=t.data,a=s.data,i=[];for(var r in a){for(var n=[],o=0;o<a[r]["permission"].length;o++)if("chart"!=a[r]["permission"][o])n.push({id:"permission."+r+"."+a[r]["permission"][o],label:a[r]["permission"][o]});else if(console.log(a[r]["wchart"]),null!=a[r]["wchart"]){var l=[];for(var c in a[r]["wchart"])l.push({id:"permission."+r+".chart."+a[r]["wchart"][c],label:c});n.push({id:r+"chart",label:"chart",children:l})}var u=[];for(var d in a[r]["fields"])u.push({id:"fields."+r+"."+d,label:a[r]["fields"][d]});var h=[];h.push({id:r+"permission",label:"权限",children:n}),h.push({id:r+"fields",label:"可控字段",children:u}),i.push({id:r,label:a[r]["alias"],children:h})}e.treeData=i})).catch((function(e){console.log(e),alert("加载数据出错")}))},initListData:function(){var e=this,t={u:"gshare"};l(t).then((function(t){1e3==t.code&&(e.tableData=t.data.data)})).catch((function(e){console.log(e),alert("加载数据出错")}))}}},h=d,f=(s("ae45"),s("5511")),m=Object(f["a"])(h,a,i,!1,null,"3b709076",null);t["default"]=m.exports},bdd7:function(e,t,s){}}]);