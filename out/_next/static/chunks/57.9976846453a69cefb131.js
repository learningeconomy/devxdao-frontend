(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{Sb8p:function(e,t,c){"use strict";c.r(t);var n=c("nKUr"),i=c("1OyB"),s=c("vuIU"),a=c("JX7q"),r=c("Ji7U"),l=c("md7G"),o=c("foSv"),d=c("rePB"),u=c("q1tI"),h=c("/MKj"),j=c("Ty5D"),b=c("s/m+"),f=c("KQm4"),m=c("wd/R"),p=c.n(m),v=c("e+cM"),O=c("IwCS"),g=c("LADp");c("9n2s");function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,n=Object(o.a)(e);if(t){var i=Object(o.a)(this).constructor;c=Reflect.construct(n,arguments,i)}else c=n.apply(this,arguments);return Object(l.a)(this,c)}}var _=function(e){Object(r.a)(c,e);var t=x(c);function c(e){var n;return Object(i.a)(this,c),n=t.call(this,e),Object(d.a)(Object(a.a)(n),"trackScroll",(function(){n.$elem&&n.$elem.scrollTop+n.$elem.clientHeight>=n.$elem.scrollHeight&&n.runNextPage()})),n.state={loading:!1,data:[],sort_key:"id",sort_direction:"desc",search:"",page_id:1,calling:!1,finished:!1,total_members:0},n.$elem=null,n.timer=null,n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e=this.props.authUser;e&&e.id&&this.startTracking(),this.getData()}},{key:"componentWillUnmount",value:function(){this.$elem&&this.$elem.removeEventListener("scroll",this.trackScroll)}},{key:"componentDidUpdate",value:function(e){var t=this.props.authUser;e.authUser&&e.authUser.id||!t||!t.id||this.startTracking()}},{key:"renderTriangle",value:function(e){var t=this.state,c=t.sort_key,i=t.sort_direction;return c!=e?Object(n.jsx)("span",{className:"inactive",children:"\u25b2"}):"asc"==i?Object(n.jsx)("span",{children:"\u25b2"}):Object(n.jsx)("span",{children:"\u25bc"})}},{key:"startTracking",value:function(){this.$elem=document.getElementById("milestone-in-review-scroll-track"),this.$elem&&this.$elem.addEventListener("scroll",this.trackScroll)}},{key:"runNextPage",value:function(){var e=this,t=this.state,c=t.calling,n=t.loading,i=t.finished,s=t.page_id;c||n||i||this.setState({page_id:s+1},(function(){e.getData(!1)}))}},{key:"getData",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],c=this.state,n=c.calling,i=c.loading,s=c.finished,a=c.sort_key,r=c.sort_direction,l=c.search,o=c.page_id,d=c.data;if(!(i||n||s)){var u={sort_key:a,sort_direction:r,search:l,page_id:o,limit:20};this.props.dispatch(Object(g.bc)(u,(function(){t?e.setState({loading:!0,calling:!0}):e.setState({loading:!1,calling:!0})}),(function(t){var c=t.users||[],n=t.finished||!1;e.setState({total_members:null===t||void 0===t?void 0:t.total_members,loading:!1,calling:!1,finished:n,data:[].concat(Object(f.a)(d),Object(f.a)(c))})})))}}},{key:"reloadTable",value:function(){var e=this;this.setState({page_id:1,data:[],finished:!1},(function(){e.getData()}))}},{key:"clickHeader",value:function(e){var t=this,c=this.state,n=c.sort_key,i=c.sort_direction;n==e?i="asc"==i?"desc":"asc":(n=e,i="desc"),this.setState({sort_key:n,sort_direction:i},(function(){t.reloadTable()}))}},{key:"renderResult",value:function(){var e=this.state.data,t=[];return e&&e.length?(e.forEach((function(e){var c,i,s,a,r,l,o,d;t.push(Object(n.jsx)("li",{children:Object(n.jsxs)("div",{className:"infinite-row align-items-center d-flex py-3 font-size-14 font-weight-700",children:[Object(n.jsx)("div",{className:"c-col-1 c-cols",children:Object(n.jsxs)("p",{children:[e.first_name," ",e.last_name]})}),Object(n.jsx)("div",{className:"c-col-2 c-cols",children:Object(n.jsx)("p",{children:e.email})}),Object(n.jsx)("div",{className:"c-col-3 c-cols",children:Object(n.jsxs)("p",{children:[null===(c=e.total_vote_percent)||void 0===c||null===(i=c.toFixed)||void 0===i?void 0:i.call(c,2),"%"]})}),Object(n.jsx)("div",{className:"c-col-4 c-cols",children:Object(n.jsxs)("p",{children:[null===(s=e.last_month_vote_percent)||void 0===s||null===(a=s.toFixed)||void 0===a?void 0:a.call(s,2),"%"]})}),Object(n.jsx)("div",{className:"c-col-5 c-cols",children:Object(n.jsxs)("p",{children:[null===(r=e.this_month_vote_percent)||void 0===r||null===(l=r.toFixed)||void 0===l?void 0:l.call(r,2),"%"]})}),Object(n.jsx)("div",{className:"c-col-6 c-cols",children:Object(n.jsx)("p",{children:null===(o=e.total_rep)||void 0===o||null===(d=o.toFixed)||void 0===d?void 0:d.call(o,O.d)})}),Object(n.jsx)("div",{className:"c-col-7 c-cols",children:Object(n.jsx)("p",{children:p()(e.member_at).local().format("M/D/YYYY")})})]})},"mile_".concat(e.id)))})),Object(n.jsx)("ul",{children:t})):Object(n.jsx)("div",{id:"infinite-no-result",children:Object(n.jsx)("label",{className:"font-size-14",children:"No Results Found"})})}},{key:"render",value:function(){var e=this,t=this.state,c=t.loading,i=t.total_members;return Object(n.jsxs)("div",{className:"va-table infinite-content",children:[Object(n.jsxs)("p",{className:"pl-3 pb-3",children:["Total voting associates: ",i]}),Object(n.jsxs)("div",{className:"infinite-contentInner",children:[Object(n.jsx)("div",{className:"infinite-header",children:Object(n.jsxs)("div",{className:"infinite-headerInner",children:[Object(n.jsxs)("div",{className:"c-col-1 c-cols",onClick:function(){return e.clickHeader("first_name")},children:[Object(n.jsx)("label",{className:"font-size-14",children:"Name"}),this.renderTriangle("first_name")]}),Object(n.jsxs)("div",{className:"c-col-2 c-cols",onClick:function(){return e.clickHeader("email")},children:[Object(n.jsx)("label",{className:"font-size-14",children:"Email"}),this.renderTriangle("email")]}),Object(n.jsxs)("div",{className:"c-col-3 c-cols",onClick:function(){return e.clickHeader("total_vote_percent")},children:[Object(n.jsx)("label",{className:"font-size-14",children:"V% total"}),this.renderTriangle("total_vote_percent")]}),Object(n.jsxs)("div",{className:"c-col-4 c-cols",onClick:function(){return e.clickHeader("last_month_vote_percent")},children:[Object(n.jsx)("label",{className:"font-size-14",children:"V% last month"}),this.renderTriangle("last_month_vote_percent")]}),Object(n.jsxs)("div",{className:"c-col-5 c-cols",onClick:function(){return e.clickHeader("this_month_vote_percent")},children:[Object(n.jsx)("label",{className:"font-size-14",children:"V% this month"}),this.renderTriangle("this_month_vote_percent")]}),Object(n.jsxs)("div",{className:"c-col-6 c-cols",onClick:function(){return e.clickHeader("total_rep")},children:[Object(n.jsx)("label",{className:"font-size-14",children:"Total Rep"}),this.renderTriangle("total_rep")]}),Object(n.jsxs)("div",{className:"c-col-7 c-cols",onClick:function(){return e.clickHeader("member_at")},children:[Object(n.jsx)("label",{className:"font-size-14",children:"Date became VA"}),this.renderTriangle("member_at")]})]})}),Object(n.jsx)("div",{className:"infinite-body",id:"milestone-in-review-scroll-track",children:c?Object(n.jsx)(v.j,{}):this.renderResult()})]})]})}}]),c}(u.Component),y=Object(h.b)((function(e){return{authUser:e.global.authUser}}))(_),k=c("ZpDd");c("WIYV");function N(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function w(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?N(Object(c),!0).forEach((function(t){Object(d.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):N(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,n=Object(o.a)(e);if(t){var i=Object(o.a)(this).constructor;c=Reflect.construct(n,arguments,i)}else c=n.apply(this,arguments);return Object(l.a)(this,c)}}var S=function(e){Object(r.a)(c,e);var t=D(c);function c(e){var n;return Object(i.a)(this,c),n=t.call(this,e),Object(d.a)(Object(a.a)(n),"downloadCSV",(function(){n.props.dispatch(Object(g.O)(n.state.params,(function(){n.props.dispatch(Object(k.Ab)())}),(function(e){var t=window.URL.createObjectURL(new Blob([e])),c=document.createElement("a");c.href=t,c.setAttribute("download","milestones.csv"),document.body.appendChild(c),c.click(),n.props.dispatch(Object(k.T)())})))})),Object(d.a)(Object(a.a)(n),"handleParams",(function(e,t){var c=n.state.params;if("notSubmitted"===e)t?c[e]=1:delete c[e];else if(["hidePaid","hideCompletedGrants"].includes(e))t?c[e]=1:delete c[e];else if(["startDate","endDate"].includes(e))if(t){var i=p()(t).local().format("YYYY-MM-DD");c[e]=i}else delete c[e];else t?c[e]=t:delete c[e];n.setState({params:w({},c)})})),Object(d.a)(Object(a.a)(n),"handleSearch",(function(e){n.timer&&(clearTimeout(n.timer),n.timer=null),n.timer=setTimeout((function(){n.handleParams("search",e)}),500)})),Object(d.a)(Object(a.a)(n),"getTotal",(function(e){n.setState({total:e})})),n.state={params:{},total:{},ops:[],proposals:[]},n.timer=null,n.getOPs(),n.getProposalFilter(),n}return Object(s.a)(c,[{key:"getOPs",value:function(){var e=this;this.props.dispatch(Object(g.eb)({},(function(){}),(function(t){t.success&&e.setState({ops:t.emails})})))}},{key:"getProposalFilter",value:function(){var e=this;this.props.dispatch(Object(g.fb)({},(function(){}),(function(t){t.success&&e.setState({proposals:t.proposalIds.map((function(e){return"".concat(e)}))})})))}},{key:"render",value:function(){var e=this.props.authUser;return e&&e.id?e.is_member?Object(n.jsx)("div",{className:"h-100 va-page",children:Object(n.jsx)(b.Fade,{distance:"20px",bottom:!0,duration:300,delay:600,children:Object(n.jsxs)("section",{className:"app-infinite-box mb-4",children:[Object(n.jsx)("div",{className:"app-infinite-search-wrap",children:Object(n.jsx)("label",{children:"VA Directory"})}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)(y,{})})]})})}):Object(n.jsx)(j.a,{to:"/"}):null}}]),c}(u.Component);t.default=Object(h.b)((function(e){return{authUser:e.global.authUser}}))(Object(j.g)(S))}}]);