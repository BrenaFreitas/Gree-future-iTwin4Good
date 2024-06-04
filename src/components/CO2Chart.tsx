import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { ChartData, ChartOptions, ScatterDataPoint } from 'chart.js';

interface CO2Data {
  date: string;
  co2: number;
}

interface CO2ChartProps {
  data: CO2Data[];
}

const CO2HeatMap: React.FC<CO2ChartProps> = ({ data }) => {
  const maxCO2 = Math.max(...data.map(d => d.co2));

  const chartData: ChartData<'scatter'> = {
    datasets: [
      {
        label: 'CO2 Levels',
        data: data.map(d => ({
          x: new Date(d.date).getTime(),
          y: 1,
          r: 10, // Define the size of the points
        })) as ScatterDataPoint[],
        backgroundColor: data.map(d => `rgba(75, 192, 192, ${d.co2 / maxCO2})`),
      },
    ],
  };

  const chartOptions: ChartOptions<'scatter'> = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const value = data[index].co2;
            return `CO2: ${value} ppm`;
          },
        },
      },
    },
  };

  return <Scatter data={chartData} options={chartOptions} />;
};

export default CO2HeatMap;
