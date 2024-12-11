import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Box, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { contactProps } from "@/typeScript/cms.interface";
import { createContactMutation } from "@/customHooks/cms.query.hooks";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactProps>();

  const { mutate: contactMutate, isPending: contactPending } = createContactMutation ()


  const onSubmit = (formData: FieldValues) => {
    const { name, email, phone, message} = formData as { name: string ,email: string; phone: string, message: string };
    // console.log({ name, email, phone, message});
    let a = { name, email, phone, message}

    
    // for image
    // if (img) {
    //   formdata.append("photo", img);
    // }

    contactMutate(a, {
      onSuccess: (data) => {
        console.log(data, "data");
      },
      onError: (error) => {
        console.log(error, "error");
      },
    });

    // console.log(formData);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,padding:'0px'}}>
      <img
        src={'https://i.pinimg.com/originals/4a/1d/cd/4a1dcd871bd83f20d177e07e00fb53f4.jpg'}
        alt="Landscape"
        style={{ width: '100%', maxHeight: '100vh', objectFit: 'cover' }}
      />
    </div>

<Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Paper elevation={4} sx={{ borderRadius: "16px", overflow: "hidden" }}>
          <Grid container>
            {/* {/ Image Section /} */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url("https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?semt=ais_hybrid")`, // Replace with your image URL
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
              />
            </Grid>

            {/* {/ Form Section /} */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <Typography variant="h4" mb={3} color="primary">
                  Contact Us
                </Typography>
                <Typography variant="body1" mb={4} color="text.secondary">
                  Feel free to reach out with any questions or inquiries!
                </Typography>
                <form 
                // onSubmit={handleSubmit}
                >
                  <TextField
                    label="Name"
                    // name="name"
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    {...register('name', {
                      required: 'Name is required',
                      minLength: { value: 3, message: 'Name must be at least 3 characters' },
                    })}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ''}
                  />
                  <TextField
                    label="Email"
                    // name="email"
                    type="email"
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: 'Invalid email format',
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                  />
                  <TextField
                    label="Phone"
                    // name="phone"
                    type="tel"
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    {...register('phone', {
                      required: 'Mobile is required',
                      pattern: {
                        value: /\d{9}$/,
                        message: 'Invalid mobile format',
                      },
                    })}
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ''}
                  />
                  <TextField
                    label="Message"
                    // name="message"
                    fullWidth
                    margin="normal"
                    required
                    variant="outlined"
                    multiline
                    rows={4}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                    })}
                    error={!!errors.message}
                    helperText={errors.message ? errors.message.message : ''}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 3,
                      py: 1.5,
                      fontSize: "1rem",
                      textTransform: "none",
                      marginBottom: "1rem",
                    }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    {contactPending ? <CircularProgress size={24} /> : 'Submit'}
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
