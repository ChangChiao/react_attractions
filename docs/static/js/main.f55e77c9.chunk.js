(this["webpackJsonpreact-attractions"]=this["webpackJsonpreact-attractions"]||[]).push([[0],{100:function(e,t){},101:function(e,t){},204:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var a,c,i,r,s,o,l,d=n(0),j=n(12),u=n.n(j),b=n(10),p=n(92),h=n(57),x=n(21),O=n(25),f=n(93),m=n.n(f),v=n(14),g=Object(O.b)({name:"todo",initialState:{todolist:[{id:1,name:"first todo on redux"},{id:2,name:"second todo in list"}]},reducers:{addTodo:function(e,t){e.todolist.push(t.payload)}}}),y=(g.actions.addTodo,g.reducer),w=Object(O.b)({name:"city",initialState:{cityList:[]},reducers:{addCity:function(e,t){e.cityList=t.payload}}}).reducer,N=Object(O.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),k=N.actions,C=(k.increment,k.decrement,k.incrementByAmount,N.reducer),T=Object(O.b)({name:"search",initialState:{searchData:{}},reducers:{setSearchData:function(e,t){e.searchData=t.payload}}}),S=T.actions.setSearchData,P=T.reducer,D=n(43),E={key:"root",storage:m.a},A=Object(v.c)({city:w,todo:y,counter:C,search:P}),_=Object(h.a)(E,A),L=Object(O.a)({reducer:_,middleware:[D.a],whitelist:["cityList","searchData"]}),I=n(7),M=n(8),R=n(11),z=[{value:"activity",label:"\u7bc0\u6176\u6d3b\u52d5"},{value:"spot",label:"\u63a2\u7d22\u666f\u9ede"},{value:"restaurant",label:"\u54c1\u5690\u7f8e\u98df"}],K=[{name:"\u63a2\u7d22\u666f\u9ede",path:"spot"},{name:"\u7bc0\u6176\u6d3b\u52d5",path:"activity"},{name:"\u54c1\u5690\u7f8e\u98df",path:"restaurant"}],Y=[{label:"\u81fa\u5317\u5e02",value:"Taipei"},{label:"\u65b0\u5317\u5e02",value:"NewTaipei"},{label:"\u6843\u5712\u5e02",value:"Taoyuan"},{label:"\u81fa\u4e2d\u5e02",value:"Taichung"},{label:"\u81fa\u5357\u5e02",value:"Tainan"},{label:"\u9ad8\u96c4\u5e02",value:"Kaohsiung"},{label:"\u57fa\u9686\u5e02",value:"Keelung"},{label:"\u65b0\u7af9\u5e02",value:"Hsinchu"},{label:"\u65b0\u7af9\u7e23",value:"HsinchuCounty"},{label:"\u82d7\u6817\u7e23",value:"MiaoliCounty"},{label:"\u5f70\u5316\u7e23",value:"ChanghuaCounty"},{label:"\u5357\u6295\u7e23",value:"NantouCounty"},{label:"\u96f2\u6797\u7e23",value:"YunlinCounty"},{label:"\u5609\u7fa9\u7e23",value:"ChiayiCounty"},{label:"\u5609\u7fa9\u5e02",value:"Chiayi"},{label:"\u5c4f\u6771\u7e23",value:"PingtungCounty"},{label:"\u5b9c\u862d\u7e23",value:"YilanCounty"},{label:"\u82b1\u84ee\u7e23",value:"HualienCounty"},{label:"\u81fa\u6771\u7e23",value:"TaitungCounty"},{label:"\u91d1\u9580\u7e23",value:"KinmenCounty"},{label:"\u6f8e\u6e56\u7e23",value:"PenghuCounty"},{label:"\u9023\u6c5f\u7e23",value:"LienchiangCounty"}],F=n(1),H=Object(M.a)(a||(a=Object(I.a)(["\n  color: var(--green);\n  letter-spacing: 5px;\n  font-size: 20px;\n  cursor: pointer;\n"]))),B=M.b.div(c||(c=Object(I.a)(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 50px;\n  border-bottom: 1px solid #ccc;\n  @media (max-width: 980px) {\n    display: none;\n  }\n  h1 {\n    ","\n  }\n"])),H),U=M.b.ul(i||(i=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 980px) {\n    display: none;\n  }\n  li {\n    margin: 0 10px;\n    cursor: pointer;\n  }\n"]))),V=M.b.header(r||(r=Object(I.a)(["\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  position: relative;\n  line-height: 50px;\n  display: none;\n  h1 {\n    ","\n  }\n  @media (max-width: 980px) {\n    display: block;\n  }\n"])),H),W=M.b.ul(s||(s=Object(I.a)(["\n  width: 100%;\n  height: calc(100vh - 50px);\n  position: fixed;\n  top: 50px;\n  z-index: 100;\n  background: var(--green);\n  li {\n    color: #fff;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    border-bottom: 1px solid var(--line);\n  }\n"]))),$=M.b.div(o||(o=Object(I.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  background: var(--green);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  &:hover {\n    cursor: pointer;\n  }\n  ","\n\n  .line {\n    width: 30px;\n    height: 3px;\n    background-color: #ecf0f1;\n    display: block;\n    margin: 3px 0;\n    transition: all 0.3s ease-in-out;\n  }\n"])),(function(e){return e.active&&Object(M.a)(l||(l=Object(I.a)(["\n      .line {\n        &:nth-child(1) {\n          transform: translateY(8px) rotate(45deg);\n        }\n        &:nth-child(2) {\n          opacity: 0;\n        }\n        &:nth-child(3) {\n          transform: translateY(-10px) rotate(-45deg);\n        }\n      }\n    "])))}));var G,q=function(){var e=Object(d.useState)(!1),t=Object(R.a)(e,2),n=t[0],a=t[1],c=Object(b.f)(),i=Object(x.b)(),r=function(e){i(S({type:e})),a(!1),c.push("/search")},s=function(){c.push("/")};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(B,{children:[Object(F.jsx)("h1",{onClick:s,children:"\u53f0\u7063\u8d70\u8d70 \u2022 Tai Walk"}),Object(F.jsx)(U,{children:K.map((function(e){return Object(F.jsx)("li",{onClick:function(){r(e.path)},children:e.name},e.name)}))})]}),Object(F.jsxs)(V,{children:[Object(F.jsx)("h1",{onClick:s,children:"\u53f0\u7063\u8d70\u8d70 \u2022 Tai Walk"}),Object(F.jsxs)($,{active:n,onClick:function(){a((function(e){return!e}))},children:[Object(F.jsx)("span",{class:"line"}),Object(F.jsx)("span",{class:"line"}),Object(F.jsx)("span",{class:"line"})]})]}),n&&Object(F.jsx)(W,{children:K.map((function(e){return Object(F.jsx)("li",{onClick:function(){r(e.path)},children:e.name},"m"+e.name)}))})]})},J=M.b.footer(G||(G=Object(I.a)(["\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  background-color: var(--green);\n  color: #fff;\n"])));var Q,X=function(){return Object(F.jsx)(J,{children:"The F2E 3rd \u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd"})},Z=M.b.div(Q||(Q=Object(I.a)(["\n  /* overflow-y: scroll; */\n"])));var ee=function(e){return Object(F.jsxs)(Z,{children:[Object(F.jsx)(q,{}),Object(F.jsx)("div",{className:"wrapper",children:e.children}),Object(F.jsx)(X,{})]})},te=n(19),ne=n.n(te),ae=n(9),ce=n(30),ie=(n(124),n(97));var re,se=function(){return Object(F.jsx)(ie.Carousel,Object(ae.a)(Object(ae.a)({},{dots:!0,infinite:!0,autoPlay:!0,speed:500,showStatus:!1}),{},{children:["\u5357\u6295 \uff5c \u6e05\u5883\u8fb2\u5834","\u82b1\u84ee \uff5c \u82b1\u6771\u7e31\u8c37","\u9ad8\u96c4 \uff5c \u4e09\u9cf3\u5bae","\u53f0\u5317 \uff5c 101","\u65b0\u5317 \uff5c \u91ce\u67f3"].map((function(e,t){return Object(F.jsx)("div",{className:"carousel-item",style:{backgroundImage:"url(".concat("https://changchiao.github.io/react_attractions","/image/banner/").concat(t,".jpg)")},children:Object(F.jsx)("p",{className:"carousel-title",children:e})},e)}))}))},oe=n(107),le=M.b.div(re||(re=Object(I.a)(["\n  width: 300px;\n  margin-right: 5px;\n  @media (max-width: 980px) {\n    width: 100%;\n  }\n"]))),de=function(e){return Object(ae.a)(Object(ae.a)({},e),{},{borderRadius:8,colors:Object(ae.a)({},e.colors)})},je={option:function(e,t){return Object(ae.a)(Object(ae.a)({},e),{},{borderBottom:"1px dotted #ccc",color:t.isSelected?"#fff":"#666",backgroundColor:t.isSelected?"#6E7D60":"#fff",padding:10})},control:function(e){return Object(ae.a)(Object(ae.a)({},e),{},{border:"1px solid #ddd",color:"#ccc"})},singleValue:function(e,t){return Object(ae.a)(Object(ae.a)({},e),{},{borderRadius:"4px",opacity:t.isDisabled?.5:1})}};var ue,be=function(e){return Object(F.jsx)(le,{children:Object(F.jsx)(oe.a,{defaultValue:e.defaultValue,theme:de,styles:je,onChange:e.onChange,options:e.options})})},pe=n(15),he=n(13),xe=M.b.div(ue||(ue=Object(I.a)(["\n  text-align: left;\n  padding: 5% 10%;\n  display: flex;\n  justify-content: center;\n  @media (max-width: 980px) {\n    display: block;\n    text-align: center;\n    padding: 5% 0;\n  }\n  .area {\n    width: 40%;\n    @media (max-width: 980px) {\n      width: 100%;\n    }\n  }\n  .main-title {\n    font-size: 36px;\n    line-height: 50px;\n  }\n  .sub-title {\n    font-size: 16px;\n    padding: 20px 0;\n    color: #646464;\n    svg {\n      color: var(--green_light);\n      margin: 0 5px;\n    }\n    span {\n      color: #646464;\n    }\n  }\n  .search-input {\n    width: 300px;\n    margin-top: 10px;\n    @media (max-width: 980px) {\n      width: 100%;\n    }\n  }\n  .search-btn {\n    width: 300px;\n    height: 40px;\n    margin-top: 10px;\n    letter-spacing: 5px;\n    display: block;\n    cursor: pointer;\n    @media (max-width: 980px) {\n      width: 100%;\n    }\n    svg {\n      margin-right: 5px;\n      cursor: pointer;\n    }\n  }\n"])));var Oe,fe=function(){var e=Object(x.b)(),t=Object(b.f)(),n=Object(d.useState)(""),a=Object(R.a)(n,2),c=a[0],i=a[1],r=Object(d.useState)(z[1]),s=Object(R.a)(r,2),o=s[0],l=s[1];return Object(F.jsxs)(xe,{children:[Object(F.jsxs)("div",{className:"area",children:[Object(F.jsx)("p",{className:"main-title",children:"\u63a2\u7d22\u53f0\u7063\u4e4b\u7f8e"}),Object(F.jsx)("p",{className:"main-title",children:"\u8b93\u6211\u5011\u66f4\u89aa\u8fd1\u9019\u7247\u571f\u5730"}),Object(F.jsxs)("p",{className:"sub-title",children:[Object(F.jsx)(pe.a,{className:"mark",icon:he.c}),"\u53f0\u7063\u65c5\u904a\u666f\u9ede\u5c0e\u89bd ",Object(F.jsx)("span",{children:"Taiwan Travel Guide"})]})]}),Object(F.jsxs)("div",{className:"area",children:[Object(F.jsx)(be,{defaultValue:o,onChange:l,options:z}),Object(F.jsx)("input",{className:"search-input",placeholder:"\u4f60\u60f3\u53bb\u54ea\u88e1\uff1f\u8acb\u8f38\u5165\u95dc\u9375\u5b57",value:c,onChange:function(e){i(e.target.value)}}),Object(F.jsxs)("button",{className:"search-btn",onClick:function(){var n={keyword:c,type:null===o||void 0===o?void 0:o.value};e(S(n)),t.push("/search")},children:[Object(F.jsx)(pe.a,{className:"mark",icon:he.d}),"\u641c\u5c0b"]})]})]})},me=n(45),ve=n(98),ge=(Object(ve.a)({forceRefresh:!0}),function(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,c=t.getDate();return"".concat(n,"/").concat(a,"/").concat(c)}),ye=M.b.div(Oe||(Oe=Object(I.a)(["\n  width: 49%;\n  cursor: pointer;\n  display: flex;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  margin-top: 10px;\n  background-color: var(--gray);\n  transition-duration: 0.3s;\n  height: 120px;\n  @media (max-width: 980px) {\n    width: 100%;\n  }\n  &:hover {\n    .cover {\n      img {\n        transform: scale(1.1);\n      }\n    }\n  }\n  .cover {\n    width: 150px;\n    overflow: hidden;\n    img {\n      transition-duration: 0.3s;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n  .text {\n    flex: 1;\n    padding: 10px 14px;\n    position: relative;\n  }\n  .bottom-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    width: 90%;\n    bottom: 10px;\n  }\n"])));var we=function(e){var t=e.data,n=Object(b.f)();return Object(F.jsxs)(ye,{onClick:function(){n.push({pathname:"/intro",state:t})},children:[Object(F.jsx)("div",{className:"cover",children:Object(F.jsx)("img",{src:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.PictureUrl1;return t||"https://changchiao.github.io/react_attractions/image/default/act.jpg"}(t.Picture)})}),Object(F.jsxs)("div",{className:"text",children:[Object(F.jsx)("p",{className:"date",children:"".concat(ge(t.StartTime),"-").concat(ge(t.EndTime))}),Object(F.jsx)("p",{className:"item-title",children:t.Name}),Object(F.jsxs)("p",{className:"bottom-info",children:[Object(F.jsxs)("span",{className:"location",children:[Object(F.jsx)(pe.a,{className:"mark",icon:he.c}),"\u5357\u6295\u7e23 ",t.Address]}),Object(F.jsxs)("span",{className:"intro",children:["\u8a73\u7d30\u4ecb\u7d39",Object(F.jsx)(pe.a,{className:"mark",icon:he.a})]})]})]})]})},Ne=n(108),ke=n(99),Ce=n.n(ke).a.create({headers:function(){var e=(new Date).toGMTString(),t=new Ne.a("SHA-1","TEXT");t.setHMACKey("daVxLDO01nPgTTwhQKVBmY-pjeQ","TEXT"),t.update("x-date: "+e);var n=t.getHMAC("B64");return{Authorization:'hmac username="'.concat("b65665fcca144956a79d25bb3edc7b34",'", algorithm="hmac-sha1", headers="x-date", signature="').concat(n,'"'),"X-Date":e,"Content-Type":"application/x-www-form-urlencoded"}}()});Ce.interceptors.request.use((function(e){var t=e.params;return Object.keys(t).map((function(e){t[e]||delete t[e]})),e}),(function(e){return e})),Ce.interceptors.response.use((function(e){return e.data}),(function(e){var t=e.response.status;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";e&&("error"===t&&me.b.error(e),"success"===t&&me.b.success(e))}("error--".concat(t),"error"),Promise.reject(e)}));var Te,Se=Ce,Pe=function(e){var t=e.city,n=void 0===t?"":t;return delete e.city,{cityPath:n,data:e}},De=function(e){var t=Pe(e),n=t.cityPath,a=t.data;return console.log("cityPath",n),Se.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant"+"/".concat(n),{params:Object(ae.a)({},a)})},Ee=function(e){var t=Pe(e),n=t.cityPath,a=t.data;return Se.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot"+"/".concat(n),{params:Object(ae.a)({},a)})},Ae=function(e){var t=Pe(e),n=t.cityPath,a=t.data;return Se.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity"+"/".concat(n),{params:Object(ae.a)({},a)})},_e=M.b.div(Te||(Te=Object(I.a)(["\n  margin-top: 30px;\n  .title-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    svg {\n      margin-left: 5px;\n    }\n  }\n  .list {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    margin-top: 10px;\n    @media (max-width: 980px) {\n      display: block;\n    }\n  }\n"])));var Le,Ie=function(){var e=Object(d.useState)([]),t=Object(R.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(ce.a)(ne.a.mark((function e(){var t,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={$top:4,$orderBy:"EndTime desc"},e.next=3,Ae(t);case 3:n=e.sent,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){c()}),[]),Object(F.jsxs)(_e,{children:[Object(F.jsxs)("div",{className:"title-bar",children:[Object(F.jsx)("h3",{class:"title",children:"\u8fd1\u671f\u6d3b\u52d5"}),Object(F.jsxs)("span",{class:"more",children:["\u67e5\u770b\u66f4\u591a\u6d3b\u52d5",Object(F.jsx)(pe.a,{className:"mark",icon:he.a})]})]}),Object(F.jsx)("div",{className:"list",children:n.map((function(e){return Object(F.jsx)(we,{data:Object(ae.a)(Object(ae.a)({},e),{},{type:"activity"})},e.ID)}))})]})},Me=M.b.div(Le||(Le=Object(I.a)(["\n  width: 24%;\n  cursor: pointer;\n  @media (max-width: 980px) {\n    width: 100%;\n  }\n  &:hover {\n    .cover {\n      img {\n        transform: scale(1.1);\n      }\n    }\n  }\n  .cover {\n    border-radius: 20px;\n    height: 200px;\n    margin-bottom: 10px;\n    overflow: hidden;\n    img {\n      transition-duration: 0.3s;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n  .location {\n    margin-bottom: 10px;\n    text-align: left;\n    padding: 10px 0;\n  }\n"])));var Re,ze=function(e){var t=e.data,n=Object(b.f)();return Object(F.jsxs)(Me,{onClick:function(){n.push({pathname:"/intro",state:t})},children:[Object(F.jsx)("div",{className:"cover",children:Object(F.jsx)("img",{src:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.PictureUrl1;return t||"https://changchiao.github.io/react_attractions/image/default/act.jpg"}(t.Picture)})}),Object(F.jsx)("p",{className:"item-title",children:t.Name}),Object(F.jsxs)("p",{className:"location",children:[Object(F.jsx)(pe.a,{className:"mark",icon:he.c}),t.Address&&t.Address.substring(0,3)]})]})},Ke=M.b.div(Re||(Re=Object(I.a)(["\n  margin-top: 50px;\n  .title-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    svg {\n      margin-left: 5px;\n    }\n  }\n  .list {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    margin-top: 16px;\n    @media (max-width: 980px) {\n      display: block;\n    }\n  }\n"])));var Ye=function(e){var t=e.data,n=Object(b.f)(),a=Object(x.b)();return Object(F.jsxs)(Ke,{children:[Object(F.jsxs)("div",{className:"title-bar",children:[Object(F.jsx)("h3",{className:"title",children:t.title}),Object(F.jsxs)("span",{className:"more",onClick:function(){var e={type:null===t||void 0===t?void 0:t.type};a(S(e)),n.push("/search")},children:["\u67e5\u770b\u66f4\u591a\u6d3b\u52d5",Object(F.jsx)(pe.a,{className:"mark",icon:he.a})]})]}),Object(F.jsx)("div",{className:"list",children:t.list&&t.list.map((function(e){return Object(F.jsx)(ze,{data:Object(ae.a)(Object(ae.a)({},e),{},{type:t.type})},e.ID)}))})]})};var Fe=function(){var e=Object(d.useState)({title:"\u71b1\u9580\u6253\u5361\u666f\u9ede",type:"spot",list:[]}),t=Object(R.a)(e,2),n=t[0],a=t[1],c=Object(d.useState)({title:"\u4e00\u518d\u56de\u8a2a\u7f8e\u98df",type:"restaurant",list:[]}),i=Object(R.a)(c,2),r=i[0],s=i[1],o=function(){var e=Object(ce.a)(ne.a.mark((function e(){var t,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={$top:4},e.next=3,Ee(t);case 3:n=e.sent,a((function(e){return Object(ae.a)(Object(ae.a)({},e),{},{list:n})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(ce.a)(ne.a.mark((function e(){var t,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={$top:4},e.next=3,De(t);case 3:n=e.sent,s((function(e){return Object(ae.a)(Object(ae.a)({},e),{},{list:n})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){o(),l()}),[]),Object(F.jsxs)("div",{children:[Object(F.jsx)(fe,{}),Object(F.jsx)(se,{}),Object(F.jsx)(Ie,{}),Object(F.jsx)(Ye,{data:n}),Object(F.jsx)(Ye,{data:r})]})};var He=function(){return Object(F.jsx)("div",{})},Be=n(100),Ue=n.n(Be),Ve=n(101),We=n.n(Ve),$e=n(109),Ge=function(){return Object(F.jsx)(pe.a,{className:"mark",icon:he.c})};var qe=function(e){var t=e.Position,n=void 0===t?{}:t;return console.log("Position",n),Object(F.jsx)("div",{style:{height:"100%",width:"100%"},children:Object(F.jsx)($e.a,{yesIWantToUseGoogleMapApiInternals:!0,bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:"https://changchiao.github.io/react_attractions",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ID:"b65665fcca144956a79d25bb3edc7b34",REACT_APP_KEY:"daVxLDO01nPgTTwhQKVBmY-pjeQ"}).REACT_GOOGLE_KEY},defaultCenter:{lat:n.PositionLat||"22.63",lng:n.PositionLon||"121.5073"},defaultZoom:12,children:Object(F.jsx)(Ge,{lat:n.PositionLat,lng:n.PositionLon})})})};var Je=function(e){var t=e.data;return Object(F.jsxs)("div",{className:"detail",children:[Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u6d3b\u52d5\u6642\u9593:"}),"".concat(ge(t.StartTime),"-").concat(ge(t.EndTime))]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u4e3b\u8fa6\u55ae\u4f4d:"}),t.Organizer]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u6d3b\u52d5\u5730\u9ede:"}),t.Address]})]})};var Qe=function(e){var t=e.data;return Object(F.jsxs)("div",{className:"detail",children:[Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u71df\u696d\u6642\u9593:"}),t.OpenTime]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u806f\u7d61\u96fb\u8a71:"}),Object(F.jsx)("a",{href:"tel:".concat(t.Phone),children:t.Phone})]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u9910\u5ef3\u5730\u5740:"}),t.Address]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u5b98\u65b9\u7db2\u7ad9:"}),t.WebsiteUrl?Object(F.jsx)("a",{href:t.WebsiteUrl,target:"_blank",rel:"noreferrer",children:t.WebsiteUrl}):Object(F.jsx)("span",{children:"\u7121"})]})]})};var Xe,Ze,et=function(e){var t=e.data;return Object(F.jsxs)("div",{className:"detail",children:[Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u958b\u653e\u6642\u9593:"}),t.OpenTime]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u670d\u52d9\u96fb\u8a71:"}),Object(F.jsx)("a",{href:"tel:".concat(t.Phone),children:t.Phone})]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u666f\u9ede\u5730\u5740:"}),t.Address]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u7968\u50f9\u8cc7\u8a0a:"}),t.TicketInfo]}),Object(F.jsxs)("p",{children:[Object(F.jsx)("h3",{className:"focus",children:"\u6ce8\u610f\u4e8b\u9805:"}),t.Remarks||"\u7121"]})]})},tt=M.b.div(Xe||(Xe=Object(I.a)(["\n  padding-bottom: 20px;\n  font-size: 14px;\n  .crumb-text {\n    color: var(--green);\n  }\n  strong {\n    color: var(--green);\n    margin: 0 5px;\n  }\n"])));function nt(e){var t=e.type,n=e.title;return Object(F.jsxs)(tt,{children:[Object(F.jsx)("span",{className:"crumb-text",children:t}),Object(F.jsx)("strong",{children:"/"}),Object(F.jsx)("span",{className:"crumb-text",children:n})]})}var at=M.b.div(Ze||(Ze=Object(I.a)(["\n  margin-top: 30px;\n  .main-cover {\n    width: 100%;\n    height: 400px;\n    object-fit: cover;\n    border-radius: 20px;\n  }\n  .intro-title {\n    font-size: 32px;\n    padding: 20px 0 16px;\n  }\n  .tag {\n    color: var(--brown);\n    font-size: 14px;\n    padding: 5px;\n    border-radius: 20px;\n    margin-right: 5px;\n    border: 1px solid var(--brown);\n  }\n  .content {\n    padding: 30px 0 20px;\n    h3 {\n      padding-bottom: 14px;\n    }\n    p {\n      line-height: 24px;\n    }\n  }\n  .intro {\n    display: flex;\n    justify-content: space-between;\n    @media (max-width: 980px) {\n      display: block;\n    }\n  }\n  .map {\n    width: 48%;\n    @media (max-width: 980px) {\n      width: 100%;\n    }\n  }\n  .detail {\n    width: 48%;\n    background: #f9f9f9;\n    border-radius: 20px;\n    padding: 20px 10px;\n    @media (max-width: 980px) {\n      width: 100%;\n    }\n    p {\n      padding: 8px 0;\n      display: flex;\n      line-height: 20px;\n      .focus {\n        margin-right: 5px;\n        word-break: keep-all;\n      }\n    }\n    a {\n      word-break: break-all;\n      color: var(--green);\n    }\n  }\n"])));var ct=function(){var e=Object(b.g)().state,t=Object(d.useState)({}),n=Object(R.a)(t,2),a=n[0],c=n[1],i=Object(d.useState)({}),r=Object(R.a)(i,2),s=r[0],o=r[1],l=Object(d.useState)([]),j=Object(R.a)(l,2),u=j[0],p=j[1],h=Object(d.useState)(""),x=Object(R.a)(h,2),O=x[0],f=x[1],m=function(){var t=Object(ce.a)(ne.a.mark((function t(){var n,c,i;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={$top:4},c="",i=[],setTimeout((function(){console.log("data.type",a.type),console.log("state",e)}),3e3),t.t0=a.type,t.next="activity"===t.t0?7:"spot"===t.t0?12:17;break;case 7:return c="\u6d3b\u52d5",t.next=10,Ae(n);case 10:return i=t.sent,t.abrupt("break",22);case 12:return c="\u666f\u9ede",t.next=15,Ee(n);case 15:return i=t.sent,t.abrupt("break",22);case 17:return c="\u9910\u5ef3",t.next=20,De(n);case 20:return i=t.sent,t.abrupt("break",22);case 22:f(c),o({title:"\u9084\u6709\u9019\u4e9b\u4e0d\u80fd\u932f\u904e\u7684"+c,list:i});case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){switch(a.type){case"activity":return Object(F.jsx)(Je,{data:a});case"spot":return Object(F.jsx)(et,{data:a});default:return Object(F.jsx)(Qe,{data:a})}};return Object(d.useEffect)((function(){!function(){if(e)localStorage.setItem("intro",JSON.stringify(e)),c(e);else{var t=localStorage.getItem("intro");c(JSON.parse(t))}}()}),[]),Object(d.useEffect)((function(){m(),function(){for(var e=[],t=0,n=Object.entries(a);t<n.length;t++){var c=Object(R.a)(n[t],2),i=c[0],r=c[1];i.includes("Class")&&e.push("#".concat(r))}0===e.length&&e.push("#\u71b1\u9580\u6253\u5361"),p(e)}()}),[a]),Object(F.jsxs)(at,{children:[Object(F.jsx)(nt,{type:a.type?z.find((function(e){return e.value===a.type})).label:"",title:a.Name}),Object(F.jsx)("img",{className:"main-cover",src:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.PictureUrl1;return t||"https://changchiao.github.io/react_attractions/image/default/act.jpg"}(a.Picture)}),Object(F.jsx)("h2",{className:"intro-title",children:a.Name}),Object(F.jsx)("div",{className:"tag-group",children:u.map((function(e){return Object(F.jsx)("span",{className:"tag",children:e},e)}))}),Object(F.jsxs)("div",{className:"content",children:[Object(F.jsxs)("h3",{className:"focus",children:[O,"\u4ecb\u7d39:"]}),Object(F.jsx)("p",{children:"spot"===a.type?a.DescriptionDetail:a.Description})]}),Object(F.jsxs)("div",{className:"intro",children:[Object(F.jsx)(v,{}),Object(F.jsx)("div",{className:"map",children:Object(F.jsx)(qe,{Position:a.Position})})]}),Object(F.jsx)(Ye,{data:s})]})},it=n(74);var rt=function(e){var t=e.setCity,n=e.city;return Object(F.jsx)(be,{defaultValue:n,onChange:t,options:Y})},st=n(104),ot=n.n(st),lt=n(103),dt=n.n(lt);var jt,ut,bt=function(){var e=dt()({onOpen:function(e){e.portal.current.style.cssText="\n            /* add your css here for the Portal */\n            position: fixed;\n            width: 100vw;\n            height: 100vh;\n            transform: translate(-50%,-50%);\n            z-index: 1000;\n          "}}).Portal;return Object(F.jsx)(e,{children:Object(F.jsx)("div",{class:"load",children:Object(F.jsxs)("div",{class:"load-container",children:[Object(F.jsx)("div",{class:"l-1 letter",children:"L"}),Object(F.jsx)("div",{class:"l-2 letter",children:"o"}),Object(F.jsx)("div",{class:"l-3 letter",children:"a"}),Object(F.jsx)("div",{class:"l-4 letter",children:"d"}),Object(F.jsx)("div",{class:"l-5 letter",children:"i"}),Object(F.jsx)("div",{class:"l-6 letter",children:"n"}),Object(F.jsx)("div",{class:"l-7 letter",children:"g"}),Object(F.jsx)("div",{class:"l-8 letter",children:"."}),Object(F.jsx)("div",{class:"l-9 letter",children:"."}),Object(F.jsx)("div",{class:"l-10 letter",children:"."})]})})})};n(162);var pt=function(){var e=!1,t=0,n=Object(x.b)(),a=Object(d.useState)([]),c=Object(R.a)(a,2),i=c[0],r=c[1],s=Object(d.useState)(""),o=Object(R.a)(s,2),l=o[0],j=o[1],u=Object(d.useState)(""),b=Object(R.a)(u,2),p=b[0],h=b[1],O=Object(d.useState)(new Date),f=Object(R.a)(O,2),m=f[0],v=f[1],g=Object(d.useState)(!1),y=Object(R.a)(g,2),w=y[0],N=y[1],k=Object(x.c)((function(e){return e.search.searchData})),C=M.b.div(jt||(jt=Object(I.a)(["\n    padding-top: 50px;\n    .search-bar {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      @media (max-width: 980px) {\n        display: block;\n      }\n      .search-input {\n        flex: 1;\n        min-height: 42px;\n        margin-right: 5px;\n        @media (max-width: 980px) {\n          width: 100%;\n          margin: 10px 0;\n        }\n      }\n      .search-btn {\n        width: 160px;\n        height: 40px;\n        letter-spacing: 5px;\n        display: block;\n        cursor: pointer;\n        @media (max-width: 980px) {\n          width: 100%;\n        }\n        svg {\n          margin-right: 5px;\n          cursor: pointer;\n        }\n      }\n    }\n    .search-result {\n    }\n  "]))),T=M.b.div(ut||(ut=Object(I.a)(["\n    .search-result-text {\n      padding: 50px 0 20px;\n      font-weight: normal;\n      font-size: 28px;\n      span {\n        padding-left: 6px;\n        font-size: 16px;\n        strong {\n          color: #949142;\n        }\n      }\n    }\n    .search-result-list {\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      @media (max-width: 980px) {\n        display: block;\n      }\n      svg {\n        color: var(--green);\n      }\n    }\n  "]))),P=function(){return z.find((function(e){return e.value===k.type})).label},D=function(){t=0,e=!1,r([])},E=function(e){var t=new Date(e);return[t.getMonth()+1,t.getFullYear()]},A=function(){var n=Object(ce.a)(ne.a.mark((function n(){var a,c,i,s,o,l,d,j,u,b,p;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=[],c=k.keyword,i=k.city,s="activity"===k.type?E(m):[],o=Object(R.a)(s,2),l=o[0],d=o[1],j=c?"Name eq '".concat(c,"'"):"",u=l?"month(StartTime) eq ".concat(l):"",b=d?"year(StartTime) eq ".concat(d):"",p={$top:30,$skip:t,$filter:(h=[j,u,b],h.filter((function(e){return""!==e})).join(" and ")),city:i},N(!0),n.t0=k.type,n.next="activity"===n.t0?11:"spot"===n.t0?15:19;break;case 11:return n.next=13,Ae(p);case 13:return a=n.sent,n.abrupt("break",23);case 15:return n.next=17,Ee(p);case 17:return a=n.sent,n.abrupt("break",23);case 19:return n.next=21,De(p);case 21:return a=n.sent,n.abrupt("break",23);case 23:N(!1),0===a.length?e=!0:r((function(e){return[].concat(Object(it.a)(e),Object(it.a)(a))}));case 25:case"end":return n.stop()}var h}),n)})));return function(){return n.apply(this,arguments)}}();return Object(d.useEffect)((function(){return window.onscroll=function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight&&(console.log("is-bottom"),!w&&(e||(t+=30,A())))},function(){n(S({type:k.type}))}}),[]),Object(d.useEffect)((function(){P(),A(),console.log("2222")}),[k]),Object(F.jsxs)(C,{children:[w&&Object(F.jsx)(bt,{}),Object(F.jsx)(nt,{type:"\u9996\u9801",title:P()}),Object(F.jsxs)("div",{className:"search-bar",children:[Object(F.jsx)(rt,{setCity:j,city:l}),"activity"===k.type&&Object(F.jsx)(ot.a,{selected:m,onChange:function(e){return v(e)},dateFormat:"MM/yyyy",showMonthYearPicker:!0}),Object(F.jsx)("input",{className:"search-input",placeholder:"".concat({activity:"\u4f60\u60f3\u73a9\u4ec0\u9ebc\uff1f",spot:"\u4f60\u60f3\u53bb\u54ea\u88e1\uff1f",restaurant:"\u4f60\u60f3\u5403\u4ec0\u9ebc\uff1f"}[k.type],"\u8acb\u8f38\u5165\u95dc\u9375\u5b57"),value:p,onChange:function(e){h(e.target.value)}}),Object(F.jsxs)("button",{className:"search-btn",onClick:function(){var e={keyword:p,city:null===l||void 0===l?void 0:l.value,type:k.type};console.log("dataObj",e),D(),n(S(e))},children:[Object(F.jsx)(pe.a,{icon:he.d}),"\u641c\u5c0b"]})]}),Object(F.jsxs)(T,{children:[Object(F.jsxs)("h3",{className:"search-result-text",children:["\u641c\u5c0b\u7d50\u679c",Object(F.jsxs)("span",{children:["\u5171\u6709",Object(F.jsx)("strong",{children:i.length}),"\u7b46"]})]}),Object(F.jsxs)("div",{className:"search-result-list",children:[i.map((function(e){return Object(F.jsx)(ze,{data:Object(ae.a)(Object(ae.a)({},e),{},{type:k.type})},e.ID)})),0===i.length&&Object(F.jsxs)("div",{children:["\u3000",Object(F.jsx)(pe.a,{icon:he.b}),Object(F.jsx)("p",{children:"\u67e5\u7121\u8cc7\u6599"}),Object(F.jsx)("p",{children:"\u8acb\u91cd\u65b0\u67e5\u8a62"})]})]})]})]})},ht=Object(h.b)(L);var xt=function(){return Object(F.jsx)(x.a,{store:L,children:Object(F.jsx)(p.a,{loading:null,persistor:ht,children:Object(F.jsxs)("div",{className:"App",children:[Object(F.jsxs)(ee,{children:[Object(F.jsx)(b.a,{path:"/",exact:!0,component:Fe}),Object(F.jsx)(b.a,{path:"/search",exact:!0,component:pt}),Object(F.jsx)(b.a,{path:"/attraction",component:He}),Object(F.jsx)(b.a,{path:"/festival",component:Ue.a}),Object(F.jsx)(b.a,{path:"/food",component:We.a}),Object(F.jsx)(b.a,{path:"/intro",component:ct})]}),Object(F.jsx)(me.a,{})]})})})},Ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,214)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},ft=n(32);n(204),n(205);u.a.render(Object(F.jsx)(ft.a,{children:Object(F.jsx)(b.c,{children:Object(F.jsx)(xt,{})})}),document.getElementById("root")),Ot()}},[[207,1,2]]]);
//# sourceMappingURL=main.f55e77c9.chunk.js.map