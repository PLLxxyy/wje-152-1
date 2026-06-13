// ============================================================
// utils/pricing.ts - 估价计算逻辑
// ============================================================
import { ConditionForm, PriceResult } from '../types';

/** 各成色维度对应的折扣系数（乘数，1.0 = 不影响，越小扣越多） */
const screenDiscounts: Record<string, number> = {
  '完美': 1.0,
  '轻微划痕': 0.95,
  '明显划痕': 0.88,
  '碎裂': 0.70,
};

const shellDiscounts: Record<string, number> = {
  '完美': 1.0,
  '轻微磕碰': 0.96,
  '明显磕碰': 0.90,
  '严重变形': 0.75,
};

const batteryDiscounts: Record<string, number> = {
  '90%以上': 1.0,
  '80%-90%': 0.95,
  '70%-80%': 0.90,
  '70%以下': 0.80,
};

const functionDiscounts: Record<string, number> = {
  '全部正常': 1.0,
  '部分异常': 0.75,
  '无法开机': 0.40,
};

/** 根据基准价和成色计算估价 */
export function calculatePrice(basePrice: number, condition: ConditionForm): PriceResult {
  const screenMul = condition.screen ? screenDiscounts[condition.screen] : 1.0;
  const shellMul = condition.shell ? shellDiscounts[condition.shell] : 1.0;
  const batteryMul = condition.battery ? batteryDiscounts[condition.battery] : 1.0;
  const functionMul = condition.function ? functionDiscounts[condition.function] : 1.0;

  const combined = screenMul * shellMul * batteryMul * functionMul;

  // 估价范围：基准价 * 综合折扣，上下浮动 5%
  const corePrice = Math.round(basePrice * combined);
  const finalPriceLow = Math.round(corePrice * 0.95 / 10) * 10; // 向下取整到十位
  const finalPriceHigh = Math.round(corePrice * 1.05 / 10) * 10;

  return {
    basePrice,
    screenDiscount: screenMul,
    shellDiscount: shellMul,
    batteryDiscount: batteryMul,
    functionDiscount: functionMul,
    finalPriceLow,
    finalPriceHigh,
  };
}

/** 格式化折扣显示 */
export function formatDiscount(mul: number): string {
  if (mul >= 1.0) return '';
  const percent = Math.round((1 - mul) * 100);
  return `-${percent}%`;
}
