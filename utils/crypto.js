import { AES, enc } from 'crypto-js';

const tokenKey = process.env.TOKEN_KEY;

export function decryptToken(token) {
  const bytes = AES.decrypt(token, tokenKey);
  return bytes.toString(enc.Utf8);
}

export function encryptToken(token) {
  return AES.encrypt(token, tokenKey).toString();
}
