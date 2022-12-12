export const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },
  };
})();

export const MockedUnsortedWeather = [
  {
    dt: 1670814000,
    main: {
      temp: -4.23,
      feels_like: -10.76,
      temp_min: -4.94,
      temp_max: -4.23,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 968,
      humidity: 93,
      temp_kf: 0.71,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.89,
      deg: 264,
      gust: 12.34,
    },
    visibility: 6413,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-12 03:00:00',
  },
  {
    dt: 1670824800,
    main: {
      temp: -4.56,
      feels_like: -10.75,
      temp_min: -4.9,
      temp_max: -4.56,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 969,
      humidity: 93,
      temp_kf: 0.34,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.2,
      deg: 259,
      gust: 11.13,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-12 06:00:00',
  },
  {
    dt: 1670835600,
    main: {
      temp: -3.93,
      feels_like: -9.8,
      temp_min: -3.93,
      temp_max: -3.93,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 970,
      humidity: 92,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 97,
    },
    wind: {
      speed: 4.95,
      deg: 256,
      gust: 10.23,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-12 09:00:00',
  },
  {
    dt: 1670846400,
    main: {
      temp: -3.02,
      feels_like: -8.73,
      temp_min: -3.02,
      temp_max: -3.02,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 970,
      humidity: 90,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 5.06,
      deg: 257,
      gust: 9.59,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-12 12:00:00',
  },
  {
    dt: 1670857200,
    main: {
      temp: -6.44,
      feels_like: -11.23,
      temp_min: -6.44,
      temp_max: -6.44,
      pressure: 1008,
      sea_level: 1008,
      grnd_level: 971,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 59,
    },
    wind: {
      speed: 2.99,
      deg: 249,
      gust: 7.06,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-12 15:00:00',
  },
  {
    dt: 1670868000,
    main: {
      temp: -6.3,
      feels_like: -11.87,
      temp_min: -6.3,
      temp_max: -6.3,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 972,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 70,
    },
    wind: {
      speed: 3.82,
      deg: 240,
      gust: 10.07,
    },
    visibility: 10000,
    pop: 0.07,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-12 18:00:00',
  },
  {
    dt: 1670878800,
    main: {
      temp: -6.7,
      feels_like: -12.55,
      temp_min: -6.7,
      temp_max: -6.7,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 973,
      humidity: 93,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n',
      },
    ],
    clouds: {
      all: 50,
    },
    wind: {
      speed: 4.04,
      deg: 231,
      gust: 9.97,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-12 21:00:00',
  },
  {
    dt: 1670889600,
    main: {
      temp: -5.09,
      feels_like: -10.96,
      temp_min: -5.09,
      temp_max: -5.09,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 975,
      humidity: 95,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 59,
    },
    wind: {
      speed: 4.54,
      deg: 233,
      gust: 10.59,
    },
    visibility: 7343,
    pop: 0.2,
    snow: {
      '3h': 0.14,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-13 00:00:00',
  },
  {
    dt: 1670900400,
    main: {
      temp: -5.04,
      feels_like: -11.21,
      temp_min: -5.04,
      temp_max: -5.04,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 975,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 79,
    },
    wind: {
      speed: 4.99,
      deg: 244,
      gust: 11.96,
    },
    visibility: 5848,
    pop: 0.28,
    snow: {
      '3h': 0.1,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-13 03:00:00',
  },
  {
    dt: 1670911200,
    main: {
      temp: -4.63,
      feels_like: -10.64,
      temp_min: -4.63,
      temp_max: -4.63,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 976,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 88,
    },
    wind: {
      speed: 4.9,
      deg: 253,
      gust: 11.12,
    },
    visibility: 3748,
    pop: 0.26,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-13 06:00:00',
  },
  {
    dt: 1670922000,
    main: {
      temp: -3.67,
      feels_like: -9.51,
      temp_min: -3.67,
      temp_max: -3.67,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 977,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13d',
      },
    ],
    clouds: {
      all: 97,
    },
    wind: {
      speed: 5,
      deg: 263,
      gust: 9.73,
    },
    visibility: 1150,
    pop: 0.38,
    snow: {
      '3h': 0.13,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-13 09:00:00',
  },
  {
    dt: 1670932800,
    main: {
      temp: -2.38,
      feels_like: -7.73,
      temp_min: -2.38,
      temp_max: -2.38,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 978,
      humidity: 93,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13d',
      },
    ],
    clouds: {
      all: 98,
    },
    wind: {
      speed: 4.75,
      deg: 277,
      gust: 7.48,
    },
    visibility: 3287,
    pop: 0.26,
    snow: {
      '3h': 0.12,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-13 12:00:00',
  },
  {
    dt: 1670943600,
    main: {
      temp: -5.81,
      feels_like: -10.36,
      temp_min: -5.81,
      temp_max: -5.81,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 979,
      humidity: 95,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 96,
    },
    wind: {
      speed: 2.89,
      deg: 267,
      gust: 5.88,
    },
    visibility: 10000,
    pop: 0.01,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-13 15:00:00',
  },
  {
    dt: 1670954400,
    main: {
      temp: -4.43,
      feels_like: -9.43,
      temp_min: -4.43,
      temp_max: -4.43,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 979,
      humidity: 93,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 97,
    },
    wind: {
      speed: 3.65,
      deg: 281,
      gust: 7.72,
    },
    visibility: 4797,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-13 18:00:00',
  },
  {
    dt: 1670965200,
    main: {
      temp: -6.59,
      feels_like: -11.06,
      temp_min: -6.59,
      temp_max: -6.59,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 980,
      humidity: 96,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 97,
    },
    wind: {
      speed: 2.69,
      deg: 272,
      gust: 6.6,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-13 21:00:00',
  },
  {
    dt: 1670976000,
    main: {
      temp: -9.53,
      feels_like: -13.94,
      temp_min: -9.53,
      temp_max: -9.53,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 980,
      humidity: 98,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 90,
    },
    wind: {
      speed: 2.24,
      deg: 266,
      gust: 5.05,
    },
    visibility: 6890,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-14 00:00:00',
  },
  {
    dt: 1670986800,
    main: {
      temp: -11.95,
      feels_like: -16.23,
      temp_min: -11.95,
      temp_max: -11.95,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 980,
      humidity: 99,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 83,
    },
    wind: {
      speed: 1.92,
      deg: 244,
      gust: 1.84,
    },
    visibility: 3550,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-14 03:00:00',
  },
  {
    dt: 1670997600,
    main: {
      temp: -13.38,
      feels_like: -18.04,
      temp_min: -13.38,
      temp_max: -13.38,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 980,
      humidity: 98,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 84,
    },
    wind: {
      speed: 2,
      deg: 217,
      gust: 1.89,
    },
    visibility: 6974,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-14 06:00:00',
  },
  {
    dt: 1671008400,
    main: {
      temp: -7.31,
      feels_like: -10.38,
      temp_min: -7.31,
      temp_max: -7.31,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 981,
      humidity: 92,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 56,
    },
    wind: {
      speed: 1.65,
      deg: 188,
      gust: 2.89,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-14 09:00:00',
  },
  {
    dt: 1671019200,
    main: {
      temp: -5.06,
      feels_like: -9.33,
      temp_min: -5.06,
      temp_max: -5.06,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 979,
      humidity: 89,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d',
      },
    ],
    clouds: {
      all: 44,
    },
    wind: {
      speed: 2.77,
      deg: 144,
      gust: 5.2,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-14 12:00:00',
  },
  {
    dt: 1671030000,
    main: {
      temp: -5.96,
      feels_like: -10.89,
      temp_min: -5.96,
      temp_max: -5.96,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 978,
      humidity: 92,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 98,
    },
    wind: {
      speed: 3.22,
      deg: 124,
      gust: 8.36,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-14 15:00:00',
  },
  {
    dt: 1671040800,
    main: {
      temp: -3.99,
      feels_like: -9.82,
      temp_min: -3.99,
      temp_max: -3.99,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 977,
      humidity: 85,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 4.87,
      deg: 140,
      gust: 11.37,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-14 18:00:00',
  },
  {
    dt: 1671051600,
    main: {
      temp: -3.84,
      feels_like: -9.64,
      temp_min: -3.84,
      temp_max: -3.84,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 975,
      humidity: 86,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.88,
      deg: 138,
      gust: 10.71,
    },
    visibility: 10000,
    pop: 0.15,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-14 21:00:00',
  },
  {
    dt: 1671062400,
    main: {
      temp: -3.67,
      feels_like: -9.59,
      temp_min: -3.67,
      temp_max: -3.67,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 973,
      humidity: 90,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.13,
      deg: 143,
      gust: 11.49,
    },
    visibility: 10000,
    pop: 0.22,
    snow: {
      '3h': 0.13,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-15 00:00:00',
  },
  {
    dt: 1671073200,
    main: {
      temp: -3.4,
      feels_like: -9.25,
      temp_min: -3.4,
      temp_max: -3.4,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 971,
      humidity: 86,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.12,
      deg: 159,
      gust: 11.59,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-15 03:00:00',
  },
  {
    dt: 1671084000,
    main: {
      temp: -2.7,
      feels_like: -7.51,
      temp_min: -2.7,
      temp_max: -2.7,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 971,
      humidity: 85,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.88,
      deg: 174,
      gust: 10.17,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-15 06:00:00',
  },
  {
    dt: 1671094800,
    main: {
      temp: 0.8,
      feels_like: -3.18,
      temp_min: 0.8,
      temp_max: 0.8,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 972,
      humidity: 87,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.83,
      deg: 203,
      gust: 9.96,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-15 09:00:00',
  },
  {
    dt: 1671105600,
    main: {
      temp: 1.05,
      feels_like: -1.1,
      temp_min: 1.05,
      temp_max: 1.05,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 973,
      humidity: 99,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 1.89,
      deg: 257,
      gust: 4.57,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-15 12:00:00',
  },
  {
    dt: 1671116400,
    main: {
      temp: 0.37,
      feels_like: -2.42,
      temp_min: 0.37,
      temp_max: 0.37,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 976,
      humidity: 96,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.34,
      deg: 295,
      gust: 6.92,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-15 15:00:00',
  },
  {
    dt: 1671127200,
    main: {
      temp: -0.15,
      feels_like: -2.41,
      temp_min: -0.15,
      temp_max: -0.15,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 977,
      humidity: 99,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.83,
      deg: 288,
      gust: 5.51,
    },
    visibility: 156,
    pop: 0.24,
    snow: {
      '3h': 0.47,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-15 18:00:00',
  },
  {
    dt: 1671138000,
    main: {
      temp: -0.45,
      feels_like: -0.45,
      temp_min: -0.45,
      temp_max: -0.45,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 978,
      humidity: 99,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 0.74,
      deg: 31,
      gust: 1.32,
    },
    visibility: 169,
    pop: 0.97,
    snow: {
      '3h': 0.77,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-15 21:00:00',
  },
  {
    dt: 1671148800,
    main: {
      temp: -0.53,
      feels_like: -2.38,
      temp_min: -0.53,
      temp_max: -0.53,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 979,
      humidity: 99,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.51,
      deg: 68,
      gust: 2.37,
    },
    visibility: 227,
    pop: 1,
    snow: {
      '3h': 0.93,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-16 00:00:00',
  },
  {
    dt: 1671159600,
    main: {
      temp: -0.5,
      feels_like: -3.17,
      temp_min: -0.5,
      temp_max: -0.5,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 979,
      humidity: 99,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.11,
      deg: 67,
      gust: 3.87,
    },
    visibility: 152,
    pop: 0.91,
    snow: {
      '3h': 0.65,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-16 03:00:00',
  },
  {
    dt: 1671170400,
    main: {
      temp: -0.39,
      feels_like: -4.4,
      temp_min: -0.39,
      temp_max: -0.39,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 978,
      humidity: 99,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.51,
      deg: 68,
      gust: 7.06,
    },
    visibility: 279,
    pop: 1,
    snow: {
      '3h': 0.99,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-16 06:00:00',
  },
  {
    dt: 1671181200,
    main: {
      temp: -0.23,
      feels_like: -4.45,
      temp_min: -0.23,
      temp_max: -0.23,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 978,
      humidity: 99,
      temp_kf: 0,
    },
    weather: [
      {
        id: 601,
        main: 'Snow',
        description: 'snow',
        icon: '13d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.84,
      deg: 54,
      gust: 7.23,
    },
    visibility: 139,
    pop: 1,
    snow: {
      '3h': 2.55,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-16 09:00:00',
  },
  {
    dt: 1671192000,
    main: {
      temp: -0.19,
      feels_like: -4.73,
      temp_min: -0.19,
      temp_max: -0.19,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 976,
      humidity: 99,
      temp_kf: 0,
    },
    weather: [
      {
        id: 601,
        main: 'Snow',
        description: 'snow',
        icon: '13d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.31,
      deg: 54,
      gust: 8.24,
    },
    visibility: 231,
    pop: 1,
    snow: {
      '3h': 7.72,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2022-12-16 12:00:00',
  },
  {
    dt: 1671202800,
    main: {
      temp: -0.72,
      feels_like: -5.6,
      temp_min: -0.72,
      temp_max: -0.72,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 977,
      humidity: 98,
      temp_kf: 0,
    },
    weather: [
      {
        id: 601,
        main: 'Snow',
        description: 'snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.65,
      deg: 38,
      gust: 8.65,
    },
    visibility: 144,
    pop: 1,
    snow: {
      '3h': 10.79,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-16 15:00:00',
  },
  {
    dt: 1671213600,
    main: {
      temp: -1.1,
      feels_like: -6.02,
      temp_min: -1.1,
      temp_max: -1.1,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 979,
      humidity: 98,
      temp_kf: 0,
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.56,
      deg: 44,
      gust: 8.69,
    },
    visibility: 691,
    pop: 1,
    snow: {
      '3h': 0.83,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-16 18:00:00',
  },
  {
    dt: 1671224400,
    main: {
      temp: -1.56,
      feels_like: -6.11,
      temp_min: -1.56,
      temp_max: -1.56,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 981,
      humidity: 98,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.88,
      deg: 39,
      gust: 7.31,
    },
    visibility: 2082,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-16 21:00:00',
  },
  {
    dt: 1671235200,
    main: {
      temp: -2,
      feels_like: -6.7,
      temp_min: -2,
      temp_max: -2,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 981,
      humidity: 98,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.95,
      deg: 67,
      gust: 8.17,
    },
    visibility: 1323,
    pop: 0.1,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-12-17 00:00:00',
  },
];

export const MockedCity = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1670760000,
      main: {
        temp: -1.54,
        feels_like: -6.95,
        temp_min: -1.83,
        temp_max: -1.54,
        pressure: 995,
        sea_level: 995,
        grnd_level: 960,
        humidity: 97,
        temp_kf: 0.29,
      },
      weather: [
        {
          id: 601,
          main: 'Snow',
          description: 'snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.18,
        deg: 294,
        gust: 8.39,
      },
      visibility: 157,
      pop: 1,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-11 12:00:00',
    },
  ],
  city: {
    id: 702550,
    name: 'Lviv',
    coord: {
      lat: 49.842,
      lon: 24.0316,
    },
    country: 'UA',
    population: 15000,
    timezone: 7200,
    sunrise: 1670739087,
    sunset: 1670768571,
  },
};

export const mockedFilteredData = [
  [
    {
      dt: 1670803200,
      main: {
        temp: -1.43,
        feels_like: -6.82,
        temp_min: -1.43,
        temp_max: -1.43,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 972,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.2,
        deg: 317,
        gust: 10.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-12 00:00:00',
    },
    {
      dt: 1670814000,
      main: {
        temp: -1.77,
        feels_like: -6.83,
        temp_min: -2.46,
        temp_max: -1.77,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 972,
        humidity: 76,
        temp_kf: 0.69,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 4.53,
        deg: 316,
        gust: 9.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-12 03:00:00',
    },
    {
      dt: 1670824800,
      main: {
        temp: -2.47,
        feels_like: -6.15,
        temp_min: -2.99,
        temp_max: -2.47,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 973,
        humidity: 78,
        temp_kf: 0.52,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 2.69,
        deg: 308,
        gust: 7.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-12 06:00:00',
    },
    {
      dt: 1670835600,
      main: {
        temp: -1.14,
        feels_like: -4.69,
        temp_min: -1.14,
        temp_max: -1.14,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 975,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 2.81,
        deg: 320,
        gust: 4.2,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-12 09:00:00',
    },
    {
      dt: 1670846400,
      main: {
        temp: -0.11,
        feels_like: -2.58,
        temp_min: -0.11,
        temp_max: -0.11,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 975,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 2,
        deg: 351,
        gust: 2.39,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-12 12:00:00',
    },
    {
      dt: 1670857200,
      main: {
        temp: -2.25,
        feels_like: -4.88,
        temp_min: -2.25,
        temp_max: -2.25,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 976,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 1.86,
        deg: 12,
        gust: 2.52,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-12 15:00:00',
    },
    {
      dt: 1670868000,
      main: {
        temp: -2.69,
        feels_like: -4.91,
        temp_min: -2.69,
        temp_max: -2.69,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 977,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 1.55,
        deg: 327,
        gust: 2.61,
      },
      visibility: 8538,
      pop: 0.24,
      snow: {
        '3h': 0.17,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-12 18:00:00',
    },
    {
      dt: 1670878800,
      main: {
        temp: -3.65,
        feels_like: -3.65,
        temp_min: -3.65,
        temp_max: -3.65,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 978,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 0.76,
        deg: 285,
        gust: 1.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-12 21:00:00',
    },
  ],
  [
    {
      dt: 1670889600,
      main: {
        temp: -4.07,
        feels_like: -7.23,
        temp_min: -4.07,
        temp_max: -4.07,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 979,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 44,
      },
      wind: {
        speed: 2.02,
        deg: 246,
        gust: 3.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-13 00:00:00',
    },
    {
      dt: 1670900400,
      main: {
        temp: -4.58,
        feels_like: -7.7,
        temp_min: -4.58,
        temp_max: -4.58,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 980,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 1.94,
        deg: 232,
        gust: 3.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-13 03:00:00',
    },
    {
      dt: 1670911200,
      main: {
        temp: -4.67,
        feels_like: -7.94,
        temp_min: -4.67,
        temp_max: -4.67,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 981,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 2.03,
        deg: 266,
        gust: 4.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-13 06:00:00',
    },
    {
      dt: 1670922000,
      main: {
        temp: -2.61,
        feels_like: -7.25,
        temp_min: -2.61,
        temp_max: -2.61,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 982,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.69,
        deg: 256,
        gust: 6.89,
      },
      visibility: 5573,
      pop: 0.28,
      snow: {
        '3h': 0.14,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-13 09:00:00',
    },
    {
      dt: 1670932800,
      main: {
        temp: -1.72,
        feels_like: -6.76,
        temp_min: -1.72,
        temp_max: -1.72,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 982,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 4.52,
        deg: 295,
        gust: 8.04,
      },
      visibility: 8999,
      pop: 0.45,
      snow: {
        '3h': 0.36,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-13 12:00:00',
    },
    {
      dt: 1670943600,
      main: {
        temp: -3.39,
        feels_like: -7.88,
        temp_min: -3.39,
        temp_max: -3.39,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 983,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 3.32,
        deg: 321,
        gust: 8.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-13 15:00:00',
    },
    {
      dt: 1670954400,
      main: {
        temp: -4.61,
        feels_like: -7.12,
        temp_min: -4.61,
        temp_max: -4.61,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 984,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 58,
      },
      wind: {
        speed: 1.56,
        deg: 309,
        gust: 4.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-13 18:00:00',
    },
    {
      dt: 1670965200,
      main: {
        temp: -5.62,
        feels_like: -8.2,
        temp_min: -5.62,
        temp_max: -5.62,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 984,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 1.52,
        deg: 294,
        gust: 3.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-13 21:00:00',
    },
  ],
  [
    {
      dt: 1670976000,
      main: {
        temp: -6.34,
        feels_like: -6.34,
        temp_min: -6.34,
        temp_max: -6.34,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 985,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 1.02,
        deg: 308,
        gust: 1.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-14 00:00:00',
    },
    {
      dt: 1670986800,
      main: {
        temp: -7.02,
        feels_like: -7.02,
        temp_min: -7.02,
        temp_max: -7.02,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 985,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 0.35,
        deg: 9,
        gust: 0.64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-14 03:00:00',
    },
    {
      dt: 1670997600,
      main: {
        temp: -7.31,
        feels_like: -7.31,
        temp_min: -7.31,
        temp_max: -7.31,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 985,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 0.81,
        deg: 128,
        gust: 0.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-14 06:00:00',
    },
    {
      dt: 1671008400,
      main: {
        temp: -4.02,
        feels_like: -7.53,
        temp_min: -4.02,
        temp_max: -4.02,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 985,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 2.29,
        deg: 136,
        gust: 3.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-14 09:00:00',
    },
    {
      dt: 1671019200,
      main: {
        temp: -1.86,
        feels_like: -6.41,
        temp_min: -1.86,
        temp_max: -1.86,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 983,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 3.79,
        deg: 133,
        gust: 5.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-14 12:00:00',
    },
    {
      dt: 1671030000,
      main: {
        temp: -3.11,
        feels_like: -7.99,
        temp_min: -3.11,
        temp_max: -3.11,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 982,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 3.85,
        deg: 124,
        gust: 8.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-14 15:00:00',
    },
    {
      dt: 1671040800,
      main: {
        temp: -3.14,
        feels_like: -8.56,
        temp_min: -3.14,
        temp_max: -3.14,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 981,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 4.58,
        deg: 127,
        gust: 9.45,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-14 18:00:00',
    },
    {
      dt: 1671051600,
      main: {
        temp: -2.97,
        feels_like: -8.4,
        temp_min: -2.97,
        temp_max: -2.97,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 980,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.65,
        deg: 123,
        gust: 8.63,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-14 21:00:00',
    },
  ],
  [
    {
      dt: 1671062400,
      main: {
        temp: -3.69,
        feels_like: -8.84,
        temp_min: -3.69,
        temp_max: -3.69,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 978,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 4.03,
        deg: 129,
        gust: 8.09,
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-15 00:00:00',
    },
    {
      dt: 1671073200,
      main: {
        temp: -3.57,
        feels_like: -7.53,
        temp_min: -3.57,
        temp_max: -3.57,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 976,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 2.75,
        deg: 134,
        gust: 6.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-15 03:00:00',
    },
    {
      dt: 1671084000,
      main: {
        temp: -2.24,
        feels_like: -5.01,
        temp_min: -2.24,
        temp_max: -2.24,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 976,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 1.96,
        deg: 141,
        gust: 3.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-15 06:00:00',
    },
    {
      dt: 1671094800,
      main: {
        temp: 1.39,
        feels_like: -0.56,
        temp_min: 1.39,
        temp_max: 1.39,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 977,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 1.78,
        deg: 140,
        gust: 3.25,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-15 09:00:00',
    },
    {
      dt: 1671105600,
      main: {
        temp: 3.32,
        feels_like: 3.32,
        temp_min: 3.32,
        temp_max: 3.32,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 977,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 1.04,
        deg: 134,
        gust: 1.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-15 12:00:00',
    },
    {
      dt: 1671116400,
      main: {
        temp: 1.13,
        feels_like: 1.13,
        temp_min: 1.13,
        temp_max: 1.13,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 979,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 0.34,
        deg: 229,
        gust: 0.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-15 15:00:00',
    },
    {
      dt: 1671127200,
      main: {
        temp: 1.59,
        feels_like: 1.59,
        temp_min: 1.59,
        temp_max: 1.59,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 981,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 1.26,
        deg: 348,
        gust: 1.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-15 18:00:00',
    },
    {
      dt: 1671138000,
      main: {
        temp: 0.25,
        feels_like: -1.49,
        temp_min: 0.25,
        temp_max: 0.25,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 982,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.51,
        deg: 336,
        gust: 1.91,
      },
      visibility: 10000,
      pop: 0.33,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-15 21:00:00',
    },
  ],
  [
    {
      dt: 1671148800,
      main: {
        temp: 0.43,
        feels_like: 0.43,
        temp_min: 0.43,
        temp_max: 0.43,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 983,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.8,
        deg: 36,
        gust: 1.09,
      },
      visibility: 9818,
      pop: 0.33,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-16 00:00:00',
    },
    {
      dt: 1671159600,
      main: {
        temp: 0.69,
        feels_like: 0.69,
        temp_min: 0.69,
        temp_max: 0.69,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 982,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.93,
        deg: 86,
        gust: 1.01,
      },
      visibility: 10000,
      pop: 0.21,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-16 03:00:00',
    },
    {
      dt: 1671170400,
      main: {
        temp: 0.89,
        feels_like: -1.56,
        temp_min: 0.89,
        temp_max: 0.89,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 981,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.12,
        deg: 118,
        gust: 4.94,
      },
      visibility: 10000,
      pop: 0.36,
      rain: {
        '3h': 0.17,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-16 06:00:00',
    },
    {
      dt: 1671181200,
      main: {
        temp: 1.24,
        feels_like: -1.75,
        temp_min: 1.24,
        temp_max: 1.24,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 981,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.71,
        deg: 103,
        gust: 5.8,
      },
      visibility: 10000,
      pop: 0.75,
      rain: {
        '3h': 0.52,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-16 09:00:00',
    },
    {
      dt: 1671192000,
      main: {
        temp: 1.23,
        feels_like: -0.34,
        temp_min: 1.23,
        temp_max: 1.23,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 979,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.49,
        deg: 50,
        gust: 1.79,
      },
      visibility: 10000,
      pop: 0.78,
      rain: {
        '3h': 0.95,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-12-16 12:00:00',
    },
    {
      dt: 1671202800,
      main: {
        temp: 0.72,
        feels_like: -1.24,
        temp_min: 0.72,
        temp_max: 0.72,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 980,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.71,
        deg: 330,
        gust: 2.73,
      },
      visibility: 3249,
      pop: 0.9,
      rain: {
        '3h': 1.6,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-16 15:00:00',
    },
    {
      dt: 1671213600,
      main: {
        temp: 0.85,
        feels_like: -1.61,
        temp_min: 0.85,
        temp_max: 0.85,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 982,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.12,
        deg: 318,
        gust: 4.34,
      },
      visibility: 7297,
      pop: 0.82,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-16 18:00:00',
    },
    {
      dt: 1671224400,
      main: {
        temp: 0.71,
        feels_like: -1.11,
        temp_min: 0.71,
        temp_max: 0.71,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 984,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.61,
        deg: 324,
        gust: 3.09,
      },
      visibility: 413,
      pop: 0.09,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-12-16 21:00:00',
    },
  ],
];
