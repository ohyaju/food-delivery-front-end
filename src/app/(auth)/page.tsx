"use client"

import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'
import { useForm } from "react-hook-form";

const Register = () => {
    const formSchema = z.object({
        email: z.string().min(6).max(50),
        password: z.string().min(8),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver (formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    return (
        <div>
            <Form {...form}>
                <FormField
                    control={form.control}
                    name="email"
                    render={() => (
                        <FormItem>
                            <FormLabel />
                            <FormControl>
                            <Input placeholder="enter your email" />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </Form>
        </div>
    );
};

export default Register;