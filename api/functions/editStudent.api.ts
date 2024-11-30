import { editStudentProps } from "@/typeScript/crud.interface";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";

export const editStudentAPICall = async (id:string) => {
    const res = await axiosInstance.get<editStudentProps>(`${endpoints.crud.editstudent}/${id}`)
    console.log('student  res',res)
    return res.data;
}