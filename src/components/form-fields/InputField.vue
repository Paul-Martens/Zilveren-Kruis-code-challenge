<script lang="ts" setup>
interface Props {
    label: string;
    type?: string;
}

const { label, type = 'text' } = defineProps<Props>();
const model = defineModel<string>();
</script>

<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title">{{ label }}</label>
            <input
                class="input__field form-control"
                :type="type"
                v-model="model"
            />
        </div>
    </div>
</template>
