"use client";

import { useState, useEffect } from "react";
import { Nunito } from "next/font/google";
import { NavBar, Logo, FloatingAstronaut } from "@/components";
import { LanguageProvider } from "@/context/language";
import StarsBackground from "@/components/stars_background";
import "@/styles/global.css";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isShowingLogo, setShowingLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowingLogo(false);
    }, 2800);
  }, []);

  return (
    <html lang="en">
      <body className={`w-full flex ${nunito.className} antialiased`}>
        <LanguageProvider>
          {isShowingLogo ? (
            <Logo />
          ) : (
            <>
              <StarsBackground />
              <NavBar />
              <div id="scroll-container" className="grow overflow-y-scroll relative z-10">
                {children}
              </div>
              <FloatingAstronaut />
            </>
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}
