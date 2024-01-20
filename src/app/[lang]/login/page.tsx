import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {getDictionary, LocaleType} from "@/app/[lang]/dictionaries";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default async function Login({params: {lang}}: { params: { lang: LocaleType } }) {
	const dict = await getDictionary(lang)
	return (
		<main
			className="h-screen flex flex-col justify-center items-center"
		>
			<Card className="w-6/12">
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>{dict["Entre e comece a usar"]} 🚀</CardDescription>
					<CardContent>
						<form
							className="grid gap-6 mt-6"
						>
							<div>
								<Label>
									Email
								</Label>
								<Input placeholder="try@example.com" name="email"/>
							</div>
							<div>
								<Label>
									{dict.Password}
								</Label>
								<Input type="password_" name="password"/>
							</div>
							<div
								className="flex justify-between"
							>
								<Button>
									{dict.Enter}
								</Button>
								<Button
									variant="link"
								>
									{dict["Forgot password?"]}
								</Button>
							</div>
						</form>
					</CardContent>
				</CardHeader>
			</Card>
		</main>
	)
	
}