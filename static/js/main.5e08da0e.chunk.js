(this.webpackJsonpdivisionteam=this.webpackJsonpdivisionteam||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(1),o=n.n(c),s=n(26),u=n.n(s),l=n(2),f=n(7),p=n(11),j=n(8),b=n(4),d=n.n(b),h=n(5),m=n(14),v=n.n(m),O="https://us-central1-seismic-sweep-318403.cloudfunctions.net/",x=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(O,"/getUserInfo/fetchUserAccountId?userId=").concat(t));case 2:if(n=e.sent,console.log(n.data),!n){e.next=8;break}return e.abrupt("return",n.data.userAccountId);case 8:throw new Error("Not Exist UserID");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(O,"/getUserInfo/fetchUserInfo?id=").concat(t));case 2:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data.userInfo);case 7:throw new Error("Not Exist UserInfo");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I={IRON:450,BRONZE:800,SILVER:1150,GOLD:1500,PLATINUM:1850,DIAMOND:2200,MASTER:2250,GRANDMASTER:2250,CHALLENGER:2250},w={IV:0,III:100,II:200,I:300},k=function(e){var t,n,r,a,i;return(t=e.wins,n=e.losses,10*(Math.round(t/(t+n)*100*10)/10-50))+(r=e.rank,a=e.tier,i=e.leaguePoints,I[a]+w[r]+i)},E=n(0),N=function(e){var t=e.match(/([a-z|A-z|0-9|\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]){1,}(\ub2d8\uc774 \ub85c\ube44\uc5d0 \ucc38\uac00\ud558\uc168\uc2b5\ub2c8\ub2e4.)/g),n=null===t||void 0===t?void 0:t.map((function(e){return e.replace("\ub2d8\uc774 \ub85c\ube44\uc5d0 \ucc38\uac00\ud558\uc168\uc2b5\ub2c8\ub2e4.","")}));return null===t?[e]:void 0!==n?n:[""]},L={tier:"SILVER",rank:"I",wins:1,losses:1,leaguePoints:0},P=Object(l.a)(Object(l.a)({userId:""},L),{},{position:"None",team:0,mmr:k(L)}),S=function(e){return e.map((function(e){if("RANKED_SOLO_5x5"===e.queueType){var t=e.tier,n=e.rank,r=e.wins,a=e.losses,i=e.leaguePoints;return{tier:t,rank:n,wins:r,losses:a,leaguePoints:i,team:0,mmr:k({tier:t,rank:n,wins:r,losses:a,leaguePoints:i})}}})).filter((function(e){if(e)return!0}))[0]},y=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(N(t).map(function(){var e=Object(h.a)(d.a.mark((function e(t){var r,a,i,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t);case 3:return r=e.sent,a=r.id,i=r.name,e.next=8,g(a);case 8:if(c=e.sent,o=Object(l.a)(Object(l.a)(Object(l.a)({},P),S(c)),{},{userId:i}),0!==n.filter((function(e){if(e.userId===i)return!0})).length){e.next=13;break}return e.abrupt("return",Object(l.a)({},o));case 13:e.next=25;break;case 15:e.prev=15,e.t0=e.catch(0),e.t1=e.t0.message,e.next="Not Exist UserID"===e.t1?20:"Not Exist UserInfo"===e.t1?22:24;break;case 20:return alert("".concat(t,"\ub294 \ucc3e\uc744 \uc218 \uc5c6\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4.")),e.abrupt("break",25);case 22:return alert("".concat(t,"\uc758 \ub7ad\ud06c\uc815\ubcf4\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),e.abrupt("break",25);case 24:alert("".concat(e.t0.message," \uc54c \uc218 \uc5c6\ub294 \uc5d0\ub7ec"));case 25:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()));case 2:return r=e.sent,a=r.filter((function(e){if(e)return!0})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(e){var t=e.userInfoList,n=e.setUserInfoList,r=o.a.useState(""),a=Object(f.a)(r,2),i=a[0],c=a[1],s=function(){var e=Object(h.a)(d.a.mark((function e(r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(i,t);case 2:a=e.sent,n([].concat(Object(j.a)(a),Object(j.a)(t)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)}}),Object(E.jsx)("button",{onClick:s,children:"\uac80\uc0c9"})]})},T=function(e,t){var n=e.filter((function(e){return 0===e.team})).sort((function(e,t){return t.mmr-e.mmr})),r=e.filter((function(e){if(1===e.team)return!0})).sort((function(e,t){return t.mmr-e.mmr})),a=e.filter((function(e){if(2===e.team)return!0})).sort((function(e,t){return t.mmr-e.mmr})),i=[];if(a[0]&&i.push(a[0]),r[0]&&i.push(r[0]),n[0]&&i.push.apply(i,Object(j.a)(n)),i.length<2)return!0;var c=i.splice(0,2),o=t&1<<c[0].idx,s=t&1<<c[1].idx;return(!o||!s)&&(0!==o||0!==s)},U=function(e,t){var n=e.map((function(e,t){return Object(l.a)({idx:t},e)})),r=n.filter((function(e){if("Top"===e.position)return!0})),a=n.filter((function(e){if("Junggle"===e.position)return!0})),i=n.filter((function(e){if("Mid"===e.position)return!0})),c=n.filter((function(e){if("ADC"===e.position)return!0})),o=n.filter((function(e){if("Support"===e.position)return!0}));return!(r.length>=2&&!T(r,t))&&(!(a.length>=2&&!T(a,t))&&(!(i.length>=2&&!T(i,t))&&(!(c.length>=2&&!T(c,t))&&!(o.length>=2&&!T(o,t)))))},M=function(e,t,n){return(e&t)!==t||(e&n)!==n},C=function(e){var t=function(e){for(var t=-1,n=-1,r=e.length,a=0,i=0,c=0;c<r;c++)1===e[c].team?a|=1<<c:2===e[c].team&&(i|=1<<c);console.log("team >>>",a,i);for(var o=0;o<1<<e.length;o++){for(var s=0,u=0,l=0,f=0;f<e.length;f++)1<<f&o?(l+=1,s+=e[f].mmr):u+=e[f].mmr;if(e.length/2===l&&U(e,o)&&!M(o,a,i)){var p=s-u;(-1===n||Math.abs(n)>Math.abs(p))&&(console.log(o),n=p,t=o)}}var j=e.filter((function(e,n){return!!(t&1<<n)})),b=e.filter((function(e,n){return!(t&1<<n)}));return n>=0?{redTeam:j,blueTeam:b}:{redTeam:b,blueTeam:j}}(e.userInfoList),n=t.redTeam,r=t.blueTeam;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{children:["\ub808\ub4dc\ud300",n.map((function(e,t){return Object(E.jsx)("p",{children:e.userId},t)}))]}),Object(E.jsxs)("div",{children:["\ube14\ub8e8\ud300",r.map((function(e,t){return Object(E.jsx)("p",{children:e.userId},t)}))]})]})},D=function(e){if(!function(e){var t=e.filter((function(e){if(1===e.team&&"None"!==e.position)return!0})).map((function(e){return e.position})),n=new Set(t);if(t.length!==n.size)return!1;var r=e.filter((function(e){if(2===e.team&&"None"!==e.position)return!0})).map((function(e){return e.position})),a=new Set(r);return r.length===a.size}(e))throw new Error("overlapPosition");if(!function(e){return!(e.filter((function(e){if(1===e.team)return!0})).length>e.length/2)&&!(e.filter((function(e){if(2===e.team)return!0})).length>e.length/2)}(e))throw new Error("excessPersonnel")},R=n(12),z=R.a.div(r||(r=Object(p.a)(["\n  width: 100%;\n  border: 1px solid red;\n  text-align: center;\n"]))),J=R.a.div(a||(a=Object(p.a)(["\n  \n"]))),F=R.a.p(i||(i=Object(p.a)(["\n  display: inline;\n  \n"])));var G=function(){var e=o.a.useState([]),t=Object(f.a)(e,2),n=t[0],r=t[1],a=o.a.useState(!1),i=Object(f.a)(a,2),c=i[0],s=i[1],u=function(e){var t=e.target.value,a=n.map((function(n){return n.userId===e.target.name?Object(l.a)(Object(l.a)({},n),{},{position:t}):Object(l.a)({},n)}));try{D(a)}catch(i){switch(i.message){case"overlapPosition":alert("\ud55c \ud300\uc5d0 \uc911\ubcf5\ub41c \ub77c\uc778\uc774 \uc788\uc2b5\ub2c8\ub2e4.");break;case"excessPersonnel":alert("\ud55c \ud300\uc5d0 \ub108\ubb34 \ub9ce\uc740 \uc778\uc6d0\uc774 \uc788\uc2b5\ub2c8\ub2e4.");break;default:alert("\uc54c \uc218 \uc5c6\ub294 \uc624\ub958")}}r(a)},p=function(e){var t=parseInt(e.target.value),a=n.map((function(n){return n.userId===e.target.name?Object(l.a)(Object(l.a)({},n),{},{team:t}):Object(l.a)({},n)}));try{D(a)}catch(i){switch(i.message){case"overlapPosition":alert("\ud55c \ud300\uc5d0 \uc911\ubcf5\ub41c \ub77c\uc778\uc774 \uc788\uc2b5\ub2c8\ub2e4.");break;case"excessPersonnel":alert("\ud55c \ud300\uc5d0 \ub108\ubb34 \ub9ce\uc740 \uc778\uc6d0\uc774 \uc788\uc2b5\ub2c8\ub2e4.");break;default:alert("\uc54c \uc218 \uc5c6\ub294 \uc624\ub958")}}r(a)};return o.a.useEffect((function(){console.log(n)}),[n]),Object(E.jsx)(z,{children:!1===c?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(A,{userInfoList:n,setUserInfoList:r}),null===n||void 0===n?void 0:n.map((function(e,t){return Object(E.jsxs)(J,{children:[Object(E.jsx)(F,{children:e.userId}),Object(E.jsxs)("select",{value:e.position,name:e.userId,onChange:u,children:[Object(E.jsx)("option",{value:"None",children:"\uc5c6\uc74c"}),Object(E.jsx)("option",{value:"Top",children:"\ud0d1"}),Object(E.jsx)("option",{value:"Junggle",children:"\uc815\uae00"}),Object(E.jsx)("option",{value:"Mid",children:"\ubbf8\ub4dc"}),Object(E.jsx)("option",{value:"ADC",children:"\uc6d0\ub51c"}),Object(E.jsx)("option",{value:"Support",children:"\uc11c\ud3ff"})]}),Object(E.jsxs)("select",{value:e.team,name:e.userId,onChange:p,children:[Object(E.jsx)("option",{value:"0",children:"\uc0c1\uad00\uc5c6\uc74c"}),Object(E.jsx)("option",{value:"1",children:"1\ud300"}),Object(E.jsx)("option",{value:"2",children:"2\ud300"})]})]},t)})),Object(E.jsx)("button",{onClick:function(e){n.length%2!==0?alert("\uc778\uc6d0\uc744 \uc9dd\uc218\ub85c \ub9de\ucdb0\uc8fc\uc138\uc694"):s(!0)},children:"\ud300 \ub098\ub204\uae30"})]}):Object(E.jsxs)("div",{children:[Object(E.jsx)(C,{userInfoList:n}),Object(E.jsx)("button",{onClick:function(e){s(!1)},children:"\uc778\uc6d0 \uc218\uc815"})]})})};u.a.render(Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(G,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.5e08da0e.chunk.js.map