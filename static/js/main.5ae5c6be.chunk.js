(window["webpackJsonpcharacter-codex"]=window["webpackJsonpcharacter-codex"]||[]).push([[0],{103:function(e){e.exports=JSON.parse('{"sheetId":"1Jz6WaBLOh2FNBWtILGNezF60Jm0s97j_CcY-lLtNm2A","apiKey":"AIzaSyC6SAtignePmrTQUkdc2c1iM9zlftpR0hg"}')},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c);a(94),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(19),i=(a(95),a(26)),s=a(17),u=a(41),p=a(42),m=a(52),f=a(20),d=a(2),h=a(145),y=a(148),g=a(149),v=a(123),b=a(151),E=a(32),O=a(152),j=a(153),w=a(154),k=a(155),x=a(165),C=a(156),S=a(157),P=a(158),N=a(159),D=a(160),I=a(150),M=a(70),L=a.n(M),z=a(77),A=a(144),J=Object(z.a)({palette:{type:"dark",primary:A.a}}),B=a(73),W=a.n(B);function F(){var e=Object(l.a)(["\n    && {\n        > .MuiCardHeader-action {\n            margin: 0px;\n            align-self: center;\n        }\n    }\n"]);return F=function(){return e},e}function G(){var e=Object(l.a)(["\n    display: grid\n    grid-template-columns: 20px 1fr 20px;\n    grid-column-gap: 5px;\n    height: 20px;\n"]);return G=function(){return e},e}function H(){var e=Object(l.a)(["\n    &.MuiExpansionPanel-root.Mui-expanded {\n        margin-top: 0px;\n    }\n\n    &.MuiExpansionPanel-root.Mui-expanded::before {\n        opacity: 1\n    }\n"]);return H=function(){return e},e}function K(){var e=Object(l.a)(["\n    grid-column-start: ",";\n    grid-row-start: 2;\n    display: grid;\n    grid-template-rows: 50px 2fr 1fr 100px;\n"]);return K=function(){return e},e}var T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={cardSide:"front"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{item:!0,xs:12,sm:6,lg:3},r.a.createElement(y.a,{elevation:2,style:{backgroundColor:"#333",minHeight:"400px"}},r.a.createElement(y.a,{elevation:3},r.a.createElement(Q,{style:{padding:J.spacing(2,3)},avatar:r.a.createElement(g.a,{"aria-label":"theme"},this.props.type&&this.props.type.substring(0,1)),action:r.a.createElement(v.a,{"aria-label":"edit",size:"small"},r.a.createElement(I.a,null)),title:this.props.name,subheader:this.props.type})),r.a.createElement(U,null,r.a.createElement(b.a,{expandIcon:r.a.createElement(L.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(E.a,{style:{fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.7)"}},"Theme Summary")),r.a.createElement(O.a,null,r.a.createElement("div",null,r.a.createElement(E.a,{variant:"subtitle2"},"Mystery"),r.a.createElement(E.a,{variant:"body2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"subtitle2"},"Identity"),r.a.createElement(E.a,{variant:"body2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")))),r.a.createElement(j.a,{style:{margin:J.spacing(1,0),height:"100%"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"calc(100% - 152px)"}},r.a.createElement(w.a,{dense:!0,style:{flex:"1 1 auto"}},this.props.powers&&Object.keys(this.props.powers).map(function(t){if(e.props.weaknesses&&e.props.powers[t].length>0)return r.a.createElement(R,{key:t,tag:e.props.powers&&e.props.powers[t],letter:t,onClick:function(){}})})),r.a.createElement(k.a,{variant:"middle",style:{margin:J.spacing(1,0)}}),r.a.createElement(w.a,{dense:!0},this.props.weaknesses&&Object.keys(this.props.weaknesses).map(function(t){if(e.props.weaknesses&&e.props.weaknesses[t].length>0)return r.a.createElement(R,{key:t,tag:e.props.weaknesses&&e.props.weaknesses[t],letter:t})})),r.a.createElement(E.a,null,this.props.improvements)))))}}]),t}(n.Component),U=(Object(f.a)(function(e){var t=e.elevation,a=Object(d.a)(e,["elevation"]);return r.a.createElement(y.a,Object.assign({elevation:t},a))})(K(),function(e){return e.column+1}),Object(f.a)(x.a)(H())),R=function(e){return r.a.createElement(C.a,null,r.a.createElement(S.a,{style:{color:"#757575"}},r.a.createElement("span",null,e.letter)),r.a.createElement(P.a,{primary:e.tag}),e.onClick&&r.a.createElement(N.a,null,r.a.createElement(W.a,null)))},Q=(f.a.div(G()),Object(f.a)(D.a)(F()));function Y(){var e=Object(l.a)(["\n    padding: 8px;\n"]);return Y=function(){return e},e}var $=function(e){return r.a.createElement(_,null,r.a.createElement(h.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"stretch",spacing:2},e.character.themes&&Object.values(e.character.themes).map(function(e,t){return r.a.createElement(T,{column:t+1,key:t,name:e.name,type:e.type,powers:e.powers,weaknesses:e.weaknesses})})))},_=f.a.div(Y()),q=a(100),V=a(103),X="https://sheets.googleapis.com/v4/spreadsheets/".concat(V.sheetId,"/values:batchGet?ranges=Data!G1:O92&majorDimension=COLUMNS&key=").concat(V.apiKey);function Z(){var e=Object(l.a)(["\n    /* grid-row-start: 1;\n    grid-column-start: 3;\n    grid-column-end: 5; */\n    align-self: center;\n    justify-self: center;\n"]);return Z=function(){return e},e}var ee=a(104),te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=function(e){return t.setState({characters:e})},fetch(X).then(function(e){return e.json()}).then(function(t){for(var a=t.valueRanges[0].values,n=[],r=1;r<a.length;r++){for(var c={},o=0;o<a[r].length;o++)c["".concat(a[0][o])]=a[r][o];n.push(c)}var l=n.map(function(e){return q(e)});e(l)},function(e){console.log("error: ",e)})}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",null);if(this.props.playerName){if(this.state.characters){var a,n=ee.findIndex(this.state.characters,function(t){return t.player.toLowerCase()===(e.props.playerName&&e.props.playerName.toLowerCase())});if(a=this.state.characters[n])t=r.a.createElement($,{character:a});else{var c=this.props.playerName,o=c.charAt(0).toUpperCase()+c.slice(1);t=r.a.createElement(ae,null,r.a.createElement(j.a,null,"Player '",o,"' not found."))}}}else t=r.a.createElement(ae,null,r.a.createElement(j.a,null,"Please provide a player name"));return r.a.createElement(r.a.Fragment,null,t)}}]),t}(n.Component),ae=Object(f.a)(y.a)(Z()),ne=a(74),re=a(31),ce=a(76),oe=a.n(ce),le=a(22),ie=a(80),se=a(163),ue=a(161),pe=a(162),me=a(164);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function de(){var e,t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(ie.a)(t,2),n=a[0],c=a[1],o=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach(function(t){Object(le.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},n,Object(le.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(ue.a,{position:"static",color:"primary"},r.a.createElement(pe.a,null,r.a.createElement(N.a,{onClick:o("left",!0)},r.a.createElement(se.a,null)),r.a.createElement(me.a,{open:n.left,onClose:o("left",!1)},(e="left",r.a.createElement("div",{role:"presentation",onClick:o(e,!1),onKeyDown:o(e,!1)}))))))}var he=a(82);function ye(){var e=Object(l.a)(["\n    /* background-color: #121212; */\n"]);return ye=function(){return e},e}function ge(e){var t=a(107).parse(e.location.search);return r.a.createElement(te,{playerName:t.name})}f.a.div(ye());var ve=function(){return r.a.createElement(ne.a,{basename:"/"},r.a.createElement(oe.a,{theme:J},r.a.createElement(he.a,{elevation:0,style:{backgroundColor:"#212121",minHeight:"100vh"}},r.a.createElement(de,null),r.a.createElement(re.a,{path:"/character-codex/",render:function(e){return r.a.createElement(ge,e)}}))))};o.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){e.exports=a(119)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.5ae5c6be.chunk.js.map