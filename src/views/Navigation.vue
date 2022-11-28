<template>
	<header>
		<nav class="container navbar is-transparent">
			<div class="navbar-brand">
				<a class="navbar-item is-size-3 has-text-success" href="http://localhost:8080/">
					<i class="fas fa-tree">Daraxt</i>
				</a>
				<a class="navbar-item" href="https://bulma.io">
					
				</a>
				<div class="navbar-burger" data-target="navbarExampleTransparentExample">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div id="navbarExampleTransparentExample" class="navbar-menu">
				<div class="navbar-start">
				</div>

				<div class="navbar-end">
					<div class="navbar-item">
						<div class="field is-grouped">
							<!-- <p class="control">
								<a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
									<span class="icon">
										<i class="fab fa-twitter"></i>
									</span>
									<span>
										Kirish
									</span>
								</a>
							</p> -->
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
			
		}
	},
}
</script>