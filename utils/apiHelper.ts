// utils/apiUtil.ts
import { APIRequestContext } from '@playwright/test';

export async function getAPI(
    request: APIRequestContext,
    url: string
) {
    const response = await request.get(url);
    return response;
}

export async function postAPI(
    request: APIRequestContext,
    url: string,
    data: object
) {
    const response = await request.post(url, { data });
    return response;
}