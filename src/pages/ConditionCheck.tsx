// ============================================================
// pages/ConditionCheck.tsx - 成色评估页面
// ============================================================
import React, { useState } from 'react';
import { Device, ConditionForm, ScreenCondition, ShellCondition, BatteryHealth, FunctionStatus } from '../types';

interface Props {
  device: Device;
  onSubmit: (condition: ConditionForm) => void;
}

const screenOptions: { value: ScreenCondition; desc: string }[] = [
  { value: '完美', desc: '无任何划痕、显示正常' },
  { value: '轻微划痕', desc: '有细微使用痕迹，不影响显示' },
  { value: '明显划痕', desc: '肉眼可见划痕较多' },
  { value: '碎裂', desc: '屏幕有裂纹或显示异常' },
];

const shellOptions: { value: ShellCondition; desc: string }[] = [
  { value: '完美', desc: '无磕碰、无掉漆' },
  { value: '轻微磕碰', desc: '轻微使用痕迹' },
  { value: '明显磕碰', desc: '有较明显磕碰或掉漆' },
  { value: '严重变形', desc: '外壳严重变形或开裂' },
];

const batteryOptions: { value: BatteryHealth; desc: string }[] = [
  { value: '90%以上', desc: '电池健康，续航充足' },
  { value: '80%-90%', desc: '正常使用水平' },
  { value: '70%-80%', desc: '续航明显下降' },
  { value: '70%以下', desc: '电池老化严重' },
];

const functionOptions: { value: FunctionStatus; desc: string }[] = [
  { value: '全部正常', desc: '所有功能正常使用' },
  { value: '部分异常', desc: '个别功能不正常（如摄像头、扬声器等）' },
  { value: '无法开机', desc: '设备无法正常启动' },
];

const ConditionCheck: React.FC<Props> = ({ device, onSubmit }) => {
  const [condition, setCondition] = useState<ConditionForm>({
    screen: null,
    shell: null,
    battery: null,
    function: null,
  });

  const allSelected = condition.screen && condition.shell && condition.battery && condition.function;

  return (
    <div className="fade-in">
      <div className="section-title">成色评估</div>
      <div className="section-subtitle">请如实评估设备状况，影响最终估价</div>

      <div className="tip-bar">
        <span>📋</span>
        <span>{device.brand} {device.model} · 基准回收价 ¥{device.basePrice}</span>
      </div>

      {/* 屏幕 */}
      <div className="condition-group">
        <div className="condition-label">📱 屏幕状况</div>
        <div className="condition-options">
          {screenOptions.map(opt => (
            <div
              key={opt.value}
              className={`condition-option ${condition.screen === opt.value ? 'selected' : ''}`}
              onClick={() => setCondition(prev => ({ ...prev, screen: opt.value }))}
            >
              <div className="radio" />
              <div>
                <div className="option-text">{opt.value}</div>
                <div className="option-desc">{opt.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 外壳 */}
      <div className="condition-group">
        <div className="condition-label">🔋 外壳状况</div>
        <div className="condition-options">
          {shellOptions.map(opt => (
            <div
              key={opt.value}
              className={`condition-option ${condition.shell === opt.value ? 'selected' : ''}`}
              onClick={() => setCondition(prev => ({ ...prev, shell: opt.value }))}
            >
              <div className="radio" />
              <div>
                <div className="option-text">{opt.value}</div>
                <div className="option-desc">{opt.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 电池 */}
      <div className="condition-group">
        <div className="condition-label">⚡ 电池健康度</div>
        <div className="condition-options">
          {batteryOptions.map(opt => (
            <div
              key={opt.value}
              className={`condition-option ${condition.battery === opt.value ? 'selected' : ''}`}
              onClick={() => setCondition(prev => ({ ...prev, battery: opt.value }))}
            >
              <div className="radio" />
              <div>
                <div className="option-text">{opt.value}</div>
                <div className="option-desc">{opt.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 功能 */}
      <div className="condition-group">
        <div className="condition-label">⚙️ 功能状态</div>
        <div className="condition-options">
          {functionOptions.map(opt => (
            <div
              key={opt.value}
              className={`condition-option ${condition.function === opt.value ? 'selected' : ''}`}
              onClick={() => setCondition(prev => ({ ...prev, function: opt.value }))}
            >
              <div className="radio" />
              <div>
                <div className="option-text">{opt.value}</div>
                <div className="option-desc">{opt.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 确认 */}
      <div style={{ marginTop: 24 }}>
        <button
          className="btn-primary"
          disabled={!allSelected}
          onClick={() => allSelected && onSubmit(condition)}
        >
          查看估价结果
        </button>
      </div>
    </div>
  );
};

export default ConditionCheck;
