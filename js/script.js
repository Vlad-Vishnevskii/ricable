ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
      center: [55.7, 37.6],
      zoom: 9,
      controls: ['fullscreenControl'],
    }),
    objectManager = new ymaps.ObjectManager();

  objectManager.objects.options.set({
    preset: 'islands#redDotIcon',
  });
  myMap.geoObjects.add(objectManager);
  myMap.behaviors.disable('scrollZoom'); // расскоментировать для отключения маштабирования при скроле
  myMap.controls.add('zoomControl', {
    float: 'none',
    position: {
      right: 10,
      bottom: 45,
    },
  });
  var points = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 0,
        geometry: {
          type: 'Point',
          coordinates: [64.550468, 39.775883],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">Hi-Fi салон «Ника»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79115715278" class="maps__hints--phone">+7 (911) 571-52-78</a></p><h4>Сайт</h4><p><a href="https://www.hifi29.ru/" class="maps__hints--site" target="_blank">www.hifi29.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">Hi-Fi салон «Ника»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 1,
        geometry: {
          type: 'Point',
          coordinates: [60.92996, 76.558525],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">Салон «Ливерпуль»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79505028101" class="maps__hints--phone">+7 (950) 502-81-01</a></p><h4>Сайт</h4><p><a href="https://www.hifi-av.ru/" class="maps__hints--site" target="_blank">www.hifi-av.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">Салон «Ливерпуль»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 2,
        geometry: {
          type: 'Point',
          coordinates: [60.002931, 30.399259],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">Салон «Аудиокапитал»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79219603330" class="maps__hints--phone">+7 (921) 960-33-30</a></p><h4>Сайт</h4><p><a href="https://www.audiocapital.ru/" class="maps__hints--site" target="_blank">www.audiocapital.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">Салон «Аудиокапитал»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 3,
        geometry: {
          type: 'Point',
          coordinates: [59.994112, 30.14659],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Триумф Аудио»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78129070212" class="maps__hints--phone">+7 (812) 907-02-12</a></p><h4>Сайт</h4><p><a href="https://www.tr-audio.ru/" class="maps__hints--site" target="_blank">www.tr-audio.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Триумф Аудио»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 4,
        geometry: {
          type: 'Point',
          coordinates: [59.962039, 30.275543],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Spb-HiFi»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78123132553" class="maps__hints--phone">+7 (812) 313-25-53</a></p><h4>Сайт</h4><p><a href="https://www.spb-hifi.ru/" class="maps__hints--site" target="_blank">www.spb-hifi.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Spb-HiFi»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 5,
        geometry: {
          type: 'Point',
          coordinates: [59.945544, 30.348297],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78123892738" class="maps__hints--phone">+7 (812) 389-27-38</a></p><h4>Сайт</h4><p><a href="https://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 6,
        geometry: {
          type: 'Point',
          coordinates: [59.942381, 30.352681],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«adk.audio»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78126605414" class="maps__hints--phone">+7 (812) 660-54-14</a></p><h4>Сайт</h4><p><a href="https://www.adk.audio/" class="maps__hints--site" target="_blank">www.adk.audio</a></p></div>',
          hintContent: '<h2 class="mb-1">«adk.audio»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 7,
        geometry: {
          type: 'Point',
          coordinates: [59.927576, 30.358287],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Stereozona»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78125078262" class="maps__hints--phone">+7 (812) 507-82-62</a></p><h4>Сайт</h4><p><a href="https://www.stereozona.ru/" class="maps__hints--site" target="_blank">www.stereozona.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Stereozona»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 8,
        geometry: {
          type: 'Point',
          coordinates: [59.925362, 30.352007],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Диез+»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78126678581" class="maps__hints--phone">+7 (812) 667-85-81</a></p><h4>Сайт</h4><p><a href="https://www.elitehifi.spb.ru/" class="maps__hints--site" target="_blank">www.elitehifi.spb.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Диез+»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 9,
        geometry: {
          type: 'Point',
          coordinates: [57.992656, 56.251973],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78005119504" class="maps__hints--phone">+7 (800) 511-95-04</a></p><h4>Сайт</h4><p><a href="https://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 10,
        geometry: {
          type: 'Point',
          coordinates: [57.170541, 65.551881],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">Салон «Ливерпуль»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79504862828" class="maps__hints--phone">+7 (950) 486-28-28</a></p><h4>Сайт</h4><p><a href="https://www.hifi-av.ru/" class="maps__hints--site" target="_blank">www.hifi-av.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">Салон «Ливерпуль»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 11,
        geometry: {
          type: 'Point',
          coordinates: [56.832817, 60.619851],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+73433394815" class="maps__hints--phone">+7 (343) 339-48-15</a></p><h4>Сайт</h4><p><a href="https://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 12,
        geometry: {
          type: 'Point',
          coordinates: [56.815454, 60.569366],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Studio HiFi»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+73432342533" class="maps__hints--phone">+7 (343) 234-25-33</a></p><h4>Сайт</h4><p><a href="https://www.studiohifi.ru/" class="maps__hints--site" target="_blank">www.studiohifi.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Studio HiFi»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 13,
        geometry: {
          type: 'Point',
          coordinates: [56.319929, 44.009184],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Hi-Fi Аудио»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78314331724" class="maps__hints--phone">+7 (831) 433-17-24</a></p><h4>Сайт</h4><p><a href="https://www.audio-hifi.ru/" class="maps__hints--site" target="_blank">www.audio-hifi.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Hi-Fi Аудио»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 14,
        geometry: {
          type: 'Point',
          coordinates: [56.311376, 43.985442],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«ZARATUSTRA SW»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78312789631" class="maps__hints--phone">+7 (831) 278-96-31</a></p><h4>Сайт</h4><p><a href="https://www.zaratustra-nn.ru/" class="maps__hints--site" target="_blank">www.zaratustra-nn.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«ZARATUSTRA SW»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 15,
        geometry: {
          type: 'Point',
          coordinates: [56.311321, 43.998503],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78312199635" class="maps__hints--phone">+7 (831) 219-96-35</a></p><h4>Сайт</h4><p><a href="https://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 16,
        geometry: {
          type: 'Point',
          coordinates: [56.310747, 44.00136],
        },
        properties: {
          balloonContentHeader:
            '<h2 class="mb-1">«Галерея Домашних Кинотеатров»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78312180050" class="maps__hints--phone">+7 (831) 218-00-50</a></p><h4>Сайт</h4><p><a href="https://www.gdknn.ru/" class="maps__hints--site" target="_blank">www.gdknn.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Галерея Домашних Кинотеатров»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 17,
        geometry: {
          type: 'Point',
          coordinates: [56.302118, 38.135828],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«салон Cinemascop»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79067307270" class="maps__hints--phone">+7 (831) 218-00-50</a></p><h4>Сайт</h4><p><a href="https://www.gdknn.ru/" class="maps__hints--site" target="_blank">www.gdknn.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«салон Cinemascop»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 18,
        geometry: {
          type: 'Point',
          coordinates: [55.885145, 37.395653],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«AVnirvana»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74952118082" class="maps__hints--phone">+7 (495) 211-80-82</a></p><h4>Сайт</h4><p><a href="https://www.avnirvana.ru/" class="maps__hints--site" target="_blank">www.avnirvana.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«AVnirvana»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 19,
        geometry: {
          type: 'Point',
          coordinates: [55.856876, 37.559092],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«салон Cinemascop»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79167814521" class="maps__hints--phone">+7 (916) 781-45-21</a></p><h4>Сайт</h4><p><a href="https://www.cinemascop.ru/" class="maps__hints--site" target="_blank">www.cinemascop.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«салон Cinemascop»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 20,
        geometry: {
          type: 'Point',
          coordinates: [55.831999, 37.625639],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Vipacoustic»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74959992846" class="maps__hints--phone">+7 (495) 999-28-46</a></p><h4>Сайт</h4><p><a href="https://www.vipacoustic.ru/" class="maps__hints--site" target="_blank">www.vipacoustic.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Vipacoustic»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 21,
        geometry: {
          type: 'Point',
          coordinates: [55.806757, 37.583805],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Dr.Head»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74955131043" class="maps__hints--phone">+7 (495) 513-10-43</a></p><h4>Сайт</h4><p><a href="https://www.doctorhead.ru/" class="maps__hints--site" target="_blank">www.doctorhead.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Dr.Head»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 22,
        geometry: {
          type: 'Point',
          coordinates: [55.80275, 37.584604],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«PROEKTOR77.RU»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78005008405" class="maps__hints--phone">+7 (800) 500-84-05</a></p><h4>Сайт</h4><p><a href="https://www.proektor77.ru/" class="maps__hints--site" target="_blank">www.proektor77.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«PROEKTOR77.RU»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 23,
        geometry: {
          type: 'Point',
          coordinates: [55.799865, 37.274366],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«High End Avenue»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78005001158" class="maps__hints--phone">+7 (800) 500-11-58</a></p><h4>Сайт</h4><p><a href="https://www.hiend.store/" class="maps__hints--site" target="_blank">www.hiend.store</a></p></div>',
          hintContent: '<h2 class="mb-1">«High End Avenue»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 24,
        geometry: {
          type: 'Point',
          coordinates: [55.792625, 49.163044],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78005119504" class="maps__hints--phone">+7 (800) 511-95-04</a></p><h4>Сайт</h4><p><a href="https://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 25,
        geometry: {
          type: 'Point',
          coordinates: [55.790448, 37.680517],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Зенит Хай-Фай»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74992680396" class="maps__hints--phone">+7 (499) 268-03-96</a></p><h4>Сайт</h4><p><a href="https://www.zenit-hi-fi.ru/" class="maps__hints--site" target="_blank">www.zenit-hi-fi.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Зенит Хай-Фай»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 26,
        geometry: {
          type: 'Point',
          coordinates: [55.783296, 37.708212],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Аудиомания»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74952680468" class="maps__hints--phone">+7 (495) 268-04-68</a></p><h4>Сайт</h4><p><a href="https://www.audiomania.ru/" class="maps__hints--site" target="_blank">www.audiomania.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Аудиомания»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 27,
        geometry: {
          type: 'Point',
          coordinates: [55.781626, 37.580894],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Huge Sound»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74993916454" class="maps__hints--phone">+7 (499) 391-64-54</a></p><h4>Сайт</h4><p><a href="https://www.huge-sound.com/" class="maps__hints--site" target="_blank">www.huge-sound.com</a></p></div>',
          hintContent: '<h2 class="mb-1">«Huge Sound»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 28,
        geometry: {
          type: 'Point',
          coordinates: [55.780588, 37.590677],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74957555560" class="maps__hints--phone">+7 (495) 755-55-60</a></p><h4>Сайт</h4><p><a href="https://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 29,
        geometry: {
          type: 'Point',
          coordinates: [55.762151, 37.631927],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«adk.audio»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78005055547" class="maps__hints--phone">+7 (800) 505-55-47</a></p><h4>Сайт</h4><p><a href="https://www.adk.audio/" class="maps__hints--site" target="_blank">www.adk.audio</a></p></div>',
          hintContent: '<h2 class="mb-1">«adk.audio»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 30,
        geometry: {
          type: 'Point',
          coordinates: [55.754694, 37.621417],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Аудио и Видео в ГУМе»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74994085426" class="maps__hints--phone">+7 (499) 408-54-26</a></p><h4>Сайт</h4><p><a href="https://www.spl.ru/" class="maps__hints--site" target="_blank">www.spl.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Аудио и Видео в ГУМе»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 31,
        geometry: {
          type: 'Point',
          coordinates: [55.753377, 37.624912],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Сфера Звука»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79168052445" class="maps__hints--phone">+7 (916) 805-24-45</a></p><h4>Сайт</h4><p><a href="https://www.sferazvyka.ru/" class="maps__hints--site" target="_blank">www.sferazvyka.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Сфера Звука»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 32,
        geometry: {
          type: 'Point',
          coordinates: [55.753195, 37.584155],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74957555560" class="maps__hints--phone">+7 (495) 755-55-60</a></p><h4>Сайт</h4><p><a href="https://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 33,
        geometry: {
          type: 'Point',
          coordinates: [55.752247, 37.671193],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«AbbGroup»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74957555560" class="maps__hints--phone">+7 (495) 755-55-60</a></p><h4>Сайт</h4><p><a href="https://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«AbbGroup»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 34,
        geometry: {
          type: 'Point',
          coordinates: [55.752045, 37.66998],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Галарея Назаров»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74951377501" class="maps__hints--phone">+7 (495) 137-75-01</a></p><h4>Сайт</h4><p><a href="https://www.nazarov-gallery.ru/" class="maps__hints--site" target="_blank">www.nazarov-gallery.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Галарея Назаров»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 35,
        geometry: {
          type: 'Point',
          coordinates: [55.751933, 37.593066],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Dr.Head»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74956466155" class="maps__hints--phone">+7 (495) 646-61-55</a></p><h4>Сайт</h4><p><a href="https://www.doctorhead.ru/" class="maps__hints--site" target="_blank">www.doctorhead.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Dr.Head»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 36,
        geometry: {
          type: 'Point',
          coordinates: [55.749334, 37.701843],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«AVSound»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74957488903" class="maps__hints--phone">+7 (495) 748-89-03</a></p><h4>Сайт</h4><p><a href="http://www.avsound.ru/" class="maps__hints--site" target="_blank">www.avsound.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«AVSound»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 37,
        geometry: {
          type: 'Point',
          coordinates: [55.748458, 37.660952],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«SoundProLab»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74957838553" class="maps__hints--phone">+7 (495) 783-85-53</a></p><h4>Сайт</h4><p><a href="http://www.spl.ru/" class="maps__hints--site" target="_blank">www.spl.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«SoundProLab»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 38,
        geometry: {
          type: 'Point',
          coordinates: [55.7479, 37.700208],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«InSound»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74959789646" class="maps__hints--phone">+7 (495) 978-96-46</a></p><h4>Сайт</h4><p><a href="http://www.in-sound.ru/" class="maps__hints--site" target="_blank">www.in-sound.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«InSound»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 39,
        geometry: {
          type: 'Point',
          coordinates: [55.744951, 37.66256],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Аудиомания»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74951474368" class="maps__hints--phone">+7 (495) 147-43-68</a></p><h4>Сайт</h4><p><a href="http://www.audiomania.ru/" class="maps__hints--site" target="_blank">www.audiomania.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Аудиомания»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 40,
        geometry: {
          type: 'Point',
          coordinates: [55.743588, 37.62519],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Галарея Назаров»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74951377501" class="maps__hints--phone">+7 (495) 137-75-01</a></p><h4>Сайт</h4><p><a href="http://www.nazarov-gallery.ru/" class="maps__hints--site" target="_blank">www.nazarov-gallery.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Галарея Назаров»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 41,
        geometry: {
          type: 'Point',
          coordinates: [55.739047, 37.640982],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Солярис»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74959519944" class="maps__hints--phone">+7 (495) 951-99-44</a></p><h4>Сайт</h4><p><a href="http://www.solyaris.ru/" class="maps__hints--site" target="_blank">www.solyaris.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Солярис»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 42,
        geometry: {
          type: 'Point',
          coordinates: [55.737522, 37.722307],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«HiFiRussia»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74996499014" class="maps__hints--phone">+7 (499) 649-90-14</a></p><h4>Сайт</h4><p><a href="http://www.hifirussia.ru/" class="maps__hints--site" target="_blank">www.hifirussia.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«HiFiRussia»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 43,
        geometry: {
          type: 'Point',
          coordinates: [55.733579, 37.585179],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Elite Cinema»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74951352550" class="maps__hints--phone">+7 (495) 135-25-50</a></p><h4>Сайт</h4><p><a href="http://www.elitecinema.ru/" class="maps__hints--site" target="_blank">www.elitecinema.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Elite Cinema»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 44,
        geometry: {
          type: 'Point',
          coordinates: [55.733041, 37.614752],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Нота Плюс»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74951059922" class="maps__hints--phone">+7 (495) 105-99-22</a></p><h4>Сайт</h4><p><a href="http://www.nota.ru/" class="maps__hints--site" target="_blank">www.nota.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Нота Плюс»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 45,
        geometry: {
          type: 'Point',
          coordinates: [55.723217, 37.703182],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Deep sound»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74951501249" class="maps__hints--phone">+7 (495) 150-12-49</a></p><h4>Сайт</h4><p><a href="http://www.deep-sound.ru/" class="maps__hints--site" target="_blank">www.deep-sound.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Deep sound»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 46,
        geometry: {
          type: 'Point',
          coordinates: [55.722036, 37.602085],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74957555560" class="maps__hints--phone">+7 (495) 755-55-60</a></p><h4>Сайт</h4><p><a href="http://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 47,
        geometry: {
          type: 'Point',
          coordinates: [55.714992, 37.613871],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Винилмаркт»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74951093382" class="maps__hints--phone">+7 (495) 109-33-82</a></p><h4>Сайт</h4><p><a href="http://www.vinylmarkt.ru/" class="maps__hints--site" target="_blank">www.vinylmarkt.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Винилмаркт»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 48,
        geometry: {
          type: 'Point',
          coordinates: [55.70855, 37.59497],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74957555560" class="maps__hints--phone">+7 (495) 755-55-60</a></p><h4>Сайт</h4><p><a href="http://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 49,
        geometry: {
          type: 'Point',
          coordinates: [55.701699, 37.604044],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«AVComfort»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74952496090" class="maps__hints--phone">+7 (495) 249-60-90</a></p><h4>Сайт</h4><p><a href="http://www.avcomfort.ru/" class="maps__hints--site" target="_blank">www.avcomfort.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«AVComfort»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 50,
        geometry: {
          type: 'Point',
          coordinates: [55.673818, 37.565183],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Salon HiFi»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74957716495" class="maps__hints--phone">+7 (495) 771-64-95</a></p><h4>Сайт</h4><p><a href="http://www.salonhifi.ru/" class="maps__hints--site" target="_blank">www.salonhifi.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Salon HiFi»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 51,
        geometry: {
          type: 'Point',
          coordinates: [55.192281, 61.370753],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«adk.audio»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+73422368514" class="maps__hints--phone">+7 (342) 236-85-14</a></p><h4>Сайт</h4><p><a href="http://www.adk.audio/" class="maps__hints--site" target="_blank">www.adk.audio</a></p></div>',
          hintContent: '<h2 class="mb-1">«adk.audio»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 52,
        geometry: {
          type: 'Point',
          coordinates: [55.161821, 61.397721],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Ural-Hi-Fi»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+73512161699" class="maps__hints--phone">+7 (351) 216-16-99</a></p><h4>Сайт</h4><p><a href="http://www.ural-hifi.ru/" class="maps__hints--site" target="_blank">www.ural-hifi.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Ural-Hi-Fi»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 53,
        geometry: {
          type: 'Point',
          coordinates: [55.15714, 61.369541],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+73512208392" class="maps__hints--phone">+7 (351) 220-83-92</a></p><h4>Сайт</h4><p><a href="http://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 54,
        geometry: {
          type: 'Point',
          coordinates: [55.032722, 82.911617],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+73832078665" class="maps__hints--phone">+7 (383) 207-86-65</a></p><h4>Сайт</h4><p><a href="http://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 55,
        geometry: {
          type: 'Point',
          coordinates: [55.015428, 82.933249],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Utopia Sound»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+73833751197" class="maps__hints--phone">+7 (383) 375-11-97</a></p><h4>Сайт</h4><p><a href="http://www.big54.ru/" class="maps__hints--site" target="_blank">www.big54.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Utopia Sound»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 56,
        geometry: {
          type: 'Point',
          coordinates: [54.960116, 73.386843],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Аудио Стиль»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79136855595" class="maps__hints--phone">+7 (913) 685-55-95</a></p><h4>Сайт</h4><p><a href="http://www.audio55.ru/" class="maps__hints--site" target="_blank">www.audio55.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Аудио Стиль»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 57,
        geometry: {
          type: 'Point',
          coordinates: [54.78208, 32.050111],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«DroidOne»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79107873107" class="maps__hints--phone">+7 (910) 787-31-07</a></p><h4>Сайт</h4><p><a href="http://www.droidone.ru/" class="maps__hints--site" target="_blank">www.droidone.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«DroidOne»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 58,
        geometry: {
          type: 'Point',
          coordinates: [54.308414, 48.388013],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Гармония Звука»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79677711808" class="maps__hints--phone">+7 (967) 771-18-08</a></p><h4>Сайт</h4><p><a href="http://www.ul-harmonysound.com/" class="maps__hints--site" target="_blank">www.ul-harmonysound.com</a></p></div>',
          hintContent: '<h2 class="mb-1">«Гармония Звука»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 59,
        geometry: {
          type: 'Point',
          coordinates: [53.767815, 87.133726],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Синема-Арт»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79039452025" class="maps__hints--phone">+7 (903) 945-20-25</a></p><h4>Сайт</h4><p><a href="http://www.cinema-art-install.ru/" class="maps__hints--site" target="_blank">www.cinema-art-install.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Синема-Арт»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 60,
        geometry: {
          type: 'Point',
          coordinates: [53.20514, 50.121034],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78462295341" class="maps__hints--phone">+7 (846) 229-53-41</a></p><h4>Сайт</h4><p><a href="http://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 61,
        geometry: {
          type: 'Point',
          coordinates: [53.193936, 50.095342],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Hi-Fi-Самара»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78462764040" class="maps__hints--phone">+7 (846) 276-40-40</a></p><h4>Сайт</h4><p><a href="http://www.hifi-samara.ru/" class="maps__hints--site" target="_blank">www.hifi-samara.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Hi-Fi-Самара»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 62,
        geometry: {
          type: 'Point',
          coordinates: [52.29145, 104.297351],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Fonograf»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+73952798844" class="maps__hints--phone">+7 (3952) 79-88-44</a></p><h4>Сайт</h4><p><a href="http://www.fonograf-studio.ru/" class="maps__hints--site" target="_blank">www.fonograf-studio.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Fonograf»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 63,
        geometry: {
          type: 'Point',
          coordinates: [51.537176, 46.009526],
        },
        properties: {
          balloonContentHeader:
            '<h2 class="mb-1">«Академия Домашнего Кинотеатра»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78452522112" class="maps__hints--phone">+7 (8452) 52-21-12</a></p><h4>Сайт</h4><p><a href="http://www.homemedia.ru/" class="maps__hints--site" target="_blank">www.homemedia.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Академия Домашнего Кинотеатра»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 64,
        geometry: {
          type: 'Point',
          coordinates: [51.53498, 46.015284],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Магия Звука»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78452426792" class="maps__hints--phone">+7 (845) 242-67-92</a></p><h4>Сайт</h4><p><a href="http://www.magiazvuka.com/" class="maps__hints--site" target="_blank">www.magiazvuka.com</a></p></div>',
          hintContent: '<h2 class="mb-1">«Магия Звука»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 65,
        geometry: {
          type: 'Point',
          coordinates: [47.249598, 39.755356],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78632098336" class="maps__hints--phone">+7 (863) 209-83-36</a></p><h4>Сайт</h4><p><a href="http://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 66,
        geometry: {
          type: 'Point',
          coordinates: [47.226998, 39.741639],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«adk.audio»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79094117284" class="maps__hints--phone">+7 (909) 411-72-84</a></p><h4>Сайт</h4><p><a href="http://www.adk.audio/" class="maps__hints--site" target="_blank">www.adk.audio</a></p></div>',
          hintContent: '<h2 class="mb-1">«adk.audio»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 67,
        geometry: {
          type: 'Point',
          coordinates: [45.038776, 38.983461],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Pult.ru»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+78612055364" class="maps__hints--phone">+7 (861) 205-53-64</a></p><h4>Сайт</h4><p><a href="http://www.pult.ru/" class="maps__hints--site" target="_blank">www.pult.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Pult.ru»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 68,
        geometry: {
          type: 'Point',
          coordinates: [45.027241, 38.967857],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Репортер»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79184524545" class="maps__hints--phone">+7 (918) 452-45-45</a></p><h4>Сайт</h4><p><a href="http://www.hifi-reporter.ru/" class="maps__hints--site" target="_blank">www.hifi-reporter.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Репортер»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 69,
        geometry: {
          type: 'Point',
          coordinates: [44.567364, 33.465793],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«Просто-Аудио»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+79780218883" class="maps__hints--phone">+7 (978) 021-88-83</a></p><h4>Сайт</h4><p><a href="http://www.prostoaudio.ru/" class="maps__hints--site" target="_blank">www.prostoaudio.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«Просто-Аудио»</h2>',
        },
      },
      {
        type: 'Feature',
        id: 70,
        geometry: {
          type: 'Point',
          coordinates: [43.126242, 131.897819],
        },
        properties: {
          balloonContentHeader: '<h2 class="mb-1">«DigitalHall»</h2>',
          balloonContentBody:
            '<div class="maps__hints--body"><h4>Телефон</h4><p><a href="tel:+74232424025" class="maps__hints--phone">+7 (423) 242-40-25</a></p><h4>Сайт</h4><p><a href="http://www.digital-hall.ru/" class="maps__hints--site" target="_blank">www.digital-hall.ru</a></p></div>',
          hintContent: '<h2 class="mb-1">«DigitalHall»</h2>',
        },
      },
    ],
  };
  objectManager.add(points);
}

document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-button');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const textSection = button.parentNode.querySelector('.description-text');
      const buttonText = button.querySelector('.toggle-button_text');
      const container = button.parentNode.parentNode.querySelector(
        '.products_hidden-text'
      );
      if (container) container.classList.toggle('expanded');
      const isExpanded = textSection.classList.toggle('expanded');
      button.classList.toggle('expanded');
      buttonText.textContent = isExpanded ? 'Свернуть' : 'Подробнее';
    });
  });

  const productButtons = document.querySelectorAll('.toggle-button-product');

  productButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const textSection =
        button.parentNode.parentNode.querySelector('.description-text');

      const buttonText = button.querySelector('.toggle-button-product_text');
      const container = button.parentNode.parentNode.querySelector(
        '.products_hidden-text'
      );
      if (container) container.classList.toggle('expanded');
      const isExpanded = textSection.classList.toggle('expanded');
      button.classList.toggle('expanded');
      buttonText.textContent = isExpanded ? 'Свернуть' : 'Подробнее';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  const burgerBtn = document.getElementById('burgerBtn');
  const menuOverlay = document.getElementById('menuOverlay');

  burgerBtn.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
    burgerBtn.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (
      event.target.closest('.menu_link') ||
      !event.target.closest('.burger-menu')
    ) {
      menuOverlay.classList.remove('active');
      burgerBtn.classList.remove('active');
    }
  });
});
