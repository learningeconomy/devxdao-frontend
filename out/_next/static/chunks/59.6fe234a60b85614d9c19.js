(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[59],{"t/5N":function(e,t,s){"use strict";s.r(t);var c=s("nKUr"),i=s("1OyB"),l=s("vuIU"),n=s("Ji7U"),a=s("md7G"),r=s("foSv"),o=s("q1tI"),d=s("/MKj"),j=s("Ty5D"),b=s("e+cM"),u=s("ZpDd"),h=s("IwCS"),p=s("LADp");s("jWqq");function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,c=Object(r.a)(e);if(t){var i=Object(r.a)(this).constructor;s=Reflect.construct(c,arguments,i)}else s=c.apply(this,arguments);return Object(a.a)(this,s)}}var v=s("wd/R"),f=function(e){Object(n.a)(s,e);var t=m(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={proposal:{},vote:{},proposalId:0,loading:!0,notVotes:[]},c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.proposalId;this.setState({proposalId:t,loading:!0},(function(){e.getProposal()}))}},{key:"fetchVAsNotVote",value:function(e){var t=this;this.props.dispatch(Object(p.cc)(e,(function(){t.props.dispatch(Object(u.Ab)())}),(function(e){t.setState({notVotes:e.data}),t.props.dispatch(Object(u.T)())})))}},{key:"getProposal",value:function(){var e=this,t=this.state.proposalId;this.props.dispatch(Object(p.Rb)(t,(function(){e.props.dispatch(Object(u.Ab)())}),(function(s){var c=s.proposal||{},i={};c&&c.votes&&c.votes.length&&(i=c.votes[0]),e.setState({loading:!1,proposalId:t,proposal:c,vote:i}),e.fetchVAsNotVote(i.id),e.props.dispatch(Object(u.T)())})))}},{key:"renderHeader",value:function(){var e=this.state.proposal;return Object(c.jsx)(b.i,{title:e.title})}},{key:"renderResult",value:function(e){return"success"==e.result?"Success":"no-quorum"==e.result?"No Quorum":null===e.result?"-":"Fail"}},{key:"renderSummary",value:function(){var e=this.state,t=e.proposal,s=e.vote;return Object(c.jsx)("div",{className:"app-simple-section mb-3",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{children:"Vote Type:"}),Object(c.jsx)("b",{children:"Informal"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{children:"Quorum Rate:"}),Object(c.jsx)("b",{children:this.renderQuorum()})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{children:"Votes Obtained:"}),Object(c.jsxs)("b",{children:[s.totalVotes," / ",t.totalMembers]})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{children:"Result:"}),Object(c.jsx)("b",{children:this.renderResult(s)})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{children:"Stake for/against:"}),Object(c.jsxs)("b",{children:[s.for_value," / ",s.against_value]})]})]})})}},{key:"renderQuorum",value:function(){var e=this.state.vote,t=this.props.settings,s="";return(s="grant"==e.content_type?t.quorum_rate||"":"simple"==e.content_type?t.quorum_rate_simple||"":t.quorum_rate_milestone||"")&&(s+="%"),s}},{key:"renderInfiniteHeader",value:function(){return Object(c.jsx)("div",{className:"infinite-header",children:Object(c.jsxs)("div",{className:"infinite-headerInner",children:[Object(c.jsx)("div",{className:"c-col-1 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"Forum Name"})}),Object(c.jsx)("div",{className:"c-col-2 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"Stake For"})}),Object(c.jsx)("div",{className:"c-col-3 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"Stake Against"})}),Object(c.jsx)("div",{className:"c-col-4 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"Time of Vote"})})]})})}},{key:"renderItems",value:function(){var e=this.state.vote.results||[],t=[];return e&&e.length?(e.forEach((function(e){var s,i,l,n;t.push(Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"infinite-row",children:[Object(c.jsx)("div",{className:"c-col-1 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:e.forum_name})}),Object(c.jsx)("div",{className:"c-col-2 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"for"==e.type?null===(s=e.value)||void 0===s||null===(i=s.toFixed)||void 0===i?void 0:i.call(s,h.d):""})}),Object(c.jsx)("div",{className:"c-col-3 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"against"==e.type?null===(l=e.value)||void 0===l||null===(n=l.toFixed)||void 0===n?void 0:n.call(l,h.d):""})}),Object(c.jsx)("div",{className:"c-col-4 c-cols",children:Object(c.jsxs)("label",{className:"font-size-14",children:[v(e.created_at).local().format("M/D/YYYY")," ",v(e.created_at).local().format("h:mm A")]})})]})},"vote_result_".concat(e.id)))})),Object(c.jsx)("ul",{children:t})):Object(c.jsx)("div",{id:"infinite-no-result",children:Object(c.jsx)("label",{className:"font-size-14",children:"No Results Found"})})}},{key:"renderVAItems",value:function(){var e=this.state.notVotes||[],t=[];return e&&e.length?(e.forEach((function(e){var s,i;t.push(Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"infinite-row",children:[Object(c.jsx)("div",{className:"c-col-1 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:null===e||void 0===e||null===(s=e.profile)||void 0===s?void 0:s.forum_name})}),Object(c.jsx)("div",{className:"c-col-2 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:null===e||void 0===e||null===(i=e.profile)||void 0===i?void 0:i.telegram})}),Object(c.jsx)("div",{className:"c-col-3 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:e.email})})]})},"vote_result_".concat(e.id)))})),Object(c.jsx)("ul",{children:t})):Object(c.jsx)("div",{id:"infinite-no-result",children:Object(c.jsx)("label",{className:"font-size-14",children:"No Results Found"})})}},{key:"render",value:function(){var e=this.props.authUser,t=this.state,s=t.loading,i=t.proposal,l=t.vote;return e&&e.id&&!s?i&&i.id&&l&&l.id&&(e.is_admin||"completed"==l.status&&l.result)&&(e.is_member||e.is_admin||e.is_participant||e.id==i.user_id)?Object(c.jsxs)("div",{id:"app-single-vote-page",children:[this.renderHeader(),this.renderSummary(),Object(c.jsxs)("section",{id:"app-single-vote-results-section",className:"app-infinite-box mb-3",children:[Object(c.jsx)("div",{className:"app-infinite-search-wrap",children:Object(c.jsx)("label",{children:"Vote Results"})}),Object(c.jsx)("div",{className:"infinite-content",children:Object(c.jsxs)("div",{className:"infinite-contentInner",children:[this.renderInfiniteHeader(),Object(c.jsx)("div",{className:"infinite-body",id:"app-single-vote-results-sectionBody",children:s?Object(c.jsx)(b.g,{}):this.renderItems()})]})})]}),!!e.is_admin&&Object(c.jsxs)("section",{id:"app-single-note-vote-section",className:"app-infinite-box",children:[Object(c.jsx)("div",{className:"app-infinite-search-wrap",children:Object(c.jsx)("label",{children:"VAs who have not voted yet"})}),Object(c.jsx)("div",{className:"infinite-content",children:Object(c.jsxs)("div",{className:"infinite-contentInner",children:[Object(c.jsx)("div",{className:"infinite-header",children:Object(c.jsxs)("div",{className:"infinite-headerInner",children:[Object(c.jsx)("div",{className:"c-col-1 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"VA Forum Name"})}),Object(c.jsx)("div",{className:"c-col-2 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"VA Telegram"})}),Object(c.jsx)("div",{className:"c-col-3 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"VA Email"})})]})}),Object(c.jsx)("div",{className:"infinite-body",id:"app-single-vote-results-sectionBody",children:s?Object(c.jsx)(b.g,{}):this.renderVAItems()})]})})]})]}):Object(c.jsx)(j.a,{to:"/app"}):null}}]),s}(o.Component);t.default=Object(d.b)((function(e){return{authUser:e.global.authUser,settings:e.global.settings}}))(Object(j.g)(f))}}]);