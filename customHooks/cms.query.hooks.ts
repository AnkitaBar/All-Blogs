import { allBlogsAPICall } from "@/api/functions/allBlogs.api";
import { allCommentsAPICall } from "@/api/functions/allComments.api";
import { blogDetailsAPICall } from "@/api/functions/blogDetails.api";
import { addCommentProps, allServiceProps, allTestimonialProps, categoryPostProps, IallBlogsProps, IblogDetailsProps, ICommentProps, IcoursesProps, IshowAllCategoryProps, latestPostProps, TeamProps } from "@/typeScript/cms.interface";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useGlobalHooks } from "./globalHooks/globalHooks";
import { addCommentsAPICall } from "@/api/functions/addComments.api";
import { addLikesFn } from "@/api/functions/addLikes.api";
import { addUnlikesFn } from "@/api/functions/addUnlikes.api";
import { showAllCategoryFn } from "@/api/functions/showAllCategory.api";
import { categoryPostAPICall } from "@/api/functions/categoryPost.api";
import { lasestPostAPICall } from "@/api/functions/latestPost.api";
import { allServiceAPICall } from "@/api/functions/services.api";
import { allTestimonialAPICall } from "@/api/functions/testimonial.api";
import { TeamAPICall } from "@/api/functions/team.api";
import { allCoursesAPICall } from "@/api/functions/course.api";

////// allBlogs ////////////////

export const allBlogsQuery = (): UseQueryResult<IallBlogsProps, unknown> => {
    return useQuery({
      queryKey: ["BLOGS"],
      queryFn: allBlogsAPICall
    });
  };

  //////////// blogs details ///////////////////

export const blogDetailsQuery = (id:string): UseQueryResult<IblogDetailsProps, unknown> => {
    return useQuery({
      queryKey: ["BLOGS-DETAILS",id],
      queryFn : () =>  blogDetailsAPICall(id),
    });
  };

  //////////////// show comments ///////////////////

  export const allCommentsQuery = (id:string): UseQueryResult<ICommentProps , unknown> => {
    return useQuery({
      queryKey: ["BLOGS-DETAILS", id ,"COMMENTS"],
      queryFn : () => allCommentsAPICall(id)
    });
  };


  /////////////// add comments ////////////////

 
export const addCommentMutation = (id: string) => {
  const {queryClient} = useGlobalHooks();
  return useMutation({
    mutationFn: (payload: addCommentProps) => addCommentsAPICall(id, payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["ADD-COMMENT"] });
      console.log("data", data);
    },
  });
};


////////////// like

export const addLikesMutation = (id: string) => {
  const { queryClient } = useGlobalHooks();
  return useMutation({
      mutationFn: () => addLikesFn(id),
      onSuccess: data => {
      // queryClient.invalidateQueries({ queryKey: ["BLOGS"] });
      queryClient.invalidateQueries({ queryKey: ["ADD-LIKES"] });
      console.log(data.likes, "data of likes adding");
      }
  });
};


///////////// unlike
// for add unlikes query
export const addUnlikesMutation = (id: string) => {
  const { queryClient } = useGlobalHooks();
  return useMutation({
      mutationFn: () => addUnlikesFn(id),
      onSuccess: data => {
      // queryClient.invalidateQueries({ queryKey: ["BLOGS"] });
      queryClient.invalidateQueries({ queryKey: ["ADD-UNLIKES"] });
      console.log(data.unlikes, "data of unlikes adding");
      }
  });
};

//////////// show all categories


export const showAllCategoryQuery = (): UseQueryResult<IshowAllCategoryProps, unknown> => {
  return useQuery({
    queryKey: ["SHOW-ALL-CATEGORY"],
    queryFn: showAllCategoryFn
  });
};

///////////////// category post


export const categoryPostQuery = (id : string ): UseQueryResult<categoryPostProps, unknown> => {
  return useQuery({
    queryKey: ["CATEGORY-POST", id],
    queryFn: () => categoryPostAPICall(id)
  })

}


//////// latest post


export const latestPostQuery = (): UseQueryResult<latestPostProps, unknown> => {
  return useQuery({
    queryKey: ["LATEST-POST"],
    queryFn: () => lasestPostAPICall()
  })

}
//////////// services

//for all service//
export const allServiceQuery = (): UseQueryResult<allServiceProps, unknown> => {
  return useQuery({
    queryKey: ["LATEST-POST"],
    queryFn: allServiceAPICall
  });
};

//for all testimonial//
export const allTestimonialQuery = (): UseQueryResult<allTestimonialProps, unknown> => {
  return useQuery({
    queryKey: ["ALL-TESTIMONIAL"],
    queryFn: allTestimonialAPICall
  });
};


//for team//
export const TeamQuery = (): UseQueryResult<TeamProps, unknown> => {
  return useQuery({
    queryKey: ["TEAM"],
    queryFn: TeamAPICall
  });
};


// for courses query
export const allCoursesQuery = (): UseQueryResult<IcoursesProps, unknown> => {
  return useQuery({
    queryKey: ["ALL-COURSES"],
    queryFn: allCoursesAPICall
  });
};