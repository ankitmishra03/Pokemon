(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(13),o=c.n(a),i=(c(19),c(3)),j=(c(20),c(14)),r=c.n(j),h=c(0);var d=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),o=Object(i.a)(a,2),j=o[0],d=o[1],p=Object(n.useState)({name:"",species:"",img:"",hp:"",attack:"",defence:"",type:""}),l=Object(i.a)(p,2),b=l[0],m=l[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"TitleSection",children:[Object(h.jsx)("h1",{children:"Pokemon Stats"}),Object(h.jsx)("input",{type:"text",onChange:function(e){s(e.target.value.toLowerCase())}}),Object(h.jsx)("button",{onClick:function(){console.log(c.toLowerCase()),r.a.get("https://pokeapi.co/api/v2/pokemon/".concat(c)).then((function(e){console.log(e),m({name:c,species:e.data.species.name,img:e.data.sprites.other.dream_world.front_default,hp:e.data.stats[0].base_stat,attack:e.data.stats[1].base_stat,defence:e.data.stats[2].base_stat,type:e.data.types[0].type.name}),d(!0)}))},children:"Search Pokemon"}),Object(h.jsx)("div",{className:"DisplaySection",children:j?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:b.name}),Object(h.jsx)("img",{src:b.img,alt:"pokemon"}),Object(h.jsxs)("h3",{children:["Species : ",b.species]}),Object(h.jsxs)("h3",{children:["Type : ",b.type]}),Object(h.jsxs)("h4",{children:["Hp: ",b.hp]}),Object(h.jsxs)("h4",{children:["Attack: ",b.attack]}),Object(h.jsxs)("h4",{children:["Defence: ",b.defence]})]}):Object(h.jsx)("h1",{children:"Please choose a Pokemon"})})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.aaa18187.chunk.js.map