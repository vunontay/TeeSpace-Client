import { Footer, Header } from "@/components/shared";
import "../styles/global.scss";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body suppressHydrationWarning={true}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
