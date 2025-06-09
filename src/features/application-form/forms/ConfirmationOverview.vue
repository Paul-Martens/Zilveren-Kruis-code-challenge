<script lang="ts" setup>
import { useApplicationForm } from '../../../stores/application-form';

const { personalInformation, insuranceOptions, computedValues } =
    useApplicationForm();
</script>

<template>
    <h2 class="mt-5">Controleren</h2>
    <div class="form-group">
        <h3>Gekozen pakket</h3>

        <h3>
            {{ personalInformation.firstName?.charAt(0) }}
            {{ personalInformation.middleName }}
            {{ personalInformation.lastName }}

            <span v-if="personalInformation.birthDate">
                ({{
                    new Date(personalInformation.birthDate).toLocaleDateString(
                        'nl',
                        {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                        }
                    )
                }})
            </span>
        </h3>

        <hr />

        <h4>Basisverzekering</h4>
        <div class="d-flex justify-content-between">
            <div>{{ insuranceOptions.insurance }}</div>
            <div>{{ computedValues.insuranceCost }}</div>
        </div>

        <hr />

        <div
            v-if="
                insuranceOptions.additionalInsurance !==
                    'Geen aanvullende verzekering geselecteerd' ||
                insuranceOptions.dentalInsurance !==
                    'Geen tandartsverzekering geselecteerd'
            "
        >
            <h4>Aanvullende verzekering</h4>

            <div
                v-if="
                    insuranceOptions.additionalInsurance !==
                    'Geen aanvullende verzekering geselecteerd'
                "
                class="d-flex justify-content-between"
            >
                <div>{{ insuranceOptions.additionalInsurance }}</div>
                <div>{{ computedValues.additionalInsuranceCost }}</div>
            </div>

            <div
                v-if="
                    insuranceOptions.dentalInsurance !==
                    'Geen tandartsverzekering geselecteerd'
                "
                class="d-flex justify-content-between"
            >
                <div>{{ insuranceOptions.dentalInsurance }}</div>
                <div>{{ computedValues.dentalInsuranceCost }}</div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <h3>Totaalpremie</h3>
    </div>
    <div class="form-group">
        <h3>Adres en contactgegevens</h3>
    </div>
</template>
