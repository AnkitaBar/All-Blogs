import { editStudentQuery, updateStudentMutation } from '@/customHooks/crud.query.hooks';
import { editStudentProps, updateStudentProps } from '@/typeScript/crud.interface';
import { Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const EditStudent = () => {

    const router = useRouter();
    const { slug } = router.query;
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
  } = useForm<editStudentProps>();

    const { data: studentDetailsData, isPending: isStudentDetailsPending, refetch: studentDetailsRefetch } = editStudentQuery(slug as string);

    const { mutate: updateStudentMutate, isPending: updateStudentPending } = updateStudentMutation(slug as string);


    useEffect(() => {
        if (studentDetailsData) {
            setValue("name", studentDetailsData.name);
            setValue("email", studentDetailsData.email);
            setValue("phone", studentDetailsData.phone);
            setValue("address", studentDetailsData.address);
            setValue("city", studentDetailsData.city);
            setValue("class", studentDetailsData.class);
        }
    },[studentDetailsData])

    const onSubmit = (e: updateStudentProps) => {
        const payload: updateStudentProps = {
            name: e.name,
            email: e.email,
            phone: e.phone,
            address: e.address,
            city: e.city,
            class: e.city,
        }
        updateStudentMutate(payload as updateStudentProps, {
            onSuccess: () => {
                router.push("/crud/all-student");
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    console.log(studentDetailsData, "studentDetailsData");

  return (
    <div>
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 500,
          borderRadius: 2,
          backgroundColor: "#1976d214",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#1565c0",
            textTransform: "uppercase",
          }}
        >
          Student Data Entry
        </Typography>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              size="small"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 3, message: 'Name must be at least 3 characters' },
              })}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              size="small"
              {...register('email', {
                required: 'Email is required',
                minLength: { value: 3, message: 'Email must be at least 3 characters' },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                required
                size="small"
                {...register('phone', {
                    required: 'Phone is required',
                    minLength: { value: 3, message: 'Phone must be at least 3 characters' },
                  })}
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ''}
              />
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                required
                size="small"
                {...register('address', {
                    required: 'Address is required',
                    minLength: { value: 3, message: 'Address must be at least 3 characters' },
                  })}
                  error={!!errors.address}
                  helperText={errors.address ? errors.address.message : ''}
              />
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              required
              size="small"
              {...register('city', {
                required: 'City is required',
                minLength: { value: 3, message: 'City must be at least 3 characters' },
              })}
              error={!!errors.city}
              helperText={errors.city ? errors.city.message : ''}
            />
            <TextField
            //   label="Class"
            //   type="number"
              variant="outlined"
              fullWidth
              required
              size="small"
              {...register('class', {
                required: 'Class is required',
                minLength: { value: 3, message: 'Class must be at least 3 characters' },
              })}
              error={!!errors.class}
              helperText={errors.class ? errors.class.message : ''}
            />
            {/* <TextField
              label="Student ID"
              variant="outlined"
              fullWidth
              required
              size="small"
            /> */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 2,
                textTransform: "uppercase",
                fontWeight: "bold",
                borderRadius: 2,
              }}
            >
               {/* Submit  */}
              {updateStudentPending ? <CircularProgress size={24} color="inherit" /> : 'Create'}
            </Button>
          </Box>
        </form>
      </Paper>
      </Box>
    </div>
  )
}

export default EditStudent
