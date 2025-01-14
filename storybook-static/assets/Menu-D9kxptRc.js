import{j as n}from"./jsx-runtime-C6qLVRqm.js";import{M as r}from"./MenuItem-CtABUhQn.js";import{d as i}from"./styled-components.browser.esm-D95pWlE9.js";import{v as a}from"./v4-CtRu48qb.js";const m=(e,s)=>{console.log(`Item clicked: ${e[s].label}`)},l=({items:e,style:s,isOpen:o})=>n.jsx(p,{className:`menu-content${o?"-open":""}`,style:s,children:n.jsx("ul",{className:"menu-list",children:e?e.map(t=>n.jsx("li",{children:n.jsx(r,{...t,onItemClick:()=>m(e,0)})},a())):n.jsx(n.Fragment,{})})}),p=i.div`
  display: ${e=>e.className=="menu-content-open"?"block":"none"};
  flex-direction: column;

  @media (min-width: 1024px) {
    display: block; // Always show on desktop
  }
`;l.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"MenuItemProps"}],raw:"MenuItemProps[]"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""}}};export{l as M};
