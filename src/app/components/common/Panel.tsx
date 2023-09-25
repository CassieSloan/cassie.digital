import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import * as colors from "../../design/colors/colors";
import { getPaddingStyles, PaddingProps } from "../../design/spacing";

export type BackgroundColor = keyof typeof colors;

const getBackground = (color: BackgroundColor) => colors[color];

type BorderRadius = "32px" | "24px" | "16px" | "12px" | "8px" | "0px";
const getBorderRadiusStyles = (borderRadius: BorderRadius) => css`
  border-radius: ${borderRadius};
`;

type PanelRootProps = {
  background?: BackgroundColor;
  borderRadius?: BorderRadius;
} & PaddingProps;

const PanelRoot = styled.div<PanelRootProps>`
  position: relative;
  ${(props) => getBorderRadiusStyles(props.borderRadius || "32px")}
  overflow: hidden;
  transform: translateZ(0);
  & > * {
    z-index: 1;
  }

  ${(props) => props.background && getBackground(props.background)};
  ${(props) => getPaddingStyles(props.padding)}
`;

export type PanelProps = PanelRootProps & { className?: string };
/**
 * Renders panel.
 */
export const Panel: FC<PropsWithChildren<PanelProps>> = ({
  background,
  children,
  className,
  ...panelProps
}) => {
  return (
    <PanelRoot className={className} background={background} {...panelProps}>
      {children}
    </PanelRoot>
  );
};
