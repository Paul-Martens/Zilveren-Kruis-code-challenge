import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import BsnField from './BsnField.vue';

/**
 * The valid BSN 000000012 and invalid BSN 000000013 are from this document,
 * as it's not allowed to test real-world BSNs.
 *
 * https://www.rvig.nl/test-bsn-a-nummers-omnummertabel
 */

describe('BsnField', () => {
    it('renders without issues', async () => {
        const wrapper = mount(BsnField, {
            props: { label: 'Test' }
        });

        expect(wrapper.find('label').text()).toBe('Test');
        expect(wrapper.find('input').element.value).toBe('');

        await wrapper.find('input').setValue('BBB');

        expect(wrapper.find('input').element.value).toBe('BBB');
    });

    it('shows no message for valid BSNs', async () => {
        const wrapper = mount(BsnField, {
            props: { label: 'Test' }
        });

        await wrapper.find('input').setValue('000000012');
        await wrapper.find('input').trigger('blur');

        expect(wrapper.text()).not.toContain('Helaas');
    });

    it('shows a message for invalid BSNs', async () => {
        const wrapper = mount(BsnField, {
            props: { label: 'Test' }
        });

        // Non-numerical input
        await wrapper.find('input').setValue('BBB');
        await wrapper.find('input').trigger('blur');

        expect(wrapper.text()).toContain('Helaas');

        // Numerical input, but not 9 digits
        await wrapper.find('input').setValue('0000000');
        await wrapper.find('input').trigger('blur');

        expect(wrapper.text()).toContain('Helaas');

        // Invalid BSN
        await wrapper.find('input').setValue('000000013');
        await wrapper.find('input').trigger('blur');

        expect(wrapper.text()).toContain('Helaas');
    });
});
