const a0_0x45b7=['migration_delay','Temperature','humidity_highthreshold_activation','log_period,\x20log_tx_period,\x20log_tx_random_activation,redundancy_factor','high\x20threshold\x20untrigger\x20value','log_tx_period','restart_frames_number','Redundancy\x20factor\x20[1..23]','HEXSTR(16)','INT_16','humidity','temperature\x20high\x20threshold\x20validation\x20duration\x20[0..65535]','humidity_lowthreshold_activation','minute','temperature_highthreshold_trigger','Humidity','Back\x20to\x20normal\x20from\x20temperature\x20high\x20threshold','temperature\x20low\x20threshold\x20activation','high\x20threshold\x20trigger\x20value','humidity_highthreshold_trigger','INT_32','highthreshold_untrigger_temp','Low\x20threshold\x20overrun','2.0','highthreshold_trigger_temp,\x20highthreshold_untrigger_temp','request_cancel_migration','%RH','humidity\x20low\x20threshold\x20validation\x20duration\x20[0..65535]','FPort','internal_clock_activation','SenlabH','request_network_migration','appEui,\x20appKey,\x20migration_delay','Log\x20transmission\x20shift\x20(multiple\x20of\x20log_period)','RESET\x20BATTERY\x20LEVEL\x20(indoor\x20references\x20only)','lowthreshold_untrigger_temp','min','temperature\x20high\x20threshold\x20release','temperature\x20low\x20threshold\x20release','request_get_version','humidity_lowthreshold_backtonormal','STOP\x20HIGH\x20THRESHOLD\x20DETECTION\x20(version<=1.x)','WRITE\x20DATALOG\x20CFG','measures','encode','humidity\x20high\x20threshold\x20overrun','log_tx_random_activation','internal_clock_correction','humidity_lowthreshold_release','request_internal_clock_activation','High\x20threshold\x20overrun','humidity_highthreshold_release','log_tx_shift','Battery\x20current\x20level','temperature_lowthreshold_backtonormal','request_stop_highthreshold_detection','Measure\x20Read\x20Period\x20for\x20alarm\x20detection\x20[1..600]','INT_8','redundancy_factor','humidity\x20high\x20threshold\x20release','appKey','Log\x20transmission\x20period\x20[3..1440]','humidity\x20high\x20threshold\x20trigger','low\x20threshold\x20trigger\x20value','Clock\x20drift\x20compensation\x20[-15..15]','FLOAT','GET\x20FW\x20VERSION\x20(version>=1.3)','AppEUI/JoinEUI\x20for\x20the\x20new\x20network','measure_read_period','Internal\x20clock\x20correction','appEui','request_join_configuration','timestamp','temperature_lowthreshold_release','request_shift_log','REQUEST\x20ALARMS\x20CONFIGURATION\x20(version>=2.0)','temperature_lowthreshold_activation','measure_read_period,\x20alarms_retransmissions_number,\x20temperature_highthreshold_activation,\x20temperature_highthreshold_validation_duration,\x20temperature_highthreshold_trigger,\x20temperature_highthreshold_release,\x20temperature_lowthreshold_activation,\x20temperature_lowthreshold_validation_duration,\x20temperature_lowthreshold_trigger,\x20temperature_lowthreshold_release,\x20humidity_highthreshold_activation,\x20humidity_highthreshold_validation_duration,\x20humidity_highthreshold_trigger,\x20humidity_highthreshold_release,\x20humidity_lowthreshold_activation,\x20humidity_lowthreshold_validation_duration,\x20humidity_lowthreshold_trigger,\x20humidity_lowthreshold_release','Loop\x20waiting\x20factor\x20[1..128]','request_stop_application','temperature\x20high\x20threshold\x20overrun','humidity\x20high\x20threshold\x20activation','backtonormal_overrun','UINT_8','Start\x20event','push','temperature_highthreshold_activation','SHIFT\x20LOG\x20(version>=2.0)','STOP\x20APPLICATION','temperature\x20low\x20threshold\x20overrun','undecoded\x20payload','request_start_highthreshold_detection','log_period','decode','log_period,\x20log_tx_shift','(Re)Start\x20messages\x20number\x20[1..24]','loop_weigthing_factor','alarms_retransmissions_number','SHIFT\x20LOG\x20TRANSMISSION','highthreshold_trigger_temp','log_shift','temperature\x20high\x20threshold\x20trigger','parameters','humidity\x20low\x20threshold\x20trigger','UINT_16','humidity_highthreshold_backtonormal','REQUEST\x20NETWORK\x20MIGRATION\x20(version>=2.0)','temperature_lowthreshold_validation_duration','lowthreshold_overrun','humidity\x20low\x20threshold\x20overrun','Senlab\x20humidity','describe','temperature_lowthreshold_overrun','REQUEST\x20INTERNAL\x20CLOCK\x20CORRECTION\x20(version>=2.0)','loop_maximum_delay','Alarms\x20retransmissions\x20number\x20[0..3]','clock_drift_compensation','unshift','START\x20LOW\x20THRESHOLD\x20DETECTION\x20(version<=1.x)','humidity_lowthreshold_trigger','Back\x20to\x20normal\x20from\x20humidity\x20low\x20threshold','second','error','REQUEST\x20INTERNAL\x20CLOCK\x20ACTIVATION\x20(version>=2.0)','Loop\x20maximum\x20delay\x20[1..65535]','humidity_lowthreshold_overrun','../parser','BOOL','STOP\x20LOW\x20THRESHOLD\x20DETECTION\x20(version<=1.x)','../encoder','temperature_highthreshold_validation_duration','events','value','lowthreshold_trigger_temp,\x20lowthreshold_untrigger_temp','temperature','request_clock_drift_compensation','REQUEST\x20CLOCK\x20DRIFT\x20COMPENSATION\x20(version>=2.0)','highthreshold_overrun','REQUEST\x20JOIN\x20CONFIGURATION\x20(version>=2.0)','low\x20threshold\x20untrigger\x20value'];(function(_0xa6e1de,_0x45b71f){const _0x737cba=function(_0x3dbe35){while(--_0x3dbe35){_0xa6e1de['push'](_0xa6e1de['shift']());}};_0x737cba(++_0x45b71f);}(a0_0x45b7,0x8f));const a0_0x737c=function(_0xa6e1de,_0x45b71f){_0xa6e1de=_0xa6e1de-0x0;let _0x737cba=a0_0x45b7[_0xa6e1de];return _0x737cba;};const parser=require(a0_0x737c('0x7b')),encoder=require(a0_0x737c('0x7e')),knownPrefix=['03','23','81','83','84','85','89','8a','8b','8c'];exports[a0_0x737c('0x5a')]=function(_0x16ec1b){let _0x24b15e=parser(_0x16ec1b);if(_0x24b15e[a0_0x737c('0x77')])return _0x24b15e;else{let _0x1b3ec2={'firmwareType':a0_0x737c('0x1b'),'id':_0x24b15e['id'],'measures':[],'parameters':[],'events':[]};if(_0x16ec1b[a0_0x737c('0x19')]===0x2||_0x16ec1b[a0_0x737c('0x19')]===0x3){if(-0x1<knownPrefix['indexOf'](_0x24b15e['frameID']))for(let _0x37d47d in _0x24b15e['measures']){let _0x4ad2e8=_0x24b15e['measures'][_0x37d47d];_0x4ad2e8['id']?_0x1b3ec2[a0_0x737c('0x28')][a0_0x737c('0x52')](_0x4ad2e8):(_0x1b3ec2[a0_0x737c('0x28')][a0_0x737c('0x72')]({'id':a0_0x737c('0x7'),'timestamp':_0x4ad2e8[a0_0x737c('0x45')],'value':Math['max'](0x0,Math[a0_0x737c('0x21')](_0x4ad2e8[a0_0x737c('0x81')][0x1],0x64))}),-0x2d0<_0x4ad2e8[a0_0x737c('0x81')][0x0]&&_0x4ad2e8[a0_0x737c('0x81')][0x0]<0x7d0&&_0x1b3ec2['measures']['unshift']({'id':a0_0x737c('0x83'),'timestamp':_0x4ad2e8[a0_0x737c('0x45')],'value':_0x4ad2e8[a0_0x737c('0x81')][0x0]/0x10}));}else return{'error':a0_0x737c('0x57'),'reason':'unknown\x20prefix\x20for\x20this\x20firmwareType','prefix':_0x24b15e['frameID'],'port':_0x16ec1b[a0_0x737c('0x19')]};}for(let _0x2e7a2a in _0x24b15e[a0_0x737c('0x63')]){let _0x280ad0=_0x24b15e[a0_0x737c('0x63')][_0x2e7a2a];_0x280ad0['id']&&_0x1b3ec2[a0_0x737c('0x63')][a0_0x737c('0x52')](_0x280ad0);}for(let _0x282c1e in _0x24b15e[a0_0x737c('0x80')]){let _0x4b47b0=_0x24b15e[a0_0x737c('0x80')][_0x282c1e];_0x4b47b0['id']&&_0x1b3ec2[a0_0x737c('0x80')]['push'](_0x4b47b0);}return _0x1b3ec2;}},exports[a0_0x737c('0x29')]=function(_0x1d6539){return'request_alarms_configuration'===_0x1d6539['id']?(_0x1d6539['id']='senlabh_request_alarms_configuration',encoder(_0x1d6539)):encoder(_0x1d6539);},exports[a0_0x737c('0x28')]=()=>[a0_0x737c('0x83'),'humidity'],exports[a0_0x737c('0x6c')]=()=>({'id':'SenlabH','name':a0_0x737c('0x6b'),'version':a0_0x737c('0x14'),'parameters':[{'id':a0_0x737c('0x59'),'name':'Log\x20period\x20[1..1440]','unit':a0_0x737c('0xa'),'is':a0_0x737c('0x65')},{'id':a0_0x737c('0x2'),'name':a0_0x737c('0x3a'),'unit':a0_0x737c('0xa'),'is':a0_0x737c('0x65')},{'id':a0_0x737c('0x2b'),'name':'Log\x20transmission\x20random\x20activation','unit':null,'is':'BOOL'},{'id':a0_0x737c('0x31'),'name':a0_0x737c('0x1e'),'unit':'minute','is':a0_0x737c('0x65')},{'id':a0_0x737c('0x37'),'name':a0_0x737c('0x4'),'unit':null,'is':a0_0x737c('0x50')},{'id':a0_0x737c('0x60'),'name':a0_0x737c('0xf'),'unit':'°C','is':a0_0x737c('0x3e')},{'id':a0_0x737c('0x12'),'name':a0_0x737c('0x1'),'unit':'°C','is':'FLOAT'},{'id':'lowthreshold_trigger_temp','name':a0_0x737c('0x3c'),'unit':'°C','is':a0_0x737c('0x3e')},{'id':a0_0x737c('0x20'),'name':a0_0x737c('0x88'),'unit':'°C','is':'FLOAT'},{'id':a0_0x737c('0x61'),'name':'Delta\x20for\x20shifting\x20log\x20acquisition\x20[-32767..32767]','unit':a0_0x737c('0x76'),'is':a0_0x737c('0x6')},{'id':a0_0x737c('0x41'),'name':a0_0x737c('0x35'),'unit':a0_0x737c('0x76'),'is':a0_0x737c('0x65')},{'id':a0_0x737c('0x5e'),'name':a0_0x737c('0x70'),'unit':null,'is':'UINT_8'},{'id':a0_0x737c('0x53'),'name':'temperature\x20high\x20threshold\x20activation','unit':null,'is':a0_0x737c('0x7c')},{'id':a0_0x737c('0x7f'),'name':a0_0x737c('0x8'),'unit':'second','is':a0_0x737c('0x65')},{'id':a0_0x737c('0xb'),'name':a0_0x737c('0x62'),'unit':'°C','is':'FLOAT'},{'id':'temperature_highthreshold_release','name':a0_0x737c('0x22'),'unit':'°C','is':a0_0x737c('0x3e')},{'id':a0_0x737c('0x49'),'name':a0_0x737c('0xe'),'unit':null,'is':'BOOL'},{'id':a0_0x737c('0x68'),'name':'temperature\x20low\x20threshold\x20validation\x20duration\x20[0..65535]','unit':'second','is':a0_0x737c('0x65')},{'id':'temperature_lowthreshold_trigger','name':'temperature\x20low\x20threshold\x20trigger','unit':'°C','is':a0_0x737c('0x3e')},{'id':a0_0x737c('0x46'),'name':a0_0x737c('0x23'),'unit':'°C','is':'FLOAT'},{'id':a0_0x737c('0x8b'),'name':a0_0x737c('0x4e'),'unit':null,'is':a0_0x737c('0x7c')},{'id':'humidity_highthreshold_validation_duration','name':'humidity\x20high\x20threshold\x20validation\x20duration\x20[0..65535]','unit':a0_0x737c('0x76'),'is':a0_0x737c('0x65')},{'id':a0_0x737c('0x10'),'name':a0_0x737c('0x3b'),'unit':a0_0x737c('0x17'),'is':a0_0x737c('0x50')},{'id':a0_0x737c('0x30'),'name':a0_0x737c('0x38'),'unit':a0_0x737c('0x17'),'is':a0_0x737c('0x50')},{'id':a0_0x737c('0x9'),'name':'humidity\x20low\x20threshold\x20activation','unit':null,'is':a0_0x737c('0x7c')},{'id':'humidity_lowthreshold_validation_duration','name':a0_0x737c('0x18'),'unit':a0_0x737c('0x76'),'is':'UINT_16'},{'id':a0_0x737c('0x74'),'name':a0_0x737c('0x64'),'unit':a0_0x737c('0x17'),'is':a0_0x737c('0x50')},{'id':a0_0x737c('0x2d'),'name':'humidity\x20low\x20threshold\x20release','unit':a0_0x737c('0x17'),'is':'UINT_8'},{'id':'initial_attempts_number','name':'Initial\x20attempts\x20number\x20[1..24]','unit':null,'is':a0_0x737c('0x50')},{'id':a0_0x737c('0x6f'),'name':a0_0x737c('0x79'),'unit':a0_0x737c('0xa'),'is':'UINT_16'},{'id':a0_0x737c('0x5d'),'name':a0_0x737c('0x4b'),'unit':null,'is':'UINT_8'},{'id':a0_0x737c('0x3'),'name':a0_0x737c('0x5c'),'unit':null,'is':a0_0x737c('0x50')},{'id':a0_0x737c('0x43'),'name':a0_0x737c('0x40'),'unit':null,'is':a0_0x737c('0x5')},{'id':a0_0x737c('0x39'),'name':'AppKey\x20for\x20the\x20new\x20network','unit':null,'is':'\x20HEXSTR(32)'},{'id':a0_0x737c('0x89'),'name':'Migration\x20delay\x20[1..65535]','unit':a0_0x737c('0xa'),'is':'UINT_16'},{'id':a0_0x737c('0x1a'),'name':'Internal\x20clock\x20activation','unit':null,'is':a0_0x737c('0x7c')},{'id':a0_0x737c('0x2c'),'name':a0_0x737c('0x42'),'unit':a0_0x737c('0x76'),'is':a0_0x737c('0x11')},{'id':'clock_drift_compensation','name':a0_0x737c('0x3d'),'unit':'second/day','is':a0_0x737c('0x36')}],'measures':[{'id':'battery_current_level','name':a0_0x737c('0x32'),'unit':'%','is':a0_0x737c('0x50')},{'id':a0_0x737c('0x83'),'name':a0_0x737c('0x8a'),'unit':'°C','is':'FLOAT'},{'id':a0_0x737c('0x7'),'name':a0_0x737c('0xc'),'unit':'%','is':a0_0x737c('0x36')}],'events':[{'id':'start_event','name':a0_0x737c('0x51'),'unit':null,'is':a0_0x737c('0x7c')},{'id':a0_0x737c('0x86'),'name':a0_0x737c('0x2f'),'unit':null,'is':a0_0x737c('0x7c')},{'id':a0_0x737c('0x69'),'name':a0_0x737c('0x13'),'unit':null,'is':'BOOL'},{'id':a0_0x737c('0x4f'),'name':'Back\x20to\x20normal','unit':null,'is':a0_0x737c('0x7c')},{'id':'temperature_highthreshold_backtonormal','name':a0_0x737c('0xd'),'unit':'°C','is':'FLOAT'},{'id':'temperature_highthreshold_overrun','name':a0_0x737c('0x4d'),'unit':'°C','is':a0_0x737c('0x3e')},{'id':a0_0x737c('0x6d'),'name':a0_0x737c('0x56'),'unit':'°C','is':a0_0x737c('0x3e')},{'id':a0_0x737c('0x33'),'name':'Back\x20to\x20normal\x20from\x20temperature\x20low\x20threshold','unit':'°C','is':'FLOAT'},{'id':a0_0x737c('0x66'),'name':'Back\x20to\x20normal\x20from\x20humidity\x20high\x20threshold','unit':'%RH','is':a0_0x737c('0x50')},{'id':'humidity_highthreshold_overrun','name':a0_0x737c('0x2a'),'unit':a0_0x737c('0x17'),'is':a0_0x737c('0x50')},{'id':a0_0x737c('0x7a'),'name':a0_0x737c('0x6a'),'unit':a0_0x737c('0x17'),'is':a0_0x737c('0x50')},{'id':a0_0x737c('0x25'),'name':a0_0x737c('0x75'),'unit':'%RH','is':'UINT_8'}],'operations':[{'id':'request_write_datalog_cfg','name':a0_0x737c('0x27'),'in':a0_0x737c('0x0')},{'id':'request_shift_log_tx','name':a0_0x737c('0x5f'),'in':a0_0x737c('0x5b')},{'id':'request_reset_battery_level','name':a0_0x737c('0x1f'),'in':null},{'id':a0_0x737c('0x58'),'name':'START\x20HIGH\x20THRESHOLD\x20DETECTION\x20(version<=1.x)','in':a0_0x737c('0x15')},{'id':a0_0x737c('0x34'),'name':a0_0x737c('0x26'),'in':null},{'id':'request_start_lowthreshold_detection','name':a0_0x737c('0x73'),'in':a0_0x737c('0x82')},{'id':'request_stop_lowthreshold_detection','name':a0_0x737c('0x7d'),'in':null},{'id':a0_0x737c('0x4c'),'name':a0_0x737c('0x55'),'in':null},{'id':a0_0x737c('0x24'),'name':a0_0x737c('0x3f'),'in':null},{'id':a0_0x737c('0x47'),'name':a0_0x737c('0x54'),'in':a0_0x737c('0x61')},{'id':'request_alarms_configuration','name':a0_0x737c('0x48'),'in':a0_0x737c('0x4a')},{'id':a0_0x737c('0x44'),'name':a0_0x737c('0x87'),'in':'initial_attempts_number,\x20loop_maximum_delay,\x20loop_weigthing_factor,\x20restart_frames_number'},{'id':a0_0x737c('0x1c'),'name':a0_0x737c('0x67'),'in':a0_0x737c('0x1d')},{'id':a0_0x737c('0x16'),'name':'REQUEST\x20CANCEL\x20MIGRATION\x20(version>=2.0)','in':null},{'id':a0_0x737c('0x2e'),'name':a0_0x737c('0x78'),'in':'internal_clock_activation'},{'id':'request_internal_clock_correction','name':a0_0x737c('0x6e'),'in':a0_0x737c('0x2c')},{'id':a0_0x737c('0x84'),'name':a0_0x737c('0x85'),'in':a0_0x737c('0x71')}]});