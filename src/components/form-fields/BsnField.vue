<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
    label: string;
}

const { label } = defineProps<Props>();
const model = defineModel<string>();

const valid = ref<boolean>(true);

function validateBsn() {
    if (isNaN(Number(model.value))) {
        return (valid.value = false);
    }

    if (model.value?.length !== 9) {
        return (valid.value = false);
    }

    /**
     * Citizen service numbers are 9-digit numbers (which we checked above),
     * that passes the eleven test. The test for BSNs is different from other
     * eleven tests in that the digit with the lowest weight is multiplied
     * by -1 instead of 1.
     *
     * The reducer function below takes care of that. We reverse the array
     * of digits, so that the 'sum' argument is set to the lowest weight digit
     * initially. We multiply that by -1 if the index equals 1 (the first
     * iteration), and just pass sum as-is otherwise. The current digit is then
     * multiplied by the index + 1, as index starts counting at 0.
     *
     * Depending on code style agreements in the team, this could be left
     * as it is now, or be re-written to be more readable. For now, this works. :-)
     */
    valid.value =
        model.value
            .split('')
            .reverse()
            .map(digit => Number(digit))
            .reduce((sum, digit, index) => {
                return (index === 1 ? sum * -1 : sum) + digit * (index + 1);
            }) %
            11 ===
        0
            ? true
            : false;
}
</script>

<template>
    <div class="form-input my-4">
        <div class="input__group">
            <label class="input__title">{{ label }}</label>
            <input
                class="input__field form-control"
                :class="{ 'is-invalid': !valid }"
                type="text"
                v-model="model"
                @blur="validateBsn"
            />
        </div>
        <div
            v-if="!valid"
            class="input__feedback invalid-feedback mt-1"
            aria-live="polite"
        >
            <span
                >Helaas is het ingevoerde burgerservicenummer niet geldig.
                Probeer het opnieuw.</span
            >
        </div>
    </div>
</template>
