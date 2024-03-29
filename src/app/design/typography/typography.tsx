import "@fontsource/fira-code"; // Defaults to weight 400.
import { FC } from "react";
import styled, { css } from "styled-components";
import {
  primary500,
  secondary500,
  secondary700,
  tertiary500,
} from "../colors/colors";
import * as colors from "../colors/colors";
import * as shades from "../colors/shades";
import { black, offBlack, white } from "../colors/shades";
import { TextColorProps } from "../types";
import {
  heading1Styles,
  heading2Styles,
  heading3Styles,
  heading4Styles,
} from "./styles/heading";
import { labelAltM, labelAltS } from "./styles/labels";

export const FontFamily = css`
  font-family: "Satoshi Variable";
  color: ${offBlack};
`;

const getColor = (color: TextColorProps["color"]) =>
  `${color}` in colors
    ? colors[color as keyof typeof colors]
    : shades[color as keyof typeof shades];

export const LabelAltMedium = styled.p<TextColorProps>`
  ${labelAltM()}
  ${({ color }) => color && `color: ${getColor(color)}`}
`;
export const LabelAltSmall = styled.p<TextColorProps>`
  ${labelAltS()}
  ${({ color }) => color && `color: ${getColor(color)}`}
`;

export const Heading1 = styled.h1`
  ${heading1Styles}
`;

export const Heading2 = styled.h2`
  ${heading2Styles}
`;

export const Heading3 = styled.h3`
  ${heading3Styles}
`;

export const Heading4 = styled.h4`
  ${heading4Styles}
`;

export const Span = styled.span`
  font-size: 16px;
`;

// type BodyProps = BodyStyleProps & PropsWithChildren;
/**
 * Body component
 * + renders a p tag
 * + accepts pre-defined styles from ./design/typography.
 */
// export const Body: FC<BodyProps> = ({ children, style }) => (
// 	<Paragraph style={style}>{children}</Paragraph>
// );

const StyledRichText = styled.div`
  p {
    font-size: 16px;
  }
  em {
    font-style: italic;
  }
  strong {
    font-weight: 700;
  }
`;

type RichTextProps = { richText: string };

/**
 * Rich Text component.
 */
export const RichText: FC<RichTextProps> = ({ richText }) => {
  return <StyledRichText dangerouslySetInnerHTML={{ __html: richText }} />;
};

type ColorBackgroundStyles = {
  color?: string;
  background?: string;
  padding?: number;
};

type TagBackgroundStyle =
  | "alert"
  | "success"
  | "glass"
  | "primary"
  | "secondary"
  | "tertiary";
type TagStyleProps = TagBackgroundStyle | ColorBackgroundStyles;

/**
 * Text tag styles.
 */
export const tagStyles = (props: TagStyleProps) => {
  const alert = css`
    background: ${primary500};
    color: ${white};
  `;

  const success = css`
    background: ${secondary500};
    color: ${black};
  `;

  const primary = css`
    background: ${primary500};
    color: ${white};
  `;

  const secondary = css`
    background: ${secondary700};
    color: ${white};
  `;

  const tertiary = css`
    background: ${tertiary500};
    color: ${white};
  `;

  if (props === "alert") return alert;
  if (props === "success") return success;
  if (props === "primary") return primary;
  if (props === "secondary") return secondary;
  if (props === "tertiary") return tertiary;
  return;
};
