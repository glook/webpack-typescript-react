/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @example
 *  const config = {
 *       $: 'jquery',
 *  }
 */
import {ProvidePlugin} from 'webpack';

const config = {};

export const providePlugin = new ProvidePlugin(config);
