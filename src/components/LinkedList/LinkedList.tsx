import { FC, Ref, forwardRef } from "react";
import { StyledLinkedListText, StyledLinkedList, Box } from "../Stitches";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type Props = {
  value: string,
}

export const LinkedList: FC<Props> = ({ value }) => {
  const width = 30;
  const height = 30;
  return (
    <Box css={{ display: 'flex', placeItems: 'center', width: 100 }} >
      <StyledLinkedList>
        <StyledLinkedListText>{value}</StyledLinkedListText>
      </StyledLinkedList>
      {value !== "NULL" ? <ArrowRightIcon width={width} height={height} /> : null}
    </Box>
  )
}

export const LinkedListRef = forwardRef(function LinkedListRef(_, ref: Ref<HTMLDivElement>) {
  return (
    <Box ref={ref} css={{ display: 'flex', placeItems: 'center' }} >
      <LinkedList value={'NULL'} />
    </Box>
  )
});
