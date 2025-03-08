/**
 * 将对象序列化为查询字符串
 * @param obj - 要序列化的对象
 * @returns 序列化后的查询字符串
 */
export function stringify(obj: Record<string, any>): string {
  if (!obj || typeof obj !== "object") {
    return "";
  }

  return Object.entries(obj)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map(
            (item) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`
          )
          .join("&");
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    })
    .join("&");
}

/**
 * 将查询字符串解析为对象
 * @param str - 要解析的查询字符串
 * @returns 解析后的对象
 */
export function parse(str: string): Record<string, any> {
  if (typeof str !== "string") {
    return {};
  }

  // 移除开头的 ? 或 #
  str = str.trim().replace(/^[?#&]/, "");

  if (!str) {
    return {};
  }

  return str.split("&").reduce((acc: Record<string, any>, item) => {
    const [key, value] = item.split("=").map(decodeURIComponent);

    if (!key) return acc;

    // 处理数组
    if (key in acc) {
      acc[key] = Array.isArray(acc[key])
        ? [...acc[key], value]
        : [acc[key], value];
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});
}

/**
 * 从 URL 中提取查询字符串并解析为对象
 * @param url - 要解析的 URL
 * @returns 解析后的对象
 */
export function parseUrl(url: string): Record<string, any> {
  if (typeof url !== "string") {
    return {};
  }

  const queryIndex = url.indexOf("?");
  if (queryIndex === -1) {
    return {};
  }

  // 提取查询字符串，并移除哈希片段
  const hashIndex = url.indexOf("#", queryIndex);
  const queryString = hashIndex === -1
    ? url.slice(queryIndex + 1)
    : url.slice(queryIndex + 1, hashIndex);

  return parse(queryString);
}
