import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Box } from '@mui/material';
import * as React from 'react';
import { IForecast } from '../../../application/intefaces/i-weather';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';

interface Props {
  data: IForecast[];
  handleClick: (event: CategoricalChartState) => void;
}

const HourChart = ({ data, handleClick }: Props) => {
  const formatTime = (time: string) =>
    new Date(time).toLocaleTimeString('en-US', {
      hour: 'numeric',
    });

  return (
    <Box width={'100%'} height={'100%'}>
      <ResponsiveContainer
        width='100%'
        minWidth={300}
        minHeight={150}
        height='100%'
      >
        <LineChart
          width={700}
          height={300}
          data={data}
          onClick={handleClick}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey={(d) => formatTime(d.dt_txt)} />
          <Tooltip />
          <Line
            type='monotone'
            name={'Temp'}
            dataKey='main.temp'
            stroke='#000'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default HourChart;
