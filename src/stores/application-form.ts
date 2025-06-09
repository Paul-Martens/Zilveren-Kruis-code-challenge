import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

function calculateCost(
    price: number,
    term: 'yearly' | 'quarterly' | 'monthly'
) {
    switch (term) {
        case 'monthly':
            return `${(price / 12).toLocaleString('nl', { style: 'currency', currency: 'EUR' })} per maand`;

        case 'quarterly':
            return `${(price / 4).toLocaleString('nl', { style: 'currency', currency: 'EUR' })} per kwartaal`;

        default:
            return `${price.toLocaleString('nl', { style: 'currency', currency: 'EUR' })} per jaar`;
    }
}

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

    const computedValues = {
        insuranceCost: computed(() => {
            switch (insuranceOptions.insurance.value) {
                case 'Basis Budget':
                    return calculateCost(
                        1393.26,
                        insuranceOptions.paymentTerm.value
                    );

                case 'Basis Zeker':
                    return calculateCost(
                        1483.54,
                        insuranceOptions.paymentTerm.value
                    );

                case 'Basis Exclusief (Restitutie)':
                    return calculateCost(
                        1624.62,
                        insuranceOptions.paymentTerm.value
                    );

                default:
                    return undefined;
            }
        }),

        additionalInsuranceCost: computed(() => {
            switch (insuranceOptions.additionalInsurance.value) {
                case 'Aanvullend 1':
                    return calculateCost(
                        21.38,
                        insuranceOptions.paymentTerm.value
                    );

                case 'Aanvullend 2':
                    return calculateCost(
                        85.06,
                        insuranceOptions.paymentTerm.value
                    );

                case 'Aanvullend 3':
                    return calculateCost(
                        198.63,
                        insuranceOptions.paymentTerm.value
                    );

                case 'Aanvullend 4':
                    return calculateCost(
                        359.73,
                        insuranceOptions.paymentTerm.value
                    );

                default:
                    return undefined;
            }
        }),

        dentalInsuranceCost: computed(() => {
            switch (insuranceOptions.dentalInsurance.value) {
                case 'Tand 1':
                    return calculateCost(
                        80.28,
                        insuranceOptions.paymentTerm.value
                    );

                case 'Tand 2':
                    return calculateCost(
                        221.65,
                        insuranceOptions.paymentTerm.value
                    );

                case 'Tand 3':
                    return calculateCost(
                        449.36,
                        insuranceOptions.paymentTerm.value
                    );

                default:
                    return undefined;
            }
        })
    };

    return { personalInformation, insuranceOptions, computedValues };
});

export { useApplicationForm };
