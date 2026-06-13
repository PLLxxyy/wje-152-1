// ============================================================
// pages/SubmitOrder.tsx - 提交回收单
// ============================================================
import React, { useState } from 'react';
import { Device, ConditionForm, RecycleOrder } from '../types';
import { calculatePrice } from '../utils/pricing';
import { addOrder } from '../utils/storage';

interface Props {
  device: Device;
  condition: ConditionForm;
  onSuccess: (order: RecycleOrder) => void;
  onBack: () => void;
}

const SubmitOrder: React.FC<Props> = ({ device, condition, onSuccess, onBack }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = name.trim() && phone.trim() && address.trim() && pickupTime.trim();

  const handleSubmit = () => {
    if (!canSubmit || submitting) return;
    setSubmitting(true);

    const priceResult = calculatePrice(device.basePrice, condition);
    const order: RecycleOrder = {
      id: `ORD-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      device,
      condition,
      priceResult,
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      pickupTime: pickupTime.trim(),
      status: '待取件',
      createdAt: new Date().toISOString(),
    };

    addOrder(order);

    setTimeout(() => {
      onSuccess(order);
    }, 300);
  };

  return (
    <div className="fade-in">
      <div className="section-title">提交回收单</div>
      <div className="section-subtitle">请填写取件信息，我们将安排上门回收</div>

      <div className="tip-bar">
        <span>📋</span>
        <span>{device.brand} {device.model} · 预估 ¥{calculatePrice(device.basePrice, condition).finalPriceLow} ~ ¥{calculatePrice(device.basePrice, condition).finalPriceHigh}</span>
      </div>

      <div className="form-group">
        <label className="form-label">姓名</label>
        <input
          className="form-input"
          type="text"
          placeholder="请输入您的姓名"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">联系方式</label>
        <input
          className="form-input"
          type="tel"
          placeholder="请输入手机号码"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">取件地址</label>
        <textarea
          className="form-input"
          placeholder="请输入详细取件地址"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">期望上门时间</label>
        <input
          className="form-input"
          type="text"
          placeholder="例如：明天下午2-4点"
          value={pickupTime}
          onChange={e => setPickupTime(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button className="btn-secondary" onClick={onBack} style={{ flex: 1 }}>
          返回
        </button>
        <button
          className="btn-primary"
          disabled={!canSubmit || submitting}
          onClick={handleSubmit}
          style={{ flex: 2 }}
        >
          {submitting ? '提交中...' : '提交回收单'}
        </button>
      </div>
    </div>
  );
};

export default SubmitOrder;
