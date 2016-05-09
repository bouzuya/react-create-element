const createElement = (react: any, ...args: any[]): any => {
  return react.createElement.apply(react, args);
};

export { createElement };
