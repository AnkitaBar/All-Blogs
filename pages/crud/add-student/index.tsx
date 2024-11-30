import { addStudentMutation } from '@/customHooks/crud.query.hooks';
import { addStudentProps } from '@/typeScript/crud.interface';
import { Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';



const AddStudent = () => {
    const router = useRouter();
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<addStudentProps>();

      
      const { mutate: createStudentMutate, isPending: createStudentMutationPending } = addStudentMutation()

      const onSubmit = async (formData: FieldValues) => {
        const { name, email, phone, address, city, classs} = formData as { name: string ,email: string; phone: string, address: string, city: string, classs: string };
        const formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("phone", phone);
        formdata.append("address", address);
        formdata.append("city", city);
        formdata.append("class", classs);

        createStudentMutate(formData, {
          onSuccess: () => {
                router.push("/crud/all-student");
            },
            onError: (error) => {
                console.log(error, "error");
            },
        });

        console.log(formData,"formdata");
    
        // router.push("/cms/list");
    };

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
              label="Class"
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
              {/* {/ Submit /} */}
              {createStudentMutationPending ? <CircularProgress size={24} color="inherit" /> : 'Create'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
    </div>
  )
}

export default AddStudent

