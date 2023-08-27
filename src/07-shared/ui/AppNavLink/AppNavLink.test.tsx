import { render, screen } from '@testing-library/react';
import { AppNavLink } from './AppNavLink';
import { withMemoryRouter } from '../../lib';

describe('AppNavLink', () => {
    test('AppNavLink render with active path', () => {
        render(withMemoryRouter(
            <AppNavLink to="/about">
                Title
            </AppNavLink>,
            '/about',
        ));

        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByTestId('navLink_test_id')).toHaveClass('active');
    });

    test('AppNavLink render with a different path', () => {
        render(withMemoryRouter(
            <AppNavLink to="/about">
                Title
            </AppNavLink>,
            '/home',
        ));

        expect(screen.getByTestId('navLink_test_id')).not.toHaveClass('active');
    });
});
