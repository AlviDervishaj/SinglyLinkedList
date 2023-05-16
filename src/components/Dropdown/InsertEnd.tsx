import { ArrowRightIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../Stitches/LinkedList";
import { FC } from "react";

type Props = {
  appendElement: () => void
}

export const InsertEnd: FC<Props> = ({ appendElement }) => {
  return (
    <Button onClick={appendElement} >
      <ArrowRightIcon width={20} height={20} />
      <PlusCircledIcon width={20} height={20} />
    </Button >
  )
}
