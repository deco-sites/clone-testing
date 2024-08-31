import type { Props as MenuProps } from "./Menu.tsx";
import Menu from "./Menu.tsx";

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