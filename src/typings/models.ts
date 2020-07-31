import { Nullable } from '@tager/web-core';

/**
 * Reference:
 * https://github.com/Ozerich/laravel-filestorage-db/blob/0.3.8/src/Models/File.php#L144-L174
 */
export type ThumbnailType = {
  url: Nullable<string>;
  url_2x?: Nullable<string>;
  url_webp?: Nullable<string>;
  url_webp_2x?: Nullable<string>;
};

export type ThumbnailMapType<Key extends string> = {
  [key in Key]: Nullable<ThumbnailType>;
};

/** Seo */

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-seo/blob/1.3.1/src/Resources/SeoParamsResource.php#L35-L53
 */
export type SeoParamsType = {
  title: Nullable<string>;
  description: Nullable<string>;
  openGraph: {
    title: Nullable<string>;
    description: Nullable<string>;
    image: Nullable<string>;
  };
};

/** Banners */

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-banners/blob/1.4.2/src/Resources/BannerPublicResource.php
 */
export type BannerType = {
  id: number;
  title: Nullable<string>;
  text: Nullable<string>;
  image: Nullable<ThumbnailType>;
  buttonLabel: Nullable<string>;
  buttonLink: Nullable<string>;
  buttonIsNewTab: boolean;
};

/** Menus */

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-menus/blob/1.2/src/Jobs/GetMenuItemsTreeJob.php#L27-L33
 */
export type MenuItemType = {
  id: number;
  label: string;
  link: Nullable<string>;
  isNewTab: boolean;
  children: Array<MenuItemType>;
};

/** Settings */

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-settings/blob/1.5.3/src/Features/ViewSettingsFeature.php#L23-L26
 */
export interface SettingsItemCommon<Key extends string = string> {
  key: Key;
  value: any;
}

export interface SettingsItemString<Key extends string>
  extends SettingsItemCommon<Key> {
  value: Nullable<string>;
}

export interface SettingsItemNumber<Key extends string>
  extends SettingsItemCommon<Key> {
  value: Nullable<number>;
}

export interface SettingsItemImage<Key extends string>
  extends SettingsItemCommon<Key> {
  value: Nullable<ThumbnailType>;
}

export interface SettingsItemGallery<Key extends string>
  extends SettingsItemCommon<Key> {
  value: Array<ThumbnailType>;
}

/** Pages */

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-pages/blob/1.1.4/src/Resources/PageResource.php
 */
export type PageShortType = {
  id: number;
  path: string;
  template: Nullable<string>;
};

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-pages/blob/1.1.4/src/Resources/PageFullResource.php#L30-L34
 */
export type PageParentType = {
  id: number;
  title: string;
  path: string;
};

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-pages/blob/1.1.4/src/Resources/PageFullResource.php
 */
export interface PageFullType {
  id: number;
  title: string;
  path: string;
  parent: Nullable<PageParentType>;
  image: Nullable<ThumbnailType>;
  excerpt: Nullable<string>;
  body: Nullable<string>;
  seoParams: SeoParamsType;
  template: Nullable<string>;
  templateFields: Nullable<Record<string, any>>;
}
