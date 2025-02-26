// import { ENV } from './../config/env';
// import sodium from 'libsodium-wrappers';

// const fnonce = async () => {
//     await sodium.ready;
//     // Tạo nonce ngẫu nhiên (số dùng một lần), cần nhớ nonce này để giải mã
//     const nonce: Uint8Array = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);

//     return {
//         nonce
//     };
// }

// export default class Encryption {
//     static async encryption(data: any) {
//         await sodium.ready;
//         // Sử dụng passphrase "hoanchibaoPrivate" để tạo key 32-byte thông qua hàm băm
//         const key: Uint8Array = sodium.crypto_generichash(sodium.crypto_secretbox_KEYBYTES, ENV.SECRET_KEY_ENCRYPTION);

//         // Chuyển object thành chuỗi JSON
//         const message: string = JSON.stringify(data);
//         // Mã hoá message sử dụng thuật toán secretbox_easy (mã hoá đối xứng)
//         const { nonce } = await fnonce();

//         const ciphertext: Uint8Array = sodium.crypto_secretbox_easy(message, nonce, key);

//         // Chuyển ciphertext và nonce sang chuỗi Latin1 (raw binary)
//         const ciphertextLatin1: string = Buffer.from(ciphertext).toString('latin1');
//         return ciphertextLatin1
//     }

//     static async decryption(cipherText: string) {
//         const { nonce } = await fnonce();
//         const nonceLatin1: string = Buffer.from(nonce).toString('latin1');
//         const ciphertextBuf: Uint8Array = Buffer.from(cipherText, 'latin1');
//         const nonceBuf: Uint8Array = Buffer.from(nonceLatin1, 'latin1');
//         const key: Uint8Array = sodium.crypto_generichash(sodium.crypto_secretbox_KEYBYTES, ENV.SECRET_KEY_ENCRYPTION);

//         // Giải mã dữ liệu
//         const decrypted: Uint8Array | null = sodium.crypto_secretbox_open_easy(ciphertextBuf, nonceBuf, key);

//         if (decrypted === null) {
//             console.error("Decryption failed!");
//             return;
//         }

//         // Chuyển dữ liệu giải mã (Uint8Array) thành chuỗi UTF-8
//         const decryptedMessage: string = Buffer.from(decrypted).toString('utf8');
//         const decryptedObj = JSON.parse(decryptedMessage);
//         return decryptedObj;
//     }
// }

import sodium from 'libsodium-wrappers';
import { ENV } from '../config/env';

/**
 * Hàm mã hoá dữ liệu.
 * @param data Dữ liệu cần mã hoá (có thể là object).
 * @returns Một Promise chứa ciphertext và nonce dưới dạng chuỗi Latin1.
 */

export async function encryption(data: any): Promise<{ cipherText: string; nonce: string }> {
    await sodium.ready;

    // Tạo key từ passphrase cố định
    const key: Uint8Array = sodium.crypto_generichash(sodium.crypto_secretbox_KEYBYTES,  ENV.SECRET_KEY_ENCRYPTION);

    // Chuyển object thành chuỗi JSON
    const message: string = JSON.stringify(data);

    // Tạo nonce ngẫu nhiên với độ dài yêu cầu (thường là 24 bytes)
    const nonce: Uint8Array = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);

    // Mã hoá message sử dụng thuật toán secretbox_easy
    const ciphertext: Uint8Array = sodium.crypto_secretbox_easy(message, nonce, key);

    // Chuyển ciphertext và nonce sang chuỗi Latin1 (raw binary)
    const ciphertextLatin1: string = Buffer.from(ciphertext).toString("base64");
    const nonceLatin1: string = Buffer.from(nonce).toString("base64");

    return { cipherText: ciphertextLatin1, nonce: nonceLatin1 };
}

/**
 * Hàm giải mã dữ liệu.
 * @param cipherText Ciphertext được mã hoá dưới dạng chuỗi Latin1.
 * @param nonce Nonce tương ứng dưới dạng chuỗi Latin1.
 * @returns Một Promise chứa dữ liệu gốc (object) sau khi giải mã.
 */
export async function decryption(cipherText: string, nonce: string): Promise<any> {
    await sodium.ready;

    // Tạo key từ passphrase cố định (phải giống hàm encryption)
    const key: Uint8Array = sodium.crypto_generichash(sodium.crypto_secretbox_KEYBYTES,  ENV.SECRET_KEY_ENCRYPTION);

    // Chuyển chuỗi Latin1 trở lại Buffer (Uint8Array)
    const ciphertextBuf: Uint8Array = Buffer.from(cipherText, "base64");
    const nonceBuf: Uint8Array = Buffer.from(nonce, "base64");

    // Giải mã dữ liệu
    const decrypted: Uint8Array | null = sodium.crypto_secretbox_open_easy(ciphertextBuf, nonceBuf, key);
    if (!decrypted) {
        console.log(decrypted, "Giải mã thất bại!!!")
        return;
    }

    // Chuyển dữ liệu giải mã từ Uint8Array thành chuỗi UTF-8
    const decryptedMessage: string = Buffer.from(decrypted).toString('utf8');
    // Parse chuỗi JSON về lại object
    const decryptedObj = JSON.parse(decryptedMessage);

    return decryptedObj;
}
