<template>
	<div class="parent">
		<b-container class="login-container">
			<b-row>
				<b-col md="6">
					<!-- Additional content or background image -->
					<!-- <b-img src="../assets/hs.jpg" alt="Responsive image"></b-img> -->
				</b-col>
				<b-col md="6">
					<div>
						<b-button v-b-toggle.sidebar-right>Login Here</b-button>
						<b-sidebar id="sidebar-right" title="Sidebar" right shadow>
							<div class="px-3 py-2">
								<b-form @submit.prevent="start()">
									<b-form-group label="Email" label-for="email">
										<b-form-input
											id="email"
											v-model="email"
											type="email"
											required
											placeholder="Enter your email"
										></b-form-input>
									</b-form-group>
									<b-form-group label="Password" label-for="password">
										<b-form-input
											id="password"
											v-model="password"
											type="password"
											required
											placeholder="Enter your password"
										></b-form-input>
									</b-form-group>
									<b-button type="submit" variant="primary">Login</b-button>
								</b-form>
							</div>
						</b-sidebar>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	name: "LoginPage",
	data() {
		return {
			email: "",
			password: null,
		};
	},
	methods: {
		start() {
			console.log("check", this.email, this.password);
		},
	},
};
</script>

<style scoped>
/* .login-container {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
} */
</style>