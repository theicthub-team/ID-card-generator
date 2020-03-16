import CryptoJS from "crypto-js";

export const encrypt = data => {
  const secretKey = "+8_2g3d!H(3#2`4`*V53";

  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();

  return ciphertext;
};

export const decrypt = ciphertext => {
  const secretKey = "+8_2g3d!H(3#2`4`*V53";

  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};
