import { ArrowRightIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../Stitches/LinkedList";
import { FC } from "react";
import { red } from "@radix-ui/colors";

type Props = {
  removeLast: () => void;
}
export const RemoveLast: FC<Props> = ({ removeLast }) => {
  return (
    <Button variant={'red'} onClick={removeLast}>
      <ArrowRightIcon width={20} height={20} color={red.red11} />
      <CrossCircledIcon width={20} height={20} color={red.red11} />
    </Button>
  )
}
