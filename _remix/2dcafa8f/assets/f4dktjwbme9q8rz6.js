import{L as a}from"./kpnhoyfpksy4ugnj.js";import{s as i,t as e,L as s,e as n,f as o,g as P,j as p,c as Q}from"./dzl81pcqtmhu0qq8.js";import"./iy5hn0mjbnzt38c5.js";import"./jf8dax6efxk3ntrb.js";import"./fsip9vfxppjksmhp.js";import"./k5y7kdc8zx0zxgg3.js";import"./h6kbjc718o9wdihq.js";import"./c3pi5fxvo5runnrv.js";import"./k1syenyfb41jsafy.js";import"./hqt4zfekukrwmgoh.js";import"./hjtfi4y9shjj710l.js";import"./ekvxzdf96oarhu21.js";import"./eqgxp8owtrhh3q22.js";import"./vaswdq1ww4snn3z9.js";import"./f597fz72anxa345c.js";import"./liz48xinx6ndw8t4.js";import"./e3v3yphi6j699k9m.js";import"./jn59n5aa3tm5bet0.js";import"./mwrv65g4wvyripes.js";import"./go41oml7kvtk8m11.js";import"./hewk9wb6mx1qiqnx.js";import"./b4m1xo20435mqr8f.js";import"./fr1q197ib394lfx1.js";import"./jdi7i9l9ih2o13vl.js";import"./ca133gzxpn4mqfre.js";import"./hkgypyj4gy3dzmj2.js";import"./hpk7qejh2pyff0ra.js";import"./fvkpodyzwrbfdbqo.js";const m=i({String:e.string,Number:e.number,"True False":e.bool,PropertyName:e.propertyName,Null:e.null,",":e.separator,"[ ]":e.squareBracket,"{ }":e.brace}),c=a.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[m],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),_=()=>t=>{try{JSON.parse(t.state.doc.toString())}catch(O){if(!(O instanceof SyntaxError))throw O;const r=g(O,t.state.doc);return[{from:r,message:O.message,severity:"error",to:r}]}return[]};function g(t,O){let r;return(r=t.message.match(/at position (\d+)/))?Math.min(+r[1],O.length):(r=t.message.match(/at line (\d+) column (\d+)/))?Math.min(O.line(+r[1]).from+ +r[2]-1,O.length):0}const u=s.define({name:"json",parser:c.configure({props:[n.add({Object:o({except:/^\s*\}/}),Array:o({except:/^\s*\]/})}),P.add({"Object Array":p})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function v(){return new Q(u)}export{v as json,u as jsonLanguage,_ as jsonParseLinter};
//# sourceMappingURL=f4dktjwbme9q8rz6.js.map