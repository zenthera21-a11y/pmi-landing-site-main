import { createFileRoute, useNavigate } from "@tanstack/react-router";

import SignUpForm from "@/components/sign-up-form";

export const Route = createFileRoute("/signup")({
	component: RouteComponent,
});

function RouteComponent() {
	const navigate = useNavigate();

	return <SignUpForm onSwitchToSignIn={() => navigate({ to: "/login" })} />;
}
