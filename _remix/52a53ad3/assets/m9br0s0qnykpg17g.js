import{L as a}from"./noz7dxbrd4bbd73d.js";import{s,t as r,L as i,e as n,f as o,g as P,j as p,c as Q}from"./0vjtpthwjdr40io2.js";import"./c5s54ri501sk4hmd.js";import"./en1fj6qnfiapfm2g.js";import"./5gafjzaj6m3lkt92.js";import"./gs8ccw8bowd6yhiq.js";import"./bjq3ybfqze8y640h.js";import"./jkp1lymg1k45oqi4.js";import"./ksz8z5521n6rqjsy.js";import"./dyogpewvq1z2xru3.js";import"./gapao1a0kn0bo862.js";import"./h427fzlqv26eg4a1.js";import"./oymnza3474an9ljm.js";import"./ddh0nhmx07k1epkf.js";import"./jwr7pwwam8xzg21c.js";import"./ctbikeapapxchszf.js";import"./fsetajgwqbr952wa.js";import"./gplpz9l86apwrc2m.js";import"./j3xik4j4kij3v69h.js";import"./fq0bbcy4lguytj3r.js";import"./ld368pddw8xvmebn.js";import"./na6rxmfkzim7jm45.js";const m=s({String:r.string,Number:r.number,"True False":r.bool,PropertyName:r.propertyName,Null:r.null,",":r.separator,"[ ]":r.squareBracket,"{ }":r.brace}),c=a.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[m],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),q=()=>t=>{try{JSON.parse(t.state.doc.toString())}catch(O){if(!(O instanceof SyntaxError))throw O;const e=g(O,t.state.doc);return[{from:e,message:O.message,severity:"error",to:e}]}return[]};function g(t,O){let e;return(e=t.message.match(/at position (\d+)/))?Math.min(+e[1],O.length):(e=t.message.match(/at line (\d+) column (\d+)/))?Math.min(O.line(+e[1]).from+ +e[2]-1,O.length):0}const u=i.define({name:"json",parser:c.configure({props:[n.add({Object:o({except:/^\s*\}/}),Array:o({except:/^\s*\]/})}),P.add({"Object Array":p})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function U(){return new Q(u)}export{U as json,u as jsonLanguage,q as jsonParseLinter};
//# sourceMappingURL=m9br0s0qnykpg17g.js.map