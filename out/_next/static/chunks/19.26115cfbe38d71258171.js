(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"0vkj":function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),r=n("1OyB"),c=n("vuIU"),s=n("JX7q"),i=n("Ji7U"),o=n("md7G"),l=n("foSv"),d=n("rePB"),b=n("q1tI"),j=n("/MKj"),p=n("55Ip"),u=n("Ty5D"),h=n("s/m+"),m=n("Qyje"),O=n.n(m),f=(n("WlWj"),n("wd/R")),x=n.n(f),v=n("LADp"),y=n("ZpDd");function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}var w=function(e){Object(i.a)(n,e);var t=g(n);function n(){var e;return Object(r.a)(this,n),e=t.call(this),Object(d.a)(Object(s.a)(e),"deny",(function(){var t=e.props,n=t.location.search,a=t.match.params.proposalId,r=O.a.parse(n,{ignoreQueryPrefix:!0}).token;e.props.dispatch(Object(v.E)({proposalId:a,token:r,reason:e.state.reason},(function(){e.props.dispatch(Object(y.Cb)())}),(function(t){e.props.dispatch(Object(y.U)()),t.success&&(e.setState({proposal:t.proposal,onboarding:t.onboarding}),e.props.dispatch(Object(y.Bb)("Denied successfully!","success")))})))})),e.state={reason:"",proposal:null,onboarding:null},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.proposal,r=t.onboarding;return Object(a.jsx)("div",{id:"signup-welcome-page",children:Object(a.jsxs)("div",{className:"custom-container",children:[Object(a.jsx)(h.Fade,{distance:"20px",bottom:!0,duration:500,delay:400,children:Object(a.jsx)("p",{className:"text-center font-weight-500 font-size-18 mb-3",children:"Compliance admin, please record the exact reason for denying this grant. Remember, this action is final and will stop this grant from moving ahead. Your reason will be shared with the OP."})}),Object(a.jsx)("textarea",{placeholder:"Enter the reason you are denying this grant.",value:this.state.reason,onChange:function(t){return e.setState({reason:t.target.value})},readOnly:!!n}),n&&Object(a.jsxs)("div",{className:"text-center mb-3",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{className:"pr-2",children:"Grant number:"}),Object(a.jsx)("b",{children:n.id})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{className:"pr-2",children:"Grant title:"}),Object(a.jsx)("b",{children:n.title})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{className:"pr-2",children:"Denial timestamp:"}),Object(a.jsx)("b",{children:x()(r.compliance_reviewed_at).local().format("HH:mm M/D/YYYY")})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{className:"pr-2",children:"Admin email:"}),Object(a.jsx)("b",{children:r.admin_email})]})]}),Object(a.jsx)(h.Fade,{distance:"20px",bottom:!0,duration:500,delay:400,children:Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)(p.b,{to:"/",className:"btn btn-primary-outline mr-2",children:n?"Close":"Cancel"}),!n&&Object(a.jsx)("button",{className:"btn btn-primary",onClick:this.deny,disabled:!this.state.reason,children:"Deny Grant"})]})})]})})}}]),n}(b.Component);t.default=Object(j.b)((function(){return{}}))(Object(u.g)(w))}}]);