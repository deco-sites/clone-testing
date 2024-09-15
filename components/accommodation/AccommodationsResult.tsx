export interface Props {
    activeCategory?: string;
}

const AccommodationsResult = ({ activeCategory }: Props) => {
    console.log(activeCategory);

    return (
        <div>
            <h1>Categoria Ativa: {activeCategory && activeCategory}</h1>
        </div>
    )
}

export default AccommodationsResult;