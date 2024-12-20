import { MutationFunction } from "@tanstack/react-query";
import axiosInstance from "../axios/axios";
import { updateStudentProps } from "@/typeScript/crud.interface";
import { endpoints } from "../endPoints/endPoints";

export const updateStudentFn = async(id:string,payload:updateStudentProps)  => {
    const res = await axiosInstance.post<updateStudentProps>(
      `${endpoints.crud.updatestudent}/${id}`,
      payload
    );
  
    return res.data;
  };
