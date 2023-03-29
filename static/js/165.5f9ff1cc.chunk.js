"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[165],{7165:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(2791),a=t(9434),i=t(5218),o=t(3634),u="NOT_FOUND";var c=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?c:r,i=t.maxSize,o=void 0===i?1:i,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:u},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return u}return{get:r,put:function(n,a){r(n)===u&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,l);function d(){var n=f.get(arguments);if(n===u){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return d.clearCache=function(){return f.clear()},d}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i,o=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,f=s.memoizeOptions,d=void 0===f?t:f,p=Array.isArray(d)?d:[d],m=l(r),v=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:v,dependencies:m,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var d=f(s),p=function(e){return e.contacts.contacts.items},m=function(e){return e.contacts.contacts.isLoading},v=function(e){return e.contacts.contacts.error},h=d([p,function(e){return e.filter.filter}],(function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e})),y=t(5349),x=t(4281),j="Form_container__WXj-7",b=t(184),g=function(){var e=(0,a.I0)(),n=(0,a.v9)(p);return(0,b.jsx)("div",{children:(0,b.jsx)("form",{onSubmit:function(t){t.preventDefault();var r=new FormData(t.target),a=t.target,u=Object.fromEntries(r),c=u.name,s=u.number;if(n.some((function(e){return e.name===c})))return i.ZP.error("".concat(c," is already in contacts"));e((0,o.uK)({name:c,number:s})),a.reset()},autoComplete:"off",children:(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)(y.Z,{label:"Name",variant:"outlined",type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,b.jsx)(y.Z,{label:"Number",variant:"outlined",type:"tel",name:"number",placeholder:"Number 000 00 00",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,b.jsx)(x.Z,{variant:"contained",size:"large",type:"submit",children:"Add new contact"})]})})})},_=t(470),C=function(){var e=(0,a.I0)();return(0,b.jsx)("div",{children:(0,b.jsx)(y.Z,{onChange:function(n){e((0,_.x)(n.target.value))},type:"text",label:"Enter name",variant:"outlined"})})},k="ContactsListItem_contact_list__jxD6b",w="ContactsListItem_contact_name__-PmII",N=function(e){var n=e.contacts,t=(0,a.I0)();return(0,b.jsx)("div",{children:n.length&&n.map((function(e){return(0,b.jsxs)("div",{className:k,children:[(0,b.jsxs)("div",{className:w,children:[(0,b.jsx)("b",{children:e.name}),":",e.number]}),(0,b.jsx)(x.Z,{variant:"contained",size:"small",type:"button",onClick:function(){return n=e.id,void t((0,o.GK)(n));var n},children:"Delete"})]},e.id)}))})},A=function(){var e=(0,a.v9)(h);return(0,b.jsx)("ul",{children:(0,b.jsx)(N,{contacts:e})})},z=t(9183),Z="Contacts_contacts__gVK0J",E="Contacts_contacts_title__GWkaZ",I=function(){var e=(0,a.I0)(),n=(0,a.v9)(m),t=(0,a.v9)(v),i=(0,a.v9)(p);return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,b.jsxs)("div",{className:Z,children:[(0,b.jsx)("h2",{className:E,children:"Phonebook"}),(0,b.jsx)(g,{}),n&&!t&&(0,b.jsx)(z.a,{}),i.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h2",{className:E,children:"Contacts"}),(0,b.jsx)(C,{}),(0,b.jsx)(A,{})]})]})}}}]);
//# sourceMappingURL=165.5f9ff1cc.chunk.js.map