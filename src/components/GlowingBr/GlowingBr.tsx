/**
 * @credits Glowing animated background by @VikramSansare
 * @see https://codepen.io/vikram-sansare/pen/ExVzZwv
 */

import { Container, ContainerProps, useTheme } from "@mui/material";

import React, { forwardRef } from "react"; // Add missing import statement
import "./Glowing.style.scss";

interface Props extends ContainerProps {
  children: React.ReactNode;
}

const GlowingBackground = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }: Props, ref) => {
    const theme = useTheme();
    return (
      <Container className="wrapper" ref={ref} {...props}>
        <Container className="glowing-container" disableGutters>
          <Container
            ref={ref}
            {...props}
            sx={{
              borderRadius: "5px",
              padding: "5px",
              background:
                theme.palette.mode === "dark"
                  ? theme.palette.primary.dark
                  : theme.palette.primary.light,
            }}
          >
            {children}
          </Container>
        </Container>
      </Container>
    );
  }
);

export default GlowingBackground;
