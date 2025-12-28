const isRouteActive = (href: string, pathname: string): boolean => {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname.startsWith(href);
};

export default isRouteActive;
