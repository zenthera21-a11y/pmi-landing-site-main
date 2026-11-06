import { api } from "@pmi-south-asia/backend/convex/_generated/api";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "convex/react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/dashboard/contact-responses")({
  component: ContactResponsesComponent,
});

function ContactResponsesComponent() {
  const responses = useQuery(api.contactResponses.list);

  let content: ReactNode;

  if (responses === undefined) {
    content = (
      <div className="flex flex-col items-center justify-center space-y-4 py-24">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"
          style={{ borderColor: "#5621b4", borderTopColor: "transparent" }}
        />
        <p className="font-medium text-gray-500">Loading submissions...</p>
      </div>
    );
  } else if (responses.length === 0) {
    content = (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
          <svg
            aria-hidden="true"
            className="h-8 w-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
        <h3 className="font-medium text-gray-900 text-lg">
          No submissions yet
        </h3>
        <p className="mt-1 text-gray-500">
          Contact form submissions will appear here.
        </p>
      </div>
    );
  } else {
    content = (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left font-semibold text-gray-500 text-xs uppercase tracking-wider"
                scope="col"
              >
                Date
              </th>
              <th
                className="px-6 py-3 text-left font-semibold text-gray-500 text-xs uppercase tracking-wider"
                scope="col"
              >
                Name
              </th>
              <th
                className="px-6 py-3 text-left font-semibold text-gray-500 text-xs uppercase tracking-wider"
                scope="col"
              >
                Contact Info
              </th>
              <th
                className="px-6 py-3 text-left font-semibold text-gray-500 text-xs uppercase tracking-wider"
                scope="col"
              >
                Subject
              </th>
              <th
                className="px-6 py-3 text-left font-semibold text-gray-500 text-xs uppercase tracking-wider"
                scope="col"
              >
                Certifications
              </th>
              <th
                className="px-6 py-3 text-left font-semibold text-gray-500 text-xs uppercase tracking-wider"
                scope="col"
              >
                Message
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {responses.map((response) => (
              <tr
                className="transition-colors duration-150 hover:bg-gray-50"
                key={response._id}
              >
                <td className="whitespace-nowrap px-6 py-4 text-gray-500 text-sm">
                  {new Date(response.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="font-medium text-gray-900 text-sm">
                    {response.firstName} {response.lastName}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex flex-col space-y-1">
                    <a
                      className="text-sm hover:underline"
                      href={`mailto:${response.email}`}
                      style={{ color: "#5621b4" }}
                    >
                      {response.email}
                    </a>
                    {response.phone && (
                      <span className="text-gray-500 text-sm">
                        {response.phone}
                      </span>
                    )}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-medium text-gray-800 text-xs">
                    {response.subject}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex max-w-[200px] flex-wrap gap-1.5">
                    {response.selectedCerts &&
                    response.selectedCerts.length > 0 ? (
                      response.selectedCerts.map((cert) => (
                        <span
                          className="inline-flex items-center rounded px-2 py-0.5 font-medium text-xs"
                          key={cert}
                          style={{
                            backgroundColor: "#f3e8ff",
                            color: "#5621b4",
                          }}
                        >
                          {cert}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400 text-xs italic">
                        None selected
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div
                    className="line-clamp-3 max-w-xs break-words text-gray-500 text-sm"
                    title={response.message}
                  >
                    {response.message}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1
              className="font-bold text-3xl tracking-tight"
              style={{ color: "#1e0a45" }}
            >
              Contact Submissions
            </h1>
            <p className="mt-2 text-gray-500 text-sm">
              Manage and view inquiries from the contact form.
            </p>
          </div>
          <Link
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5621b4] focus:ring-offset-2"
            style={{ color: "#5621b4" }}
            to="/"
          >
            ← Back to Site
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          {content}
        </div>
      </div>
    </div>
  );
}
