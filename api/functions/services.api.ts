import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";
import { allServiceProps} from "@/typeScript/cms.interface";

export const allServiceAPICall = async () => {
    const res = await axiosInstance.get<allServiceProps>(endpoints.content.service) 
    // console.log('allService res', res);
    return res.data
}