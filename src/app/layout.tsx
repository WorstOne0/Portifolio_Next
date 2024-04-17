"use client";
// Next
import { useState, useEffect } from "react";
import { Nunito } from "next/font/google";
// Components
import { NavBar, Logo } from "@/components";
// Styles
import "@/styles/global.css";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isShowingLogo, setShowingLogo] = useState(true);

  useEffect(() => {
    //
    setTimeout(() => {
      setShowingLogo(false);
    }, 2800);
  }, []);

  return (
    <html lang="en">
      <body className={`w-full flex ${nunito.className} antialiased`}>
        {isShowingLogo ? (
          <Logo />
        ) : (
          <>
            <NavBar />
            <div className="w-full overflow-y-scroll">{children}</div>
          </>
        )}
      </body>
    </html>
  );
}
