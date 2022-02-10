import s from './Radio.module.css';
import {render, screen} from '@testing-library/react';
import {Radio} from './Radio';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();
const onChangeChecked = jest.fn();


describe('Radio test`s', () => {

    it('should be render with type checkbox', () => {
        render(<Radio
            type={'test'}
            checked={true}
        />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toHaveClass(s.superRadio__input_select);
        expect(screen.getByRole('checkbox')).toHaveAttribute('type', 'checkbox');
        expect(screen.getByRole('checkbox')).not.toHaveAttribute('type', 'test');
    });

    it('should be called onChange and onChangeChecked', () => {
        render(<Radio
            type={'test'}
            label={'label'}
            checked={false}
            onChange={onChange}
            onChangeChecked={onChangeChecked}
        />);
        userEvent.click(screen.getByText('label'));
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toHaveClass(s.superRadio__input_not_select);
        expect(onChange).toBeCalledTimes(1);
        expect(onChangeChecked).toBeCalledTimes(1);
    });

    it('preloader snapshot', () => {
        const view = render(<Radio checked={true}/>);

        expect(view).toMatchSnapshot();
    });
});