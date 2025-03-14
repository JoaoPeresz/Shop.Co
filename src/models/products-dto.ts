export default interface ProductDTO {
    id: string;
    name: string;
    clothe_type: string;
    description: string;
    price: string;
    discount: number;
    discount_percentage: number;
    is_arrival: boolean;
    is_top_selling: boolean;
    might_like: boolean;
    rating: string;
    color: string;
    rating_image: BufferSource;
    clothe_image: BufferSource;
}
