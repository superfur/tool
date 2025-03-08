type ClassValue = string | number | boolean | undefined | null | ClassObject | ClassArray;
type ClassObject = { [key: string]: any };
type ClassArray = ClassValue[];

/**
 * 合并 CSS 类名
 * @param args - 要合并的类名参数
 * @returns 合并后的类名字符串
 */
export function cx(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (arg === undefined || arg === null || arg === false) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(String(arg));
      continue;
    }

    if (Array.isArray(arg)) {
      const inner = cx(...arg);
      if (inner) {
        classes.push(inner);
      }
      continue;
    }

    if (argType === 'object') {
      for (const key in arg as ClassObject) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && (arg as ClassObject)[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
} 