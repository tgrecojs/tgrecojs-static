
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([4],{159:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=a(i),r=n(63),l=a(r),u=n(16),c=a(u);n(160);var s=c.default.a.withConfig({displayName:"Card__Anchor",componentId:"s5yzqv-0"})(["color:#fff;font-family:'Lato';"]),f=c.default.div.withConfig({displayName:"Card__PostCard",componentId:"s5yzqv-1"})(["background:rgb(86,156,183);padding:1em;color:#fff;font-family:'Lato';border:1px solid white;border-radius:10px;margin:1.5em;text-align:center;line-height:1.5;display:flex;flex-direction:column;align-items:center;p{width:80%;text-align:left;}@media (max-width:600px){p{display:none;}}}"]),d=c.default.button.withConfig({displayName:"Card__Btn",componentId:"s5yzqv-2"})(["height:50px;width:50%;font-size:1.15em;border:2px solid #fff;border-radius:5px;transition:all .3s ease-in;background:rgb(147,205,227);margin:15px;&:hover{background:#49768c;}"]);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=e.description,a=e.slug,i=e.tags;return o.default.createElement(f,null,o.default.createElement("h3",{itemProp:"headline",className:"post--title"},t),o.default.createElement("p",null,n),o.default.createElement(l.default,{prefetch:!0,href:"/post?post="+a,as:"/post/"+a},o.default.createElement(d,null," ",o.default.createElement(s,null,"Read Post"))),o.default.createElement("footer",null,o.default.createElement("small",{className:"post--tags"},o.default.createElement("span",null,"Filed under: "),i.map(function(e,t){return o.default.createElement("span",{key:e,itemProp:"keywords",className:"post--tag"},o.default.createElement(l.default,{prefetch:!0,href:"/tag?tag="+e,as:"/tag/"+e.replace(/\s+/g,"-").toLowerCase()},o.default.createElement("a",null,e)),t!==i.length-1?", ":"")}))))}},237:function(e,t){function n(e){return e.replace(/^\s+|\s+$/g,"")}e.exports=n},238:function(e,t){function n(e){console.warn("[react-ga]",e)}e.exports=n},487:function(e,t,n){e.exports=n(488)},488:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(90),o=a(i),r=n(2),l=a(r),u=n(62),c=a(u),s=n(158),f=a(s),d=n(159),g=a(d),p=n(489),v=a(p);t.default=(0,v.default)((0,c.default)(function(){return l.default.createElement("div",null,f.default.map(function(e){return l.default.createElement(g.default,(0,o.default)({key:e.slug},e))}))},"Home"))},489:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(21),o=a(i),r=n(10),l=a(r),u=n(11),c=a(u),s=n(22),f=a(s),d=n(23),g=a(d),p=n(2),v=a(p),m=n(490),b=function(e){return function(t){function n(){return(0,l.default)(this,n),(0,f.default)(this,(n.__proto__||(0,o.default)(n)).apply(this,arguments))}return(0,g.default)(n,t),(0,c.default)(n,[{key:"componentDidMount",value:function(){window.GA_INITIALIZED||((0,m.initGA)(),window.GA_INITIALIZED=!0),(0,m.logPageView)()}},{key:"render",value:function(){return v.default.createElement(e,this.props)}}]),n}(p.Component)};t.default=b},490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logException=t.logEvent=t.logPageView=t.initGA=void 0;var a=n(491),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.initGA=function(){console.log("GA init"),i.default.initialize("UA-105994309-1")},t.logPageView=function(){console.log("Logging pageview for "+window.location.pathname),i.default.set({page:window.location.pathname}),i.default.pageview(window.location.pathname)},t.logEvent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e&&t&&i.default.event({category:e,action:t})},t.logException=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&i.default.exception({description:e,fatal:t})}},491:function(e,t,n){var a=n(492),i=n(495),o=n(237),r=n(238),l=n(496),u=!1,c=!0,s=function(e){return a(e,c)},f={initialize:function(e,t){if(!e)return void r("gaTrackingID is required in initialize()");t&&(t.debug&&!0===t.debug&&(u=!0),!1===t.titleCase&&(c=!1)),function(e,t,n,a,i,o,r){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,o=t.createElement(n),r=t.getElementsByTagName(n)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(o,r)}(window,document,"script",0,"ga"),t&&t.gaOptions?ga("create",e,t.gaOptions):ga("create",e,"auto")},ga:function(){return arguments.length>0?(ga.apply(this,arguments),void(u&&(l("called ga('arguments');"),l("with arguments: "+JSON.stringify([].slice.apply(arguments)))))):ga},set:function(e){if("function"==typeof ga){if(!e)return void r("`fieldsObject` is required in .set()");if("object"!=typeof e)return void r("Expected `fieldsObject` arg to be an Object");0===Object.keys(e).length&&r("empty `fieldsObject` given to .set()"),ga("set",e),u&&(l("called ga('set', fieldsObject);"),l("with fieldsObject: "+JSON.stringify(e)))}},send:function(e){"function"==typeof ga&&(ga("send",e),u&&(l("called ga('send', fieldObject);"),l("with fieldObject: "+JSON.stringify(e))))},pageview:function(e){return e?""===(e=o(e))?void r("path cannot be an empty string in .pageview()"):void("function"==typeof ga&&(ga("send","pageview",e),u&&(l("called ga('send', 'pageview', path);"),l("with path: "+e)))):void r("path is required in .pageview()")},modalview:function(e){if(!e)return void r("modalName is required in .modalview(modalName)");if(e=o(e),""===(e=i(e)))return void r("modalName cannot be an empty string or a single / in .modalview()");if("function"==typeof ga){e=o(e);var t="/modal/"+e;ga("send","pageview",t),u&&(l("called ga('send', 'pageview', path);"),l("with path: "+t))}},timing:function(e){if("function"==typeof ga){if(!(e&&e.category&&e.variable&&e.value&&"number"==typeof e.value))return void r("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");var t={hitType:"timing",timingCategory:s(e.category),timingVar:s(e.variable),timingValue:e.value};e.label&&(t.timingLabel=s(e.label)),this.send(t)}},event:function(e){if("function"==typeof ga){if(!e||!e.category||!e.action)return void r("args.category AND args.action are required in event()");var t={hitType:"event",eventCategory:s(e.category),eventAction:s(e.action)};e.label&&(t.eventLabel=s(e.label)),e.hasOwnProperty("value")&&("number"!=typeof e.value?r("Expected `args.value` arg to be a Number."):t.eventValue=e.value),e.nonInteraction&&("boolean"!=typeof e.nonInteraction?r("`args.nonInteraction` must be a boolean."):t.nonInteraction=e.nonInteraction),e.transport&&("string"!=typeof e.transport?r("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(e.transport)&&r("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),t.transport=e.transport)),this.send(t)}},exception:function(e){if("function"==typeof ga){var t={hitType:"exception"};e.description&&(t.exDescription=s(e.description)),void 0!==e.fatal&&("boolean"!=typeof e.fatal?r("`args.fatal` must be a boolean."):t.exFatal=e.fatal),this.send(t)}},plugin:{require:function(e,t){if("function"==typeof ga)return e?(e=o(e),""===e?void r("`name` cannot be an empty string in .require()"):t?"object"!=typeof t?void r("Expected `options` arg to be an Object"):(0===Object.keys(t).length&&r("Empty `options` given to .require()"),ga("require",e,t),void(u&&l("called ga('require', '"+e+"', "+JSON.stringify(t)+");"))):(ga("require",e),void(u&&l("called ga('require', '"+e+"');")))):void r("`name` is required in .require()")},execute:function(){var e,t,n=Array.prototype.slice.call(arguments),a=n[0],i=n[1];if(3===n.length?e=n[2]:(t=n[2],e=n[3]),"function"==typeof ga)if("string"!=typeof a)r("Expected `pluginName` arg to be a String.");else if("string"!=typeof i)r("Expected `action` arg to be a String.");else{var o=a+":"+i;e=e||null,t&&e?(ga(o,t,e),u&&(l("called ga('"+o+"');"),l('actionType: "'+t+'" with payload: '+JSON.stringify(e)))):e?(ga(o,e),u&&(l("called ga('"+o+"');"),l("with payload: "+JSON.stringify(e)))):(ga(o),u&&l("called ga('"+o+"');"))}}},outboundLink:function(e,t){if("function"!=typeof t)return void r("hitCallback function is required");if("function"==typeof ga){if(!e||!e.label)return void r("args.label is required in outboundLink()");var n={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:s(e.label)},a=!1,i=function(){a=!0,t()},o=setTimeout(i,250),l=function(){clearTimeout(o),a||t()};n.hitCallback=l,this.send(n)}else setTimeout(t,0)}},d=n(497);d.origTrackLink=d.trackLink,d.trackLink=f.outboundLink.bind(f),f.OutboundLink=d,e.exports=f},492:function(e,t,n){function a(e,t){return i(e)?(r("This arg looks like an email address, redacting."),l):t?o(e):e}var i=n(493),o=n(494),r=n(238),l="REDACTED (Potential Email Address)";e.exports=a},493:function(e,t){function n(e){return/[^@]+@[^@]+/.test(e)}e.exports=n},494:function(e,t,n){function a(e){var t=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;return e=i(e),e.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,n,a){return n>0&&n+e.length!==a.length&&e.search(t)>-1&&":"!==a.charAt(n-2)&&("-"!==a.charAt(n+e.length)||"-"===a.charAt(n-1))&&a.charAt(n-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})}var i=n(237);e.exports=a},495:function(e,t){function n(e){return"/"===e.substring(0,1)&&(e=e.substring(1)),e}e.exports=n},496:function(e,t){function n(e){console.info("[react-ga]",e)}e.exports=n},497:function(e,t,n){var a=n(2),i=n(498),o=n(30),r=n(6),l=i({displayName:"OutboundLink",propTypes:{eventLabel:o.string.isRequired},statics:{trackLink:function(){console.warn("ga tracking not enabled")}},handleClick:function(e){e.preventDefault();var t=this.props,n={label:t.eventLabel};l.trackLink(n,function(){"_blank"===t.target?window.open(t.to,"_blank"):window.location.href=t.to}),t.onClick&&t.onClick(e)},render:function(){var e=r({},this.props,{href:this.props.to,onClick:this.handleClick});return delete e.eventLabel,a.createElement("a",e)}});e.exports=l},498:function(e,t,n){"use strict";var a=n(2),i=n(188);if(void 0===a)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var o=(new a.Component).updater;e.exports=i(a.Component,a.isValidElement,o)}},[487]);
            return { page: comp.default }
          })
        