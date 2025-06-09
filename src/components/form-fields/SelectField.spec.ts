import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import SelectField from './SelectField.vue';

describe('SelectField', () => {
    it('renders without issues', async () => {
        const wrapper = mount(SelectField, {
            props: { label: 'Test', options: ['AAA', 'BBB'] }
        });

        expect(wrapper.find('label').text()).toBe('Test');
        expect(wrapper.find('select').element.value).toBe('');

        await wrapper.find('select').setValue('BBB');

        expect(wrapper.find('select').element.value).toBe('BBB');
    });
});
