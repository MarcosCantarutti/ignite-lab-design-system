import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create Account',
    },
    argTypes: {
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {};


// export const CustomComponent: StoryObj<ButtonProps> = {
//     args: {
//         asChild: true,
//         children: (
//             <p>Testeando 123</p>
//         )
//     },
//     argTypes: {
//         children: {
//             table: {
//                 disable: true,
//             }
//         },
//         asChild: {
//             table: {
//                 disable: true,
//             }
//         }
//     }
// };

