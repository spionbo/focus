(function(){RF={div:$T.A(J.bD),fa:1,eH:{0:$T.A(J.bD),1:$T.A(J.bD),2:$T.A(J.bD)},jm:J.refresh,pause:0,vx:function(a){switch(a){case 0:return J.ag('Pause');case 'refresh':return J.ag('Refresh');default:return a+J.ag('s')}},np:function(a){RF.pause=0;if(a=='refresh'){hX(1,1)}else if(a=='0'){RF.pause=1;}else{RF.jm=$T.az(a);RF.fa=M.kC(RF.jm,1)}RF.cR()},resize:function(){if(!window.TI){$T.M(RF.div,{l:J.fH(0)+J.bk(4)-J.lV,t:J.ek(3)+2+B.adjust});var lW=function(a,b){if(B.kb){$T.M(RF.eH[a],{l:J.fH(0)+J.bk(4)-26,t:J.ek(3)+B.adjust+4});var cX=b,iR=C.av('C_mod_bg');RF.online[a].aK.i().eJ(12,12,0,12,12,10,[[0,cX],[0.7,cX],[1,$T.aA(cX,0)]]).cc(0,0,24,24);}else{$T.M(RF.eH[a],{l:J.fH(0)+J.bk(4)-26,t:J.ek(3)+B.adjust+5,w:24,h:24});$T.I(RF.eH[a],'<font style="color:'+b+';font-size:20px;line-height:24px">��</font>')}};lW(0,C.av('C_online'));lW(1,'#00ff00');lW(2,'#ffff00');}else{$T.H(RF.div,'niu707')}},tP:function(){if(!window.dz)return;var div=RF.eH[dz.state];(0&&B.kb)?$T.aC.change('loading',div,{a:0},{a:13},200,0,"linear"):$T.V(div);},loaded:function(){if(!window.dz)return;var div=RF.eH[dz.state];(0&&B.kb)?$T.aC.change('loading',div,{a:1},{a:0},200,0,"linear"):$T.H(div);},cR:function(){var _=[],ba=[0,J.refresh,10,30,60,'refresh'];_.p('<select onchange="RF.np(this.value)" style="width:50px">');for(var i=0,ah=$T.ao(ba);i<ah;i++){_.p('<option value="'+ba[i]+'" '+(RF.jm==ba[i]?'selected':'')+'>'+RF.vx(ba[i])+'</option>')}_.p('</select>');$T.I(RF.menu,$T.au(_))}};RF.menu=$T.A(RF.div,{t:2});RF.mI=$T.A(RF.div,{l:52,t:6,w:80});RF.online=[$T.AC(RF.eH[0]),$T.AC(RF.eH[1]),$T.AC(RF.eH[2])];RF.hide=function(){$T.H(RF.eH[0]);$T.H(RF.eH[1]);$T.H(RF.eH[2]);};$T.jR(RF.online[0],24,24);$T.jR(RF.online[1],24,24);$T.jR(RF.online[2],24,24);RF.resize();RF.cR();RF.hide();$T.H(RF.div);})();