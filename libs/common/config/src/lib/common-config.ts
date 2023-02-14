import defaultConfig from './configs/default';
import prodConfig from './configs/production';

let configObject: { [key: string]: unknown } = {
  ...defaultConfig,
};

if (process.env['NODE_ENV'] === 'production') {
  configObject = {
    ...configObject,
    ...prodConfig,
  };
}

export const getConfig = <T>(key: string): T | null => {
  if (configObject[key]) return configObject[key] as T;
  else return null;
}