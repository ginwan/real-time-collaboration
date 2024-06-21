"use client"

import React, { useState } from 'react'
import { Button, Card, CardContent, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { useForm } from 'react-hook-form';
import { Send, Check, DoneAll } from '@mui/icons-material';
import { styled } from '@mui/system';

type FormValues = {
    message: string;
}

const RoundedTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '50px',
    },
}));



const Message = () => {
    const [messages, setMessages] = useState<any>([]);
    const form = useForm<FormValues>({
        defaultValues: {
            message: ""
        }
    })

    const { register, handleSubmit, reset } = form

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })


    const handleMessage = (data: FormValues) => {
        setMessages([...messages, data.message]);
        reset()
    }

    return (
        <Stack width={700}>
            {messages.map((message: any, index: number) => (
                // sent message
                <Container key={index} className='relative flex justify-end my-1'>
                    <Paper className='rounded-lg rounded-br-none shadow-md max-w-xs px-3'>
                        {message}
                        <div className='flex justify-end'>
                            <span className='text-xs text-gray-400'>{currentTime}</span>
                            <Check fontSize='small' color='primary' />
                            {/* <DoneAll fontSize='small' color='primary' /> */}
                        </div>
                    </Paper>
                </Container>

                // received message
                // <Container key={index} className='relative flex justify-start my-1'>
                //     <Paper className='rounded-lg rounded-bl-none shadow-md max-w-xs px-3 bg-[#F59E0B]'>
                //         {message}
                //         <div className='flex justify-end'>
                //             <span className='text-xs text-gray-50'>{currentTime}</span>
                //         </div>
                //     </Paper>
                // </Container>
            ))}
            <form onSubmit={handleSubmit(handleMessage)}>
                <Stack className='relative'>
                    <RoundedTextField
                        type="text"
                        label="Type Message ..."
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register("message")}
                        className='bg-white rounded-full'
                    />
                    <IconButton type="submit" className='absolute right-1 top-6'>
                        <Send color="primary" />
                    </IconButton>
                </Stack>
            </form>
        </Stack>
    )
}

export default Message