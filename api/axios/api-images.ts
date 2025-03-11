import { api } from "@/api/axios/api-axios";

export const getClotheImages = async (id: string): Promise<{ clotheImage: string; ratingImage: string }> => {
    try {
        const response = await api.get(`/api/images?id=${id}`);

        return {
            clotheImage: response.data.clothe_image,
            ratingImage: response.data.rating_image
        };
    } catch (error) {
        console.error(`Error fetching images for clothe ${id}:`, error);
        throw error;
    }
};
