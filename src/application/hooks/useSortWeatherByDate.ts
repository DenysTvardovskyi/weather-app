import { IAppState } from 'application/intefaces/i-app';
import { useEffect, useState } from 'react';
import { IForecast, IWeatherInfoData } from '../intefaces/i-weather';
import { useAppSelector } from '../../redux/hooks';

const useSortWeatherByDate = () => {
  const [data, setData] = useState<IForecast[][]>([]);

  const { cityWeather } = useAppSelector((state: IAppState) => state.city);
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

  const weatherInfo = (
    activeIndex: number,
    activeTooltipIndex: number,
  ): IWeatherInfoData => {
    let selectedWeather: IForecast;
    if ((data[activeIndex] as []).length >= activeTooltipIndex) {
      selectedWeather = data[activeIndex][activeTooltipIndex];
    } else {
      selectedWeather = data[activeIndex][0];
    }

    return {
      weather: selectedWeather.weather[0],
      temp: selectedWeather.main.temp ?? 0,
      pop: selectedWeather.pop,
      humidity: selectedWeather.main.humidity ?? 0,
      wind_speed: selectedWeather.wind.speed,
      dt_txt: selectedWeather.dt_txt,
    };
  };

  useEffect(() => {
    setData(filteredDataDayByDay);
  }, [cityWeather]);

  return {
    filteredDataByDay: data,
    days: dayArray,
    weatherInfo,
  };
};

export default useSortWeatherByDate;
