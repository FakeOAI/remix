import{L as a}from"./dpax0bzwjcsh9kkz.js";import{s as i,t as e,L as s,e as n,f as o,g as P,j as p,c as Q}from"./o4n0mfpgxkdyrv4z.js";import"./fc5wvqf6bpwfisto.js";import"./dox08siw8jpmvomc.js";import"./fqwcm8tlxlxeznk9.js";import"./ns1lhz8sjrsxmshw.js";import"./iholtkkr5grlradu.js";import"./kdbhtbgulpasozq8.js";import"./dl9ejqfgqqudmtu4.js";import"./jsdkerkdejse6xvb.js";import"./mo5vwcgxj3k03z2d.js";import"./i88bh24qis64ygc6.js";import"./f4fahqjmmck92axl.js";import"./g77py3egqoj5m045.js";import"./eagsb0h5hjvq1bwj.js";import"./fub3qur6pkjxggnx.js";import"./eldxuy3s54b4zcvl.js";import"./eur3skihl3colpxk.js";import"./btldgutg0osc4iuj.js";import"./mhu6r7ghk0im1u7r.js";import"./b5y1wjr6mtaq20i2.js";import"./ct45fs11m9lhg2f3.js";import"./e5game9ahtm2rhqo.js";import"./h28e3qjqifm65lm8.js";import"./ijk82xwvx9ypryb4.js";import"./d2zu9h24iwvxae3r.js";const m=i({String:e.string,Number:e.number,"True False":e.bool,PropertyName:e.propertyName,Null:e.null,",":e.separator,"[ ]":e.squareBracket,"{ }":e.brace}),c=a.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[m],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),z=()=>t=>{try{JSON.parse(t.state.doc.toString())}catch(O){if(!(O instanceof SyntaxError))throw O;const r=g(O,t.state.doc);return[{from:r,message:O.message,severity:"error",to:r}]}return[]};function g(t,O){let r;return(r=t.message.match(/at position (\d+)/))?Math.min(+r[1],O.length):(r=t.message.match(/at line (\d+) column (\d+)/))?Math.min(O.line(+r[1]).from+ +r[2]-1,O.length):0}const u=s.define({name:"json",parser:c.configure({props:[n.add({Object:o({except:/^\s*\}/}),Array:o({except:/^\s*\]/})}),P.add({"Object Array":p})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function B(){return new Q(u)}export{B as json,u as jsonLanguage,z as jsonParseLinter};
//# sourceMappingURL=nthpaodatg5ibo63.js.map