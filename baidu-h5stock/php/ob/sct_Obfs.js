(function(){SCT={move:function(){},close:function(){}};if(window.KY&&window.LB){SCT=new J.dv('��ݼ�','SCT','not in div_list');$T.M(SCT.div,{z:J.yD('HIS'),o:'auto'});$T.I(SCT.content,'<table id="sct_table" width="100%" border="0" cellspacing="0" cellpadding="2"></table>');SCT.mE=$T.$('sct_table');var bo,bO;for(var i=0,ah=window.KY?$T.ao(KY.eN):0;i<ah;i++){bo=SCT.mE.insertRow(i);if(i%2==1){bo.className="odd";bo.onmouseout=function(){this.className='odd'}}else{bo.onmouseout=function(){this.className=''}}bo.onmouseover=function(){this.className='highlight'};bo.style.textAlign='center';bo.style.height='24px';bo.onclick=function(){KY.zM(this.key);SCT.close()};bo.key=i;bO=bo.insertCell(0);bO.className='za';$T.I(bO,KY.eN[i][0]);bO=bo.insertCell(1);bO.className='za';$T.I(bO,KY.eN[i][1]);}SCT.zc=function(){scroll.create(SCT.content,[1,0]);};SCT.move=function(){if(window.SYS)SYS.close();if($T.az(SCT.div.style.left)<J.cD-J.et/2){SCT.close()}else{SCT.open()}};SCT.open=function(){$T.bU(SCT.bu);$T.V(SCT.div);$T.aC.change('f_SCT',SCT.div,{},{x:J.cD-J.et-2},300)};SCT.close=function(){SCT.bu=setTimeout('$T.H(SCT.div)',1000);$T.aC.change('f_SCT',SCT.div,{},{x:J.cD+12},200);};J.yU(SCT,'SCT');SCT.zc();$T.H(SCT.div);}$T.V(J.bD);})();