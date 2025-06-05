import React, { useState } from 'react';
import '../styles/globals.css';

export default function Home() {
  const [entryPrice, setEntryPrice] = useState(2.654);
  const [leverage, setLeverage] = useState(30);
  const [targetReturn, setTargetReturn] = useState(4);

  const targetPrice = (entryPrice * (1 + (targetReturn / 100) / leverage)).toFixed(6);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">合约模拟器</h1>
      <div className="space-y-4">
        <div>
          <label>开仓价格：</label>
          <input type="number" value={entryPrice} onChange={e => setEntryPrice(+e.target.value)} className="ml-2 border p-1"/>
        </div>
        <div>
          <label>杠杆倍数：</label>
          <input type="number" value={leverage} onChange={e => setLeverage(+e.target.value)} className="ml-2 border p-1"/>
        </div>
        <div>
          <label>目标收益（%）：</label>
          <input type="number" value={targetReturn} onChange={e => setTargetReturn(+e.target.value)} className="ml-2 border p-1"/>
        </div>
        <div className="mt-4 p-4 bg-white rounded shadow">
          <p>目标价格：<strong>{targetPrice}</strong></p>
        </div>
      </div>
    </div>
  );
}
