(function(){J.cY.H={A1:'1,1',A2:'3,1',A3:'3,1',A4:'2,0',A5:'2,0,1,1.5',A6:'2,0,1,1.5',A7:'3,0,1,1.5',AC:'1,0,1,1.5',AD:'1,1.5,1,1.5',G:'2,0,1,1.5',G:'2,0,1,1.5,-2',Q:'2,0,1,1.5,-2',O:'2,0,1,1.5,-2',Z:'2,0,1,1.5,-2',QH:'3,0,1,1.5,-2',T:'3,0,1,3,-2',K:'3,0,1,1.5,-2',B:'2,0,1,1.5'};if(!J.oj)J.fu.p(['H','����']);H=new J.dv(J.ag('Five'),'H');H.content.style.overflowY="auto";H.hf=$T.A(H.content);H.CJ='';H.gwdm=null;H.Af=[];H.yQ={};H.cC=function(){H.a=null};H.cA=function(a){H.a=a;H.resize();};H.ns=function(a){LB.aQ('G');G.hn.last.i=0;G.dF=0;G.change('bk',1,a);};H.resize=function(a){$T.I(H.hf);if(!J.gwdm||J.kD!=J.gwdm){return;}else{if(J.gwdm!=H.gwdm){H.Af=[];H.yQ={};H.gwdm=J.gwdm;}}if(J.type=='i'){var a=H.a;$T.I(H.title,'<font class="Modtitle">'+J.ag('BlockInfomation')+'</font>');var y=a.aG(';');var cQ=$T.ao(y);var _=[];var x,fS,z;_.p('<table class="ttl center" border="0" cellspacing="0" cellpadding="0"><tr>');_.p($T.td('�������','width=33%'));_.p($T.td('��Ȩ�ǵ���%','width=33%'));_.p($T.td('�ɽ����','width=33%'));_.p('</tr></table>');_.p('<table class="size14 za center" width="100%" border="0" cellspacing="0" cellpadding="0">');for(var i=0;i<cQ;i++){x=y[i].aG(',');de=i%2==1?'odd':'';_.p('<tr class="'+de+'" onmouseover="this.className = \'highlight\'" onmouseout="this.className = \''+de+'\'" onclick=H.ns("'+x[0]+'")>');z=G.list.BK1[G.list.vy['BK'+x[0]]][1];z=z.length>4?z.replace(/��|��ҵ|ҵ|��/g,''):z;_.p($T.td(z.substring(0,6),'width=33%'));_.p($T.td(x[1],'width=33%'));_.p($T.td($T.F(x[2]*10000,-1),'width=33%'));_.p('</tr>');}_.p('</table>');$T.I(H.hf,$T.au(_));H.zc();}else{var z=H.a;var buy=0;var kv=0;var k=0;var hc=($T.aF(z)?'~~':z).aG(J.jE);$T.I(H.title,'<font class="Modtitle">'+J.ag('Five')+'</font>');var dV=0,ba=['','','','','','','','','',''],aw=['','','','','','','','','',''];if(!$T.aF(hc[1])){var ba=hc[1].aG(',');var i=0;while(ba[i+i]){ba[i+i]=$T.F(ba[i+i]/E().cw+dV,3);dV=ba[i+i];i++}ba.splice(i+i,1);var list=[];for(var i=ba.length;i>0;i-=2){list.p(ba[i-2]);list.p(ba[i-1]);}ba=list;}if(!$T.aF(hc[2])){var aw=hc[2].aG(',');var i=0;while(aw[i+i]){aw[i+i]=$T.F(dV-aw[i+i]/E().cw,3);dV=aw[i+i];i++}aw.splice(i+i,1);}var up=C.C_barup[0][0],down=C.C_bardown[0][0],gold=C.av('C_gwdm'),Ac=['��','��','��','��','��'],ah=Ac.length,word='('+J.ag('money')+"/"+J.ag('hand')+')',zj=[],e=E(),values=ba.concat(aw),buy=J.ag('buy'),Ad=J.ag('Ad'),center=$T.D('center'),table=$T.A(center,{a:'',c:'baojia_table size14',width:'100%',h:H.ef,border:'0',cellspacing:'0',cellpadding:'0'},'table'),Ay={width:'100%',a:''},As={width:'100%',a:'',b:'#424345'},tH=$T.A(table,As,'tr'),sN={width:'25%',a:'',border:'0',cursor:'default'},hr=M.f(H.ef/12),Bx=H.ef%12,Ck=Bx,i=1,yS=0,Cw;while(Ck<=hr-i){Ck+=12;i++;}hr-=i-1;sN.h=hr;var count=0;for(var i=0;i<ah+ah;i++){if($T.aF(values[i+i])){count++;}else{if(i<ah){yS-=values[i+i+1]*e.hO/e.dn;}else{yS+=values[i+i+1]*e.hO/e.dn;}}}yS=$T.F(yS,-1);Cw=yS>0?up:down;if(count==10){yS=J.cq;Cw='white';}var cZ,Cy;if(e.cZ){cZ=e.cZ+'%';Cy=e.cZ>50?up:down;}else{cZ=J.cq;Cy='white';}$T.M(tH,{borderBottom:'1px solid #0D0E11'});$T.M($T.A(tH,sN,'td'),{i:'&nbsp;&nbsp;&nbsp;&nbsp;'+J.ag('scale'),textAlign:'left'});$T.M($T.A(tH,sN,'td'),{i:cZ,color:Cy,textAlign:'left'});$T.M($T.A(tH,sN,'td'),{i:J.ag('wd'),textAlign:'left'});$T.M($T.A(tH,sN,'td'),{i:yS,color:Cw,textAlign:'left'});for(var i=0;i<ah;i++){zj[i]=Ad+Ac[i];zj[i+ah]=buy+Ac[ah-i-1];}zj.splice(5,0,J.ag('nowPrice'));values.splice(10,0,"");values.splice(10,0,e.yT?e.yT:J.cq);for(var i=0,zV,tr,item,dV;i<zj.length;i++){tr=$T.A(table,Ay,'tr');if(i==5){$T.M(tr,{fontWeight:'800',h:Ck});}item=$T.A(tr,sN,'td');$T.M(item,{i:zj[i],textAlign:'center'});item=$T.A(tr,sN,'td');dV=(typeof values[i+i]!='number'?J.cq:values[i+i].toFixed(e.aO));$T.M(item,{i:J.aZ(dV),textAlign:'right'});item=$T.A(tr,sN,'td');if(i==5){H.Bh=item;}$T.M(item,{i:typeof values[i+i]!='number'?J.cq:$T.F(values[i+i+1]*e.hO/e.dn,-1),color:gold,textAlign:'right'});item=$T.A(tr,sN,'td');if(H.yQ[values[10]]){AU(i,values[i+i],values[i+i+1],e);$T.M(item,{i:H.Af[i]||'',color:gold,textAlign:'right'});}}AS(values);var CD=e.CD;var Bv=e.Bv;zV=$T.A(table,As,'tr');$T.M(zV,{borderTop:'1px solid #0D0E11'});$T.M($T.A(zV,sN,'td'),{i:'&nbsp;&nbsp;&nbsp;&nbsp;'+J.ag('inner'),textAlign:'left'});$T.M($T.A(zV,sN,'td'),{i:CD?CD:J.cq,color:CD?down:'white',textAlign:'left'});$T.M($T.A(zV,sN,'td'),{i:J.ag('outer'),textAlign:'left'});$T.M($T.A(zV,sN,'td'),{i:Bv?Bv:J.cq,color:Bv?up:'white',textAlign:'left'});H.hf.appendChild(center);delete center;H.zc(a);}};H.zc=function(keep){scroll.create(H.content,[1,0],keep);};function AS(data){for(var i=0;i<data.length/2;i++){if(i!=5){H.yQ[data[2*i]]=data[2*i+1];}}};function AU(a,b,c,e){if(a==5){H.Af[a]='';return;}if(H.yQ[b]){H.Af[a]=$T.F((c-H.yQ[b])*e.hO/e.dn,-1);}else{H.Af[a]=c?$T.F(c*e.hO/e.dn,-1):'';}}})();