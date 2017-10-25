import React from 'react'
import {connect} from 'react-redux'
import IECharts from 'react-echarts-v3';
import "./index.less"

var ReactEcharts = require('echarts-for-react');
const onEvents = {
  'click': function (params) {
    // the 'this' variable can get echarts instance
    console.log("click", params);
  }
};
var data = [
  ["103", "120", " 136"],
  ["110", "130", " 150"],
  ["120", "140", " 160"],
  ["134", "157", " 181"],
  ["150", "171", " 196"],
  ["164", "185", " 211"]
]
const option = {
  title: {text: '卧推等级表', subtext: ""},
  //设置折线的彩色
  //nano 弹出提示框
  tooltip: {
    trigger: "axis",
    position: function (pt) {
      return [pt[0], 130];
    },
    axisPointer: {
      type: 'cross'
    },
    backgroundColor: 'rgba(245, 245, 245, 0.8)',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textStyle: {
      color: '#000'
    },
    //设置弹出提示框的大小
    extraCssText: 'height: 50px'
  },
  //单独选择某个折线查看
  legend: {
    data: ['入门', '进阶']
  },
  toolbox: {
    left: 'center',
    itemSize: 25,
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,//边缘留白
    name: "体重(斤)",
    nameLocation: "middle",
    data: data.map(function (item) {
      return item[0];
    })
  },
  yAxis: {
    scale: true,//不从0开始
    type: 'value',
    name: "杠铃重(斤)",
    nameLocation: "middle",
    nameGap: -15,
    splitLine: {
      show: false
    },
    splitNumber: 10,//y轴分段个数
    maxInterval: 50,
    axisTick: {
      length: 1,
    }

  },
//数据缩放查看
  dataZoom: [{}, {
    type: 'inside'
  }],
  series: [
    {
      name: '入门',
      type: 'line',
      smooth: true,
      data: data.map(function (item) {
        return item[1];
      }),
      markLine: {
        silent: false,
        data: [
          {
            yAxis: 140
          }, {
            yAxis: 160
          }, {
            yAxis: 180
          }, {
            yAxis: 200
          }, {
            yAxis: 220
          }]
      }
    },
    {
      name: '进阶',
      type: 'line',
      smooth: true,
      data: data.map(function (item) {
        return item[2];
      }),
      markLine: {
        silent: false,
        data: [{
          yAxis: 140
        }, {
          yAxis: 160
        }, {
          yAxis: 180
        }, {
          yAxis: 200
        }, {
          yAxis: 220
        }]
      }
    }]
};

class counterContainer extends React.Component {

  getOption() {

  }

  onChartReadyCallback() {

  }

  EventsDict() {

  }

  render() {
    return (
      <div>
        <IECharts option={option}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(counterContainer)
