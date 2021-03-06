import React from 'react';

import {
    Icon,
    Tooltip,
} from 'antd';

import {
    FitIcon,
} from 'icons';

import {
    Canvas,
} from 'cvat-canvas';

interface Props {
    canvasInstance: Canvas;
}

const FitControl = React.memo((props: Props): JSX.Element => {
    const {
        canvasInstance,
    } = props;

    return (
        <Tooltip overlay='Fit the image' placement='right'>
            <Icon component={FitIcon} onClick={(): void => canvasInstance.fit()} />
        </Tooltip>
    );
});

export default FitControl;
