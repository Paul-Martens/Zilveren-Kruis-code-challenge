<script setup lang="ts">
import AppFooter from './features/app-footer/components/AppFooter.vue';
import AppHeader from './features/app-header/components/AppHeader.vue';
import ConfirmationOverview from './features/application-form/forms/ConfirmationOverview.vue';
import InsuranceOptions from './features/application-form/forms/InsuranceOptions.vue';
import PersonalInformation from './features/application-form/forms/PersonalInformation.vue';
</script>

<template>
    <div
        id="app"
        class="main-placeholder"
    >
        <!-- HEADER -->
        <AppHeader />

        <!-- CONTENT HERE -->
        <div class="container my-3">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <h1>Aanmelden</h1>

                    <PersonalInformation />
                    <InsuranceOptions />
                    <ConfirmationOverview />
                </div>
            </div>
        </div>

        <!-- FOOTER -->
        <AppFooter />
    </div>
</template>
