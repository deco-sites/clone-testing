import type { Props as MenuProps } from "../../islands/MenuIsland.tsx";
import Menu from "../../islands/MenuIsland.tsx";

// Structure

// Data of component
export interface Props {
    menu: MenuProps
}

// Return HTML
const Header = ({ menu }: Props) => {
    return (
        <Menu {...menu}  />
    )
}

// Export
export default Header;