<template>
	<div class="columns is-gapless is-justify-content-space-around">
		<div class="card">
			<div class="card-content">
				
			</div>
		</div>
		<!-- <div class="columns is-gapless is-justify-content-space-around"> -->
			<!-- <div class="column is-4">
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
						<p class="subtitle">
						</p>
						<TreeDetail />
					</div>
				</div>
			</div> -->
			<!-- <div class="column is-8"> -->
			<!-- </div> -->
		<!-- </div> -->
		<Maps />
	</div>
</template>

<script>
import TreeDetail from "../components/TreeDetail.vue";
import Maps from "../components/Maps.vue"

export default {
  name: 'HomeView',
  components: {TreeDetail, Maps},
	data() {
		return {
			
  	}
	}
}



















</script>
<style scoped>

</style>