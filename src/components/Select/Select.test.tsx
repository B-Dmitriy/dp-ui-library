import {render, screen} from '@testing-library/react';
import {Select} from './Select';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();
const onChangeSelect = jest.fn();

describe('DoubleRange test`s', () => {

    it('should be render', () => {
        render(<Select
            value={'test2'}
            childrenArray={['test1', 'test2', 'test3']}
        />);
        expect(screen.getByTestId('select')).toBeInTheDocument();
        expect(screen.getByTestId('select')).toHaveTextContent('test1');
        expect(screen.getByTestId('select')).toHaveTextContent('test2');
        expect(screen.getByTestId('select')).toHaveTextContent('test3');
    });

    it('should be change value', () => {
        render(<Select
            value={'test1'}
            childrenArray={['test1', 'test2', 'test3']}
            onChange={onChange}
            onChangeSelect={onChangeSelect}
        />);
        userEvent.selectOptions(screen.getByTestId('select'), 'test2');
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChangeSelect).toHaveBeenCalledTimes(1);
    });

    it('checkbox snapshot', () => {
        const view = render(<Select
            value={'test2'}
            childrenArray={['test1', 'test2', 'test3']}
        />);
        expect(view).toMatchSnapshot();
    });
});
