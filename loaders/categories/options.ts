import { allowCorsFor } from "deco/mod.ts";

import { ImageWidget } from "apps/admin/widgets.ts";
import { AppContext } from "../../apps/site.ts";

export interface Categories {
    categories: Category[];
}

interface Category {
    title: string;
    slug: string;
    icon: ImageWidget;
}

const Loader = (_props: unknown, req: Request, ctx: AppContext) => {
    Object.entries(allowCorsFor(req)).map(([name, value]) => {
        ctx.response.headers.set(name, value);
    });

    return ctx.categories.map((category) => ({ 
        value: category.title,
        label: category.title,
        image: category.icon
    }));
}

export default Loader;