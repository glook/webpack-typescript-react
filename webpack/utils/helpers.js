/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {argv} from 'yargs';

export const parseArguments = () => {
    const {env = []} = argv;
    return env.reduce((accumulator, currentValue) => {
        const [key, value = true] = currentValue.split('=');
        return {...accumulator, [key]: value};
    }, {});
};

export const arrayFilterEmpty = (array) => array.filter((x) => !!x);

export const pathRewrite = (localUrl, remoteUrl) => (path) =>
    path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);
