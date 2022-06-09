import{F as e}from"./Form.07df6822.js";import{_ as o}from"./ContentWrap.df0d7ec7.js";import{d as l,r as t,m as a,o as i,c as m,g as r,w as s,a as d,$ as n,k as f,x as p,t as c}from"./index.f17de39a.js";import{u}from"./useForm.a663e122.js";import{E as b}from"./el-button.9861d4be.js";import{r as D}from"./formRules.aa398153.js";import"./el-col.858b12d7.js";import"./typescript2.7e235180.js";import"./el-popper.1285574a.js";import"./index2.8bbaec30.js";import"./el-input.7be6cacf.js";import"./event2.b9713b74.js";import"./index2.67b87174.js";import"./el-tag.d168b965.js";import"./tsxHelper.7c1061dc.js";import"./index2.8ab3bd7b.js";import"./scroll2.5c0a4755.js";import"./debounce.5ac0c047.js";import"./validator2.0612a232.js";import"./el-input-number.4ce62489.js";import"./el-switch.9063d9c1.js";import"./el-divider.60be20cd.js";import"./InputPassword.0605fd19.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.c104c4f2.js";import"./aria2.8444dc58.js";import"./browser2.75a6ead7.js";import"./el-card.8f1c70df.js";const j=l({__name:"UseFormDemo",setup(l){const{t:j}=f(),v=t([{field:"field1",label:j("formDemo.input"),component:"Input",formItemProps:{rules:[D]}},{field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:j("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:j("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:j("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:j("formDemo.timeSelect")}]),{register:_,methods:k,elFormRef:h}=u({schema:v}),C=e=>{const{setProps:o}=k;o({labelWidth:e})},P=e=>{const{setProps:o}=k;o({size:e})},x=e=>{const{setProps:o}=k;o({disabled:e})},$=e=>{const{delSchema:o,addSchema:l}=k;e?o("field2"):e||"field2"===v[1].field||l({field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},g=e=>{var o;const{setValues:l}=k;e?null==(o=d(h))||o.resetFields():l({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},F=a(7),S=()=>{const{setSchema:e}=k;e([{field:"field2",path:"label",value:`${j("formDemo.select")} ${F.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),F.value++},R=()=>{const{addSchema:e}=k;d(F)%2==0?e({field:`field${d(F)}`,label:`${j("formDemo.input")}${d(F)}`,component:"Input"}):e({field:`field${d(F)}`,label:`${j("formDemo.input")}${d(F)}`,component:"Input"},d(F)),F.value++},I=()=>{d(h).validate((e=>{}))},w=()=>{var e;null==(e=d(h))||e.resetFields()};return(l,t)=>(i(),m(n,null,[r(d(o),{title:`UseForm ${d(j)("formDemo.operate")}`},{default:s((()=>[r(d(b),{onClick:t[0]||(t[0]=e=>C(150))},{default:s((()=>[p(c(d(j)("formDemo.change"))+" labelWidth",1)])),_:1}),r(d(b),{onClick:t[1]||(t[1]=e=>C("auto"))},{default:s((()=>[p(c(d(j)("formDemo.restore"))+" labelWidth",1)])),_:1}),r(d(b),{onClick:t[2]||(t[2]=e=>P("large"))},{default:s((()=>[p(c(d(j)("formDemo.change"))+" size",1)])),_:1}),r(d(b),{onClick:t[3]||(t[3]=e=>P("default"))},{default:s((()=>[p(c(d(j)("formDemo.restore"))+" size",1)])),_:1}),r(d(b),{onClick:t[4]||(t[4]=e=>x(!0))},{default:s((()=>[p(c(d(j)("formDemo.disabled")),1)])),_:1}),r(d(b),{onClick:t[5]||(t[5]=e=>x(!1))},{default:s((()=>[p(c(d(j)("formDemo.disablement")),1)])),_:1}),r(d(b),{onClick:t[6]||(t[6]=e=>$(!0))},{default:s((()=>[p(c(d(j)("formDemo.delete"))+" "+c(d(j)("formDemo.select")),1)])),_:1}),r(d(b),{onClick:t[7]||(t[7]=e=>$(!1))},{default:s((()=>[p(c(d(j)("formDemo.add"))+" "+c(d(j)("formDemo.select")),1)])),_:1}),r(d(b),{onClick:t[8]||(t[8]=e=>g(!1))},{default:s((()=>[p(c(d(j)("formDemo.setValue")),1)])),_:1}),r(d(b),{onClick:t[9]||(t[9]=e=>g(!0))},{default:s((()=>[p(c(d(j)("formDemo.resetValue")),1)])),_:1}),r(d(b),{onClick:S},{default:s((()=>[p(c(d(j)("formDemo.set"))+" "+c(d(j)("formDemo.select"))+" label ",1)])),_:1}),r(d(b),{onClick:R},{default:s((()=>[p(c(d(j)("formDemo.add"))+" "+c(d(j)("formDemo.subitem")),1)])),_:1}),r(d(b),{onClick:I},{default:s((()=>[p(c(d(j)("formDemo.formValidation")),1)])),_:1}),r(d(b),{onClick:w},{default:s((()=>[p(c(d(j)("formDemo.verifyReset")),1)])),_:1})])),_:1},8,["title"]),r(d(o),{title:`UseForm ${d(j)("formDemo.example")}`},{default:s((()=>[r(d(e),{onRegister:d(_)},null,8,["onRegister"])])),_:1},8,["title"])],64))}});export{j as default};
