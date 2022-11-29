<template>
	<div class="card">
		<div class="card-content">
			<figure class="">
				<img src="https://picsum.photos/480/300" alt="Placeholder image">
			</figure>
			<p class="title is-4">{{ result.name }}</p>
			<p class="subtitle is-6">@</p>
			<div class="content">
				<p>{{ result.type.name }}</p>
				<p>{{ result.definition }}</p>
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
			result: {
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
				this.result = tree
			}
		}
	},
}
</script>