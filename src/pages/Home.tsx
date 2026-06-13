// ============================================================
// pages/Home.tsx - 首页：热门机型回收价格排行
// ============================================================
import React from 'react';
import { devices } from '../data/devices';
import { getOrders } from '../utils/storage';

interface Props {
  onSelectDevice: (deviceId: string) => void;
  onGoSelect: () => void;
}

const Home: React.FC<Props> = ({ onSelectDevice, onGoSelect }) => {
  // 热门排行：按基准价降序，取前 10
  const hotDevices = [...devices]
    .sort((a, b) => b.basePrice - a.basePrice)
    .slice(0, 10);

  const starredOrders = getOrders()
    .filter(o => o.starred)
    .slice(0, 5);

  const getRankClass = (index: number): string => {
    if (index === 0) return 'hot-rank hot-rank-1';
    if (index === 1) return 'hot-rank hot-rank-2';
    if (index === 2) return 'hot-rank hot-rank-3';
    return 'hot-rank hot-rank-n';
  };

  return (
    <div className="fade-in">
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>数码回收估价</h2>
        <p style={{ fontSize: 14, color: '#999' }}>快速评估您的二手数码设备价值</p>
      </div>

      <button className="btn-primary" style={{ marginBottom: 28 }} onClick={onGoSelect}>
        开始估价
      </button>

      <div className="hot-section">
        <h2>🔥 热门回收价格排行</h2>
        <div className="hot-list">
          {hotDevices.map((device, index) => (
            <div
              key={device.id}
              className="hot-item"
              onClick={() => onSelectDevice(device.id)}
            >
              <div className={getRankClass(index)}>{index + 1}</div>
              <div className="hot-info">
                <div className="hot-name">{device.model}</div>
                <div className="hot-brand">{device.brand} · {device.category}</div>
              </div>
              <div className="hot-price">¥{device.basePrice}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="tip-bar">
        <span>💡</span>
        <span>以上为完美成色预估回收价，实际价格取决于设备成色状况。</span>
      </div>

      {starredOrders.length > 0 && (
        <div className="hot-section">
          <h2>⭐ 我关注的订单</h2>
          <div className="hot-list">
            {starredOrders.map(order => (
              <div key={order.id} className="hot-item">
                <div className="hot-rank hot-rank-star">★</div>
                <div className="hot-info">
                  <div className="hot-name">{order.device.brand} {order.device.model}</div>
                  <div className="hot-brand">{order.status}</div>
                </div>
                <div className="hot-price">
                  {order.finalPrice
                    ? `¥${order.finalPrice}`
                    : `¥${order.priceResult.finalPriceLow}~${order.priceResult.finalPriceHigh}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
