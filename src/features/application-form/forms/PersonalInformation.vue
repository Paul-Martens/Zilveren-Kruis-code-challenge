<script setup lang="ts">
import SelectField from '../../../components/form-fields/SelectField.vue';
import InputField from '../../../components/form-fields/InputField.vue';
import BsnField from '../../../components/form-fields/BsnField.vue';
import RadioField from '../../../components/form-fields/RadioField.vue';
import { useApplicationForm } from '../../../stores/application-form';

const { personalInformation } = useApplicationForm();
</script>

<template>
    <h2>Gegevens</h2>

    <div class="form-group">
        <h3>Reden van aanmelding</h3>

        <SelectField
            v-model="personalInformation.applicationReason"
            label="Wat is de reden van uw aanvraag?"
            :options="[
                'Nieuwe werkgever met collectiviteit bij Zilveren Kruis',
                'Overstappen per 1-1-2023 naar Zilveren Kruis'
            ]"
        />
    </div>

    <div class="form-group">
        <h3>Persoonlijke gegevens</h3>

        <InputField
            label="Naam"
            v-model="personalInformation.firstName"
        />

        <InputField
            label="Tussenvoegsels"
            v-model="personalInformation.middleName"
        />

        <InputField
            label="Achternaam"
            v-model="personalInformation.lastName"
        />

        <RadioField
            label="Geslacht"
            :options="['Man', 'Vrouw']"
            v-model="personalInformation.gender"
        />

        <InputField
            label="Geboortedatum"
            v-model="personalInformation.birthDate"
        />

        <BsnField
            label="Burgerservicenummer"
            v-model="personalInformation.citizenServiceNumber"
        />
    </div>
</template>
