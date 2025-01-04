"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { MailOpen } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function ButtonDemo() {
	return (
		<div className="grid grid-cols-4 gap-2">
			<Button>Default</Button>
			<Button variant="destructive">destructive</Button>
			<Button variant="ghost">ghost</Button>
			<Button variant="link">link</Button>
			<Button variant="outline">outline</Button>
			<Button variant="secondary">secondary</Button>
			<Button variant="success">success</Button>
			<Button onClick={() => console.log("Clicked")}>Click me!</Button>
			<Button disabled>disabled</Button>
			<Button capitalize={false}>capitalize false</Button>
			<Button variant="outline" size="icon">
				<ChevronRight />
			</Button>
			<Button>
				<MailOpen /> Login with Email
			</Button>
			<Button disabled>
				<Loader2 className="animate-spin" />
				Please wait
			</Button>
		</div>
	);
}
