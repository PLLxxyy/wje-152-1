// ============================================================
// data/devices.ts - 设备型号数据库
// ============================================================
import { Device } from '../types';

export const devices: Device[] = [
  // ===== 手机 - 苹果 =====
  { id: 'iphone-15-pro-max', brand: 'Apple', model: 'iPhone 15 Pro Max', category: '手机', basePrice: 5800, specs: 'A17 Pro / 8GB / 256GB', releaseYear: 2023 },
  { id: 'iphone-15-pro', brand: 'Apple', model: 'iPhone 15 Pro', category: '手机', basePrice: 4800, specs: 'A17 Pro / 8GB / 128GB', releaseYear: 2023 },
  { id: 'iphone-15', brand: 'Apple', model: 'iPhone 15', category: '手机', basePrice: 3600, specs: 'A16 / 6GB / 128GB', releaseYear: 2023 },
  { id: 'iphone-14-pro-max', brand: 'Apple', model: 'iPhone 14 Pro Max', category: '手机', basePrice: 4200, specs: 'A16 / 6GB / 128GB', releaseYear: 2022 },
  { id: 'iphone-14-pro', brand: 'Apple', model: 'iPhone 14 Pro', category: '手机', basePrice: 3500, specs: 'A16 / 6GB / 128GB', releaseYear: 2022 },
  { id: 'iphone-14', brand: 'Apple', model: 'iPhone 14', category: '手机', basePrice: 2800, specs: 'A15 / 6GB / 128GB', releaseYear: 2022 },
  { id: 'iphone-16-pro-max', brand: 'Apple', model: 'iPhone 16 Pro Max', category: '手机', basePrice: 7200, specs: 'A18 Pro / 8GB / 256GB', releaseYear: 2024 },
  { id: 'iphone-16-pro', brand: 'Apple', model: 'iPhone 16 Pro', category: '手机', basePrice: 6200, specs: 'A18 Pro / 8GB / 128GB', releaseYear: 2024 },
  { id: 'iphone-16', brand: 'Apple', model: 'iPhone 16', category: '手机', basePrice: 4500, specs: 'A18 / 8GB / 128GB', releaseYear: 2024 },

  // ===== 手机 - 华为 =====
  { id: 'huawei-mate60-pro', brand: '华为', model: 'Mate 60 Pro', category: '手机', basePrice: 4200, specs: '麒麟9000S / 12GB / 256GB', releaseYear: 2023 },
  { id: 'huawei-mate60', brand: '华为', model: 'Mate 60', category: '手机', basePrice: 3500, specs: '麒麟9000S / 12GB / 256GB', releaseYear: 2023 },
  { id: 'huawei-p60-pro', brand: '华为', model: 'P60 Pro', category: '手机', basePrice: 3200, specs: '骁龙8+ Gen1 / 8GB / 256GB', releaseYear: 2023 },
  { id: 'huawei-mate70-pro', brand: '华为', model: 'Mate 70 Pro', category: '手机', basePrice: 5500, specs: '麒麟9020 / 12GB / 256GB', releaseYear: 2024 },
  { id: 'huawei-mate70', brand: '华为', model: 'Mate 70', category: '手机', basePrice: 4500, specs: '麒麟9020 / 12GB / 256GB', releaseYear: 2024 },
  { id: 'huawei-pura70-pro', brand: '华为', model: 'Pura 70 Pro', category: '手机', basePrice: 4000, specs: '麒麟9010 / 12GB / 256GB', releaseYear: 2024 },

  // ===== 手机 - 小米 =====
  { id: 'xiaomi-14-pro', brand: '小米', model: '小米14 Pro', category: '手机', basePrice: 2800, specs: '骁龙8 Gen3 / 12GB / 256GB', releaseYear: 2023 },
  { id: 'xiaomi-14', brand: '小米', model: '小米14', category: '手机', basePrice: 2400, specs: '骁龙8 Gen3 / 12GB / 256GB', releaseYear: 2023 },
  { id: 'xiaomi-15-pro', brand: '小米', model: '小米15 Pro', category: '手机', basePrice: 3400, specs: '骁龙8至尊版 / 16GB / 256GB', releaseYear: 2024 },
  { id: 'xiaomi-15', brand: '小米', model: '小米15', category: '手机', basePrice: 2900, specs: '骁龙8至尊版 / 12GB / 256GB', releaseYear: 2024 },

  // ===== 手机 - OPPO =====
  { id: 'oppo-find-x7-ultra', brand: 'OPPO', model: 'Find X7 Ultra', category: '手机', basePrice: 3200, specs: '天玑9300 / 16GB / 256GB', releaseYear: 2024 },
  { id: 'oppo-find-x7', brand: 'OPPO', model: 'Find X7', category: '手机', basePrice: 2200, specs: '天玑9300 / 12GB / 256GB', releaseYear: 2024 },
  { id: 'oppo-find-x8-pro', brand: 'OPPO', model: 'Find X8 Pro', category: '手机', basePrice: 3600, specs: '天玑9400 / 16GB / 256GB', releaseYear: 2024 },

  // ===== 手机 - vivo =====
  { id: 'vivo-x100-pro', brand: 'vivo', model: 'X100 Pro', category: '手机', basePrice: 2800, specs: '天玑9300 / 16GB / 256GB', releaseYear: 2023 },
  { id: 'vivo-x100', brand: 'vivo', model: 'X100', category: '手机', basePrice: 2200, specs: '天玑9300 / 12GB / 256GB', releaseYear: 2023 },
  { id: 'vivo-x200-pro', brand: 'vivo', model: 'X200 Pro', category: '手机', basePrice: 3400, specs: '天玑9400 / 16GB / 256GB', releaseYear: 2024 },

  // ===== 手机 - 三星 =====
  { id: 'samsung-s24-ultra', brand: '三星', model: 'Galaxy S24 Ultra', category: '手机', basePrice: 5200, specs: '骁龙8 Gen3 / 12GB / 256GB', releaseYear: 2024 },
  { id: 'samsung-s24', brand: '三星', model: 'Galaxy S24', category: '手机', basePrice: 3000, specs: '骁龙8 Gen3 / 8GB / 128GB', releaseYear: 2024 },
  { id: 'samsung-s25-ultra', brand: '三星', model: 'Galaxy S25 Ultra', category: '手机', basePrice: 6800, specs: '骁龙8至尊版 / 12GB / 256GB', releaseYear: 2025 },
  { id: 'samsung-s25', brand: '三星', model: 'Galaxy S25', category: '手机', basePrice: 4200, specs: '骁龙8至尊版 / 8GB / 128GB', releaseYear: 2025 },

  // ===== 手机 - 荣耀 =====
  { id: 'honor-magic6-pro', brand: '荣耀', model: 'Magic6 Pro', category: '手机', basePrice: 2600, specs: '骁龙8 Gen3 / 12GB / 256GB', releaseYear: 2024 },
  { id: 'honor-magic7-pro', brand: '荣耀', model: 'Magic7 Pro', category: '手机', basePrice: 3200, specs: '骁龙8至尊版 / 12GB / 256GB', releaseYear: 2024 },

  // ===== 平板 - 苹果 =====
  { id: 'ipad-pro-m4-13', brand: 'Apple', model: 'iPad Pro M4 13英寸', category: '平板', basePrice: 6800, specs: 'M4 / 16GB / 256GB', releaseYear: 2024 },
  { id: 'ipad-pro-m4-11', brand: 'Apple', model: 'iPad Pro M4 11英寸', category: '平板', basePrice: 5200, specs: 'M4 / 8GB / 256GB', releaseYear: 2024 },
  { id: 'ipad-air-m2', brand: 'Apple', model: 'iPad Air M2', category: '平板', basePrice: 3500, specs: 'M2 / 8GB / 128GB', releaseYear: 2024 },
  { id: 'ipad-10', brand: 'Apple', model: 'iPad 10代', category: '平板', basePrice: 2200, specs: 'A14 / 4GB / 64GB', releaseYear: 2022 },
  { id: 'ipad-mini-7', brand: 'Apple', model: 'iPad mini 7', category: '平板', basePrice: 3000, specs: 'A17 Pro / 8GB / 128GB', releaseYear: 2024 },

  // ===== 平板 - 华为 =====
  { id: 'huawei-matepad-pro-13', brand: '华为', model: 'MatePad Pro 13.2英寸', category: '平板', basePrice: 3800, specs: '麒麟9000S / 12GB / 256GB', releaseYear: 2023 },
  { id: 'huawei-matepad-air', brand: '华为', model: 'MatePad Air', category: '平板', basePrice: 2000, specs: '骁龙888 / 8GB / 128GB', releaseYear: 2023 },

  // ===== 平板 - 小米 =====
  { id: 'xiaomi-pad-6-pro', brand: '小米', model: '小米平板6 Pro', category: '平板', basePrice: 1800, specs: '骁龙8+ Gen1 / 8GB / 128GB', releaseYear: 2023 },
  { id: 'xiaomi-pad-7-pro', brand: '小米', model: '小米平板7 Pro', category: '平板', basePrice: 2400, specs: '骁龙8 Gen3 / 12GB / 256GB', releaseYear: 2024 },

  // ===== 平板 - 三星 =====
  { id: 'samsung-tab-s10-ultra', brand: '三星', model: 'Galaxy Tab S10 Ultra', category: '平板', basePrice: 5500, specs: '天玑9300+ / 12GB / 256GB', releaseYear: 2024 },
  { id: 'samsung-tab-s9', brand: '三星', model: 'Galaxy Tab S9', category: '平板', basePrice: 3200, specs: '骁龙8 Gen2 / 8GB / 128GB', releaseYear: 2023 },

  // ===== 笔记本 - 苹果 =====
  { id: 'macbook-pro-m4-16', brand: 'Apple', model: 'MacBook Pro M4 Pro 16英寸', category: '笔记本', basePrice: 12000, specs: 'M4 Pro / 24GB / 512GB', releaseYear: 2024 },
  { id: 'macbook-pro-m4-14', brand: 'Apple', model: 'MacBook Pro M4 14英寸', category: '笔记本', basePrice: 8500, specs: 'M4 / 16GB / 512GB', releaseYear: 2024 },
  { id: 'macbook-air-m3-15', brand: 'Apple', model: 'MacBook Air M3 15英寸', category: '笔记本', basePrice: 6800, specs: 'M3 / 16GB / 256GB', releaseYear: 2024 },
  { id: 'macbook-air-m3-13', brand: 'Apple', model: 'MacBook Air M3 13英寸', category: '笔记本', basePrice: 5500, specs: 'M3 / 8GB / 256GB', releaseYear: 2024 },

  // ===== 笔记本 - 联想 =====
  { id: 'thinkpad-x1-carbon-12', brand: '联想', model: 'ThinkPad X1 Carbon 12代', category: '笔记本', basePrice: 7500, specs: 'i7-1365U / 16GB / 512GB', releaseYear: 2024 },
  { id: 'lenovo-legion-y9000p', brand: '联想', model: '拯救者 Y9000P 2024', category: '笔记本', basePrice: 6500, specs: 'i9-14900HX / 16GB / 1TB / RTX4060', releaseYear: 2024 },
  { id: 'lenovo-xiaoxin-pro-16', brand: '联想', model: '小新 Pro 16 2024', category: '笔记本', basePrice: 4200, specs: 'i7-13620H / 16GB / 512GB', releaseYear: 2024 },

  // ===== 笔记本 - 戴尔 =====
  { id: 'dell-xps-14', brand: '戴尔', model: 'XPS 14', category: '笔记本', basePrice: 8000, specs: 'Ultra 7 / 16GB / 512GB', releaseYear: 2024 },
  { id: 'dell-inspiron-16', brand: '戴尔', model: '灵越16 Plus', category: '笔记本', basePrice: 4500, specs: 'i7-13620H / 16GB / 512GB', releaseYear: 2024 },

  // ===== 笔记本 - 华为 =====
  { id: 'huawei-matebook-x-pro', brand: '华为', model: 'MateBook X Pro 2024', category: '笔记本', basePrice: 7000, specs: 'Ultra 7 / 16GB / 1TB', releaseYear: 2024 },
  { id: 'huawei-matebook-16', brand: '华为', model: 'MateBook 16s 2024', category: '笔记本', basePrice: 5000, specs: 'i7-13700H / 16GB / 512GB', releaseYear: 2024 },

  // ===== 耳机 =====
  { id: 'airpods-pro-2', brand: 'Apple', model: 'AirPods Pro 2', category: '耳机', basePrice: 900, specs: 'USB-C / 主动降噪', releaseYear: 2023 },
  { id: 'airpods-max', brand: 'Apple', model: 'AirPods Max', category: '耳机', basePrice: 2200, specs: '头戴式 / 主动降噪', releaseYear: 2024 },
  { id: 'sony-wh1000xm5', brand: '索尼', model: 'WH-1000XM5', category: '耳机', basePrice: 1400, specs: '头戴式 / 主动降噪', releaseYear: 2022 },
  { id: 'sony-wf1000xm5', brand: '索尼', model: 'WF-1000XM5', category: '耳机', basePrice: 1000, specs: '入耳式 / 主动降噪', releaseYear: 2023 },
  { id: 'huawei-freebuds-pro-3', brand: '华为', model: 'FreeBuds Pro 3', category: '耳机', basePrice: 700, specs: '入耳式 / 主动降噪', releaseYear: 2023 },
  { id: 'samsung-galaxy-buds3-pro', brand: '三星', model: 'Galaxy Buds3 Pro', category: '耳机', basePrice: 800, specs: '入耳式 / 主动降噪', releaseYear: 2024 },

  // ===== 相机 =====
  { id: 'sony-a7m4', brand: '索尼', model: 'A7M4', category: '相机', basePrice: 8500, specs: '全画幅 / 3300万像素', releaseYear: 2021 },
  { id: 'sony-a7c2', brand: '索尼', model: 'A7C2', category: '相机', basePrice: 9000, specs: '全画幅 / 3300万像素 / 轻便', releaseYear: 2023 },
  { id: 'sony-a7r5', brand: '索尼', model: 'A7R5', category: '相机', basePrice: 14000, specs: '全画幅 / 6100万像素', releaseYear: 2022 },
  { id: 'canon-r6m2', brand: '佳能', model: 'EOS R6 Mark II', category: '相机', basePrice: 9500, specs: '全画幅 / 2420万像素', releaseYear: 2022 },
  { id: 'canon-r8', brand: '佳能', model: 'EOS R8', category: '相机', basePrice: 6800, specs: '全画幅 / 2420万像素', releaseYear: 2023 },
  { id: 'nikon-z8', brand: '尼康', model: 'Z8', category: '相机', basePrice: 16000, specs: '全画幅 / 4571万像素', releaseYear: 2023 },
  { id: 'nikon-z6iii', brand: '尼康', model: 'Z6 III', category: '相机', basePrice: 10000, specs: '全画幅 / 2450万像素', releaseYear: 2024 },
  { id: 'fuji-xt5', brand: '富士', model: 'X-T5', category: '相机', basePrice: 7000, specs: 'APS-C / 4020万像素', releaseYear: 2022 },
];

/** 获取所有品类列表 */
export function getCategories(): string[] {
  const cats = new Set(devices.map(d => d.category));
  return Array.from(cats);
}

/** 获取某品类下的品牌列表 */
export function getBrandsByCategory(category: string): string[] {
  const brands = new Set(devices.filter(d => d.category === category).map(d => d.brand));
  return Array.from(brands);
}

/** 获取某品类某品牌下的型号列表 */
export function getDevicesByCategoryAndBrand(category: string, brand: string): Device[] {
  return devices.filter(d => d.category === category && d.brand === brand);
}
