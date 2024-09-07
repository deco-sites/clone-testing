import { ImageWidget } from "apps/admin/widgets.ts";
export interface Categories {
    categories: Category[];
}

interface Category {
    title: string;
    slug: string;
    icon: ImageWidget;
}

const Loader = ({ categories }: Categories): string[] => {
    let allCategoriesTitle:string[] = [];

    categories.forEach((category) => allCategoriesTitle.push(category.title));

    return allCategoriesTitle;
}

export default Loader;