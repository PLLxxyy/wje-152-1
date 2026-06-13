// ============================================================
// utils/seed.ts - 预置机型数据和模拟回收单数据
// ============================================================
import { getOrders, saveOrders } from './storage';
import { devices } from '../data/devices';
import { RecycleOrder, ConditionForm, PriceResult } from '../types';
import { calculatePrice } from './pricing';

/** 初始化种子数据：如果 localStorage 为空则生成几条模拟回收单 */
export function seedOrders(): void {
  const existing = getOrders();
  if (existing.length > 0) return;

  const mockConditions: { condition: ConditionForm; status: RecycleOrder['status'] }[] = [
    { condition: { screen: '完美', shell: '完美', battery: '90%以上', function: '全部正常' }, status: '已打款' },
    { condition: { screen: '轻微划痕', shell: '轻微磕碰', battery: '80%-90%', function: '全部正常' }, status: '检测中' },
    { condition: { screen: '完美', shell: '完美', battery: '90%以上', function: '全部正常' }, status: '待取件' },
  ];

  const seedDevices = [devices[0], devices[3], devices[9]]; // iPhone 15 Pro Max, iPhone 14 Pro Max, Mate 60 Pro

  const mockOrders: RecycleOrder[] = seedDevices.map((device, i) => {
    const { condition, status } = mockConditions[i];
    const priceResult: PriceResult = calculatePrice(device.basePrice, condition);
    const daysAgo = (3 - i) * 2;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);

    return {
      id: `ORD-${Date.now()}-${i}`,
      device,
      condition,
      priceResult,
      name: ['张先生', '李女士', '王先生'][i],
      phone: ['138****1234', '139****5678', '136****9012'][i],
      address: ['北京市朝阳区望京SOHO', '上海市浦东新区陆家嘴', '深圳市南山区科技园'][i],
      pickupTime: ['2024-01-15 上午', '2024-01-16 下午', '2024-01-17 上午'][i],
      status,
      createdAt: date.toISOString(),
      inspectNote: status === '已打款' ? '设备成色与描述一致，确认打款' : status === '检测中' ? '正在检测中，请耐心等待' : undefined,
      finalPrice: status === '已打款' ? Math.round((priceResult.finalPriceLow + priceResult.finalPriceHigh) / 2) : undefined,
    };
  });

  saveOrders(mockOrders);
}
