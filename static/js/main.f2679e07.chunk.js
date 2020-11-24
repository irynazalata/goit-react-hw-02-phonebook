(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{11:function(t,e,n){t.exports={title:"Title_title__3omtp"}},19:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(10),s=n.n(i),o=n(13),l=n(4),u=n(5),m=n(7),b=n(6),d=n(11),h=n.n(d),j=function(t){var e=t.title;return Object(a.jsx)("h2",{className:h.a.title,children:e})},f=n(12),p=n(2),x=n.n(p),_=n(21),C=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.addContact)({id:Object(_.a)(),name:t.state.name,number:t.state.number}),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:x.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:x.a.label,children:["Name",Object(a.jsx)("input",{type:"text",value:e,name:"name",onChange:this.handleChange,placeholder:"Enter your full name",className:x.a.input,required:!0})]}),Object(a.jsxs)("label",{className:x.a.label,children:["Number",Object(a.jsx)("input",{type:"text",value:n,name:"number",onChange:this.handleChange,placeholder:"xxx-xx-xx",className:x.a.input,required:!0})]}),Object(a.jsx)("input",{type:"submit",value:"Add contact",className:x.a.button})]})}}]),n}(c.Component),O=n(3),v=n.n(O),g=function(t){var e=t.searchContact,n=t.deleteContact;return Object(a.jsx)("ul",{className:v.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:v.a.item,children:[Object(a.jsxs)("p",{className:v.a.contact,children:[" ","- ",c,": ",r]}),Object(a.jsx)("button",{type:"button",className:v.a.btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},N=n(9),y=n.n(N),S=function(t){var e=t.filter,n=t.searchContact;return Object(a.jsxs)("label",{className:y.a.label,children:[" ","Find contacts by name",Object(a.jsx)("input",{className:y.a.input,onChange:function(t){return n(t.target.value)},value:e})]})},w=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleNewContact=function(e){var n=t.state.contacts;n.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):(n=[].concat(Object(o.a)(n),[e]),t.setState({contacts:n}))},t.handleChange=function(e){var n=e.target.value;t.setState({title:n})},t.handleFilter=function(e){t.setState({filter:e})},t.handleContactSearch=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{title:"phonebook"}),Object(a.jsx)(C,{addContact:this.handleNewContact}),Object(a.jsx)(j,{title:"contacts"}),Object(a.jsx)(S,{searchContact:this.handleFilter,value:t}),Object(a.jsx)(g,{searchContact:this.handleContactSearch(),deleteContact:this.deleteContact})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"Form_form__1qUH1",label:"Form_label__2dork",input:"Form_input__3Thsw",button:"Form_button__173RW"}},3:function(t,e,n){t.exports={list:"ContactsList_list__1ixdM",item:"ContactsList_item__2Sbfm",contact:"ContactsList_contact__2KrR3",btn:"ContactsList_btn__1DMr7"}},9:function(t,e,n){t.exports={label:"Filter_label__1gx2v",input:"Filter_input__1HpxU"}}},[[19,1,2]]]);
//# sourceMappingURL=main.f2679e07.chunk.js.map