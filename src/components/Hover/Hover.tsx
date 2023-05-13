import { Portal, Root, Trigger } from "@radix-ui/react-hover-card";
import { FC } from "react";
import { Flex, HoverCardContent, HoverCardArrow, ImgContainer, Img, Text } from "../Stitches";

export const Hover: FC = () => {
  return (
    <Root>
      <Trigger asChild>
        <ImgContainer>
          <Img src="./src/assets/search-64.png" alt="Help" />
        </ImgContainer>
      </Trigger>
      <Portal>
        <HoverCardContent sideOffset={6}>
          <Flex css={{ flexDirection: 'column', gap: 1 }}>
            <Text>Hello World</Text>
          </Flex>
          <HoverCardArrow />
        </HoverCardContent>
      </Portal>
    </Root>
  )
}
