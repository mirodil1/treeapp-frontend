<template>
     <div class="container">
        <div class="columns">
            <div class="column is-3 ">
                <aside class="menu is-hidden-mobile">
                    <p class="menu-label">
                        Umumiy
                    </p>
                    <ul class="menu-list">
                        <li><a class="is-active is-success">Dashboard</a></li>
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
                                Salom, Foydalanuvchi.
                            </h1>
                            <h2 class="subtitle">
                                I hope you are having a great day!
                            </h2>
                        </div>
                    </div>
                </section>
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">439k</p>
                                <p class="subtitle">Daraxtlar</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">59k</p>
                                <p class="subtitle">Products</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">3.4k</p>
                                <p class="subtitle">Open Orders</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">19</p>
                                <p class="subtitle">Exceptions</p>
                            </article>
                        </div>
                    </div>
                </section>
                <div class="columns">
                    <div class="column is-6">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

	export default {
		name: 'MyProfile',
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
		},
	}
</script>