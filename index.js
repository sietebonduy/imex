// const LOCATION = { center:[39.747873, 47.239823], zoom: 16 };

// let map;

// main();
// async function main() {
//     // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты API
//     await ymaps3.ready;

//     const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
//     // Создание карты
//     map = new ymaps3.YMap(document.getElementById('map'), {location: LOCATION});
//     // Добавляем слой для отображения схематической карты
//     map.addChild(new ymaps3.YMapDefaultSchemeLayer());
//     map.addChild(new ymaps3.YMapDefaultFeaturesLayer());

//     map.addChild(new ymaps3.YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));
  
//     const el = document.createElement('img');
//     el.className = 'my-marker';
//     el.src = './assets/images/marker.svg';
//     el.onclick = () => map.update({location: {...LOCATION, zoom: 21, duration: 400}});

//     map.addChild(new ymaps3.YMapMarker({coordinates: LOCATION.center}, el));

// }
