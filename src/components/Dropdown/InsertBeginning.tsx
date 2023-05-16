import { FC } from "react";
import { Button } from "../Stitches/LinkedList";
import { ArrowRightIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { green } from "@radix-ui/colors";

type Props = {
  insertBeginning: () => void,
}

export const InsertBeginning: FC<Props> = ({ insertBeginning }) => {
  return (
    <Button onClick={insertBeginning}>
      <PlusCircledIcon width={20} height={20} color={green.green11} />
      <ArrowRightIcon width={20} height={20} color={green.green11} /> &nbsp;
    </Button>
  )
}
