import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

import type { Props as MenuHtmxProps } from "./MenuHtmx.tsx";
import MenuHtmx from "./MenuHtmx.tsx";

export interface Props {
    links: Link[],
    menuHtmx: MenuHtmxProps
}

interface Link {
    title?: string,
    icon?: ImageWidget,
    url?: string
}

const RightButtons = ( {links, menuHtmx }: Props) => {
    return (
        <div>
            { 
                links.map((link) => <a href={link.url && link.url}>
                    {link.title && link.title} 
                    {link.icon && <Image src={link.icon} width={16} /> }
                </a>)
            }
            <MenuHtmx {...menuHtmx} />
        </div>
    )
}

export default RightButtons;