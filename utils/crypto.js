// borrowed from https://github.com/TomDoesTech/password-manager
import pbkdf2 from "crypto-js/pbkdf2";
import { AES, enc, SHA256} from "crypto-js";

export function hashToken(token) {
    return SHA256(token).toString();
}

export function generateTokenKey({ email, hashedToken, salt}){
    return pbkdf2(`${email}: ${hashedToken}`, salt, {keySize: 32}).toString();
}

export function decryptToken({tokenKey, token}){
    const bytes = AES.decrypt(token, tokenKey);
    const decrypted = bytes.toString(enc.Utf8)

    try{
        return JSON.parse(decrypted).token
    } catch (e){
        return null
    }
}

export function encryptToken({tokenKey, token}){
    return AES.encrypt(token, tokenKey).toString();
}
