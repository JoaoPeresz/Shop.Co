import ReviewsRepository from "@/src/backend/repositories/reviews";

class ReviewsService {
    private clothesRepository = new ReviewsRepository();

    public async getAllReviews() {
        return await this.clothesRepository.findAll();
    }
}

export default ReviewsService;
