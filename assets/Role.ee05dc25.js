import{_ as e}from"./ContentWrap.86215419.js";import{d as a,k as s,aN as t,m as r,o,v as i,w as l,g as m,a as p,x as n,t as d}from"./index.a60e422a.js";import{_ as c}from"./Table.vue_vue_type_script_lang.61390994.js";import{b as u}from"./index.38c0dc5e.js";import{E as f}from"./el-button.6b669fff.js";import"./el-card.4ed6a91a.js";import"./el-popper.fec8696f.js";import"./index2.e4c48cdc.js";import"./tsxHelper.973d88be.js";import"./index2.6005bce8.js";import"./event2.b9713b74.js";import"./el-input.76336542.js";import"./typescript2.7e235180.js";import"./el-tag.8b952998.js";import"./index2.f3752faa.js";import"./scroll2.086fb762.js";import"./debounce.b572c387.js";import"./validator2.34d60faa.js";const b=a({__name:"Role",setup(a){const{t:b}=s(),j=[{field:"index",label:b("userDemo.index"),type:"index"},{field:"username",label:b("userDemo.username")},{field:"password",label:b("userDemo.password")},{field:"role",label:b("userDemo.role")},{field:"remark",label:b("userDemo.remark"),formatter:e=>t("span","admin"===e.username?b("userDemo.remarkMessage1"):b("userDemo.remarkMessage2"))},{field:"action",label:b("userDemo.action")}],g=r(!0);let x=r([]);(async e=>{const a=await u({params:e||{pageIndex:1,pageSize:10}}).catch((()=>{})).finally((()=>{g.value=!1}));a&&(x.value=a.data.list)})();return(a,s)=>(o(),i(p(e),{title:p(b)("userDemo.title"),message:p(b)("userDemo.message")},{default:l((()=>[m(p(c),{columns:j,data:p(x),loading:g.value,selection:!1},{action:l((e=>[m(p(f),{type:"primary",onClick:e=>{}},{default:l((()=>[n(d(p(b)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{b as default};
