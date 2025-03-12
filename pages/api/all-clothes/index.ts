import { NextApiRequest, NextApiResponse } from 'next';
import ClothesController from "@/src/backend/controllers/clothes";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const clothesController = new ClothesController();

    if (req.method === 'GET') {
        try {
            const clothes = await clothesController.findAllClothes(req, res);
            res.status(200).json(clothes);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ success: false, message: error.message });
            } else {
                res.status(500).json({ success: false, message: 'An unknown error occurred' });
            }
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}