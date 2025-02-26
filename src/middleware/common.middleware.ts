import { Request, Response, NextFunction } from 'express';
import resultSend from '../config/result';
import { decryption } from '../helper/encryption.helper';

export async function decryptBodyMiddle(req: Request, res: Response, next: NextFunction) {
    try {
        if (req.body) {
            const { cipherText, nonce } = req.body;
            // Giả sử payload được gửi theo định dạng { cipherText, nonce }
            const decryptedData = await decryption(cipherText, nonce);
            req.body = decryptedData;
        }
        next();
    } catch (error) {
        console.error("Mã hoá thất bại", error);
        res.send(resultSend.severErrors("Máy chủ đang bận!!!"));
    }
}
