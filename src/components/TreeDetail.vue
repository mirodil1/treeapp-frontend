<template>
	<div class="is-loading-bar has-text-centered" v-bind:class="{'is-progress': $store.state.isLoading }">
		<div class="lds-dual-ring"></div>
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
				<p class="has-text-grey-light mt-4 is-size-6">Joyladi: {{ result.user.first_name }}</p>

			</div>
			<div class="is-flex">
				<figure class="image is-32x32">
					<img :src="result.get_qrcode" :alt="result.get_qrcode">
				</figure>
				<a class="is-align-self-center" :href="result.get_qrcode" :download="result.name">
					<p class="has-text-success is-clickable ">
						Yuklash
						<i class="fas fa-download"></i>
					</p>
				</a>
			</div>
			<div class="card-footer">
				<p class="card-footer-item has-text-grey-light is-size-6 mt-3">{{ result.type.name }}</p>
				<p class="card-footer-item has-text-grey-light is-size-6 mt-3">{{ createdAt(result.created_at) }}</p>
			</div>
		</div>
	</div>
	
	<div v-if="is404">
		<h2 class="title has-text-centered has-text-warning mt-5">Ma'lumot topilmadi</h2>
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
				type: {},
				user: {}
			},
			is404: false
		}
	},
	mounted() {
		this.showDetail()
	},
	methods: {
		createdAt(value) {
			return moment(value).format('YYYY-MM-DD, HH:mm')
		},
		async showDetail() {
			let id = this.$route.params.id

			this.$store.commit('setIsLoading', true)

			await axios
				.get("api/v1/tree/" + id)
				.then(response => {
						this.result = response.data
						this.is404 = false
				})
				.catch(error => {
						if (error.response.status == 404) {
							this.is404 = true
						}
				})

			this.$store.commit('setIsLoading', false)
		},
	},
	computed: {

	},
	watch: {
		$route(to, from) {
			this.showDetail()
		}
	},
}
</script>

