import { useContext, useEffect, useRef } from "react";
import * as echarts from "echarts";
import style from "./style/recentData.module.css";
import { CollapsedContext } from "@/pages/Admin/index";
import useThemeStore from "@/store/index";
const options1 = {
  title: {
    text: '近年数据'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['总人数', '四级', '六级']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2021.12', '2022.6', '2022.12', '2023.6', '2023.12', '2024.6', '2024.12']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '总人数',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '四级',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '六级',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
  ],
  backgroundColor: 'rgba(0,0,0,0)'
};
const options2 = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '计科学院' },
        { value: 735, name: '人工智能学院' },
        { value: 580, name: '农学院' },
        { value: 484, name: '化工学院' },
        { value: 300, name: '美术学院' }
      ]
    }
  ],
  backgroundColor: 'rgba(0,0,0,0)'
};
let chartInstance: echarts.ECharts
let pieInstance: echarts.ECharts
function Chart() {
  const chartRef = useRef(null);
  const pieCharts = useRef(null);
  const collapsed = useContext(CollapsedContext);
  const themeStore = useThemeStore();
  function renderChart() {
    try {
      chartInstance && chartInstance.dispose();
      pieInstance && pieInstance.dispose();
      chartInstance = echarts.init(chartRef.current,themeStore.theme? undefined : 'dark');
      pieInstance = echarts.init(pieCharts.current,themeStore.theme? undefined : 'dark');
      chartInstance.setOption(options1);
      pieInstance.setOption(options2);
    } catch (error: any) {
      console.error("error", error.message);
      chartInstance && chartInstance.dispose();
      pieInstance && pieInstance.dispose();
    }
  }
  function resizeHandler() {
    chartInstance.resize();
  }
  useEffect(() => {
    renderChart();
    window.addEventListener("resize", resizeHandler);
    return () => {
      chartInstance && chartInstance.dispose();
      window.removeEventListener("resize", resizeHandler);
    }
  }, []);
  useEffect(() => {
    setTimeout(renderChart, 100)
  })
  useEffect(() => {
    setTimeout(resizeHandler, 100)
  }, [collapsed])
  return (
    <div className={style.container}>
      <div style={{ backgroundColor: themeStore.theme ? "rgb(250 250 250)" : '#292929' }} className={style.header}>
        <div className={style.greeting}>
          <h2>欢迎您，来自河南科技学院的管理员！</h2>
          <p>今天天气: 晴 29℃~32℃, 空气质量: 优 空气质量指数为5.0，属于良好级别。</p>
        </div>
        <div className={style.data} style={{ color: "#fff" }}>
          <div style={{ backgroundImage: 'linear-gradient(rgb(31 32 209) 0%, rgb(0, 158, 253) 100%)' }}>
            <div>120</div>
            <h3>报考总数</h3>
          </div>
          <div style={{ marginLeft: '10px', backgroundImage: 'linear-gradient(rgb(0 203 110) 0%, rgb(0 99 159) 100%)' }}>
            <div>220</div>
            <h3>通过总数</h3>
          </div>
        </div>
      </div>
      <div className={style.chart}>
        <div >
          <div style={{ height: "400px" }} ref={chartRef} />
        </div>
        <div style={{ marginTop: '30px' }}>
          <div ref={pieCharts} style={{ height: '400px' }}></div>
        </div>
      </div>

    </div>
  );
}

export default Chart;