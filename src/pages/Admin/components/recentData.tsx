import { useEffect, useRef } from "react";
import * as echarts from "echarts";
const options = {
  title: {
    text: '四六级历年报考数据'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['总人数', '男生','女生']
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
      name: '男生',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '女生',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
  ],
};
function Chart() {
  const chartRef = useRef(null);
  let chartInstance:echarts.ECharts
  function renderChart() { 
    try {
      const renderedInstance = echarts.getInstanceByDom(chartRef.current!);
      if (renderedInstance) {
        chartInstance = renderedInstance;
      } else {
        chartInstance = echarts.init(chartRef.current);
      }
      chartInstance.setOption(options);
    } catch (error:any) {
      console.error("error", error.message);
      chartInstance && chartInstance.dispose();
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
  return (
    <div>
      <div style={{ height: "300px" }} ref={chartRef} />
    </div>
  );
}

export default Chart;