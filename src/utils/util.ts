
export const convertPathToUrl = (pathTemplate: string, params: Record<string, any>) => {
  let url = pathTemplate;
  Object.keys(params).forEach(key => {
    url = url.replace(`:${key}`, params[key]);
  });
  return url;
};
