
          window.__NEXT_REGISTER_PAGE('/contact', function() {
            var comp = module.exports=webpackJsonp([7],{418:function(e,t,l){e.exports=l(419)},419:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(4),o=a(n),r=l(83),i=a(r),d=l(19),m=a(d),u=m.default.form.withConfig({displayName:"contact__Form",componentId:"tmx0vs-0"})(["max-width:100%;text-align:center;display:flex;flex-direction:column;div{display:flex;flex-wrap:wrap;max-width:80%;align-items:center;padding:1em;input,select,textarea{flex:1 0 220px;padding:.5em;border-radius:5px;}::placeholder{color:red;font-size:1.5em;}label{text-align:right;flex:1 0 120px;margin-right:2em;color:#fff;}@media (max-width:669px){label{text-align:left;}}}"]),c=m.default.div.withConfig({displayName:"contact__BtnRow",componentId:"tmx0vs-1"})(["display:flex;justify-content:flex-end;button{width:60%;font-family:'Lato';padding:.5em;font-size:1.15em;color:#fff;border:2px solid #fff;border-radius:5px;transition:all .3s ease-in;background:rgb(147,205,227);margin:15px;&:hover{background:#49768c;}}@media (max-width:669px){button{width:100%;}}}"]);t.default=(0,i.default)(function(){return o.default.createElement(u,{action:"https://formspree.io/hello@tgrecojs.com",method:"POST"},o.default.createElement("div",null,o.default.createElement("label",{htmlFor:"name"},"Name"),o.default.createElement("input",{type:"text",placeholder:"",name:"name"})),o.default.createElement("div",null,o.default.createElement("label",{htmlFor:"email"},"Email"),o.default.createElement("input",{type:"email",placeholder:"johndoe@gmail.com",name:"_replyto"})),o.default.createElement("div",null,o.default.createElement("label",{htmlFor:"reasonSelected"},"Subject"),o.default.createElement("select",{name:"reasonSelected"},o.default.createElement("option",{value:"Engineering Opportunity"},"JavaScript Engineering Opportunity"),o.default.createElement("option",{value:"Development Opportunity"},"Website Development and Design"),o.default.createElement("option",{value:"Graphic Design"},"Logo & Icon Design"),o.default.createElement("option",{value:"mentorship"},"JavaScript Mentorship"),o.default.createElement("option",{value:"other"},"Just saying Hello!"))),o.default.createElement("div",null,o.default.createElement("label",{htmlFor:"reason"},"More Info"),o.default.createElement("textarea",{type:"text",rows:"10",columns:"4",placeholder:"Use this text area to provide some more information regarding your inquiry.",name:"reason"})),o.default.createElement(c,null,o.default.createElement("button",{type:"submit"},"Click to Submit")))},"Contact")}},[418]);
            return { page: comp.default }
          })
        