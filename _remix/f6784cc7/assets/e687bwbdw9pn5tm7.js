import{L as a}from"./ehpbyha6xfu7az0j.js";import{s as i,t as e,L as s,e as n,f as o,g as P,j as p,c as Q}from"./jnm952nlohh93m6z.js";import"./i6xi3s7uv52pwxhq.js";import"./5owd3ee156wpz27v.js";import"./jy1r24jznpivy1dp.js";import"./fqif7jixkccova1k.js";import"./yh63950ulj5nrzoi.js";import"./iki8xg9zvxe0x3up.js";import"./lmzf96u3byd7ysa0.js";import"./n9bl8h8dwgedvxgc.js";import"./m40jmshfqkclfeg2.js";import"./gk6m9wtxsqq161m3.js";import"./nymvvi4k8c99doop.js";import"./c1e3a7wd7o4327i5.js";import"./i1wh9kgb3xj7xo01.js";import"./c6yqva1b1l3p3i6e.js";import"./d76uy7jpp8ubqzph.js";import"./nshgx7w2afmw4s9d.js";import"./d9w2pj5bnp7mjzpk.js";import"./hsx2th79t7rdlzqx.js";import"./lugcfsfrjzz2us1d.js";import"./ig23gnu6ta1oxi7a.js";import"./g850gwkouqxm2v39.js";import"./vdkdw1y5n43i5ns4.js";import"./g0i55xz5e58rypbb.js";import"./m9sog0opgwp5xenq.js";const m=i({String:e.string,Number:e.number,"True False":e.bool,PropertyName:e.propertyName,Null:e.null,",":e.separator,"[ ]":e.squareBracket,"{ }":e.brace}),c=a.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[m],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),z=()=>t=>{try{JSON.parse(t.state.doc.toString())}catch(O){if(!(O instanceof SyntaxError))throw O;const r=g(O,t.state.doc);return[{from:r,message:O.message,severity:"error",to:r}]}return[]};function g(t,O){let r;return(r=t.message.match(/at position (\d+)/))?Math.min(+r[1],O.length):(r=t.message.match(/at line (\d+) column (\d+)/))?Math.min(O.line(+r[1]).from+ +r[2]-1,O.length):0}const u=s.define({name:"json",parser:c.configure({props:[n.add({Object:o({except:/^\s*\}/}),Array:o({except:/^\s*\]/})}),P.add({"Object Array":p})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function B(){return new Q(u)}export{B as json,u as jsonLanguage,z as jsonParseLinter};
//# sourceMappingURL=e687bwbdw9pn5tm7.js.map