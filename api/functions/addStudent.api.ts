import { addStudentProps } from "@/typeScript/crud.interface";
import { MutationFunction } from "@tanstack/react-query";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";


export const createStudentFn: MutationFunction<addStudentProps> = async payload => {
    const res = await axiosInstance.post<addStudentProps>(
      endpoints.crud.addstudent,
      payload
    );
  
    return res.data;
  };