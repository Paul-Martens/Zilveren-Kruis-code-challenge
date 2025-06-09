import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import RadioTileField from './RadioTileField.vue';

describe('RadioTileField', () => {
    it('renders without issues', async () => {
        const wrapper = mount(RadioTileField, {
            props: {
                label: 'Test',
                options: [
                    { label: 'AAA', price: 'BBB', highlight: 'CCC' },
                    { label: 'DDD', price: 'EEE' }
                ]
            }
        });

        expect(wrapper.find('label').text()).toBe('Test');
        expect(wrapper.find('input').element.checked).toBe(false);

        await wrapper.find('input').trigger('click');

        expect(wrapper.find('input').element.checked).toBe(true);
    });
});
