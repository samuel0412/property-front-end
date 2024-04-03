import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";
import $ from "jquery";
import StoreProvider from "./StoreProvider";
import ToastContainerHandler from "./components/ToastContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moon Light",
  description: "Generated by NASA",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </head>
        <body className={inter.className}>
          <div>
            {children}
            <ToastContainerHandler />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
