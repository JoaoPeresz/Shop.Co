import pool from "@/api/postgres/db";

class ClothesRepository {
    public async findAll() {
        try {
            const query = `SELECT * FROM clothes;`;
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            throw new Error(`${error} fetching clothes: An unknown error occurred.`);
        }
    }
}

export default ClothesRepository;