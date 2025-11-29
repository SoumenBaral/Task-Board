<script setup lang="ts">
    import { ref, watch } from 'vue'
    const props = defineProps<{ }>()
    const emit = defineEmits(['open-new','search'])


    const query = ref('')
    watch(query, () => emit('search', query.value))
</script>
<template>
    <header class="flex items-center justify-between p-4 bg-gray-50 shadow-lg sticky top-0">
        <div class="flex items-center gap-1">
            <img class="w-10 h-10" src="assets/image/logo.jpg" alt="" srcset="">
            <h1 class="text-lg font-semibold">Intern Task Board</h1>
            
        </div>


        <div class="flex items-center gap-2">
            <input v-model="query" placeholder="Search tasks..." class="px-3 py-1 border rounded-md text-sm" />
            <button @click="$emit('open-new')" class="px-3 py-1 bg-emerald-500 text-white rounded-md text-sm">New Task</button>
        </div>
    </header>
</template>




