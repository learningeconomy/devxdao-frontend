(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{Y0uu:function(e,t,s){"use strict";s.r(t);var c=s("nKUr"),i=s("1OyB"),l=s("vuIU"),n=s("Ji7U"),r=s("md7G"),d=s("foSv"),a=s("q1tI"),o=s("/MKj"),j=s("Ty5D"),b=s("s/m+"),h=s("e+cM"),u=s("LADp"),O=s("wd/R"),m=s.n(O);s("rxGX");function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,c=Object(d.a)(e);if(t){var i=Object(d.a)(this).constructor;s=Reflect.construct(c,arguments,i)}else s=c.apply(this,arguments);return Object(r.a)(this,s)}}var x=function(e){Object(n.a)(s,e);var t=p(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={id:null,data:{},isShow:!0,currentMilestone:null},c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.id;this.setState({id:t}),this.getDetail(e.id)}},{key:"getDetail",value:function(e){var t=this;this.props.dispatch(Object(u.Fb)(e,(function(){}),(function(s){if(s.success){var c=s.milestone,i=c.milestones.findIndex((function(t){return+t.id===+e}));c.milestoneIndex=i+1,t.setState({data:c,currentMilestone:c.milestones[i]})}})))}},{key:"render",value:function(){var e,t,s=this.state.data;return Object(c.jsx)("div",{id:"public-milestone-page",className:"h-100",children:Object(c.jsxs)(b.Fade,{distance:"20px",bottom:!0,duration:300,delay:600,children:[Object(c.jsx)(h.h,{title:"Milestones log for ".concat(s.proposal_id,"-").concat(s.milestoneIndex)}),Object(c.jsxs)("section",{className:"app-infinite-box mb-4",children:[Object(c.jsx)("div",{className:"app-infinite-search-wrap",children:Object(c.jsx)("h4",{children:"Summary"})}),Object(c.jsx)("div",{className:"pl-5",children:Object(c.jsx)("div",{children:Object(c.jsx)("table",{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Milestone status:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:s.submitted_time?"Submitted":"Not submitted"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2 pb-2",children:"Paid?:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:s.paid?"Yes":"No"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"OP email:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:s.email})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Proposal number:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:s.proposal_id})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Proposal title:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:s.proposal_title})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Proposal status:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:s.proposal_status})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Milestones in this proposal:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:null===(e=s.milestones)||void 0===e?void 0:e.length})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Milestone title:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:null===s||void 0===s?void 0:s.title})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Acceptance criteria:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:null===s||void 0===s?void 0:s.criteria})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"OP milestone submission URL:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:null===s||void 0===s?void 0:s.url})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"OP milestone submission notes:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:null===s||void 0===s?void 0:s.comment})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Grant portion:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:null===s||void 0===s?void 0:s.grant})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Code reviewer:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:null===s||void 0===s?void 0:s.admin_reviewer_email})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Review date:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:m()(null===s||void 0===s?void 0:s.reviewed_at).format("M/D/YYYY")})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Reviewer notes:"}),Object(c.jsx)("td",{children:Object(c.jsx)("p",{className:"text-pre-wrap font-weight-bold",children:null===s||void 0===s?void 0:s.notes})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"pr-2",children:"Reviewer attachments:"}),Object(c.jsx)("td",{className:"font-weight-bold",children:Object(c.jsx)("a",{className:"text-underline",target:"_blank",href:null===s||void 0===s?void 0:s.support_file_url,rel:"noreferrer",children:null===s||void 0===s||null===(t=s.support_file)||void 0===t?void 0:t.split("/").pop()})})]})]})})})})]})]})})}}]),s}(a.Component);t.default=Object(o.b)((function(){return{}}))(Object(j.g)(x))}}]);