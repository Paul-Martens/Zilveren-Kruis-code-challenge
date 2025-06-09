<script setup lang="ts">
import SelectField from '../../../components/form-fields/SelectField.vue';
import RadioTileField from '../../../components/form-fields/RadioTileField.vue';
import { useApplicationForm } from '../../../stores/application-form';

const { insuranceOptions } = useApplicationForm();
</script>

<template>
    <h2 class="mt-5">Verzekering</h2>

    <div class="form-group">
        <h3>Basisverzekering</h3>
        <p>
            In Nederland is de basisverzekering verplicht. Iedereen wordt voor
            de basisverzekering geaccepteerd. De overheid bepaalt welke zorg
            hierin zit en dit is dus bij elke verzekeraar hetzelfde.
        </p>

        <RadioTileField
            v-model="insuranceOptions.insurance"
            label="Kies uw basisverzekering"
            :options="[
                {
                    label: 'Basis Budget',
                    price: '€ 1.393,26 per jaar'
                },
                {
                    highlight: 'Meest gekozen',
                    label: 'Basis Zeker',
                    price: '€ 1.483,54 per jaar'
                },
                {
                    label: 'Basis Exclusief (Restitutie)',
                    price: '€ 1.624,62 per jaar'
                }
            ]"
        />
    </div>

    <div class="form-group">
        <SelectField
            v-model="insuranceOptions.termsOfPayment"
            label="Kies je betaaltermijn"
            :options="['per maand', 'per kwartaal', 'per jaar']"
        />
    </div>

    <div class="form-group">
        <h3>Eigen risico</h3>

        <SelectField
            v-model="insuranceOptions.excessDeductible"
            label="Kies de hoogste van het eigen risico"
            :options="[
                '€ 385 - verplicht eigen risico',
                '€ 885 - korting van € 22 per jaar'
            ]"
        />
    </div>

    <div class="form-group">
        <h3>Aanvullende verzekering</h3>
        <p>
            Onze aanvullende verzekeringen kennen ruim 100 verschillende
            vergoedingen. De hoogte van de vergoeding verschilt per
            pakket.hoogte van de vergoeding verschilt per pakket
        </p>

        <SelectField
            v-model="insuranceOptions.additionalInsurance"
            label="Kies uw aanvullende verzekering"
            :options="[
                'Geen aanvullende verzekering geselecteerd',
                'Aanvullend 1 - € 21,38 per jaar',
                'Aanvullend 2 - € 85,06 per jaar',
                'Aanvullend 3 - € 198,63 per jaar',
                'Aanvullend 4 - € 359,73 per jaar'
            ]"
        />
    </div>

    <div class="form-group">
        <SelectField
            v-model="insuranceOptions.dentalInsurance"
            label="Kies uw tandartsverzekering"
            :options="[
                'Geen tandartsverzekering geselecteerd',
                'Tand 1 - € 80,28 per jaar',
                'Tand 2 - € 221,65 per jaar',
                'Tand 3 - € 449,36 per jaar'
            ]"
        />
    </div>
</template>
