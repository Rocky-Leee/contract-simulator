'use client';
import { useState } from 'react';
export default function HomePage() {
  const [entryPrice, setEntryPrice] = useState(2.654);
  const [leverage, setLeverage] = useState(30);
  const [targetProfit, setTargetProfit] = useState(4);
  const priceChangeRatio = (targetProfit / 100) / leverage;
  const targetPrice = (entryPrice * (1 + priceChangeRatio)).toFixed(6);
  return (
    <main className="max-w-xl mx-auto py-10 px-4 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-4">合约模拟器</h1>
      <label className="block mb-2">开仓价格</label>
      <input type="number" value={entryPrice} onChange={e => setEntryPrice(parseFloat(e.target.value))} className="w-full mb-4 p-2 border rounded" />
      <label className="block mb-2">杠杆倍数</label>
      <input type="number" value={leverage} onChange={e => setLeverage(parseFloat(e.target.value))} className="w-full mb-4 p-2 border rounded" />
      <label className="block mb-2">目标收益 (%)</label>
      <input type="number" value={targetProfit} onChange={e => setTargetProfit(parseFloat(e.target.value))} className="w-full mb-4 p-2 border rounded" />
      <div className="mt-6 text-lg">
        🎯 目标价格：<strong>{targetPrice}</strong>
      </div>
    </main>
  );
}
