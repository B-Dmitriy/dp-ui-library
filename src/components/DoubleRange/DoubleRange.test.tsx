import {render, screen} from '@testing-library/react';
import {DoubleRange} from './DoubleRange';

const onChange = jest.fn();

describe('DoubleRange test`s', () => {

    it('should be render', () => {
        render(<DoubleRange
            min={1}
            max={10}
            value={[3, 4]}
            onChange={onChange}
        />);

        expect(screen.getByTestId('doubleRange_wrapper')).toBeInTheDocument();
    });

    it('checkbox snapshot', () => {
        const view = render(<DoubleRange
            min={1}
            max={10}
            value={[3, 4]}
            onChange={onChange}
        />);

        expect(view).toMatchSnapshot();
    });
});