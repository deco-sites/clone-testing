export interface Props {
    name: string;
    
    /**
     * @title Dynamic Option Category Loader
     * @format dynamic-options
     * @options site/loaders/categories/options.ts
     */
    category: string;
}

const Accommodation = ({ name, category }: Props) => {
    return (
        <div>
            <h5>{name}</h5>
            <h6>{category}</h6>
        </div>
    );
}

export default Accommodation;