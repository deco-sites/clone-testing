import { useSignal } from "@preact/signals";

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


// Structure

// Data of Section
export interface Props {
    hamburgerIcon: Image,
    userIcon: Image,
    primaryLinks: Link[],
    secondaryLinks: Link[]
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
const MenuIsland = ({ hamburgerIcon, userIcon, primaryLinks, secondaryLinks }: Props) => {
    const isShow = useSignal(false);

    return (
        <div>
            <div>
                <Image src={hamburgerIcon.image} width={16} alt={hamburgerIcon.alt} onClick={() => isShow.value = !isShow.value} />
                <Image src={userIcon.image} width={31} alt={userIcon.alt} onClick={() => isShow.value = !isShow.value} />
            </div>
            {
                isShow.value && (
                    <nav>
                        {
                            primaryLinks.map((link) => <a style={link.isBold ? 'font-weight: bold' : ''} href={link.url}>{link.text}</a>)
                        }
                        <hr></hr>
                        {
                            secondaryLinks.map((link) => <a href={link.url}>{link.text}</a>)
                        }
                    </nav>
                )
            }
        </div>
    )
}


// Export
export default MenuIsland;