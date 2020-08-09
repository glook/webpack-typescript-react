/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import React, {CSSProperties} from 'react';

import StrawberryIcon from '@images/strawberry.component.svg';

export default ({
    style,
    className,
}: {
    style?: CSSProperties;
    className?: string;
}): React.ReactElement => (
    <StrawberryIcon className={className} style={style} />
);
