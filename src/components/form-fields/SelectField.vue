<script lang="ts" setup>
interface Props {
    label: string;
    options: string[];
}

const { label } = defineProps<Props>();
const model = defineModel<string>();
</script>

<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title">
                {{ label }}
            </label>
            <select
                class="form-control"
                v-model="model"
            >
                <option
                    :key="option"
                    v-for="option in options"
                >
                    {{ option }}
                </option>
            </select>
        </div>
    </div>
</template>
