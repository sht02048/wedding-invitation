import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Layout from "@/components/layout";

const myFont = localFont({ src: [{
  path: "./fonts/GowunBatang-Regular.ttf"
}]});

export const metadata: Metadata = {
  title: "민석과 다은의 결혼식에 초대합니다.",
  description: "민석이와 다은이의 결혼식 모바일 청첩장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={myFont.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
