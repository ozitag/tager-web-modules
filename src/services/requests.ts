import { request, ResponseBody } from '@tager/web-core';

import {
  BannerType,
  MenuItemType,
  PageFullType,
  PageShortType,
  SeoParamsType,
  SettingsItemCommon,
} from '../typings/models';

/** Tager Modules */

/** Settings */

export function getSettingItemList<
  SettingItemType extends SettingsItemCommon = SettingsItemCommon
>(): Promise<ResponseBody<Array<SettingItemType>>> {
  return request.get({ path: '/tager/settings' });
}

/** Seo */

export function getSeoParamsByAlias(
  alias: string
): Promise<ResponseBody<SeoParamsType>> {
  return request.get({ path: `/tager/seo/${alias}` });
}

/** Banners */

export function getBannerListByAlias(
  bannerAlias: string
): Promise<ResponseBody<Array<BannerType>>> {
  return request.get({ path: `/tager/market-boards/${bannerAlias}` });
}

/** Menus */

export function getMenuItemListByAlias(
  menuAlias: string
): Promise<ResponseBody<Array<MenuItemType>>> {
  return request.get({ path: `/tager/menu/${menuAlias}` });
}

/** Pages */

export function getPageList(): Promise<ResponseBody<Array<PageShortType>>> {
  return request.get({ path: '/tager/pages' });
}

export function getPageByPath<Page extends PageFullType = PageFullType>(
  pagePath: string
): Promise<ResponseBody<Page>> {
  return request.get({ path: `/tager/pages/view?path=${pagePath}` });
}
