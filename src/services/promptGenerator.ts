/**
 * Prompt generator for AI image processing services
 */

interface StyleConfig {
  styleID: string;
  name: string;
  prompt: string;
  styleJson: string;
}

const STYLES: Record<string, StyleConfig> = {
  "flat-01": {
    styleID: "flat-01",
    name: "Anime Default",
    prompt: "turn this into a cinematic cartoon style animation with a flat 2d presentation - no perspective Similar to South Park",
    styleJson:
      `<prompt>
  <style>South Park animation</style>
  <characters>
    <description>Original cartoon characters with the distinct South Park aesthetic</description>
    <features>
      <head>Oversized, round or oval shaped</head>
      <body>Small, simplistic, paper cut-out appearance</body>
      <limbs>Simple stick-like arms and legs</limbs>
      <faces>Minimalist features with basic eyes, small mouth, simple expressions</faces>
      <proportions>Exaggerated head-to-body ratio typical of South Park</proportions>
    </features>
    <clothing>Simple, flat colored outfits with minimal detail</clothing>
  </characters>
  <artStyle>
    <technique>Flat, cut-out paper animation look</technique>
    <colors>Bright, solid colors with minimal to no shading</colors>
    <linework>Simple black outlines</linework>
    <animation>Slightly crude, simplistic movements if animated</animation>
  </artStyle>
  <background>
    <importance>Minimal, simple background elements only</importance>
    <elements>Basic environmental indicators without elaborate detail</elements>
  </background>
  <restrictions>
    <avoid>Any copyrighted Pixar characters or specific locations</avoid>
    <avoid>Adding additional Characters that are not in the original image</avoid>
  </restrictions>
</prompt>`
  },
  "3d-animation-02": {
    styleID: "3d-animation-02",
    name: "Pixar 3D",
    prompt: "transform this into a high-quality 3D animation style similar to Pixar films with expressive characters and cinematic lighting. Only add characters that are in the original image.",
    styleJson: `<prompt>
  <style>Pixar animation</style>
  <characters>
    <description>Original cartoon characters with the distinct Pixar aesthetic</description>
    <features>
      <head>Slightly exaggerated proportions with expressive features</head>
      <body>Well-defined, believable anatomy with stylized proportions</body>
      <eyes>Large, expressive with detailed irises and reflective highlights</eyes>
      <skin>Subtle texturing with soft subsurface scattering effect</skin>
      <hair>Volumetric, physics-based appearance with natural movement</hair>
    </features>
    <expressions>Highly emotive, capable of nuanced feelings</expressions>
    <clothing>Detailed fabric with realistic folds, textures and light interaction</clothing>
  </characters>
  <artStyle>
    <technique>3D computer animation with physically-based rendering</technique>
    <lighting>Cinematic lighting with soft shadows and color theory</lighting>
    <colors>Rich color palette with vibrant but believable tones</colors>
    <rendering>Slightly stylized realism with attention to surface details</rendering>
    <animation>Squash and stretch principles with weight and momentum</animation>
  </artStyle>
  <background>
    <lighting>Complementary to foreground characters</lighting>
  </background>
  <restrictions>
    <avoid>Any copyrighted Pixar characters or specific locations</avoid>
    <avoid>Adding additional Characters that are not in the original image</avoid>
  </restrictions>
</prompt>
`
  },
  "cartoon-03": {
    styleID: "cartoon-03",
    name: "Family Guy Style",
    prompt: "transform this into a 2D cartoon animation style similar to Family Guy. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
  <style>Family Guy animation</style>
  <characters>
    <description>Original cartoon characters with the distinct Family Guy aesthetic</description>
    <features>
      <head>Round with prominent chin, oval or circular eyes</head>
      <body>Simple, somewhat bulbous torso with thin limbs</body>
      <eyes>Large, white oval eyes with black outlines, small pupils</eyes>
      <nose>Simple, often just a curved line or small bump</nose>
      <mouth>Wide, highly elastic for exaggerated expressions</mouth>
      <proportions>Exaggerated with oversized heads and simplified anatomy</proportions>
    </features>
    <expressions>Highly exaggerated, often deadpan or overly dramatic</expressions>
    <clothing>Simple, flat colored outfits with minimal shading and basic details</clothing>
  </characters>
  <artStyle>
    <technique>2D animation with clean lines and flat coloring</technique>
    <colors>Bright, saturated colors with minimal gradients</colors>
    <linework>Bold, consistent black outlines</linework>
    <animation>Snappy, often sudden movements if animated</animation>
    <style>Clean, cartoonish with minimal texture</style>
  </artStyle>
  <background>
    <importance>Minimal, simple background elements only</importance>
    <elements>Basic room interiors or simple outdoor scenes</elements>
    <style>Flat colors with minimal detail or depth</style>
  </background>
  <restrictions>
    <avoid>Any copyrighted Family Guy characters or specific locations</avoid>
    <avoid>Adding additional Characters that are not in the original image</avoid>
  </restrictions>
</prompt>
`
  },
  "disney-04": {
    styleID: "disney-04",
    name: "Classic Disney",
    prompt: "transform this into a traditional hand-drawn animation style similar to classic Disney. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
  <style>Classic Disney animation</style>
  <characters>
    <description>Original cartoon characters with the distinct classic Disney aesthetic</description>
    <features>
      <head>Round, appealing with large expressive eyes</head>
      <body>Fluid, graceful proportions with natural movement</body>
      <eyes>Large, expressive with detailed irises and eyelashes</eyes>
      <faces>Soft, appealing features with emphasized expressions</faces>
      <proportions>Slightly stylized but anatomically believable</proportions>
      <movement>Flowing, smooth with exaggerated squash and stretch</movement>
    </features>
    <expressions>Warm, emotive with a full range of emotions</expressions>
    <clothing>Detailed period-appropriate attire with natural folds and movement</clothing>
  </characters>
  <artStyle>
    <technique>Traditional hand-drawn animation appearance</technique>
    <colors>Rich, watercolor-inspired palette with soft transitions</colors>
    <linework>Clean, confident ink lines with varying thickness</linework>
    <animation>Fluid, graceful movements with the 12 principles of animation</animation>
    <shading>Soft gradient shadows with ambient occlusion</shading>
  </artStyle>
  <background>
    <importance>Minimal, simple supporting elements</importance>
    <elements>Suggested painterly environment with atmospheric perspective</elements>
    <style>Watercolor-inspired with soft edges and color harmony</style>
  </background>
  <restrictions>
    <avoid>Adding additional Characters that are not in the original image</avoid>
  </restrictions>
</prompt>
`
  },
  "ghibli-05": {
    styleID: "ghibli-05",
    name: "Studio Ghibli",
    prompt: "transform this into a hand-painted animation style similar to Studio Ghibli films. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
  <style>Studio Ghibli animation</style>
  <characters>
    <description>Original characters with the distinctive Ghibli aesthetic</description>
    <features>
      <face>Rounded with simple but expressive features, soft lines</face>
      <eyes>Large, detailed eyes with defined highlights and reflections</eyes>
      <hair>Flowing, detailed with individual strands but not over-rendered</hair>
      <body>Naturalistic proportions with slight stylization</body>
      <movement>Fluid, graceful with attention to weight and physics</movement>
    </features>
    <expressions>Subtle, nuanced emotional range with attention to micro-expressions</expressions>
    <clothing>Detailed fabrics with natural draping, often flowing in the wind</clothing>
  </characters>
  <artStyle>
    <technique>Hand-drawn appearance with watercolor-like textures</technique>
    <colors>Soft, natural palette with emphasis on greens, blues and earth tones</colors>
    <linework>Delicate, varied line weight with hand-painted appearance</linework>
    <lighting>Soft, diffused with attention to atmospheric perspective</lighting>
    <textures>Subtle watercolor washes and painterly details</textures>
  </artStyle>
  <mood>
    <feeling>Peaceful, contemplative, nostalgic</feeling>
    <atmosphere>Sense of wonder and connection to nature</atmosphere>
  </mood>
  <restrictions>
    <avoid>Adding additional Characters that are not in the original image</avoid>
  </restrictions>
</prompt>
`
  },
  "modern-anime-06": {
    styleID: "modern-anime-06",
    name: "Modern Anime",
    prompt: "transform this into a contemporary high-quality anime style with detailed characters. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
  <style>Modern Anime</style>
  <characters>
    <description>Original characters with contemporary anime aesthetic</description>
    <features>
      <face>Angular jawlines with defined features, balance of realism and stylization</face>
      <eyes>Large, highly detailed with multiple highlights, reflections, and color gradients</eyes>
      <hair>Voluminous with complex coloring, shading, and individual strand detail</hair>
      <body>Realistic proportions with slight stylization, detailed anatomy</body>
      <skin>Smooth with subtle shading and occasional blush effects</skin>
    </features>
    <expressions>Dynamic and emotionally intense with exaggerated reaction potential</expressions>
    <clothing>
      <detail>High detail with realistic folds, textures, and material properties</detail>
      <style>Contemporary fashion with intricate accessories and layering</style>
      <shading>Multiple light sources with proper shadowing and material reflection</shading>
    </clothing>
  </characters>
  <artStyle>
    <technique>Digital painting with crisp linework and detailed coloring</technique>
    <colors>Vibrant palette with high contrast and color theory application</colors>
    <linework>Clean, varied weight lines with selective emphasis</linework>
    <shading>Cel-shading with additional gradient work for depth</shading>
    <effects>Selective bloom, lens flares, and particle effects</effects>
    <composition>Dynamic camera angles and perspective</composition>
  </artStyle>
  <background>
    <importance>Minimal but with atmospheric elements</importance>
    <elements>Suggested urban or natural setting with depth cues</elements>
    <style>Blurred or simplified detail to focus on characters</style>
    <lighting>Dramatic lighting with emphasis on character illumination</lighting>
  </background>
  <postProcessing>
    <effects>Subtle color grading, vignetting, and atmospheric effects</effects>
    <quality>High resolution with clean anti-aliasing</quality>
  </postProcessing>
  <restrictions>
    <avoid>Adding additional Characters that are not in the original image</avoid>
  </restrictions>
</prompt>
`
  },
  "simpsons-07": {
    styleID: "simpsons-07",
    name: "The Simpsons Style",
    prompt: "transform this into a 2D cartoon animation style similar to The Simpsons with bright yellow skin and bold outlines. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
  <style>The Simpsons animation</style>
  <characters>
    <description>Original cartoon characters with the distinctive Simpsons aesthetic</description>
    <features>
      <skin>Bright yellow (or other vivid colors for non-human characters)</skin>
      <eyes>Large, round white eyes with black pupils</eyes>
      <head>Overbite with prominent upper lip, large circular head</head>
      <hair>Simple shapes with solid colors, often spiky or distinctive silhouettes</hair>
      <body>Four fingers on each hand, simplified anatomy</body>
      <proportions>Exaggerated head-to-body ratio, simplified limbs</proportions>
    </features>
    <expressions>Highly elastic faces capable of extreme expressions</expressions>
    <clothing>Simple, flat colored outfits with minimal detail and consistent colors</clothing>
  </characters>
  <artStyle>
    <technique>2D animation with bold outlines and flat coloring</technique>
    <colors>Vibrant, highly saturated colors with no gradients</colors>
    <linework>Thick, consistent black outlines for all elements</linework>
    <animation>Somewhat limited range of motion if animated</animation>
    <style>Clean, cartoonish with absolutely no textures</style>
  </artStyle>
  <background>
    <importance>Minimal, simplified background elements only</importance>
    <elements>Basic interiors or simple outdoor scenes with flat colors</elements>
    <style>Flat, solid color blocks with minimal detail or shading</style>
    <perspective>Simple perspective with minimal depth</perspective>
  </background>
  <restrictions>
    <avoid>Adding additional Characters that are not in the original image</avoid>
  </restrictions>
</prompt>
`
  },
  "avatar-08": {
    styleID: "avatar-08",
    name: "Avatar Style",
    prompt: "transform this into an animation style similar to Avatar: The Last Airbender with expressive characters and Asian-influenced designs. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
  <style>Avatar: The Last Airbender animation</style>
  <characters>
    <description>Original characters with the distinctive Avatar series aesthetic</description>
    <features>
      <face>Expressive with anime influence but Western cartoon proportions</face>
      <eyes>Almond-shaped, larger than realistic but not overly exaggerated</eyes>
      <noses>Small, often just a simple line or subtle triangle</noses>
      <mouths>Highly expressive, capable of exaggerated emotions</mouths>
      <body>Athletic, slightly stylized proportions with defined musculature</body>
      <hands>Detailed with five fingers, more realistic than many cartoons</hands>
    </features>
    <expressions>Dynamic range from subtle to highly exaggerated</expressions>
    <clothing>
      <style>Asian-influenced designs with detailed cultural elements</style>
      <colors>Natural earth tones with occasional vibrant accent colors</colors>
      <details>Distinctive patterns and cultural motifs</details>
    </clothing>
    <movement>Fluid, martial-arts inspired poses with dynamic action lines</movement>
  </characters>
  <artStyle>
    <technique>2D animation with clean linework and subtle shading</technique>
    <colors>Rich, natural palette with environmental color theory</colors>
    <linework>Clean, precise outlines with varied weight for emphasis</linework>
    <shading>Subtle cel-shading with limited gradients</shading>
    <influences>Blend of anime and Western animation techniques</influences>
  </artStyle>
  <background>
    <importance>Minimal but with cultural Asian-inspired elements</importance>
    <elements>Simplified natural environments or architectural details</elements>
    <style>Painterly backgrounds with more detail than characters</style>
  </background>
  <elemental>
    <effects>Optional subtle suggestion of elemental powers (air, water, earth, fire)</effects>
    <style>Flowing, dynamic energy without specific bending forms</style>
  </elemental>
  <restrictions>
    <avoid>Adding additional Characters that are not in the original image</avoid>
  </restrictions>
</prompt>
`
  },
  "slice-of-life-09": {
    styleID: "slice-of-life-09",
    name: "Warm Slice-of-Life",
    prompt: "transform this into a warm, welcoming anime-cartoon style with clean lines, soft colors and a cozy atmosphere. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
  <style>Warm Slice-of-Life Illustration</style>
  <characters>
    <description>Character with warm, welcoming appearance in gentle anime-cartoon hybrid style</description>
    <features>
      <face>Heart-shaped with soft jawline and cheerful expression</face>
      <eyes>Large, expressive oval eyes with defined eyelashes and subtle highlights</eyes>
      <eyebrows>Thin, simple curved lines</eyebrows>
      <nose>Simple small line or subtle triangle</nose>
      <mouth>Clean-lined, cheerful open smile with visible teeth</mouth>
      <hair>Flowing, wavy with defined sections and subtle highlights</hair>
      <skin>Warm peachy tone with minimal shading</skin>
    </features>
    <expressions>Friendly, genuine smile with slightly open mouth</expressions>
    <clothing>Simple, comfortable hoodie with drawstrings and minimal detail</clothing>
  </characters>
  <artStyle>
    <technique>Digital animation with clean, precise linework</technique>
    <colors>
      <palette>Warm amber and honey tones with soft greens and cream accents</palette>
      <character>Medium brown hair, warm peachy skin, cream/off-white clothing</character>
      <background>Warm golden tones with soft focus and minimal details</background>
    </colors>
    <linework>Clean black outlines with consistent medium thickness</linework>
    <shading>Minimal, subtle cell shading with soft highlights</shading>
    <lighting>Warm, diffused indoor lighting creating a cozy atmosphere</lighting>
    <style>Clean, appealing anime-influenced cartoon style</style>
  </artStyle>
  <composition>
    <framing>Centered character with balanced background elements</framing>
    <depth>Character in sharp focus, background softly blurred</depth>
    <proportions>Slightly stylized with balanced facial proportions</proportions>
  </composition>
  <mood>
    <feeling>Warm, welcoming, cheerful, approachable</feeling>
    <atmosphere>Cozy, peaceful, comfortable home environment</atmosphere>
  </mood>
  <restrictions>
    <avoid>Adding additional Characters that are not in the original image</avoid>
  </restrictions>
</prompt>
`
  },
  // Additional styles to be added later:
  //new styles 
  // New styles
  "anime-default-001": {
    styleID: "anime-default-001",
    name: "Anime Default",
    prompt: "transform this into a contemporary high-quality anime style with detailed characters and dynamic composition. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
    <style>Modern Anime</style>
    <characters>
      <description>Original characters with contemporary anime aesthetic</description>
      <features>
        <face>Angular jawlines with defined features, balance of realism and stylization</face>
        <eyes>Large, highly detailed with multiple highlights, reflections, and color gradients</eyes>
        <hair>Voluminous with complex coloring, shading, and individual strand detail</hair>
        <body>Realistic proportions with slight stylization, detailed anatomy</body>
        <skin>Smooth with subtle shading and occasional blush effects</skin>
      </features>
      <expressions>Dynamic and emotionally intense with exaggerated reaction potential</expressions>
      <clothing>
        <detail>High detail with realistic folds, textures, and material properties</detail>
        <style>Contemporary fashion with intricate accessories and layering</style>
        <shading>Multiple light sources with proper shadowing and material reflection</shading>
      </clothing>
    </characters>
    <artStyle>
      <technique>Digital painting with crisp linework and detailed coloring</technique>
      <colors>Vibrant palette with high contrast and color theory application</colors>
      <linework>Clean, varied weight lines with selective emphasis</linework>
      <shading>Cel-shading with additional gradient work for depth</shading>
      <effects>Selective bloom, lens flares, and particle effects</effects>
      <composition>Dynamic camera angles and perspective</composition>
    </artStyle>
    <background>
      <style>Blurred or simplified detail to focus on characters</style>
      <lighting>Dramatic lighting with emphasis on character illumination</lighting>
    </background>
    <postProcessing>
      <effects>Subtle color grading, vignetting, and atmospheric effects</effects>
      <quality>High resolution with clean anti-aliasing</quality>
    </postProcessing>
    <restrictions>
      <avoid>Adding additional Characters that are not in the original image</avoid>
    </restrictions>
  </prompt>`
  },
  "ghibli-inspired-002": {
    styleID: "ghibli-inspired-002",
    name: "Studio Ghibli",
    prompt: "transform this into a hand-painted animation style similar to Studio Ghibli films with soft colors and painterly textures. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
    <style>Studio Ghibli animation</style>
    <characters>
      <description>Original characters with the distinctive Ghibli aesthetic</description>
      <features>
        <face>Rounded with simple but expressive features, soft lines</face>
        <eyes>Large, detailed eyes with defined highlights and reflections</eyes>
        <hair>Flowing, detailed with individual strands but not over-rendered</hair>
        <body>Naturalistic proportions with slight stylization</body>
        <movement>Fluid, graceful with attention to weight and physics</movement>
      </features>
      <expressions>Subtle, nuanced emotional range with attention to micro-expressions</expressions>
      <clothing>Detailed fabrics with natural draping, often flowing in the wind</clothing>
    </characters>
    <artStyle>
      <technique>Hand-drawn appearance with watercolor-like textures</technique>
      <colors>Soft, natural palette with emphasis on greens, blues and earth tones</colors>
      <linework>Delicate, varied line weight with hand-painted appearance</linework>
      <lighting>Soft, diffused with attention to atmospheric perspective</lighting>
      <textures>Subtle watercolor washes and painterly details</textures>
    </artStyle>
    <background>
      <style>Impressionistic, painterly with attention to natural beauty</style>
    </background>
    <mood>
      <feeling>Peaceful, contemplative, nostalgic</feeling>
      <atmosphere>Sense of wonder and connection to nature</atmosphere>
    </mood>
    <restrictions>
      <avoid>Adding additional Characters that are not in the original image</avoid>
    </restrictions>
  </prompt>`
  },
  "onepiece-007": {
    styleID: "onepiece-007",
    name: "One Piece Style",
    prompt: "transform this into a One Piece style anime with exaggerated proportions and dynamic expressions. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
    <style>One Piece animation</style>
    <characters>
      <description>Original characters with One Piece aesthetic</description>
      <features>
        <eyes>Small to medium, often with distinctive shapes for important characters</eyes>
        <eyebrows>Highly expressive, often exaggerated during emotional moments</eyebrows>
        <mouths>Wide range from tiny to extremely large during emotional scenes</mouths>
        <noses>Distinctive and varied (from button noses to long, angular shapes)</noses>
        <hair>Wildly varied styles with impossible gravity-defying shapes and colors</hair>
        <proportions>Extremely exaggerated - tiny waists, broad shoulders, large hands</proportions>
      </features>
      <expressions>Over-the-top emotional reactions, comical tears, bulging veins</expressions>
      <clothing>
        <folds>Simple but dynamic, emphasizing movement</folds>
        <materials>Flat colors with minimal texture detail</materials>
        <accessories>Distinctive, character-defining items with bold shapes</accessories>
      </clothing>
    </characters>
    <artStyle>
      <technique>Bold, varied thickness with emphasis on character silhouettes</technique>
      <colors>Bold, vibrant colors with high saturation (blues, reds, yellows, greens)</colors>
      <linework>Dynamic lines with exaggerated curves and angles</linework>
      <shading>Simplified, dramatic shadows with minimal gradients</shading>
      <effects>Freeze frames for impact, speed lines, dramatic poses</effects>
    </artStyle>
    <background>
      <style>Exaggerated landscapes, tropical settings, dramatic skies</style>
      <lighting>High contrast with dramatic shadows and highlights</lighting>
      <colorGrading>Bright and punchy with strong color differentiation</colorGrading>
    </background>
    <restrictions>
      <avoid>Adding additional Characters that are not in the original image</avoid>
    </restrictions>
  </prompt>`
  },
  "naruto-009": {
    styleID: "naruto-009",
    name: "Naruto Style",
    prompt: "transform this into a Naruto style anime with distinctive character designs and dynamic action poses. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
    <style>Naruto animation</style>
    <characters>
      <description>Original characters with Naruto aesthetic</description>
      <features>
        <eyes>Large, expressive with distinct pupil shapes (especially for doujutsu)</eyes>
        <eyebrows>Thin but expressive, often furrowed during conflict</eyebrows>
        <mouths>Simple lines that expand dramatically during emotional outbursts</mouths>
        <noses>Minimal, often just a short line or small triangle</noses>
        <hair>Spiky, gravity-defying styles with distinctive silhouettes</hair>
        <proportions>Athletic builds with exaggerated poses during action</proportions>
      </features>
      <expressions>Intense close-ups on eyes, dramatic pose freezes</expressions>
      <clothing>
        <folds>Dynamic with flowing movement during action sequences</folds>
        <materials>Simplified ninja gear, headbands, mesh undershirts</materials>
        <accessories>Distinctive clan symbols, weapon pouches, scrolls, ninja tools</accessories>
      </clothing>
    </characters>
    <artStyle>
      <technique>Sharp, clean lines with thickness variation for impact</technique>
      <colors>Earth tones with vibrant accents (oranges, blues, greens, reds)</colors>
      <linework>Angular with speed lines during action sequences</linework>
      <shading>Flat cell shading with occasional gradient for special effects</shading>
      <effects>Flashbacks with monochrome or sepia effects, hand signs in sequence</effects>
    </artStyle>
    <background>
      <style>Blend of traditional Japanese scenery and fantasy elements</style>
      <lighting>Dynamic with chakra-based glows and dramatic shadows during battles</lighting>
      <colorGrading>Semi-muted with sharp contrasts during emotional or action moments</colorGrading>
    </background>
    <restrictions>
      <avoid>Adding additional Characters that are not in the original image</avoid>
    </restrictions>
  </prompt>`
  },
  "shonen-dynamic-005": {
    styleID: "shonen-dynamic-005",
    name: "Shonen Action",
    prompt: "transform this into a dynamic shonen action style anime with intense expressions and energetic composition. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
    <style>Shonen Action Animation</style>
    <characters>
      <description>Original characters with shonen action aesthetic</description>
      <features>
        <eyes>Determined, intense with dramatic highlights during emotional moments</eyes>
        <eyebrows>Thick, expressive, often furrowed in concentration or anger</eyebrows>
        <mouths>Range from gritted teeth to wide battle cries</mouths>
        <noses>Simple but defined, especially in profile shots</noses>
        <hair>Distinctive, gravity-defying styles that may change color during power-ups</hair>
        <proportions>Athletic to muscular builds with heroic stances</proportions>
      </features>
      <expressions>Power-up sequences, training montages, rival staredowns</expressions>
      <clothing>
        <folds>Dynamic with dramatic billowing during power-ups or movement</folds>
        <materials>Durable battle gear, training uniforms, or school clothes with personal flair</materials>
        <accessories>Power-indicating items, weapons, or symbolic accessories that represent character growth</accessories>
      </clothing>
    </characters>
    <artStyle>
      <technique>Strong, confident lines with variable thickness for emphasis</technique>
      <colors>Bold primary colors with high contrast (reds, blues, yellows)</colors>
      <linework>Dynamic with motion lines and impact frames</linework>
      <shading>Bold shadows that emphasize musculature and power poses</shading>
      <effects>Visible battle auras, dramatic tears of determination, gritted teeth</effects>
    </artStyle>
    <background>
      <style>Dynamic environments that emphasize action and scale</style>
      <lighting>Dramatic with energy auras, power effects, and impact flashes</lighting>
      <colorGrading>Vibrant with heightened saturation during key battle moments</colorGrading>
    </background>
    <restrictions>
      <avoid>Adding additional Characters that are not in the original image</avoid>
    </restrictions>
  </prompt>`
  },
  "dragonball-008": {
    styleID: "dragonball-008",
    name: "Dragon Ball Z",
    prompt: "transform this into a Dragon Ball Z style anime with bold outlines, dramatic power-ups, and exaggerated musculature. ITS IMPORTANT TO ONLY ADD CHARACTERS THAT ARE IN THE ORIGINAL IMAGE. NO COPYRIGHTED CHARACTERS!",
    styleJson: `<prompt>
    <style>Dragon Ball Z animation</style>
    <characters>
      <description>Original characters with Dragon Ball Z aesthetic</description>
      <features>
        <eyes>Small, determined with white highlights during intense moments</eyes>
        <eyebrows>Expressive, often absent during major transformations</eyebrows>
        <mouths>Simple but highly expressive during screaming power-ups</mouths>
        <noses>Minimal, often just a simple line or dot</noses>
        <hair>Distinctive spiky styles that change color and grow during transformations</hair>
        <proportions>Exaggerated musculature with impossible physiques during power-ups</proportions>
      </features>
      <expressions>Long power-up sequences, charging attacks, muscle flexing</expressions>
      <clothing>
        <folds>Dramatic with billowing martial arts clothing during power-ups and movement</folds>
        <materials>Training uniforms, battle armor with distinct color blocking</materials>
        <accessories>Weighted training gear, scanning devices, powerful accessories, power limiters</accessories>
      </clothing>
    </characters>
    <artStyle>
      <technique>Bold, confident lines with emphasis on muscular definition</technique>
      <colors>Vibrant, high-contrast colors (orange-blue for protagonists, purple-pink for antagonists)</colors>
      <linework>Dynamic with distinctive roundness to forms typical of 80s-90s manga style</linework>
      <shading>Strong muscle definition with dramatic shadows during power-ups</shading>
      <effects>Extended battle cries, world-shaking power demonstrations</effects>
    </artStyle>
    <background>
      <style>Dramatic landscapes with crater impacts and energy disruptions</style>
      <lighting>Intense auras, energy effects, and power-up luminescence</lighting>
      <colorGrading>Bold with dramatic shifts during transformations</colorGrading>
    </background>
    <restrictions>
      <avoid>Adding additional Characters that are not in the original image</avoid>
    </restrictions>
  </prompt>`
  },
  "vangogh-101": {
    styleID: "vangogh-101",
    name: "Van Gogh's Starry Night",
    prompt: "Transform this into Van Gogh's Starry Night style with swirling, impasto brushstrokes and vibrant blues and yellows. Maintain the original composition while applying Van Gogh's distinctive night sky technique.",
    styleJson: `<prompt>
    <style>Van Gogh's Starry Night</style>
    <artStyle>
      <technique>Thick, visible brushstrokes with impasto application showing texture and movement</technique>
      <colors>Bold blues, deep violets, bright yellows and glowing oranges with high contrast</colors>
      <linework>Dynamic, swirling strokes creating movement and energy</linework>
      <lighting>Dramatic contrast between dark blue-violet shadows and radiant yellow-white highlights</lighting>
      <textures>Thick, textured paint creating a sense of visual rhythm and movement</textures>
    </artStyle>
    <composition>
      <elements>Swirling, turbulent skies with celestial bodies appearing to vibrate with energy</elements>
      <perspective>Slightly elevated viewpoint with dreamlike spatial relations</perspective>
      <focus>Emphasis on sky elements with distinctive swirling patterns</focus>
    </composition>
    <mood>
      <feeling>Dramatic, emotional, transcendent</feeling>
      <atmosphere>Magical night ambiance with cosmic energy</atmosphere>
    </mood>
    <restrictions>
      <maintain>Original composition structure while applying the distinctive style</maintain>
    </restrictions>
  </prompt>`
  },

  "vangogh-102": {
    styleID: "vangogh-102",
    name: "Van Gogh's Self Portrait",
    prompt: "Transform this using Van Gogh's self-portrait style with bold, expressive brushwork, intense color, and psychological depth. Apply the distinctive complementary color palette and visible brushstrokes characteristic of his portraits.",
    styleJson: `<prompt>
    <style>Van Gogh's Self Portrait</style>
    <artStyle>
      <technique>Vigorous, distinct brushstrokes revealing emotional intensity and texture</technique>
      <colors>Striking complementary colors - blues against oranges, greens against reds with heightened intensity</colors>
      <linework>Bold, directional strokes that follow facial contours and create movement</linework>
      <lighting>Sharp contrasts and illuminated features against darker backgrounds</lighting>
      <textures>Thick, layered paint application creating surface texture and dimension</textures>
    </artStyle>
    <portraiture>
      <features>Exaggerated, emotionally expressive features with penetrating gaze</features>
      <expression>Psychological intensity and inner emotional state made visible</expression>
      <background>Swirling, animated backgrounds that echo the emotional state</background>
    </portraiture>
    <mood>
      <feeling>Introspective, psychologically intense, melancholic</feeling>
      <atmosphere>Intimate, revealing inner turmoil or contemplation</atmosphere>
    </mood>
    <restrictions>
      <maintain>Subject's core identity while expressing psychological depth</maintain>
    </restrictions>
  </prompt>`
  },

  "picasso-103": {
    styleID: "picasso-103",
    name: "Picasso's Cubism",
    prompt: "Transform this into Picasso's Cubist style, breaking forms into geometric shapes and showing multiple perspectives simultaneously. Use the fragmented, angular approach of analytical Cubism while maintaining recognizable elements.",
    styleJson: `<prompt>
    <style>Picasso's Cubism</style>
    <artStyle>
      <technique>Geometric fragmentation and simultaneous multiple viewpoints</technique>
      <colors>Muted palette of browns, grays, blacks with occasional brighter accents</colors>
      <linework>Sharp, angular lines defining fragmented geometric planes</linework>
      <lighting>Flattened with minimal traditional shading, focused on geometric relationships</lighting>
      <textures>Faceted surfaces creating spatial ambiguity and complexity</textures>
    </artStyle>
    <composition>
      <elements>Subjects broken into geometric fragments and reassembled from multiple angles</elements>
      <perspective>Multiple simultaneous viewpoints rejecting single-point perspective</perspective>
      <space>Compressed, ambiguous spatial relationships with overlapping planes</space>
    </composition>
    <concept>
      <approach>Analytical deconstruction of form to reveal multiple dimensions simultaneously</approach>
      <abstraction>Partial abstraction while maintaining recognizable elements</abstraction>
    </concept>
    <restrictions>
      <maintain>Core recognizable elements while applying cubist fragmentation</maintain>
    </restrictions>
  </prompt>`
  },

  "frida-104": {
    styleID: "frida-104",
    name: "Frida Kahlo",
    prompt: "Transform this in Frida Kahlo's distinctive surrealist style with bold colors, Mexican folk art influences, and symbolic elements. Capture her raw emotional honesty and dream-like symbolism.",
    styleJson: `<prompt>
    <style>Frida Kahlo</style>
    <artStyle>
      <technique>Meticulous detail with flat, folk-art inspired approach</technique>
      <colors>Vibrant, saturated Mexican palette with earthy reds, bright blues, and tropical greens</colors>
      <linework>Clean, distinct outlines with careful attention to small details</linework>
      <lighting>Symbolic rather than naturalistic lighting with minimal shadows</lighting>
      <textures>Smooth application with attention to decorative patterns and natural elements</textures>
    </artStyle>
    <composition>
      <elements>Central figure often dominating the composition with symbolic background elements</elements>
      <symbolism>Integration of Mexican cultural imagery, natural elements, and personal symbols</symbolism>
      <perspective>Frontal, direct presentation with dreamlike spatial relationships</perspective>
    </composition>
    <mood>
      <feeling>Raw emotional honesty, pain, resilience, and cultural pride</feeling>
      <atmosphere>Magical realism blending reality with symbolic dreamscapes</atmosphere>
    </mood>
    <restrictions>
      <maintain>Emotional authenticity while incorporating symbolic elements</maintain>
    </restrictions>
  </prompt>`
  },

  "warhol-105": {
    styleID: "warhol-105",
    name: "Andy Warhol",
    prompt: "Transform this in Andy Warhol's Pop Art style with bold, flat colors, repeated imagery, and commercial printing aesthetics. Apply bright, unnatural colors and screen printing-like effects characteristic of his iconic works.",
    styleJson: `<prompt>
    <style>Andy Warhol</style>
    <artStyle>
      <technique>Screen print aesthetic with flat color application and mechanical reproduction qualities</technique>
      <colors>Bold, non-naturalistic, high-contrast colors with dramatic combinations</colors>
      <linework>Strong, simplified black outlines reminiscent of commercial printing</linework>
      <lighting>Flattened with dramatic high-contrast rather than subtle shading</lighting>
      <textures>Smooth color fields with occasional deliberate printing imperfections</textures>
    </artStyle>
    <composition>
      <elements>Simplified iconic imagery, often repeated in grid formations</elements>
      <treatment>Mass media and commercial visual language applied to artistic subjects</treatment>
      <approach>Transformation of ordinary subjects into iconic, abstracted imagery</approach>
    </composition>
    <concept>
      <theme>Celebrity culture, consumerism, and mass production</theme>
      <aesthetic>Combination of mechanical reproduction with artistic intervention</aesthetic>
    </concept>
    <restrictions>
      <maintain>Recognizable subject while applying bold pop art treatment</maintain>
    </restrictions>
  </prompt>`
  },

  "monet-106": {
    styleID: "monet-106",
    name: "Claude Monet",
    prompt: "Transform this in Claude Monet's Impressionist style with loose brushwork capturing the ephemeral effects of light and atmosphere. Apply his distinctive technique of visible brushstrokes and color vibration to create a luminous impression.",
    styleJson: `<prompt>
    <style>Claude Monet</style>
    <artStyle>
      <technique>Broken brushwork with small, visible touches of pure color placed side by side</technique>
      <colors>Subtle, luminous palette with emphasis on light effects and atmospheric colors</colors>
      <linework>Dissolved contours with forms defined by color relationships rather than lines</linework>
      <lighting>Emphasis on natural light effects, reflections, and time-of-day atmospheric conditions</lighting>
      <textures>Varied brushwork creating vibrating surface textures that merge at a distance</textures>
    </artStyle>
    <composition>
      <elements>Landscape elements or scenes captured in momentary light conditions</elements>
      <perspective>Often elevated viewpoint with atmospheric perspective effects</perspective>
      <focus>Emphasis on light, atmosphere and sensory impression over detailed rendering</focus>
    </composition>
    <mood>
      <feeling>Tranquil, contemplative, ephemeral</feeling>
      <atmosphere>Sensitive to atmospheric conditions - misty, sunny, or reflecting water</atmosphere>
    </mood>
    <restrictions>
      <maintain>Natural light qualities while applying impressionist technique</maintain>
    </restrictions>
  </prompt>`
  },

  "davinci-107": {
    styleID: "davinci-107",
    name: "Leonardo da Vinci",
    prompt: "Transform this in Leonardo da Vinci's Renaissance style with subtle modeling, sfumato technique, and meticulous attention to anatomical and natural detail. Apply his masterful perspective and atmospheric depth.",
    styleJson: `<prompt>
    <style>Leonardo da Vinci</style>
    <artStyle>
      <technique>Sfumato (smoke-like) gradual transitions between colors without harsh lines</technique>
      <colors>Subtle earth tones with warm amber undertones and cool blue-grays</colors>
      <linework>Refined, precise underdrawing with softened edges in final rendering</linework>
      <lighting>Soft, directional lighting with masterful chiaroscuro modeling of form</lighting>
      <textures>Smooth transitions with meticulous attention to surface qualities</textures>
    </artStyle>
    <composition>
      <elements>Precisely observed natural forms with scientific accuracy</elements>
      <perspective>Mathematical precision in spatial relationships and perspective</perspective>
      <proportion>Golden ratio and classical proportions in arrangement of elements</proportion>
    </composition>
    <detail>
      <anatomical>Scientifically accurate rendering of musculature and structure</anatomical>
      <natural>Careful observation of botanical and geological elements</natural>
      <technical>Engineering-like precision in depicting mechanical relationships</technical>
    </detail>
    <restrictions>
      <maintain>Scientific accuracy while applying Renaissance aesthetic</maintain>
    </restrictions>
  </prompt>`
  },

  "klimt-108": {
    styleID: "klimt-108",
    name: "Gustav Klimt",
    prompt: "Transform this in Gustav Klimt's ornate Art Nouveau style with lavish gold decoration, intricate patterns, and symbolist elements. Apply his distinctive combination of realistic portraiture with decorative, flattened ornamentation.",
    styleJson: `<prompt>
    <style>Gustav Klimt</style>
    <artStyle>
      <technique>Combination of realistic elements with decorative, pattern-filled surfaces</technique>
      <colors>Rich golds, deep reds, cool blues with metallic and jewel-like qualities</colors>
      <linework>Elegant, sinuous outlines with Byzantine-inspired decorative elements</linework>
      <lighting>Symbolic rather than natural, with emphasis on golden illumination</lighting>
      <textures>Elaborate mosaic-like patterns with gold leaf and ornamental details</textures>
    </artStyle>
    <composition>
      <elements>Realistic figures embedded in fields of abstract, geometric pattern</elements>
      <ornamentation>Lavish decorative elements inspired by Byzantine mosaics and Art Nouveau</elements>
      <space>Flattened, ambiguous spatial relationships with decorative backgrounds</space>
    </composition>
    <mood>
      <feeling>Sensual, mysterious, luxurious</feeling>
      <atmosphere>Dreamlike merger of reality with decorative symbolism</atmosphere>
    </mood>
    <restrictions>
      <maintain>Essential portrait elements while applying ornate decorative treatment</maintain>
    </restrictions>
  </prompt>`
  },

  "dali-109": {
    styleID: "dali-109",
    name: "Salvador Dalí",
    prompt: "Transform this in Salvador Dalí's Surrealist style with dreamlike imagery, melting forms, and hyper-realistic rendering of impossible scenarios. Apply his distinctive combination of precise technique with bizarre juxtapositions.",
    styleJson: `<prompt>
    <style>Salvador Dalí</style>
    <artStyle>
      <technique>Photographic precision in rendering impossible or dream-like scenarios</technique>
      <colors>Stark contrasts with desert-like palette of ochres and blues with dramatic lighting</colors>
      <linework>Precise, academic drawing technique with surreal distortions</linework>
      <lighting>Dramatic, theatrical lighting with long shadows and glowing horizons</lighting>
      <textures>Meticulous rendering of surface qualities even in impossible objects</textures>
    </artStyle>
    <composition>
      <elements>Unexpected juxtapositions of objects in barren, dreamlike landscapes</elements>
      <distortion>Melting, stretching, or morphing of familiar objects</distortion>
      <symbolism>Personal symbolic vocabulary with recurring motifs like melting clocks</symbolism>
    </composition>
    <concept>
      <approach>Dream logic and subconscious associations made visible</approach>
      <reality>Bending of physical laws while maintaining convincing rendering</reality>
    </concept>
    <restrictions>
      <maintain>Recognizable elements while applying surrealist transformation</maintain>
    </restrictions>
  </prompt>`
  },

  "hokusai-110": {
    styleID: "hokusai-110",
    name: "Hokusai",
    prompt: "Transform this in Hokusai's Japanese ukiyo-e woodblock print style with flat color areas, distinctive outlines, and rhythmic patterns. Apply his masterful composition and iconic wave-like curved lines.",
    styleJson: `<prompt>
    <style>Hokusai</style>
    <artStyle>
      <technique>Woodblock print aesthetic with flat color areas and distinctive outlines</technique>
      <colors>Limited palette centered on indigo blue, soft greens, and earth tones</colors>
      <linework>Confident, calligraphic lines varying from delicate to bold</linework>
      <lighting>Flat, decorative lighting without Western chiaroscuro</lighting>
      <textures>Stylized patterns representing natural elements like water, clouds, and foliage</textures>
    </artStyle>
    <composition>
      <elements>Rhythmic arrangement of forms with emphasis on natural patterns</elements>
      <perspective>Flattened space with stacked planes rather than Western perspective</perspective>
      <dynamism>Capturing motion through curved lines and dynamic diagonals</dynamism>
    </composition>
    <cultural>
      <aesthetic>Japanese artistic conventions of simplified, stylized natural forms</aesthetic>
      <symbolism>Traditional Japanese visual motifs and natural elements</symbolism>
    </cultural>
    <restrictions>
      <maintain>Essential elements while applying ukiyo-e woodblock aesthetic</maintain>
    </restrictions>
  </prompt>`
  }
};

/**
 * Generates a prompt for the AI service based on the given style ID and context
 * 
 * @param styleID - The ID of the style to use
 * @param context - The context to insert into the prompt
 * @returns The complete prompt with style JSON
 */
export function generatePrompt(styleID: string, context: string): string {
  const style = STYLES[styleID];

  if (!style) {
    throw new Error(`Style ID ${styleID} not found`);
  }

  // Context is now above the prompt, followed by the prompt, then style JSON without context
  return `${context}\n\n${style.prompt}\n\n\n${style.styleJson}\n`;
}

