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
            <div className="grow overflow-y-scroll relative">
              {children}
              <div className="h-full fixed top-0 right-10 z-10 flex items-center text-red-200">Teste</div>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
