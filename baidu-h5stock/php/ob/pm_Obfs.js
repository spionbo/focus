(function(){J.cY.O={A1:'1,0',A2:'3,0',A4:'1,0',A5:'3,1',A6:'3,1.5,1,1.5',A7:'0,1.5,1,1.5',O:'0,1.5,4,1.5,-2',B:'2,1.5,1,1.5'};J.fu.p(['O',J.ag('Statistics')]);O=new J.dv(J.ag('Statistics'),'O');O.text.style.overflowY="auto";O.dY=$T.A(O.text);ig(O.dY);O.hg=$T.AC(O.fd,{left:2,top:2});$T.jR(O.hg,400,30);O.wA=$T.A(O.fd,{top:1});KY.pK('33','排名','O');KY.pK('61','上证A股涨幅排名','O','O.fO("S");O.ip("A")');KY.pK('62','上证B股涨幅排名','O','O.fO("S");O.ip("B")');KY.pK('63','深证A股涨幅排名','O','O.fO("Z");O.ip("A")');KY.pK('64','深证B股涨幅排名','O','O.fO("Z");O.ip("B")');O.head.onclick=function(){if(J.aH=="B"){$T.H(O.div);$T.V(X.div);}};O.resize();O.jP=[['涨',J.ga('Chg','%'),'Rise'],['跌',J.ga('Chg','%'),'Tumb'],['振','振幅%','Amp'],['额',J.ag('Amount'),'Amount'],['量',J.ag('Vol'),'Volume'],['比','量比','VRate'],['速','涨速%','Speed']];O.aV='S';O.jX='A';O.eb=0;O.fN=function(){var _=[],cQ=$T.ao(O.jP),z=26,aK=O.hg.aK.i(),w=23.5,inter=26.1;for(var i=1;i<=2;i++){J.dW(aK,(i-1)*inter,w,O.aV=='S'&&i==1||O.aV=='Z'&&i==2,i==1,i==2);}for(var i=1;i<=2;i++){J.dW(aK,(i+1)*inter+5,w,O.jX=='A'&&i==1||O.jX=='B'&&i==2,i==1,i==2);}for(var i=1;i<=7;i++){J.dW(aK,(i+3)*inter+9,w,O.eb==i-1,i==1,i==7);}_.p('<table class="pmtable" border="0" cellspacing="0" cellpadding="0"><tr>');_.p('<td>');_.p('<table border="0" cellspacing="0" cellpadding="0"><tr>');_.p('<td style="width:26px;color:#ffffff;text-align:center;line-height:24px;" onclick="O.fO(\'S\')" >'+J.ag('SH')+'</td>');_.p('<td style="width:26px;color:#ffffff;text-align:center;line-height:24px;" onclick="O.fO(\'Z\')" >'+J.ag('SZ')+'</td>');_.p('</tr></table></td>');_.p('<td width=5></td>');_.p('<td>');_.p('<table class="pmtable" border="0" cellspacing="0" cellpadding="0"><tr>');_.p('<td style="width:26px;color:#ffffff;text-align:center;line-height:24px;" onclick="O.ip(\'A\')">A</td>');_.p('<td style="width:26px;color:#ffffff;text-align:center;line-height:24px;" onclick="O.ip(\'B\')" >B</td>');_.p('</tr></table></td>');_.p('<td width=5></td>');_.p('<td>');_.p('<table class="pmtable" border="0" cellspacing="0" cellpadding="0"><tr>');for(var i=0;i<cQ;i++){_.p('<td style="width:26px;color:#ffffff;text-align:center;line-height:24px;" onclick="O.show('+i+')">'+O.jP[i][0]+'</td>')}_.p('</tr></table></td>');_.p('</tr></table>');$T.I(O.wA,$T.au(_));var _=[];var __=[];var _blank='';var L=R((O.fp-3)/4)-1;_.p('<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr>');_.p('<td '+(O.size>1?'style="width:'+L+'px"':'')+'>');__.p('<table class="ttl" border="0" cellspacing="0" cellpadding="0"><tr>');__.p($T.td(J.ag('Rank'),'style="width:22px; text-align:center"'));__.p($T.td(J.ag('Name'),'style="width:70px; text-align:center"'));__.p($T.td($T.nobr(J.ag('Prev_Close')+'&nbsp;')));__.p($T.td($T.nobr(J.ag('Price')+'&nbsp;')));__.p($T.td($T.nobr(O.jP[O.eb][1])));if(O.size<2){__.p($T.td('','style="width:20px"'));}else{__.p($T.td('','style="width:3px"'));}__.p('</tr></table>');_.p($T.au(__));_.p('</td>');if(O.size>1){_.p('<td style="border-left:1px solid '+C.av('C_border')+';'+(O.size>1?'width:'+L+'px"':'')+'">');_.p($T.au(__));_.p('</td>');_.p('<td style="border-left:1px solid '+C.av('C_border')+';'+(O.size>1?'width:'+L+'px"':'')+'">');_.p($T.au(__));_.p('</td>');_.p('<td style="border-left:1px solid '+C.av('C_border')+';'+(O.size>1?'width:'+L+'px"':'')+'">');_.p($T.au(__));_.p('</td>')}_.p('</tr></table>');$T.I(O.ii,$T.au(_))};O.fO=function(a){O.aV=a;O.fN();O.show()};O.ip=function(a){O.jX=a;O.fN();O.show()};O.show=function(a){if(J.ji('O_select'))return;if($T.aN(O.div)){if(typeof(a)!='undefined')O.eb=a;J.aB.add('O',O.aV+','+O.eb+','+O.jX+','+M.kC(48,M.iV(20,20)));}};O.cA=function(a){O.list=a.aG(';');O.sl()};O.sl=function(a){if($T.ao(O.list)==0){O.fN();$T.I(O.dY);return}var _blank='';var _=[];var __=[];var z=O.list;var L=R((O.fp-3)/4)-1;var ah=$T.ao(O.list);var kG=M.cl(ah/4);_.p('<table class="baojia_table" width="100%" border="0" cellspacing="0" cellpadding="0"><tr>');_.p('<td '+(O.size>1?'style="width:'+L+'px; vertical-align:top"':'')+'>');_.p('<table class="size14 za" width="100%" border="0" cellspacing="0" cellpadding="0">');var af,aD,aT,bm,cV,cu,cK,yW,fb,de;var kJ=$T.au(['</table>','</td>','<td style="width:',L,'px;border-left:1px solid ',C.av('C_border'),'; vertical-align:top">','<table class="size14 za" width="100%" border="0" cellspacing="0" cellpadding="0">']);for(var i=0;i<ah;i++){af=$T.aF(z[i])?['-','-','-','-','-']:z[i].aG(',');aD= !isNaN(af[0])?O.aV+af[0]:af[0];aT=J.fD(aD);yW=J.kQ(J.hM(aD));bm=$T.aW(af[1])?af[1]:$T.F(af[1]/yW,3);cV=$T.F(af[2]/yW+bm,3);cu=af[3];lK='';if(J.lang=='0'){cK=J.dJ(aD);lK=af[4]+' '+cK[1];}if(!i||(!(i%kG)&&i>0&&O.size>1)){_.p($T.au(__));}de=(O.size>1?i%kG%2==1:i%2==1)?'odd':'';_.p('<tr title="',lK,'" class="'+de+'" onmouseover="this.className = \'highlight\'" onmouseout="this.className = \''+de+'\'" onclick=ChangeGw("'+aD.substring(0,7)+'")>');_.p($T.td(i+1,'style="width:22px; color:'+C.av('C_chiping')+'; text-align:center"'));_.p($T.td(aT,'style="width:70px;text-align:center;" class="texth"'));_.p($T.td(J.aZ(bm,bm,aD)+_blank,'align=right'));_.p($T.td(J.aZ(cV,bm,aD)+_blank,'align=right'));var cN;if($T.aW(cu)){cN=cu}else if(O.eb%7<=1){cN=J.eh(cV,bm)}else if(O.eb%7==2){cN=$T.bS(cu,2)}else if(O.eb%7==3){cN=$T.F(cu,-1)}else if(O.eb%7==4){cN='<font style="color:'+C.av('C_volume')+'">'+$T.F(cu*E().hO/100,-1)+'</font>'}else if(O.eb%7==5){cN=$T.bS(cu/100,2)}else if(O.eb%7==6){cN=$T.bS(cu,2)}_.p($T.td($T.nobr(cN),'align=right'));_.p('<td style="width:3px"></td>');_.p('</tr>');if(O.size>1&&i%kG==kG-1&&i<ah-1){_.p(kJ);}}for(var i=ah;i<4;i++){_.p(kJ);}_.p('</table>');_.p('</td>');_.p('</tr></table>');O.fN();$T.I(O.dY,$T.au(_));O.zc(a);};O.eb=0;O.zc=function(keep){scroll.create(O.text,[1,0],keep);}})();