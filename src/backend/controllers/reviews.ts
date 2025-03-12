import { NextApiRequest, NextApiResponse } from "next";
import ReviewsService from "@/src/backend/service/reviews";

class ReviewsController {
    private reviewsService = new ReviewsService();

    public async findAllReviews(req: NextApiRequest, res: NextApiResponse) {
        try {
            const clothes = await this.reviewsService.getAllReviews();
            return res.status(200).json(clothes);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ error: error.message });
            }
            return res.status(500).json({ error: "An unknown error occurred." });
        }
    }
}

export default ReviewsController;
