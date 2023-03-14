import "./globals.css";

export const metadata = {
  title: "Project NFT Garden",
  description: "A place to grow with NFTs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
