(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{Rmjo:function(t,e,c){"use strict";c.r(e);var n=c("nKUr"),r=c("1OyB"),i=c("vuIU"),o=c("Ji7U"),a=c("md7G"),s=c("foSv"),u=c("q1tI"),l=c("/MKj"),p=c("Ty5D"),f=c("JX7q"),b=c("rePB"),h=c("s/m+"),d=c("ZpDd"),j=c("LADp");c("9YIx");function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,n=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return Object(a.a)(this,c)}}var m=function(t){Object(o.a)(c,t);var e=O(c);function c(t){var n;return Object(r.a)(this,c),n=e.call(this,t),Object(b.a)(Object(f.a)(n),"inputCode",(function(t){n.setState({code:t.target.value})})),Object(b.a)(Object(f.a)(n),"clickResend",(function(t){t.preventDefault(),n.props.dispatch(Object(j.nc)((function(){n.props.dispatch(Object(d.Ab)())}),(function(){n.props.dispatch(Object(d.T)())})))})),Object(b.a)(Object(f.a)(n),"submit",(function(t){t.preventDefault();var e=n.state.code;e?n.props.dispatch(Object(j.kd)(e,(function(){n.props.dispatch(Object(d.Ab)())}),(function(t){t.success?n.props.dispatch(Object(j.sb)((function(){}),(function(){n.props.dispatch(Object(d.T)())}))):n.props.dispatch(Object(d.T)())}))):n.props.dispatch(Object(d.zb)("Input verification code"))})),n.state={code:""},n}return Object(i.a)(c,[{key:"render",value:function(){var t=this.props.authUser,e=this.state.code;return t&&t.id?Object(n.jsx)("div",{id:"email-verify-page",children:Object(n.jsx)("div",{className:"custom-container",children:Object(n.jsx)(h.Fade,{distance:"20px",bottom:!0,duration:500,delay:400,children:Object(n.jsxs)("form",{action:"",method:"POST",onSubmit:this.submit,children:[Object(n.jsx)("h1",{className:"text-center",children:"Email Verification"}),Object(n.jsxs)("p",{className:"font-size-18 text-center",children:["Please enter the code sent to the email: ",t.email]}),Object(n.jsx)("p",{className:"font-size-14 text-center mt-4",children:"Make sure to check your spam folder if you do not see the code in your box after 1 minute."}),Object(n.jsxs)("p",{className:"font-size-14 text-center",style:{marginTop:"5px"},children:["If you still don't see it in spam, you can"," ",Object(n.jsx)("a",{onClick:this.clickResend,children:"resend the code"})]}),Object(n.jsx)("input",{placeholder:"Enter Code",type:"text",value:e,onChange:this.inputCode}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})})}):null}}]),c}(u.Component),v=Object(l.b)((function(t){return{authUser:t.global.authUser}}))(m),y=c("YW6W");c("u/MG");function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,n=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return Object(a.a)(this,c)}}var g=function(t){Object(o.a)(c,t);var e=x(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i)),Object(b.a)(Object(f.a)(t),"logout",(function(e){e.preventDefault(),y.a.removeUser(),t.props.dispatch(Object(d.W)({}))})),t}return Object(i.a)(c,[{key:"render",value:function(){var t=this.props.authUser;return t&&t.id?Object(n.jsx)("div",{id:"pending-access-page",children:Object(n.jsx)("div",{className:"custom-container",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Your account is pending"}),Object(n.jsx)("p",{children:"This portal provides access to forum discussions and the ability to apply for grants and membership. You must sign two agreements with the Emerging Technology Association prior to accessing this portal."}),Object(n.jsx)("p",{children:"Please watch your email, these forms will be sent with 24 to 48 hours. Once you have signed these forms, the portal admins with grant access to your account."}),Object(n.jsx)("a",{className:"btn btn-primary",onClick:this.logout,children:"Sign Out"})]})})}):null}}]),c}(u.Component),R=Object(l.b)((function(t){return{authUser:t.global.authUser}}))(g);c("MIb+");function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,n=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return Object(a.a)(this,c)}}var U=function(t){Object(o.a)(c,t);var e=w(c);function c(t){var n;return Object(r.a)(this,c),n=e.call(this,t),Object(b.a)(Object(f.a)(n),"inputCode",(function(t){n.setState({code:t.target.value})})),Object(b.a)(Object(f.a)(n),"submit",(function(t){t.preventDefault();var e=n.state.code;e?n.props.dispatch(Object(j.t)(e,(function(){n.props.dispatch(Object(d.Ab)())}),(function(){n.props.dispatch(Object(d.T)())}))):n.props.dispatch(Object(d.zb)("Input two-factor authentication code"))})),n.state={code:""},n}return Object(i.a)(c,[{key:"render",value:function(){var t=this.props.authUser,e=this.state.code;return t&&t.id?Object(n.jsx)("div",{id:"login-2fa-page",children:Object(n.jsx)("div",{className:"custom-container",children:Object(n.jsx)(h.Fade,{distance:"20px",bottom:!0,duration:500,delay:400,children:Object(n.jsxs)("form",{action:"",method:"POST",onSubmit:this.submit,children:[Object(n.jsx)("h1",{className:"text-center",children:"Two-Factor Authentication"}),Object(n.jsxs)("p",{className:"font-size-18 text-center",children:["Please enter the code sent to the email: ",t.email]}),Object(n.jsx)("p",{className:"font-size-14 text-center mt-4",children:"Make sure to check your spam folder if you do not see the code in your box after 1 minute."}),Object(n.jsx)("input",{placeholder:"Enter Code",type:"text",value:e,onChange:this.inputCode}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})})}):null}}]),c}(u.Component),k=Object(l.b)((function(t){return{authUser:t.global.authUser}}))(U);function D(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,n=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return Object(a.a)(this,c)}}var N=function(t){Object(o.a)(c,t);var e=D(c);function c(){return Object(r.a)(this,c),e.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){var t=this.props.authUser;if(!t||!t.id||!t.profile||!t.profile.id)return null;if(!t.is_admin){if(!t.email_verified&&!t.is_guest)return Object(n.jsx)(v,{});if(!t.can_access)return Object(n.jsx)(R,{})}return t.profile.twoFA_login&&t.profile.twoFA_login_active?Object(n.jsx)(k,{}):Object(n.jsx)(p.a,{to:"/app"})}}]),c}(u.Component);e.default=Object(l.b)((function(t){return{authUser:t.global.authUser}}))(Object(p.g)(N))}}]);