import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Box } from '@mui/material';
import useFormatDate from '../../../application/hooks/useFormatDate';
import * as React from 'react';
import { IForecast } from '../../../application/intefaces/i-weather';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';

interface Props {
  data: IForecast[];
  handleClick: (event: CategoricalChartState) => void;
}

const HourChart = ({ data, handleClick }: Props) => {
  const { formatDate } = useFormatDate();

  return (
    <Box width={'100%'} data-testid={'chart-cont'} height={'100%'}>
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
          <XAxis
            dataKey={(d) =>
              formatDate(d.dt_txt, {
                hour: 'numeric',
              })
            }
          />
          <YAxis />
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
