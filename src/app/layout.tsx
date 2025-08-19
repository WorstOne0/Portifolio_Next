"use client";

// Next
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Nunito } from "next/font/google";
//
import { Intro, NavBar } from "@/components";
// Services
import { ThemeProvider } from "@/services";
// Styles
import "@/styles/globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { theme, setTheme } = useTheme();
  const [isShowingIntro, setShowingIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowingIntro(false), 2800);
    // setTheme("light");
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-full w-full flex flex-col ${nunito.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {isShowingIntro ? (
            <Intro />
          ) : (
            <div className="min-h-0 w-full grow flex relative">
              <div className="h-full w-[10rem] absolute top-0 left-0">
                <NavBar />
              </div>
              <div className="h-full min-w-0 grow">{children}</div>
            </div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
