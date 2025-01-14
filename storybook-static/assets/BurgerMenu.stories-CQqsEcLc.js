import{j as e}from"./jsx-runtime-C6qLVRqm.js";import{R as m}from"./index-C2WPW1L7.js";import{a as c}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{f as b}from"./index-CzjNP0xw.js";import"./v4-CtRu48qb.js";const l=({onClick:s,style:u})=>{const[n,i]=m.useState(!1);return e.jsx("div",{className:n?"burger-menu open":"burger-menu",style:u,children:e.jsxs("button",{title:"burger-button",type:"button",className:"burger-button",onClick:()=>{i(!n),s==null||s()},children:[e.jsx("span",{className:"burger-line"}),e.jsx("span",{className:"burger-line"}),e.jsx("span",{className:"burger-line"})]})})};l.__docgenInfo={description:"",methods:[],displayName:"BurgerMenu",props:{onMenuToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const p=[{label:"Home"},{label:"Categories",subItems:[{label:"Main Dishes"},{label:"Bread & Pastries"},{label:"Desserts",subItems:[{label:"Flan"},{label:"Pie"},{label:"Cookies"},{label:"CheeseCake"},{label:"Ice Cream"},{label:"Pudding"},{label:"Candy"},{label:"Fruit"},{label:"Chocolate"},{label:"Cake"}]},{label:"Beverages"}]},{label:"Favorites"},{label:"Settings"}],I={title:"Components/BurgerMenuIcon",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onMenuToggle:{action:"menuToggled"},menuItems:{control:"object",defaultValue:p},onClick:c("on-click")},args:{onClick:b()}},a={args:{menuItems:[{label:"Home"},{label:"About"},{label:"Contact"}]}};var r,t,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    menuItems: [{
      label: 'Home'
    }, {
      label: 'About'
    }, {
      label: 'Contact'
    }]
  }
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const M=["BurgerMenuIcon"];export{a as BurgerMenuIcon,M as __namedExportsOrder,I as default};
