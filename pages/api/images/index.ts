import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/api/postgres/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    try {
        const { id } = req.query;

        if (!id || typeof id !== "string") {
            return res.status(400).json({ success: false, message: "ID is required" });
        }

        const result = await pool.query(
            "SELECT clothe_image, rating_image FROM clothes WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0 || !result.rows[0].clothe_image || !result.rows[0].rating_image) {
            return res.status(404).json({ success: false, message: "Images not found" });
        }

        const clotheImageBase64 = Buffer.from(result.rows[0].clothe_image).toString("base64");
        const ratingImageBase64 = Buffer.from(result.rows[0].rating_image).toString("base64");

        res.status(200).json({
            success: true,
            clothe_image: `data:image/png;base64,${clotheImageBase64}`,
            rating_image: `data:image/png;base64,${ratingImageBase64}`
        });

    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
