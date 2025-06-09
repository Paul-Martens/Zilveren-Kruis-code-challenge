import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import RadioField from './RadioField.vue';

describe('RadioField', () => {
    it('renders without issues', async () => {
        const wrapper = mount(RadioField, {
            props: { label: 'Test', options: ['AAA', 'BBB'] }
        });

        expect(wrapper.find('label').text()).toBe('Test');
        expect(wrapper.find('input').element.checked).toBe(false);

        await wrapper.find('input').trigger('click');

        expect(wrapper.find('input').element.checked).toBe(true);
    });
});
