<template>
	<header>
		<nav class="container navbar is-transparent">
			<div class="navbar-brand">
				<a class="navbar-item is-size-3 has-text-success" href="http://localhost:8080/">
					<i class="fas fa-tree">Daraxt</i>
				</a>
				<a class="navbar-item" href="https://bulma.io">
					
				</a>
				<div class="navbar-burger" data-target="navbarExampleTransparentExample" @click="showMobileMenu = !showMobileMenu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
				<div class="navbar-start">
				</div>
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="field is-grouped">
							<p v-if="!this.$store.state.isAuthenticated" class="control">
								<router-link class="button is-success" :to="{name: 'Login'}">
									<span>Daraxt qo'shish</span>
								</router-link> 
							</p>
							<p v-else class="control">
								<router-link class="button is-success" :to="{name: 'MyProfile'}">
									<span>Mening profilim</span>
								</router-link> 
							</p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>



<script>
export default {
    name: 'Navigation',
	data() {
		return {
			showMobileMenu: false,

		}
	},
}
</script>