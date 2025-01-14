import{j as e}from"./jsx-runtime-C6qLVRqm.js";import{r as C}from"./index-C2WPW1L7.js";import{l as S}from"./banana-ZMAXlXRi.js";const j=({title:c,logo:i,user:a,onSearch:r,children:y})=>{const[l,N]=C.useState(""),B=o=>{o.preventDefault(),r==null||r(l)};return e.jsx("header",{className:"responsive-header",children:e.jsxs("div",{className:"header-container",children:[e.jsxs("div",{className:"header-left",children:[i&&e.jsx("img",{style:{width:"34px",height:"34px",padding:"10px"},alt:"logo",src:i}),c&&e.jsx("h1",{className:"header-title",children:c})]}),e.jsxs("div",{className:"header-center",children:[r&&e.jsx("form",{onSubmit:B,className:"search-form",children:e.jsxs("div",{className:"search-container",children:[e.jsx("input",{type:"search",placeholder:"Search recipes...",value:l,onChange:o=>N(o.target.value),className:"search-input"}),e.jsx("button",{type:"submit",className:"search-button"})]})}),y]}),e.jsx("div",{className:"header-right",children:a&&e.jsxs("div",{className:"user-profile",children:[a.avatar?e.jsx("img",{src:a.avatar,alt:a.name,className:"user-avatar"}):e.jsx(e.Fragment,{}),e.jsx("div",{className:"user-avatar-placeholder",children:a.name.charAt(0).toUpperCase()})]})})]})})};j.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!0,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"string"},description:""},user:{required:!1,tsType:{name:"User"},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20id='user'%3e%3cpath%20fill='%23231f20'%20d='M8%207a2.5%202.5%200%201%200-2.5-2.5A2.5%202.5%200%200%200%208%207zm0-4a1.5%201.5%200%201%201-1.5%201.5A1.5%201.5%200%200%201%208%203zm1.71%204.5H6.29A3.4%203.4%200%200%200%203%2011v2.5a.5.5%200%200%200%20.5.5h9a.5.5%200%200%200%20.5-.5V11a3.4%203.4%200%200%200-3.29-3.5zM12%2013H4v-2a2.4%202.4%200%200%201%202.29-2.5h3.42A2.4%202.4%200%200%201%2012%2011z'%3e%3c/path%3e%3c/svg%3e",R={title:"Components/Header",component:j,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{title:{control:"text",logo:{control:"text"},onSearch:{control:"boolean",defaultValue:!0}}}},s={args:{logo:S,title:"Banana Components"}},t={args:{title:"Banana Components",onSearch:!0}},n={args:{title:"Banana Components",user:{name:"Ana",avatar:w}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    logo: logo,
    title: 'Banana Components'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Banana Components',
    onSearch: true
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Banana Components',
    user: {
      name: 'Ana',
      avatar: user // Example avatar URL
    }
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const T=["DefaultLogo","WithSearchBar","WithUser"];export{s as DefaultLogo,t as WithSearchBar,n as WithUser,T as __namedExportsOrder,R as default};
