import { FC, Ref, forwardRef } from "react";
import { StyledLinkedListText, StyledLinkedList, Box } from "../Stitches";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type Props = {
  value: string,
}

export const LinkedListWithoutRef: FC<Props> = ({ value }) => {
  const width = 30;
  const height = 30;
  return (
    <Box css={{ display: 'flex', placeItems: 'center', width: 100 }} >
      <StyledLinkedList>
        <StyledLinkedListText>{value}</StyledLinkedListText>
      </StyledLinkedList>
      <ArrowRightIcon width={width} height={height} />
    </Box>
  )
}

export const LinkedList = forwardRef(function LinkedListRef(props: Props, ref: Ref<HTMLDivElement>) {
  const width = 30;
  const height = 30;
  return (
    <Box ref={ref} css={{ display: 'flex', placeItems: 'center', width: 100 }} >
      <StyledLinkedList>
        <StyledLinkedListText>{props.value}</StyledLinkedListText>
      </StyledLinkedList>
      <ArrowRightIcon width={width} height={height} />
    </Box>
  )
});
