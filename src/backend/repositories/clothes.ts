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

    public async findClotheById(id: string) {
        try {

            const query = `SELECT * FROM clothes WHERE id = $1;`;
            const result = await pool.query(query, [id]);
            if (result.rows.length === 0) {
                throw new Error('Clothe not found');
            }
            return result.rows[0];
        } catch (error) {
            throw new Error(`${error} fetching clothe by id: An unknown error occurred.`);
        }
    }
}

export default ClothesRepository;
