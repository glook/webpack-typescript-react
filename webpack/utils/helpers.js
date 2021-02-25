/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
export const arrayFilterEmpty = (array) => array.filter((x) => !!x);

export const pathRewrite = (localUrl, remoteUrl) => (path) =>
    path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);
