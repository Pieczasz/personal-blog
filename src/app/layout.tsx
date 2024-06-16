import "@/styles/globals.css";

// Font

import { PT_Sans } from "@next/font/google";

// Theme Provider
import { ThemeProvider } from "@/components/theme-provider";

// TRPC
import { TRPCReactProvider } from "@/trpc/react";

// Components
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Provider from "@/components/Provider";

// I am disabling this here because I know that i export font properly and properly use it
// @next/next/google-font-display
const PTSans = PT_Sans({
  style: ["normal"],
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "Bartek Piekarz",
  description: "Blog about programming and life",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${PTSans.className}`}>
      <body>
        <Provider>
          <TRPCReactProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </TRPCReactProvider>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
