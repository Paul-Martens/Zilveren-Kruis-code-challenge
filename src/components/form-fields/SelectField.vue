<script lang="ts" setup>
interface Option {
    label: string;
    value: string;
}

interface Props {
    label: string;
    options: string[] | Option[];
}

const { label, options } = defineProps<Props>();
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
                    v-for="option in options"
                    :key="typeof option === 'string' ? option : option.label"
                    :value="typeof option === 'string' ? option : option.value"
                >
                    {{ typeof option === 'string' ? option : option.label }}
                </option>
            </select>
        </div>
    </div>
</template>
