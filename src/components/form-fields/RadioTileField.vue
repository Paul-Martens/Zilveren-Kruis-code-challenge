<script lang="ts" setup>
interface Option {
    highlight?: string;
    label: string;
    price: string;
}

interface Props {
    label: string;
    options: Option[];
}

const { label, options } = defineProps<Props>();
const model = defineModel<string>();
</script>

<template>
    <div class="input__group">
        <label class="input__title">{{ label }}</label>
        <div class="form-row">
            <div
                v-for="option in options"
                :key="option.label"
                class="radio__tile"
                :class="{ 'radio__tile--choice': option.highlight }"
            >
                <div
                    v-if="option.highlight"
                    class="badge radio__tile-badge"
                >
                    {{ option.highlight }}
                </div>
                <div class="radio custom-radio radio__option">
                    <input
                        v-model="model"
                        type="radio"
                        :id="option.label"
                        :name="label"
                        :value="option.label"
                        class="radio__input custom-control-input"
                    />
                    <label
                        :for="option.label"
                        class="radio__label custom-control-label"
                    >
                        <p class="radio__description">{{ option.label }}</p>
                        <p class="radio__price">{{ option.price }}</p>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
