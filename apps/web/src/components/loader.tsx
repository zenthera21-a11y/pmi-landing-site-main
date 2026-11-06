export default function Loader() {
	return (
		<div className="fixed inset-0 z-99 flex items-center justify-center bg-black/50 backdrop-blur-md">
			<div className="flex flex-col items-center gap-4">
				<img alt="PMI logo" height={240} src="/logo.svg" width={360} />
				<div className="flex space-x-1">
					<div
						className="h-2 w-2 animate-bounce rounded-full bg-primary"
						style={{ animationDelay: "0ms" }}
					/>
					<div
						className="h-2 w-2 animate-bounce rounded-full bg-primary"
						style={{ animationDelay: "150ms" }}
					/>
					<div
						className="h-2 w-2 animate-bounce rounded-full bg-primary"
						style={{ animationDelay: "300ms" }}
					/>
				</div>
			</div>
		</div>
	);
}
