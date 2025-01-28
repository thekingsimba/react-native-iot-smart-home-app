import Svg from "react-native-svg";

export interface SvgCustomIcon {
    Root: typeof Svg;
    viewBox: string;
    width: string;
    height: string;
    path: JSX.Element;
}