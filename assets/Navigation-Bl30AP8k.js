import{j as e}from"./jsx-runtime-C6qLVRqm.js";import{r as i}from"./index-C2WPW1L7.js";import{M as a}from"./Menu-D9kxptRc.js";import{B as o}from"./BurgerMenu-BbmkXxVa.js";import{d as m}from"./styled-components.browser.esm-D95pWlE9.js";const p=({menuItems:t})=>{const[s,r]=i.useState(!1),n=()=>{r(!s)};return e.jsxs(d,{className:"navbar",children:[e.jsx(o,{onClick:n}),e.jsx(a,{isOpen:s,items:t})]})},d=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-sm);

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;p.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItemProps"}],raw:"MenuItemProps[]"},description:""}}};export{p as N};
