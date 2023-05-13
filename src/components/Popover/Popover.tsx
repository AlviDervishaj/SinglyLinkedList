import { Portal, Root, Trigger } from "@radix-ui/react-popover";
import { FC, ReactNode } from "react";
import { Fieldset, Input, Label, PopoverArrow, PopoverClose, PopoverContent, PopoverFlex, PopoverText, Text } from "../Stitches";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../Stitches/LinkedList";

type Props = {
  children?: ReactNode,
  text?: string,
  variant?: "green" | "white" | "red" | "blue",
}

export const Popover: FC<Props> = ({ children, text, variant }) => {
  return (
    <Root>
      <Trigger asChild>
        <Button variant={variant ? variant : 'red'}>{text ? text : 'Remove Index'}</Button>
      </Trigger>
      <Portal>
        <PopoverContent sideOffset={5}>
          {children ? children :
            <>
              <PopoverFlex css={{ flexDirection: 'column', gap: 10 }}>
                <PopoverText css={{ marginBottom: 10 }}>Remove an Element</PopoverText>
                <Text>
                  Enter the index of an element you want to remove.
                </Text>
                <Fieldset>
                  <Label htmlFor="index">Index</Label>
                  <Input id="index" defaultValue="0" />
                </Fieldset>
              </PopoverFlex>
              <PopoverClose aria-label="Close">
                <Cross2Icon />
              </PopoverClose>
              <PopoverArrow />
            </>
          }
        </PopoverContent>
      </Portal>
    </Root>
  )
}
