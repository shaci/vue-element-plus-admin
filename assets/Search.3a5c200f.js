import{F as e}from"./Form.2128ae33.js";import{d as a,a7 as t,m as o,H as s,s as n,o as i,c as l,g as r,w as c,a as d,a0 as m,v as u,Y as p,$ as h,x as f,t as y,k as x,cb as g,bh as b}from"./index.a60e422a.js";import{E as k}from"./el-button.6b669fff.js";import{u as v}from"./useForm.6d686639.js";const w={key:0},F=a({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:t.bool.def(!1),labelWidth:t.oneOfType([String,Number]).def("auto"),layout:t.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttomPosition:t.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:t.bool.def(!0),showReset:t.bool.def(!0),expand:t.bool.def(!1),expandField:t.string.def("")},emits:["search","reset"],setup(a,{emit:t}){const F=a,{t:_}=x(),C=o(!0),R=s((()=>{let e=g(F.schema);if(F.expand&&F.expandField&&!d(C)){const a=b(e,(e=>e.field===F.expandField));if(a>-1){const t=e.length;e.splice(a+1,t)}}return"inline"===F.layout&&(e=e.concat([{field:"action",formItemProps:{labelWidth:"0px"}}])),e})),{register:S,elFormRef:j,methods:q}=v(),P=async()=>{var e;await(null==(e=d(j))?void 0:e.validate((async e=>{if(e){const{getFormData:e}=q,a=await e();t("search",a)}})))},W=async()=>{var e;null==(e=d(j))||e.resetFields();const{getFormData:a}=q,o=await a();t("reset",o)},A=s((()=>({textAlign:F.buttomPosition}))),D=()=>{var e;null==(e=d(j))||e.resetFields(),C.value=!d(C)};return(t,o)=>{const s=n("Icon");return i(),l(h,null,[r(d(e),{"is-custom":!1,"label-width":a.labelWidth,"hide-required-asterisk":"",inline:"","is-col":a.isCol,schema:d(R),onRegister:d(S)},{action:c((()=>["inline"===a.layout?(i(),l("div",w,[a.showSearch?(i(),u(d(k),{key:0,type:"primary",onClick:P},{default:c((()=>[r(s,{icon:"ep:search",class:"mr-5px"}),f(" "+y(d(_)("common.query")),1)])),_:1})):p("",!0),a.showReset?(i(),u(d(k),{key:1,onClick:W},{default:c((()=>[r(s,{icon:"ep:refresh-right",class:"mr-5px"}),f(" "+y(d(_)("common.reset")),1)])),_:1})):p("",!0),a.expand?(i(),u(d(k),{key:2,text:"",onClick:D},{default:c((()=>[f(y(d(_)(C.value?"common.shrink":"common.expand"))+" ",1),r(s,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):p("",!0)])):p("",!0)])),_:1},8,["label-width","is-col","schema","onRegister"]),"bottom"===a.layout?(i(),l("div",{key:0,style:m(d(A))},[a.showSearch?(i(),u(d(k),{key:0,type:"primary",onClick:P},{default:c((()=>[r(s,{icon:"ep:search",class:"mr-5px"}),f(" "+y(d(_)("common.query")),1)])),_:1})):p("",!0),a.showReset?(i(),u(d(k),{key:1,onClick:W},{default:c((()=>[r(s,{icon:"ep:refresh-right",class:"mr-5px"}),f(" "+y(d(_)("common.reset")),1)])),_:1})):p("",!0),a.expand?(i(),u(d(k),{key:2,text:"",onClick:D},{default:c((()=>[f(y(d(_)(C.value?"common.shrink":"common.expand"))+" ",1),r(s,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):p("",!0)],4)):p("",!0)],64)}}});export{F as _};
