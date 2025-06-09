import { defineStore } from 'pinia';
import { ref } from 'vue';

const useApplicationForm = defineStore('application-form', () => {
    const personalInformation = {
        applicationReason: ref<string>(
            'Overstappen per 1-1-2023 naar Zilveren Kruis'
        ),
        firstName: ref<string>(),
        middleName: ref<string>(),
        lastName: ref<string>(),
        gender: ref<string>(),
        birthDate: ref<string>(),
        citizenServiceNumber: ref<string>()
    };

    const insuranceOptions = {
        insurance: ref<string>(),
        paymentTerm: ref<'yearly' | 'quarterly' | 'monthly'>('yearly'),
        excessDeductible: ref<string>('€ 385 - verplicht eigen risico'),
        additionalInsurance: ref<string>(
            'Geen aanvullende verzekering geselecteerd'
        ),
        dentalInsurance: ref<string>('Geen tandartsverzekering geselecteerd')
    };

    return { personalInformation, insuranceOptions };
});

export { useApplicationForm };
