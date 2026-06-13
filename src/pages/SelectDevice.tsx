// ============================================================
// pages/SelectDevice.tsx - 选品类 -> 品牌 -> 型号三级联动
// ============================================================
import React, { useState } from 'react';
import { getCategories, getBrandsByCategory, getDevicesByCategoryAndBrand } from '../data/devices';
import { Category, Device } from '../types';

interface Props {
  onConfirm: (device: Device) => void;
  preselectDeviceId?: string;
}

const categoryIcons: Record<string, string> = {
  '手机': '📱',
  '笔记本': '💻',
  '平板': '📲',
  '耳机': '🎧',
  '相机': '📷',
};

const SelectDevice: React.FC<Props> = ({ onConfirm, preselectDeviceId }) => {
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(preselectDeviceId || null);

  const brands = selectedCategory ? getBrandsByCategory(selectedCategory) : [];
  const modelList = selectedCategory && selectedBrand
    ? getDevicesByCategoryAndBrand(selectedCategory, selectedBrand)
    : [];

  // 如果有预选设备，自动填充品类和品牌
  const preDevice = preselectDeviceId
    ? modelList.find(d => d.id === preselectDeviceId) || null
    : null;

  const handleCategory = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedBrand(null);
    setSelectedDeviceId(null);
  };

  const handleBrand = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedDeviceId(null);
  };

  const handleConfirm = () => {
    const device = modelList.find(d => d.id === selectedDeviceId);
    if (device) onConfirm(device);
  };

  return (
    <div className="fade-in">
      <div className="section-title">选择设备</div>
      <div className="section-subtitle">按品类 &gt; 品牌 &gt; 型号逐步选择</div>

      {/* Step 1: 品类 */}
      <div style={{ marginBottom: 8, fontSize: 14, fontWeight: 600, color: '#667eea' }}>① 选择品类</div>
      <div className="category-grid">
        {categories.map(cat => (
          <div
            key={cat}
            className={`category-card ${selectedCategory === cat ? 'selected' : ''}`}
            onClick={() => handleCategory(cat)}
          >
            <div className="category-icon">{categoryIcons[cat] || '📦'}</div>
            <div className="category-name">{cat}</div>
          </div>
        ))}
      </div>

      {/* Step 2: 品牌 */}
      {selectedCategory && (
        <>
          <div style={{ marginBottom: 8, fontSize: 14, fontWeight: 600, color: '#667eea' }}>② 选择品牌</div>
          <div className="brand-grid">
            {brands.map(brand => (
              <div
                key={brand}
                className={`brand-card ${selectedBrand === brand ? 'selected' : ''}`}
                onClick={() => handleBrand(brand)}
              >
                {brand}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Step 3: 型号 */}
      {selectedCategory && selectedBrand && (
        <>
          <div style={{ marginBottom: 8, fontSize: 14, fontWeight: 600, color: '#667eea' }}>③ 选择型号</div>
          <div className="model-list">
            {modelList.map(device => (
              <div
                key={device.id}
                className={`model-card ${selectedDeviceId === device.id ? 'selected' : ''}`}
                onClick={() => setSelectedDeviceId(device.id)}
              >
                <div style={{ flex: 1 }}>
                  <div className="model-name">{device.model}</div>
                  <div className="model-specs">{device.specs}</div>
                </div>
                <div className="model-price">基准价 ¥{device.basePrice}</div>
              </div>
            ))}
            {modelList.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">📭</div>
                <p>暂无该品牌型号数据</p>
              </div>
            )}
          </div>
        </>
      )}

      {/* 确认按钮 */}
      {selectedDeviceId && (
        <div style={{ marginTop: 24 }}>
          <button className="btn-primary" onClick={handleConfirm}>
            确认选择，开始评估成色
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectDevice;
