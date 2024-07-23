<script lang="ts">
	import { MyCounterButton } from '@repo/ui';
	import type { TaskManagerClient } from '@repo/proto/generate/web/ServiceServiceClientPb';
	import { onMount } from 'svelte';

	let client: TaskManagerClient | null = null;
	
	
	onMount(async () => {
		if (typeof window !== 'undefined') {
			const { TaskManagerClient } = await import('@repo/proto/generate/web/ServiceServiceClientPb');
			client = new TaskManagerClient('http://localhost:8080');
		}
	})


	const getTodoList = async () => {
		const todoService = await import('@repo/proto/generate/web/service_pb');
		if (client) {
		const request = new todoService.default.TodosRequest();
		request.setPage(1);
		request.setLimit(10);
		
		const result = await client.getTodoList(request);
		console.log(result);
		}
	}

</script>

<h1>Web</h1>
<MyCounterButton />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={getTodoList}>Get Todos</button>
