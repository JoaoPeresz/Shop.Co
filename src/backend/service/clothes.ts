import ClothesRepository from "@/src/backend/repositories/clothes";

class ClothesService {
    private clothesRepository = new ClothesRepository();

    public async getAllClothes() {
        return await this.clothesRepository.findAll();
    }
}

export default ClothesService;
