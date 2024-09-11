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
        <div class="mt-10 bg-[purple] text-white rounded-lg w-[200px] mx-auto p-3" id="menu-wrapper">
            <h2 class="text-center">HTMX Example</h2>
            <div
                hx-target="#menu-wrapper"
                hx-swap="outerHTML"
                hx-get={useComponent( import.meta.url, { hamburgerIcon, userIcon, primaryLinks, secondaryLinks, isOpen: !isOpen })}
            >
                <Image src={hamburgerIcon.image} width={16} alt={hamburgerIcon.alt} />
                <Image src={userIcon.image} width={31} alt={userIcon.alt} />
            </div>
           
            { isOpen && <nav>
                {
                    primaryLinks.map((link) => <a style={link.isBold ? 'font-weight: bold' : ''} href={link.url}>{link.text}</a>)
                }
                <hr></hr>
                {
                    secondaryLinks.map((link) => <a href={link.url}>{link.text}</a>)
                }
            </nav> }
            
        </div>
    )
}

// Export
export default MenuHtmx;