import { allStudentProps } from "@/typeScript/crud.interface";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";

export const allStudentAPICall = async () => {
    const res = await axiosInstance.get<allStudentProps>(endpoints.crud.allstudent)
    // console.log('allBlogsAPICall res', res);
    return res.data;
}