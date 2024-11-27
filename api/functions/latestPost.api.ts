import { latestPostProps } from "@/typeScript/cms.interface";
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";

export const lasestPostAPICall = async () => {
    const res = await axiosInstance.get<latestPostProps>(endpoints.blogs.letestPost)
    console.log('LatestPost res', res);
    return res.data
}
