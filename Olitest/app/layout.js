export const metadata = {
  title: "AirSwitch – Private Kitesurf Coaching",
  description: "Private kitesurf coaching in Le Morne",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}