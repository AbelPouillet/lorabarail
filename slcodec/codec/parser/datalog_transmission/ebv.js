const a0_0x3912=['log2','reverse','slice','encode_unsigned','length'];(function(_0x1f4226,_0x3912cb){const _0x166ae8=function(_0x45b857){while(--_0x45b857){_0x1f4226['push'](_0x1f4226['shift']());}};_0x166ae8(++_0x3912cb);}(a0_0x3912,0xe7));const a0_0x166a=function(_0x1f4226,_0x3912cb){_0x1f4226=_0x1f4226-0x0;let _0x166ae8=a0_0x3912[_0x1f4226];return _0x166ae8;};exports[a0_0x166a('0x2')]=function(_0x51870c){let _0x419eac=0x1+Math['floor'](Math[a0_0x166a('0x4')](0x1+_0x51870c)/0x7),_0x1cc2fd=Buffer['alloc'](_0x419eac,0x0);_0x1cc2fd[0x0]=_0x51870c&0x7f;for(let _0x5d1c73=0x1;_0x5d1c73<_0x419eac;_0x5d1c73++){_0x1cc2fd[_0x5d1c73]=0x80|_0x51870c>>_0x5d1c73*0x7&0x7f;}return _0x1cc2fd[a0_0x166a('0x0')](),_0x1cc2fd;},exports['decode_unsigned']=function(_0x3343e1){let _0x4f524e=0x0,_0x1a2cd0=!![],_0x1e1011=_0x3343e1[a0_0x166a('0x3')],_0x341256=0x0;while(_0x4f524e<_0x1e1011&&_0x1a2cd0){0x80===(_0x3343e1[_0x4f524e]&0x80)?(_0x341256|=_0x3343e1[_0x4f524e]&0x7f,_0x341256<<=0x7):(_0x1a2cd0=![],_0x341256|=_0x3343e1[_0x4f524e]),_0x4f524e++;}return{'value':_0x341256,'data':_0x3343e1[a0_0x166a('0x1')](_0x4f524e)};},exports['decode_signed']=function(_0x51f816){let _0x2f1f0b=0x0,_0x13d5ab=!![],_0x5cbdc3=_0x51f816[a0_0x166a('0x3')],_0x285afa=0x0,_0x125697=0x1;while(_0x2f1f0b<_0x5cbdc3&&_0x13d5ab){if(0x80===(_0x51f816[_0x2f1f0b]&0x80))_0x285afa<<=0x7,_0x285afa|=_0x51f816[_0x2f1f0b]&0x7f;else{_0x13d5ab=![];if(0x1&_0x51f816[_0x2f1f0b])_0x125697=-0x1;_0x285afa<<=0x6,_0x285afa|=_0x51f816[_0x2f1f0b]>>0x1;}_0x2f1f0b++;}return _0x285afa>0x3fffffff&&(_0x285afa=_0x285afa-0x80000000),{'value':_0x125697*_0x285afa,'data':_0x51f816[a0_0x166a('0x1')](_0x2f1f0b)};};