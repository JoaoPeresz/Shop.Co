import ClothesController from "@/src/backend/controllers/clothes";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const clothesController = new ClothesController();

    if (req.method === 'GET') {
        try {
            await clothesController.findClotheById(req, res);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ success: false, message: error.message });
            }
        }
    }
}