import ClothesRepository from "@/src/backend/repositories/clothes";

class ClothesService {
    private clothesRepository = new ClothesRepository();

    public async getAllClothes() {
        return await this.clothesRepository.findAll();
    }

    public async findClotheById(id: string) {
        return await this.clothesRepository.findClotheById(id);
    }
}

export default ClothesService;
