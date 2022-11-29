<template>
		<AddTree
			:user_coords="user_coords"
		/>
		<div class="column is-4">
			<TreeDetail 
				:tree="tree"
			/>
		</div>
		<div class="column is-8">
			<yandex-map
				:coords="coords"
				:controls="controls"
				style="width: 100%; height: 94vh"
				:zoom="zoom"
				:cluster-options="clusterOptions"
				:icon="markerIcon"
				@click="onClick"
			>
				<ymap-marker
					v-for="tree in trees" 
					:coords="[tree.latitude, tree.longitude]"
					:marker-id=tree.id
					:hint-content=tree.name
					cluster-name="1"
					:icon="markerIcon"
					@click="showDetail(tree.id)"
				>
				</ymap-marker> >
			</yandex-map>		
		</div>
</template>

<script>
import axios from 'axios';
import {loadYmap, yandexMap, ymapMarker } from 'vue-yandex-maps'
import AddTree from './AddTree.vue';
import TreeDetail from './TreeDetail.vue';

export default {
	name: "Maps",
	components: { yandexMap, ymapMarker, TreeDetail, AddTree },
	data() {
		return {
		trees: [],
		coords: [
			41.29,
			69.23,
		],
		user_coords: null,
		zoom: 11,
		controls: ['zoomControl', 'geolocationControl'],
		markerIcon: {
			layout: 'default#imageWithContent',
			imageHref: 'https://cdn.icon-icons.com/icons2/1446/PNG/512/22330deciduoustree_98753.png',
			imageSize: [43, 43],
			imageOffset: [0, 0],
			contentOffset: [0, 15],
		// contentLayout: '<div style="color: #FFFFFF; font-weight: bold;"></div>'
		},
		clusterOptions: {
			1: {
					clusterDisableClickZoom: false,
					clusterOpenBalloonOnClick: true,
					clusterHideIconOnBalloonOpen: false,
					geoObjectHideIconOnBalloonOpen: false,

					clusterIcon: 'https://cdn.icon-icons.com/icons2/1446/PNG/512/22330deciduoustree_98753.png',
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
						}
					],
			},
    },
		tree: null
  	} 
	},
	mounted() {
		this.getData()
		// this.asds()
	},
	methods: {
		async getData() {
			await axios
				.get("http://127.0.0.1:8000/api/v1/trees/")
				.then(response => {
						this.trees = response.data
				})
				.catch(error => {
						error.value = error
						console.log(error)
				})
		},
		onClick(e) {
			this.user_coords = e.get('coords');
		},
		async showDetail(id) {
			console.log(id)
			await axios
				.get("http://127.0.0.1:8000/api/v1/tree/" + id)
				.then(response => {
						this.tree = response.data
				})
				.catch(error => {
						error.value = error
						console.log(error)
				})
		},
		async asds() {
			await loadYmap({});
			console.log(ymaps.geolocation.get)
			// здесь доступна переменная ymaps
		}
	}

}
</script>
