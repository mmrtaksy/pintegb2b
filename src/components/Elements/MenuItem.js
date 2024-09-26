import { Link, Tooltip } from "@nextui-org/react";
import { ArrowDown } from "react-feather";


export const MenuItem = ({ istooltip = false, isActive = false, isArrow = false, link, icon: Icon, tooltipText }) => {
    return (
        istooltip ? (
            <Link color={isActive ? 'orange' : 'foreground'} href={link}>
                <Tooltip showArrow={true} content={tooltipText} placement="bottom">
                    <Icon />
                </Tooltip>
            </Link>
        ) : (
            isArrow ? (
                <div className={`flex flex-col justify-center items-center ` + isActive ? 'orange' : 'foreground'}>
                    <div className="flex flex-wrap justify-center items-center">
                        <Icon />
                        <ArrowDown color="orange" size={15} />
                    </div>
                    <span className="text-sm font-normal">{tooltipText}</span>
                </div>
            ) : (
                <Link color={isActive ? 'warning' : 'foreground'} href={link}>
                    <div className="flex flex-col justify-center items-center">
                        <Icon />
                        <span className="text-sm font-normal">{tooltipText}</span>
                    </div>
                </Link>
            )

        )
    );
};
