!function(t){function e(a){if(r[a])return r[a].exports;var i=r[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(6)},function(t,e,r){var a=r(2),i=r(5);t.exports=a.extend({_prepare:function(){var t={chart:{type:"chart",width:"100",height:"100","font-family":'"Open Sans", sans-serif'}};return this._extend(t,this.attributes.opts),this.attributes.opts=t,this},attr:function(t){return t=t||0,this.attributes.data=t.data||[],this.attributes.opts=t,this.render(this._prepare()._generate())},_generate:function(){var t=this.attributes.opts.chart,e=this.attributes.data,r=this.make("svg",{width:t.width,height:t.height,viewBox:"0 0 "+t.width+" "+t.height}),a=t.height<t.width?t.height:t.width,i=this._dataSetRelativeToTotal(e);return this.append(this.element,this.append(r,this._describePath(a,i,t)))},_polarToCartesian:i.polarToCartesian,_describeArc:i.describeArc,_describePie:i.describePie,_describePath:function(){return""}})},function(t,e,r){{var a=r(3);t.exports=a.extend({init:function(t){var e=this;return this.element="string"==typeof t?"#"===t[0]?this.make("div",{id:t.replace(/^#/,""),width:"100%"}):this.make("div",{"class":t.replace(/^\./,""),width:"100%"}):"",this.token=e.makeToken(),this.attributes={},this}})}},function(t,e,r){r(17);var a,i=r(9);t.exports=a=i.extend({init:function(){return this},_dataSetRelativeToTotal:function(t){var e=t.reduce(function(t,e){return t+e});return t.map(function(t){return t/e})},_randomColor:function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},append:function(t,e){return""===t?e:("[object Array]"!=Object.prototype.toString.call(e)&&(e=[e]),t.replace(/(.*)(<\/.*>$)/g,function(t,r,a){return r+e.join("")+a}))},make:function(t,e,r,a){var i="<"+t;return"svg"===t&&(i+=' version="1.1" xmlns="http://www.w3.org/2000/svg"'),i+=this._makePairs(e),i+=this._makePairs("data",r),i+=">"+(a||0===a?a:"")+"</"+t+">"},render:function(t){return t},_makePairs:function(t,e){if(arguments.length<2?(e=t,t=""):t+="-",!e)return"";for(var r=Object.keys(e),a=r.length,i="";a--;)i+=" "+t+r[a]+'="'+e[r[a]]+'"';return i},_extend:function(t,e){var r=this;if(e&&t){for(var a=Object.keys(e),i=a.length;i--;)"object"!=typeof e[a[i]]||"[object Array]"===Object.prototype.toString.call(e[a[i]])?t[a[i]]=e[a[i]]:(t[a[i]]||(t[a[i]]={}),r._extend(t[a[i]],e[a[i]]));return this}},isFn:function(t){return!!(t&&t.constructor&&t.call&&t.apply)},makeToken:function(){return Math.random().toString(36).substr(2)},_sigFigs:function(t,e){var r=Math.pow(10,e-Math.floor(Math.log(t)/Math.LN10)-1);return Math.round(t*r)/r},_getSplits:function(t){if(t=Math.ceil(t,0),0===t)return{max:2,splits:2};var e=[3,2,5],r=t.toString().length,a=splits=0,i=function(t){for(var r=0;3>r;r++)if(t%e[r]===0)return e[r];return 0},n=function(t){var e=parseInt(t.toString()[0]);return 1==e?2:i(e)};return r>2?(a=Math.ceil10(t,r-1),splits=n(a),splits||(a+=Math.pow(10,r-1),splits=n(a))):2==r?(a=t.toString(),a[1]<=5&&(1==a[0]||2==a[0]||5==a[0]||7==a[0])&&0!=a[1]?a=parseInt(a[0]+"5"):(a=Math.ceil10(t,1),a=70==a?75:a),splits=i(a)):(a=t,splits=i(a),(5==a||3==a||2==a)&&(splits=1),splits||(a+=1,splits=n(a))),{max:a,splits:splits}},_scale:function(t,e){e=e||0,t="object"==typeof t[0]?t:[t];var r,a,i=0,n=e.yAxis,s=Number.MAX_VALUE,o=[],h=0,d=this._getSplits,l=[];if(t[0].data){r=[];for(var u=0;u<t.length;u++)r.push(t[u].data),l.push(t[u].strokeColor);t=r}var c=function(t,e){return t-e},p=t.length,f=t[0].length;if(n&&n.multi){s={},i={},h={};for(var g=0;p>g;g++)r=t[g].slice(0).sort(c),s[g]=r[0],a=d(r[f-1]),i[g]=a.max,h[g]=a.splits,delete r}else if(e.stack)for(var g=0;f>g;g++){for(var m=0,v=0;p>v;v++)m+=t[v][g];o.push(m),i=m>i?m:i,s=s>m?m:s}else if(e.bubble){s={},i={};for(var u=0;3>u;u++)s[u]=Number.MAX_VALUE,i[u]=0;for(var g=0;f>g;g++)for(var v=0;p>v;v++)for(var b=0;3>b;b++)i[b]=i[b]<t[v][g][b]?t[v][g][b]:i[b],s[b]=s[b]>t[v][g][b]?t[v][g][b]:s[b]}else{for(var g=0;p>g;g++)r=t[g].slice(0).sort(c),s=s>r[0]?r[0]:s,i=i<r[f-1]?r[f-1]:i,delete r;n&&(a=d(i),i=a.max,h=a.splits)}return{min:s,max:i,maxSet:o,len:f,rows:p,ySecs:h,color:l}}})},function(t,e,r){{var a=r(2),i=r(16),n=new i;t.exports=a.extend({attr:function(t){t=t||{},!t||t.data&&0!==t.data.length||(t.data=void 0);var e=this;e.attributes.data=t.data||0,e.attributes.opts=t;for(var r in t.data)t.data[r].label=(t.data[r].label||"").replace(/\s/g,"-");return e.render(e._prepare()._generate())},_prepare:function(){var t={chart:{width:"100",height:"200","font-family":'"Open Sans", sans-serif',line:!0,fill:!0,scattered:!1},showNodes:!1,data:[]};return this._extend(t,this.attributes.opts),this.attributes.opts=t,this},_generate:function(){var t=this,e=t.attributes.data,r=t.attributes.opts,a=r.chart,i=t.make("svg",{width:a.width,height:a.height,viewBox:"0 0 "+a.width+" "+a.height}),s=0,o=5,h=r.xAxis,d=r.yAxis,l=t.append;"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]);var u=t._scale(e,r);t._extend(u,a),(d||h)&&(s=r.yAxis?30:0,o=20,u.pHeight=a.height-2*o,u.paddingY=o,u.paddingX=s),d&&(i=l(i,n.describeYAxis(u,d)),s+=5),u.heightRatio=(a.height-2*o)/u.max,u.gap=t._sigFigs((a.width-2*s)/(u.len-1),8),h&&(i=l(i,n.describeXAxis(u,h)));for(var c=0;c<u.rows;c++){d&&d.multi&&(u.heightRatio=(a.height-2*o)/u.max[c]);var p=t.make("g",{},{label:e[c].label});i=l(i,l(p,t._describePath(e[c],s,o,u)))}return l(t.element,i)},_describeAttributeD:function(t,e,r,a){for(var i=a.height,n=a.heightRatio,s=a.gap,o="",h=0;h<t.length;h++)o+=0===h?"M "+e+" "+(i-t[h]*n-r):" L "+(s*h+e)+" "+(i-t[h]*n-r);return""===o&&(o="M 0 0"),o},_describeCloseAttributeD:function(t,e,r,a){var i=a.height,n=a.heightRatio;return["V",i-r,"H",e,"L",e,i-t[0]*n-r].join(" ")},_describeScatteredGraph:function(t,e,r,a,i){for(var n=i.height,s=i.heightRatio,o=this,h=i.gap,d=t.scattered||0,l=d.strokeWidth||3,u=d.strokeColor||o._randomColor(),c=d.radius||2,p=(d.fill||"white",[]),f=0;f<e.length;f++)p.push(o.make("circle",{cx:h*f+r,cy:n-e[f]*s-a,r:c,stroke:u,"stroke-width":l,fill:"white"}));return p},_describePath:function(t,e,r,a){var i=this,n=i._describeAttributeD(t.data,e,r,a),s=i.make("path",{d:n,stroke:t.strokeColor||i._randomColor(),"stroke-width":t.strokeWidth||"3","stroke-linejoin":"round","stroke-linecap":"round","class":"_yakoTransitions-"+t.label,fill:"none"});return[a.line?s:"",t.fill&&a.fill?i.make("path",{d:n+i._describeCloseAttributeD(t.data,e,r,a),stroke:"none","stroke-width":"2","stroke-linejoin":"round","stroke-linecap":"round","class":"_yakoTransitions-"+t.label,fill:t.fill}):""].concat(a.scattered?i._describeScatteredGraph(t,t.data,e,r,a):[])}})}},function(t){var e=t.exports={polarToCartesian:function(t,e,r,a){var i=(a-90)*Math.PI/180;return{x:t+r*Math.cos(i),y:e+r*Math.sin(i)}},describeArc:function(t,r,a,i,n){var s=e.polarToCartesian(t,r,a,n),o=e.polarToCartesian(t,r,a,i),h=180>=n-i?"0":"1",d=["M",s.x,s.y,"A",a,a,0,h,0,o.x,o.y].join(" ");return d},describePie:function(t,r,a,i,n){return e.describeArc(t,r,a,i,n)+" L"+t+" "+r}}},function(t,e,r){for(var a=r(7),i=a.spark,n=a.pie,s=a.donut,o=a.bubble,h=a.bar,d=30,l=10,u=10,c=2,p=l,f=Date.now(),g="";p--;){for(var m=[],v=[],b=[],x=[],_=[],k=[],w=0;d>w;w++)m.push(Math.floor(500*Math.random()+10)),v.push(Math.floor(500*Math.random()+10)),b.push(Math.floor(500*Math.random()+10)),x.push(Math.floor(500*Math.random()+1));for(var w=0;d>w;w++){for(var y=[],M=[],C=0;3>C;C++)y.push(Math.floor(500*Math.random()+10)),M.push(Math.floor(500*Math.random()+10));_.push(y),k.push(M)}var S=a.spark()._randomColor(),A=a.spark()._randomColor(),L=[{data:m,strokeColor:S,fill:a.spark()._randomColor(),scattered:{strokeColor:S,fill:"white",strokeWidth:2,radius:3}},{data:v,strokeColor:A,fill:a.spark()._randomColor(),scattered:{strokeColor:A,fill:"white",strokeWidth:2,radius:3}}],j=[{label:"Auto Generated 3",data:b,strokeColor:a.spark()._randomColor(),fill:a.spark()._randomColor()}],T=[{data:_,fill:a.spark()._randomColor()},{data:k,fill:a.spark()._randomColor()}],Y=i(".graph");g+=Y.attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:L}),g+=Y.attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:j}),g+=i(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',scattered:!0},title:"just a test",data:L}),g+=i(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',scattered:!0,line:!1},title:"just a test",data:L}),g+=n(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:x}),g+=s(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',innerRadius:40,outerRadius:50},title:"just a test",data:x}),g+=o(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',maxRadius:"10"},title:"just a test",data:x}),g+=o(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',maxRadius:"10",type:"scattered"},title:"just a test",data:T}),g+=h(".graph").attr({chart:{stack:!0,width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',showPointer:!1,fill:[]},title:"just a test",data:L}),g+=h(".graph").attr({chart:{width:300,height:100,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',showPointer:!1,fill:[]},title:"just a test",data:L})}m=[],v=[];for(var w=0;10>w;w++)m.push(Math.floor(500*Math.random()+10)),v.push(Math.floor(500*Math.random()+10));var S="red",A="blue",L=[{data:m,strokeColor:S,strokeWidth:2,scattered:{strokeColor:S,fill:"white",strokeWidth:2,radius:5}},{data:v,strokeColor:A,strokeWidth:2,scattered:{strokeColor:A,fill:"white",strokeWidth:2,radius:5}}];g=Y.attr({chart:{width:1200,height:500,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'},title:"just a test",data:L,yAxis:{multi:!0},xAxis:{format:"dateTime",interval:"4h",minUTC:Date.UTC(2013,8,7),dateTimeLabelFormat:"MM/DD hh ap"}})+Y.attr({chart:{width:1200,height:500,"font-family":'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',scattered:!0},title:"just a test",data:L,yAxis:!0,xAxis:{format:"dateTime",interval:"1D",minUTC:Date.UTC(2013,8,7),dateTimeLabelFormat:"MM/DD hh ap"}})+g;var H=Date.now()-f;g="<div>Took "+H+"ms to generate "+(l*u+c)+" graphs with "+d+" different data points avg of "+H/(l*u+c)+"ms</div>"+g;var D=document.getElementsByTagName("body")[0];D.innerHTML=g},function(t,e,r){var a=r(4),i=r(12),n=r(11),s=r(8),o=r(10),h=r(15),d=r(18),l=function(t,e){return"object"==typeof e?new(e.mixin?d(d(t,e.mixin),e):d(t,e)):new t(e)};t.exports={name:"yakojs",VERSION:"0.1.0",spark:function(t){return l(a,t)},pie:function(t){return l(i,t)},donut:function(t){return l(n,t)},bubble:function(t){return l(o,t)},bar:function(t){return l(s,t)},svg:h}},function(t,e,r){{var a=r(2);t.exports=a.extend({_prepare:function(){var t={chart:{type:"chart",width:"100",height:"100","font-family":'"Open Sans", sans-serif'}};return this._extend(t,this.attributes.opts),this.attributes.opts=t,this},attr:function(t){return t=t||0,this.attributes.data=t.data||[],this.attributes.opts=t,this.render(this._prepare()._generate())},_generate:function(){var t=this.attributes.data,e=this.attributes.opts.chart,r=this.make("svg",{width:e.width,height:e.height,viewBox:"0 0 "+e.width+" "+e.height});return this.append(this.element,this.append(r,this._describeBar(t,e)))},_describeBar:function(t,e){if(!t.length)return"";t="object"==typeof t[0]?t:[t];var r=e.height,a=5;r-=a;for(var i=e.width,n=t[0].data.length,s=t.length,o=i/n,h=this._scale(t,e),d=[],l=0;n>l;l++)if(e.stack)for(var u=(r-a)*h.maxSet[l]/h.max,c=r-u,p=0;s>p;p++)d.push(this.make("rect",{x:o*l+o/4,y:c,width:o/s,height:t[p].data[l]/h.maxSet[l]*u,fill:t[p].fill||this._randomColor()})),c+=t[p].data[l]/h.maxSet[l]*u;else for(var p=0;s>p;p++){var c=(r-a)*t[p].data[l]/h.max;d.push(this.make("rect",{x:o*(l+1)-o/(p+1),y:r-c,width:o/(s+1),height:c,fill:t[p].fill||this._randomColor()}))}return d}})}},function(t){function e(t){return"function"==typeof t}function r(t){return/\b_super\b/.test(t)}var a=t.exports=function(){};a.extend=function(t){function a(){this.init&&this.init.apply(this,arguments)}var i=this.prototype,n=this.prototype.init;this.prototype.init=null;var s=new this;this.prototype.init=n;for(var o in t){var h=t[o];s[o]=e(h)&&e(i[o])&&r(h)?function(t,e){return function(){var r=this._super;this._super=i[t];var a=e.apply(this,arguments);return this._super=r,a}}(o,h):h}return a.prototype=s,a.prototype.constructor=a,a.extend=arguments.callee,a}},function(t,e,r){{var a=r(1);t.exports=a.extend({_generate:function(){var t=this,e=t.attributes.opts.chart,r=t.attributes.data,a=t.make("svg",{width:e.width,height:e.height,viewBox:"0 0 "+e.width+" "+e.height}),i=t.append,n=t.render,s="",o=10;if("scattered"==e.type){var h=t._scale(r,{bubble:!0});o=30;var d=20;return h.heightRatio=(e.height-2*d)/h.max[1],h.widthRatio=(e.width-2*o)/h.max[0],h.paddingY=d,h.paddingX=o,t._extend(h,e),s=t._describeBubbleChart(r,h),n(i(t.element,i(a,s)))}return s=t._describeBubble(r,e.height,e.width,o,e),s.unshift(t._describeHorizontalPath(e.height,e.width,o,e)),n(i(t.element,i(a,s)))},_describeBubbleChart:function(t,e){for(var r=e.height,a=e.width,i=e.heightRatio,n=e.widthRatio,s=e.paddingX,o=e.paddingY,h=this,d=e.len,l=e.maxRadius||(a>r?r:a)/2,u=e.max,c=e.fills||0,p=[],f=0;f<e.rows;f++)for(var g=0;d>g;g++){var m=t[f].data[g];p.push(h.make("circle",{cx:a-m[0]*n-s,cy:r-m[1]*i-o,r:l*(m[2]/u[2]),fill:t[f].fill||c[g]||h._randomColor()}))}return p},_describeHorizontalPath:function(t,e,r,a){var i=t/2;return this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:a.strokColor||this._randomColor(),d:"M"+r+" "+i+" H"+(e-r)})},_describeBubble:function(t,e,r,a,i){if(!t)return"";for(var n=this._getMaxOfArray(t),s=t.length,o=(r-2*a)/(s-1),h=[],d=i.fills||0,l=i.maxRadius||(i.height<i.width?i.height:i.width)/2,u=e/2,c=0;c<t.length;c++)h.push(this.make("circle",{cx:o*c+a,cy:u,r:l*(t[c]/n),fill:d[c]||i.fill||this._randomColor()}));return h},_getMaxOfArray:function(t){return Math.max.apply(null,t)}})}},function(t,e,r){{var a=r(1);t.exports=a.extend({_describePath:function(t,e,r){if(!e)return"";for(var a=[],i=r.outerRadius||t/2,n=r.innerRadius||i/2,s=0,o=r.fills||0,h=r.strokeColors||0,d=r.height/2,l=r.width/2,u=0;u<e.length;u++){var c=s+360*e[u];a.push(this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:h[u]||r.strokeColor||this._randomColor(),fill:o[u]||this._randomColor(),d:this._describeDonut(l,d,i,n,s,c)})),s=c}return a},_describeDonut:function(t,e,r,a,i,n){var s={start:this._polarToCartesian(t,e,r,n),end:this._polarToCartesian(t,e,r,i)},o={start:this._polarToCartesian(t,e,a,n),end:this._polarToCartesian(t,e,a,i)},h=180>=n-i?"0":"1";return["M",s.start.x,s.start.y,"A",r,r,0,h,0,s.end.x,s.end.y,"L",o.end.x,o.end.y,"A",a,a,0,h,1,o.start.x,o.start.y,"L",s.start.x,s.start.y,"Z"].join(" ")}})}},function(t,e,r){{var a=r(1);t.exports=a.extend({_describePath:function(t,e,r){if(!e)return"";for(var a=[],i=t/2,n=0,s=r.fills||0,o=r.strokeColors||0,h=r.width/2,d=r.height/2,l=0;l<e.length;l++){var u=n+360*e[l];a.push(this.make("path",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:o[l]||r.strokeColor||this._randomColor(),d:this._describePie(h,d,i,n,u),fill:s[l]||this._randomColor()})),n=u}return a}})}},function(t,e,r){var a=r(4);a=new a,t.exports={getScale:function(t){var e=t.data||0,r=a._scale(e);return r.paddingY=t.paddingY||5,r.gap=a._sigFigs(t.width/(r.len-1),8),r.heightRatio=(t.height-2*r.paddingY)/r.max,r.height=t.height,r.width=t.width,r},getOpenPath:function(t,e){return a._describeAttributeD(e,0,t.paddingY,t)},getClosedPath:function(t,e){return a._describeAttributeD(e,0,t.paddingY,t)+a._describeCloseAttributeD(e,0,t.paddingY,t)}}},function(){},function(t,e,r){t.exports={path:r(13),arc:r(5),react:r(14)}},function(t,e,r){{var a=r(3);t.exports=a.extend({describe:function(){},describeBorder:function(){},describeYAxis:function(t,e){var r=this,a=[],i=[],n=rows=t.rows;e.multi||(n=rows=1,t.ySecs=[t.ySecs],t.max=[t.max]);for(var s=t.pHeight,o=t.paddingY,h=t.paddingX;n--;){var d=r.make("g"),l=fSplits=t.ySecs[n],u=s/l,c=(n+1)%2===0?t.width-n*h:(n+1)*h;for(i=[],l+=1;l--;)i.push(r.make("text",{y:o+u*l,x:c,"font-size":12,"text-anchor":(n+1)%2===0?"start":"end",fill:e.color||"#333"},null,t.max[n]/fSplits*(fSplits-l)));c=(n+1)%2===0?c-5:c+5,i.push(r.make("path",{d:"M"+c+" 0L"+c+" "+(s+o),"stroke-width":"1",stroke:e.multi?t.color[n]:"#c0c0c0",fill:"none",opacity:"1","stroke-linecap":"round"})),a.push(r.append(d,i))}return a},describeXAxis:function(t,e){var r=this,a=r.make("g",{"class":"xaxis"}),i=[],n=t.pHeight,s=t.gap,o=t.paddingX,h=2*t.paddingY-8,d=n+h,l="dateTime"==e.format?!0:!1;if(l)var u=e.interval,c=r._utcMultiplier(e.interval),p=(/\d+/.test(u)?u.match(/\d+/)[0]:1,e.dateTimeLabelFormat),f=e.minUTC;for(var g=1;g<t.len-1;g++)i.push(r.make("text",{y:d,x:s*g+o,"font-size":12,"text-anchor":"start",fill:e.color||"#333"},null,l?r._formatTimeStamp(p,f+c*g):e.labels[g]||0));return i.push(r.make("path",{d:"M"+2*o+" "+(d-12)+" L"+(t.width-2*o)+" "+(d-12),"stroke-width":"1",stroke:"#c0c0c0",fill:"none",opacity:"1","stroke-linecap":"round"})),[r.append(a,i)]},_utcMultiplier:function(t){var e=1e3,r=60,a=60,i=24,n=30,s=12,o=0;return/s$/.test(t)?o=e:/m$/.test(t)?o=r*e:/h$/.test(t)?o=r*a*e:/D$/.test(t)?o=r*a*i*e:/M$/.test(t)?o=r*a*i*n*e:/Y$/.test(t)&&(o=r*a*i*n*s*e),o},_formatTimeStamp:function(t,e){var r=new Date(e);return/YYYY/.test(t)?t=t.replace("YYYY",r.getFullYear()):/YY/.test(t)&&(t=t.replace("YY",r.getFullYear().toString().replace(/^\d{1,2}/,""))),t=/hh/.test(t)&&/ap/.test(t)?r.getHours()>11?t.replace(/hh/,r.getHours()-12===0?12:r.getHours()-12).replace(/ap/,"pm"):t.replace(/hh/,0==r.getHours()?12:r.getHours()).replace(/ap/,"am"):t.replace(/hh/,0==r.getHours()?12:r.getHours()),t=t.replace(/MM/,r.getMonth()+1).replace(/DD/,r.getDate()),t=/mm/.test(t)&&/ss/.test(t)?t.replace(/mm/,1==r.getMinutes().toString().length?"0"+r.getMinutes():r.getMinutes()).replace(/ss/,1==r.getSeconds().toString().length?"0"+r.getSeconds():r.getSeconds()):t.replace(/mm/,r.getMinutes()).replace(/ss/,r.getSeconds())}})}},function(){function t(t,e,r){return"undefined"==typeof r||0===+r?Math[t](e):(e=+e,r=+r,isNaN(e)||"number"!=typeof r||r%1!==0?0/0:(e=e.toString().split("e"),e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-r:-r))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+r:r))))}Math.round10||(Math.round10=function(e,r){return t("round",e,r)}),Math.floor10||(Math.floor10=function(e,r){return t("floor",e,r)}),Math.ceil10||(Math.ceil10=function(e,r){return t("ceil",e,r)})},function(t){t.exports=function(t,e){return t.extend(e)}}]);