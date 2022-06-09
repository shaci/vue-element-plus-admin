import{F as e}from"./Form.07df6822.js";import{d as l,b as o,H as a,m as t,C as i,r as n,s as r,o as m,v as p,w as d,a as c,k as s,g as f,e as u,t as b,c as v,Y as D,n as h,x as g}from"./index.f17de39a.js";import{u as P}from"./useIcon.71f19914.js";import{_ as k}from"./ContentWrap.df0d7ec7.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import"./el-col.858b12d7.js";import"./typescript2.7e235180.js";import"./el-popper.1285574a.js";import"./index2.8bbaec30.js";import"./el-input.7be6cacf.js";import"./event2.b9713b74.js";import"./index2.67b87174.js";import"./el-tag.d168b965.js";import"./tsxHelper.7c1061dc.js";import"./index2.8ab3bd7b.js";import"./scroll2.5c0a4755.js";import"./debounce.5ac0c047.js";import"./validator2.0612a232.js";import"./el-button.9861d4be.js";import"./el-input-number.4ce62489.js";import"./el-switch.9063d9c1.js";import"./el-divider.60be20cd.js";import"./InputPassword.0605fd19.js";import"./Editor.c104c4f2.js";import"./aria2.8444dc58.js";import"./browser2.75a6ead7.js";import"./el-card.8f1c70df.js";const x=g(" Http:// "),j=g(" .com "),w={class:"value"},T={class:"link"},C={style:{float:"left"}},S={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},$={style:{float:"left"}},I={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},Y={style:{float:"left"}},_={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},F={style:{float:"left"}},M={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},N={key:0},A={class:"text"},E={key:0,class:"holiday"};var B=y(l({__name:"DefaultForm",setup(l){const g=o(),{t:y}=s(),B=a((()=>g.getMobile)),G=t([]),R=(e,l)=>{l(e?G.value.filter(L(e)):G.value)},L=e=>l=>0===l.value.toLowerCase().indexOf(e.toLowerCase()),O=e=>{};i((()=>{G.value=[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}]}));const V=["a","b","c","d","e","f","g","h","i","j"],z=t(Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${V[l%10]}${l}`})))),H=t(Array.from({length:10}).map(((e,l)=>{const o=l+1;return{value:`Group ${o}`,label:`Group ${o}`,options:Array.from({length:10}).map(((e,l)=>({value:`Option ${l+1+10*o}`,label:`${V[l%10]}${l+1+10*o}`})))}}))),W=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]}],U=()=>{const e=[];for(let l=1;l<=15;l++)e.push({value:l,desc:`Option ${l}`,disabled:l%4==0});return e},q=["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07"],J=({dayjs:e})=>q.includes(e.format("YYYY-MM-DD")),K=n([{field:"field1",label:y("formDemo.input"),component:"Divider"},{field:"field2",label:y("formDemo.default"),component:"Input"},{field:"field3",label:`${y("formDemo.icon")}1`,component:"Input",componentProps:{suffixIcon:P({icon:"ep:calendar"}),prefixIcon:P({icon:"ep:calendar"})}},{field:"field4",label:`${y("formDemo.icon")}2`,component:"Input",componentProps:{slots:{suffix:!0,prefix:!0}}},{field:"field5",label:y("formDemo.mixed"),component:"Input",componentProps:{slots:{prepend:!0,append:!0}}},{field:"field6",label:y("formDemo.textarea"),component:"Input",componentProps:{type:"textarea",rows:1}},{field:"field7",label:y("formDemo.autocomplete"),component:"Divider"},{field:"field8",label:y("formDemo.default"),component:"Autocomplete",componentProps:{fetchSuggestions:R,onSelect:O}},{field:"field9",label:y("formDemo.slot"),component:"Autocomplete",componentProps:{fetchSuggestions:R,onSelect:O,slots:{default:!0}}},{field:"field10",component:"Divider",label:y("formDemo.inputNumber")},{field:"field11",label:y("formDemo.default"),component:"InputNumber",value:0},{field:"field12",label:y("formDemo.position"),component:"InputNumber",componentProps:{controlsPosition:"right"},value:0},{field:"field13",label:y("formDemo.select"),component:"Divider"},{field:"field14",label:y("formDemo.default"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field15",label:y("formDemo.slot"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}],optionsSlot:!0}},{field:"field16",label:y("formDemo.selectGroup"),component:"Select",componentProps:{options:[{label:"option1",options:[{label:"option1-1",value:"1-1"},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}]}},{field:"field17",label:`${y("formDemo.selectGroup")}${y("formDemo.slot")}`,component:"Select",componentProps:{options:[{label:"option1",options:[{label:"option1-1",value:"1-1"},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}],optionsSlot:!0}},{field:"field18",label:`${y("formDemo.selectV2")}`,component:"Divider"},{field:"field19",label:y("formDemo.default"),component:"SelectV2",componentProps:{options:z.value}},{field:"field20",label:y("formDemo.slot"),component:"SelectV2",componentProps:{options:z.value,slots:{default:!0}}},{field:"field21",label:y("formDemo.selectGroup"),component:"SelectV2",componentProps:{options:H.value}},{field:"field22",label:`${y("formDemo.selectGroup")}${y("formDemo.slot")}`,component:"SelectV2",componentProps:{options:H.value,slots:{default:!0}}},{field:"field23",label:y("formDemo.cascader"),component:"Divider"},{field:"field24",label:y("formDemo.default"),component:"Cascader",componentProps:{options:W}},{field:"field25",label:y("formDemo.slot"),component:"Cascader",componentProps:{options:W,slots:{default:!0}}},{field:"field26",label:y("formDemo.switch"),component:"Divider"},{field:"field27",label:y("formDemo.default"),component:"Switch",value:!1},{field:"field28",label:y("formDemo.icon"),component:"Switch",value:!1,componentProps:{activeIcon:P({icon:"ep:check"}),inactiveIcon:P({icon:"ep:close"})}},{field:"field29",label:y("formDemo.rate"),component:"Divider"},{field:"field30",label:y("formDemo.default"),component:"Rate",value:null},{field:"field31",label:y("formDemo.icon"),component:"Rate",value:null,componentProps:{voidIcon:P({icon:"ep:chat-round"}),icons:[P({icon:"ep:chat-round"}),P({icon:"ep:chat-line-round"}),P({icon:"ep:chat-dot-round"})]}},{field:"field32",label:y("formDemo.colorPicker"),component:"Divider"},{field:"field33",label:y("formDemo.default"),component:"ColorPicker"},{field:"field34",label:y("formDemo.transfer"),component:"Divider"},{field:"field35",label:y("formDemo.default"),component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},data:U()},value:[],colProps:{span:24}},{field:"field36",label:y("formDemo.slot"),component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},leftDefaultChecked:[2,3],rightDefaultChecked:[1],data:U(),slots:{default:!0}},value:[1],colProps:{span:24}},{field:"field37",label:`${y("formDemo.render")}`,component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},leftDefaultChecked:[2,3],rightDefaultChecked:[1],data:U(),renderContent:(e,l)=>e("span",null,`${l.value} - ${l.desc}`)},value:[1],colProps:{span:24}},{field:"field38",label:y("formDemo.radio"),component:"Divider"},{field:"field39",label:y("formDemo.default"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field40",label:y("formDemo.button"),component:"RadioButton",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field41",label:y("formDemo.checkbox"),component:"Divider"},{field:"field42",label:y("formDemo.default"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}]}},{field:"field43",label:y("formDemo.button"),component:"CheckboxButton",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}]}},{field:"field44",component:"Divider",label:y("formDemo.slider")},{field:"field45",component:"Slider",label:y("formDemo.default"),value:0},{field:"field46",component:"Divider",label:y("formDemo.datePicker")},{field:"field47",component:"DatePicker",label:y("formDemo.default"),componentProps:{type:"date"}},{field:"field48",component:"DatePicker",label:y("formDemo.shortcuts"),componentProps:{type:"date",disabledDate:e=>e.getTime()>Date.now(),shortcuts:[{text:y("formDemo.today"),value:new Date},{text:y("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:y("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},{field:"field49",component:"DatePicker",label:y("formDemo.week"),componentProps:{type:"week",format:`[${y("formDemo.week")}] ww`}},{field:"field50",component:"DatePicker",label:y("formDemo.year"),componentProps:{type:"year"}},{field:"field51",component:"DatePicker",label:y("formDemo.month"),componentProps:{type:"month"}},{field:"field52",component:"DatePicker",label:y("formDemo.dates"),componentProps:{type:"dates"}},{field:"field53",component:"DatePicker",label:y("formDemo.daterange"),componentProps:{type:"daterange"}},{field:"field54",component:"DatePicker",label:y("formDemo.monthrange"),componentProps:{type:"monthrange"}},{field:"field55",component:"DatePicker",label:y("formDemo.slot"),componentProps:{type:"date",format:"YYYY/MM/DD",valueFormat:"YYYY-MM-DD",slots:{default:!0}}},{field:"field56",component:"Divider",label:y("formDemo.dateTimePicker")},{field:"field57",component:"DatePicker",label:y("formDemo.default"),componentProps:{type:"datetime"}},{field:"field58",component:"DatePicker",label:y("formDemo.shortcuts"),componentProps:{type:"datetime",shortcuts:[{text:y("formDemo.today"),value:new Date},{text:y("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:y("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},{field:"field59",component:"DatePicker",label:y("formDemo.dateTimerange"),componentProps:{type:"datetimerange"}},{field:"field60",component:"Divider",label:y("formDemo.timePicker")},{field:"field61",component:"TimePicker",label:y("formDemo.default")},{field:"field62",component:"Divider",label:y("formDemo.timeSelect")},{field:"field63",component:"TimeSelect",label:y("formDemo.default")}]);return(l,o)=>{const a=r("Icon");return m(),p(c(k),{title:c(y)("formDemo.defaultForm"),message:c(y)("formDemo.formDes")},{default:d((()=>[f(c(e),{schema:K,"label-width":"auto","label-position":c(B)?"top":"right"},{"field4-prefix":d((()=>[f(a,{icon:"ep:calendar",class:"el-input__icon"})])),"field4-suffix":d((()=>[f(a,{icon:"ep:calendar",class:"el-input__icon"})])),"field5-prepend":d((()=>[x])),"field5-append":d((()=>[j])),"field9-default":d((({item:e})=>[u("div",w,b(e.value),1),u("span",T,b(e.link),1)])),"field15-option":d((({item:e})=>[u("span",C,b(e.label),1),u("span",S,b(e.value),1)])),"field17-option":d((({item:e})=>[u("span",$,b(e.label),1),u("span",I,b(e.value),1)])),"field20-default":d((({item:e})=>[u("span",Y,b(e.label),1),u("span",_,b(e.value),1)])),"field22-default":d((({item:e})=>[u("span",F,b(e.label),1),u("span",M,b(e.value),1)])),"field25-default":d((({node:e,data:l})=>[u("span",null,b(l.label),1),e.isLeaf?D("",!0):(m(),v("span",N," ("+b(l.children.length)+") ",1))])),"field36-default":d((({option:e})=>[u("span",null,b(e.value)+" - "+b(e.desc),1)])),"field55-default":d((e=>[u("div",{class:h(["cell",{current:e.isCurrent}])},[u("span",A,b(e.text),1),J(e)?(m(),v("span",E)):D("",!0)],2)])),_:1},8,["schema","label-position"])])),_:1},8,["title","message"])}}}),[["__scopeId","data-v-02b78f76"]]);export{B as default};
