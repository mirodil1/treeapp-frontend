<template>
	<div class="card">
		<div class="card-content">
			<figure class="">
				<img src="https://picsum.photos/480/300" alt="Placeholder image">
			</figure>
			<p class="title is-4">{{ resul.name }}</p>
			<p class="subtitle is-6">@</p>
			<div class="">
				<p>{{ resul.type.name }}</p>
				<p>{{ resul.definition }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: "TreeDetail",
	data() {
		return {
			resul: {
				type: {}
			}
		}
	},
	props: {
		tree: {}
	},
	mounted() {
		// this.getTree()
	},
	methods: {
		// async getTree() {
		// 	var id = this.$route.params.id
		// 	console.log(id)
		// 	await axios
		// 		.get("http://127.0.0.1:8000/api/v1/tree/" + id)
		// 		.then(response => {
		// 				this.tree = response.data
		// 				console.log(this.tree)
		// 		})
		// 		.catch(error => {
		// 				error.value = error
		// 				console.log(error)
		// 		})
		// }
	},
	computed: {

	},
	watch: {
		tree: {
			async handler(tree) {
			console.log(tree)
			this.resul = tree
			}
		}
	},
}
</script>