<template>
	<div class="columns card-form is-hidden" ref="AddTreeModal">
		<div class="card">
		<!-- <div class="modal-background"></div> -->
			<div class="p-5">
				<form @submit.prevent="addTree" method="POST">
					<div class="field">
						<div class="control">
								<div class="dropdown is-fullwidth is-hoverable">
									<div class="dropdown-trigger">
										<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
											<span>Daraxt turini tanlang</span>
											<span class="icon is-small">
													<i class="fas fa-angle-down" aria-hidden="true"></i>
											</span>
										</button>
									</div>
									<div class="dropdown-menu" id="dropdown-menu" role="menu">
										<div class="dropdown-content">
											<a href="#" class="dropdown-item">
													Dropdown item
											</a>
										</div>
									</div>
								</div>
						</div>
					</div>
					<div class="field">
						<div class="control">
								<input class="input" type="text" placeholder="Nomi" v-model="name">
						</div>
					</div>
					<div class="field">
						<div class="file has-name is-fullwidth">
							<label class="file-label">
								<input class="file-input" type="file" name="resume">
								<span class="file-cta">
									<span class="file-icon">
										<i class="fas fa-upload"></i>
									</span>
									<span class="file-label">
										Choose a file…
									</span>
								</span>
								<span class="file-name">
									Screen Shot 2017-07-29 at 15.54.25.png
								</span>
							</label>
						</div>
					</div>
					<div class="field">
						<div class="control">
								<textarea class="textarea" type="text" placeholder="Tarif" v-model="definition"></textarea>
						</div>
					</div>
					<footer class="modal-card-foot">
					<button type="submit" class="button is-success is-fullwidth">Saqlash</button>
					<button @click="closeModal" class="button is-warning is-fullwidth">Bekor</button>
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
					type: null,
					name: null,
					image: null,
					definition: null,
					latitude: null,
					longitude: null,
					res: null
			}
		},
		props: {
			user_coords: null
		},
		methods: {
			closeModal() {
					this.$refs.AddTreeModal.classList.add('is-hidden')
			},
			openModal() {
					this.$refs.AddTreeModal.classList.remove('is-hidden')
			},
			async addTree() {

				const formData = {
					type_id: 1,
					name: this.name,
					image: this.image,
					definition: this.definition,
					latitude: this.latitude,
					longitude: this.longitude
				}

				await axios
					.post('api/v1/trees/', formData)
					.then(response => {
						window.location.reload();
					})
					.catch(err => {
						console.log(err)
					})
			}
				
		},
		watch: {
			user_coords: {
				handler(user_coords) {
					this.latitude = user_coords[0]
					this.longitude = user_coords[1]
					if (this.$store.state.isAuthenticated) {
						this.openModal()
					}
					else {
						this.$router.push('account/login')
					}
				}
			}
		}
	}
</script>

<style>
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