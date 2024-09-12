import type { Props as CenteredLinksProps } from "./CenteredLinks.tsx";
import CenteredLinks from "./CenteredLinks.tsx";

import type { Props as LogoProps } from "./Logo.tsx";
import Logo from "./Logo.tsx";

import type { Props as RightButtonsProps } from "./RightButtons.tsx";
import RightButtons from "./RightButtons.tsx";

// Structure

// Data of component
export interface Props {
    logo: LogoProps
    centeredLinks: CenteredLinksProps,
    rightButtons: RightButtonsProps
}

// Return HTML
const Header = ({ centeredLinks, logo, rightButtons }: Props) => {
    return (
        <div class="w-[90%] mx-auto relative">
            <div class="flex justify-between items-center h-[80px]">
                <Logo {...logo} />
                <CenteredLinks {...centeredLinks} />
                <RightButtons {...rightButtons} />
            </div>
        </div>
    )
}

// Export
export default Header;