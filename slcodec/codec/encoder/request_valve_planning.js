const a0_0x32cf=['encode_unsigned','request_valve_planning','slots','../parser/datalog_transmission/ebv','slice','count','update','concat','duration','start','writeUInt32BE','013900','offset','channel','assert'];(function(_0x53f0f5,_0x32cfe7){const _0x455584=function(_0x258948){while(--_0x258948){_0x53f0f5['push'](_0x53f0f5['shift']());}};_0x455584(++_0x32cfe7);}(a0_0x32cf,0x1c4));const a0_0x4555=function(_0x53f0f5,_0x32cfe7){_0x53f0f5=_0x53f0f5-0x0;let _0x455584=a0_0x32cf[_0x53f0f5];return _0x455584;};const assert=require(a0_0x4555('0xc')),ebv=require(a0_0x4555('0x1')),checkSlot=require('./utils/check_slot');module['exports']=_0x316ce2=>{let _0x3e307a=_0x316ce2[a0_0x4555('0xe')],_0x352c6d=Buffer['from'](a0_0x4555('0x9'),'hex'),_0x36765a=_0x3e307a[a0_0x4555('0xb')]&0x3|(_0x3e307a[a0_0x4555('0x4')]&0x1)<<0x3;if(null==_0x3e307a[a0_0x4555('0x0')]||0x0===_0x3e307a[a0_0x4555('0x0')]['length'])return _0x352c6d[0x2]=_0x36765a,_0x352c6d;_0x36765a=_0x36765a|0x4;let _0x5afddf=ebv[a0_0x4555('0xd')](_0x3e307a[a0_0x4555('0x3')]);_0x352c6d=Buffer[a0_0x4555('0x5')]([_0x352c6d,_0x5afddf]);let _0x163684=Buffer['alloc'](0x4,0x0);_0x163684[a0_0x4555('0x8')](_0x3e307a[a0_0x4555('0x7')]),_0x352c6d=Buffer[a0_0x4555('0x5')]([_0x352c6d,_0x163684[a0_0x4555('0x2')](0x1)]);let _0x1f9fd0=0x0;checkSlot(_0x3e307a);for(let _0x1d9238 of _0x3e307a[a0_0x4555('0x0')]){0x0<_0x1f9fd0&&(assert(0x0<_0x1d9238[a0_0x4555('0xa')]-_0x1f9fd0,'slots\x20can\x27t\x20be\x20contigous'),_0x352c6d=Buffer['concat']([_0x352c6d,ebv['encode_unsigned'](_0x1d9238[a0_0x4555('0xa')]-_0x1f9fd0)])),_0x352c6d=Buffer[a0_0x4555('0x5')]([_0x352c6d,ebv[a0_0x4555('0xd')](_0x1d9238[a0_0x4555('0x6')])]),_0x1f9fd0=_0x1d9238['offset']+_0x1d9238[a0_0x4555('0x6')];}return _0x352c6d=Buffer['concat']([_0x352c6d,ebv['encode_unsigned'](_0x3e307a['duration']-_0x1f9fd0)]),_0x352c6d[0x2]=_0x36765a,_0x352c6d;};