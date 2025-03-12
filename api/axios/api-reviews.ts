import {api} from "@/api/axios/api-axios";

export const getAllReviews = async () => {
    try {
        const response = await api.get("/api/reviews");
        return response.data;
    } catch (error) {
        console.error("Error fetching clothes:", error);
        throw error;
    }
};