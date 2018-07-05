export declare function assignWith(x: any, y: any): any;
export declare function noop(): void;
export declare function yes(): boolean;
export declare function no(): boolean;
export declare function identity(x: any): any;
export declare function toCamelCase(...names: string[]): string;
export declare function isEmail(value: string): boolean;
export declare function escapeRegexp(text: string): string;
export declare function orderBy(data: any[], selectors: ((x: any) => any)[], compares: ((x: any, y: any) => number)[]): void;
export declare function htmlEncode(text: string): string;
export declare function startCase(text: string): string;
export declare function uniq<T>(collection: Array<T>): Array<T>;

export declare function max<T>(collection: Array<T>): T | undefined;
export declare function isUndefined(value: any): boolean;
export declare function isNumber(value: any): boolean;
export declare function isArray(value: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function isString(value: any): boolean;
export declare function isImage(value: any): boolean;
export declare function isUrl(value: any): boolean;
export declare function clone(value: any): any;
export declare function cloneDeep(value: any): any;
export declare function flatten<T>(collection: Array<Array<T>>): T[];
export declare function binarySearch<T>(list: Array<any>, value: any): number;
