import{_ as e}from"./ContentWrap.df0d7ec7.js";import{d as a,aN as t,m as l,o,v as i,w as s,a as m,k as r,g as p,x as d,t as n}from"./index.f17de39a.js";import{_ as b}from"./Table.vue_vue_type_script_lang.37ededc2.js";import{g as c}from"./index.0afc2acc.js";import{E as f}from"./el-tag.d168b965.js";import{E as j}from"./el-button.9861d4be.js";import"./el-card.8f1c70df.js";import"./el-popper.1285574a.js";import"./index2.8bbaec30.js";import"./tsxHelper.7c1061dc.js";import"./index2.67b87174.js";import"./event2.b9713b74.js";import"./el-input.7be6cacf.js";import"./typescript2.7e235180.js";import"./index2.8ab3bd7b.js";import"./scroll2.5c0a4755.js";import"./debounce.5ac0c047.js";import"./validator2.0612a232.js";const u=a({__name:"DefaultTable",setup(a){const{t:u}=r(),g=[{field:"index",label:u("tableDemo.index"),type:"index"},{field:"title",label:u("tableDemo.title")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime")},{field:"importance",label:u("tableDemo.importance"),formatter:(e,a,l)=>t(f,{type:1===l?"success":2===l?"warning":"danger"},(()=>u(1===l?"tableDemo.important":2===l?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:u("tableDemo.pageviews")},{field:"action",label:u("tableDemo.action")}],D=l(!0);let x=l([]);(async e=>{const a=await c({params:e||{pageIndex:1,pageSize:10}}).catch((()=>{})).finally((()=>{D.value=!1}));a&&(x.value=a.data.list)})();return(a,t)=>(o(),i(m(e),{title:m(u)("tableDemo.table"),message:m(u)("tableDemo.tableDes")},{default:s((()=>[p(m(b),{columns:g,data:m(x),loading:D.value},{action:s((e=>[p(m(j),{type:"primary",onClick:e=>{}},{default:s((()=>[d(n(m(u)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{u as default};
