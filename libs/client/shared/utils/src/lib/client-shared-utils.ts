import axios from 'axios';

const microServiceOne = 'http://localhost:8080/api/micro-service-one';
const microServiceTwo = 'http://localhost:8080/api/micro-service-two';

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