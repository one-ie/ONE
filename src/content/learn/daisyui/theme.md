# Colors

Learn how to use daisyUI colors in your project.

## Introduction

DaisyUI is fully theme-able and colorable. Instead of using constant color utility classes like `bg-green-500`, `bg-orange-600`, and `bg-blue-700`, it's suggested to use semantic color utility classes like `bg-primary`, `bg-secondary`, and `bg-accent`. Each color name contains CSS variables, and daisyUI themes apply color values to the utility classes.

## Benefits

Semantic color names make more sense, and they make theming easier. You can define specific color palettes with names like `primary`, `secondary`, etc., and use them consistently in your interfaces.

## List of daisyUI color names

You can use these color names in your theme or utility classes. Here are some examples:

- `bg-primary`: Primary color
- `bg-secondary`: Secondary color
- `bg-accent`: Accent color
- `bg-neutral`: Neutral color
- `bg-base-100`: Base color of the page
- `bg-info`: Info color
- `bg-success`: Success color
- `bg-warning`: Warning color
- `bg-error`: Error color

## How to use

Some daisyUI components come with modifier class names that apply a color. For example:

```html
<button class="btn btn-primary">Button</button>
```

| Color name + description                                                 | Example use                        | Required or optional for themes |
| ------------------------------------------------------------------------ | ---------------------------------- | ------------------------------- |
| **primary** Primary color                                                | Class name: `bg-primary`           | required                        |
| **primary-content** Foreground content color to use on primary color     | Class name: `bg-primary-content`   | optional                        |
| **secondary** Secondary color                                            | Class name: `bg-secondary`         | required                        |
| **secondary-content** Foreground content color to use on secondary color | Class name: `bg-secondary-content` | optional                        |
| **accent** Accent color                                                  | Class name: `bg-accent`            | required                        |
| **accent-content** Foreground content color to use on accent color       | Class name: `bg-accent-content`    | optional                        |
| **neutral** Neutral color                                                | Class name: `bg-neutral`           | required                        |
| **neutral-content** Foreground content color to use on neutral color     | Class name: `bg-neutral-content`   | optional                        |
| **base-100** Base color of page, used for blank backgrounds              | Class name: `bg-base-100`          | required                        |
| **base-200** Base color, a little darker                                 | Class name: `bg-base-200`          | optional                        |
| **base-300** Base color, even more darker                                | Class name: `bg-base-300`          | optional                        |
| **base-content** Foreground content color to use on base color           | Class name: `bg-base-content`      | optional                        |
| **info** Info color                                                      | Class name: `bg-info`              | optional                        |
| **info-content** Foreground content color to use on info color           | Class name: `bg-info-content`      | optional                        |
| **success** Success color                                                | Class name: `bg-success`           | optional                        |
| **success-content** Foreground content color to use on success color     | Class name: `bg-success-content`   | optional                        |
| **warning** Warning color                                                | Class name: `bg-warning`           | optional                        |
| **warning-content** Foreground content color to use on warning color     | Class name: `bg-warning-content`   | optional                        |
| **error** Error color                                                    | Class name: `bg-error`             | optional                        |
| **error-content** Foreground content color to use on error color         | Class name: `bg-error-content`     | optional                        |

When daisyUI mentions using color names in utility classes, it means you can apply color styles directly to HTML elements using class names.

For example, bg-{COLOR_NAME} allows you to set the background color of an element. If {COLOR_NAME} is primary, using bg-primary in your class attribute will apply the primary color from your theme as the background color.

Similarly, other classes like text-{COLOR_NAME} or border-{COLOR_NAME} change the text color and border color, respectively. This approach simplifies styling by allowing you to define colors in your theme and then apply them across your website using these utility classes.
 Here's a breakdown of what each class does:

1. **bg-{COLOR_NAME}**: Sets the background color of an element. For example, `bg-red-500` would apply a medium red background.

2. **to-{COLOR_NAME}**: Used in gradient color stops. It defines the ending color of a gradient.

3. **via-{COLOR_NAME}**: Also for gradients, it specifies the middle color in a gradient (used in multi-color gradients).

4. **from-{COLOR_NAME}**: Defines the starting color of a gradient.

5. **text-{COLOR_NAME}**: Changes the text color of an element.

6. **ring-{COLOR_NAME}**: Applies a colored ring (outline) around an element. Useful for focus states or highlighting.

7. **fill-{COLOR_NAME}**: Used for SVGs, it sets the fill color of the SVG.

8. **caret-{COLOR_NAME}**: Changes the color of the text input caret (the blinking cursor).

9. **stroke-{COLOR_NAME}**: For SVGs, it sets the stroke (outline) color.

10. **border-{COLOR_NAME}**: Sets the color of an element's border.

11. **divide-{COLOR_NAME}**: When using flexbox or grid, it colors the dividers between items.

12. **accent-{COLOR_NAME}**: Sets the accent color (used in form controls, scrollbars, etc.).

13. **shadow-{COLOR_NAME}**: Applies a shadow of the specified color to an element.

14. **outline-{COLOR_NAME}**: Sets the color of the outline that appears when the element is focused (usually for accessibility).

15. **decoration-{COLOR_NAME}**: Applies to text decoration color (like underlines).

16. **placeholder-{COLOR_NAME}**: Changes the color of placeholder text in inputs.

17. **ring-offset-{COLOR_NAME}**: Used with `ring-{COLOR_NAME}`, it sets the color of the space between the ring and the element's border.

These classes enable rapid, responsive design directly in your HTML, making it easier to maintain a consistent theme and style across your site.