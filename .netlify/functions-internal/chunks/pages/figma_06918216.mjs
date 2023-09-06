/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../astro_355d63a0.mjs';
import { b as $$Layout, $ as $$Header, a as $$Footer } from './__6314d021.mjs';
import { useMemo } from 'react';
import { jsx } from 'preact/jsx-runtime';
import 'zod';
import 'nanostores';
import '@nanostores/persistent';
/* empty css                              */import './404_bb3f7cac.mjs';

const ONE = ({
  oNEOverflow,
  oNEFlexShrink,
  oNEWidth,
  oNEHeight,
  oNEWidth1,
  oNETop,
  oNELeft,
  oNEIconWidth,
  oNEIconHeight
}) => {
  const oNEStyle = useMemo(() => {
    return {
      overflow: oNEOverflow,
      flexShrink: oNEFlexShrink,
      width: oNEWidth,
      height: oNEHeight
    };
  }, [oNEOverflow, oNEFlexShrink, oNEWidth, oNEHeight]);
  const oNE1Style = useMemo(() => {
    return {
      width: oNEWidth1,
      top: oNETop,
      left: oNELeft
    };
  }, [oNEWidth1, oNETop, oNELeft]);
  const oNEIconStyle = useMemo(() => {
    return {
      width: oNEIconWidth,
      height: oNEIconHeight
    };
  }, [oNEIconWidth, oNEIconHeight]);
  return jsx("div", {
    className: "relative w-[100px] h-10",
    style: oNEStyle,
    children: jsx("div", {
      className: "absolute top-[0px] left-[0px] flex flex-col items-start justify-start",
      style: oNE1Style,
      children: jsx("img", {
        className: "relative w-[100px] h-10 object-cover",
        alt: "",
        src: "/one@2x.png",
        style: oNEIconStyle
      })
    })
  });
};

const $$Astro = createAstro();
const $$Figma = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Figma;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "{title}" })}${renderComponent($$result, "Header", $$Header, {})}${renderComponent($$result, "FigmaONE", ONE, {})}${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "/home/tony/Server/ONE/src/pages/figma.astro", void 0);

const $$file = "/home/tony/Server/ONE/src/pages/figma.astro";
const $$url = "/figma";

export { $$Figma as default, $$file as file, $$url as url };
