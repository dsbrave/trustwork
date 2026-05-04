"use client";

/**
 * Renders when the root layout fails. Must define html/body (no root layout).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f7f7f7] font-sans antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <p className="text-[15px] font-medium text-[#001e00]">Something went wrong</p>
          {process.env.NODE_ENV === "development" && error?.message ? (
            <p className="max-w-lg text-left font-mono text-[12px] text-red-800/90">{error.message}</p>
          ) : null}
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-[#0d5c3b] px-4 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#0a4a30]"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
