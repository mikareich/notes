(function(e){function t(t){for(var o,s,a=t[0],i=t[1],u=t[2],p=0,f=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},c=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),n("h1",[e._v("Notes")]),n("div",{staticClass:"action"},[n("button",{staticClass:"neomorphism",on:{click:function(t){e.addNote(),e.search=""}}},[e._v(" New note ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"neomorphism",attrs:{type:"text",placeholder:"Search note"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._l(e.notes,(function(t,o){return n("note",{directives:[{name:"show",rawName:"v-show",value:""===e.search||t.content.toLowerCase().includes(e.search.toLowerCase()),expression:"\n      search === '' ||\n        note.content.toLowerCase().includes(search.toLowerCase())\n    "}],key:o,attrs:{note:t},on:{delete:function(t){return e.notes.splice(o,1)},watch:function(t){return e.saveNotes()}}})})),0===e.notes.length?n("p",[e._v("You have no notes")]):n("p",[e._v("You have "+e._s(e.notes.length)+" notes")])],2)},c=[],s=(n("99af"),n("2909")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note neomorphism",class:{checked:e.note.checked}},[n("i",{staticClass:"material-icons",on:{click:function(t){e.note.checked=!e.note.checked,e.$emit("watch")}}},[e._v(e._s(e.note.checked?"check_box":"check_box_outline_blank"))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.note.content,expression:"note.content"}],staticClass:"content",attrs:{placeholder:"Edit note here"},domProps:{value:e.note.content},on:{keyup:function(t){return e.$emit("watch")},input:function(t){t.target.composing||e.$set(e.note,"content",t.target.value)}}}),n("i",{staticClass:"material-icons",on:{click:function(t){return e.$emit("delete")}}},[e._v("delete")])])},i=[],u={name:"Note",props:["note"]},l=u,p=(n("bf55"),n("2877")),f=Object(p["a"])(l,a,i,!1,null,"5f634c03",null),h=f.exports,d={name:"App",components:{Note:h},data:function(){return{notes:null,search:""}},methods:{addNote:function(){var e={id:this.notes.length||0,content:"",checked:!1};this.notes=[].concat(Object(s["a"])(this.notes),[e]),this.saveNotes()},saveNotes:function(){window.localStorage.setItem("notes",JSON.stringify(this.notes))}},watch:{notes:function(){this.saveNotes()}},created:function(){this.notes=JSON.parse(window.localStorage.getItem("notes"))||[]}},v=d,m=(n("034f"),Object(p["a"])(v,r,c,!1,null,null,null)),w=m.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,n){},a73c:function(e,t,n){},bf55:function(e,t,n){"use strict";var o=n("a73c"),r=n.n(o);r.a}});
//# sourceMappingURL=app.65d6ae06.js.map