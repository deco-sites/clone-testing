import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

// Structure

// Data of Section (Props)
interface Props {
    image: ImageWidget;
    alt?: string;
}

// Return of HTML
const Logo = ({ image, alt }: Props) => {
    return (
        <div>
            <Image src={image} width={100} alt={alt ? alt : ''} />
        </div>
    )
}

// Export
export default Logo;