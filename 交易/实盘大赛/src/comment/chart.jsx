import '../css/detail.scss';
import Dyn from './transactionWarehouse'
import {yieldcurve} from './URL';
import {getHash} from '../../../common/js/global';

module.exports = class Detail extends React.Component{
	constructor(...args){
        super(...args);
        this.state = {
          data : null 
        }
    }
    componentDidMount(){
    	var self = this ,
			userId = getHash('userId');

		$.ajax({
            url:yieldcurve,
            dataType:'json',
            data:{
                userId : userId
            },
            type:'get',
            success:function(_data){
				//console.log(_data);
				var data = _data.data;
				//var data = {"retcode":0,"msg":"","data":{"incomeList":[{"initDate":20161012,"incomeRate":0.0302},{"initDate":20161013,"incomeRate":0.0372},{"initDate":20161014,"incomeRate":0.1352},{"initDate":20161017,"incomeRate":0.1372},{"initDate":20161018,"incomeRate":0.0372},{"initDate":20161019,"incomeRate":0.0399},{"initDate":20161020,"incomeRate":0.0366}],"incomeListHS300":[{"initDate":20161013,"incomeRate":0.1234},{"initDate":20161014,"incomeRate":0.5123},{"initDate":20161018,"incomeRate":0.2012},{"initDate":20161019,"incomeRate":0.3210},{"initDate":20161020,"incomeRate":0.5468}]}};

				//data = data.data;

				self.setState({data:data});
				var incomeRate = [] ,
					initDate = [] ,
					incomeListHS300 = [];

				$.each(data.incomeList,function( i , obj ){
					incomeRate.push(obj.incomeRate)
				});
				$.each(data.incomeListHS300,function( i , obj ){
					var _date = String(obj.initDate).slice(4),
						_datemat = _date.substr(0,2)+'-'+_date.substr(2,2)
					initDate.push(_datemat);
					incomeListHS300.push(obj.incomeRate)
				});

				var echarts = require('echarts');
				var myChart = echarts.init(document.getElementById('Chart'));

				// 指定图表的配置项和数据
				var option = {
					title:{show:false},
				    tooltip: { show:true},
				    legend: {show:false},
				    toolbox:{show:false},
				    backgroundColor:'#fff',
				    grid:{x:30,y:15,x2:50,y2:30},
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        axisLabel : {
				        	textStyle : {
				        		color:"#878C92",
				        		fontSize:10
				        	}
				        },
				        axisLine:{
				        	lineStyle:{
				        		color:'#D2D2D2'
				        	}
				        },
				        axisTick :{
				            show:false
				        },

				        data: initDate
				    },
				    yAxis: {
				        type: 'value',
				        position:'right',
				        axisLabel : {
				        	textStyle : {
				        		color:"#878C92",
				        		fontSize:10
				        	}
				        },
				        axisLine:{
				        	show:false
				        },
				        axisTick :{
				            show:false
				        },
				        splitLine:{
				        	show : true,
				        	lineStyle:{
				        		width : .5,
				        		color:'#D2D2D2'
				        	}
				        },
				    },
				    series: [{
				        name: '用户累计',
				        type: 'line',
				        smooth: true,
				        symbol:'diamond',
				        lineStyle:{
				        	normal:{
				        		color : '#FF7B57',
				        		width:1
				        	}
				   		},
				        data: incomeRate
				    },
				    {
				        name: '沪深300参赛',
				        type: 'line',
				        symbol:'diamond',
				        smooth: true,
				        lineStyle:{ 
				        	normal:{
				        		color:'#98CEF7',
				        		width:1
				        	}
				    	},
				        data: incomeListHS300
				    }]
				};

				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
            }
        });
    }
	render(){
		var obj = this.state.data ,
			dynData = this.state.dynData,
			house = this.state.house;
		if(obj){
			return (
				<article class='chart'>
					<div class='title'>
						<div class='right'>
							<i class='c1'></i>用户累计
							<i class='c2'></i>沪深300
						</div>
						<h2>收益率走势</h2>
					</div>
					<div id='Chart'></div>
				</article>
			);
		}else{
			return (
				<div id='loadding' style={{marginTop:'.25rem'}}>
                    <i></i>
                    <p>加载中...</p>
                </div>
			);
		}
	}
}