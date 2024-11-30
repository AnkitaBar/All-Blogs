import { MutationFunction } from "@tanstack/react-query";
import axiosInstance from "../axios/axios";
import { deleteStudentProps } from "@/typeScript/crud.interface";
import { endpoints } from "../endPoints/endPoints";

export const deleteStudentFn: MutationFunction<deleteStudentProps> = async (id) => {
    const res = await axiosInstance.delete<deleteStudentProps>(`${endpoints.crud.deletestudent}/${id}`);
    return res.data;
};