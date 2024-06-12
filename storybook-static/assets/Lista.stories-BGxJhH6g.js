import{j as e}from"./jsx-runtime-BZf_YgVj.js";import{P as a}from"./index-BDAnVJ5B.js";import"./index-CEThVCg_.js";const f="_lista_cojz2_13",g="_elemento_cojz2_29",o={lista:f,elemento:g},m=({colorTexto:t,colorFondo:s,lista:r=["Item 1","Item 2","Item 3","Item 4","Item 5"]})=>e.jsxs("div",{children:[e.jsx("h2",{className:o.h2,children:"Lista de prueba"}),e.jsxs("ul",{className:o.lista,children:[e.jsx("li",{className:o.elemento,style:{background:s,color:t},children:r[0]}),e.jsx("li",{className:o.elemento,style:{background:s,color:t},children:r[1]}),e.jsx("li",{className:o.elemento,style:{background:s,color:t},children:r[2]}),e.jsx("li",{className:o.elemento,style:{background:s,color:t},children:r[3]}),e.jsx("li",{className:o.elemento,style:{background:s,color:t},children:r[4]})]})]});m.propTypes={colorTexto:a.string,colorFondo:a.string,lista:a.array};const y=m;m.__docgenInfo={description:"",methods:[],displayName:"Lista",props:{lista:{defaultValue:{value:"['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']",computed:!1},description:"",type:{name:"array"},required:!1},colorTexto:{description:"",type:{name:"string"},required:!1},colorFondo:{description:"",type:{name:"string"},required:!1}}};const I={title:"Componentes/Lista",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{colorTexto:{control:"color"}}},n={args:{colorTexto:"#000",colorFondo:"#fff",lista:["Elemento 6","Elemento 7","Elemento 8","Elemento 9","Elemento 10"]}},l={args:{colorTexto:"#fff",colorFondo:"#000",lista:["Elemento 11","Elemento 12","Elemento 13","Elemento 14","Elemento 15"]}};var c,i,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    colorTexto: "#000",
    colorFondo: "#fff",
    lista: ['Elemento 6', 'Elemento 7', 'Elemento 8', 'Elemento 9', 'Elemento 10']
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,u,E;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    colorTexto: "#fff",
    colorFondo: "#000",
    lista: ['Elemento 11', 'Elemento 12', 'Elemento 13', 'Elemento 14', 'Elemento 15']
  }
}`,...(E=(u=l.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};const _=["Light","Dark"];export{l as Dark,n as Light,_ as __namedExportsOrder,I as default};
