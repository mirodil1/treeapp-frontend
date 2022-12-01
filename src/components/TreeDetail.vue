<template>
	<div class="card">
		<div class="card-content">
			<div class="dropdown" ref="RegNames" @click="dropDownRegNames">
				<div class="dropdown-trigger">
					<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
						<span v-if="regionName">{{ regionName }}</span>
						<span v-else>Toshkent</span>
						<span class="icon is-small">
							<i class="fas fa-angle-down" aria-hidden="true"></i>
						</span>
					</button>
				</div>
				<div class="dropdown-menu" id="dropdown-menu" role="menu">
					<div class="dropdown-content">
						<a v-for="key, value in Object.entries(latLong)" @click="selectReg(key)" href="#" class="dropdown-item">
							{{key[0]}}
						</a>
					</div>
				</div>
			</div>
			<div v-if="(result.name)" class="card is-shady mt-3">
				<div class="card-image">
					<figure class="image is-4by3">
						<img class="modal-button" :src="result.get_image" :alt="result.name" data-target="modal-image2">
					</figure>
				</div>
				<div class="card-content">
					<div class="content">
						<h4>{{ result.name }}</h4>
						{{ result.definition }}
						<br>
					</div>
					<div class="card-footer">
						<p class="card-footer-item has-text-grey-light is-size-6 mt-3">{{ result.type.name }}</p>
						<p class="card-footer-item has-text-grey-light is-size-6 mt-3">{{ createdAt(result.created_at) }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';
export default {
	name: "TreeDetail",
	data() {
		return {
			result: {
				type: {}
			},
			latLong: {
				'Toshkent': [41.29, 69.23,],
				'Andijon': [40.78, 72.34],
				'Buxoro': [39.77, 64.43],
				'Fargona': [40.38, 71.78],
				'Jizzax': [40.12, 67.84],
				'Xorazm': [],
				'Navoiy': [40.08, 65.38],
				'Qashqadaryo': [38.86, 65.79],
				'Qoraqalpogiston': [42.45, 59.61],
				'Samarqand': [39.65, 66.96],
				'Sirdaryo': [40.49, 68.78],
				'Surxandaryo': [],
    	},
			regionName: null
		}
	},
	props: {
		tree: {}
	},
	mounted() {
	},
	methods: {
		dropDownRegNames() {
			this.$refs.RegNames.classList.toggle('is-active')
		},
		selectReg(coords) {
			this.$store.state.regCoords = coords[1]
			this.regionName = coords[0]
			this.$refs.RegNames.classList.remove('is-active')
		},
		createdAt(value) {
			return moment(value).format('YYYY-MM-DD, HH:mm')
		}
	},
	computed: {

	},
	watch: {
		tree: {
			async handler(tree) {
				this.result = tree
			}
		}
	},
}
</script>

<style scoped>
	.card-image > .fa {
		font-size: 8rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
		color: #209cee;
	}
	.card-content .content {
		text-align: left;
		font-size: 14px;
		margin: 1rem 1rem;
	}
	.card {
		height: 100%;
		width: 100%;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
		margin-bottom: 2rem;
	}
	.is-shady:hover {
		box-shadow: 0 10px 16px rgba(0, 0, 0, .13), 0 6px 6px rgba(0, 0, 0, .19);
	}
</style>