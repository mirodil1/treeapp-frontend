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
			<p class="subtitle"></p>
			<p class="title is-4">{{ result.name }}</p>
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