// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Button } from "@/components/ui/Button";
// import { Input } from "@/components/ui/Input";
// import { Alert } from "@/components/ui/Alert";

// const registerSchema = z
//   .object({
//     name: z.string().min(2, "Name must be at least 2 characters"),
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
//   });

// type RegisterFormData = z.infer<typeof registerSchema>;

// export function RegisterForm() {
//   const router = useRouter();
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<RegisterFormData>({
//     resolver: zodResolver(registerSchema),
//   });

//   const onSubmit = async (data: RegisterFormData) => {
//     try {
//       setIsLoading(true);
//       setError(null);

//       // TODO: Implement actual registration logic here
//       console.log("Registration data:", data);

//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       router.push("/dashboard");
//     } catch (error) {
//       setError("Failed to create account. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       {error && <Alert type="error" message={error} />}

//       <div>
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Full name
//         </label>
//         <div className="mt-1">
//           <Input
//             id="name"
//             type="text"
//             autoComplete="name"
//             {...register("name")}
//             error={errors.name?.message}
//           />
//         </div>
//       </div>

//       <div>
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Email address
//         </label>
//         <div className="mt-1">
//           <Input
//             id="email"
//             type="email"
//             autoComplete="email"
//             {...register("email")}
//             error={errors.email?.message}
//           />
//         </div>
//       </div>

//       <div>
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Password
//         </label>
//         <div className="mt-1">
//           <Input
//             id="password"
//             type="password"
//             autoComplete="new-password"
//             {...register("password")}
//             error={errors.password?.message}
//           />
//         </div>
//       </div>

//       <div>
//         <label
//           htmlFor="confirmPassword"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Confirm password
//         </label>
//         <div className="mt-1">
//           <Input
//             id="confirmPassword"
//             type="password"
//             autoComplete="new-password"
//             {...register("confirmPassword")}
//             error={errors.confirmPassword?.message}
//           />
//         </div>
//       </div>

//       <Button type="submit" className="w-full" disabled={isLoading}>
//         {isLoading ? "Creating account..." : "Create account"}
//       </Button>
//     </form>
//   );
// }
