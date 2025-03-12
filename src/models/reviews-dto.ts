export default interface ReviewsDTO {
    description: string;
    id: string;
    rating_image: BufferSource | null;
    review_date: string | Date;
    user_name: string;
}
