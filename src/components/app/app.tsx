/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import React, {lazy, Suspense} from 'react';
import {stylesContainer, stylesHeader, stylesImage} from './app.module.scss';

const LazyStrawberryIcon = lazy(() => import('./strawberry'));
export const App = (): React.ReactElement => (
    <div className={stylesContainer}>
        <div className={stylesHeader}>It works</div>
        <Suspense fallback={'loading...'}>
            <LazyStrawberryIcon className={stylesImage} />
        </Suspense>
    </div>
);
