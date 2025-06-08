import './globals.css'
export const metadata = {
  title: '合约模拟器',
  description: '一个用于杠杆计算的交互工具',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
