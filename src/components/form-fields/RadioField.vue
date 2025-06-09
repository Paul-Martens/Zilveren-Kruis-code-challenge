<script lang="ts" setup>
interface Props {
    label: string;
    options: string[];
}

const { label, options } = defineProps<Props>();
const model = defineModel<string>();
</script>

<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title">{{ label }}</label>
            <div class="form-row">
                <div
                    class="radio custom-radio radio__option"
                    v-for="option in options"
                    :key="option"
                >
                    <input
                        v-model="model"
                        :id="option"
                        :name="label"
                        :value="option"
                        class="radio__input custom-control-input"
                        type="radio"
                    />
                    <label
                        class="radio__label custom-control-label"
                        :for="option"
                    >
                        {{ option }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
