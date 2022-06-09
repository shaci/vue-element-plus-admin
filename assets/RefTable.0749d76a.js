import{_ as e}from"./ContentWrap.df0d7ec7.js";import{d as a,r as t,aN as l,m as o,o as i,c as s,g as r,w as n,a as d,$ as m,k as p,x as b,t as c,e as u}from"./index.f17de39a.js";import{_ as f}from"./Table.vue_vue_type_script_lang.37ededc2.js";import{g}from"./index.0afc2acc.js";import{E as D}from"./el-tag.d168b965.js";import{E as j}from"./el-button.9861d4be.js";import{u as _}from"./useTable.6a2be71c.js";import"./el-card.8f1c70df.js";import"./el-popper.1285574a.js";import"./index2.8bbaec30.js";import"./tsxHelper.7c1061dc.js";import"./index2.67b87174.js";import"./event2.b9713b74.js";import"./el-input.7be6cacf.js";import"./typescript2.7e235180.js";import"./index2.8ab3bd7b.js";import"./scroll2.5c0a4755.js";import"./debounce.5ac0c047.js";import"./validator2.0612a232.js";import"./el-message-box.fa0e2268.js";import"./el-overlay.d892b768.js";import"./vnode2.6b9f2810.js";import"./aria2.8444dc58.js";const v={class:"ml-30px"},x=a({__name:"RefTable",setup(a){const{t:x}=p(),h=t([{field:"index",label:x("tableDemo.index"),type:"index"},{field:"content",label:x("tableDemo.header"),children:[{field:"title",label:x("tableDemo.title")},{field:"author",label:x("tableDemo.author")},{field:"display_time",label:x("tableDemo.displayTime")},{field:"importance",label:x("tableDemo.importance"),formatter:(e,a,t)=>l(D,{type:1===t?"success":2===t?"warning":"danger"},(()=>x(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:x("tableDemo.pageviews")}]},{field:"action",label:x("tableDemo.action")}]),{register:k,tableObject:y,methods:C}=_({getListApi:g,response:{list:"list",total:"total"},props:{columns:h}}),{getList:w}=C;w();const P=o(),R=o(),T=e=>{R.value=e?{total:y.total}:void 0},S=e=>{var a;null==(a=d(P))||a.setProps({reserveIndex:e})},z=e=>{var a;null==(a=d(P))||a.setProps({selection:e})},$=o(1),E=()=>{var e;null==(e=d(P))||e.setColumn([{field:"title",path:"label",value:`${x("tableDemo.title")}${d($)}`}]),$.value++},I=e=>{var a;null==(a=d(P))||a.setProps({expand:e})};return(a,t)=>(i(),s(m,null,[r(d(e),{title:`RefTable ${d(x)("tableDemo.operate")}`},{default:n((()=>[r(d(j),{onClick:t[0]||(t[0]=e=>T(!0))},{default:n((()=>[b(c(d(x)("tableDemo.show"))+" "+c(d(x)("tableDemo.pagination")),1)])),_:1}),r(d(j),{onClick:t[1]||(t[1]=e=>T(!1))},{default:n((()=>[b(c(d(x)("tableDemo.hidden"))+" "+c(d(x)("tableDemo.pagination")),1)])),_:1}),r(d(j),{onClick:t[2]||(t[2]=e=>S(!0))},{default:n((()=>[b(c(d(x)("tableDemo.reserveIndex")),1)])),_:1}),r(d(j),{onClick:t[3]||(t[3]=e=>S(!1))},{default:n((()=>[b(c(d(x)("tableDemo.restoreIndex")),1)])),_:1}),r(d(j),{onClick:t[4]||(t[4]=e=>z(!0))},{default:n((()=>[b(c(d(x)("tableDemo.showSelections")),1)])),_:1}),r(d(j),{onClick:t[5]||(t[5]=e=>z(!1))},{default:n((()=>[b(c(d(x)("tableDemo.hiddenSelections")),1)])),_:1}),r(d(j),{onClick:E},{default:n((()=>[b(c(d(x)("tableDemo.changeTitle")),1)])),_:1}),r(d(j),{onClick:t[6]||(t[6]=e=>I(!0))},{default:n((()=>[b(c(d(x)("tableDemo.showExpandedRows")),1)])),_:1}),r(d(j),{onClick:t[7]||(t[7]=e=>I(!1))},{default:n((()=>[b(c(d(x)("tableDemo.hiddenExpandedRows")),1)])),_:1})])),_:1},8,["title"]),r(d(e),{title:`RefTable ${d(x)("tableDemo.example")}`},{default:n((()=>[r(d(f),{ref_key:"tableRef",ref:P,pageSize:d(y).pageSize,"onUpdate:pageSize":t[8]||(t[8]=e=>d(y).pageSize=e),currentPage:d(y).currentPage,"onUpdate:currentPage":t[9]||(t[9]=e=>d(y).currentPage=e),data:d(y).tableList,loading:d(y).loading,pagination:R.value,onRegister:d(k)},{action:n((e=>[r(d(j),{type:"primary",onClick:e=>{}},{default:n((()=>[b(c(d(x)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:n((e=>[u("div",v,[u("div",null,c(d(x)("tableDemo.title"))+"："+c(e.row.title),1),u("div",null,c(d(x)("tableDemo.author"))+"："+c(e.row.author),1),u("div",null,c(d(x)("tableDemo.displayTime"))+"："+c(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{x as default};
