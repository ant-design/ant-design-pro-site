// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82

export function isZhCN(pathname) {
  const notHaveLocal = !pathname.includes('zh-CN') && !pathname.includes('en-US');
  if (pathname === '/' || notHaveLocal) {
    if (typeof window !== `undefined`) {
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

export function getLocalizedPathname(path, zhCN) {
  let pathname = path.startsWith('/') ? path : `/${path}`;
  const notHaveLocal = !pathname.includes('zh-CN') && !pathname.includes('en-US');

  if (notHaveLocal) {
    return `${pathname}`;
  }

  pathname = pathname.split('.').shift();

  if (pathname === '/') {
    return '/';
  }
  if (!zhCN) {
    return `${pathname}.en-US.html/`;
  }
  return `${pathname}.zh-CN.html/`;
}

export function getMenuItems(moduleData, locale) {
  const menuMeta = moduleData.map(item => item.meta);
  const menuItems = {};
  menuMeta
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .forEach(meta => {
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

export function ping(callback) {
  // eslint-disable-next-line
  const url =
    'https://private-a' +
    'lipay' +
    'objects.alip' +
    'ay.com/alip' +
    'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  const img = new Image();
  let done;
  const finish = status => {
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

export const transformerFrontmatter = frontmatter => {
  const { title } = frontmatter;
  return {
    ...frontmatter,
    title: {
      'zh-CN': title.zh_CN,
      'en-US': title.en_US,
    },
  };
};
