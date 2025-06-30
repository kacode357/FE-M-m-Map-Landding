import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Măm Map",
  description: "Ứng dụng tìm kiếm đồ ăn thông minh",
  icons: {
    icon: [
      { url: "/images/logo-mm-final-2.png", type: "image/png" },
      { url: "/images/logo-mm-final-2.png", rel: "shortcut icon", type: "image/png" },
    ],
    apple: "/images/logo-mm-final-2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
