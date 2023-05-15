import "./globals.css";
import { ClientOnly } from "./components/ClientOnly";
import { Navbar } from "./components/Navbar";
import { RegisterModal } from "./components/Modals/RegisterModal";
import { LoginModal } from "./components/Modals/LoginModal";
import { Nunito } from "next/font/google";
import { ToasterProvider } from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import { RentModal } from "./components/Modals/RentModal";
import { SearchModal } from "./components/Modals/SearchModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone app",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <SearchModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
