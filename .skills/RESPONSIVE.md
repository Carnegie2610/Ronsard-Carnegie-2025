# SKILL: Responsive Frontend Architecture (Bytecode-003)

## Objective
To create fluid, mobile-first interfaces that adapt to any screen size without layout shifts (CLS), using Tailwind CSS 4 and modern CSS logic.

## 1. The "Meeting" JSON Metadata (Header)
Every responsive component must include this specialized metadata:
/**
 * @meeting {
 *   "component": "[Name]",
 *   "skill_ref": "Bytecode-003",
 *   "responsive_strategy": "Mobile-First",
 *   "breakpoints_used": ["sm", "md", "lg"],
 *   "layout_type": "Grid | Flex | Fluid"
 * }
 */

## 2. Responsive Rules (The Bytecode)
1. **Mobile-First Default**: Write classes for mobile first. Use prefix modifiers (`md:`, `lg:`) only to add complexity for larger screens. 
   - *Bad:* `w-[1000px] md:w-[300px]`
   - *Good:* `w-full md:max-w-4xl`
2. **Fluid Scaling**: Avoid fixed pixel widths (`px`). Use:
   - `rem` for typography and spacing.
   - `%` or `vw/vh` for containers.
   - `clamp(min, preferred, max)` for typography that scales smoothly.
3. **Container Strategy**: 
   - Use a central `max-w-7xl mx-auto px-4` wrapper for page sections.
   - Use `aspect-ratio` for images to prevent layout shifts while loading.
4. **Interactive Zones**: Ensure touch targets are at least `44px` on mobile (`h-11` or `h-12` in Tailwind).

## 3. Tailwind 4 Implementation Patterns
- **Flexbox**: Use `flex flex-col md:flex-row` for stacked-to-side layouts.
- **Grid**: Use `grid grid-cols-1 md:grid-cols-12` for complex magazine-style layouts.
- **Gap Control**: Use `gap-4 md:gap-8` to increase white space on larger displays.
- **Visibility**: Use `hidden md:block` or `block md:hidden` sparingly. Prefer layout rearrangement over hiding content.

## 4. Maintenance Logic
- If a component requires more than 5 media query overrides, it must be broken down into a "MobileVersion" and "DesktopVersion" inside the same folder to keep logic clean.
- Use the `cn()` utility to merge conditional responsive classes.

## 5. Implementation Step-by-Step
When I ask to "Implement Responsive [X]":
1. Analyze the layout for Mobile (375px), Tablet (768px), and Desktop (1440px).
2. Generate the @meeting JSON header.
3. Write the HTML structure using semantic tags (`section`, `article`, `aside`).
4. Apply Tailwind 4 utility classes following the Mobile-First rule.
5. Verify accessibility (aria-labels for mobile menus).

## 6. Advanced Responsive Logic (The 2025 Standard)

### A. The "Safe Area" Rule
- **Logic**: Always account for "Notches" on modern phones (iPhone/Android).
- **Implementation**: Use `env(safe-area-inset-...)` or Tailwind's `pb-[safe]` classes for fixed elements like bottom navbars or headers.
- *Example*: `pb-(safe-bottom)` ensures content isn't hidden by the home indicator.

### B. Dynamic Viewport Units (The "Address Bar" Fix)
- **Logic**: Traditional `100vh` is broken on mobile because of the browser address bar.
- **Implementation**: Use `h-dvh` (Dynamic Viewport Height) for full-screen hero sections. 
- *Rule*: Never use `h-screen`; always use `h-dvh` to prevent jumping layouts.

### C. Hover vs. Touch Strategy
- **Logic**: Desktops have hovers; phones do not. Sticky hover states on mobile look like bugs.
- **Implementation**: Wrap hover effects in the `@media (hover: hover)` media query.
- *Tailwind 4*: Use the `hover:bg-blue-500` only if combined with a check that the device supports hover, or keep hover effects subtle.

### D. Image Art Direction
- **Logic**: Large images shouldn't just "shrink" on mobile; they should change.
- **Implementation**: Use the `sizes` attribute in `next/image`.
- *Bytecode Rule*: Every image must have: `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`.

### E. Typography Fluidity (The "Clamp" Method)
- **Logic**: Instead of changing font sizes at every breakpoint, use fluid scaling.
- **Implementation**: 
  - `text-[clamp(1.5rem,5vw,3rem)]`
  - This allows the text to grow smoothly between 1.5rem and 3rem based on the width, reducing the need for `md:text-4xl` etc.

### F. Performance & Layout Shift (CLS)
- **Logic**: Content should never "jump" when images load.
- **Implementation**: Always provide an `aspect-ratio` or a skeleton loader for mobile containers.

## 7. The "Global & Accessible" Logic (Strategic Bytecode)

### G. i18n-Ready Layouts (Internationalization)
- **Logic**: Text length changes between languages (e.g., German is longer than English).
- **Rule**: Never use fixed `width` on buttons or text containers. Use `min-width` or `inline-block` with `padding`.
- **Mirroring**: Use Logical Properties instead of physical ones:
  - Use `ps` (padding-start) instead of `pl` (padding-left).
  - Use `me` (margin-end) instead of `mr` (margin-right).
  - *Why?* This ensures that if you add a Right-to-Left (RTL) language later, the layout doesn't break.

### H. Container Queries (@container)
- **Logic**: Components should respond to the size of their **parent container**, not just the whole screen.
- **Implementation**: 
  - Use `container-type: inline-size` on a parent wrapper.
  - Use `cqw` units or `@container` blocks for components that live in sidebars AND main grids.
- *Rule*: Use this for "Project Cards" so they look good whether they are in a 3-column grid or a 1-column sidebar.

### I. Prefers-Reduced-Motion (UX Logic)
- **Logic**: Some users get motion sickness from parallax or heavy transitions.
- **Rule**: All responsive transitions must be wrapped in a check for reduced motion.
- **Tailwind 4**: Use the `motion-safe:` and `motion-reduce:` modifiers.
- *Example*: `motion-safe:hover:scale-105` (Only scales if the user hasn't disabled animations).

### J. Dark/Light Mode Responsive Contrast
- **Logic**: Colors that work on a large monitor in light mode might be unreadable on a small phone in dark mode.
- **Rule**: Use the `dark:` modifier specifically for mobile-only borders or shadows to maintain "depth" on small OLED screens.

### K. The "Skeleton" State (Layout Stability)
- **Logic**: Responsive sites often "jump" as fonts and images load (Cumulative Layout Shift).
- **Rule**: Every responsive component must have a "Skeleton" version that matches its mobile/desktop height exactly.