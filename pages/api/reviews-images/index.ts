import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/api/postgres/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.query;

        if (!id || typeof id !== "string") {
            return res.status(400).json({ success: false, message: "ID is required" });
        }

        const result = await pool.query(
            "SELECT rating_image FROM reviews WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0 || !result.rows[0].rating_image) {
            return res.status(404).json({ success: false, message: "Images not found" });
        }

        const ratingImageBase64 = Buffer.from(result.rows[0].rating_image).toString("base64");

        res.status(200).json({
            success: true,
            rating_image: `data:image/png;base64,${ratingImageBase64}`
        });

    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
