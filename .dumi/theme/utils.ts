// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82

export function isZhCN(pathname: string) {
  if (pathname === '/') {
    if (typeof window !== 'undefined') {
      const locale = localStorage ? localStorage.getItem('locale') : 'en-US';
      if (locale === 'zh-CN') {
        return true;
      }
      return false;
    }
    return false;
  }
  return /zh-CN/.test(pathname);
}

/**
 * @param {*} path url
 * @param {*} zhCN boolean
 * if(zhCN)
 *  return "avatar-list"
 * else
 *  return "avatar-list-cn"
 */
export function getLocalizedPathname(path: string, zhCN: boolean) {
  let pathname = path.startsWith('/') ? path : `/${path}`;
  pathname = pathname.replace('-cn', '');
  if (pathname === '/' || pathname === '/index') {
    if (zhCN) {
      return '/index-cn';
    }
    return '/';
  }

  if (!zhCN) {
    return `${pathname}`;
  }
  if (pathname.endsWith('/')) {
    return `${pathname.substring(0, pathname.length - 1)}-cn`;
  }
  return `${pathname}-cn`;
}

export function getMenuItems(moduleData: Record<string, any>, locale: string) {
  const menuMeta = moduleData.map((item: { meta: any }) => item.meta);
  const menuItems: Record<string, any> = { topLevel: {} };
  menuMeta.forEach((meta: { category: Record<string, any>; type: string }) => {
    const category = (meta.category && meta.category[locale]) || meta.category || 'topLevel';
    if (!menuItems[category]) {
      menuItems[category] = {};
    }

    const type = meta.type || 'topLevel';
    if (!menuItems[category][type]) {
      menuItems[category][type] = [];
    }

    menuItems[category][type].push(meta);
  });
  return menuItems;
}

export function ping(callback: (arg0: any) => void) {
  const url =
    'https://private-a' +
    'lipay' +
    'objects.alip' +
    'ay.com/alip' +
    'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';

  const img = new Image();
  let done: boolean;
  const finish = (status: string) => {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };
  img.onload = () => finish('responded');
  img.onerror = () => finish('error');
  img.src = url;
  return setTimeout(() => finish('timeout'), 1500);
}

export function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}
