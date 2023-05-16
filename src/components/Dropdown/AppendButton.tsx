import { Button } from "../Stitches/LinkedList";
import { FC } from "react";

type Props = {
  appendElement: () => void
}

export const AppendButton: FC<Props> = ({ appendElement }) => {
  return (
    <Button onClick={appendElement} > Append</Button >
  )

}
