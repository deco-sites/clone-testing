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

    const changeVisibleState = () => { isShow.value = !isShow.value; }

    return (
        <div class="mt-10 bg-[blue] text-white rounded-lg w-[200px] mx-auto p-3">
            <h2 class="text-center">Island</h2>
            <div>
                <Image src={hamburgerIcon.image} width={16} alt={hamburgerIcon.alt} onClick={() => changeVisibleState()} />
                <Image src={userIcon.image} width={31} alt={userIcon.alt} onClick={() => changeVisibleState()} />
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