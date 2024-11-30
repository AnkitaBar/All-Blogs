import { allStudentAPICall } from "@/api/functions/allStudent.api";
import { addStudentProps, deleteStudentProps, editStudentProps, IaddStudentProps, IallStudentProps, updateStudentProps } from "@/typeScript/crud.interface";
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useGlobalHooks } from "./globalHooks/globalHooks";
import {  createStudentFn } from "@/api/functions/addStudent.api";
import { editStudentAPICall } from "@/api/functions/editStudent.api";
import { updateStudentFn } from "@/api/functions/updateStudent.api";
import { deleteStudentFn } from "@/api/functions/deleteStudent.api";

// for allStudent query
export const allStudentQuery = (): UseQueryResult<IallStudentProps, unknown> => {
    return useQuery({
      queryKey: ["ALL-COURSES"],
      queryFn: allStudentAPICall
    });
  };

  //////////////// add student

  // export const addStudentMutation = () => {
  //   const {queryClient} = useGlobalHooks();
  //   return useMutation({
  //     mutationFn: addStudentAPICall,
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["ADD-STUDENT"] });
  //     },
  //   });
  // };

  export const addStudentMutation = (): UseMutationResult<addStudentProps, unknown> => {
    const { queryClient } = useGlobalHooks()
    // const cookie = new Cookies()
    return useMutation<addStudentProps, void, unknown>({
        mutationFn: createStudentFn,
        onSuccess: (res: IaddStudentProps) => {
            const { success, msg } = res || {}
            if (success) {
                // cookie.set("token", token, { path: "/", secure: true })
                console.log(res, "res");
            }
            queryClient.invalidateQueries({ queryKey: ["ADD_STUDENT"] })
        }
    })

}
//////////////////////////// edit student details

export const editStudentQuery = (id:string): UseQueryResult<editStudentProps, unknown> => {
  return useQuery({
    queryKey: ["EDIT-DETAILS",id],
    queryFn : () =>  editStudentAPICall(id),
  });
};

///////////////////// update student 

export const updateStudentMutation = (id: string) => {
  const { queryClient } = useGlobalHooks();
  return useMutation({
      mutationFn: (payload: updateStudentProps) => updateStudentFn(id, payload),
      onSuccess: data => {
      // queryClient.invalidateQueries({ queryKey: ["BLOGS"] });
      queryClient.invalidateQueries({ queryKey: ["UPDATE-STUDENT"] });
      console.log(data, "UPDATED STUDENT");
      }
  });
};

/////////////// delete student

// for deleting student query
export const deleteStudentMutation = (id: string): UseMutationResult<deleteStudentProps, unknown, deleteStudentProps> => {
  const { queryClient } = useGlobalHooks()
  return useMutation<deleteStudentProps, unknown, deleteStudentProps>({
      mutationFn: (id) => deleteStudentFn(id),
      onSuccess: (res) => {
          const { status, msg } = res || {}
          if (status === true) {
              console.log(res, "res");
              // console.log(message, "message");
          }
          queryClient.invalidateQueries({ queryKey: ["DELETE-STUDENT"] })
      }
  })
}