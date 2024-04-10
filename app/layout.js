import "./globals.css";


export const metadata = {
  title: "Arijeet Sarkar",
  description: "my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
