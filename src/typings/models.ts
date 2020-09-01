import { Nullable } from '@tager/web-core';

/**
 * Reference:
 * https://github.com/Ozerich/laravel-filestorage-db/blob/0.3.8/src/Models/File.php#L144-L174
 */
export type ThumbnailType = {
  readonly url: Nullable<string>;
  readonly url_2x?: Nullable<string>;
  readonly url_webp?: Nullable<string>;
  readonly url_webp_2x?: Nullable<string>;
};

export type ResizedThumbnailType<
  Size extends string,
  ThumbnailField extends keyof ThumbnailType = keyof ThumbnailType
> = { readonly [key in Size]: Nullable<Pick<ThumbnailType, ThumbnailField>> };

/** Seo */

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-seo/blob/1.3.1/src/Resources/SeoParamsResource.php#L35-L53
 */
export type SeoParamsType = {
  readonly title: Nullable<string>;
  readonly description: Nullable<string>;
  readonly openGraph: {
    readonly title: Nullable<string>;
    readonly description: Nullable<string>;
    readonly image: Nullable<string>;
  };
};

/** Banners */

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-banners/blob/1.4.2/src/Resources/BannerPublicResource.php
 */
export type BannerType = {
  readonly id: number;
  readonly title: Nullable<string>;
  readonly text: Nullable<string>;
  readonly image: Nullable<ThumbnailType>;
  readonly buttonLabel: Nullable<string>;
  readonly buttonLink: Nullable<string>;
  readonly buttonIsNewTab: boolean;
};

/** Menus */

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-menus/blob/1.2/src/Jobs/GetMenuItemsTreeJob.php#L27-L33
 */
export type MenuItemType = {
  readonly id: number;
  readonly label: string;
  readonly link: Nullable<string>;
  readonly isNewTab: boolean;
  readonly children: Array<MenuItemType>;
};

/** Settings */

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-settings/blob/1.5.3/src/Features/ViewSettingsFeature.php#L23-L26
 */
export interface SettingsItemCommon<Key extends string = string> {
  readonly key: Key;
  readonly value: any;
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
  readonly id: number;
  readonly path: string;
  readonly template: Nullable<string>;
};

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-pages/blob/1.1.4/src/Resources/PageFullResource.php#L30-L34
 */
export type PageParentType = {
  readonly id: number;
  readonly title: string;
  readonly path: string;
};

/**
 * Reference:
 * https://github.com/ozitag/tager-backend-pages/blob/1.1.4/src/Resources/PageFullResource.php
 */
export interface PageFullType {
  readonly id: number;
  readonly title: string;
  readonly path: string;
  readonly parent: Nullable<PageParentType>;
  readonly image: Nullable<ThumbnailType>;
  readonly excerpt: Nullable<string>;
  readonly body: Nullable<string>;
  readonly seoParams: SeoParamsType;
  readonly template: Nullable<string>;
  readonly templateFields: Nullable<Record<string, any>>;
}
