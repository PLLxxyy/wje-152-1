// ============================================================
// utils/storage.ts - localStorage 持久化工具
// ============================================================
import { RecycleOrder } from '../types';

const ORDERS_KEY = 'wje_orders';

/** 获取所有回收单 */
export function getOrders(): RecycleOrder[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** 保存回收单 */
export function saveOrders(orders: RecycleOrder[]): void {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

/** 新增一条回收单 */
export function addOrder(order: RecycleOrder): void {
  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
}

/** 更新订单状态 */
export function updateOrderStatus(orderId: string, status: RecycleOrder['status'], inspectNote?: string, finalPrice?: number): void {
  const orders = getOrders();
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx >= 0) {
    orders[idx].status = status;
    if (inspectNote !== undefined) orders[idx].inspectNote = inspectNote;
    if (finalPrice !== undefined) orders[idx].finalPrice = finalPrice;
    saveOrders(orders);
  }
}
