import DeviceInfo from 'react-native-device-info';

import utils from '../../../utils';

export default function getUniqueID() {
  return new Promise((resolve, reject) => {
    DeviceInfo.getUniqueID()
      .then((uniqueID) => {
        resolve({
          uniqueID,
        });
      })
      .catch((error) => {
        reject(utils.app.createError(error));
      });
  });
}
