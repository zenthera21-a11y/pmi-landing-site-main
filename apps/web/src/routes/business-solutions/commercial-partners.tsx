import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/business-solutions/commercial-partners")(
	{
		component: RouteComponent,
	}
);

function RouteComponent() {
	return <Outlet />;
}
