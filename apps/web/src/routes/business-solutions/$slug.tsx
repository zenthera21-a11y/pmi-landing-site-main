import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/business-solutions/$slug")({
	component: RouteComponent,
});

function RouteComponent() {
	const { slug } = Route.useParams();

	return (
		<div className="container mx-auto max-w-3xl px-4 py-8">
			<h1 className="font-bold text-2xl">
				{slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
			</h1>
			<p className="mt-2 text-muted-foreground">Placeholder page</p>
		</div>
	);
}
