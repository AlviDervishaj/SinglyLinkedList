import { Button } from "../Stitches/LinkedList";
import { FC } from "react";

type Props = {
  popElement: () => void;
}
export const PopButton: FC<Props> = ({ popElement }) => {
  return (
    <Button variant={'red'} onClick={popElement}>Pop</Button>
  )
}
