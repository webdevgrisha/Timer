import{r as l}from"./index-CleY8y_P.js";import{g as G}from"./_commonjsHelpers-Cpj98o6Y.js";var V={exports:{}},g={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=l,z=Symbol.for("react.element"),H=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,Q=J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X={key:!0,ref:!0,__self:!0,__source:!0};function q(i,r,t){var n,c={},e=null,a=null;t!==void 0&&(e=""+t),r.key!==void 0&&(e=""+r.key),r.ref!==void 0&&(a=r.ref);for(n in r)K.call(r,n)&&!X.hasOwnProperty(n)&&(c[n]=r[n]);if(i&&i.defaultProps)for(n in r=i.defaultProps,r)c[n]===void 0&&(c[n]=r[n]);return{$$typeof:z,type:i,key:e,ref:a,props:c,_owner:Q.current}}g.Fragment=H;g.jsx=q;g.jsxs=q;V.exports=g;var o=V.exports,F={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(i){(function(){var r={}.hasOwnProperty;function t(){for(var e="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(e=c(e,n(s)))}return e}function n(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var a="";for(var s in e)r.call(e,s)&&e[s]&&(a=c(a,s));return a}function c(e,a){return a?e?e+" "+a:e+a:e}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(F);var Z=F.exports;const ee=G(Z);function b({currTime:i,endTime:r}){const t=2*Math.PI*45,n=i/r,c=t-n*t,e=ee({"timer-border":!0,finished:c===0});return o.jsxs("svg",{className:e,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[o.jsx("circle",{cx:"50",cy:"50",r:"45",className:"background",strokeWidth:"4"}),o.jsx("circle",{cx:"50",cy:"50",r:"45",className:"progress",strokeWidth:"4",strokeDasharray:t,strokeDashoffset:c})]})}try{b.displayName="TimerCircle",b.__docgenInfo={description:"TimerCircle component that visually represents the progress of a timer using an SVG circle.",displayName:"TimerCircle",props:{currTime:{defaultValue:null,description:"",name:"currTime",required:!0,type:{name:"number"}},endTime:{defaultValue:null,description:"",name:"endTime",required:!0,type:{name:"number"}}}}}catch{}function h({title:i,endTime:r,elapsedTime:t=0}){const[n,c]=l.useState(t),[e,a]=l.useState(!1),s=l.useRef(null);l.useEffect(()=>{if(r>=3600||r<0)throw new Error("endTime should be between 0 and 3599 seconds.");if(t>=3600||t<0)throw new Error("elapsedTime should be between 0 and 3599 seconds.");if(t>r)throw new Error("elapsedTime can't be greater than endTime.");if(!(Number.isInteger(t)||Number.isInteger(r)))throw new Error("The timer only works with integers");return()=>{s.current!==null&&clearInterval(s.current)}},[t,r]);const M=()=>{s.current===null&&(a(!0),s.current=setInterval(()=>{c(y=>y>=r?(s.current!==null&&clearInterval(s.current),s.current=null,a(!1),r):y+1)},1e3))},W=()=>{s.current!==null&&(a(!1),clearInterval(s.current),s.current=null)},L=()=>{s.current!==null&&(clearInterval(s.current),s.current=null),a(!1),c(0)},$=_(n),B=_(r-n),U=e||n===r,Y=n===0;return o.jsxs("div",{className:"timer",children:[o.jsxs("div",{className:"timer-container",children:[o.jsx(b,{currTime:n,endTime:r}),o.jsx("h5",{className:"title",children:i}),o.jsx("span",{className:"curr-time",children:$}),o.jsxs("span",{className:"left-time",children:[B," left"]})]}),o.jsxs("footer",{children:[o.jsx("button",{className:"action-btn",disabled:U,onClick:M,children:"Start"}),o.jsx("button",{className:"action-btn",disabled:!e,onClick:W,children:"Pause"}),o.jsx("button",{className:"action-btn",disabled:Y,onClick:L,children:"Reset"})]})]})}function _(i){const r=String(Math.floor(i/60)).padStart(2,"0"),t=String(i%60).padStart(2,"0");return`${r}:${t}`}try{h.displayName="Timer",h.__docgenInfo={description:"Timer component that allows you to create a timer based on the number of seconds you pass in",displayName:"Timer",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},endTime:{defaultValue:null,description:"",name:"endTime",required:!0,type:{name:"number"}},elapsedTime:{defaultValue:{value:"0"},description:"",name:"elapsedTime",required:!1,type:{name:"number"}}}}}catch{}const se={title:"Components/Timer",component:h},T=i=>o.jsx(h,{...i}),m=T.bind({});m.args={title:"Init Timer",endTime:0,elapsedTime:0};const u=T.bind({});u.args={title:"Default Timer",endTime:120,elapsedTime:0};const d=T.bind({});d.args={title:"My Timer with Elapsed Time",endTime:300,elapsedTime:60};const p=T.bind({});p.args={title:"Ended Timer",endTime:60,elapsedTime:60};const f=T.bind({});f.args={title:"Error Timer",endTime:3600,elapsedTime:60};var x,v,E;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:"(args: TimerArgs) => <Timer {...args} />",...(E=(v=m.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var S,N,j;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:"(args: TimerArgs) => <Timer {...args} />",...(j=(N=u.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var w,I,R;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:"(args: TimerArgs) => <Timer {...args} />",...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var k,O,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:"(args: TimerArgs) => <Timer {...args} />",...(C=(O=p.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var D,A,P;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:"(args: TimerArgs) => <Timer {...args} />",...(P=(A=f.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const ne=["InitTime","Default","WithElapsedTime","EndedTimer","ErrorTimer"];export{u as Default,p as EndedTimer,f as ErrorTimer,m as InitTime,d as WithElapsedTime,ne as __namedExportsOrder,se as default};
