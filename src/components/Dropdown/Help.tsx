import { Popover } from "../Popover";
import { FC } from "react";
import { Box, PopoverFlex, PopoverText } from "../Stitches";
import { PopoverArrow, PopoverClose, Text } from "../Stitches/Popover";
import { Li, Ul } from "../Stitches/App";
import { ArrowRightIcon, Cross2Icon, CrossCircledIcon, PlusCircledIcon, RulerHorizontalIcon } from "@radix-ui/react-icons";
import { blue, green, red } from "@radix-ui/colors";

export const Help: FC = () => {
  return (
    <Popover text="info" variant="blue">
      <PopoverFlex css={{ flexDirection: 'column', gap: 10 }}>
        <PopoverText css={{ marginBottom: 10 }}>Singly Linked List Visualization</PopoverText>
        <Box css={{ fontWeight: "400", letterSpacing: 1, wordBreak: 'break-word', wordSpacing: 5 }}>
          <Text css={{ display: 'inline', fontWeight: "400", letterSpacing: 1, wordBreak: 'break-word', wordSpacing: 5 }}>
            Below you can see a Singly Linked List visualized.
            A singly linked list is a type of linked list that is
            unidirectional, that is, it can be traversed in only
            one direction from head to the last node (tail).
          </Text>
        </Box>
        <PopoverText css={{ marginBottom: 10 }}>Feedback</PopoverText>
        <Box css={{ fontWeight: "400", letterSpacing: 1, wordBreak: 'break-word', wordSpacing: 5 }}>
          <Text css={{ display: 'inline', fontWeight: "400", letterSpacing: 1, wordBreak: 'break-word', wordSpacing: 5 }}>
            Any messages will appear in the box above where Linked List is displayed.
          </Text>
        </Box>
        <PopoverText css={{ marginTop: 10 }}>How To Use</PopoverText>
        <Ul>
          <Li>
            <ArrowRightIcon width={20} height={20} color={green.green11} />
            <PlusCircledIcon width={20} height={20} color={green.green11} /> &nbsp;
            Adds a new element at the end list.
          </Li>
          <Li>
            <PlusCircledIcon width={20} height={20} color={green.green11} />
            <ArrowRightIcon width={20} height={20} color={green.green11} /> &nbsp;
            Adds a new element at the beginning of the list.
          </Li>
          <Li>
            <RulerHorizontalIcon width={20} height={20} color={blue.blue11} />
            &nbsp;
            Displays the length of the list.
          </Li>
          <Li>
            <CrossCircledIcon width={20} height={20} color={red.red11} />
            <ArrowRightIcon width={20} height={20} color={red.red11} /> &nbsp;
            Removes an element based on the given index.
          </Li>
          <Li>
            <ArrowRightIcon width={20} height={20} color={red.red11} />
            <CrossCircledIcon width={20} height={20} color={red.red11} /> &nbsp;
            Removes the last element on the list.
          </Li>
        </Ul>
      </PopoverFlex>
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
      <PopoverArrow />
    </Popover>
  )
}
