import data from './getTrees'
import getTrees from './getTrees';
import getTree from './getTree';
import Vue from 'vue'

const { trees, error } = getTrees()


const maps = () => {
		var myMap = new ymaps.Map("map", {
				center: [41.29, 69.23],
				zoom: 11,
				controls: ['zoomControl',]
		},{
				searchControlProvider: 'yandex#search'
		}),
		clusterer = new ymaps.Clusterer({
				clusterIcons: [
					{
							href: 'https://cdn.icon-icons.com/icons2/1446/PNG/512/22330deciduoustree_98753.png',
							size: [60, 60],
							offset: [-20, -20]
					},
					{
							href: 'https://cdn.icon-icons.com/icons2/1446/PNG/512/22330deciduoustree_98753.png',
							size: [80, 80],
							offset: [-30, -30]
					}],

				clusterDisableClickZoom: false,
				clusterOpenBalloonOnClick: true,
				clusterHideIconOnBalloonOpen: false,
				geoObjectHideIconOnBalloonOpen: false
		}),
		getPointData = (index) => {
				return {
					balloonContentHeader: "HELLO MAPS",
					balloonContentBody: '<p>Ваше имя: <input name="login"></p><p>Телефон в формате 2xxx-xxx:  <input></p><p><input type="submit" value="Отправить"></p>',
					balloonContentFooter: '<font size=1>Информация предоставлена: </font> балуном <strong>метки ' + index + '</strong>',
					clusterCaption: 'метка <strong>' + index + '</strong>'
			}
		},
		getPointOptions = () => {
				return  {
					iconLayout: 'default#image', 
					iconImageHref: 'https://cdn.icon-icons.com/icons2/1446/PNG/512/22330deciduoustree_98753.png', 
					iconImageSize: [30, 30],
				};
		},
		points = [
				[55.831903,37.411961], [55.763338,37.565466], [55.763338,37.565466], [55.744522,37.616378], [55.780898,37.642889], [55.793559,37.435983], [55.800584,37.675638], [55.716733,37.589988], [55.775724,37.560840], [55.822144,37.433781], [55.874170,37.669838], [55.716770,37.482338], [55.780850,37.750210], [55.810906,37.654142], [55.865386,37.713329], [55.847121,37.525797], [55.778655,37.710743], [55.623415,37.717934], [55.863193,37.737000], [55.866770,37.760113], [55.698261,37.730838], [55.633800,37.564769], [55.639996,37.539400], [55.690230,37.405853], [55.775970,37.512900], [55.775777,37.442180], [55.811814,37.440448], [55.751841,37.404853], [55.627303,37.728976], [55.816515,37.597163], [55.664352,37.689397], [55.679195,37.600961], [55.673873,37.658425], [55.681006,37.605126], [55.876327,37.431744], [55.843363,37.778445], [55.875445,37.549348], [55.662903,37.702087], [55.746099,37.434113], [55.838660,37.712326], [55.774838,37.415725], [55.871539,37.630223], [55.657037,37.571271], [55.691046,37.711026], [55.803972,37.659610], [55.616448,37.452759], [55.781329,37.442781], [55.844708,37.748870], [55.723123,37.406067], [55.858585,37.484980]
		],
		geoObjects = [];
		for(var i = 0, len = trees.value.length; i < len; i++) {
			geoObjects[i] = new ymaps.Placemark([trees.value[i].latitude, trees.value[i].longitude], getPointData(trees.value[i].id), getPointOptions());
		}
		clusterer.add(geoObjects);
		myMap.geoObjects.add(clusterer);
			// myMap.setBounds(clusterer.getBounds(), {
			// 		checkZoomRange: true
			// });
		

		myMap.events.add('click', (e) => {
			var coords = e.get('coords');
			console.log(coords)
			if (!myMap.balloon.isOpen()) {
					var coords = e.get('coords');
					myMap.balloon.open(coords, {
							contentHeader:'Событие!',
							contentBody:'<p>Кто-то щелкнул по карте.</p>' +
									'<p>Координаты щелчка: ' + [
									coords[0].toPrecision(6),
									coords[1].toPrecision(6)
									].join(', ') + '</p>',
							contentFooter:'<sup>Щелкните еще раз</sup>'
					});
			}
			else {
					myMap.balloon.close();
			}
    });
		}


export default maps