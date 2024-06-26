"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, TextField, Button, Typography, Box, InputAdornment, IconButton, Stack } from '@mui/material';
import { auth } from "@/firebaseConfig";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form"
// import { DevTool } from "@hookform/devtools";

type FormValues = {
    email: string;
    password: string;
}

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const form = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const { register, handleSubmit, formState, control } = form
    const { errors } = formState

    const router = useRouter()

    // Function to handle login process
    const handleLogin = async (data: FormValues) => {
        console.log("🚀 ~ handleLogin ~ data:", data)

    }


    // Function to handle logout process
    // const handleLogout = async () => {
    //     await signOut(auth);
    // };

    return (
        <div className="flex items-center justify-center">
            <Container maxWidth="sm" className="bg-stone-200 p-8 mt-24 rounded-md">
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit(handleLogin)} noValidate>
                        <Stack spacing={3}>
                            <TextField
                                type="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                                {...register("email", { required: "Email is required" })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                            <TextField
                                type={showPassword ? "text" : "password"}
                                label="Password"
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showPassword ?
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(false)}
                                                >
                                                    <VisibilityOff />
                                                </IconButton>
                                                :
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(true)}
                                                >
                                                    <Visibility />
                                                </IconButton>

                                            }
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                margin="normal"
                                {...register("password", { required: "Password is required" })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                required
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Login
                            </Button>
                            <Button type="button" onClick={() => router.push("/register")} variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }}>
                                Sign Up
                            </Button>
                        </Stack>
                    </form>
                    {/* <DevTool control={control} /> */}
                    {/* <Button onClick={handleLogout} variant="text" fullWidth sx={{ mt: 2 }}>
                    Logout
                </Button> */}
                </Box>
            </Container>
        </div>
    )
}

export default Login