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

