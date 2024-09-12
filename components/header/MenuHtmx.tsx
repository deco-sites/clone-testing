import { useComponent } from "../../sections/Component.tsx";

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


// Structure

// Data of Section
export interface Props {
    hamburgerIcon: Image,
    userIcon: Image,
    primaryLinks: Link[],
    secondaryLinks: Link[],
    isOpen?: boolean;
}

interface Image {
    image: ImageWidget,
    alt?: string
}

interface Link {
    text: string,
    url: string,
    isBold: boolean
}

// Return HTML
const MenuHtmx = ({ hamburgerIcon, userIcon, primaryLinks, secondaryLinks, isOpen = false }: Props) => {
    return (
        <div class="rounded-lg mx-auto" id="menu-wrapper">
            <div
                class="flex items-center justify-center rounded-[2rem] w-[85px] gap-4 border border-[rgb(221, 221, 221)] h-[48px]"
                hx-target="#menu-wrapper"
                hx-swap="outerHTML"
                hx-get={useComponent( import.meta.url, { hamburgerIcon, userIcon, primaryLinks, secondaryLinks, isOpen: !isOpen })}
            >
                <Image src={hamburgerIcon.image} width={16} alt={hamburgerIcon.alt} />
                <Image src={userIcon.image} width={31} alt={userIcon.alt} />
            </div>
           
            { isOpen && <nav class="absolute w-[240px] right-0 border border-[rgb(221, 221, 221)] p-3 rounded-[1rem] mt-[15px]">
                {
                    primaryLinks.map((link) => <a style={link.isBold ? 'font-weight: bold' : ''} class="w-[100%] h-[36px] flex items-center" href={link.url}>{link.text}</a>)
                }
                <hr></hr>
                {
                    secondaryLinks.map((link) => <a class="w-[100%] h-[36px] flex items-center" href={link.url}>{link.text}</a>)
                }
            </nav> }
            
        </div>
    )
}

// Export
export default MenuHtmx;