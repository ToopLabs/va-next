(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"6fJO":function(e,t,a){"use strict";var n=a("0iUn"),i=a("sLSF"),l=a("MI3g"),s=a("a7VT"),r=a("Tit0"),o=a("q1tI"),c=a.n(o),m=c.a.createElement,u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return m("div",{id:"video",className:"lightbox"},m("div",{className:"lightbox-container"},m("button",{className:"lightbox-close",onClick:this.props.closePopup},m("i",{className:"fal fa-times"})),m("div",{className:"lightbox-content"},m("div",{className:"video-container"},m("iframe",{id:"youtube",width:"960",height:"540",src:"https://www.youtube.com/embed/pyd5FQFajKE?showinfo=0",frameBorder:"0",allowFullScreen:!0})))))}}]),t}(c.a.Component);t.a=u},HmGB:function(e,t,a){"use strict";var n=a("p0XB"),i=a.n(n);var l=a("d04V"),s=a.n(l),r=a("yLu3"),o=a.n(r);function c(e){return function(e){if(i()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(o()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return s()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=a("q1tI"),u=a.n(m),d=(a("YFqc"),a("7vrA")),p=a("3Z9Z"),h=a("JI6e"),f=(a("oTl4"),a("vcXL")),g=a.n(f),v=u.a.createElement;function b(e){for(var t=[],a=0;a<e.count;a++)t.push(a);return v("p",{className:"lh-normal text-dgrey"},t.map((function(e){return v("i",{key:e,className:"fas fa-star"})})))}t.a=function(e){var t=Object(m.useState)([]),a=t[0],n=t[1],i=Object(m.useState)("0"),l=i[0],s=i[1],r=Object(m.useState)("0"),o=r[0],u=r[1];return Object(m.useEffect)((function(){g()("https://api.airtable.com/v0/apppt70pO3svlPGVH/Imported%20table?api_key=keyeWGXi14Rtk0OPQ&pageSize=".concat(6,"&offset=",l)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){n([].concat(c(a),c(e.records.map((function(e){return{rating:5*e.fields.RatingPercentage,comment:e.fields.Comment,name:e.fields.Tenant,location:e.fields.State}}))))),u(e.offset)})).catch((function(e){return console.log({error:e})}))}),[l]),v("section",null,v(d.a,{fluid:!0,className:"n-product-spacer"},v(p.a,null,v(h.a,{xs:12},v("div",{className:"n-container-mw"},v("div",{className:"n-pu-grid"},a.map((function(e,t){return v("div",{key:t},v("p",{className:"lh-normal"},v("i",{className:"fas fa-quote-left"})),v(b,{count:e.rating}),v("p",{className:"lh-normal text-lgrey"},e.comment),v("p",{className:"lh-normal text-lgrey"},e.name," ",e.location),v("p",{className:"lh-normal text-lgrey"},"Tenant"))}))),v("div",{className:"review-container text-center"},v("button",{className:"btn btn-va-fix btn-big f-light smooth-animation d-inline-flex align-items-center",onClick:function(){s(o)}},"See more user stories ",v("i",{className:"fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight"}))))))))}},Iu7t:function(e,t,a){"use strict";var n=a("0iUn"),i=a("sLSF"),l=a("MI3g"),s=a("a7VT"),r=a("Tit0"),o=a("q1tI"),c=a.n(o),m=(a("nf1i"),c.a.createElement),u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return m("div",{className:"fix-form"},m("form",{id:"contact-form",action:"https://app.99inbound.com/api/e/fxLcVizo",method:"POST",target:"_blank"},m("div",{className:"form-row"},m("div",{className:"col"},m("input",{name:"name",className:"form-control n-form-s",type:"text",placeholder:"Your Name",tabIndex:"1",id:"name",required:!0})),m("div",{className:"col"},m("input",{name:"phone",className:"form-control n-form-s",type:"tel",placeholder:"Phone Number",tabIndex:"2",id:"phone",required:!0}))),m("div",{className:"form-row"},m("div",{className:"col"},m("input",{name:"email",className:"form-control n-form-s",type:"email",placeholder:"Email Address",tabIndex:"3",id:"email",required:!0}))),m("div",{className:"form-row"},m("div",{className:"col"},m("textarea",{name:"message",className:"form-control n-form-s",placeholder:"Message",tabIndex:"4",cols:"4"}))),m("div",{style:{position:"absolute",left:"-5000px"}},m("input",{type:"checkbox",name:"dancing_black_paisley_shirt",value:"1",tabindex:"-1",autocomplete:"no"})),m("div",{className:"mt-25 text-center"},m("button",{type:"submit",className:"btn btn-va-fix btn-big f-light smooth-animation d-inline-flex align-items-center"},"Enquire now ",m("i",{className:"fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight"}),m("i",{className:"w-loader-toggle far fa-circle-notch fa-spin d-none"})))))}}]),t}(o.Component);t.a=u},"XIN+":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/fix",function(){return a("jXhB")}])},"b+jL":function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),l=a("dI71"),s=a("TSYQ"),r=a.n(s),o=a("sKrG"),c=a.n(o),m=a("yCOj"),u=a.n(m),d=a("q1tI"),p=a.n(d),h=a("JCAc"),f=a("1oE0"),g=Object(f.a)("carousel-caption",{Component:"div"}),v=Object(f.a)("carousel-item"),b=a("dbZe");var x=a("q61z"),N=a("vUet"),y=function(e){return p.a.Children.toArray(e).filter(p.a.isValidElement).length},w=40,I={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:p.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:p.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},P=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=p.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<w||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===c()(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var a=t.props,n=a.wrap,i=a.activeIndex+1;if(i>y(t.props.children)-1){if(!n)return;i=0}t.select(i,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var a=t.props,n=a.wrap,i=a.activeIndex-1;if(i<0){if(!n)return;i=y(t.props.children)-1}t.select(i,e,"prev")}},t}Object(l.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var a=t.activeIndex;if(e.activeIndex!==a){var n=y(e.children)-1,i=Math.max(0,Math.min(e.activeIndex,n));return{direction:0===i&&a>=n||a<=i?"next":"prev",previousActiveIndex:a,activeIndex:i}}return null},a.componentDidUpdate=function(e,t){var a=this,n=this.props,i=n.bsPrefix,l=n.slide,s=n.onSlideEnd;if(l&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var o,c,m=this.state,d=m.activeIndex,p=m.direction;"next"===p?(o=i+"-item-next",c=i+"-item-left"):"prev"===p&&(o=i+"-item-prev",c=i+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:o},(function(){var e=a.carousel.current.children[d];Object(x.a)(e),a.safeSetState({prevClasses:r()("active",c),currentClasses:r()(o,c)},(function(){return u.a.end(e,(function(){a.safeSetState({prevClasses:"",currentClasses:"active"},a.handleSlideEnd),s&&s()}))}))}))}},a.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},a.safeSetState=function(e,t){var a=this;this.isUnmounted||this.setState(e,(function(){return!a.isUnmounted&&t()}))},a.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},a.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},a.to=function(e,t){var a=this.props.children;e<0||e>y(a)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},a.select=function(e,t,a){var n=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(n.timeout);var i=n.props,l=i.activeIndex,s=i.onSelect;e===l||n._isSliding||n.isUnmounted||s(e,a||(e<l?"prev":"next"),t)}),50)},a.renderControls=function(e){var t=this.props.bsPrefix,a=e.wrap,n=e.children,i=e.activeIndex,l=e.prevIcon,s=e.nextIcon,r=e.prevLabel,o=e.nextLabel,c=y(n);return[(a||0!==i)&&p.a.createElement(b.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},l,r&&p.a.createElement("span",{className:"sr-only"},r)),(a||i!==c-1)&&p.a.createElement(b.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},s,o&&p.a.createElement("span",{className:"sr-only"},o))]},a.renderIndicators=function(e,t){var a=this,n=this.props.bsPrefix,i=[];return function(e,t){var a=0;p.a.Children.forEach(e,(function(e){p.a.isValidElement(e)&&t(e,a++)}))}(e,(function(e,n){i.push(p.a.createElement("li",{key:n,className:n===t?"active":null,onClick:function(e){return a.to(n,e)}})," ")})),p.a.createElement("ol",{className:n+"-indicators"},i)},a.render=function(){var e=this.props,t=e.as,a=void 0===t?"div":t,l=e.bsPrefix,s=e.slide,o=e.fade,c=e.indicators,m=e.controls,u=e.wrap,h=e.touch,f=e.prevIcon,g=e.prevLabel,v=e.nextIcon,b=e.nextLabel,x=e.className,N=e.children,y=e.keyboard,w=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(i.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),I=this.state,P=I.activeIndex,S=I.previousActiveIndex,E=I.prevClasses,k=I.currentClasses;return p.a.createElement(a,Object(n.a)({onTouchStart:h?this.handleTouchStart:void 0,onTouchEnd:h?this.handleTouchEnd:void 0},w,{className:r()(x,l,s&&"slide",o&&l+"-fade"),onKeyDown:y?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),c&&this.renderIndicators(N,P),p.a.createElement("div",{className:l+"-inner",ref:this.carousel},function(e,t){var a=0;return p.a.Children.map(e,(function(e){return p.a.isValidElement(e)?t(e,a++):e}))}(N,(function(e,t){var a=t===P,n=t===S;return Object(d.cloneElement)(e,{className:r()(e.props.className,l+"-item",a&&k,n&&E)})}))),m&&this.renderControls({wrap:u,children:N,activeIndex:P,prevIcon:f,prevLabel:g,nextIcon:v,nextLabel:b}))},t}(p.a.Component);P.defaultProps=I;var S=Object(N.a)(Object(h.a)(P,{activeIndex:"onSelect"}),"carousel");S.Caption=g,S.Item=v;t.a=S},jXhB:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),i=a("sLSF"),l=a("MI3g"),s=a("a7VT"),r=a("Tit0"),o=a("q1tI"),c=a.n(o),m=a("8Kt/"),u=a.n(m),d=a("MbLX"),p=a("CafY"),h=a("7vrA"),f=a("3Z9Z"),g=a("JI6e"),v=(a("YFqc"),a("kn1t"),c.a.createElement),b=function(){return v("section",null,v(h.a,{fluid:!0,id:"learn-about-fix",className:"n-fix-product-container"},v(f.a,{className:"h-100"},v(g.a,{xs:12,className:"h-100"},v("div",{className:"n-container-mw position-relative h-100"},v("div",{className:"d-flex flex-wrap align-items-center justify-content-center h-100 n-fix-product-snippets"},v("div",{className:"d-flex flex-wrap n-fix-products-info-snippets"},v("div",{className:"w-100"},v("p",{className:"lh-normal text-dgrey n-fix-product-snippet-title"},"Staff Retention"),v("p",{className:"lh-normal text-lgrey n-fix-product-snippet-body mb-0"},"In an industry famous for high turnover, FIX reduces staff turnover and paves the way for happier and healthier teams.")),v("div",{className:"w-100"},v("p",{className:"lh-normal text-dgrey n-fix-product-snippet-title"},"Client Retention"),v("p",{className:"lh-normal text-lgrey n-fix-product-snippet-body mb-0"},"With more time back in their day, staff can deliver greater customer service resulting in increased client retention.")),v("div",{className:"w-100"},v("p",{className:"lh-normal text-dgrey n-fix-product-snippet-title"},"Reduction of emails"),v("p",{className:"lh-normal text-lgrey n-fix-product-snippet-body mb-0"},"No more overflowing inbox's, no more missing quotes and no more unknowns. FIX collects the important information and keeps maintenance on track.")),v("div",{className:"w-100"},v("p",{className:"lh-normal text-dgrey n-fix-product-snippet-title"},"Time Saved"),v("p",{className:"lh-normal text-lgrey n-fix-product-snippet-body mb-0"},"Inbuilt smarts following up trades, notifying tenants and so much more! FIX gives Property Managers back time in their day.")))),v("img",{className:"position-absolute n-fix-product-screen",src:"../fix-product-thumb.png"}))))))},x=a("HmGB"),N=a("b+jL"),y=(a("za3C"),c.a.createElement),w=function(){return y("div",{className:"n-video-container"},y(N.a,null,y(N.a.Item,null,y("a",{style:{color:"inherit"},href:"../Amber"},y("div",{className:"position-absolute n-carousel-container"},y("p",{className:"text-white n-carousel-name lh-normal"},"Amber"),y("p",{className:"text-white-50 mb-0 n-carousel-title lh-normal"},"Property Portfolio Manager | View Profile ",y("i",{className:"fal fa-long-arrow-right"}))),y("div",{className:"carousel-bg-inner"}),y("img",{src:"../u-amber.jpg",className:"d-block w-100",alt:"Amber"}))),y(N.a.Item,null,y("a",{style:{color:"inherit"},href:"../Kristen"},y("div",{className:"position-absolute n-carousel-container"},y("p",{className:"text-white n-carousel-name lh-normal"},"Kristen"),y("p",{className:"text-white-50 mb-0 n-carousel-title lh-normal"},"Property Portfolio Manager | View Profile ",y("i",{className:"fal fa-long-arrow-right"}))),y("div",{className:"carousel-bg-inner"}),y("img",{src:"../u-kristen.jpg",className:"d-block w-100",alt:"Kristen"}))),y(N.a.Item,null,y("a",{style:{color:"inherit"},href:"../Sian"},y("div",{className:"position-absolute n-carousel-container"},y("p",{className:"text-white n-carousel-name lh-normal"},"Sian"),y("p",{className:"text-white-50 mb-0 n-carousel-title lh-normal"},"Property Portfolio Manager | View Profile ",y("i",{className:"fal fa-long-arrow-right"}))),y("div",{className:"carousel-bg-inner"}),y("img",{src:"../u-sian.jpg",className:"d-block w-100",alt:"Sian"})))))},I=a("Iu7t"),P=a("6fJO"),S=(a("oNw7"),c.a.createElement),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={showPopup:!1},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){return S("div",{className:"position-relative"},S("a",{onClick:this.togglePopup.bind(this),className:"play-testimonial-link position-relative d-flex",role:"button"},S("div",{className:"play-testimonial-btn d-flex position-absolute align-self-center"},S("i",{className:"fas fa-play"})),S("img",{className:"img-fluid",src:"../testimonial-video-poster.jpg"})),this.state.showPopup?S(P.a,{closePopup:this.togglePopup.bind(this)}):null)}}]),t}(c.a.Component),k=a("aIN1"),j=c.a.createElement,O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={showPopup:!1},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){return j("div",{className:"d-inline-block"},j("button",{onClick:this.togglePopup.bind(this),className:"btn btn-va-fix btn-big f-light smooth-animation mr-3 d-inline-flex align-items-center"},j("i",{className:"fal fa-play-circle"}),"\xa0Watch Video"),this.state.showPopup?j(P.a,{closePopup:this.togglePopup.bind(this)}):null)}}]),t}(c.a.Component);t.default=function(){return j(p.a,null,j(u.a,null,j("title",null,"FIX - Real Estate Property Management Maintenance Program | Virtual Agent"),j("meta",{name:"description",content:"FIX allows tenants, landlords, property managers and trades to request, review and track maintenance items 24/7 and receive live updates from the field"}),j("meta",{property:"og:url",content:"https://www.virtualagent.com.au/products/fix"}),j("meta",{property:"og:type",content:"website"}),j("meta",{property:"og:title",content:"FIX - Real Estate Property Management Maintenance Program | Virtual Agent"}),j("meta",{property:"og:description",content:"FIX allows tenants, landlords, property managers and trades to request, review and track maintenance items 24/7 and receive live updates from the field"})),j(d.a,null),j("header",{className:"header-uni header-home position-relative h-100"},j("video",{className:"header-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,poster:"../header-hero-image.jpg"},j("source",{src:"../../Meeting-Room.mp4?v=2",type:"video/mp4"}),j("source",{src:"../../Meeting-Room.ogg?v=2",type:"video/ogg"}),j("source",{src:"../../Meeting-Room.webm?v=2",type:"video/webm"}),"Your browser does not support the video tag. We suggest you upgrade your browser."),j(h.a,{className:"h-100"},j(f.a,{className:"h-100"},j(g.a,null,j("div",{className:"d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative"},j("div",{className:"position-relative",style:{padding:"0 15px",zIndex:"3"}},j("h1",{className:"n-header-wrapped-title text-white"},"FIX"),j("p",{className:"n-header-wrapped-p text-white fs-25 f-light",style:{maxWidth:"460px"}},"A better way to handle property maintenance in rental homes."),j("div",{className:"n-header-wrapped-btn mt-5"},j(O,null),j("a",{href:"#enquire-for-a-demo",className:"btn btn-outline-white btn-big f-light d-inline-flex align-items-center smooth-animation"},"Learn more ",j("i",{className:"fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight"}))))))))),j("section",null,j(h.a,{fluid:!0,className:"content-spacer"},j(f.a,null,j(g.a,{xs:12},j("h2",{className:"text-center n-product-title text-dgrey"},"FIX"),j("p",{className:"text-center n-product-subtext text-lgrey mb-0",style:{maxWidth:"390px",margin:"0 auto",left:"0",right:"0"}},"The maintenance platform providing the worlds #1 renting experience. We make maintenance easy."),j("div",{className:"n-video-container"},j(E,null),j("div",{className:"n-video-after-container-g"},j("div",null,j("p",null,j("i",{className:"fad fa-hard-hat"})),j("h3",{className:"text-dgrey"},"Safety warnings and helpful tips"),j("p",{className:"text-lgrey"},"Self help and safety tips help to reduce risk to tenants and agencies.")),j("div",null,j("p",null,j("i",{className:"fad fa-hand-holding-seedling"})),j("h3",{className:"text-dgrey"},"All the information at once"),j("p",{className:"text-lgrey"},"Smarts to ask the right questions and to collect all the information upfront.")),j("div",null,j("p",null,j("i",{className:"fad fa-star"})),j("h3",{className:"text-dgrey"},"Star ratings"),j("p",{className:"text-lgrey"},"Feedback brings transparency and comfort.")))))))),j("section",null,j(h.a,{fluid:!0,className:"content-spacer"},j("div",{className:"row animated fadeIn"},j("div",{className:"col-12"},j("h2",{className:"text-center n-product-title text-dgrey"},"Trusted by the most forward thinking users"),j("p",{className:"text-center n-product-subtext text-lgrey mb-0",style:{maxWidth:"390px",margin:"0 auto",left:"0",right:"0"}},"Meet the property management professional's who are delivering wold class service to their clients everyday."),j(w,null))))),j(x.a,null),j(b,null),j("section",null,j("div",{className:"container-fluid n-product-spacer animatedParent animateOnce"},j("div",{className:"row animated fadeIn"},j("div",{className:"col-12"},j("h2",{className:"text-center n-product-title text-dgrey"},"We're currently integrated with these companies"),j("p",{className:"text-center n-product-subtext text-lgrey mb-0 title-subtext"},"Virtual Agent and FIX are proudly independent and look forward to discussing our solutions with you."))),j("div",{className:"row animated fadeIn"},j("div",{className:"col-12"},j("div",{className:"integration-grid-container"},j("div",{className:"integration-grid"},j("div",null,j("img",{src:"../integration-rest-professional.png",alt:"",title:"",height:"40"}),j("p",{className:"mt-3 mb-0 lineheight-normal"},"REST Professional")),j("div",null,j("img",{src:"../integration-console.png",alt:"",title:"",height:"40"}),j("p",{className:"mt-3 mb-0 lineheight-normal"},"Console")),j("div",null,j("img",{src:"../integration-propertyme.png",alt:"",title:"",height:"40"}),j("p",{className:"mt-3 mb-0 lineheight-normal"},"PropertyME")),j("div",null,j("p",{className:"mt-3 mb-0 lineheight-normal"},"RPOffice")),j("div",null,j("img",{src:"../integration-property-tree.png",alt:"",title:"",height:"40"}),j("p",{className:"mt-3 mb-0 lineheight-normal"},"PropertyTree")),j("div",null,j("img",{src:"../integration-xero.png",alt:"",title:"",height:"40"}),j("p",{className:"mt-3 mb-0 lineheight-normal"},"Xero")),j("div",null,j("img",{src:"../integration-file-smart.png",alt:"",title:"",height:"40"}),j("p",{className:"mt-3 mb-0 lineheight-normal"},"Filesmart")),j("div",null,j("img",{src:"../integration-aroflo.png",alt:"",title:"",height:"40"}),j("p",{className:"mt-3 mb-0 lineheight-normal"},"Aroflo")),j("div",null,j("img",{src:"../integration-palace-logo.jpg",alt:"",title:"",height:"40"}),j("p",{className:"mt-3 mb-0 lineheight-normal"},"Palace")))))))),j("section",null,j(h.a,{fluid:!0,id:"enquire-for-a-demo",className:"content-spacer rm-cta-container va-enq-panel"},j(f.a,null,j(g.a,{xs:12},j("h2",{className:"text-center n-product-title text-white"},"Join our happy agencies that are onboard!")),j(g.a,{xs:12,className:"va-cov-panel text-center"},j("ul",null,j("li",null,j("img",{src:"../mcconnell-bourn-logo-white-thumb.png",alt:"McConnell Bourn Real Estate",title:"McConnell Bourn Real Estate"})),j("li",null,j("img",{src:"../leahjay-logo.png",alt:"LeahJay Real Estate",title:"LeahJay Real Estate",height:"17"})),j("li",null,j("img",{src:"../toopandtoop-logo-white-thumb.png",alt:"Toop&Toop Real Estate",title:"Toop&Toop Real Estate"})),j("li",null,j("img",{src:"../jelliscraig-logo-white-thumb.png?v=2",alt:"JellisCraig Real Estate",title:"JellisCraig Real Estate"})),j("br",null),j("li",null,j("img",{src:"../professionals-logo.png",alt:"Professionals Real Estate",title:"Professionals Real Estate",height:"17"})),j("li",null,j("img",{src:"../prudential-logo.png",alt:"Prudential Real Estate",title:"Prudential Real Estate",height:"17"})),j("li",null,j("img",{src:"../realmark-logo-white-thumb.png?v=2",alt:"Realmark Real Estate",title:"Realmark Real Estate",style:{position:"relative",top:"-2px",height:"16px"}})))),j(g.a,{xs:12},j(I.a,null))))),j(k.a,null))}},vcXL:function(e,t,a){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports},yCOj:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var i=n(a("AEfA"));t.end=i.default;var l=n(a("xU8c"));t.properties=l.default;var s={end:i.default,properties:l.default};t.default=s}},[["XIN+",1,2,0,4,3,5]]]);