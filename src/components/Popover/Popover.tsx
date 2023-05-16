import { Portal, Root, Trigger } from "@radix-ui/react-popover";
import { FC, ReactNode } from "react";
import { Fieldset, Input, Label, PopoverArrow, PopoverClose, PopoverContent, PopoverFlex, PopoverText, Text } from "../Stitches";
import { Cross2Icon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../Stitches/LinkedList";

type Props = {
  children?: ReactNode,
  text?: string,
  variant?: "green" | "white" | "red" | "blue",
}

export const Popover: FC<Props> = ({ children, text, variant }) => {
  const checkText = () => {
    if (!text) return 'Remove Index';
    switch (text.toLowerCase()) {
      case 'info':
        return <InfoCircledIcon color="black" width="20" height="20" />
      default:
        return text;
    }
  }
  return (
    <Root>
      <Trigger asChild>
        <Button variant={variant ? variant : 'red'}>{checkText()}</Button>
      </Trigger>
      <Portal>
        <PopoverContent sideOffset={5} align="end">
            {children}
        </PopoverContent>
      </Portal>
    </Root>
  )
}
