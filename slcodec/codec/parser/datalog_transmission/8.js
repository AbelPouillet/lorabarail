const a0_0xd47b=['measures','value','data','08\x20frame\x20type','readUInt32BE','events','floor','time','device_timestamp','alloc','raw_index','valve_','decode_unsigned','../utils/status_valve','push','concat','slice','parameters','./ebv','battery_current_level','_state'];(function(_0x1ba458,_0xd47b71){const _0x21e2a7=function(_0x2163de){while(--_0x2163de){_0x1ba458['push'](_0x1ba458['shift']());}};_0x21e2a7(++_0xd47b71);}(a0_0xd47b,0xd8));const a0_0x21e2=function(_0x1ba458,_0xd47b71){_0x1ba458=_0x1ba458-0x0;let _0x21e2a7=a0_0xd47b[_0x1ba458];return _0x21e2a7;};const ebv=require(a0_0x21e2('0xc')),statusValve=require(a0_0x21e2('0x7'));module['exports']=_0x5451fe=>{let _0x4184d1=_0x5451fe['payload'],_0x278f57=_0x5451fe[a0_0x21e2('0x1')],_0x277867,_0x40012f={'id':a0_0x21e2('0x12'),'measures':[],'parameters':[],'events':[]};function _0xe798cf(_0x304bc3,_0x5d4693){for(let _0x83574c=0x0;_0x83574c<0x4;_0x83574c++){let _0x5dc977=0x10<<_0x83574c;(_0x5dc977&_0x304bc3)===_0x5dc977&&_0x40012f[a0_0x21e2('0xf')][a0_0x21e2('0x8')]({'timestamp':_0x5d4693,'id':a0_0x21e2('0x5')+_0x83574c+a0_0x21e2('0xe'),'value':0x1&_0x304bc3>>_0x83574c});}}if(undefined===_0x5451fe['isRecover']){_0x40012f['measures'][a0_0x21e2('0x8')]({'id':a0_0x21e2('0xd'),'timestamp':_0x278f57-0x0,'value':Math[a0_0x21e2('0x0')](_0x4184d1[0x0]/2.54)}),_0x40012f[a0_0x21e2('0xb')][a0_0x21e2('0x8')]({'id':'rx_timestamp','value':0x1*_0x278f57}),_0x40012f['parameters'][a0_0x21e2('0x8')]({'id':a0_0x21e2('0x2'),'value':Buffer[a0_0x21e2('0x9')]([Buffer[a0_0x21e2('0x3')](0x1,0x0),_0x4184d1[a0_0x21e2('0xa')](0x1,0x4)])['readUInt32BE']()}),_0x4184d1=_0x4184d1[a0_0x21e2('0xa')](0x4);let _0x138500=_0x4184d1[0x0]&0x7;_0x4184d1=_0x4184d1[a0_0x21e2('0xa')](0x1);for(let _0x3ba263=0x0;_0x3ba263<_0x138500;_0x3ba263++){let _0x4fb5c2=statusValve(_0x4184d1[0x0],_0x40012f,_0x278f57-0x0);_0x4184d1=_0x4184d1[a0_0x21e2('0xa')](0x1),_0x277867=ebv[a0_0x21e2('0x6')](_0x4184d1),_0x4184d1=_0x277867[a0_0x21e2('0x11')],_0x40012f[a0_0x21e2('0x14')][a0_0x21e2('0x8')]({'timestamp':_0x278f57-0x0,'id':a0_0x21e2('0x5')+_0x4fb5c2+'_remaining','value':_0x277867['value']});}}_0x277867=ebv[a0_0x21e2('0x6')](_0x4184d1);const _0x3abf71=_0x277867[a0_0x21e2('0x10')];_0x4184d1=_0x277867[a0_0x21e2('0x11')],_0x278f57-=_0x3abf71*0x3e8,_0x277867=ebv[a0_0x21e2('0x6')](_0x4184d1);const _0x37c9de=_0x277867['value'];_0x4184d1=_0x277867[a0_0x21e2('0x11')],_0xe798cf(_0x4184d1[0x0],_0x278f57);let _0x53d8c2=_0x4184d1[a0_0x21e2('0x13')](0x1);_0x40012f[a0_0x21e2('0xf')]['push']({'timestamp':_0x278f57,'id':'raw_index','value':_0x53d8c2}),_0x4184d1=_0x4184d1['slice'](0x5);while(0x0<_0x4184d1['length']){_0x278f57-=_0x37c9de*0x3e8,_0xe798cf(_0x4184d1[0x0],_0x278f57),_0x4184d1=_0x4184d1[a0_0x21e2('0xa')](0x1),_0x277867=ebv[a0_0x21e2('0x6')](_0x4184d1),_0x4184d1=_0x277867['data'];let _0x5aea63={'id':a0_0x21e2('0x4'),'timestamp':_0x278f57,'value':_0x53d8c2-_0x277867['value']};_0x40012f[a0_0x21e2('0xf')][a0_0x21e2('0x8')](_0x5aea63),_0x53d8c2=_0x5aea63[a0_0x21e2('0x10')];}return _0x40012f;};