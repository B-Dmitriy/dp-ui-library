import {render, screen} from '@testing-library/react';
import {Range} from './Range';

const onChange = jest.fn();

describe('DoubleRange test`s', () => {

    it('should be render', () => {
        render(<Range
            min={1}
            max={10}
            value={4}
            onChange={onChange}
        />);

        expect(screen.getByTestId('range_wrapper')).toBeInTheDocument();
    });

    it('checkbox snapshot', () => {
        const view = render(<Range
            min={1}
            max={10}
            value={3}
            onChange={onChange}
        />);

        expect(view).toMatchSnapshot();
    });
});