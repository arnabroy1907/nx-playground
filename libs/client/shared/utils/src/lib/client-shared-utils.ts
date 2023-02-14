import axios from 'axios';
import { getConfig } from '@nx-playground/common/config';

const microServiceBaseUrl = getConfig<string>('microServiceApiBaseUrl') || '';
const microServiceOne = `${microServiceBaseUrl}/micro-service-one`;
const microServiceTwo = `${microServiceBaseUrl}/micro-service-two`;

export function clientSharedUtils(): string {
  return 'client-shared-utils';
}


export const getMsOneUtilData = async () => {
  try {
    const getUtilData = await axios.post(`${microServiceOne}/util-data`,
      {
        key_one: 'value one'
      }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return getUtilData.data;
  } catch (err) {
    console.error('getMsOneUtilData', err);
    return null;
  }
};

export const getMsTwoUtilData = async () => {
  try {
    const getUtilData = await axios.get(`${microServiceTwo}/util-data`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        key_one: 'value one'
      }
    });

    return getUtilData.data;
  } catch (err) {
    console.error('getMsTwoUtilData', err);
    return null;
  }
};