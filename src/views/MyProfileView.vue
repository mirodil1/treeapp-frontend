<template>
     <div class="container">
        <div class="columns">
            <div class="column is-3 ">
                <aside class="menu is-hidden-mobile">
                    <p class="menu-label">
                        Umumiy
                    </p>
                    <ul class="menu-list">
                        <li><a class="is-active is-success">Asosiy</a></li>
                        <li><a>Customers</a></li>
                        <li><a>Other</a></li>
                    </ul>
                    <p class="menu-label">
                        Transaktsiyalar
                    </p>
                    <ul class="menu-list">
                        <li><a>Payments</a></li>
                        <li><a>Transfers</a></li>
                        <li><a>Balance</a></li>
                        <li><a>Reports</a></li>
                    </ul>
					<p @click="logOut" class="button is-warning has-text-white menu-label">
						CHIQISH
                    </p>
                </aside>
            </div>
            <div class="column is-9">
                <section class="hero is-success welcome is-small">
                    <div class="hero-body">
                        <div class="container">
							<h1 class="title">
									Salom, {{ user.first_name }}
							</h1>
							<h2 class="subtitle">
									Daraxtlarni saqlab qoling
							</h2>
                        </div>
                    </div>
                </section>
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">{{ userTrees.length }}</p>
                                <p class="subtitle">Daraxtlar</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">59k</p>
                                <p class="subtitle">To'landi</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">3.4k</p>
                                <p class="subtitle">To'lovga</p>
                            </article>
                        </div>

                    </div>
                </section>
                <section class="container">
					<div class="columns features is-multiline is-justify-content-space-between">
						<div v-for="userTree in userTrees" class="column is-4" data-target="modal-image2">
							<div class="card is-shady">
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
									<div class="is-flex">
										<a class="is-align-self-center" :href="result.get_qrcode" :download="result.name">
											<p class="has-text-success is-clickable ">
												Yuklash
												<i class="fas fa-download"></i>
											</p>
										</a>
									</div>
									<div class="card-footer">
										<p class="has-text-grey-light is-size-6 mt-3">{{ createdAt(userTree.created_at) }}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

	export default {
		name: 'MyProfile',
		data() {
			return {
				user: {},
				userTrees: [],
			}
		},
		mounted() {
			this.getMe()
			this.getUserTrees()
	
			document.title = "Mening sahifam"
		},
		methods: {
			async logOut() {
				await axios
					.post('api/v1/auth/token/logout/')
					.then(response => {
						axios.defaults.headers.common["Authorization"] = ""
							localStorage.removeItem("token")
							this.$store.commit('removeToken')
							this.$router.push('/')
					})
        },
			async getMe() {
				await axios
					.get('api/v1/auth/users/me/')
					.then(response => {
						this.user = response.data
					})
			},
			async getUserTrees() {
				await axios
					.get('api/v1/user/trees/')
					.then(response => {
						this.userTrees = response.data
					})
			},
			createdAt(value) {
				return moment(value).format('YYYY-MM-DD, HH:mm')
			}
		},
	}
</script>

<style scoped>
	.features {
		padding: 5rem 0;
	}
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
	.card-content .content h4 {
		font-size: 16px;
		font-weight: 700;
	}
	.card {
		height: 100%;
		width: 100%;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
		margin-bottom: 2rem;
	}
		
	.card-footer {
		margin-top: auto;
	}
	.is-shady {
		animation: flyintoright .4s backwards;
		border-radius: 4px;
		display: inline-block;
		margin: 10px;
		position: relative;
		transition: all .2s ease-in-out;
	}
	.is-shady:hover {
		box-shadow: 0 10px 16px rgba(0, 0, 0, .13), 0 6px 6px rgba(0, 0, 0, .19);
	}

</style>