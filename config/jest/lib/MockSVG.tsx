import React from 'react';

interface MockSVGProps {
    onClick?: (arg: any) => void;
}

const MockSVG = ({
    onClick
}: MockSVGProps) => <svg data-testid="test_svg_icon_id" onClick={onClick} />;

export default MockSVG;
