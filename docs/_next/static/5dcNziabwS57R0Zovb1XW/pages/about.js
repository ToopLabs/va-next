(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8ncr":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("q1tI")),a=r(n("17x9")),l=r(n("TSYQ"));function r(e){return e&&e.__esModule?e:{default:e}}const o=({animate:e,children:t,className:n,layout:a})=>i.default.createElement("div",{className:(0,l.default)(n,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":"2-columns"===a,"vertical-timeline--one-column":"1-column"===a})},t);o.propTypes={children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]).isRequired,className:a.default.string,animate:a.default.bool,layout:a.default.oneOf(["1-column","2-columns"])},o.defaultProps={animate:!0,className:"",layout:"2-columns"};var s=o;t.default=s},IdOR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=o(n("17x9")),l=o(n("TSYQ")),r=o(n("aqT/"));function o(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}class m extends i.Component{constructor(e){super(e),this.onVisibilitySensorChange=this.onVisibilitySensorChange.bind(this),this.state={visible:!1}}onVisibilitySensorChange(e){e&&this.setState({visible:!0})}render(){const{id:e,children:t,contentArrowStyle:n,contentStyle:a,icon:o,iconStyle:s,iconOnClick:m,date:u,position:d,style:f,className:p,visibilitySensorProps:h}=this.props,{visible:g}=this.state;return i.default.createElement("div",{id:e,className:(0,l.default)(p,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===d,"vertical-timeline-element--right":"right"===d,"vertical-timeline-element--no-children":""===t}),style:f},i.default.createElement(r.default,c({},h,{onChange:this.onVisibilitySensorChange}),i.default.createElement("div",null,i.default.createElement("span",{style:s,onClick:m,className:`vertical-timeline-element-icon ${g?"bounce-in":"is-hidden"}`},o),i.default.createElement("div",{style:a,className:`vertical-timeline-element-content ${g?"bounce-in":"is-hidden"}`},i.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),t,i.default.createElement("span",{className:"vertical-timeline-element-date"},u)))))}}m.propTypes={id:a.default.string,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),className:a.default.string,contentArrowStyle:a.default.shape({}),contentStyle:a.default.shape({}),icon:a.default.element,iconStyle:a.default.shape({}),iconOnClick:a.default.func,style:a.default.shape({}),date:a.default.node,position:a.default.string,visibilitySensorProps:a.default.shape({})},m.defaultProps={id:"",children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconStyle:null,style:null,date:"",position:"",iconOnClick:null,visibilitySensorProps:{partialVisibility:!0,offset:{bottom:40}}};var u=m;t.default=u},Iu7t:function(e,t,n){"use strict";var i=n("0iUn"),a=n("sLSF"),l=n("MI3g"),r=n("a7VT"),o=n("Tit0"),s=n("q1tI"),c=n.n(s),m=(n("nf1i"),c.a.createElement),u=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return m("div",{className:"fix-form"},m("form",{id:"contact-form",action:"https://app.99inbound.com/api/e/fxLcVizo",method:"POST",target:"_blank"},m("div",{className:"form-row"},m("div",{className:"col"},m("input",{name:"name",className:"form-control n-form-s",type:"text",placeholder:"Your Name",tabIndex:"1",id:"name",required:!0})),m("div",{className:"col"},m("input",{name:"phone",className:"form-control n-form-s",type:"tel",placeholder:"Phone Number",tabIndex:"2",id:"phone",required:!0}))),m("div",{className:"form-row"},m("div",{className:"col"},m("input",{name:"email",className:"form-control n-form-s",type:"email",placeholder:"Email Address",tabIndex:"3",id:"email",required:!0}))),m("div",{className:"form-row"},m("div",{className:"col"},m("textarea",{name:"message",className:"form-control n-form-s",placeholder:"Message",tabIndex:"4",cols:"4"}))),m("div",{style:{position:"absolute",left:"-5000px"}},m("input",{type:"checkbox",name:"dancing_black_paisley_shirt",value:"1",tabindex:"-1",autocomplete:"no"})),m("div",{className:"mt-25 text-center"},m("button",{type:"submit",className:"btn btn-va-fix btn-big f-light smooth-animation d-inline-flex align-items-center"},"Enquire now ",m("i",{className:"fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight"}),m("i",{className:"w-loader-toggle far fa-circle-notch fa-spin d-none"})))))}}]),t}(s.Component);t.a=u},Juyh:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),l=n("8Kt/"),r=n.n(l),o=n("MbLX"),s=n("CafY"),c=n("7vrA"),m=n("3Z9Z"),u=n("JI6e"),d=n("UQjd"),f=(n("aw3t"),n("7FY6"),a.a.createElement),p=function(){return f(d.VerticalTimeline,null,f(d.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#5abcbd",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #5abcbd"},iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8"},f("strong",null,"June 2012")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0"},f("img",{src:"/gen-suz-bw-thumb.jpg",alt:"Suzannah and Genevieve Toop",title:"Suzannah and Genevieve Toop"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 f-light"},"Suzannah and Genevieve return to Toop&Toop.")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--work",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"November 2013")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-chart-line text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Email traffic analyzed. 80% of Property Management emails were Maintenance related.")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--work",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"December 2013")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-lightbulb text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Lightbulb moment!")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--work",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8"},f("strong",null,"December 2013")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0"},f("img",{src:"/marcus-bw-thumb.jpg",alt:"Marcus",title:"Marcus"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 f-light"},"Marcus joined the FIX project")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"January 2014")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-cog fa-spin text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"1st product in building phase")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8"},f("strong",null,"January 2014")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0"},f("img",{src:"/aaron-bw-thumb.jpg",alt:"Aaron",title:"Aaron"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 f-light"},"Aaron joined the FIX project")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"November 2014")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-rocket text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Beta launch to Toop&Toop Tenants, Trades & Landlords")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"March 2016")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-trophy-alt text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"2016 REIA Australia Innovation of the Year winner")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"August 2016")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-user-check text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Early FIX adopters")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"February 2017")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-rocket text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"FIX Official Launch")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"March 2017")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-trophy-alt text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"2017 REIA Australia Innovation of the Year winner")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"July 2017")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-building text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Virtual Agent Pty Ltd founded")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"July 2017")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("img",{src:"/jordan-bw-thumb.jpg",alt:"Jordan",title:"Jordan"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Jordan joined the team")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"July 2017")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("img",{src:"/mittali-bw-thumb.jpg",alt:"Mittali",title:"Mittali"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Mittali joined the team")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"August 2017")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("img",{src:"/keith-bw-thumb.jpg",alt:"Keith",title:"Keith"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Keith joined the team")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"March 2018")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("i",{className:"fal fa-trophy-alt text-white"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"2018 REIA Australia Innovation of the Year winner")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"March 2018")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("img",{src:"/frank-bw-thumb.jpg",alt:"Frank",title:"Frank"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Frank joined the team")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"October 2018")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("img",{src:"/jason-bw-thumb.jpg",alt:"Jason",title:"Jason"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Jason joined the team")))),f(d.VerticalTimelineElement,{className:"vertical-timeline-element--education",iconStyle:{background:"#ececec",color:"#fff"}},f("p",{className:"mt-0 mb-8 text-dgrey"},f("strong",null,"December 2018")),f("div",{className:"d-flex flex-shrink-0 timeline-outer-container align-items-center"},f("div",{className:"timeline-person-container flex-shrink-0 d-flex align-items-center justify-content-center"},f("img",{src:"/lipu-bw-thumb.jpg",alt:"Lipu",title:"Lipu"})),f("div",null,f("p",{className:"vertical-timeline-element-subtitle mt-0 text-lgrey f-light"},"Lipu joined the team")))))},h=n("Iu7t"),g=n("aIN1"),b=a.a.createElement;t.default=function(){return b(s.a,null,b(r.a,null,b("title",null,"About us, learn more about our story | Virtual Agent"),b("meta",{name:"description",content:"Come meet the team & read about our story behind Virtual Agent and our flagship product, FIX!"}),b("meta",{property:"og:url",content:"https://www.virtualagent.com.au/about"}),b("meta",{property:"og:type",content:"website"}),b("meta",{property:"og:title",content:"About us, learn more about our story | Virtual Agent"}),b("meta",{property:"og:description",content:"Come meet the team & read about our story behind Virtual Agent and our flagship product, FIX!"})),b(o.a,null),b("header",{className:"header-uni header-home position-relative h-100"},b("img",{className:"header-home-img",src:"/contact-us-header.jpg"}),b(c.a,{className:"h-100"},b(m.a,{className:"h-100"},b(u.a,null,b("div",{className:"d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative"},b("div",{className:"position-relative",style:{padding:"0 15px",zIndex:"3"}},b("h1",{className:"n-header-wrapped-title text-white"},"About Us"),b("p",{className:"n-header-wrapped-p text-white fs-25 f-light mb-0",style:{maxWidth:"460px"}},"Come meet the team and learn about our story"))))))),b(c.a,{className:"content-spacer"},b(m.a,null,b(u.a,{xs:12},b("h3",{className:"text-dgrey"},"Our Story")),b(u.a,{xs:12},b("p",{className:"text-lgrey"},"Virtual Agent was founded by sisters Suzannah and Genevieve Toop in 2017."),b("p",{className:"text-lgrey"},"The pair grew up living and breathing their family's real estate business, Toop&Toop. They worked outside of the business, both nationally and internationally, before taking up roles within the Toop&Toop family business in 2013."),b("p",{className:"text-lgrey"},"When Suzannah and Genevieve stepped back into the family business they immediately noticed their customers' needs were changing and new benchmarks were emerging. Instant communication, 24/7 access to information, customisation and personalised service is what they knew their business needed to deliver. And this wasn't possible without significant change."),b("p",{className:"text-lgrey"},"They were determined to push the boundaries, think differently, to offer an unmatched level of service to their sellers, buyers, landlords and tenants."),b("p",{className:"text-lgrey"},"Over the next four years they built a range of apps and solutions for Toop&Toop in their Innovation Lab. They saw some truly remarkable results winning back-to-back national awards for Innovation Excellence in 2015, 2016 and 2017 -  capturing the attention of the entire nation."),b("p",{className:"text-lgrey"},"In July, 2017 they assembled a team of incredible software engineers from across the globe. In July 2017 Virtual Agent was born.")))),b(c.a,null,b(m.a,null,b(u.a,null,b(p,null)))),b(c.a,{className:"content-spacer"},b(m.a,null,b(u.a,{xs:12},b("h3",{className:"text-center"},"Meet our team"))),b(m.a,null,b(u.a,{xs:12},b("div",{className:"meet-our-team-grid"},b("div",{className:"card va-card-team"},b("img",{className:"card-img",src:"../aaron-bw-thumb.jpg",alt:"Aaron"}),b("div",{className:"hoverImg"},b("img",{className:"card-img",src:"../aaron-cl-thumb.jpg",alt:"Aaron"})),b("div",{className:"card-img-overlay va-card-overlay text-left"},b("h5",{className:"card-title"},"Aaron"),b("p",{className:"card-text"},"UX / UI Designer"))),b("div",{class:"card va-card-team"},b("img",{class:"card-img",src:"../frank-bw-thumb.jpg",alt:"Frank"}),b("div",{class:"hoverImg"},b("img",{class:"card-img",src:"../frank-cl-thumb.jpg",alt:"Frank"})),b("div",{class:"card-img-overlay va-card-overlay text-left"},b("h5",{class:"card-title"},"Frank"),b("p",{class:"card-text"},"Software Engineer"))),b("div",{class:"card va-card-team"},b("img",{class:"card-img",src:"../gen-bw-thumb.jpg",alt:"Gen"}),b("div",{class:"hoverImg"},b("img",{class:"card-img",src:"../gen-cl-thumb.jpg",alt:"Gen"})),b("div",{class:"card-img-overlay va-card-overlay text-left"},b("h5",{class:"card-title"},"Gen"),b("p",{class:"card-text"},"Co-Founder"))),b("div",{class:"card va-card-team"},b("img",{class:"card-img",src:"../lipu-bw-thumb.jpg",alt:"Lipu"}),b("div",{class:"hoverImg"},b("img",{class:"card-img",src:"../lipu-cl-thumb.jpg",alt:"Lipu"})),b("div",{class:"card-img-overlay va-card-overlay text-left"},b("h5",{class:"card-title"},"Lipu"),b("p",{class:"card-text"},"Software Engineer"))),b("div",{class:"card va-card-team"},b("img",{class:"card-img",src:"../marcus-bw-thumb.jpg",alt:"Marcus"}),b("div",{class:"hoverImg"},b("img",{class:"card-img",src:"../marcus-cl-thumb.jpg",alt:"Marcus"})),b("div",{class:"card-img-overlay va-card-overlay text-left"},b("h5",{class:"card-title"},"Marcus"),b("p",{class:"card-text"},"Head of Engineering"))),b("div",{class:"card va-card-team"},b("img",{class:"card-img",src:"../mittali-bw-thumb.jpg",alt:"Mittali"}),b("div",{class:"hoverImg"},b("img",{class:"card-img",src:"../mittali-cl-thumb.jpg",alt:"Mittali"})),b("div",{class:"card-img-overlay va-card-overlay text-left"},b("h5",{class:"card-title"},"Mittali"),b("p",{class:"card-text"},"Software Engineer"))),b("div",{class:"card va-card-team"},b("img",{class:"card-img",src:"../suz-bw-thumb.jpg",alt:"Suz"}),b("div",{class:"hoverImg"},b("img",{class:"card-img",src:"../suz-cl-thumb.jpg",alt:"Suz"})),b("div",{class:"card-img-overlay va-card-overlay text-left"},b("h5",{class:"card-title"},"Suz"),b("p",{class:"card-text"},"Co-Founder"))),b("div",{class:"card va-card-team"},b("img",{class:"card-img",src:"../mia-bw-thumb.jpg",alt:"Mia"}),b("div",{class:"hoverImg"},b("img",{class:"card-img",src:"../mia-cl-thumb.jpg",alt:"Mia"})),b("div",{class:"card-img-overlay va-card-overlay text-left"},b("h5",{class:"card-title"},"Mia"),b("p",{class:"card-text"},"Office Dog"))))))),b("section",null,b(c.a,{fluid:!0,id:"enquire-for-a-demo",className:"content-spacer rm-cta-container va-enq-panel"},b(m.a,null,b(u.a,{xs:12},b("h2",{className:"text-center n-product-title text-white"},"Join our happy agencies that are onboard!")),b(u.a,{xs:12,className:"va-cov-panel text-center"},b("ul",null,b("li",null,b("img",{src:"../mcconnell-bourn-logo-white-thumb.png",alt:"McConnell Bourn Real Estate",title:"McConnell Bourn Real Estate"})),b("li",null,b("img",{src:"../leahjay-logo.png",alt:"LeahJay Real Estate",title:"LeahJay Real Estate",height:"17"})),b("li",null,b("img",{src:"../toopandtoop-logo-white-thumb.png",alt:"Toop&Toop Real Estate",title:"Toop&Toop Real Estate"})),b("li",null,b("img",{src:"../jelliscraig-logo-white-thumb.png?v=2",alt:"JellisCraig Real Estate",title:"JellisCraig Real Estate"})),b("br",null),b("li",null,b("img",{src:"../professionals-logo.png",alt:"Professionals Real Estate",title:"Professionals Real Estate",height:"17"})),b("li",null,b("img",{src:"../prudential-logo.png",alt:"Prudential Real Estate",title:"Prudential Real Estate",height:"17"})),b("li",null,b("img",{src:"../realmark-logo-white-thumb.png?v=2",alt:"Realmark Real Estate",title:"Realmark Real Estate",style:{position:"relative",top:"-2px",height:"16px"}})))),b(u.a,{xs:12},b(h.a,null))))),b(g.a,null))}},UQjd:function(e,t,n){"use strict";e.exports={VerticalTimeline:n("8ncr").default,VerticalTimelineElement:n("IdOR").default}},"aqT/":function(e,t,n){var i;i=function(e,t){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var i=e.direction,a=e.value;switch(i){case"top":return n.top+a<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+a<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-a>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-a>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var i=n(1),a=n.n(i),l=n(2),r=n.n(l),o=n(0),s=n.n(o),c=n(3),m=n.n(c);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(e){var n,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,a=f(t).call(this,e),n=!a||"object"!==u(a)&&"function"!==typeof a?p(i):a,g(p(n),"getContainer",function(){return n.props.containment||window}),g(p(n),"addEventListener",function(e,t,i,a){var l;n.debounceCheck||(n.debounceCheck={});var r=function(){l=null,n.check()},o={target:e,fn:a>-1?function(){l||(l=setTimeout(r,a||0))}:function(){clearTimeout(l),l=setTimeout(r,i||0)},getLastTimeout:function(){return l}};e.addEventListener(t,o.fn),n.debounceCheck[t]=o}),g(p(n),"startWatching",function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())}),g(p(n),"stopWatching",function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))}),g(p(n),"check",function(){var e,t,i=n.node;if(!i)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(i.getBoundingClientRect())),n.props.containment){var a=n.props.containment.getBoundingClientRect();t={top:a.top,left:a.left,bottom:a.bottom,right:a.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var l=n.props.offset||{};"object"===u(l)&&(t.top+=l.top||0,t.left+=l.left||0,t.bottom-=l.bottom||0,t.right-=l.right||0);var r={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},o=e.height>0&&e.width>0,s=o&&r.top&&r.left&&r.bottom&&r.right;if(o&&n.props.partialVisibility){var c=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"===typeof n.props.partialVisibility&&(c=r[n.props.partialVisibility]),s=n.props.minTopValue?c&&e.top<=t.bottom-n.props.minTopValue:c}"string"===typeof l.direction&&"number"===typeof l.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",l.direction,l.value),s=m()(l,e,t));var d=n.state;return n.state.isVisible!==s&&(d={isVisible:s,visibilityRect:r},n.setState(d),n.props.onChange&&n.props.onChange(s)),d}),n.state={isVisible:null,visibilityRect:{}},n}var n,i,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.a.Component),n=t,(i=[{key:"componentDidMount",value:function(){this.node=r.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=r.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):a.a.Children.only(this.props.children)}}])&&d(n.prototype,i),l&&d(n,l),t}();g(b,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:a.a.createElement("span",null)}),g(b,"propTypes",{onChange:s.a.func,active:s.a.bool,partialVisibility:s.a.oneOfType([s.a.bool,s.a.oneOf(["top","right","bottom","left"])]),delayedCall:s.a.bool,offset:s.a.oneOfType([s.a.shape({top:s.a.number,left:s.a.number,bottom:s.a.number,right:s.a.number}),s.a.shape({direction:s.a.oneOf(["top","right","bottom","left"]),value:s.a.number})]),scrollCheck:s.a.bool,scrollDelay:s.a.number,scrollThrottle:s.a.number,resizeCheck:s.a.bool,resizeDelay:s.a.number,resizeThrottle:s.a.number,intervalCheck:s.a.bool,intervalDelay:s.a.number,containment:"undefined"!==typeof window?s.a.instanceOf(window.Element):s.a.any,children:s.a.oneOfType([s.a.element,s.a.func]),minTopValue:s.a.number})},function(e,t,n){"use strict";var i=n(6);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,l,r){if(r!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=i(n("q1tI"),n("i8i4"))},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",1,0,2]]]);