# MASTER SKILL: Portfolio Component Blueprint (Bytecode-v2)

## 1. THE "MEETING" PROTOCOL
- **Header Required**: Every file starts with the JSDoc @meeting JSON block.
- **Goal**: Maintain 2025 tech standards (Next.js 15, Tailwind 4).

## 2. IDENTITY SOURCE OF TRUTH (DJOUMESSI RONSARD CARNEGIE)
- **Name**: DJOUMESSI Ronsard Carnegie.
- **Mission**: Transforming digital visions into reality with innovative and custom-made solutions.
- **Specialties**: Expertise in building AI models, beautiful Frontend, and scalable software architecture.
- **Location**: Buea, Cameroun | UTC / GMT.
- **Copyright**: © 2026 DJOUMESSI Ronsard Carnegie.

## 3. THE VISUAL SPECTROGRAM (From Screenshot)
- **Background**: Deep Obsidian/Black (#050505) with a subtle, dark-gray grid overlay pattern.
- **Social Icons**: Circular outline style (1px border), centered icons (GitHub, LinkedIn, Twitter).
- **Icons**: Lucide-React (Mail, MapPin, Clock, Building). Size: 18px.
- **Dividers**: Thin horizontal rule (#1F2937) separating the main content from the bottom bar.

## 4. FOOTER ARCHITECTURE WALKTHROUGH
### A. Top Content (3-Column Grid)
1. **Column 1 (Identity)**:
   - Profile: Circular Avatar image + Name in Bold White.
   - Bio: The Mission Statement text (max-width for readability).
   - Socials: Row of circular bordered icons.
2. **Column 2 (Quick Links)**:
   - Header: "Quick Links" in Bold White.
   - List: Clean vertical stack of links with hover color shift.
3. **Column 3 (Contact Info)**:
   - Header: "Contact" in Bold White.
   - Items: Flex row with Icon (Blue-ish tint or White) + Text.

### B. Bottom Bar (Flex-Between)
- **Left Side**: Copyright text.
- **Right Side**: "Designed & Built with 🧡love🧡 and passion" in muted italics or clean sans.

## 5. RESPONSIVE BYTECODE (Execution Rules)
- **Mobile**: Single column stack. Center-align all text and social icons.
- **Tablet**: 2 columns (Identity on left, Links/Contact on right).
- **Desktop**: 3 columns as per screenshot layout.
- **Fluidity**: Use `max-w-7xl mx-auto` for the container. Use `py-16` for vertical breathing room.
- **Interaction**: Social icons should scale or change border-color on hover.

## 6. MAINTENANCE RULES
- **No Hardcoding**: Use the Identity section above for all strings.
- **Clean Code**:  Use standard Tailwind 4 grid/flex.