(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{rNdk:function(e,t,s){"use strict";s.r(t);var c=s("nKUr"),i=s("KQm4"),r=s("o0o1"),n=s.n(r),a=s("HaE+"),l=s("1OyB"),o=s("vuIU"),d=s("JX7q"),u=s("Ji7U"),h=s("md7G"),j=s("foSv"),p=s("rePB"),b=s("q1tI"),f=s("/MKj"),m=s("Ty5D"),v=s("e+cM"),O=s("ZpDd"),g=s("LADp");s("KQMp");function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,c=Object(j.a)(e);if(t){var i=Object(j.a)(this).constructor;s=Reflect.construct(c,arguments,i)}else s=c.apply(this,arguments);return Object(h.a)(this,s)}}var _=s("wd/R"),k=function(e){Object(u.a)(s,e);var t=x(s);function s(e){var c;return Object(l.a)(this,s),c=t.call(this,e),Object(p.a)(Object(d.a)(c),"trackScroll",(function(){c.$elem&&c.$elem.scrollTop+c.$elem.clientHeight>=c.$elem.scrollHeight&&c.runNextPage()})),Object(p.a)(Object(d.a)(c),"handleSearch",(function(e){c.setState({search:e.target.value},(function(){c.timer&&(clearTimeout(c.timer),c.timer=null),c.timer=setTimeout((function(){c.reloadTable()}),500)}))})),Object(p.a)(Object(d.a)(c),"clickExport",(function(e){e.preventDefault();var t=document.getElementById("app-pr-users-page__csvForm");t.action="https://backend.devxdao.com/api/csv",t.action.value="pre-register",t.submit()})),c.state={users:[],loading:!1,sort_key:"pre_register.id",sort_direction:"desc",search:"",page_id:1,calling:!1,finished:!1},c.$elem=null,c.timer=null,c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.startTracking(),this.getPreRegister()}},{key:"componentDidUpdate",value:function(e){var t=this.props.preRegisterTableStatus;!e.preRegisterTableStatus&&t&&(this.reloadTable(),this.props.dispatch(Object(O.nb)(!1)))}},{key:"componentWillUnmount",value:function(){this.$elem&&this.$elem.removeEventListener("scroll",this.trackScroll)}},{key:"startTracking",value:function(){this.$elem=document.getElementById("app-pr-users-sectionBody"),this.$elem&&this.$elem.addEventListener("scroll",this.trackScroll)}},{key:"reloadTable",value:function(){var e=this;this.setState({page_id:1,users:[],finished:!1},(function(){e.getPreRegister()}))}},{key:"runNextPage",value:function(){var e=this,t=this.state,s=t.calling,c=t.loading,i=t.finished,r=t.page_id;s||c||i||this.setState({page_id:r+1},(function(){e.getPreRegister(!1)}))}},{key:"clickAction",value:function(){var e=Object(a.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch(Object(O.mb)(t));case 2:return e.next=4,this.props.dispatch(Object(O.R)("pre-register-action"));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPreRegister",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=this.state,c=s.calling,r=s.loading,n=s.finished,a=s.sort_key,l=s.sort_direction,o=s.search,d=s.page_id,u=s.users;if(!(r||c||n)){var h={sort_key:a,sort_direction:l,search:o,page_id:d};this.props.dispatch(Object(g.tb)(h,(function(){t?e.setState({loading:!0,calling:!0}):e.setState({loading:!1,calling:!0})}),(function(t){var s=t.users||[],c=t.finished||!1;e.setState({loading:!1,calling:!1,finished:c,users:[].concat(Object(i.a)(u),Object(i.a)(s))})})))}}},{key:"renderTriangle",value:function(e){var t=this.state,s=t.sort_key,i=t.sort_direction;return s!=e?Object(c.jsx)("span",{className:"inactive",children:"\u25b2"}):"asc"==i?Object(c.jsx)("span",{children:"\u25b2"}):Object(c.jsx)("span",{children:"\u25bc"})}},{key:"clickHeader",value:function(e){var t=this,s=this.state,c=s.sort_key,i=s.sort_direction;c==e?i="asc"==i?"desc":"asc":(c=e,i="desc"),this.setState({sort_key:c,sort_direction:i},(function(){t.reloadTable()}))}},{key:"renderHeader",value:function(){var e=this;return Object(c.jsx)("div",{className:"infinite-header",children:Object(c.jsxs)("div",{className:"infinite-headerInner",children:[Object(c.jsxs)("div",{className:"c-col-1 c-cols",onClick:function(){return e.clickHeader("pre_register.created_at")},children:[Object(c.jsx)("label",{className:"font-size-14",children:"Date"}),this.renderTriangle("pre_register.created_at")]}),Object(c.jsxs)("div",{className:"c-col-2 c-cols",onClick:function(){return e.clickHeader("pre_register.email")},children:[Object(c.jsx)("label",{className:"font-size-14",children:"Email"}),this.renderTriangle("pre_register.email")]}),Object(c.jsxs)("div",{className:"c-col-3 c-cols",onClick:function(){return e.clickHeader("pre_register.first_name")},children:[Object(c.jsx)("label",{className:"font-size-14",children:"First Name"}),this.renderTriangle("pre_register.first_name")]}),Object(c.jsxs)("div",{className:"c-col-4 c-cols",onClick:function(){return e.clickHeader("pre_register.last_name")},children:[Object(c.jsx)("label",{className:"font-size-14",children:"Last Name"}),this.renderTriangle("pre_register.last_name")]}),Object(c.jsx)("div",{className:"c-col-5 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:"Action"})})]})})}},{key:"renderAction",value:function(e){var t=this;return"pending"==e.status?Object(c.jsx)("a",{className:"btn btn-primary extra-small btn-fluid-small",onClick:function(){return t.clickAction(e)},children:"Approve / Deny"}):"completed"==e.status?Object(c.jsx)("label",{className:"font-size-14",children:"Completed"}):"denied"==e.status?Object(c.jsx)("label",{className:"font-size-14 color-danger",children:"Denied"}):"approved"==e.status?Object(c.jsx)("label",{className:"font-size-14 color-success",children:"Approved"}):null}},{key:"renderUsers",value:function(){var e=this,t=this.state.users,s=[];return t&&t.length?(t.forEach((function(t,i){s.push(Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"infinite-row",children:[Object(c.jsx)("div",{className:"c-col-1 c-cols",children:Object(c.jsxs)("label",{className:"font-size-14",children:[_(t.created_at).local().format("M/D/YYYY"),Object(c.jsx)("br",{}),_(t.created_at).local().format("h:mm A")]})}),Object(c.jsx)("div",{className:"c-col-2 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:t.email})}),Object(c.jsx)("div",{className:"c-col-3 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:t.first_name})}),Object(c.jsx)("div",{className:"c-col-4 c-cols",children:Object(c.jsx)("label",{className:"font-size-14",children:t.last_name})}),Object(c.jsx)("div",{className:"c-col-5 c-cols",children:e.renderAction(t)})]})},"user_".concat(i)))})),Object(c.jsx)("ul",{children:s})):Object(c.jsx)("div",{id:"infinite-no-result",children:Object(c.jsx)("label",{className:"font-size-14",children:"No Results Found"})})}},{key:"render",value:function(){var e=this.props.authUser;if(!e||!e.id)return null;if(!e.is_admin)return Object(c.jsx)(m.a,{to:"/"});var t=this.state,s=t.loading,i=t.search;return Object(c.jsxs)("div",{id:"app-pr-users-page",children:[Object(c.jsxs)("div",{id:"app-pr-users-page-buttons",children:[Object(c.jsx)("form",{action:"",method:"POST",id:"app-pr-users-page__csvForm",children:Object(c.jsx)("input",{type:"hidden",name:"action",value:""})}),Object(c.jsx)("a",{className:"btn btn-success btn-fluid less-small",onClick:this.clickExport,children:"Export Pre-Registration"})]}),Object(c.jsxs)("section",{id:"app-pr-users-section",className:"app-infinite-box",children:[Object(c.jsxs)("div",{className:"app-infinite-search-wrap",children:[Object(c.jsx)("label",{children:"Pre-Registration Data"}),Object(c.jsx)("input",{type:"text",value:i,onChange:this.handleSearch,placeholder:"Search..."})]}),Object(c.jsx)("div",{className:"infinite-content",children:Object(c.jsxs)("div",{className:"infinite-contentInner",children:[this.renderHeader(),Object(c.jsx)("div",{className:"infinite-body",id:"app-pr-users-sectionBody",children:s?Object(c.jsx)(v.f,{}):this.renderUsers()})]})})]})]})}}]),s}(b.Component);t.default=Object(f.b)((function(e){return{authUser:e.global.authUser,preRegisterTableStatus:e.table.preRegisterTableStatus}}))(k)}}]);