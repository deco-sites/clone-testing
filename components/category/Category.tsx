import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

import AccommodationsResult from "../accommodation/AccommodationsResult.tsx";

import { useComponent } from "../../sections/Component.tsx";

export interface Props {
    categories: Category[];
    activeCategory?: string;
}

interface Category {
    title: string,
    slug: string,
    icon: ImageWidget
}

const Category = ({ categories, activeCategory }: Props) => {
    return (
        <div class="flex gap-3 mt-5" id="shelf-accommodations">
            <div>
                {
                    categories.map(( category ) => {
                        return (
                            <div>
                                <button 
                                    class="flex flex-col items-center justify-center"
                                    hx-get={useComponent( import.meta.url, { activeCategory: category.slug, categories })}
                                    hx-swap="outerHTML"
                                    hx-target="#shelf-accommodations"
                                >
                                    <Image src={category.icon} title={category.title} width={24} />
                                    <h3>{category.title}</h3>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <AccommodationsResult activeCategory={activeCategory} />
        </div>
    );
    
}

export default Category;