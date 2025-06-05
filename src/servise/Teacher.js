import { del, get, patch, post } from "../utils/request";

export const getTeacher = async () => {
    const result = await get("teacher");
    return result;
};

export const postTeacher = async (option) => {
    const result = await post("teacher", option);
    return result;
}

export const deleteTeacher = async (id) => {
    const result = await del(`teacher/${id}`);
    return result;
}

export const updateTeacher = async (id, option) => {
    const result = await patch(`teacher/${id}`, option);
    return result;
}

export const getTeacherId = async (id) => {
    const result = await get(`teacher/${id}`);
    return result;
};