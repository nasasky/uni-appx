var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};
if(typeof __WXML_GLOBAL__ === 'undefined') __WXML_GLOBAL__={};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if("undefined"!==typeof debugInfo)
e.stack += "\n "+" "+" "+" at "+debugInfo[g.opindex][0]+":"+debugInfo[g.opindex][1]+":"+debugInfo[g.opindex][2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
return rev;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "" );
return value;
}
else
{
return raw;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
return grb( z[opindex], env, scope, global, nothing );
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
return r===1 ? $gdc(o(),undefined,2) : o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
__WXML_GLOBAL__.debuginfo_set = __WXML_GLOBAL__.debuginfo_set || {};
var debugInfo=__WXML_GLOBAL__.debuginfo_set.$gwx || [];
if ( !__WXML_GLOBAL__.ops_init.$gwx){
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a0077464']);debugInfo.push(['./components/left-category/left-category.vue.wxml',1,15]);Z([3,'df90c710']);debugInfo.push(['./components/mpvue-echarts/src/echarts.vue.wxml',1,15]);Z([3,'47af5932']);debugInfo.push(['./components/newsList-temp.vue.wxml',1,15]);Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./components/newsList-temp.wxml',1,80]);Z(z[2]);debugInfo.push(['./components/newsList-temp.wxml',1,64]);Z([3,'78fd2e84']);debugInfo.push(['./components/picker/picker.vue.wxml',1,15]);Z([3,'6a1541fe']);debugInfo.push(['./components/product-list/product-list.vue.wxml',1,15]);Z([3,'0db035fb']);debugInfo.push(['./components/search-temp.vue.wxml',1,15]);Z([3,'08a51d2b']);debugInfo.push(['./components/swiper-temp.vue.wxml',1,15]);Z([3,'47067404']);debugInfo.push(['./components/uni-icon.vue.wxml',1,15]);Z([3,'df8a37a4']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',4,16]);Z([a,[3,'_view data-v-4b92fc16 uni-navbar '],[[4],[[5],[[5],[[2,'?:'],[[7],[3,'isFixed']],[1,'uni-navbar-fixed'],[1,'']]],[[2,'?:'],[[7],[3,'hasShadow']],[1,'uni-navbar-shadow'],[1,'']]]]]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',5,15]);Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']]]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',5,134]);Z([3,'left']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',6,20]);Z([3,'default']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',7,20]);Z([3,'right']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',8,20]);Z([[7],[3,'insertStatusBar']]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',9,21]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7Xm-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',9,48]);Z([3,'2567d583']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',9,100]);Z([3,'_view data-v-4b92fc16 uni-navbar-header']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',10,17]);Z([a,z[12][1],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']]]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',10,65]);Z([3,'handleProxy']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',11,86]);Z([3,'_view data-v-4b92fc16 uni-navbar-btn uni-navbar-btn-left']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',11,19]);Z([[7],[3,'$k']]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',11,139]);Z([1,'VGI-0']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',11,113]);Z([[6],[[7],[3,'leftIcon']],[3,'length']]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',12,21]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'bSr-1']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',13,36]);Z(z[9]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',13,88]);Z([3,'24']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',13,26]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',16,24]);Z([[2,'||'],[[7],[3,'$slotleft']],[1,'left']]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',16,68]);Z(z[29]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',20,24]);Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',20,68]);Z(z[21]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',22,87]);Z([3,'_view data-v-4b92fc16 uni-navbar-btn uni-navbar-btn-right']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',22,19]);Z(z[23]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',22,140]);Z([1,'QKP-1']);debugInfo.push(['./components/uni-nav-bar.vue.wxml',22,114]);Z([[6],[[7],[3,'rightIcon']],[3,'length']]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',23,21]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'iKo-4']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',24,36]);Z(z[9]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',24,88]);Z(z[28]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',24,26]);Z(z[29]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',27,24]);Z([[2,'||'],[[7],[3,'$slotright']],[1,'right']]);debugInfo.push(['./components/uni-nav-bar.vue.wxml',27,68]);Z([3,'02149ca7']);debugInfo.push(['./components/uni-segmented-control.vue.wxml',1,15]);Z(z[18]);debugInfo.push(['./components/uni-status-bar.vue.wxml',2,16]);Z([3,'_view data-v-c574e348 uni-status-bar']);debugInfo.push(['./components/uni-status-bar.vue.wxml',3,15]);Z([a,z[12][1],[[7],[3,'style']]]);debugInfo.push(['./components/uni-status-bar.vue.wxml',3,60]);Z(z[14]);debugInfo.push(['./components/uni-status-bar.vue.wxml',4,20]);Z(z[29]);debugInfo.push(['./components/uni-status-bar.vue.wxml',5,20]);Z(z[32]);debugInfo.push(['./components/uni-status-bar.vue.wxml',5,64]);Z([3,'407d46a3']);debugInfo.push(['./components/writemark-temp.vue.wxml',1,15]);Z([3,'05d41168']);debugInfo.push(['./pages/API/image/image.vue.wxml',1,15]);Z([3,'74e4f4fe']);debugInfo.push(['./pages/index/caifu/caifu.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/index/caifu/caifu.wxml',1,79]);Z(z[52]);debugInfo.push(['./pages/index/caifu/caifu.wxml',1,63]);Z([3,'4f30d300']);debugInfo.push(['./pages/index/caifu/cfdetail/cfdetail.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'tUu-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/caifu/cfdetail/cfdetail.vue.wxml',84,22]);Z(z[50]);debugInfo.push(['./pages/index/caifu/cfdetail/cfdetail.vue.wxml',84,74]);Z(z[3]);debugInfo.push(['./pages/index/caifu/cfdetail/cfdetail.wxml',1,91]);Z(z[55]);debugInfo.push(['./pages/index/caifu/cfdetail/cfdetail.wxml',1,75]);Z([3,'672201d6']);debugInfo.push(['./pages/index/huodong/huodong.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/index/huodong/huodong.wxml',1,83]);Z(z[60]);debugInfo.push(['./pages/index/huodong/huodong.wxml',1,67]);Z([3,'435de116']);debugInfo.push(['./pages/index/huodong/peizhi/zcpeizhi.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/index/huodong/peizhi/zcpeizhi.wxml',1,91]);Z(z[63]);debugInfo.push(['./pages/index/huodong/peizhi/zcpeizhi.wxml',1,75]);Z([3,'5ab219f8']);debugInfo.push(['./pages/index/index.vue.wxml',3,16]);Z([3,'_view data-v-7b654518']);debugInfo.push(['./pages/index/index.vue.wxml',4,15]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'v9p-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/index.vue.wxml',5,20]);Z(z[8]);debugInfo.push(['./pages/index/index.vue.wxml',5,72]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'Y33-1']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/index.vue.wxml',40,22]);Z(z[2]);debugInfo.push(['./pages/index/index.vue.wxml',40,74]);Z(z[3]);debugInfo.push(['./pages/index/index.wxml',1,73]);Z(z[66]);debugInfo.push(['./pages/index/index.wxml',1,57]);Z([3,'630f7c46']);debugInfo.push(['./pages/index/knowledge/knowledge.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0Dk-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/knowledge/knowledge.vue.wxml',4,20]);Z(z[7]);debugInfo.push(['./pages/index/knowledge/knowledge.vue.wxml',4,72]);Z(z[3]);debugInfo.push(['./pages/index/knowledge/knowledge.wxml',1,87]);Z(z[74]);debugInfo.push(['./pages/index/knowledge/knowledge.wxml',1,71]);Z([3,'73738216']);debugInfo.push(['./pages/index/knowledge/morereply/morereply.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/index/knowledge/morereply/morereply.wxml',1,97]);Z(z[79]);debugInfo.push(['./pages/index/knowledge/morereply/morereply.wxml',1,81]);Z([3,'ca476838']);debugInfo.push(['./pages/index/knowledge/question/question.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/index/knowledge/question/question.wxml',1,95]);Z(z[82]);debugInfo.push(['./pages/index/knowledge/question/question.wxml',1,79]);Z([3,'20153b80']);debugInfo.push(['./pages/index/knowledge/reply/reply.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/index/knowledge/reply/reply.wxml',1,89]);Z(z[85]);debugInfo.push(['./pages/index/knowledge/reply/reply.wxml',1,73]);Z([3,'3470ae9d']);debugInfo.push(['./pages/index/news/info/info.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'T4g-1']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/news/info/info.vue.wxml',11,24]);Z(z[50]);debugInfo.push(['./pages/index/news/info/info.vue.wxml',11,76]);Z(z[3]);debugInfo.push(['./pages/index/news/info/info.wxml',1,82]);Z(z[88]);debugInfo.push(['./pages/index/news/info/info.wxml',1,66]);Z([3,'2dbcf362']);debugInfo.push(['./pages/index/news/news.vue.wxml',3,16]);Z([3,'_view data-v-0c9e0b55 content']);debugInfo.push(['./pages/index/news/news.vue.wxml',4,15]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'Bdz-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/news/news.vue.wxml',5,20]);Z(z[8]);debugInfo.push(['./pages/index/news/news.vue.wxml',5,72]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'xUK-1']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/news/news.vue.wxml',9,20]);Z(z[2]);debugInfo.push(['./pages/index/news/news.vue.wxml',9,72]);Z(z[3]);debugInfo.push(['./pages/index/news/news.wxml',1,77]);Z(z[93]);debugInfo.push(['./pages/index/news/news.wxml',1,61]);Z([3,'73b0ba68']);debugInfo.push(['./pages/index/store/store.vue.wxml',5,16]);Z([3,'_view data-v-a725d90e']);debugInfo.push(['./pages/index/store/store.vue.wxml',6,15]);Z([3,'_view data-v-a725d90e box']);debugInfo.push(['./pages/index/store/store.vue.wxml',7,17]);Z([[2,'!'],[[2,'=='],[[7],[3,'flag']],[1,0]]]);debugInfo.push(['./pages/index/store/store.vue.wxml',7,52]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'bLp-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/store/store.vue.wxml',9,24]);Z(z[8]);debugInfo.push(['./pages/index/store/store.vue.wxml',9,76]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'EIM-1']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/store/store.vue.wxml',49,26]);Z(z[6]);debugInfo.push(['./pages/index/store/store.vue.wxml',49,78]);Z([3,'_view data-v-a725d90e box2']);debugInfo.push(['./pages/index/store/store.vue.wxml',53,17]);Z([[2,'!'],[[2,'=='],[[7],[3,'flag']],[1,1]]]);debugInfo.push(['./pages/index/store/store.vue.wxml',53,53]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0LB-2']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/store/store.vue.wxml',54,22]);Z(z[7]);debugInfo.push(['./pages/index/store/store.vue.wxml',54,74]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'LUl-3']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/store/store.vue.wxml',55,22]);Z(z[0]);debugInfo.push(['./pages/index/store/store.vue.wxml',55,74]);Z(z[3]);debugInfo.push(['./pages/index/store/store.wxml',1,79]);Z(z[101]);debugInfo.push(['./pages/index/store/store.wxml',1,63]);Z([3,'6d01b6fc']);debugInfo.push(['./pages/index/zaobao/zaobao.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'x8H-1']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/index/zaobao/zaobao.vue.wxml',15,22]);Z(z[50]);debugInfo.push(['./pages/index/zaobao/zaobao.vue.wxml',15,74]);Z(z[3]);debugInfo.push(['./pages/index/zaobao/zaobao.wxml',1,81]);Z(z[117]);debugInfo.push(['./pages/index/zaobao/zaobao.wxml',1,65]);Z([3,'af9aafa8']);debugInfo.push(['./pages/investment/investment.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/investment/investment.wxml',1,83]);Z(z[122]);debugInfo.push(['./pages/investment/investment.wxml',1,67]);Z([3,'7bd0a63c']);debugInfo.push(['./pages/message/message.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/message/message.wxml',1,77]);Z(z[125]);debugInfo.push(['./pages/message/message.wxml',1,61]);Z([3,'098d2bcc']);debugInfo.push(['./pages/my/lcs-gerenzhuye/lcs-gerenzhuye.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/my/lcs-gerenzhuye/lcs-gerenzhuye.wxml',1,94]);Z(z[128]);debugInfo.push(['./pages/my/lcs-gerenzhuye/lcs-gerenzhuye.wxml',1,78]);Z([3,'7ccac8c6']);debugInfo.push(['./pages/my/lcs-my.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/my/lcs-my.wxml',1,71]);Z(z[131]);debugInfo.push(['./pages/my/lcs-my.wxml',1,55]);Z([3,'2c18ff2c']);debugInfo.push(['./pages/my/lcs-shezhi/lcs-shezhi.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/my/lcs-shezhi/lcs-shezhi.wxml',1,86]);Z(z[134]);debugInfo.push(['./pages/my/lcs-shezhi/lcs-shezhi.wxml',1,70]);Z([3,'66a27246']);debugInfo.push(['./pages/my/lcs-wodedingdan/lcs-wodedingdan.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'IPx-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/my/lcs-wodedingdan/lcs-wodedingdan.vue.wxml',5,22]);Z(z[7]);debugInfo.push(['./pages/my/lcs-wodedingdan/lcs-wodedingdan.vue.wxml',5,74]);Z(z[3]);debugInfo.push(['./pages/my/lcs-wodedingdan/lcs-wodedingdan.wxml',1,96]);Z(z[137]);debugInfo.push(['./pages/my/lcs-wodedingdan/lcs-wodedingdan.wxml',1,80]);Z([3,'cfec12c2']);debugInfo.push(['./pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.wxml',1,105]);Z(z[142]);debugInfo.push(['./pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.wxml',1,89]);Z([3,'2e041d68']);debugInfo.push(['./pages/my/lcs-wodekehu/lcs-wodekehu.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'8xp-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/my/lcs-wodekehu/lcs-wodekehu.vue.wxml',5,22]);Z(z[7]);debugInfo.push(['./pages/my/lcs-wodekehu/lcs-wodekehu.vue.wxml',5,74]);Z(z[3]);debugInfo.push(['./pages/my/lcs-wodekehu/lcs-wodekehu.wxml',1,90]);Z(z[145]);debugInfo.push(['./pages/my/lcs-wodekehu/lcs-wodekehu.wxml',1,74]);Z([3,'6f0074ce']);debugInfo.push(['./pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.wxml',1,101]);Z(z[150]);debugInfo.push(['./pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.wxml',1,85]);Z([3,'27cfc68c']);debugInfo.push(['./pages/my/my.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/my/my.wxml',1,67]);Z(z[153]);debugInfo.push(['./pages/my/my.wxml',1,51]);Z([3,'1189941c']);debugInfo.push(['./pages/my/wodechicang/jiaoyijilu/jiaoyijilu.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/my/wodechicang/jiaoyijilu/jiaoyijilu.wxml',1,98]);Z(z[156]);debugInfo.push(['./pages/my/wodechicang/jiaoyijilu/jiaoyijilu.wxml',1,82]);Z([3,'d77c8e9c']);debugInfo.push(['./pages/my/wodechicang/shouyimingxi/shouyimingxi.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/my/wodechicang/shouyimingxi/shouyimingxi.wxml',1,102]);Z(z[159]);debugInfo.push(['./pages/my/wodechicang/shouyimingxi/shouyimingxi.wxml',1,86]);Z([3,'12769410']);debugInfo.push(['./pages/my/wodechicang/wodechicang.vue.wxml',2,16]);Z([3,'pie']);debugInfo.push(['./pages/my/wodechicang/wodechicang.vue.wxml',28,28]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'jYb-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/my/wodechicang/wodechicang.vue.wxml',28,54]);Z(z[1]);debugInfo.push(['./pages/my/wodechicang/wodechicang.vue.wxml',28,106]);Z([3,'pieChart']);debugInfo.push(['./pages/my/wodechicang/wodechicang.vue.wxml',28,38]);Z(z[3]);debugInfo.push(['./pages/my/wodechicang/wodechicang.wxml',1,88]);Z(z[162]);debugInfo.push(['./pages/my/wodechicang/wodechicang.wxml',1,72]);Z([3,'43a979b0']);debugInfo.push(['./pages/my/wodedingdan/wodedingdan.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'VJJ-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/my/wodedingdan/wodedingdan.vue.wxml',5,22]);Z(z[7]);debugInfo.push(['./pages/my/wodedingdan/wodedingdan.vue.wxml',5,74]);Z(z[3]);debugInfo.push(['./pages/my/wodedingdan/wodedingdan.wxml',1,88]);Z(z[169]);debugInfo.push(['./pages/my/wodedingdan/wodedingdan.wxml',1,72]);Z([3,'46265a08']);debugInfo.push(['./pages/my/zengzhifuwu/zengzhifuwu.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/my/zengzhifuwu/zengzhifuwu.wxml',1,88]);Z(z[174]);debugInfo.push(['./pages/my/zengzhifuwu/zengzhifuwu.wxml',1,72]);Z([3,'026f129c']);debugInfo.push(['./pages/product/product.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'VjL-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/product/product.vue.wxml',7,26]);Z(z[7]);debugInfo.push(['./pages/product/product.vue.wxml',7,78]);Z(z[3]);debugInfo.push(['./pages/product/product.wxml',1,77]);Z(z[177]);debugInfo.push(['./pages/product/product.wxml',1,61]);Z([3,'7bb80f95']);debugInfo.push(['./pages/product/productYemian/pinglun/pinglun.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'yCQ-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/product/productYemian/pinglun/pinglun.vue.wxml',26,22]);Z(z[51]);debugInfo.push(['./pages/product/productYemian/pinglun/pinglun.vue.wxml',26,74]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/pinglun/pinglun.wxml',1,99]);Z(z[182]);debugInfo.push(['./pages/product/productYemian/pinglun/pinglun.wxml',1,83]);Z([3,'1a8fb7af']);debugInfo.push(['./pages/product/productYemian/productDetail/productDetail.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/productDetail.wxml',1,111]);Z(z[187]);debugInfo.push(['./pages/product/productYemian/productDetail/productDetail.wxml',1,95]);Z([3,'86f78b90']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.wxml',1,134]);Z(z[190]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.wxml',1,118]);Z([3,'2703efda']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.wxml',1,136]);Z(z[193]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.wxml',1,120]);Z([3,'53dbd291']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.wxml',1,140]);Z(z[196]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.wxml',1,124]);Z([3,'7dda3284']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'cc8-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.vue.wxml',25,26]);Z(z[5]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.vue.wxml',25,78]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.wxml',1,121]);Z(z[199]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.wxml',1,105]);Z([3,'102ecf44']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'BCh-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.vue.wxml',30,26]);Z(z[5]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.vue.wxml',30,78]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.wxml',1,125]);Z(z[204]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.wxml',1,109]);Z([3,'58c74f01']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.wxml',1,132]);Z(z[209]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.wxml',1,116]);Z([3,'98e9f2bc']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.wxml',1,139]);Z(z[212]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.wxml',1,123]);Z([3,'ede95984']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2kI-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.vue.wxml',17,24]);Z(z[51]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.vue.wxml',17,76]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.wxml',1,125]);Z(z[215]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.wxml',1,109]);Z([3,'028f3051']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/simuYuyue.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/simuYuyue.wxml',1,117]);Z(z[220]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/simuYuyue.wxml',1,101]);Z([3,'073c823e']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0x2-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.vue.wxml',32,22]);Z(z[51]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.vue.wxml',32,74]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.wxml',1,141]);Z(z[223]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.wxml',1,125]);Z([3,'34d421c0']);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.wxml',1,119]);Z(z[228]);debugInfo.push(['./pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.wxml',1,103]);Z([3,'bb9adda2']);debugInfo.push(['./pages/product/productYemian/productYemian.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/productYemian.wxml',1,97]);Z(z[231]);debugInfo.push(['./pages/product/productYemian/productYemian.wxml',1,81]);Z([3,'ec8f3560']);debugInfo.push(['./pages/product/productYemian/yuyue/bangdinglicaishi.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6U9-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/product/productYemian/yuyue/bangdinglicaishi.vue.wxml',28,26]);Z(z[5]);debugInfo.push(['./pages/product/productYemian/yuyue/bangdinglicaishi.vue.wxml',28,78]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/yuyue/bangdinglicaishi.wxml',1,106]);Z(z[234]);debugInfo.push(['./pages/product/productYemian/yuyue/bangdinglicaishi.wxml',1,90]);Z([3,'233ad61a']);debugInfo.push(['./pages/product/productYemian/yuyue/wodelicaishi.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/yuyue/wodelicaishi.wxml',1,102]);Z(z[239]);debugInfo.push(['./pages/product/productYemian/yuyue/wodelicaishi.wxml',1,86]);Z([3,'6263f360']);debugInfo.push(['./pages/product/productYemian/yuyue/xuanzekehu.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'aGB-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/product/productYemian/yuyue/xuanzekehu.vue.wxml',4,20]);Z(z[7]);debugInfo.push(['./pages/product/productYemian/yuyue/xuanzekehu.vue.wxml',4,72]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/yuyue/xuanzekehu.wxml',1,100]);Z(z[242]);debugInfo.push(['./pages/product/productYemian/yuyue/xuanzekehu.wxml',1,84]);Z([3,'48346878']);debugInfo.push(['./pages/product/productYemian/yuyue/yuyueliebiao.vue.wxml',2,16]);Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'C67-0']]]]],[[8],'$root',[[7],[3,'$root']]]]);debugInfo.push(['./pages/product/productYemian/yuyue/yuyueliebiao.vue.wxml',7,26]);Z(z[7]);debugInfo.push(['./pages/product/productYemian/yuyue/yuyueliebiao.vue.wxml',7,78]);Z(z[3]);debugInfo.push(['./pages/product/productYemian/yuyue/yuyueliebiao.wxml',1,102]);Z(z[247]);debugInfo.push(['./pages/product/productYemian/yuyue/yuyueliebiao.wxml',1,86]);Z([3,'6ad4d7d8']);debugInfo.push(['./pages/shouye/login.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/shouye/login.wxml',1,74]);Z(z[252]);debugInfo.push(['./pages/shouye/login.wxml',1,58]);Z([3,'9a27c770']);debugInfo.push(['./pages/shouye/register.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/shouye/register.wxml',1,77]);Z(z[255]);debugInfo.push(['./pages/shouye/register.wxml',1,61]);Z([3,'ac9f420c']);debugInfo.push(['./pages/shouye/reset.vue.wxml',1,15]);Z(z[3]);debugInfo.push(['./pages/shouye/reset.wxml',1,74]);Z(z[258]);debugInfo.push(['./pages/shouye/reset.wxml',1,58]);})(z);__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
__WXML_GLOBAL__.debuginfo_set.$gwx=debugInfo;
}
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/left-category/left-category.vue.wxml','./components/mpvue-echarts/src/echarts.vue.wxml','./components/newsList-temp.vue.wxml','./components/newsList-temp.wxml','/components/newsList-temp.vue.wxml','./components/picker/picker.vue.wxml','./components/product-list/product-list.vue.wxml','./components/search-temp.vue.wxml','./components/slots.wxml','/components/swiper-temp.vue.wxml','/components/writemark-temp.vue.wxml','/components/product-list/product-list.vue.wxml','/components/search-temp.vue.wxml','/components/left-category/left-category.vue.wxml','/components/mpvue-echarts/src/echarts.vue.wxml','/components/picker/picker.vue.wxml','/pages/API/image/image.vue.wxml','/components/uni-status-bar.vue.wxml','/components/uni-icon.vue.wxml','/components/slots','./components/swiper-temp.vue.wxml','./components/uni-icon.vue.wxml','./components/uni-nav-bar.vue.wxml','./components/uni-segmented-control.vue.wxml','./components/uni-status-bar.vue.wxml','./components/writemark-temp.vue.wxml','./pages/API/image/image.vue.wxml','./pages/index/caifu/caifu.vue.wxml','./pages/index/caifu/caifu.wxml','/pages/index/caifu/caifu.vue.wxml','./pages/index/caifu/cfdetail/cfdetail.vue.wxml','./pages/index/caifu/cfdetail/cfdetail.wxml','/pages/index/caifu/cfdetail/cfdetail.vue.wxml','./pages/index/huodong/huodong.vue.wxml','./pages/index/huodong/huodong.wxml','/pages/index/huodong/huodong.vue.wxml','./pages/index/huodong/peizhi/zcpeizhi.vue.wxml','./pages/index/huodong/peizhi/zcpeizhi.wxml','/pages/index/huodong/peizhi/zcpeizhi.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','/pages/index/index.vue.wxml','./pages/index/knowledge/knowledge.vue.wxml','./pages/index/knowledge/knowledge.wxml','/pages/index/knowledge/knowledge.vue.wxml','./pages/index/knowledge/morereply/morereply.vue.wxml','./pages/index/knowledge/morereply/morereply.wxml','/pages/index/knowledge/morereply/morereply.vue.wxml','./pages/index/knowledge/question/question.vue.wxml','./pages/index/knowledge/question/question.wxml','/pages/index/knowledge/question/question.vue.wxml','./pages/index/knowledge/reply/reply.vue.wxml','./pages/index/knowledge/reply/reply.wxml','/pages/index/knowledge/reply/reply.vue.wxml','./pages/index/news/info/info.vue.wxml','./pages/index/news/info/info.wxml','/pages/index/news/info/info.vue.wxml','./pages/index/news/news.vue.wxml','./pages/index/news/news.wxml','/pages/index/news/news.vue.wxml','./pages/index/store/store.vue.wxml','./pages/index/store/store.wxml','/pages/index/store/store.vue.wxml','./pages/index/zaobao/zaobao.vue.wxml','./pages/index/zaobao/zaobao.wxml','/pages/index/zaobao/zaobao.vue.wxml','./pages/investment/investment.vue.wxml','./pages/investment/investment.wxml','/pages/investment/investment.vue.wxml','./pages/message/message.vue.wxml','./pages/message/message.wxml','/pages/message/message.vue.wxml','./pages/my/lcs-gerenzhuye/lcs-gerenzhuye.vue.wxml','./pages/my/lcs-gerenzhuye/lcs-gerenzhuye.wxml','/pages/my/lcs-gerenzhuye/lcs-gerenzhuye.vue.wxml','./pages/my/lcs-my.vue.wxml','./pages/my/lcs-my.wxml','/pages/my/lcs-my.vue.wxml','./pages/my/lcs-shezhi/lcs-shezhi.vue.wxml','./pages/my/lcs-shezhi/lcs-shezhi.wxml','/pages/my/lcs-shezhi/lcs-shezhi.vue.wxml','./pages/my/lcs-wodedingdan/lcs-wodedingdan.vue.wxml','./pages/my/lcs-wodedingdan/lcs-wodedingdan.wxml','/pages/my/lcs-wodedingdan/lcs-wodedingdan.vue.wxml','./pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.vue.wxml','./pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.wxml','/pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.vue.wxml','./pages/my/lcs-wodekehu/lcs-wodekehu.vue.wxml','./pages/my/lcs-wodekehu/lcs-wodekehu.wxml','/pages/my/lcs-wodekehu/lcs-wodekehu.vue.wxml','./pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.vue.wxml','./pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.wxml','/pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.vue.wxml','./pages/my/my.vue.wxml','./pages/my/my.wxml','/pages/my/my.vue.wxml','./pages/my/wodechicang/jiaoyijilu/jiaoyijilu.vue.wxml','./pages/my/wodechicang/jiaoyijilu/jiaoyijilu.wxml','/pages/my/wodechicang/jiaoyijilu/jiaoyijilu.vue.wxml','./pages/my/wodechicang/shouyimingxi/shouyimingxi.vue.wxml','./pages/my/wodechicang/shouyimingxi/shouyimingxi.wxml','/pages/my/wodechicang/shouyimingxi/shouyimingxi.vue.wxml','./pages/my/wodechicang/wodechicang.vue.wxml','./pages/my/wodechicang/wodechicang.wxml','/pages/my/wodechicang/wodechicang.vue.wxml','./pages/my/wodedingdan/wodedingdan.vue.wxml','./pages/my/wodedingdan/wodedingdan.wxml','/pages/my/wodedingdan/wodedingdan.vue.wxml','./pages/my/zengzhifuwu/zengzhifuwu.vue.wxml','./pages/my/zengzhifuwu/zengzhifuwu.wxml','/pages/my/zengzhifuwu/zengzhifuwu.vue.wxml','./pages/product/product.vue.wxml','./pages/product/product.wxml','/pages/product/product.vue.wxml','./pages/product/productYemian/pinglun/pinglun.vue.wxml','./pages/product/productYemian/pinglun/pinglun.wxml','/pages/product/productYemian/pinglun/pinglun.vue.wxml','./pages/product/productYemian/productDetail/productDetail.vue.wxml','./pages/product/productYemian/productDetail/productDetail.wxml','/pages/product/productYemian/productDetail/productDetail.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.wxml','/pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.wxml','/pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.wxml','/pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.wxml','/pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.wxml','/pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.wxml','/pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.wxml','/pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.wxml','/pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/simuYuyue.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/simuYuyue.wxml','/pages/product/productYemian/productDetail/simuYuyue/simuYuyue.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.wxml','/pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.vue.wxml','./pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.wxml','/pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.vue.wxml','./pages/product/productYemian/productYemian.vue.wxml','./pages/product/productYemian/productYemian.wxml','/pages/product/productYemian/productYemian.vue.wxml','./pages/product/productYemian/yuyue/bangdinglicaishi.vue.wxml','./pages/product/productYemian/yuyue/bangdinglicaishi.wxml','/pages/product/productYemian/yuyue/bangdinglicaishi.vue.wxml','./pages/product/productYemian/yuyue/wodelicaishi.vue.wxml','./pages/product/productYemian/yuyue/wodelicaishi.wxml','/pages/product/productYemian/yuyue/wodelicaishi.vue.wxml','./pages/product/productYemian/yuyue/xuanzekehu.vue.wxml','./pages/product/productYemian/yuyue/xuanzekehu.wxml','/pages/product/productYemian/yuyue/xuanzekehu.vue.wxml','./pages/product/productYemian/yuyue/yuyueliebiao.vue.wxml','./pages/product/productYemian/yuyue/yuyueliebiao.wxml','/pages/product/productYemian/yuyue/yuyueliebiao.vue.wxml','./pages/shouye/login.vue.wxml','./pages/shouye/login.wxml','/pages/shouye/login.vue.wxml','./pages/shouye/register.vue.wxml','./pages/shouye/register.wxml','/pages/shouye/register.vue.wxml','./pages/shouye/reset.vue.wxml','./pages/shouye/reset.wxml','/pages/shouye/reset.vue.wxml'];d_[x[0]]={}
d_[x[0]]["a0077464"]=function(e,s,r,gg){
var b=x[0]+':a0077464'
r.wxVkey=b
gg.f=$gdc(f_["./components/left-category/left-category.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["df90c710"]=function(e,s,r,gg){
var b=x[1]+':df90c710'
r.wxVkey=b
gg.f=$gdc(f_["./components/mpvue-echarts/src/echarts.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
d_[x[2]]["47af5932"]=function(e,s,r,gg){
var b=x[2]+':47af5932'
r.wxVkey=b
gg.f=$gdc(f_["./components/newsList-temp.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var fE=e_[x[3]].i
_ai(fE,x[4],e_,x[3],1,1)
var cF=_v()
_(r,cF)
cs.push("./components/newsList-temp.wxml:template:1:52")
var hG=_o(4,e,s,gg)
var oH=_gd(x[3],hG,e_,d_)
if(oH){
var cI=_1(3,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[3],1,64)
cs.pop()
fE.pop()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[5]]={}
d_[x[5]]["78fd2e84"]=function(e,s,r,gg){
var b=x[5]+':78fd2e84'
r.wxVkey=b
gg.f=$gdc(f_["./components/picker/picker.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[5]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
d_[x[6]]["6a1541fe"]=function(e,s,r,gg){
var b=x[6]+':6a1541fe'
r.wxVkey=b
gg.f=$gdc(f_["./components/product-list/product-list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
d_[x[7]]["0db035fb"]=function(e,s,r,gg){
var b=x[7]+':0db035fb'
r.wxVkey=b
gg.f=$gdc(f_["./components/search-temp.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m7=function(e,s,r,gg){
var eN=e_[x[8]].i
_ai(eN,x[9],e_,x[8],1,1)
_ai(eN,x[4],e_,x[8],2,2)
_ai(eN,x[10],e_,x[8],3,2)
_ai(eN,x[9],e_,x[8],4,2)
_ai(eN,x[11],e_,x[8],5,2)
_ai(eN,x[12],e_,x[8],6,2)
_ai(eN,x[13],e_,x[8],7,2)
_ai(eN,x[12],e_,x[8],8,2)
_ai(eN,x[14],e_,x[8],9,2)
_ai(eN,x[15],e_,x[8],10,2)
_ai(eN,x[16],e_,x[8],11,2)
_ai(eN,x[17],e_,x[8],12,2)
_ai(eN,x[18],e_,x[8],13,2)
_ai(eN,x[19],e_,x[8],14,2)
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
eN.pop()
return r
}
e_[x[8]]={f:m7,j:[],i:[],ti:[x[9],x[4],x[10],x[9],x[11],x[12],x[13],x[12],x[14],x[15],x[16],x[17],x[18],x[19]],ic:[]}
d_[x[20]]={}
d_[x[20]]["08a51d2b"]=function(e,s,r,gg){
var b=x[20]+':08a51d2b'
r.wxVkey=b
gg.f=$gdc(f_["./components/swiper-temp.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
return r
}
e_[x[20]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
d_[x[21]]["47067404"]=function(e,s,r,gg){
var b=x[21]+':47067404'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[21]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
return r
}
e_[x[21]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
d_[x[22]]["df8a37a4"]=function(e,s,r,gg){
var b=x[22]+':df8a37a4'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-nav-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
cs.push("./components/uni-nav-bar.vue.wxml:view:5:4")
var oB=_m('view',['class',11,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_o(16,e,s,gg)){xC.wxVkey=1
cs.push("./components/uni-nav-bar.vue.wxml:template:9:6")
var oD=_v()
_(xC,oD)
cs.push("./components/uni-nav-bar.vue.wxml:template:9:6")
var fE=_o(18,e,s,gg)
var cF=_gd(x[22],fE,e_,d_)
if(cF){
var hG=_1(17,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[22],9,100)
cs.pop()
cs.pop()
}
cs.push("./components/uni-nav-bar.vue.wxml:view:10:6")
var oH=_m('view',['class',19,'style',1],[],e,s,gg)
cs.push("./components/uni-nav-bar.vue.wxml:view:11:8")
var cI=_m('view',['bindtap',21,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_o(25,e,s,gg)){oJ.wxVkey=1
cs.push("./components/uni-nav-bar.vue.wxml:view:12:10")
var lK=_v()
_(oJ,lK)
cs.push("./components/uni-nav-bar.vue.wxml:template:13:12")
var aL=_o(27,e,s,gg)
var tM=_gd(x[22],aL,e_,d_)
if(tM){
var eN=_1(26,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[22],13,88)
cs.pop()
cs.pop()
}
var bO=_v()
_(cI,bO)
cs.push("./components/uni-nav-bar.vue.wxml:template:16:10")
var oP=_o(30,e,s,gg)
var xQ=_gd(x[22],oP,e_,d_)
if(xQ){
var oR=_1(29,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[22],16,68)
cs.pop()
oJ.wxXCkey=1
cs.pop()
_(oH,cI)
var fS=_v()
_(oH,fS)
cs.push("./components/uni-nav-bar.vue.wxml:template:20:10")
var cT=_o(32,e,s,gg)
var hU=_gd(x[22],cT,e_,d_)
if(hU){
var oV=_1(31,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[22],20,68)
cs.pop()
cs.push("./components/uni-nav-bar.vue.wxml:view:22:8")
var cW=_m('view',['bindtap',33,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oX=_v()
_(cW,oX)
if(_o(37,e,s,gg)){oX.wxVkey=1
cs.push("./components/uni-nav-bar.vue.wxml:view:23:10")
var lY=_v()
_(oX,lY)
cs.push("./components/uni-nav-bar.vue.wxml:template:24:12")
var aZ=_o(39,e,s,gg)
var t1=_gd(x[22],aZ,e_,d_)
if(t1){
var e2=_1(38,e,s,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[22],24,88)
cs.pop()
cs.pop()
}
var b3=_v()
_(cW,b3)
cs.push("./components/uni-nav-bar.vue.wxml:template:27:10")
var o4=_o(42,e,s,gg)
var x5=_gd(x[22],o4,e_,d_)
if(x5){
var o6=_1(41,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[22],27,68)
cs.pop()
oX.wxXCkey=1
cs.pop()
_(oH,cW)
cs.pop()
_(oB,oH)
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[22]]["left"]=function(e,s,r,gg){
var b=x[22]+':left'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-nav-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[22]]["default"]=function(e,s,r,gg){
var b=x[22]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-nav-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[22]]["right"]=function(e,s,r,gg){
var b=x[22]+':right'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-nav-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var oR=e_[x[22]].i
_ai(oR,x[17],e_,x[22],1,1)
_ai(oR,x[18],e_,x[22],2,2)
_ai(oR,x[19],e_,x[22],3,2)
oR.pop()
oR.pop()
oR.pop()
return r
}
e_[x[22]]={f:m10,j:[],i:[],ti:[x[17],x[18],x[19]],ic:[]}
d_[x[23]]={}
d_[x[23]]["02149ca7"]=function(e,s,r,gg){
var b=x[23]+':02149ca7'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-segmented-control.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[23]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
return r
}
e_[x[23]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
d_[x[24]]["2567d583"]=function(e,s,r,gg){
var b=x[24]+':2567d583'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-status-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
cs.push("./components/uni-status-bar.vue.wxml:view:3:4")
var oB=_m('view',['class',45,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/uni-status-bar.vue.wxml:template:5:6")
var oD=_o(49,e,s,gg)
var fE=_gd(x[24],oD,e_,d_)
if(fE){
var cF=_1(48,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[24],5,64)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[24]]["default"]=function(e,s,r,gg){
var b=x[24]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-status-bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var hU=e_[x[24]].i
_ai(hU,x[19],e_,x[24],1,1)
hU.pop()
return r
}
e_[x[24]]={f:m12,j:[],i:[],ti:[x[19]],ic:[]}
d_[x[25]]={}
d_[x[25]]["407d46a3"]=function(e,s,r,gg){
var b=x[25]+':407d46a3'
r.wxVkey=b
gg.f=$gdc(f_["./components/writemark-temp.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
return r
}
e_[x[25]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
d_[x[26]]["05d41168"]=function(e,s,r,gg){
var b=x[26]+':05d41168'
r.wxVkey=b
gg.f=$gdc(f_["./pages/API/image/image.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[26]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
return r
}
e_[x[26]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
d_[x[27]]["74e4f4fe"]=function(e,s,r,gg){
var b=x[27]+':74e4f4fe'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/caifu/caifu.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
return r
}
e_[x[27]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m16=function(e,s,r,gg){
var aZ=e_[x[28]].i
_ai(aZ,x[29],e_,x[28],1,1)
var t1=_v()
_(r,t1)
cs.push("./pages/index/caifu/caifu.wxml:template:1:51")
var e2=_o(54,e,s,gg)
var b3=_gd(x[28],e2,e_,d_)
if(b3){
var o4=_1(53,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[28],1,63)
cs.pop()
aZ.pop()
return r
}
e_[x[28]]={f:m16,j:[],i:[],ti:[x[29]],ic:[]}
d_[x[30]]={}
d_[x[30]]["4f30d300"]=function(e,s,r,gg){
var b=x[30]+':4f30d300'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/caifu/cfdetail/cfdetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[30]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/index/caifu/cfdetail/cfdetail.vue.wxml:template:84:8")
var xC=_o(57,e,s,gg)
var oD=_gd(x[30],xC,e_,d_)
if(oD){
var fE=_1(56,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[30],84,74)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var o6=e_[x[30]].i
_ai(o6,x[10],e_,x[30],1,1)
o6.pop()
return r
}
e_[x[30]]={f:m17,j:[],i:[],ti:[x[10]],ic:[]}
d_[x[31]]={}
var m18=function(e,s,r,gg){
var c8=e_[x[31]].i
_ai(c8,x[32],e_,x[31],1,1)
var h9=_v()
_(r,h9)
cs.push("./pages/index/caifu/cfdetail/cfdetail.wxml:template:1:63")
var o0=_o(59,e,s,gg)
var cAB=_gd(x[31],o0,e_,d_)
if(cAB){
var oBB=_1(58,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[31],1,75)
cs.pop()
c8.pop()
return r
}
e_[x[31]]={f:m18,j:[],i:[],ti:[x[32]],ic:[]}
d_[x[33]]={}
d_[x[33]]["672201d6"]=function(e,s,r,gg){
var b=x[33]+':672201d6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/huodong/huodong.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[33]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
return r
}
e_[x[33]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m20=function(e,s,r,gg){
var tEB=e_[x[34]].i
_ai(tEB,x[35],e_,x[34],1,1)
var eFB=_v()
_(r,eFB)
cs.push("./pages/index/huodong/huodong.wxml:template:1:55")
var bGB=_o(62,e,s,gg)
var oHB=_gd(x[34],bGB,e_,d_)
if(oHB){
var xIB=_1(61,e,s,gg) || {}
var cur_globalf=gg.f
eFB.wxXCkey=3
oHB(xIB,xIB,eFB,gg)
gg.f=cur_globalf
}
else _w(bGB,x[34],1,67)
cs.pop()
tEB.pop()
return r
}
e_[x[34]]={f:m20,j:[],i:[],ti:[x[35]],ic:[]}
d_[x[36]]={}
d_[x[36]]["435de116"]=function(e,s,r,gg){
var b=x[36]+':435de116'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/huodong/peizhi/zcpeizhi.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[36]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
return r
}
e_[x[36]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m22=function(e,s,r,gg){
var cLB=e_[x[37]].i
_ai(cLB,x[38],e_,x[37],1,1)
var hMB=_v()
_(r,hMB)
cs.push("./pages/index/huodong/peizhi/zcpeizhi.wxml:template:1:63")
var oNB=_o(65,e,s,gg)
var cOB=_gd(x[37],oNB,e_,d_)
if(cOB){
var oPB=_1(64,e,s,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[37],1,75)
cs.pop()
cLB.pop()
return r
}
e_[x[37]]={f:m22,j:[],i:[],ti:[x[38]],ic:[]}
d_[x[39]]={}
d_[x[39]]["5ab219f8"]=function(e,s,r,gg){
var b=x[39]+':5ab219f8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[39]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:4:4")
var oB=_n('view')
_r(oB,'class',67,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:template:5:6")
var oD=_o(69,e,s,gg)
var fE=_gd(x[39],oD,e_,d_)
if(fE){
var cF=_1(68,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[39],5,72)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/index/index.vue.wxml:template:40:8")
var oH=_o(71,e,s,gg)
var cI=_gd(x[39],oH,e_,d_)
if(cI){
var oJ=_1(70,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[39],40,74)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var aRB=e_[x[39]].i
_ai(aRB,x[9],e_,x[39],1,1)
_ai(aRB,x[4],e_,x[39],2,2)
aRB.pop()
aRB.pop()
return r
}
e_[x[39]]={f:m23,j:[],i:[],ti:[x[9],x[4]],ic:[]}
d_[x[40]]={}
var m24=function(e,s,r,gg){
var eTB=e_[x[40]].i
_ai(eTB,x[41],e_,x[40],1,1)
var bUB=_v()
_(r,bUB)
cs.push("./pages/index/index.wxml:template:1:45")
var oVB=_o(73,e,s,gg)
var xWB=_gd(x[40],oVB,e_,d_)
if(xWB){
var oXB=_1(72,e,s,gg) || {}
var cur_globalf=gg.f
bUB.wxXCkey=3
xWB(oXB,oXB,bUB,gg)
gg.f=cur_globalf
}
else _w(oVB,x[40],1,57)
cs.pop()
eTB.pop()
return r
}
e_[x[40]]={f:m24,j:[],i:[],ti:[x[41]],ic:[]}
d_[x[42]]={}
d_[x[42]]["630f7c46"]=function(e,s,r,gg){
var b=x[42]+':630f7c46'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/knowledge/knowledge.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[42]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/index/knowledge/knowledge.vue.wxml:template:4:6")
var xC=_o(76,e,s,gg)
var oD=_gd(x[42],xC,e_,d_)
if(oD){
var fE=_1(75,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[42],4,72)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var cZB=e_[x[42]].i
_ai(cZB,x[12],e_,x[42],1,1)
cZB.pop()
return r
}
e_[x[42]]={f:m25,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[43]]={}
var m26=function(e,s,r,gg){
var o2B=e_[x[43]].i
_ai(o2B,x[44],e_,x[43],1,1)
var c3B=_v()
_(r,c3B)
cs.push("./pages/index/knowledge/knowledge.wxml:template:1:59")
var o4B=_o(78,e,s,gg)
var l5B=_gd(x[43],o4B,e_,d_)
if(l5B){
var a6B=_1(77,e,s,gg) || {}
var cur_globalf=gg.f
c3B.wxXCkey=3
l5B(a6B,a6B,c3B,gg)
gg.f=cur_globalf
}
else _w(o4B,x[43],1,71)
cs.pop()
o2B.pop()
return r
}
e_[x[43]]={f:m26,j:[],i:[],ti:[x[44]],ic:[]}
d_[x[45]]={}
d_[x[45]]["73738216"]=function(e,s,r,gg){
var b=x[45]+':73738216'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/knowledge/morereply/morereply.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[45]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
return r
}
e_[x[45]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m28=function(e,s,r,gg){
var b9B=e_[x[46]].i
_ai(b9B,x[47],e_,x[46],1,1)
var o0B=_v()
_(r,o0B)
cs.push("./pages/index/knowledge/morereply/morereply.wxml:template:1:69")
var xAC=_o(81,e,s,gg)
var oBC=_gd(x[46],xAC,e_,d_)
if(oBC){
var fCC=_1(80,e,s,gg) || {}
var cur_globalf=gg.f
o0B.wxXCkey=3
oBC(fCC,fCC,o0B,gg)
gg.f=cur_globalf
}
else _w(xAC,x[46],1,81)
cs.pop()
b9B.pop()
return r
}
e_[x[46]]={f:m28,j:[],i:[],ti:[x[47]],ic:[]}
d_[x[48]]={}
d_[x[48]]["ca476838"]=function(e,s,r,gg){
var b=x[48]+':ca476838'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/knowledge/question/question.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[48]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m29=function(e,s,r,gg){
return r
}
e_[x[48]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m30=function(e,s,r,gg){
var oFC=e_[x[49]].i
_ai(oFC,x[50],e_,x[49],1,1)
var cGC=_v()
_(r,cGC)
cs.push("./pages/index/knowledge/question/question.wxml:template:1:67")
var oHC=_o(84,e,s,gg)
var lIC=_gd(x[49],oHC,e_,d_)
if(lIC){
var aJC=_1(83,e,s,gg) || {}
var cur_globalf=gg.f
cGC.wxXCkey=3
lIC(aJC,aJC,cGC,gg)
gg.f=cur_globalf
}
else _w(oHC,x[49],1,79)
cs.pop()
oFC.pop()
return r
}
e_[x[49]]={f:m30,j:[],i:[],ti:[x[50]],ic:[]}
d_[x[51]]={}
d_[x[51]]["20153b80"]=function(e,s,r,gg){
var b=x[51]+':20153b80'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/knowledge/reply/reply.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[51]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m31=function(e,s,r,gg){
return r
}
e_[x[51]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m32=function(e,s,r,gg){
var bMC=e_[x[52]].i
_ai(bMC,x[53],e_,x[52],1,1)
var oNC=_v()
_(r,oNC)
cs.push("./pages/index/knowledge/reply/reply.wxml:template:1:61")
var xOC=_o(87,e,s,gg)
var oPC=_gd(x[52],xOC,e_,d_)
if(oPC){
var fQC=_1(86,e,s,gg) || {}
var cur_globalf=gg.f
oNC.wxXCkey=3
oPC(fQC,fQC,oNC,gg)
gg.f=cur_globalf
}
else _w(xOC,x[52],1,73)
cs.pop()
bMC.pop()
return r
}
e_[x[52]]={f:m32,j:[],i:[],ti:[x[53]],ic:[]}
d_[x[54]]={}
d_[x[54]]["3470ae9d"]=function(e,s,r,gg){
var b=x[54]+':3470ae9d'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/news/info/info.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[54]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/index/news/info/info.vue.wxml:template:11:10")
var xC=_o(90,e,s,gg)
var oD=_gd(x[54],xC,e_,d_)
if(oD){
var fE=_1(89,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[54],11,76)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m33=function(e,s,r,gg){
var hSC=e_[x[54]].i
_ai(hSC,x[10],e_,x[54],1,1)
hSC.pop()
return r
}
e_[x[54]]={f:m33,j:[],i:[],ti:[x[10]],ic:[]}
d_[x[55]]={}
var m34=function(e,s,r,gg){
var cUC=e_[x[55]].i
_ai(cUC,x[56],e_,x[55],1,1)
var oVC=_v()
_(r,oVC)
cs.push("./pages/index/news/info/info.wxml:template:1:54")
var lWC=_o(92,e,s,gg)
var aXC=_gd(x[55],lWC,e_,d_)
if(aXC){
var tYC=_1(91,e,s,gg) || {}
var cur_globalf=gg.f
oVC.wxXCkey=3
aXC(tYC,tYC,oVC,gg)
gg.f=cur_globalf
}
else _w(lWC,x[55],1,66)
cs.pop()
cUC.pop()
return r
}
e_[x[55]]={f:m34,j:[],i:[],ti:[x[56]],ic:[]}
d_[x[57]]={}
d_[x[57]]["2dbcf362"]=function(e,s,r,gg){
var b=x[57]+':2dbcf362'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/news/news.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[57]);return}
p_[b]=true
try{
cs.push("./pages/index/news/news.vue.wxml:view:4:4")
var oB=_n('view')
_r(oB,'class',94,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/index/news/news.vue.wxml:template:5:6")
var oD=_o(96,e,s,gg)
var fE=_gd(x[57],oD,e_,d_)
if(fE){
var cF=_1(95,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[57],5,72)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/index/news/news.vue.wxml:template:9:6")
var oH=_o(98,e,s,gg)
var cI=_gd(x[57],oH,e_,d_)
if(cI){
var oJ=_1(97,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[57],9,72)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m35=function(e,s,r,gg){
var b1C=e_[x[57]].i
_ai(b1C,x[9],e_,x[57],1,1)
_ai(b1C,x[4],e_,x[57],2,2)
b1C.pop()
b1C.pop()
return r
}
e_[x[57]]={f:m35,j:[],i:[],ti:[x[9],x[4]],ic:[]}
d_[x[58]]={}
var m36=function(e,s,r,gg){
var x3C=e_[x[58]].i
_ai(x3C,x[59],e_,x[58],1,1)
var o4C=_v()
_(r,o4C)
cs.push("./pages/index/news/news.wxml:template:1:49")
var f5C=_o(100,e,s,gg)
var c6C=_gd(x[58],f5C,e_,d_)
if(c6C){
var h7C=_1(99,e,s,gg) || {}
var cur_globalf=gg.f
o4C.wxXCkey=3
c6C(h7C,h7C,o4C,gg)
gg.f=cur_globalf
}
else _w(f5C,x[58],1,61)
cs.pop()
x3C.pop()
return r
}
e_[x[58]]={f:m36,j:[],i:[],ti:[x[59]],ic:[]}
d_[x[60]]={}
d_[x[60]]["73b0ba68"]=function(e,s,r,gg){
var b=x[60]+':73b0ba68'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/store/store.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[60]);return}
p_[b]=true
try{
cs.push("./pages/index/store/store.vue.wxml:view:6:4")
var oB=_n('view')
_r(oB,'class',102,e,s,gg)
cs.push("./pages/index/store/store.vue.wxml:view:7:6")
var xC=_m('view',['class',103,'hidden',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./pages/index/store/store.vue.wxml:template:9:10")
var fE=_o(106,e,s,gg)
var cF=_gd(x[60],fE,e_,d_)
if(cF){
var hG=_1(105,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[60],9,76)
cs.pop()
var oH=_v()
_(xC,oH)
cs.push("./pages/index/store/store.vue.wxml:template:49:12")
var cI=_o(108,e,s,gg)
var oJ=_gd(x[60],cI,e_,d_)
if(oJ){
var lK=_1(107,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[60],49,78)
cs.pop()
cs.pop()
_(oB,xC)
cs.push("./pages/index/store/store.vue.wxml:view:53:6")
var aL=_m('view',['class',109,'hidden',1],[],e,s,gg)
var tM=_v()
_(aL,tM)
cs.push("./pages/index/store/store.vue.wxml:template:54:8")
var eN=_o(112,e,s,gg)
var bO=_gd(x[60],eN,e_,d_)
if(bO){
var oP=_1(111,e,s,gg) || {}
var cur_globalf=gg.f
tM.wxXCkey=3
bO(oP,oP,tM,gg)
gg.f=cur_globalf
}
else _w(eN,x[60],54,74)
cs.pop()
var xQ=_v()
_(aL,xQ)
cs.push("./pages/index/store/store.vue.wxml:template:55:8")
var oR=_o(114,e,s,gg)
var fS=_gd(x[60],oR,e_,d_)
if(fS){
var cT=_1(113,e,s,gg) || {}
var cur_globalf=gg.f
xQ.wxXCkey=3
fS(cT,cT,xQ,gg)
gg.f=cur_globalf
}
else _w(oR,x[60],55,74)
cs.pop()
cs.pop()
_(oB,aL)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m37=function(e,s,r,gg){
var c9C=e_[x[60]].i
_ai(c9C,x[9],e_,x[60],1,1)
_ai(c9C,x[11],e_,x[60],2,2)
_ai(c9C,x[12],e_,x[60],3,2)
_ai(c9C,x[13],e_,x[60],4,2)
c9C.pop()
c9C.pop()
c9C.pop()
c9C.pop()
return r
}
e_[x[60]]={f:m37,j:[],i:[],ti:[x[9],x[11],x[12],x[13]],ic:[]}
d_[x[61]]={}
var m38=function(e,s,r,gg){
var lAD=e_[x[61]].i
_ai(lAD,x[62],e_,x[61],1,1)
var aBD=_v()
_(r,aBD)
cs.push("./pages/index/store/store.wxml:template:1:51")
var tCD=_o(116,e,s,gg)
var eDD=_gd(x[61],tCD,e_,d_)
if(eDD){
var bED=_1(115,e,s,gg) || {}
var cur_globalf=gg.f
aBD.wxXCkey=3
eDD(bED,bED,aBD,gg)
gg.f=cur_globalf
}
else _w(tCD,x[61],1,63)
cs.pop()
lAD.pop()
return r
}
e_[x[61]]={f:m38,j:[],i:[],ti:[x[62]],ic:[]}
d_[x[63]]={}
d_[x[63]]["6d01b6fc"]=function(e,s,r,gg){
var b=x[63]+':6d01b6fc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/zaobao/zaobao.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[63]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/index/zaobao/zaobao.vue.wxml:template:15:8")
var xC=_o(119,e,s,gg)
var oD=_gd(x[63],xC,e_,d_)
if(oD){
var fE=_1(118,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[63],15,74)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m39=function(e,s,r,gg){
var xGD=e_[x[63]].i
_ai(xGD,x[10],e_,x[63],1,1)
xGD.pop()
return r
}
e_[x[63]]={f:m39,j:[],i:[],ti:[x[10]],ic:[]}
d_[x[64]]={}
var m40=function(e,s,r,gg){
var fID=e_[x[64]].i
_ai(fID,x[65],e_,x[64],1,1)
var cJD=_v()
_(r,cJD)
cs.push("./pages/index/zaobao/zaobao.wxml:template:1:53")
var hKD=_o(121,e,s,gg)
var oLD=_gd(x[64],hKD,e_,d_)
if(oLD){
var cMD=_1(120,e,s,gg) || {}
var cur_globalf=gg.f
cJD.wxXCkey=3
oLD(cMD,cMD,cJD,gg)
gg.f=cur_globalf
}
else _w(hKD,x[64],1,65)
cs.pop()
fID.pop()
return r
}
e_[x[64]]={f:m40,j:[],i:[],ti:[x[65]],ic:[]}
d_[x[66]]={}
d_[x[66]]["af9aafa8"]=function(e,s,r,gg){
var b=x[66]+':af9aafa8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/investment/investment.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[66]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m41=function(e,s,r,gg){
return r
}
e_[x[66]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
var m42=function(e,s,r,gg){
var aPD=e_[x[67]].i
_ai(aPD,x[68],e_,x[67],1,1)
var tQD=_v()
_(r,tQD)
cs.push("./pages/investment/investment.wxml:template:1:55")
var eRD=_o(124,e,s,gg)
var bSD=_gd(x[67],eRD,e_,d_)
if(bSD){
var oTD=_1(123,e,s,gg) || {}
var cur_globalf=gg.f
tQD.wxXCkey=3
bSD(oTD,oTD,tQD,gg)
gg.f=cur_globalf
}
else _w(eRD,x[67],1,67)
cs.pop()
aPD.pop()
return r
}
e_[x[67]]={f:m42,j:[],i:[],ti:[x[68]],ic:[]}
d_[x[69]]={}
d_[x[69]]["7bd0a63c"]=function(e,s,r,gg){
var b=x[69]+':7bd0a63c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/message/message.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[69]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m43=function(e,s,r,gg){
return r
}
e_[x[69]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m44=function(e,s,r,gg){
var fWD=e_[x[70]].i
_ai(fWD,x[71],e_,x[70],1,1)
var cXD=_v()
_(r,cXD)
cs.push("./pages/message/message.wxml:template:1:49")
var hYD=_o(127,e,s,gg)
var oZD=_gd(x[70],hYD,e_,d_)
if(oZD){
var c1D=_1(126,e,s,gg) || {}
var cur_globalf=gg.f
cXD.wxXCkey=3
oZD(c1D,c1D,cXD,gg)
gg.f=cur_globalf
}
else _w(hYD,x[70],1,61)
cs.pop()
fWD.pop()
return r
}
e_[x[70]]={f:m44,j:[],i:[],ti:[x[71]],ic:[]}
d_[x[72]]={}
d_[x[72]]["098d2bcc"]=function(e,s,r,gg){
var b=x[72]+':098d2bcc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/lcs-gerenzhuye/lcs-gerenzhuye.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[72]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m45=function(e,s,r,gg){
return r
}
e_[x[72]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[73]]={}
var m46=function(e,s,r,gg){
var a4D=e_[x[73]].i
_ai(a4D,x[74],e_,x[73],1,1)
var t5D=_v()
_(r,t5D)
cs.push("./pages/my/lcs-gerenzhuye/lcs-gerenzhuye.wxml:template:1:66")
var e6D=_o(130,e,s,gg)
var b7D=_gd(x[73],e6D,e_,d_)
if(b7D){
var o8D=_1(129,e,s,gg) || {}
var cur_globalf=gg.f
t5D.wxXCkey=3
b7D(o8D,o8D,t5D,gg)
gg.f=cur_globalf
}
else _w(e6D,x[73],1,78)
cs.pop()
a4D.pop()
return r
}
e_[x[73]]={f:m46,j:[],i:[],ti:[x[74]],ic:[]}
d_[x[75]]={}
d_[x[75]]["7ccac8c6"]=function(e,s,r,gg){
var b=x[75]+':7ccac8c6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/lcs-my.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[75]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m47=function(e,s,r,gg){
return r
}
e_[x[75]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[76]]={}
var m48=function(e,s,r,gg){
var fAE=e_[x[76]].i
_ai(fAE,x[77],e_,x[76],1,1)
var cBE=_v()
_(r,cBE)
cs.push("./pages/my/lcs-my.wxml:template:1:43")
var hCE=_o(133,e,s,gg)
var oDE=_gd(x[76],hCE,e_,d_)
if(oDE){
var cEE=_1(132,e,s,gg) || {}
var cur_globalf=gg.f
cBE.wxXCkey=3
oDE(cEE,cEE,cBE,gg)
gg.f=cur_globalf
}
else _w(hCE,x[76],1,55)
cs.pop()
fAE.pop()
return r
}
e_[x[76]]={f:m48,j:[],i:[],ti:[x[77]],ic:[]}
d_[x[78]]={}
d_[x[78]]["2c18ff2c"]=function(e,s,r,gg){
var b=x[78]+':2c18ff2c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/lcs-shezhi/lcs-shezhi.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[78]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m49=function(e,s,r,gg){
return r
}
e_[x[78]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[79]]={}
var m50=function(e,s,r,gg){
var aHE=e_[x[79]].i
_ai(aHE,x[80],e_,x[79],1,1)
var tIE=_v()
_(r,tIE)
cs.push("./pages/my/lcs-shezhi/lcs-shezhi.wxml:template:1:58")
var eJE=_o(136,e,s,gg)
var bKE=_gd(x[79],eJE,e_,d_)
if(bKE){
var oLE=_1(135,e,s,gg) || {}
var cur_globalf=gg.f
tIE.wxXCkey=3
bKE(oLE,oLE,tIE,gg)
gg.f=cur_globalf
}
else _w(eJE,x[79],1,70)
cs.pop()
aHE.pop()
return r
}
e_[x[79]]={f:m50,j:[],i:[],ti:[x[80]],ic:[]}
d_[x[81]]={}
d_[x[81]]["66a27246"]=function(e,s,r,gg){
var b=x[81]+':66a27246'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/lcs-wodedingdan/lcs-wodedingdan.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[81]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/my/lcs-wodedingdan/lcs-wodedingdan.vue.wxml:template:5:8")
var xC=_o(139,e,s,gg)
var oD=_gd(x[81],xC,e_,d_)
if(oD){
var fE=_1(138,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[81],5,74)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m51=function(e,s,r,gg){
var oNE=e_[x[81]].i
_ai(oNE,x[12],e_,x[81],1,1)
oNE.pop()
return r
}
e_[x[81]]={f:m51,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[82]]={}
var m52=function(e,s,r,gg){
var cPE=e_[x[82]].i
_ai(cPE,x[83],e_,x[82],1,1)
var hQE=_v()
_(r,hQE)
cs.push("./pages/my/lcs-wodedingdan/lcs-wodedingdan.wxml:template:1:68")
var oRE=_o(141,e,s,gg)
var cSE=_gd(x[82],oRE,e_,d_)
if(cSE){
var oTE=_1(140,e,s,gg) || {}
var cur_globalf=gg.f
hQE.wxXCkey=3
cSE(oTE,oTE,hQE,gg)
gg.f=cur_globalf
}
else _w(oRE,x[82],1,80)
cs.pop()
cPE.pop()
return r
}
e_[x[82]]={f:m52,j:[],i:[],ti:[x[83]],ic:[]}
d_[x[84]]={}
d_[x[84]]["cfec12c2"]=function(e,s,r,gg){
var b=x[84]+':cfec12c2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[84]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m53=function(e,s,r,gg){
return r
}
e_[x[84]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[85]]={}
var m54=function(e,s,r,gg){
var tWE=e_[x[85]].i
_ai(tWE,x[86],e_,x[85],1,1)
var eXE=_v()
_(r,eXE)
cs.push("./pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.wxml:template:1:77")
var bYE=_o(144,e,s,gg)
var oZE=_gd(x[85],bYE,e_,d_)
if(oZE){
var x1E=_1(143,e,s,gg) || {}
var cur_globalf=gg.f
eXE.wxXCkey=3
oZE(x1E,x1E,eXE,gg)
gg.f=cur_globalf
}
else _w(bYE,x[85],1,89)
cs.pop()
tWE.pop()
return r
}
e_[x[85]]={f:m54,j:[],i:[],ti:[x[86]],ic:[]}
d_[x[87]]={}
d_[x[87]]["2e041d68"]=function(e,s,r,gg){
var b=x[87]+':2e041d68'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/lcs-wodekehu/lcs-wodekehu.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[87]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/my/lcs-wodekehu/lcs-wodekehu.vue.wxml:template:5:8")
var xC=_o(147,e,s,gg)
var oD=_gd(x[87],xC,e_,d_)
if(oD){
var fE=_1(146,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[87],5,74)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m55=function(e,s,r,gg){
var f3E=e_[x[87]].i
_ai(f3E,x[12],e_,x[87],1,1)
f3E.pop()
return r
}
e_[x[87]]={f:m55,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[88]]={}
var m56=function(e,s,r,gg){
var h5E=e_[x[88]].i
_ai(h5E,x[89],e_,x[88],1,1)
var o6E=_v()
_(r,o6E)
cs.push("./pages/my/lcs-wodekehu/lcs-wodekehu.wxml:template:1:62")
var c7E=_o(149,e,s,gg)
var o8E=_gd(x[88],c7E,e_,d_)
if(o8E){
var l9E=_1(148,e,s,gg) || {}
var cur_globalf=gg.f
o6E.wxXCkey=3
o8E(l9E,l9E,o6E,gg)
gg.f=cur_globalf
}
else _w(c7E,x[88],1,74)
cs.pop()
h5E.pop()
return r
}
e_[x[88]]={f:m56,j:[],i:[],ti:[x[89]],ic:[]}
d_[x[90]]={}
d_[x[90]]["6f0074ce"]=function(e,s,r,gg){
var b=x[90]+':6f0074ce'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[90]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m57=function(e,s,r,gg){
return r
}
e_[x[90]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[91]]={}
var m58=function(e,s,r,gg){
var eBF=e_[x[91]].i
_ai(eBF,x[92],e_,x[91],1,1)
var bCF=_v()
_(r,bCF)
cs.push("./pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.wxml:template:1:73")
var oDF=_o(152,e,s,gg)
var xEF=_gd(x[91],oDF,e_,d_)
if(xEF){
var oFF=_1(151,e,s,gg) || {}
var cur_globalf=gg.f
bCF.wxXCkey=3
xEF(oFF,oFF,bCF,gg)
gg.f=cur_globalf
}
else _w(oDF,x[91],1,85)
cs.pop()
eBF.pop()
return r
}
e_[x[91]]={f:m58,j:[],i:[],ti:[x[92]],ic:[]}
d_[x[93]]={}
d_[x[93]]["27cfc68c"]=function(e,s,r,gg){
var b=x[93]+':27cfc68c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/my.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[93]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m59=function(e,s,r,gg){
return r
}
e_[x[93]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[94]]={}
var m60=function(e,s,r,gg){
var hIF=e_[x[94]].i
_ai(hIF,x[95],e_,x[94],1,1)
var oJF=_v()
_(r,oJF)
cs.push("./pages/my/my.wxml:template:1:39")
var cKF=_o(155,e,s,gg)
var oLF=_gd(x[94],cKF,e_,d_)
if(oLF){
var lMF=_1(154,e,s,gg) || {}
var cur_globalf=gg.f
oJF.wxXCkey=3
oLF(lMF,lMF,oJF,gg)
gg.f=cur_globalf
}
else _w(cKF,x[94],1,51)
cs.pop()
hIF.pop()
return r
}
e_[x[94]]={f:m60,j:[],i:[],ti:[x[95]],ic:[]}
d_[x[96]]={}
d_[x[96]]["1189941c"]=function(e,s,r,gg){
var b=x[96]+':1189941c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/wodechicang/jiaoyijilu/jiaoyijilu.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[96]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m61=function(e,s,r,gg){
return r
}
e_[x[96]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[97]]={}
var m62=function(e,s,r,gg){
var ePF=e_[x[97]].i
_ai(ePF,x[98],e_,x[97],1,1)
var bQF=_v()
_(r,bQF)
cs.push("./pages/my/wodechicang/jiaoyijilu/jiaoyijilu.wxml:template:1:70")
var oRF=_o(158,e,s,gg)
var xSF=_gd(x[97],oRF,e_,d_)
if(xSF){
var oTF=_1(157,e,s,gg) || {}
var cur_globalf=gg.f
bQF.wxXCkey=3
xSF(oTF,oTF,bQF,gg)
gg.f=cur_globalf
}
else _w(oRF,x[97],1,82)
cs.pop()
ePF.pop()
return r
}
e_[x[97]]={f:m62,j:[],i:[],ti:[x[98]],ic:[]}
d_[x[99]]={}
d_[x[99]]["d77c8e9c"]=function(e,s,r,gg){
var b=x[99]+':d77c8e9c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/wodechicang/shouyimingxi/shouyimingxi.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[99]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m63=function(e,s,r,gg){
return r
}
e_[x[99]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[100]]={}
var m64=function(e,s,r,gg){
var hWF=e_[x[100]].i
_ai(hWF,x[101],e_,x[100],1,1)
var oXF=_v()
_(r,oXF)
cs.push("./pages/my/wodechicang/shouyimingxi/shouyimingxi.wxml:template:1:74")
var cYF=_o(161,e,s,gg)
var oZF=_gd(x[100],cYF,e_,d_)
if(oZF){
var l1F=_1(160,e,s,gg) || {}
var cur_globalf=gg.f
oXF.wxXCkey=3
oZF(l1F,l1F,oXF,gg)
gg.f=cur_globalf
}
else _w(cYF,x[100],1,86)
cs.pop()
hWF.pop()
return r
}
e_[x[100]]={f:m64,j:[],i:[],ti:[x[101]],ic:[]}
d_[x[102]]={}
d_[x[102]]["12769410"]=function(e,s,r,gg){
var b=x[102]+':12769410'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/wodechicang/wodechicang.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[102]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/my/wodechicang/wodechicang.vue.wxml:template:28:10")
var xC=_o(165,e,s,gg)
var oD=_gd(x[102],xC,e_,d_)
if(oD){
var fE=_1(164,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[102],28,106)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m65=function(e,s,r,gg){
var t3F=e_[x[102]].i
_ai(t3F,x[14],e_,x[102],1,1)
t3F.pop()
return r
}
e_[x[102]]={f:m65,j:[],i:[],ti:[x[14]],ic:[]}
d_[x[103]]={}
var m66=function(e,s,r,gg){
var b5F=e_[x[103]].i
_ai(b5F,x[104],e_,x[103],1,1)
var o6F=_v()
_(r,o6F)
cs.push("./pages/my/wodechicang/wodechicang.wxml:template:1:60")
var x7F=_o(168,e,s,gg)
var o8F=_gd(x[103],x7F,e_,d_)
if(o8F){
var f9F=_1(167,e,s,gg) || {}
var cur_globalf=gg.f
o6F.wxXCkey=3
o8F(f9F,f9F,o6F,gg)
gg.f=cur_globalf
}
else _w(x7F,x[103],1,72)
cs.pop()
b5F.pop()
return r
}
e_[x[103]]={f:m66,j:[],i:[],ti:[x[104]],ic:[]}
d_[x[105]]={}
d_[x[105]]["43a979b0"]=function(e,s,r,gg){
var b=x[105]+':43a979b0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/wodedingdan/wodedingdan.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[105]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/my/wodedingdan/wodedingdan.vue.wxml:template:5:8")
var xC=_o(171,e,s,gg)
var oD=_gd(x[105],xC,e_,d_)
if(oD){
var fE=_1(170,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[105],5,74)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m67=function(e,s,r,gg){
var hAG=e_[x[105]].i
_ai(hAG,x[12],e_,x[105],1,1)
hAG.pop()
return r
}
e_[x[105]]={f:m67,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[106]]={}
var m68=function(e,s,r,gg){
var cCG=e_[x[106]].i
_ai(cCG,x[107],e_,x[106],1,1)
var oDG=_v()
_(r,oDG)
cs.push("./pages/my/wodedingdan/wodedingdan.wxml:template:1:60")
var lEG=_o(173,e,s,gg)
var aFG=_gd(x[106],lEG,e_,d_)
if(aFG){
var tGG=_1(172,e,s,gg) || {}
var cur_globalf=gg.f
oDG.wxXCkey=3
aFG(tGG,tGG,oDG,gg)
gg.f=cur_globalf
}
else _w(lEG,x[106],1,72)
cs.pop()
cCG.pop()
return r
}
e_[x[106]]={f:m68,j:[],i:[],ti:[x[107]],ic:[]}
d_[x[108]]={}
d_[x[108]]["46265a08"]=function(e,s,r,gg){
var b=x[108]+':46265a08'
r.wxVkey=b
gg.f=$gdc(f_["./pages/my/zengzhifuwu/zengzhifuwu.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[108]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m69=function(e,s,r,gg){
return r
}
e_[x[108]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[109]]={}
var m70=function(e,s,r,gg){
var oJG=e_[x[109]].i
_ai(oJG,x[110],e_,x[109],1,1)
var xKG=_v()
_(r,xKG)
cs.push("./pages/my/zengzhifuwu/zengzhifuwu.wxml:template:1:60")
var oLG=_o(176,e,s,gg)
var fMG=_gd(x[109],oLG,e_,d_)
if(fMG){
var cNG=_1(175,e,s,gg) || {}
var cur_globalf=gg.f
xKG.wxXCkey=3
fMG(cNG,cNG,xKG,gg)
gg.f=cur_globalf
}
else _w(oLG,x[109],1,72)
cs.pop()
oJG.pop()
return r
}
e_[x[109]]={f:m70,j:[],i:[],ti:[x[110]],ic:[]}
d_[x[111]]={}
d_[x[111]]["026f129c"]=function(e,s,r,gg){
var b=x[111]+':026f129c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/product.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[111]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/product/product.vue.wxml:template:7:12")
var xC=_o(179,e,s,gg)
var oD=_gd(x[111],xC,e_,d_)
if(oD){
var fE=_1(178,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[111],7,78)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m71=function(e,s,r,gg){
var oPG=e_[x[111]].i
_ai(oPG,x[12],e_,x[111],1,1)
oPG.pop()
return r
}
e_[x[111]]={f:m71,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[112]]={}
var m72=function(e,s,r,gg){
var oRG=e_[x[112]].i
_ai(oRG,x[113],e_,x[112],1,1)
var lSG=_v()
_(r,lSG)
cs.push("./pages/product/product.wxml:template:1:49")
var aTG=_o(181,e,s,gg)
var tUG=_gd(x[112],aTG,e_,d_)
if(tUG){
var eVG=_1(180,e,s,gg) || {}
var cur_globalf=gg.f
lSG.wxXCkey=3
tUG(eVG,eVG,lSG,gg)
gg.f=cur_globalf
}
else _w(aTG,x[112],1,61)
cs.pop()
oRG.pop()
return r
}
e_[x[112]]={f:m72,j:[],i:[],ti:[x[113]],ic:[]}
d_[x[114]]={}
d_[x[114]]["7bb80f95"]=function(e,s,r,gg){
var b=x[114]+':7bb80f95'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/pinglun/pinglun.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[114]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/product/productYemian/pinglun/pinglun.vue.wxml:template:26:8")
var xC=_o(184,e,s,gg)
var oD=_gd(x[114],xC,e_,d_)
if(oD){
var fE=_1(183,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[114],26,74)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m73=function(e,s,r,gg){
var oXG=e_[x[114]].i
_ai(oXG,x[16],e_,x[114],1,1)
oXG.pop()
return r
}
e_[x[114]]={f:m73,j:[],i:[],ti:[x[16]],ic:[]}
d_[x[115]]={}
var m74=function(e,s,r,gg){
var oZG=e_[x[115]].i
_ai(oZG,x[116],e_,x[115],1,1)
var f1G=_v()
_(r,f1G)
cs.push("./pages/product/productYemian/pinglun/pinglun.wxml:template:1:71")
var c2G=_o(186,e,s,gg)
var h3G=_gd(x[115],c2G,e_,d_)
if(h3G){
var o4G=_1(185,e,s,gg) || {}
var cur_globalf=gg.f
f1G.wxXCkey=3
h3G(o4G,o4G,f1G,gg)
gg.f=cur_globalf
}
else _w(c2G,x[115],1,83)
cs.pop()
oZG.pop()
return r
}
e_[x[115]]={f:m74,j:[],i:[],ti:[x[116]],ic:[]}
d_[x[117]]={}
d_[x[117]]["1a8fb7af"]=function(e,s,r,gg){
var b=x[117]+':1a8fb7af'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/productDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[117]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m75=function(e,s,r,gg){
return r
}
e_[x[117]]={f:m75,j:[],i:[],ti:[],ic:[]}
d_[x[118]]={}
var m76=function(e,s,r,gg){
var l7G=e_[x[118]].i
_ai(l7G,x[119],e_,x[118],1,1)
var a8G=_v()
_(r,a8G)
cs.push("./pages/product/productYemian/productDetail/productDetail.wxml:template:1:83")
var t9G=_o(189,e,s,gg)
var e0G=_gd(x[118],t9G,e_,d_)
if(e0G){
var bAH=_1(188,e,s,gg) || {}
var cur_globalf=gg.f
a8G.wxXCkey=3
e0G(bAH,bAH,a8G,gg)
gg.f=cur_globalf
}
else _w(t9G,x[118],1,95)
cs.pop()
l7G.pop()
return r
}
e_[x[118]]={f:m76,j:[],i:[],ti:[x[119]],ic:[]}
d_[x[120]]={}
d_[x[120]]["86f78b90"]=function(e,s,r,gg){
var b=x[120]+':86f78b90'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[120]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m77=function(e,s,r,gg){
return r
}
e_[x[120]]={f:m77,j:[],i:[],ti:[],ic:[]}
d_[x[121]]={}
var m78=function(e,s,r,gg){
var oDH=e_[x[121]].i
_ai(oDH,x[122],e_,x[121],1,1)
var fEH=_v()
_(r,fEH)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.wxml:template:1:106")
var cFH=_o(192,e,s,gg)
var hGH=_gd(x[121],cFH,e_,d_)
if(hGH){
var oHH=_1(191,e,s,gg) || {}
var cur_globalf=gg.f
fEH.wxXCkey=3
hGH(oHH,oHH,fEH,gg)
gg.f=cur_globalf
}
else _w(cFH,x[121],1,118)
cs.pop()
oDH.pop()
return r
}
e_[x[121]]={f:m78,j:[],i:[],ti:[x[122]],ic:[]}
d_[x[123]]={}
d_[x[123]]["2703efda"]=function(e,s,r,gg){
var b=x[123]+':2703efda'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[123]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m79=function(e,s,r,gg){
return r
}
e_[x[123]]={f:m79,j:[],i:[],ti:[],ic:[]}
d_[x[124]]={}
var m80=function(e,s,r,gg){
var lKH=e_[x[124]].i
_ai(lKH,x[125],e_,x[124],1,1)
var aLH=_v()
_(r,aLH)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.wxml:template:1:108")
var tMH=_o(195,e,s,gg)
var eNH=_gd(x[124],tMH,e_,d_)
if(eNH){
var bOH=_1(194,e,s,gg) || {}
var cur_globalf=gg.f
aLH.wxXCkey=3
eNH(bOH,bOH,aLH,gg)
gg.f=cur_globalf
}
else _w(tMH,x[124],1,120)
cs.pop()
lKH.pop()
return r
}
e_[x[124]]={f:m80,j:[],i:[],ti:[x[125]],ic:[]}
d_[x[126]]={}
d_[x[126]]["53dbd291"]=function(e,s,r,gg){
var b=x[126]+':53dbd291'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[126]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m81=function(e,s,r,gg){
return r
}
e_[x[126]]={f:m81,j:[],i:[],ti:[],ic:[]}
d_[x[127]]={}
var m82=function(e,s,r,gg){
var oRH=e_[x[127]].i
_ai(oRH,x[128],e_,x[127],1,1)
var fSH=_v()
_(r,fSH)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.wxml:template:1:112")
var cTH=_o(198,e,s,gg)
var hUH=_gd(x[127],cTH,e_,d_)
if(hUH){
var oVH=_1(197,e,s,gg) || {}
var cur_globalf=gg.f
fSH.wxXCkey=3
hUH(oVH,oVH,fSH,gg)
gg.f=cur_globalf
}
else _w(cTH,x[127],1,124)
cs.pop()
oRH.pop()
return r
}
e_[x[127]]={f:m82,j:[],i:[],ti:[x[128]],ic:[]}
d_[x[129]]={}
d_[x[129]]["7dda3284"]=function(e,s,r,gg){
var b=x[129]+':7dda3284'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[129]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.vue.wxml:template:25:12")
var xC=_o(201,e,s,gg)
var oD=_gd(x[129],xC,e_,d_)
if(oD){
var fE=_1(200,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[129],25,78)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m83=function(e,s,r,gg){
var oXH=e_[x[129]].i
_ai(oXH,x[15],e_,x[129],1,1)
oXH.pop()
return r
}
e_[x[129]]={f:m83,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[130]]={}
var m84=function(e,s,r,gg){
var aZH=e_[x[130]].i
_ai(aZH,x[131],e_,x[130],1,1)
var t1H=_v()
_(r,t1H)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.wxml:template:1:93")
var e2H=_o(203,e,s,gg)
var b3H=_gd(x[130],e2H,e_,d_)
if(b3H){
var o4H=_1(202,e,s,gg) || {}
var cur_globalf=gg.f
t1H.wxXCkey=3
b3H(o4H,o4H,t1H,gg)
gg.f=cur_globalf
}
else _w(e2H,x[130],1,105)
cs.pop()
aZH.pop()
return r
}
e_[x[130]]={f:m84,j:[],i:[],ti:[x[131]],ic:[]}
d_[x[132]]={}
d_[x[132]]["102ecf44"]=function(e,s,r,gg){
var b=x[132]+':102ecf44'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[132]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.vue.wxml:template:30:12")
var xC=_o(206,e,s,gg)
var oD=_gd(x[132],xC,e_,d_)
if(oD){
var fE=_1(205,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[132],30,78)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m85=function(e,s,r,gg){
var o6H=e_[x[132]].i
_ai(o6H,x[15],e_,x[132],1,1)
o6H.pop()
return r
}
e_[x[132]]={f:m85,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[133]]={}
var m86=function(e,s,r,gg){
var c8H=e_[x[133]].i
_ai(c8H,x[134],e_,x[133],1,1)
var h9H=_v()
_(r,h9H)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.wxml:template:1:97")
var o0H=_o(208,e,s,gg)
var cAI=_gd(x[133],o0H,e_,d_)
if(cAI){
var oBI=_1(207,e,s,gg) || {}
var cur_globalf=gg.f
h9H.wxXCkey=3
cAI(oBI,oBI,h9H,gg)
gg.f=cur_globalf
}
else _w(o0H,x[133],1,109)
cs.pop()
c8H.pop()
return r
}
e_[x[133]]={f:m86,j:[],i:[],ti:[x[134]],ic:[]}
d_[x[135]]={}
d_[x[135]]["58c74f01"]=function(e,s,r,gg){
var b=x[135]+':58c74f01'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[135]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m87=function(e,s,r,gg){
return r
}
e_[x[135]]={f:m87,j:[],i:[],ti:[],ic:[]}
d_[x[136]]={}
var m88=function(e,s,r,gg){
var tEI=e_[x[136]].i
_ai(tEI,x[137],e_,x[136],1,1)
var eFI=_v()
_(r,eFI)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.wxml:template:1:104")
var bGI=_o(211,e,s,gg)
var oHI=_gd(x[136],bGI,e_,d_)
if(oHI){
var xII=_1(210,e,s,gg) || {}
var cur_globalf=gg.f
eFI.wxXCkey=3
oHI(xII,xII,eFI,gg)
gg.f=cur_globalf
}
else _w(bGI,x[136],1,116)
cs.pop()
tEI.pop()
return r
}
e_[x[136]]={f:m88,j:[],i:[],ti:[x[137]],ic:[]}
d_[x[138]]={}
d_[x[138]]["98e9f2bc"]=function(e,s,r,gg){
var b=x[138]+':98e9f2bc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[138]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m89=function(e,s,r,gg){
return r
}
e_[x[138]]={f:m89,j:[],i:[],ti:[],ic:[]}
d_[x[139]]={}
var m90=function(e,s,r,gg){
var cLI=e_[x[139]].i
_ai(cLI,x[140],e_,x[139],1,1)
var hMI=_v()
_(r,hMI)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.wxml:template:1:111")
var oNI=_o(214,e,s,gg)
var cOI=_gd(x[139],oNI,e_,d_)
if(cOI){
var oPI=_1(213,e,s,gg) || {}
var cur_globalf=gg.f
hMI.wxXCkey=3
cOI(oPI,oPI,hMI,gg)
gg.f=cur_globalf
}
else _w(oNI,x[139],1,123)
cs.pop()
cLI.pop()
return r
}
e_[x[139]]={f:m90,j:[],i:[],ti:[x[140]],ic:[]}
d_[x[141]]={}
d_[x[141]]["ede95984"]=function(e,s,r,gg){
var b=x[141]+':ede95984'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[141]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.vue.wxml:template:17:10")
var xC=_o(217,e,s,gg)
var oD=_gd(x[141],xC,e_,d_)
if(oD){
var fE=_1(216,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[141],17,76)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m91=function(e,s,r,gg){
var aRI=e_[x[141]].i
_ai(aRI,x[16],e_,x[141],1,1)
aRI.pop()
return r
}
e_[x[141]]={f:m91,j:[],i:[],ti:[x[16]],ic:[]}
d_[x[142]]={}
var m92=function(e,s,r,gg){
var eTI=e_[x[142]].i
_ai(eTI,x[143],e_,x[142],1,1)
var bUI=_v()
_(r,bUI)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.wxml:template:1:97")
var oVI=_o(219,e,s,gg)
var xWI=_gd(x[142],oVI,e_,d_)
if(xWI){
var oXI=_1(218,e,s,gg) || {}
var cur_globalf=gg.f
bUI.wxXCkey=3
xWI(oXI,oXI,bUI,gg)
gg.f=cur_globalf
}
else _w(oVI,x[142],1,109)
cs.pop()
eTI.pop()
return r
}
e_[x[142]]={f:m92,j:[],i:[],ti:[x[143]],ic:[]}
d_[x[144]]={}
d_[x[144]]["028f3051"]=function(e,s,r,gg){
var b=x[144]+':028f3051'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/simuYuyue.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[144]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m93=function(e,s,r,gg){
return r
}
e_[x[144]]={f:m93,j:[],i:[],ti:[],ic:[]}
d_[x[145]]={}
var m94=function(e,s,r,gg){
var h1I=e_[x[145]].i
_ai(h1I,x[146],e_,x[145],1,1)
var o2I=_v()
_(r,o2I)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/simuYuyue.wxml:template:1:89")
var c3I=_o(222,e,s,gg)
var o4I=_gd(x[145],c3I,e_,d_)
if(o4I){
var l5I=_1(221,e,s,gg) || {}
var cur_globalf=gg.f
o2I.wxXCkey=3
o4I(l5I,l5I,o2I,gg)
gg.f=cur_globalf
}
else _w(c3I,x[145],1,101)
cs.pop()
h1I.pop()
return r
}
e_[x[145]]={f:m94,j:[],i:[],ti:[x[146]],ic:[]}
d_[x[147]]={}
d_[x[147]]["073c823e"]=function(e,s,r,gg){
var b=x[147]+':073c823e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[147]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.vue.wxml:template:32:8")
var xC=_o(225,e,s,gg)
var oD=_gd(x[147],xC,e_,d_)
if(oD){
var fE=_1(224,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[147],32,74)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m95=function(e,s,r,gg){
var t7I=e_[x[147]].i
_ai(t7I,x[16],e_,x[147],1,1)
t7I.pop()
return r
}
e_[x[147]]={f:m95,j:[],i:[],ti:[x[16]],ic:[]}
d_[x[148]]={}
var m96=function(e,s,r,gg){
var b9I=e_[x[148]].i
_ai(b9I,x[149],e_,x[148],1,1)
var o0I=_v()
_(r,o0I)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.wxml:template:1:113")
var xAJ=_o(227,e,s,gg)
var oBJ=_gd(x[148],xAJ,e_,d_)
if(oBJ){
var fCJ=_1(226,e,s,gg) || {}
var cur_globalf=gg.f
o0I.wxXCkey=3
oBJ(fCJ,fCJ,o0I,gg)
gg.f=cur_globalf
}
else _w(xAJ,x[148],1,125)
cs.pop()
b9I.pop()
return r
}
e_[x[148]]={f:m96,j:[],i:[],ti:[x[149]],ic:[]}
d_[x[150]]={}
d_[x[150]]["34d421c0"]=function(e,s,r,gg){
var b=x[150]+':34d421c0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[150]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m97=function(e,s,r,gg){
return r
}
e_[x[150]]={f:m97,j:[],i:[],ti:[],ic:[]}
d_[x[151]]={}
var m98=function(e,s,r,gg){
var oFJ=e_[x[151]].i
_ai(oFJ,x[152],e_,x[151],1,1)
var cGJ=_v()
_(r,cGJ)
cs.push("./pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.wxml:template:1:91")
var oHJ=_o(230,e,s,gg)
var lIJ=_gd(x[151],oHJ,e_,d_)
if(lIJ){
var aJJ=_1(229,e,s,gg) || {}
var cur_globalf=gg.f
cGJ.wxXCkey=3
lIJ(aJJ,aJJ,cGJ,gg)
gg.f=cur_globalf
}
else _w(oHJ,x[151],1,103)
cs.pop()
oFJ.pop()
return r
}
e_[x[151]]={f:m98,j:[],i:[],ti:[x[152]],ic:[]}
d_[x[153]]={}
d_[x[153]]["bb9adda2"]=function(e,s,r,gg){
var b=x[153]+':bb9adda2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/productYemian.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[153]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m99=function(e,s,r,gg){
return r
}
e_[x[153]]={f:m99,j:[],i:[],ti:[],ic:[]}
d_[x[154]]={}
var m100=function(e,s,r,gg){
var bMJ=e_[x[154]].i
_ai(bMJ,x[155],e_,x[154],1,1)
var oNJ=_v()
_(r,oNJ)
cs.push("./pages/product/productYemian/productYemian.wxml:template:1:69")
var xOJ=_o(233,e,s,gg)
var oPJ=_gd(x[154],xOJ,e_,d_)
if(oPJ){
var fQJ=_1(232,e,s,gg) || {}
var cur_globalf=gg.f
oNJ.wxXCkey=3
oPJ(fQJ,fQJ,oNJ,gg)
gg.f=cur_globalf
}
else _w(xOJ,x[154],1,81)
cs.pop()
bMJ.pop()
return r
}
e_[x[154]]={f:m100,j:[],i:[],ti:[x[155]],ic:[]}
d_[x[156]]={}
d_[x[156]]["ec8f3560"]=function(e,s,r,gg){
var b=x[156]+':ec8f3560'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/yuyue/bangdinglicaishi.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[156]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/product/productYemian/yuyue/bangdinglicaishi.vue.wxml:template:28:12")
var xC=_o(236,e,s,gg)
var oD=_gd(x[156],xC,e_,d_)
if(oD){
var fE=_1(235,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[156],28,78)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m101=function(e,s,r,gg){
var hSJ=e_[x[156]].i
_ai(hSJ,x[15],e_,x[156],1,1)
hSJ.pop()
return r
}
e_[x[156]]={f:m101,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[157]]={}
var m102=function(e,s,r,gg){
var cUJ=e_[x[157]].i
_ai(cUJ,x[158],e_,x[157],1,1)
var oVJ=_v()
_(r,oVJ)
cs.push("./pages/product/productYemian/yuyue/bangdinglicaishi.wxml:template:1:78")
var lWJ=_o(238,e,s,gg)
var aXJ=_gd(x[157],lWJ,e_,d_)
if(aXJ){
var tYJ=_1(237,e,s,gg) || {}
var cur_globalf=gg.f
oVJ.wxXCkey=3
aXJ(tYJ,tYJ,oVJ,gg)
gg.f=cur_globalf
}
else _w(lWJ,x[157],1,90)
cs.pop()
cUJ.pop()
return r
}
e_[x[157]]={f:m102,j:[],i:[],ti:[x[158]],ic:[]}
d_[x[159]]={}
d_[x[159]]["233ad61a"]=function(e,s,r,gg){
var b=x[159]+':233ad61a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/yuyue/wodelicaishi.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[159]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m103=function(e,s,r,gg){
return r
}
e_[x[159]]={f:m103,j:[],i:[],ti:[],ic:[]}
d_[x[160]]={}
var m104=function(e,s,r,gg){
var o2J=e_[x[160]].i
_ai(o2J,x[161],e_,x[160],1,1)
var x3J=_v()
_(r,x3J)
cs.push("./pages/product/productYemian/yuyue/wodelicaishi.wxml:template:1:74")
var o4J=_o(241,e,s,gg)
var f5J=_gd(x[160],o4J,e_,d_)
if(f5J){
var c6J=_1(240,e,s,gg) || {}
var cur_globalf=gg.f
x3J.wxXCkey=3
f5J(c6J,c6J,x3J,gg)
gg.f=cur_globalf
}
else _w(o4J,x[160],1,86)
cs.pop()
o2J.pop()
return r
}
e_[x[160]]={f:m104,j:[],i:[],ti:[x[161]],ic:[]}
d_[x[162]]={}
d_[x[162]]["6263f360"]=function(e,s,r,gg){
var b=x[162]+':6263f360'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/yuyue/xuanzekehu.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[162]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/product/productYemian/yuyue/xuanzekehu.vue.wxml:template:4:6")
var xC=_o(244,e,s,gg)
var oD=_gd(x[162],xC,e_,d_)
if(oD){
var fE=_1(243,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[162],4,72)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m105=function(e,s,r,gg){
var o8J=e_[x[162]].i
_ai(o8J,x[12],e_,x[162],1,1)
o8J.pop()
return r
}
e_[x[162]]={f:m105,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[163]]={}
var m106=function(e,s,r,gg){
var o0J=e_[x[163]].i
_ai(o0J,x[164],e_,x[163],1,1)
var lAK=_v()
_(r,lAK)
cs.push("./pages/product/productYemian/yuyue/xuanzekehu.wxml:template:1:72")
var aBK=_o(246,e,s,gg)
var tCK=_gd(x[163],aBK,e_,d_)
if(tCK){
var eDK=_1(245,e,s,gg) || {}
var cur_globalf=gg.f
lAK.wxXCkey=3
tCK(eDK,eDK,lAK,gg)
gg.f=cur_globalf
}
else _w(aBK,x[163],1,84)
cs.pop()
o0J.pop()
return r
}
e_[x[163]]={f:m106,j:[],i:[],ti:[x[164]],ic:[]}
d_[x[165]]={}
d_[x[165]]["48346878"]=function(e,s,r,gg){
var b=x[165]+':48346878'
r.wxVkey=b
gg.f=$gdc(f_["./pages/product/productYemian/yuyue/yuyueliebiao.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[165]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/product/productYemian/yuyue/yuyueliebiao.vue.wxml:template:7:12")
var xC=_o(249,e,s,gg)
var oD=_gd(x[165],xC,e_,d_)
if(oD){
var fE=_1(248,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[165],7,78)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m107=function(e,s,r,gg){
var oFK=e_[x[165]].i
_ai(oFK,x[12],e_,x[165],1,1)
oFK.pop()
return r
}
e_[x[165]]={f:m107,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[166]]={}
var m108=function(e,s,r,gg){
var oHK=e_[x[166]].i
_ai(oHK,x[167],e_,x[166],1,1)
var fIK=_v()
_(r,fIK)
cs.push("./pages/product/productYemian/yuyue/yuyueliebiao.wxml:template:1:74")
var cJK=_o(251,e,s,gg)
var hKK=_gd(x[166],cJK,e_,d_)
if(hKK){
var oLK=_1(250,e,s,gg) || {}
var cur_globalf=gg.f
fIK.wxXCkey=3
hKK(oLK,oLK,fIK,gg)
gg.f=cur_globalf
}
else _w(cJK,x[166],1,86)
cs.pop()
oHK.pop()
return r
}
e_[x[166]]={f:m108,j:[],i:[],ti:[x[167]],ic:[]}
d_[x[168]]={}
d_[x[168]]["6ad4d7d8"]=function(e,s,r,gg){
var b=x[168]+':6ad4d7d8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/shouye/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[168]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m109=function(e,s,r,gg){
return r
}
e_[x[168]]={f:m109,j:[],i:[],ti:[],ic:[]}
d_[x[169]]={}
var m110=function(e,s,r,gg){
var lOK=e_[x[169]].i
_ai(lOK,x[170],e_,x[169],1,1)
var aPK=_v()
_(r,aPK)
cs.push("./pages/shouye/login.wxml:template:1:46")
var tQK=_o(254,e,s,gg)
var eRK=_gd(x[169],tQK,e_,d_)
if(eRK){
var bSK=_1(253,e,s,gg) || {}
var cur_globalf=gg.f
aPK.wxXCkey=3
eRK(bSK,bSK,aPK,gg)
gg.f=cur_globalf
}
else _w(tQK,x[169],1,58)
cs.pop()
lOK.pop()
return r
}
e_[x[169]]={f:m110,j:[],i:[],ti:[x[170]],ic:[]}
d_[x[171]]={}
d_[x[171]]["9a27c770"]=function(e,s,r,gg){
var b=x[171]+':9a27c770'
r.wxVkey=b
gg.f=$gdc(f_["./pages/shouye/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[171]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m111=function(e,s,r,gg){
return r
}
e_[x[171]]={f:m111,j:[],i:[],ti:[],ic:[]}
d_[x[172]]={}
var m112=function(e,s,r,gg){
var oVK=e_[x[172]].i
_ai(oVK,x[173],e_,x[172],1,1)
var fWK=_v()
_(r,fWK)
cs.push("./pages/shouye/register.wxml:template:1:49")
var cXK=_o(257,e,s,gg)
var hYK=_gd(x[172],cXK,e_,d_)
if(hYK){
var oZK=_1(256,e,s,gg) || {}
var cur_globalf=gg.f
fWK.wxXCkey=3
hYK(oZK,oZK,fWK,gg)
gg.f=cur_globalf
}
else _w(cXK,x[172],1,61)
cs.pop()
oVK.pop()
return r
}
e_[x[172]]={f:m112,j:[],i:[],ti:[x[173]],ic:[]}
d_[x[174]]={}
d_[x[174]]["ac9f420c"]=function(e,s,r,gg){
var b=x[174]+':ac9f420c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/shouye/reset.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[174]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m113=function(e,s,r,gg){
return r
}
e_[x[174]]={f:m113,j:[],i:[],ti:[],ic:[]}
d_[x[175]]={}
var m114=function(e,s,r,gg){
var l3K=e_[x[175]].i
_ai(l3K,x[176],e_,x[175],1,1)
var a4K=_v()
_(r,a4K)
cs.push("./pages/shouye/reset.wxml:template:1:46")
var t5K=_o(260,e,s,gg)
var e6K=_gd(x[175],t5K,e_,d_)
if(e6K){
var b7K=_1(259,e,s,gg) || {}
var cur_globalf=gg.f
a4K.wxXCkey=3
e6K(b7K,b7K,a4K,gg)
gg.f=cur_globalf
}
else _w(t5K,x[175],1,58)
cs.pop()
l3K.pop()
return r
}
e_[x[175]]={f:m114,j:[],i:[],ti:[x[176]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/shouye/login","pages/shouye/register","pages/shouye/reset","pages/index/index","pages/index/caifu/caifu","pages/index/caifu/cfdetail/cfdetail","components/newsList-temp","pages/index/zaobao/zaobao","pages/index/store/store","pages/index/news/news","pages/index/news/info/info","pages/index/knowledge/knowledge","pages/index/knowledge/question/question","pages/index/knowledge/reply/reply","pages/index/knowledge/morereply/morereply","pages/index/huodong/huodong","pages/index/huodong/peizhi/zcpeizhi","pages/product/product","pages/product/productYemian/productYemian","pages/product/productYemian/productDetail/productDetail","pages/product/productYemian/productDetail/simuYuyue/simuYuyue","pages/product/productYemian/yuyue/yuyueliebiao","pages/product/productYemian/yuyue/xuanzekehu","pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping","pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping","pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo","pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng","pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue","pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng","pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng","pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu","pages/product/productYemian/productDetail/simuYuyue/hetong/hetong","pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan","pages/product/productYemian/yuyue/bangdinglicaishi","pages/product/productYemian/yuyue/wodelicaishi","pages/product/productYemian/pinglun/pinglun","pages/investment/investment","pages/my/my","pages/my/lcs-my","pages/my/lcs-shezhi/lcs-shezhi","pages/my/lcs-gerenzhuye/lcs-gerenzhuye","pages/my/lcs-wodedingdan/lcs-wodedingdan","pages/my/lcs-wodekehu/lcs-wodekehu","pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu","pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing","pages/my/wodechicang/wodechicang","pages/my/wodedingdan/wodedingdan","pages/my/zengzhifuwu/zengzhifuwu","pages/my/wodechicang/shouyimingxi/shouyimingxi","pages/my/wodechicang/jiaoyijilu/jiaoyijilu","pages/message/message"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"selectedColor":"rgb(200,166,91)","list":[{"pagePath":"pages/index/index","text":"发现","iconPath":"static/image/tab/faxianweijihuo.png","selectedIconPath":"static/image/tab/faxianjihuo.png"},{"pagePath":"pages/product/product","text":"产品","iconPath":"static/image/tab/chanpinweijihuo.png","selectedIconPath":"static/image/tab/chanpinjihuo.png"},{"pagePath":"pages/message/message","text":"消息","iconPath":"static/image/tab/xiaoxiweijihuo.png","selectedIconPath":"static/image/tab/xiaoxijihuo.png"},{"pagePath":"pages/investment/investment","text":"财富","iconPath":"static/image/tab/caifuweijihuo.png","selectedIconPath":"static/image/tab/caifujihuo.png"},{"pagePath":"pages/my/lcs-my","text":"我的","iconPath":"static/image/tab/wodeweijihuo.png","selectedIconPath":"static/image/tab/wodejihuo.png"}]},"networkTimeout":{},"debug":false,"functionalPages":false,"subPackages":[],"workers":"","preloadRule":{},"requiredBackgroundModes":[],"plugins":{},"resizable":false,"navigateToMiniProgramAppIdList":[],"permission":{},"usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/manifest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
!function(r){var e=global.webpackJsonp;global.webpackJsonp=function(n,u,c){for(var l,f,a,p=0,i=[];p<n.length;p++)f=n[p],o[f]&&i.push(o[f][0]),o[f]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(r[l]=u[l]);for(e&&e(n,u,c);i.length;)i.shift()();if(c)for(p=0;p<c.length;p++)a=t(t.s=c[p]);return a};var n={},o={53:0};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=n,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t.oe=function(r){throw console.error(r),r}}([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
global.webpackJsonp([0],{0:function(t,e){t.exports=function(t,e,n,r,o){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var c,u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,f=l?u.render:u.beforeCreate;l?u.render=function(t,e){return c.call(e),f(t,e)}:u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:a,options:u}}},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;return a(e={data:{$root:{}},onLoad:function(e){var n=new i.default(t);this.$vm=n;var r=n.$root;r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var o=r.$mp;o.mpType="page",o.page=this,o.query=e,o.status="load",n.$mount()},handleProxy:function(t){return c(this).$handleProxyWithVue(t)},onShow:function(){var t=c(this);t.$mp.status="show",s(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=c(this);t.$mp.status="ready",s(t,"onReady")},onHide:function(){var t=c(this);t.$mp.status="hide",s(t,"onHide")},onUnload:function(){var t=c(this);s(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){s(c(this),"onPullDownRefresh")},onReachBottom:function(){s(c(this),"onReachBottom")},onPageScroll:function(t){s(c(this),"onPageScroll",t)},onTabItemTap:function(t){s(c(this),"onTabItemTap",t)}},"onPullDownRefresh",function(){s(c(this),"onPullDownRefresh")}),a(e,"onReachBottom",function(){s(c(this),"onReachBottom")}),a(e,"onShareAppMessage",t.onShareAppMessage?function(t){return s(c(this),"onShareAppMessage",t)}:null),a(e,"onPageScroll",function(t){s(c(this),"onPageScroll",t)}),a(e,"onTabItemTap",function(t){s(c(this),"onTabItemTap",t)}),a(e,"onNavigationBarButtonTap",function(t){s(c(this),"onNavigationBarButtonTap",t)}),a(e,"onBackPress",function(){return s(c(this),"onBackPress")}),a(e,"$getAppWebview",function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}),e};var r,o=n(9),i=(r=o)&&r.__esModule?r:{default:r};function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var i=0,a=o.length;i<a;i++)r=o[i].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return s(t,e,n)}),r}function c(t){return t.$vm.$root}},12:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},193:function(t,e){},194:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(195),i=(r=o)&&r.__esModule?r:{default:r};var a=[["camera"],["album"],["camera","album"]],s=[["compressed"],["original"],["compressed","original"]];e.default={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(t){this.sourceTypeIndex=t.target.value},sizeTypeChange:function(t){this.sizeTypeIndex=t.target.value},countChange:function(t){this.countIndex=t.target.value},chooseImage:function(){var e,n=(e=i.default.mark(function e(){var n,r=this;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(9!==this.imageList.length){e.next=7;break}return e.next=3,this.isFullImg();case 3:if(n=e.sent,console.log("是否继续?",n),n){e.next=7;break}return e.abrupt("return");case 7:t.chooseImage({sourceType:a[this.sourceTypeIndex],sizeType:s[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(t){r.imageList=r.imageList.concat(t.tempFilePaths)}});case 8:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});e(s)}("next")})});return function(){return n.apply(this,arguments)}}(),isFullImg:function(){var e=this;return new Promise(function(n){t.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(t){t.confirm?(e.imageList=[],n(!0)):n(!1)},fail:function(){n(!1)}})})},previewImage:function(e){var n=e.target.dataset.src;t.previewImage({current:n,urls:this.imageList})}}}}).call(e,n(2).default)},195:function(t,e,n){t.exports=n(196)},196:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(197),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},197:function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=w;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(I([])));g&&g!==r&&o.call(g,a)&&(y=g);var _=O.prototype=$.prototype=Object.create(y);x.prototype=_.constructor=O,O.constructor=x,O[c]=x.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},l.awrap=function(t){return{__await:t}},A(C.prototype),C.prototype[s]=function(){return this},l.AsyncIterator=C,l.async=function(t,e,n,r){var o=new C(w(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=I,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof $?e:$,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function $(){}function x(){}function O(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var s=b(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},198:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"uni-common-mt"},[n("form",[n("view",{staticClass:"uni-list list-pd"},[n("view",{staticClass:"uni-list-cell cell-pd"},[n("view",{staticClass:"uni-uploader"},[n("view",{staticClass:"uni-uploader-body"},[n("view",{staticClass:"uni-uploader__files"},[t._l(t.imageList,function(e,r){return n("block",{key:r},[n("view",{staticClass:"uni-uploader__file"},[n("image",{staticClass:"uni-uploader__img",attrs:{src:e,"data-src":e,eventid:"Yks-0-"+r},on:{tap:t.previewImage}})])])}),n("view",{staticClass:"uni-uploader__input-box"},[n("image",{staticClass:"uni-uploader__input_image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4-%E4%BA%A7%E5%93%81%E8%AF%84%E8%AE%BA/android/drawable-xhdpi/xiangji.png",mode:""}}),n("view",{staticClass:"uni-uploader__input",attrs:{eventid:"H3O-1"},on:{tap:t.chooseImage}})])],2)])])])])])],1)])},staticRenderFns:[]};e.a=r},2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return"function"==typeof t},o=/^on|^create|Sync$|Manager$|^pause/,i=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],a=function(t){return(!o.test(t)||"createBLEConnection"===t)&&!~i.indexOf(t)},s=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(i.success)||r(i.fail)||r(i.complete)?t.apply(void 0,[i].concat(n)):new Promise(function(e,r){t.apply(void 0,[Object.assign({},i,{success:e,fail:r})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},c=1e-4,u=750,l=!1,f=0,p=0;function d(t,e){var n,r,o,i;return 0===f&&(n=wx.getSystemInfoSync(),r=n.platform,o=n.pixelRatio,i=n.windowWidth,f=i,p=o,l="ios"===r),0===t?0:(t=t/u*(e||f),0===(t=Math.floor(t+c))?1!==p&&l?.5:1:t)}function h(t){return __requireNativePlugin__(t)}var v={},y={os:{plus:!0}};"undefined"!=typeof Proxy?v=new Proxy({},{get:function(t,e){return y.hasOwnProperty(e)?y[e]:"upx2px"===e?d:"requireNativePlugin"===e?h:wx.hasOwnProperty(e)?a(e)?s(wx[e]):wx[e]:void 0}}):(v.upx2px=d,v.requireNativePlugin=h,Object.keys(y).forEach(function(t){v[t]=y[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(a(t)?v[t]=s(wx[t]):v[t]=wx[t])}));var m=v;e.default=m},209:function(t,e){},210:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"timePicker",data:function(){return{title:"picker",array:["中国","美国","巴西","日本"],index:0,date:this.getDate({format:!0}),time:"12:01"}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),n+"-"+(r=r>9?r:"0"+r)+"-"+(o=o>9?o:"0"+o)}}}},211:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"uni-list-cell-db"},[n("picker",{attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate,eventid:"ZyX-0"},on:{change:t.bindDateChange}},[n("view",{staticClass:"pickerbox"},[n("view",{staticClass:"uni-input"},[t._v(t._s(t.date))]),n("view",{staticClass:"xuanze"},[t._v("请选择"),n("label",{staticClass:"iconfont"},[t._v("")])],1)])])],1)])},staticRenderFns:[]};e.a=r},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),o=n.n(r),i=n(37);var a=function(t){n(35)},s=n(0)(o.a,i.a,a,null,null);e.default=s.exports},35:function(t,e){},36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"search-temp",data:function(){return{}}}},37:function(t,e,n){"use strict";var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"search"},[e("view",{staticClass:"search-temp"},[e("view",{staticClass:"search-box"},[e("view",{staticClass:"searchImg iconfont"},[this._v("\n\t\t\t\t\t\n\t\t\t\t")]),e("input",{staticClass:"searchInp",attrs:{type:"text",value:"",placeholder:"按条件搜索"}}),e("view",{staticClass:"clear iconfont",staticStyle:{display:"none"}},[this._v("\n\t\t\t\t\t\n\t\t\t\t")])])])])}]};e.a=r},38:function(t,e){},39:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"newslist-temp",props:{newsList:Array},data:function(){return{}},methods:{toInfo:function(e,n){var r=e.currentTarget.dataset.newsid;0==n?t.navigateTo({url:"/pages/index/zaobao/zaobao?newsid="+r}):t.navigateTo({url:"/pages/index/news/info/info?newsid="+r}),console.log(n)}}}}).call(e,n(2).default)},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(194),o=n.n(r),i=n(198);var a=function(t){n(193)},s=n(0)(o.a,i.a,a,null,null);e.default=s.exports},40:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"uni-list"},t._l(t.newsList,function(e,r){return n("view",{key:r,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover","data-newsid":e.post_id,eventid:"FDH-0-"+r},on:{tap:function(e){t.toInfo(e,r)}}},[n("view",{staticClass:"uni-media-list"},[n("view",{staticClass:"uni-media-list-body"},[n("view",{staticClass:"uni-media-list-text-bottom twoLines"},[t._v(t._s(e.summary))]),n("view",{staticClass:"item-bottom"},[n("view",{staticClass:"item-bottom-item zhiding"},[t._v("\n\t\t\t\t\t\t\t置顶\n\t\t\t\t\t\t")]),n("view",{staticClass:"item-bottom-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.column_name)+"\n\t\t\t\t\t\t")]),n("view",{staticClass:"item-bottom-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.views_count)+"评论\n\t\t\t\t\t\t")])])]),n("image",{staticClass:"uni-media-list-logo",attrs:{src:e.cover}})])])}))])},staticRenderFns:[]};e.a=r},41:function(t,e){},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-temp",props:{imgUrl:Array},data:function(){return{}},methods:{tap:function(){console.log(this.imgUrl)}}}},43:function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("view",{staticClass:"swiperBox"},[e("swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:2500,duration:1e3}},this._l(this.imgUrl,function(t,n){return e("swiper-item",{attrs:{mpcomid:"asl-0-"+n}},[e("view",{staticClass:"swiper-item"},[e("image",{attrs:{src:t.url,mode:""}})])])}))],1)])},staticRenderFns:[]};e.a=r},5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(39),o=n.n(r),i=n(40);var a=function(t){n(38)},s=n(0)(o.a,i.a,a,null,null);e.default=s.exports},54:function(t,e){},55:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"writemark-temp",data:function(){return{}}}},56:function(t,e,n){"use strict";var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"search-temp"},[e("view",{staticClass:"search-box"},[e("view",{staticClass:"searchImg iconfont"},[this._v("\n\t\t\t\n\t\t")]),e("input",{staticClass:"searchInp",attrs:{type:"text",value:"",placeholder:"写评论"}}),e("view",{staticClass:"clear iconfont",staticStyle:{display:"none"}},[this._v("\n\t\t\t\n\t\t")])])])}]};e.a=r},6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(42),o=n.n(r),i=n(43);var a=function(t){n(41)},s=n(0)(o.a,i.a,a,null,null);e.default=s.exports},7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(55),o=n.n(r),i=n(56);var a=function(t){n(54)},s=n(0)(o.a,i.a,a,null,null);e.default=s.exports},8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(210),o=n.n(r),i=n(211);var a=function(t){n(209)},s=n(0)(o.a,i.a,a,null,null);e.default=s.exports},9:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(t){}var n;n=function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!=typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"==typeof r&&"object"==typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var l=s[i];t(e,n+"."+l,r[l],o[l])}}}else r!==o&&(e[n]=r)}function n(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function i(t){return"string"==typeof t||"number"==typeof t}function a(t){return null!==t&&"object"==typeof t}var s=Object.prototype.toString;function c(t){return"[object Object]"===s.call(t)}function u(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function l(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function f(t){var e=parseFloat(t);return isNaN(e)?t:e}function p(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}p("slot,component",!0);var d=p("key,ref,slot,is");function h(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var v=Object.prototype.hasOwnProperty;function y(t,e){return v.call(t,e)}function m(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var g=/-(\w)/g,_=m(function(t){return t.replace(g,function(t,e){return e?e.toUpperCase():""})}),w=m(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),b=/([^-])([A-Z])/g,$=m(function(t){return t.replace(b,"$1-$2").replace(b,"$1-$2").toLowerCase()});function x(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function A(t,e){for(var n in e)t[n]=e[n];return t}function C(t,e,n){}var k=function(t,e,n){return!1},P=function(t){return t};function j(t,e){var n=a(t),r=a(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function T(t,e){for(var n=0;n<t.length;n++)if(j(t[n],e))return n;return-1}function I(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var E="data-server-rendered",S=["component","directive","filter"],D=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],L={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:k,isReservedAttr:k,isUnknownElement:k,getTagNamespace:C,parsePlatformTagName:P,mustUseProp:k,_lifecycleHooks:D},R=Object.freeze({});function M(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var N=/[^\w.$]/;var F=C;function B(t,e,n){if(L.errorHandler)L.errorHandler.call(null,t,e,n);else{if(!z||"undefined"==typeof console)throw t;console.error(t)}}var U,V="__proto__"in{},z="undefined"!=typeof window,H=["mpvue-runtime"].join(),W=(H&&/msie|trident/.test(H),H&&H.indexOf("msie 9.0"),H&&H.indexOf("edge/")>0),q=(H&&H.indexOf("android"),H&&/iphone|ipad|ipod|ios/.test(H)),G=(H&&/chrome\/\d+/.test(H),{}.watch);if(z)try{var J={};Object.defineProperty(J,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,J)}catch(t){}var K=function(){return void 0===U&&(U=!z&&void 0!==e&&"server"===e.process.env.VUE_ENV),U},Y=z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function X(t){return"function"==typeof t&&/native code/.test(t.toString())}var Z,Q="undefined"!=typeof Symbol&&X(Symbol)&&"undefined"!=typeof Reflect&&X(Reflect.ownKeys),tt=function(){var t,e=[],n=!1;function r(){n=!1;var t=e.slice(0);e.length=0;for(var r=0;r<t.length;r++)t[r]()}if("undefined"!=typeof Promise&&X(Promise)){var o=Promise.resolve(),i=function(t){console.error(t)};t=function(){o.then(r).catch(i),q&&setTimeout(C)}}else t=function(){setTimeout(r,0)};return function(r,o){var i;if(e.push(function(){if(r)try{r.call(o)}catch(t){B(t,o,"nextTick")}else i&&i(o)}),n||(n=!0,t()),!r&&"undefined"!=typeof Promise)return new Promise(function(t,e){i=t})}}();Z="undefined"!=typeof Set&&X(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var et=0,nt=function(){this.id=et++,this.subs=[]};nt.prototype.addSub=function(t){this.subs.push(t)},nt.prototype.removeSub=function(t){h(this.subs,t)},nt.prototype.depend=function(){nt.target&&nt.target.addDep(this)},nt.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},nt.target=null;var rt=[];var ot=Array.prototype,it=Object.create(ot);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=ot[t];M(it,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i})});var at=Object.getOwnPropertyNames(it),st={shouldConvert:!0},ct=function(t){(this.value=t,this.dep=new nt,this.vmCount=0,M(t,"__ob__",this),Array.isArray(t))?((V?ut:lt)(t,it,at),this.observeArray(t)):this.walk(t)};function ut(t,e,n){t.__proto__=e}function lt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];M(t,i,e[i])}}function ft(t,e){var n;if(a(t))return y(t,"__ob__")&&t.__ob__ instanceof ct?n=t.__ob__:st.shouldConvert&&!K()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new ct(t)),e&&n&&n.vmCount++,n}function pt(t,e,n,r,o){var i=new nt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&ft(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return nt.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,o=e.length;r<o;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||(c?c.call(t,e):n=e,u=!o&&ft(e),i.notify())}})}}function dt(t,e,n){if(Array.isArray(t)&&u(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(y(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(pt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function ht(t,e){if(Array.isArray(t)&&u(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||y(t,e)&&(delete t[e],n&&n.dep.notify())}}ct.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)pt(t,e[n],t[e[n]])},ct.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)ft(t[e])};var vt=L.optionMergeStrategies;function yt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)r=t[n=i[a]],o=e[n],y(t,n)?c(r)&&c(o)&&yt(r,o):dt(t,n,o);return t}function mt(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,o="function"==typeof t?t.call(n):void 0;return r?yt(r,o):o}:void 0:e?t?function(){return yt("function"==typeof e?e.call(this):e,t.call(this))}:e:t}function gt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function _t(t,e){var n=Object.create(t||null);return e?A(n,e):n}vt.data=function(t,e,n){return n?mt(t,e,n):e&&"function"!=typeof e?t:mt.call(this,t,e)},D.forEach(function(t){vt[t]=gt}),S.forEach(function(t){vt[t+"s"]=_t}),vt.watch=function(t,e){if(t===G&&(t=void 0),e===G&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in A(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},vt.props=vt.methods=vt.inject=vt.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return A(n,t),A(n,e),n},vt.provide=mt;var wt=function(t,e){return void 0===e?t:e};function bt(t,e,n){"function"==typeof e&&(e=e.options),function(t){var e=t.props;if(e){var n,r,o={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(r=e[n])&&(o[_(r)]={type:null});else if(c(e))for(var i in e)r=e[i],o[_(i)]=c(r)?r:{type:r};t.props=o}}(e),function(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var r=e.extends;if(r&&(t=bt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=bt(t,e.mixins[o],n);var a,s={};for(a in t)u(a);for(a in e)y(t,a)||u(a);function u(r){var o=vt[r]||wt;s[r]=o(t[r],e[r],n,r)}return s}function $t(t,e,n,r){if("string"==typeof n){var o=t[e];if(y(o,n))return o[n];var i=_(n);if(y(o,i))return o[i];var a=w(i);return y(o,a)?o[a]:o[n]||o[i]||o[a]}}function xt(t,e,n,r){var o=e[t],i=!y(n,t),a=n[t];if(At(Boolean,o.type)&&(i&&!y(o,"default")?a=!1:At(String,o.type)||""!==a&&a!==$(t)||(a=!0)),void 0===a){a=function(t,e,n){if(!y(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==Ot(e.type)?r.call(t):r}(r,o,t);var s=st.shouldConvert;st.shouldConvert=!0,ft(a),st.shouldConvert=s}return a}function Ot(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function At(t,e){if(!Array.isArray(e))return Ot(e)===Ot(t);for(var n=0,r=e.length;n<r;n++)if(Ot(e[n])===Ot(t))return!0;return!1}var Ct=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},kt={child:{}};kt.child.get=function(){return this.componentInstance},Object.defineProperties(Ct.prototype,kt);var Pt=function(t){void 0===t&&(t="");var e=new Ct;return e.text=t,e.isComment=!0,e};function jt(t){return new Ct(void 0,void 0,void 0,String(t))}function Tt(t){var e=new Ct(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function It(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Tt(t[r]);return n}var Et,St=m(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function Dt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Lt(t,e,n,o,i){if(r(e)){if(y(e,n))return t[n]=e[n],i||delete e[n],!0;if(y(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function Rt(t){return i(t)?[jt(t)]:Array.isArray(t)?function t(e,a){var s=[];var c,u,l;for(c=0;c<e.length;c++)n(u=e[c])||"boolean"==typeof u||(l=s[s.length-1],Array.isArray(u)?s.push.apply(s,t(u,(a||"")+"_"+c)):i(u)?Mt(l)?l.text+=String(u):""!==u&&s.push(jt(u)):Mt(u)&&Mt(l)?s[s.length-1]=jt(l.text+u.text):(o(e._isVList)&&r(u.tag)&&n(u.key)&&r(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(t):void 0}function Mt(t){return r(t)&&r(t.text)&&!1===t.isComment}function Nt(t,e){return t.__esModule&&t.default&&(t=t.default),a(t)?e.extend(t):t}function Ft(t,e,n){n?Et.$once(t,e):Et.$on(t,e)}function Bt(t,e){Et.$off(t,e)}function Ut(t,e,r){Et=t,function(t,e,r,o,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=St(a),n(s)||(n(c)?(n(s.fns)&&(s=t[a]=Dt(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)n(t[a])&&o((u=St(a)).name,e[a],u.capture)}(e,r||{},Ft,Bt)}function Vt(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(zt)||(n.default=r),n}function zt(t){return t.isComment||" "===t.text}function Ht(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?Ht(t[n],e):e[t[n].key]=t[n].fn;return e}var Wt=null;function qt(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Pt),Kt(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new oe(t,r,C),n=!1,null==t.$vnode&&(t._isMounted=!0,Kt(t,"mounted")),t}function Gt(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Jt(t,e){if(e){if(t._directInactive=!1,Gt(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Jt(t.$children[n]);Kt(t,"activated")}}function Kt(t,e){var n=t.$options[e];if(n)for(var r=0,o=n.length;r<o;r++)try{n[r].call(t)}catch(n){B(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Yt=[],Xt=[],Zt={},Qt=!1,te=!1,ee=0;function ne(){var t,e;for(te=!0,Yt.sort(function(t,e){return t.id-e.id}),ee=0;ee<Yt.length;ee++)e=(t=Yt[ee]).id,Zt[e]=null,t.run();var n=Xt.slice(),r=Yt.slice();ee=Yt.length=Xt.length=0,Zt={},Qt=te=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Jt(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&Kt(r,"updated")}}(r),Y&&L.devtools&&Y.emit("flush")}var re=0,oe=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++re,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Z,this.newDepIds=new Z,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!N.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};oe.prototype.get=function(){var t,e;t=this,nt.target&&rt.push(nt.target),nt.target=t;var n,r=this.vm;try{e=this.getter.call(r,r)}catch(t){if(!this.user)throw t;B(t,r,'getter for watcher "'+this.expression+'"')}finally{this.deep&&(n=e,ie.clear(),function t(e,n){var r,o,i=Array.isArray(e);if((i||a(e))&&Object.isExtensible(e)){if(e.__ob__){var s=e.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(i)for(r=e.length;r--;)t(e[r],n);else for(o=Object.keys(e),r=o.length;r--;)t(e[o[r]],n)}}(n,ie)),nt.target=rt.pop(),this.cleanupDeps()}return e},oe.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},oe.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},oe.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==Zt[e]){if(Zt[e]=!0,te){for(var n=Yt.length-1;n>ee&&Yt[n].id>t.id;)n--;Yt.splice(n+1,0,t)}else Yt.push(t);Qt||(Qt=!0,tt(ne))}}(this)},oe.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||a(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){B(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},oe.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},oe.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},oe.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var ie=new Z;var ae={enumerable:!0,configurable:!0,get:C,set:C};function se(t,e,n){ae.get=function(){return this[e][n]},ae.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ae)}function ce(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;st.shouldConvert=i;var a=function(i){o.push(i);var a=xt(i,e,n,t);pt(r,i,a),i in t||se(t,"_props",i)};for(var s in e)a(s);st.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?C:x(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;c(e=t._data="function"==typeof e?function(t,e){try{return t.call(e)}catch(t){return B(t,e,"data()"),{}}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);for(;o--;){var i=n[o];r&&y(r,i)||(void 0,36!==(a=(i+"").charCodeAt(0))&&95!==a&&se(t,"_data",i))}var a;ft(e,!0)}(t):ft(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"==typeof o?o:o.get;n[r]=new oe(t,i,C,ue),r in t||le(t,r,o)}}(t,e.computed),e.watch&&e.watch!==G&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)pe(t,n,r[o]);else pe(t,n,r)}}(t,e.watch)}var ue={lazy:!0};function le(t,e,n){"function"==typeof n?(ae.get=fe(e),ae.set=C):(ae.get=n.get?!1!==n.cache?fe(e):n.get:C,ae.set=n.set?n.set:C),Object.defineProperty(t,e,ae)}function fe(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),nt.target&&e.depend(),e.value}}function pe(t,e,n,r){return c(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function de(t,e){if(t){for(var n=Object.create(null),r=Q?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){for(var i=r[o],a=t[i],s=e;s;){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function he(t,e){for(var n in e)t[_(n)]=e[n]}var ve={init:function(t,e,n,o){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=function(t,e,n,o){var i=t.componentOptions,a={_isComponent:!0,parent:e,propsData:i.propsData,_componentTag:i.tag,_parentVnode:t,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:o||null},s=t.data.inlineTemplate;r(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns);return new i.Ctor(a)}(t,Wt,n,o)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var i=t;ve.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==R);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){st.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=xt(u,t.$options.props,e,t)}st.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,Ut(t,n,l)}i&&(t.$slots=Vt(o,r.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,Kt(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,Xt.push(e)):Jt(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,Gt(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);Kt(e,"deactivated")}}(e,!0):e.$destroy())}},ye=Object.keys(ve);function me(t,e,i,s,c){if(!n(t)){var u=i.$options._base;if(a(t)&&(t=u.extend(t)),"function"==typeof t){var l;if(n(t.cid)&&void 0===(t=function(t,e,i){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;if(o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(!r(t.contexts)){var s=t.contexts=[i],c=!0,u=function(){for(var t=0,e=s.length;t<e;t++)s[t].$forceUpdate()},l=I(function(n){t.resolved=Nt(n,e),c||u()}),f=I(function(e){r(t.errorComp)&&(t.error=!0,u())}),p=t(l,f);return a(p)&&("function"==typeof p.then?n(t.resolved)&&p.then(l,f):r(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),r(p.error)&&(t.errorComp=Nt(p.error,e)),r(p.loading)&&(t.loadingComp=Nt(p.loading,e),0===p.delay?t.loading=!0:setTimeout(function(){n(t.resolved)&&n(t.error)&&(t.loading=!0,u())},p.delay||200)),r(p.timeout)&&setTimeout(function(){n(t.resolved)&&f(null)},p.timeout))),c=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(i)}(l=t,u,i)))return function(t,e,n,r,o){var i=Pt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}(l,e,i,s,c);e=e||{},Se(t),r(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});r(i[o])?i[o]=[e.model.callback].concat(i[o]):i[o]=e.model.callback}(t.options,e);var f=function(t,e,o){var i=e.options.props;if(!n(i)){var a={},s=t.attrs,c=t.props;if(r(s)||r(c))for(var u in i){var l=$(u);Lt(a,c,u,l,!0)||Lt(a,s,u,l,!1)}return a}}(e,t);if(o(t.options.functional))return function(t,e,n,o,i){var a={},s=t.options.props;if(r(s))for(var c in s)a[c]=xt(c,s,e||{});else r(n.attrs)&&he(a,n.attrs),r(n.props)&&he(a,n.props);var u=Object.create(o),l=t.options.render.call(null,function(t,e,n,r){return be(u,t,e,n,r,!0)},{data:n,props:a,children:i,parent:o,listeners:n.on||{},injections:de(t.options.inject,o),slots:function(){return Vt(i,o)}});return l instanceof Ct&&(l.functionalContext=o,l.functionalOptions=t.options,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}(t,f,e,i,s);var p=e.on;if(o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}!function(t){t.hook||(t.hook={});for(var e=0;e<ye.length;e++){var n=ye[e],r=t.hook[n],o=ve[n];t.hook[n]=r?ge(o,r):o}}(e);var h=t.options.name||c;return new Ct("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,i,{Ctor:t,propsData:f,listeners:p,tag:c,children:s},l)}}}function ge(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}var _e=1,we=2;function be(t,e,a,s,c,u){return(Array.isArray(a)||i(a))&&(c=s,s=a,a=void 0),o(u)&&(c=we),function(t,e,o,i,a){if(r(o)&&r(o.__ob__))return Pt();r(o)&&r(o.is)&&(e=o.is);if(!e)return Pt();0;Array.isArray(i)&&"function"==typeof i[0]&&((o=o||{}).scopedSlots={default:i[0]},i.length=0);a===we?i=Rt(i):a===_e&&(i=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(i));var s,c;if("string"==typeof e){var u;c=L.getTagNamespace(e),s=L.isReservedTag(e)?new Ct(L.parsePlatformTagName(e),o,i,void 0,void 0,t):r(u=$t(t.$options,"components",e))?me(u,o,t,i,e):new Ct(e,o,i,void 0,void 0,t)}else s=me(e,o,t,i);return r(s)?(c&&function t(e,o){e.ns=o;if("foreignObject"===e.tag)return;if(r(e.children))for(var i=0,a=e.children.length;i<a;i++){var s=e.children[i];r(s.tag)&&n(s.ns)&&t(s,o)}}(s,c),s):Pt()}(t,e,a,s,c)}function $e(t,e){var n,o,i,s,c;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),o=0,i=t.length;o<i;o++)n[o]=e(t[o],o);else if("number"==typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o);else if(a(t))for(s=Object.keys(t),n=new Array(s.length),o=0,i=s.length;o<i;o++)c=s[o],n[o]=e(t[c],c,o);return r(n)&&(n._isVList=!0),n}function xe(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=A(A({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function Oe(t){return $t(this.$options,"filters",t)||P}function Ae(t,e,n){var r=L.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function Ce(t,e,n,r,o){if(n)if(a(n)){var i;Array.isArray(n)&&(n=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&A(e,t[n]);return e}(n));var s=function(a){if("class"===a||"style"===a||d(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||L.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in i||(i[a]=n[a],o&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))};for(var c in n)s(c)}else;return t}function ke(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?It(n):Tt(n):(je(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),"__static__"+t,!1),n)}function Pe(t,e,n){return je(t,"__once__"+e+(n?"_"+n:""),!0),t}function je(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Te(t[r],e+"_"+r,n);else Te(t,e,n)}function Te(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ie(t,e){if(e)if(c(e)){var n=t.on=t.on?A({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}var Ee=0;function Se(t){var e=t.options;if(t.super){var n=Se(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=De(n[i],r[i],o[i]));return e}(t);r&&A(t.extendOptions,r),(e=t.options=bt(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function De(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Le(t){this._init(t)}function Re(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=bt(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)se(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)le(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,S.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=A({},a.options),o[r]=a,a}}Le.prototype._init=function(t){var e=this;e._uid=Ee++,e._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=bt(Se(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Ut(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=Vt(t.$options._renderChildren,n),t.$scopedSlots=R,t._c=function(e,n,r,o){return be(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return be(t,e,n,r,o,!0)};var r=e&&e.data;pt(t,"$attrs",r&&r.attrs,0,!0),pt(t,"$listeners",r&&r.on,0,!0)}(e),Kt(e,"beforeCreate"),function(t){var e=de(t.$options.inject,t);e&&(st.shouldConvert=!1,Object.keys(e).forEach(function(n){pt(t,n,e[n])}),st.shouldConvert=!0)}(e),ce(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),Kt(e,"created"),e.$options.el&&e.$mount(e.$options.el)},function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=dt,t.prototype.$delete=ht,t.prototype.$watch=function(t,e,n){if(c(e))return pe(this,t,e,n);(n=n||{}).user=!0;var r=new oe(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}}}(Le),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)this.$on(t[r],n);else(this._events[t]||(this._events[t]=[])).push(n),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)this.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(1===arguments.length)return n._events[t]=null,n;for(var s=a.length;s--;)if((i=a[s])===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this._events[t];if(e){e=e.length>1?O(e):e;for(var n=O(arguments,1),r=0,o=e.length;r<o;r++)try{e[r].apply(this,n)}catch(e){B(e,this,'event handler for "'+t+'"')}}return this}}(Le),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&Kt(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=Wt;Wt=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),Wt=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Kt(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||h(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Kt(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(Le),function(t){t.prototype.$nextTick=function(t){return tt(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n.staticRenderFns,i=n._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=It(e.$slots[a]);e.$scopedSlots=i&&i.data.scopedSlots||R,o&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;try{t=r.call(e._renderProxy,e.$createElement)}catch(n){B(n,e,"render function"),t=e._vnode}return t instanceof Ct||(t=Pt()),t.parent=i,t},t.prototype._o=Pe,t.prototype._n=f,t.prototype._s=l,t.prototype._l=$e,t.prototype._t=xe,t.prototype._q=j,t.prototype._i=T,t.prototype._m=ke,t.prototype._f=Oe,t.prototype._k=Ae,t.prototype._b=Ce,t.prototype._v=jt,t.prototype._e=Pt,t.prototype._u=Ht,t.prototype._g=Ie}(Le);var Me=[String,RegExp,Array];function Ne(t){return t&&(t.Ctor.options.name||t.tag)}function Fe(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:(n=t,"[object RegExp]"===s.call(n)&&t.test(e));var n}function Be(t,e,n){for(var r in t){var o=t[r];if(o){var i=Ne(o.componentOptions);i&&!n(i)&&(o!==e&&Ue(o),t[r]=null)}}}function Ue(t){t&&t.componentInstance.$destroy()}var Ve={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Me,exclude:Me},created:function(){this.cache=Object.create(null)},destroyed:function(){for(var t in this.cache)Ue(this.cache[t])},watch:{include:function(t){Be(this.cache,this._vnode,function(e){return Fe(t,e)})},exclude:function(t){Be(this.cache,this._vnode,function(e){return!Fe(t,e)})}},render:function(){var t=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&r(n.componentOptions))return n}}(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Ne(e);if(n&&(this.include&&!Fe(this.include,n)||this.exclude&&Fe(this.exclude,n)))return t;var o=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[o]?t.componentInstance=this.cache[o].componentInstance:this.cache[o]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={get:function(){return L}};Object.defineProperty(t,"config",e),t.util={warn:F,extend:A,mergeOptions:bt,defineReactive:pt},t.set=dt,t.delete=ht,t.nextTick=tt,t.options=Object.create(null),S.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,A(t.options.components,Ve),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=bt(this.options,t),this}}(t),Re(t),function(t){S.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(Le),Object.defineProperty(Le.prototype,"$isServer",{get:K}),Object.defineProperty(Le.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Le.version="2.4.1",Le.mpvueVersion="1.0.12";var ze=p("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),He=p("style,class");p("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),p("embed,img,image,input,link,meta",!0);function We(t){return t&&t.$attrs?t.$attrs.mpcomid:"0"}var qe={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},Ge={};var Je=Object.freeze({createElement:function(t,e){return Ge},createElementNS:function(t,e){return Ge},createTextNode:function(t){return Ge},createComment:function(t){return Ge},insertBefore:function(t,e,n){},removeChild:function(t,e){},appendChild:function(t,e){},parentNode:function(t){return Ge},nextSibling:function(t){return Ge},tagName:function(t){return"div"},setTextContent:function(t,e){return Ge},setAttribute:function(t,e,n){return Ge}}),Ke={create:function(t,e){Ye(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ye(t,!0),Ye(e))},destroy:function(t){Ye(t,!0)}};function Ye(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?h(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var Xe=new Ct("",{},[]),Ze=["create","activate","update","remove","destroy"];function Qe(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,o=r(n=t.data)&&r(n=n.attrs)&&n.type,i=r(n=e.data)&&r(n=n.attrs)&&n.type;return o===i}(t,e)||o(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&n(e.asyncFactory.error))}function tn(t,e,n){var o,i,a={};for(o=e;o<=n;++o)r(i=t[o].key)&&(a[i]=o);return a}var en=function(t){var e,a,s={},c=t.modules,u=t.nodeOps;for(e=0;e<Ze.length;++e)for(s[Ze[e]]=[],a=0;a<c.length;++a)r(c[a][Ze[e]])&&s[Ze[e]].push(c[a][Ze[e]]);function l(t){var e=u.parentNode(t);r(e)&&u.removeChild(e,t)}function f(t,e,n,i,a){if(t.isRootInsert=!a,!function(t,e,n,i){var a=t.data;if(r(a)){var c=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1,n,i),r(t.componentInstance))return d(t,e),o(c)&&function(t,e,n,o){for(var i,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,r(i=a.data)&&r(i=i.transition)){for(i=0;i<s.activate.length;++i)s.activate[i](Xe,a);e.push(a);break}h(n,t.elm,o)}(t,e,n,i),!0}}(t,e,n,i)){var c=t.data,l=t.children,f=t.tag;r(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),g(t),v(t,l,e),r(c)&&m(t,e),h(n,t.elm,i)):o(t.isComment)?(t.elm=u.createComment(t.text),h(n,t.elm,i)):(t.elm=u.createTextNode(t.text),h(n,t.elm,i))}}function d(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,y(t)?(m(t,e),g(t)):(Ye(t),e.push(t))}function h(t,e,n){r(t)&&(r(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function v(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0);else i(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function y(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return r(t.tag)}function m(t,n){for(var o=0;o<s.create.length;++o)s.create[o](Xe,t);r(e=t.data.hook)&&(r(e.create)&&e.create(Xe,t),r(e.insert)&&n.push(t))}function g(t){for(var e,n=t;n;)r(e=n.context)&&r(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;r(e=Wt)&&e!==t.context&&r(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function _(t,e,n,r,o,i){for(;r<=o;++r)f(n[r],i,t,e)}function w(t){var e,n,o=t.data;if(r(o))for(r(e=o.hook)&&r(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)w(t.children[n])}function b(t,e,n,o){for(;n<=o;++n){var i=e[n];r(i)&&(r(i.tag)?($(i),w(i)):l(i.elm))}}function $(t,e){if(r(e)||r(t.data)){var n,o=s.remove.length+1;for(r(e)?e.listeners+=o:e=function(t,e){function n(){0==--n.listeners&&l(t)}return n.listeners=e,n}(t.elm,o),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&$(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else l(t.elm)}function x(t,e,i,a){if(t!==e){var c=e.elm=t.elm;if(o(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?C(t.elm,e,i):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var l,p=e.data;r(p)&&r(l=p.hook)&&r(l=l.prepatch)&&l(t,e);var d=t.children,h=e.children;if(r(p)&&y(e)){for(l=0;l<s.update.length;++l)s.update[l](t,e);r(l=p.hook)&&r(l=l.update)&&l(t,e)}n(e.text)?r(d)&&r(h)?d!==h&&function(t,e,o,i,a){for(var s,c,l,p=0,d=0,h=e.length-1,v=e[0],y=e[h],m=o.length-1,g=o[0],w=o[m],$=!a;p<=h&&d<=m;)n(v)?v=e[++p]:n(y)?y=e[--h]:Qe(v,g)?(x(v,g,i),v=e[++p],g=o[++d]):Qe(y,w)?(x(y,w,i),y=e[--h],w=o[--m]):Qe(v,w)?(x(v,w,i),$&&u.insertBefore(t,v.elm,u.nextSibling(y.elm)),v=e[++p],w=o[--m]):Qe(y,g)?(x(y,g,i),$&&u.insertBefore(t,y.elm,v.elm),y=e[--h],g=o[++d]):(n(s)&&(s=tn(e,p,h)),n(c=r(g.key)?s[g.key]:null)?(f(g,i,t,v.elm),g=o[++d]):Qe(l=e[c],g)?(x(l,g,i),e[c]=void 0,$&&u.insertBefore(t,l.elm,v.elm),g=o[++d]):(f(g,i,t,v.elm),g=o[++d]));p>h?_(t,n(o[m+1])?null:o[m+1].elm,o,d,m,i):d>m&&b(0,e,p,h)}(c,d,h,i,a):r(h)?(r(t.text)&&u.setTextContent(c,""),_(c,null,h,0,h.length-1,i)):r(d)?b(0,d,0,d.length-1):r(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),r(p)&&r(l=p.hook)&&r(l=l.postpatch)&&l(t,e)}}}function O(t,e,n){if(o(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var A=p("attrs,style,class,staticClass,staticStyle,key");function C(t,n,i){if(o(n.isComment)&&r(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var a=n.tag,s=n.data,c=n.children;if(r(s)&&(r(e=s.hook)&&r(e=e.init)&&e(n,!0),r(e=n.componentInstance)))return d(n,i),!0;if(r(a)){if(r(c))if(t.hasChildNodes()){for(var u=!0,l=t.firstChild,f=0;f<c.length;f++){if(!l||!C(l,c[f],i)){u=!1;break}l=l.nextSibling}if(!u||l)return!1}else v(n,c,i);if(r(s))for(var p in s)if(!A(p)){m(n,i);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,i,a,c,l){if(!n(e)){var p,d=!1,h=[];if(n(t))d=!0,f(e,h,c,l);else{var v=r(t.nodeType);if(!v&&Qe(t,e))x(t,e,h,a);else{if(v){if(1===t.nodeType&&t.hasAttribute(E)&&(t.removeAttribute(E),i=!0),o(i)&&C(t,e,h))return O(e,h,!0),t;p=t,t=new Ct(u.tagName(p).toLowerCase(),{},[],void 0,p)}var m=t.elm,g=u.parentNode(m);if(f(e,h,m._leaveCb?null:g,u.nextSibling(m)),r(e.parent)){for(var _=e.parent;_;)_.elm=e.elm,_=_.parent;if(y(e))for(var $=0;$<s.create.length;++$)s.create[$](Xe,e.parent)}r(g)?b(0,[t],0,0):r(t.tag)&&w(t)}}return O(e,h,d),e.elm}r(t)&&w(t)}}({nodeOps:Je,modules:[Ke]});function nn(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var i=0,a=o.length;i<a;i++)try{r=o[i].call(t,n)}catch(n){B(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return nn(t,e,n)}),r}function rn(t,e,n){if(t){var r,o,i;if(Array.isArray(t))for(r=t.length;r--;)"string"==typeof(o=t[r])&&(e[i=_(o)]={type:null});else if(c(t))for(var a in t)o=t[a],e[i=_(a)]=c(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];u.default&&(u.value=u.default);var l=u.observer;u.observer=function(t,e){n[i]=t,"function"==typeof l&&l.call(n,t,e)}}return e}}function on(t){var e=function t(e,n){void 0===n&&(n=[]);var r=(e||{}).$parent;return r?(n.unshift(We(r)),r.$parent?t(r,n):n):n}(t).join(","),n=e+(e?",":"")+We(t),r=Object.assign(function(t){return[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{})).reduce(function(e,n){return e[n]=t[n],e},{})}(t),{$k:n,$kk:n+",",$p:e}),o={};return o["$root."+n]=r,o}var an=function(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,l){var f=Date.now();s||!1!==n.leading||(s=f);var p=e-(f-s);return r=this,o=o?[u,Object.assign(o[1],l)]:[u,l],p<=0||p>e?(clearTimeout(a),a=null,s=f,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,p)),i}}(function(t,e){t(e)},50);function sn(t){var e=t.$root.$mp||{},n=e.mpType;void 0===n&&(n="");var r=e.page;if("app"!==n&&r&&"function"==typeof r.setData)return r}return Le.config.mustUseProp=function(){},Le.config.isReservedTag=ze,Le.config.isReservedAttr=He,Le.config.getTagNamespace=function(){},Le.config.isUnknownElement=function(){},Le.prototype.__patch__=function(){en.apply(this,arguments),this.$updateDataToMP()},Le.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return qt(n,void 0,void 0)})}return qt(this,void 0,void 0)},Le.prototype._initMP=function(t,n){var r=this.$root;r.$mp||(r.$mp={});var o,i,a=r.$mp;if(a.status)return"app"===t?nn(this,"onLaunch",a.appOptions):nn(this,"onLoad",a.query),n();if(a.mpType=t,a.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),a.app=this,a.status="launch",this.globalData.appOptions=a.appOptions=t,nn(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),a.status="show",this.globalData.appOptions=a.appOptions=t,nn(r,"onShow",t)},onHide:function(){a.status="hide",nn(r,"onHide")},onError:function(t){nn(r,"onError",t)},onUniNViewMessage:function(t){nn(r,"onUniNViewMessage",t)}});else if("component"===t)i=(o=r)._mpProps={},Object.keys(o.$options.properties||{}).forEach(function(t){t in o||(se(o,"_mpProps",t),i[t]=void 0)}),ft(i,!0),e.Component({properties:function(t){var e=t.$options.properties,n=t.$options.props,r={};return rn(e,r,t),rn(n,r,t),r}(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){a.status="created",a.page=this},attached:function(){a.status="attached",nn(r,"attached")},ready:function(){a.status="ready",nn(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){nn(r,"moved")},detached:function(){a.status="detached",nn(r,"detached")}});else{var s=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.query=t,a.status="load",function(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}(s,r),r.$options&&"function"==typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),nn(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.status="show",nn(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){a.status="ready",nn(r,"onReady"),n()},onHide:function(){a.status="hide",nn(r,"onHide")},onUnload:function(){a.status="unload",nn(r,"onUnload"),a.page=null},onPullDownRefresh:function(){nn(r,"onPullDownRefresh")},onReachBottom:function(){nn(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return nn(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){nn(r,"onPageScroll",t)},onTabItemTap:function(t){nn(r,"onTabItemTap",t)}})}},Le.prototype.$updateDataToMP=function(){var e=sn(this);if(e){var n=on(this);an(e.setData.bind(e),JSON.parse(JSON.stringify(function(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],l=1,f=c.length;l<f&&void 0!==u;++l)u=u[c[l]];t(o,s,e[s],u)}return o}(n,e.data))))}},Le.prototype._initDataToMP=function(){var t=sn(this);if(t){var e=function t(e,n){void 0===n&&(n={});var r=e.$children;return r&&r.length&&r.forEach(function(e){return t(e,n)}),Object.assign(n,on(e))}(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}},Le.prototype.$handleProxyWithVue=function(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=(t.currentTarget||r).dataset;void 0===o&&(o={});var i=o.comkey;void 0===i&&(i="");var a=o.eventid,s=function(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r];if(We(o)===e)return t=o}return t},t):t}(e,i.split(","));if(s){var c=qe[n]||[n],u=function t(e,n,r){void 0===r&&(r=[]);var o=[];if(!e||!e.tag)return o;var i=e||{},a=i.data;void 0===a&&(a={});var s=i.children;void 0===s&&(s=[]);var c=i.componentInstance;c?Object.keys(c.$slots).forEach(function(e){var i=c.$slots[e];(Array.isArray(i)?i:[i]).forEach(function(e){o=o.concat(t(e,n,r))})}):s.forEach(function(e){o=o.concat(t(e,n,r))});var u=a.attrs,l=a.on;return u&&l&&u.eventid===n?(r.forEach(function(t){var e=l[t];"function"==typeof e?o.push(e):Array.isArray(e)&&(o=o.concat(e))}),o):o}(s._vnode,a,c);if(u.length){var l=function(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s={mp:t,type:e,timeStamp:n,x:o.x,y:o.y,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:C,preventDefault:C};return r&&r.length&&(Object.assign(s,r[0]),s.touches=r),s}(t);if(1===u.length)return u[0](l);u.forEach(function(t){return t(l)})}}},Le},t.exports=n()}).call(e,n(12))}});
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([51],{11:function(n,e,o){"use strict";var t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=c(o(9)),l=c(o(13));function c(n){return n&&n.__esModule?n:{default:n}}u.default.config.productionTip=!1,l.default.mpType="app",new u.default(t({},l.default)).$mount()},13:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=o(15),u=o.n(t);var l=function(n){o(14)},c=o(0)(u.a,null,l,null,null);e.default=c.exports},14:function(n,e){},15:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={onLaunch:function(){},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}}},[11]);
});
require('app.js');


__wxRoute = 'pages/shouye/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shouye/login.js';

define('pages/shouye/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{16:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(17));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},17:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(19),a=i.n(s),n=i(20);var c=function(t){i(18)},l=i(0)(a.a,n.a,c,null,null);e.default=l.exports},18:function(t,e){},19:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{flag:0,height:""}},onLoad:function(){this.height=t.getSystemInfoSync().screenHeight,console.log(this.height)},methods:{tab:function(t){0==t.target.dataset.id?this.flag=0:this.flag=1},toRegister:function(){t.navigateTo({url:"./register",success:function(t){},fail:function(){},complete:function(){}})},toIndex:function(){t.switchTab({url:"../index/index"})},toReset:function(){t.navigateTo({url:"./reset",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(e,i(2).default)},20:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"login-box",style:{height:t.height+"px"}},[i("view",{staticClass:"container"},[t._m(0),i("view",{staticClass:"bottom"},[i("view",{staticClass:"bottom-top"},[i("view",{staticClass:"login-class"},[i("view",{class:{active:0==t.flag},attrs:{"data-id":"0",eventid:"GGw-0"},on:{click:t.tab}},[t._v("\n\t\t\t\t\t\t短信验证登陆\n\t\t\t\t\t")]),i("view",{class:{active:1==t.flag},attrs:{"data-id":"1",eventid:"GPf-1"},on:{click:t.tab}},[t._v("\n\t\t\t\t\t\t账号密码登录\n\t\t\t\t\t")])]),i("view",{directives:[{name:"show",rawName:"v-show",value:0==t.flag,expression:"flag==0"}],staticClass:"inp-group"},[t._m(1),t._m(2)]),1==t.flag?i("view",{staticClass:"inp-group"},[t._m(3),t._m(4)]):t._e(),i("view",{staticClass:"button-box"},[i("view",{staticClass:" btn",attrs:{eventid:"KWp-2"},on:{click:t.toIndex}},[t._v("登录")])]),i("view",{staticClass:"forget",attrs:{eventid:"rcP-3"},on:{click:t.toReset}},[t._v("忘记密码？")])]),i("view",{staticClass:"zhuce",attrs:{eventid:"Iks-4"},on:{click:t.toRegister}},[t._v("没有账号，立即注册")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"logo"},[e("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/logo.png",mode:"widthFix"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"../../static/image/my/shoujihao.png",mode:"aspectFit"}}),e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入手机号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"../../static/image/my/yanzhengma.png",mode:"aspectFit"}}),e("view",{staticClass:"inp-box-right"},[e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入手机号"}}),e("view",{staticClass:"get-number"},[e("view",[this._v("获取验证码")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"../../static/image/my/shoujihao.png",mode:"aspectFit"}}),e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入账号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"../../static/image/my/yanzhengma.png",mode:"aspectFit"}}),e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入密码"}})])}]};e.a=s}},[16]);
});
require('pages/shouye/login.js');
__wxRoute = 'pages/shouye/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shouye/register.js';

define('pages/shouye/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{21:function(t,e,i){"use strict";var a=c(i(1)),s=c(i(22));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},22:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(24),s=i.n(a),c=i(25);var n=function(t){i(23)},o=i(0)(s.a,c.a,n,null,null);e.default=o.exports},23:function(t,e){},24:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{flag:0,checked:!1,height:""}},onLoad:function(){this.height=t.getSystemInfoSync().screenHeight,console.log(this.height)},methods:{checkedTab:function(){this.checked=!this.checked},tab:function(t){0==t.target.dataset.id?this.flag=0:this.flag=1},toRegister:function(){t.navigateTo({url:"",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(e,i(2).default)},25:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"login-box",style:{height:t.height+"px"}},[i("view",{staticClass:"container"},[t._m(0),i("view",{staticClass:"bottom"},[i("view",{staticClass:"bottom-top"},[t._m(1),i("view",{staticClass:"radio-box"},[i("label",{staticClass:"radio"},[i("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png",eventid:"xav-0"},on:{click:t.checkedTab}}),t._v("实名认证\n\t\t\t\t\t\t")]),i("view",{staticClass:"tishi"},[t._v("\n\t\t\t\t\t\t\t用户在进行实名认证后可以获得全部权限，若不认证，权限将局部开放\n\t\t\t\t\t\t")])],1),t._m(2)]),i("view",{staticClass:"zhuce"},[t._v("投资有风险，决策需谨慎")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"logo"},[e("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/logo.png",mode:"widthFix"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"inp-group"},[e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/shoujihao.png",mode:"aspectFit"}}),e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入手机号"}})]),e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/yanzhengma.png",mode:"aspectFit"}}),e("view",{staticClass:"inp-box-right"},[e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入验证码"}}),e("view",{staticClass:"get-number"},[e("view",[this._v("获取验证码")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"button-box"},[e("view",{staticClass:" btn"},[this._v("注册")])])}]};e.a=a}},[21]);
});
require('pages/shouye/register.js');
__wxRoute = 'pages/shouye/reset';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shouye/reset.js';

define('pages/shouye/reset.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{26:function(t,a,i){"use strict";var s=n(i(1)),e=n(i(27));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},27:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i(29),e=i.n(s),n=i(30);var c=function(t){i(28)},l=i(0)(e.a,n.a,c,null,null);a.default=l.exports},28:function(t,a){},29:function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{}},methods:{goback:function(){t.navigateBack({})}}}}).call(a,i(2).default)},30:function(t,a,i){"use strict";var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("view",[a("view",{staticClass:"topBox"},[a("view",{staticClass:"top"},[a("view",{staticClass:"go-back iconfont",attrs:{eventid:"w4e-0"},on:{click:this.goback}},[this._v("\n\t\t\t\t\n\t\t\t")]),a("view",{staticClass:"middle"},[this._v("\n\t\t\t\t密码重置\n\t\t\t")]),a("view",{staticClass:"share iconfont"})]),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"section"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"inp-box"},[a("image",{staticClass:"icon",attrs:{src:"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/shoujihao.png",mode:"aspectFit"}}),a("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入手机号"}})]),a("view",{staticClass:"inp-box"},[a("image",{staticClass:"icon",attrs:{src:"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/yanzhengma.png",mode:"aspectFit"}}),a("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"动态验证码"}}),a("view",{staticClass:"get-number"},[this._v("\n\t\t\t\t\t\t获取验证码\n\t\t\t\t\t")])]),a("view",{staticClass:"inp-box"},[a("image",{staticClass:"icon",attrs:{src:"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/mima.png",mode:"aspectFit"}}),a("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"密码为6-20位数字和字母组合"}})]),a("view",{staticClass:"inp-box"},[a("image",{staticClass:"icon",attrs:{src:"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/qirenmima.png",mode:"aspectFit"}}),a("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"确认密码"}})])]),a("view",{staticClass:"button-box"},[a("view",{staticClass:" btn"},[this._v("确认")])])])}]};a.a=s}},[26]);
});
require('pages/shouye/reset.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([46],{31:function(t,i,a){"use strict";var s=n(a(1)),e=n(a(32));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},32:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(34),e=a.n(s),n=a(44);var o=function(t){a(33)},c=a(0)(e.a,n.a,o,null,null);i.default=c.exports},33:function(t,i){},34:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0});var s=o(a(3)),e=o(a(5)),n=o(a(6));function o(t){return t&&t.__esModule?t:{default:t}}i.default={components:{searchTemp:s.default,newsListTemp:e.default,swiperTemp:n.default},data:function(){return{lists:[{id:75408,from_id:"36kr",title:"2018年了，你有AI思维了吗？",summary:"葛优在《甲方乙方》结尾说1997年就要结束了，我很怀念。",column_id:"217",column_name:"人工智能",author_name:"科技唆麻",author_email:"",author_avatar:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480",post_id:"5163051",cover:"https://pic.36krcnd.com/201811/20140007/siedc1b5fzprrvpn!heading",views_count:10,comments_count:0,published_at:"2018-11-21 14:28:06",store_at:"0000-00-00 00:00:00",type:"news",created_at:"2018-11-21 14:31:06",updated_at:"2018-11-21 14:31:06"},{id:75409,from_id:"36kr",title:"特斯拉计划将超级充电网络扩大一倍，下代充电站计划推迟至明年初",summary:"特斯拉当下面临的最大问题是，该公司能否兑现马斯克许下的承诺？",column_id:"219",column_name:"汽车交通",author_name:"36氪的朋友们",author_email:"",author_avatar:"http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480",post_id:"5163157",cover:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading",views_count:15,comments_count:0,published_at:"2018-11-21 14:26:52",store_at:"0000-00-00 00:00:00",type:"news",created_at:"2018-11-21 14:31:06",updated_at:"2018-11-21 14:31:06"},{id:75407,from_id:"36kr",title:"消失的招聘广告",summary:"天风证券宋雪涛发现，在4月-9月期间，有202万个就业招聘广告消失，其中二线城市及中小企业降的最多最快。",column_id:"103",column_name:"技能Get",author_name:"36氪的朋友们",author_email:"",author_avatar:"http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480",post_id:"5163153",cover:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading",views_count:51,comments_count:0,published_at:"2018-11-21 14:18:48",store_at:"0000-00-00 00:00:00",type:"news",created_at:"2018-11-21 14:22:07",updated_at:"2018-11-21 14:22:07"}],imgUrl:[{id:1,url:"https://pic.36krcnd.com/201811/20140007/siedc1b5fzprrvpn!heading"},{id:2,url:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading"},{id:3,url:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading"}],list:[{id:75408,from_id:"36kr",title:"2018年了，你有AI思维了吗？",summary:"葛优在《甲方乙方》结尾说，1997年就要结束了，我很怀念他。而事实上，不管你承不承认，互联网思维已经是过去式了，对于绝大多数企业来说，要学习的是AI思维，如果不能拥抱AI，恐怕会被时代无情的淘汰。",column_id:"217",column_name:"人工智能",author_name:"科技唆麻",author_email:"",author_avatar:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480",post_id:"5163051",cover:"https://pic.36krcnd.com/201811/20140007/siedc1b5fzprrvpn!heading",views_count:10,comments_count:0,published_at:"2018-11-21 14:28:06",store_at:"0000-00-00 00:00:00",type:"news",created_at:"2018-11-21 14:31:06",updated_at:"2018-11-21 14:31:06"}],qiuzhilist:[{value:"1如何选择固定收益类理财产品？"},{value:"2如何选择固定收益类理财产品？"},{value:"3如何选择固定收益类理财产品？"}]}},methods:{toZixun:function(){t.navigateTo({url:"news/news",success:function(t){},fail:function(){},complete:function(){}})},toHuodong:function(){t.navigateTo({url:"huodong/huodong",success:function(t){},fail:function(){},complete:function(){}})},toCaifu:function(){t.navigateTo({url:"caifu/caifu",success:function(t){},fail:function(){},complete:function(){}})},toQiuzhi:function(){t.navigateTo({url:"knowledge/knowledge",success:function(t){},fail:function(){},complete:function(){}})},toProduct:function(){t.switchTab({url:"../product/product"})},toZaobao:function(){t.navigateTo({url:"./zaobao/zaobao",success:function(t){},fail:function(){},complete:function(){}})},toStore:function(){t.navigateTo({url:"./store/store",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(i,a(2).default)},44:function(t,i,a){"use strict";var s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("swiperTemp",{attrs:{imgUrl:t.imgUrl,mpcomid:"v9p-0"}}),a("view",{staticClass:"lists"},[a("view",{staticClass:"list-item",attrs:{eventid:"eZ0-0"},on:{tap:t.toZixun}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/zixun.png",mode:""}}),a("view",[t._v("资讯")])]),a("view",{staticClass:"list-item",attrs:{eventid:"3MD-1"},on:{tap:t.toQiuzhi}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/qiuzhi.png",mode:""}}),a("view",[t._v("求知")])]),a("view",{staticClass:"list-item",attrs:{eventid:"0fb-2"},on:{tap:t.toHuodong}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/huodong.png",mode:""}}),a("view",[t._v("活动")])]),a("view",{staticClass:"list-item",attrs:{eventid:"yYR-3"},on:{tap:t.toCaifu}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/caifujiangtang.png",mode:""}}),a("view",[t._v("财富讲堂")])]),a("view",{staticClass:"list-item",attrs:{eventid:"zQJ-4"},on:{tap:t.toStore}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/jifenshamhcheng.png",mode:""}}),a("view",[t._v("积分商城")])])]),a("view",{staticClass:"block-box"},[a("view",{staticClass:"block"},[a("view",{staticClass:"block-title-box"},[a("view",{staticClass:"block-title"},[a("view",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t金融资讯\n\t\t\t\t\t")]),a("view",{staticClass:"uni-icon-more",attrs:{eventid:"Xav-5"},on:{tap:t.toZixun}},[a("view",{staticClass:"more"},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t")]),a("label",{staticClass:"iconfont arrow"},[t._v("")])],1)])])]),a("newsListTemp",{attrs:{newsList:t.lists,mpcomid:"Y33-1"}})],1),a("view",{staticClass:"block-box"},[a("view",{staticClass:"block"},[a("view",{staticClass:"block-title-box"},[a("view",{staticClass:"block-title"},[a("view",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t热点问答\n\t\t\t\t\t")]),a("view",{staticClass:"uni-icon-more",attrs:{eventid:"ixL-6"},on:{tap:t.toQiuzhi}},[a("view",{staticClass:"more"},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t")]),a("label",{staticClass:"iconfont arrow"},[t._v("")])],1)])]),a("view",{staticClass:"block-content"},t._l(t.qiuzhilist,function(i,s){return a("view",{key:s,class:{qiuzhiItem:!0,first:0==s}},[a("view",{staticClass:"qiuzhi-top size uni-ellipsis"},[t._v("\n\t\t\t\t\t\t"+t._s(i.value)+"\n\t\t\t\t\t")]),a("view",{staticClass:"qiuzhi-bottom  uni-ellipsis"},[t._v("\n\t\t\t\t\t\t"+t._s(i.value)+"\n\t\t\t\t\t")])])}))])]),a("view",{staticClass:"block-box"},[a("view",{staticClass:"block"},[a("view",{staticClass:"block-title-box"},[a("view",{staticClass:"block-title"},[a("view",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t热销产品\n\t\t\t\t\t")]),a("view",{staticClass:"uni-icon-more",attrs:{eventid:"TBd-7"},on:{tap:t.toProduct}},[a("view",{staticClass:"more"},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t")]),a("label",{staticClass:"iconfont arrow"},[t._v("")])],1)])]),t._m(0)])]),a("view",{staticClass:"block-box"},[a("view",{staticClass:"block"},[a("view",{staticClass:"block-title-box"},[a("view",{staticClass:"block-title"},[a("view",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t财富讲堂\n\t\t\t\t\t")]),a("view",{staticClass:"uni-icon-more",attrs:{eventid:"UQm-8"},on:{tap:t.toCaifu}},[a("view",{staticClass:"more"},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t")]),a("label",{staticClass:"iconfont arrow"},[t._v("")])],1)])]),t._m(1)])])],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"block-content"},[a("view",{staticClass:"intro"},[a("view",{staticClass:"pro-title"},[t._v("\n\t\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t\t")]),a("view",{staticClass:"detail"},[a("view",{staticClass:"item"},[a("view",{staticClass:"size color"},[t._v("8%-9.5%")]),a("view",{staticClass:"color-gray"},[t._v("业绩比较基准")])]),a("view",{staticClass:"item"},[a("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t\t")]),a("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t\t")])]),a("view",{staticClass:"item"},[a("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t认购起点\n\t\t\t\t\t\t\t")]),a("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])])]),a("view",{staticClass:"button-group"},[a("view",{},[t._v("\n\t\t\t\t\t\t\t产品备案查询\n\t\t\t\t\t\t")]),a("view",{},[t._v("\n\t\t\t\t\t\t\t产品详情\n\t\t\t\t\t\t")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"block-content"},[i("view",{staticClass:"jiangtang"},[i("view",{staticClass:"jt-box"},[i("view",{staticClass:"jt-title"},[this._v("\n\t\t\t\t\t\t\t投资策略\n\t\t\t\t\t\t")]),i("view",{staticClass:"jt-content"},[this._v("\n\t\t\t\t\t\t\t投资顾问 专家解读\n\t\t\t\t\t\t")])]),i("view",{staticClass:"jt-box"},[i("view",{staticClass:"jt-title"},[this._v("\n\t\t\t\t\t\t\t投资策略\n\t\t\t\t\t\t")]),i("view",{staticClass:"jt-content"},[this._v("\n\t\t\t\t\t\t\t投资顾问 专家解读\n\t\t\t\t\t\t")])])])])}]};i.a=s}},[31]);
});
require('pages/index/index.js');
__wxRoute = 'pages/index/caifu/caifu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/caifu/caifu.js';

define('pages/index/caifu/caifu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([50],{45:function(t,n,e){"use strict";var i=a(e(1)),s=a(e(46));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},46:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(48),s=e.n(i),a=e(49);var c=function(t){e(47)},l=e(0)(s.a,a.a,c,null,null);n.default=l.exports},47:function(t,n){},48:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{lists:[]}},onLoad:function(){var n=this;t.showLoading(),t.request({url:"https://unidemo.dcloud.net.cn/api/news",method:"GET",data:{},success:function(e){n.lists=e.data,console.log(e),t.hideLoading()},fail:function(){},complete:function(){}})},methods:{toCfDetail:function(){t.navigateTo({url:"cfdetail/cfdetail",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(n,e(2).default)},49:function(t,n,e){"use strict";var i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"box"},t._l(t.lists,function(n,i){return e("view",{staticClass:"cfjiangtang",style:{backgroundImage:"url("+n.author_avatar+")"},attrs:{eventid:"vD5-0-"+i},on:{click:t.toCfDetail}},[t._m(0,!0)])}))},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("view",{staticClass:"content"},[n("view",{staticClass:"iconfont play"},[this._v("\n      \t\t  \n      \t\t\n      \t\t")]),n("view",{staticClass:"title"},[this._v("\n\t\t\t\t\t\t如何选择固定收益类的理财产品？\n\t\t\t\t\t")]),n("view",{staticClass:"bot"},[n("view",{staticClass:"left"},[n("view",{staticClass:"from"},[this._v("\n\t\t\t\t\t\t\t\t微课堂\n\t\t\t\t\t\t\t")]),n("view",{staticClass:"time"},[this._v("\n\t\t\t\t\t\t\t\t微课堂\n\t\t\t\t\t\t\t")])]),n("view",{staticClass:"right"},[n("view",{staticClass:"iconfont"},[this._v("\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t")]),n("view",{},[this._v("\n\t\t\t\t\t\t\t\t\t2345\n\t\t\t\t\t\t\t")])])])])}]};n.a=i}},[45]);
});
require('pages/index/caifu/caifu.js');
__wxRoute = 'pages/index/caifu/cfdetail/cfdetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/caifu/cfdetail/cfdetail.js';

define('pages/index/caifu/cfdetail/cfdetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([49],{50:function(t,s,i){"use strict";var a=c(i(1)),e=c(i(51));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(e.default))},51:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i(53),e=i.n(a),c=i(57);var n=function(t){i(52)},v=i(0)(e.a,c.a,n,null,null);s.default=v.exports},52:function(t,s){},53:function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var a,e=i(7),c=(a=e)&&a.__esModule?a:{default:a};s.default={components:{writemarkTemp:c.default},data:function(){return{}},methods:{goback:function(){t.navigateBack()}}}}).call(s,i(2).default)},57:function(t,s,i){"use strict";var a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",[i("view",{staticClass:"topBox"},[i("view",{staticClass:"top"},[i("view",{staticClass:"go-back iconfont",attrs:{eventid:"Z39-0"},on:{click:t.goback}},[t._v("\n\t\t\t\t\n\t\t\t")]),i("view",{staticClass:"middle"},[t._v("\n\t\t\t\t资产配置\n\t\t\t")]),i("view",{staticClass:"share iconfont"},[t._v("\n\t\t\t\t\n\t\t\t")])]),t._m(0)]),i("view",{staticClass:"contentBox"},[t._m(1),t._m(2),t._m(3),i("view",{staticClass:"more-mark"},[i("label",{staticClass:"iconfont"},[t._v("")]),t._v("查看更多评论")],1)]),i("view",{staticClass:"bottom"},[i("writemarkTemp",{attrs:{mpcomid:"tUu-0"}})],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"videoBox"},[s("video",{staticClass:"video",attrs:{src:"",controls:"",poster:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545037607&di=2f29f11ea32db8271262cd40536174c7&src=http://imgsrc.baidu.com/imgad/pic/item/32fa828ba61ea8d3d8d6c33f9c0a304e251f5810.jpg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"contentTop"},[s("view",{staticClass:"title"},[this._v("\n\t\t\t\t如何选择固定收益类的理财产品？\n\t\t\t")]),s("view",{staticClass:"bot"},[s("view",{staticClass:"left"},[s("view",{staticClass:"from"},[this._v("\n\t\t\t\t\t\t微课堂\n\t\t\t\t\t")]),s("view",{staticClass:"time"},[this._v("\n\t\t\t\t\t\t2018-28-28\n\t\t\t\t\t")])]),s("view",{staticClass:"right"},[s("view",{staticClass:"iconfont"},[this._v("\n\t\t\t\t\t\t\n\t\t\t\t\t")]),s("view",{},[this._v("\n\t\t\t\t\t\t2345\n\t\t\t\t\t")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"contentMid"},[s("view",{staticClass:"videoDetail uni-font17"},[this._v("视频详情")]),s("view",{staticClass:"detail threeLines"},[this._v("视频详情 使皮下昂区视频详情 使皮下昂区视频详情 使皮下昂区视频详情 使皮下昂区视频详情 使皮下昂区")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"contentBot"},[i("view",{staticClass:"videoDetail uni-font17"},[t._v("热门评论")]),i("view",{staticClass:"mark"},[i("view",{staticClass:"avator-left"},[i("image",{attrs:{src:"../../../../static/image/invest/u762.png"}})]),i("view",{staticClass:"mark-right"},[i("view",{staticClass:"mark-top"},[i("view",{staticClass:"mark-top-left"},[i("view",{staticClass:"position"},[t._v("理财师")]),i("view",{staticClass:"name"},[t._v("李明")])]),i("view",{staticClass:"time"},[t._v("9小时前")])]),i("view",{staticClass:"mark-bot twoLines"},[t._v("\n\t\t\t\t\t\t秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄\n\t\t\t\t\t")])])]),i("view",{staticClass:"mark"},[i("view",{staticClass:"avator-left"},[i("image",{attrs:{src:"../../../../static/image/invest/u762.png"}})]),i("view",{staticClass:"mark-right"},[i("view",{staticClass:"mark-top"},[i("view",{staticClass:"mark-top-left"},[i("view",{staticClass:"position"},[t._v("理财师")]),i("view",{staticClass:"name"},[t._v("李明")])]),i("view",{staticClass:"time"},[t._v("9小时前")])]),i("view",{staticClass:"mark-bot twoLines"},[t._v("\n\t\t\t\t\t\t秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄\n\t\t\t\t\t")])])]),i("view",{staticClass:"mark"},[i("view",{staticClass:"avator-left"},[i("image",{attrs:{src:"../../../../static/image/invest/u762.png"}})]),i("view",{staticClass:"mark-right"},[i("view",{staticClass:"mark-top"},[i("view",{staticClass:"mark-top-left"},[i("view",{staticClass:"position"},[t._v("理财师")]),i("view",{staticClass:"name"},[t._v("李明")])]),i("view",{staticClass:"time"},[t._v("9小时前")])]),i("view",{staticClass:"mark-bot twoLines"},[t._v("\n\t\t\t\t\t\t秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄\n\t\t\t\t\t")])])])])}]};s.a=a}},[50]);
});
require('pages/index/caifu/cfdetail/cfdetail.js');
__wxRoute = 'components/newsList-temp';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/newsList-temp.js';

define('components/newsList-temp.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../common/manifest.js");
require("../common/vendor.js");
global.webpackJsonp([52],{58:function(e,t,u){"use strict";var a=n(u(1)),l=n(u(5));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(l.default))}},[58]);
});
require('components/newsList-temp.js');
__wxRoute = 'pages/index/zaobao/zaobao';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/zaobao/zaobao.js';

define('pages/index/zaobao/zaobao.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([39],{59:function(t,e,n){"use strict";var a=s(n(1)),i=s(n(60));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},60:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(62),i=n.n(a),s=n(63);var o=function(t){n(61)},c=n(0)(i.a,s.a,o,"data-v-6231c3b5",null);e.default=c.exports},61:function(t,e){},62:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(7),s=(a=i)&&a.__esModule?a:{default:a};e.default={components:{writemarkTemp:s.default},data:function(){return{title:"",string:""}},onLoad:function(e){var n=this;t.showLoading({}),t.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+e.newsid,method:"GET",data:{},success:function(e){console.log(e),n.title=e.data.title,n.string=e.data.content,t.hideLoading()},fail:function(){},complete:function(){}})}}}).call(e,n(2).default)},63:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"top"},[n("view",{staticClass:"title"},[t._v("\n\t\t\t耀莱财富财经快报\n\t\t")]),n("view",{staticClass:"videoBox"},[n("audio",{staticClass:"audio",attrs:{src:"",poster:"",name:"智能财富管理机构，秀实投资集团",author:"今天",action:"",controls:"true"}})],1)]),n("view",{staticClass:"content"},[n("view",{staticClass:"article-title"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),n("rich-text",{staticClass:"richtext",attrs:{nodes:t.string,mpcomid:"5jn-0"}},[t._v("\n\t\t\t"+t._s(t.string)+"\n\t\t")])],1),n("view",{staticClass:"bottom"},[n("writemarkTemp",{attrs:{mpcomid:"x8H-1"}})],1)])},staticRenderFns:[]};e.a=a}},[59]);
});
require('pages/index/zaobao/zaobao.js');
__wxRoute = 'pages/index/store/store';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/store/store.js';

define('pages/index/store/store.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([1],[,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(76),n=i.n(a),s=i(77);var c=function(t){i(75)},o=i(0)(n.a,s.a,c,null,null);e.default=o.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";var a=s(i(1)),n=s(i(65));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(67),n=i.n(a),s=i(87);var c=function(t){i(66)},o=i(0)(n.a,s.a,c,null,null);e.default=o.exports},function(t,e){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});l(i(68));var a=l(i(6)),n=l(i(3)),s=l(i(10)),c=l(i(79)),o=l(i(83));function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{swiperTemp:a.default,searchTemp:n.default,uniIcon:s.default,productList:c.default,leftCategory:o.default},data:function(){return{imgUrl:[{id:1,url:"https://pic.36krcnd.com/201811/20140007/siedc1b5fzprrvpn!heading"},{id:2,url:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading"},{id:3,url:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading"}],clickindex:"0",flag:0,height:0,bottomTab:[{id:1,imgUrl:"../../../static/image/indexImg/shangcheng/shouyemeren.png",selectImg:"../../../static/image/indexImg/shangcheng/shouyeanxia.png",name:"首页"},{id:2,imgUrl:"../../../static/image/indexImg/shangcheng/fenleimeren.png",selectImg:"../../../static/image/indexImg/shangcheng/fenleianxia.png",name:"分类"},{id:1,imgUrl:"../../../static/image/indexImg/shangcheng/gouwuchemeren.png",selectImg:"../../../static/image/indexImg/shangcheng/gouwucheanxia.png",name:"购物车"},{id:1,imgUrl:"../../../static/image/indexImg/shangcheng/wodemeren.png",selectImg:"../../../static/image/indexImg/shangcheng/wodeanxia.png",name:"我的"}]}},methods:{tab:function(t){this.flag=t,this.clickindex=t}},onLoad:function(){this.height=t.getSystemInfoSync().windowHeight-49,console.log(t.getSystemInfoSync().windowHeight)}}}).call(e,i(2).default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(70),n=i.n(a),s=i(78);var c=function(t){i(69)},o=i(0)(n.a,s.a,c,null,null);e.default=o.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(i(71)),n=s(i(10));function s(t){return t&&t.__esModule?t:{default:t}}e.default={components:{uniStatusBar:a.default,uniIcon:n.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:""},shadow:{type:String,default:""}},computed:{isFixed:function(){return"true"===String(this.fixed)},insertStatusBar:function(){switch(String(this.statusBar)){case"true":return!0;case"false":return!1;default:return this.isFixed}},hasShadow:function(){var t=this.backgroundColor;switch(String(this.shadow)){case"true":return!0;case"false":return!1;default:return"transparent"!==t&&t.indexOf("rgba")<0}}},methods:{onClickLeft:function(){this.$emit("clickLeft"),this.$emit("click-left")},onClickRight:function(){this.$emit("clickRight"),this.$emit("click-right")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(73),n=i.n(a),s=i(74);var c=function(t){i(72)},o=i(0)(n.a,s.a,c,null,null);e.default=o.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{style:function(){return""}}}},function(t,e,i){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("view",{staticClass:"uni-status-bar",style:this.style},[this._t("default",null,{mpcomid:"Tgv-0"})],2)},staticRenderFns:[]};e.a=a},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String,color:String},computed:{fontSize:function(){return this.size+"px"}},methods:{onClick:function(){this.$emit("click")}}}},function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"u3Q-0"},on:{click:function(e){t.onClick()}}})},staticRenderFns:[]};e.a=a},function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-navbar",class:{"uni-navbar-fixed":t.isFixed,"uni-navbar-shadow":t.hasShadow},style:{"background-color":t.backgroundColor}},[t.insertStatusBar?i("uni-status-bar",{attrs:{mpcomid:"7Xm-0"}}):t._e(),i("view",{staticClass:"uni-navbar-header",style:{color:t.color}},[i("view",{staticClass:"uni-navbar-btn uni-navbar-btn-left",attrs:{eventid:"VGI-0"},on:{tap:t.onClickLeft}},[t.leftIcon.length?i("view",{staticClass:"uni-navbar-btn-icon",class:{"uni-navbar-btn-icon-left":!t.leftText.length}},[i("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24",mpcomid:"bSr-1"}})],1):t._e(),t.leftText.length?i("view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left",null,{mpcomid:"XI6-2"})],2),i("view",{staticClass:"uni-navbar-container"},[t.title.length?i("view",{staticClass:"uni-navbar-container-title"},[t._v(t._s(t.title))]):t._e(),t._t("default",null,{mpcomid:"BPT-3"})],2),i("view",{staticClass:"uni-navbar-btn uni-navbar-btn-right",attrs:{eventid:"QKP-1"},on:{tap:t.onClickRight}},[t.rightIcon.length?i("view",{staticClass:"uni-navbar-btn-icon uni-navbar-btn-icon-right"},[i("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24",mpcomid:"iKo-4"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?i("view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right",null,{mpcomid:"i7o-5"})],2)])],1)},staticRenderFns:[]};e.a=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(81),n=i.n(a),s=i(82);var c=function(t){i(80)},o=i(0)(n.a,s.a,c,null,null);e.default=o.exports},function(t,e){},function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"product-list",productList:[{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",title:"Apple iPhone X 256GB 深空灰色 移动联通电信4G手机",originalPrice:9999,favourPrice:8888,tip:"自营"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",title:"Apple iPad 平板电脑 2018年新款9.7英寸",originalPrice:3499,favourPrice:3399,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg",title:"Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）",originalPrice:12999,favourPrice:10688,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg",title:"Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色",originalPrice:999,favourPrice:958,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg",title:"微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）",originalPrice:8888,favourPrice:8288,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg",title:"Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）",originalPrice:2899,favourPrice:2799,tip:"自营"}],renderImage:!1}},methods:{loadData:function(){var t=this;"refresh"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add")&&(this.productList=[]),[{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",title:"Apple iPhone X 256GB 深空灰色 移动联通电信4G手机",originalPrice:9999,favourPrice:8888,tip:"自营"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",title:"Apple iPad 平板电脑 2018年新款9.7英寸",originalPrice:3499,favourPrice:3399,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg",title:"Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）",originalPrice:12999,favourPrice:10688,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg",title:"Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色",originalPrice:999,favourPrice:958,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg",title:"微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）",originalPrice:8888,favourPrice:8288,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg",title:"Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）",originalPrice:2899,favourPrice:2799,tip:"自营"}].forEach(function(e){t.productList.push(e)})}},onLoad:function(){var t=this;this.loadData(),setTimeout(function(){t.renderImage=!0},300)},onPullDownRefresh:function(){this.loadData("refresh"),setTimeout(function(){t.stopPullDownRefresh()},2e3)},onReachBottom:function(){this.loadData()}}}).call(e,i(2).default)},function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page"},[i("view",{staticClass:"product-list"},t._l(t.productList,function(e,a){return i("view",{key:a,staticClass:"product"},[i("view",{staticClass:"image-view"},[i("image",{staticClass:"product-image",attrs:{src:e.image}})]),i("view",{staticClass:"product-title"},[t._v(t._s(e.title))]),i("view",{staticClass:"product-bot"},[i("view",{staticClass:"product-price"},[i("text",{staticClass:"product-price-original"},[t._v(t._s(e.favourPrice)+"积分")]),i("text",{staticClass:"product-price-favour"},[t._v(t._s(e.originalPrice)+"积分")]),i("text",{staticClass:"product-duration"},[t._v("2019.10.10-102.4422")])]),t._m(0,!0)])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"shoucang"},[e("text",{staticClass:"product-tip iconfont"},[this._v("")])])}]};e.a=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(85),n=i.n(a),s=i(86);var c=function(t){i(84)},o=i(0)(n.a,s.a,c,null,null);e.default=o.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"left-category",props:{height:Number},data:function(){return{categoryList:[{NAME:"数码",logo:"/static/image/indexImg/shangcheng/fenlei/shumaweixuanzhon.png",selectLogo:"/static/image/indexImg/shangcheng/fenlei/shumaxuanzhon.png",subCategoryList:{banner:"/static/image/indexImg/shangcheng/fenlei/banner.png",list:[{NAME:"分类1",LOGO:"http://placehold.it/50x50"},{NAME:"分类1",LOGO:"http://placehold.it/50x50"},{NAME:"分类1",LOGO:"http://placehold.it/50x50"},{NAME:"分类1",LOGO:"http://placehold.it/50x50"}]}},{NAME:"家居",logo:"/static/image/indexImg/shangcheng/fenlei/jiajuweixuanzhon.png",selectLogo:"/static/image/indexImg/shangcheng/fenlei/jiajuxuanzhon.png",subCategoryList:{banner:"/static/image/indexImg/shangcheng/fenlei/banner.png",list:[{NAME:"分类2",LOGO:"http://placehold.it/50x50"},{NAME:"分类2",LOGO:"http://placehold.it/50x50"}]}},{NAME:"厨房",logo:"/static/image/indexImg/shangcheng/fenlei/chufangweixuanzhon.png",selectLogo:"/static/image/indexImg/shangcheng/fenlei/chufangxuanzhon.png",subCategoryList:{banner:"/static/image/indexImg/shangcheng/fenlei/banner.png",list:[{NAME:"分类3",LOGO:"http://placehold.it/50x50"},{NAME:"分类3",LOGO:"http://placehold.it/50x50"}]}},{NAME:"箱包",logo:"/static/image/indexImg/shangcheng/fenlei/xiangbaoweixuanzhon.png",selectLogo:"/static/image/indexImg/shangcheng/fenlei/xiangbaoxuanzhon.png",subCategoryList:{banner:"/static/image/indexImg/shangcheng/fenlei/banner.png",list:[{NAME:"分类3",LOGO:"http://placehold.it/50x50"},{NAME:"分类4",LOGO:"http://placehold.it/50x50"}]}},{NAME:"家电",logo:"/static/image/indexImg/shangcheng/fenlei/jiadianweixuanzhon.png",selectLogo:"/static/image/indexImg/shangcheng/fenlei/jiadianxuanzhon.png",subCategoryList:{banner:"/static/image/indexImg/shangcheng/fenlei/banner.png",list:[{NAME:"分类3",LOGO:"http://placehold.it/50x50"},{NAME:"分类4",LOGO:"http://placehold.it/50x50"}]}},{NAME:"户外",logo:"/static/image/indexImg/shangcheng/fenlei/huwaiweixuanzhon.png",selectLogo:"/static/image/indexImg/shangcheng/fenlei/huwaixuanzhon.png",subCategoryList:{banner:"",list:[{NAME:"分类3",LOGO:"http://placehold.it/50x50"},{NAME:"分类4",LOGO:"http://placehold.it/50x50"}]}},{NAME:"家纺",logo:"/static/image/indexImg/shangcheng/fenlei/jiafangweixuanzhon.png",selectLogo:"/static/image/indexImg/shangcheng/fenlei/jiafangxuanzhon.png",subCategoryList:{banner:"",list:[{NAME:"分类3",LOGO:"http://placehold.it/50x50"},{NAME:"分类4",LOGO:"http://placehold.it/50x50"}]}},{NAME:"配饰",logo:"/static/image/indexImg/shangcheng/fenlei/peishiweixuanzhon.png",selectLogo:"/static/image/indexImg/shangcheng/fenlei/peishixuanzhon.png",subCategoryList:{banner:"/static/image/indexImg/shangcheng/fenlei/banner.png",list:[{NAME:"分类3",LOGO:"http://placehold.it/50x50"},{NAME:"分类4",LOGO:"http://placehold.it/50x50"}]}}],subCategory:[],categoryActive:0,scrollTop:0,scrollHeight:0,bannerUrl:""}},methods:{scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t,e){this.categoryActive=e,this.scrollTop=-this.scrollHeight*e}},mounted:function(){this.subCategory=this.categoryList[0].subCategoryList.list,this.bannerUrl=this.categoryList[0].subCategoryList.banner},onLoad:function(){}}},function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"container"},[i("view",{staticClass:"page-body"},[i("scroll-view",{staticClass:"nav-left",style:"height:"+t.height+"px",attrs:{"scroll-y":""}},t._l(t.categoryList,function(e,a){return i("view",{key:a,staticClass:"nav-left-item",class:a==t.categoryActive?"active":"",attrs:{eventid:"12c-0-"+a},on:{click:function(i){t.categoryClickMain(e,a)}}},[i("view",{staticClass:"nav-left-name",class:a==t.categoryActive?"active-border":""},[i("image",{staticClass:"logoImg",attrs:{src:a==t.categoryActive?e.selectLogo:e.logo,mode:"aspectFit"}}),t._v("\n\t\t\t\t\t"+t._s(e.NAME)+"\n\t\t\t\t")])])})),i("scroll-view",{staticClass:"nav-right",style:"height:"+t.height+"px",attrs:{"scroll-y":"","scroll-top":t.scrollTop,"scroll-with-animation":"",eventid:"W8b-1"},on:{scroll:t.scroll}},[i("view",{},[i("image",{staticClass:"banner",attrs:{src:t.bannerUrl,mode:"aspectFit"}})]),t._l(t.categoryList,function(e,a){return i("view",{staticClass:"class-box"},[i("view",{staticClass:"class-name"},[t._v(t._s(e.NAME))]),i("view",{staticClass:"nav-item-box"},t._l(e.subCategoryList.list,function(e,n){return i("view",{key:a,staticClass:"nav-right-item",attrs:{id:0===n?"first":""}},[i("image",{staticClass:"item-img",attrs:{src:e.LOGO}}),i("view",{staticClass:"item-name"},[t._v(t._s(e.NAME))])])}))])})],2)],1)])},staticRenderFns:[]};e.a=a},function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{},[i("view",{directives:[{name:"show",rawName:"v-show",value:0==t.flag,expression:"flag==0"}],staticClass:"box"},[i("view",{staticClass:"top"},[i("swiperTemp",{attrs:{imgUrl:t.imgUrl,mpcomid:"bLp-0"}})],1),t._m(0),i("view",{staticClass:"goods-list"},[i("view",{staticClass:"list-title"},[i("label",{staticClass:"iconfont jingxuan"},[t._v("")]),t._v("精选产品\n\t\t\t")],1),i("view",{staticClass:"goods-items"},[i("product-list",{attrs:{mpcomid:"EIM-1"}})],1)])]),i("view",{directives:[{name:"show",rawName:"v-show",value:1==t.flag,expression:"flag==1"}],staticClass:"box2"},[i("searchTemp",{attrs:{mpcomid:"0LB-2"}}),i("leftCategory",{attrs:{height:t.height,mpcomid:"LUl-3"}})],1),i("view",{directives:[{name:"show",rawName:"v-show",value:2==t.flag,expression:"flag==2"}],staticClass:"box3"},[t._v("\n\t\t2\n\t")]),i("view",{directives:[{name:"show",rawName:"v-show",value:3==t.flag,expression:"flag==3"}],staticClass:"box4"},[t._v("\n\t\t3\n\t")]),i("view",{staticClass:"bottomTab"},t._l(t.bottomTab,function(e,a){return i("view",{staticClass:"index item ",class:{active:a==t.clickindex},attrs:{eventid:"k9X-0-"+a},on:{click:function(e){t.tab(a)}}},[i("view",{staticClass:"imgBox"},[i("image",{attrs:{src:a==t.clickindex?e.selectImg:e.imgUrl,mode:"aspectFit"}})]),i("view",{staticClass:"title",class:{active:a==t.clickindex}},[t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"lists"},[i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480",mode:""}}),i("text",[t._v("数码")])]),i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480",mode:""}}),i("text",[t._v("家居")])]),i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480",mode:""}}),i("text",[t._v("厨房")])]),i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480",mode:""}}),i("text",[t._v("箱包")])]),i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480",mode:""}}),i("text",[t._v("家电")])]),i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480",mode:""}}),i("text",[t._v("户外")])]),i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480",mode:""}}),i("text",[t._v("家纺")])]),i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480",mode:""}}),i("text",[t._v("配饰")])])])}]};e.a=a}],[64]);
});
require('pages/index/store/store.js');
__wxRoute = 'pages/index/news/news';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/news/news.js';

define('pages/index/news/news.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([40],{88:function(t,e,i){"use strict";var n=a(i(1)),s=a(i(89));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},89:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(91),s=i.n(n),a=i(92);var u=function(t){i(90)},c=i(0)(s.a,a.a,u,null,null);e.default=c.exports},90:function(t,e){},91:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=a(i(5)),s=a(i(6));function a(t){return t&&t.__esModule?t:{default:t}}e.default={components:{newsListTemp:n.default,swiperTemp:s.default},data:function(){return{imgUrl:[{id:1,url:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480"},{id:2,url:"http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480"},{id:3,url:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480"}],id:1,xuanze:[{item:"全部",id:1},{item:"热点资讯",id:2},{item:"行业观点",id:3}],lists:[]}},onLoad:function(){var e=this;t.showLoading(),t.request({url:"https://unidemo.dcloud.net.cn/api/news",method:"GET",data:{},success:function(i){e.lists=i.data,console.log(i),t.hideLoading()},fail:function(){},complete:function(){}})},methods:{openinfo:function(e){var i=e.currentTarget.dataset.newsid;t.navigateTo({url:"info/info?newsid="+i})},fresh:function(t){this.id=t}}}}).call(e,i(2).default)},92:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("swiperTemp",{attrs:{imgUrl:t.imgUrl,mpcomid:"Bdz-0"}}),i("view",{staticClass:"tiaojian"},t._l(t.xuanze,function(e,n){return i("view",{key:e.id,class:t.id==e.id?"active":"",attrs:{eventid:"9JM-0-"+n},on:{click:function(i){t.fresh(e.id)}}},[t._v("\n\t\t"+t._s(e.item)+"\n\t\t\t\n\t\t")])})),i("newsListTemp",{attrs:{newsList:t.lists,mpcomid:"xUK-1"}})],1)},staticRenderFns:[]};e.a=n}},[88]);
});
require('pages/index/news/news.js');
__wxRoute = 'pages/index/news/info/info';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/news/info/info.js';

define('pages/index/news/info/info.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([41],{93:function(t,e,n){"use strict";var a=s(n(1)),i=s(n(94));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(96),i=n.n(a),s=n(97);var o=function(t){n(95)},r=n(0)(i.a,s.a,o,null,null);e.default=r.exports},95:function(t,e){},96:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(7),s=(a=i)&&a.__esModule?a:{default:a};e.default={components:{writemarkTemp:s.default},data:function(){return{title:"",string:"",imgUrl:""}},onLoad:function(e){var n=this;t.showLoading(),console.log(e),t.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+e.newsid,method:"GET",data:{},success:function(e){console.log(e),n.title=e.data.title,n.string=e.data.content,n.imgUrl=e.data.cover,t.hideLoading()},fail:function(){},complete:function(){}})}}}).call(e,n(2).default)},97:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"content"},[n("view",{staticClass:"banner"},[n("image",{staticClass:"bannerImg",attrs:{src:t.imgUrl,mode:""}})]),n("view",{staticClass:"title"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),n("rich-text",{staticClass:"richtext",attrs:{nodes:t.string,mpcomid:"YkQ-0"}},[t._v("\n\t\t\t"+t._s(t.string)+"\n\t\t")]),n("view",{staticClass:"bottom"},[n("writemarkTemp",{attrs:{mpcomid:"T4g-1"}})],1)],1)])},staticRenderFns:[]};e.a=a}},[93]);
});
require('pages/index/news/info/info.js');
__wxRoute = 'pages/index/knowledge/knowledge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/knowledge/knowledge.js';

define('pages/index/knowledge/knowledge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([45],{100:function(t,s){},101:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var i,a=e(3),n=(i=a)&&i.__esModule?i:{default:i};s.default={components:{searchTemp:n.default},data:function(){return{id:1,xuanze:[{item:"最新",id:1},{item:"推荐",id:2},{item:"我的",id:3}]}},methods:{fresh:function(t){this.id=t},question:function(){t.navigateTo({url:"./question/question",success:function(t){},fail:function(){},complete:function(){}})},replay:function(){t.navigateTo({url:"./reply/reply",success:function(t){},fail:function(){},complete:function(){}})},moreply:function(){t.navigateTo({url:"./morereply/morereply",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(s,e(2).default)},102:function(t,s,e){"use strict";var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",[e("searchTemp",{attrs:{mpcomid:"0Dk-0"}}),e("view",{staticClass:"tiaojian"},t._l(t.xuanze,function(s,i){return e("view",{key:s.id,class:t.id==s.id?"active":"",attrs:{eventid:"qry-0-"+i},on:{click:function(e){t.fresh(s.id)}}},[t._v("\n\t\t\t"+t._s(s.item)+"\n\n\t\t")])})),e("view",{staticClass:"questions"},[e("view",{staticClass:"question-item"},[e("view",{staticClass:"question-item-top"},[e("text",{staticClass:"ques twoLines"},[t._v("私募应该看的几个指标夏普真的有意义么钱钱钱钱钱钱钱钱钱钱钱？")]),e("view",{staticClass:"req",attrs:{eventid:"Af4-1"},on:{click:t.replay}},[t._v("\n\t\t\t\t\t回答\n\t\t\t\t")])]),e("view",{staticClass:"question-item-bot"},[e("text",{staticClass:"time"},[t._v("2018-07-07 12:10")]),e("view",{staticClass:"more-req",attrs:{eventid:"e9m-2"},on:{click:t.moreply}},[t._v("\n\t\t\t\t\t更多 "),e("label",{staticClass:"iconfont",attrs:{type:""}},[t._v("")])],1)])]),e("view",{staticClass:"question-item"},[t._m(0),e("view",{staticClass:"question-item-bot"},[e("text",{staticClass:"time"},[t._v("2018-07-07 12:10")]),e("view",{staticClass:"more-req"},[t._v("\n\t\t\t\t\t更多 "),e("label",{staticClass:"iconfont",attrs:{type:""}},[t._v("")])],1)])]),e("view",{staticClass:"question-item"},[t._m(1),e("view",{staticClass:"question-item-bot"},[e("text",{staticClass:"time"},[t._v("2018-07-07 12:10")]),e("view",{staticClass:"more-req"},[t._v("\n\t\t\t\t\t更多 "),e("label",{staticClass:"iconfont",attrs:{type:""}},[t._v("")])],1)])]),e("view",{staticClass:"question-item"},[t._m(2),e("view",{staticClass:"question-item-bot"},[e("text",{staticClass:"time"},[t._v("2018-07-07 12:10")]),e("view",{staticClass:"more-req"},[t._v("\n\t\t\t\t\t更多 "),e("label",{staticClass:"iconfont",attrs:{type:""}},[t._v("")])],1)])]),e("view",{staticClass:"question-item"},[t._m(3),e("view",{staticClass:"question-item-bot"},[e("text",{staticClass:"time"},[t._v("2018-07-07 12:10")]),e("view",{staticClass:"more-req"},[t._v("\n\t\t\t\t\t\t\t\t更多 "),e("label",{staticClass:"iconfont",attrs:{type:""}},[t._v("")])],1)])]),e("view",{staticClass:"question-item"},[t._m(4),e("view",{staticClass:"question-item-bot"},[e("text",{staticClass:"time"},[t._v("2018-07-07 12:10")]),e("view",{staticClass:"more-req"},[t._v("\n\t\t\t\t\t\t\t\t更多 "),e("label",{staticClass:"iconfont",attrs:{type:""}},[t._v("")])],1)])]),e("view",{staticClass:"question-item"},[t._m(5),e("view",{staticClass:"question-item-bot"},[e("text",{staticClass:"time"},[t._v("2018-07-07 12:10")]),e("view",{staticClass:"more-req"},[t._v("\n\t\t\t\t\t更多 "),e("label",{staticClass:"iconfont",attrs:{type:""}},[t._v("")])],1)])]),e("view",{staticClass:"question-item"},[t._m(6),e("view",{staticClass:"question-item-bot"},[e("text",{staticClass:"time"},[t._v("2018-07-07 12:10")]),e("view",{staticClass:"more-req"},[t._v("\n\t\t\t\t\t更多 "),e("label",{staticClass:"iconfont",attrs:{type:""}},[t._v("")])],1)])])]),e("view",{staticClass:"questionBox"},[e("view",{staticClass:"question",attrs:{eventid:"APG-3"},on:{click:t.question}},[e("label",{staticClass:"iconfont"},[t._v("")]),t._v("我要提问\n\t\t")],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"question-item-top"},[s("text",{staticClass:"ques"},[this._v("如何选择固定收益类的理财产品？")]),s("view",{staticClass:"req"},[this._v("\n\t\t\t\t\t回答\n\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"question-item-top"},[s("text",{staticClass:"ques"},[this._v("如何选择固定收益类的理财产品？")]),s("view",{staticClass:"req"},[this._v("\n\t\t\t\t\t回答\n\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"question-item-top"},[s("text",{staticClass:"ques"},[this._v("如何选择固定收益类的理财产品？")]),s("view",{staticClass:"req"},[this._v("\n\t\t\t\t\t回答\n\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"question-item-top"},[s("text",{staticClass:"ques"},[this._v("如何选择固定收益类的理财产品？")]),s("view",{staticClass:"req"},[this._v("\n\t\t\t\t\t\t\t\t回答\n\t\t\t\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"question-item-top"},[s("text",{staticClass:"ques"},[this._v("如何选择固定收益类的理财产品？")]),s("view",{staticClass:"req"},[this._v("\n\t\t\t\t\t\t\t\t回答\n\t\t\t\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"question-item-top"},[s("text",{staticClass:"ques"},[this._v("如何选择固定收益类的理财产品？")]),s("view",{staticClass:"req"},[this._v("\n\t\t\t\t\t回答\n\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"question-item-top"},[s("text",{staticClass:"ques"},[this._v("如何选择固定收益类的理财产品？")]),s("view",{staticClass:"req"},[this._v("\n\t\t\t\t\t回答\n\t\t\t\t")])])}]};s.a=i},98:function(t,s,e){"use strict";var i=n(e(1)),a=n(e(99));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},99:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(101),a=e.n(i),n=e(102);var c=function(t){e(100)},l=e(0)(a.a,n.a,c,null,null);s.default=l.exports}},[98]);
});
require('pages/index/knowledge/knowledge.js');
__wxRoute = 'pages/index/knowledge/question/question';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/knowledge/question/question.js';

define('pages/index/knowledge/question/question.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([43],{103:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(104));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},104:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(106),i=s.n(a),n=s(107);var c=function(t){s(105)},l=s(0)(i.a,n.a,c,null,null);e.default=l.exports},105:function(t,e){},106:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{goback:function(){t.navigateBack({})}}}}).call(e,s(2).default)},107:function(t,e,s){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("view",{staticClass:"topBox"},[e("view",{staticClass:"top"},[e("view",{staticClass:"go-back iconfont",attrs:{eventid:"bBr-0"},on:{click:this.goback}},[this._v("\n\t\t\t\t\t\n\t\t\t\t")]),e("view",{staticClass:"middle"},[this._v("\n\t\t\t\t\t发布问题\n\t\t\t\t")]),e("view",{staticClass:"share iconfont"})]),this._m(0)]),e("view",{staticClass:"questionBox"},[e("view",{staticClass:"question"},[e("label",{staticClass:"iconfont"},[this._v("")]),this._v("提交\n\t\t")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"section"},[e("textarea",{staticClass:"textare",attrs:{value:"",placeholder:"123",maxlength:"200"}})])}]};e.a=a}},[103]);
});
require('pages/index/knowledge/question/question.js');
__wxRoute = 'pages/index/knowledge/reply/reply';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/knowledge/reply/reply.js';

define('pages/index/knowledge/reply/reply.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([42],{108:function(t,s,e){"use strict";var a=n(e(1)),i=n(e(109));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},109:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(111),i=e.n(a),n=e(112);var c=function(t){e(110)},l=e(0)(i.a,n.a,c,null,null);s.default=l.exports},110:function(t,s){},111:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}}}},112:function(t,s,e){"use strict";var a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("view",[s("view",{staticClass:" color-gray"},[s("view",{staticClass:"box"},[this._m(0),this._m(1),s("view",{staticClass:"questionBox"},[s("view",{staticClass:"question"},[s("label",{staticClass:"iconfont"},[this._v("")]),this._v("提交\n\t\t\t\t\t\t")],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"quesBox"},[s("view",{staticClass:"mark"},[s("view",{staticClass:"avator-left"},[s("image",{attrs:{src:"../../../../static/image/invest/u762.png"}})]),s("view",{staticClass:"mark-right"},[s("view",{staticClass:"mark-top"},[this._v("\n\t\t\t\t\t\t\t秀实东区寄秀实东区寄秀?\n\t\t\t\t\t\t")]),s("view",{staticClass:"mark-bot"},[s("view",{staticClass:"mark-top-left"},[s("view",{staticClass:"position"},[this._v("理财师")]),s("view",{staticClass:"name"},[this._v("李明")]),s("view",{staticClass:"time"},[this._v("9小时前")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"repBox"},[s("view",{staticClass:"repTop"},[s("view",{staticClass:"iconfont avator"},[this._v("")]),s("view",{staticClass:"position1"},[this._v("理财师")]),s("view",{staticClass:"name1"},[this._v("赵丽颖")])]),s("view",{staticClass:"section"},[s("textarea",{staticClass:"textare",attrs:{value:"",placeholder:"123",maxlength:"200"}})])])}]};s.a=a}},[108]);
});
require('pages/index/knowledge/reply/reply.js');
__wxRoute = 'pages/index/knowledge/morereply/morereply';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/knowledge/morereply/morereply.js';

define('pages/index/knowledge/morereply/morereply.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([44],{113:function(t,s,i){"use strict";var e=n(i(1)),a=n(i(114));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},114:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(116),a=i.n(e),n=i(117);var c=function(t){i(115)},l=i(0)(a.a,n.a,c,null,null);s.default=l.exports},115:function(t,s){},116:function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{reply:function(){t.navigateTo({url:"../reply/reply",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(s,i(2).default)},117:function(t,s,i){"use strict";var e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("view",[s("view",{staticClass:" color-gray"},[s("view",{staticClass:"box"},[this._m(0),this._m(1),s("view",{staticClass:"questionBox"},[s("view",{staticClass:"question",attrs:{eventid:"yNH-0"},on:{click:this.reply}},[s("label",{staticClass:"iconfont"},[this._v("")]),this._v("回答\n\t\t\t\t")],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"quesBox"},[s("view",{staticClass:"mark"},[s("view",{staticClass:"avator-left"},[s("image",{attrs:{src:"../../../../static/image/invest/u762.png"}})]),s("view",{staticClass:"mark-right"},[s("view",{staticClass:"mark-top"},[this._v("\n\t\t\t\t\t\t\t秀实东区寄秀实东区寄秀?\n\t\t\t\t\t\t")]),s("view",{staticClass:"mark-bot"},[s("view",{staticClass:"mark-top-left"},[s("view",{staticClass:"position"},[this._v("理财师")]),s("view",{staticClass:"name"},[this._v("李明")]),s("view",{staticClass:"time"},[this._v("9小时前")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"repBox"},[s("view",{staticClass:"repLeft"},[s("view",{staticClass:"iconfont avator"},[this._v("")])]),s("view",{staticClass:"repRignt"},[s("view",{staticClass:"repRTop"},[s("view",{staticClass:"position"},[this._v("\n\t\t\t\t\t\t理财师\n\t\t\t\t\t")]),s("view",{staticClass:"name"},[this._v("\n\t\t\t\t\t\t黎明\n\t\t\t\t\t")])]),s("view",{staticClass:"repRMid time"},[this._v("\n\t\t\t\t\t\t2019-10-10\n\t\t\t\t\t")]),s("view",{staticClass:"repRBot"},[this._v("\n\t\t\t\t\t\t年哈啊看看风景德拉费精力对年哈啊看看风景德拉费精力对付年哈啊看看风景德拉费精力对付付\n\t\t\t\t\t")])])])}]};s.a=e}},[113]);
});
require('pages/index/knowledge/morereply/morereply.js');
__wxRoute = 'pages/index/huodong/huodong';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/huodong/huodong.js';

define('pages/index/huodong/huodong.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([48],{118:function(t,e,i){"use strict";var n=a(i(1)),s=a(i(119));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},119:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(121),s=i.n(n),a=i(122);var c=function(t){i(120)},o=i(0)(s.a,a.a,c,null,null);e.default=o.exports},120:function(t,e){},121:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:[]}},onLoad:function(){var e=this;t.showLoading(),t.request({url:"https://unidemo.dcloud.net.cn/api/news",method:"GET",data:{},success:function(i){e.list=i.data,console.log(i),t.hideLoading()},fail:function(){},complete:function(){}})},methods:{toPeizhi:function(){t.navigateTo({url:"peizhi/zcpeizhi",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(e,i(2).default)},122:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"activity"},t._l(t.list,function(e,n){return i("view",{key:n,staticClass:"activity-item",attrs:{eventid:"PN6-0-"+n},on:{click:t.toPeizhi}},[i("view",{staticClass:"dingwei"},[t._v("\n\t\t\t\t进行中\n\t\t\t")]),i("view",{staticClass:"imgBox"},[i("image",{attrs:{src:e.author_avatar,mode:""}})]),i("view",{staticClass:"content"},[t._m(0,!0),i("view",{staticClass:"mid twoLines"},[t._v("\n\t\t\t\t\t大类资产配置大类资产配置大类资产配置大类资产配置大类资产配置大类资产配置大类资产配置\n\t\t\t\t")]),i("view",{staticClass:"bot"},[i("view",{staticClass:"iconfont"},[t._v("")]),i("view",{staticClass:"address"},[t._v(t._s(e.column_name))])])])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"top"},[e("view",{staticClass:"title"},[this._v("\n\t\t\t\t\t\t大类资产配置\n\t\t\t\t\t")]),e("view",{staticClass:"time"},[this._v("\n\t\t\t\t\t\t2018-1-20\n\t\t\t\t\t")])])}]};e.a=n}},[118]);
});
require('pages/index/huodong/huodong.js');
__wxRoute = 'pages/index/huodong/peizhi/zcpeizhi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/huodong/peizhi/zcpeizhi.js';

define('pages/index/huodong/peizhi/zcpeizhi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([47],{123:function(e,t,n){"use strict";var u=a(n(1)),r=a(n(124));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,u.default)(r.default))},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(126),r=n.n(u),a=n(127);var c=function(e){n(125)},i=n(0)(r.a,a.a,c,null,null);t.default=i.exports},125:function(e,t){},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},127:function(e,t,n){"use strict";var u={render:function(){var e=this.$createElement;return(this._self._c||e)("view")},staticRenderFns:[]};t.a=u}},[123]);
});
require('pages/index/huodong/peizhi/zcpeizhi.js');
__wxRoute = 'pages/product/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/product.js';

define('pages/product/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([24],{128:function(t,i,e){"use strict";var s=n(e(1)),a=n(e(129));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},129:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(131),a=e.n(s),n=e(132);var c=function(t){e(130)},o=e(0)(a.a,n.a,c,null,null);i.default=o.exports},130:function(t,i){},131:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0});var s,a=e(3),n=(s=a)&&s.__esModule?s:{default:s};i.default={components:{searchTemp:n.default},data:function(){return{id:1,xuanze:[{item:"全部",id:1},{item:"业绩基准",id:2},{item:"投资期限",id:3},{item:"起投金额",id:4}]}},onReady:function(t){},methods:{toProduct:function(){t.navigateTo({url:"./productYemian/productYemian",success:function(t){},fail:function(){},complete:function(){}})},fresh:function(t){this.id=t}}}}).call(i,e(2).default)},132:function(t,i,e){"use strict";var s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",[e("view",{staticClass:"page-body"},[e("view",{staticClass:"page-section"},[e("view",{staticClass:"top"},[e("searchTemp",{staticClass:"search",attrs:{mpcomid:"VjL-0"}})],1),e("view",{staticClass:"tiaojian"},t._l(t.xuanze,function(i,s){return e("view",{key:i.id,class:t.id==i.id?"active":"",attrs:{eventid:"RCc-0-"+s},on:{click:function(e){t.fresh(i.id)}}},[t._v("\n\t\t\t\t\t"+t._s(i.item)+"\n\n\t\t\t\t")])})),e("view",{staticClass:"product-box"},[e("view",{staticClass:"product-item",attrs:{eventid:"gPX-1"},on:{click:t.toProduct}},[e("view",{staticClass:"product-title"},[t._v("\n\t\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t\t")]),t._m(0)]),e("view",{staticClass:"product-item",attrs:{eventid:"PjD-2"},on:{click:t.toProduct}},[e("view",{staticClass:"product-title"},[t._v("\n\t\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t\t")]),t._m(1)])])])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"product-detail"},[e("view",{staticClass:"item"},[e("view",{staticClass:"large-size color item-top"},[t._v("\n\t\t\t\t\t\t\t\t8%-9.5%\n\t\t\t\t\t\t\t")]),e("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t业绩比较基准\n\t\t\t\t\t\t\t")])]),e("view",{staticClass:"item"},[e("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t\t")]),e("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t\t")])]),e("view",{staticClass:"item"},[e("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t认购起点 \n\t\t\t\t\t\t\t")]),e("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])]),e("view",{staticClass:"item"},[e("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t剩余金额 \n\t\t\t\t\t\t\t")]),e("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"product-detail"},[e("view",{staticClass:"item"},[e("view",{staticClass:"large-size color item-top"},[t._v("\n\t\t\t\t\t\t\t\t8%-9.5%\n\t\t\t\t\t\t\t")]),e("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t业绩比较基准\n\t\t\t\t\t\t\t")])]),e("view",{staticClass:"item"},[e("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t\t")]),e("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t\t")])]),e("view",{staticClass:"item"},[e("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t认购起点 \n\t\t\t\t\t\t\t")]),e("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])]),e("view",{staticClass:"item"},[e("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t剩余金额 \n\t\t\t\t\t\t\t")]),e("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])])])}]};i.a=s}},[128]);
});
require('pages/product/product.js');
__wxRoute = 'pages/product/productYemian/productYemian';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productYemian.js';

define('pages/product/productYemian/productYemian.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([10],{133:function(t,i,a){"use strict";var s=n(a(1)),e=n(a(134));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},134:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(136),e=a.n(s),n=a(137);var c=function(t){a(135)},l=a(0)(e.a,n.a,c,null,null);i.default=l.exports},135:function(t,i){},136:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{}},methods:{goback:function(){t.navigateBack()},toProductDetail:function(){t.navigateTo({url:"./productDetail/productDetail",success:function(t){},fail:function(){},complete:function(){}})},toWodelicaishi:function(){t.navigateTo({url:"./yuyue/xuanzekehu",success:function(t){},fail:function(){},complete:function(){}})},toPinglun:function(){t.navigateTo({url:"./pinglun/pinglun",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(i,a(2).default)},137:function(t,i,a){"use strict";var s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("view",{staticClass:"topBox"},[a("view",{staticClass:"top"},[a("view",{staticClass:"go-back iconfont",attrs:{eventid:"fKs-0"},on:{click:t.goback}},[t._v("\n\t\t\t\t\n\t\t\t")]),a("view",{staticClass:"middle"},[t._v("\n\t\t\t\t秀实—东雀嘉熠一号收益好转\n\n\t\t\t")]),a("view",{staticClass:"share iconfont"},[t._v("\n\t\t\t\t\n\t\t\t")])]),a("view",{staticClass:"second-title"},[t._v("\n\t\t\t契约型私募基金\n\t\t")]),t._m(0)]),a("view",{staticClass:"contentBox"},[a("view",{staticClass:"product-item"},[t._m(1),t._m(2),a("view",{staticClass:"button-group"},[a("view",{},[t._v("\n\t\t\t\t\t产品备案查询\n\t\t\t\t")]),a("view",{attrs:{eventid:"7yo-1"},on:{click:t.toProductDetail}},[t._v("\n\t\t\t\t\t产品详情\n\t\t\t\t")])])]),t._m(3),t._m(4),a("view",{staticClass:"more-mark"},[a("label",{staticClass:"iconfont"},[t._v("")]),t._v("查看更多评论")],1)]),a("view",{staticClass:"bottom"},[a("view",{staticClass:"bottom-tab"},[a("view",{staticClass:"bottom-item",attrs:{eventid:"aiR-2"},on:{click:t.toWodelicaishi}},[t._m(5),a("view",{staticClass:"bottom-text"},[t._v("我的预约")])]),t._m(6),a("view",{staticClass:"bottom-item",attrs:{eventid:"4La-3"},on:{click:t.toPinglun}},[t._m(7),a("view",{staticClass:"bottom-text"},[t._v("写评论")])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"videoBox"},[i("video",{staticClass:"video",attrs:{src:"",controls:"",poster:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/banner.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"product-title"},[i("view",{staticClass:"title uni-font17"},[this._v("\n\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"product-detail"},[i("view",{staticClass:"item"},[i("view",{staticClass:"large-size color item-top"},[this._v("\n\t\t\t\t\t\t8%-9.5%\n\t\t\t\t\t")]),i("view",{staticClass:"item-bottom"},[this._v("\n\t\t\t\t\t\t业绩比较基准\n\t\t\t\t\t")])]),i("view",{staticClass:"item"},[i("view",{staticClass:"size item-top"},[this._v("\n\t\t\t\t\t\t产品期限\n\t\t\t\t\t")]),i("view",{staticClass:"item-bottom"},[this._v("\n\t\t\t\t\t\t12个月\n\t\t\t\t\t")])]),i("view",{staticClass:"item"},[i("view",{staticClass:"size item-top"},[this._v("\n\t\t\t\t\t\t认购起点\n\t\t\t\t\t")]),i("view",{staticClass:"item-bottom"},[this._v("\n\t\t\t\t\t\t50万元\n\t\t\t\t\t")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"contentMid"},[i("view",{staticClass:"videoDetail uni-font17"},[i("view",{},[this._v("\n\t\t\t\t\t相关评论\n\t\t\t\t")]),i("view",{staticClass:"right"},[i("view",{staticClass:"iconfont"},[this._v("\n\t\t\t\t\t\t\n\t\t\t\t\t")]),i("view",{},[this._v("\n\t\t\t\t\t\t2345\n\t\t\t\t\t")])])]),i("view",{staticClass:"label"},[i("view",{staticClass:"label-item"},[this._v("国企大机构背景")]),i("view",{staticClass:"label-item"},[this._v("股东实力雄厚")]),i("view",{staticClass:"label-item"},[this._v("国企大机构背景")]),i("view",{staticClass:"label-item"},[this._v("股东实力雄厚")])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"contentBot"},[a("view",{staticClass:"mark"},[a("view",{staticClass:"avator-left"},[a("image",{attrs:{src:"../../../static/image/invest/u762.png"}})]),a("view",{staticClass:"mark-right"},[a("view",{staticClass:"mark-top"},[a("view",{staticClass:"mark-top-left"},[a("view",{staticClass:"position"},[t._v("理财师")]),a("view",{staticClass:"name"},[t._v("李明")])]),a("view",{staticClass:"star"},[a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})])])]),a("view",{staticClass:"time"},[t._v("9小时前")]),a("view",{staticClass:"mark-bot twoLines"},[t._v("\n\t\t\t\t\t\t秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄\n\t\t\t\t\t")]),a("view",{staticClass:"mark-images"},[a("image",{staticClass:"mark-image",attrs:{src:"../../../static/image/indexImg/shangcheng/fenlei/dianshi.png"}}),a("image",{staticClass:"mark-image",attrs:{src:"../../../static/image/indexImg/shangcheng/fenlei/dianshi.png"}}),a("image",{staticClass:"mark-image",attrs:{src:"../../../static/image/indexImg/shangcheng/fenlei/dianshi.png"}}),a("image",{staticClass:"mark-image",attrs:{src:"../../../static/image/indexImg/shangcheng/fenlei/dianshi.png"}})])])]),a("view",{staticClass:"mark"},[a("view",{staticClass:"avator-left"},[a("image",{attrs:{src:"../../../static/image/invest/u762.png"}})]),a("view",{staticClass:"mark-right"},[a("view",{staticClass:"mark-top"},[a("view",{staticClass:"mark-top-left"},[a("view",{staticClass:"position"},[t._v("理财师")]),a("view",{staticClass:"name"},[t._v("李明")])]),a("view",{staticClass:"star"},[a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})])])]),a("view",{staticClass:"time"},[t._v("9小时前")]),a("view",{staticClass:"mark-bot twoLines"},[t._v("\n\t\t\t\t\t\t秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄\n\t\t\t\t\t")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"bottom-icon"},[i("image",{staticClass:"bottom-icon-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/wodeyuyunweixuanzhon.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"bottom-item"},[i("view",{staticClass:"bottom-icon"},[i("image",{staticClass:"bottom-icon-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/shoucangweixuanzhong.png"}})]),i("view",{staticClass:"bottom-text"},[this._v("收藏")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"bottom-icon"},[i("image",{staticClass:"bottom-icon-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xiepinglunweixuanzhong.png"}})])}]};i.a=s}},[133]);
});
require('pages/product/productYemian/productYemian.js');
__wxRoute = 'pages/product/productYemian/productDetail/productDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/productDetail.js';

define('pages/product/productYemian/productDetail/productDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([22],{138:function(t,s,i){"use strict";var e=n(i(1)),a=n(i(139));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},139:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(141),a=i.n(e),n=i(142);var c=function(t){i(140)},l=i(0)(a.a,n.a,c,null,null);s.default=l.exports},140:function(t,s){},141:function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{goback:function(){t.navigateBack()},toProductDetail:function(){t.navigateTo({url:"./productDetail/productDetail",success:function(t){},fail:function(){},complete:function(){}})},toYuyueliucheng:function(){t.navigateTo({url:"./simuYuyue/simuYuyue",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(s,i(2).default)},142:function(t,s,i){"use strict";var e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",[i("view",{staticClass:"topBox"},[i("view",{staticClass:"top"},[i("view",{staticClass:"go-back iconfont",attrs:{eventid:"p2u-0"},on:{click:t.goback}},[t._v("\n\t\t\t\t\n\t\t\t")]),i("view",{staticClass:"middle"},[t._v("\n\t\t\t\t秀实—东雀嘉熠一号收益好转\n\n\t\t\t")]),i("view",{staticClass:"share iconfont"},[t._v("\n\t\t\t\t\n\t\t\t")])]),t._m(0),t._m(1)]),t._m(2),t._m(3),i("view",{staticClass:"btn",attrs:{eventid:"rbE-1"},on:{click:t.toYuyueliucheng}},[t._v("预约")])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"second-box"},[s("view",{staticClass:"second-title"},[this._v("\n\t\t\t\t契约型私募基金\n\t\t\t")]),s("view",{staticClass:"persent"},[this._v("8%~9.5%")]),s("view",{staticClass:"level"},[this._v("业绩比较基准")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"class-box"},[s("view",{staticClass:"class-item"},[s("view",{staticClass:"class-item-top"},[this._v("产品期限")]),s("view",{staticClass:"class-item-bottom"},[this._v("12个月")])]),s("view",{staticClass:"class-item class-item-2"},[s("view",{staticClass:"class-item-top"},[this._v("产品期限")]),s("view",{staticClass:"class-item-bottom"},[this._v("12个月")])]),s("view",{staticClass:"class-item"},[s("view",{staticClass:"class-item-top"},[this._v("产品期限")]),s("view",{staticClass:"class-item-bottom"},[this._v("12个月")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"contentBox"},[i("view",{staticClass:"content-item"},[i("view",{staticClass:"content-left"},[t._v("管理人")]),i("view",{staticClass:"content-right"},[t._v("鼎新资产管理有限公司")])]),i("view",{staticClass:"content-item"},[i("view",{staticClass:"content-left"},[t._v("托管人")]),i("view",{staticClass:"content-right"},[t._v("上海银行股份有限公司")])]),i("view",{staticClass:"content-item"},[i("view",{staticClass:"content-left"},[t._v("外包服务商")]),i("view",{staticClass:"content-right"},[t._v("财通基金管理有限公司")])]),i("view",{staticClass:"content-item"},[i("view",{staticClass:"content-left"},[t._v("分红方式")]),i("view",{staticClass:"content-right"},[t._v("按季付息，到期分配本金")])]),i("view",{staticClass:"content-item"},[i("view",{staticClass:"content-left"},[t._v("产品募集信息")]),i("view",{staticClass:"content-right"},[i("view",{staticClass:"right-item"},[t._v("\n\t\t\t\t\t账户名：财富同基金管理有限公司运营服务账户\n\t\t\t\t")]),i("view",{staticClass:"right-item"},[t._v("\n\t\t\t\t\t账号：132439483144890183\n\t\t\t\t")]),i("view",{staticClass:"right-item"},[t._v("\n\t\t\t\t\t开户行：中国工商银行上海老西门支行\n\t\t\t\t")])])]),i("view",{staticClass:"content-item"},[i("view",{staticClass:"content-left"},[t._v("产品投向")]),i("view",{staticClass:"content-right"},[i("view",{staticClass:"right-item"},[t._v("\n\t\t\t\t\t本基金主要投资与基金项目的有限合伙份额，或在基金业协会登记的\n\t\t\t\t\t私募管理人设立的有限合伙企业的有限合伙份额，在资金限制期间，可投资银行存款，银行理财产品\n\t\t\t\t\t货币基金，剩余期限先在一年以内的国债\n\t\t\t\t")])])]),i("view",{staticClass:"content-item"},[i("view",{staticClass:"content-left"},[t._v("产品投向")]),i("view",{staticClass:"content-right"},[i("view",{staticClass:"right-item"},[t._v("\n\t\t\t\t\t本基金主要投资与基金项目的有限合伙份额，或在基金业协会登记的\n\t\t\t\t\t私募管理人设立的有限合伙企业的有限合伙份额，在资金限制期间，可投资银行存款，银行理财产品\n\t\t\t\t\t货币基金，剩余期限先在一年以内的国债\n\t\t\t\t")])])]),i("view",{staticClass:"content-item"},[i("view",{staticClass:"content-left"},[t._v("产品投向")]),i("view",{staticClass:"content-right"},[i("view",{staticClass:"right-item"},[t._v("\n\t\t\t\t\t本基金主要投资与基金项目的有限合伙份额，或在基金业协会登记的\n\t\t\t\t\t私募管理人设立的有限合伙企业的有限合伙份额，在资金限制期间，可投资银行存款，银行理财产品\n\t\t\t\t\t货币基金，剩余期限先在一年以内的国债\n\t\t\t\t")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"file-box"},[s("view",{staticClass:"file-content"},[s("view",{staticClass:"icon"},[s("image",{staticClass:"icon-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.3-%E4%BA%A7%E5%93%81%E8%AF%A6%E6%83%85/android/drawable-xhdpi/fujian.png",mode:""}})]),s("view",{staticClass:"file"},[this._v("\n\t\t\t\t附件\n\t\t\t")])])])}]};s.a=e}},[138]);
});
require('pages/product/productYemian/productDetail/productDetail.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/simuYuyue';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/simuYuyue.js';

define('pages/product/productYemian/productDetail/simuYuyue/simuYuyue.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../common/manifest.js");
require("../../../../../common/vendor.js");
global.webpackJsonp([13],{143:function(t,i,e){"use strict";var n=a(e(1)),s=a(e(144));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},144:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(146),s=e.n(n),a=e(147);var c=function(t){e(145)},l=e(0)(s.a,a.a,c,null,null);i.default=l.exports},145:function(t,i){},146:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{}},methods:{toYuyue:function(){t.navigateTo({url:"./yuyue/yuyue",success:function(t){},fail:function(){},complete:function(){}})},toFengxianceping:function(){t.navigateTo({url:"./fenxianceping/simufengxianceping",success:function(t){},fail:function(){},complete:function(){}})},toRenzheng:function(){t.navigateTo({url:"./touzizherenzheng/touzizherenzheng",success:function(t){},fail:function(){},complete:function(){}})},toShuanglu:function(){t.navigateTo({url:"./shuanglu/shuanglu",success:function(t){},fail:function(){},complete:function(){}})},toShimingrenzheng:function(){t.navigateTo({url:"./shimingrenzheng/renzheng",success:function(t){},fail:function(){},complete:function(){}})},toHetong:function(){t.navigateTo({url:"./hetong/hetong",success:function(t){},fail:function(){},complete:function(){}})},toJiaokuan:function(){t.navigateTo({url:"./jiaokuan/jiaokuan",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(i,e(2).default)},147:function(t,i,e){"use strict";var n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"simu-box page"},[e("view",{staticClass:"uni-timeline",staticStyle:{padding:"30upx 20upx","background-color":"#fff"}},[e("view",{staticClass:"uni-timeline-item uni-timeline-first-item"},[t._m(0),e("view",{staticClass:"uni-timeline-item-content"},[e("view",{staticClass:"uni-timeline-item-content-title",attrs:{eventid:"diQ-0"},on:{click:t.toYuyue}},[t._v("\n\t\t\t\t\t预约成功\n\t\t\t\t")]),e("view",{staticClass:"datetime"},[t._v("\n\t\t\t\t\t你准备购买秀实东阙。。。\n\t\t\t\t")])])]),e("view",{staticClass:"uni-timeline-item"},[t._m(1),e("view",{staticClass:"uni-timeline-item-content"},[e("view",{staticClass:"uni-timeline-item-content-title",attrs:{eventid:"vPd-1"},on:{click:t.toShimingrenzheng}},[t._v("实名认证")]),e("view",{staticClass:"datetime"},[t._v("黎明12224324234323")])])]),e("view",{staticClass:"uni-timeline-item"},[e("view",{staticClass:"uni-timeline-item-divider"}),e("view",{staticClass:"uni-timeline-item-content"},[t._m(2),e("view",{staticClass:"datetime"},[t._v("稳健性（你的风险评级不合格，请"),e("view",{staticClass:"orange",attrs:{eventid:"oe8-2"},on:{click:t.toFengxianceping}},[t._v("\n\t\t\t\t\t\t重新测评\n\t\t\t\t\t")]),t._v("）")])])]),t._m(3),t._m(4),e("view",{staticClass:"uni-timeline-item"},[e("view",{staticClass:"uni-timeline-item-divider"}),e("view",{staticClass:"uni-timeline-item-content"},[e("view",{staticClass:"uni-timeline-item-content-title",attrs:{eventid:"Aq7-3"},on:{click:t.toRenzheng}},[t._v("合格投资者/专业投资者认证")])])]),e("view",{staticClass:"uni-timeline-item"},[e("view",{staticClass:"uni-timeline-item-divider"}),e("view",{staticClass:"uni-timeline-item-content"},[e("view",{staticClass:"uni-timeline-item-content-title"},[t._v("双录"),t._m(5),e("view",{staticClass:"datetime orange",attrs:{eventid:"rEy-4"},on:{click:t.toShuanglu}},[t._v("请点击此处进行双录")])])])]),e("view",{staticClass:"uni-timeline-item"},[e("view",{staticClass:"uni-timeline-item-divider"}),e("view",{staticClass:"uni-timeline-item-content"},[e("view",{staticClass:"uni-timeline-item-content-title",attrs:{eventid:"jGy-5"},on:{click:t.toHetong}},[t._v("签合同"),e("view",{staticClass:"datetime"},[t._v(" （该产品不支持线上双录）")])]),t._m(6),e("view",{staticClass:"datetime"},[t._v("风险揭示书")]),e("view",{staticClass:"datetime"},[t._v("基金合同")])])]),e("view",{staticClass:"uni-timeline-item"},[e("view",{staticClass:"uni-timeline-item-divider"}),e("view",{staticClass:"uni-timeline-item-content"},[e("view",{staticClass:"uni-timeline-item-content-title",attrs:{eventid:"a5d-6"},on:{click:t.toJiaokuan}},[t._v("打款，上传打款凭证")])])]),t._m(7),t._m(8)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"uni-timeline-item-divider"},[i("image",{staticClass:"divider-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/yuyunchenggongjihuo.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"uni-timeline-item-divider"},[i("image",{staticClass:"divider-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/shimingrenzhengjihuo.png"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"uni-timeline-item-content-title"},[this._v("风险测评 "),i("view",{staticClass:"ques-image-box"},[i("image",{staticClass:"ques-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/wenhao.png",mode:""}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"uni-timeline-item"},[i("view",{staticClass:"uni-timeline-item-divider"}),i("view",{staticClass:"uni-timeline-item-content"},[i("view",{staticClass:"uni-timeline-item-content-title"},[this._v("签风险不匹配告知书")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"uni-timeline-item "},[i("view",{staticClass:"uni-timeline-item-divider"}),i("view",{staticClass:"uni-timeline-item-content"},[i("view",{staticClass:"uni-timeline-item-content-title"},[this._v("购买"),i("view",{staticClass:"ques-image-box"},[i("image",{staticClass:"ques-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/wenhao.png",mode:""}})])]),i("view",{staticClass:"datetime"},[this._v("您购买的额度为100万"),i("view",{staticClass:"orange"},[this._v("\n\t\t\t\t\t修改\n\t\t\t\t")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"ques-image-box"},[i("image",{staticClass:"ques-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/wenhao.png",mode:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"datetime"},[this._v("税收声名"),i("view",{staticClass:"ques-image-box"},[i("image",{staticClass:"ques-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/wenhao.png",mode:""}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"uni-timeline-item"},[i("view",{staticClass:"uni-timeline-item-divider"}),i("view",{staticClass:"uni-timeline-item-content"},[i("view",{staticClass:"uni-timeline-item-content-title"},[this._v("客服回访")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"uni-timeline-item uni-timeline-last-item"},[i("view",{staticClass:"uni-timeline-item-divider"}),i("view",{staticClass:"uni-timeline-item-content"},[i("view",{staticClass:"uni-timeline-item-content-title"},[this._v("流程结束，请在*******查看收益")])])])}]};i.a=n}},[143]);
});
require('pages/product/productYemian/productDetail/simuYuyue/simuYuyue.js');
__wxRoute = 'pages/product/productYemian/yuyue/yuyueliebiao';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/yuyue/yuyueliebiao.js';

define('pages/product/productYemian/yuyue/yuyueliebiao.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([7],{148:function(t,i,s){"use strict";var e=n(s(1)),a=n(s(149));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},149:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(151),a=s.n(e),n=s(152);var c=function(t){s(150)},l=s(0)(a.a,n.a,c,null,null);i.default=l.exports},150:function(t,i){},151:function(t,i,s){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0});var e,a=s(3),n=(e=a)&&e.__esModule?e:{default:e};i.default={components:{searchTemp:n.default},data:function(){return{id:1}},onReady:function(t){},methods:{toProduct:function(){t.navigateTo({url:"./productYemian/productYemian",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(i,s(2).default)},152:function(t,i,s){"use strict";var e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("view",[i("view",{staticClass:"page-body"},[i("view",{staticClass:"page-section"},[i("view",{staticClass:"top"},[i("searchTemp",{attrs:{mpcomid:"C67-0"}})],1),this._m(0)])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("view",{staticClass:"product-box"},[s("view",{staticClass:"product-item"},[s("view",{staticClass:"product-title"},[t._v("\n\t\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t\t")]),s("view",{staticClass:"product-detail"},[s("view",{staticClass:"item"},[s("view",{staticClass:"large-size color item-top"},[t._v("\n\t\t\t\t\t\t\t\t200000亿\n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t可预约金额\n\t\t\t\t\t\t\t")])]),s("view",{staticClass:"item"},[s("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t预约人数\n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t12\n\t\t\t\t\t\t\t")])]),s("view",{staticClass:"item"},[s("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t预约金额 \n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])])])]),s("view",{staticClass:"product-item"},[s("view",{staticClass:"product-title"},[t._v("\n\t\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t\t")]),s("view",{staticClass:"product-detail"},[s("view",{staticClass:"item"},[s("view",{staticClass:"large-size color item-top"},[t._v("\n\t\t\t\t\t\t\t\t4亿5000万\n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t可预约金额\n\t\t\t\t\t\t\t")])]),s("view",{staticClass:"item"},[s("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t预约人数\n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t12\n\t\t\t\t\t\t\t")])]),s("view",{staticClass:"item"},[s("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t预约金额 \n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])])])]),s("view",{staticClass:"product-item"},[s("view",{staticClass:"product-title"},[t._v("\n\t\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t\t")]),s("view",{staticClass:"product-detail"},[s("view",{staticClass:"item"},[s("view",{staticClass:"large-size color item-top"},[t._v("\n\t\t\t\t\t\t\t\t4亿5000万\n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t可预约金额\n\t\t\t\t\t\t\t")])]),s("view",{staticClass:"item"},[s("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t预约人数\n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t12\n\t\t\t\t\t\t\t")])]),s("view",{staticClass:"item"},[s("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t预约金额 \n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])])])]),s("view",{staticClass:"product-item"},[s("view",{staticClass:"product-title"},[t._v("\n\t\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t\t")]),s("view",{staticClass:"product-detail"},[s("view",{staticClass:"item"},[s("view",{staticClass:"large-size color item-top"},[t._v("\n\t\t\t\t\t\t\t\t4亿5000万\n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t可预约金额\n\t\t\t\t\t\t\t")])]),s("view",{staticClass:"item"},[s("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t预约人数\n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t12\n\t\t\t\t\t\t\t")])]),s("view",{staticClass:"item"},[s("view",{staticClass:"size item-top"},[t._v("\n\t\t\t\t\t\t\t\t预约金额 \n\t\t\t\t\t\t\t")]),s("view",{staticClass:"item-bottom"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])])])])])}]};i.a=e}},[148]);
});
require('pages/product/productYemian/yuyue/yuyueliebiao.js');
__wxRoute = 'pages/product/productYemian/yuyue/xuanzekehu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/yuyue/xuanzekehu.js';

define('pages/product/productYemian/yuyue/xuanzekehu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([3],{153:function(a,t,e){"use strict";var i=n(e(1)),l=n(e(154));function n(a){return a&&a.__esModule?a:{default:a}}Page((0,i.default)(l.default))},154:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(156),l=e.n(i),n=e(158);var r=function(a){e(155)},m=e(0)(l.a,n.a,r,null,null);t.default=m.exports},155:function(a,t){},156:function(a,t,e){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0});var i,l=e(3),n=(i=l)&&i.__esModule?i:{default:i};e(157);t.default={components:{searchTemp:n.default},data:function(){return{title:"grid",lists:[{letter:"A",data:[{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿雅"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿雅"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿勒泰"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿克苏"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿克苏"}]},{letter:"B",data:[{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿雅"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿雅"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿勒泰"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿克苏"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿克苏"}]},{letter:"C",data:[{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿雅"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿雅"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿勒泰"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿克苏"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿克苏"}]},{letter:"D",data:[{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿雅"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿雅"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿勒泰"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿克苏"},{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿克苏"}]},{letter:"E",data:[{imageUrl:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png",name:"阿雅"},{imageUrl:"",name:"阿雅"},{imageUrl:"",name:"阿勒泰"},{imageUrl:"",name:"阿克苏"},{imageUrl:"",name:"阿克苏"}]},{letter:"F",data:[{imageUrl:"",name:"阿雅"},{imageUrl:"",name:"阿雅"},{imageUrl:"",name:"阿勒泰"},{imageUrl:"",name:"阿克苏"},{imageUrl:"",name:"阿克苏"}]},{letter:"G",data:[{imageUrl:"",name:"阿雅"},{imageUrl:"",name:"阿雅"},{imageUrl:"",name:"阿勒泰"},{imageUrl:"",name:"阿克苏"},{imageUrl:"",name:"阿克苏"}]},{letter:"O",data:[{imageUrl:"",name:"阿雅"},{imageUrl:"",name:"阿雅"},{imageUrl:"",name:"阿勒泰"},{imageUrl:"",name:"阿克苏"},{imageUrl:"",name:"阿克苏"}]},{letter:"P",data:[{imageUrl:"",name:"阿雅"},{imageUrl:"",name:"阿雅"},{imageUrl:"",name:"阿勒泰"},{imageUrl:"",name:"阿克苏"},{imageUrl:"",name:"阿克苏"}]}],touchmove:!1,touchmoveIndex:-1,itemHeight:16,winHeight:0,scrollViewId:"A",titleHeight:0,top:92}},onLoad:function(){var t=a.getSystemInfoSync().windowHeight;this.winHeight=2*t-92},methods:{touchStart:function(a){this.touchmove=!0;var t=a.touches[0].pageY;console.log(a);var e=Math.floor((t-this.top)/this.itemHeight);console.log(e),console.log(this.top);var i=this.lists[e];i&&(this.scrollViewId=i.letter,this.touchmoveIndex=e)},touchMove:function(a){var t=a.touches[0].pageY,e=Math.floor((t-this.top)/this.itemHeight),i=this.lists[e];i&&(this.scrollViewId=i.letter,this.touchmoveIndex=e)},touchEnd:function(){this.touchmove=!1,this.touchmoveIndex=-1},touchCancel:function(){this.touchmove=!1,this.touchmoveIndex=-1}}}}).call(t,e(2).default)},157:function(a,t,e){"use strict";a.exports={list:[{letter:"A",data:["阿克苏机场","阿拉山口机场","阿勒泰机场","阿里昆莎机场","安庆天柱山机场","澳门国际机场"]},{letter:"B",data:["保山机场","包头机场","北海福成机场","北京南苑机场","北京首都国际机场"]},{letter:"C",data:["长白山机场","长春龙嘉国际机场","常德桃花源机场","昌都邦达机场","长沙黄花国际机场","长治王村机场","常州奔牛机场","成都双流国际机场","赤峰机场"]},{letter:"D",data:["大理机场","大连周水子国际机场","大庆萨尔图机场","大同东王庄机场","达州河市机场","丹东浪头机场","德宏芒市机场","迪庆香格里拉机场","东营机场","敦煌机场"]},{letter:"E",data:["鄂尔多斯机场","恩施许家坪机场","二连浩特赛乌苏国际机场"]},{letter:"F",data:["阜阳西关机场","福州长乐国际机场"]},{letter:"G",data:["赣州黄金机场","格尔木机场","固原六盘山机场","广元盘龙机场","广州白云国际机场","桂林两江国际机场","贵阳龙洞堡国际机场"]},{letter:"H",data:["哈尔滨太平国际机场","哈密机场","海口美兰国际机场","海拉尔东山国际机场","邯郸机场","汉中机场","杭州萧山国际机场","合肥骆岗国际机场","和田机场","黑河机场","呼和浩特白塔国际机场","淮安涟水机场","黄山屯溪国际机场"]},{letter:"I",data:[]},{letter:"J",data:["济南遥墙国际机场","济宁曲阜机场","鸡西兴凯湖机场","佳木斯东郊机场","嘉峪关机场","锦州小岭子机场","景德镇机场","井冈山机场","九江庐山机场","九寨黄龙机场"]},{letter:"K",data:["喀什机场","克拉玛依机场","库车龟兹机场","库尔勒机场","昆明巫家坝国际机场"]},{letter:"L",data:["拉萨贡嘎机场","兰州中川机场","丽江三义机场","黎平机场","连云港白塔埠机场","临沧机场","临沂机场","林芝米林机场","柳州白莲机场","龙岩冠豸山机场","泸州蓝田机场","洛阳北郊机场"]},{letter:"M",data:["满洲里西郊机场","绵阳南郊机场","漠河古莲机场","牡丹江海浪机场"]},{letter:"N",data:["南昌昌北国际机场","南充高坪机场","南京禄口国际机场","南宁吴圩机场","南通兴东机场","南阳姜营机场","宁波栎社国际机场"]},{letter:"O",data:[]},{letter:"P",data:["普洱思茅机场"]},{letter:"Q",data:["齐齐哈尔三家子机场","秦皇岛山海关机场","青岛流亭国际机场","衢州机场","泉州晋江机场"]},{letter:"R",data:["日喀则和平机场"]},{letter:"S",data:["三亚凤凰国际机场","汕头外砂机场","上海虹桥国际机场","上海浦东国际机场","深圳宝安国际机场","沈阳桃仙国际机场","石家庄正定国际机场","苏南硕放国际机场"]},{letter:"T",data:["塔城机场","太原武宿国际机场","台州路桥机场 (黄岩机场)","唐山三女河机场","腾冲驼峰机场","天津滨海国际机场","通辽机场","铜仁凤凰机场"]},{letter:"U",data:[]},{letter:"V",data:[]},{letter:"W",data:["万州五桥机场","潍坊机场","威海大水泊机场","文山普者黑机场","温州永强国际机场","乌海机场","武汉天河国际机场","乌兰浩特机场","乌鲁木齐地窝堡国际机场","武夷山机场","梧州长洲岛机场"]},{letter:"X",data:["西安咸阳国际机场","西昌青山机场","锡林浩特机场","西宁曹家堡机场","西双版纳嘎洒机场","厦门高崎国际机场","香港国际机场","襄阳刘集机场","兴义机场","徐州观音机场"]},{letter:"Y",data:["延安二十里堡机场","盐城机场","延吉朝阳川机场","烟台莱山国际机场","宜宾菜坝机场","宜昌三峡机场","伊春林都机场","伊宁机场","义乌机场","银川河东机场","永州零陵机场","榆林榆阳机场","玉树巴塘机场","运城张孝机场"]},{letter:"Z",data:["湛江机场","昭通机场","郑州新郑国际机场","芷江机场","重庆江北国际机场","中卫香山机场","舟山朱家尖机场","珠海三灶机场"]}]}},158:function(a,t,e){"use strict";var i={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("view",{},[e("searchTemp",{attrs:{mpcomid:"aGB-0"}}),e("view",{staticClass:"page"},[e("scroll-view",{staticClass:"scrollList",style:{height:a.winHeight+"upx"},attrs:{"scroll-y":"","scroll-into-view":a.scrollViewId}},[e("view",{staticClass:"uni-list"},a._l(a.lists,function(t,i){return t.data[0]?e("block",{key:i},[e("view",{staticClass:"uni-list-cell-divider",attrs:{id:t.letter}},[a._v("\n\t\t\t\t\t\t"+a._s(t.letter)+"\n\t\t\t\t\t")]),a._l(t.data,function(i,l){return e("view",{key:l,staticClass:"uni-list-cell",class:t.data.length-1==l?"uni-list-cell-last":"",attrs:{"hover-class":"uni-list-cell-hover"}},[e("image",{staticClass:"uni-list-cell-image",attrs:{src:i.imageUrl}}),e("view",{staticClass:"uni-list-cell-navigate"},[a._v("\n\t\t\t\t\t\t\t"+a._s(i.name)+"\n\t\t\t\t\t\t")])])})],2):a._e()}))]),e("view",{staticClass:"uni-indexed-list-bar",class:a.touchmove?"active":"",style:{top:a.top+"px"},attrs:{eventid:"jJn-0"},on:{touchstart:a.touchStart,touchmove:a.touchMove,touchend:a.touchEnd,touchcancel:a.touchCancel}},a._l(a.lists,function(t,i){return e("text",{key:i,staticClass:"uni-indexed-list-text",class:a.touchmoveIndex==i?"active":"",style:{height:a.itemHeight+"px",lineHeight:a.itemHeight+"px"}},[a._v(a._s(t.letter))])})),a.touchmove?e("view",{staticClass:"uni-indexed-list-alert"},[a._v("\n\t\t\t"+a._s(a.lists[a.touchmoveIndex].letter)+"\n\t\t")]):a._e()],1)],1)},staticRenderFns:[]};t.a=i}},[153]);
});
require('pages/product/productYemian/yuyue/xuanzekehu.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.js';

define('pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([20],{159:function(t,s,e){"use strict";var i=n(e(1)),a=n(e(160));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},160:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(162),a=e.n(i),n=e(163);var v=function(t){e(161)},u=e(0)(a.a,n.a,v,null,null);s.default=u.exports},161:function(t,s){},162:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{toCepingjieguo:function(){t.navigateTo({url:"./cepingjieguo",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(s,e(2).default)},163:function(t,s,e){"use strict";var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"fxcp-box"},[s("view",{staticClass:"tishi"},[this._v("\n\t\t以下一系列问题可在您选择合适的私募基金前，协助评估您的风险承受你能力，\n\t\t理财方式和投资目标\n\t")]),this._m(0),s("view",{staticClass:"questionBox"},[s("view",{staticClass:"question",attrs:{eventid:"ais-0"},on:{click:this.toCepingjieguo}},[s("label",{staticClass:"iconfont"},[this._v("")]),this._v("提交\n\t\t")],1)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"ques-box"},[e("view",{staticClass:"ques-item"},[e("view",{staticClass:"ques-title"},[t._v("\n\t\t\t\t1.您的职业稳定性如何（）\n\t\t\t")]),e("view",{staticClass:"ques-answer-box"},[e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\tA.很稳定\n\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\tA.较稳定\n\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\tA.不稳定\n\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\tA.无业\n\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\tA.很稳定\n\t\t\t\t")])])]),e("view",{staticClass:"ques-item"},[e("view",{staticClass:"ques-title"},[t._v("\n\t\t\t\t\t1.您的职业稳定性如何（）\n\t\t\t\t")]),e("view",{staticClass:"ques-answer-box"},[e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.很稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.较稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.不稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.无业\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.很稳定\n\t\t\t\t\t")])])]),e("view",{staticClass:"ques-item"},[e("view",{staticClass:"ques-title"},[t._v("\n\t\t\t\t\t1.您的职业稳定性如何（）\n\t\t\t\t")]),e("view",{staticClass:"ques-answer-box"},[e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.很稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.较稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.不稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.无业\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.很稳定\n\t\t\t\t\t")])])]),e("view",{staticClass:"ques-item"},[e("view",{staticClass:"ques-title"},[t._v("\n\t\t\t\t\t1.您的职业稳定性如何（）\n\t\t\t\t")]),e("view",{staticClass:"ques-answer-box"},[e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.很稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.较稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.很稳定很稳定很稳定很稳定很稳定很稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.很稳定很稳定很稳定很稳定很稳定很稳定\n\t\t\t\t\t")])])]),e("view",{staticClass:"ques-item"},[e("view",{staticClass:"ques-title"},[t._v("\n\t\t\t\t\t1.您的职业稳定性如何（）\n\t\t\t\t")]),e("view",{staticClass:"ques-answer-box"},[e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.很稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.较稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.不稳定\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.无业\n\t\t\t\t\t")]),e("view",{staticClass:"ques-answer-item"},[t._v("\n\t\t\t\t\t\tA.很稳定\n\t\t\t\t\t")])])])])}]};s.a=i}},[159]);
});
require('pages/product/productYemian/productDetail/simuYuyue/fenxianceping/fengxianceping.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.js';

define('pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([19],{164:function(t,e,a){"use strict";var s=n(a(1)),i=n(a(165));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},165:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(167),i=a.n(s),n=a(168);var c=function(t){a(166)},l=a(0)(i.a,n.a,c,null,null);e.default=l.exports},166:function(t,e){},167:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{checked:!0}}}},168:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"smcp-box"},[a("view",{staticClass:"content1"},[t._v("风险提示：私募基金投资需要承担各类风险，本金可能遭受损失。同时，私募基金投资还要考虑市场风险、信用风险、流动性风险、操作风险等各类投资风险。您在基金认购过程中应当注意核对自己的风险识别和风险承受能力，选择与自己风险识别能力相匹配的私募基金。\n\t\n\t")]),t._m(0),a("view",{staticClass:"xunwen"},[a("view",{staticClass:"title"},[t._v("\n\t\t\t请确认您是否同时符合下列合格投资者条件\n\t\t")]),a("view",{staticClass:"ques-item"},[t._v("1、金融资产不低于300万元；")]),a("view",{staticClass:"ques-item"},[t._v(" 2、近三年本人年均收入不低于50万元的个人 （金融资产包括银行存款、股票、债券、基金份额、资产")]),a("view",{staticClass:"row1"},[a("label",{staticClass:"radio"},[a("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png"}}),t._v("\n\t\t\t\t是\n\t\t\t")]),a("label",{staticClass:"radio"},[a("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png"}}),t._v("\n\t\t\t\t否\n\t\t\t")])],1)]),t._m(1),a("view",{staticClass:"shengming"},[t._v("\n\t\t声明：本人已如实填写《投资者风险问卷调查（个人版）》，并了解了自己的风险承受类型和合适购买的产品类型                 \n\t")]),a("view",{staticClass:"questionBox"},[a("view",{staticClass:"question"},[a("label",{staticClass:"iconfont"},[t._v("")]),t._v("提交\n\t\t")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"sign-box"},[e("view",{},[this._v("请签字承诺您是为自己购买私募基金产品")]),e("view",{staticClass:"sign"},[this._v("黎明")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"id-message"},[a("view",{staticClass:"row"},[a("view",{staticClass:"name-key"},[t._v("\n\t\t\t\t姓名\n\t\t\t")]),a("view",{staticClass:"name-value"},[t._v("\n\t\t\t\tlily\n\t\t\t")])]),a("view",{staticClass:"row"},[a("view",{staticClass:"phone-key"},[t._v("\n\t\t\t\t联系方式\n\t\t\t")]),a("view",{staticClass:"phone-value"},[t._v("\n\t\t\t\t13190359692\n\t\t\t")])]),a("view",{staticClass:"row"},[a("view",{staticClass:"id-key"},[t._v("\n\t\t\t\t证件类型\n\t\t\t")]),a("view",{staticClass:"id-value"},[t._v("\n\t\t\t\t身份证\n\t\t\t")])]),a("view",{staticClass:"row"},[a("view",{staticClass:"number-key"},[t._v("\n\t\t\t\t证件号码\n\t\t\t")]),a("view",{staticClass:"number-value"},[t._v("\n\t\t\t\t210411111111111111\n\t\t\t")])])])}]};e.a=s}},[164]);
});
require('pages/product/productYemian/productDetail/simuYuyue/fenxianceping/simufengxianceping.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.js';

define('pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([21],{169:function(t,s,i){"use strict";var n=e(i(1)),a=e(i(170));function e(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},170:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(172),a=i.n(n),e=i(173);var c=function(t){i(171)},l=i(0)(a.a,e.a,c,null,null);s.default=l.exports},171:function(t,s){},172:function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{goback:function(){t.navigateBack({})},toFengxianceping:function(){t.navigateTo({url:"./fengxianceping",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(s,i(2).default)},173:function(t,s,i){"use strict";var n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",[i("view",{staticClass:"topBox"},[i("view",{staticClass:"top"},[i("view",{staticClass:"go-back iconfont",attrs:{eventid:"TwK-0"},on:{click:t.goback}},[t._v("\n\t\t\t\t\n\t\t\t")]),i("view",{staticClass:"middle"},[t._v("\n\t\t\t\t风险测评\n\t\t\t")]),i("view",{staticClass:"share iconfont"})]),t._m(0)]),t._m(1),t._m(2),i("view",{staticClass:"chongce",attrs:{eventid:"qW3-1"},on:{click:t.toFengxianceping}},[t._v("\n\t\t重新测评\n\t")])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"section"},[s("view",{staticClass:"content"},[s("view",{staticClass:"image-box"},[s("image",{staticClass:"user-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.2-%E9%A3%8E%E9%99%A9%E6%B5%8B%E8%AF%84%E7%BB%93%E6%9E%9C/android/drawable-xhdpi/touxiang.png",mode:""}})]),s("view",{staticClass:"sum"},[this._v("\n\t\t\t\t\t您的总得分\n\t\t\t\t")]),s("view",{staticClass:"score-role"},[s("view",{staticClass:"socre"},[this._v("\n\t\t\t\t\t\t20\n\t\t\t\t\t")]),s("view",{staticClass:"leixing"},[this._v("\n\t\t\t\t\t\t保守型投资人\n\t\t\t\t\t")]),s("view",{staticClass:"leixing-bottom"},[this._v("\n\t\t\t\t\t\t您的类型为\n\t\t\t\t\t")])]),s("view",{staticClass:"chanpinleixing"},[this._v("\n\t\t\t\t\t合适您的基金产品类型\n\t\t\t\t")]),s("view",{staticClass:"fengxianjibie"},[this._v("\n\t\t\t\t\t低风险级别产品\n\t\t\t\t")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"tableBox"},[i("view",{staticClass:"table"},[i("view",{staticClass:"row title"},[i("view",{staticClass:"column1"},[t._v("\n\t\t\t\t\t分值范围\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t客户类型\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t适合的产品类型\n\t\t\t\t")])]),i("view",{staticClass:"row"},[i("view",{staticClass:"column1"},[t._v("\n\t\t\t\t\t20 ")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t\t保守型投资人\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t低风险级别产品\n\t\t\t\t")])]),i("view",{staticClass:"row"},[i("view",{staticClass:" column1"},[t._v("\n\t\t\t\t\t20~40\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t稳健和保守型投资人\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t低、中低风险级别产品\n\t\t\t\t")])]),i("view",{staticClass:"row"},[i("view",{staticClass:" column1"},[t._v("\n\t\t\t\t\t41~60\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t稳健性投资人\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t低、中低风险级别产品\n\t\t\t\t")])]),i("view",{staticClass:"row"},[i("view",{staticClass:" column1"},[t._v("\n\t\t\t\t\t41~60\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t稳健性投资人\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t低、中低、中等风险级别产品\n\t\t\t\t")])]),i("view",{staticClass:"row"},[i("view",{staticClass:" column1"},[t._v("\n\t\t\t\t\t80~100\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t稳健性投资人\n\t\t\t\t")]),i("view",{staticClass:"column"},[t._v("\n\t\t\t\t\t低、中低、中等风险级别产品\n\t\t\t\t")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"questionBox"},[s("view",{staticClass:"question"},[this._v("\n\t\t\t开启财富之旅\n\t\t")])])}]};s.a=n}},[169]);
});
require('pages/product/productYemian/productDetail/simuYuyue/fenxianceping/cepingjieguo.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.js';

define('pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([15],{174:function(t,e,a){"use strict";var i=n(a(1)),s=n(a(175));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},175:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(177),s=a.n(i),n=a(178);var c=function(t){a(176)},l=a(0)(s.a,n.a,c,null,null);e.default=l.exports},176:function(t,e){},177:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{checked:!0}},methods:{checkedTab:function(){this.checked=!this.checked}}}},178:function(t,e,a){"use strict";var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"shiming-box"},[a("view",{staticClass:"shiming"},[t._v("\n\t\t为保护账户安全，请进行实名认证\n\t")]),a("view",{staticClass:"box"},[t._m(0),t._m(1),t._m(2),a("view",{staticClass:"radio-box"},[a("label",{staticClass:"radio"},[a("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png",eventid:"X0t-0"},on:{click:t.checkedTab}}),t._v("我声明为中国税收居民\n\t\t\t")])],1)]),a("view",{staticClass:"questionBox"},[a("view",{staticClass:"question"},[a("label",{staticClass:"iconfont"},[t._v("")]),t._v("提交\n\t\t")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t姓名\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"黎鸣先生"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t证件类型\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"2010-101"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t证件号码\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"2010-101"}})])}]};e.a=i}},[174]);
});
require('pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/shimingrenzheng.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.js';

define('pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([11],{179:function(t,e,s){"use strict";var i=n(s(1)),a=n(s(180));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},180:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(182),a=s.n(i),n=s(183);var c=function(t){s(181)},l=s(0)(a.a,n.a,c,null,null);e.default=l.exports},181:function(t,e){},182:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{checked:!0}},methods:{checkedTab:function(){this.checked=!this.checked}}}},183:function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"shiming-box"},[e("view",{staticClass:"shiming"}),e("view",{staticClass:"title"},[this._v("\n\t\t秀实-东雀嘉熠1号收益权转让计划\n\t")]),this._m(0),e("view",{staticClass:"questionBox"},[e("view",{staticClass:"question"},[e("label",{staticClass:"iconfont"},[this._v("")]),this._v("保存\n\t\t")],1),e("view",{staticClass:"question"},[e("label",{staticClass:"iconfont"},[this._v("")]),this._v("提交\n\t\t")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"box"},[e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t客户姓名\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请输入您的真实姓名"}})]),e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t预约金额\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:""}}),this._v("\n\t\t\t万元\n\t\t")])])}]};e.a=i}},[179]);
});
require('pages/product/productYemian/productDetail/simuYuyue/yuyue/yuyue.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.js';

define('pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([16],{184:function(t,i,e){"use strict";var s=n(e(1)),a=n(e(185));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},185:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(187),a=e.n(s),n=e(188);var c=function(t){e(186)},o=e(0)(a.a,n.a,c,null,null);i.default=o.exports},186:function(t,i){},187:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{}},methods:{toShimingrenzheng:function(){t.navigateTo({url:"./shimingrenzheng",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(i,e(2).default)},188:function(t,i,e){"use strict";var s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"box"},[i("view",{staticClass:"view-box"},[this._m(0),this._m(1),i("view",{staticClass:"questionBox",attrs:{eventid:"Z3e-0"},on:{click:this.toShimingrenzheng}},[i("view",{staticClass:"question"},[this._v("\n\t\t\t\t好的，去认证\n\t\t\t")])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"content-box"},[i("view",{staticClass:"title"},[this._v("\n\t\t\t\t投资，选合格的！\n\t\t\t")]),i("view",{staticClass:"content"},[this._v("\n\t\t\t\t为了更好地维护你的权益，我们将进行特定对象投资者身份认证！\n\t\t\t")]),i("view",{staticClass:"content"},[this._v("\n\t\t\t\t根据2018年4月27日发布的《关于规范金融机构资产管理业务的指导意见》，您需要进行风险测评，才能浏览相关私募信息（如您之前已完成测评，根据新规需要重新测评）。\n\t\t\t")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"buzhou"},[i("view",{staticClass:"buzhou-item"},[i("view",{staticClass:"image-box"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2-%E6%8A%95%E8%B5%84%E8%AE%A4%E8%AF%81%E8%AF%B4%E6%98%8E/android/drawable-xhdpi/shimingrenzheng.png",mode:"widthFix"}})]),i("view",{staticClass:"text"},[this._v("\n\t\t\t\t\t实名认证\n\t\t\t\t")]),i("view",{staticClass:"back"},[this._v("\n\t\t\t\t\t1\n\t\t\t\t")])]),i("view",{staticClass:"buzhou-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2-%E6%8A%95%E8%B5%84%E8%AE%A4%E8%AF%81%E8%AF%B4%E6%98%8E/android/drawable-xhdpi/jiantou.png",mode:"widthFix"}})]),i("view",{staticClass:"buzhou-item"},[i("view",{staticClass:"image-box"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2-%E6%8A%95%E8%B5%84%E8%AE%A4%E8%AF%81%E8%AF%B4%E6%98%8E/android/drawable-xhdpi/fengxiangceping.png",mode:"widthFix"}})]),i("view",{staticClass:"text"},[this._v("\n\t\t\t\t\t实名认证\n\t\t\t\t")]),i("view",{staticClass:"back"},[this._v("\n\t\t\t\t\t2\n\t\t\t\t")])])])}]};i.a=s}},[184]);
});
require('pages/product/productYemian/productDetail/simuYuyue/shimingrenzheng/renzheng.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.js';

define('pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([12],{189:function(t,e,a){"use strict";var s=n(a(1)),i=n(a(190));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},190:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(192),i=a.n(s),n=a(199);var c=function(t){a(191)},l=a(0)(i.a,n.a,c,null,null);e.default=l.exports},191:function(t,e){},192:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=a(4),n=(s=i)&&s.__esModule?s:{default:s};e.default={components:{addImage:n.default},data:function(){return{checked:!0,pasteContent:"",content:"本人/机构自愿申请被划分为专业投资者，已按要求提供财产状况、交易情况、从业经历等相关证明材料，并承诺所提供材料真实、准确、完整。"}},methods:{paste:function(){this.pasteContent=this.content}}}},199:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"renzheng-box"},[a("view",{staticClass:"title"},[t._v("\n\t\t请确认您是否同时符合下列专业投资者条件\n\t")]),t._m(0),a("view",{staticClass:"row1"},[a("label",{staticClass:"radio"},[a("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png"}}),t._v("\n\t\t\t是\n\t\t")]),a("label",{staticClass:"radio"},[a("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png"}}),t._v("\n\t\t\t否\n\t\t")])],1),a("view",{staticClass:"paste-box"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"con",staticClass:"paste-content",attrs:{id:"con",disabled:"",eventid:"DDV-0"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),a("view",{staticClass:"paste",attrs:{eventid:"bGe-1"},on:{click:t.paste}},[t._v("\n\t\t\t复制并粘贴\n\t\t")])]),a("view",{staticClass:"blank"},[t._v("\n\t\t"+t._s(t.pasteContent)+"\n\t")]),t._m(1),t._m(2),a("view",{},[a("view",{staticClass:"left",staticStyle:{padding:"40upx 0 0"}},[t._v("\n\t\t\t证明金额\n\t\t")]),a("addImage",{attrs:{mpcomid:"0x2-0"}})],1),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"ceshi-box"},[e("view",{staticClass:"ceshi-item"},[this._v("\n\t\t\t1、金融资产不低于500万元或近三年本人年均收入不低于50万元的个人\n\n\t\t")]),e("view",{staticClass:"ceshi-item"},[this._v("\n\t\t\t2、具有2年以上证券、基金、期货、黄金、外汇等投资经历，或者具有2年以上金融产品设计、投资、风险管理及相关工作经历，或者属于本条第(一) 项规定的专业投资者的高级管理人员、获得职业资格认证的从事金融相关业务的注册会计师和律师。\n\t\t")]),e("view",{staticClass:"ceshi-item"},[this._v("\n\t\t\t（金融资产包括银行存款、股票、债券、基金份额、资产管理计划、银行理财产品、信托计划、保险产品、期货权益等。）\n\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t证明类型\n\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t证明金额\n\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请输入金额"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"btn-box"},[e("view",{staticClass:"btn"},[this._v("\n\t\t\t我已阅读，确认无误并同意签字\n\t\t")])])}]};e.a=s}},[189]);
});
require('pages/product/productYemian/productDetail/simuYuyue/touzizherenzheng/touzizherenzheng.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.js';

define('pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([14],{200:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(201));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},201:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(203),i=s.n(a),n=s(204);var l=function(t){s(202)},u=s(0)(i.a,n.a,l,null,null);e.default=u.exports},202:function(t,e){},203:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=s(4),n=(a=i)&&a.__esModule?a:{default:a};e.default={components:{addImage:n.default},data:function(){return{}}}},204:function(t,e,s){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"shuanglu-box"},[e("view",{staticClass:"shuanglu"},[e("view",{staticClass:"title"},[this._v("\n\t\t\t双录-客户\n\t\t")]),this._m(0),this._m(1),e("view",{},[e("view",{staticClass:"left",staticStyle:{padding:"40upx 0 0"}},[this._v("\n\t\t\t\t双录说明\n\t\t\t")]),e("textarea",{staticClass:"shuoming",attrs:{placeholder:"双录说明双录说明双录说明双录说明双录说明双录说明双录说明双录说明双录说明"}}),e("addImage",{attrs:{mpcomid:"2kI-0"}})],1),e("view",{staticClass:"questionBox"},[e("view",{staticClass:"question"},[e("label",{staticClass:"iconfont"},[this._v("")]),this._v("提交\n\t\t\t")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t客户姓名\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"黎鸣先生"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t双录时间\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"2010-101"}})])}]};e.a=a}},[200]);
});
require('pages/product/productYemian/productDetail/simuYuyue/shuanglu/shuanglu.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/hetong/hetong';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.js';

define('pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([18],{205:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(206));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},206:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(208),i=s.n(a),n=s(212);var l=function(t){s(207)},r=s(0)(i.a,n.a,l,null,null);e.default=r.exports},207:function(t,e){},208:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(s(8)),i=n(s(4));function n(t){return t&&t.__esModule?t:{default:t}}e.default={components:{addImage:i.default,timePicker:a.default},data:function(){return{}}}},212:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"hetong-box"},[s("view",{staticClass:"hetong"},[s("view",{staticClass:"title"},[t._v("\n\t\t\t合同申请\n\t\t")]),t._m(0),t._m(1),t._m(2),t._m(3),s("view",{staticClass:"row"},[s("view",{staticClass:"left"},[t._v("\n\t\t\t\t签署日期\n\t\t\t")]),s("view",{staticClass:"right"},[s("timePicker",{attrs:{mpcomid:"cc8-0"}})])]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),s("view",{staticClass:"questionBox"},[s("view",{staticClass:"question"},[s("label",{staticClass:"iconfont"},[t._v("")]),t._v("提交\n\t\t\t")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t产品名称\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"秀实-东雀嘉熠1号收益权装让计划"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t收益级别\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请输入收益级别"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t合同编号\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请输入合同编号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t合同金额\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请填写支行"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t起息日期\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"系统自动生成"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t开户账户\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请填写账号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t利益支付开户行\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请填写开户行"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t开户姓名\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请填写开户行"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{},[e("view",{staticClass:"left",staticStyle:{padding:"40upx 0 0"}},[this._v("\n\t\t\t\t备注\n\t\t\t")]),e("textarea",{staticClass:"shuoming",attrs:{placeholder:"填写备注"}})])}]};e.a=a}},[205]);
});
require('pages/product/productYemian/productDetail/simuYuyue/hetong/hetong.js');
__wxRoute = 'pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.js';

define('pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([17],{213:function(t,e,s){"use strict";var i=n(s(1)),a=n(s(214));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},214:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(216),a=s.n(i),n=s(217);var l=function(t){s(215)},c=s(0)(a.a,n.a,l,null,null);e.default=c.exports},215:function(t,e){},216:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(s(8)),a=n(s(4));function n(t){return t&&t.__esModule?t:{default:t}}e.default={components:{addImage:a.default,timePicker:i.default},data:function(){return{}}}},217:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"jiaokuan-box"},[s("view",{staticClass:"jiaokuan"},[s("view",{staticClass:"title"},[t._v("\n\t\t\t缴款申请\n\t\t")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("view",{staticClass:"row"},[s("view",{staticClass:"left"},[t._v("\n\t\t\t\t缴款日期\n\t\t\t")]),s("view",{staticClass:"right"},[s("timePicker",{attrs:{mpcomid:"BCh-0"}})])]),t._m(5),s("view",{staticClass:"questionBox"},[s("view",{staticClass:"question"},[s("label",{staticClass:"iconfont"},[t._v("")]),t._v("提交\n\t\t\t")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t客户姓名\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"先生"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t银行卡号\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请输入银行卡号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t开户行\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请选择银行"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"}),e("input",{attrs:{type:"text",value:"",placeholder:"请填写支行"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t缴费金额\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请填写金额"}}),e("view",{},[this._v("\n\t\t\t\t万元\n\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{},[e("view",{staticClass:"left",staticStyle:{padding:"40upx 0 0"}},[this._v("\n\t\t\t\t缴款凭证\n\t\t\t")]),e("view",{staticClass:"photo-box"},[e("view",{staticClass:"photo-item"},[this._v("上传身份证正面")]),e("view",{staticClass:"photo-item"},[this._v("上传身份证反面")]),e("view",{staticClass:"photo-item"},[this._v("上传银行卡正面")]),e("view",{staticClass:"photo-item"},[this._v("上传银行卡反面")]),e("view",{staticClass:"photo-item"},[this._v("上传银行卡交易凭条")])])])}]};e.a=i}},[213]);
});
require('pages/product/productYemian/productDetail/simuYuyue/jiaokuan/jiaokuan.js');
__wxRoute = 'pages/product/productYemian/yuyue/bangdinglicaishi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/yuyue/bangdinglicaishi.js';

define('pages/product/productYemian/yuyue/bangdinglicaishi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([9],{218:function(t,a,e){"use strict";var i=s(e(1)),c=s(e(219));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(c.default))},219:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(221),c=e.n(i),s=e(222);var n=function(t){e(220)},l=e(0)(c.a,s.a,n,null,null);a.default=l.exports},220:function(t,a){},221:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0});var i,c=e(8),s=(i=c)&&i.__esModule?i:{default:i};a.default={components:{timePicker:s.default},data:function(){return{checked:!0}},methods:{checkedTab:function(){this.checked=!this.checked},toWodelicaishi:function(){t.navigateTo({url:"./wodelicaishi",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(a,e(2).default)},222:function(t,a,e){"use strict";var i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"box"},[e("view",{staticClass:"form-group"},[t._m(0),e("view",{staticClass:"column"},[e("label",{staticClass:"radio"},[e("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png"}}),t._v("\n\t\t\t\t网名 三年工作经验 ，擅长固定收益\n\t\t\t")]),e("label",{staticClass:"radio"},[e("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png"}}),t._v("\n\t\t\t\t黎明 五年工作经验，擅长私募股权类\n\t\t\t")]),e("label",{staticClass:"radio"},[e("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png"}}),t._v("\n\t\t\t\t张明 三年工作经验，擅长固定收益\n\t\t\t")]),e("label",{staticClass:"radio"},[e("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png"}}),t._v("\n\t\t\t\t自选\n\t\t\t")])],1),t._m(1),e("view",{staticClass:"row between"},[e("view",{staticClass:"left"},[t._v("\n\t\t\t\t期望回访时间\n\t\t\t")]),e("view",{staticClass:"right"},[e("timePicker",{attrs:{mpcomid:"6U9-0"}})])]),e("view",{staticClass:"questionBox"},[e("view",{staticClass:"question",attrs:{eventid:"ukY-0"},on:{click:t.toWodelicaishi}},[t._v("\n\t\t\t\t下一步"),e("label",{staticClass:"iconfont label"},[t._v("")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"row1"},[a("view",{staticClass:"title"},[this._v("\n\t\t\t\t为您推荐以下理财顾问\n\t\t\t")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"row"},[a("input",{staticClass:"name-inp",attrs:{value:"",placeholder:"请输入理财师姓名"}})])}]};a.a=i}},[218]);
});
require('pages/product/productYemian/yuyue/bangdinglicaishi.js');
__wxRoute = 'pages/product/productYemian/yuyue/wodelicaishi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/yuyue/wodelicaishi.js';

define('pages/product/productYemian/yuyue/wodelicaishi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([8],{223:function(t,e,i){"use strict";var a=n(i(1)),s=n(i(224));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},224:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(226),s=i.n(a),n=i(227);var c=function(t){i(225)},o=i(0)(s.a,n.a,c,null,null);e.default=o.exports},225:function(t,e){},226:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{checked:!0}},methods:{checkedTab:function(){this.checked=!this.checked}}}},227:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"box"},[i("view",{staticClass:"form-group"},[i("view",{staticClass:"row1"},[i("view",{},[t._v("\n\t\t\t\t告诉我们的理财师您的尊称是\n\t\t\t")]),i("label",{staticClass:"radio"},[i("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png"}}),t._v("\n\t\t\t\t先生\n\t\t\t")]),i("label",{staticClass:"radio"},[i("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png"}}),t._v("\n\t\t\t\t女士\n\t\t\t")])],1),t._m(0),i("view",{staticClass:"row"},[i("view",{staticClass:"title"},[t._v("\n\t\t\t\t年龄\n\t\t\t")]),i("select",[i("option",[t._v("25岁以下")]),i("option",[t._v("111")]),i("option",[t._v("111")])],1)]),i("view",{staticClass:"row"},[i("view",{staticClass:"title"},[t._v("\n\t\t\t\t常住省\n\t\t\t")]),i("select",[i("option",[t._v("111")]),i("option",[t._v("111")]),i("option",[t._v("111")]),i("option",[t._v("111")])],1)]),i("view",{staticClass:"row"},[i("view",{staticClass:"title"},[t._v("\n\t\t\t\t常住城市\n\t\t\t")]),i("select",[i("option",[t._v("北京")]),i("option",[t._v("111")]),i("option",[t._v("111")])],1)]),i("view",{staticClass:"row"},[i("view",{staticClass:"title"},[t._v("\n\t\t\t\t期望回访时间\n\t\t\t")]),i("select",[i("option",[t._v("北京")]),i("option",[t._v("111")]),i("option",[t._v("111")])],1)]),i("view",{staticClass:"questionBox"},[i("view",{staticClass:"question"},[i("label",{staticClass:"iconfont label"},[t._v("")]),t._v("提交\n\t\t\t")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("input",{staticClass:"name-inp",attrs:{value:"",placeholder:"请输入您的真实姓名"}})])}]};e.a=a}},[223]);
});
require('pages/product/productYemian/yuyue/wodelicaishi.js');
__wxRoute = 'pages/product/productYemian/pinglun/pinglun';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/productYemian/pinglun/pinglun.js';

define('pages/product/productYemian/pinglun/pinglun.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([23],{228:function(t,a,i){"use strict";var s=n(i(1)),e=n(i(229));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},229:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i(231),e=i.n(s),n=i(232);var l=function(t){i(230)},c=i(0)(e.a,n.a,l,null,null);a.default=c.exports},230:function(t,a){},231:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s,e=i(4),n=(s=e)&&s.__esModule?s:{default:s};a.default={components:{addImage:n.default},data:function(){return{}}}},232:function(t,a,i){"use strict";var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("view",[a("view",{staticClass:"pinglun-box"},[this._m(0),a("textarea",{staticClass:"textare",attrs:{value:"",placeholder:"来评价吧"}}),a("addImage",{attrs:{mpcomid:"yCQ-0"}}),this._m(1),a("view",{staticClass:"uni-switch-box"},[a("view",{staticClass:"uni-list"},[a("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("view",{staticClass:"uni-list-cell-db"},[this._v("匿名")]),a("switch",{attrs:{eventid:"ARt-0"},on:{change:function(t){}}})])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"pinglun-top"},[a("view",{staticClass:"pinglun"},[this._v("\n\t\t\t\t评论\n\t\t\t")]),a("view",{staticClass:"star"},[a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})]),a("view",{staticClass:"star-item"},[a("image",{staticClass:"star-image-select",attrs:{src:"http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png"}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"contentMid"},[a("view",{staticClass:"videoDetail uni-font17"},[a("view",{},[this._v("\n\t\t\t\t\t产品印象\n\t\t\t\t")])]),a("view",{staticClass:"label"},[a("view",{staticClass:"label-item"},[this._v("国企大机构背景")]),a("view",{staticClass:"label-item"},[this._v("股力雄厚")]),a("view",{staticClass:"label-item"},[this._v("历史对付100%")]),a("view",{staticClass:"label-item"},[this._v("股东实力雄厚")])])])}]};a.a=s}},[228]);
});
require('pages/product/productYemian/pinglun/pinglun.js');
__wxRoute = 'pages/investment/investment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/investment/investment.js';

define('pages/investment/investment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([38],{233:function(t,e,i){"use strict";var n=u(i(1)),s=u(i(234));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},234:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(236),s=i.n(n),u=i(237);var a=function(t){i(235)},l=i(0)(s.a,u.a,a,null,null);e.default=l.exports},235:function(t,e){},236:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{lists:[{id:"1",url:"../../static/image/invest/u762.png",title:"智能投顾"},{id:"2",url:"../../static/image/invest/u761.png",title:"房产理财计算器"},{id:"3",url:"../../static/image/invest/u763.png",title:"一键定制养老方案"},{id:"4",url:"../../static/image/invest/u761.png",title:"子女教育理财规划"},{id:"5",url:"../../static/image/invest/u763.png",title:"其他计算器"}]}}}},237:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"touziBox"},t._l(t.lists,function(e,n){return i("view",{key:e.id,staticClass:"touziItem"},[i("image",{attrs:{src:e.url,mode:""}}),i("view",{staticClass:"title uni-ellipsis"},[t._v(t._s(e.title))])])}))])},staticRenderFns:[]};e.a=n}},[233]);
});
require('pages/investment/investment.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([29],{238:function(t,i,a){"use strict";var s=n(a(1)),e=n(a(239));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},239:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(241),e=a.n(s),n=a(242);var c=function(t){a(240)},o=a(0)(e.a,n.a,c,null,null);i.default=o.exports},240:function(t,i){},241:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{}},methods:{goback:function(){t.navigateBack({})},toChicang:function(){t.navigateTo({url:"./wodechicang/wodechicang",success:function(t){},fail:function(){},complete:function(){}})},toWodedingdan:function(){t.navigateTo({url:"./wodedingdan/wodedingdan",success:function(t){},fail:function(){},complete:function(){}})},toZengzhifuwu:function(){t.navigateTo({url:"./zengzhifuwu/zengzhifuwu",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(i,a(2).default)},242:function(t,i,a){"use strict";var s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("view",{staticClass:"topBox"},[a("view",{staticClass:"nav"},[a("view",{staticClass:"go-back iconfont",attrs:{eventid:"JNB-0"},on:{click:t.goback}},[t._v("\n\t\t\t\t\n\t\t\t")]),a("view",{staticClass:"middle"},[t._v("\n\t\t\t\t我的\n\t\t\t")]),a("view",{staticClass:"set-btn"},[t._v("\n\t\t\t\t设置\n\t\t\t")])]),t._m(0),t._m(1)]),t._m(2),a("view",{staticClass:"block-box"},[a("view",{staticClass:"block"},[a("view",{staticClass:"block-title-box"},[a("view",{staticClass:"block-title"},[a("view",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t我的持仓\n\t\t\t\t\t")]),a("view",{staticClass:"uni-icon-more",attrs:{eventid:"cOg-1"},on:{tap:t.toChicang}},[a("view",{staticClass:"more"},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t")]),a("view",{staticClass:"iconfont arrow"},[t._v("")])])])]),t._m(3),a("view",{staticClass:"my-lists"},[t._m(4),a("view",{staticClass:"my-list-item"},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/wodedingdang.png",mode:"aspectFit"}}),a("view",{staticClass:"my-list-item-right",attrs:{eventid:"k6j-2"},on:{click:t.toWodedingdan}},[a("view",{},[t._v("\n\t\t\t\t\t\t\t\t我的订单\n\t\t\t\t\t\t\t")]),a("view",{staticClass:"iconfont arrow"},[t._v("")])])]),a("view",{staticClass:"my-list-item"},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/zhengzhifuwu.png",mode:"aspectFit"}}),a("view",{staticClass:"my-list-item-right",attrs:{eventid:"h7i-3"},on:{click:t.toZengzhifuwu}},[a("view",{},[t._v("\n\t\t\t\t\t\t\t\t增值服务\n\t\t\t\t\t\t\t")]),a("view",{staticClass:"iconfont arrow"},[t._v("")])])]),t._m(5)])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"lcs-message"},[i("view",{staticClass:"touxiang-left"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/touxiang.png",mode:""}})]),i("view",{staticClass:"message-right"},[i("view",{staticClass:"message-right-top"},[this._v("\n\t\t\t\t\t客户 李明\n\t\t\t\t")]),i("view",{staticClass:"message-right-bottom"},[this._v("\n\t\t\t\t\t14313131313\n\t\t\t\t")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"biaoqian"},[i("view",{staticClass:"biaoqian-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/weirenzhenghege.png",mode:""}}),i("view",{},[this._v("\n\t\t\t\t\t未认证合格投资者\n\t\t\t\t")])]),i("view",{staticClass:"biaoqian-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/shimingrenzheng.png",mode:""}}),i("view",{},[this._v("\n\t\t\t\t\t实名认证\n\t\t\t\t")])]),i("view",{staticClass:"biaoqian-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/licai.png",mode:""}}),i("view",{},[this._v("\n\t\t\t\t\t理财师\n\t\t\t\t")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"lists"},[i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/gerenzhuye.png",mode:"aspectFit"}}),i("view",[this._v("个人主页")])]),i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/guanzhudongtai.png",mode:"aspectFit"}}),i("view",[this._v("关注动态")])]),i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/wodezichan.png",mode:"aspectFit"}}),i("view",[this._v("我的资产")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"chicang"},[i("view",{staticClass:"chicang-item"},[i("view",{staticClass:"chicang-top"},[this._v("\n\t\t\t\t\t\t200\n\t\t\t\t\t")]),i("view",{staticClass:"chicang-bottom"},[this._v("\n\t\t\t\t\t\t总资产\n\t\t\t\t\t")])]),i("view",{staticClass:"chicang-item"},[i("view",{staticClass:"chicang-top"},[this._v("\n\t\t\t\t\t\t2000\n\t\t\t\t\t")]),i("view",{staticClass:"chicang-bottom"},[this._v("\n\t\t\t\t\t\t总成本\n\t\t\t\t\t")])]),i("view",{staticClass:"chicang-item"},[i("view",{staticClass:"chicang-top"},[this._v("\n\t\t\t\t\t\t1200\n\t\t\t\t\t")]),i("view",{staticClass:"chicang-bottom"},[this._v("\n\t\t\t\t\t\t总收益\n\t\t\t\t\t")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"my-list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/wodeshoucang.png",mode:"aspectFit"}}),i("view",{staticClass:"my-list-item-right"},[i("view",{},[this._v("\n\t\t\t\t\t\t\t我的收藏\n\t\t\t\t\t\t")]),i("view",{staticClass:"iconfont arrow"},[this._v("")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"my-list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/tuijianyouli.png",mode:"aspectFit"}}),i("view",{staticClass:"my-list-item-right"},[i("view",{},[this._v("\n\t\t\t\t\t\t\t\t推荐有礼\n\t\t\t\t\t\t\t")]),i("view",{staticClass:"iconfont arrow"},[this._v("")])])])}]};i.a=s}},[238]);
});
require('pages/my/my.js');
__wxRoute = 'pages/my/lcs-my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/lcs-my.js';

define('pages/my/lcs-my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([35],{243:function(t,i,e){"use strict";var a=n(e(1)),s=n(e(244));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},244:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(246),s=e.n(a),n=e(247);var c=function(t){e(245)},o=e(0)(s.a,n.a,c,null,null);i.default=o.exports},245:function(t,i){},246:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{}},methods:{goback:function(){t.navigateBack({})},toChicang:function(){t.navigateTo({url:"./wodechicang/wodechicang",success:function(t){},fail:function(){},complete:function(){}})},toWodedingdan:function(){t.navigateTo({url:"./lcs-wodedingdan/lcs-wodedingdan",success:function(t){},fail:function(){},complete:function(){}})},toZengzhifuwu:function(){t.navigateTo({url:"./zengzhifuwu/zengzhifuwu",success:function(t){},fail:function(){},complete:function(){}})},toLcsWodekehu:function(){t.navigateTo({url:"./lcs-wodekehu/lcs-wodekehu",success:function(t){},fail:function(){},complete:function(){}})},toLcsShezhi:function(){t.navigateTo({url:"./lcs-shezhi/lcs-shezhi",success:function(t){},fail:function(){},complete:function(){}})},toLcsGerenzhuye:function(){t.navigateTo({url:"./lcs-gerenzhuye/lcs-gerenzhuye",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(i,e(2).default)},247:function(t,i,e){"use strict";var a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",[e("view",{staticClass:"topBox"},[e("view",{staticClass:"nav"},[e("view",{staticClass:"go-back iconfont",attrs:{eventid:"m1C-0"},on:{click:t.goback}},[t._v("\n\t\t\t\t\n\t\t\t")]),e("view",{staticClass:"middle"},[t._v("\n\t\t\t\t我的\n\t\t\t")]),e("view",{staticClass:"set-btn",attrs:{eventid:"W9T-1"},on:{click:t.toLcsShezhi}},[t._v("\n\t\t\t\t设置\n\t\t\t")])]),t._m(0),t._m(1)]),e("view",{staticClass:"lists"},[e("view",{staticClass:"list-item",attrs:{eventid:"A9n-2"},on:{click:t.toLcsGerenzhuye}},[e("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/gerenzhuye.png",mode:"aspectFit"}}),e("view",[t._v("个人主页")])]),t._m(2),t._m(3)]),e("view",{staticClass:"block-box"},[e("view",{staticClass:"block"},[e("view",{staticClass:"my-lists"},[e("view",{staticClass:"my-list-item"},[e("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/wodekehu.png",mode:"aspectFit"}}),e("view",{staticClass:"my-list-item-right",attrs:{eventid:"7Y2-3"},on:{click:t.toLcsWodekehu}},[e("view",{},[t._v("\n\t\t\t\t\t\t\t我的客户\n\t\t\t\t\t\t")]),e("view",{staticClass:"iconfont arrow"},[t._v("")])])]),t._m(4),t._m(5),e("view",{staticClass:"my-list-item"},[e("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/wodedingdang.png",mode:"aspectFit"}}),e("view",{staticClass:"my-list-item-right",attrs:{eventid:"BQT-4"},on:{click:t.toWodedingdan}},[e("view",{},[t._v("\n\t\t\t\t\t\t\t\t我的订单\n\t\t\t\t\t\t\t")]),e("view",{staticClass:"iconfont arrow"},[t._v("")])])]),t._m(6)])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"lcs-message"},[i("view",{staticClass:"touxiang-left"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/touxiang.png",mode:""}})]),i("view",{staticClass:"message-right"},[i("view",{staticClass:"message-right-top"},[this._v("\n\t\t\t\t\t理财师 李明\n\t\t\t\t")]),i("view",{staticClass:"message-right-bottom"},[this._v("\n\t\t\t\t\t14313131313\n\t\t\t\t")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"biaoqian"},[i("view",{staticClass:"biaoqian-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/weirenzhenghege.png",mode:""}}),i("view",{},[this._v("\n\t\t\t\t\t未认证合格投资者\n\t\t\t\t")])]),i("view",{staticClass:"biaoqian-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/shimingrenzheng.png",mode:""}}),i("view",{},[this._v("\n\t\t\t\t\t实名认证\n\t\t\t\t")])]),i("view",{staticClass:"biaoqian-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/licai.png",mode:""}}),i("view",{},[this._v("\n\t\t\t\t\t理财师\n\t\t\t\t")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/guanzhudongtai.png",mode:"aspectFit"}}),i("view",[this._v("关注动态")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/zichanpeizhi.png",mode:"aspectFit"}}),i("view",[this._v("我的资产")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"my-list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/zhuanfazhushou.png",mode:"aspectFit"}}),i("view",{staticClass:"my-list-item-right"},[i("view",{},[this._v("\n\t\t\t\t\t\t\t转发助手\n\t\t\t\t\t\t")]),i("view",{staticClass:"iconfont arrow"},[this._v("")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"my-list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/wodeshoucang.png",mode:"aspectFit"}}),i("view",{staticClass:"my-list-item-right"},[i("view",{},[this._v("\n\t\t\t\t\t\t\t我的收藏\n\t\t\t\t\t\t")]),i("view",{staticClass:"iconfont arrow"},[this._v("")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"my-list-item"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/tuijianyouli.png",mode:"aspectFit"}}),i("view",{staticClass:"my-list-item-right"},[i("view",{},[this._v("\n\t\t\t\t\t\t\t\t推荐有礼\n\t\t\t\t\t\t\t")]),i("view",{staticClass:"iconfont arrow"},[this._v("")])])])}]};i.a=a}},[243]);
});
require('pages/my/lcs-my.js');
__wxRoute = 'pages/my/lcs-shezhi/lcs-shezhi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/lcs-shezhi/lcs-shezhi.js';

define('pages/my/lcs-shezhi/lcs-shezhi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([34],{248:function(t,s,e){"use strict";var i=n(e(1)),a=n(e(249));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},249:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(251),a=e.n(i),n=e(252);var l=function(t){e(250)},c=e(0)(a.a,n.a,l,null,null);s.default=c.exports},250:function(t,s){},251:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{}}},252:function(t,s,e){"use strict";var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"xinjiankehu-box"},[e("view",{staticClass:"box"},[e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[t._v("\n\t\t\t\t头像\n\t\t\t")]),e("view",{staticClass:"right"},[t._m(0),e("view",{},[e("label",{staticClass:"iconfont"},[t._v(" ")])],1)])]),e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[t._v("\n\t\t\t\t昵称\n\t\t\t")]),e("view",{staticClass:"right"},[e("view",{}),e("view",{},[e("label",{staticClass:"iconfont"},[t._v(" ")])],1)])]),e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[t._v("\n\t\t\t\t简介\n\t\t\t")]),e("view",{staticClass:"right"},[e("view",{}),e("view",{},[e("label",{staticClass:"iconfont"},[t._v(" ")])],1)])]),e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[t._v("\n\t\t\t\t联系方式\n\t\t\t")]),e("view",{staticClass:"right"},[e("view",{}),e("view",{},[e("label",{staticClass:"iconfont"},[t._v(" ")])],1)])]),e("view",{staticClass:"questionBox"},[e("view",{staticClass:"question"},[e("label",{staticClass:"iconfont label"},[t._v("")]),t._v("退出登录\n\t\t\t")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{},[s("image",{staticClass:"touxiang-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.2-%E8%AE%BE%E7%BD%AE/android/drawable-xhdpi/touxiang.png",mode:""}})])}]};s.a=i}},[248]);
});
require('pages/my/lcs-shezhi/lcs-shezhi.js');
__wxRoute = 'pages/my/lcs-gerenzhuye/lcs-gerenzhuye';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/lcs-gerenzhuye/lcs-gerenzhuye.js';

define('pages/my/lcs-gerenzhuye/lcs-gerenzhuye.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([36],{253:function(t,i,s){"use strict";var a=c(s(1)),e=c(s(254));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(e.default))},254:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s(256),e=s.n(a),c=s(257);var n=function(t){s(255)},l=s(0)(e.a,c.a,n,null,null);i.default=l.exports},255:function(t,i){},256:function(t,i,s){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{id:1,xuanze:[{item:"全部",id:1},{item:"产品点评",id:2},{item:"问答",id:3}]}},methods:{goback:function(){t.navigateBack({})},fresh:function(t){this.id=t}}}}).call(i,s(2).default)},257:function(t,i,s){"use strict";var a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("view",[s("view",{staticClass:"topBox"},[s("view",{staticClass:"nav"},[s("view",{staticClass:"go-back iconfont",attrs:{eventid:"Vha-0"},on:{click:t.goback}},[t._v("\n\t\t\t\t\n\t\t\t")]),s("view",{staticClass:"middle"},[t._v("\n\t\t\t\t我的\n\t\t\t")]),s("view",{staticClass:"iconfont"},[t._v("\n\t\t\t\t\n\t\t\t")])]),s("view",{staticClass:"lcs-message"},[t._m(0),s("view",{staticClass:"guanzhu"},[s("label",{staticClass:"iconfont jia"},[t._v("")]),t._v("\n\t\t\t\t关注\n\t\t\t")],1)]),s("view",{staticClass:"jieshao"},[t._v("\n\t\t\t自我介绍：自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍\n\t\t")]),t._m(1)]),s("view",[s("view",{staticClass:"tiaojian"},t._l(t.xuanze,function(i,a){return s("view",{key:i.id,class:t.id==i.id?"active":"",attrs:{eventid:"Kv2-1-"+a},on:{click:function(s){t.fresh(i.id)}}},[t._v("\n\t\t\t\t"+t._s(i.item)+"\n\n\t\t\t")])})),s("view",{staticClass:"contentMid"},[t._m(2),s("view",{staticClass:"more-mark"},[s("label",{staticClass:"iconfont"},[t._v("")]),t._v("查看更多评论")],1)]),s("view",{staticClass:"product-box"},[s("view",{staticClass:"product-item",attrs:{eventid:"vLZ-2"},on:{click:t.toProduct}},[s("view",{staticClass:"product-title"},[t._v("\n\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t")]),t._m(3)]),s("view",{staticClass:"product-item",attrs:{eventid:"Txu-3"},on:{click:t.toProduct}},[s("view",{staticClass:"product-title"},[t._v("\n\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t")]),t._m(4)])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"touxiang-left"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/touxiang.png",mode:""}}),i("view",{staticClass:"message-right"},[i("view",{staticClass:"message-right-top"},[this._v("\n\t\t\t\t\t\t理财师 李明\n\t\t\t\t\t")]),i("view",{staticClass:"message-right-bottom"},[this._v("\n\t\t\t\t\t\t联系方式 14313131313\n\t\t\t\t\t")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("view",{staticClass:"lists"},[s("view",{staticClass:"list-item"},[s("view",{staticClass:"list-item-top"},[t._v("233")]),s("view",{staticClass:"list-item-bottom"},[t._v("粉丝")])]),s("view",{staticClass:"list-item"},[s("view",{staticClass:"list-item-top"},[t._v("122")]),s("view",{staticClass:"list-item-bottom"},[t._v("关注")])]),s("view",{staticClass:"list-item"},[s("view",{staticClass:"list-item-top"},[t._v("122")]),s("view",{staticClass:"list-item-bottom"},[t._v("产品点评")])]),s("view",{staticClass:"list-item"},[s("view",{staticClass:"list-item-top"},[t._v("3")]),s("view",{staticClass:"list-item-bottom"},[t._v("组合")])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("view",{staticClass:"contentBot"},[s("view",{staticClass:"mark"},[s("view",{staticClass:"avator-left"},[s("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/touxiang.png"}})]),s("view",{staticClass:"mark-right"},[s("view",{staticClass:"mark-top"},[s("view",{staticClass:"mark-top-left"},[s("view",{staticClass:"position"},[t._v("理财师")]),s("view",{staticClass:"name"},[t._v("李明")])])]),s("view",{staticClass:"time"},[t._v("9小时前")]),s("view",{staticClass:"mark-bot twoLines"},[t._v("\n\t\t\t\t\t\t\t秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄\n\t\t\t\t\t\t")]),s("view",{staticClass:"mark-images"},[s("image",{staticClass:"mark-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png"}}),s("image",{staticClass:"mark-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png"}}),s("image",{staticClass:"mark-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png"}})]),s("view",{staticClass:"mark-liuyan"},[s("view",{},[t._v("\n\t\t\t\t\t\t\t\t11:20\n\t\t\t\t\t\t\t")]),s("image",{staticClass:"liuyan",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/huifu.png",mode:""}})]),s("view",{staticClass:"mark-liuyan-bot"},[s("view",{},[t._v("\n\t\t\t\t\t\t\t\t80浏览\n\t\t\t\t\t\t\t")]),s("view",{},[t._v("\n\t\t\t\t\t\t\t\t摆上设计：非常好\n\t\t\t\t\t\t\t")])])])]),s("view",{staticClass:"mark"},[s("view",{staticClass:"avator-left"},[s("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/touxiang.png"}})]),s("view",{staticClass:"mark-right"},[s("view",{staticClass:"mark-top"},[s("view",{staticClass:"mark-top-left"},[s("view",{staticClass:"position"},[t._v("理财师")]),s("view",{staticClass:"name"},[t._v("李明")])])]),s("view",{staticClass:"time"},[t._v("9小时前")]),s("view",{staticClass:"mark-bot twoLines"},[t._v("\n\t\t\t\t\t\t\t秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄\n\t\t\t\t\t\t")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"product-detail"},[i("view",{staticClass:"item"},[i("view",{staticClass:"large-size color item-top"},[this._v("\n\t\t\t\t\t\t\t8%-9.5%\n\t\t\t\t\t\t")]),i("view",{staticClass:"item-bottom"},[this._v("\n\t\t\t\t\t\t\t业绩比较基准\n\t\t\t\t\t\t")])]),i("view",{staticClass:"item"},[i("view",{staticClass:"size item-top"},[this._v("\n\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t")]),i("view",{staticClass:"item-bottom"},[this._v("\n\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t")])]),i("view",{staticClass:"item"},[i("view",{staticClass:"size item-top"},[this._v("\n\t\t\t\t\t\t\t认购起点 \n\t\t\t\t\t\t")]),i("view",{staticClass:"item-bottom"},[this._v("\n\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"product-detail"},[i("view",{staticClass:"item"},[i("view",{staticClass:"large-size color item-top"},[this._v("\n\t\t\t\t\t\t\t8%-9.5%\n\t\t\t\t\t\t")]),i("view",{staticClass:"item-bottom"},[this._v("\n\t\t\t\t\t\t\t业绩比较基准\n\t\t\t\t\t\t")])]),i("view",{staticClass:"item"},[i("view",{staticClass:"size item-top"},[this._v("\n\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t")]),i("view",{staticClass:"item-bottom"},[this._v("\n\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t")])]),i("view",{staticClass:"item"},[i("view",{staticClass:"size item-top"},[this._v("\n\t\t\t\t\t\t\t认购起点 \n\t\t\t\t\t\t")]),i("view",{staticClass:"item-bottom"},[this._v("\n\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t")])])])}]};i.a=a}},[253]);
});
require('pages/my/lcs-gerenzhuye/lcs-gerenzhuye.js');
__wxRoute = 'pages/my/lcs-wodedingdan/lcs-wodedingdan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/lcs-wodedingdan/lcs-wodedingdan.js';

define('pages/my/lcs-wodedingdan/lcs-wodedingdan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([33],{258:function(t,i,a){"use strict";var s=n(a(1)),e=n(a(259));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},259:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(261),e=a.n(s),n=a(262);var c=function(t){a(260)},d=a(0)(e.a,n.a,c,null,null);i.default=d.exports},260:function(t,i){},261:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,e=a(3),n=(s=e)&&s.__esModule?s:{default:s};i.default={components:{searchTemp:n.default},data:function(){return{id:1,xuanze:[{item:"买入",id:1},{item:"到期赎回",id:2},{item:"提前赎回",id:3}]}},methods:{fresh:function(t){this.id=t}}}},262:function(t,i,a){"use strict";var s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("view",{staticClass:"top"},[a("searchTemp",{staticClass:"search",attrs:{mpcomid:"IPx-0"}})],1),a("view",{staticClass:"tiaojian"},t._l(t.xuanze,function(i,s){return a("view",{key:i.id,class:t.id==i.id?"active":"",attrs:{eventid:"HLF-0-"+s},on:{click:function(a){t.fresh(i.id)}}},[t._v("\n\t\t\t"+t._s(i.item)+"\n\t\t")])})),t._m(0)])},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"dingdan-box"},[a("view",{staticClass:"dingdan-item"},[a("image",{staticClass:"touxiang",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3.1.0-%E6%88%91%E7%9A%84%E8%AE%A2%E5%8D%95-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/tpuxiang.png",mode:""}}),a("view",{staticClass:"dingdan-right"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                260,000.00\n\t\t\t            ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])])]),a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                    260,000.00\n\t\t\t                ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])]),a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                    260,000.00\n\t\t\t                ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])]),a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                    260,000.00\n\t\t\t                ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])])])}]};i.a=s}},[258]);
});
require('pages/my/lcs-wodedingdan/lcs-wodedingdan.js');
__wxRoute = 'pages/my/lcs-wodekehu/lcs-wodekehu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/lcs-wodekehu/lcs-wodekehu.js';

define('pages/my/lcs-wodekehu/lcs-wodekehu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([31],{263:function(t,a,i){"use strict";var e=E(i(1)),s=E(i(264));function E(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(s.default))},264:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i(266),s=i.n(e),E=i(267);var n=function(t){i(265)},c=i(0)(s.a,E.a,n,null,null);a.default=c.exports},265:function(t,a){},266:function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0});var e,s=i(3),E=(e=s)&&e.__esModule?e:{default:e};a.default={components:{searchTemp:E.default},data:function(){return{}},onNavigationBarButtonTap:function(){t.navigateTo({url:"./xinjiankehu/xinjiankehu",success:function(t){},fail:function(){},complete:function(){}})},methods:{toKehuxiangqing:function(){t.navigateTo({url:"./kehuxiangqing/kehuxiangqing",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(a,i(2).default)},267:function(t,a,i){"use strict";var e={render:function(){var t=this.$createElement,a=this._self._c||t;return a("view",[a("view",{staticClass:"top"},[a("searchTemp",{staticClass:"search",attrs:{mpcomid:"8xp-0"}})],1),a("view",{staticClass:"kehu-lists"},[a("view",{staticClass:"kehu-item"},[a("view",{staticClass:"kehu-left",attrs:{eventid:"WHw-0"},on:{click:this.toKehuxiangqing}},[this._m(0),this._m(1)]),a("image",{staticClass:"kehu-right",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/dianhuan.png",mode:""}})]),this._m(2),this._m(3)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"touxiang-box"},[a("image",{staticClass:"touxiang-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/touxiang.png",mode:"aspectFit"}}),a("image",{staticClass:"xingbie",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/nanxing.png",mode:"aspectFit"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"kehu-message"},[a("view",{staticClass:"kehu-message-top"},[a("view",{staticClass:"kehu-name"},[this._v("\n\t\t\t\t\t\t\t李逵之\n\t\t\t\t\t\t")]),a("image",{staticClass:"label-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/he.png",mode:"aspectFit"}})]),a("view",{staticClass:"kehu-message-bottom"},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/xingjikehu.png",mode:"aspectFit"}}),a("view",{staticClass:"star"},[this._v("\n\t\t\t\t\t\t\t一星客户\n\t\t\t\t\t\t")]),a("view",{staticClass:"telephone"},[this._v("\n\t\t\t\t\t\t\t1233211234567\n\t\t\t\t\t\t")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"kehu-item"},[a("view",{staticClass:"kehu-left"},[a("view",{staticClass:"touxiang-box"},[a("image",{staticClass:"touxiang-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/touxiang.png",mode:"aspectFit"}}),a("image",{staticClass:"xingbie",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/nanxing.png",mode:"aspectFit"}})]),a("view",{staticClass:"kehu-message"},[a("view",{staticClass:"kehu-message-top"},[a("view",{staticClass:"kehu-name"},[this._v("\n\t\t\t\t\t\t\t\t李逵之\n\t\t\t\t\t\t\t")]),a("image",{staticClass:"label-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/he.png",mode:"aspectFit"}})]),a("view",{staticClass:"kehu-message-bottom"},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/xingjikehu.png",mode:"aspectFit"}}),a("view",{staticClass:"star"},[this._v("\n\t\t\t\t\t\t\t\t一星客户\n\t\t\t\t\t\t\t")]),a("view",{staticClass:"telephone"},[this._v("\n\t\t\t\t\t\t\t\t1233211234567\n\t\t\t\t\t\t\t")])])])]),a("image",{staticClass:"kehu-right",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/dianhuan.png",mode:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"kehu-item"},[a("view",{staticClass:"kehu-left"},[a("view",{staticClass:"touxiang-box"},[a("image",{staticClass:"touxiang-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/touxiang.png",mode:"aspectFit"}}),a("image",{staticClass:"xingbie",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/nanxing.png",mode:"aspectFit"}})]),a("view",{staticClass:"kehu-message"},[a("view",{staticClass:"kehu-message-top"},[a("view",{staticClass:"kehu-name"},[this._v("\n\t\t\t\t\t\t\t\t李逵之\n\t\t\t\t\t\t\t")]),a("image",{staticClass:"label-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/he.png",mode:"aspectFit"}})]),a("view",{staticClass:"kehu-message-bottom"},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/xingjikehu.png",mode:"aspectFit"}}),a("view",{staticClass:"star"},[this._v("\n\t\t\t\t\t\t\t\t一星客户\n\t\t\t\t\t\t\t")]),a("view",{staticClass:"telephone"},[this._v("\n\t\t\t\t\t\t\t\t1233211234567\n\t\t\t\t\t\t\t")])])])]),a("image",{staticClass:"kehu-right",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/dianhuan.png",mode:""}})])}]};a.a=e}},[263]);
});
require('pages/my/lcs-wodekehu/lcs-wodekehu.js');
__wxRoute = 'pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.js';

define('pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([30],{268:function(t,e,s){"use strict";var a=n(s(1)),i=n(s(269));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},269:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(271),i=s.n(a),n=s(272);var l=function(t){s(270)},c=s(0)(i.a,n.a,l,null,null);e.default=c.exports},270:function(t,e){},271:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{}}},272:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"xinjiankehu-box"},[s("view",{staticClass:"box"},[t._m(0),s("view",{staticClass:"row"},[s("view",{staticClass:"left"},[t._v("\n\t\t\t\t性别\n\t\t\t")]),s("view",{staticClass:"right"},[s("view",{}),s("view",{},[t._v("\n\t\t\t\t\t请选择 "),s("label",{staticClass:"iconfont"},[t._v(" ")])],1)])]),t._m(1),s("view",{staticClass:"row"},[s("view",{staticClass:"left"},[t._v("\n\t\t\t\t生日\n\t\t\t")]),s("view",{staticClass:"right"},[s("view",{}),s("view",{},[t._v("\n\t\t\t\t\t请选择 "),s("label",{staticClass:"iconfont"},[t._v(" ")])],1)])]),t._m(2),s("view",{staticClass:"questionBox"},[s("view",{staticClass:"question"},[s("label",{staticClass:"iconfont label"},[t._v("")]),t._v("保存\n\t\t\t")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t姓名\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"黎鸣先生"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t手机号\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"2010-101"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t\t所在地区\n\t\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请填写地址信息"}})])}]};e.a=a}},[268]);
});
require('pages/my/lcs-wodekehu/xinjiankehu/xinjiankehu.js');
__wxRoute = 'pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.js';

define('pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([32],{273:function(t,a,i){"use strict";var s=E(i(1)),e=E(i(274));function E(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},274:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i(276),e=i.n(s),E=i(277);var n=function(t){i(275)},l=i(0)(e.a,E.a,n,null,null);a.default=l.exports},275:function(t,a){},276:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{}}}},277:function(t,a,i){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("view",[i("view",{staticClass:"kehu-item"},[i("view",{staticClass:"kehu-left"},[i("view",{staticClass:"touxiang-box"},[i("image",{staticClass:"touxiang-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/touxiang.png",mode:"aspectFit"}}),i("image",{staticClass:"xingbie",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/nanxing.png",mode:"aspectFit"}})]),i("view",{staticClass:"kehu-message"},[i("view",{staticClass:"kehu-message-top"},[i("view",{staticClass:"kehu-name"},[t._v("\n\t\t\t\t\t\t李逵之\n\t\t\t\t\t")]),i("image",{staticClass:"label-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/he.png",mode:"aspectFit"}})]),i("view",{staticClass:"kehu-message-bottom"},[i("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/xingjikehu.png",mode:"aspectFit"}}),i("view",{staticClass:"star"},[t._v("\n\t\t\t\t\t\t一星客户\n\t\t\t\t\t")])])])])]),i("view",{staticClass:"kehu-box"},[i("view",{staticClass:"row"},[i("view",{staticClass:"left"},[i("image",{staticClass:"left-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1.4-%E5%AE%A2%E6%88%B7%E8%AF%A6%E6%83%85/android/drawable-xhdpi/dianhuan.png",mode:""}}),t._v("\n\t\t\t\t手机号\n\t\t\t")]),i("view",{staticClass:"right"},[i("view",{},[t._v("\n\t\t\t\t\t13109-90930221\n\t\t\t\t")]),i("image",{staticClass:"kehu-right",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/dianhuan.png",mode:""}})])]),i("view",{staticClass:"row"},[i("view",{staticClass:"left"},[i("image",{staticClass:"left-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1.4-%E5%AE%A2%E6%88%B7%E8%AF%A6%E6%83%85/android/drawable-xhdpi/xingbei.png",mode:""}}),t._v("\n\t\t\t\t性别\n\t\t\t")]),i("view",{staticClass:"right"},[t._v("\n\t\t\t\t\n\t\t\t\t女\n\t\t\t")])]),i("view",{staticClass:"row"},[i("view",{staticClass:"left"},[i("image",{staticClass:"left-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1.4-%E5%AE%A2%E6%88%B7%E8%AF%A6%E6%83%85/android/drawable-xhdpi/shengre.png",mode:""}}),t._v("\n\t\t\t\t生日\n\t\t\t")]),i("view",{staticClass:"right"},[t._v("\n\t\t\t\t1999-10-10\n\t\t\t")])]),i("view",{staticClass:"row"},[i("view",{staticClass:"left"},[i("image",{staticClass:"left-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1.4-%E5%AE%A2%E6%88%B7%E8%AF%A6%E6%83%85/android/drawable-xhdpi/dingwei.png",mode:""}}),t._v("\n\t\t\t\t所在地区\n\t\t\t")]),i("view",{staticClass:"right"},[t._v("\n\t\t\t\t北京市海淀小区巴拉巴拉小魔仙balabalb\n\t\t\t")])]),i("view",{staticClass:"row"},[i("view",{staticClass:"left"},[i("image",{staticClass:"left-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1.4-%E5%AE%A2%E6%88%B7%E8%AF%A6%E6%83%85/android/drawable-xhdpi/biaoqian.png",mode:""}}),t._v("\n\t\t\t\t标签\n\t\t\t\t"),i("image",{staticClass:"label-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/he.png",mode:"aspectFit"}})]),i("view",{staticClass:"right"},[i("view",{staticClass:"btn"},[t._v("\n\t\t\t\t\t添加\n\t\t\t\t")])])]),i("view",{staticClass:"row"},[i("view",{staticClass:"left"},[i("image",{staticClass:"left-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1.4-%E5%AE%A2%E6%88%B7%E8%AF%A6%E6%83%85/android/drawable-xhdpi/shimingrenzheng.png",mode:""}}),t._v("\n\t\t\t\t实名认证\n\t\t\t")]),i("view",{staticClass:"right"},[i("view",{staticClass:"btn yirenzheng"},[t._v("\n\t\t\t\t\t已认证\n\t\t\t\t")])])]),i("view",{staticClass:"row"},[i("view",{staticClass:"left"},[i("image",{staticClass:"left-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1.4-%E5%AE%A2%E6%88%B7%E8%AF%A6%E6%83%85/android/drawable-xhdpi/hege.png",mode:""}}),t._v("\n\t\t\t\t合格投资者认证\n\t\t\t")]),i("view",{staticClass:"right"},[i("view",{staticClass:"btn"},[t._v("\n\t\t\t\t\t去认证\n\t\t\t\t")])])]),i("view",{staticClass:"row"},[i("view",{staticClass:"left"},[i("image",{staticClass:"left-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1.4-%E5%AE%A2%E6%88%B7%E8%AF%A6%E6%83%85/android/drawable-xhdpi/chuangye.png",mode:""}}),t._v("\n\t\t\t\t创业投资者认证\n\t\t\t")]),i("view",{staticClass:"right"},[i("view",{staticClass:"btn"},[t._v("\n\t\t\t\t\t去认证\n\t\t\t\t")])])])])])}]};a.a=s}},[273]);
});
require('pages/my/lcs-wodekehu/kehuxiangqing/kehuxiangqing.js');
__wxRoute = 'pages/my/wodechicang/wodechicang';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/wodechicang/wodechicang.js';

define('pages/my/wodechicang/wodechicang.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([2],{278:function(t,e,n){"use strict";var i=a(n(1)),r=a(n(279));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(r.default))},279:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(281),r=n.n(i),a=n(292);var o=function(t){n(280)},s=n(0)(r.a,a.a,o,null,null);e.default=s.exports},280:function(t,e){},281:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(282)),r=a(n(283));a(n(288));function a(t){return t&&t.__esModule?t:{default:t}}var o=[{value:55,name:"北京"},{value:38,name:"上海"},{value:20,name:"广州"}],s={animation:!1,backgroundColor:"#F8F8F8",color:["#37A2DA","#32C5E9","#67E0E3","#91F2DE","#FFDB5C","#FF9F7F"],series:[{label:{normal:{fontSize:14}},type:"pie",center:["50%","50%"],radius:[0,"60%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 2, 2, 0.3)"}}}]};e.default={components:{mpvueEcharts:r.default},data:function(){return{echarts:i,updateStatus:!1,clickItem:""}},onLoad:function(){s.series[0].data=o.slice(0),console.log(s.series[0].data)},methods:{goback:function(){t.navigateBack()},toProductDetail:function(){t.navigateTo({url:"./productDetail/productDetail",success:function(t){},fail:function(){},complete:function(){}})},toYuyueliucheng:function(){t.navigateTo({url:"./simuYuyue/simuYuyue",success:function(t){},fail:function(){},complete:function(){}})},pieInit:function(t,e,n){var r=i.init(t,null,{width:e,height:n});return t.setChart(r),r.setOption(s),r},onClickItem:function(t){this.current!==t&&(this.current=t)},toShouyimingxi:function(){this.clickItem=0,t.navigateTo({url:"./shouyimingxi/shouyimingxi",success:function(t){},fail:function(){},complete:function(){}})},toJiaoyijilu:function(){this.clickItem=1,t.navigateTo({url:"./jiaoyijilu/jiaoyijilu",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(e,n(2).default)},282:function(t,e,n){"use strict";var i,r,a,o,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};o=function(t,e,n){function i(t){if(null==t||"object"!=(void 0===t?"undefined":s(t)))return t;var e=t,n=ns.call(t);if("[object Array]"===n){if(!E(t)){e=[];for(var r=0,a=t.length;r<a;r++)e[r]=i(t[r])}}else if(es[n]){if(!E(t)){var o=t.constructor;if(t.constructor.from)e=o.from(t);else{e=new o(t.length);for(r=0,a=t.length;r<a;r++)e[r]=i(t[r])}}}else if(!ts[n]&&!E(t)&&!M(t))for(var l in e={},t)t.hasOwnProperty(l)&&(e[l]=i(t[l]));return e}function r(t,e,n){if(!w(e)||!w(t))return n?i(e):t;for(var a in e)if(e.hasOwnProperty(a)){var o=t[a],s=e[a];!w(s)||!w(o)||y(s)||y(o)||M(s)||M(o)||b(s)||b(o)||E(s)||E(o)?!n&&a in t||(t[a]=i(e[a])):r(o,s,n)}return t}function a(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function o(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function l(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function u(t,e){function n(){}var i=t.prototype;for(var r in n.prototype=e.prototype,t.prototype=new n,i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function h(t,e,n){o(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)}function c(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function f(t,e,n){if(t&&e)if(t.forEach&&t.forEach===rs)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(n,t[a],a,t)}function d(t,e,n){if(t&&e){if(t.map&&t.map===ss)return t.map(e,n);for(var i=[],r=0,a=t.length;r<a;r++)i.push(e.call(n,t[r],r,t));return i}}function p(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===ls)return t.reduce(e,n,i);for(var r=0,a=t.length;r<a;r++)n=e.call(i,n,t[r],r,t);return n}}function g(t,e,n){if(t&&e){if(t.filter&&t.filter===as)return t.filter(e,n);for(var i=[],r=0,a=t.length;r<a;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function v(t,e){var n=os.call(arguments,2);return function(){return t.apply(e,n.concat(os.call(arguments)))}}function m(t){var e=os.call(arguments,1);return function(){return t.apply(this,e.concat(os.call(arguments)))}}function y(t){return"[object Array]"===ns.call(t)}function _(t){return"function"==typeof t}function x(t){return"[object String]"===ns.call(t)}function w(t){var e=void 0===t?"undefined":s(t);return"function"===e||!!t&&"object"==e}function b(t){return!!ts[ns.call(t)]}function S(t){return!!es[ns.call(t)]}function M(t){return"object"==(void 0===t?"undefined":s(t))&&"number"==typeof t.nodeType&&"object"==s(t.ownerDocument)}function C(t){return t!=t}function I(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]}function T(t,e){return null!=t?t:e}function k(t,e,n){return null!=t?t:null!=e?e:n}function D(){return Function.call.apply(os,arguments)}function A(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function L(t,e){if(!t)throw new Error(e)}function P(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function O(t){t[fs]=!0}function E(t){return t[fs]}function N(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=y(t),i=this;t instanceof N?t.each(e):t&&f(t,e)}function z(t){return new N(t)}function B(){}function R(t,e){var n=new ds(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function F(t){var e=new ds(2);return e[0]=t[0],e[1]=t[1],e}function V(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function W(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function H(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function G(t,e){var n=function(t){return Math.sqrt(function(t){return t[0]*t[0]+t[1]*t[1]}(t))}(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function X(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function j(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function q(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function Y(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function U(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function Z(t,e){return{target:t,topTarget:e&&e.topTarget}}function $(){}function K(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||ys}return!1}function Q(){var t=new ws(6);return J(t),t}function J(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function tt(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],a=e[0]*n[2]+e[2]*n[3],o=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t}function et(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function nt(t,e,n){var i=e[0],r=e[2],a=e[4],o=e[1],s=e[3],l=e[5],u=Math.sin(n),h=Math.cos(n);return t[0]=i*h+o*u,t[1]=-i*u+o*h,t[2]=r*h+s*u,t[3]=-r*u+h*s,t[4]=h*a+u*l,t[5]=h*l-u*a,t}function it(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function rt(t,e){var n=e[0],i=e[2],r=e[4],a=e[1],o=e[3],s=e[5],l=n*o-a*i;return l?(l=1/l,t[0]=o*l,t[1]=-a*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-o*r)*l,t[5]=(a*r-n*s)*l,t):null}function at(t){return t>Ss||t<-Ss}function ot(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function st(t){return(t=Math.round(t))<0?0:t>255?255:t}function lt(t){return st(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function ut(t){return function(t){return t<0?0:t>1?1:t}(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function ht(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function ct(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function ft(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function dt(t,e){Ns&&ft(Ns,e),Ns=Es.put(t,Ns||e.slice())}function pt(t,e){if(t){e=e||[];var n=Es.get(t);if(n)return ft(e,n);var i=(t+="").replace(/ /g,"").toLowerCase();if(i in Os)return ft(e,Os[i]),dt(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),a=i.indexOf(")");if(-1!==r&&a+1===i.length){var o=i.substr(0,r),s=i.substr(r+1,a-(r+1)).split(","),l=1;switch(o){case"rgba":if(4!==s.length)return void ct(e,0,0,0,1);l=ut(s.pop());case"rgb":return 3!==s.length?void ct(e,0,0,0,1):(ct(e,lt(s[0]),lt(s[1]),lt(s[2]),l),dt(t,e),e);case"hsla":return 4!==s.length?void ct(e,0,0,0,1):(s[3]=ut(s[3]),gt(s,e),dt(t,e),e);case"hsl":return 3!==s.length?void ct(e,0,0,0,1):(gt(s,e),dt(t,e),e);default:return}}ct(e,0,0,0,1)}else{if(4===i.length)return(u=parseInt(i.substr(1),16))>=0&&u<=4095?(ct(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),dt(t,e),e):void ct(e,0,0,0,1);if(7===i.length){var u=parseInt(i.substr(1),16);return u>=0&&u<=16777215?(ct(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),dt(t,e),e):void ct(e,0,0,0,1)}}}}function gt(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=ut(t[1]),r=ut(t[2]),a=r<=.5?r*(i+1):r+i-r*i,o=2*r-a;return ct(e=e||[],st(255*ht(o,a,n+1/3)),st(255*ht(o,a,n)),st(255*ht(o,a,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function vt(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}function mt(t,e){return t[e]}function yt(t,e,n){t[e]=n}function _t(t,e,n){return(e-t)*n+t}function xt(t,e,n){return n>.5?e:t}function wt(t,e,n,i,r){var a=t.length;if(1==r)for(s=0;s<a;s++)i[s]=_t(t[s],e[s],n);else for(var o=a&&t[0].length,s=0;s<a;s++)for(var l=0;l<o;l++)i[s][l]=_t(t[s][l],e[s][l],n)}function bt(t,e,n){var i=t.length,r=e.length;if(i!==r)if(i>r)t.length=r;else for(o=i;o<r;o++)t.push(1===n?e[o]:zs.call(e[o]));for(var a=t[0]&&t[0].length,o=0;o<t.length;o++)if(1===n)isNaN(t[o])&&(t[o]=e[o]);else for(var s=0;s<a;s++)isNaN(t[o][s])&&(t[o][s]=e[o][s])}function St(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(a=0;a<i;a++)if(t[a]!==e[a])return!1}else for(var r=t[0].length,a=0;a<i;a++)for(var o=0;o<r;o++)if(t[a][o]!==e[a][o])return!1;return!0}function Mt(t,e,n,i,r,a,o,s,l){var u=t.length;if(1==l)for(c=0;c<u;c++)s[c]=Ct(t[c],e[c],n[c],i[c],r,a,o);else for(var h=t[0].length,c=0;c<u;c++)for(var f=0;f<h;f++)s[c][f]=Ct(t[c][f],e[c][f],n[c][f],i[c][f],r,a,o)}function Ct(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function It(t){if(c(t)){var e=t.length;if(c(t[0])){for(var n=[],i=0;i<e;i++)n.push(zs.call(t[i]));return n}return zs.call(t)}return t}function Tt(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function kt(t,e,n,i,r,a){var o=t._getter,s=t._setter,l="spline"===e,u=i.length;if(u){var h,f=c(i[0].value),d=!1,p=!1,g=f?function(t){var e=t[t.length-1].value;return c(e&&e[0])?2:1}(i):0;i.sort(function(t,e){return t.time-e.time}),h=i[u-1].time;for(var v=[],m=[],y=i[0].value,_=!0,x=0;x<u;x++){v.push(i[x].time/h);var w=i[x].value;if(f&&St(w,y,g)||!f&&w===y||(_=!1),y=w,"string"==typeof w){var b=pt(w);b?(w=b,d=!0):p=!0}m.push(w)}if(a||!_){var S=m[u-1];for(x=0;x<u-1;x++)f?bt(m[x],S,g):!isNaN(m[x])||isNaN(S)||p||d||(m[x]=S);f&&bt(o(t._target,r),S,g);var M,C,I,T,k,D=0,A=0;if(d)var L=[0,0,0,0];var P=new ot({target:t._target,life:h,loop:t._loop,delay:t._delay,onframe:function(t,e){var n;if(e<0)n=0;else if(e<A){for(n=Math.min(D+1,u-1);n>=0&&!(v[n]<=e);n--);n=Math.min(n,u-2)}else{for(n=D;n<u&&!(v[n]>e);n++);n=Math.min(n-1,u-2)}D=n,A=e;var i=v[n+1]-v[n];if(0!==i)if(M=(e-v[n])/i,l)if(I=m[n],C=m[0===n?n:n-1],T=m[n>u-2?u-1:n+1],k=m[n>u-3?u-1:n+2],f)Mt(C,I,T,k,M,M*M,M*M*M,o(t,r),g);else{if(d)a=Mt(C,I,T,k,M,M*M,M*M*M,L,1),a=Tt(L);else{if(p)return xt(I,T,M);a=Ct(C,I,T,k,M,M*M,M*M*M)}s(t,r,a)}else if(f)wt(m[n],m[n+1],M,o(t,r),g);else{var a;if(d)wt(m[n],m[n+1],M,L,1),a=Tt(L);else{if(p)return xt(m[n],m[n+1],M);a=_t(m[n],m[n+1],M)}s(t,r,a)}},ondestroy:n});return e&&"spline"!==e&&(P.easing=e),P}}}function Dt(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function At(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++;!function(t,e,n){for(n--;e<n;){var i=t[e];t[e++]=t[n],t[n--]=i}}(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++;return r-e}function Lt(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var a,o=t[i],s=e,l=i;s<l;)r(o,t[a=s+l>>>1])<0?l=a:s=a+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=o}}function Pt(t,e,n,i,r,a){var o=0,s=0,l=1;if(a(t,e[n+r])>0){for(s=i-r;l<s&&a(t,e[n+r+l])>0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),o+=r,l+=r}else{for(s=r+1;l<s&&a(t,e[n+r-l])<=0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=o;o=r-l,l=r-u}for(o++;o<l;){var h=o+(l-o>>>1);a(t,e[n+h])>0?o=h+1:l=h}return l}function Ot(t,e,n,i,r,a){var o=0,s=0,l=1;if(a(t,e[n+r])<0){for(s=r+1;l<s&&a(t,e[n+r-l])<0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=o;o=r-l,l=r-u}else{for(s=i-r;l<s&&a(t,e[n+r+l])>=0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),o+=r,l+=r}for(o++;o<l;){var h=o+(l-o>>>1);a(t,e[n+h])<0?l=h:o=h+1}return l}function Et(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(r<2)){var a=0;if(r<Ys)return void Lt(t,n,i,n+(a=At(t,n,i,e)),e);var o=new function(t,e){function n(n){var s=a[n],u=o[n],h=a[n+1],c=o[n+1];o[n]=u+c,n===l-3&&(a[n+1]=a[n+2],o[n+1]=o[n+2]),l--;var f=Ot(t[h],t,s,u,0,e);s+=f,0!=(u-=f)&&0!==(c=Pt(t[s+u-1],t,h,c,c-1,e))&&(u<=c?i(s,u,h,c):r(s,u,h,c))}function i(n,i,r,a){var o=0;for(o=0;o<i;o++)u[o]=t[n+o];var l=0,h=r,c=n;if(t[c++]=t[h++],0!=--a)if(1!==i){for(var f,d,p,g=s;;){f=0,d=0,p=!1;do{if(e(t[h],u[l])<0){if(t[c++]=t[h++],d++,f=0,0==--a){p=!0;break}}else if(t[c++]=u[l++],f++,d=0,1==--i){p=!0;break}}while((f|d)<g);if(p)break;do{if(0!==(f=Ot(t[h],u,l,i,0,e))){for(o=0;o<f;o++)t[c+o]=u[l+o];if(c+=f,l+=f,(i-=f)<=1){p=!0;break}}if(t[c++]=t[h++],0==--a){p=!0;break}if(0!==(d=Pt(u[l],t,h,a,0,e))){for(o=0;o<d;o++)t[c+o]=t[h+o];if(c+=d,h+=d,0==(a-=d)){p=!0;break}}if(t[c++]=u[l++],1==--i){p=!0;break}g--}while(f>=Us||d>=Us);if(p)break;g<0&&(g=0),g+=2}if((s=g)<1&&(s=1),1===i){for(o=0;o<a;o++)t[c+o]=t[h+o];t[c+a]=u[l]}else{if(0===i)throw new Error;for(o=0;o<i;o++)t[c+o]=u[l+o]}}else{for(o=0;o<a;o++)t[c+o]=t[h+o];t[c+a]=u[l]}else for(o=0;o<i;o++)t[c+o]=u[l+o]}function r(n,i,r,a){var o=0;for(o=0;o<a;o++)u[o]=t[r+o];var l=n+i-1,h=a-1,c=r+a-1,f=0,d=0;if(t[c--]=t[l--],0!=--i)if(1!==a){for(var p=s;;){var g=0,v=0,m=!1;do{if(e(u[h],t[l])<0){if(t[c--]=t[l--],g++,v=0,0==--i){m=!0;break}}else if(t[c--]=u[h--],v++,g=0,1==--a){m=!0;break}}while((g|v)<p);if(m)break;do{if(0!=(g=i-Ot(u[h],t,n,i,i-1,e))){for(i-=g,d=1+(c-=g),f=1+(l-=g),o=g-1;o>=0;o--)t[d+o]=t[f+o];if(0===i){m=!0;break}}if(t[c--]=u[h--],1==--a){m=!0;break}if(0!=(v=a-Pt(t[l],u,0,a,a-1,e))){for(a-=v,d=1+(c-=v),f=1+(h-=v),o=0;o<v;o++)t[d+o]=u[f+o];if(a<=1){m=!0;break}}if(t[c--]=t[l--],0==--i){m=!0;break}p--}while(g>=Us||v>=Us);if(m)break;p<0&&(p=0),p+=2}if((s=p)<1&&(s=1),1===a){for(d=1+(c-=i),f=1+(l-=i),o=i-1;o>=0;o--)t[d+o]=t[f+o];t[c]=u[h]}else{if(0===a)throw new Error;for(f=c-(a-1),o=0;o<a;o++)t[f+o]=u[o]}}else{for(d=1+(c-=i),f=1+(l-=i),o=i-1;o>=0;o--)t[d+o]=t[f+o];t[c]=u[h]}else for(f=c-(a-1),o=0;o<a;o++)t[f+o]=u[o]}var a,o,s=Us,l=0,u=[];a=[],o=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&o[t-1]<=o[t]+o[t+1]||t>=2&&o[t-2]<=o[t]+o[t-1])o[t-1]<o[t+1]&&t--;else if(o[t]>o[t+1])break;n(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&o[t-1]<o[t+1]&&t--,n(t)}},this.pushRun=function(t,e){a[l]=t,o[l]=e,l+=1}}(t,e),s=function(t){for(var e=0;t>=Ys;)e|=1&t,t>>=1;return t+e}(r);do{if((a=At(t,n,i,e))<s){var l=r;l>s&&(l=s),Lt(t,n,n+l,n+a,e),a=l}o.pushRun(n,a),o.mergeRuns(),r-=a,n+=a}while(0!==r);o.forceMergeRuns()}}function Nt(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function zt(){return!1}function Bt(t,e,n){var i=hs(),r=e.getWidth(),a=e.getHeight(),o=i.style;return o&&(o.position="absolute",o.left=0,o.top=0,o.width=r+"px",o.height=a+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=a*n,i}function Rt(t){if("string"==typeof t){var e=ol.get(t);return e&&e.image}return t}function Ft(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var a=ol.get(t),o={hostEl:n,cb:i,cbPayload:r};return a?!Wt(e=a.image)&&a.pending.push(o):(!e&&(e=new Image),e.onload=Vt,ol.put(t,e.__cachedImgObj={image:e,pending:[o]}),e.src=e.__zrImageSrc=t),e}return t}return e}function Vt(){var t=this.__cachedImgObj;this.onload=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function Wt(t){return t&&t.width&&t.height}function Ht(t,e){var n=t+":"+(e=e||cl);if(sl[n])return sl[n];for(var i=(t+"").split("\n"),r=0,a=0,o=i.length;a<o;a++)r=Math.max(Kt(i[a],e).width,r);return ll>ul&&(ll=0,sl={}),ll++,sl[n]=r,r}function Gt(t,e,n,i,r,a,o){return a?function(t,e,n,i,r,a,o){var s=Jt(t,{rich:a,truncate:o,font:e,textAlign:n,textPadding:r}),l=s.outerWidth,u=s.outerHeight;return new Dt(Xt(0,l,n),jt(0,u,i),l,u)}(t,e,n,i,r,a,o):function(t,e,n,i,r,a){var o=Qt(t,e,r,a),s=Ht(t,e);r&&(s+=r[1]+r[3]);var l=o.outerHeight,u=new Dt(Xt(0,s,n),jt(0,l,i),s,l);return u.lineHeight=o.lineHeight,u}(t,e,n,i,r,o)}function Xt(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function jt(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function qt(t,e,n,i,r){if(!e)return"";var a=(t+"").split("\n");r=Yt(e,n,i,r);for(var o=0,s=a.length;o<s;o++)a[o]=Ut(a[o],r);return a.join("\n")}function Yt(t,e,n,i){(i=a({},i)).font=e;n=T(n,"...");i.maxIterations=T(i.maxIterations,2);var r=i.minChar=T(i.minChar,0);i.cnCharWidth=Ht("国",e);var o=i.ascCharWidth=Ht("a",e);i.placeholder=T(i.placeholder,"");for(var s=t=Math.max(0,t-1),l=0;l<r&&s>=o;l++)s-=o;var u=Ht(n);return u>s&&(n="",u=0),s=t-u,i.ellipsis=n,i.ellipsisWidth=u,i.contentWidth=s,i.containerWidth=t,i}function Ut(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var a=Ht(t,i);if(a<=n)return t;for(var o=0;;o++){if(a<=r||o>=e.maxIterations){t+=e.ellipsis;break}var s=0===o?Zt(t,r,e.ascCharWidth,e.cnCharWidth):a>0?Math.floor(t.length*r/a):0;a=Ht(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function Zt(t,e,n,i){for(var r=0,a=0,o=t.length;a<o&&r<e;a++){var s=t.charCodeAt(a);r+=0<=s&&s<=127?n:i}return a}function $t(t){return Ht("国",t)}function Kt(t,e){return fl.measureText(t,e)}function Qt(t,e,n,i){null!=t&&(t+="");var r=$t(e),a=t?t.split("\n"):[],o=a.length*r,s=o;if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,u=i.outerWidth;if(null!=l&&s>l)t="",a=[];else if(null!=u)for(var h=Yt(u-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),c=0,f=a.length;c<f;c++)a[c]=Ut(a[c],h)}return{lines:a,height:o,outerHeight:s,lineHeight:r}}function Jt(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=hl.lastIndex=0;null!=(i=hl.exec(t));){var a=i.index;a>r&&te(n,t.substring(r,a)),te(n,i[2],i[1]),r=hl.lastIndex}r<t.length&&te(n,t.substring(r,t.length));var o=n.lines,s=0,l=0,u=[],h=e.textPadding,c=e.truncate,f=c&&c.outerWidth,d=c&&c.outerHeight;for(h&&(null!=f&&(f-=h[1]+h[3]),null!=d&&(d-=h[0]+h[2])),A=0;A<o.length;A++){for(var p=o[A],g=0,v=0,m=0;m<p.tokens.length;m++){var y=(L=p.tokens[m]).styleName&&e.rich[L.styleName]||{},_=L.textPadding=y.textPadding,x=L.font=y.font||e.font,w=L.textHeight=T(y.textHeight,$t(x));if(_&&(w+=_[0]+_[2]),L.height=w,L.lineHeight=k(y.textLineHeight,e.textLineHeight,w),L.textAlign=y&&y.textAlign||e.textAlign,L.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=d&&s+L.lineHeight>d)return{lines:[],width:0,height:0};L.textWidth=Ht(L.text,x);var b=y.textWidth,S=null==b||"auto"===b;if("string"==typeof b&&"%"===b.charAt(b.length-1))L.percentWidth=b,u.push(L),b=0;else{if(S){b=L.textWidth;var M=y.textBackgroundColor,C=M&&M.image;C&&Wt(C=Rt(C))&&(b=Math.max(b,C.width*w/C.height))}var I=_?_[1]+_[3]:0;b+=I;var D=null!=f?f-v:null;null!=D&&D<b&&(!S||D<I?(L.text="",L.textWidth=b=0):(L.text=qt(L.text,D-I,x,c.ellipsis,{minChar:c.minChar}),L.textWidth=Ht(L.text,x),b=L.textWidth+I))}v+=L.width=b,y&&(g=Math.max(g,L.lineHeight))}p.width=v,p.lineHeight=g,s+=g,l=Math.max(l,v)}n.outerWidth=n.width=T(e.textWidth,l),n.outerHeight=n.height=T(e.textHeight,s),h&&(n.outerWidth+=h[1]+h[3],n.outerHeight+=h[0]+h[2]);for(var A=0;A<u.length;A++){var L=u[A],P=L.percentWidth;L.width=parseInt(P,10)/100*l}return n}function te(t,e,n){for(var i=""===e,r=e.split("\n"),a=t.lines,o=0;o<r.length;o++){var s=r[o],l={styleName:n,text:s,isLineHolder:!s&&!i};if(o)a.push({tokens:[l]});else{var u=(a[a.length-1]||(a[0]={tokens:[]})).tokens,h=u.length;1===h&&u[0].isLineHolder?u[0]=l:(s||!h||i)&&u.push(l)}}}function ee(t,e){var n,i,r,a,o,s=e.x,l=e.y,u=e.width,h=e.height,c=e.r;u<0&&(s+=u,u=-u),h<0&&(l+=h,h=-h),"number"==typeof c?n=i=r=a=c:c instanceof Array?1===c.length?n=i=r=a=c[0]:2===c.length?(n=r=c[0],i=a=c[1]):3===c.length?(n=c[0],i=a=c[1],r=c[2]):(n=c[0],i=c[1],r=c[2],a=c[3]):n=i=r=a=0,n+i>u&&(n*=u/(o=n+i),i*=u/o),r+a>u&&(r*=u/(o=r+a),a*=u/o),i+r>h&&(i*=h/(o=i+r),r*=h/o),n+a>h&&(n*=h/(o=n+a),a*=h/o),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+h-r),0!==r&&t.arc(s+u-r,l+h-r,r,0,Math.PI/2),t.lineTo(s+a,l+h),0!==a&&t.arc(s+a,l+h-a,a,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}function ne(t){return ie(t),f(t.rich,ie),t}function ie(t){if(t){t.font=function(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&P(e)||t.textFont||t.font}(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||dl[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||pl[n]?n:"top",t.textPadding&&(t.textPadding=A(t.textPadding))}}function re(t,e,n,i,r){i.rich?function(t,e,n,i,r){var a=t.__textCotentBlock;a&&!t.__dirty||(a=t.__textCotentBlock=Jt(n,i)),function(t,e,n,i,r){var a=n.width,o=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=he(s,i,r),h=u.baseX,c=u.baseY,f=u.textAlign,d=u.textVerticalAlign;ae(e,i,r,h,c);var p=Xt(h,o,f),g=jt(c,s,d),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+a;se(i)&&le(t,e,i,p,g,o,s);for(var _=0;_<n.lines.length;_++){for(var x,w=n.lines[_],b=w.tokens,S=b.length,M=w.lineHeight,C=w.width,I=0,T=v,k=y,D=S-1;I<S&&(!(x=b[I]).textAlign||"left"===x.textAlign);)oe(t,e,x,i,M,m,T,"left"),C-=x.width,T+=x.width,I++;for(;D>=0&&"right"===(x=b[D]).textAlign;)oe(t,e,x,i,M,m,k,"right"),C-=x.width,k-=x.width,D--;for(T+=(a-(T-v)-(y-k)-C)/2;I<=D;)oe(t,e,x=b[I],i,M,m,T+x.width/2,"center"),T+=x.width,I++;m+=M}}(t,e,a,i,r)}(t,e,n,i,r):function(t,e,n,i,r){var a=ce(e,"font",i.font||cl),o=i.textPadding,s=t.__textCotentBlock;s&&!t.__dirty||(s=t.__textCotentBlock=Qt(n,a,o,i.truncate));var l=s.outerHeight,u=s.lines,h=s.lineHeight,c=he(l,i,r),f=c.baseX,d=c.baseY,p=c.textAlign,g=c.textVerticalAlign;ae(e,i,r,f,d);var v=jt(d,l,g),m=f,y=v,_=se(i);if(_||o){var x=Ht(n,a);o&&(x+=o[1]+o[3]);var w=Xt(f,x,p);_&&le(t,e,i,w,v,x,l),o&&(m=ge(f,p,o),y+=o[0])}ce(e,"textAlign",p||"left"),ce(e,"textBaseline","middle"),ce(e,"shadowBlur",i.textShadowBlur||0),ce(e,"shadowColor",i.textShadowColor||"transparent"),ce(e,"shadowOffsetX",i.textShadowOffsetX||0),ce(e,"shadowOffsetY",i.textShadowOffsetY||0),y+=h/2;var b=i.textStrokeWidth,S=fe(i.textStroke,b),M=de(i.textFill);S&&(ce(e,"lineWidth",b),ce(e,"strokeStyle",S)),M&&ce(e,"fillStyle",M);for(var C=0;C<u.length;C++)S&&e.strokeText(u[C],m,y),M&&e.fillText(u[C],m,y),y+=h}(t,e,n,i,r)}function ae(t,e,n,i,r){if(n&&e.textRotation){var a=e.textOrigin;"center"===a?(i=n.width/2+n.x,r=n.height/2+n.y):a&&(i=a[0]+n.x,r=a[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function oe(t,e,n,i,r,a,o,s){var l=i.rich[n.styleName]||{},u=n.textVerticalAlign,h=a+r/2;"top"===u?h=a+n.height/2:"bottom"===u&&(h=a+r-n.height/2),!n.isLineHolder&&se(l)&&le(t,e,l,"right"===s?o-n.width:"center"===s?o-n.width/2:o,h-n.height/2,n.width,n.height);var c=n.textPadding;c&&(o=ge(o,s,c),h-=n.height/2-c[2]-n.textHeight/2),ce(e,"shadowBlur",k(l.textShadowBlur,i.textShadowBlur,0)),ce(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),ce(e,"shadowOffsetX",k(l.textShadowOffsetX,i.textShadowOffsetX,0)),ce(e,"shadowOffsetY",k(l.textShadowOffsetY,i.textShadowOffsetY,0)),ce(e,"textAlign",s),ce(e,"textBaseline","middle"),ce(e,"font",n.font||cl);var f=fe(l.textStroke||i.textStroke,p),d=de(l.textFill||i.textFill),p=T(l.textStrokeWidth,i.textStrokeWidth);f&&(ce(e,"lineWidth",p),ce(e,"strokeStyle",f),e.strokeText(n.text,o,h)),d&&(ce(e,"fillStyle",d),e.fillText(n.text,o,h))}function se(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function le(t,e,n,i,r,a,o){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,h=x(s);if(ce(e,"shadowBlur",n.textBoxShadowBlur||0),ce(e,"shadowColor",n.textBoxShadowColor||"transparent"),ce(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),ce(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),h||l&&u){e.beginPath();var c=n.textBorderRadius;c?ee(e,{x:i,y:r,width:a,height:o,r:c}):e.rect(i,r,a,o),e.closePath()}if(h)ce(e,"fillStyle",s),e.fill();else if(w(s)){var f=s.image;(f=Ft(f,null,t,ue,s))&&Wt(f)&&e.drawImage(f,i,r,a,o)}l&&u&&(ce(e,"lineWidth",l),ce(e,"strokeStyle",u),e.stroke())}function ue(t,e){e.image=t}function he(t,e,n){var i=e.x||0,r=e.y||0,a=e.textAlign,o=e.textVerticalAlign;if(n){var s=e.textPosition;if(s instanceof Array)i=n.x+pe(s[0],n.width),r=n.y+pe(s[1],n.height);else{var l=function(t,e,n){var i=e.x,r=e.y,a=e.height,o=e.width,s=a/2,l="left",u="top";switch(t){case"left":i-=n,r+=s,l="right",u="middle";break;case"right":i+=n+o,r+=s,u="middle";break;case"top":i+=o/2,r-=n,l="center",u="bottom";break;case"bottom":i+=o/2,r+=a+n,l="center";break;case"inside":i+=o/2,r+=s,l="center",u="middle";break;case"insideLeft":i+=n,r+=s,u="middle";break;case"insideRight":i+=o-n,r+=s,l="right",u="middle";break;case"insideTop":i+=o/2,r+=n,l="center";break;case"insideBottom":i+=o/2,r+=a-n,l="center",u="bottom";break;case"insideTopLeft":i+=n,r+=n;break;case"insideTopRight":i+=o-n,r+=n,l="right";break;case"insideBottomLeft":i+=n,r+=a-n,u="bottom";break;case"insideBottomRight":i+=o-n,r+=a-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}}(s,n,e.textDistance);i=l.x,r=l.y,a=a||l.textAlign,o=o||l.textVerticalAlign}var u=e.textOffset;u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:a,textVerticalAlign:o}}function ce(t,e,n){return t[e]=Ks(t,e,n),t[e]}function fe(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function de(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function pe(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function ge(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function ve(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function me(t){for(var e in t=t||{},Hs.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new Js(t.style,this),this._rect=null,this.__clipPaths=[]}function ye(t){me.call(this,t)}function _e(t){return parseInt(t,10)}function xe(t,e,n,i){return n=n||{},i||!Jo.canvasSupported?we(t,e,n):Jo.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):we(t,e,n),n}function we(t,e,n){var i=function(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}(t);n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}function be(t,n,i){if(null!=(n=n||e.event).zrX)return n;var r=n.type;if(r&&r.indexOf("touch")>=0){var a="touchend"!=r?n.targetTouches[0]:n.changedTouches[0];a&&xe(t,a,n,i)}else xe(t,n,n,i),n.zrDelta=n.wheelDelta?n.wheelDelta/120:-(n.detail||0)/3;var o=n.button;return null==n.which&&void 0!==o&&wl.test(n.type)&&(n.which=1&o?1:2&o?3:4&o?2:0),n}function Se(t,e,n){xl?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function Me(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function Ce(t){return"mousewheel"===t&&Jo.browser.firefox?"DOMMouseScroll":t}function Ie(t,e,n){var i=t._gestureMgr;"start"===n&&i.clear();var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===n&&i.clear(),r){var a=r.type;e.gestureEvent=a,t.handler.dispatchToElement({target:r.target},a,r.event)}}function Te(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function ke(t){var e=t.pointerType;return"pen"===e||"touch"===e}function De(t){function e(e,n){f(e,function(e){!function(t,e,n){xl?t.addEventListener(e,n):t.attachEvent("on"+e,n)}(t,Ce(e),n._handlers[e])},n)}ms.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new Sl,this._handlers={},function(t){f(Il,function(e){t._handlers[e]=v(Dl[e],t)}),f(kl,function(e){t._handlers[e]=v(Dl[e],t)}),f(Cl,function(e){t._handlers[e]=function(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}(Dl[e],t)})}(this),Jo.pointerEventsSupported?e(kl,this):(Jo.touchEventsSupported&&e(Il,this),e(Cl,this))}function Ae(t,e){return new Ol(Qo(),t,e)}function Le(t){return t instanceof Array?t:null==t?[]:[t]}function Pe(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;i<r;i++){var a=n[i];!t.emphasis[e].hasOwnProperty(a)&&t[e].hasOwnProperty(a)&&(t.emphasis[e][a]=t[e][a])}}}function Oe(t){return!Nl(t)||zl(t)||t instanceof Date?t:t.value}function Ee(t,e){e=(e||[]).slice();var n=d(t||[],function(t,e){return{exist:t}});return El(e,function(t,i){if(Nl(t)){for(r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(var r=0;r<n.length;r++){var a=n[r].exist;if(!(n[r].option||null!=a.id&&null!=t.id||null==t.name||ze(t)||ze(a)||a.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),El(e,function(t,e){if(Nl(t)){for(var i=0;i<n.length;i++){var r=n[i].exist;if(!n[i].option&&!ze(r)&&null==t.id){n[i].option=t;break}}i>=n.length&&n.push({option:t})}}),n}function Ne(t){var e=t.name;return!(!e||!e.indexOf(Bl))}function ze(t){return Nl(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function Be(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?y(e.dataIndex)?d(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?y(e.name)?d(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function Re(){var t="__\0ec_inner_"+Fl+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function Fe(t,e,n){if(x(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||Ve(e,r+"Index")||Ve(e,r+"Id")||Ve(e,r+"Name")||(e[r+"Index"]=0);var a={};return El(e,function(i,r){i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var o=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=o[1],u=(o[2]||"").toLowerCase();if(!(!s||!u||null==i||"index"===u&&"none"===i||n&&n.includeMainTypes&&l(n.includeMainTypes,s)<0)){var h={mainType:s};"index"===u&&"all"===i||(h[u]=i);var c=t.queryComponents(h);a[s+"Models"]=c,a[s+"Model"]=c[0]}}else a[r]=i}),a}function Ve(t,e){return t&&t.hasOwnProperty(e)}function We(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function He(t){var e={main:"",sub:""};return t&&(t=t.split(Vl),e.main=t[0]||"",e.sub=t[1]||""),e}function Ge(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return a(n.prototype,t),n.extend=this.extend,n.superCall=je,n.superApply=qe,u(n,this),n.superClass=e,n}}function Xe(t){var e=["__\0is_clz",Hl++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function je(t,e){var n=D(arguments,2);return this.superClass.prototype[e].apply(t,n)}function qe(t,e,n){return this.superClass.prototype[e].apply(t,n)}function Ye(t,e){e=e||{};var n={};if(t.registerClass=function(t,e){return e&&(function(t){L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}(e),(e=He(e)).sub?e.sub!==Wl&&((function(t){var e=n[t.main];return e&&e[Wl]||((e=n[t.main]={})[Wl]=!0),e}(e))[e.sub]=t):n[e.main]=t),t},t.getClass=function(t,e,i){var r=n[t];if(r&&r[Wl]&&(r=e?r[e]:null),i&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=He(t);var e=[],i=n[t.main];return i&&i[Wl]?f(i,function(t,n){n!==Wl&&e.push(t)}):e.push(i),e},t.hasClass=function(t){return t=He(t),!!n[t.main]},t.getAllClassMainTypes=function(){var t=[];return f(n,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=He(t);var e=n[t.main];return e&&e[Wl]},t.parseClassType=He,e.registerWhenExtend){var i=t.extend;i&&(t.extend=function(e){var n=i.call(this,e);return t.registerClass(n,e.type)})}return t}function Ue(t){return t>-$l&&t<$l}function Ze(t){return t>$l||t<-$l}function $e(t,e,n,i,r){var a=1-r;return a*a*(a*t+3*r*e)+r*r*(r*i+3*a*n)}function Ke(t,e,n,i,r){var a=1-r;return 3*(((e-t)*a+2*(n-e)*r)*a+(i-n)*r*r)}function Qe(t,e,n,i,r){var a=6*n-12*e+6*t,o=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(Ue(o))Ze(a)&&(c=-s/a)>=0&&c<=1&&(r[l++]=c);else{var u=a*a-4*o*s;if(Ue(u))r[0]=-a/(2*o);else if(u>0){var h=Zl(u),c=(-a+h)/(2*o),f=(-a-h)/(2*o);c>=0&&c<=1&&(r[l++]=c),f>=0&&f<=1&&(r[l++]=f)}}return l}function Je(t,e,n,i,r,a){var o=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-o)*r+o,h=(l-s)*r+s,c=(h-u)*r+u;a[0]=t,a[1]=o,a[2]=u,a[3]=c,a[4]=c,a[5]=h,a[6]=l,a[7]=i}function tn(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function en(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function nn(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function rn(t,e,n,i,r){var a=(e-t)*i+t,o=(n-e)*i+e,s=(o-a)*i+a;r[0]=t,r[1]=a,r[2]=s,r[3]=s,r[4]=o,r[5]=n}function an(t,e,n,i,r,a){r[0]=iu(t,n),r[1]=iu(e,i),a[0]=ru(t,n),a[1]=ru(e,i)}function on(t,e,n,i,r,a,o,s,l,u){var h,c=Qe,f=$e,d=c(t,n,r,o,cu);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,h=0;h<d;h++){var p=f(t,n,r,o,cu[h]);l[0]=iu(p,l[0]),u[0]=ru(p,u[0])}for(d=c(e,i,a,s,fu),h=0;h<d;h++){var g=f(e,i,a,s,fu[h]);l[1]=iu(g,l[1]),u[1]=ru(g,u[1])}l[0]=iu(t,l[0]),u[0]=ru(t,u[0]),l[0]=iu(o,l[0]),u[0]=ru(o,u[0]),l[1]=iu(e,l[1]),u[1]=ru(e,u[1]),l[1]=iu(s,l[1]),u[1]=ru(s,u[1])}function sn(t,e,n,i,r,a,o,s){var l=nn,u=tn,h=ru(iu(l(t,n,r),1),0),c=ru(iu(l(e,i,a),1),0),f=u(t,n,r,h),d=u(e,i,a,c);o[0]=iu(t,r,f),o[1]=iu(e,a,d),s[0]=ru(t,r,f),s[1]=ru(e,a,d)}function ln(t,e,n,i,r,a,o,s,l){var u=q,h=Y,c=Math.abs(r-a);if(c%su<1e-4&&c>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(lu[0]=ou(r)*n+t,lu[1]=au(r)*i+e,uu[0]=ou(a)*n+t,uu[1]=au(a)*i+e,u(s,lu,uu),h(l,lu,uu),(r%=su)<0&&(r+=su),(a%=su)<0&&(a+=su),r>a&&!o?a+=su:r<a&&o&&(r+=su),o){var f=a;a=r,r=f}for(var d=0;d<a;d+=Math.PI/2)d>r&&(hu[0]=ou(d)*n+t,hu[1]=au(d)*i+e,u(s,hu,s),h(l,hu,l))}function un(t,e,n,i,r,a,o){if(0===r)return!1;var s,l=r;if(o>e+l&&o>i+l||o<e-l&&o<i-l||a>t+l&&a>n+l||a<t-l&&a<n-l)return!1;if(t===n)return Math.abs(a-t)<=l/2;var u=(s=(e-i)/(t-n))*a-o+(t*i-n*e)/(t-n);return u*u/(s*s+1)<=l/2*l/2}function hn(t,e,n,i,r,a,o,s,l,u,h){if(0===l)return!1;var c=l;return!(h>e+c&&h>i+c&&h>a+c&&h>s+c||h<e-c&&h<i-c&&h<a-c&&h<s-c||u>t+c&&u>n+c&&u>r+c&&u>o+c||u<t-c&&u<n-c&&u<r-c&&u<o-c)&&function(t,e,n,i,r,a,o,s,l,u,h){var c,f,d,p,g,v=.005,m=1/0;tu[0]=l,tu[1]=u;for(var y=0;y<1;y+=.05)eu[0]=$e(t,n,r,o,y),eu[1]=$e(e,i,a,s,y),(p=gs(tu,eu))<m&&(c=y,m=p);m=1/0;for(var _=0;_<32&&!(v<Kl);_++)f=c-v,d=c+v,eu[0]=$e(t,n,r,o,f),eu[1]=$e(e,i,a,s,f),p=gs(eu,tu),f>=0&&p<m?(c=f,m=p):(nu[0]=$e(t,n,r,o,d),nu[1]=$e(e,i,a,s,d),g=gs(nu,tu),d<=1&&g<m?(c=d,m=g):v*=.5);return h&&(h[0]=$e(t,n,r,o,c),h[1]=$e(e,i,a,s,c)),Zl(m)}(t,e,n,i,r,a,o,s,u,h,null)<=c/2}function cn(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var u=o;return!(l>e+u&&l>i+u&&l>a+u||l<e-u&&l<i-u&&l<a-u||s>t+u&&s>n+u&&s>r+u||s<t-u&&s<n-u&&s<r-u)&&function(t,e,n,i,r,a,o,s,l){var u,h=.005,c=1/0;tu[0]=o,tu[1]=s;for(var f=0;f<1;f+=.05)eu[0]=tn(t,n,r,f),eu[1]=tn(e,i,a,f),(v=gs(tu,eu))<c&&(u=f,c=v);c=1/0;for(var d=0;d<32&&!(h<Kl);d++){var p=u-h,g=u+h;eu[0]=tn(t,n,r,p),eu[1]=tn(e,i,a,p);var v=gs(eu,tu);if(p>=0&&v<c)u=p,c=v;else{nu[0]=tn(t,n,r,g),nu[1]=tn(e,i,a,g);var m=gs(nu,tu);g<=1&&m<c?(u=g,c=m):h*=.5}}return l&&(l[0]=tn(t,n,r,u),l[1]=tn(e,i,a,u)),Zl(c)}(t,e,n,i,r,a,s,l,null)<=u/2}function fn(t){return(t%=Iu)<0&&(t+=Iu),t}function dn(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var u=o;s-=t,l-=e;var h=Math.sqrt(s*s+l*l);if(h-u>n||h+u<n)return!1;if(Math.abs(i-r)%Tu<1e-4)return!0;if(a){var c=i;i=fn(r),r=fn(c)}else i=fn(i),r=fn(r);i>r&&(r+=Tu);var f=Math.atan2(l,s);return f<0&&(f+=Tu),f>=i&&f<=r||f+Tu>=i&&f+Tu<=r}function pn(t,e,n,i,r,a){if(a>e&&a>i||a<e&&a<i)return 0;if(i===e)return 0;var o=i<e?1:-1,s=(a-e)/(i-e);1!==s&&0!==s||(o=i<e?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?o:0}function gn(){var t=Pu[0];Pu[0]=Pu[1],Pu[1]=t}function vn(t,e,n,i,r,a,o,s,l,u){if(u>e&&u>i&&u>a&&u>s||u<e&&u<i&&u<a&&u<s)return 0;var h=function(t,e,n,i,r,a){var o=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,h=s*s-3*o*l,c=s*l-9*o*u,f=l*l-3*s*u,d=0;if(Ue(h)&&Ue(c))Ue(s)?a[0]=0:(M=-l/s)>=0&&M<=1&&(a[d++]=M);else{var p=c*c-4*h*f;if(Ue(p)){var g=c/h,v=-g/2;(M=-s/o+g)>=0&&M<=1&&(a[d++]=M),v>=0&&v<=1&&(a[d++]=v)}else if(p>0){var m=Zl(p),y=h*s+1.5*o*(-c+m),_=h*s+1.5*o*(-c-m);(M=(-s-((y=y<0?-Ul(-y,Jl):Ul(y,Jl))+(_=_<0?-Ul(-_,Jl):Ul(_,Jl))))/(3*o))>=0&&M<=1&&(a[d++]=M)}else{var x=(2*h*s-3*o*c)/(2*Zl(h*h*h)),w=Math.acos(x)/3,b=Zl(h),S=Math.cos(w),M=(-s-2*b*S)/(3*o),C=(v=(-s+b*(S+Ql*Math.sin(w)))/(3*o),(-s+b*(S-Ql*Math.sin(w)))/(3*o));M>=0&&M<=1&&(a[d++]=M),v>=0&&v<=1&&(a[d++]=v),C>=0&&C<=1&&(a[d++]=C)}}return d}(e,i,a,s,u,Lu);if(0===h)return 0;for(var c,f,d=0,p=-1,g=0;g<h;g++){var v=Lu[g],m=0===v||1===v?.5:1;$e(t,n,r,o,v)<l||(p<0&&(p=Qe(e,i,a,s,Pu),Pu[1]<Pu[0]&&p>1&&gn(),c=$e(e,i,a,s,Pu[0]),p>1&&(f=$e(e,i,a,s,Pu[1]))),2==p?v<Pu[0]?d+=c<e?m:-m:v<Pu[1]?d+=f<c?m:-m:d+=s<f?m:-m:v<Pu[0]?d+=c<e?m:-m:d+=s<c?m:-m)}return d}function mn(t,e,n,i,r,a,o,s){if(s>e&&s>i&&s>a||s<e&&s<i&&s<a)return 0;var l=function(t,e,n,i,r){var a=t-2*e+n,o=2*(e-t),s=t-i,l=0;if(Ue(a))Ze(o)&&(c=-s/o)>=0&&c<=1&&(r[l++]=c);else{var u=o*o-4*a*s;if(Ue(u))(c=-o/(2*a))>=0&&c<=1&&(r[l++]=c);else if(u>0){var h=Zl(u),c=(-o+h)/(2*a),f=(-o-h)/(2*a);c>=0&&c<=1&&(r[l++]=c),f>=0&&f<=1&&(r[l++]=f)}}return l}(e,i,a,s,Lu);if(0===l)return 0;var u=nn(e,i,a);if(u>=0&&u<=1){for(var h=0,c=tn(e,i,a,u),f=0;f<l;f++)d=0===Lu[f]||1===Lu[f]?.5:1,(p=tn(t,n,r,Lu[f]))<o||(Lu[f]<u?h+=c<e?d:-d:h+=a<c?d:-d);return h}var d=0===Lu[0]||1===Lu[0]?.5:1,p=tn(t,n,r,Lu[0]);return p<o?0:a<e?d:-d}function yn(t,e,n,i,r,a,o,s){if((s-=e)>n||s<-n)return 0;u=Math.sqrt(n*n-s*s),Lu[0]=-u,Lu[1]=u;var l=Math.abs(i-r);if(l<1e-4)return 0;if(l%Du<1e-4)return i=0,r=Du,p=a?1:-1,o>=Lu[0]+t&&o<=Lu[1]+t?p:0;if(a){var u=i;i=fn(r),r=fn(u)}else i=fn(i),r=fn(r);i>r&&(r+=Du);for(var h=0,c=0;c<2;c++){var f=Lu[c];if(f+t>o){var d=Math.atan2(s,f),p=a?1:-1;d<0&&(d=Du+d),(d>=i&&d<=r||d+Du>=i&&d+Du<=r)&&(d>Math.PI/2&&d<1.5*Math.PI&&(p=-p),h+=p)}}return h}function _n(t,e,n,i,r){for(var a=0,o=0,s=0,l=0,u=0,h=0;h<t.length;){var c=t[h++];switch(c===ku.M&&h>1&&(n||(a+=pn(o,s,l,u,i,r))),1==h&&(l=o=t[h],u=s=t[h+1]),c){case ku.M:o=l=t[h++],s=u=t[h++];break;case ku.L:if(n){if(un(o,s,t[h],t[h+1],e,i,r))return!0}else a+=pn(o,s,t[h],t[h+1],i,r)||0;o=t[h++],s=t[h++];break;case ku.C:if(n){if(hn(o,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],e,i,r))return!0}else a+=vn(o,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],i,r)||0;o=t[h++],s=t[h++];break;case ku.Q:if(n){if(cn(o,s,t[h++],t[h++],t[h],t[h+1],e,i,r))return!0}else a+=mn(o,s,t[h++],t[h++],t[h],t[h+1],i,r)||0;o=t[h++],s=t[h++];break;case ku.A:var f=t[h++],d=t[h++],p=t[h++],g=t[h++],v=t[h++],m=t[h++],y=(t[h++],1-t[h++]),_=Math.cos(v)*p+f,x=Math.sin(v)*g+d;h>1?a+=pn(o,s,_,x,i,r):(l=_,u=x);var w=(i-f)*g/p+f;if(n){if(dn(f,d,g,v,v+m,y,e,w,r))return!0}else a+=yn(f,d,g,v,v+m,y,w,r);o=Math.cos(v+m)*p+f,s=Math.sin(v+m)*g+d;break;case ku.R:l=o=t[h++],u=s=t[h++];_=l+t[h++],x=u+t[h++];if(n){if(un(l,u,_,u,e,i,r)||un(_,u,_,x,e,i,r)||un(_,x,l,x,e,i,r)||un(l,x,l,u,e,i,r))return!0}else a+=pn(_,u,_,x,i,r),a+=pn(l,x,l,u,i,r);break;case ku.Z:if(n){if(un(o,s,l,u,e,i,r))return!0}else a+=pn(o,s,l,u,i,r);o=l,s=u}}return n||function(t,e){return Math.abs(t-e)<Au}(s,u)||(a+=pn(o,s,l,u,i,r)||0),0!==a}function xn(t){me.call(this,t),this.path=null}function wn(t,e,n,i,r,a,o,s,l,u,h){var c=l*(ju/180),f=Xu(c)*(t-n)/2+Gu(c)*(e-i)/2,d=-1*Gu(c)*(t-n)/2+Xu(c)*(e-i)/2,p=f*f/(o*o)+d*d/(s*s);p>1&&(o*=Hu(p),s*=Hu(p));var g=(r===a?-1:1)*Hu((o*o*(s*s)-o*o*(d*d)-s*s*(f*f))/(o*o*(d*d)+s*s*(f*f)))||0,v=g*o*d/s,m=g*-s*f/o,y=(t+n)/2+Xu(c)*v-Gu(c)*m,_=(e+i)/2+Gu(c)*v+Xu(c)*m,x=Uu([1,0],[(f-v)/o,(d-m)/s]),w=[(f-v)/o,(d-m)/s],b=[(-1*f-v)/o,(-1*d-m)/s],S=Uu(w,b);Yu(w,b)<=-1&&(S=ju),Yu(w,b)>=1&&(S=0),0===a&&S>0&&(S-=2*ju),1===a&&S<0&&(S+=2*ju),h.addData(u,y,_,o,s,x,S,c,a)}function bn(t,e){var n=function(t){if(!t)return[];var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<Wu.length;e++)n=n.replace(new RegExp(Wu[e],"g"),"|"+Wu[e]);var i,r=n.split("|"),a=0,o=0,s=new Cu,l=Cu.CMD;for(e=1;e<r.length;e++){var u,h=r[e],c=h.charAt(0),f=0,d=h.slice(1).replace(/e,-/g,"e-").split(",");d.length>0&&""===d[0]&&d.shift();for(var p=0;p<d.length;p++)d[p]=parseFloat(d[p]);for(;f<d.length&&!isNaN(d[f])&&!isNaN(d[0]);){var g,v,m,y,_,x,w,b=a,S=o;switch(c){case"l":a+=d[f++],o+=d[f++],u=l.L,s.addData(u,a,o);break;case"L":a=d[f++],o=d[f++],u=l.L,s.addData(u,a,o);break;case"m":a+=d[f++],o+=d[f++],u=l.M,s.addData(u,a,o),c="l";break;case"M":a=d[f++],o=d[f++],u=l.M,s.addData(u,a,o),c="L";break;case"h":a+=d[f++],u=l.L,s.addData(u,a,o);break;case"H":a=d[f++],u=l.L,s.addData(u,a,o);break;case"v":o+=d[f++],u=l.L,s.addData(u,a,o);break;case"V":o=d[f++],u=l.L,s.addData(u,a,o);break;case"C":u=l.C,s.addData(u,d[f++],d[f++],d[f++],d[f++],d[f++],d[f++]),a=d[f-2],o=d[f-1];break;case"c":u=l.C,s.addData(u,d[f++]+a,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a,d[f++]+o),a+=d[f-2],o+=d[f-1];break;case"S":g=a,v=o;var M=s.len(),C=s.data;i===l.C&&(g+=a-C[M-4],v+=o-C[M-3]),u=l.C,b=d[f++],S=d[f++],a=d[f++],o=d[f++],s.addData(u,g,v,b,S,a,o);break;case"s":g=a,v=o,M=s.len(),C=s.data,i===l.C&&(g+=a-C[M-4],v+=o-C[M-3]),u=l.C,b=a+d[f++],S=o+d[f++],a+=d[f++],o+=d[f++],s.addData(u,g,v,b,S,a,o);break;case"Q":b=d[f++],S=d[f++],a=d[f++],o=d[f++],u=l.Q,s.addData(u,b,S,a,o);break;case"q":b=d[f++]+a,S=d[f++]+o,a+=d[f++],o+=d[f++],u=l.Q,s.addData(u,b,S,a,o);break;case"T":g=a,v=o,M=s.len(),C=s.data,i===l.Q&&(g+=a-C[M-4],v+=o-C[M-3]),a=d[f++],o=d[f++],u=l.Q,s.addData(u,g,v,a,o);break;case"t":g=a,v=o,M=s.len(),C=s.data,i===l.Q&&(g+=a-C[M-4],v+=o-C[M-3]),a+=d[f++],o+=d[f++],u=l.Q,s.addData(u,g,v,a,o);break;case"A":m=d[f++],y=d[f++],_=d[f++],x=d[f++],w=d[f++],wn(b=a,S=o,a=d[f++],o=d[f++],x,w,m,y,_,u=l.A,s);break;case"a":m=d[f++],y=d[f++],_=d[f++],x=d[f++],w=d[f++],wn(b=a,S=o,a+=d[f++],o+=d[f++],x,w,m,y,_,u=l.A,s)}}"z"!==c&&"Z"!==c||(u=l.Z,s.addData(u)),i=u}return s.toStatic(),s}(t);return(e=e||{}).buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){Vu(n,t),this.dirty(!0)},e}function Sn(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function Mn(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var a=nh(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var o=i.length,s=0;s<(n?o:o-1);s++){var l=a[2*s],u=a[2*s+1],h=i[(s+1)%o];t.bezierCurveTo(l[0],l[1],u[0],u[1],h[0],h[1])}}else{"spline"===r&&(i=eh(i,n)),t.moveTo(i[0][0],i[0][1]);s=1;for(var c=i.length;s<c;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function Cn(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?Ke:$e)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?Ke:$e)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?en:tn)(t.x1,t.cpx1,t.x2,e),(n?en:tn)(t.y1,t.cpy1,t.y2,e)]}function In(t){me.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function Tn(t){return xn.extend(t)}function kn(t,e,n,i){var r=function(t,e){return new xn(bn(t,e))}(t,e),a=r.getBoundingRect();return n&&("center"===i&&(n=An(n,a)),Ln(r,n)),r}function Dn(t,e,n){var i=new ye({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(An(e,r))}}});return i}function An(t,e){var n,i=e.width/e.height,r=t.height*i;return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}function Ln(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e);t.applyTransform(n)}}function Pn(t){var e=t.shape,n=t.style.lineWidth;return gh(2*e.x1)===gh(2*e.x2)&&(e.x1=e.x2=On(e.x1,n,!0)),gh(2*e.y1)===gh(2*e.y2)&&(e.y1=e.y2=On(e.y1,n,!0)),t}function On(t,e,n){var i=gh(2*t);return(i+gh(e))%2==0?i/2:(i+(n?1:-1))/2}function En(t){return null!=t&&"none"!=t}function Nn(t){return"string"==typeof t?function(t,e){var n=pt(t);if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return vt(n,4===n.length?"rgba":"rgb")}}(t,-.1):t}function zn(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,i=t.__hoverStl;i.fill=i.fill||(En(n)?Nn(n):null),i.stroke=i.stroke||(En(e)?Nn(e):null);var r={};for(var a in i)null!=i[a]&&(r[a]=t.style[a]);t.__normalStl=r,t.__hoverStlDirty=!1}}function Bn(t){if(!t.__isHover){if(zn(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl);else{var e=t.style,n=e.insideRollbackOpt;n&&function(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}(e),e.extendFrom(t.__hoverStl),n&&(Qn(e,e.insideOriginalTextPosition,n),null==e.textFill&&(e.textFill=n.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function Rn(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function Fn(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Bn(t)}):Bn(t)}function Vn(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Rn(t)}):Rn(t)}function Wn(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&zn(t)}function Hn(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Fn(this)}function Gn(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Vn(this)}function Xn(){this.__isEmphasis=!0,Fn(this)}function jn(){this.__isEmphasis=!1,Vn(this)}function qn(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&Wn(t,e)}):Wn(t,e),t.on("mouseover",Hn).on("mouseout",Gn),t.on("emphasis",Xn).on("normal",jn)}function Yn(t,e,n,i,r,a,o){var s,l=(r=r||yh).labelFetcher,u=r.labelDataIndex,h=r.labelDimIndex,c=n.getShallow("show"),f=i.getShallow("show");(c||f)&&(l&&(s=l.getFormattedLabel(u,"normal",null,h)),null==s&&(s=_(r.defaultText)?r.defaultText(u,r):r.defaultText));var d=c?s:null,p=f?T(l?l.getFormattedLabel(u,"emphasis",null,h):null,s):null;null==d&&null==p||(Un(t,n,a,r),Un(e,i,o,r,!0)),t.text=d,e.text=p}function Un(t,e,n,i,r){return Zn(t,e,i,r),n&&a(t,n),t.host&&t.host.dirty&&t.host.dirty(!1),t}function Zn(t,e,n,i){if((n=n||yh).isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var a=e.getShallow("rotate");null!=a&&(a*=Math.PI/180),t.textRotation=a,t.textDistance=T(e.getShallow("distance"),i?null:5)}var o,s=e.ecModel,l=s&&s.option.textStyle,u=function(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||yh).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}(e);if(u)for(var h in o={},u)if(u.hasOwnProperty(h)){var c=e.getModel(["rich",h]);$n(o[h]={},c,l,n,i)}return t.rich=o,$n(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function $n(t,e,n,i,r,a){if(n=!r&&n||yh,t.textFill=Kn(e.getShallow("color"),i)||n.color,t.textStroke=Kn(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=T(e.getShallow("textBorderWidth"),n.textBorderWidth),!r){if(a){var o=t.textPosition;t.insideRollback=Qn(t,o,i),t.insideOriginalTextPosition=o,t.insideRollbackOpt=i}null==t.textFill&&(t.textFill=i.autoColor)}t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),a&&i.disableBox||(t.textBackgroundColor=Kn(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=Kn(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function Kn(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function Qn(t,e,n){var i,r=n.useInsideStyle;return null==t.textFill&&!1!==r&&(!0===r||n.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=n.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),i}function Jn(t,e){var n=e||e.getModel("textStyle");return P([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function ti(t,e,n,i,r,a){if("function"==typeof r&&(a=r,r=null),i&&i.isAnimationEnabled()){var o=t?"Update":"",s=i.getShallow("animationDuration"+o),l=i.getShallow("animationEasing"+o),u=i.getShallow("animationDelay"+o);"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,u||0,l,a,!!a):(e.stopAnimation(),e.attr(n),a&&a())}else e.stopAnimation(),e.attr(n),a&&a()}function ei(t,e,n,i,r){ti(!0,t,e,n,i,r)}function ni(t,e,n,i,r){ti(!1,t,e,n,i,r)}function ii(t,e,n){return e&&!c(e)&&(e=Ms.getLocalTransform(e)),n&&(e=rt([],e)),j([],t,e)}function ri(t,e,n,i){function r(t){var e={position:F(t.position),rotation:t.rotation};return t.shape&&(e.shape=a({},t.shape)),e}if(t&&e){var o=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=o[t.anid];if(e){var i=r(t);t.attr(r(e)),ei(t,i,n,t.dataIndex)}}})}}function ai(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function oi(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==(void 0===t?"undefined":s(t))?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function si(t,e){var n=Ch(t).getParent;return n?n.call(t,e):t.parentModel}function li(t){return[t||"",Ih++,Math.random().toFixed(5)].join("_")}function ui(t,e,n,i){var r=e[1]-e[0],a=n[1]-n[0];if(0===r)return 0===a?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*a+n[0]}function hi(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?function(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function ci(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function fi(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return i<0?-i:0}var r=e.indexOf(".");return r<0?0:e.length-1-r}function di(t){var e=2*Math.PI;return(t%e+e)%e}function pi(t){return t>-Th&&t<Th}function gi(t){if(t instanceof Date)return t;if("string"==typeof t){var e=kh.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))}function vi(t){return Math.floor(Math.log(t)/Math.LN10)}function mi(t,e){var n=vi(t),i=Math.pow(10,n),r=t/i;return t=(e?r<1.5?1:r<2.5?2:r<4?3:r<7?5:10:r<1?1:r<2?2:r<3?3:r<5?5:10)*i,n>=-20?+t.toFixed(n<0?-n:0):t}function yi(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function _i(t){return null==t?"":(t+"").replace(Ah,function(t,e){return Lh[e]})}function xi(t,e){var n=(t=x(t)?{color:t,extraCssText:e}:t||{}).color,i=t.type;e=t.extraCssText;return n?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8upx;margin-left:3upx;border-radius:4upx;width:4upx;height:4upx;background-color:'+_i(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5upx;border-radius:10upx;width:10upx;height:10upx;background-color:'+_i(n)+";"+(e||"")+'"></span>':""}function wi(t,e){return"0000".substr(0,e-(t+="").length)+t}function bi(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=gi(e),r=n?"UTC":"",a=i["get"+r+"FullYear"](),o=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),h=i["get"+r+"Seconds"](),c=i["get"+r+"Milliseconds"]();return t.replace("MM",wi(o,2)).replace("M",o).replace("yyyy",a).replace("yy",a%100).replace("dd",wi(s,2)).replace("d",s).replace("hh",wi(l,2)).replace("h",l).replace("mm",wi(u,2)).replace("m",u).replace("ss",wi(h,2)).replace("s",h).replace("SSS",wi(c,3))}function Si(t,e,n,i,r){var a=0,o=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var h,c,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);(h=a+v)>i||l.newline?(a=0,h=v,o+=s+n,s=d.height):s=Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);(c=o+m)>r||l.newline?(a+=s+n,o=0,c=m,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=a,f[1]=o,"horizontal"===t?a=h+n:o=c+n)})}function Mi(t,e,n){function i(n,i){var o={},l=0,u={},h=0;if(Nh(n,function(e){u[e]=t[e]}),Nh(n,function(t){r(e,t)&&(o[t]=u[t]=e[t]),a(o,t)&&l++,a(u,t)&&h++}),s[i])return a(e,n[1])?u[n[2]]=null:a(e,n[2])&&(u[n[1]]=null),u;if(2!==h&&l){if(l>=2)return o;for(var c=0;c<n.length;c++){var f=n[c];if(!r(o,f)&&r(t,f)){o[f]=t[f];break}}return o}return u}function r(t,e){return t.hasOwnProperty(e)}function a(t,e){return null!=t[e]&&"auto"!==t[e]}function o(t,e,n){Nh(t,function(t){e[t]=n[t]})}!w(n)&&(n={});var s=n.ignoreSize;!y(s)&&(s=[s,s]);var l=i(Bh[0],0),u=i(Bh[1],1);o(Bh[0],t,l),o(Bh[1],t,u)}function Ci(t){return function(t,e){return e&&t&&Nh(zh,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}({},t)}function Ii(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:z(),categoryAxisMap:z()},i=jh[e];if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}function Ti(t){return"category"===t.get("type")}function ki(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===Zh?{}:[]),this.sourceFormat=t.sourceFormat||$h,this.seriesLayoutBy=t.seriesLayoutBy||Qh,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&z(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function Di(t){var e=t.option,n=e.data,i=S(n)?Kh:qh,r=!1,a=e.seriesLayoutBy,o=e.sourceHeader,s=e.dimensions,l=function(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}(t);if(l){var u=l.option;n=u.source,i=tc(l).sourceFormat,r=!0,a=a||u.seriesLayoutBy,null==o&&(o=u.sourceHeader),s=s||u.dimensions}var h=function(t,e,n,i,r){if(!t)return{dimensionsDefine:Ai(r)};var a,o,s,l;if(e===Yh)"auto"===i||null==i?Li(function(t){null!=t&&"-"!==t&&(x(t)?null==o&&(o=1):o=0)},n,t,10):o=i?1:0,r||1!==o||(r=[],Li(function(t,e){r[e]=null!=t?t:""},n,t)),a=r?r.length:n===Jh?t.length:t[0]?t[0].length:null;else if(e===Uh)r||(r=function(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return f(e,function(t,e){i.push(e)}),i}}(t),s=!0);else if(e===Zh)r||(r=[],s=!0,f(t,function(t,e){r.push(e)}));else if(e===qh){var u=Oe(t[0]);a=y(u)&&u.length||1}return s&&f(r,function(t,e){"name"===(w(t)?t.name:t)&&(l=e)}),{startIndex:o,dimensionsDefine:Ai(r),dimensionsDetectCount:a,potentialNameDimIndex:l}}(n,i,a,o,s),c=e.encode;!c&&l&&(c=function(t,e,n,i,r,a){var o=Ii(t),s={},l=[],u=[],h=t.subType,c=z(["pie","map","funnel"]),d=z(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(o&&null!=d.get(h)){var p=t.ecModel,g=tc(p).datasetMap,v=e.uid+"_"+r,m=g.get(v)||g.set(v,{categoryWayDim:1,valueWayDim:0});f(o.coordSysDims,function(t){if(null==o.firstCategoryDimIndex)e=m.valueWayDim++,s[t]=e,u.push(e);else if(o.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=c.get(h)){for(var y,_=0;_<5&&null==y;_++)Oi(n,i,r,a.dimensionsDefine,a.startIndex,_)||(y=_);if(null!=y){s.value=y;var x=a.potentialNameDimIndex||Math.max(y-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}(t,l,n,i,a,h)),tc(t).source=new ki({data:n,fromDataset:r,seriesLayoutBy:a,sourceFormat:i,dimensionsDefine:h.dimensionsDefine,startIndex:h.startIndex,dimensionsDetectCount:h.dimensionsDetectCount,encodeDefine:c})}function Ai(t){if(t){var e=z();return d(t,function(t,n){if(null==(t=a({},w(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var i=e.get(t.name);return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t})}}function Li(t,e,n,i){if(null==i&&(i=1/0),e===Jh)for(a=0;a<n.length&&a<i;a++)t(n[a]?n[a][0]:null,a);else for(var r=n[0]||[],a=0;a<r.length&&a<i;a++)t(r[a],a)}function Pi(t,e){return Oi(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function Oi(t,e,n,i,r,a){function o(t){return(null==t||!isFinite(t)||""===t)&&(!(!x(t)||"-"===t)||void 0)}var s,l;if(S(t))return!1;if(i&&(l=w(l=i[a])?l.name:l),e===Yh)if(n===Jh){for(var u=t[a],h=0;h<(u||[]).length&&h<5;h++)if(null!=(s=o(u[r+h])))return s}else for(h=0;h<t.length&&h<5;h++){var c=t[r+h];if(c&&null!=(s=o(c[a])))return s}else if(e===Uh){if(!l)return;for(h=0;h<t.length&&h<5;h++)if((f=t[h])&&null!=(s=o(f[l])))return s}else if(e===Zh){if(!l)return;if(!(u=t[l])||S(u))return!1;for(h=0;h<u.length&&h<5;h++)if(null!=(s=o(u[h])))return s}else if(e===qh)for(h=0;h<t.length&&h<5;h++){var f=t[h],d=Oe(f);if(!y(d))return!1;if(null!=(s=o(d[a])))return s}return!1}function Ei(t){t=t,this.option={},this.option[ec]=1,this._componentsMap=z({series:[]}),this._seriesIndices,this._seriesIndicesMap,function(t,e){var n=t.color&&!t.colorLayer;f(e,function(e,a){"colorLayer"===a&&n||Vh.hasClass(a)||("object"==(void 0===e?"undefined":s(e))?t[a]=t[a]?r(t[a],e,!1):i(e):null==t[a]&&(t[a]=e))})}(t,this._theme.option),r(t,Hh,!1),this.mergeOption(t)}function Ni(t,e){t._seriesIndicesMap=z(t._seriesIndices=d(e,function(t){return t.componentIndex})||[])}function zi(t,e){return e.hasOwnProperty("subType")?g(t,function(t){return t.subType===e.subType}):t}function Bi(t){f(ic,function(e){this[e]=v(t[e],t)},this)}function Ri(){this._coordinateSystems=[]}function Fi(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function Vi(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return f(t,function(t,e){var n=e.match(uc);if(n&&n[1]&&n[2]){var a=n[1],o=n[2].toLowerCase();(function(t,e,n){return"min"===n?t>=e:"max"===n?t<=e:t===e})(i[o],t,a)||(r=!1)}}),r}function Wi(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=fc.length;n<i;n++){var a=fc[n],o=e.normal,s=e.emphasis;o&&o[a]&&(t[a]=t[a]||{},t[a].normal?r(t[a].normal,o[a]):t[a].normal=o[a],o[a]=null),s&&s[a]&&(t[a]=t[a]||{},t[a].emphasis?r(t[a].emphasis,s[a]):t[a].emphasis=s[a],s[a]=null)}}function Hi(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,o(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function Gi(t){Hi(t,"itemStyle"),Hi(t,"lineStyle"),Hi(t,"areaStyle"),Hi(t,"label"),Hi(t,"labelLine"),Hi(t,"upperLabel"),Hi(t,"edgeLabel")}function Xi(t,e){var n=cc(t)&&t[e],i=cc(n)&&n.textStyle;if(i)for(var r=0,a=Rl.length;r<a;r++){e=Rl[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function ji(t){t&&(Gi(t),Xi(t,"label"),t.emphasis&&Xi(t.emphasis,"label"))}function qi(t){return y(t)?t:t?[t]:[]}function Yi(t){return(y(t)?t[0]:t)||{}}function Ui(t){f(pc,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function Zi(t){f(t,function(e,n){var i=[],r=[NaN,NaN],a=[e.stackResultDimension,e.stackedOverDimension],o=e.data,s=e.isStackedByIndex,l=o.map(a,function(a,l,u){var h,c,f=o.get(e.stackedDimension,u);if(isNaN(f))return r;s?c=o.getRawIndex(u):h=o.get(e.stackedByDimension,u);for(var d=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(c=g.data.rawIndexOf(g.stackedByDimension,h)),c>=0){var v=g.data.getByRawIndex(g.stackResultDimension,c);if(f>=0&&v>0||f<=0&&v<0){f+=v,d=v;break}}}return i[0]=f,i[1]=d,i});o.hostModel.setData(l),e.data=l})}function $i(t,e){ki.isInstance(t)||(t=ki.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===Kh&&(this._offset=0,this._dimSize=e,this._data=n),a(this,yc[i===Yh?i+"_"+t.seriesLayoutBy:i])}function Ki(){return this._data.length}function Qi(t){return this._data[t]}function Ji(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function tr(t,e,n,i){return null!=n?t[n]:t}function er(t,e,n,i){return nr(t[i],this._dimensionInfos[e])}function nr(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+gi(t)),null==t||""===t?NaN:+t}function ir(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,a,o=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,a=s.index),_c[o](i,e,a,r)}}}function rr(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===qh||i===Uh){var r=t.getRawDataItem(e);return i!==qh||w(r)||(r=null),r?r[n]:void 0}}}function ar(t){return new or(t)}function or(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function sr(t,e,n,i,r,a){Mc.reset(n,i,r,a),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:Mc.next},t.context)}function lr(t){var e=t.name;Ne(t)||(t.name=function(t){var e=t.getRawData(),n=[];return f(e.mapDimension("seriesName",!0),function(t){var i=e.getDimensionInfo(t);i.displayName&&n.push(i.displayName)}),n.join(" ")}(t)||e)}function ur(t){return t.model.getRawData().count()}function hr(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),cr}function cr(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function fr(t,e){f(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,m(dr,e))})}function dr(t){var e=pr(t);e&&e.setOutputEnd(this.count())}function pr(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function gr(){this.group=new qs,this.uid=li("viewChart"),this.renderTask=ar({plan:yr,reset:_r}),this.renderTask.context={view:this}}function vr(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)vr(t.childAt(n),e)}function mr(t,e,n){var i=Be(t,e);null!=i?f(Le(i),function(e){vr(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){vr(t,n)})}function yr(t){return Lc(t.model)}function _r(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,a=e.pipelineContext.progressiveRender,o=t.view,s=r&&Ac(r).updateMethod,l=a?"incrementalPrepareRender":s&&o[s]?s:"render";return"render"!==l&&o[l](e,n,i,r),Oc[l]}function xr(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=z()}function wr(t,e,n,i,r){function a(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}var o;r=r||{},f(e,function(e,s){if(!r.visualType||r.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,h=l.overallTask;if(h){var c,f=h.agentStubMap;f.each(function(t){a(r,t)&&(t.dirty(),c=!0)}),c&&h.dirty(),Fc(h,i);var d=t.getPerformArgs(h,r.block);f.each(function(t){t.perform(d)}),o|=h.perform(d)}else u&&u.each(function(s,l){a(r,s)&&s.dirty();var u=t.getPerformArgs(s,r.block);u.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),Fc(s,i),o|=s.perform(u)})}}),t.unfinished|=o}function br(t){t.overallReset(t.ecModel,t.api,t.payload)}function Sr(t,e){return t.overallProgress&&Mr}function Mr(){this.agent.dirty(),this.getDownstream().dirty()}function Cr(){this.agent&&this.agent.dirty()}function Ir(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function Tr(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=Le(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?d(e,function(t,e){return kr(e)}):Vc}function kr(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var a=e.start;a<e.end;a++)r.dataEach(i,a);else r&&r.progress&&r.progress(e,i)}}function Dr(t){return t.data.count()}function Ar(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function Lr(t,e){for(var n in e.prototype)t[n]=B}function Pr(t){return function(e,n,i){e=e&&e.toLowerCase(),ms.prototype[t].call(this,e,n,i)}}function Or(){ms.call(this)}function Er(t,e,n){function r(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=vf[e]),this.id,this.group,this._dom=t;var a=this._zr=Ae(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=function(t,e,n){function i(){h=(new Date).getTime(),c=null,t.apply(o,s||[])}var r,a,o,s,l,u=0,h=0,c=null;e=e||0;var f=function(){r=(new Date).getTime(),o=this,s=arguments;var t=l||e,f=l||n;l=null,a=r-(f?u:h)-t,clearTimeout(c),f?c=setTimeout(i,t):a>=0?i():c=setTimeout(i,-a),u=r};return f.clear=function(){c&&(clearTimeout(c),c=null)},f.debounceNextCall=function(t){l=t},f}(v(a.flush,a),17),(e=i(e))&&vc(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Ri;var o=this._api=Ur(this);Et(gf,r),Et(ff,r),this._scheduler=new xr(this,o,ff,gf),ms.call(this),this._messageCenter=new Or,this._initEvents(),this.resize=v(this.resize,this),this._pendingActions=[],a.animation.on("frame",this._onframe,this),function(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[af]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}(a,this),O(this)}function Nr(t,e,n){var i,r=this._model,a=this._coordSysMgr.getCoordinateSystems();e=Fe(r,e);for(var o=0;o<a.length;o++){var s=a[o];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function zr(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),Hr(t,"component",e,n),Hr(t,"chart",e,n),n.plan()}function Br(t,e,n,i,r){function a(i){i&&i.__alive&&i[e]&&i[e](i.__model,o,t._api,n)}var o=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var u=n.excludeSeriesId;null!=u&&(u=z(Le(u))),o&&o.eachComponent(l,function(e){u&&null!=u.get(e.id)||a(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else Zc(t._componentsViews.concat(t._chartsViews),a)}function Rr(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function Fr(t,e){var n=t.type,i=t.escapeConnect,r=hf[n],s=r.actionInfo,l=(s.update||"update").split(":"),u=l.pop();l=null!=l[0]&&Qc(l[0]),this[rf]=!0;var h=[t],c=!1;t.batch&&(c=!0,h=d(t.batch,function(e){return(e=o(a({},e),t)).batch=null,e}));var f,p=[],g="highlight"===n||"downplay"===n;Zc(h,function(t){(f=(f=r.action(t,this._model,this._api))||a({},t)).type=s.event||f.type,p.push(f),g?Br(this,u,t,"series"):l&&Br(this,u,t,l.main,l.sub)},this),"none"===u||g||l||(this[af]?(zr(this),lf.update.call(this,t),this[af]=!1):lf[u].call(this,t)),f=c?{type:s.event||n,escapeConnect:i,batch:p}:p[0],this[rf]=!1,!e&&this._messageCenter.trigger(f.type,f)}function Vr(t){for(var e=this._pendingActions;e.length;){var n=e.shift();Fr.call(this,n,t)}}function Wr(t){!t&&this.trigger("updated")}function Hr(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var h=Qc(t.type);(r=new(a?Tc.getClass(h.main,h.sub):gr.getClass(h.sub))).init(n,u),s[e]=r,o.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!a&&i.prepareView(r,t,n,u)}for(var a="component"===e,o=a?t._componentsViews:t._chartsViews,s=a?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,h=0;h<o.length;h++)o[h].__alive=!1;for(a?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r),h=0;h<o.length;){var c=o[h];c.__alive?h++:(!a&&c.renderTask.dispose(),l.remove(c.group),c.dispose(n,u),o.splice(h,1),delete s[c.__id],c.__id=c.group.__ecComponentInfo=null)}}function Gr(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function Xr(t,e,n,i){(function(t,e,n,i,r){Zc(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),Yr(r,t)})})(t,e,n,i),Zc(t._chartsViews,function(t){t.__alive=!1}),jr(t,e,n,i),Zc(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function jr(t,e,n,i,r){var a,o=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;o.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),a|=s.perform(o.getPerformArgs(s)),n.group.silent=!!e.get("silent"),Yr(e,n),function(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}(e,n)}),o.unfinished|=a,function(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!Jo.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}(t._zr,e),zc(t._zr.dom,e)}function qr(t,e){Zc(pf,function(n){n(t,e)})}function Yr(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function Ur(t){var e=t._coordSysMgr;return a(new Bi(t),{getCoordinateSystems:v(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function Zr(t){_f[t]=!1}function $r(t){return yf[function(t,e){return t.getAttribute?t.getAttribute(e):t[e]}(t,bf)]}function Kr(t,e){vf[t]=e}function Qr(t){df.push(t)}function Jr(t,e){ia(ff,t,e,Jc)}function ta(t,e,n){"function"==typeof e&&(n=e,e="");var i=Kc(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,Uc(of.test(i)&&of.test(e)),hf[i]||(hf[i]={action:n,actionInfo:t}),cf[e]=i}function ea(t,e){ia(gf,t,e,tf,"layout")}function na(t,e){ia(gf,t,e,ef,"visual")}function ia(t,e,n,i,r){($c(e)||Kc(e))&&(n=e,e=i);var a=xr.wrapStageHandler(n,r);return a.__prio=e,a.__raw=n,t.push(a),a}function ra(t,e){mf[t]=e}function aa(t){return Tc.extend(t)}function oa(t){return Ic.extend(t)}function sa(t){return gr.extend(t)}function la(t){return t}function ua(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||la,this._newKeyGetter=i||la,this.context=r}function ha(t,e,n,i,r){for(var a=0;a<t.length;a++){var o="_ec_"+r[i](t[a],a),s=e[o];null==s?(n.push(o),e[o]=a):(s.length||(e[o]=s=[s]),s.push(a))}}function ca(t){return t._rawCount>65535?Df:Af}function fa(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function da(t,e){f(Lf.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,f(Pf,function(n){t[n]=i(e[n])}),t._calculationInfo=a(e._calculationInfo)}function pa(t){var e=t._invertedIndicesMap;f(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){for(n=e[i]=new Df(r.categories.length),a=0;a<n.length;a++)n[a]=NaN;for(var a=0;a<t._count;a++)n[t.get(i,a)]=a}})}function ga(t,e,n){var i;if(null!=e){var r=t._chunkSize,a=Math.floor(n/r),o=n%r,s=t.dimensions[e],l=t._storage[s][a];if(l){i=l[o];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function va(t){return t}function ma(t){return t<this._count&&t>=0?this._indices[t]:-1}function ya(t,e){var n=t._idList[e];return null==n&&(n=ga(t,t._idDimIdx,e)),null==n&&(n=Tf+e),n}function _a(t){return y(t)||(t=[t]),t}function xa(t,e){var n=t.dimensions,i=new Of(d(n,t.getDimensionInfo,t),t.hostModel);da(i,t);for(var r=i._storage={},a=t._storage,o=0;o<n.length;o++){var s=n[o];a[s]&&(l(e,s)>=0?(r[s]=wa(a[s]),i._rawExtent[s]=[1/0,-1/0],i._extent[s]=null):r[s]=a[s])}return i}function wa(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=fa(t[n]);return e}function ba(t,e,n){function r(t,e,n){null!=Cf.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,h.set(e,!0))}ki.isInstance(e)||(e=ki.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var s=(n.dimsDef||[]).slice(),l=z(n.encodeDef),u=z(),h=z(),c=[],d=function(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return f(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}(e,t,s,n.dimCount),p=0;p<d;p++){var g=s[p]=a({},w(s[p])?s[p]:{name:s[p]}),v=g.name,m=c[p]={otherDims:{}};null!=v&&null==u.get(v)&&(m.name=m.displayName=v,u.set(v,p)),null!=g.type&&(m.type=g.type),null!=g.displayName&&(m.displayName=g.displayName)}l.each(function(t,e){t=Le(t).slice();var n=l.set(e,[]);f(t,function(t,i){x(t)&&(t=u.get(t)),null!=t&&t<d&&(n[i]=t,r(c[t],e,i))})});var y=0;f(t,function(t,e){var n,a,s;if(x(t))n=t,t={};else{n=t.name;var u=t.ordinalMeta;t.ordinalMeta=null,(t=i(t)).ordinalMeta=u,a=t.dimsDef,s=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var h=Le(l.get(n));if(!h.length)for(var d=0;d<(a&&a.length||1);d++){for(;y<c.length&&null!=c[y].coordDim;)y++;y<c.length&&h.push(y++)}f(h,function(e,i){var l=c[e];if(r(o(l,t),n,i),null==l.name&&a){var u=a[i];!w(u)&&(u={name:u}),l.name=l.displayName=u.name,l.defaultTooltip=u.defaultTooltip}s&&o(l.otherDims,s)})});var _=n.generateCoord,b=n.generateCoordCount,S=null!=b;b=_?b||1:0;for(var M=_||"value",C=0;C<d;C++)null==(m=c[C]=c[C]||{}).coordDim&&(m.coordDim=Sa(M,h,S),m.coordDimIndex=0,(!_||b<=0)&&(m.isExtraCoord=!0),b--),null==m.name&&(m.name=Sa(m.coordDim,u)),null==m.type&&Pi(e,C,m.name)&&(m.type="ordinal");return c}function Sa(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function Ma(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function Ca(t,e,n){n=n||{},ki.isInstance(t)||(t=ki.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),a=Ri.get(r),o=Ii(e);o&&(i=d(o.coordSysDims,function(t){var e={name:t},n=o.axisMap.get(t);if(n){var i=n.get("type");e.type=function(t){return"category"===t?"ordinal":"time"===t?"time":"float"}(i)}return e})),i||(i=a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"]);var s,l,u=zf(t,{coordDimensions:i,generateCoord:n.generateCoord});o&&f(u,function(t,e){var n=t.coordDim,i=o.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var h=function(t,e,n){var i,r,a,o,s=(n=n||{}).byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(f(e,function(t,n){x(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){a="__\0ecstackresult",o="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var h=r.coordDim,c=r.type,d=0;f(e,function(t){t.coordDim===h&&d++}),e.push({name:a,coordDim:h,coordDimIndex:d,type:c,isExtraCoord:!0,isCalculationCoord:!0}),d++,e.push({name:o,coordDim:o,coordDimIndex:d,type:c,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:o,stackResultDimension:a}}(e,u),c=new Of(u,e);c.setCalculationInfo(h);var p=null!=s&&function(t){if(t.sourceFormat===qh){var e=function(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}(t.data||[]);return null!=e&&!y(Oe(e))}}(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return c.hasItemOption=!1,c.initData(t,null,p),c}function Ia(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function Ta(t,e,n,i,r,a,o){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),(s=0===t.indexOf("image://")?Dn(t.slice(8),new Dt(e,n,i,r),o?"center":"cover"):0===t.indexOf("path://")?kn(t.slice(7),{},new Dt(e,n,i,r),o?"center":"cover"):new Gf({shape:{symbolType:t,x:e,y:n,width:i,height:r}})).__isEmptyBrush=l,s.setColor=Ia,s.setColor(a),s}function ka(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return ir(t,e,n[0]);if(i){for(var r=[],a=0;a<n.length;a++){var o=ir(t,e,n[a]);r.push(o)}return r.join(" ")}}function Da(t,e,n){qs.call(this),this.updateData(t,e,n)}function Aa(t){return[t[0]/2,t[1]/2]}function La(t,e){this.parent.drift(t,e)}function Pa(t){this.group=new qs,this._symbolCtor=t||Da}function Oa(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function Ea(t){return null==t||w(t)||(t={isIgnore:t}),t||{}}function Na(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function za(t,e,n){var i,r=t.getBaseAxis(),a=t.getOtherAxis(r),o=function(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}(a,n),s=r.dim,l=a.dim,u=e.mapDimension(l),h=e.mapDimension(s),c="x"===l||"radius"===l?1:0,f=d(t.dimensions,function(t){return e.mapDimension(t)}),p=e.getCalculationInfo("stackResultDimension");return(i|=Ma(e,f[0]))&&(f[0]=p),(i|=Ma(e,f[1]))&&(f[1]=p),{dataDimsForPoint:f,valueStart:o,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:h,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function Ba(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var a=t.baseDataOffset,o=[];return o[a]=n.get(t.baseDim,i),o[1-a]=r,e.dataToPoint(o)}function Ra(t){return isNaN(t[0])||isNaN(t[1])}function Fa(t,e,n,i,r,a,o,s,l,u,h){return"none"!==u&&u?function(t,e,n,i,r,a,o,s,l,u,h){for(var c=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Ra(p)){if(h){f+=a;continue}break}if(f===n)t[a>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[c],v="y"===u?1:0,m=(p[v]-g[v])*l;td(nd,g),nd[v]=g[v]+m,td(id,p),id[v]=p[v]-m,t.bezierCurveTo(nd[0],nd[1],id[0],id[1],p[0],p[1])}else t.lineTo(p[0],p[1]);c=f,f+=a}return d}.apply(this,arguments):function(t,e,n,i,r,a,o,s,l,u,h){for(var c=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Ra(p)){if(h){f+=a;continue}break}if(f===n)t[a>0?"moveTo":"lineTo"](p[0],p[1]),td(nd,p);else if(l>0){var g=f+a,v=e[g];if(h)for(;v&&Ra(e[g]);)v=e[g+=a];var m=.5,y=e[c];if(!(v=e[g])||Ra(v))td(id,p);else{var _,x;if(Ra(v)&&!h&&(v=p),W(ed,v,y),"x"===u||"y"===u){var w="x"===u?0:1;_=Math.abs(p[w]-y[w]),x=Math.abs(p[w]-v[w])}else _=ps(p,y),x=ps(p,v);Jf(id,p,ed,-l*(1-(m=x/(x+_))))}Kf(nd,nd,s),Qf(nd,nd,o),Kf(id,id,s),Qf(id,id,o),t.bezierCurveTo(nd[0],nd[1],id[0],id[1],p[0],p[1]),Jf(nd,p,ed,l*m)}else t.lineTo(p[0],p[1]);c=f,f+=a}return d}.apply(this,arguments)}function Va(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var a=t[r];a[0]<n[0]&&(n[0]=a[0]),a[1]<n[1]&&(n[1]=a[1]),a[0]>i[0]&&(i[0]=a[0]),a[1]>i[1]&&(i[1]=a[1])}return{min:e?n:i,max:e?i:n}}function Wa(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function Ha(t){return"number"==typeof t?t:t?.5:0}function Ga(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function Xa(t,e,n,i){return"polar"===t.type?function(t,e,n,i){var r=t.getAngleAxis(),a=t.getRadiusAxis().getExtent().slice();a[0]>a[1]&&a.reverse();var o=r.getExtent(),s=Math.PI/180;n&&(a[0]-=.5,a[1]+=.5);var l=new Ju({shape:{cx:ci(t.cx,1),cy:ci(t.cy,1),r0:ci(a[0],1),r:ci(a[1],1),startAngle:-o[0]*s,endAngle:-o[1]*s,clockwise:r.inverse}});return e&&(l.shape.endAngle=-o[0]*s,ni(l,{shape:{endAngle:-o[1]*s}},i)),l}(t,e,n,i):function(t,e,n,i){var r=Ga(t.getAxis("x")),a=Ga(t.getAxis("y")),o=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(a[0],a[1]),u=Math.max(r[0],r[1])-s,h=Math.max(a[0],a[1])-l;if(n)s-=.5,u+=.5,l-=.5,h+=.5;else{var c=i.get("lineStyle.width")||2,f=i.get("clipOverflow")?c/2:Math.max(u,h);o?(l-=f,h+=2*f):(s-=f,u+=2*f)}var d=new ah({shape:{x:s,y:l,width:u,height:h}});return e&&(d.shape[o?"width":"height"]=0,ni(d,{shape:{width:u,height:h}},i)),d}(t,e,n,i)}function ja(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,a=[],o=0;o<t.length-1;o++){var s=t[o+1],l=t[o];a.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],a.push(u);break;case"middle":var h=(l[r]+s[r])/2,c=[];u[r]=c[r]=h,u[1-r]=l[1-r],c[1-r]=s[1-r],a.push(u),a.push(c);break;default:u[r]=l[r],u[1-r]=s[1-r],a.push(u)}}return t[o]&&a.push(t[o]),a}function qa(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,a=n.length-1;a>=0;a--){var o=n[a].dimension,s=t.dimensions[o],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){r=n[a];break}}if(r){var u=e.getAxis(i),h=d(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),c=h.length,p=r.outerColors.slice();c&&h[0].coord>h[c-1].coord&&(h.reverse(),p.reverse());var g=h[0].coord-10,v=h[c-1].coord+10,m=v-g;if(m<.001)return"transparent";f(h,function(t){t.offset=(t.coord-g)/m}),h.push({offset:c?h[c-1].offset:.5,color:p[1]||"transparent"}),h.unshift({offset:c?h[0].offset:.5,color:p[0]||"transparent"});var y=new fh(0,0,0,0,h,!0);return y[i]=g,y[i+"2"]=v,y}}}function Ya(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var a=n.getAxesByScale("ordinal")[0];if(a&&(!r||!function(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),a=Math.max(1,Math.round(r/5)),o=0;o<r;o+=a)if(1.5*Da.getSymbolSize(e,o)[t.isHorizontal()?1:0]>i)return!1;return!0}(a,e))){var o=e.mapDimension(a.dim),s={};return f(a.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(o,t))}}}}function Ua(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function Za(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function $a(t){return t._map||(t._map=z(t.categories))}function Ka(t){return w(t)&&null!=t.value?t.value:t+""}function Qa(t){return fi(t)+2}function Ja(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function to(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Ja(t,0,e),Ja(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function eo(t){return t.get("stack")||pd+t.seriesIndex}function no(t){return t.dim+t.index}function io(t,e){var n=[];return e.eachSeriesByType(t,function(t){oo(t)&&!so(t)&&n.push(t)}),n}function ro(t){var e=[];return f(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),r=i.getExtent(),a="category"===i.type?i.getBandWidth():Math.abs(r[1]-r[0])/n.count(),o=hi(t.get("barWidth"),a),s=hi(t.get("barMaxWidth"),a),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:a,barWidth:o,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:no(i),stackId:eo(t)})}),function(t){var e={};f(t,function(t,n){var i=t.axisKey,r=t.bandWidth,a=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},o=a.stacks;e[i]=a;var s=t.stackId;o[s]||a.autoWidthCount++,o[s]=o[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!o[s].width&&(o[s].width=l,l=Math.min(a.remainedWidth,l),a.remainedWidth-=l);var u=t.barMaxWidth;u&&(o[s].maxWidth=u);var h=t.barGap;null!=h&&(a.gap=h);var c=t.barCategoryGap;null!=c&&(a.categoryGap=c)});var n={};return f(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,a=hi(t.categoryGap,r),o=hi(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-a)/(l+(l-1)*o);u=Math.max(u,0),f(i,function(t,e){var n=t.maxWidth;n&&n<u&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)}),u=(s-a)/(l+(l-1)*o),u=Math.max(u,0);var h,c=0;f(i,function(t,e){t.width||(t.width=u),h=t,c+=t.width*(1+o)}),h&&(c-=h.width*o);var d=-c/2;f(i,function(t,i){n[e][i]=n[e][i]||{offset:d,width:t.width},d+=t.width*(1+o)})}),n}(e)}function ao(t,e,n){if(t&&e){var i=t[no(e)];return null!=i&&null!=n&&(i=i[eo(n)]),i}}function oo(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function so(t){return t.pipelineContext&&t.pipelineContext.large}function lo(t,e,n){return l(t.getAxesOnZeroOf(),e)>=0||n?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}function uo(t,e){return Cd(t,Md(e))}function ho(t,e){var n,i,r,a=t.type,o=e.getMin(),s=e.getMax(),l=null!=o,u=null!=s,h=t.getExtent();"ordinal"===a?n=e.getCategories().length:(y(i=e.get("boundaryGap"))||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=hi(i[0],1),i[1]=hi(i[1],1),r=h[1]-h[0]||Math.abs(h[0])),null==o&&(o="ordinal"===a?n?0:NaN:h[0]-i[0]*r),null==s&&(s="ordinal"===a?n?n-1:NaN:h[1]+i[1]*r),"dataMin"===o?o=h[0]:"function"==typeof o&&(o=o({min:h[0],max:h[1]})),"dataMax"===s?s=h[1]:"function"==typeof s&&(s=s({min:h[0],max:h[1]})),(null==o||!isFinite(o))&&(o=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(C(o)||C(s)||"ordinal"===a&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(o>0&&s>0&&!l&&(o=0),o<0&&s<0&&!u&&(s=0));var c=e.ecModel;if(c&&"time"===a){var d,p=io("bar",c);if(f(p,function(t){d|=t.getBaseAxis()===e.axis}),d){var g=ro(p),v=function(t,e,n,i){var r=n.axis.getExtent(),a=r[1]-r[0],o=ao(i,n.axis);if(void 0===o)return{min:t,max:e};var s=1/0;f(o,function(t){s=Math.min(t.offset,s)});var l=-1/0;f(o,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,h=e-t,c=h/(1-(s+l)/a)-h;return{min:t-=c*(s/u),max:e+=c*(l/u)}}(o,s,e,g);o=v.min,s=v.max}}return[o,s]}function co(t,e){var n=ho(t,e),i=null!=e.getMin(),r=null!=e.getMax(),a=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var o=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:a,fixMin:i,fixMax:r,minInterval:"interval"===o||"time"===o?e.get("minInterval"):null,maxInterval:"interval"===o||"time"===o?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function fo(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(function(t,e){return"category"===t.type?t.scale.getLabel(e):e}(t,i),r)}:function(e){return t.scale.getLabel(e)}}function po(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,a=i.height,o=r*Math.cos(n)+a*Math.sin(n),s=r*Math.sin(n)+a*Math.cos(n);return new Dt(i.x,i.y,o,s)}function go(t){return this._axes[t]}function vo(t){Ld.call(this,t)}function mo(t){return"category"===t.type?function(t){var e=t.getLabelModel(),n=_o(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}(t):function(t){var e=t.scale.getTicks(),n=fo(t);return{labels:d(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}(t)}function yo(t,e){return"category"===t.type?function(t,e){var n,i,r=xo(t,"ticks"),a=Co(e),o=wo(r,a);if(o)return o;if(e.get("show")&&!t.scale.isBlank()||(n=[]),_(a))n=Mo(t,a,!0);else if("auto"===a){var s=_o(t,t.getLabelModel());i=s.labelCategoryInterval,n=d(s.labels,function(t){return t.tickValue})}else n=So(t,i=a,!0);return bo(r,a,{ticks:n,tickCategoryInterval:i})}(t,e):{ticks:t.scale.getTicks()}}function _o(t,e){var n,i=xo(t,"labels"),r=Co(e),a=wo(i,r);return a||bo(i,r,{labels:_(r)?Mo(t,r):So(t,n="auto"===r?function(t){var e=Pd(t).autoInterval;return null!=e?e:Pd(t).autoInterval=t.calculateCategoryInterval()}(t):r),labelCategoryInterval:n})}function xo(t,e){return Pd(t)[e]||(Pd(t)[e]=[])}function wo(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function bo(t,e,n){return t.push({key:e,value:n}),n}function So(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:a.getLabel(t),tickValue:t})}var r=fo(t),a=t.scale,o=a.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),h=o[0],c=a.count();0!==h&&u>1&&c/u>2&&(h=Math.round(Math.ceil(h/u)*u));var f=s.get("showMinLabel"),d=s.get("showMaxLabel");f&&h!==o[0]&&i(o[0]);for(var p=h;p<=o[1];p+=u)i(p);return d&&p!==o[1]&&i(o[1]),l}function Mo(t,e,n){var i=t.scale,r=fo(t),a=[];return f(i.getTicks(),function(t){var o=i.getLabel(t);e(t,o)&&a.push(n?t:{formattedLabel:r(t),rawLabel:o,tickValue:t})}),a}function Co(t){var e=t.get("interval");return null==e?"auto":e}function Io(t,e){var n=(t[1]-t[0])/e/2;t[0]+=n,t[1]-=n}function To(t,e){return e.type||(e.data?"category":"value")}function ko(t,e,n){return t.getCoordSysModel()===e}function Do(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function Ao(t,e,n){n.getAxesOnZeroOf=function(){return i?[i]:[]};var i,r=t[e],a=n.model,o=a.get("axisLine.onZero"),s=a.get("axisLine.onZeroAxisIndex");if(o)if(null==s){for(var l in r)if(r.hasOwnProperty(l)&&Lo(r[l])){i=r[l];break}}else Lo(r[s])&&(i=r[s])}function Lo(t){return t&&"category"!==t.type&&"time"!==t.type&&function(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)}(t)}function Po(t,e){return d(Xd,function(e){return t.getReferringComponents(e)[0]})}function Oo(t){return"cartesian2d"===t.get("coordinateSystem")}function Eo(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function No(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function zo(t){t&&(t.ignore=!0)}function Bo(t,e,n){var i=t&&t.getBoundingRect().clone(),r=e&&e.getBoundingRect().clone();if(i&&r){var a=J([]);return nt(a,a,-t.rotation),i.applyTransform(tt([],a,t.getLocalTransform())),r.applyTransform(tt([],a,e.getLocalTransform())),i.intersect(r)}}function Ro(t){return"middle"===t||"center"===t}function Fo(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[function(t){return t.type+"||"+t.id}(t)]}function Vo(t,e,n,i,r,a){var o=Zd.getAxisPointerClass(t.axisPointerClass);if(o){var s=function(t){var e=Fo(t);return e&&e.axisPointerModel}(e);s?(t._axisPointer||(t._axisPointer=new o)).render(e,s,i,a):Wo(t,i)}}function Wo(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function Ho(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function Go(t,e,n){n.style.text=null,ei(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function Xo(t,e,n){n.style.text=null,ei(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function jo(t,e,n,i,r,a,s,l){var u=e.getItemVisual(n,"color"),h=e.getItemVisual(n,"opacity"),c=i.getModel("itemStyle"),f=i.getModel("emphasis.itemStyle").getBarItemStyle();l||t.setShape("r",c.get("barBorderRadius")||0),t.useStyle(o({fill:u,opacity:h},c.getBarItemStyle()));var d=i.getShallow("cursor");d&&t.attr("cursor",d);s?r.height:r.width;l||function(t,e,n,i,r,a,o){Yn(t,e,n.getModel("label"),n.getModel("emphasis.label"),{labelFetcher:r,labelDataIndex:a,defaultText:ka(r.getData(),a),isRectText:!0,autoColor:i}),Ho(t),Ho(e)}(t.style,f,i,u,a,n),qn(t,f)}function qo(t,e,n){var i=t.getData(),r=[],a=i.getLayout("valueAxisHorizontal")?1:0;r[1-a]=i.getLayout("valueAxisStart");var o=new ap({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__valueIdx:a});e.add(o),function(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}(o,t,i)}function Yo(t,e,n,i){var r=e.getData(),a=this.dataIndex,o=r.getName(a),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:o,seriesId:e.id}),r.each(function(t){Uo(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function Uo(t,e,n,i,r){var a=(e.startAngle+e.endAngle)/2,o=Math.cos(a),s=Math.sin(a),l=n?i:0,u=[o*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function Zo(t,e){function n(){a.ignore=a.hoverIgnore,o.ignore=o.hoverIgnore}function i(){a.ignore=a.normalIgnore,o.ignore=o.normalIgnore}qs.call(this);var r=new Ju({z2:2}),a=new rh,o=new Zu;this.add(r),this.add(a),this.add(o),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function $o(t,e,n,i,r,a,o){function s(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function l(t,e,n,i,r,a){for(var o=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var u=Math.abs(t[s].y-i),h=t[s].len,c=t[s].len2,f=u<r+h?Math.sqrt((r+h+c)*(r+h+c)-u*u):Math.abs(t[s].x-n);e&&f>=o&&(f=o-10),!e&&f<=o&&(f=o+10),t[s].x=n+f*a,o=f}}t.sort(function(t,e){return t.y-e.y});for(var u,h=0,c=t.length,f=[],d=[],p=0;p<c;p++)(u=t[p].y-h)<0&&function(e,n,i,r){for(var a=e;a<n;a++)if(t[a].y+=i,a>e&&a+1<n&&t[a+1].y>t[a].y+t[a].height)return void s(a,i/2);s(n-1,i/2)}(p,c,-u),h=t[p].y+t[p].height;for(o-h<0&&s(c-1,h-o),p=0;p<c;p++)t[p].y>=n?d.push(t[p]):f.push(t[p]);l(f,!1,e,n,i,r),l(d,!0,e,n,i,r)}var Ko=2311,Qo=function(){return Ko++},Jo="object"==("undefined"==typeof wx?"undefined":s(wx))&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:void 0===n&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var i={},r=t.match(/Firefox\/([\d.]+)/),a=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),o=t.match(/Edge\/([\d.]+)/),s=/micromessenger/i.test(t);return r&&(i.firefox=!0,i.version=r[1]),a&&(i.ie=!0,i.version=a[1]),o&&(i.edge=!0,i.version=o[1]),s&&(i.weChat=!0),{browser:i,os:{},node:!1,canvasSupported:!!n.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in e&&!i.ie&&!i.edge,pointerEventsSupported:"onpointerdown"in e&&(i.edge||i.ie&&i.version>=11)}}(navigator.userAgent),ts={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},es={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},ns=Object.prototype.toString,is=Array.prototype,rs=is.forEach,as=is.filter,os=is.slice,ss=is.map,ls=is.reduce,us={},hs=function(){return us.createCanvas()};us.createCanvas=function(){return n.createElement("canvas")};var cs,fs="__ec_primitive__";N.prototype={constructor:N,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=v(t,e)),this)this.hasOwnProperty(n)&&t(this[n],n)},removeKey:function(t){delete this[t]}};var ds="undefined"==typeof Float32Array?Array:Float32Array,ps=X,gs=function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])};U.prototype={constructor:U,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(Z(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,a=i-this._y;this._x=n,this._y=i,e.drift(r,a,t),this.dispatchToElement(Z(e,t),"drag",t.event);var o=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=o,e!==o&&(s&&o!==s&&this.dispatchToElement(Z(s,t),"dragleave",t.event),o&&o!==s&&this.dispatchToElement(Z(o,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(Z(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(Z(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var vs=Array.prototype.slice,ms=function(){this._$handlers={}};ms.prototype={constructor:ms,one:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,a=n[t].length;r<a;r++)n[t][r].h!=e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>3&&(e=vs.call(e,1));for(var i=this._$handlers[t],r=i.length,a=0;a<r;){switch(n){case 1:i[a].h.call(i[a].ctx);break;case 2:i[a].h.call(i[a].ctx,e[1]);break;case 3:i[a].h.call(i[a].ctx,e[1],e[2]);break;default:i[a].h.apply(i[a].ctx,e)}i[a].one?(i.splice(a,1),r--):a++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>4&&(e=vs.call(e,1,e.length-1));for(var i=e[e.length-1],r=this._$handlers[t],a=r.length,o=0;o<a;){switch(n){case 1:r[o].h.call(i);break;case 2:r[o].h.call(i,e[1]);break;case 3:r[o].h.call(i,e[1],e[2]);break;default:r[o].h.apply(i,e)}r[o].one?(r.splice(o,1),a--):o++}}return this}};var ys="silent";$.prototype.dispose=function(){};var _s=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],xs=function(t,e,n,i){ms.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new $,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,U.call(this),this.setHandlerProxy(n)};xs.prototype={constructor:xs,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(f(_s,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target);var a=this._hovered=this.findHover(e,n),o=a.target,s=this.proxy;s.setCursor&&s.setCursor(o?o.cursor:"default"),r&&o!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(a,"mousemove",t),o&&o!==r&&this.dispatchToElement(a,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target;if(!i||!i.silent){for(var r="on"+e,a=function(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which}}(e,t,n);i&&(i[r]&&(a.cancelBubble=i[r].call(i,a)),i.trigger(e,a),i=i.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,a),t.trigger&&t.trigger(e,a)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},a=i.length-1;a>=0;a--){var o;if(i[a]!==n&&!i[a].ignore&&(o=K(i[a],t,e))&&(!r.topTarget&&(r.topTarget=i[a]),o!==ys)){r.target=i[a];break}}return r}},f(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){xs.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||ps(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),h(xs,ms),h(xs,U);var ws="undefined"==typeof Float32Array?Array:Float32Array,bs=J,Ss=5e-5,Ms=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},Cs=Ms.prototype;Cs.transform=null,Cs.needLocalTransform=function(){return at(this.rotation)||at(this.position[0])||at(this.position[1])||at(this.scale[0]-1)||at(this.scale[1]-1)},Cs.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;n||e?(i=i||Q(),n?this.getLocalTransform(i):bs(i),e&&(n?tt(i,t.transform,i):function(t,e){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5]}(i,t.transform)),this.transform=i,this.invTransform=this.invTransform||Q(),rt(this.invTransform,i)):i&&bs(i)},Cs.getLocalTransform=function(t){return Ms.getLocalTransform(this,t)},Cs.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},Cs.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Is=[];Cs.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(tt(Is,t.invTransform,e),e=Is);var n=e[0]*e[0]+e[1]*e[1],i=e[2]*e[2]+e[3]*e[3],r=this.position,a=this.scale;at(n-1)&&(n=Math.sqrt(n)),at(i-1)&&(i=Math.sqrt(i)),e[0]<0&&(n=-n),e[3]<0&&(i=-i),r[0]=e[4],r[1]=e[5],a[0]=n,a[1]=i,this.rotation=Math.atan2(-e[1]/i,e[0]/n)}},Cs.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},Cs.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&j(n,n,i),n},Cs.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&j(n,n,i),n},Ms.getLocalTransform=function(t,e){bs(e=e||[]);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,a=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),it(e,e,i),r&&nt(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=a[0],e[5]+=a[1],e};var Ts={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-Ts.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*Ts.bounceIn(2*t):.5*Ts.bounceOut(2*t-1)+.5}};ot.prototype={constructor:ot,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(n<0)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?Ts[i]:i,a="function"==typeof r?r(n):n;return this.fire("frame",a),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var ks=function(){this.head=null,this.tail=null,this._len=0},Ds=ks.prototype;Ds.insert=function(t){var e=new As(t);return this.insertEntry(e),e},Ds.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Ds.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Ds.len=function(){return this._len},Ds.clear=function(){this.head=this.tail=null,this._len=0};var As=function(t){this.value=t,this.next,this.prev},Ls=function(t){this._list=new ks,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Ps=Ls.prototype;Ps.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var a=n.len(),o=this._lastRemovedEntry;if(a>=this._maxSize&&a>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}o?o.value=e:o=new As(e),o.key=t,n.insertEntry(o),i[t]=o}return r},Ps.get=function(t){var e=this._map[t],n=this._list;if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},Ps.clear=function(){this._list.clear(),this._map={}};var Os={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},Es=new Ls(20),Ns=null,zs=Array.prototype.slice,Bs=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||mt,this._setter=i||yt,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};Bs.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:It(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0;for(var a in this._tracks)if(this._tracks.hasOwnProperty(a)){var o=kt(this,t,function(){--r||i._doneCallback()},this._tracks[a],a,e);o&&(this._clipList.push(o),r++,this.animation&&this.animation.addClip(o),n=o)}if(n){var s=n.onframe;n.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var Rs=1;void 0!==e&&(Rs=Math.max(e.devicePixelRatio||1,1));var Fs=Rs,Vs=function(){},Ws=function(){this.animators=[]};Ws.prototype={constructor:Ws,animate:function(t,e){var n,i=!1,r=this,a=this.__zr;if(t){var o=t.split("."),s=r;i="shape"===o[0];for(var u=0,h=o.length;u<h;u++)s&&(s=s[o[u]]);s&&(n=s)}else n=r;if(n){var c=r.animators,f=new Bs(n,e);return f.during(function(t){r.dirty(i)}).done(function(){c.splice(l(c,f),1)}),c.push(f),a&&a.animation.addAnimator(f),f}Vs('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,a){x(n)?(r=i,i=n,n=0):_(i)?(r=i,i="linear",n=0):_(n)?(r=n,n=0):_(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n);var o=this.animators.slice(),s=o.length;s||r&&r();for(var l=0;l<o.length;l++)o[l].done(function(){--s||r&&r()}).start(i,a)},_animateToShallow:function(t,e,n,i,r){var a={},o=0;for(var s in n)if(n.hasOwnProperty(s))if(null!=e[s])w(n[s])&&!c(n[s])?this._animateToShallow(t?t+"."+s:s,e[s],n[s],i,r):(a[s]=n[s],o++);else if(null!=n[s])if(t){var l={};l[t]={},l[t][s]=n[s],this.attr(l)}else this.attr(s,n[s]);return o>0&&this.animate(t,!1).when(null==i?500:i,a).delay(r||0),this}};var Hs=function(t){Ms.call(this,t),ms.call(this,t),Ws.call(this,t),this.id=t.id||Qo()};Hs.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(w(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},h(Hs,Ws),h(Hs,Ms),h(Hs,ms);var Gs=j,Xs=Math.min,js=Math.max;Dt.prototype={constructor:Dt,union:function(t){var e=Xs(t.x,this.x),n=Xs(t.y,this.y);this.width=js(t.x+t.width,this.x+this.width)-e,this.height=js(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,Gs(t,t,r),Gs(e,e,r),Gs(n,n,r),Gs(i,i,r),this.x=Xs(t[0],e[0],n[0],i[0]),this.y=Xs(t[1],e[1],n[1],i[1]);var a=js(t[0],e[0],n[0],i[0]),o=js(t[1],e[1],n[1],i[1]);this.width=a-this.x,this.height=o-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=Q();return et(r,r,[-e.x,-e.y]),it(r,r,[n,i]),et(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof Dt||(t=Dt.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,a=e.y+e.height,o=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(i<o||s<n||a<l||u<r)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new Dt(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},Dt.create=function(t){return new Dt(t.x,t.y,t.width,t.height)};var qs=function(t){for(var e in t=t||{},Hs.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};qs.prototype={constructor:qs,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof qs&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=l(i,t);return r<0?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof qs&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof qs&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof qs&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof qs&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new Dt(0,0,0,0),i=t||this._children,r=[],a=0;a<i.length;a++){var o=i[a];if(!o.ignore&&!o.invisible){var s=o.getBoundingRect(),l=o.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),(e=e||n.clone()).union(n)):(e=e||s.clone()).union(s)}}return e||n}},u(qs,Hs);var Ys=32,Us=7,Zs=function(){this._roots=[],this._displayList=[],this._displayListLen=0};Zs.prototype={constructor:Zs,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;i<r;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,Jo.canvasSupported&&Et(n,Nt)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,a=t;r;)r.parent=a,r.updateTransform(),e.push(r),a=r,r=r.clipPath}if(t.isGroup){for(var o=t._children,s=0;s<o.length;s++){var l=o[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof qs&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(n=0;n<this._roots.length;n++){var e=this._roots[n];e instanceof qs&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var n=0,i=t.length;n<i;n++)this.delRoot(t[n]);else{var r=l(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof qs&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:Nt};var $s={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},Ks=function(t,e,n){return $s.hasOwnProperty(e)?n*=t.dpr:n},Qs=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],Js=function(t,e){this.extendFrom(t,!1),this.host=e};Js.prototype={constructor:Js,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var i=this,r=n&&n.style,a=!r,o=0;o<Qs.length;o++){var s=Qs[o],l=s[0];(a||i[l]!==r[l])&&(t[l]=Ks(t,l,i[l]||s[1]))}if((a||i.fill!==r.fill)&&(t.fillStyle=i.fill),(a||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(a||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(a||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?function(t,e,n){var i=n.width,r=n.height,a=Math.min(i,r),o=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(o=o*i+n.x,s=s*r+n.y,l*=a),t.createRadialGradient(o,s,0,o,s,l)}:function(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,a=null==e.y?0:e.y,o=null==e.y2?0:e.y2;return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,a=a*n.height+n.y,o=o*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,a=isNaN(a)?0:a,o=isNaN(o)?0:o,t.createLinearGradient(i,a,r,o)})(t,e,n),r=e.colorStops,a=0;a<r.length;a++)i.addColorStop(r[a].offset,r[a].color);return i}};for(var tl=Js.prototype,el=0;el<Qs.length;el++){var nl=Qs[el];nl[0]in tl||(tl[nl[0]]=nl[1])}Js.getGradient=tl.getGradient;var il=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};il.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var rl=function(t,e,n){var i;n=n||Fs,"string"==typeof t?i=Bt(t,e,n):w(t)&&(t=(i=t).id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=zt,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};rl.prototype={constructor:rl,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=Bt("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,a=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,a&&(a.width=t*n,a.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,a=i.width,o=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,a/u,o/u)),r.clearRect(0,0,a,o),e&&"transparent"!==e)&&(e.colorStops?(n=e.__canvasGradient||Js.getGradient(r,e,{x:0,y:0,width:a,height:o}),e.__canvasGradient=n):e.image&&(n=il.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,a,o),r.restore());if(s){var h=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(h,0,0,a,o),r.restore()}}};var al=void 0!==e&&(e.requestAnimationFrame&&e.requestAnimationFrame.bind(e)||e.msRequestAnimationFrame&&e.msRequestAnimationFrame.bind(e)||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},ol=new Ls(50),sl={},ll=0,ul=5e3,hl=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,cl="12px sans-serif",fl={};fl.measureText=function(t,e){var n=(cs||(cs=hs().getContext("2d")),cs);return n.font=e||cl,n.measureText(t)};var dl={left:1,right:1,center:1},pl={top:1,bottom:1,middle:1},gl=new Dt,vl=function(){};vl.prototype={constructor:vl,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&ne(n);var i=n.text;if(null!=i&&(i+=""),ve(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(gl.copy(e),gl.applyTransform(r),e=gl),re(this,t,i,n,e),t.restore()}}},me.prototype={constructor:me,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?Hs.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new Js(t,this),this.dirty(!1),this}},u(me,Hs),h(me,vl),ye.prototype={constructor:ye,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=Ft(i,this._image,this,this.onload);if(r&&Wt(r)){var a=n.x||0,o=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var h=n.sx||0,c=n.sy||0;t.drawImage(r,h,c,n.sWidth,n.sHeight,a,o,s,l)}else if(n.sx&&n.sy){var f=s-(h=n.sx),d=l-(c=n.sy);t.drawImage(r,h,c,f,d,a,o,s,l)}else t.drawImage(r,a,o,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new Dt(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},u(ye,me);var ml=new Dt(0,0,0,0),yl=new Dt(0,0,0,0),_l=function(t,e,i){this.type="canvas";var r=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=i=a({},i||{}),this.dpr=i.devicePixelRatio||Fs,this._singleCanvas=r,this.root=t;var o=t.style;o&&(o["-webkit-tap-highlight-color"]="transparent",o["-webkit-user-select"]=o["user-select"]=o["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var s=this._zlevelList=[],l=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,r){var u=t.width,h=t.height;null!=i.width&&(u=i.width),null!=i.height&&(h=i.height),this.dpr=i.devicePixelRatio||1,t.width=u*this.dpr,t.height=h*this.dpr,this._width=u,this._height=h;var c=new rl(t,this,this.dpr);c.__builtin__=!0,c.initContext(),l[314159]=c,c.zlevel=314159,s.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var f=this._domRoot=function(t,e){var i=n.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}(this._width,this._height);t.appendChild(f)}this._hoverlayer=null,this._hoverElements=[]};_l.prototype={constructor:_l,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],a=this._layers[r];if(!a.__builtin__&&a.refresh){var o=0===i?this._backgroundColor:null;a.refresh(o)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape});n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=l(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from;i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){Et(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5));var i={};n.ctx.save();for(var r=0;r<e;){var a=t[r],o=a.__from;o&&o.__zr?(r++,o.invisible||(a.transform=o.transform,a.invTransform=o.invTransform,a.__clipPaths=o.__clipPaths,this._doPaintEl(a,n,!0,i))):(t.splice(r,1),o.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;al(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];(s=this._layers[r]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&n.push(s)}for(var a=!0,o=0;o<n.length;o++){var s=n[o],l=s.ctx,u={};l.save();var h=e?s.__startIndex:s.__drawIndex,c=!e&&s.incremental&&Date.now,d=c&&Date.now(),p=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,p);else if(h===s.__startIndex){var g=t[h];g.incremental&&g.notClear&&!e||s.clear(!1,p)}-1===h&&(console.error("For some unknown reason. drawIndex is -1"),h=s.__startIndex);for(var v=h;v<s.__endIndex;v++){var m=t[v];if(this._doPaintEl(m,s,e,u),m.__dirty=!1,c&&Date.now()-d>15)break}s.__drawIndex=v,s.__drawIndex<s.__endIndex&&(a=!1),u.prevElClipPaths&&l.restore(),l.restore()}return Jo.wxa&&f(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),a},_doPaintEl:function(t,e,n,i){var r=e.ctx,a=t.transform;if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!a||a[0]||a[3])&&(!t.culling||!function(t,e,n){return ml.copy(t.getBoundingRect()),t.transform&&ml.applyTransform(t.transform),yl.width=e,yl.height=n,!ml.intersect(yl)}(t,this._width,this._height))){var o=t.__clipPaths;i.prevElClipPaths&&!function(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}(o,i.prevElClipPaths)||(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),o&&(r.save(),function(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}(o,r),i.prevElClipPaths=o)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var n=this._layers[t];return n||((n=new rl("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&r(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,a=null,o=-1,s=this._domRoot;if(n[t])Vs("ZLevel "+t+" has been used already");else if(function(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}(e)){if(r>0&&t>i[0]){for(o=0;o<r-1&&!(i[o]<t&&i[o+1]>t);o++);a=n[i[o]]}if(i.splice(o+1,0,t),n[t]=e,!e.virtual)if(a){var l=a.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else Vs("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){n&&(n.__endIndex!==t&&(n.__dirty=!0),n.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(r=1;r<t.length;r++)if((o=t[r]).zlevel!==t[r-1].zlevel||o.incremental){this._needsManuallyCompositing=!0;break}for(var n=null,i=0,r=0;r<t.length;r++){var a,o=t[r],s=o.zlevel;o.incremental?((a=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,i=1):a=this.getLayer(s+(i>0?.01:0),this._needsManuallyCompositing),a.__builtin__||Vs("ZLevel "+s+" has been used by unkown layer "+a.id),a!==n&&(a.__used=!0,a.__startIndex!==r&&(a.__dirty=!0),a.__startIndex=r,a.incremental?a.__drawIndex=-1:a.__drawIndex=r,e(r),n=a),o.__dirty&&(a.__dirty=!0,a.incremental&&a.__drawIndex<0&&(a.__drawIndex=r))}e(r),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?r(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var a=this._zlevelList[i];a!==t&&a!==t+.01||r(this._layers[a],n[t],!0)}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(l(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);f(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new rl("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var a={},o=this.storage.getDisplayList(!0),s=0;s<o.length;s++){var l=o[s];this._doPaintEl(l,e,!0,a)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],r=["clientWidth","clientHeight"][t],a=["paddingLeft","paddingTop"][t],o=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var s=this.root,l=n.defaultView.getComputedStyle(s);return(s[r]||_e(l[i])||_e(s.style[i]))-(_e(l[a])||0)-(_e(l[o])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=n.createElement("canvas"),r=i.getContext("2d"),a=t.getBoundingRect(),o=t.style,s=o.shadowBlur*e,l=o.shadowOffsetX*e,u=o.shadowOffsetY*e,h=o.hasStroke()?o.lineWidth:0,c=Math.max(h/2,-l+s),f=Math.max(h/2,l+s),d=Math.max(h/2,-u+s),p=Math.max(h/2,u+s),g=a.width+c+f,v=a.height+d+p;i.width=g*e,i.height=v*e,r.scale(e,e),r.clearRect(0,0,g,v),r.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[c-a.x,d-a.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(r);var y=new ye({style:{x:0,y:0,image:i}});return null!=m.position&&(y.position=t.position=m.position),null!=m.rotation&&(y.rotation=t.rotation=m.rotation),null!=m.scale&&(y.scale=t.scale=m.scale),y}};var xl=void 0!==e&&!!e.addEventListener,wl=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,bl=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,ms.call(this)};bl.prototype={constructor:bl,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=l(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],a=[],o=0;o<i;o++){var s=n[o],l=s.step(t,e);l&&(r.push(l),a.push(s))}for(o=0;o<i;)n[o]._needsRemove?(n[o]=n[i-1],n.pop(),i--):o++;for(i=r.length,o=0;o<i;o++)a[o].fire(r[o]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){var t=this;this._running=!0,al(function e(){t._running&&(al(e),!t._paused&&t._update())})},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new Bs(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(n),n}},h(bl,ms);var Sl=function(){this._track=[]};Sl.prototype={constructor:Sl,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},a=0,o=i.length;a<o;a++){var s=i[a],l=xe(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in Ml)if(Ml.hasOwnProperty(e)){var n=Ml[e](this._track,t);if(n)return n}}};var Ml={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var a=Me(i)/Me(r);!isFinite(a)&&(a=1),e.pinchScale=a;var o=function(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}(i);return e.pinchX=o[0],e.pinchY=o[1],{type:"pinch",target:t[0].target,event:e}}}}},Cl=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Il=["touchstart","touchend","touchmove"],Tl={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},kl=d(Cl,function(t){var e=t.replace("mouse","pointer");return Tl[e]?e:t}),Dl={mousemove:function(t){t=be(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=be(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=be(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,Ie(this,t,"start"),Dl.mousemove.call(this,t),Dl.mousedown.call(this,t),Te(this)},touchmove:function(t){(t=be(this.dom,t)).zrByTouch=!0,Ie(this,t,"change"),Dl.mousemove.call(this,t),Te(this)},touchend:function(t){(t=be(this.dom,t)).zrByTouch=!0,Ie(this,t,"end"),Dl.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Dl.click.call(this,t),Te(this)},pointerdown:function(t){Dl.mousedown.call(this,t)},pointermove:function(t){ke(t)||Dl.mousemove.call(this,t)},pointerup:function(t){Dl.mouseup.call(this,t)},pointerout:function(t){ke(t)||Dl.mouseout.call(this,t)}};f(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Dl[t]=function(e){e=be(this.dom,e),this.trigger(t,e)}});var Al=De.prototype;Al.dispose=function(){for(var t=Cl.concat(Il),e=0;e<t.length;e++){var n=t[e];Se(this.dom,Ce(n),this._handlers[n])}},Al.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},h(De,ms);var Ll=!Jo.canvasSupported,Pl={canvas:_l},Ol=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new Zs,a=n.renderer;if(Ll){if(!Pl.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");a="vml"}else a&&Pl[a]||(a="canvas");var o=new Pl[a](e,r,n,t);this.storage=r,this.painter=o;var s=Jo.node||Jo.worker?null:new De(o.getViewportRoot());this.handler=new xs(r,o,s,o.root),this.animation=new bl({stage:{update:v(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,u=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){u.call(r,t),t.addSelfToZr(i)}};Ol.prototype={constructor:Ol,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null}};var El=f,Nl=w,zl=y,Bl="series\0",Rl=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],Fl=0,Vl=".",Wl="___EC__COMPONENT__CONTAINER___",Hl=0,Gl=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},a=0;a<t.length;a++){var o=t[a][1];if(!(n&&l(n,o)>=0||i&&l(i,o)<0)){var s=e.getShallow(o);null!=s&&(r[t[a][0]]=s)}}return r}},Xl=Gl([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),jl={getLineStyle:function(t){var e=Xl(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}},ql=Gl([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),Yl={getAreaStyle:function(t,e){return ql(this,t,e)}},Ul=Math.pow,Zl=Math.sqrt,$l=1e-8,Kl=1e-4,Ql=Zl(3),Jl=1/3,tu=R(),eu=R(),nu=R(),iu=Math.min,ru=Math.max,au=Math.sin,ou=Math.cos,su=2*Math.PI,lu=R(),uu=R(),hu=R(),cu=[],fu=[],du={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},pu=[],gu=[],vu=[],mu=[],yu=Math.min,_u=Math.max,xu=Math.cos,wu=Math.sin,bu=Math.sqrt,Su=Math.abs,Mu="undefined"!=typeof Float32Array,Cu=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};Cu.prototype={constructor:Cu,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=Su(1/Fs/t)||0,this._uy=Su(1/Fs/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(du.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=Su(t-this._xi)>this._ux||Su(e-this._yi)>this._uy||this._len<5;return this.addData(du.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,a){return this.addData(du.C,t,e,n,i,r,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,a):this._ctx.bezierCurveTo(t,e,n,i,r,a)),this._xi=r,this._yi=a,this},quadraticCurveTo:function(t,e,n,i){return this.addData(du.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,a){return this.addData(du.A,t,e,n,n,i,r-i,0,a?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,a),this._xi=xu(r)*n+t,this._yi=wu(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(du.R,t,e,n,i),this},closePath:function(){this.addData(du.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!Mu||(this.data=new Float32Array(e));for(var n=0;n<e;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len();for(Mu&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var a=t[r].data,o=0;o<a.length;o++)this.data[i++]=a[o];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,a=this._dashOffset,o=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,h=t-l,c=e-u,f=bu(h*h+c*c),d=l,p=u,g=o.length;for(h/=f,c/=f,a<0&&(a=r+a),d-=(a%=r)*h,p-=a*c;h>0&&d<=t||h<0&&d>=t||0==h&&(c>0&&p<=e||c<0&&p>=e);)d+=h*(n=o[i=this._dashIdx]),p+=c*n,this._dashIdx=(i+1)%g,h>0&&d<l||h<0&&d>l||c>0&&p<u||c<0&&p>u||s[i%2?"moveTo":"lineTo"](h>=0?yu(d,t):_u(d,t),c>=0?yu(p,e):_u(p,e));h=d-t,c=p-e,this._dashOffset=-bu(h*h+c*c)},_dashedBezierTo:function(t,e,n,i,r,a){var o,s,l,u,h,c=this._dashSum,f=this._dashOffset,d=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=$e,y=0,_=this._dashIdx,x=d.length,w=0;for(f<0&&(f=c+f),f%=c,o=0;o<1;o+=.1)s=m(g,t,n,r,o+.1)-m(g,t,n,r,o),l=m(v,e,i,a,o+.1)-m(v,e,i,a,o),y+=bu(s*s+l*l);for(;_<x&&!((w+=d[_])>f);_++);for(o=(w-f)/y;o<=1;)u=m(g,t,n,r,o),h=m(v,e,i,a,o),_%2?p.moveTo(u,h):p.lineTo(u,h),o+=d[_]/y,_=(_+1)%x;_%2!=0&&p.lineTo(r,a),s=r-u,l=a-h,this._dashOffset=-bu(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,a=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,a)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,Mu&&(this.data=new Float32Array(t)))},getBoundingRect:function(){pu[0]=pu[1]=vu[0]=vu[1]=Number.MAX_VALUE,gu[0]=gu[1]=mu[0]=mu[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,a=0;a<t.length;){var o=t[a++];switch(1==a&&(i=e=t[a],r=n=t[a+1]),o){case du.M:e=i=t[a++],n=r=t[a++],vu[0]=i,vu[1]=r,mu[0]=i,mu[1]=r;break;case du.L:an(e,n,t[a],t[a+1],vu,mu),e=t[a++],n=t[a++];break;case du.C:on(e,n,t[a++],t[a++],t[a++],t[a++],t[a],t[a+1],vu,mu),e=t[a++],n=t[a++];break;case du.Q:sn(e,n,t[a++],t[a++],t[a],t[a+1],vu,mu),e=t[a++],n=t[a++];break;case du.A:var s=t[a++],l=t[a++],u=t[a++],h=t[a++],c=t[a++],f=t[a++]+c,d=(t[a++],1-t[a++]);1==a&&(i=xu(c)*u+s,r=wu(c)*h+l),ln(s,l,u,h,c,f,d,vu,mu),e=xu(f)*u+s,n=wu(f)*h+l;break;case du.R:an(i=e=t[a++],r=n=t[a++],i+t[a++],r+t[a++],vu,mu);break;case du.Z:e=i,n=r}q(pu,pu,vu),Y(gu,gu,mu)}return 0===a&&(pu[0]=pu[1]=gu[0]=gu[1]=0),new Dt(pu[0],pu[1],gu[0]-pu[0],gu[1]-pu[1])},rebuildPath:function(t){for(var e,n,i,r,a,o,s=this.data,l=this._ux,u=this._uy,h=this._len,c=0;c<h;){var f=s[c++];switch(1==c&&(e=i=s[c],n=r=s[c+1]),f){case du.M:e=i=s[c++],n=r=s[c++],t.moveTo(i,r);break;case du.L:a=s[c++],o=s[c++],(Su(a-i)>l||Su(o-r)>u||c===h-1)&&(t.lineTo(a,o),i=a,r=o);break;case du.C:t.bezierCurveTo(s[c++],s[c++],s[c++],s[c++],s[c++],s[c++]),i=s[c-2],r=s[c-1];break;case du.Q:t.quadraticCurveTo(s[c++],s[c++],s[c++],s[c++]),i=s[c-2],r=s[c-1];break;case du.A:var d=s[c++],p=s[c++],g=s[c++],v=s[c++],m=s[c++],y=s[c++],_=s[c++],x=s[c++],w=g>v?g:v,b=g>v?1:g/v,S=g>v?v/g:1,M=m+y;Math.abs(g-v)>.001?(t.translate(d,p),t.rotate(_),t.scale(b,S),t.arc(0,0,w,m,M,1-x),t.scale(1/b,1/S),t.rotate(-_),t.translate(-d,-p)):t.arc(d,p,w,m,M,1-x),1==c&&(e=xu(m)*g+d,n=wu(m)*v+p),i=xu(M)*g+d,r=wu(M)*v+p;break;case du.R:e=i=s[c],n=r=s[c+1],t.rect(s[c++],s[c++],s[c++],s[c++]);break;case du.Z:t.closePath(),i=e,r=n}}}},Cu.CMD=du;var Iu=2*Math.PI,Tu=2*Math.PI,ku=Cu.CMD,Du=2*Math.PI,Au=1e-4,Lu=[-1,-1,-1],Pu=[-1,-1],Ou=il.prototype.getCanvasPattern,Eu=Math.abs,Nu=new Cu(!0);xn.prototype={constructor:xn,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n,i=this.style,r=this.path||Nu,a=i.hasStroke(),o=i.hasFill(),s=i.fill,l=i.stroke,u=o&&!!s.colorStops,h=a&&!!l.colorStops,c=o&&!!s.image,f=a&&!!l.image;(i.bind(t,this,e),this.setTransform(t),this.__dirty)&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),h&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n)));u?t.fillStyle=this._fillGradient:c&&(t.fillStyle=Ou.call(s,t)),h?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=Ou.call(l,t));var d=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();r.setScale(v[0],v[1]),this.__dirtyPath||d&&!g&&a?(r.beginPath(t),d&&!g&&(r.setLineDash(d),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),o&&r.fill(t),d&&g&&(t.setLineDash(d),t.lineDashOffset=p),a&&r.stroke(t),d&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new Cu},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new Cu),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var a=e.lineWidth,o=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(a=Math.max(a,this.strokeContainThreshold||4)),o>1e-10&&(r.width+=a/o,r.height+=a/o,r.x-=a/o/2,r.y-=a/o/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var a=this.path.data;if(r.hasStroke()){var o=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(o=Math.max(o,this.strokeContainThreshold)),function(t,e,n,i){return _n(t,e,!0,n,i)}(a,o/s,t,e)))return!0}if(r.hasFill())return function(t,e,n){return _n(t,0,!1,e,n)}(a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):me.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(w(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&Eu(t[0]-1)>1e-10&&Eu(t[3]-1)>1e-10?Math.sqrt(Eu(t[0]*t[3]-t[2]*t[1])):1}},xn.extend=function(t){var e=function(e){xn.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};for(var n in u(e,xn),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},u(xn,me);var zu=Cu.CMD,Bu=[[],[],[]],Ru=Math.sqrt,Fu=Math.atan2,Vu=function(t,e){var n,i,r,a,o,s,l=t.data,u=zu.M,h=zu.C,c=zu.L,f=zu.R,d=zu.A,p=zu.Q;for(r=0,a=0;r<l.length;){switch(n=l[r++],a=r,i=0,n){case u:case c:i=1;break;case h:i=3;break;case p:i=2;break;case d:var g=e[4],v=e[5],m=Ru(e[0]*e[0]+e[1]*e[1]),y=Ru(e[2]*e[2]+e[3]*e[3]),_=Fu(-e[1]/y,e[0]/m);l[r]*=m,l[r++]+=g,l[r]*=y,l[r++]+=v,l[r++]*=m,l[r++]*=y,l[r++]+=_,l[r++]+=_,a=r+=2;break;case f:s[0]=l[r++],s[1]=l[r++],j(s,s,e),l[a++]=s[0],l[a++]=s[1],s[0]+=l[r++],s[1]+=l[r++],j(s,s,e),l[a++]=s[0],l[a++]=s[1]}for(o=0;o<i;o++)(s=Bu[o])[0]=l[r++],s[1]=l[r++],j(s,s,e),l[a++]=s[0],l[a++]=s[1]}},Wu=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],Hu=Math.sqrt,Gu=Math.sin,Xu=Math.cos,ju=Math.PI,qu=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},Yu=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(qu(t)*qu(e))},Uu=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(Yu(t,e))},Zu=function(t){me.call(this,t)};Zu.prototype={constructor:Zu,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&ne(n),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;null!=i&&(i+=""),n.bind(t,this,e),ve(i,n)&&(this.setTransform(t),re(this,t,i,n),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&ne(t),!this._rect){var e=t.text;null!=e?e+="":e="";var n=Gt(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,fe(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},u(Zu,me);var $u=xn.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),Ku=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],Qu=function(t){return Jo.browser.ie&&Jo.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var a=n[r],o=a&&a.shape,s=a&&a.type;if(o&&("sector"===s&&o.startAngle===o.endAngle||"rect"===s&&(!o.width||!o.height))){for(l=0;l<Ku.length;l++)Ku[l][2]=i[Ku[l][0]],i[Ku[l][0]]=Ku[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<Ku.length;l++)i[Ku[l][0]]=Ku[l][2]}:t},Ju=xn.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:Qu(xn.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),a=Math.max(e.r,0),o=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(o),h=Math.sin(o);t.moveTo(u*r+n,h*r+i),t.lineTo(u*a+n,h*a+i),t.arc(n,i,a,o,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,o,l),t.closePath()}}),th=xn.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),eh=function(t,e){for(var n=t.length,i=[],r=0,a=1;a<n;a++)r+=X(t[a-1],t[a]);var o=r/2;for(o=o<n?n:o,a=0;a<o;a++){var s,l,u,h=a/(o-1)*(e?n:n-1),c=Math.floor(h),f=h-c,d=t[c%n];e?(s=t[(c-1+n)%n],l=t[(c+1)%n],u=t[(c+2)%n]):(s=t[0===c?c:c-1],l=t[c>n-2?n-1:c+1],u=t[c>n-3?n-1:c+2]);var p=f*f,g=f*p;i.push([Sn(s[0],d[0],l[0],u[0],f,p,g),Sn(s[1],d[1],l[1],u[1],f,p,g)])}return i},nh=function(t,e,n,i){var r,a,o,s,l=[],u=[],h=[],c=[];if(i){o=[1/0,1/0],s=[-1/0,-1/0];for(var f=0,d=t.length;f<d;f++)q(o,o,t[f]),Y(s,s,t[f]);q(o,o,i[0]),Y(s,s,i[1])}for(f=0,d=t.length;f<d;f++){var p=t[f];if(n)r=t[f?f-1:d-1],a=t[(f+1)%d];else{if(0===f||f===d-1){l.push(F(t[f]));continue}r=t[f-1],a=t[f+1]}W(u,a,r),H(u,u,e);var g=X(p,r),v=X(p,a),m=g+v;0!==m&&(g/=m,v/=m),H(h,u,-g),H(c,u,v);var y=V([],p,h),_=V([],p,c);i&&(Y(y,y,o),q(y,y,s),Y(_,_,o),q(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l},ih=xn.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){Mn(t,e,!0)}}),rh=xn.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){Mn(t,e,!1)}}),ah=xn.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width,a=e.height;e.r?ee(t,e):t.rect(n,i,r,a),t.closePath()}}),oh=xn.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.percent;0!==o&&(t.moveTo(n,i),o<1&&(r=n*(1-o)+r*o,a=i*(1-o)+a*o),t.lineTo(r,a))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),sh=[],lh=xn.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,h=e.percent;0!==h&&(t.moveTo(n,i),null==l||null==u?(h<1&&(rn(n,o,r,h,sh),o=sh[1],r=sh[2],rn(i,s,a,h,sh),s=sh[1],a=sh[2]),t.quadraticCurveTo(o,s,r,a)):(h<1&&(Je(n,o,l,r,h,sh),o=sh[1],l=sh[2],r=sh[3],Je(i,s,u,a,h,sh),s=sh[1],u=sh[2],a=sh[3]),t.bezierCurveTo(o,s,l,u,r,a)))},pointAt:function(t){return Cn(this.shape,t,!1)},tangentAt:function(t){var e=Cn(this.shape,t,!0);return G(e,e)}}),uh=xn.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),a=e.startAngle,o=e.endAngle,s=e.clockwise,l=Math.cos(a),u=Math.sin(a);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,a,o,!s)}}),hh=xn.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),xn.prototype.getBoundingRect.call(this)}}),ch=function(t){this.colorStops=t||[]};ch.prototype={constructor:ch,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var fh=function(t,e,n,i,r,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=a||!1,ch.call(this,r)};fh.prototype={constructor:fh},u(fh,ch);var dh=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,ch.call(this,i)};dh.prototype={constructor:dh},u(dh,ch),In.prototype.incremental=!0,In.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},In.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},In.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},In.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},In.prototype.update=function(){for(this.updateTransform(),t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},In.prototype.brush=function(t,e){for(n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t);this._cursor=n;for(var n=0;n<this._temporaryDisplayables.length;n++){var i=this._temporaryDisplayables[n];i.beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var ph=[];In.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new Dt(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(ph)),t.union(i)}this._rect=t}return this._rect},In.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0;return!1},u(In,me);var gh=Math.round,vh=Math.max,mh=Math.min,yh={},_h=(Object.freeze||Object)({extendShape:Tn,extendPath:function(t,e){return function(t,e){return xn.extend(bn(t,e))}(t,e)},makePath:kn,makeImage:Dn,mergePath:function(t,e){for(var n=[],i=t.length,r=0;r<i;r++){var a=t[r];a.path||a.createPathProxy(),a.__dirtyPath&&a.buildPath(a.path,a.shape,!0),n.push(a.path)}var o=new xn(e);return o.createPathProxy(),o.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},o},resizePath:Ln,subPixelOptimizeLine:Pn,subPixelOptimizeRect:function(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,a=e.width,o=e.height;return e.x=On(e.x,n,!0),e.y=On(e.y,n,!0),e.width=Math.max(On(i+a,n,!1)-e.x,0===a?0:1),e.height=Math.max(On(r+o,n,!1)-e.y,0===o?0:1),t},subPixelOptimize:On,setHoverStyle:qn,setLabelStyle:Yn,setTextStyle:Un,setText:function(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,Zn(t,e,r,i),t.host&&t.host.dirty&&t.host.dirty(!1)},getFont:Jn,updateProps:ei,initProps:ni,getTransform:function(t,e){for(var n=J([]);t&&t!==e;)tt(n,t.getLocalTransform(),n),t=t.parent;return n},applyTransform:ii,transformDirection:function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return a=ii(a,e,n),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?"bottom":"top"},groupTransition:ri,clipPointsByRect:function(t,e){return d(t,function(t){var n=t[0];n=vh(n,e.x),n=mh(n,e.x+e.width);var i=t[1];return i=vh(i,e.y),[n,i=mh(i,e.y+e.height)]})},clipRectByRect:function(t,e){var n=vh(t.x,e.x),i=mh(t.x+t.width,e.x+e.width),r=vh(t.y,e.y),a=mh(t.y+t.height,e.y+e.height);if(i>=n&&a>=r)return{x:n,y:r,width:i-n,height:a-r}},createIcon:function(t,e,n){var i=(e=a({rectHover:!0},e)).style={strokeNoScale:!0};if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(i.image=t.slice(8),o(i,n),new ye(e)):kn(t.replace("path://",""),e,n,"center")},Group:qs,Image:ye,Text:Zu,Circle:$u,Sector:Ju,Ring:th,Polygon:ih,Polyline:rh,Rect:ah,Line:oh,BezierCurve:lh,Arc:uh,IncrementalDisplayable:In,CompoundPath:hh,LinearGradient:fh,RadialGradient:dh,BoundingRect:Dt}),xh=["textStyle","color"],wh={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(xh):null)},getFont:function(){return Jn({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return Gt(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},bh=Gl([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),Sh={getItemStyle:function(t,e){var n=bh(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},Mh=h,Ch=Re();ai.prototype={constructor:ai,init:null,mergeOption:function(t){r(this.option,t,!0)},get:function(t,e){return null==t?this.option:oi(this.option,this.parsePath(t),!e&&si(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&si(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n;return new ai(null==t?this.option:oi(this.option,t=this.parsePath(t)),e=e||(n=si(this,t))&&n.getModel(t),this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(i(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){Ch(this).getParent=t},isAnimationEnabled:function(){if(!Jo.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Ge(ai),Xe(ai),Mh(ai,jl),Mh(ai,Yl),Mh(ai,wh),Mh(ai,Sh);var Ih=0,Th=1e-4,kh=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Dh=A,Ah=/([&<>"'])/g,Lh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ph=["a","b","c","d","e","f","g"],Oh=function(t,e){return"{"+t+(null==e?"":e)+"}"},Eh=qt,Nh=f,zh=["left","right","top","bottom","width","height"],Bh=[["width","left","right"],["height","top","bottom"]],Rh=(m(Si,"vertical"),m(Si,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),Fh=Re(),Vh=ai.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){ai.call(this,t,e,n,i),this.uid=li("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Ci(t):{};r(t,e.getTheme().get(this.mainType)),r(t,this.getDefaultOption()),n&&Mi(t,i,n)},mergeOption:function(t,e){r(this.option,t,!0);var n=this.layoutMode;n&&Mi(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=Fh(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var a={},o=e.length-1;o>=0;o--)a=r(a,e[o],!0);t.defaultOption=a}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});Ye(Vh,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,n){t=He(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var a=He(n).main;t.hasSubTypes(n)&&e[a]&&(r=e[a](i))}return r}}(Vh),function(t,e){function n(t){var n={},r=[];return f(t,function(a){var o=i(n,a),s=function(t,e){var n=[];return f(t,function(t){l(e,t)>=0&&n.push(t)}),n}(o.originalDeps=e(a),t);o.entryCount=s.length,0===o.entryCount&&r.push(a),f(s,function(t){l(o.predecessor,t)<0&&o.predecessor.push(t);var e=i(n,t);l(e.successor,t)<0&&e.successor.push(a)})}),{graph:n,noEntryList:r}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}Vh.topologicalTravel=function(t,e,i,r){function a(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var o=n(e),s=o.graph,l=o.noEntryList,u={};for(f(t,function(t){u[t]=!0});l.length;){var h=l.pop(),c=s[h],d=!!u[h];d&&(i.call(r,h,c.originalDeps.slice()),delete u[h]),f(c.successor,d?function(t){u[t]=!0,a(t)}:a)}f(u,function(){throw new Error("Circle dependency may exists")})}}}(0,function(t){var e=[];return f(Vh.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=d(e,function(t){return He(t).main}),"dataset"!==t&&l(e,"dataset")<=0&&e.unshift("dataset"),e}),h(Vh,Rh);var Wh="";"undefined"!=typeof navigator&&(Wh=navigator.platform||"");var Hh={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:Wh.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},Gh=Re(),Xh={clearColorPalette:function(){Gh(this).colorIdx=0,Gh(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=Gh(e=e||this),r=i.colorIdx||0,a=i.colorNameMap=i.colorNameMap||{};if(a.hasOwnProperty(t))return a[t];var o=Le(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?function(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i];return t[n-1]}(s,n):o;if((l=l||o)&&l.length){var u=l[r];return t&&(a[t]=u),i.colorIdx=(r+1)%l.length,u}}},jh={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],a=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",a),Ti(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),Ti(a)&&(i.set("y",a),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),Ti(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],a=r.findAxisModel("radiusAxis"),o=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",a),n.set("angle",o),Ti(a)&&(i.set("radius",a),e.firstCategoryDimIndex=0),Ti(o)&&(i.set("angle",o),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,a=r.getComponent("parallel",t.get("parallelIndex")),o=e.coordSysDims=a.dimensions.slice();f(a.parallelAxisIndex,function(t,a){var s=r.getComponent("parallelAxis",t),l=o[a];n.set(l,s),Ti(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=a)})}},qh="original",Yh="arrayRows",Uh="objectRows",Zh="keyedColumns",$h="unknown",Kh="typedArray",Qh="column",Jh="row";ki.seriesDataToSource=function(t){return new ki({data:t,sourceFormat:S(t)?Kh:qh,fromDataset:!1})},Xe(ki);var tc=Re(),ec="\0_ec_inner",nc=ai.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new ai(n),this._optionManager=i},setOption:function(t,e){L(!(ec in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):Ei.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var a=n.getMediaOption(this,this._api);a.length&&f(a,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,o=[];(function(t){tc(t).datasetMap=z()})(this),f(t,function(t,n){null!=t&&(Vh.hasClass(n)?n&&o.push(n):e[n]=null==e[n]?i(t):r(e[n],t,!0))}),Vh.topologicalTravel(o,Vh.getAllClassMainTypes(),function(i,r){var o=Le(t[i]),s=Ee(n.get(i),o);(function(t){var e=z();El(t,function(t,n){var i=t.exist;i&&e.set(i.id,t)}),El(t,function(t,n){var i=t.option;L(!i||null==i.id||!e.get(i.id)||e.get(i.id)===t,"id duplicates: "+(i&&i.id)),i&&null!=i.id&&e.set(i.id,t),!t.keyInfo&&(t.keyInfo={})}),El(t,function(t,n){var i=t.exist,r=t.option,a=t.keyInfo;if(Nl(r)){if(a.name=null!=r.name?r.name+"":i?i.name:Bl+n,i)a.id=i.id;else if(null!=r.id)a.id=r.id+"";else{var o=0;do{a.id="\0"+a.name+"\0"+o++}while(e.get(a.id))}e.set(a.id,t)}})})(s),f(s,function(t,e){var n=t.option;w(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=function(t,e,n){return e.type?e.type:n?n.subType:Vh.determineSubType(t,e)}(i,n,t.exist))});var l=function(t,e){y(e)||(e=e?[e]:[]);var n={};return f(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}(n,r);e[i]=[],n.set(i,[]),f(s,function(t,r){var o=t.exist,s=t.option;if(L(w(s)||o,"Empty component definition"),s){var u=Vh.getClass(i,t.keyInfo.subType,!0);if(o&&o instanceof u)o.name=t.keyInfo.name,o.mergeOption(s,this),o.optionUpdated(s,!1);else{var h=a({dependentModels:l,componentIndex:r},t.keyInfo);a(o=new u(s,this,this,h),h),o.init(s,this,this,h),o.optionUpdated(null,!0)}}else o.mergeOption({},this),o.optionUpdated({},!1);n.get(i)[r]=o,e[i][r]=o.option},this),"series"===i&&Ni(this,n.get("series"))},this),this._seriesIndicesMap=z(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=i(this.option);return f(t,function(e,n){if(Vh.hasClass(n)){for(var i=(e=Le(e)).length-1;i>=0;i--)ze(e[i])&&e.splice(i,1);t[n]=e}}),delete t[ec],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,a=t.name,o=this._componentsMap.get(e);if(!o||!o.length)return[];if(null!=i)y(i)||(i=[i]),n=g(d(i,function(t){return o[t]}),function(t){return!!t});else if(null!=r){var s=y(r);n=g(o,function(t){return s&&l(r,t.id)>=0||!s&&t.id===r})}else if(null!=a){var u=y(a);n=g(o,function(t){return u&&l(a,t.name)>=0||!u&&t.name===a})}else n=o.slice();return zi(n,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name";return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e);return function(e){return t.filter?g(e,t.filter):e}(zi(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap;"function"==typeof t?(n=e,e=t,i.each(function(t,i){f(t,function(t,r){e.call(n,i,t,r)})})):x(t)?f(i.get(t),e,n):w(t)&&f(this.findComponents(t),e,n)},getSeriesByName:function(t){return g(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return g(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){f(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){f(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){f(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return f(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){Ni(this,g(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;Ni(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),Vh.topologicalTravel(n,Vh.getAllClassMainTypes(),function(n,i){f(e.get(n),function(e){("series"!==n||!function(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}(e,t))&&e.restoreData()})})}});h(nc,Xh);var ic=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],rc={};Ri.prototype={constructor:Ri,create:function(t,e){var n=[];f(rc,function(i,r){var a=i.create(t,e);n=n.concat(a||[])}),this._coordinateSystems=n},update:function(t,e){f(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Ri.register=function(t,e){rc[t]=e},Ri.get=function(t){return rc[t]};var ac=f,oc=i,sc=d,lc=r,uc=/^(min|max)?(.+)$/;Fi.prototype={constructor:Fi,setOption:function(t,e){t&&f(Le(t.series),function(t){t&&t.data&&S(t.data)&&O(t.data)}),t=oc(t,!0);var n=this._optionBackup,i=function(t,e,n){var i,r,a=[],o=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},a=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;ac(l,function(t){t&&t.option&&(t.query?o.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),ac([r].concat(a).concat(d(o,function(t){return t.option})),function(t){ac(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:a,mediaDefault:i,mediaList:o}}.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(function(t,e){ac(e=e||{},function(e,n){if(null!=e){var i=t[n];if(Vh.hasClass(n)){e=Le(e);var r=Ee(i=Le(i),e);t[n]=sc(r,function(t){return t.option&&t.exist?lc(t.exist,t.option,!0):t.exist||t.option})}else t[n]=lc(i,e,!0)}})}(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=sc(e.timelineOptions,oc),this._mediaList=sc(e.mediaList,oc),this._mediaDefault=oc(e.mediaDefault),this._currentMediaIndices=[],oc(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=oc(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,a=[],o=[];if(!i.length&&!r)return o;for(var s=0,l=i.length;s<l;s++)Vi(i[s].query,e,n)&&a.push(s);return!a.length&&r&&(a=[-1]),a.length&&!function(t,e){return t.join(",")===e.join(",")}(a,this._currentMediaIndices)&&(o=sc(a,function(t){return oc(-1===t?r.option:i[t].option)})),this._currentMediaIndices=a,o}};var hc=f,cc=w,fc=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],dc=function(t,e){hc(qi(t.series),function(t){cc(t)&&function(t){if(cc(t)){Wi(t),Gi(t),Xi(t,"label"),Xi(t,"upperLabel"),Xi(t,"edgeLabel"),t.emphasis&&(Xi(t.emphasis,"label"),Xi(t.emphasis,"upperLabel"),Xi(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(Wi(e),ji(e));var n=t.markLine;n&&(Wi(n),ji(n));var i=t.markArea;i&&ji(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var a=t.links||t.edges;if(a&&!S(a))for(s=0;s<a.length;s++)ji(a[s]);f(t.categories,function(t){Gi(t)})}if(r&&!S(r))for(s=0;s<r.length;s++)ji(r[s]);if((e=t.markPoint)&&e.data)for(var o=e.data,s=0;s<o.length;s++)ji(o[s]);if((n=t.markLine)&&n.data){var l=n.data;for(s=0;s<l.length;s++)y(l[s])?(ji(l[s][0]),ji(l[s][1])):ji(l[s])}"gauge"===t.type?(Xi(t,"axisLabel"),Xi(t,"title"),Xi(t,"detail")):"treemap"===t.type?(Hi(t.breadcrumb,"itemStyle"),f(t.levels,function(t){Gi(t)})):"tree"===t.type&&Gi(t.leaves)}}(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),hc(n,function(e){hc(qi(t[e]),function(t){t&&(Xi(t,"axisLabel"),Xi(t.axisPointer,"label"))})}),hc(qi(t.parallel),function(t){var e=t&&t.parallelAxisDefault;Xi(e,"axisLabel"),Xi(e&&e.axisPointer,"label")}),hc(qi(t.calendar),function(t){Hi(t,"itemStyle"),Xi(t,"dayLabel"),Xi(t,"monthLabel"),Xi(t,"yearLabel")}),hc(qi(t.radar),function(t){Xi(t,"name")}),hc(qi(t.geo),function(t){cc(t)&&(ji(t),hc(qi(t.regions),function(t){ji(t)}))}),hc(qi(t.timeline),function(t){ji(t),Hi(t,"label"),Hi(t,"itemStyle"),Hi(t,"controlStyle",!0);var e=t.data;y(e)&&f(e,function(t){w(t)&&(Hi(t,"label"),Hi(t,"itemStyle"))})}),hc(qi(t.toolbox),function(t){Hi(t,"iconStyle"),hc(t.feature,function(t){Hi(t,"iconStyle")})}),Xi(Yi(t.axisPointer),"label"),Xi(Yi(t.tooltip).axisPointer,"label")},pc=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],gc=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],vc=function(t,e){dc(t,e),t.series=Le(t.series),f(t.series,function(t){if(w(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=function(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}(t,"pointer.color");null!=n&&function(t,e,n,i){e=e.split(",");for(var r,a=t,o=0;o<e.length-1;o++)null==a[r=e[o]]&&(a[r]={}),a=a[r];(i||null==a[e[o]])&&(a[e[o]]=n)}(t,"itemStyle.normal.color",n)}Ui(t)}}),t.dataRange&&(t.visualMap=t.dataRange),f(gc,function(e){var n=t[e];n&&(y(n)||(n=[n]),f(n,function(t){Ui(t)}))})},mc=$i.prototype;mc.pure=!1,mc.persistent=!0,mc.getSource=function(){return this._source};var yc={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:Ji},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:Ki,getItem:Qi,appendData:Ji},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;f(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:Ki,getItem:Qi,appendData:Ji},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},_c={arrayRows:tr,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:tr,original:function(t,e,n,i){var r=Oe(t);return null!=n&&r instanceof Array?r[n]:r},typedArray:tr},xc={arrayRows:er,objectRows:function(t,e,n,i){return nr(t[e],this._dimensionInfos[e])},keyedColumns:er,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&function(t){return Nl(t)&&!(t instanceof Array)}(t)&&(this.hasItemOption=!0),nr(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},wc=/\{@(.+?)\}/g,bc={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),a=n.getName(t),o=n.getRawDataItem(t),s=n.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:a,dataIndex:r,data:o,dataType:e,value:i,color:s,marker:xi(s),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var a=this.getData(n),o=a.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=o.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?function(t,e,n){y(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],a=0;a<r.length;a++){var o=Ph[a];t=t.replace(Oh(o),Oh(o,0))}for(var s=0;s<i;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(Oh(Ph[l],s),n?_i(u):u)}return t}(l,s).replace(wc,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),ir(a,t,n)}):void 0},getRawValue:function(t,e){return ir(this.getData(e),t)},formatTooltip:function(){}},Sc=or.prototype;Sc.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n,i=this._upstream,r=t&&t.skip;if(this._dirty&&i){var a=this.context;a.data=a.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(n=this._plan(this.context));var o,s=e(this._modBy),l=this._modDataCount||0,u=e(t&&t.modBy),h=t&&t.modDataCount||0;s===u&&l===h||(n="reset"),(this._dirty||"reset"===n)&&(this._dirty=!1,o=function(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),y(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}(this,r)),this._modBy=u,this._modDataCount=h;var c=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,d=Math.min(null!=c?this._dueIndex+c:1/0,this._dueEnd);if(!r&&(o||f<d)){var p=this._progress;if(y(p))for(var g=0;g<p.length;g++)sr(this,p[g],f,d,u,h);else sr(this,p,f,d,u,h)}this._dueIndex=d;var v=null!=this._settedOutputEnd?this._settedOutputEnd:d;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var Mc=function(){function t(){return i<n?i++:null}function e(){var t=i%o*r+Math.ceil(i/o),e=i>=n?null:t<a?t:i;return i++,e}var n,i,r,a,o,s={reset:function(l,u,h,c){i=l,n=u,r=h,a=c,o=Math.ceil(a/r),s.next=r>1&&a>0?e:t}};return s}();Sc.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},Sc.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},Sc.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},Sc.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},Sc.getUpstream=function(){return this._upstream},Sc.getDownstream=function(){return this._downstream},Sc.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var Cc=Re(),Ic=Vh.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=ar({count:ur,reset:hr}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Di(this);var r=this.getInitialData(t,n);fr(r,this),this.dataTask.context.data=r,Cc(this).dataBeforeProcessed=r,lr(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Ci(t):{},a=this.subType;Vh.hasClass(a)&&(a+="Series"),r(t,e.getTheme().get(this.subType)),r(t,this.getDefaultOption()),Pe(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&Mi(t,i,n)},mergeOption:function(t,e){t=r(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&Mi(this.option,t,n),Di(this);var i=this.getInitialData(t,e);fr(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,Cc(this).dataBeforeProcessed=i,lr(this)},fillDataTextStyle:function(t){if(t&&!S(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&Pe(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=pr(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return Cc(this).data},setData:function(t){var e=pr(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}Cc(this).data=t},getSource:function(){return tc(this).source},getRawData:function(){return Cc(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){var i=this.getData(),r=i.mapDimension("defaultedTooltip",!0),a=r.length,o=this.getRawValue(t),s=y(o),l=i.getItemVisual(t,"color");w(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=a>1||s&&!a?function(n){function a(t,n){var r=i.getDimensionInfo(n);if(r&&!1!==r.otherDims.tooltip){var a=r.type,u=xi({color:l,type:"subItem"}),h=(o?u+_i(r.displayName||"-")+": ":"")+_i("ordinal"===a?t+"":"time"===a?e?"":bi("yyyy/MM/dd hh:mm:ss",t):yi(t));h&&s.push(h)}}var o=p(n,function(t,e,n){var r=i.getDimensionInfo(n);return t|(r&&!1!==r.tooltip&&null!=r.displayName)},0),s=[];return r.length?f(r,function(e){a(ir(i,t,e),e)}):f(n,a),(o?"<br/>":"")+s.join(o?"<br/>":", ")}(o):function(t){return _i(yi(t))}(a?ir(i,t,r[0]):s?o[0]:o),h=xi(l),c=i.getName(t),d=this.name;return Ne(this)||(d=""),d=d?_i(d)+(e?": ":"<br/>"):"",e?h+d+u:d+h+(c?_i(c)+": "+u:u)},isAnimationEnabled:function(){if(Jo.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=Xh.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});h(Ic,bc),h(Ic,Xh);var Tc=function(){this.group=new qs,this.uid=li("viewComponent")};Tc.prototype={constructor:Tc,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}};var kc=Tc.prototype;kc.updateView=kc.updateLayout=kc.updateVisual=function(t,e,n,i){},Ge(Tc),Ye(Tc,{registerWhenExtend:!0});var Dc=function(){var t=Re();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,a=n.progressiveRender,o=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^o||a^s)&&"reset"}},Ac=Re(),Lc=Dc();gr.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){mr(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){mr(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null};var Pc=gr.prototype;Pc.updateView=Pc.updateLayout=Pc.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},Ge(gr),Ye(gr,{registerWhenExtend:!0}),gr.markUpdateMethod=function(t,e){Ac(t).updateMethod=e};var Oc={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},Ec={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t))return"function"!=typeof r||r instanceof ch||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(i,!0);null!=n&&t.setItemVisual(e,"color",n)}:null}}},Nc={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},zc=function(t,n){function i(t,e){if("string"!=typeof t)return t;var n=t;return f(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function r(t){var e=a.get(t);if(null==e){for(var n=t.split("."),i=Nc.aria,r=0;r<n.length;++r)i=i[n[r]];return i}return e}var a=n.getModel("aria");if(a.get("show"))if(a.get("description"))t.setAttribute("aria-label",a.get("description"));else{var o=0;n.eachSeries(function(t,e){++o},this);var s,l=a.get("data.maxCount")||10,u=a.get("series.maxCount")||10,h=Math.min(o,u);if(!(o<1)){var c=function(){var t=n.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();s=c?i(r("general.withTitle"),{title:c}):r("general.withoutTitle");var d=[];s+=i(r(o>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:o}),n.eachSeries(function(t,n){if(n<h){var a,s=t.get("name"),u="series."+(o>1?"multiple":"single")+".";a=i(a=r(s?u+"withName":u+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:function(t){return Nc.series.typeNames[t]||"自定义图"}(t.subType)});var c=t.getData();e.data=c,c.count()>l?a+=i(r("data.partialData"),{displayCnt:l}):a+=r("data.allData");for(var f=[],p=0;p<c.count();p++)if(p<l){var g=c.getName(p),v=ir(c,p);f.push(i(r(g?"data.withName":"data.withoutName"),{name:g,value:v}))}a+=f.join(r("data.separator.middle"))+r("data.separator.end"),d.push(a)}}),s+=d.join(r("series.multiple.separator.middle"))+r("series.multiple.separator.end"),t.setAttribute("aria-label",s)}}},Bc=Math.PI,Rc=xr.prototype;Rc.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},Rc.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,a=i&&i.modDataCount;return{step:r,modBy:null!=a?Math.ceil(a/r):null,modDataCount:a}}},Rc.getPipeline=function(t){return this._pipelineMap.get(t)},Rc.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,a=t.get("large")&&i>=t.get("largeThreshold"),o="mod"===t.get("progressiveChunkMode")?i:null;t.pipelineContext=n.context={progressiveRender:r,modDataCount:o,large:a}},Rc.restorePipelines=function(t){var e=this,n=e._pipelineMap=z();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),Ar(e,t,t.dataTask)})},Rc.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;f(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&function(t,e,n,i,r){function a(n){var a=n.uid,s=o.get(a)||o.set(a,ar({plan:Ir,reset:Tr,count:Dr}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},Ar(t,n,s)}var o=n.seriesTaskMap||(n.seriesTaskMap=z()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(a):s?i.eachRawSeriesByType(s,a):l&&l(i,r).each(a);var u=t._pipelineMap;o.each(function(t,e){u.get(e)||(t.dispose(),o.removeKey(e))})}(this,i,r,e,n),i.overallReset&&function(t,e,n,i,r){function a(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,ar({reset:Sr,onDirty:Cr})),o.dirty()),i.context={model:e,overallProgress:h,modifyOutputEnd:c},i.agent=o,i.__block=h,Ar(t,e,i)}var o=n.overallTask=n.overallTask||ar({reset:br});o.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=o.agentStubMap=o.agentStubMap||z(),l=e.seriesType,u=e.getTargetSeries,h=!0,c=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,a):u?u(i,r).each(a):(h=!1,f(i.getSeries(),a));var d=t._pipelineMap;s.each(function(t,e){d.get(e)||(t.dispose(),o.dirty(),s.removeKey(e))})}(this,i,r,e,n)},this)},Rc.prepareView=function(t,e,n,i){var r=t.renderTask,a=r.context;a.model=e,a.ecModel=n,a.api=i,r.__block=!t.incrementalPrepareRender,Ar(this,e,r)},Rc.performDataProcessorTasks=function(t,e){wr(this,this._dataProcessorHandlers,t,e,{block:!0})},Rc.performVisualTasks=function(t,e,n){wr(this,this._visualHandlers,t,e,n)},Rc.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},Rc.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var Fc=Rc.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},Vc=kr(0);xr.wrapStageHandler=function(t,e){return _(t)&&(t={overallReset:t,seriesType:function(t){Wc=null;try{t(Hc,Gc)}catch(t){}return Wc}(t)}),t.uid=li("stageHandler"),e&&(t.visualType=e),t};var Wc,Hc={},Gc={};Lr(Hc,nc),Lr(Gc,Bi),Hc.eachSeriesByType=Hc.eachRawSeriesByType=function(t){Wc=t},Hc.eachComponent=function(t){"series"===t.mainType&&t.subType&&(Wc=t.subType)};var Xc=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],jc={color:Xc,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],Xc]},qc=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],Yc={color:qc,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:qc[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:qc},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};Yc.categoryAxis.splitLine.show=!1,Vh.extend({type:"dataset",defaultOption:{seriesLayoutBy:Qh,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){!function(t){var e=t.option.source,n=$h;if(S(e))n=Kh;else if(y(e))for(var i=0,r=e.length;i<r;i++){var a=e[i];if(null!=a){if(y(a)){n=Yh;break}if(w(a)){n=Uh;break}}}else if(w(e)){for(var o in e)if(e.hasOwnProperty(o)&&c(e[o])){n=Zh;break}}else if(null!=e)throw new Error("Invalid data");tc(t).sourceFormat=n}(this)}}),Tc.extend({type:"dataset"});var Uc=L,Zc=f,$c=_,Kc=w,Qc=Vh.parseClassType,Jc=1e3,tf=1e3,ef=3e3,nf={PROCESSOR:{FILTER:Jc,STATISTIC:5e3},VISUAL:{LAYOUT:tf,GLOBAL:2e3,CHART:ef,COMPONENT:4e3,BRUSH:5e3}},rf="__flagInMainProcess",af="__optionUpdated",of=/^[a-zA-Z0-9_]+$/;Or.prototype.on=Pr("on"),Or.prototype.off=Pr("off"),Or.prototype.one=Pr("one"),h(Or,ms);var sf=Er.prototype;sf._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[af]){var e=this[af].silent;this[rf]=!0,zr(this),lf.update.call(this),this[rf]=!1,this[af]=!1,Vr.call(this,e),Wr.call(this,e)}else if(t.unfinished){var n=1,i=this._model;this._api,t.unfinished=!1;do{var r=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),Rr(this,i),t.performVisualTasks(i),jr(this,this._model,0,"remain"),n-=+new Date-r}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},sf.getDom=function(){return this._dom},sf.getZr=function(){return this._zr},sf.setOption=function(t,e,n){var i;if(Kc(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[rf]=!0,!this._model||e){var r=new Fi(this._api),a=this._theme,o=this._model=new nc(null,null,a,r);o.scheduler=this._scheduler,o.init(null,null,a,r)}this._model.setOption(t,df),n?(this[af]={silent:i},this[rf]=!1):(zr(this),lf.update.call(this),this._zr.flush(),this[af]=!1,this[rf]=!1,Vr.call(this,i),Wr.call(this,i))},sf.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},sf.getModel=function(){return this._model},sf.getOption=function(){return this._model&&this._model.getOption()},sf.getWidth=function(){return this._zr.getWidth()},sf.getHeight=function(){return this._zr.getHeight()},sf.getDevicePixelRatio=function(){return this._zr.painter.dpr||e.devicePixelRatio||1},sf.getRenderedCanvas=function(t){if(Jo.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},sf.getSvgDataUrl=function(){if(Jo.svgSupported){var t=this._zr;return f(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},sf.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;Zc(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return Zc(i,function(t){t.group.ignore=!1}),a},sf.getConnectedDataURL=function(t){if(Jo.canvasSupported){var e=this.group,n=Math.min,r=Math.max;if(_f[e]){var a=1/0,o=1/0,s=-1/0,l=-1/0,u=[],h=t&&t.pixelRatio||1;f(yf,function(h,c){if(h.group===e){var f=h.getRenderedCanvas(i(t)),d=h.getDom().getBoundingClientRect();a=n(d.left,a),o=n(d.top,o),s=r(d.right,s),l=r(d.bottom,l),u.push({dom:f,left:d.left,top:d.top})}});var c=(s*=h)-(a*=h),d=(l*=h)-(o*=h),p=hs();p.width=c,p.height=d;var g=Ae(p);return Zc(u,function(t){var e=new ye({style:{x:t.left*h-a,y:t.top*h-o,image:t.dom}});g.add(e)}),g.refreshImmediately(),p.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},sf.convertToPixel=m(Nr,"convertToPixel"),sf.convertFromPixel=m(Nr,"convertFromPixel"),sf.containPixel=function(t,e){var n;return f(t=Fe(this._model,t),function(t,i){i.indexOf("Models")>=0&&f(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var a=this._chartsMap[t.__viewId];a&&a.containPoint&&(n|=a.containPoint(e,t))}},this)},this),!!n},sf.getVisual=function(t,e){var n=(t=Fe(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),i=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=i?n.getItemVisual(i,e):n.getVisual(e)},sf.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},sf.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var lf={prepareAndUpdate:function(t){zr(this),lf.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,a=this._scheduler;if(e){a.restoreData(e,t),a.performSeriesTasks(e),r.create(e,n),a.performDataProcessorTasks(e,t),Rr(this,e),r.update(e,n),Gr(e),a.performVisualTasks(e,t),Xr(this,e,n,t);var o=e.get("backgroundColor")||"transparent";if(Jo.canvasSupported)i.setBackgroundColor(o);else{var s=pt(o);o=vt(s,"rgb"),0===s[3]&&(o="transparent")}qr(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(a,o){var s=n.getViewOfComponentModel(o);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(o,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var a=z();e.eachSeries(function(r){var o=n._chartsMap[r.__viewId];if(o.updateTransform){var s=o.updateTransform(r,e,i,t);s&&s.update&&a.set(r.uid,1)}else a.set(r.uid,1)}),Gr(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:a}),jr(n,e,0,t,a),qr(e,this._api)}},updateView:function(t){var e=this._model;e&&(gr.markUpdateMethod(t,"updateView"),Gr(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),Xr(this,this._model,this._api,t),qr(e,this._api))},updateVisual:function(t){lf.update.call(this,t)},updateLayout:function(t){lf.update.call(this,t)}};sf.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[rf]=!0,n&&zr(this),lf.update.call(this),this[rf]=!1,Vr.call(this,i),Wr.call(this,i)}},sf.showLoading=function(t,e){if(Kc(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),mf[t]){var n=mf[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},sf.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},sf.makeActionFromEvent=function(t){var e=a({},t);return e.type=cf[t.type],e},sf.dispatchAction=function(t,e){Kc(e)||(e={silent:!!e}),hf[t.type]&&this._model&&(this[rf]?this._pendingActions.push(t):(Fr.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&Jo.browser.weChat&&this._throttledZrFlush(),Vr.call(this,e.silent),Wr.call(this,e.silent)))},sf.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},sf.on=Pr("on"),sf.off=Pr("off"),sf.one=Pr("one");var uf=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];sf._initEvents=function(){Zc(uf,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),r=e.target;if("globalout"===t)n={};else if(r&&null!=r.dataIndex){var o=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=o&&o.getDataParams(r.dataIndex,r.dataType)||{}}else r&&r.eventData&&(n=a({},r.eventData));n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),Zc(cf,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},sf.isDisposed=function(){return this._disposed},sf.clear=function(){this.setOption({series:[]},!0)},sf.dispose=function(){if(!this._disposed){this._disposed=!0,We(this.getDom(),bf,"");var t=this._api,e=this._model;Zc(this._componentsViews,function(n){n.dispose(e,t)}),Zc(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete yf[this.id]}},h(Er,ms);var hf={},cf={},ff=[],df=[],pf=[],gf=[],vf={},mf={},yf={},_f={},xf=new Date-0,wf=new Date-0,bf="_echarts_instance_",Sf={},Mf=Zr;na(2e3,Ec),Qr(vc),Jr(5e3,function(t){var e=z();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),a={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!a.stackedDimension||!a.isStackedByIndex&&!a.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(a)}}),e.each(Zi)}),ra("default",function(t,e){o(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new ah({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new uh({shape:{startAngle:-Bc/2,endAngle:-Bc/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new ah({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*Bc/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*Bc/2}).delay(300).start("circularInOut");var a=new qs;return a.add(i),a.add(r),a.add(n),a.resize=function(){var e=t.getWidth()/2,a=t.getHeight()/2;i.setShape({cx:e,cy:a});var o=i.shape.r;r.setShape({x:e-o,y:a-o,width:2*o,height:2*o}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},a.resize(),a}),ta({type:"highlight",event:"highlight",update:"highlight"},B),ta({type:"downplay",event:"downplay",update:"downplay"},B),Kr("light",jc),Kr("dark",Yc);ua.prototype={constructor:ua,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],r=[];for(ha(t,{},i,"_oldKeyGetter",this),ha(e,n,r,"_newKeyGetter",this),a=0;a<t.length;a++)null!=(s=n[o=i[a]])?((u=s.length)?(1===u&&(n[o]=null),s=s.unshift()):n[o]=null,this._update&&this._update(s,a)):this._remove&&this._remove(a);for(var a=0;a<r.length;a++){var o=r[a];if(n.hasOwnProperty(o)){var s=n[o];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var Cf=z(["tooltip","label","itemName","itemId","seriesName"]),If=w,Tf="e\0\0",kf={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},Df="undefined"==typeof Uint32Array?Array:Uint32Array,Af="undefined"==typeof Uint16Array?Array:Uint16Array,Lf=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],Pf=["_extent","_approximateExtent","_rawExtent"],Of=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},a=0;a<t.length;a++){var o=t[a];x(o)&&(o={name:o});var s=o.name;o.type=o.type||"float",o.coordDim||(o.coordDim=s,o.coordDimIndex=0),o.otherDims=o.otherDims||{},i.push(s),n[s]=o,o.index=a,o.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=function(t){var e={},n=e.encode={},i=z(),r=[],a=[];f(t.dimensions,function(e){var o=t.getDimensionInfo(e),s=o.coordDim;if(s){var l=n[s];n.hasOwnProperty(s)||(l=n[s]=[]),l[o.coordDimIndex]=e,o.isExtraCoord||(i.set(s,1),function(t){return!("ordinal"===t||"time"===t)}(o.type)&&(r[0]=e)),o.defaultTooltip&&a.push(e)}Cf.each(function(t,e){var i=n[e];n.hasOwnProperty(e)||(i=n[e]=[]);var r=o.otherDims[e];null!=r&&!1!==r&&(i[r]=o.name)})});var o=[],s={};i.each(function(t,e){var i=n[e];s[e]=i[0],o=o.concat(i)}),e.dataDimsOnCoord=o,e.encodeFirstDimNotExtra=s;var l=n.label;l&&l.length&&(r=l.slice());var u=n.tooltip;return u&&u.length?a=u.slice():a.length||(a=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=a,e}(this),this._invertedIndicesMap=r,this._calculationInfo={}},Ef=Of.prototype;Ef.type="list",Ef.hasItemOption=!0,Ef.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},Ef.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},Ef.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},Ef.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},Ef.initData=function(t,e,n){(ki.isInstance(t)||c(t))&&(t=new $i(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=xc[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},Ef.getProvider=function(){return this._rawData},Ef.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},Ef._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,a=this._storage,o=this.dimensions,s=o.length,l=this._dimensionInfos,u=this._nameList,h=this._idList,c=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,p=d-1,g=0;g<s;g++){c[I=o[g]]||(c[I]=[1/0,-1/0]);var v=l[I];0===v.otherDims.itemName&&(n=this._nameDimIdx=g),0===v.otherDims.itemId&&(this._idDimIdx=g);var m=kf[v.type];a[I]||(a[I]=[]);var y=a[I][p];if(y&&y.length<i){for(var _=new m(Math.min(e-p*i,i)),x=0;x<y.length;x++)_[x]=y[x];a[I][p]=_}for(C=d*i;C<e;C+=i)a[I].push(new m(Math.min(e-C,i)));this._chunkCount=a[I].length}for(var w=new Array(s),b=t;b<e;b++){w=r.getItem(b,w);for(var S=Math.floor(b/i),M=b%i,C=0;C<s;C++){var I=o[C],T=a[I][S],k=this._dimValueGetter(w,I,b,C);T[M]=k;var D=c[I];k<D[0]&&(D[0]=k),k>D[1]&&(D[1]=k)}if(!r.pure){var A=u[b];if(w&&null==A)if(null!=w.name)u[b]=A=w.name;else if(null!=n){var L=o[n],P=a[L][S];if(P){A=P[M];var O=l[L].ordinalMeta;O&&O.categories.length&&(A=O.categories[A])}}var E=null==w?null:w.id;null==E&&null!=A&&(f[A]=f[A]||0,E=A,f[A]>0&&(E+="__ec__"+f[A]),f[A]++),null!=E&&(h[b]=E)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},pa(this)}},Ef.count=function(){return this._count},Ef.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array)for(i=new e(n),r=0;r<n;r++)i[r]=t[r];else i=new e(t.buffer,0,n)}else for(var i=new(e=ca(this))(this.count()),r=0;r<i.length;r++)i[r]=r;return i},Ef.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},Ef.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},Ef._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},Ef.getValues=function(t,e){var n=[];y(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;i<r;i++)n.push(this.get(t[i],e));return n},Ef.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},Ef.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var n,i=this.count();if(!this._indices)return this._rawExtent[t].slice();if(n=this._extent[t])return n.slice();for(var r=(n=e)[0],a=n[1],o=0;o<i;o++){var s=this._getFast(t,this.getRawIndex(o));s<r&&(r=s),s>a&&(a=s)}return n=[r,a],this._extent[t]=n,n},Ef.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},Ef.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},Ef.getCalculationInfo=function(t){return this._calculationInfo[t]},Ef.setCalculationInfo=function(t,e){If(t)?a(this._calculationInfo,t):this._calculationInfo[t]=e},Ef.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},Ef.getMedian=function(t){var e=[];this.each(t,function(t,n){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},Ef.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},Ef.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},Ef.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var a=(i+r)/2|0;if(e[a]<t)i=a+1;else{if(!(e[a]>t))return a;r=a-1}}return-1},Ef.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=Number.MAX_VALUE,a=-1,o=0,s=this.count();o<s;o++){var l=e-this.get(t,o),u=Math.abs(l);l<=n&&u<=r&&((u<r||l>=0&&a<0)&&(r=u,a=l,i.length=0),i.push(o))}return i},Ef.getRawIndex=va,Ef.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},Ef.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||ga(this,this._nameDimIdx,e)||""},Ef.getId=function(t){return ya(this,this.getRawIndex(t))},Ef.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;for(var r=(t=d(_a(t),this.getDimension,this)).length,a=0;a<this.count();a++)switch(r){case 0:e.call(n,a);break;case 1:e.call(n,this.get(t[0],a),a);break;case 2:e.call(n,this.get(t[0],a),this.get(t[1],a),a);break;default:for(var o=0,s=[];o<r;o++)s[o]=this.get(t[o],a);s[o]=a,e.apply(n,s)}}},Ef.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=d(_a(t),this.getDimension,this);for(var r=this.count(),a=new(ca(this))(r),o=[],s=t.length,l=0,u=t[0],h=0;h<r;h++){var c,f=this.getRawIndex(h);if(0===s)c=e.call(n,h);else if(1===s){var p=this._getFast(u,f);c=e.call(n,p,h)}else{for(var g=0;g<s;g++)o[g]=this._getFast(u,f);o[g]=h,c=e.apply(n,o)}c&&(a[l++]=f)}return l<r&&(this._indices=a),this._count=l,this._extent={},this.getRawIndex=this._indices?ma:va,this}},Ef.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),a=new(ca(this))(r),o=0,s=e[0],l=t[s][0],u=t[s][1],h=!1;if(!this._indices){var c=0;if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var p=f[d],g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++)((w=p[v])>=l&&w<=u||isNaN(w))&&(a[o++]=c),c++;h=!0}else if(2===i){f=this._storage[s];var m=this._storage[e[1]],y=t[e[1]][0],_=t[e[1]][1];for(d=0;d<this._chunkCount;d++){p=f[d];var x=m[d];for(g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++){var w=p[v],b=x[v];(w>=l&&w<=u||isNaN(w))&&(b>=y&&b<=_||isNaN(b))&&(a[o++]=c),c++}}h=!0}}if(!h)if(1===i)for(v=0;v<r;v++)M=this.getRawIndex(v),((w=this._getFast(s,M))>=l&&w<=u||isNaN(w))&&(a[o++]=M);else for(v=0;v<r;v++){var S=!0,M=this.getRawIndex(v);for(d=0;d<i;d++){var C=e[d];((w=this._getFast(n,M))<t[C][0]||w>t[C][1])&&(S=!1)}S&&(a[o++]=this.getRawIndex(v))}return o<r&&(this._indices=a),this._count=o,this._extent={},this.getRawIndex=this._indices?ma:va,this}}},Ef.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},Ef.map=function(t,e,n,i){n=n||i||this;var r=xa(this,t=d(_a(t),this.getDimension,this));r._indices=this._indices,r.getRawIndex=r._indices?ma:va;for(var a=r._storage,o=[],l=this._chunkSize,u=t.length,h=this.count(),c=[],f=r._rawExtent,p=0;p<h;p++){for(var g=0;g<u;g++)c[g]=this.get(t[g],p);c[u]=p;var v=e&&e.apply(n,c);if(null!=v){"object"!=(void 0===v?"undefined":s(v))&&(o[0]=v,v=o);for(var m=this.getRawIndex(p),y=Math.floor(m/l),_=m%l,x=0;x<v.length;x++){var w=t[x],b=v[x],S=f[w],M=a[w];M&&(M[y][_]=b),b<S[0]&&(S[0]=b),b>S[1]&&(S[1]=b)}}}return r},Ef.downSample=function(t,e,n,i){for(var r=xa(this,[t]),a=r._storage,o=[],s=Math.floor(1/e),l=a[t],u=this.count(),h=this._chunkSize,c=r._rawExtent[t],f=new(ca(this))(u),d=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,o.length=s);for(var g=0;g<s;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/h),y=v%h;o[g]=l[m][y]}var _=n(o),x=this.getRawIndex(Math.min(p+i(o,_)||0,u-1)),w=x%h;l[Math.floor(x/h)][w]=_,_<c[0]&&(c[0]=_),_>c[1]&&(c[1]=_),f[d++]=x}return r._count=d,r._indices=f,r.getRawIndex=ma,r},Ef.getItemModel=function(t){var e=this.hostModel;return new ai(this.getRawDataItem(t),e,e&&e.ecModel)},Ef.diff=function(t){var e=this;return new ua(t?t.getIndices():[],this.getIndices(),function(e){return ya(t,e)},function(t){return ya(e,t)})},Ef.getVisual=function(t){var e=this._visual;return e&&e[t]},Ef.setVisual=function(t,e){if(If(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},Ef.setLayout=function(t,e){if(If(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},Ef.getLayout=function(t){return this._layout[t]},Ef.getItemLayout=function(t){return this._itemLayouts[t]},Ef.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?a(this._itemLayouts[t]||{},e):e},Ef.clearItemLayouts=function(){this._itemLayouts.length=0},Ef.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},Ef.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,If(e))for(var a in e)e.hasOwnProperty(a)&&(i[a]=e[a],r[a]=!0);else i[e]=n,r[e]=!0},Ef.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var Nf=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};Ef.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(Nf,e)),this._graphicEls[t]=e},Ef.getItemGraphicEl=function(t){return this._graphicEls[t]},Ef.eachItemGraphicEl=function(t,e){f(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},Ef.cloneShallow=function(t){if(!t){var e=d(this.dimensions,this.getDimensionInfo,this);t=new Of(e,this.hostModel)}if(t._storage=this._storage,da(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?ma:va,t},Ef.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(D(arguments)))})},Ef.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],Ef.CHANGABLE_METHODS=["filterSelf","selectRange"];var zf=function(t,e){return ba((e=e||{}).coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Ic.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return Ca(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var Bf=Tn({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i+a),t.lineTo(n-r,i+a),t.closePath()}}),Rf=Tn({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i),t.lineTo(n,i+a),t.lineTo(n-r,i),t.closePath()}}),Ff=Tn({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,a=Math.max(r,e.height),o=r/2,s=o*o/(a-o),l=i-a+o+s,u=Math.asin(s/o),h=Math.cos(u)*o,c=Math.sin(u),f=Math.cos(u),d=.6*o,p=.7*o;t.moveTo(n-h,l+s),t.arc(n,l,o,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+h-c*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-h+c*d,l+s+f*d,n-h,l+s),t.closePath()}}),Vf=Tn({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,a=e.y,o=i/3*2;t.moveTo(r,a),t.lineTo(r+o,a+n),t.lineTo(r,a+n/4*3),t.lineTo(r-o,a+n),t.lineTo(r,a),t.closePath()}}),Wf={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var a=Math.min(n,i);r.x=t,r.y=e,r.width=a,r.height=a},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},Hf={};f({line:oh,rect:ah,roundRect:ah,square:ah,circle:$u,diamond:Rf,pin:Ff,arrow:Vf,triangle:Bf},function(t,e){Hf[e]=new t});var Gf=Tn({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=Hf[i];"none"!==e.symbolType&&(r||(r=Hf[i="rect"]),Wf[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),Xf=Da.prototype,jf=Da.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};Xf._createSymbol=function(t,e,n,i,r){this.removeAll();var a=Ta(t,-1,-1,2,2,e.getItemVisual(n,"color"),r);a.attr({z2:100,culling:!0,scale:Aa(i)}),a.drift=La,this._symbolType=t,this.add(a)},Xf.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},Xf.getSymbolPath=function(){return this.childAt(0)},Xf.getScale=function(){return this.childAt(0).scale},Xf.highlight=function(){this.childAt(0).trigger("emphasis")},Xf.downplay=function(){this.childAt(0).trigger("normal")},Xf.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},Xf.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},Xf.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,a=jf(t,e),o=i!==this._symbolType;if(o){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,a,s)}else(l=this.childAt(0)).silent=!1,ei(l,{scale:Aa(a)},r,e);if(this._updateCommon(t,e,a,n),o){var l=this.childAt(0),u=n&&n.fadeIn,h={scale:l.scale.slice()};u&&(h.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),ni(l,h,r,e)}this._seriesModel=r};var qf=["itemStyle"],Yf=["emphasis","itemStyle"],Uf=["label"],Zf=["emphasis","label"];Xf._updateCommon=function(t,e,n,i){var r=this.childAt(0),o=t.hostModel,s=t.getItemVisual(e,"color");"image"!==r.type&&r.useStyle({strokeNoScale:!0});var l=i&&i.itemStyle,u=i&&i.hoverItemStyle,h=i&&i.symbolRotate,c=i&&i.symbolOffset,f=i&&i.labelModel,d=i&&i.hoverLabelModel,p=i&&i.hoverAnimation,g=i&&i.cursorStyle;if(!i||t.hasItemOption){var v=i&&i.itemModel?i.itemModel:t.getItemModel(e);l=v.getModel(qf).getItemStyle(["color"]),u=v.getModel(Yf).getItemStyle(),h=v.getShallow("symbolRotate"),c=v.getShallow("symbolOffset"),f=v.getModel(Uf),d=v.getModel(Zf),p=v.getShallow("hoverAnimation"),g=v.getShallow("cursor")}else u=a({},u);var m=r.style;r.attr("rotation",(h||0)*Math.PI/180||0),c&&r.attr("position",[hi(c[0],n[0]),hi(c[1],n[1])]),g&&r.attr("cursor",g),r.setColor(s,i&&i.symbolInnerColor),r.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(m.opacity=y);var _=t.getItemVisual(e,"liftZ"),x=r.__z2Origin;null!=_?null==x&&(r.__z2Origin=r.z2,r.z2+=_):null!=x&&(r.z2=x,r.__z2Origin=null);var w=i&&i.useNameLabel;Yn(m,u,f,d,{labelFetcher:o,labelDataIndex:e,defaultText:function(e,n){return w?t.getName(e):ka(t,e)},isRectText:!0,autoColor:s}),r.off("mouseover").off("mouseout").off("emphasis").off("normal"),r.hoverStyle=u,qn(r);var b=Aa(n);if(p&&o.isAnimationEnabled()){var S=function(){if(!this.incremental){var t=b[1]/b[0];this.animateTo({scale:[Math.max(1.1*b[0],b[0]+3),Math.max(1.1*b[1],b[1]+3*t)]},400,"elasticOut")}},M=function(){this.incremental||this.animateTo({scale:b},400,"elasticOut")};r.on("mouseover",S).on("mouseout",M).on("emphasis",S).on("normal",M)}},Xf.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),ei(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},u(Da,qs);var $f=Pa.prototype;$f.updateData=function(t,e){e=Ea(e);var n=this.group,i=t.hostModel,r=this._data,a=this._symbolCtor,o=Na(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(Oa(t,r,i,e)){var s=new a(t,i,o);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),h=t.getItemLayout(s);Oa(t,h,s,e)?(u?(u.updateData(t,s,o),ei(u,{position:h},i)):(u=new a(t,s)).attr("position",h),n.add(u),t.setItemGraphicEl(s,u)):n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},$f.isPersistent=function(){return!0},$f.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},$f.incrementalPrepareUpdate=function(t){this._seriesScope=Na(t),this._data=null,this.group.removeAll()},$f.incrementalUpdate=function(t,e,n){n=Ea(n);for(var i=t.start;i<t.end;i++){var r=e.getItemLayout(i);if(Oa(e,r,i,n)){var a=new this._symbolCtor(e,i,this._seriesScope);a.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),a.attr("position",r),this.group.add(a),e.setItemGraphicEl(i,a)}}},$f.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var Kf=q,Qf=Y,Jf=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},td=function(t,e){return t[0]=e[0],t[1]=e[1],t},ed=[],nd=[],id=[],rd=xn.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:Qu(xn.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,a=Va(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&Ra(n[r-1]);r--);for(;i<r&&Ra(n[i]);i++);}for(;i<r;)i+=Fa(t,n,i,r,r,1,a.min,a.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),ad=xn.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:Qu(xn.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,a=n.length,o=e.smoothMonotone,s=Va(n,e.smoothConstraint),l=Va(i,e.smoothConstraint);if(e.connectNulls){for(;a>0&&Ra(n[a-1]);a--);for(;r<a&&Ra(n[r]);r++);}for(;r<a;){var u=Fa(t,n,r,a,a,1,s.min,s.max,e.smooth,o,e.connectNulls);Fa(t,i,r+u-1,u,a,-1,l.min,l.max,e.stackedOnSmooth,o,e.connectNulls),r+=u+1,t.closePath()}}});gr.extend({type:"line",init:function(){var t=new qs,e=new Pa;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,a=t.getData(),s=t.getModel("lineStyle"),l=t.getModel("areaStyle"),u=a.mapArray(a.getItemLayout),h="polar"===i.type,c=this._coordSys,f=this._symbolDraw,d=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!l.isEmpty(),y=l.get("origin"),_=function(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,a=e.count();r<a;r++)i.push(Ba(n,t,e,r));return i}(i,a,za(i,a,y)),x=t.get("showSymbol"),w=x&&!h&&Ya(t,a,i),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),b.setItemGraphicEl(e,null))}),x||f.remove(),r.add(g);var S=!h&&t.get("step");d&&c.type===i.type&&S===this._step?(m&&!p?p=this._newPolygon(u,_,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(Xa(i,!1,!1,t)),x&&f.updateData(a,{isIgnore:w,clipShape:Xa(i,!1,!0,t)}),a.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),Wa(this._stackedOnPoints,_)&&Wa(this._points,u)||(v?this._updateAnimation(a,_,i,n,S,y):(S&&(u=ja(u,i,S),_=ja(_,i,S)),d.setShape({points:u}),p&&p.setShape({points:u,stackedOnPoints:_})))):(x&&f.updateData(a,{isIgnore:w,clipShape:Xa(i,!1,!0,t)}),S&&(u=ja(u,i,S),_=ja(_,i,S)),d=this._newPolyline(u,i,v),m&&(p=this._newPolygon(u,_,i,v)),g.setClipPath(Xa(i,!0,!1,t)));var M=qa(a,i)||a.getVisual("color");d.useStyle(o(s.getLineStyle(),{fill:"none",stroke:M,lineJoin:"bevel"}));var C=t.get("smooth");if(C=Ha(t.get("smooth")),d.setShape({smooth:C,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var I=a.getCalculationInfo("stackedOnSeries"),T=0;p.useStyle(o(l.getAreaStyle(),{fill:M,opacity:.7,lineJoin:"bevel"})),I&&(T=Ha(I.get("smooth"))),p.setShape({smooth:C,stackedOnSmooth:T,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=a,this._coordSys=i,this._stackedOnPoints=_,this._points=u,this._step=S,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),a=Be(r,i);if(!(a instanceof Array)&&null!=a&&a>=0){var o=r.getItemGraphicEl(a);if(!o){var s=r.getItemLayout(a);if(!s)return;(o=new Da(r,a)).position=s,o.setZ(t.get("zlevel"),t.get("z")),o.ignore=isNaN(s[0])||isNaN(s[1]),o.__temp=!0,r.setItemGraphicEl(a,o),o.stopSymbolAnimation(!0),this.group.add(o)}o.highlight()}else gr.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),a=Be(r,i);if(null!=a&&a>=0){var o=r.getItemGraphicEl(a);o&&(o.__temp?(r.setItemGraphicEl(a,null),this.group.remove(o)):o.downplay())}else gr.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new rd({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new ad({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,a){var o=this._polyline,s=this._polygon,l=t.hostModel,u=function(t,e,n,i,r,a,o,s){for(var l=function(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}(t,e),u=[],h=[],c=[],f=[],d=[],p=[],g=[],v=za(r,e,o),m=za(a,t,s),y=0;y<l.length;y++){var _=l[y],x=!0;switch(_.cmd){case"=":var w=t.getItemLayout(_.idx),b=e.getItemLayout(_.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),u.push(w),h.push(b),c.push(n[_.idx]),f.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":S=_.idx,u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),h.push(e.getItemLayout(S).slice()),c.push(Ba(v,r,e,S)),f.push(i[S]),g.push(e.getRawIndex(S));break;case"-":var S=_.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),h.push(a.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),c.push(n[S]),f.push(Ba(m,a,t,S)),g.push(M)):x=!1}x&&(d.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var C=[],I=[],T=[],k=[],D=[];for(y=0;y<p.length;y++)S=p[y],C[y]=u[S],I[y]=h[S],T[y]=c[S],k[y]=f[S],D[y]=d[S];return{current:C,next:I,stackedOnCurrent:T,stackedOnNext:k,status:D}}(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,a),h=u.current,c=u.stackedOnCurrent,f=u.next,d=u.stackedOnNext;r&&(h=ja(u.current,n,r),c=ja(u.stackedOnCurrent,n,r),f=ja(u.next,n,r),d=ja(u.stackedOnNext,n,r)),o.shape.__points=u.current,o.shape.points=h,ei(o,{shape:{points:f}},l),s&&(s.setShape({points:h,stackedOnPoints:c}),ei(s,{shape:{points:f,stackedOnPoints:d}},l));for(var p=[],g=u.status,v=0;v<g.length;v++)if("="===g[v].cmd){var m=t.getItemGraphicEl(g[v].idx1);m&&p.push({el:m,ptIdx:v})}o.animators&&o.animators.length&&o.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",o.shape.__points[p[t].ptIdx])})},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var od={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},sd=function(t,e){return Math.round(t.length/2)};Ua.prototype.parse=function(t){return t},Ua.prototype.getSetting=function(t){return this._setting[t]},Ua.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},Ua.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},Ua.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},Ua.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},Ua.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},Ua.prototype.getExtent=function(){return this._extent.slice()},Ua.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},Ua.prototype.isBlank=function(){return this._isBlank},Ua.prototype.setBlank=function(t){this._isBlank=t},Ua.prototype.getLabel=null,Ge(Ua),Ye(Ua,{registerWhenExtend:!0}),Za.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&d(n,Ka);return new Za({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var ld=Za.prototype;ld.getOrdinal=function(t){return $a(this).get(t)},ld.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=$a(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var ud=Ua.prototype,hd=Ua.extend({type:"ordinal",init:function(t,e){t&&!y(t)||(t=new Za({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),ud.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return ud.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(ud.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:B,niceExtent:B});hd.create=function(){return new hd};var cd=ci,fd=ci,dd=Ua.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),dd.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=Qa(t)},getTicks:function(){return function(t,e,n,i){var r=[];if(!t)return r;e[0]<n[0]&&r.push(e[0]);for(var a=n[0];a<=n[1]&&(r.push(a),(a=cd(a+t,i))!==r[r.length-1]);)if(r.length>1e4)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=fi(t)||0:"auto"===n&&(n=this._intervalPrecision),yi(t=fd(t,n,!0))},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){r<0&&(r=-r,i.reverse());var a=function(t,e,n,i){var r={},a=t[1]-t[0],o=r.interval=mi(a/e,!0);null!=n&&o<n&&(o=r.interval=n),null!=i&&o>i&&(o=r.interval=i);var s=r.intervalPrecision=Qa(o);return to(r.niceTickExtent=[cd(Math.ceil(t[0]/o)*o,s),cd(Math.floor(t[1]/o)*o,s)],t),r}(i,t,e,n);this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=fd(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=fd(Math.ceil(e[1]/r)*r))}});dd.create=function(){return new dd};var pd="__ec_stack_",gd="undefined"!=typeof Float32Array?Float32Array:Array,vd={seriesType:"bar",plan:Dc(),reset:function(t){if(oo(t)&&so(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),a=e.mapDimension(r.dim),o=e.mapDimension(i.dim),s=r.isHorizontal(),l=s?0:1,u=ao(ro([t]),i,t).width;return u>.5||(u=.5),{progress:function(t,e){for(var h,c=new gd(2*t.count),f=[],d=[],p=0;null!=(h=t.next());)d[l]=e.get(a,h),d[1-l]=e.get(o,h),f=n.dataToPoint(d,null,f),c[p++]=f[0],c[p++]=f[1];e.setLayout({largePoints:c,barWidth:u,valueAxisStart:lo(i,r,!1),valueAxisHorizontal:s})}}}}},md=dd.prototype,yd=Math.ceil,_d=Math.floor,xd=dd.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return bi(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=ci(_d(e[0]/i)*i)),t.fixMax||(e[1]=ci(yd(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],a=r/t;null!=e&&a<e&&(a=e),null!=n&&a>n&&(a=n);var o=wd.length,s=function(t,e,n,i){for(;n<i;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n}(wd,a,0,o),l=wd[Math.min(s,o-1)],u=l[1];"year"===l[0]&&(u*=mi(r/u/t,!0));var h=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,c=[Math.round(yd((i[0]-h)/u)*u+h),Math.round(_d((i[1]-h)/u)*u+h)];to(c,i),this._stepLvl=l,this._interval=u,this._niceExtent=c},parse:function(t){return+gi(t)}});f(["contain","normalize"],function(t){xd.prototype[t]=function(e){return md[t].call(this,this.parse(e))}});var wd=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];xd.create=function(t){return new xd({useUTC:t.ecModel.get("useUTC")})};var bd=Ua.prototype,Sd=dd.prototype,Md=fi,Cd=ci,Id=Math.floor,Td=Math.ceil,kd=Math.pow,Dd=Math.log,Ad=Ua.extend({type:"log",base:10,$constructor:function(){Ua.apply(this,arguments),this._originalScale=new dd},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return d(Sd.getTicks.call(this),function(i){var r=ci(kd(this.base,i));return r=i===e[0]&&t.__fixMin?uo(r,n[0]):r,i===e[1]&&t.__fixMax?uo(r,n[1]):r},this)},getLabel:Sd.getLabel,scale:function(t){return t=bd.scale.call(this,t),kd(this.base,t)},setExtent:function(t,e){var n=this.base;t=Dd(t)/Dd(n),e=Dd(e)/Dd(n),Sd.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=bd.getExtent.call(this);e[0]=kd(t,e[0]),e[1]=kd(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=uo(e[0],i[0])),n.__fixMax&&(e[1]=uo(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=Dd(t[0])/Dd(e),t[1]=Dd(t[1])/Dd(e),bd.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n===1/0||n<=0)){var i=function(t){return Math.pow(10,vi(t))}(n);for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var r=[ci(Td(e[0]/i)*i),ci(Id(e[1]/i)*i)];this._interval=i,this._niceExtent=r}},niceExtent:function(t){Sd.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});f(["contain","normalize"],function(t){Ad.prototype[t]=function(e){return e=Dd(e)/Dd(this.base),bd[t].call(this,e)}}),Ad.create=function(){return new Ad};var Ld=function(t){this._axes={},this._dimList=[],this.name=t||""};Ld.prototype={constructor:Ld,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return d(this._dimList,go,this)},getAxesByScale:function(t){return t=t.toLowerCase(),g(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var a=n[r],o=this._axes[a];i[a]=o[e](t[a])}return i}},vo.prototype={constructor:vo,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return(n=n||[])[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),a=i.getExtent(),o=n.parse(t[0]),s=i.parse(t[1]);return(e=e||[])[0]=Math.min(Math.max(Math.min(r[0],r[1]),o),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(a[0],a[1]),s),Math.max(a[0],a[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return(e=e||[])[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},u(vo,Ld);var Pd=Re(),Od=[0,1],Ed=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};Ed.prototype={constructor:Ed,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return function(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),a=Math.round(n(Math.abs(e[1]-e[0]))/i),o=Math.min(Math.max(-r+a,0),20);return isFinite(o)?o:20}(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&Io(n=n.slice(),i.count()),ui(t,Od,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&Io(n=n.slice(),i.count());var r=ui(t,n,Od,e);return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=yo(this,e),i=d(n.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),r=e.get("alignWithLabel");return function(t,e,n,i,r){function a(t,e){return h?t>e:t<e}var o=e.length;if(t.onBand&&!i&&o){var s,l=t.getExtent();if(1===o)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;f(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[o-1].coord+u},e.push(s)}var h=l[0]>l[1];a(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&a(l[0],e[0].coord)&&e.unshift({coord:l[0]}),a(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&a(s.coord,l[1])&&e.push({coord:l[1]})}}(this,i,n.tickCategoryInterval,r,t.clamp),i},getViewLabels:function(){return mo(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return function(t){var e=function(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}(t),n=fo(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,a=r.getExtent(),o=r.count();if(a[1]-a[0]<1)return 0;var s=1;o>40&&(s=Math.max(1,Math.floor(o/40)));for(var l=a[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),h=Math.abs(u*Math.cos(i)),c=Math.abs(u*Math.sin(i)),f=0,d=0;l<=a[1];l+=s){var p,g,v=Gt(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,f=Math.max(f,p,7),d=Math.max(d,g,7)}var m=f/h,y=d/c;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),x=Pd(t.model),w=x.lastAutoInterval,b=x.lastTickCount;return null!=w&&null!=b&&Math.abs(w-_)<=1&&Math.abs(b-o)<=1&&w>_?_=w:(x.lastTickCount=o,x.lastAutoInterval=_),_}(this)}};var Nd=function(t,e,n,i,r){Ed.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};Nd.prototype={constructor:Nd,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},u(Nd,Ed);var zd={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},Bd={};Bd.categoryAxis=r({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},zd),Bd.valueAxis=r({boundaryGap:[0,0],splitNumber:5},zd),Bd.timeAxis=o({scale:!0,min:"dataMin",max:"dataMax"},Bd.valueAxis),Bd.logAxis=o({scale:!0,logBase:10},Bd.valueAxis);var Rd=["value","category","time","log"],Fd=function(t,e,n,i){f(Rd,function(a){e.extend({type:t+"Axis."+a,mergeDefaultAndTheme:function(e,i){var o=this.layoutMode,s=o?Ci(e):{};r(e,i.getTheme().get(a+"Axis")),r(e,this.getDefaultOption()),e.type=n(t,e),o&&Mi(e,s,o)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=Za.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:function(t,e){for(var n=t[0],i=1,a=t.length;i<a;i++)n=r(n,t[i],e);return n}([{},Bd[a+"Axis"],i],!0)})}),Vh.registerSubTypeDefaulter(t+"Axis",m(n,t))},Vd={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!C(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!C(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:B,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},Wd=Vh.extend({type:"cartesian2dAxis",axis:null,init:function(){Wd.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){Wd.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){Wd.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});r(Wd.prototype,Vd);var Hd={offset:0};Fd("x",Wd,To,Hd),Fd("y",Wd,To,Hd),Vh.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var Gd=Do.prototype;Gd.type="grid",Gd.axisPointerEnabled=!0,Gd.getRect=function(){return this._rect},Gd.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),f(n.x,function(t){co(t.scale,t.model)}),f(n.y,function(t){co(t.scale,t.model)}),f(n.x,function(t){Ao(n,"y",t)}),f(n.y,function(t){Ao(n,"x",t)}),this.resize(this.model,e)},Gd.resize=function(t,e,n){function i(){f(a,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),function(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}(t,e?r.x:r.y)})}var r=function(t,e,n){n=Dh(n||0);var i=e.width,r=e.height,a=hi(t.left,i),o=hi(t.top,r),s=hi(t.right,i),l=hi(t.bottom,r),u=hi(t.width,i),h=hi(t.height,r),c=n[2]+n[0],f=n[1]+n[3],d=t.aspect;switch(isNaN(u)&&(u=i-s-f-a),isNaN(h)&&(h=r-l-c-o),null!=d&&(isNaN(u)&&isNaN(h)&&(d>i/r?u=.8*i:h=.8*r),isNaN(u)&&(u=d*h),isNaN(h)&&(h=u/d)),isNaN(a)&&(a=i-s-u-f),isNaN(o)&&(o=r-l-h-c),t.left||t.right){case"center":a=i/2-u/2-n[3];break;case"right":a=i-u-f}switch(t.top||t.bottom){case"middle":case"center":o=r/2-h/2-n[0];break;case"bottom":o=r-h-c}a=a||0,o=o||0,isNaN(u)&&(u=i-f-a-(s||0)),isNaN(h)&&(h=r-c-o-(l||0));var p=new Dt(a+n[3],o+n[0],u,h);return p.margin=n,p}(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var a=this._axesList;i(),!n&&t.get("containLabel")&&(f(a,function(t){if(!t.model.get("axisLabel.inside")){var e=function(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,a="category"===t.type,o=n.getExtent();r=a?n.count():(i=n.getTicks()).length;var s,l=t.getLabelModel(),u=fo(t),h=1;r>40&&(h=Math.ceil(r/40));for(var c=0;c<r;c+=h){var f=u(i?i[c]:o[0]+c),d=po(l.getTextRect(f),l.get("rotate")||0);s?s.union(d):s=d}return s}}(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},Gd.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},Gd.getAxes=function(){return this._axesList.slice()},Gd.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}w(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},Gd.getCartesians=function(){return this._coordsList.slice()},Gd.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},Gd.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},Gd._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,a=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],o=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,u=this._coordsList;return r?l(u,n=r.coordinateSystem)<0&&(n=null):a&&o?n=this.getCartesian(a.componentIndex,o.componentIndex):a?i=this.getAxis("x",a.componentIndex):o?i=this.getAxis("y",o.componentIndex):s&&s.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},Gd.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},Gd._initCartesian=function(t,e,n){function i(e){return function(n,i){if(ko(n,t)){var s=n.get("position");"x"===e?"top"!==s&&"bottom"!==s&&r[s="bottom"]&&(s="top"===s?"bottom":"top"):"left"!==s&&"right"!==s&&r[s="left"]&&(s="left"===s?"right":"left"),r[s]=!0;var l=new Nd(e,function(t,e){if(e=e||t.get("type"))switch(e){case"category":return new hd(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new dd;default:return(Ua.getClass(e)||dd).create(t)}}(n),[0,0],n.get("type"),s),u="category"===l.type;l.onBand=u&&n.get("boundaryGap"),l.inverse=n.get("inverse"),n.axis=l,l.model=n,l.grid=this,l.index=i,this._axesList.push(l),a[e][i]=l,o[e]++}}}var r={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},o={x:0,y:0};if(e.eachComponent("xAxis",i("x"),this),e.eachComponent("yAxis",i("y"),this),!o.x||!o.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=a,f(a.x,function(e,n){f(a.y,function(i,r){var a="x"+n+"y"+r,o=new vo(a);o.grid=this,o.model=t,this._coordsMap[a]=o,this._coordsList.push(o),o.addAxis(e),o.addAxis(i)},this)},this)},Gd._updateScale=function(t,e){function n(t,e,n){f(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,function(t,e){return Ma(t,e)?t.getCalculationInfo("stackResultDimension"):e}(t,n))})}f(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(t){if(Oo(t)){var i=Po(t),r=i[0],a=i[1];if(!ko(r,e)||!ko(a,e))return;var o=this.getCartesian(r.componentIndex,a.componentIndex),s=t.getData(),l=o.getAxis("x"),u=o.getAxis("y");"list"===s.type&&(n(s,l),n(s,u))}},this)},Gd.getTooltipAxes=function(t){var e=[],n=[];return f(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),a=i.getOtherAxis(r);l(e,r)<0&&e.push(r),l(n,a)<0&&n.push(a)}),{baseAxes:e,otherAxes:n}};var Xd=["xAxis","yAxis"];Do.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var a=new Do(i,t,e);a.name="grid_"+r,a.resize(i,e,!0),i.coordinateSystem=a,n.push(a)}),t.eachSeries(function(t){if(Oo(t)){var e=Po(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},Do.dimensions=Do.prototype.dimensions=vo.prototype.dimensions,Ri.register("cartesian2d",Do);var jd=Math.PI,qd=function(t,e){this.opt=e,this.axisModel=t,o(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new qs;var n=new qs({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};qd.prototype={constructor:qd,hasBuilder:function(t){return!!Yd[t]},add:function(t){Yd[t].call(this)},getGroup:function(){return this.group}};var Yd={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],o=[n[1],0];i&&(j(r,r,i),j(o,o,i));var s=a({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new oh(Pn({anid:"line",shape:{x1:r[0],y1:r[1],x2:o[0],y2:o[1]},style:s,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),h=e.get("axisLine.symbolOffset")||0;if("number"==typeof h&&(h=[h,h]),null!=l){"string"==typeof l&&(l=[l,l]),"string"!=typeof u&&"number"!=typeof u||(u=[u,u]);var c=u[0],d=u[1];f([{rotate:t.rotation+Math.PI/2,offset:h[0],r:0},{rotate:t.rotation-Math.PI/2,offset:h[1],r:Math.sqrt((r[0]-o[0])*(r[0]-o[0])+(r[1]-o[1])*(r[1]-o[1]))}],function(e,n){if("none"!==l[n]&&null!=l[n]){var i=Ta(l[n],-c/2,-d/2,c,d,s.stroke,!0),a=e.r+e.offset,o=[r[0]+a*Math.cos(t.rotation),r[1]-a*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:o,silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=function(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),a=r.getModel("lineStyle"),s=r.get("length"),l=i.getTicksCoords(),u=[],h=[],c=t._transform,f=[],d=0;d<l.length;d++){var p=l[d].coord;u[0]=p,u[1]=0,h[0]=p,h[1]=n.tickDirection*s,c&&(j(u,u,c),j(h,h,c));var g=new oh(Pn({anid:"tick_"+l[d].tickValue,shape:{x1:u[0],y1:u[1],x2:h[0],y2:h[1]},style:o(a.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),f.push(g)}return f}}(this,t,e);!function(t,e,n){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var a=e[0],o=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],h=n[1],c=n[n.length-1],f=n[n.length-2];!1===i?(zo(a),zo(u)):Bo(a,o)&&(i?(zo(o),zo(h)):(zo(a),zo(u))),!1===r?(zo(s),zo(c)):Bo(l,s)&&(r?(zo(l),zo(f)):(zo(s),zo(c)))}(t,function(t,e,n){var i=e.axis;if(I(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var r=e.getModel("axisLabel"),a=r.get("margin"),o=i.getViewLabels(),s=(I(n.labelRotate,r.get("rotate"))||0)*jd/180,l=Ud(n.rotation,s,n.labelDirection),u=e.getCategories(!0),h=[],c=No(e),d=e.get("triggerEvent");return f(o,function(o,s){var f=o.tickValue,p=o.formattedLabel,g=o.rawLabel,v=r;u&&u[f]&&u[f].textStyle&&(v=new ai(u[f].textStyle,r,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=[i.dataToCoord(f),n.labelOffset+n.labelDirection*a],_=new Zu({anid:"label_"+f,position:y,rotation:l.rotation,silent:c,z2:10});Un(_.style,v,{text:p,textAlign:v.getShallow("align",!0)||l.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?f+"":f,s):m}),d&&(_.eventData=Eo(e),_.eventData.targetType="axisLabel",_.eventData.value=g),t._dumbGroup.add(_),_.updateTransform(),h.push(_),t.group.add(_),_.decomposeTransform()}),h}}(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=I(t.axisName,e.get("name"));if(n){var i,r,o=e.get("nameLocation"),s=t.nameDirection,l=e.getModel("nameTextStyle"),u=e.get("nameGap")||0,h=this.axisModel.axis.getExtent(),c=h[0]>h[1]?-1:1,f=["start"===o?h[0]-c*u:"end"===o?h[1]+c*u:(h[0]+h[1])/2,Ro(o)?t.labelOffset+s*u:0],d=e.get("nameRotate");null!=d&&(d=d*jd/180),Ro(o)?i=Ud(t.rotation,null!=d?d:t.rotation,s):(i=function(t,e,n,i){var r,a,o=di(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return pi(o-jd/2)?(a=l?"bottom":"top",r="center"):pi(o-1.5*jd)?(a=l?"top":"bottom",r="center"):(a="middle",r=o<1.5*jd&&o>jd/2?l?"left":"right":l?"right":"left"),{rotation:o,textAlign:r,textVerticalAlign:a}}(t,o,d||0,h),null!=(r=t.axisNameAvailableWidth)&&(r=Math.abs(r/Math.sin(i.rotation)),!isFinite(r)&&(r=null)));var p=l.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=I(t.nameTruncateMaxWidth,g.maxWidth,r),y=null!=v&&null!=m?Eh(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,_=e.get("tooltip",!0),x=e.mainType,w={componentType:x,name:n,$vars:["name"]};w[x+"Index"]=e.componentIndex;var b=new Zu({anid:"name",__fullText:n,__truncatedText:y,position:f,rotation:i.rotation,silent:No(e),z2:1,tooltip:_&&_.show?a({content:n,formatter:function(){return n},formatterParams:w},_):null});Un(b.style,l,{text:y,textFont:p,textFill:l.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:i.textAlign,textVerticalAlign:i.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=Eo(e),b.eventData.targetType="axisName",b.eventData.name=n),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},Ud=qd.innerTextLayout=function(t,e,n){var i,r,a=di(e-t);return pi(a)?(r=n>0?"top":"bottom",i="center"):pi(a-jd)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=a>0&&a<jd?n>0?"right":"left":n>0?"left":"right"),{rotation:a,textAlign:i,textVerticalAlign:r}},Zd=aa({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&function(t){var e=Fo(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,a=n.get("status"),o=n.get("value");null!=o&&(o=i.parse(o));var s=function(t){return!!t.get("handle.show")}(n);null==a&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==o||o>l[1])&&(o=l[1]),o<l[0]&&(o=l[0]),r.value=o,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}(t),Zd.superApply(this,"render",arguments),Vo(this,t,0,n,0,!0)},updateAxisPointer:function(t,e,n,i,r){Vo(this,t,0,n,0,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),Zd.superApply(this,"remove",arguments)},dispose:function(t,e){Wo(this,e),Zd.superApply(this,"dispose",arguments)}}),$d=[];Zd.registerAxisPointerClass=function(t,e){$d[t]=e},Zd.getAxisPointerClass=function(t){return t&&$d[t]};var Kd=["axisLine","axisTickLabel","axisName"],Qd=["splitArea","splitLine"],Jd=Zd.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new qs,this.group.add(this._axisGroup),t.get("show")){var a=t.getCoordSysModel(),o=function(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,a={},o=r.getAxesOnZeroOf()[0],s=r.position,l=o?"onZero":s,u=r.dim,h=i.getRect(),c=[h.x,h.x+h.width,h.y,h.y+h.height],f={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,p="x"===u?[c[2]-d,c[3]+d]:[c[0]-d,c[1]+d];if(o){var g=o.toGlobalCoord(o.dataToCoord(0));p[f.onZero]=Math.max(Math.min(g,p[1]),p[0])}a.position=["y"===u?p[f[l]]:c[0],"x"===u?p[f[l]]:c[3]],a.rotation=Math.PI/2*("x"===u?0:1),a.labelDirection=a.tickDirection=a.nameDirection={top:-1,bottom:1,left:-1,right:1}[s],a.labelOffset=o?p[f[s]]-p[f.onZero]:0,e.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),I(n.labelInside,e.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var v=e.get("axisLabel.rotate");return a.labelRotate="top"===l?-v:v,a.z2=1,a}(a,t),s=new qd(t,o);f(Kd,s.add,s),this._axisGroup.add(s.getGroup()),f(Qd,function(e){t.get(e+".show")&&this["_"+e](t,a)},this),ri(r,this._axisGroup,t),Jd.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),a=r.get("color");a=y(a)?a:[a];for(var s=e.coordinateSystem.getRect(),l=n.isHorizontal(),u=0,h=n.getTicksCoords({tickModel:i}),c=[],f=[],d=r.getLineStyle(),p=0;p<h.length;p++){var g=n.toGlobalCoord(h[p].coord);l?(c[0]=g,c[1]=s.y,f[0]=g,f[1]=s.y+s.height):(c[0]=s.x,c[1]=g,f[0]=s.x+s.width,f[1]=g);var v=u++%a.length,m=h[p].tickValue;this._axisGroup.add(new oh(Pn({anid:null!=m?"line_"+h[p].tickValue:null,shape:{x1:c[0],y1:c[1],x2:f[0],y2:f[1]},style:o({stroke:a[v]},d),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),a=r.get("color"),s=e.coordinateSystem.getRect(),l=n.getTicksCoords({tickModel:i,clamp:!0});if(l.length){var u=a.length,h=this._splitAreaColors,c=z(),f=0;if(h)for(v=0;v<l.length;v++){var d=h.get(l[v].tickValue);if(null!=d){f=(d+(u-1)*v)%u;break}}var p=n.toGlobalCoord(l[0].coord),g=r.getAreaStyle();a=y(a)?a:[a];for(var v=1;v<l.length;v++){var m,_,x,w,b=n.toGlobalCoord(l[v].coord);n.isHorizontal()?(m=p,_=s.y,x=b-m,w=s.height,p=m+x):(m=s.x,_=p,x=s.width,p=_+(w=b-_));var S=l[v-1].tickValue;null!=S&&c.set(S,f),this._axisGroup.add(new ah({anid:null!=S?"area_"+S:null,shape:{x:m,y:_,width:x,height:w},style:o({fill:a[f]},g),silent:!0})),f=(f+1)%u}this._splitAreaColors=c}}}});Jd.extend({type:"xAxis"}),Jd.extend({type:"yAxis"}),aa({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new ah({shape:t.coordinateSystem.getRect(),style:o({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),Qr(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),na({seriesType:"line",performRawSeries:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("symbol")||"circle",a=t.get("symbolSize"),o=t.get("symbolKeepAspect");if(i.setVisual({legendSymbol:"line",symbol:r,symbolSize:a,symbolKeepAspect:o}),!e.isSeriesFiltered(t)){var s="function"==typeof a;return{dataEach:i.hasItemOption||s?function(e,n){if("function"==typeof a){var i=t.getRawValue(n),r=t.getDataParams(n);e.setItemVisual(n,"symbolSize",a(i,r))}if(e.hasItemOption){var o=e.getItemModel(n),s=o.getShallow("symbol",!0),l=o.getShallow("symbolSize",!0),u=o.getShallow("symbolKeepAspect",!0);null!=s&&e.setItemVisual(n,"symbol",s),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=u&&e.setItemVisual(n,"symbolKeepAspect",u)}}:null}}}}),ea({seriesType:"line",plan:Dc(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,i=t.pipelineContext.large;if(n){var r=d(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),a=r.length,o=e.getCalculationInfo("stackResultDimension");return Ma(e,r[0])&&(r[0]=o),Ma(e,r[1])&&(r[1]=o),a&&{progress:function(t,e){for(var o=t.end-t.start,s=i&&new Float32Array(o*a),l=t.start,u=0,h=[],c=[];l<t.end;l++){var f;if(1===a)d=e.get(r[0],l),f=!isNaN(d)&&n.dataToPoint(d,null,c);else{var d=h[0]=e.get(r[0],l),p=h[1]=e.get(r[1],l);f=!isNaN(d)&&!isNaN(p)&&n.dataToPoint(h,null,c)}i?(s[u++]=f?f[0]:NaN,s[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}i&&e.setLayout("symbolPoints",s)}}}}}),Jr(nf.PROCESSOR.STATISTIC,{seriesType:"line",modifyOutputEnd:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("sampling"),a=t.coordinateSystem;if("cartesian2d"===a.type&&r){var o,s=a.getBaseAxis(),l=a.getOtherAxis(s),u=s.getExtent(),h=u[1]-u[0],c=Math.round(i.count()/h);c>1&&("string"==typeof r?o=od[r]:"function"==typeof r&&(o=r),o&&t.setData(i.downSample(i.mapDimension(l.dim),1/c,o,sd)))}}}),Ic.extend({type:"series.__base_bar__",getInitialData:function(t,e){return Ca(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),a=i.getLayout("size");return n[e.getBaseAxis().isHorizontal()?0:1]+=r+a/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var tp=Gl([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),ep={getBarItemStyle:function(t){var e=tp(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},np=["itemStyle","barBorderWidth"];a(ai.prototype,ep),sa({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return"cartesian2d"!==i&&"polar"!==i||(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t,e,n){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,n,i){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,n){var i,r=this.group,a=t.getData(),o=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?i=l.isHorizontal():"polar"===s.type&&(i="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;a.diff(o).add(function(e){if(a.hasValue(e)){var n=a.getItemModel(e),o=rp[s.type](a,e,n),l=ip[s.type](a,e,n,o,i,u);a.setItemGraphicEl(e,l),r.add(l),jo(l,a,e,n,o,t,i,"polar"===s.type)}}).update(function(e,n){var l=o.getItemGraphicEl(n);if(a.hasValue(e)){var h=a.getItemModel(e),c=rp[s.type](a,e,h);l?ei(l,{shape:c},u,e):l=ip[s.type](a,e,h,c,i,u,!0),a.setItemGraphicEl(e,l),r.add(l),jo(l,a,e,h,c,t,i,"polar"===s.type)}else r.remove(l)}).remove(function(t){var e=o.getItemGraphicEl(t);"cartesian2d"===s.type?e&&Go(t,u,e):e&&Xo(t,u,e)}).execute(),this._data=a},_renderLarge:function(t,e,n){this._clear(),qo(t,this.group)},_incrementalRenderLarge:function(t,e){qo(e,this.group,!0)},dispose:B,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?Xo(e.dataIndex,t,e):Go(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var ip={cartesian2d:function(t,e,n,i,r,o,s){var l=new ah({shape:a({},i)});if(o){var u=l.shape,h=r?"height":"width",c={};u[h]=0,c[h]=i[h],_h[s?"updateProps":"initProps"](l,{shape:c},o,e)}return l},polar:function(t,e,n,i,r,a,s){var l=i.startAngle<i.endAngle,u=new Ju({shape:o({clockwise:l},i)});if(a){var h=u.shape,c=r?"r":"endAngle",f={};h[c]=r?0:i.startAngle,f[c]=i[c],_h[s?"updateProps":"initProps"](u,{shape:f},a,e)}return u}},rp={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=function(t,e){var n=t.get(np)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}(n,i),a=i.width>0?1:-1,o=i.height>0?1:-1;return{x:i.x+a*r/2,y:i.y+o*r/2,width:i.width-a*r,height:i.height-o*r}},polar:function(t,e,n){var i=t.getItemLayout(e);return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle}}},ap=xn.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__valueIdx,a=0;a<n.length;a+=2)i[this.__valueIdx]=n[a+r],t.moveTo(i[0],i[1]),t.lineTo(n[a],n[a+1])}});ea(m(function(t,e){var n=io(t,e),i=ro(n),r={};f(n,function(t){var e=t.getData(),n=t.coordinateSystem,a=n.getBaseAxis(),o=eo(t),s=i[no(a)][o],l=s.offset,u=s.width,h=n.getOtherAxis(a),c=t.get("barMinHeight")||0;r[o]=r[o]||[],e.setLayout({offset:l,size:u});for(var f=e.mapDimension(h.dim),d=e.mapDimension(a.dim),p=Ma(e,f),g=h.isHorizontal(),v=lo(a,h,p),m=0,y=e.count();m<y;m++){var _=e.get(f,m),x=e.get(d,m);if(!isNaN(_)){var w,b,S,M,C=_>=0?"p":"n",I=v;if(p&&(r[o][x]||(r[o][x]={p:v,n:v}),I=r[o][x][C]),g)w=I,b=(T=n.dataToPoint([_,x]))[1]+l,S=T[0]-v,M=u,Math.abs(S)<c&&(S=(S<0?-1:1)*c),p&&(r[o][x][C]+=S);else{var T=n.dataToPoint([x,_]);w=T[0]+l,b=I,S=u,M=T[1]-v,Math.abs(M)<c&&(M=(M<=0?-1:1)*c),p&&(r[o][x][C]+=M)}e.setItemLayout(m,{x:w,y:b,width:S,height:M})}}},this)},"bar")),ea(vd),na({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var op={updateSelectedMap:function(t){this._targetList=y(t)?t.slice():[],this._selectTargetMap=p(t||[],function(t,e){return t.set(e.name,e),t},z())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=n)return this[n.selected?"unSelect":"select"](t,e),n.selected},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},sp=oa({type:"series.pie",init:function(t){sp.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){sp.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return function(t,e,n){e=y(e)&&{coordDimensions:e}||a({},e);var i=t.getSource(),r=zf(i,e),o=new Of(r,t);return o.initData(i,n),o}(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();i<r;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:rr(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=sp.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=function(t,e,n){if(!t[e])return 0;var i=p(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),a=d(t,function(t){return(isNaN(t)?0:t)/i*r*100}),o=100*r,s=d(a,function(t){return Math.floor(t)}),l=p(s,function(t,e){return t+e},0),u=d(a,function(t,e){return t-s[e]});l<o;){for(var h=Number.NEGATIVE_INFINITY,c=null,f=0,g=u.length;f<g;++f)u[f]>h&&(h=u[f],c=f);++s[c],u[c]=0,++l}return s[e]/r}(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){Pe(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});h(sp,op);var lp=Zo.prototype;lp.updateData=function(t,e,n){function i(){s.stopAnimation(!0),s.animateTo({shape:{r:h.r+l.get("hoverOffset")}},300,"elasticOut")}function r(){s.stopAnimation(!0),s.animateTo({shape:{r:h.r}},300,"elasticOut")}var s=this.childAt(0),l=t.hostModel,u=t.getItemModel(e),h=t.getItemLayout(e),c=a({},h);c.label=null,n?(s.setShape(c),"scale"===l.getShallow("animationType")?(s.shape.r=h.r0,ni(s,{shape:{r:h.r}},l,e)):(s.shape.endAngle=h.startAngle,ei(s,{shape:{endAngle:h.endAngle}},l,e))):ei(s,{shape:c},l,e);var f=t.getItemVisual(e,"color");s.useStyle(o({lineJoin:"bevel",fill:f},u.getModel("itemStyle").getItemStyle())),s.hoverStyle=u.getModel("emphasis.itemStyle").getItemStyle();var d=u.getShallow("cursor");d&&s.attr("cursor",d),Uo(this,t.getItemLayout(e),l.isSelected(null,e),l.get("selectedOffset"),l.get("animation")),s.off("mouseover").off("mouseout").off("emphasis").off("normal"),u.get("hoverAnimation")&&l.isAnimationEnabled()&&s.on("mouseover",i).on("mouseout",r).on("emphasis",i).on("normal",r),this._updateLabel(t,e),qn(this)},lp._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,a=t.getItemModel(e),o=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");ei(n,{shape:{points:o.linePoints||[[o.x,o.y],[o.x,o.y],[o.x,o.y]]}},r,e),ei(i,{style:{x:o.x,y:o.y}},r,e),i.attr({rotation:o.rotation,origin:[o.x,o.y],z2:10});var l=a.getModel("label"),u=a.getModel("emphasis.label"),h=a.getModel("labelLine"),c=a.getModel("emphasis.labelLine");s=t.getItemVisual(e,"color");Yn(i.style,i.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!o.inside},{textAlign:o.textAlign,textVerticalAlign:o.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!l.get("show"),i.hoverIgnore=!u.get("show"),n.ignore=n.normalIgnore=!h.get("show"),n.hoverIgnore=!c.get("show"),n.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(h.getModel("lineStyle").getLineStyle()),n.hoverStyle=c.getModel("lineStyle").getLineStyle();var f=h.get("smooth");f&&!0===f&&(f=.4),n.setShape({smooth:f})},u(Zo,qs),gr.extend({type:"pie",init:function(){var t=new qs;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),a=this._data,o=this.group,s=e.get("animation"),l=!a,u=t.get("animationType"),h=m(Yo,this.uid,t,s,n),c=t.get("selectedMode");if(r.diff(a).add(function(t){var e=new Zo(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),c&&e.on("click",h),r.setItemGraphicEl(t,e),o.add(e)}).update(function(t,e){var n=a.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),c&&n.on("click",h),o.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=a.getItemGraphicEl(t);o.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==u){var f=r.getItemLayout(0),d=Math.max(n.getWidth(),n.getHeight())/2,p=v(o.removeClipPath,o);o.setClipPath(this._createClipPath(f.cx,f.cy,d,f.startAngle,f.clockwise,p,t))}this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,a,o){var s=new Ju({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return ni(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},o,a),s},containPoint:function(t,e){var n=e.getData().getItemLayout(0);if(n){var i=t[0]-n.cx,r=t[1]-n.cy,a=Math.sqrt(i*i+r*r);return a<=n.r&&a>=n.r0}}});var up=function(t,e,n,i){var r,a,o=t.getData(),s=[],l=!1;o.each(function(n){var i,u,h,c,f=o.getItemLayout(n),d=o.getItemModel(n),p=d.getModel("label"),g=p.get("position")||d.get("emphasis.label.position"),v=d.getModel("labelLine"),m=v.get("length"),y=v.get("length2"),_=(f.startAngle+f.endAngle)/2,x=Math.cos(_),w=Math.sin(_);r=f.cx,a=f.cy;var b="inside"===g||"inner"===g;if("center"===g)i=f.cx,u=f.cy,c="center";else{var S=(b?(f.r+f.r0)/2*x:f.r*x)+r,M=(b?(f.r+f.r0)/2*w:f.r*w)+a;if(i=S+3*x,u=M+3*w,!b){var C=S+x*(m+e-f.r),I=M+w*(m+e-f.r),T=C+(x<0?-1:1)*y;i=T+(x<0?-5:5),u=I,h=[[S,M],[C,I],[T,I]]}c=b?"center":x>0?"left":"right"}var k=p.getFont(),D=p.get("rotate")?x<0?-_+Math.PI:-_:0,A=Gt(t.getFormattedLabel(n,"normal")||o.getName(n),k,c,"top");l=!!D,f.label={x:i,y:u,position:g,height:A.height,len:m,len2:y,linePoints:h,textAlign:c,verticalAlign:"middle",rotation:D,inside:b},b||s.push(f.label)}),!l&&t.get("avoidLabelOverlap")&&function(t,e,n,i,r,a){for(var o=[],s=[],l=0;l<t.length;l++)t[l].x<e?o.push(t[l]):s.push(t[l]);for($o(s,e,n,i,1,0,a),$o(o,e,n,i,-1,0,a),l=0;l<t.length;l++){var u=t[l].linePoints;if(u){var h=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+h}}}(s,r,a,e,0,i)},hp=2*Math.PI,cp=Math.PI/180;f([{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}],function(t){t.update="updateView",ta(t,function(e,n){var i={};return n.eachComponent({mainType:"series",subType:"pie",query:e},function(n){n[t.method]&&n[t.method](e.name,e.dataIndex);var r=n.getData();r.each(function(t){var e=r.getName(t);i[e]=n.isSelected(e)||!1})}),{name:e.name,selected:i}})}),na({getTargetSeries:function(t){var e={},n=z();return t.eachSeriesByType("pie",function(t){t.__paletteScope=e,n.set(t.uid,t)}),n},reset:function(t,e){var n=t.getRawData(),i={},r=t.getData();r.each(function(t){var e=r.getRawIndex(t);i[e]=t}),n.each(function(e){var a=i[e],o=null!=a&&r.getItemVisual(a,"color",!0);if(o)n.setItemVisual(e,"color",o);else{var s=n.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(n.getName(e)||e+"",t.__paletteScope,n.count());n.setItemVisual(e,"color",s),null!=a&&r.setItemVisual(a,"color",s)}})}}),ea(m(function(t,e,n,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),a=t.get("radius");y(a)||(a=[0,a]),y(r)||(r=[r,r]);var o=n.getWidth(),s=n.getHeight(),l=Math.min(o,s),u=hi(r[0],o),h=hi(r[1],s),c=hi(a[0],l/2),f=hi(a[1],l/2),d=-t.get("startAngle")*cp,p=t.get("minAngle")*cp,g=0;e.each(i,function(t){!isNaN(t)&&g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,_=t.get("clockwise"),x=t.get("roseType"),w=t.get("stillShowZeroSum"),b=e.getDataExtent(i);b[0]=0;var S=hp,M=0,C=d,I=_?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:_,cx:u,cy:h,r0:c,r:x?NaN:f});else{(i="area"!==x?0===v&&w?m:t*m:hp/g)<p?(i=p,S-=p):M+=t;var r=C+I*i;e.setItemLayout(n,{angle:i,startAngle:C,endAngle:r,clockwise:_,cx:u,cy:h,r0:c,r:x?ui(t,b,[c,f]):f}),C=r}}),S<hp&&g)if(S<=.001){var T=hp/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=T,i.startAngle=d+I*n*T,i.endAngle=d+I*(n+1)*T}})}else m=S/M,C=d,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=C,i.endAngle=C+I*r,C+=I*r}});up(t,f,0,s)})},"pie")),Jr({seriesType:"pie",reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}),t.version="4.1.0",t.dependencies={zrender:"4.0.4"},t.PRIORITY=nf,t.init=function(t,e,n){var i=$r(t);if(i)return i;var r=new Er(t,e,n);return r.id="ec_"+xf++,yf[r.id]=r,We(t,bf,r.id),function(t){function e(t,e){for(var i=0;i<t.length;i++)t[i][n]=e}var n="__connectUpdateStatus";Zc(cf,function(i,r){t._messageCenter.on(r,function(i){if(_f[t.group]&&0!==t[n]){if(i&&i.escapeConnect)return;var r=t.makeActionFromEvent(i),a=[];Zc(yf,function(e){e!==t&&e.group===t.group&&a.push(e)}),e(a,0),Zc(a,function(t){1!==t[n]&&t.dispatchAction(r)}),e(a,2)}})})}(r),r},t.connect=function(t){if(y(t)){var e=t;t=null,Zc(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+wf++,Zc(e,function(e){e.group=t})}return _f[t]=!0,t},t.disConnect=Zr,t.disconnect=Mf,t.dispose=function(t){"string"==typeof t?t=yf[t]:t instanceof Er||(t=$r(t)),t instanceof Er&&!t.isDisposed()&&t.dispose()},t.getInstanceByDom=$r,t.getInstanceById=function(t){return yf[t]},t.registerTheme=Kr,t.registerPreprocessor=Qr,t.registerProcessor=Jr,t.registerPostUpdate=function(t){pf.push(t)},t.registerAction=ta,t.registerCoordinateSystem=function(t,e){Ri.register(t,e)},t.getCoordinateSystemDimensions=function(t){var e=Ri.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},t.registerLayout=ea,t.registerVisual=na,t.registerLoading=ra,t.extendComponentModel=function(t){return Vh.extend(t)},t.extendComponentView=aa,t.extendSeriesModel=oa,t.extendChartView=sa,t.setCanvasCreator=function(t){!function(t,e){"createCanvas"===t&&(cs=null),us[t]=e}("createCanvas",t)},t.registerMap=function(t,e,n){e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),Sf[t]={geoJson:e,specialAreas:n}},t.getMap=function(t){return Sf[t]},t.dataTool={}},"object"==s(e)&&void 0!==t?o(e):(r=[e],void 0===(a="function"==typeof(i=o)?i.apply(e,r):i)||(t.exports=a))},283:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(285),r=n.n(i),a=n(287);var o=function(t){n(284)},s=n(0)(r.a,a.a,o,"data-v-a063ffce",null);e.default=s.exports},284:function(t,e){},285:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=n(286),o=(i=a)&&i.__esModule?i:{default:i};e.default={props:{echarts:{required:!0,type:Object,default:function(){return null}},onInit:{required:!0,type:Function,default:null},canvasId:{type:String,default:"ec-canvas"},lazyLoad:{type:Boolean,default:!1},disableTouch:{type:Boolean,default:!1},throttleTouch:{type:Boolean,default:!1}},onReady:function(){this.echarts?this.lazyLoad||this.init():console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>')},methods:{init:function(){var t=this;if(this.onInit){var e=this.canvasId;this.ctx=wx.createCanvasContext(e);var n=new o.default(this.ctx,e);this.echarts.setCanvasCreator(function(){return n}),wx.createSelectorQuery().select("#"+e).boundingClientRect(function(e){e?t.chart=t.onInit(n,e.width,e.height):setTimeout(function(){return t.init()},50)}).exec()}else console.warn("请传入 onInit 函数进行初始化")},canvasToTempFilePath:function(t){var e=this.canvasId;this.ctx.draw(!0,function(){wx.canvasToTempFilePath(r({canvasId:e},t))})},touchStart:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n&&t.mp.touches.length){var i=t.mp.touches[0];n._zr.handler.dispatch("mousedown",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("mousemove",{zrX:i.x,zrY:i.y})}},touchMove:function(t){var e=this.disableTouch,n=this.throttleTouch,i=this.chart,r=this.lastMoveTime;if(!e&&i&&t.mp.touches.length){if(n){var a=Date.now();if(a-r<240)return;this.lastMoveTime=a}var o=t.mp.touches[0];i._zr.handler.dispatch("mousemove",{zrX:o.x,zrY:o.y})}},touchEnd:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n){var i=t.mp.changedTouches?t.mp.changedTouches[0]:{};n._zr.handler.dispatch("mouseup",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("click",{zrX:i.x,zrY:i.y})}}}}},286:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return i(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}].forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments;["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"].forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set"+e.charAt(0).toUpperCase()+e.slice(1)](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=r},287:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.canvasId?n("canvas",{staticClass:"ec-canvas",attrs:{id:t.canvasId,canvasId:t.canvasId,eventid:"kuZ-0"},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,error:t.error}}):t._e()},staticRenderFns:[]};e.a=i},288:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(290),r=n.n(i),a=n(291);var o=function(t){n(289)},s=n(0)(r.a,a.a,o,null,null);e.default=s.exports},289:function(t,e){},290:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"segmented-control",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#C49C5A"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:this.current}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},computed:{wrapStyle:function(){var t="";switch(this.styleType){case"text":t="border:0;";break;default:t="border-color: "+this.activeColor}return t},itemStyle:function(){var t="";switch(this.styleType){case"text":t="color:#000;border-left:0;";break;default:t="color:"+this.activeColor+";border-color:"+this.activeColor+";"}return t},activeStyle:function(){var t="";switch(this.styleType){case"text":t="color:"+this.activeColor+";border-left:0;border-bottom-style:solid;";break;default:t="color:#fff;border-color:"+this.activeColor+";background-color:"+this.activeColor}return t}},methods:{onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}}},291:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"segmented-control",class:t.styleType,style:t.wrapStyle},t._l(t.values,function(e,i){return n("view",{key:i,staticClass:"segmented-control-item",class:t.styleType,style:i===t.currentIndex?t.activeStyle:t.itemStyle,attrs:{eventid:"X1m-0-"+i},on:{click:function(e){t.onClick(i)}}},[t._v("\n\t\t"+t._s(e)+"\n\t")])}))},staticRenderFns:[]};e.a=i},292:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"topBox"},[n("view",{staticClass:"top"},[n("view",{staticClass:"go-back iconfont",attrs:{eventid:"cXn-0"},on:{click:t.goback}},[t._v("\n\t\t\t\t\n\t\t\t")]),n("view",{staticClass:"middle"},[t._v("\n\t\t\t\t我的持仓\n\n\t\t\t")]),n("view",{staticClass:"share iconfont"})]),t._m(0),t._m(1)]),n("view",{staticClass:"container"},[n("view",{staticClass:"canvasView"},[n("mpvue-echarts",{ref:"pieChart",attrs:{echarts:t.echarts,onInit:t.pieInit,canvasId:"pie",mpcomid:"jYb-0"}})],1)]),n("view",{staticClass:"btn-box"},[n("view",{staticClass:"btn-item",class:{active:0==t.clickItem},attrs:{eventid:"jtU-1"},on:{click:t.toShouyimingxi}},[t._v("\n\t\t\t收益明细\n\t\t")]),n("view",{staticClass:"btn-item",class:{active:1==t.clickItem},attrs:{eventid:"xNn-2"},on:{click:t.toJiaoyijilu}},[t._v("\n\t\t\t交易记录\n\t\t")])]),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"second-box"},[e("view",{staticClass:"second-title"},[this._v("\n\t\t\t\t总资产（元）\n\t\t\t")]),e("view",{staticClass:"persent"},[this._v("160620000")]),e("view",{staticClass:"level"},[this._v("数据更新日期 2018-12-12")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"class-box"},[e("view",{staticClass:"class-item"},[e("view",{staticClass:"class-item-top"},[this._v("60620000")]),e("view",{staticClass:"class-item-bottom"},[this._v("累计收益")])]),e("view",{staticClass:"class-item class-item-2"},[e("view",{staticClass:"class-item-top"},[this._v("112160000")]),e("view",{staticClass:"class-item-bottom"},[this._v("持仓总收益")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",[n("view",{staticClass:"block"},[n("view",{staticClass:"block-content"},[n("view",{staticClass:"intro"},[n("view",{staticClass:"pro-title"},[t._v("\n\t\t\t\t\t\t\t青山赢收33号\n\t\t\t\t\t\t\t"),n("view",{staticClass:"is-daoqi weidaoqi"},[t._v("\n\t\t\t\t\t\t\t\t未到期\n\t\t\t\t\t\t\t")])]),n("view",{staticClass:"detail"},[n("view",{staticClass:"item"},[n("view",{staticClass:"color"},[t._v("8%-9.5%")]),n("view",{staticClass:"color-gray"},[t._v("业绩比较基准")])]),n("view",{staticClass:"item"},[n("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t\t\t")]),n("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t\t\t")])]),n("view",{staticClass:"item"},[n("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t\t\t")]),n("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t\t\t")])]),n("view",{staticClass:"item"},[n("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t\t认购起点\n\t\t\t\t\t\t\t\t")]),n("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t\t")])])])])]),n("view",{staticClass:"block-content"},[n("view",{staticClass:"intro"},[n("view",{staticClass:"pro-title"},[t._v("\n\t\t\t\t\t\t\t青山赢收33号\n\t\t\t\t\t\t\t"),n("view",{staticClass:"is-daoqi yidaoqi"},[t._v("\n\t\t\t\t\t\t\t\t已到期\n\t\t\t\t\t\t\t")])]),n("view",{staticClass:"detail"},[n("view",{staticClass:"item"},[n("view",{staticClass:"color"},[t._v("8%/年")]),n("view",{staticClass:"color-gray"},[t._v("业绩比较基准")])]),n("view",{staticClass:"item"},[n("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t\t\t")]),n("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t\t\t")])]),n("view",{staticClass:"item"},[n("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t\t\t")]),n("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t\t\t")])]),n("view",{staticClass:"item"},[n("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t\t认购起点\n\t\t\t\t\t\t\t\t")]),n("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t\t")])])])])])])])])}]};e.a=i}},[278]);
});
require('pages/my/wodechicang/wodechicang.js');
__wxRoute = 'pages/my/wodedingdan/wodedingdan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/wodedingdan/wodedingdan.js';

define('pages/my/wodedingdan/wodedingdan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([26],{293:function(t,i,a){"use strict";var s=n(a(1)),e=n(a(294));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},294:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(296),e=a.n(s),n=a(297);var c=function(t){a(295)},l=a(0)(e.a,n.a,c,null,null);i.default=l.exports},295:function(t,i){},296:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,e=a(3),n=(s=e)&&s.__esModule?s:{default:s};i.default={components:{searchTemp:n.default},data:function(){return{}}}},297:function(t,i,a){"use strict";var s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("view",[i("view",{staticClass:"top"},[i("searchTemp",{staticClass:"search",attrs:{mpcomid:"VJJ-0"}})],1),this._m(0)])},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"dingdan-box"},[a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t                        260,000.00\n\t                    ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])]),a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                    260,000.00\n\t\t\t                ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])]),a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                    260,000.00\n\t\t\t                ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])]),a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                    260,000.00\n\t\t\t                ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])])])}]};i.a=s}},[293]);
});
require('pages/my/wodedingdan/wodedingdan.js');
__wxRoute = 'pages/my/zengzhifuwu/zengzhifuwu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/zengzhifuwu/zengzhifuwu.js';

define('pages/my/zengzhifuwu/zengzhifuwu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([25],{298:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(299));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},299:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(301),a=i.n(s),n=i(302);var c=function(t){i(300)},l=i(0)(a.a,n.a,c,null,null);e.default=l.exports},300:function(t,e){},301:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},302:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("view",{staticClass:"box"},[this._m(0),e("view",{staticClass:"title"},[this._v("泰康医疗")]),this._m(1),e("view",{staticClass:"questionBox"},[e("view",{staticClass:"question",attrs:{eventid:"Nik-0"},on:{click:this.toWodelicaishi}},[e("label",{staticClass:"iconfont label"},[this._v("")]),this._v("预约服务\n\t\t\t")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"banner"},[e("image",{staticClass:"banner-image",attrs:{src:"http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.5-%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/android/drawable-xhdpi/tu.png",mode:"widthFix"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"content"},[e("view",{staticClass:"p"},[this._v(" 2018年经济增速回落，周期崛起将被证伪，可增加新兴行业配置")]),e("view",{staticClass:"p"},[this._v("2018年整体来讲经济增速是回落的，很多人一听经济增速回落就不太高兴，会觉得经济增速回落，那么投资收益肯定不好。因为大家都记住了一句话，股市是经济的晴雨表，反过来说，如果说经济不好的话股市也不好。我觉得大家对“股市是经济的晴雨表”的理解是有很大问题的，一是倒推经济不好股市就不好的逻辑未必成立，如90年代以来中国经济长期高增长，但是股市却总是大幅波动，股市涨幅远不如美国股市，虽然美国经济增速远不如中国。二是大家把GDP增速高低与经济好坏等同起来，这说明什么呢？说明大家对于经济好不好的理解是有很大的问题。经济好不好的评判标准不是只有GDP增速，GDP它是一个流量指标，而经济好不好主要是看经济运行质量，包括经济结构与效率。")])])}]};e.a=s}},[298]);
});
require('pages/my/zengzhifuwu/zengzhifuwu.js');
__wxRoute = 'pages/my/wodechicang/shouyimingxi/shouyimingxi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/wodechicang/shouyimingxi/shouyimingxi.js';

define('pages/my/wodechicang/shouyimingxi/shouyimingxi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([27],{303:function(t,s,i){"use strict";var e=c(i(1)),a=c(i(304));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},304:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(306),a=i.n(e),c=i(307);var o=function(t){i(305)},n=i(0)(a.a,c.a,o,null,null);s.default=n.exports},305:function(t,s){},306:function(t,s,i){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},onLoad:function(){},methods:{goback:function(){t.navigateBack()}}}}).call(s,i(2).default)},307:function(t,s,i){"use strict";var e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("view",[s("view",{staticClass:"topBox"},[s("view",{staticClass:"top"},[s("view",{staticClass:"go-back iconfont",attrs:{eventid:"syC-0"},on:{click:this.goback}},[this._v("\n\t\t\t\t\n\t\t\t")]),s("view",{staticClass:"middle"},[this._v("\n\t\t\t\t我的持仓\n\n\t\t\t")]),s("view",{staticClass:"share iconfont"})]),this._m(0)]),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"second-box"},[s("view",{staticClass:"second-title"},[this._v("\n\t\t\t\t历史累计收益\n\t\t\t")]),s("view",{staticClass:"persent"},[this._v("160620000")]),s("view",{staticClass:"level"},[this._v("数据更新日期 2018-12-12")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view",{staticClass:"shouyi-box"},[i("view",{staticClass:"shouyi-item"},[i("view",{staticClass:"shouyi-top"},[i("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),i("view",{staticClass:"shouyijine"},[t._v("+78.03")])]),i("view",{staticClass:"shouyi-bottom"},[t._v("到期收益")])]),i("view",{staticClass:"shouyi-item"},[i("view",{staticClass:"shouyi-top"},[i("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),i("view",{staticClass:"shouyijine"},[t._v("+78.03")])]),i("view",{staticClass:"shouyi-bottom"},[t._v("到期收益")])]),i("view",{staticClass:"shouyi-item"},[i("view",{staticClass:"shouyi-top"},[i("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),i("view",{staticClass:"shouyijine"},[t._v("+78.03")])]),i("view",{staticClass:"shouyi-bottom"},[t._v("到期收益")])]),i("view",{staticClass:"shouyi-item"},[i("view",{staticClass:"shouyi-top"},[i("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),i("view",{staticClass:"shouyijine"},[t._v("+78.03")])]),i("view",{staticClass:"shouyi-bottom"},[t._v("到期收益")])])])}]};s.a=e}},[303]);
});
require('pages/my/wodechicang/shouyimingxi/shouyimingxi.js');
__wxRoute = 'pages/my/wodechicang/jiaoyijilu/jiaoyijilu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/wodechicang/jiaoyijilu/jiaoyijilu.js';

define('pages/my/wodechicang/jiaoyijilu/jiaoyijilu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([28],{308:function(t,i,a){"use strict";var s=n(a(1)),e=n(a(309));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},309:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(311),e=a.n(s),n=a(312);var c=function(t){a(310)},d=a(0)(e.a,n.a,c,null,null);i.default=d.exports},310:function(t,i){},311:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{id:1,xuanze:[{item:"买入",id:1},{item:"到期赎回",id:2},{item:"提前赎回",id:3}]}},methods:{fresh:function(t){this.id=t}}}},312:function(t,i,a){"use strict";var s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("view",{staticClass:"tiaojian"},t._l(t.xuanze,function(i,s){return a("view",{key:i.id,class:t.id==i.id?"active":"",attrs:{eventid:"4e2-0-"+s},on:{click:function(a){t.fresh(i.id)}}},[t._v("\n\t\t\t\t"+t._s(i.item)+"\n\t\t\t")])})),t._m(0)])},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"dingdan-box"},[a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n                            260,000.00\n                        ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])]),a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                    260,000.00\n\t\t\t                ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])]),a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                    260,000.00\n\t\t\t                ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])]),a("view",{staticClass:"dingdan-item"},[a("view",{staticClass:"dingdan-item-left"},[a("view",{staticClass:"product-name"},[t._v("青山盈收33号")]),a("view",{staticClass:"jiaqian"},[t._v("\n\t\t\t                    260,000.00\n\t\t\t                ")])]),a("view",{staticClass:"dingdan-item-right"},[a("view",{staticClass:"is-daoqi daoqi"},[t._v("已到期")]),a("view",{staticClass:"time"},[t._v("2108-10-10")])])])])}]};i.a=s}},[308]);
});
require('pages/my/wodechicang/jiaoyijilu/jiaoyijilu.js');
__wxRoute = 'pages/message/message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/message/message.js';

define('pages/message/message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([37],{313:function(e,t,n){"use strict";var u=a(n(1)),r=a(n(314));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,u.default)(r.default))},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(316),r=n.n(u),a=n(317);var c=function(e){n(315)},i=n(0)(r.a,a.a,c,null,null);t.default=i.exports},315:function(e,t){},316:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},317:function(e,t,n){"use strict";var u={render:function(){var e=this.$createElement;return(this._self._c||e)("view")},staticRenderFns:[]};t.a=u}},[313]);
});
require('pages/message/message.js');

