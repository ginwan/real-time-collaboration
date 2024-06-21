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
    confirmPassword: string;
}

const Register = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    const form = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const { register, handleSubmit, formState, control, watch } = form
    const { errors } = formState

    const router = useRouter()

    // Watch for changes in the confirmPassword field
    const confirmPassword = watch('confirmPassword', '');

    // Function to handle login process
    const handleRegister = async (data: FormValues) => {
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
                        Register
                    </Typography>
                    <form onSubmit={handleSubmit(handleRegister)} noValidate>
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
                            <TextField
                                type={showPassword ? "text" : "password"}
                                label="Confirm Password"
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showConfirmPassword ?
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowConfirmPassword(false)}
                                                >
                                                    <VisibilityOff />
                                                </IconButton>
                                                :
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowConfirmPassword(true)}
                                                >
                                                    <Visibility />
                                                </IconButton>

                                            }
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                margin="normal"
                                {...register('confirmPassword', {
                                    validate: value => value === confirmPassword || 'The passwords do not match'
                                })}
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword?.message}
                                required
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Login
                            </Button>
                            <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }}>
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

export default Register