import{L as a}from"./ovhjms5z0xah1pcy.js";import{s,t as e,L as i,e as n,f as o,g as P,j as p,c as Q}from"./ick5hbqiormxl9e7.js";import"./gniydcqrsinykpr6.js";import"./itrk5c5jq0xa5b9u.js";import"./h3lg90w4eburb9l1.js";import"./eisknr83d7xonp4v.js";import"./ib0rzjo7jsw69270.js";import"./ofm77phditeesz2a.js";import"./g34w7dm96iu72qbz.js";import"./bv82nytha89yynjj.js";import"./d57ytrufyxi9ftf7.js";import"./c46pq1bupx9ciq93.js";import"./mwdkpqhnensqpx9w.js";import"./qhqoq7wpxzplmlem.js";import"./gu129tfluy2pk8r8.js";import"./kdtfwn2zgs7lv4nm.js";import"./jzcja7m2krt3h1u8.js";import"./g4oc09mc36zm5yyj.js";import"./gobs7jvyy4dso3c3.js";import"./4jfs12k7mvkh5eep.js";import"./hrzxq093sk8tzi40.js";import"./30zkryfp9qppzscc.js";import"./o19gqs9pq4dz93zr.js";import"./e9ujw9iv31g6k44l.js";const m=s({String:e.string,Number:e.number,"True False":e.bool,PropertyName:e.propertyName,Null:e.null,",":e.separator,"[ ]":e.squareBracket,"{ }":e.brace}),c=a.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[m],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),E=()=>t=>{try{JSON.parse(t.state.doc.toString())}catch(O){if(!(O instanceof SyntaxError))throw O;const r=g(O,t.state.doc);return[{from:r,message:O.message,severity:"error",to:r}]}return[]};function g(t,O){let r;return(r=t.message.match(/at position (\d+)/))?Math.min(+r[1],O.length):(r=t.message.match(/at line (\d+) column (\d+)/))?Math.min(O.line(+r[1]).from+ +r[2]-1,O.length):0}const u=i.define({name:"json",parser:c.configure({props:[n.add({Object:o({except:/^\s*\}/}),Array:o({except:/^\s*\]/})}),P.add({"Object Array":p})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function G(){return new Q(u)}export{G as json,u as jsonLanguage,E as jsonParseLinter};
//# sourceMappingURL=n9pdb51lfamv3760.js.map