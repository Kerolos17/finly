import { Nunito } from "next/font/google";
import "./globals.css";
import MainLayout from "./MainLayout";

const nunito = Nunito({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DETAYLAR",
  description: "detaylar e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${nunito.className}`} suppressHydrationWarning={true}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
