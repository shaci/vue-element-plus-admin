var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,i=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&o(e,s,t[s]);if(n)for(var s of n(t))a.call(t,s)&&o(e,s,t[s]);return e},c=(e,n)=>t(e,s(n));import{B as l,d as h,a7 as u,q as d,m as g,H as p,s as f,o as m,c as b,g as y,w as k,X as w,a as M,n as x,e as v,Y as j,j as T}from"./index.a60e422a.js";import{E as I}from"./el-input.76336542.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const S=(e,t)=>e.push.apply(e,t),A=(e,t)=>e.split("").map((e=>t[e]||e)).join(""),D=e=>e.sort(((e,t)=>e.i-t.i||e.j-t.j)),C=e=>{const t={};let s=1;return e.forEach((e=>{t[e]=s,s+=1})),t};const O={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},P=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,L=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,q=/^[A-Z\xbf-\xdf]+$/,N=/^[^a-z\xdf-\xff]+$/,G=/^[a-z\xdf-\xff]+$/,Y=/^[^A-Z\xbf-\xdf]+$/,$=/[a-z\xdf-\xff]/,_=/[A-Z\xbf-\xdf]/,R=/[^A-Za-z\xbf-\xdf]/gi,V=/^\d+$/,F=(new Date).getFullYear(),W={recentYear:/19\d\d|200\d|201\d|202\d/g};class z{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return D(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let r=n+5;r<=n+9&&!(r>=e.length);r+=1){const a=e.slice(n,+r+1||9e9),o=s.exec(a);if(null!=o){const e=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);null!=e&&t.push({pattern:"date",token:a,i:n,j:r,separator:o[2],year:e.year,month:e.month,day:e.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=e=>Math.abs(e.year-F);for(let r=0;r<=Math.abs(e.length-4);r+=1)for(let a=r+3;a<=r+7&&!(a>=e.length);a+=1){const o=e.slice(r,+a+1||9e9);if(s.exec(o)){const e=[],s=o.length;if(O[s].forEach((([t,s])=>{const n=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,t),10),parseInt(o.slice(t,s),10),parseInt(o.slice(s),10)]);null!=n&&e.push(n)})),e.length>0){let s=e[0],i=n(e[0]);e.slice(1).forEach((e=>{const t=n(e);t<i&&(s=e,i=t)})),t.push({pattern:"date",token:o,i:r,j:a,separator:"",year:s.year,month:s.month,day:s.day})}}}return t}filterNoise(e){return e.filter((t=>{let s=!1;const n=e.length;for(let r=0;r<n;r+=1){const n=e[r];if(t!==n&&n.i<=t.i&&n.j>=t.j){s=!0;break}}return!s}))}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let r=0,a=e.length;r<a;r+=1){const a=e[r];if(a>99&&a<1e3||a>2050)return null;a>31&&(s+=1),a>12&&(t+=1),a<=0&&(n+=1)}return s>=2||3===t||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[e,s]=t[n];if(1e3<=e&&e<=2050){const t=this.mapIntegersToDayMonth(s);return null!=t?{year:e,month:t.month,day:t.day}:null}}for(let n=0;n<s;n+=1){const[e,s]=t[n],r=this.mapIntegersToDayMonth(s);if(null!=r)return{year:this.twoToFourDigitYear(e),month:r.month,day:r.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const e=t[s],n=e[0],r=e[1];if(n>=1&&n<=31&&r>=1&&r<=12)return{day:n,month:r}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const B=new Uint32Array(65536),H=(e,t)=>{if(e.length>t.length){const s=t;t=e,e=s}return 0===e.length?t.length:e.length<=32?((e,t)=>{const s=e.length,n=t.length,r=1<<s-1;let a=-1,o=0,i=s,c=s;for(;c--;)B[e.charCodeAt(c)]|=1<<c;for(c=0;c<n;c++){let e=B[t.charCodeAt(c)];const s=e|o;e|=(e&a)+a^a,o|=~(e|a),a&=e,o&r&&i++,a&r&&i--,o=o<<1|1,a=a<<1|~(s|o),o&=s}for(c=s;c--;)B[e.charCodeAt(c)]=0;return i})(e,t):((e,t)=>{const s=e.length,n=t.length,r=[],a=[],o=Math.ceil(s/32),i=Math.ceil(n/32);let c=n;for(let p=0;p<o;p++)a[p]=-1,r[p]=0;let l=0;for(;l<i-1;l++){let o=0,i=-1;const h=32*l,u=Math.min(32,n)+h;for(let e=h;e<u;e++)B[t.charCodeAt(e)]|=1<<e;c=n;for(let t=0;t<s;t++){const s=B[e.charCodeAt(t)],n=a[t/32|0]>>>t&1,c=r[t/32|0]>>>t&1,l=s|o,h=((s|c)&i)+i^i|s|c;let u=o|~(h|i),d=i&h;u>>>31^n&&(a[t/32|0]^=1<<t),d>>>31^c&&(r[t/32|0]^=1<<t),u=u<<1|n,d=d<<1|c,i=d|~(l|u),o=u&l}for(let e=h;e<u;e++)B[t.charCodeAt(e)]=0}let h=0,u=-1;const d=32*l,g=Math.min(32,n-d)+d;for(let p=d;p<g;p++)B[t.charCodeAt(p)]|=1<<p;c=n;for(let p=0;p<s;p++){const t=B[e.charCodeAt(p)],s=a[p/32|0]>>>p&1,o=r[p/32|0]>>>p&1,i=t|h,l=((t|o)&u)+u^u|t|o;let d=h|~(l|u),g=u&l;c+=d>>>n-1&1,c-=g>>>n-1&1,d>>>31^s&&(a[p/32|0]^=1<<p),g>>>31^o&&(r[p/32|0]^=1<<p),d=d<<1|s,g=g<<1|o,u=g|~(i|d),h=d&i}for(let p=d;p<g;p++)B[t.charCodeAt(p)]=0;return c})(e,t)};var U=H;const Z=(e,t,s)=>{let n=0;const r=Object.keys(t).find((t=>{const r=((e,t,s)=>{const n=e.length<=t.length,r=e.length<=s;return n||r?Math.ceil(e.length/4):s})(e,t,s),a=U(e,t),o=a<=r;return o&&(n=a),o}));return r?{levenshteinDistance:n,levenshteinDistanceEntry:r}:{}};var X={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},K={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};const J=new class{constructor(){this.matchers={},this.l33tTable=X,this.dictionary={userInputs:[]},this.rankedDictionaries={},this.translations=K,this.graphs={},this.availableGraphs=[],this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),void 0!==e.useLevenshteinDistance&&(this.useLevenshteinDistance=e.useLevenshteinDistance),void 0!==e.levenshteinThreshold&&(this.levenshteinThreshold=e.levenshteinThreshold)}setTranslations(e){if(!this.checkCustomTranslations(e))throw new Error("Invalid translations object fallback to keys");this.translations=e}checkCustomTranslations(e){let t=!0;return Object.keys(K).forEach((s=>{if(s in e){const n=s;Object.keys(K[n]).forEach((s=>{s in e[n]||(t=!1)}))}else t=!1})),t}setRankedDictionaries(){const e={};Object.keys(this.dictionary).forEach((t=>{e[t]=this.getRankedDictionary(t)})),this.rankedDictionaries=e}getRankedDictionary(e){const t=this.dictionary[e];if("userInputs"===e){const e=[];return t.forEach((t=>{const s=typeof t;"string"!==s&&"number"!==s&&"boolean"!==s||e.push(t.toString().toLowerCase())})),C(e)}return C(t)}extendUserInputsDictionary(e){this.dictionary.userInputs?this.dictionary.userInputs=[...this.dictionary.userInputs,...e]:this.dictionary.userInputs=e,this.rankedDictionaries.userInputs=this.getRankedDictionary("userInputs")}addMatcher(e,t){this.matchers[e]||(this.matchers[e]=t)}};class Q{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map((t=>c(i({},t),{token:t.token.split("").reverse().join(""),reversed:!0,i:e.length-1-t.j,j:e.length-1-t.i})))}}class ee{constructor(e){this.defaultMatch=e}match({password:e}){const t=[],s=this.enumerateL33tSubs(this.relevantL33tSubtable(e,J.l33tTable));for(let r=0;r<s.length;r+=1){const a=s[r];if(n=a,0===Object.keys(n).length)break;const o=A(e,a);this.defaultMatch({password:o}).forEach((s=>{const n=e.slice(s.i,+s.j+1||9e9);if(n.toLowerCase()!==s.matchedWord){const e={};Object.keys(a).forEach((t=>{const s=a[t];-1!==n.indexOf(t)&&(e[t]=s)}));const r=Object.keys(e).map((t=>`${t} -> ${e[t]}`)).join(", ");t.push(c(i({},s),{l33t:!0,token:n,sub:e,subDisplay:r}))}}))}var n;return t.filter((e=>e.token.length>1))}relevantL33tSubtable(e,t){const s={},n={};return e.split("").forEach((e=>{s[e]=!0})),Object.keys(t).forEach((e=>{const r=t[e].filter((e=>e in s));r.length>0&&(n[e]=r)})),n}enumerateL33tSubs(e){const t=Object.keys(e);return this.getSubs(t,[[]],e).map((e=>{const t={};return e.forEach((([e,s])=>{t[e]=s})),t}))}getSubs(e,t,s){if(!e.length)return t;const n=e[0],r=e.slice(1),a=[];s[n].forEach((e=>{t.forEach((t=>{let s=-1;for(let n=0;n<t.length;n+=1)if(t[n][0]===e){s=n;break}if(-1===s){const s=t.concat([[e,n]]);a.push(s)}else{const r=t.slice(0);r.splice(s,1),r.push([e,n]),a.push(t),a.push(r)}}))}));const o=this.dedup(a);return r.length?this.getSubs(r,o,s):o}dedup(e){const t=[],s={};return e.forEach((e=>{const n=e.map(((e,t)=>[e,t]));n.sort();const r=n.map((([e,t])=>`${e},${t}`)).join("-");r in s||(s[r]=!0,t.push(e))})),t}}class te{constructor(){this.l33t=new ee(this.defaultMatch),this.reverse=new Q(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return D(t)}defaultMatch({password:e}){const t=[],s=e.length,n=e.toLowerCase();return Object.keys(J.rankedDictionaries).forEach((r=>{const a=J.rankedDictionaries[r];for(let o=0;o<s;o+=1)for(let c=o;c<s;c+=1){const l=n.slice(o,+c+1||9e9),h=l in a;let u={};const d=0===o&&c===s-1;J.useLevenshteinDistance&&d&&!h&&(u=Z(l,a,J.levenshteinThreshold));const g=0!==Object.keys(u).length;if(h||g){const s=a[g?u.levenshteinDistanceEntry:l];t.push(i({pattern:"dictionary",i:o,j:c,token:e.slice(o,+c+1||9e9),matchedWord:l,rank:s,dictionaryName:r,reversed:!1,l33t:!1},u))}}})),t}}class se{match({password:e,regexes:t=W}){const s=[];return Object.keys(t).forEach((n=>{const r=t[n];r.lastIndex=0;const a=r.exec(e);if(a){const e=a[0];s.push({pattern:"regex",token:e,i:a.index,j:a.index+a[0].length-1,regexName:n,regexMatch:a})}})),D(s)}}var ne={nCk(e,t){let s=e;if(t>s)return 0;if(0===t)return 1;let n=1;for(let r=1;r<=t;r+=1)n*=s,n/=r,s-=1;return n},log10:e=>Math.log(e)/Math.log(10),log2:e=>Math.log(e)/Math.log(2),factorial(e){let t=1;for(let s=2;s<=e;s+=1)t*=s;return t}};var re=e=>{const t=e.replace(R,"");if(t.match(Y)||t.toLowerCase()===t)return 1;const s=[P,L,N],n=s.length;for(let r=0;r<n;r+=1){const e=s[r];if(t.match(e))return 2}return(e=>{const t=e.split(""),s=t.filter((e=>e.match($))).length,n=t.filter((e=>e.match(_))).length;let r=0;const a=Math.min(s,n);for(let o=1;o<=a;o+=1)r+=ne.nCk(s+n,o);return r})(t)};const ae=({token:e,graph:t,turns:s})=>{const n=Object.keys(J.graphs[t]).length,r=(e=>{let t=0;return Object.keys(e).forEach((s=>{const n=e[s];t+=n.filter((e=>!!e)).length})),t/=Object.entries(e).length,t})(J.graphs[t]);let a=0;const o=e.length;for(let i=2;i<=o;i+=1){const e=Math.min(s,i-1);for(let t=1;t<=e;t+=1)a+=ne.nCk(i-1,t-1)*n*r**t}return a};const oe={bruteforce:({token:e})=>{let t,s=10**e.length;return s===Number.POSITIVE_INFINITY&&(s=Number.MAX_VALUE),t=1===e.length?11:51,Math.max(s,t)},date:({year:e,separator:t})=>{let s=365*Math.max(Math.abs(e-F),20);return t&&(s*=4),s},dictionary:({rank:e,reversed:t,l33t:s,sub:n,token:r})=>{const a=e,o=re(r),i=(({l33t:e,sub:t,token:s})=>{if(!e)return 1;let n=1;const r=t;return Object.keys(r).forEach((e=>{const{subbedCount:t,unsubbedCount:a}=(({subs:e,subbed:t,token:s})=>{const n=e[t],r=s.toLowerCase().split("");return{subbedCount:r.filter((e=>e===t)).length,unsubbedCount:r.filter((e=>e===n)).length}})({subs:r,subbed:e,token:s});if(0===t||0===a)n*=2;else{const e=Math.min(a,t);let s=0;for(let n=1;n<=e;n+=1)s+=ne.nCk(a+t,n);n*=s}})),n})({l33t:s,sub:n,token:r});return{baseGuesses:a,uppercaseVariations:o,l33tVariations:i,calculation:a*o*i*(t?2:1)}},regex:({regexName:e,regexMatch:t,token:s})=>{const n={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};return e in n?n[e]**s.length:"recentYear"===e?Math.max(Math.abs(parseInt(t[0],10)-F),20):0},repeat:({baseGuesses:e,repeatCount:t})=>e*t,sequence:({token:e,ascending:t})=>{const s=e.charAt(0);let n=0;return n=["a","A","z","Z","0","1","9"].includes(s)?4:s.match(/\d/)?10:26,t||(n*=2),n*e.length},spatial:({graph:e,token:t,shiftedCount:s,turns:n})=>{let r=ae({token:t,graph:e,turns:n});if(s){const e=t.length-s;if(0===s||0===e)r*=2;else{let t=0;for(let n=1;n<=Math.min(s,e);n+=1)t+=ne.nCk(s+e,n);r*=t}}return Math.round(r)}};var ie=(e,t)=>{const s={};if("guesses"in e&&null!=e.guesses)return e;const n=((e,t)=>{let s=1;return e.token.length<t.length&&(s=1===e.token.length?10:50),s})(e,t),r=((e,t)=>oe[e]?oe[e](t):J.matchers[e]&&"scoring"in J.matchers[e]?J.matchers[e].scoring(t):0)(e.pattern,e);let a=0;"number"==typeof r?a=r:"dictionary"===e.pattern&&(a=r.calculation,s.baseGuesses=r.baseGuesses,s.uppercaseVariations=r.uppercaseVariations,s.l33tVariations=r.l33tVariations);const o=Math.max(a,n);return c(i(i({},e),s),{guesses:o,guessesLog10:ne.log10(o)})};const ce={password:"",optimal:{},excludeAdditive:!1,fillArray(e,t){const s=[];for(let n=0;n<e;n+=1){let e=[];"object"===t&&(e={}),s.push(e)}return s},makeBruteforceMatch(e,t){return{pattern:"bruteforce",token:this.password.slice(e,+t+1||9e9),i:e,j:t}},update(e,t){const s=e.j,n=ie(e,this.password);let r=n.guesses;t>1&&(r*=this.optimal.pi[n.i-1][t-1]);let a=ne.factorial(t)*r;this.excludeAdditive||(a+=1e4**(t-1));let o=!1;Object.keys(this.optimal.g[s]).forEach((e=>{const n=this.optimal.g[s][e];parseInt(e,10)<=t&&n<=a&&(o=!0)})),o||(this.optimal.g[s][t]=a,this.optimal.m[s][t]=n,this.optimal.pi[s][t]=r)},bruteforceUpdate(e){let t=this.makeBruteforceMatch(0,e);this.update(t,1);for(let s=1;s<=e;s+=1){t=this.makeBruteforceMatch(s,e);const n=this.optimal.m[s-1];Object.keys(n).forEach((e=>{"bruteforce"!==n[e].pattern&&this.update(t,parseInt(e,10)+1)}))}},unwind(e){const t=[];let s=e-1,n=0,r=1/0;const a=this.optimal.g[s];for(a&&Object.keys(a).forEach((e=>{const t=a[e];t<r&&(n=parseInt(e,10),r=t)}));s>=0;){const e=this.optimal.m[s][n];t.unshift(e),s=e.i-1,n-=1}return t}};var le={mostGuessableMatchSequence(e,t,s=!1){ce.password=e,ce.excludeAdditive=s;const n=e.length;let r=ce.fillArray(n,"array");t.forEach((e=>{r[e.j].push(e)})),r=r.map((e=>e.sort(((e,t)=>e.i-t.i)))),ce.optimal={m:ce.fillArray(n,"object"),pi:ce.fillArray(n,"object"),g:ce.fillArray(n,"object")};for(let c=0;c<n;c+=1)r[c].forEach((e=>{e.i>0?Object.keys(ce.optimal.m[e.i-1]).forEach((t=>{ce.update(e,parseInt(t,10)+1)})):ce.update(e,1)})),ce.bruteforceUpdate(c);const a=ce.unwind(n),o=a.length,i=this.getGuesses(e,o);return{password:e,guesses:i,guessesLog10:ne.log10(i),sequence:a}},getGuesses(e,t){const s=e.length;let n=0;return n=0===e.length?1:ce.optimal.g[s-1][t],n}};class he{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const r=this.getGreedyMatch(e,n),a=this.getLazyMatch(e,n);if(null==r)break;const{match:o,baseToken:i}=this.setMatchToken(r,a);if(o){const e=o.index+o[0].length-1,r=this.getBaseGuesses(i,t);s.push(this.normalizeMatch(i,e,o,r)),n=e+1}}return s.some((e=>e instanceof Promise))?Promise.all(s):s}normalizeMatch(e,t,s,n){const r={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then((e=>c(i({},r),{baseGuesses:e}))):c(i({},r),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,r="";if(t&&e[0].length>t[0].length){n=e;const t=s.exec(n[0]);t&&(r=t[1])}else n=t,n&&(r=n[1]);return{match:n,baseToken:r}}getBaseGuesses(e,t){const s=t.match(e);if(s instanceof Promise)return s.then((t=>le.mostGuessableMatchSequence(e,t).guesses));return le.mostGuessableMatchSequence(e,s).guesses}}class ue{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(1===e.length)return[];let s=0,n=null;const r=e.length;for(let a=1;a<r;a+=1){const r=e.charCodeAt(a)-e.charCodeAt(a-1);if(null==n&&(n=r),r!==n){const o=a-1;this.update({i:s,j:o,delta:n,password:e,result:t}),s=o,n=r}}return this.update({i:s,j:r-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:r}){if(t-e>1||1===Math.abs(s)){const a=Math.abs(s);if(a>0&&a<=this.MAX_DELTA){const a=n.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:i}=this.getSequence(a);return r.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:i,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return G.test(e)?(t="lower",s=26):q.test(e)?(t="upper",s=26):V.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class de{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(J.graphs).forEach((s=>{const n=J.graphs[s];S(t,this.helper(e,n,s))})),D(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const r=[];let a=0;const o=e.length;for(;a<o-1;){let i=a+1,c=0,l=0;for(n=this.checkIfShifted(s,e,a);;){const h=t[e.charAt(i-1)]||[];let u=!1,d=-1,g=-1;if(i<o){const t=e.charAt(i),s=h.length;for(let e=0;e<s;e+=1){const s=h[e];if(g+=1,s){const e=s.indexOf(t);if(-1!==e){u=!0,d=g,1===e&&(n+=1),c!==d&&(l+=1,c=d);break}}}}if(!u){i-a>2&&r.push({pattern:"spatial",i:a,j:i-1,token:e.slice(a,i),graph:s,turns:l,shiftedCount:n}),a=i;break}i+=1}}return r}}class ge{constructor(){this.matchers={date:z,dictionary:te,regex:se,repeat:he,sequence:ue,spatial:de}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(J.matchers)].forEach((n=>{if(!this.matchers[n]&&!J.matchers[n])return;const r=(new(this.matchers[n]?this.matchers[n]:J.matchers[n].Matching)).match({password:e,omniMatch:this});r instanceof Promise?(r.then((e=>{S(t,e)})),s.push(r)):S(t,r)})),s.length>0?new Promise((e=>{Promise.all(s).then((()=>{e(D(t))}))})):D(t)}}const pe={second:1,minute:60,hour:3600,day:86400,month:2678400,year:32140800,century:321408e4};class fe{translate(e,t){let s=e;void 0!==t&&1!==t&&(s+="s");const{timeEstimation:n}=J.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/(100/3600),onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach((e=>{const n=t[e];s[e]=this.displayTime(n)})),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<10000000005?3:4}displayTime(e){let t,s="centuries";const n=Object.keys(pe),r=n.findIndex((t=>e<pe[t]));return r>-1&&(s=n[r-1],0!==r?t=Math.round(e/pe[s]):s="ltSecond"),this.translate(s,t)}}var me=()=>null,be=()=>({warning:J.translations.warnings.dates,suggestions:[J.translations.suggestions.dates]});const ye=(e,t)=>{let s="";const n=e.dictionaryName,r="lastnames"===n||n.toLowerCase().includes("firstnames");return"passwords"===n?s=((e,t)=>{let s="";return!t||e.l33t||e.reversed?e.guessesLog10<=4&&(s=J.translations.warnings.similarToCommon):s=e.rank<=10?J.translations.warnings.topTen:e.rank<=100?J.translations.warnings.topHundred:J.translations.warnings.common,s})(e,t):n.includes("wikipedia")?s=((e,t)=>{let s="";return t&&(s=J.translations.warnings.wordByItself),s})(0,t):r?s=((e,t)=>t?J.translations.warnings.namesByThemselves:J.translations.warnings.commonNames)(0,t):"userInputs"===n&&(s=J.translations.warnings.userInputs),s};var ke=(e,t)=>{const s=ye(e,t),n=[],r=e.token;return r.match(P)?n.push(J.translations.suggestions.capitalization):r.match(N)&&r.toLowerCase()!==r&&n.push(J.translations.suggestions.allUppercase),e.reversed&&e.token.length>=4&&n.push(J.translations.suggestions.reverseWords),e.l33t&&n.push(J.translations.suggestions.l33t),{warning:s,suggestions:n}},we=e=>"recentYear"===e.regexName?{warning:J.translations.warnings.recentYears,suggestions:[J.translations.suggestions.recentYears,J.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},Me=e=>{let t=J.translations.warnings.extendedRepeat;return 1===e.baseToken.length&&(t=J.translations.warnings.simpleRepeat),{warning:t,suggestions:[J.translations.suggestions.repeated]}},xe=()=>({warning:J.translations.warnings.sequences,suggestions:[J.translations.suggestions.sequences]}),ve=e=>{let t=J.translations.warnings.keyPattern;return 1===e.turns&&(t=J.translations.warnings.straightRow),{warning:t,suggestions:[J.translations.suggestions.longerKeyboardPattern]}};const je={warning:"",suggestions:[]};class Te{constructor(){this.matchers={bruteforce:me,date:be,dictionary:ke,regex:we,repeat:Me,sequence:xe,spatial:ve},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(J.translations.suggestions.useWords,J.translations.suggestions.noNeed)}getFeedback(e,t){if(0===t.length)return this.defaultFeedback;if(e>2)return je;const s=J.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let r=this.getMatchFeedback(n,1===t.length);return null!=r?(r.suggestions.unshift(s),null==r.warning&&(r.warning="")):r={warning:"",suggestions:[s]},r}getLongestMatch(e){let t=e[0];return e.slice(1).forEach((e=>{e.token.length>t.token.length&&(t=e)})),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):J.matchers[e.pattern]&&"feedback"in J.matchers[e.pattern]?J.matchers[e.pattern].feedback(e,t):je}}const Ie=()=>(new Date).getTime(),Ee=(e,t)=>{const s=Ie(),n=((e,t)=>(t&&J.extendUserInputsDictionary(t),(new ge).match(e)))(e,t);if(n instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return((e,t,s)=>{const n=new Te,r=new fe,a=le.mostGuessableMatchSequence(t,e),o=Ie()-s,l=r.estimateAttackTimes(a.guesses);return c(i(i({calcTime:o},a),l),{feedback:n.getFeedback(l.score,a.sequence)})})(n,e,s)};const Se=["data-score"];var Ae=E(h({__name:"InputPassword",props:{strength:u.bool.def(!1),modelValue:u.string.def("")},emits:["update:modelValue"],setup(e,{emit:t}){const s=e,{getPrefixCls:n}=T(),r=n("input-password");d((()=>s.modelValue),(e=>{e!==M(c)&&(c.value=e)}));const{configGlobal:a}={configGlobal:l("configGlobal",{})},o=g("password"),i=()=>{o.value="text"===M(o)?"password":"text"},c=g(s.modelValue);d((()=>c.value),(e=>{t("update:modelValue",e)}));const h=p((()=>{const e=M(c),t=Ee(M(c));return e?t.score:-1})),u=p((()=>"password"===M(o)?"ant-design:eye-invisible-outlined":"ant-design:eye-outlined"));return(t,s)=>{var n;const l=f("Icon");return m(),b("div",{class:x([M(r),`${M(r)}--${null==(n=M(a))?void 0:n.size}`])},[y(M(I),w(t.$attrs,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=e=>c.value=e),type:o.value}),{suffix:k((()=>[y(l,{class:"el-input__icon cursor-pointer",icon:M(u),onClick:i},null,8,["icon"])])),_:1},16,["modelValue","type"]),e.strength?(m(),b("div",{key:0,class:x([`${M(r)}__bar`,"relative h-6px mt-10px mb-6px mr-auto ml-auto"])},[v("div",{class:x(`${M(r)}__bar--fill`),"data-score":M(h)},null,10,Se)],2)):j("",!0)],2)}}}),[["__scopeId","data-v-74b44237"]]);export{Ae as I};
