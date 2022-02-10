import {render, screen} from '@testing-library/react';
import {Preloader} from './Preloader';
import preloader from './../../assets/gif/load.gif';

describe('Preloader test`s', () => {

    it('should be render', () => {

        render(<Preloader/>);

        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', preloader);
    });

    it('preloader snapshot', () => {
        const view = render(<Preloader/>);

        expect(view).toMatchSnapshot();
    });
});