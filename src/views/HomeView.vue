<template>
	<div class="columns is-multiline is-gapless is-justify-content-space-around">
		<div class="column is-3">
			<div class="card">
				<div class="card-content">
					<div class="dropdown" ref="RegNames" @focusin="dropDownRegNames">
						<div class="dropdown-trigger">
							<button class="button is-success is-outlined" aria-haspopup="true" aria-controls="dropdown-menu">
								<span v-if="regionName">{{ regionName }}</span>
								<span v-else>Toshkent</span>
								<span class="icon is-small">
									<i class="fas fa-angle-down" aria-hidden="true"></i>
								</span>
							</button>
						</div>
						<div class="dropdown-menu" id="dropdown-menu" role="menu">
							<div class="dropdown-content">
								<a v-for="key, value in Object.entries(latLong)" @click="selectReg(key)" class="dropdown-item">
									{{key[0]}}
								</a>
							</div>
						</div>
					</div>
					<router-view></router-view>
				</div>
			</div>
			
		</div>
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
			latLong: {
				'Toshkent': [41.29, 69.23,],
				'Andijon': [40.78, 72.34],
				'Buxoro': [39.77, 64.43],
				'Fargona': [40.38, 71.78],
				'Jizzax': [40.12, 67.84],
				'Xorazm': [41.55, 60.63],
				'Namangan': [41, 71.67],
				'Navoiy': [40.08, 65.38],
				'Qashqadaryo': [38.86, 65.79],
				'Qoraqalpogiston': [42.45, 59.61],
				'Samarqand': [39.65, 66.96],
				'Sirdaryo': [40.49, 68.78],
				'Surxandaryo': [37.22, 67.28],
    		},
			regionName: null
		}
  	},
	mounted() {
		document.title = "Daraxt"
	},
	methods: {
		dropDownRegNames() {
			this.$refs.RegNames.classList.toggle('is-active')
		},
		selectReg(coords) {
			this.$store.state.regCoords = coords[1]
			console.log(this.$store.state.regCoords)
			this.regionName = coords[0]
			this.$refs.RegNames.classList.remove("is-active")
		},
	},
}

</script>
<style scoped >
	.card-image > .fa {
		font-size: 8rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
		color: #209cee;
	}
	.card-content .content {
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
	.dropdown {
			width: 100%;
	}
	.dropdown-trigger {
		width: 100%
	}
	.button {
		width: 100%;
	}
</style>