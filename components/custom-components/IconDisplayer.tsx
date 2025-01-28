import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Icon } from '../ui/icon';
import { SvgCustomIcon } from '@/models/models';

type SizeValues = "sm" | "md" | "lg" | "xl" | "2xs" | "xs"

interface IconDisplayProps {
    svgIcon: SvgCustomIcon;
    size: SizeValues;
    style: string;
};

interface IconShowcaseProps {
    svgIcon: SvgCustomIcon;
    color: string;
    width: string;
    height: string;
};

const IconDisplay = ({ svgIcon, size, style }: IconDisplayProps) => {
    const CustomIcon = createIcon(svgIcon);
    return (<Icon as={CustomIcon} size={size} className={style} />);
}

const IconShowcase = ({ svgIcon, color, width, height }: IconShowcaseProps) => {
    const { Root, viewBox, path, } = svgIcon;

    return (
        <Root viewBox={viewBox} width={width} height={height} color={color}>
            {path}
        </Root>
    );
};

export default IconShowcase;
