export interface Props {
    links: Link[];
}

interface Link {
    title: string,
    id: string
}

const CenteredLinks = ({ links }: Props) => {
    return (
        <div class="flex gap-8">
        {
            
            links.map((link) => <div>{link.title}</div>)
        }
        </div>
    )
}

export default CenteredLinks;