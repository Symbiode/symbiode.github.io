(()=>{"use strict";var e,r,a,t,n={618(e,r,a){var t=a(848),n=a(540),o=a(338),s=a(522);let i={name:"",str:{primary:10},dex:{primary:10},con:{primary:10},ocv:{primary:3},dcv:{primary:3},dcvbonus:{primary:0},omcv:{primary:3},dmcv:{primary:3},spd:{primary:2},pd:{primary:2},ed:{primary:2},rec:{primary:4},end:{primary:20},body:{primary:10},stun:{primary:20},running:{primary:12},leaping:{primary:4},flying:{primary:0}};function l(e){return void 0!==e.secondary?{primary:e.primary,secondary:e.secondary}:{primary:e.primary}}function d(){return{name:"",str:l(i.str),dex:l(i.dex),con:l(i.con),ocv:l(i.ocv),dcv:l(i.dcv),dcvbonus:l(i.dcvbonus),omcv:l(i.omcv),dmcv:l(i.dmcv),spd:l(i.spd),pd:l(i.pd),ed:l(i.ed),rec:l(i.rec),end:l(i.end),body:l(i.body),stun:l(i.stun),running:l(i.running),leaping:l(i.leaping),flying:l(i.flying)}}function c(e,r){let a=11+(e-r);return a>0?`${a}-`:"Auto-hit"}function p(e){return void 0===e.secondary||e.secondary===e.primary?[{value:e.primary,label:""}]:[{value:e.primary,label:"Primary"},{value:e.secondary,label:"Secondary"}]}function m(e){return void 0!==e.secondary&&e.secondary!==e.primary?`${e.primary}/${e.secondary}`:`${e.primary}`}let u=[{key:"str",label:"STR"},{key:"dex",label:"DEX"},{key:"con",label:"CON"},{key:"ocv",label:"OCV"},{key:"dcv",label:"DCV"},{key:"dcvbonus",label:"DCV Bonus"},{key:"omcv",label:"OMCV"},{key:"dmcv",label:"DMCV"},{key:"spd",label:"SPD"},{key:"pd",label:"PD"},{key:"ed",label:"ED"},{key:"rec",label:"REC"},{key:"end",label:"END"},{key:"body",label:"BODY"},{key:"stun",label:"STUN"},{key:"running",label:"Running"},{key:"leaping",label:"Leaping"},{key:"flying",label:"Flying"}];function h(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function x(e){if("number"==typeof e&&!Number.isNaN(e))return e;if("string"==typeof e){let r=parseInt(e,10);return Number.isNaN(r)?null:r}return null}function b(e){let{index:r,character:a,onChange:o,onImport:s}=e,[c,p]=(0,n.useState)(""),m=1===r?'{"name":"Hero","str":[20,30],"con":15,"ocv":[6,8],"dcv":6,"dcvbonus":2,"omcv":5,"dmcv":5,"spd":2,"pd":8,"ed":8,"rec":10,"end":40,"body":15,"stun":35,"running":12,"leaping":4,"flying":0}':'{"name":"Villain","str":25,"con":20,"ocv":7,"dcv":[5,7],"dcvbonus":0,"omcv":4,"dmcv":4,"spd":3,"pd":10,"ed":10,"rec":12,"end":50,"body":20,"stun":40,"running":12,"leaping":4,"flying":0}';return(0,t.jsxs)("div",{className:"character-card",children:[(0,t.jsxs)("h2",{children:["Character ",r]}),(0,t.jsxs)("div",{className:"input-group",children:[(0,t.jsx)("label",{htmlFor:`name${r}`,children:"Name:"}),(0,t.jsx)("input",{type:"text",id:`name${r}`,placeholder:"Enter name",value:a.name,onChange:e=>{var r;return r=e.target.value,void o({...a,name:r})}})]}),(0,t.jsxs)("div",{className:"stat-headers",children:[(0,t.jsx)("span",{className:"stat-header-label"}),(0,t.jsx)("span",{className:"stat-header-cell",children:"Primary"}),(0,t.jsx)("span",{className:"stat-header-cell",children:"Secondary"})]}),u.map(e=>{let{key:n,label:s}=e;return(0,t.jsxs)("div",{className:"input-group stat-row",children:[(0,t.jsxs)("label",{htmlFor:`${n}${r}`,children:[s,":"]}),(0,t.jsx)("input",{type:"number",id:`${n}${r}`,className:"stat-input",value:a[n].primary,onChange:e=>{let r,t,s;return r=parseInt(e.target.value,10),t=a[n],s={primary:Number.isNaN(r)?0:r,...void 0!==t.secondary?{secondary:t.secondary}:{}},void o({...a,[n]:s})}}),(0,t.jsx)("input",{type:"number",id:`${n}${r}-sec`,className:"stat-input secondary"+(void 0!==a[n].secondary?" has-value":""),placeholder:"—",value:a[n].secondary??"",onChange:e=>((e,r)=>{let t=a[e];if(""===r.trim())return void o({...a,[e]:{primary:t.primary}});let n=parseInt(r,10);Number.isNaN(n)||o({...a,[e]:{primary:t.primary,secondary:n}})})(n,e.target.value)})]},n)}),(0,t.jsxs)("div",{className:"import-section",children:[(0,t.jsx)("label",{htmlFor:`json${r}`,children:"Import JSON:"}),(0,t.jsx)("textarea",{id:`json${r}`,placeholder:m,value:c,onChange:e=>p(e.target.value)}),(0,t.jsxs)("button",{type:"button",className:"import-button",onClick:()=>{let e=c.trim();if(!e)return void alert("Please enter JSON data");try{let r=JSON.parse(e);if(!h(r))throw Error("JSON must be an object");let t=d();t.name=a.name,Object.prototype.hasOwnProperty.call(r,"name")&&(t.name=String(r.name??"")),u.forEach(e=>{let{key:a}=e;Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=function(e,r){if(null==e)return l(r);if("number"==typeof e||"string"==typeof e)return{primary:x(e)??r.primary};if(Array.isArray(e)){let a=x(e[0]),t=e.length>=2?x(e[1]):null,n={primary:a??r.primary};return null!==t&&t!==a&&(n.secondary=t),n}if(h(e)){let a=x(e.primary),t=x(e.secondary),n={primary:a??r.primary};return null!==t&&t!==a&&(n.secondary=t),n}return l(r)}(r[a],i[a]))}),s(t)}catch{alert('Invalid JSON format. Please check your input.\n\nEach stat may be:\n  • a number (primary only) — e.g. "str": 20\n  • a [primary, secondary] array — e.g. "str": [20, 30]\n  • an object — e.g. "str": {"primary": 20, "secondary": 30}\n\nExample:\n{"name":"Hero","str":[20,30],"dex":20,"con":15,"ocv":[6,8],"dcv":6,"dcvbonus":2,"omcv":5,"dmcv":5,"spd":2,"pd":8,"ed":8,"rec":10,"end":40,"body":15,"stun":35,"running":12,"leaping":4,"flying":0}')}},children:["Import Character ",r]})]})]})}function g(e,r){return e.name||`Character ${r}`}function y(e){let r,a,n,o=(0,s.c)(9),{attacker:i,defender:l,attackerIndex:d,defenderIndex:c}=e;return o[0]!==i||o[1]!==d?(r=g(i,d),o[0]=i,o[1]=d,o[2]=r):r=o[2],o[3]!==l||o[4]!==c?(a=g(l,c),o[3]=l,o[4]=c,o[5]=a):a=o[5],o[6]!==r||o[7]!==a?(n=(0,t.jsxs)("h4",{className:"panel-header",children:[r," attacking"," ",a]}),o[6]=r,o[7]=a,o[8]=n):n=o[8],n}function v(e){let r,a,n,o,i,l,d,u,h,x,b,g,y=(0,s.c)(56),{attacker:v,defender:k}=e;if(y[0]!==v.ocv||y[1]!==k.dcv||y[2]!==k.dcvbonus){for(let e of(r=[],p(v.ocv)))for(let a of p(k.dcv))for(let t of p(k.dcvbonus)){let n=[];e.label&&n.push(`OCV ${e.value}`),a.label&&n.push(`DCV ${a.value}`),t.label&&n.push(`bonus ${t.value}`),r.push({roll:c(e.value,a.value+t.value),tag:n.join(", ")})}y[0]=v.ocv,y[1]=k.dcv,y[2]=k.dcvbonus,y[3]=r}else r=y[3];if(y[4]!==v.ocv||y[5]!==v.str||y[6]!==k.con||y[7]!==k.dcv||y[8]!==k.dcvbonus||y[9]!==k.ed||y[10]!==k.pd||y[11]!==r){let e,s,c,b,g,w,S=p(v.str).map(j);e:{let r,a,t;if(void 0===v.ocv.secondary&&void 0===k.dcv.secondary&&void 0===k.dcvbonus.secondary){let r=k.dcv.primary+k.dcvbonus.primary;e=`OCV ${v.ocv.primary} vs DCV ${r}`;break e}if(y[21]!==k.dcvbonus){var N;r=0!==(N=k.dcvbonus).primary||void 0!==N.secondary?` + ${m(k.dcvbonus)} bonus`:"",y[21]=k.dcvbonus,y[22]=r}else r=y[22];let n=r;y[23]!==v.ocv?(a=m(v.ocv),y[23]=v.ocv,y[24]=a):a=y[24],y[25]!==k.dcv?(t=m(k.dcv),y[25]=k.dcv,y[26]=t):t=y[26],e=`OCV ${a} vs DCV ${t}${n}`}let C=e;y[27]!==k.pd?(s=m(k.pd),y[27]=k.pd,y[28]=s):s=y[28],y[29]!==k.ed?(c=m(k.ed),y[29]=k.ed,y[30]=c):c=y[30],y[31]!==k.con?(b=m(k.con),y[31]=k.con,y[32]=b):b=y[32],y[33]===Symbol.for("react.memo_cache_sentinel")?(g=(0,t.jsx)("i",{children:"Stun"}),y[33]=g):g=y[33],y[34]!==s||y[35]!==c||y[36]!==b?(w=(0,t.jsxs)(t.Fragment,{children:[s,"PD/",c,"ED     ( ",b," for ",g," )"]}),y[34]=s,y[35]=c,y[36]=b,y[37]=w):w=y[37];let _=w;x="combat-stats",a="stat-group",y[38]!==C?(n=(0,t.jsxs)("span",{className:"stat-label",children:["Physical Attack (",C,"):"]}),y[38]=C,y[39]=n):n=y[39],y[40]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)("br",{}),y[40]=o):o=y[40],i="Needs to roll:",y[41]!==r?(l=1===r.length?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)("strong",{children:r[0].roll})]}):(0,t.jsx)("ul",{className:"variant-list",children:r.map(f)}),y[41]=r,y[42]=l):l=y[42],y[43]===Symbol.for("react.memo_cache_sentinel")?(d=(0,t.jsx)("br",{}),y[43]=d):d=y[43],u="Damage:",h=1===S.length?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsxs)("strong",{children:[S[0].damage," - ",_]})]}):(0,t.jsx)("ul",{className:"variant-list",children:S.map((e,r)=>(0,t.jsxs)("li",{children:[e.tag&&(0,t.jsxs)("em",{children:[e.tag,": "]}),(0,t.jsxs)("strong",{children:[e.damage," - ",_]})]},r))}),y[4]=v.ocv,y[5]=v.str,y[6]=k.con,y[7]=k.dcv,y[8]=k.dcvbonus,y[9]=k.ed,y[10]=k.pd,y[11]=r,y[12]=a,y[13]=n,y[14]=o,y[15]=i,y[16]=l,y[17]=d,y[18]=u,y[19]=h,y[20]=x}else a=y[12],n=y[13],o=y[14],i=y[15],l=y[16],d=y[17],u=y[18],h=y[19],x=y[20];return y[44]!==a||y[45]!==n||y[46]!==o||y[47]!==i||y[48]!==l||y[49]!==d||y[50]!==u||y[51]!==h?(b=(0,t.jsxs)("div",{className:a,children:[n,o,i,l,d,u,h]}),y[44]=a,y[45]=n,y[46]=o,y[47]=i,y[48]=l,y[49]=d,y[50]=u,y[51]=h,y[52]=b):b=y[52],y[53]!==b||y[54]!==x?(g=(0,t.jsx)("div",{className:x,children:b}),y[53]=b,y[54]=x,y[55]=g):g=y[55],g}function f(e,r){return(0,t.jsxs)("li",{children:[e.tag&&(0,t.jsxs)("em",{children:[e.tag,": "]}),(0,t.jsx)("strong",{children:e.roll})]},r)}function j(e){return{damage:function(e){if(e<=2)return"--";if(e<=4)return"½d6";if(e<=7)return"1d6";if(e<=9)return"1½d6";if(e<=12)return"2d6";if(e<=14)return"2½d6";if(e<=17)return"3d6";if(e<=19)return"3½d6";if(e<=22)return"4d6";if(e<=24)return"4½d6";if(e<=27)return"5d6";if(e<=29)return"5½d6";if(30===e)return"6d6";let r=Math.floor((e-30)/5);return`${6+r}d6`}(e.value),tag:e.label?`STR ${e.value}`:""}}function k(e){let r,a,n,o,i,l,d,u=(0,s.c)(16),{attacker:h,defender:x}=e;if(u[0]!==h.omcv||u[1]!==x.dmcv){for(let e of(r=[],p(h.omcv)))for(let a of p(x.dmcv)){let t=[];e.label&&t.push(`OMCV ${e.value}`),a.label&&t.push(`DMCV ${a.value}`),r.push({roll:c(e.value,a.value),tag:t.join(", ")})}u[0]=h.omcv,u[1]=x.dmcv,u[2]=r}else r=u[2];return u[3]!==h.omcv?(a=m(h.omcv),u[3]=h.omcv,u[4]=a):a=u[4],u[5]!==x.dmcv?(n=m(x.dmcv),u[5]=x.dmcv,u[6]=n):n=u[6],u[7]!==a||u[8]!==n?(o=(0,t.jsxs)("span",{className:"stat-label",children:["Mental Attack (OMCV ",a," vs DMCV"," ",n,"):"]}),u[7]=a,u[8]=n,u[9]=o):o=u[9],u[10]===Symbol.for("react.memo_cache_sentinel")?(i=(0,t.jsx)("br",{}),u[10]=i):i=u[10],u[11]!==r?(l=1===r.length?(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)("strong",{children:r[0].roll})]}):(0,t.jsx)("ul",{className:"variant-list",children:r.map(N)}),u[11]=r,u[12]=l):l=u[12],u[13]!==o||u[14]!==l?(d=(0,t.jsx)("div",{className:"combat-stats",children:(0,t.jsxs)("div",{className:"stat-group",children:[o,i,"Needs to roll:",l]})}),u[13]=o,u[14]=l,u[15]=d):d=u[15],d}function N(e,r){return(0,t.jsxs)("li",{children:[e.tag&&(0,t.jsxs)("em",{children:[e.tag,": "]}),(0,t.jsx)("strong",{children:e.roll})]},r)}function w(e){let r,a,n,o,i,l,d,c,u,h,x,b,y,v,f,j,k,N,w,_,O,$,I,D,E,V,P,F,A,R,M,z,T,J,L,B,q,G,H,K=(0,s.c)(91),{attacker:U,attackerIndex:Y,goesFirst:X}=e;if(K[0]!==U||K[1]!==Y||K[2]!==X){let e,s=p(U.spd).map(C);K[19]!==U||K[20]!==Y?(e=g(U,Y),K[19]=U,K[20]=Y,K[21]=e):e=K[21];let k=e;r="defensive-stats";let N=X?"*":"";K[22]!==k||K[23]!==N?(u=(0,t.jsxs)("strong",{children:[N,k,"'s Stats:"]}),K[22]=k,K[23]=N,K[24]=u):u=K[24],K[25]===Symbol.for("react.memo_cache_sentinel")?(h=(0,t.jsx)("br",{}),x=(0,t.jsx)("strong",{children:"DEX"}),K[25]=h,K[26]=x):(h=K[25],x=K[26]),b=": ",K[27]!==U.dex?(y=m(U.dex),K[27]=U.dex,K[28]=y):y=K[28],v=" |",f=" ",K[29]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)("strong",{children:"SPD"}),K[29]=j):j=K[29],a=": ",K[30]!==U.spd?(n=m(U.spd),K[30]=U.spd,K[31]=n):n=K[31],K[32]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)("br",{}),i=(0,t.jsx)("strong",{children:"Phases"}),K[32]=o,K[33]=i):(o=K[32],i=K[33]),l=":",d=" ",c=1===s.length?s[0].phases:(0,t.jsx)("span",{children:s.map(S)}),K[0]=U,K[1]=Y,K[2]=X,K[3]=r,K[4]=a,K[5]=n,K[6]=o,K[7]=i,K[8]=l,K[9]=d,K[10]=c,K[11]=u,K[12]=h,K[13]=x,K[14]=b,K[15]=y,K[16]=v,K[17]=f,K[18]=j}else r=K[3],a=K[4],n=K[5],o=K[6],i=K[7],l=K[8],d=K[9],c=K[10],u=K[11],h=K[12],x=K[13],b=K[14],y=K[15],v=K[16],f=K[17],j=K[18];return K[34]===Symbol.for("react.memo_cache_sentinel")?(k=(0,t.jsx)("br",{}),N=(0,t.jsx)("strong",{children:"PD"}),K[34]=k,K[35]=N):(k=K[34],N=K[35]),K[36]!==U.pd?(w=m(U.pd),K[36]=U.pd,K[37]=w):w=K[37],K[38]===Symbol.for("react.memo_cache_sentinel")?(_=(0,t.jsx)("strong",{children:"ED"}),K[38]=_):_=K[38],K[39]!==U.ed?(O=m(U.ed),K[39]=U.ed,K[40]=O):O=K[40],K[41]===Symbol.for("react.memo_cache_sentinel")?($=(0,t.jsx)("br",{}),I=(0,t.jsx)("strong",{children:"END"}),K[41]=$,K[42]=I):($=K[41],I=K[42]),K[43]!==U.end?(D=m(U.end),K[43]=U.end,K[44]=D):D=K[44],K[45]===Symbol.for("react.memo_cache_sentinel")?(E=(0,t.jsx)("strong",{children:"REC"}),K[45]=E):E=K[45],K[46]!==U.rec?(V=m(U.rec),K[46]=U.rec,K[47]=V):V=K[47],K[48]===Symbol.for("react.memo_cache_sentinel")?(P=(0,t.jsx)("br",{}),F=(0,t.jsx)("strong",{children:"BODY"}),K[48]=P,K[49]=F):(P=K[48],F=K[49]),K[50]!==U.body?(A=m(U.body),K[50]=U.body,K[51]=A):A=K[51],K[52]===Symbol.for("react.memo_cache_sentinel")?(R=(0,t.jsx)("strong",{children:"STUN"}),K[52]=R):R=K[52],K[53]!==U.stun?(M=m(U.stun),K[53]=U.stun,K[54]=M):M=K[54],K[55]===Symbol.for("react.memo_cache_sentinel")?(z=(0,t.jsx)("br",{}),T=(0,t.jsx)("strong",{children:"RUNNING"}),K[55]=z,K[56]=T):(z=K[55],T=K[56]),K[57]!==U.running?(J=m(U.running),K[57]=U.running,K[58]=J):J=K[58],K[59]===Symbol.for("react.memo_cache_sentinel")?(L=(0,t.jsx)("strong",{children:"LEAPING"}),K[59]=L):L=K[59],K[60]!==U.leaping?(B=m(U.leaping),K[60]=U.leaping,K[61]=B):B=K[61],K[62]===Symbol.for("react.memo_cache_sentinel")?(q=(0,t.jsx)("strong",{children:"FLYING"}),K[62]=q):q=K[62],K[63]!==U.flying?(G=m(U.flying),K[63]=U.flying,K[64]=G):G=K[64],K[65]!==r||K[66]!==a||K[67]!==n||K[68]!==o||K[69]!==i||K[70]!==l||K[71]!==d||K[72]!==c||K[73]!==w||K[74]!==u||K[75]!==O||K[76]!==D||K[77]!==V||K[78]!==A||K[79]!==h||K[80]!==M||K[81]!==J||K[82]!==B||K[83]!==G||K[84]!==x||K[85]!==b||K[86]!==y||K[87]!==v||K[88]!==f||K[89]!==j?(H=(0,t.jsxs)("div",{className:r,children:[u,h,x,b,y,v,f,j,a,n,o,i,l,d,c,k,N,": ",w," |"," ",_,": ",O,$,I,": ",D," |"," ",E,": ",V,P,F,": ",A," |"," ",R,": ",M,z,T,": ",J,"m |"," ",L," ",B,"m |"," ",q," ",G,"m"]}),K[65]=r,K[66]=a,K[67]=n,K[68]=o,K[69]=i,K[70]=l,K[71]=d,K[72]=c,K[73]=w,K[74]=u,K[75]=O,K[76]=D,K[77]=V,K[78]=A,K[79]=h,K[80]=M,K[81]=J,K[82]=B,K[83]=G,K[84]=x,K[85]=b,K[86]=y,K[87]=v,K[88]=f,K[89]=j,K[90]=H):H=K[90],H}function S(e,r){return(0,t.jsxs)("span",{children:[r>0&&(0,t.jsx)("strong",{children:" / "}),e.phases]},r)}function C(e){var r;return{phases:1===(r=e.value)?"7":2===r?"6, 12":3===r?"4, 8, 12":4===r?"3, 6, 9, 12":5===r?"3, 5, 8, 10, 12":6===r?"2, 4, 6, 8, 10, 12":7===r?"2, 4, 6, 7, 9, 11, 12":8===r?"2, 3, 5, 6, 8, 9, 11, 12":9===r?"2, 3, 4, 6, 7, 8, 10, 11, 12":10===r?"2, 3, 4, 5, 6, 8, 9, 10, 11, 12":11===r?"2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12":r>=12?"1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12":"--",tag:e.label?`${e.label} SPD ${e.value}`:""}}let _=`
:root {
    --bg-primary: #f5f5f5;
    --bg-secondary: white;
    --bg-tertiary: #f9f9f9;
    --bg-quaternary: #e8f4f8;
    --bg-defensive: #f0f0f0;

    --text-primary: #333;
    --text-secondary: #444;
    --text-tertiary: #555;
    --text-accent: #2c5aa0;

    --border-color: #ddd;
    --shadow: rgba(0,0,0,0.1);

    --button-bg: #2c5aa0;
    --button-hover: #1e3d6f;
    --button-success: #4CAF50;
    --button-success-hover: #45a049;
}

[data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --bg-tertiary: #242424;
    --bg-quaternary: #1e3347;
    --bg-defensive: #363636;

    --text-primary: #e0e0e0;
    --text-secondary: #d0d0d0;
    --text-tertiary: #b0b0b0;
    --text-accent: #5a9fd4;

    --border-color: #444;
    --shadow: rgba(0,0,0,0.3);

    --button-bg: #3a7bc8;
    --button-hover: #2e5fa2;
    --button-success: #5cb85c;
    --button-success-hover: #4cae4c;
}

body {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
}

.theme-toggle-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.theme-toggle {
    background: var(--bg-secondary);
    border: 2px solid var(--border-color);
    border-radius: 50px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 20px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px var(--shadow);
    width: auto;
    color: var(--text-primary);
}

.theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px var(--shadow);
    background: var(--bg-secondary);
}

.theme-toggle .sun-icon { display: inline; }
.theme-toggle .moon-icon { display: none; }
[data-theme="dark"] .theme-toggle .sun-icon { display: none; }
[data-theme="dark"] .theme-toggle .moon-icon { display: inline; }

h1 { text-align: center; color: var(--text-primary); }

.container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.character-card {
    flex: 1;
    min-width: 300px;
    background: var(--bg-secondary);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--shadow);
    transition: background-color 0.3s ease;
}

.character-card h2 {
    margin-top: 0;
    color: var(--text-secondary);
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 10px;
}

.input-group { margin-bottom: 10px; }

label {
    display: inline-block;
    width: 100px;
    font-weight: bold;
    color: var(--text-tertiary);
}

input {
    width: 150px;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Stat rows are a small flex layout to fit primary + secondary side-by-side */
.stat-row {
    display: flex;
    align-items: center;
    gap: 8px;
}

.stat-row label {
    width: 90px;
    flex-shrink: 0;
}

.stat-row .stat-input {
    width: 80px;
    flex: 0 0 80px;
}

.stat-row .stat-input.secondary {
    border-style: dashed;
    color: var(--text-tertiary);
}

.stat-row .stat-input.secondary.has-value {
    border-style: solid;
    color: var(--text-primary);
}

.stat-headers {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
    font-size: 11px;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.stat-header-label {
    width: 90px;
    flex-shrink: 0;
}

.stat-header-cell {
    width: 80px;
    flex: 0 0 80px;
    text-align: center;
    font-weight: bold;
}

.results {
    margin-top: 30px;
    background: var(--bg-tertiary);
    padding: 20px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.results h3 { margin-top: 0; color: var(--text-primary); }

.combat-stats {
    background: var(--bg-quaternary);
    padding: 15px;
    border-radius: 6px;
    margin-bottom: 15px;
    transition: background-color 0.3s ease;
}

/*
 * Results grid: a 2-column layout with one cell per section per attacker.
 * Each row auto-sizes to its taller cell, so corresponding sections on each
 * side always start at the same vertical position even when one side has
 * extra rows from secondary-value variants.
 */
.results-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 20px;
}

.results-grid > * {
    min-width: 0; /* let cells shrink instead of forcing horizontal overflow */
}

/* Inside the grid, gap handles spacing — drop intrinsic margins. */
.results-grid > .combat-stats,
.results-grid > .defensive-stats {
    margin-bottom: 0;
    margin-top: 0;
}

.results-grid > .panel-header {
    margin: 0;
    color: var(--text-primary);
}

/* Single-column fallback on narrow viewports. The interleaved order
 * (char1-header, char2-header, char1-physical, …) keeps section pairs
 * adjacent so they're still easy to compare on a phone. */
@media (max-width: 700px) {
    .results-grid {
        grid-template-columns: 1fr;
    }
}

.stat-group {
    margin: 10px 0;
    padding: 10px;
    background: var(--bg-secondary);
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.stat-label { font-weight: bold; color: var(--text-accent); }

/* Variant rows shown when a stat has both a primary and secondary value */
.variant-list {
    margin: 4px 0 4px 0;
    padding-left: 22px;
}

.variant-list li {
    margin: 2px 0;
}

.variant-list em {
    font-style: italic;
    color: var(--text-tertiary);
}

.defensive-stats {
    background: var(--bg-defensive);
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

button {
    background: var(--button-bg);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    width: 100%;
    transition: background-color 0.3s ease;
}

button:hover { background: var(--button-hover); }

textarea {
    width: 100%;
    height: 100px;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-family: monospace;
    font-size: 12px;
    margin-top: 5px;
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
    box-sizing: border-box;
}

.import-section {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 2px solid var(--border-color);
}

.import-button {
    background: var(--button-success);
    margin-top: 5px;
}

.import-button:hover { background: var(--button-success-hover); }
`,O=document.getElementById("root");O&&o.createRoot(O).render((0,t.jsx)(n.StrictMode,{children:(0,t.jsx)(function(){let[e,r]=(0,n.useState)(()=>d()),[a,o]=(0,n.useState)(()=>d()),[s,i]=(0,n.useState)(!1),[l,c]=(0,n.useState)(()=>{if("u"<typeof window)return"light";try{let e=localStorage.getItem("theme");return"dark"===e?"dark":"light"}catch{return"light"}});(0,n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",l);try{localStorage.setItem("theme",l)}catch{}},[l]);let p=(0,n.useCallback)(()=>{c(e=>"dark"===e?"light":"dark")},[]);(0,n.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&e.shiftKey&&"D"===e.key&&(e.preventDefault(),p())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[p]);let m=e.dex.primary>a.dex.primary,u=a.dex.primary>e.dex.primary;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:_}),(0,t.jsx)("h1",{children:"HERO System 6e Combat Comparison Tool"}),(0,t.jsx)("div",{className:"theme-toggle-container",children:(0,t.jsxs)("button",{type:"button",className:"theme-toggle","aria-label":"Toggle theme",onClick:p,children:[(0,t.jsx)("span",{className:"sun-icon",children:"☀️"}),(0,t.jsx)("span",{className:"moon-icon",children:"🌙"})]})}),s&&(0,t.jsxs)("div",{className:"results",children:[(0,t.jsx)("h3",{children:"Combat Comparison Results"}),(0,t.jsx)("div",{id:"comparison-content",children:(0,t.jsxs)("div",{className:"results-grid",children:[(0,t.jsx)(y,{attacker:e,defender:a,attackerIndex:1,defenderIndex:2}),(0,t.jsx)(y,{attacker:a,defender:e,attackerIndex:2,defenderIndex:1}),(0,t.jsx)(v,{attacker:e,defender:a,attackerIndex:1,defenderIndex:2}),(0,t.jsx)(v,{attacker:a,defender:e,attackerIndex:2,defenderIndex:1}),(0,t.jsx)(k,{attacker:e,defender:a,attackerIndex:1,defenderIndex:2}),(0,t.jsx)(k,{attacker:a,defender:e,attackerIndex:2,defenderIndex:1}),(0,t.jsx)(w,{attacker:e,attackerIndex:1,goesFirst:m}),(0,t.jsx)(w,{attacker:a,attackerIndex:2,goesFirst:u})]})})]}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(b,{index:1,character:e,onChange:r,onImport:r}),(0,t.jsx)(b,{index:2,character:a,onChange:o,onImport:o})]}),(0,t.jsx)("button",{type:"button",onClick:()=>i(!0),children:"Compare Characters"})]})},{})}))}},o={};function s(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return n[e](a,a.exports,s),a.exports}s.m=n,s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e=[],s.O=(r,a,t,n)=>{if(a){n=n||0;for(var o=e.length;o>0&&e[o-1][2]>n;o--)e[o]=e[o-1];e[o]=[a,t,n];return}for(var i=1/0,o=0;o<e.length;o++){for(var[a,t,n]=e[o],l=!0,d=0;d<a.length;d++)(!1&n||i>=n)&&Object.keys(s.O).every(e=>s.O[e](a[d]))?a.splice(d--,1):(l=!1,n<i&&(i=n));if(l){e.splice(o--,1);var c=t();void 0!==c&&(r=c)}}return r},r={410:0},s.O.j=e=>0===r[e],a=(e,a)=>{var t,n,[o,i,l]=a,d=0;if(o.some(e=>0!==r[e])){for(t in i)s.o(i,t)&&(s.m[t]=i[t]);if(l)var c=l(s)}for(e&&e(a);d<o.length;d++)n=o[d],s.o(r,n)&&r[n]&&r[n][0](),r[n]=0;return s.O(c)},(t=self.rspackChunkhero_combat_6e=self.rspackChunkhero_combat_6e||[]).forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t));var i=s.O(void 0,["783"],()=>s(618));i=s.O(i)})();