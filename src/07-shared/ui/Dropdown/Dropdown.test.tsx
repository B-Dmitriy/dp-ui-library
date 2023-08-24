import { render, screen } from '@testing-library/react';
import { Dropdown } from '07-shared/ui/Dropdown';

describe('Dropdown', () => {
    const list = [{ label: 'label1', value: 'label2' }, { label: 'label2', value: 'value2' }];
    const onSelect = jest.fn();

    it('render', () => {
        render(<Dropdown
            list={list}
            onSelect={onSelect}
        />);

        const dropdown = screen.getByTestId('Dropdown-test-id');

        expect(dropdown).toBeInTheDocument();
    });
});
