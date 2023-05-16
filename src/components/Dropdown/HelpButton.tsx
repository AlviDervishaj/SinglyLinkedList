import { Popover } from "../Popover";
import { FC } from "react";
import { Box, PopoverFlex, PopoverText } from "../Stitches";
import { PopoverArrow, PopoverClose, Text } from "../Stitches/Popover";
import { Li, Ul } from "../Stitches/App";
import { Cross2Icon } from "@radix-ui/react-icons";

export const HelpButton: FC = () => {
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
          <Li>Append adds a new element at the end list.</Li>
          <Li>Prepend adds a new element at the beginning of the list.</Li>
          <Li>Peek highlights the head element of the list.</Li>
          <Li>Peek Index highlights an element at a given index.</Li>
          <Li>Length get the length of the list.</Li>
          <Li>Pop removes the last element of the list.</Li>
          <Li>Pop Index removes an element at a given index.</Li>
        </Ul>
      </PopoverFlex>
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
      <PopoverArrow />
    </Popover>
  )
}
