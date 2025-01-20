import{I as E}from"./Input-yGJSh5cx.js";import"./jsx-runtime-C6qLVRqm.js";import"./index-C2WPW1L7.js";const f={title:"Components/Input",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","textarea","select","checkbox","radio"]},label:{control:"text"},name:{control:"text"},required:{control:"boolean"},placeholder:{control:"text"}}},e={args:{type:"select",label:"Unit",name:"unit",required:!1,placeholder:"Enter recipe unit",options:[{label:"grams",value:"gr"},{label:"kilograms",value:"kg"},{label:"milliliters",value:"ml"},{label:"liters",value:"l"}]}},r={args:{type:"textarea",label:"Description",name:"description",required:!0,placeholder:"Enter step description"}},t={args:{type:"text",label:"Title",name:"title",required:!0,placeholder:"Enter recipe title"}},a={args:{type:"RADIO",label:"Si o No",name:"radio",required:!0,options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}]}},n={args:{type:"CHECKBOX",label:"To be or not to be",name:"checkbox",options:[{label:"2B",value:"2b"},{label:"Not 2B",value:"not2b"}],required:!1}},o={args:{type:"number",label:"Step",name:"step",required:!0,min:1,max:10}};var l,s,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'select',
    label: 'Unit',
    name: 'unit',
    required: false,
    placeholder: 'Enter recipe unit',
    options: [{
      label: 'grams',
      value: 'gr'
    }, {
      label: 'kilograms',
      value: 'kg'
    }, {
      label: 'milliliters',
      value: 'ml'
    }, {
      label: 'liters',
      value: 'l'
    }]
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,c,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'textarea',
    label: 'Description',
    name: 'description',
    required: true,
    placeholder: 'Enter step description'
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,d,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Title',
    name: 'title',
    required: true,
    placeholder: 'Enter recipe title'
  }
}`,...(b=(d=t.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var g,x,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'RADIO',
    label: 'Si o No',
    name: 'radio',
    required: true,
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }]
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,q,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'CHECKBOX',
    label: 'To be or not to be',
    name: 'checkbox',
    options: [{
      label: '2B',
      value: '2b'
    }, {
      label: 'Not 2B',
      value: 'not2b'
    }],
    required: false
  }
}`,...(h=(q=n.parameters)==null?void 0:q.docs)==null?void 0:h.source}}};var S,O,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'number',
    label: 'Step',
    name: 'step',
    required: true,
    min: 1,
    max: 10
  }
}`,...(k=(O=o.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const I=["Select","TextArea","Text","RadioButton","Checkbox","Number"];export{n as Checkbox,o as Number,a as RadioButton,e as Select,t as Text,r as TextArea,I as __namedExportsOrder,f as default};
