import { IAppState } from 'application/intefaces/i-app';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useSortWeatherByDate = () => {
  const [data, setData] = useState([]);

  const { cityWeather } = useSelector((state: IAppState) => state.city);
  const filterWeatherByDay = (array: any, day: number) => {
    return array.filter((item: any) => {
      return new Date(item.dt_txt).getDate() === day;
    });
  };

  const getDayArray = (arr: any[]) => {
    return Array.from(
      new Set(
        arr.map((item: any) => {
          return new Date(item.dt_txt).getDate();
        }),
      ),
    );
  };

  const dayArray = getDayArray(cityWeather);

  const filteredDataDayByDay: any = dayArray.map((day: any) => {
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
