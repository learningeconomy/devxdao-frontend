(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{mCOC:function(e,t,s){"use strict";s.r(t);var i=s("nKUr"),c=s("1OyB"),n=s("vuIU"),a=s("Ji7U"),r=s("md7G"),l=s("foSv"),o=s("q1tI"),d=s("/MKj"),u=s("o0o1"),h=s.n(u),p=s("HaE+"),j=s("JX7q"),m=s("rePB"),b=s("Ty5D"),f=s("s/m+"),v=s("YW6W"),O=s("ZpDd"),g=s("55Ip"),x=(s("v1O5"),s("LADp"));function y(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?y(Object(s),!0).forEach((function(t){Object(m.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):y(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;s=Reflect.construct(i,arguments,c)}else s=i.apply(this,arguments);return Object(r.a)(this,s)}}var N=function(e){Object(a.a)(s,e);var t=k(s);function s(){var e;Object(c.a)(this,s);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),Object(m.a)(Object(j.a)(e),"clickRegister",function(){var t=Object(p.a)(h.a.mark((function t(s){var i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),i=e.props.history,v.a.storeUser({}),t.next=5,e.props.dispatch(Object(O.Q)({}));case 5:i.push("/register/form");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(m.a)(Object(j.a)(e),"dismiss",(function(t){t.preventDefault(),e.props.dispatch(Object(x.E)((function(){e.props.dispatch(Object(O.ub)())}),(function(t){if(t.success){var s=e.props.authUser;s.press_dismiss=1,e.props.dispatch(Object(O.Q)(_({},s)))}e.props.dispatch(Object(O.N)())})))})),e}return Object(n.a)(s,[{key:"render",value:function(){var e=this.props.authUser;return e&&e.id?e.is_admin||e.press_dismiss?null:Object(i.jsx)(f.Fade,{distance:"20px",right:!0,duration:200,delay:500,children:Object(i.jsxs)("div",{id:"app-newgrant-box",className:"new-member",children:[Object(i.jsx)("img",{src:"/parts.png",alt:""}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{className:"font-weight-700",children:"Welcome to the portal! Are you here to submit a grant request?"}),Object(i.jsx)("p",{className:"font-size-12",children:'Click the "My Proposals" tab to the left, then the button for "New Grant Proposal" to start the process. Please be aware that grants require a 100 Euro DOS Fee for all applications.'})]}),Object(i.jsxs)("div",{className:"d-flex flex-column actions",children:[Object(i.jsx)(g.b,{to:"/app/proposals",className:"btn btn-primary less-small mb-1",children:"Request grant"}),Object(i.jsx)("button",{className:"btn btn-primary less-small mt-1",onClick:this.dismiss,children:"Dismiss alert"})]})]})}):null}}]),s}(o.Component),T=Object(d.b)((function(e){return{authUser:e.global.authUser}}))(Object(b.g)(N)),S=s("KQm4"),R=s("e+cM"),w=(s("bSi4"),s("wd/R")),z=s.n(w),I=function(e){var t=e.lastTime,s=e.isCountUp,c=Object(o.useState)(""),n=c[0],a=c[1],r=Object(o.useState)(null),l=r[0],d=r[1];Object(o.useEffect)((function(){var e=u();if(e>0){a(z.a.duration(e));var t=setInterval((function(){var e=u();a(z.a.duration(e))}),1e3);d(t)}return function(){clearInterval(l)}}),[]);var u=function(){return s?z()().diff(t):t.diff(z()())},h=function(e){return e.toString().padStart(2,"0")};return Object(i.jsxs)(i.Fragment,{children:[n&&Object(i.jsxs)("p",{children:[h(n.days()),":",h(n.hours()),":",h(n.minutes()),":",h(n.seconds())]}),!n&&Object(i.jsx)("p",{children:"00:00:00:00"})]})};function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;s=Reflect.construct(i,arguments,c)}else s=i.apply(this,arguments);return Object(r.a)(this,s)}}var P=s("wd/R"),U=function(e){Object(a.a)(s,e);var t=C(s);function s(e){var i;return Object(c.a)(this,s),i=t.call(this,e),Object(m.a)(Object(j.a)(i),"trackScroll",(function(){i.$elem&&i.$elem.scrollTop+i.$elem.clientHeight>=i.$elem.scrollHeight&&i.runNextPage()})),Object(m.a)(Object(j.a)(i),"handleSearch",(function(e){i.setState({search:e.target.value},(function(){i.timer&&(clearTimeout(i.timer),i.timer=null),i.timer=setTimeout((function(){i.reloadTable()}),500)}))})),i.state={loading:!1,votes:[],sort_key:"vote.id",sort_direction:"desc",search:"",page_id:1,calling:!1,finished:!1},i.$elem=null,i.timer=null,i}return Object(n.a)(s,[{key:"componentDidMount",value:function(){this.startTracking(),this.getVotes()}},{key:"componentWillUnmount",value:function(){this.$elem&&this.$elem.removeEventListener("scroll",this.trackScroll)}},{key:"componentDidUpdate",value:function(e){var t=this.props.formalBallotTableStatus;!e.formalBallotTableStatus&&t&&(this.reloadTable(),this.props.dispatch(Object(O.cb)(!1)))}},{key:"startTracking",value:function(){this.$elem=document.getElementById("app-formal-ballots-sectionBody"),this.$elem.addEventListener("scroll",this.trackScroll)}},{key:"reloadTable",value:function(){var e=this;this.setState({page_id:1,votes:[],finished:!1},(function(){e.getVotes()}))}},{key:"runNextPage",value:function(){var e=this,t=this.state,s=t.calling,i=t.loading,c=t.finished,n=t.page_id;s||i||c||this.setState({page_id:n+1},(function(){e.getVotes(!1)}))}},{key:"getVotes",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=this.state,i=s.calling,c=s.loading,n=s.finished,a=s.sort_key,r=s.sort_direction,l=s.search,o=s.page_id,d=s.votes;if(!(c||i||n)){var u={sort_key:a,sort_direction:r,search:l,page_id:o};this.props.dispatch(Object(x.O)(u,(function(){t?e.setState({loading:!0,calling:!0}):e.setState({loading:!1,calling:!0})}),(function(t){var s=t.votes||[],i=t.finished||!1;e.setState({loading:!1,calling:!1,finished:i,votes:[].concat(Object(S.a)(d),Object(S.a)(s))})})))}}},{key:"clickRow",value:function(e){var t=this.props,s=t.authUser,i=t.history;s.is_member||s.is_admin||s.id==e.user_id?(s.is_admin||s.id==e.user_id||s.is_member)&&i.push("/app/proposal/".concat(e.proposal_id)):(s.is_participant||s.is_guest)&&(this.props.dispatch(Object(O.Y)({"voting-access-alert":{render:!0,title:"Sorry, only voting associates may access a live vote."}})),this.props.dispatch(Object(O.R)("custom-global-modal")))}},{key:"renderTitle",value:function(e){return e.title}},{key:"renderTimeRemaining",value:function(e){var t=0,s=this.props.settings;"grant"==e.content_type?"min"==s.time_unit_formal?t=parseInt(s.time_formal):"hour"==s.time_unit_formal?t=60*parseInt(s.time_formal):"day"==s.time_unit_formal&&(t=24*parseInt(s.time_formal)*60):"simple"==e.content_type?"min"==s.time_unit_simple?t=parseInt(s.time_simple):"hour"==s.time_unit_simple?t=60*parseInt(s.time_simple):"day"==s.time_unit_simple&&(t=24*parseInt(s.time_simple)*60):"milestone"==e.content_type&&("min"==s.time_unit_milestone?t=parseInt(s.time_milestone):"hour"==s.time_unit_milestone?t=60*parseInt(s.time_milestone):"day"==s.time_unit_milestone&&(t=24*parseInt(s.time_milestone)*60));var c=P(e.created_at).add(t,"minutes");return Object(i.jsx)(I,{lastTime:c})}},{key:"renderVotes",value:function(){var e=this,t=this.state.votes,s=[];return t&&t.length?(t.forEach((function(t,c){s.push(Object(i.jsx)("li",{onClick:function(){return e.clickRow(t)},children:Object(i.jsxs)("div",{className:"infinite-row",children:[Object(i.jsx)("div",{className:"c-col-0 c-cols",children:Object(i.jsx)("label",{className:"font-size-12 d-block",children:t.proposalId})}),Object(i.jsx)("div",{className:"c-col-1 c-cols",children:Object(i.jsx)("label",{className:"font-size-12 d-block",children:e.renderTitle(t)})}),Object(i.jsx)("div",{className:"c-col-2 c-cols",children:Object(i.jsx)("label",{className:"font-size-12 d-block",children:"grant"==t.content_type?"Grant":"simple"==t.content_type?"Simple":"Milestone"})}),Object(i.jsx)("div",{className:"c-col-3 c-cols",children:Object(i.jsx)("label",{className:"font-size-12 d-block",children:P(t.created_at).fromNow()})}),Object(i.jsx)("div",{className:"c-col-4 c-cols",children:Object(i.jsx)("label",{className:"font-size-12 d-block",children:e.renderTimeRemaining(t)})})]})},"vote_".concat(c)))})),Object(i.jsx)("ul",{children:s})):Object(i.jsx)("div",{id:"infinite-no-result",children:Object(i.jsx)("label",{className:"font-size-12",children:"No Results Found"})})}},{key:"renderTriangle",value:function(e){var t=this.state,s=t.sort_key,c=t.sort_direction;return s!=e?Object(i.jsx)("span",{className:"inactive",children:"\u25b2"}):"asc"==c?Object(i.jsx)("span",{children:"\u25b2"}):Object(i.jsx)("span",{children:"\u25bc"})}},{key:"clickHeader",value:function(e){var t=this,s=this.state,i=s.sort_key,c=s.sort_direction;i==e?c="asc"==c?"desc":"asc":(i=e,c="desc"),this.setState({sort_key:i,sort_direction:c},(function(){t.reloadTable()}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.loading,c=t.search,n=this.props.authUser;return n&&n.id?Object(i.jsx)(f.Fade,{distance:"20px",right:!0,duration:500,delay:500,children:Object(i.jsxs)("section",{id:"app-formal-ballots-section",className:"app-infinite-box",children:[Object(i.jsxs)("div",{className:"app-infinite-search-wrap",children:[Object(i.jsx)("label",{children:"Active Formal Ballots"}),Object(i.jsx)("input",{type:"text",value:c,onChange:this.handleSearch,placeholder:"Search..."})]}),Object(i.jsx)("div",{className:"infinite-content",children:Object(i.jsxs)("div",{className:"infinite-contentInner",children:[Object(i.jsx)("div",{className:"infinite-header",children:Object(i.jsxs)("div",{className:"infinite-headerInner",children:[Object(i.jsxs)("div",{className:"c-col-0 c-cols",onClick:function(){return e.clickHeader("proposal.id")},children:[Object(i.jsx)("label",{className:"font-size-12",children:"#"}),this.renderTriangle("proposal.id")]}),Object(i.jsxs)("div",{className:"c-col-1 c-cols",onClick:function(){return e.clickHeader("proposal.title")},children:[Object(i.jsx)("label",{className:"font-size-12",children:"Title"}),this.renderTriangle("proposal.title")]}),Object(i.jsxs)("div",{className:"c-col-2 c-cols",onClick:function(){return e.clickHeader("vote.content_type")},children:[Object(i.jsx)("label",{className:"font-size-12",children:"Ballot Type"}),this.renderTriangle("vote.content_type")]}),Object(i.jsxs)("div",{className:"c-col-3 c-cols",onClick:function(){return e.clickHeader("vote.created_at")},children:[Object(i.jsx)("label",{className:"font-size-12",children:"Submitted"}),this.renderTriangle("vote.created_at")]}),Object(i.jsx)("div",{className:"c-col-4 c-cols",children:Object(i.jsx)("label",{className:"font-size-12",children:"Time Remaining"})})]})}),Object(i.jsx)("div",{className:"infinite-body",id:"app-formal-ballots-sectionBody",children:s?Object(i.jsx)(R.e,{}):this.renderVotes()})]})})]})}):null}}]),s}(o.Component),D=Object(d.b)((function(e){return{authUser:e.global.authUser,formalBallotTableStatus:e.admin.formalBallotTableStatus,settings:e.global.settings}}))(Object(b.g)(U));s("AxTd");function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;s=Reflect.construct(i,arguments,c)}else s=i.apply(this,arguments);return Object(r.a)(this,s)}}var B=s("wd/R"),H=function(e){Object(a.a)(s,e);var t=$(s);function s(e){var i;return Object(c.a)(this,s),i=t.call(this,e),Object(m.a)(Object(j.a)(i),"trackScroll",(function(){i.$elem&&i.$elem.scrollTop+i.$elem.clientHeight>=i.$elem.scrollHeight&&i.runNextPage()})),Object(m.a)(Object(j.a)(i),"handleSearch",(function(e){i.setState({search:e.target.value},(function(){i.timer&&(clearTimeout(i.timer),i.timer=null),i.timer=setTimeout((function(){i.reloadTable()}),500)}))})),i.state={loading:!1,votes:[],sort_key:"vote.id",sort_direction:"desc",search:"",page_id:1,calling:!1,finished:!1},i.$elem=null,i.timer=null,i}return Object(n.a)(s,[{key:"componentDidMount",value:function(){this.startTracking(),this.getVotes()}},{key:"componentDidUpdate",value:function(e){var t=this.props.informalBallotTableStatus;!e.informalBallotTableStatus&&t&&(this.reloadTable(),this.props.dispatch(Object(O.fb)(!1)))}},{key:"componentWillUnmount",value:function(){this.$elem&&this.$elem.removeEventListener("scroll",this.trackScroll)}},{key:"startTracking",value:function(){this.$elem=document.getElementById("app-informal-ballots-sectionBody"),this.$elem.addEventListener("scroll",this.trackScroll)}},{key:"reloadTable",value:function(){var e=this;this.setState({page_id:1,votes:[],finished:!1},(function(){e.getVotes()}))}},{key:"runNextPage",value:function(){var e=this,t=this.state,s=t.calling,i=t.loading,c=t.finished,n=t.page_id;s||i||c||this.setState({page_id:n+1},(function(){e.getVotes(!1)}))}},{key:"getVotes",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=this.state,i=s.calling,c=s.loading,n=s.finished,a=s.sort_key,r=s.sort_direction,l=s.search,o=s.page_id,d=s.votes;if(!(c||i||n)){var u={sort_key:a,sort_direction:r,search:l,page_id:o};this.props.dispatch(Object(x.P)(u,(function(){t?e.setState({loading:!0,calling:!0}):e.setState({loading:!1,calling:!0})}),(function(t){var s=t.votes||[],i=t.finished||!1;e.setState({loading:!1,calling:!1,finished:i,votes:[].concat(Object(S.a)(d),Object(S.a)(s))})})))}}},{key:"clickRow",value:function(e){var t=this.props,s=t.authUser,i=t.history;s.is_member||s.is_admin?i.push("/app/proposal/".concat(e.proposal_id)):s.is_participant&&(e.user_id==s.id?i.push("/app/proposal/".concat(e.proposal_id)):(this.props.dispatch(Object(O.Y)({"voting-access-alert":{render:!0,title:"Sorry, only voting associates may access a live vote."}})),this.props.dispatch(Object(O.R)("custom-global-modal"))))}},{key:"renderTitle",value:function(e){return e.title}},{key:"renderTimeRemaining",value:function(e){var t=0,s=this.props.settings;"grant"==e.content_type?"min"==s.time_unit_informal?t=parseInt(s.time_informal):"hour"==s.time_unit_informal?t=60*parseInt(s.time_informal):"day"==s.time_unit_informal&&(t=24*parseInt(s.time_informal)*60):"simple"==e.content_type?"min"==s.time_unit_simple?t=parseInt(s.time_simple):"hour"==s.time_unit_simple?t=60*parseInt(s.time_simple):"day"==s.time_unit_simple&&(t=24*parseInt(s.time_simple)*60):"milestone"==e.content_type&&("min"==s.time_unit_milestone?t=parseInt(s.time_milestone):"hour"==s.time_unit_milestone?t=60*parseInt(s.time_milestone):"day"==s.time_unit_milestone&&(t=24*parseInt(s.time_milestone)*60));var c=B(e.created_at).add(t,"minutes");return Object(i.jsx)(I,{lastTime:c})}},{key:"renderVotes",value:function(){var e=this,t=this.state.votes,s=[];return t&&t.length?(t.forEach((function(t,c){s.push(Object(i.jsx)("li",{onClick:function(){return e.clickRow(t)},children:Object(i.jsxs)("div",{className:"infinite-row",children:[Object(i.jsx)("div",{className:"c-col-0 c-cols",children:Object(i.jsx)("label",{className:"font-size-12 d-block",children:t.proposalId})}),Object(i.jsx)("div",{className:"c-col-1 c-cols",children:Object(i.jsx)("label",{className:"font-size-12",children:e.renderTitle(t)})}),Object(i.jsx)("div",{className:"c-col-2 c-cols",children:Object(i.jsx)("label",{className:"font-size-12 d-block",children:"grant"==t.content_type?"Grant":"simple"==t.content_type?"Simple":"Milestone"})}),Object(i.jsx)("div",{className:"c-col-3 c-cols",children:Object(i.jsx)("label",{className:"font-size-12 d-block",children:B(t.created_at).fromNow()})}),Object(i.jsx)("div",{className:"c-col-4 c-cols",children:Object(i.jsx)("label",{className:"font-size-12 d-block",children:e.renderTimeRemaining(t)})})]})},"vote_".concat(c)))})),Object(i.jsx)("ul",{children:s})):Object(i.jsx)("div",{id:"infinite-no-result",children:Object(i.jsx)("label",{className:"font-size-12",children:"No Results Found"})})}},{key:"renderTriangle",value:function(e){var t=this.state,s=t.sort_key,c=t.sort_direction;return s!=e?Object(i.jsx)("span",{className:"inactive",children:"\u25b2"}):"asc"==c?Object(i.jsx)("span",{children:"\u25b2"}):Object(i.jsx)("span",{children:"\u25bc"})}},{key:"clickHeader",value:function(e){var t=this,s=this.state,i=s.sort_key,c=s.sort_direction;i==e?c="asc"==c?"desc":"asc":(i=e,c="desc"),this.setState({sort_key:i,sort_direction:c},(function(){t.reloadTable()}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.loading,c=t.search,n=this.props.authUser;return n&&n.id?Object(i.jsx)(f.Fade,{distance:"20px",right:!0,duration:500,delay:400,children:Object(i.jsxs)("section",{id:"app-informal-ballots-section",className:"app-infinite-box",children:[Object(i.jsxs)("div",{className:"app-infinite-search-wrap",children:[Object(i.jsx)("label",{children:"Active Informal Ballots"}),Object(i.jsx)("input",{type:"text",value:c,onChange:this.handleSearch,placeholder:"Search..."})]}),Object(i.jsx)("div",{className:"infinite-content",children:Object(i.jsxs)("div",{className:"infinite-contentInner",children:[Object(i.jsx)("div",{className:"infinite-header",children:Object(i.jsxs)("div",{className:"infinite-headerInner",children:[Object(i.jsxs)("div",{className:"c-col-0 c-cols",onClick:function(){return e.clickHeader("proposal.id")},children:[Object(i.jsx)("label",{className:"font-size-12",children:"#"}),this.renderTriangle("proposal.id")]}),Object(i.jsxs)("div",{className:"c-col-1 c-cols",onClick:function(){return e.clickHeader("proposal.title")},children:[Object(i.jsx)("label",{className:"font-size-12",children:"Title"}),this.renderTriangle("proposal.title")]}),Object(i.jsxs)("div",{className:"c-col-2 c-cols",onClick:function(){return e.clickHeader("vote.content_type")},children:[Object(i.jsx)("label",{className:"font-size-12",children:"Ballot Type"}),this.renderTriangle("vote.content_type")]}),Object(i.jsxs)("div",{className:"c-col-3 c-cols",onClick:function(){return e.clickHeader("vote.created_at")},children:[Object(i.jsx)("label",{className:"font-size-12",children:"Submitted"}),this.renderTriangle("vote.created_at")]}),Object(i.jsx)("div",{className:"c-col-4 c-cols",children:Object(i.jsx)("label",{className:"font-size-12",children:"Time Remaining"})})]})}),Object(i.jsx)("div",{className:"infinite-body",id:"app-informal-ballots-sectionBody",children:s?Object(i.jsx)(R.e,{}):this.renderVotes()})]})})]})}):null}}]),s}(o.Component),E=Object(d.b)((function(e){return{authUser:e.global.authUser,informalBallotTableStatus:e.admin.informalBallotTableStatus,settings:e.global.settings}}))(Object(b.g)(H)),F=s("ahwF"),V=s("syaQ"),M=s("I6fM");s("yh/M");function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;s=Reflect.construct(i,arguments,c)}else s=i.apply(this,arguments);return Object(r.a)(this,s)}}var L=s("wd/R"),Y=function(e){Object(a.a)(s,e);var t=A(s);function s(e){var i;return Object(c.a)(this,s),i=t.call(this,e),Object(m.a)(Object(j.a)(i),"trackScroll",(function(){i.$elem&&i.$elem.scrollTop+i.$elem.clientHeight>=i.$elem.scrollHeight&&i.runNextPage()})),Object(m.a)(Object(j.a)(i),"handleSearch",(function(e){i.setState({search:e.target.value},(function(){i.timer&&(clearTimeout(i.timer),i.timer=null),i.timer=setTimeout((function(){i.reloadTable()}),500)}))})),i.state={loading:!1,proposals:[],sort_key:"proposal.id",sort_direction:"desc",search:"",page_id:1,calling:!1,finished:!1},i.$elem=null,i.timer=null,i}return Object(n.a)(s,[{key:"componentDidMount",value:function(){this.startTracking(),this.getProposals()}},{key:"componentWillUnmount",value:function(){this.$elem&&this.$elem.removeEventListener("scroll",this.trackScroll)}},{key:"startTracking",value:function(){this.$elem=document.getElementById("app-proposals-sectionBody"),this.$elem&&this.$elem.addEventListener("scroll",this.trackScroll)}},{key:"reloadTable",value:function(){var e=this;this.setState({page_id:1,proposals:[],finished:!1},(function(){e.getProposals()}))}},{key:"runNextPage",value:function(){var e=this,t=this.state,s=t.calling,i=t.loading,c=t.finished,n=t.page_id;s||i||c||this.setState({page_id:n+1},(function(){e.getProposals(!1)}))}},{key:"getProposals",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=this.state,i=s.calling,c=s.loading,n=s.finished,a=s.sort_key,r=s.sort_direction,l=s.search,o=s.page_id,d=s.proposals;if(!(c||i||n)){var u={sort_key:a,sort_direction:r,search:l,page_id:o,limit:20};this.props.dispatch(Object(x.N)(u,(function(){t?e.setState({loading:!0,calling:!0}):e.setState({loading:!1,calling:!0})}),(function(t){var s=t.proposals||[],i=t.finished||!1;e.setState({loading:!1,calling:!1,finished:i,proposals:[].concat(Object(S.a)(d),Object(S.a)(s))})})))}}},{key:"clickRow",value:function(e){var t=this.props,s=t.history,i=t.authUser;if(i&&i.is_admin)s.push("/app/proposal/".concat(e.id));else{if("approved"!=e.status)return;i.is_member?s.push("/app/proposal/".concat(e.id)):e.votes&&e.votes.length||s.push("/app/proposal/".concat(e.id))}}},{key:"renderTitle",value:function(e){return e.title}},{key:"renderProposals",value:function(){var e=this,t=this.state.proposals,s=[];return t&&t.length?(t.forEach((function(t,c){s.push(Object(i.jsx)("li",{onClick:function(){return e.clickRow(t)},children:Object(i.jsxs)("div",{className:"infinite-row",children:[Object(i.jsx)("div",{className:"c-col-0 c-cols",children:Object(i.jsx)("label",{className:"font-size-14",children:t.id})}),Object(i.jsxs)("div",{className:"c-col-1 c-cols",children:[Object(i.jsx)("label",{className:"font-size-14 font-weight-700",children:e.renderTitle(t)}),Object(i.jsx)("p",{className:"font-size-12",children:v.a.getExcerpt(t.short_description)})]}),Object(i.jsx)("div",{className:"c-col-2 c-cols",children:Object(i.jsxs)("div",{className:"proposal-image-wrap",children:[Object(i.jsx)("div",{children:Object(i.jsx)(F.a,{size:20})}),Object(i.jsx)("span",{className:"font-size-12",children:t.comments})]})}),Object(i.jsx)("div",{className:"c-col-3 c-cols",children:Object(i.jsxs)("div",{className:"proposal-image-wrap",children:[Object(i.jsx)("div",{children:Object(i.jsx)(V.a,{size:20})}),Object(i.jsx)("span",{className:"font-size-12",children:t.changes})]})}),Object(i.jsx)("div",{className:"c-col-4 c-cols",children:Object(i.jsxs)("label",{className:"font-size-14",children:[L(t.created_at).local().format("M/D/YYYY")," ",L(t.created_at).local().format("h:mm A")]})}),Object(i.jsx)("div",{className:"c-col-5 c-cols",children:Object(i.jsx)(I,{lastTime:L(t.created_at),isCountUp:!0})})]})},"proposal_".concat(c)))})),Object(i.jsx)("ul",{children:s})):Object(i.jsx)("div",{id:"infinite-no-result",children:Object(i.jsx)("label",{className:"font-size-14",children:"No Results Found"})})}},{key:"renderTriangle",value:function(e){var t=this.state,s=t.sort_key,c=t.sort_direction;return s!=e?Object(i.jsx)("span",{className:"inactive",children:"\u25b2"}):"asc"==c?Object(i.jsx)("span",{children:"\u25b2"}):Object(i.jsx)("span",{children:"\u25bc"})}},{key:"clickHeader",value:function(e){var t=this,s=this.state,i=s.sort_key,c=s.sort_direction;i==e?c="asc"==c?"desc":"asc":(i=e,c="desc"),this.setState({sort_key:i,sort_direction:c},(function(){t.reloadTable()}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.loading,c=t.search;return Object(i.jsx)(f.Fade,{distance:"20px",bottom:!0,duration:200,delay:700,children:Object(i.jsxs)("section",{id:"app-proposals-section",className:"app-infinite-box",children:[Object(i.jsxs)("div",{className:"app-infinite-search-wrap",children:[Object(i.jsxs)("label",{children:["Active Discussions\xa0\xa0",Object(i.jsx)(M.a,{size:16})]}),Object(i.jsx)("input",{type:"text",value:c,onChange:this.handleSearch,placeholder:"Search..."})]}),Object(i.jsx)("div",{className:"infinite-content",children:Object(i.jsxs)("div",{className:"infinite-contentInner",children:[Object(i.jsx)("div",{className:"infinite-header",children:Object(i.jsxs)("div",{className:"infinite-headerInner",children:[Object(i.jsxs)("div",{className:"c-col-0 c-cols",onClick:function(){return e.clickHeader("proposal.id")},children:[Object(i.jsx)("label",{className:"font-size-14",children:"#"}),this.renderTriangle("proposal.id")]}),Object(i.jsxs)("div",{className:"c-col-1 c-cols",onClick:function(){return e.clickHeader("proposal.title")},children:[Object(i.jsx)("label",{className:"font-size-14",children:"Title"}),this.renderTriangle("proposal.title")]}),Object(i.jsxs)("div",{className:"c-col-2 c-cols",onClick:function(){return e.clickHeader("proposal.comments")},children:[Object(i.jsx)("label",{className:"font-size-14",children:"Comments"}),this.renderTriangle("proposal.comments")]}),Object(i.jsxs)("div",{className:"c-col-3 c-cols",onClick:function(){return e.clickHeader("proposal.changes")},children:[Object(i.jsx)("label",{className:"font-size-14",children:"Changes"}),this.renderTriangle("proposal.changes")]}),Object(i.jsxs)("div",{className:"c-col-4 c-cols",onClick:function(){return e.clickHeader("proposal.created_at")},children:[Object(i.jsx)("label",{className:"font-size-14",children:"Date"}),this.renderTriangle("proposal.created_at")]}),Object(i.jsx)("div",{className:"c-col-5 c-cols",children:Object(i.jsx)("label",{className:"font-size-14",children:"Time Active"})})]})}),Object(i.jsx)("div",{className:"infinite-body",id:"app-proposals-sectionBody",children:s?Object(i.jsx)(R.e,{}):this.renderProposals()})]})})]})})}}]),s}(o.Component),W=Object(d.b)((function(e){return{authUser:e.global.authUser}}))(Object(b.g)(Y)),q=s("H2Bi"),G=s("5svO");s("wroK");function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;s=Reflect.construct(i,arguments,c)}else s=i.apply(this,arguments);return Object(r.a)(this,s)}}var K=function(e){Object(a.a)(s,e);var t=J(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"renderContent",value:function(){var e=this.props.authUser;return e&&e.is_admin?Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)(q.a,{}),Object(i.jsx)(G.a,{})]}):Object(i.jsxs)(o.Fragment,{children:[Object(i.jsx)(T,{}),Object(i.jsxs)("div",{id:"app-ballots-wrap",className:"row",children:[Object(i.jsx)("div",{className:"col col-12 col-md-6 mb-2",children:Object(i.jsx)(E,{})}),Object(i.jsx)("div",{className:"col col-12 col-md-6 mb-2",children:Object(i.jsx)(D,{})})]}),Object(i.jsx)(W,{})]})}},{key:"render",value:function(){var e=this.props.authUser;return e&&e.id?Object(i.jsx)("div",{id:"app-main-page",children:this.renderContent()}):null}}]),s}(o.Component);t.default=Object(d.b)((function(e){return{authUser:e.global.authUser}}))(K)}}]);