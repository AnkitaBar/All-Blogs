import { showAllCategoryProps } from "@/typeScript/cms.interface";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";

export const showAllCategoryFn = async () => {
    const res = await axiosInstance.get<showAllCategoryProps>(endpoints.blogs.showAllCategory)
    console.log('allBlogsAPICall res', res);
    return res.data
}