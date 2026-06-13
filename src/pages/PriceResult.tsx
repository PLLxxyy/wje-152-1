// ============================================================
// pages/PriceResult.tsx - 估价结果页面
// ============================================================
import React from 'react';
import { Device, ConditionForm, PriceResult as PriceResultType } from '../types';
import { calculatePrice, formatDiscount } from '../utils/pricing';

interface Props {
  device: Device;
  condition: ConditionForm;
  onConfirm: () => void;
  onBack: () => void;
}

const PriceResultPage: React.FC<Props> = ({ device, condition, onConfirm, onBack }) => {
  const result: PriceResultType = calculatePrice(device.basePrice, condition);

  const rows: { label: string; value: string; discount: string }[] = [
    { label: '基准回收价', value: `¥${result.basePrice}`, discount: '' },
    { label: '屏幕状况', value: condition.screen || '', discount: formatDiscount(result.screenDiscount) },
    { label: '外壳状况', value: condition.shell || '', discount: formatDiscount(result.shellDiscount) },
    { label: '电池健康度', value: condition.battery || '', discount: formatDiscount(result.batteryDiscount) },
    { label: '功能状态', value: condition.function || '', discount: formatDiscount(result.functionDiscount) },
  ];

  return (
    <div className="fade-in">
      <div className="section-title">估价结果</div>

      <div className="price-card">
        <div className="price-label">预估回收价</div>
        <div className="price-range">
          ¥{result.finalPriceLow} <span>~</span> ¥{result.finalPriceHigh}
        </div>
        <div className="price-basis">{device.brand} {device.model}</div>
      </div>

      <div className="detail-section">
        <h3>估价明细</h3>
        {rows.map((row, i) => (
          <div key={i} className="detail-row">
            <span className="detail-key">{row.label}</span>
            <span className="detail-val">
              {row.value}
              {row.discount && <span style={{ color: '#ff6b6b', marginLeft: 8 }}>{row.discount}</span>}
            </span>
          </div>
        ))}
      </div>

      <div className="detail-section">
        <h3>估价说明</h3>
        <ul style={{ fontSize: 13, color: '#666', lineHeight: 2, paddingLeft: 20 }}>
          <li>以上价格为预估范围，实际价格以线下检测为准</li>
          <li>成色越好，回收价格越高</li>
          <li>最终打款金额可能与估价存在差异</li>
        </ul>
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button className="btn-secondary" onClick={onBack} style={{ flex: 1 }}>
          重新评估
        </button>
        <button className="btn-primary" onClick={onConfirm} style={{ flex: 2 }}>
          确认估价，提交回收单
        </button>
      </div>
    </div>
  );
};

export default PriceResultPage;
