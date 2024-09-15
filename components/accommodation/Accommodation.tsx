import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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

const Accommodation = ({ accommodations }: Props) => {
    return (
        <div>
            {
                accommodations.map((accommodation) => <div>
                    {
                        accommodation.images.map((image)=> <Image src={image.image} width={271} height={257} />)
                    }

                    <h5>{accommodation.name}</h5>
                    <h6>{accommodation.category}</h6>
                </div>
                )
            }
            
        </div>
    );
}

export default Accommodation;