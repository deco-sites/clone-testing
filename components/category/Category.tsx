import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
    categories: Category[];
}

interface Category {
    title: string,
    slug: string,
    icon: ImageWidget
}

const Category = ({ categories }: Props) => {
    return (
        <div class="flex gap-3 mt-5">
        {
            categories.map(( category ) => {
                return (
                    <div class="flex flex-col items-center justify-center">
                        <Image src={category.icon} title={category.title} width={24} />
                        <h3>{category.title}</h3>
                    </div>
                )
            })
        }
        </div>
    );
    
}

export default Category;