(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"BYl/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/the-short-straw",function(){return a("dTFE")}])},"b+jL":function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),o=a("dI71"),s=a("TSYQ"),r=a.n(s),l=a("sKrG"),c=a.n(l),h=a("yCOj"),d=a.n(h),u=a("q1tI"),p=a.n(u),m=a("JCAc"),f=a("1oE0"),v=Object(f.a)("carousel-caption",{Component:"div"}),g=Object(f.a)("carousel-item"),w=a("dbZe");var b=a("q61z"),y=a("vUet"),x=function(e){return p.a.Children.toArray(e).filter(p.a.isValidElement).length},N=40,I={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:p.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:p.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=p.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<N||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===c()(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var a=t.props,n=a.wrap,i=a.activeIndex+1;if(i>x(t.props.children)-1){if(!n)return;i=0}t.select(i,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var a=t.props,n=a.wrap,i=a.activeIndex-1;if(i<0){if(!n)return;i=x(t.props.children)-1}t.select(i,e,"prev")}},t}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var a=t.activeIndex;if(e.activeIndex!==a){var n=x(e.children)-1,i=Math.max(0,Math.min(e.activeIndex,n));return{direction:0===i&&a>=n||a<=i?"next":"prev",previousActiveIndex:a,activeIndex:i}}return null},a.componentDidUpdate=function(e,t){var a=this,n=this.props,i=n.bsPrefix,o=n.slide,s=n.onSlideEnd;if(o&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var l,c,h=this.state,u=h.activeIndex,p=h.direction;"next"===p?(l=i+"-item-next",c=i+"-item-left"):"prev"===p&&(l=i+"-item-prev",c=i+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:l},(function(){var e=a.carousel.current.children[u];Object(b.a)(e),a.safeSetState({prevClasses:r()("active",c),currentClasses:r()(l,c)},(function(){return d.a.end(e,(function(){a.safeSetState({prevClasses:"",currentClasses:"active"},a.handleSlideEnd),s&&s()}))}))}))}},a.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},a.safeSetState=function(e,t){var a=this;this.isUnmounted||this.setState(e,(function(){return!a.isUnmounted&&t()}))},a.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},a.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},a.to=function(e,t){var a=this.props.children;e<0||e>x(a)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},a.select=function(e,t,a){var n=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(n.timeout);var i=n.props,o=i.activeIndex,s=i.onSelect;e===o||n._isSliding||n.isUnmounted||s(e,a||(e<o?"prev":"next"),t)}),50)},a.renderControls=function(e){var t=this.props.bsPrefix,a=e.wrap,n=e.children,i=e.activeIndex,o=e.prevIcon,s=e.nextIcon,r=e.prevLabel,l=e.nextLabel,c=x(n);return[(a||0!==i)&&p.a.createElement(w.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},o,r&&p.a.createElement("span",{className:"sr-only"},r)),(a||i!==c-1)&&p.a.createElement(w.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},s,l&&p.a.createElement("span",{className:"sr-only"},l))]},a.renderIndicators=function(e,t){var a=this,n=this.props.bsPrefix,i=[];return function(e,t){var a=0;p.a.Children.forEach(e,(function(e){p.a.isValidElement(e)&&t(e,a++)}))}(e,(function(e,n){i.push(p.a.createElement("li",{key:n,className:n===t?"active":null,onClick:function(e){return a.to(n,e)}})," ")})),p.a.createElement("ol",{className:n+"-indicators"},i)},a.render=function(){var e=this.props,t=e.as,a=void 0===t?"div":t,o=e.bsPrefix,s=e.slide,l=e.fade,c=e.indicators,h=e.controls,d=e.wrap,m=e.touch,f=e.prevIcon,v=e.prevLabel,g=e.nextIcon,w=e.nextLabel,b=e.className,y=e.children,x=e.keyboard,N=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(i.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),I=this.state,k=I.activeIndex,S=I.previousActiveIndex,T=I.prevClasses,E=I.currentClasses;return p.a.createElement(a,Object(n.a)({onTouchStart:m?this.handleTouchStart:void 0,onTouchEnd:m?this.handleTouchEnd:void 0},N,{className:r()(b,o,s&&"slide",l&&o+"-fade"),onKeyDown:x?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),c&&this.renderIndicators(y,k),p.a.createElement("div",{className:o+"-inner",ref:this.carousel},function(e,t){var a=0;return p.a.Children.map(e,(function(e){return p.a.isValidElement(e)?t(e,a++):e}))}(y,(function(e,t){var a=t===k,n=t===S;return Object(u.cloneElement)(e,{className:r()(e.props.className,o+"-item",a&&E,n&&T)})}))),h&&this.renderControls({wrap:d,children:y,activeIndex:k,prevIcon:f,prevLabel:v,nextIcon:g,nextLabel:w}))},t}(p.a.Component);k.defaultProps=I;var S=Object(y.a)(Object(m.a)(k,{activeIndex:"onSelect"}),"carousel");S.Caption=v,S.Item=g;t.a=S},dTFE:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("8Kt/"),s=a.n(o),r=a("MbLX"),l=a("CafY"),c=a("7vrA"),h=a("3Z9Z"),d=a("JI6e"),u=a("b+jL"),p=a("aIN1"),m=i.a.createElement;t.default=function(){return m(l.a,null,m(s.a,null,m("title",null,"The Short Straw - Virtual Agent Blog"),m("meta",{name:"description",content:"Thinking about real estate differently!"}),m("meta",{property:"og:url",content:"https://www.virtualagent.com.au/blog/the-new-world-part-one"}),m("meta",{property:"og:type",content:"article"}),m("meta",{property:"og:title",content:"The Short Straw?"}),m("meta",{property:"og:description",content:"Thinking about real estate differently!"}),m("meta",{property:"og:image",content:"https://www.virtualagent.com.au/Images/the-new-world-banner-fb-bg.jpg"})),m(r.a,null),m("header",{className:"header-uni header-home position-relative h-100"},m("img",{className:"header-home-img",src:"../blog-header.jpg"}),m(c.a,{className:"h-100"},m(h.a,{className:"h-100"},m(d.a,null,m("div",{className:"d-flex h-100 n-header-wrapped-container align-items-center justify-content-center flex-column position-relative text-center"},m("div",{className:"position-relative",style:{padding:"0 15px",zIndex:"3"}},m("p",{className:"text-white"},"News"),m("h1",{className:"n-header-wrapped-title text-white"},"The Short Straw?"),m("p",{className:"n-header-wrapped-p text-white",style:{maxWidth:"460px"}},"Thinking about real estate differently!")),m("div",{className:"header-subcontent d-flex align-items-center flex-column z-index-1 position-absolute"},m("div",null,m("img",{className:"rounded-circle",src:"../suz-bw-thumb.jpg",alt:"Photo of Suzannah Toop",title:"Photo of Suzannah Toop",width:"48"}),m("p",{className:"mt-3 text-white"},m("i",null,"by ",m("strong",null,"Suzannah Toop"))),m("p",{className:" text-white"},m("i",null,"on July 18, 2018"))))))))),m("article",null,m(c.a,{fluid:!0},m("div",{className:"col-12 offset-xl-2 col-xl-8"},m("div",{className:"blog-content-container mt-5"},m("p",{className:"lead-text dgrey-text mt-4 mb-0 text-center"},"Hey fellow real estate principals,"))),m("div",{className:"col-12 offset-xl-2 col-xl-8"},m("div",{className:"blog-content-container"},m("p",{className:"mb-5"},"After months of thinking about writing a blog, today I put pen to paper (so to speak). After attending a huge number of conferences in the last year on disruption and the future of real estate, there is a whole lot of doom and gloom out there in the industry. Essentially that the real estate world may be ending. (The world is changing, yes, but ending? We don't think so.)"),m("p",{className:"mb-5"},"What I found most interesting about these conferences, other than the idea that real estate agencies are the new cab companies and UBER is on its way (but we'll get to that), is that none of the speakers I listened to, gave any sight or suggestions as to what to do. What steps to take. The ultimate cliff hanger and many were left feeling... OK so now what?"),m("p",{className:"mb-5"},"This is where this blog comes in - sharing some thoughts and insights into where we are heading at Toop&Toop. We certainly don't have all of the answers (maybe we have none of them) but one thing I do know is we are calm. Calm about change, and I'd even go so far as to say we are excited."),m("p",{className:"mb-5"},"And if we can connect like-minded principals and leaders together, it might spark a conversation or idea. And we might just out-smart this thing."),m("p",{className:"mb-5"},"And what better time to stop procrastinating and actually post this, than the week our start-up real estate tech company (and sister company to Toop&Toop) Virtual Agent turns 1! For those that know Toop&Toop, in our 33 years we have lead the way with innovation. From the first back lit signboard in 1992 (with an extension cord running from the house) to being the first in the Advertiser with colour - thinking differently is in our DNA and Virtual Agent is the next generation of this."),m("div",{className:"mb-5"},m(u.a,null,m(u.a.Item,null,m("img",{className:"d-block w-100",src:"../the-short-straw-blog-2.jpg",alt:"Birthday celebrations"}),m(u.a.Caption,null,m("p",null,"More first Birthday celebrations!"))),m(u.a.Item,null,m("img",{className:"d-block w-100",src:"../the-short-straw-blog-1.jpg",alt:"Working away!"}),m(u.a.Caption,null,m("p",null,"Keith & Mittali working away!"))),m(u.a.Item,null,m("img",{className:"d-block w-100",src:"../the-short-straw-blog-4.jpg",alt:"Our office dog, Mia!"}),m(u.a.Caption,null,m("p",null,"Our family dog, Mia gets extra points for supporting a party-hat for just enough time for Leanne (our in house photographer) to get a snap!"))))),m("p",{className:"mb-5"},"Putting the Birthday celebrations to one side.. let's dive right in."),m("p",{className:"mb-5"},"I want to start with the biggie first. Disruption. Change. The Future. Whatever you'd like to call it. I'm hearing that there are a lot of people feeling anxious about the change and where it is all going."),m("p",{className:"mb-5"},"Our thoughts? Change isn't coming, it's already here. And we are taking action now. Because we know it can't wait. We can feel the change - fees are being squeezed, consumers are more savvy and we are being forced to do more for less."),m("p",{className:"mb-5"},"So we have worked out a plan of attack. A 2020 Plan. And we are simply actioning it. "),m("p",{className:"mb-5"},"I'm big on analogies (mainly because this is my main way of communicating with our team of software engineers!) so here's one that helps me make sense of what we believe we need to do."),m("p",{className:"mb-5"},"Home Reno vs New Build."),m("p",{className:"mb-5"},"Rather than approaching this industry change like a mini home renovation (like putting in new blinds, carpet or tapware), we are taking the opportunity to start over, to rebuild from scratch. We've taken the time to stand on the vacant block (where the house once was), with the foreman, to discuss the footings, drainage, aspect of the home etc. It's a clean slate."),m("p",{className:"mb-5"},"There's a lot of work to do (much more than a renovation) and we know at the end of it we will have a vastly different looking home than the original."),m("p",{className:"mb-5"},"So where did we start first?"),m("p",{className:"mb-5"},"Property management. And more specifically, maintenance in property management. 5 years of our research (and the memories burnt into my mind circa 2012 at T&T) has shown that maintenance is the biggest source of conflict, angst, complaints, stress.. and most importantly (with my lawyer hat on)... risk. We found that 80% of phone calls and emails to property management is maintenance related. It makes sense that it is also the biggest source of staff-turnover. "),m("p",{className:"mb-5"},"So for us, we had to start there."),m("p",{className:"mb-5"},"We're well into our rebuild phase. And it will be done piece by piece, brick by brick."))))),m(p.a,null))}},yCOj:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var i=n(a("AEfA"));t.end=i.default;var o=n(a("xU8c"));t.properties=o.default;var s={end:i.default,properties:o.default};t.default=s}},[["BYl/",1,2,0,4,3]]]);