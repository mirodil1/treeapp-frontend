<template>
	<div class="columns is-multiline is-gapless is-justify-content-space-around">
		<!-- <div class="column is-12">
			<div class="columns ">
			<div class="column is-2">
				<div class="">
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
					</div>
				</div>
			</div>
			</div>
		</div> -->
		<Maps 
			:regCoords="this.$store.state.regCoords"
		/>
	</div>
</template>

<script>
import TreeDetail from "../components/TreeDetail.vue";
import Maps from "../components/Maps.vue"
import AddTree from "@/components/AddTree.vue";

export default {
  name: 'HomeView',
  components: {TreeDetail, Maps, AddTree},
	data() {
		return {
			
  	}
	},
	mounted() {
		document.title = "Daraxt"
	},
}

</script>