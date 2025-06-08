import "./globals.css"

export const metadata = {
  title: "合约模拟器",
  description: "一个用于计算杠杆盈亏、爆仓价等的交互式合约交易工具。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head />
      <body>{children}</body>
    </html>
  );
}
