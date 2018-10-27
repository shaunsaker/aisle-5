import DeviceInfo from 'react-native-device-info';

export default function getUniqueID() {
  return new Promise((resolve) => {
    const uniqueID = DeviceInfo.getUniqueID();

    resolve({
      uniqueID,
    });
  });
}
