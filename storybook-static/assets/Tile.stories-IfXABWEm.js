import{j as e}from"./jsx-runtime-C6qLVRqm.js";/* empty css               */import{d as x}from"./styled-components.browser.esm-D95pWlE9.js";import{a as h}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{f}from"./index-CzjNP0xw.js";import{B as y}from"./Button-DuMYj-Ka.js";import{l as T}from"./banana-ZMAXlXRi.js";import"./index-C2WPW1L7.js";import"./v4-CtRu48qb.js";function l({title:d,onClick:m,style:u,children:g}){return e.jsxs(b,{className:"tile",style:u,onClick:m,children:[e.jsx("h3",{children:d}),g]})}const b=x.div`
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin: 12px 0;
  font-size: var(--font-size-lg);
  margin: 0 auto;
  font-weight: 600;
  margin-bottom: 12px;
&:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
`;l.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{title:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const p=()=>e.jsxs(e.Fragment,{children:[" ",e.jsx("img",{style:{width:"34px",height:"34px",padding:"10px"},src:T,alt:"my image"})]});p.__docgenInfo={description:"",methods:[],displayName:"Logo"};const I={title:"Components/Tile",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},onClick:h("on-click"),style:{control:"object"},children:{control:"object"}},args:{title:"Tile title",onClick:f()}},t={args:{title:"Tile",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Inside tiles you can add other components"}),e.jsx(y,{primary:!0,text:"Press me",onClick:()=>{},type:"button"})]})}},r={args:{title:"Tile",children:e.jsx(p,{})}};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Tile',
    children: <><p>Inside tiles you can add other components</p><Button primary text={"Press me"} onClick={() => {}} type={"button"} /></>
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var n,a,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Tile',
    children: <Logo />
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const N=["TileWithButtonDescription","TileWithButtonImage"];export{t as TileWithButtonDescription,r as TileWithButtonImage,N as __namedExportsOrder,I as default};
