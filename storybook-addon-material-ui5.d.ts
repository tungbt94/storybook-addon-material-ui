import {DecoratorFunction} from "@storybook/addons";
import {Theme} from "@mui/material/styles/createTheme";

export declare function muiTheme<T = {}>(arg?: Array<Theme>): DecoratorFunction<T>;
