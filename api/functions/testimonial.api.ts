
import { endpoints } from "../endPoints/endPoints";
import axiosInstance from "../axios/axios";
import { allTestimonialProps} from "@/typeScript/cms.interface";

export const allTestimonialAPICall = async () => {
    const res = await axiosInstance.get<allTestimonialProps>(endpoints.content.testimonial) 
    // console.log('allService res', res);
    return res.data
}
