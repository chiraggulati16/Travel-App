import { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";

interface TabModel {
    name: string;
    icon: FC<SvgProps>;
    iconUnselected: FC<SvgProps>;
    component: () => React.JSX.Element
}

export type {TabModel}