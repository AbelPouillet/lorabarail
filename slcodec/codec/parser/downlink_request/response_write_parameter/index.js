const a0_0x1cde=['readInt16BE','flowrate2_highthreshold_release','interpulse2_highthreshold_release','highthreshold_untrigger_temp','optional_features_stop','flowrate_highthreshold_release','flowrate_highthreshold_trigger','max_latency','../../utils/pulse_configuration','lowthreshold_untrigger_temp','flowrate2_highthreshold_validation_duration','valves_profiles_configuration','restart_frames_number','parameters','push','log_tx_period','toLowerCase','response_write_parameter','open_debounce','stream','highthreshold_trigger_temp','initial_attempts_number','exports','is_open_enable','max_num_events','interpulse_highthreshold_trigger','flowrate_highthreshold_validation_duration','functional_mode','keep_alive','interpulse2_highthreshold_trigger','payload','redundancy_factor','readUInt16BE','length','is_close_enable','log_period','loop_maximum_delay','readUInt32BE','existsSync','loop_weigthing_factor','log_tx_random_offset','../../utils/highThresholdConfiguration','readUInt8','activate_application','../../utils/optionalFeaturesConfiguration','divider','firmwareType','slice','optional_features_start','daily_link_check','valve_program_configuration'];(function(_0x3f0f28,_0x1cde87){const _0x248f5b=function(_0x31f61c){while(--_0x31f61c){_0x3f0f28['push'](_0x3f0f28['shift']());}};_0x248f5b(++_0x1cde87);}(a0_0x1cde,0x16d));const a0_0x248f=function(_0x3f0f28,_0x1cde87){_0x3f0f28=_0x3f0f28-0x0;let _0x248f5b=a0_0x1cde[_0x3f0f28];return _0x248f5b;};const fs=require('fs'),pulseConfiguration=require(a0_0x248f('0x0')),optionalFeaturesConfiguration=require(a0_0x248f('0x24')),highThresholdConfiguration=require(a0_0x248f('0x21')),lowThresholdConfiguration=require('../../utils/lowThresholdConfiguration'),highThreshold2Configuration=require('../../utils/highThreshold2Configuration'),lowThreshold2Configuration=require('../../utils/lowThreshold2Configuration');module[a0_0x248f('0xe')]=_0xb6da3d=>{var _0x10eccd={'id':a0_0x248f('0x9'),'parameters':[]};let _0x445271=_0xb6da3d[a0_0x248f('0x16')];if(null!=_0xb6da3d[a0_0x248f('0x26')]&&fs[a0_0x248f('0x1e')]('./'+_0xb6da3d[a0_0x248f('0x26')][a0_0x248f('0x8')]()))_0x10eccd[a0_0x248f('0x5')]=require('./'+_0xb6da3d[a0_0x248f('0x26')]['toLowerCase']())(_0x445271);else{if(0x0===_0x445271[0x0]){_0x445271=_0x445271[a0_0x248f('0x27')](0x1);while(0x1<_0x445271[a0_0x248f('0x19')]){switch(_0x445271[0x0]){case 0x1:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x1b'),'value':0x2*_0x445271[a0_0x248f('0x18')](0x1)/0x3c}),_0x445271=_0x445271[a0_0x248f('0x27')](0x5);break;case 0x2:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x7'),'value':0x2*_0x445271['readUInt16BE'](0x1)/0x3c}),_0x445271=_0x445271[a0_0x248f('0x27')](0x5);break;case 0x3:_0x10eccd['parameters'][a0_0x248f('0x6')]({'id':a0_0x248f('0x28'),'value':_0x445271[a0_0x248f('0x18')](0x3)}),_0x10eccd[a0_0x248f('0x5')]['push']({'id':a0_0x248f('0x2f'),'value':_0x445271[a0_0x248f('0x18')](0x1)}),_0x445271=_0x445271[a0_0x248f('0x27')](0x5);break;case 0x4:_0x10eccd['parameters']['push']({'id':a0_0x248f('0xc'),'value':_0x445271[a0_0x248f('0x2b')](0x1)/0x10}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x2e'),'value':_0x445271[a0_0x248f('0x2b')](0x3)/0x10}),_0x445271=_0x445271[a0_0x248f('0x27')](0x5);break;case 0x5:_0x10eccd[a0_0x248f('0x5')]['push']({'id':'lowthreshold_trigger_temp','value':_0x445271[a0_0x248f('0x2b')](0x1)/0x10}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x1'),'value':_0x445271[a0_0x248f('0x2b')](0x3)/0x10}),_0x445271=_0x445271[a0_0x248f('0x27')](0x5);break;case 0x7:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x23'),'value':_0x445271[0x1]}),_0x445271=_0x445271['slice'](0x2);break;case 0x9:_0x10eccd['parameters'][a0_0x248f('0x6')]({'id':a0_0x248f('0x20'),'value':0x2*_0x445271[a0_0x248f('0x18')](0x1)}),_0x445271=_0x445271[a0_0x248f('0x27')](0x3);break;case 0xa:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x29'),'value':_0x445271[0x1]}),_0x445271=_0x445271[a0_0x248f('0x27')](0x2);break;case 0xb:_0x10eccd['parameters'][a0_0x248f('0x6')]({'id':a0_0x248f('0x17'),'value':_0x445271[a0_0x248f('0x22')](0x1)}),_0x445271=_0x445271['slice'](0x2);break;case 0x30:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x25'),'value':_0x445271[0x1]}),_0x445271=_0x445271[a0_0x248f('0x27')](0x2);break;case 0x31:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x14'),'value':_0x445271[0x1]}),_0x445271=_0x445271[a0_0x248f('0x27')](0x2);break;case 0x32:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0xf'),'value':(_0x445271[0x1]&0x2)===0x2}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x1a'),'value':(_0x445271[0x1]&0x1)===0x1}),_0x445271=_0x445271['slice'](0x2);break;case 0x33:_0x10eccd['parameters'][a0_0x248f('0x6')]({'id':a0_0x248f('0x10'),'value':_0x445271[0x1]+0x1}),_0x445271=_0x445271[a0_0x248f('0x27')](0x2);break;case 0x34:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x32'),'value':_0x445271[a0_0x248f('0x18')](0x1)}),_0x445271=_0x445271[a0_0x248f('0x27')](0x3);break;case 0x35:_0x10eccd[a0_0x248f('0x5')]['push']({'id':a0_0x248f('0xa'),'value':_0x445271[0x1]}),_0x445271=_0x445271['slice'](0x2);break;case 0x36:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':'close_debounce','value':_0x445271[0x1]}),_0x445271=_0x445271[a0_0x248f('0x27')](0x2);break;case 0x37:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x13'),'value':_0x445271[0x1]?'datalog':a0_0x248f('0xb')}),_0x445271=_0x445271[a0_0x248f('0x27')](0x2);break;case 0x38:_0x10eccd['parameters'][a0_0x248f('0x6')]({'id':'measure_read_period','value':_0x445271['readUInt16BE'](0x1)}),_0x445271=_0x445271[a0_0x248f('0x27')](0x3);break;case 0x39:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x2a'),'value':'OK'}),_0x445271=_0x445271[a0_0x248f('0x27')](_0x445271['length']);break;case 0x40:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x3'),'value':'OK'}),_0x445271=_0x445271[a0_0x248f('0x27')](0x12);break;case 0x41:let _0x44f5b6={'inputMask':_0x445271[0x1]&0x3,'debounceMask':_0x445271[0x1]>>0x4,'samplePeriod':_0x445271[0x2]};_0x10eccd=pulseConfiguration(_0x44f5b6,_0x10eccd),_0x445271=_0x445271[a0_0x248f('0x27')](0x4);break;case 0x43:let _0x3d33c={'maskOff':_0x445271['readUInt16BE'](0x1),'maskOn':_0x445271['readUInt16BE'](0x3)};_0x10eccd=optionalFeaturesConfiguration(_0xb6da3d[a0_0x248f('0x26')][a0_0x248f('0x8')](),_0x3d33c,_0x10eccd),_0x445271=_0x445271[a0_0x248f('0x27')](0x5);break;case 0x44:let _0x461ada={'trigger':_0x445271[a0_0x248f('0x2b')](0x1),'release':_0x445271['readInt16BE'](0x3),'validationDuration':_0x445271['readUInt16BE'](0x5)};_0x10eccd=highThresholdConfiguration(_0xb6da3d[a0_0x248f('0x26')][a0_0x248f('0x8')](),_0x461ada,_0x10eccd),_0x445271=_0x445271[a0_0x248f('0x27')](0x7);break;case 0x45:let _0x501e81={'trigger':_0x445271[a0_0x248f('0x2b')](0x1),'release':_0x445271['readInt16BE'](0x3),'validationDuration':_0x445271[a0_0x248f('0x18')](0x5)};_0x10eccd=lowThresholdConfiguration(_0xb6da3d['firmwareType']['toLowerCase'](),_0x501e81,_0x10eccd),_0x445271=_0x445271[a0_0x248f('0x27')](0x7);break;case 0x46:let _0x2a2c1b={'trigger':_0x445271[a0_0x248f('0x2b')](0x1),'release':_0x445271[a0_0x248f('0x2b')](0x3),'validationDuration':_0x445271['readUInt16BE'](0x5)};_0x10eccd=highThreshold2Configuration(_0xb6da3d[a0_0x248f('0x26')][a0_0x248f('0x8')](),_0x2a2c1b,_0x10eccd),_0x445271=_0x445271['slice'](0x7);break;case 0x47:let _0x2fdda7={'trigger':_0x445271[a0_0x248f('0x2b')](0x1),'release':_0x445271['readInt16BE'](0x3),'validationDuration':_0x445271[a0_0x248f('0x18')](0x5)};_0x10eccd=lowThreshold2Configuration(_0xb6da3d['firmwareType'][a0_0x248f('0x8')](),_0x2fdda7,_0x10eccd),_0x445271=_0x445271['slice'](0x7);break;case 0x48:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':'alarms_retransmissions_number','value':_0x445271[0x1]}),_0x445271=_0x445271['slice'](0x2);break;case 0x49:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x11'),'value':_0x445271[a0_0x248f('0x1d')](0x1)}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':'interpulse_highthreshold_release','value':_0x445271[a0_0x248f('0x1d')](0x5)}),_0x445271=_0x445271[a0_0x248f('0x27')](0x9);break;case 0x4a:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x31'),'value':_0x445271['readUInt32BE'](0x1)}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x30'),'value':_0x445271[a0_0x248f('0x1d')](0x5)}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x12'),'value':_0x445271['readUInt16BE'](0x9)}),_0x445271=_0x445271[a0_0x248f('0x27')](0xb);break;case 0x4b:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x15'),'value':_0x445271['readUInt32BE'](0x1)}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x2d'),'value':_0x445271[a0_0x248f('0x1d')](0x5)}),_0x445271=_0x445271[a0_0x248f('0x27')](0x9);break;case 0x4c:_0x10eccd['parameters'][a0_0x248f('0x6')]({'id':'flowrate2_highthreshold_trigger','value':_0x445271[a0_0x248f('0x1d')](0x1)}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x2c'),'value':_0x445271[a0_0x248f('0x1d')](0x5)}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x2'),'value':_0x445271['readUInt16BE'](0x9)}),_0x445271=_0x445271[a0_0x248f('0x27')](0xb);break;case 0x4d:_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x4'),'value':_0x445271[0x1]}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0xd'),'value':_0x445271[0x2]}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x1c'),'value':_0x445271[a0_0x248f('0x18')](0x3)}),_0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':a0_0x248f('0x1f'),'value':_0x445271[0x5]}),_0x445271=_0x445271[a0_0x248f('0x27')](0x8);break;default:return _0x10eccd;}}}else _0x10eccd[a0_0x248f('0x5')][a0_0x248f('0x6')]({'id':'KO','value':0x0});}return _0x10eccd;};