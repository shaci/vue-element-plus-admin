import{d as r,a7 as e,H as t,a,aN as s}from"./index.f17de39a.js";var l=r({name:"Highlight",props:{tag:e.string.def("span"),keys:{type:Array,default:()=>[]},color:e.string.def("var(--el-color-primary)")},emits:["click"],setup(r,{emit:e,slots:l}){const o=t((()=>r.keys.map((t=>s("span",{onClick:()=>{e("click",t)},style:{color:r.color,cursor:"pointer"}},t))))),n=()=>{if(!(null==l?void 0:l.default))return null;const e=null==l?void 0:l.default()[0].children;if(!e)return null==l?void 0:l.default()[0];const t=(n=e,r.keys.forEach(((r,e)=>{const t=new RegExp(r,"g");n=n.replace(t,`{{${e}}}`)})),n.split(/{{|}}/));var n;const i=/^[0-9]*$/,c=t.map((r=>i.test(r)&&a(o)[r]||r));return s(r.tag,c)};return()=>n()}});export{l as _};
