// ============================================================
// pages/MyOrders.tsx - 我的回收单列表
// ============================================================
import React, { useState, useEffect } from 'react';
import { RecycleOrder } from '../types';
import { getOrders } from '../utils/storage';

const statusMap: Record<string, { label: string; className: string }> = {
  '待取件': { label: '待取件', className: 'status-pending' },
  '检测中': { label: '检测中', className: 'status-checking' },
  '已打款': { label: '已打款', className: 'status-paid' },
};

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<RecycleOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<RecycleOrder | null>(null);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const formatDate = (iso: string): string => {
    const d = new Date(iso);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className="fade-in">
      <div className="section-title">我的回收</div>

      {orders.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <p>暂无回收单</p>
        </div>
      ) : (
        <div>
          {orders.map(order => {
            const statusInfo = statusMap[order.status];
            return (
              <div
                key={order.id}
                className="order-card"
                onClick={() => setSelectedOrder(order)}
              >
                <div className="order-header">
                  <div className="order-device">{order.device.brand} {order.device.model}</div>
                  <span className={`order-status ${statusInfo.className}`}>{statusInfo.label}</span>
                </div>
                <div className="order-price">
                  {order.finalPrice
                    ? `¥${order.finalPrice}`
                    : `¥${order.priceResult.finalPriceLow} ~ ¥${order.priceResult.finalPriceHigh}`}
                </div>
                <div className="order-date">下单时间：{formatDate(order.createdAt)}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* 详情弹窗 */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>订单详情</h2>
              <button className="modal-close" onClick={() => setSelectedOrder(null)}>×</button>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 600 }}>{selectedOrder.device.brand} {selectedOrder.device.model}</div>
              <span className={`order-status ${statusMap[selectedOrder.status].className}`} style={{ display: 'inline-block', marginTop: 8 }}>
                {statusMap[selectedOrder.status].label}
              </span>
            </div>

            <div className="detail-section">
              <h3>估价明细</h3>
              <div className="detail-row">
                <span className="detail-key">基准回收价</span>
                <span className="detail-val">¥{selectedOrder.priceResult.basePrice}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">屏幕状况</span>
                <span className="detail-val">{selectedOrder.condition.screen}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">外壳状况</span>
                <span className="detail-val">{selectedOrder.condition.shell}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">电池健康度</span>
                <span className="detail-val">{selectedOrder.condition.battery}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">功能状态</span>
                <span className="detail-val">{selectedOrder.condition.function}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">预估回收价</span>
                <span className="detail-val" style={{ color: '#ff6b6b', fontWeight: 700 }}>
                  ¥{selectedOrder.priceResult.finalPriceLow} ~ ¥{selectedOrder.priceResult.finalPriceHigh}
                </span>
              </div>
            </div>

            {selectedOrder.finalPrice !== undefined && (
              <div className="detail-section">
                <h3>检测结果</h3>
                <div className="detail-row">
                  <span className="detail-key">最终打款金额</span>
                  <span className="detail-val" style={{ color: '#2e7d32', fontWeight: 700, fontSize: 18 }}>
                    ¥{selectedOrder.finalPrice}
                  </span>
                </div>
                {selectedOrder.inspectNote && (
                  <div className="detail-row">
                    <span className="detail-key">检测备注</span>
                    <span className="detail-val">{selectedOrder.inspectNote}</span>
                  </div>
                )}
              </div>
            )}

            <div className="detail-section">
              <h3>取件信息</h3>
              <div className="detail-row">
                <span className="detail-key">联系人</span>
                <span className="detail-val">{selectedOrder.name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">联系方式</span>
                <span className="detail-val">{selectedOrder.phone}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">取件地址</span>
                <span className="detail-val">{selectedOrder.address}</span>
              </div>
              <div className="detail-row">
                <span className="detail-key">上门时间</span>
                <span className="detail-val">{selectedOrder.pickupTime}</span>
              </div>
            </div>

            <div style={{ fontSize: 12, color: '#bbb', textAlign: 'center', marginTop: 16 }}>
              订单号：{selectedOrder.id} · 下单时间：{formatDate(selectedOrder.createdAt)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
