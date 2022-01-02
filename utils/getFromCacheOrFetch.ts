import memoryCache from "memory-cache";
import { MEMORY_CACHE_KEY } from "../constants";

export interface CachingOptions {
  shouldCache: boolean;
  ttl: number; // time to live in milliseconds
}
export async function getFromCacheOrFetch<T>(
  memoryKey: MEMORY_CACHE_KEY,
  fetchFunction: () => any,
  cachingOptions: CachingOptions
): Promise<{ data: T | null; isCached: boolean }> {
  const cachedData = memoryCache.get(memoryKey);
  if (cachedData) {
    return {
      data: cachedData,
      isCached: true,
    };
  }
  try {
    const fetchedData: T = await fetchFunction();
    if (!fetchedData) {
      throw new Error();
    }
    if (cachingOptions.shouldCache) {
      // should be cached
      memoryCache.put(memoryKey, fetchedData, cachingOptions.ttl);
      return {
        data: fetchedData,
        isCached: true,
      };
    }
    // should not be cached
    return {
      data: fetchedData,
      isCached: false,
    };
  } catch {
    // fetch failed
    return {
      data: null,
      isCached: false,
    };
  }
}
