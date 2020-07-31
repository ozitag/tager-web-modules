import React from 'react';
import { FETCH_STATUSES, Nullish, ResourceType } from '@tager/web-core';
import { Page, PictureImageType, PictureProps } from '@tager/web-components';

import {
  SeoParamsType,
  SettingsItemCommon,
  ThumbnailType,
} from '../typings/models';

type PageProps = React.ComponentProps<typeof Page>;

export function convertSeoParamsToPageProps(
  seoData: Nullish<SeoParamsType>
): PageProps {
  return {
    title: seoData?.title,
    description: seoData?.description,
    openGraphTitle: seoData?.openGraph.title,
    openGraphDescription: seoData?.openGraph.description,
    openGraphImage: seoData?.openGraph.image,
  };
}

export type NarrowAction<
  Item,
  Key extends string
> = Item extends SettingsItemCommon<Key> ? Item : never;

export function getSettingValueByKey<
  T extends SettingsItemCommon,
  K extends T['key']
>(settingsList: Array<T>, key: K): NarrowAction<T, K>['value'] | null {
  const foundItem = settingsList.find((settingItem) => settingItem.key === key);

  return foundItem ? foundItem.value : null;
}

export function convertThumbnailToPictureProps(
  image: Nullish<ThumbnailType>
): PictureProps<'string'> | undefined {
  if (!image) return undefined;

  return {
    src: image.url,
    src2x: image.url_2x,
    srcWebp: image.url_webp,
    srcWebp2x: image.url_webp_2x,
  };
}

export function convertThumbnailToPictureImage(
  image: Nullish<ThumbnailType>
): PictureImageType | undefined {
  if (!image) return undefined;

  return {
    src: image.url,
    src2x: image.url_2x,
    webp: image.url_webp,
    webp2x: image.url_webp_2x,
  };
}

export function shouldGetResourceDataFromCache(
  resource: ResourceType<unknown>,
  shouldInvalidate: Nullish<boolean>
): boolean {
  const isLoading = resource.status === FETCH_STATUSES.LOADING;
  const isInvalidatingNeeded =
    resource.status === FETCH_STATUSES.SUCCESS && shouldInvalidate;
  return isInvalidatingNeeded || isLoading;
}
