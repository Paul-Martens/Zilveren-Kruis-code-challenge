import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import InputField from './InputField.vue';

describe('InputField', () => {
    it('renders without issues', async () => {
        const wrapper = mount(InputField, {
            props: { label: 'Test' }
        });

        expect(wrapper.find('label').text()).toBe('Test');
        expect(wrapper.find('input').element.value).toBe('');

        await wrapper.find('input').setValue('BBB');

        expect(wrapper.find('input').element.value).toBe('BBB');
    });
});
