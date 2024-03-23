"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { PersonStandingIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export default function SignupPage() {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const handleSubmit = (data: z.infer<typeof formSchema>) => {
		console.log("login validation passed");
		router.push("/dashboard");
	};

	return (
		<Card>
			<h1 className="flex gap-2 items-center justify-center mt-3">
				<PersonStandingIcon size={50} className="text-pink-500" />
			</h1>

			<CardHeader className="w-full max-w-sm">
				<CardTitle>Sign Up</CardTitle>
				<CardDescription>
					Enter your email and password to login
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						className="flex flex-col gap-4"
						onSubmit={form.handleSubmit(handleSubmit)}
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input type="email" placeholder="john@doe.com" {...field} />
									</FormControl>
									<FormDescription>
										this is the email address you signed up to SupportMe with
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input type="password" placeholder="••••••••" {...field} />
									</FormControl>
									<FormDescription>
										this is the email address you signed up to SupportMe with
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit">Login</Button>
					</form>
				</Form>
			</CardContent>
			<CardFooter className="justify-between">
				<small>Don t have an account?</small>
				<Button asChild variant="outline" size="sm">
					<Link href="/sign-up">Sign Up</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
