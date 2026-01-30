import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "My Next App",
  description: "Navbar on every page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
