import { IAppState } from 'application/intefaces/i-app';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IForecast } from '../intefaces/i-weather';

const useSortWeatherByDate = () => {
  const [data, setData] = useState<IForecast[][]>([]);

  const { cityWeather } = useSelector((state: IAppState) => state.city);
  const filterWeatherByDay = (array: IForecast[], day: number) => {
    return array.filter((item: IForecast) => {
      return new Date(item.dt_txt).getDate() === day;
    });
  };

  const getDayArray = (arr: IForecast[]) => {
    return Array.from(
      new Set(
        arr.map((item: IForecast) => {
          return new Date(item.dt_txt).getDate();
        }),
      ),
    );
  };

  const dayArray = getDayArray(cityWeather);

  const filteredDataDayByDay: IForecast[][] = dayArray.map((day: number) => {
    return filterWeatherByDay(cityWeather, day);
  });

  useEffect(() => {
    setData(filteredDataDayByDay);
  }, [cityWeather]);

  return {
    filteredDataByDay: data,
    days: dayArray,
  };
};

export default useSortWeatherByDate;
