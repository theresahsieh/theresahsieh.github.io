(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{67:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),i=a.n(c),o=a(10),r=a.n(o),s=(a(67),a(112)),A=a(113),l=a(55),j=Object(l.a)({palette:{primary:{500:"#467fcf"}}}),g=a(56),h=a(114),b=a(117),d=a(101),p=a(102),m=a(103),x=a(37),C=a(115),u=a(104),O=a(105),w=a(106),v=a(116),B=a(99),E=a(9),F=a(31),f=Object(B.a)({name:{position:"absolute",left:"4rem",color:"black",textDecoration:"none"},navBar:{backgroundColor:"white",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.05)"},navDisplayFlex:{display:"flex",float:"right"},linkText:{textDecoration:"none"},navListText:{color:"rgba(0, 0, 0, 0.87)"},navListButton:{"&$selected":{backgroundColor:"transparent"},"&:hover":{backgroundColor:"transparent"},"&:hover::before":{position:"absolute",bottom:"0px",visbility:"hidden",transform:"scaleX(1)"},"&::before":{content:'""',position:"absolute",left:"10%",right:"10%",width:"80%",bottom:"0",border:"1px solid #AB72E3",visbility:"hidden",transform:"scaleX(0)",transition:"all 0.3s ease-in-out 0s"}},menuButton:{float:"right"},drawer:{top:"64px",marginTop:"0.5rem",backgroundColor:"#AB72E3",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.05), 0px 2px 4px -1px rgba(0,0,0,0.05)"},drawerLink:{textAlign:"center","&$selected":{color:"red"},"&:hover":{backgroundColor:"transparent"},"&:hover::before":{position:"absolute",bottom:"0px",visbility:"hidden",transform:"scaleX(1)"},"&::before":{content:'""',position:"absolute",left:"10%",right:"10%",width:"80%",bottom:"0",border:"1px solid white",visbility:"hidden",transform:"scaleX(0)",transition:"all 0.3s ease-in-out 0s"}},drawerLinkText:{color:"white"}}),Q=function(){var e=[{title:"projects",path:"/projects"},{title:"work",path:"/work"},{title:"resume",path:"/resume"},{title:"about",path:"/about"}],t=c.useState(!1),a=Object(g.a)(t,2),i=a[0],o=a[1],r=function(){o(!i)},s=f(),A=Object(E.g)(),l=c.forwardRef((function(t,a){return Object(n.jsx)(h.a,{classes:{paper:s.drawer},BackdropProps:{invisible:!0},anchor:"top",open:t.open,onClose:r,ref:a,variant:"temporary",transitionDuration:4e3,children:Object(n.jsx)(b.a,{children:e.map((function(e){var t=e.title,a=e.path;return Object(n.jsx)(b.a,{button:!0,component:F.b,to:a,className:s.drawerLink,onClick:r,children:Object(n.jsx)(d.a,{primary:t,style:a===A.pathname?{color:"black"}:{},className:s.drawerLinkText})},t)}))})})}));return Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{className:s.navBar,position:"sticky",children:Object(n.jsxs)(m.a,{children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",style:{width:"2rem",height:"2rem",pointerEvents:"all"},href:"/"}),Object(n.jsx)(x.a,{variant:"h6",className:s.name,component:F.b,to:"/",children:"Theresa Hsieh"}),Object(n.jsx)("div",{style:{flex:"1 1 auto"}}),Object(n.jsx)(C.a,{smDown:!0,children:Object(n.jsx)(u.a,{maxWidth:"md",className:s.navbarDisplayFlex,children:Object(n.jsx)(O.a,{component:"nav","aria-labelledby":"main navigation",className:s.navDisplayFlex,children:e.map((function(e){var t=e.title,a=e.path;return Object(n.jsx)(b.a,{button:!0,component:F.b,to:a,className:s.navListButton,children:Object(n.jsx)(d.a,{style:a===A.pathname?{color:"#7326C0"}:{},className:"".concat(s.navListText),primary:t})},t)}))})})}),Object(n.jsx)(C.a,{mdUp:!0,children:Object(n.jsx)(w.a,{edge:"start",className:s.menuButton,"aria-label":"menu",onClick:r,children:Object(n.jsx)(v.a,{})})})]})}),Object(n.jsx)(l,{open:i})]})},D=a(22),I=a(107),N=a(108),k=a(109),y=a(110),Y=a.p+"static/media/Klix-cover.0fe7a789.png",P=a.p+"static/media/PECSS-cover.52eb8d2e.png",L=a.p+"static/media/PEQ-cover.6a68e883.png",U=Object(B.a)({title:{marginBottom:"1.5rem"},projectName:{fontWeight:"bold"},mainCard:{"@media (min-width: 960px)":{width:768},width:"80vw",borderRadius:10,marginBottom:"1.5rem",transition:"all 0.3s ease-in-out 0s",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.08)","&:hover":{boxShadow:"rgba(0, 0, 0, 0.22) 0px 19px 43px",transform:"translate3d(2px, -1px, 0px)"}},cardImage:{"@media (min-width: 960px)":{height:288},height:"30vw"},cardChips:{display:"flex",float:"right"}}),V={padding:"3px 6px 3px 6px",borderRadius:"6px",fontSize:"0.775rem",fontWeight:"bold"},G=Object(D.a)(Object(D.a)({},V),{},{backgroundColor:"#8576ed"}),Z=Object(D.a)(Object(D.a)({},V),{},{backgroundColor:"#54D0E0"}),R=Object(D.a)(Object(D.a)({},V),{},{backgroundColor:"#E5E5E5"}),X=Object(D.a)(Object(D.a)({},V),{},{backgroundColor:"#FF4BAF"}),W=function(){var e=U();return Object(n.jsx)("div",{style:{padding:"1rem"},children:Object(n.jsxs)("div",{style:{flexDirection:"column",margin:"auto",display:"flex",alignItems:"center",justify:"center"},children:[Object(n.jsx)(x.a,{variant:"h4",component:"h1",className:e.title,children:"projects"}),Object(n.jsxs)(I.a,{className:e.mainCard,children:[Object(n.jsx)(N.a,{className:e.cardImage,image:P,title:"PECSS Cover Photo"}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(x.a,{gutterBottom:!0,variant:"h6",component:"h2",className:e.projectName,children:"PECSS Clinician Dashboard"}),Object(n.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"Prolonged Exposure Collective Sensing System. Improving PTSD treatment for veterans."})]}),Object(n.jsxs)(y.a,{className:e.cardChips,children:[Object(n.jsx)("span",{style:Z,children:"UX Design + Angular JS"}),Object(n.jsx)("span",{style:R,children:"2019 - present"})]})]}),Object(n.jsxs)(I.a,{className:e.mainCard,children:[Object(n.jsx)(N.a,{className:e.cardImage,image:L,title:"PEQ Cover Photo"}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(x.a,{gutterBottom:!0,variant:"h6",component:"h2",className:e.projectName,children:"PEQ Widget"}),Object(n.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"Patient Engagement Quotient. Visualizing electronic personal health information to improve patient adherence to treatment protocols."})]}),Object(n.jsxs)(y.a,{className:e.cardChips,children:[Object(n.jsx)("span",{style:X,children:"UX Research + Design"}),Object(n.jsx)("span",{style:R,children:"2020 - present"})]})]}),Object(n.jsxs)(I.a,{className:e.mainCard,children:[Object(n.jsx)(N.a,{className:e.cardImage,image:Y,title:"Klix Cover Photo"}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(x.a,{gutterBottom:!0,variant:"h6",component:"h2",className:e.projectName,children:"Klix"}),Object(n.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"Helping gamers find friends and schedule gameplay in a safe environment."})]}),Object(n.jsxs)(y.a,{className:e.cardChips,children:[Object(n.jsx)("span",{style:G,children:"UX Research + Design"}),Object(n.jsx)("span",{style:R,children:"2019"})]})]})]})})},M=function(){return Object(n.jsx)("div",{style:{padding:"1rem"},children:Object(n.jsx)(x.a,{variant:"h4",children:"work"})})},H=a.p+"static/media/HsiehResume_2020.1d5c6a9a.jpg",S=a(111),T=Object(B.a)({title:{marginBottom:"1.5rem",textDecoration:"none",color:"black"}}),K=function(){var e=T();return Object(n.jsxs)("div",{style:{padding:"1rem",flexDirection:"column",margin:"auto",display:"flex",alignItems:"center",justify:"center"},children:[Object(n.jsx)(x.a,{variant:"h4",className:e.title,component:S.a,target:"_blank",href:"https://drive.google.com/file/d/1TT1UD8u8KMfPCol2rkA24XiNeVH6Dky7/view?usp=sharing",children:"resume"}),Object(n.jsx)("img",{src:H,alt:"resume",style:{minWidth:"300px",maxWidth:"800px",height:"auto",width:"90%",boxShadow:"-2px 2px 4px 2px rgba(0,0,0,0.08)"}})]})},J=function(){return Object(n.jsx)("div",{style:{padding:"1rem"},children:Object(n.jsx)(x.a,{variant:"h4",children:"about"})})},q=function(){return Object(n.jsxs)(s.a,{theme:j,children:[Object(n.jsx)(A.a,{}),Object(n.jsxs)(F.a,{basename:"",children:[Object(n.jsx)(Q,{}),Object(n.jsxs)(E.d,{children:[Object(n.jsx)(E.b,{exact:!0,path:"/projects",component:W}),Object(n.jsx)(E.b,{exact:!0,path:"/work",component:M}),Object(n.jsx)(E.b,{exact:!0,path:"/resume",component:K}),Object(n.jsx)(E.b,{exact:!0,path:"/about",component:J}),Object(n.jsx)(E.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(E.a,{to:"/projects"})}})]})]})]})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),i(e),o(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),z()}},[[73,1,2]]]);
//# sourceMappingURL=main.d04dd66a.chunk.js.map