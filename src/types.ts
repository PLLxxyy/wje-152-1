// ============================================================
// types.ts - 所有 TypeScript 类型定义
// ============================================================

/** 设备品类 */
export type Category = '手机' | '笔记本' | '平板' | '耳机' | '相机';

/** 设备品牌 */
export interface Brand {
  name: string;
  categories: Category[];
}

/** 设备型号 */
export interface Device {
  id: string;
  brand: string;
  model: string;
  category: Category;
  basePrice: number;
  specs?: string;
  releaseYear?: number;
}

/** 屏幕状况 */
export type ScreenCondition = '完美' | '轻微划痕' | '明显划痕' | '碎裂';

/** 外壳状况 */
export type ShellCondition = '完美' | '轻微磕碰' | '明显磕碰' | '严重变形';

/** 电池健康度 */
export type BatteryHealth = '90%以上' | '80%-90%' | '70%-80%' | '70%以下';

/** 功能是否正常 */
export type FunctionStatus = '全部正常' | '部分异常' | '无法开机';

/** 成色评估表单 */
export interface ConditionForm {
  screen: ScreenCondition | null;
  shell: ShellCondition | null;
  battery: BatteryHealth | null;
  function: FunctionStatus | null;
}

/** 估价结果 */
export interface PriceResult {
  basePrice: number;
  screenDiscount: number;
  shellDiscount: number;
  batteryDiscount: number;
  functionDiscount: number;
  finalPriceLow: number;
  finalPriceHigh: number;
}

/** 回收订单状态 */
export type OrderStatus = '待取件' | '检测中' | '已打款';

/** 回收订单 */
export interface RecycleOrder {
  id: string;
  device: Device;
  condition: ConditionForm;
  priceResult: PriceResult;
  name: string;
  phone: string;
  address: string;
  pickupTime: string;
  status: OrderStatus;
  createdAt: string;
  inspectNote?: string;
  finalPrice?: number;
}

/** 页面路由 */
export type PageName = 'home' | 'select-device' | 'condition-check' | 'price-result' | 'submit-order' | 'my-orders';
