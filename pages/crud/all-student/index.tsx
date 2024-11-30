import { allStudentQuery, deleteStudentMutation } from '@/customHooks/crud.query.hooks';
import { Box, Button, Card, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import SweetAlertComponent from '@/ui/sweetAlert/SweetAlert';

const AllStudent = () => {
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null); 
    const { data: allStudentData, isPending: allCoursesPending , refetch:studentsRefetch } = allStudentQuery();

    const router = useRouter();
    const { slug } = router.query;

    const {mutate: deleteStudentMutate, isPending: deleteStudentPending } = deleteStudentMutation(slug as string);


  const allStudent = allStudentData?.data || [];
  +console.log('allStudent', allStudent);


  const handleDeleteClick = (id: string) => {
    setDeleteId(id); // Set the ID of the student to delete
    setModal(true); // Show the SweetAlert modal
  };

  const confirmDelete = (id: string) => {
    deleteStudentMutate(id as string, {
      onSuccess: () => {
        studentsRefetch(); // Refresh the student list
        setModal(false); // Close the SweetAlert modal
      },
    });
  };

  return (
    <div>
      <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        All Students
      </Typography>

      {
        <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#5b636a" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Phone</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Address</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>City</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Class</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allStudent.map((student) => (
                <TableRow key={student._id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>{student.address}</TableCell>
                  <TableCell>{student.city}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell style={{ display: "flex", justifyContent: "center" }}>
                    <Link href={'/crud/all-student/' + student._id}>
                        <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ mr: 1, backgroundColor: "#5b636a" }}
                        >
                        <EditIcon />
                        </Button>
                    </Link>
                    <Button variant="outlined" color="error" size="small">
                      <DeleteIcon 
                      onClick={() => handleDeleteClick(student._id)} 
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }

      {modal && deleteId && (
        <SweetAlertComponent
          confirm={()=>confirmDelete(deleteId)}
          cancel={() => setModal(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </Box>
    </div>
  )
}

export default AllStudent
