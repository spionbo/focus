(function(){J.cY.X={A1:'1,2',A2:'3,2',A3:'3,2',A4:'3,0',A5:'2,1',A6:'2,1.5,1,1.5,',A7:'3,1.5,1,1.5',AC:'2,0,1,1.5',AD:'2,1.5,1,1.5',G:'3,0,1,1.5,-2',Q:'3,0,1,1.5,-2',O:'3,0,1,1.5,-2',Z:'3,0,1,1.5,-2',QH:'3,1.5,1,1.5,-2',T:'3,1.5,1,1.5,-2',K:'3,1.5,1,1.5,-2',B:'2,1.5,1,1.5'};if(!J.oj)J.fu.p(['X','���']);X=new J.dv(J.ag('ReportValue'),'X');X.content.style.overflowY="hidden";X.hf=$T.A(X.content);ig(X.hf);X.head.onclick=function(){if(J.aH=="B"){$T.H(X.div);$T.V(O.div);}};X.cC=function(){X.pR=''};X.cA=function(a,b){if(!$T.aF(a)){X.pR=a;H.CJ=a;var e=E();var aP=R(X.pR.aG(';').AE().aG(',')[2]*e.hO/e.dn);$T.I(H.Bh,aP!=0?aP:J.cq);}X.resize()};X.ns=function(a){LB.aQ('G');G.change('bk',1,a);};X.resize=function(b){if(!J.gwdm)return;var a=X.pR;$T.I(X.title,'<font class="Modtitle">'+J.ag('ReportValue')+'</font>');var _=[],__=[],y=a.aG(';'),cQ=$T.ao(y),af=0,ae=[],cI,gQ=0,nM=0,qu='',qn,dg,rf='',z=H.a,buy=0,kv=0,k=0,hc=($T.aF(z)?'~~':z).aG(J.jE);__=X.Bq(hc);if(J.type=='i'){__.p('</table>');$T.I(X.hf,$T.au(__));X.zc(b);return;}var end=__.splice(__.length-1,1)[0];while(af<cQ){ae=y[af].aG(',');qn=ae[0];dg=ae[1]/E().cw;gQ=gQ-qn;gQ=gQ<100000?'0'+gQ:''+gQ;nM=dg+nM;y[af]=[gQ,nM,R(ae[2]*E().hO/E().dn),$T.find('SB',ae[3])?ae[3]:''];af++}af=M.kC(cQ,M.f(X.ef/(B.dk?24:22)));while(af--){_=[];_.p('<tr style="text-align:right">');ae=y[af][0];rf=ae.substring(0,2)+':'+ae.substring(2,4)+':'+ae.substring(4,6);if(ae.substring(0,4)==qu){_.p($T.td(ae.substring(4,6),'style="padding-right:20px;"'));}else{_.p($T.td(rf,'style="padding-right:20px;background-color:#2F3034"'));}qu=ae.substring(0,4);_.p($T.td(J.aZ(y[af][1])));_.p($T.td(y[af][2],'style="color:'+(y[af][2]>500?C.av('C_volume_big'):C.av('C_volume'))+'"'));_.p($T.td(y[af][3]=='B'?'��':'��','style="color:'+(y[af][3]=='B'?C.av('C_barup'):C.av('C_bardown'))+'"'));_.p('</tr>');__.p($T.au(_))}__.p('</table>');__.p(end);$T.I(X.hf,$T.au(__));X.zc(b);};X.zc=function(keep){scroll.create(X.content,[1,0],keep);};X.Bq=function(hc){var _=[];var it=0;if(E().D&&'s'==E().dH[3]){var ah=E().D.length;for(var i=ah-6;i>=0&&i<ah-1;i++){it+=E().D[i][5];}}it=it?$T.F(E().fm*1200/it/E().aP):J.cq;_.p('<center>');_.p('<table class="baojia_table size14 lP" style="margin-top:1px;width:100%" border="1" cellspacing="0" cellpadding="0"><tr>');_.p($T.td(J.ag('NewPrice'),'style="width:20%"'));_.p($T.td(J.aZ(E().yT),'class="value2" style="width:25%"'));_.p($T.td(J.ag('Avg_Price')));_.p($T.td(J.aZ(E().kk),'class="value2"'));_.p('</tr><tr>');_.p($T.td(J.ag('Change')));_.p($T.td(J.du(E().yT,E().aU),'class="value2"'));_.p($T.td(J.ag('Chg')));_.p($T.td(J.eh(E().yT,E().aU,(E().yT?'%':'')),'class="value2"'));_.p('</tr><tr>');_.p($T.td(J.ag('Open')));_.p($T.td(J.aZ(E().hG),'class="value2"'));_.p($T.td(J.ag('Prev_Close')));_.p($T.td(J.aZ(E().aU),'class="value2"'));_.p('</tr><tr>');_.p($T.td(J.ag('High')));_.p($T.td(J.aZ(E().fX),'class="value2"'));_.p($T.td(J.ag('Low')));_.p($T.td(J.aZ(E().eC),'class="value2"'));_.p('</tr><tr>');_.p($T.td(J.ag('Vol')));_.p($T.td($T.F(E().fm,-1)||J.cq,'style="color:'+C.av('C_volume')+'" class="value2"'));_.p($T.td(J.ag('Amount')));_.p($T.td($T.F(E().ju,-1)||J.cq,'class="value2"'));_.p('</tr><tr>');_.p($T.td(J.ag('Vol_Rate')));_.p($T.td(it,'class="value2"'));_.p($T.td(J.ag('Turnover')));_.p($T.td(hc[3]>0?hc[3]+'%':J.cq,'class="value2"'));_.p('</tr></table>');_.p('<table class="size14" width="90%" border="0" cellspacing="0" cellpadding="0">');_.p('</center>');return _;}})();