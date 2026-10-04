import { useEffect, useState } from 'react';
import { loadContentFile } from '@/content/loaders';
import type { Collection, ContentFile } from '@/content/types';

export type ContentState =
  | { status: 'loading' }
  | { status: 'error'; retry: () => void }
  | { status: 'ready'; file: ContentFile };

type Result = { key: string; file?: ContentFile; failed?: boolean };

/** Loads one generated content file lazily. Shows loading until the file for `key` has arrived. */
export function useContentFile(collection: Collection, chapter: string): ContentState {
  const key = `${collection}/${chapter}`;
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<Result>({ key: '' });

  useEffect(() => {
    let cancelled = false;
    loadContentFile(collection, chapter)
      .then((file) => {
        if (!cancelled) setResult({ key, file });
      })
      .catch(() => {
        if (!cancelled) setResult({ key, failed: true });
      });
    return () => {
      cancelled = true;
    };
  }, [collection, chapter, key, attempt]);

  if (result.key !== key) return { status: 'loading' };
  if (result.failed || !result.file) {
    return {
      status: 'error',
      retry: () => {
        setResult({ key: '' });
        setAttempt((n) => n + 1);
      },
    };
  }
  return { status: 'ready', file: result.file };
}
