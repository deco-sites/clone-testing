import { App, AppContext as AC } from "deco/mod.ts";
import website, { Props as WebSiteProps } from "apps/website/mod.ts";

import manifest, { Manifest } from "../manifest.gen.ts";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Category {
  title: string;
  slug: string;
  icon: ImageWidget;
}

interface State {
  categories: Category[];
}


type WebsiteApp = ReturnType<typeof website>;

export type Props = State & WebSiteProps;

/**
 * @title Site
 * @description Start your site from a template or from scratch.
 * @category Tool
 * @logo https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8
 */
export default function Site(
  state: Props,
): App<Manifest, Props, [
  WebsiteApp,
]> {
  return {
    state,
    manifest,
    dependencies: [
      website(state),
    ],
  };
}

export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";
