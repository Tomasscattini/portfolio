(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{346:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(0),o=t.n(r),c=t(21),a=t.n(c),s=t(50),l=t(112),d=(t(182),t(357)),h=t(65),m=t(172),u=t(41),j=t(37);function b(){var n=Object(u.a)(["\nhtml {\n    scroll-behavior: smooth;\n    --antd-wave-shadow-color: ","!important;\n}\n\nbody {\n    position: relative;\n    overflow-x: hidden;\n    font-family: ",";\n    width: 100vw;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n}\n.container {\n    width: 90%;\n    margin: 0 auto;\n}\n\n.section-title {\n        text-align: center;\n        color: ",";\n        font-size: 30px;\n        text-transform: uppercase;\n        font-weight: bold;\n}\n\n.ant-dropdown-menu {\n    background-color: ","!important;\n}\n\n.ant-dropdown-menu-item a {\n        color: ",";\n        text-transform: uppercase;\n    }\n\n.ant-menu-item-active,\n.ant-menu-item-selected {\n    border-color: ","!important;\n}\n\n.ant-switch-checked {\n    background-color: black!important;\n}\n.submenu-mobile {\n    width: 100vw;\n    a {\n        text-align: center;\n    }\n}\n\n#switch {\n    position: fixed;\n    top: 80px;\n    z-index: 200;\n    left: calc(50vw - 22px);\n}\n@media "," {\n    .container {\n        width: 1200px;\n    }\n}\n"]);return b=function(){return n},n}var p=Object(j.b)(b(),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.font.primary}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.tertiary}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.device.laptop})),f=function(n){var e=n.children,t=n.color,o={color:{main:"#1E1E1E",mainLight:"#383838",secondary:"white",secondaryLight:"white",tertiary:"black",tertiaryLight:"rgba(0,0,0,.85)"},font:{primary:"'Roboto', sans-serif",color:"white"},bioImg:"'https://res.cloudinary.com/tomiscattini/image/upload/v1609976839/Portfolio/background-vsc_nbsysf.png'",device:{lgPhone:"(min-width: 426px)",tablet:"(min-width: 769px)",laptop:"(min-width: 1025px)",desktop:"(min-width: 1200px)"}},c={color:{main:"white",mainLight:"white",secondary:"gray",secondaryLight:"gray",tertiary:"white",tertiaryLight:"rgba(255,255,255,.9)"},font:{primary:"'Roboto', sans-serif",color:"black"},bioImg:"'https://res.cloudinary.com/tomiscattini/image/upload/v1610302672/Portfolio/background-vsc-white_kdsjxj.png'",device:{lgPhone:"(min-width: 426px)",tablet:"(min-width: 769px)",laptop:"(min-width: 1025px)",desktop:"(min-width: 1200px)"}},a=Object(r.useState)(c),l=Object(s.a)(a,2),d=l[0],h=l[1];return Object(r.useEffect)((function(){switch(t){case"light":h(c);break;default:h(o)}}),[t]),Object(i.jsx)(j.a,{theme:d,children:e})},g=t(142),x=t.n(g),v=t(77),w=t(354),O=t(36);function y(){var n=Object(u.a)(["\n    position: relative;\n    min-height: 100vh;\n    width: 100vw;\n    padding: 120px 0 60px 0;\n    background-color: ",";\n    .container-about {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 100vw;\n        min-height: 100vh;\n        z-index: 5;\n        .photo{\n            width: 100%;\n            padding: 80px 0;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            .social {\n                .icon {\n                    color: ",";\n                    height: 50px;\n                    width: auto;\n                    margin: 60px 20px;\n                    &:hover {\n                        color: ",";\n                    }\n                }\n            }\n            .resume {\n                button {\n                    background-color: ",";\n                    color: ",";\n                    border: 1px solid #383838;\n                    height: 45px;\n                    padding: 0 20px;\n                    &:hover {\n                        background-color: ",";\n                        color: white;\n                    }\n                }\n            }\n        }\n        .bio {\n            width: 100%;\n            padding: 0 10vw;\n            .ant-menu {\n                background-color: ","!important;\n                li {\n                    color: ","!important;\n                }\n            }\n            .content {\n                    width: 80vw;\n                    height: 500px;\n                    padding: 0 40px 60px 60px;\n                    background-image: url(",");\n                    background-size: cover;\n                    background-position: left center;\n                    background-repeat: no-repeat;\n                    overflow-y: scroll;\n                    -ms-overflow-style: none;\n                    scrollbar-width: none;\n                    transition: all .6s ease;\n                    &::-webkit-scrollbar {\n                        display: none;\n                    }\n                    span {\n                        color: ",";\n                        font-size: 14px;\n                        font-family: 'Courier Prime', monospace;\n                        strong {\n                            color: #569CD6;\n                            font-weight: normal;\n                        }\n                        i {\n                            font-style: normal;\n                            color: #49B9F8;\n                        }\n                        em {\n                            font-style: normal;\n                            color: #DCDCAA;\n                        }\n                        &>div {\n                            margin-left: 20px;\n                        }\n                        &>span {\n                            font-family: sans-serif;\n                        }\n                        a {\n                            color: ",";\n                            &:hover {\n                                color: ",";\n                            }\n                        }\n                    }\n            }\n        }\n    }\n    @media "," {\n        .container-about {\n            flex-direction: row-reverse;\n            align-items: flex-start;\n            .photo {\n                width: 40%;\n                padding: 10vw;\n            }\n            .bio {\n                width: 60%;\n                padding: 0 0 0 10vw;\n                .content {\n                    width: 100%;\n                }\n            }\n        }\n    }\n"]);return y=function(){return n},n}var k=j.c.div(y(),(function(n){return n.theme.color.main}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.secondaryLight}),(function(n){return n.theme.color.mainLight}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.color.main}),(function(n){return n.theme.font.color}),(function(n){return n.theme.bioImg}),(function(n){return n.theme.font.color}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.secondaryLight}),(function(n){return n.theme.device.laptop})),N=function(){var n=Object(r.useState)("js"),e=Object(s.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(null),a=Object(s.a)(c,2),l=a[0],d=a[1],h=Object(r.useRef)();Object(r.useEffect)((function(){t&&d(!0)}),[t]);var m="Tomas Scattini",u="I am a web developer from Argentina with a background in Popular Music and a nomad soul.",j="I recently graduated from an intensive bootcamp where I improved my developer skills and reinforced my social network.",b="I love to put my creativity to test and that's why I deeply enjoy creating new products for the web.",p="I have worked as a Music teacher in my home country for five years until my urge of adventure made me decide to hit the road and travel around the world.",f="That experience made me discover a whole new universe and expanded my perception of life.",g="Today I decide to make a positive change in the world wherever I can, and that is mostly through this powerful tool that is the internet.",y="linkedin.com/in/tomas-scattini/",N="github.com/Tomasscattini",C='<strong>const</strong> <i>name</i> = "'.concat(m,'"<br /> <strong>const</strong> <i>bio</i>'),S='<strong>let</strong> <i>bio</i> = <em>[</em><br /><div>"'.concat(u,'", <br/>"').concat(j,'", <br/> "').concat(b,'",<br/>"').concat(p,'",<br/>"').concat(f,'",<br/>"').concat(g,'"</div><br/><em>]</em><br/> <i>function</i> <em>profSocialMedia()</em> <em>{</em><br/> <div><strong>const</strong> <i>linkedIn</i> = <a href="https://www.').concat(y,'">').concat(y,'</a><br/><strong>const</strong> <i>gitHub</i> = <a href="https://').concat(N,'">').concat(N,"</a><br/><strong>return</strong> clicked</div><em>}</em>"),I='<strong>const</strong> <i>name: string</i> = "'.concat(m,'"<br /> <strong>const</strong> <i>bio: string[]</i>'),T='<strong>let</strong> <i>bio: any[]</i> = <em>[</em><br /><div>"'.concat(u,'", <br/>"').concat(j,'", <br/> "').concat(b,'",<br/>"').concat(p,'",<br/>"').concat(f,'",<br/>"').concat(g,'"</div><br/><em>]</em><br/> <i>function</i> <em>profSocialMedia(): void</em> <em>{</em><br/> <div><strong>const: string</strong> <i>linkedIn: string</i> = <a href="https://www.').concat(y,'">').concat(y,'</a><br/><strong>const: string</strong> <i>gitHub: string</i> = <a href="https://').concat(N,'">').concat(N,"</a></div><em>}</em>"),H='<i>name: str</i> = <i>full_name: str</i> = <i>alias: str</i> = "'.concat(m,'"<br /><i>bio: list[str]</i>'),E='<i>any]</i> = <em>[</em><br /><div>"'.concat(u,'", <br/>"').concat(j,'", <br/> "').concat(b,'",<br/>"').concat(p,'",<br/>"').concat(f,'",<br/>"').concat(g,'"</div><br/><em>]</em><br/> <i>def</i> <em>prof_social_media():</em><br/> <div><i>linked_in</i> = <a href="https://www.').concat(y,'">').concat(y,'</a><br/><i>git_hub</i> = <a href="https://').concat(N,'">').concat(N,"</a><br/><strong>return</strong> clicked;</div>"),L=function(n){n!==t&&(d(null),o(n))};return Object(i.jsxs)(k,{id:"about",children:[Object(i.jsx)("h2",{className:"section-title",children:"About me"}),Object(i.jsxs)("div",{className:"container-about",children:[Object(i.jsxs)("div",{className:"photo",children:[Object(i.jsxs)("div",{className:"social",children:[Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/Tomasscattini",children:Object(i.jsx)(O.a,{icon:["fab","github"],className:"icon"})}),Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/in/tomas-scattini/",children:Object(i.jsx)(O.a,{icon:["fab","linkedin"],className:"icon"})})]}),Object(i.jsx)("div",{className:"resume",children:Object(i.jsx)("a",{href:"/resume.pdf",download:"Resume Tomas Scattini",children:Object(i.jsx)(v.a,{primary:!0,children:"Download Resume"})})})]}),Object(i.jsxs)("div",{className:"bio",children:[Object(i.jsxs)(w.a,{mode:"horizontal",style:{backgroundColor:"#1E1E1E",color:"white",borderBottom:"none",marginBottom:"10px"},children:[Object(i.jsx)(w.a.Item,{style:{margin:"15px"},onClick:function(){return L("js")},children:Object(i.jsx)("span",{children:"JavaScript"})}),Object(i.jsx)(w.a.Item,{style:{margin:"15px"},onClick:function(){return L("ts")},children:Object(i.jsx)("span",{children:"TypeScript"})}),Object(i.jsx)(w.a.Item,{style:{margin:"15px"},onClick:function(){return L("py")},children:Object(i.jsx)("span",{children:"Python"})})]}),Object(i.jsx)("div",{className:"content",children:l&&Object(i.jsx)(x.a,{ref:h,options:{delay:75,skipAddStyles:!0},onInit:function(n){var e,i,r;switch(t){case"js":e=C,i=S,r="9";break;case"ts":e=I,i=T,r="19";break;case"py":e=H,i=E,r="4";break;default:e=C,i=S}n.typeString(e).pauseFor(1e3).deleteChars(r).changeDelay(15).typeString(i).start()}})})]})]})]})},C=t(349),S=t(350),I=t(353),T=t(352),H=t(355),E=t(151),L=t.n(E).a.create({baseURL:"/contact",withCredentials:!0});function z(){var n=Object(u.a)(["\n    padding: 50px 0;\n    background-color: ",";    \n    h2, h4 {\n        color: ",";\n        text-align: center;\n    }\n    .form {\n        label {\n            color: ",";\n        }\n        input, textarea {\n            color: ",";\n            background-color: transparent;\n            border: 2px solid gray;\n        }\n    }\n    button {\n        width: 100%;\n        background-color: ",";\n        color: ",";\n        border: 1px solid #383838;\n        &:hover {\n            background-color: ",";\n            color: white;\n        }\n    }\n    .message-sent {\n        height: 425.2px;\n        button {\n            margin-top: 50px;\n        }\n    }\n    @media "," {\n        min-height: calc(100vh - 60px);\n        padding: 150px 0;\n    }\n"]);return z=function(){return n},n}var D=j.c.div(z(),(function(n){return n.theme.color.tertiary}),(function(n){return n.theme.font.color}),(function(n){return n.theme.font.color}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.main}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.device.tablet})),_=function(){var n=Object(r.useState)(null),e=Object(s.a)(n,2),t=e[0],o=e[1];return Object(i.jsx)(D,{id:"contact",children:Object(i.jsx)(C.a,{children:t?Object(i.jsxs)(S.a,{className:"message-sent",xs:{offset:2,span:20},md:{offset:4,span:16},children:[Object(i.jsx)(C.a,{children:Object(i.jsxs)(S.a,{span:24,children:[Object(i.jsx)(I.a.Title,{level:2,children:"Thanks for contacting! "}),Object(i.jsx)(I.a.Title,{level:4,children:"I'll be getting back to you shortly"})]})}),Object(i.jsx)(C.a,{children:Object(i.jsx)(S.a,{xs:{span:24},sm:{offset:4,span:16},lg:{offset:8,span:8},children:Object(i.jsx)(v.a,{onClick:function(){return o(null)},children:"Get in touch again!"})})})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(S.a,{span:24,children:Object(i.jsx)(I.a.Title,{className:"section-title",level:2,children:"Get in touch"})}),Object(i.jsx)(S.a,{xs:{offset:2,span:20},md:{offset:4,span:16},lg:{offset:8,span:8},children:Object(i.jsxs)(T.a,{name:"contact",className:"form",layout:"vertical",labelCol:{span:12},wrapperCol:{span:24},onFinish:function(n){!function(n){L.post("/",n)}(n),o(!0)},onFinishFailed:function(n){console.log("Failed:",n)},children:[Object(i.jsx)(T.a.Item,{label:"E-mail",name:"email",rules:[{required:!0,message:"Please input your email!"},{type:"email"}],children:Object(i.jsx)(H.a,{})}),Object(i.jsx)(T.a.Item,{label:"Subject",name:"subject",rules:[{required:!0,message:"Please name your message!"}],children:Object(i.jsx)(H.a,{})}),Object(i.jsx)(T.a.Item,{label:"Message",name:"message",rules:[{required:!0,message:"Please write your message!"}],children:Object(i.jsx)(H.a.TextArea,{autoSize:{minRows:4,maxRows:10}})}),Object(i.jsx)(T.a.Item,{children:Object(i.jsx)(v.a,{type:"primary",htmlType:"submit",children:"Send message"})})]})})]})})})},R=t(87);function B(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: ",";\n    height: 120px;\n    width: 100vw;\n    position: relative;\n    bottom: 0;\n    padding: 0 10vw;\n    p {\n        color: ",";\n    }\n    .social {\n        .icon {\n            color: ",";\n            height: 20px;\n            width: auto;\n            margin: 0 10px;\n            &:hover {\n                color: ",";\n            }\n        }\n    }\n    @media "," {\n        height: 60px;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n"]);return B=function(){return n},n}var J=j.c.div(B(),(function(n){return n.theme.color.tertiary}),(function(n){return n.theme.font.color}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.secondaryLight}),(function(n){return n.theme.device.tablet})),M=function(){return Object(i.jsxs)(J,{children:[Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:"\xa9 All rights reserved by Tomas Scattini"})}),Object(i.jsxs)("div",{className:"social",children:[Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/Tomasscattini",children:Object(i.jsx)(O.a,{icon:["fab","github"],className:"icon"})}),Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/in/tomas-scattini/",children:Object(i.jsx)(O.a,{icon:["fab","linkedin"],className:"icon"})}),Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.instagram.com/tomiscattini/",children:Object(i.jsx)(O.a,{icon:["fab","instagram"],className:"icon"})}),Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://twitter.com/tomiscattini",children:Object(i.jsx)(O.a,{icon:["fab","twitter"],className:"icon"})}),Object(i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.facebook.com/tomas.scattini",children:Object(i.jsx)(O.a,{icon:["fab","facebook"],className:"icon"})}),Object(i.jsx)("a",{href:"mailto:tomasscattini@gmail.com",children:Object(i.jsx)(O.a,{icon:R.c,className:"icon"})})]})]})};function P(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    ","\n    height: calc(100vh - 60px);\n    margin-top: 60px;\n    padding: 100px 10vw;\n    background-color: ",";\n    &>img {\n        position: absolute;\n        height: calc(100vh - 60px);\n        max-width: 100vw;\n        object-fit: cover;\n        left: 0;\n        z-index: 0;\n        opacity: .5;\n    }\n    h1.ant-typography {\n        font-size: 14vw;\n        width: 75vw;\n        color: ",";\n        text-transform: uppercase;\n        margin: 0;\n        z-index: 10;\n    }\n    h2.ant-typography {\n        color: ",";\n        margin: 0;\n        font-size: 24px;\n        z-index: 10;\n    }\n    h2.ant-typography:first-of-type {\n        width: 100%;\n        text-align: center;\n    }\n    @media "," {\n        &>img {\n        left: calc(50vw - 400px);\n    }\n        h1.ant-typography {\n            font-size: 11rem;\n        }\n        h2.ant-typography {\n            font-size: 30px;\n        }\n    }\n    "]);return P=function(){return n},n}var A=j.c.div(P(),"",(function(n){return n.theme.color.mainLight}),(function(n){return n.theme.font.color}),(function(n){return n.theme.font.color}),(function(n){return n.theme.device.laptop})),G=function(){return Object(i.jsxs)(A,{children:[Object(i.jsx)("img",{src:"https://res.cloudinary.com/tomiscattini/image/upload/v1610311528/Portfolio/IMG_69478_vbwzk5.jpg",alt:"Tomi Scattini"}),Object(i.jsx)(I.a.Title,{level:2,children:"Hello, I am"}),Object(i.jsx)(I.a.Title,{level:1,children:"Tomi Scattini"}),Object(i.jsx)(I.a.Title,{level:2,children:"Web Developer"})]})},F=t(356),V=t(78);function Y(){var n=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 10vw;\n    align-items: center;\n    height: 60px;\n    box-sizing: border-box;\n    width: 100vw;\n    z-index: 500;\n    background-color: ",";\n    #logo {\n        cursor: pointer;\n        h2 {\n            margin: 0;\n            color: ",";\n            text-transform: uppercase;\n            &:hover {\n                color: ",";\n            }\n        }\n    }\n    #menu-mobile {\n        div {\n            display: block;\n            width: 50px;\n            z-index: 20;\n            cursor: pointer;\n            span {\n                height: 2px;\n                width: 30px;\n                margin: 6px auto;\n                background-color: ",";\n                text-align: center;\n                display: block;\n                border-radius: 20%;\n            }\n        }\n    }\n    #menu-lg {\n        display: none;\n    }\n    @media (min-width: 850px) {\n        #menu-mobile {\n            div {\n                display: none;\n            }\n        }\n        #menu-lg {\n            display: block;\n            .ant-menu {\n                background-color: ","; \n                border-bottom: none;\n            }\n            .ant-menu-item {\n                margin: 0 10px;\n            }\n            a {\n                text-transform: uppercase;\n                color: ",";\n            }\n        }\n    }\n    @media "," {\n        #menu-lg {\n            .ant-menu-item {\n                margin: 0 20px;\n            }\n        }\n    }\n"]);return Y=function(){return n},n}var q=j.c.div(Y(),(function(n){return n.theme.color.tertiary}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.font.color}),(function(n){return n.theme.color.tertiary}),(function(n){return n.theme.font.color}),(function(n){return n.theme.device.laptop})),W=function(){var n=function(){window.scroll({top:0,behavior:"smooth"})},e=function(e){return Object(i.jsxs)(w.a,{mode:e,children:[Object(i.jsx)(w.a.Item,{children:Object(i.jsx)(V.HashLink,{onClick:n,children:"Home"})}),Object(i.jsx)(w.a.Item,{children:Object(i.jsx)(V.HashLink,{to:"/#about",children:"About"})}),Object(i.jsx)(w.a.Item,{children:Object(i.jsx)(V.HashLink,{to:"/#technologies",children:"Technologies"})}),Object(i.jsx)(w.a.Item,{children:Object(i.jsx)(V.HashLink,{to:"/#projects",children:"Projects"})}),Object(i.jsx)(w.a.Item,{children:Object(i.jsx)(V.HashLink,{to:"/#contact",children:"Contact"})})]})};return Object(i.jsxs)(q,{children:[Object(i.jsx)("div",{id:"logo",onClick:n,children:Object(i.jsx)(I.a.Title,{level:2,children:"Tomi Scattini"})}),Object(i.jsx)("div",{id:"menu-mobile",children:Object(i.jsx)(F.a,{placement:"bottomCenter",overlay:function(){return e("vertical")},overlayClassName:"submenu-mobile",trigger:["click"],children:Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{})]})})}),Object(i.jsx)("div",{id:"menu-lg",children:e("horizontal")})]})},Q=t(351),U=t(88),K=t.n(U);function X(){var n=Object(u.a)(["\n    width: 100vw;\n    background-color: ",";\n    padding: 120px 10vw 60px 10vw;\n    &>div {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        .arrow {\n            display: none;\n            height: 30px;\n            width: auto;\n            margin: 0 10px;\n            cursor: pointer;\n            color: #383838;\n            &:hover {\n                    color: ",";\n                }\n            }\n        }\n        .carousel {\n            width: 80vw;\n            margin-top: 50px;\n            .project {\n                width: 80vw;\n                min-height: 25vh;\n                a {\n                    display: flex;\n                    height: 100%;\n                    align-items: center;\n                    justify-content: center;\n                    div {\n                        position: relative;\n                        display: flex;\n                        align-items: center;\n                        height: 100%;\n                        width: 85%;\n                        img {\n                            object-fit: cover;\n                            width: 100%;\n                        }\n                    }\n                }\n            }\n        }\n        .carouselSm {\n            .project {\n                margin-bottom: 100px;\n                h3 {\n                    text-align: center;\n                    margin-top: 25px;\n                    color: ",";\n                }\n                span, a {\n                    color: ",";\n                }\n            }\n        }\n        .carouselLg {\n            display: none;\n        }\n        @media "," {\n            justify-content: space-evenly;\n            &>div .arrow {\n                display: block;\n            }\n            .carouselSm {\n                display: none;\n            }\n            .carouselLg {\n                display: block;\n                .project a div {\n                    div {\n                        position: absolute;\n                        flex-direction: column;\n                        justify-content: center;\n                        padding: 0 2vw;\n                        width: 100%;\n                        height: 38.25vw;\n                        background-color: ",";\n                        z-index: 20;\n                        transition: all .3s ease;\n                        overflow-y: hidden;\n                        h3 {\n                            color: ",";\n                            margin: 1vw 0;\n                            font-size: 14px;\n                            text-transform: uppercase;\n                        }\n                        p {\n                            font-size: 11px;\n                            color: ",";\n                            text-align: justify;\n                        }\n                        &:hover {\n                            opacity: 0;\n                        }\n                    }\n                }\n            }\n            .carousel {\n                height: 85vh;\n                .project {\n                    height: 85vh;\n                }\n            }\n        }\n    }\n    @media "," {\n        min-height: 100vh;\n        .carousel .project a div div {\n            padding: 8vw;\n            h3 {\n                font-size: 20px;\n                margin: 1vw 0 5vw 0;\n            }\n            p {\n                font-size: 18px;\n            }\n        }\n    }\n    @media "," {\n        .arrow {\n            height: 60px;\n            margin: 0 50px;            \n        }\n    }\n"]);return X=function(){return n},n}var Z=j.c.div(X(),(function(n){return n.theme.color.main}),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.font.color}),(function(n){return n.theme.font.color}),(function(n){return n.theme.device.lgPhone}),(function(n){return n.theme.color.tertiaryLight}),(function(n){return n.theme.font.color}),(function(n){return n.theme.font.color}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.laptop})),$=function(){var n=Object(r.useRef)(null);return Object(i.jsxs)(Z,{id:"projects",children:[Object(i.jsx)("h2",{className:"section-title",children:"Projects"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(O.a,{icon:R.a,onClick:function(){n.current.prev()},className:"arrow"}),Object(i.jsxs)("div",{className:"carousel carouselSm",children:[Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://tierra-roja.herokuapp.com/",children:Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"tierrarojalandingpage.png",alt:"Tierra Roja - Mujeres del barro"})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Tierra Roja"}),Object(i.jsx)(K.a,{lines:1,more:"Read more",less:"Hide",expanded:!1,children:Object(i.jsx)("p",{children:"Website for the women clay artists of Misiones, Argentina. In this app, the artists can offer their products and courses to any person with an account. Created with ReactJs, NodeJs, Express, MongoDB and a little magic of AntD and Styled Components (repository on my GitHub)"})})]})]}),Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://chapati-delta.herokuapp.com/",children:Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"chapatilandingpage.png",alt:"Chapati Delta"})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Chapati - Delta"}),Object(i.jsx)(K.a,{lines:1,more:"Read more",less:"Hide",expanded:!1,children:Object(i.jsx)("p",{children:"Chapati is a conscious website promoting exchange of experiences and products from a self-sustainable perspective. You will find a virtual space where to offer and find volunteer experiences, as well as to buy and sell craft products. Created with Hbs, NodeJs, Express, MongoDB and Sass (repository on my GitHub)"})})]})]}),Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://musing-swirles-d6448a.netlify.app/",children:Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"vagamundoslandingpage.png",alt:"Vagamundos"})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Vagamundos"}),Object(i.jsx)(K.a,{lines:1,more:"Read more",less:"Hide",expanded:!1,children:Object(i.jsx)("p",{children:"Vagamundos is an interactive game where you can travel the continent with the character of your choosing guessing all the capitals. The game is divided in three levels increasing the difficulty of the tests. Enjoy the world while learning geography! Created fully on plain JavaScript, Html and Css (repository on my GitHub)"})})]})]}),Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://compassionate-feynman-920d93.netlify.app/",children:Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"bandaespecialandingpage.png",alt:"Banda Especia"})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Banda Especia"}),Object(i.jsx)(K.a,{lines:1,more:"Read more",less:"Hide",expanded:!1,children:Object(i.jsx)("p",{children:"This is a website for a music group of La Plata, Argentina. You'll find their music, some pictures and their next events! Created on Html, JavaScript, Css and a little of JQuery (repository on my GitHub)"})})]})]})]}),Object(i.jsxs)(Q.a,{ref:n,dots:!1,className:"carousel carouselLg",children:[Object(i.jsx)("div",{className:"project",children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://tierra-roja.herokuapp.com/",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Tierra Roja"}),Object(i.jsx)("p",{children:"Website for the women clay artists of Misiones, Argentina. In this app, the artists can offer their products and courses to any person with an account. Created with ReactJs, NodeJs, Express, MongoDB and a little magic of AntD and Styled Components (repository on my GitHub)"})]}),Object(i.jsx)("img",{src:"tierrarojalandingpage.png",alt:"Tierra Roja - Mujeres del barro"})]})})}),Object(i.jsx)("div",{className:"project",children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://chapati-delta.herokuapp.com/",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Chapati - Delta"}),Object(i.jsx)("p",{children:"Chapati is a conscious website promoting exchange of experiences and products from a self-sustainable perspective. You will find a virtual space where to offer and find volunteer experiences, as well as to buy and sell craft products. Created with Hbs, NodeJs, Express, MongoDB and Sass (repository on my GitHub)"})]}),Object(i.jsx)("img",{src:"chapatilandingpage.png",alt:"Chapati Delta"})]})})}),Object(i.jsx)("div",{className:"project",children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://musing-swirles-d6448a.netlify.app/",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Vagamundos"}),Object(i.jsx)("p",{children:"Vagamundos is an interactive game where you can travel the continent with the character of your choosing guessing all the capitals. The game is divided in three levels increasing the difficulty of the tests. Enjoy the world while learning geography! Created fully on plain JavaScript, Html and Css (repository on my GitHub)"})]}),Object(i.jsx)("img",{src:"vagamundoslandingpage.png",alt:"Vagamundos"})]})})}),Object(i.jsx)("div",{className:"project",children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://compassionate-feynman-920d93.netlify.app/",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Banda Especia"}),Object(i.jsx)("p",{children:"This is a website for a music group of La Plata, Argentina. You'll find their music, some pictures and their next events! Created on Html, JavaScript, Css and a little of JQuery (repository on my GitHub)"})]}),Object(i.jsx)("img",{src:"bandaespecialandingpage.png",alt:"Banda Especia"})]})})})]}),Object(i.jsx)(O.a,{icon:R.b,onClick:function(){n.current.next()},className:"arrow"})]})]})};function nn(){var n=Object(u.a)(["\n    width: 100vw;\n    padding: 120px 10vw;\n    background-color: ",";\n    &>div{\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        img {\n            object-fit: scale-down;\n        }\n        .icon {\n            height: auto;\n            width: 20vw;\n            margin: 3vw;\n        }\n        .react {\n            color: #5ED3F3;\n            transition: all .9s ease-in-out;\n        }\n        .node {\n            color: #3C823B;\n            transition: all .8s ease-in-out;\n        }\n        .express {\n            transition: all .7s ease-in-out;\n        }\n        .mongo {\n            width: 14vw;\n            margin: 0 6vw; \n            transition: all 1s ease-in-out;\n        }\n        .js {\n            color: #E8D44D;\n            transition: all .5s ease-in-out;\n        }\n        .html {\n            color: #DD4B25;\n            transition: all .9s ease-in-out;\n        }\n        .css {\n            color: #016CB4;\n            transition: all .8s ease-in-out;\n        }\n        .git {\n            color: #E84D31;\n            transition: all 1s ease-in-out;\n        }\n        .github {\n            color: #000;\n            transition: all .5s ease-in-out;\n        }\n    }\n\n    @media "," {\n        min-height: 100vh;\n        &>div .icon {\n            width: 10vw;\n        }\n    }\n    @media "," {\n        &>div .icon {\n            width: 7vw;\n        }\n    }\n"]);return nn=function(){return n},n}var en=j.c.div(nn(),(function(n){return n.theme.color.mainLight}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.laptop})),tn=function(){var n=Object(r.useState)("0"),e=Object(s.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)("0"),a=Object(s.a)(c,2),l=a[0],d=a[1],h=Object(r.useRef)();return Object(r.useEffect)((function(){return"undefined"!==typeof window&&(window.onscroll=function(){if(h){var n=window.scrollY,e=window.innerHeight-50,t=h.current.getBoundingClientRect().top+e,i=h.current.getBoundingClientRect().height;n>t+100&&n<t+i+1e3&&d("1"),n>t&&n<t+i+900&&o("1"),(n<t||n>t+i+900)&&(o("0"),d("0"))}}),function(){window.removeEventListener("scroll",(function(){}))}})),Object(i.jsxs)(en,{id:"technologies",ref:h,children:[Object(i.jsx)("h2",{className:"section-title",children:"Technologies"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(O.a,{icon:["fab","react"],style:{opacity:t},className:"icon react"}),Object(i.jsx)(O.a,{icon:["fab","node"],style:{opacity:t},className:"icon node"}),Object(i.jsx)("img",{src:"/expressjs.svg",style:{opacity:t},className:"icon express",alt:"ExpressJs"}),Object(i.jsx)("img",{src:"/mongodb.svg",style:{opacity:t},className:"icon mongo",alt:"MongoDB"}),Object(i.jsx)(O.a,{icon:["fab","js"],style:{opacity:t},className:"icon js"}),Object(i.jsx)(O.a,{icon:["fab","html5"],style:{opacity:l},className:"icon html"}),Object(i.jsx)(O.a,{icon:["fab","css3"],style:{opacity:l},className:"icon css"}),Object(i.jsx)(O.a,{icon:["fab","git-alt"],style:{opacity:l},className:"icon git"}),Object(i.jsx)(O.a,{icon:["fab","github"],style:{opacity:l},className:"icon github"})]})]})};h.b.add(m.a);var rn=function(){var n=Object(r.useState)("light"),e=Object(s.a)(n,2),t=e[0],o=e[1];return Object(i.jsx)(l.BrowserRouter,{children:Object(i.jsxs)(f,{color:t,children:[Object(i.jsx)(p,{}),Object(i.jsx)(W,{}),Object(i.jsx)(d.a,{id:"switch",onChange:function(n){switch(t){case"dark":o("light");break;case"light":o("dark")}},"data-toggle":"tooltip","data-placement":"left",title:"Light/Dark"}),Object(i.jsx)(G,{}),Object(i.jsx)(N,{}),Object(i.jsx)(tn,{}),Object(i.jsx)($,{}),Object(i.jsx)(_,{}),Object(i.jsx)(M,{})]})})};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(rn,{})}),document.getElementById("root"))}},[[346,1,2]]]);
//# sourceMappingURL=main.1a176f09.chunk.js.map