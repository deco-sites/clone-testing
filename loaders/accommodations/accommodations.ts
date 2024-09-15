import { allowCorsFor } from "deco/mod.ts";

import { ImageWidget } from "apps/admin/widgets.ts";
import { AppContext } from "../../apps/site.ts";

interface Image {
    image: ImageWidget,
    alt?: string,
}

interface Accommodation {
    name: string;
    images: Image[];
    
    /**
     * @title Dynamic Option Category Loader
     * @format dynamic-options
     * @options site/loaders/categories/options.ts
     */
    category: string;
}

export interface Props {
    accommodations: Accommodation[];
}

const Loader = (_props: unknown, req: Request, ctx: AppContext) => {
    Object.entries(allowCorsFor(req)).map(([name, value]) => {
        ctx.response.headers.set(name, value);
    });

    return ctx.accommodations.map((accommodation) => ({ 
        name: accommodation.name,
        category: accommodation.category,
        images: accommodation.images   
    }));
}

export default Loader;