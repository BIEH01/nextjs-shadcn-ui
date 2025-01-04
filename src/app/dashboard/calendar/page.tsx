"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarDemo() {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);

	const smallDate = date?.toLocaleDateString("es-ES", {
		weekday: "short",
		day: "numeric",
		month: "short",
	});

	return (
		<section className="flex flex-col gap-8">
			<div className="flex flex-wrap gap-4">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border shadow"
					disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
				/>
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border shadow"
					disabled={(date) => date > new Date()}
				/>
				<Calendar
					mode="multiple"
					selected={multipleDate}
					onSelect={setMultipleDate}
					className="rounded-md border shadow"
				/>
			</div>

			<div>
				<h1 className="text-3xl">Information</h1>
				<div className="border-b"></div>
				<p>{smallDate}</p>
				<p>
					{multipleDate
						?.map((date) =>
							date.toLocaleDateString("es-ES", {
								weekday: "long",
								day: "numeric",
								month: "short",
							})
						)
						.join(". ")}
				</p>
			</div>
		</section>
	);
}
