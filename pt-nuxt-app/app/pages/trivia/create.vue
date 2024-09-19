<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const createTriviaState = reactive({
	name: undefined as string | undefined,
})

const createTriviaSchema = z.object({
	name: z.string().min(6, "Name must be at least 6 characters"),
})

type CreateTriviaSchema = z.output<typeof createTriviaSchema>

async function onSubmitCreateTrivia(
	event: FormSubmitEvent<CreateTriviaSchema>
) {
	const { name } = event.data
	console.log({ name })
}
</script>

<template>
	<UContainer class="flex justify-center items-start">
		<div class="max-w-lg">
			<h2 class="text-2xl font-medium">Create Trivia</h2>
			<UForm
				:state="createTriviaState"
				:schema="createTriviaSchema"
				@submit="onSubmitCreateTrivia"
				class="space-y-2"
			>
				<UFormGroup label="Name" size="xl">
					<UInput v-model="createTriviaState.name" />
				</UFormGroup>
			</UForm>
		</div>
	</UContainer>
</template>

<style scoped></style>
