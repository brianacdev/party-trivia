<script setup lang="ts">
const userSession = useUserSession()
const sessionLoaded = computed<boolean>(
	() => userSession.userSessionState.value
)
</script>

<template>
	<header class="w-full shadow">
		<UContainer class="flex justify-between h-16 items-stretch">
			<div class="flex-none flex items-center">
				<span class="text-2xl font-medium">
					<span class="text-pt-primary-600">Party</span>
					<span class="text-party-secondary-600">Trivia</span>
				</span>
			</div>
			<div class="flex-1"></div>
			<div class="flex-none flex justify-end items-center">
				<span
					v-if="sessionLoaded"
					class="text-sm text-gray-400"
					title="user session id"
				>
					{{ userSession.userSessionId }}
				</span>
			</div>
		</UContainer>
	</header>
</template>
