import { categoryPostProps} from "@/typeScript/cms.interface"
import axiosInstance from "../axios/axios"
import { endpoints } from "../endPoints/endPoints"

  export const categoryPostAPICall = async (id: string) => {
    const res = await axiosInstance.get<categoryPostProps>(`${endpoints.blogs.categorypost}/${id}`)
    // console.log('categoryPost res', res);
    return res.data
}
