(function(){setTimeout(function(){document.onkeydown=function(event){KY.uI(event)}},500);var div=$T.A(J.bD);KY={eN:[],div:div,icon:$T.A(J.bD),dm:$T.A(div,{overflowY:'auto'}),input:$T.A(div),select: -1,wK:'',shortcut:1,om:0,resize:function(){$T.M(KY.div,{l:J.cD-83-B.adjust,t:B.iP?J.ek(0):(window.TI?J.ek(3)+2:J.ek(3)-33)});$T.M(KY.icon,{l:J.cD-50-B.adjust,t:J.eg-32-B.adjust/2})},zM:function(a){var ac=KY.eN[a];if(ac[4]){$T.ei(ac[4])}if(ac[2]){LB.aQ(ac[2],1)}if(ac[3]){$T.ei(ac[3])}},mG:function(){if(KY.select> -1){var z=KY.fe.rows[KY.select].aD;if(!$T.aW(z)||z.length<7){KY.zM(z);}else{LB.aH='GG';LB.yF='T'==J.aH?'K':'T';ChangeGw(z);LB.aQ('K'==J.aH?'K':'T');}}else if(!GW.ah&&/^\d{6}$/.test(KY.value())){ChangeGw(KY.value());}else if(KY.value()!=''){}else if('K'==J.aH){LB.yF='T';LB.aQ('T');}else if('T'==J.aH){LB.yF='K';LB.aQ('K');}else if($T.aN(K.div)&&$T.aN(T.div)){var z=T.div.style.zIndex;T.div.style.zIndex=K.div.style.zIndex;K.div.style.zIndex=z;LB.aH='GG';if(z>T.div.style.zIndex){LB.yF='K';}else{LB.yF='T';}LB.resize();}KY.ho('');},value:function(){return KY.input.innerHTML}};if(B.iP){$T.I(KY.icon,'<img src="img/keyboard.png" />');KY.icon.onclick=function(){$T.V(KY.input);}}else{$T.H(KY.input);}KY.pK=function(a,b,c,d,e){KY.eN.p([a,b,c,d,e])};KY.pK('Esc','��������','','$T.I(KY.input);KY.keyInput("")');KY.pK('~`','�����ʷ','','HIS.move()');!window.LB||KY.pK('\\','����˵�����','','LB.show()');KY.pK(']','��ݼ��嵥','','SCT.move()');!$T.aC|| !$T.aC.load||KY.pK('[','������Ч����','','J.bV = !J.bV');KY.pK('*','����ˢ�¼��','','$T.C(RF.div)');KY.pK('QP','����ˢ��','','J.reload()');KY.pK('P','��ͣˢ��','','RF.np("0")');KY.pK('R','����ˢ��','','RF.np("refresh")');KY.pK('F3','��֤��ʱ','','ChangeGw("S000001");LB.aQ("T")');KY.pK('F4','��֤��ʱ','','ChangeGw("Z399001");LB.aQ("T")');KY.pK('F5','K���л�','','LB.aQ(J.aH=="K"?"T":"K")');KY.pK('F6','��ѡ��','','LB.aQ("Z")');KY.pK('<font style="line-height:11px;font-size:11px">Page<br />Up</font>','��һͬ���','','KY.uI(0, 33)');KY.pK('<font style="line-height:11px;font-size:11px">Page<br />Down</font>','��һͬ���','','KY.uI(0, 34)');KY.pK('0','����','A');if(J.oj=='3'){KY.pK('11','����','A')}else if(J.oj=='7'){KY.pK('11','��������1','A','','J.face=8');KY.pK('12','��������2','A','','J.face=9');KY.pK('13','��������3','A','','J.face="A"');KY.pK('14','��������4','A','','J.face="B"');KY.pK('15','��������5','A','','J.face="C"');KY.pK('16','��������6','A','','J.face="D"');}else if(!J.ak){KY.pK('11','��������1','A','','J.face=2;LB.subvisit="A2";LB.img_func[3].click()');KY.pK('12','��������2','A','','J.face=3;LB.subvisit="A3";LB.img_func[3].click()');KY.pK('13','��������3','A','','J.face=4;LB.subvisit="A4";LB.img_func[3].click()');KY.pK('14','��������4','A','','J.face=6;LB.subvisit="A6";LB.img_func[3].click()');KY.pK('15','��������5','A','','J.face=7;LB.subvisit="A7";LB.img_func[3].click()');}J.oj!='3'||KY.pK('18','��������8','A','','J.face=1');KY.dm.onscroll=function(a){if(KY.fe.rows.length){$T.V(KY.dm);}else{KY.dm.onmouseout('onscroll'+a)}};KY.dm.onmouseover=function(){J.key=1;$T.bU(KY.om);};KY.dm.onmouseout=function(a){$T.bU(KY.om);J.jT=0;KY.om=setTimeout('$T.H(KY.div_key,"ky482")',$T.aF(a)?500:100)};KY.dm.id='searchresult';$T.I(KY.dm,'<table id="searchtable" class="cllps" width="100%" border="0" cellspacing="1" cellpadding="1"></table>');$T.H(KY.dm,'ky172');B.iP?$T.M(KY.dm,{l: -210,t:1,w:200+B.adjust,h:M.kC(235,J.eg-33)+B.adjust+B.adjust}):$T.M(KY.dm,{l: -126,t: -238-B.adjust-B.adjust,w:200+B.adjust,h:235+B.adjust+B.adjust});KY.div.style.zIndex=J.yD('KY');$T.M(KY.input,{l: -70,t:2,w:130+B.adjust,h:25+B.adjust,lineHeight:25+B.adjust+'px',color:'black'});KY.resize();KY.fe=$T.$('searchtable');KY.uI=function(a,b){var gv=window.event||a,z=b||gv.keyCode||gv.which;if(z==122)return;if(z==27){if($T.aN(KY.input,1)){KY.ho('')}if($T.aN(TG.div)){TG.close();}if(window.LOGIN&&$T.aN(LOGIN.div)){LOGIN.BC();}}if(J.jT==1|| !J.mv){return;}var y=String.fromCharCode(z>95&&z<106?z-48:z);if(gv.preventDefault){gv.stopPropagation();gv.preventDefault();}else{gv.cancelBubble=true;}if(/[A-Z0-9]/.test(y)){KY.ho(KY.value()+y);}else if(z==8){if(window.event){gv.returnValue=false;}var key=KY.value();if(key){KY.ho(key.substring(0,$T.ao(key)-1));}}else if(z==13||z==0){KY.mG();}else if(z==33){var a=J.oc(J.gwdm,1);if(a)ChangeGw(a[0]);}else if(z==34){var a=J.oc(J.gwdm,-1);if(a)ChangeGw(a[0]);}else if((z>=35&&z<=40)||z==107||z==109){if(KY.fe.rows.length<2|| !J.key){if($T.aN(K.div)&&J.dF!='T'){K.jq(z)}else if($T.aN(T.div)){T.jq(z)}}else{KY.tu(z)}}else if(z==45){if(window.Z)Z.update()}else if(z==59||z==186){T.kK();}else if(z==106){$T.C(RF.div);}else if(z==110){}else if(z==112){}else if(z==113){}else if(z==114){ChangeGw('S000001');LB.aQ('T');}else if(z==115){ChangeGw('Z399001');LB.aQ('T');}else if(z==116){LB.aH='GG';LB.yF='K'==J.aH?'T':'K';LB.aQ(J.aH=='K'?'T':'K');}else if(z==117){LB.aQ('Z');}else if(z==118){}else if(z==119){}else if(z==120){}else if(z==121){}else if(z==122){}else if(z==123){}else if(z==188){if(window.Z)Z.pageup()}else if(z==190){if(window.Z)Z.rM()}else if(z==192){if(HIS)HIS.move();}else if(z==219){J.bV= !J.bV;}else if(z==220){LB.show();}else if(z==221){if(SCT)SCT.move();}};KY.ho=function(key){var Bm=key.length;if(Bm>7)return;$T.I(KY.input,key);if(key){$T.V(KY.input,1);}else{$T.H(KY.input,1);}KY.wK=key;J.key=1;var ez=KY.fe;J.lk(ez);KY.select= -1;var r=0;if(Bm>0&&Bm<5){KY.shortcut=1;var cQ=KY.eN.length;for(var i=0;i<cQ;i++){if(KY.eN[i][0].substring(0,Bm)==key){for(var j=i;j<cQ&&j<i+100;j++){bo=ez.insertRow(ez.rows.length);bo.aD=j;bo.onclick=function(){KY.zM(this.aD);$T.I(KY.input,'');J.lk(KY.fe);KY.select= -1;J.key=0;KY.dm.onmouseout('onclick')};J.nn(bo,KY.eN[j][0]);J.nn(bo,KY.eN[j][1]);if(Bm>2)break;}KY.hZ(0);}}}if(Bm>1&&Bm<8){var bo,bO,bB,af=GW.data,i=GW.ah,j=0;while(i-- &&j<30){bB=af[i];if((!isNaN(key)&&$T.find(bB[0],key))||(isNaN(key)&&($T.find(bB[1],key)||$T.find(bB[2],key)))){bo=ez.insertRow(ez.rows.length);bo.style.cursor="pointer";bo.aD=bB[0];bo.aT=bB[1];bo.onclick=function(){ChangeGw(this.aD);KY.ho('');$T.H(KY.dm);};bO=bo.insertCell(bo.cells.length);$T.I(bO,bo.aD.substring(1));bO=bo.insertCell(bo.cells.length);$T.I(bO,bo.aT);j++}}if(j){KY.shortcut=0;KY.hZ(0)}else{J.key=0}}KY.dm.onscroll('KY.ho')};KY.tu=function(a){var ah=KY.fe.rows.length;if(a==37||a==38){KY.hZ((KY.select-1+ah)%ah)}else if(a==39||a==40){KY.hZ((KY.select+1)%ah)}else if((a==33||a==36)&&KY.select>0){KY.hZ(0)}else if((a==34||a==35)&&KY.select<ah-1){KY.hZ(ah-1)}};KY.hZ=function(a){if(KY.select> -1&&KY.fe.rows.length>KY.select){KY.fe.rows[KY.select].className='';}KY.select=a;KY.fe.rows[a].className='zxggroup2';KY.dm.scrollTop=(a-5)*23;KY.dm.onscroll('KY.hZ')}})();