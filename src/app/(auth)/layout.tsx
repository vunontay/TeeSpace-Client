import type { Metadata } from "next";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <main>
            <h1>Auth layout</h1>
            {children}
        </main>
    );
}
