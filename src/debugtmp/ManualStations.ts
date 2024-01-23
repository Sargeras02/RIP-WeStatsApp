import { WeatherStation } from "../api/WeStatsApiModel";

const manualStations: WeatherStation[] = [
  {
    station_id: 1,
    name: "Метеостанция Москва",
    location: "Москва, Россия",
    open_date: "1998-05-15",
    description: "Основана в 1998 году в Москве. Осуществляет наблюдения за погодными условиями в столице России.",
    status: false,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wetterstation01.jpeg/330px-Wetterstation01.jpeg",
  },
  {
    station_id: 2,
    name: "Метеостанция Санкт-Петербург",
    location: "Санкт-Петербург, Россия",
    open_date: "2005-10-20",
    description: "Станция в Санкт-Петербурге начала свою работу в 2005 году. Служит для мониторинга климата в Северной столице.",
    status: false,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wetterstation01.jpeg/330px-Wetterstation01.jpeg",
  },
  {
    station_id: 3,
    name: "Метеостанция Екатеринбург",
    location: "Екатеринбург, Россия",
    open_date: "1997-08-12",
    description: "Екатеринбургская метеостанция работает с 1997 года. Служит для отслеживания климатических изменений на Урале.",
    status: true,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wetterstation01.jpeg/330px-Wetterstation01.jpeg",
  },
  {
    station_id: 4,
    name: "Метеостанция Нижний Новгород",
    location: "Нижний Новгород, Россия",
    open_date: "2000-03-25",
    description: "Станция в Нижнем Новгороде начала работу в 2000 году. Осуществляет мониторинг погоды в Волго-Вятском регионе.",
    status: true,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wetterstation01.jpeg/330px-Wetterstation01.jpeg",
  },
  {
    station_id: 5,
    name: "Метеостанция Красноярск",
    location: "Красноярск, Россия",
    open_date: "2012-11-08",
    description: "Красноярская метеостанция начала свою деятельность в 2012 году. Предназначена для мониторинга климата в Сибири.",
    status: true,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wetterstation01.jpeg/330px-Wetterstation01.jpeg",
  },
  {
    station_id: 6,
    name: "Метеостанция Владивосток",
    location: "Владивосток, Россия",
    open_date: "2019-06-30",
    description: "Метеостанция во Владивостоке начала работу в 2019 году. Обеспечивает наблюдение за погодными условиями на Дальнем Востоке.",
    status: true,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wetterstation01.jpeg/330px-Wetterstation01.jpeg",
  },
];

export default manualStations;