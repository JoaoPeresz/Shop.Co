import {api} from "@/api/axios/api-axios";

export const getAllClothes = async () => {
    try {
        const response = await api.get("/api/clothes");
        return response.data;
    } catch (error) {
        console.error("Error fetching clothes:", error);
        throw error;
    }
};

export const findClotheById = async (id: string) => {
    try {
        const response = await api.get(`/api/clothes/${id}`);
        return response.data;
    } catch (error) {
        console.error("Clothing item not found for the provided ID:", error);
        throw error;
    }
}