import { Roboto } from "next/font/google";
import { CssBaseline } from "./components/mui/material";
import { StyledBody } from "./styled";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Github Search User",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CssBaseline />
      <StyledBody className={roboto.className}>{children}</StyledBody>
    </html>
  );
}