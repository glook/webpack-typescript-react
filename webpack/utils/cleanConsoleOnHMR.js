/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * Reconfigure default HMR behavior, now it clears your console on every
 * codebase update
 */
if (IS_DEV_SERVER) {
    if (module.hot) {
        module.hot.accept();
        module.hot.addStatusHandler((status) => {
            if (status === 'prepare') console.clear();
        });
    }
}
