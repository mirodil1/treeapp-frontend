<template>
	<div class="columns card-form is-hidden" ref="AddTreeModal">
		<div class="card">
		<!-- <div class="modal-background"></div> -->
			<div class="p-5">
				<form @submit.prevent="addTree" method="POST">
					<div class="field">
						<div class="control">
								<div class="dropdown"  ref="DropDown">
									<div class="dropdown-trigger">
										<button @click.prevent="getTreeType" class="button is-success is-outlined" aria-haspopup="true" aria-controls="dropdown-menu">
											<span v-if="treeType">{{ treeType }}</span>
											<span v-else>Daraxt turini tanlang</span>
											<span class="icon is-small">
													<i class="fas fa-angle-down" aria-hidden="true"></i>
											</span>
										</button>
									</div>
									<div class="dropdown-menu" id="dropdown-menu" role="menu">
										<div class="dropdown-content">
											<span @click="selectType(treeType)" v-for="treeType in treeTypeList" class="dropdown-item is-clickable">
													{{ treeType.name }}
											</span>
										</div>
									</div>
								</div>
						</div>
					</div>
					<div class="field">
						<div class="control">
								<input class="input is-success" type="text" placeholder="Nomi" required v-model="name">
						</div>
					</div>
					<div class="field">
						<div class="file has-name is-fullwidth">
							<label class="file-label">
								<input @change="handleFile" accept="image/png, image/gif, image/jpeg" class="file-input is-success" type="file" required ref="inputImage">
								<span class="file-cta">
									<span class="file-icon">
										<i class="fas fa-upload"></i>
									</span>
									<span class="file-label">
										Rasm
									</span>
								</span>
								<span class="file-name">
									{{ fileName }}
								</span>
							</label>
						</div>
					</div>
					<div class="field">
						<div class="control">
								<textarea class="textarea is-success" type="text" placeholder="Qo'shimcha m'alumot" required v-model="definition"></textarea>
						</div>
					</div>
					<footer class="modal-card-foot">
					<button type="submit" 
						class="button is-success" 
						v-bind:class="{'is-loading': isLoading }"
						:disabled="isDisabled"
					>
					Saqlash
					</button>
					<button @click.prevent="closeModal" class="button is-warning is-fullwidth">Bekor</button>
				</footer>
				</form>
			</div>
		</div>
	</div>
</template>


<script>
import axios from 'axios';

	export default {
		name: 'AddTree',	
		data() {
			return {
					typeId: null,
					name: null,
					image: null,
					definition: null,
					latitude: null,
					longitude: null,
					treeType: null,
					treeTypeList: null,
					fileName: null,
					isDisabled: false,
					isLoading: false
			}
		},
		props: {
			selectedCoords: null
		},
		methods: {
			closeModal() {
					this.$refs.AddTreeModal.classList.add('is-hidden')
			},
			openModal() {
					this.$refs.AddTreeModal.classList.remove('is-hidden')
			},
			handleFile() {
				this.image = this.$refs.inputImage.files[0]
				this.fileName = this.$refs.inputImage.files[0].name
			},
			async addTree() {
				
				const formData = new FormData()
				formData.append("type_id", this.typeId)
				formData.append("name", this.name)
				formData.append("image", this.image)
				formData.append("definition", this.definition)
				formData.append("latitude", this.latitude)
				formData.append("longitude", this.longitude)
				console.log(formData)
				if (this.image) {
					this.isLoading = true
					this.isDisabled = true
					await axios
						.post('api/v1/trees/', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
						.then(response => {
							// this.$forceUpdate();
							window.location.reload();
						})
						.catch(err => {
							console.log(err)
						})
				}
				this.isLoading = false
				this.isDisabled = false
			},
			async getTreeType() {
				this.$refs.DropDown.classList.add('is-active')
				await axios
					.get('api/v1/tree/type/')
					.then(response => {
						this.treeTypeList = response.data
					})
					.catch(error => {
						console.log(error)
					})
			},
			selectType(value) {
				this.typeId = value.id
				this.treeType = value.name
				this.$refs.DropDown.classList.remove('is-active')
			}
		},
		watch: {
			selectedCoords: {
				handler(selectedCoords) {
					this.latitude = selectedCoords[0]
					this.longitude = selectedCoords[1]
					if (this.$store.state.isAuthenticated) {
						this.openModal()
					}
					else {
						this.$router.push('/account/login')
					}
				}
			}
		}
	}
</script>

<style scoped>
	.card-form {
		position: absolute;
		z-index: 99;
		display: flex;
		justify-content: center;
		align-self: center;
		max-width: 400px;
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