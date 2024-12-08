import { inter } from "@/app/font";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import colors from "tailwindcss/colors";
import "./globals.css";
import { CommonProvider } from "@/hooks/context/CommonProvider";
import { getSiteInfo } from "@/server/site/siteServer";
import { Metadata, Viewport } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteInfo = await getSiteInfo(); // Ensure this fetches server-side or adjust if necessary

  return {
    title: siteInfo[0].title,
    description: siteInfo[0].description,
    applicationName: siteInfo[0].applicationName,
    authors: {
      name: siteInfo[0].author.name,
      url: siteInfo[0].author.url,
    },
    keywords: siteInfo[0].keywords,
  };
}
export const viewport: Viewport = {
  themeColor: "#7d9a9b",
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: false,
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteInfo = await getSiteInfo();
  return (
    <html
      lang={siteInfo[0].language}
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-800 dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme={siteInfo[0].theme}
          enableSystem
        >
          <CommonProvider>
            <NextTopLoader color={colors.emerald[500]} />
            <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </section>
          </CommonProvider>
        </ThemeProvider>
      </body>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
