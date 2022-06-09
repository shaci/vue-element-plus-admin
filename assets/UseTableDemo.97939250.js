import{_ as e}from"./ContentWrap.86215419.js";import{d as t,r as a,aN as l,m as o,o as i,c as s,g as n,w as r,a as m,$ as d,k as p,x as b,t as c,e as f}from"./index.a60e422a.js";import{_ as u}from"./Table.vue_vue_type_script_lang.61390994.js";import{g}from"./index.c8948198.js";import{E as D}from"./el-tag.8b952998.js";import{E as j}from"./el-button.6b669fff.js";import{u as _}from"./useTable.dfe74d2e.js";import"./el-card.4ed6a91a.js";import"./el-popper.fec8696f.js";import"./index2.e4c48cdc.js";import"./tsxHelper.973d88be.js";import"./index2.6005bce8.js";import"./event2.b9713b74.js";import"./el-input.76336542.js";import"./typescript2.7e235180.js";import"./index2.f3752faa.js";import"./scroll2.086fb762.js";import"./debounce.b572c387.js";import"./validator2.34d60faa.js";import"./el-message-box.fff53aa6.js";import"./el-overlay.319121f3.js";import"./vnode2.051a75df.js";import"./aria2.8444dc58.js";const x={class:"ml-30px"},v=t({__name:"UseTableDemo",setup(t){const{register:v,tableObject:h,methods:C}=_({getListApi:g,response:{list:"list",total:"total"}}),{getList:k}=C;k();const{t:w}=p(),y=a([{field:"index",label:w("tableDemo.index"),type:"index"},{field:"content",label:w("tableDemo.header"),children:[{field:"title",label:w("tableDemo.title")},{field:"author",label:w("tableDemo.author")},{field:"display_time",label:w("tableDemo.displayTime")},{field:"importance",label:w("tableDemo.importance"),formatter:(e,t,a)=>l(D,{type:1===a?"success":2===a?"warning":"danger"},(()=>w(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:w("tableDemo.pageviews")}]},{field:"action",label:w("tableDemo.action")}]),P=o(),T=e=>{P.value=e?{total:h.total}:void 0},S=e=>{const{setProps:t}=C;t({reserveIndex:e})},z=e=>{const{setProps:t}=C;t({selection:e})},U=o(1),$=()=>{const{setColumn:e}=C;e([{field:"title",path:"label",value:`${w("tableDemo.title")}${m(U)}`}]),U.value++},E=e=>{const{setProps:t}=C;t({expand:e})};return(t,a)=>(i(),s(d,null,[n(m(e),{title:`UseTable ${m(w)("tableDemo.operate")}`},{default:r((()=>[n(m(j),{onClick:a[0]||(a[0]=e=>T(!0))},{default:r((()=>[b(c(m(w)("tableDemo.show"))+" "+c(m(w)("tableDemo.pagination")),1)])),_:1}),n(m(j),{onClick:a[1]||(a[1]=e=>T(!1))},{default:r((()=>[b(c(m(w)("tableDemo.hidden"))+" "+c(m(w)("tableDemo.pagination")),1)])),_:1}),n(m(j),{onClick:a[2]||(a[2]=e=>S(!0))},{default:r((()=>[b(c(m(w)("tableDemo.reserveIndex")),1)])),_:1}),n(m(j),{onClick:a[3]||(a[3]=e=>S(!1))},{default:r((()=>[b(c(m(w)("tableDemo.restoreIndex")),1)])),_:1}),n(m(j),{onClick:a[4]||(a[4]=e=>z(!0))},{default:r((()=>[b(c(m(w)("tableDemo.showSelections")),1)])),_:1}),n(m(j),{onClick:a[5]||(a[5]=e=>z(!1))},{default:r((()=>[b(c(m(w)("tableDemo.hiddenSelections")),1)])),_:1}),n(m(j),{onClick:$},{default:r((()=>[b(c(m(w)("tableDemo.changeTitle")),1)])),_:1}),n(m(j),{onClick:a[6]||(a[6]=e=>E(!0))},{default:r((()=>[b(c(m(w)("tableDemo.showExpandedRows")),1)])),_:1}),n(m(j),{onClick:a[7]||(a[7]=e=>E(!1))},{default:r((()=>[b(c(m(w)("tableDemo.hiddenExpandedRows")),1)])),_:1})])),_:1},8,["title"]),n(m(e),{title:`UseTable ${m(w)("tableDemo.example")}`},{default:r((()=>[n(m(u),{pageSize:m(h).pageSize,"onUpdate:pageSize":a[8]||(a[8]=e=>m(h).pageSize=e),currentPage:m(h).currentPage,"onUpdate:currentPage":a[9]||(a[9]=e=>m(h).currentPage=e),columns:y,data:m(h).tableList,loading:m(h).loading,pagination:P.value,onRegister:m(v)},{action:r((e=>[n(m(j),{type:"primary",onClick:e=>{}},{default:r((()=>[b(c(m(w)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:r((e=>[f("div",x,[f("div",null,c(m(w)("tableDemo.title"))+"："+c(e.row.title),1),f("div",null,c(m(w)("tableDemo.author"))+"："+c(e.row.author),1),f("div",null,c(m(w)("tableDemo.displayTime"))+"："+c(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{v as default};
