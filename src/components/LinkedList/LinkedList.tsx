import { FC, Ref, forwardRef } from "react";
import { StyledLinkedListText, StyledLinkedList, Box } from "../Stitches";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Node } from "../../utils/LinkedList";

type Props = {
  linkedList: Node<string>,
}

export const LinkedList: FC<Props> = ({ linkedList }) => {
  const width = 30;
  const height = 30;
  return (
    <Box css={{ display: 'flex', placeItems: 'center' }} >
      <StyledLinkedList>
        <StyledLinkedListText>{linkedList._value}</StyledLinkedListText>
      </StyledLinkedList>
      {linkedList._value !== "NULL" ? <ArrowRightIcon width={width} height={height} /> : null}
    </Box>
  )
}

export const LinkedListRef = forwardRef(function LinkedListRef(_, ref: Ref<HTMLDivElement>) {
  const newNode: Node<string> = new Node('NULL', null)
  return (
    <Box ref={ref} css={{ display: 'flex', placeItems: 'center' }} >
      <LinkedList linkedList={newNode} />
    </Box>
  )
});
