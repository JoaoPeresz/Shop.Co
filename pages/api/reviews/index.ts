import { NextApiRequest, NextApiResponse } from 'next';
import ReviewsController from "@/src/backend/controllers/reviews";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reviewsController = new ReviewsController();

    if (req.method === 'GET') {
        try {
            const clothes = await reviewsController.findAllReviews(req, res);
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