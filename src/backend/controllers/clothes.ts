import { NextApiRequest, NextApiResponse } from "next";
import ClothesService from "@/src/backend/service/clothes";

class ClothesController {
    private clothesService = new ClothesService();

    public async findAllClothes(req: NextApiRequest, res: NextApiResponse) {
        try {
            const clothes = await this.clothesService.getAllClothes();
            return res.status(200).json(clothes);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ error: error.message });
            }
            return res.status(500).json({ error: "An unknown error occurred." });
        }
    }

    public async findClotheById(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { id } = req.query;
            if (!id || typeof id !== 'string') {
                return res.status(400).json({ error: 'ID inválido' });
            }

            const clothe = await this.clothesService.findClotheById(id);
            return res.status(200).json(clothe);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ error: error.message });
            }
            return res.status(500).json({ error: "An unknown error occurred." });
        }
    }

}

export default ClothesController;
