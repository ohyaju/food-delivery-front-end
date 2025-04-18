// "use client";
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormMessage,
// } from "@/components/ui/form";
// import { z } from "zod";
// import {zodResolver} from "@hookform/resolvers/zod";
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import React from 'react'
// import { useForm } from "react-hook-form";

// const Register = () => {
//     const formSchema = z.object({
//         email: z.string().min(6).max(50),
//         password: z.string().min(8),
//     });

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver (formSchema),
//         defaultValues: {
//             email: "",
//             password: "",
//         },
//     });
//     return (
//         <div>
//             <Form {...form}>
//                 <FormField
//                     control={form.control}
//                     name="email"
//                     render={() => (
//                         <FormItem>
//                             <FormControl>
//                             <Input placeholder="enter your email..." />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//             </Form>
//         </div>
//     );
// };

// export default Register;