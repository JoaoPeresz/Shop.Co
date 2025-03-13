export default interface ProductDTO {
    id: string;
    name: string;
    description: string;
    price: string;
    discount: number;
    discount_percentage: number;
    is_arrival: boolean;
    is_top_selling: boolean;
    might_like: boolean;
    rating: string;
    rating_image: BufferSource;
    clothe_image: BufferSource;
}
