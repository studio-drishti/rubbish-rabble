import { Container, ContainerProps } from "@chakra-ui/react";
import * as React from "react";

interface ContentContainerProps extends ContainerProps {
  children: React.ReactNode;
}

export const ContentContainer = (props: ContentContainerProps): JSX.Element => (
  <Container {...props} maxW="1200px" paddingX={[4]} />
);
