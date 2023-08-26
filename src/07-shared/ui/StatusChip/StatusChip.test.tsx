import { render, screen } from '@testing-library/react';
import { StatusChip } from '07-shared/ui/StatusChip/StatusChip';
import { withTranslate } from '07-shared/lib/withTranslate/withTranslate';

describe('StatusChip', () => {
    it('should be render with status done', () => {
        render(withTranslate(<StatusChip status={'done'} />));

        const chip = screen.getByTestId('StatusChip_test_id');

        expect(chip).toBeInTheDocument();
        expect(chip).toHaveClass('done');
        expect(chip).toHaveTextContent('Done');
    });

    it('should be render with status in_progress', () => {
        render(withTranslate(<StatusChip status={'in_progress'} />));

        const chip = screen.getByTestId('StatusChip_test_id');

        expect(chip).toBeInTheDocument();
        expect(chip).toHaveClass('in_progress');
        expect(chip).toHaveTextContent('In progress');
    });
});
