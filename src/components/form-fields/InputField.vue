<script lang="ts" setup>
interface Props {
    label: string;
}

const { label } = defineProps<Props>();
const model = defineModel<string>();
</script>

<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title">{{ label }}</label>
            <input
                class="input__field form-control"
                type="text"
                v-model="model"
            />
        </div>
    </div>
</template>
