import{F as e}from"./Form.07df6822.js";import{u as t}from"./useForm.a663e122.js";import{d as o,k as r,r as s,q as m,o as p,v as a,a as l}from"./index.f17de39a.js";import{r as i}from"./formRules.aa398153.js";import"./el-col.858b12d7.js";import"./typescript2.7e235180.js";import"./el-popper.1285574a.js";import"./index2.8bbaec30.js";import"./el-input.7be6cacf.js";import"./event2.b9713b74.js";import"./index2.67b87174.js";import"./el-tag.d168b965.js";import"./tsxHelper.7c1061dc.js";import"./index2.8ab3bd7b.js";import"./scroll2.5c0a4755.js";import"./debounce.5ac0c047.js";import"./validator2.0612a232.js";import"./el-button.9861d4be.js";import"./el-input-number.4ce62489.js";import"./el-switch.9063d9c1.js";import"./el-divider.60be20cd.js";import"./InputPassword.0605fd19.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.c104c4f2.js";import"./aria2.8444dc58.js";import"./browser2.75a6ead7.js";const n=o({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(o,{expose:n}){const c=o,{t:d}=r(),u=s([{field:"title",label:d("exampleDemo.title"),component:"Input",formItemProps:{rules:[i]},colProps:{span:24}},{field:"author",label:d("exampleDemo.author"),component:"Input",formItemProps:{rules:[i]}},{field:"display_time",label:d("exampleDemo.displayTime"),component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"},formItemProps:{rules:[i]}},{field:"importance",label:d("exampleDemo.importance"),component:"Select",formItemProps:{rules:[i]},componentProps:{options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},{field:"pageviews",label:d("exampleDemo.pageviews"),component:"InputNumber",value:0,formItemProps:{rules:[i]}},{field:"content",component:"Editor",colProps:{span:24},componentProps:{defaultHtml:"",onChange:e=>{const{setValues:t}=j;t({content:e.getHtml()})}},label:d("exampleDemo.content")}]),f=s({title:[i],author:[i],importance:[i],pageviews:[i],display_time:[i],content:[i]}),{register:b,methods:j,elFormRef:v}=t({schema:u});return m((()=>c.currentRow),(e=>{if(!e)return;const{setValues:t,setSchema:o}=j;t(e),o([{field:"content",path:"componentProps.defaultHtml",value:e.content}])}),{deep:!0,immediate:!0}),n({elFormRef:v,getFormData:j.getFormData}),(t,o)=>(p(),a(l(e),{rules:f,onRegister:l(b)},null,8,["rules","onRegister"]))}});export{n as default};
