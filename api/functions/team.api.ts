
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";
import { TeamProps} from "@/typeScript/cms.interface";

export const TeamAPICall = async () => {
    const res = await axiosInstance.get<TeamProps>(endpoints.content.team) 
    // console.log('allService res', res);
    return res.data
}
