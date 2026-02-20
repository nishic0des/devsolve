"use client";
import QuestionForm from "@/components/QuestionForm";
import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
	const router = useRouter();
	const { user, hydrated } = useAuthStore();

	React.useEffect(() => {
		if (!hydrated) return;
		if (!user) {
			router.replace("/login?next=/questions/ask");
		}
	}, [hydrated, user, router]);

	if (!hydrated || !user) {
		return null;
	}

	return (
		<div className="min-h-screen pt-40 px-20">
			<QuestionForm />
		</div>
	);
}
