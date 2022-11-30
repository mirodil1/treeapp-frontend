<template>
	<div class="card">
		<div class="card-content">
			<div class="dropdown">
				<div class="dropdown-trigger">
					<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
						<span>Toshkent</span>
						<span class="icon is-small">
							<i class="fas fa-angle-down" aria-hidden="true"></i>
						</span>
					</button>
				</div>
				<div class="dropdown-menu" id="dropdown-menu" role="menu">
					<div class="dropdown-content">
						<a href="#" class="dropdown-item">
							Toshkent
						</a>
					</div>
				</div>
			</div>
			<!-- <div class="card is-shady">
				<div class="card-image">
					<figure class="image is-4by3">
						<img class="modal-button" :src="userTree.get_image" :alt="userTree.name" data-target="modal-image2">
					</figure>
				</div>
				<div class="card-content">
					<div class="content">
						<h4>{{ userTree.name }}</h4>
						{{ userTree.definition }}
						<br>
					</div>
					<div class="card-footer">
						<p class="has-text-grey-light is-size-6 mt-3">{{ createdAt(userTree.created_at) }}</p>
					</div>
				</div>
			</div> -->
			<div class="card-image">
				<figure class="image is-4by3">
					<img :src="result.get_image">
				</figure>
			</div>
			
			<p class="subtitle"></p>
			
			<div class="content">
				<h4 class="title is-4">{{ result.name }}</h4>
				<p>{{ result.type.name }}</p>
				<p>{{ result.definition }}</p>
			</div>
			<div class="card-footer">
				<p class="has-text-grey-light is-size-6 mt-3"></p>
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
	},
	methods: {

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