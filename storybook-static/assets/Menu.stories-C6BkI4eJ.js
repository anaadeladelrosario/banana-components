import{j as t}from"./jsx-runtime-C6qLVRqm.js";import{M as b}from"./MenuItem-CtABUhQn.js";import{d as f}from"./styled-components.browser.esm-D95pWlE9.js";import{v as I}from"./v4-CtRu48qb.js";import{a as g}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{f as h}from"./index-CzjNP0xw.js";import"./index-C2WPW1L7.js";const x=(e,o)=>{console.log(`Item clicked: ${e[o].label}`)},p=({items:e,style:o,isOpen:d})=>t.jsx(y,{className:`menu-content${d?"-open":""}`,style:o,children:t.jsx("ul",{className:"menu-list",children:e?e.map(M=>t.jsx("li",{children:t.jsx(b,{...M,onItemClick:()=>x(e,0)})},I())):t.jsx(t.Fragment,{})})}),y=f.div`
  display: ${e=>e.className=="menu-content-open"?"block":"none"};
  flex-direction: column;

  @media (min-width: 1024px) {
    display: block; // Always show on desktop
  }
`;p.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"MenuItemProps"}],raw:"MenuItemProps[]"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};const u=[{label:"Categories",subItems:[{label:"Main Dishes"},{label:"Bread & Pastries"}]}],_={title:"Components/Menu",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},items:{control:"object",defaultValue:u},onItemClick:g("on-click")},args:{onItemClick:h()}},s={args:{title:"Menu Simple",items:[{label:"Home"},{label:"About"},{label:"Contact"}]}},n={args:{title:"Menu with nested items",items:u}};var a,r,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Menu Simple',
    items: [{
      label: 'Home'
    }, {
      label: 'About'
    }, {
      label: 'Contact'
    }]
  }
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var l,m,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Menu with nested items',
    items: defaultMenuItems
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const v=["MenuSimple","MenuWithNestedMenuItems"];export{s as MenuSimple,n as MenuWithNestedMenuItems,v as __namedExportsOrder,_ as default};
