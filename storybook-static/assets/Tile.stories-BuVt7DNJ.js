import{j as n}from"./jsx-runtime-C6qLVRqm.js";/* empty css               */import{d as T,B as w}from"./Button-BgvTPOjf.js";import{v as S}from"./v4-CtRu48qb.js";import{f as j}from"./index-CzjNP0xw.js";import"./index-C2WPW1L7.js";function y({title:e,onClick:t,style:r,children:o}){return n.jsxs(v,{className:"tile",style:r,onClick:t,children:[n.jsx("h3",{children:e}),o]})}const v=T.div`
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
`;y.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{title:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const{addons:D}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:I}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:u}=__STORYBOOK_MODULE_GLOBAL__;var P="storybook/actions",C=`${P}/action-event`,A={depth:10,clearOnStoryChange:!0,limit:50},h=(e,t)=>{let r=Object.getPrototypeOf(e);return!r||t(r)?r:h(r,t)},B=e=>!!(typeof e=="object"&&e&&h(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),k=e=>{if(B(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let r=Object.getOwnPropertyDescriptor(t,"view"),o=r==null?void 0:r.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...r,value:Object.create(o.constructor.prototype)}),t}return e},V=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?S():Date.now().toString(36)+Math.random().toString(36).substring(2);function N(e,t={}){let r={...A,...t},o=function(...a){var p,l;if(t.implicit){let d=(p="__STORYBOOK_PREVIEW__"in u?u.__STORYBOOK_PREVIEW__:void 0)==null?void 0:p.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(d){let i=!((l=window==null?void 0:window.FEATURES)!=null&&l.disallowImplicitActionsInRenderV8),m=new I({phase:d.phase,name:e,deprecated:i});if(i)console.warn(m);else throw m}}let O=D.getChannel(),R=V(),x=5,c=a.map(k),b=a.length>1?c:c[0],E={id:R,count:0,data:{name:e,args:b},options:{...r,maxDepth:x+(r.depth||3),allowFunction:r.allowFunction||!1}};O.emit(C,E)};return o.isAction=!0,o.implicit=t.implicit,o}const F={title:"Components/Tile",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},onClick:N("on-click"),style:{control:"object"},children:{control:"object"}},args:{title:"Tile title",onClick:j()}},s={args:{title:"Tile",children:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Inside tiles you can add other components"}),n.jsx(w,{primary:!0,text:"Press me",onClick:()=>{},type:"button"})]})}};var g,_,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Tile',
    children: <><p>Inside tiles you can add other components</p><Button primary text={"Press me"} onClick={() => {}} type={"button"} /></>
  }
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const M=["TileWithDescription"];export{s as TileWithDescription,M as __namedExportsOrder,F as default};
