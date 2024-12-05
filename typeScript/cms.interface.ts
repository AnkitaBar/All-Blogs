////////////// All Blogs ////////////


interface Photo{
    data: string,
    contentType: string,
}

export interface IallBlogsProps {
    _id: number,
    title: string,
    postText: string,
    photo: Photo,
    comments: string[],
    category: string,
    createdAt: string,
    comment_count: number,
    
}
export interface allBlogsProps extends IallBlogsProps {
    data: IallBlogsProps
}

///////////////////////// for blogs ///////////////
export interface IblogDetailsProps {
    _id: number,
    title: string,
    postText: string,
    photo: Photo,
    comments: string[] | null | undefined,
    category: string,
    createdAt: string | number | Date,
    updatedAt:string | number | Date,
    unlikes: number,
    likes: number,
    
}
export interface blogDetailsProps extends IblogDetailsProps {
    data: IblogDetailsProps
}


///////////////////////// show comments ///////////////
export interface ICommentProps {
    comment : object,
    post: {
        comment: {
            _id: string,
            title: string,
            postText: string,
            status : boolean,
            likes: number,
            category: string,
            comments : [
                {
                    comment: string,
                    createdAt:string,
                    email:string,
                    name: string,
                    updatedAt: string,
                    _id:string
                }

            ],
            createdAt: string,
            updatedAt:string,
            unlikes:number,

        }
    }
}
export interface CommentProps extends ICommentProps {
    data: ICommentProps
}

//////////////// add comments 

export interface IaddCommentProps {
    name: string,
    email: string,
    comment: string,
    blog: string,
    _id: string,
     createdAt: string,
     updatedAt: string,
     status: number,
     message: string,
     user:{
        name: string,
        email: string,
     }
}
export interface addCommentProps extends IaddCommentProps  {
    data: IaddCommentProps 
}

/////////// add likes ///////////

// export interface IaddLikesProps {
//     _id: number,
//     title: string,
//     postText: string,
//     photo: Photo,
//     comments: string[] | null | undefined,
//     category: string,
//     createdAt: string | number | Date,
//     updatedAt:string | number | Date,
//     unlikes: number,
//     likes: number,
// }
// export interface addLikeProps extends IaddLikesProps  {
//     data: IaddLikesProps 
// }

export interface IAddLikesProps extends blogDetailsProps {
    data : blogDetailsProps;
  }

  // for adding dislikes
  export interface IAddUnlikesProps extends blogDetailsProps {
    data : blogDetailsProps;
  }

/////////// categoried

//for show category//
export interface IshowAllCategoryProps {
    data: [
        {
            _id: string,
            category: string,
        }
    ]

    status: string,
}
export interface showAllCategoryProps extends Omit<IshowAllCategoryProps, 'data'> {
    data: IshowAllCategoryProps['data']
}

////////// categorypost
 // for category post//
 export interface IAllCategoryPostProps {
    _id: string;
  }
  
  export interface ICategoryPostProps {
    status: string;
    data: [
      {
        _id: string;
        title: string;
        postText: string;
        photo: {
          data: Array<Array<number>>;
          contentType: string;
        };
        likes: number;
        unlikes: number;
        createdAt: string;
        updatedAt: string;
        
      }
    ]
  }
  export interface categoryPostProps extends ICategoryPostProps {
    categoryWiseNewData: ICategoryPostProps;
  }


/////////// latest post



  //for latest post//
   // for latest post
   export interface IlatestPostProps {
    _id: string;
    title: string;
    postText: string;
    photo: Photo;
    category: string;
    comments: string[];
    // comment_count: number;
    createdAt: string;
    updatedAt: string;
    likes: number;
    unlikes: number;
    status: boolean;
  }
  export interface latestPostProps extends IlatestPostProps {
    data: IlatestPostProps;
  }

  //////////// servicesss



    export interface IallServiceProps {
      status: boolean;
      data: [
        {
          _id: string;
          name: string;
          slug: string;
          details: string;
          createdAt: string;  
          updatedAt: string;
        }
      ]
    }
    export interface allServiceProps extends IallServiceProps {
      data: IallServiceProps["data"]
    }

    //for testimonial//
  export interface IallTestimonialProps {
    success: boolean,
    countotal: string,
    message: string,
    testimonials: [
      {
        _id: string;
        name: string;
        slug: string;
        position: string,
        talk: string,
        createdAt: string;  
        updatedAt: string;
      }
    ]
  }
  export interface allTestimonialProps extends IallTestimonialProps {
    data: IallTestimonialProps
  }



  //for team//
  export interface ITeamProps {
    success: boolean,
    countotal: number,
    message: string,
    TeamMember: [
      {
        _id: string;
        name: string;
        slug: string;
        possession: string,
        createdAt: string;  
        updatedAt: string;
      }
    ]
  }
  export interface TeamProps extends ITeamProps {
    data: ITeamProps
  }




   // for courses
   export interface IcoursesProps {
    success: boolean;
    counTotal: number;
    message: string;
    Courses: [
      {
        _id: string;
        name: string;
        slug: string;
        requirement: string;
        duration: string;
        fees: string;
        createdAt: string;
        updatedAt: string;
      }
    ]
  }

  export interface coursesProps extends IcoursesProps {
    data: IcoursesProps['Courses'];
  }


///////////////////// contact 

 // for contact
 export interface IcontactProps {
  success: boolean;
  // message: string;
      _id: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      createdAt: string;
      updatedAt: string;
    
  
}
export interface contactProps extends IcontactProps {
  data: IcontactProps;
}



