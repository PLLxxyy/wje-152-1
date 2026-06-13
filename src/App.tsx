// ============================================================
// App.tsx - 主应用，管理页面路由和全局状态
// ============================================================
import React, { useState, useEffect } from 'react';
import { PageName, Device, ConditionForm, RecycleOrder } from './types';
import { seedOrders } from './utils/seed';
import { devices } from './data/devices';

import Home from './pages/Home';
import SelectDevice from './pages/SelectDevice';
import ConditionCheck from './pages/ConditionCheck';
import PriceResult from './pages/PriceResult';
import SubmitOrder from './pages/SubmitOrder';
import MyOrders from './pages/MyOrders';

const App: React.FC = () => {
  const [page, setPage] = useState<PageName>('home');
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [condition, setCondition] = useState<ConditionForm | null>(null);
  const [submittedOrder, setSubmittedOrder] = useState<RecycleOrder | null>(null);
  const [preselectDeviceId, setPreselectDeviceId] = useState<string | undefined>(undefined);

  useEffect(() => {
    seedOrders();
  }, []);

  const goBack = (): void => {
    if (page === 'my-orders' || page === 'select-device') setPage('home');
    else if (page === 'condition-check') setPage('select-device');
    else if (page === 'price-result') setPage('condition-check');
    else if (page === 'submit-order') setPage('price-result');
    else setPage('home');
  };

  const headerTitle = (): string => {
    switch (page) {
      case 'home': return '数码回收估价';
      case 'select-device': return '选择设备';
      case 'condition-check': return '成色评估';
      case 'price-result': return '估价结果';
      case 'submit-order': return '提交回收单';
      case 'my-orders': return '我的回收';
      default: return '数码回收估价';
    }
  };

  const showBack = page !== 'home';

  // 首页选择热门设备 -> 直接进入选设备页（预选品类和品牌）
  const handleSelectFromHot = (deviceId: string): void => {
    const device = devices.find(d => d.id === deviceId);
    if (device) {
      setSelectedDevice(device);
      setCondition(null);
      setPreselectDeviceId(deviceId);
      setPage('condition-check');
    }
  };

  // 选设备页确认
  const handleDeviceConfirm = (device: Device): void => {
    setSelectedDevice(device);
    setCondition(null);
    setPage('condition-check');
  };

  // 成色评估确认
  const handleConditionSubmit = (cond: ConditionForm): void => {
    setCondition(cond);
    setPage('price-result');
  };

  // 估价确认 -> 填写回收单
  const handlePriceConfirm = (): void => {
    setPage('submit-order');
  };

  // 提交成功
  const handleOrderSuccess = (order: RecycleOrder): void => {
    setSubmittedOrder(order);
    setPage('my-orders');
  };

  // 底部导航
  const handleTabClick = (target: 'home' | 'my-orders'): void => {
    if (target === 'home') {
      setPage('home');
      setSelectedDevice(null);
      setCondition(null);
      setPreselectDeviceId(undefined);
    } else {
      setPage('my-orders');
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <div className="app-header">
        {showBack && <button className="back-btn" onClick={goBack}>←</button>}
        <h1>{headerTitle()}</h1>
      </div>

      {/* Content */}
      <div className="app-content">
        {page === 'home' && (
          <Home
            onSelectDevice={handleSelectFromHot}
            onGoSelect={() => setPage('select-device')}
          />
        )}

        {page === 'select-device' && (
          <SelectDevice
            onConfirm={handleDeviceConfirm}
            preselectDeviceId={preselectDeviceId}
          />
        )}

        {page === 'condition-check' && selectedDevice && (
          <ConditionCheck
            device={selectedDevice}
            onSubmit={handleConditionSubmit}
          />
        )}

        {page === 'price-result' && selectedDevice && condition && (
          <PriceResult
            device={selectedDevice}
            condition={condition}
            onConfirm={handlePriceConfirm}
            onBack={() => setPage('condition-check')}
          />
        )}

        {page === 'submit-order' && selectedDevice && condition && (
          <SubmitOrder
            device={selectedDevice}
            condition={condition}
            onSuccess={handleOrderSuccess}
            onBack={() => setPage('price-result')}
          />
        )}

        {page === 'my-orders' && (
          <MyOrders />
        )}
      </div>

      {/* Footer Tabs */}
      <div className="app-footer">
        <button
          className={`footer-tab ${page === 'home' || page === 'select-device' || page === 'condition-check' || page === 'price-result' || page === 'submit-order' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          <span className="tab-icon">🏠</span>
          首页
        </button>
        <button
          className={`footer-tab ${page === 'my-orders' ? 'active' : ''}`}
          onClick={() => handleTabClick('my-orders')}
        >
          <span className="tab-icon">📦</span>
          我的回收
        </button>
      </div>
    </div>
  );
};

export default App;
