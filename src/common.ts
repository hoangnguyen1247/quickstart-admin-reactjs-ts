export type AnyObject = {
    [key: string]: any;
};

export const anyobj = {} as any;

export const noop = () => {};

export type PropsFromSearchParams = {
    searchKey: string,
    searchFields: string[],
    page: number,
    size?: number,
    [key: string]: any;
}

export type PropsFromReactRouter = {
    history: AnyObject,
    location: AnyObject,
    match: AnyObject,
}

export function parsedQueryParams(queryParams: AnyObject = {}): PropsFromSearchParams {
    const { searchKey, searchFields, page, size, ...rest } = queryParams;

    return {
        searchKey: typeof searchKey === "string" ? searchKey : "",
        searchFields: Array.isArray(searchFields) ? searchFields : (typeof searchFields === "string" ? [searchFields] : []),
        page: typeof page === "string" ? parseInt(page, 10) : 0,
        size: typeof size === "string" ? parseInt(size, 10) : undefined,
        ...rest,
    }
}
