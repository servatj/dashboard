import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {  PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginPage() {
	return (
		<Card>
			<h1 className="flex gap-2 items-center justify-center mt-3">
				<PersonStandingIcon size={50} className="text-pink-500" />
			</h1>

			<CardHeader className="w-full max-w-sm">
				<CardTitle>Login</CardTitle>
				<CardDescription>
					Enter your email and password to login
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex flex-col gap-4">
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
				</form>
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
