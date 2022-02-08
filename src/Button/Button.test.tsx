import {render, screen} from '@testing-library/react';
import {Button} from './Button';

describe('Button test`s', () => {

    it('should be render with title, without type', () => {
        render(<Button title='test'/>);

        expect(screen.getByText('test')).toBeInTheDocument();
    });

    it('should be render with type primary', () => {
        render(<Button
            title='test'
            type='primary'
        />);

        expect(screen.getByText('test')).toHaveClass('primary');
    });

    it('should be render with type secondary', () => {
        render(<Button
            title='test'
            type='secondary'
        />);

        expect(screen.getByText('test')).toHaveClass('secondary');
    });

    it('button snapshot', () => {
        const view = render(<Button title={'title'}/>);

        expect(view).toMatchSnapshot();
    });
});