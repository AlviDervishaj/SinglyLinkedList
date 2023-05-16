import { FC } from "react";
import { Button } from "../Stitches/LinkedList";
import { RulerHorizontalIcon } from "@radix-ui/react-icons";
import { blue } from "@radix-ui/colors";

type Props = {
  getLength: () => void,
}

export const Length: FC<Props> = ({ getLength }) => {
  return (
    <Button variant={'white'} onClick={getLength}>
      <RulerHorizontalIcon width={25} height={25} color={blue.blue11} />
    </Button>
  )
}
