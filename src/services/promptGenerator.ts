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
  // Famous Artist Styles - Added for art style transformation feature
  "vangogh-101": {
    styleID: "vangogh-101",
    name: "Van Gogh's Starry Night",
    prompt: "DO NOT TRANSFORM THE PERSON INTO VAN GOGH. This is critical. Apply ONLY Van Gogh's PAINTING TECHNIQUE to the image - the swirling patterns, bold brush strokes, vibrant blues and yellows. The subject must retain their EXACT SAME FACIAL FEATURES AND IDENTITY - they should look like themselves but as if painted in Van Gogh's Starry Night style. DO NOT give them Van Gogh's face, beard, ear bandage, or any resemblance to the artist himself.",
    styleJson: `<prompt>
    <style>Vincent Van Gogh's Starry Night</style>
    <artistic_elements>
      <technique>
        <brushwork>Thick, visible brushstrokes with dynamic swirling patterns</brushwork>
        <impasto>Heavy application of paint creating texture and dimension</impasto>
        <strokes>Short, distinct, directional strokes that create movement</strokes>
      </technique>
      <colors>
        <palette>Deep blues, vibrant yellows, cyans, and warm oranges</palette>
        <contrast>High contrast between dark blue backgrounds and bright celestial elements</contrast>
        <application>Colors applied in pure form rather than blended, creating vibrant impact</application>
      </colors>
      <composition>
        <movement>Swirling, flowing patterns especially in sky elements</movement>
        <rhythm>Undulating forms creating visual rhythm across the image</rhythm>
        <perspective>Slightly distorted perspective with emphasis on emotional impact</perspective>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <distortion>NONE - do not distort the subject's facial features</distortion>
      <emphasis>Preserve exact identity while applying painting style</emphasis>
      <integration>Subject painted with Van Gogh brushwork without changing identity</integration>
    </subject_treatment>
    <background>
      <style>Swirling, dynamic patterns especially in sky elements</style>
      <elements>Stylized stars as bright yellow circular forms with radiating lines</elements>
      <integration>Background flows into and around the subject</integration>
    </background>
    <restrictions>
      <maintain>Subject's EXACT facial features and identity</maintain>
      <avoid>DO NOT make subject look like Van Gogh in ANY way</avoid>
      <critical>Subject must NOT be transformed into Van Gogh himself</critical>
      <preserve>Subject's unique identity and appearance</preserve>
    </restrictions>
  </prompt>`
  },
  "vangogh-102": {
    styleID: "vangogh-102",
    name: "Van Gogh's Self Portrait",
    prompt: "DO NOT TRANSFORM THE PERSON INTO VAN GOGH. This is critical. Apply ONLY Van Gogh's PAINTING TECHNIQUE to the image - bold outlines, strong color contrasts, and visible brushwork. The subject must retain their EXACT SAME FACIAL FEATURES AND IDENTITY - they should look like themselves but as if painted in Van Gogh's style. DO NOT give them Van Gogh's face, beard, ear bandage, or any resemblance to the artist himself.",
    styleJson: `<prompt>
    <style>Vincent Van Gogh's Painting Technique</style>
    <artistic_elements>
      <technique>
        <brushwork>Distinct, directional brushstrokes showing clear movement</brushwork>
        <outlines>Bold, dark outlines defining features and forms</outlines>
        <application>Textured paint application with visible thickness</application>
      </technique>
      <colors>
        <palette>Rich earth tones, burnt sienna, ochres, deep greens, and vibrant blues</palette>
        <contrast>Strong tonal contrasts between light and shadow areas</contrast>
        <background>Muted but textured background with visible brushwork</background>
      </colors>
      <composition>
        <focus>Maintain subject's own facial features and expression</focus>
        <pose>Maintain subject's own pose</pose>
        <framing>Tightly framed composition focusing on face and shoulders</framing>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <expression>Maintain subject's own expression</expression>
      <features>DO NOT change facial features to resemble Van Gogh</features>
      <presence>Maintain subject's own character and identity</presence>
    </subject_treatment>
    <background>
      <style>Visible brushwork with swirling or directional strokes</style>
      <color>Complementary to the subject with tonal variations</color>
      <depth>Flat yet textured background focusing attention on the subject</depth>
    </background>
    <restrictions>
      <maintain>Subject's EXACT facial features and identity</maintain>
      <avoid>DO NOT make subject look like Van Gogh in ANY way</avoid>
      <critical>Subject must NOT be transformed into Van Gogh himself</critical>
      <preserve>Subject's unique identity and appearance</preserve>
    </restrictions>
  </prompt>`
  },
  "picasso-103": {
    styleID: "picasso-103",
    name: "Picasso's Cubism",
    prompt: "transform this image including the person/subject in the style of Pablo Picasso's Cubism with geometric fragmentation, multiple perspectives, and abstract representation. Completely transform the subject by breaking them down into angular shapes while maintaining some recognizable elements.",
    styleJson: `<prompt>
    <style>Pablo Picasso's Cubism</style>
    <artistic_elements>
      <technique>
        <fragmentation>Breaking forms into geometric facets and planes</fragmentation>
        <perspective>Multiple viewpoints shown simultaneously</perspective>
        <abstraction>Reduction of natural forms to geometric shapes</abstraction>
      </technique>
      <colors>
        <palette>Muted browns, grays, blacks with occasional blues and ochres</palette>
        <application>Flat color planes with minimal gradation</application>
        <contrast>Strong delineation between color planes</contrast>
      </colors>
      <composition>
        <structure>Geometric organization with intersecting planes</structure>
        <space>Compressed, flattened spatial relationships</space>
        <arrangement>Fractured elements reassembled in surprising ways</arrangement>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <fragmentation>Subject broken into geometric facets showing multiple angles</fragmentation>
      <features>Recognizable elements (eyes, nose, mouth) repositioned or duplicated</features>
      <proportion>Intentionally distorted proportions serving compositional needs</proportion>
    </subject_treatment>
    <background>
      <integration>Background and subject interpenetrate without clear boundaries</integration>
      <elements>Geometric planes intersecting with the subject elements</elements>
      <depth>Flattened picture plane with spatial ambiguity</depth>
    </background>
    <restrictions>
      <maintain>Some recognizable elements of the subject despite abstraction</maintain>
      <avoid>Realistic shading or perspective that would contradict cubist principles</avoid>
    </restrictions>
  </prompt>`
  },
  "frida-104": {
    styleID: "frida-104",
    name: "Frida Kahlo",
    prompt: "transform this image including the person/subject in the style of Frida Kahlo's self-portraits with bold colors, folkloric elements, and symbolic imagery. Completely transform the subject with a frontal, symmetrical composition, surreal elements, and emotional intensity while maintaining recognizable features.",
    styleJson: `<prompt>
    <style>Frida Kahlo's Self-Portraits</style>
    <artistic_elements>
      <technique>
        <brushwork>Smooth, meticulous application with fine details</brushwork>
        <precision>Carefully rendered elements with folk art influence</precision>
        <symbolism>Incorporation of symbolic objects and natural elements</symbolism>
      </technique>
      <colors>
        <palette>Vibrant Mexican folk palette with rich reds, yellows, greens, and blues</palette>
        <contrast>Strong color contrasts with minimal gradation</contrast>
        <application>Flat color fields with decorative patterns</application>
      </colors>
      <composition>
        <framing>Frontal, symmetrical composition with direct gaze</framing>
        <background>Symbolic background elements relating to identity or emotions</background>
        <structure>Formal, almost icon-like presentation</structure>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <expression>Direct, unflinching gaze with emotional intensity</expression>
      <features>Slightly exaggerated features with emphasis on eyes and facial hair</features>
      <accessories>Symbolic jewelry, flowers, or headpieces crowning the subject</accessories>
    </subject_treatment>
    <background>
      <elements>Natural elements like plants, animals, or symbolic objects</elements>
      <style>Flat perspective with decorative patterns</style>
      <meaning>Background elements carrying personal or cultural symbolism</meaning>
    </background>
    <restrictions>
      <maintain>Subject's identity while applying Kahlo's distinctive style</maintain>
      <avoid>Overly modernized elements that would break the historical context</avoid>
    </restrictions>
  </prompt>`
  },
  "warhol-105": {
    styleID: "warhol-105",
    name: "Andy Warhol",
    prompt: "transform this image including the person/subject in the style of Andy Warhol's pop art portraits with bold, flat colors, high contrast, and screen-printed appearance. Completely transform the subject with vibrant, complementary colors in distinct sections while maintaining recognizable features.",
    styleJson: `<prompt>
    <style>Andy Warhol's Pop Art Portraits</style>
    <artistic_elements>
      <technique>
        <application>Flat, screen-printed appearance with clear color separation</application>
        <reduction>Simplified forms with high contrast</reduction>
        <repetition>Potential for repeated image with color variations</repetition>
      </technique>
      <colors>
        <palette>Bold, non-naturalistic colors like hot pink, electric blue, bright yellow</palette>
        <contrast>High contrast between dark outlines and bright color fields</contrast>
        <separation>Clear divisions between color areas with minimal blending</separation>
      </colors>
      <composition>
        <structure>Organized in clear sections with distinct color blocks</structure>
        <background>Flat color field contrasting with the subject</background>
        <treatment>Photo-based transformation with simplified details</treatment>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <features>High contrast rendering of facial features</features>
      <details>Elimination of subtle details in favor of bold shapes</details>
      <shadows>Areas of shadow reduced to simple shapes in contrasting colors</shadows>
    </subject_treatment>
    <background>
      <style>Solid color field or minimal geometric pattern</style>
      <color>Vibrant, non-naturalistic color contrasting with subject</color>
      <simplicity>Minimal detail to emphasize the subject</simplicity>
    </background>
    <restrictions>
      <maintain>Subject's recognizable features despite simplification</maintain>
      <avoid>Realistic shading or naturalistic colors</avoid>
    </restrictions>
  </prompt>`
  },
  "monet-106": {
    styleID: "monet-106",
    name: "Claude Monet",
    prompt: "transform this image including the person/subject in the style of Claude Monet's Impressionism with soft, dabbed brushwork, open composition, and emphasis on light effects. Completely transform the subject with changing qualities of light, visible brushstrokes, and vibrant yet natural colors.",
    styleJson: `<prompt>
    <style>Claude Monet's Impressionism</style>
    <artistic_elements>
      <technique>
        <brushwork>Small, visible dabs of paint creating texture</brushwork>
        <blending>Colors mixed optically rather than on the palette</blending>
        <application>Loose, sketch-like quality with emphasis on light effects</application>
      </technique>
      <colors>
        <palette>Pastel tones, lavenders, soft blues, pinks, and yellows</palette>
        <light>Emphasis on how light affects color at different times of day</light>
        <shadows>Colored shadows using purples and blues rather than black</shadows>
      </colors>
      <composition>
        <structure>Open composition with elements extending beyond the frame</structure>
        <perspective>Atmospheric perspective with softer edges in distance</perspective>
        <focus>Emphasis on overall impression rather than detailed rendering</focus>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <rendering>Soft edges with forms suggested rather than precisely defined</rendering>
      <light>Subject modulated by light effects and reflections</light>
      <detail>Focus on capturing light's effect on the subject rather than minute details</detail>
    </subject_treatment>
    <background>
      <integration>Subject and background unified through consistent brushwork</integration>
      <atmosphere>Sense of air and atmosphere throughout the scene</atmosphere>
      <light>Background affected by same light conditions as the subject</light>
    </background>
    <restrictions>
      <maintain>Natural setting and lighting logic</maintain>
      <avoid>Sharp lines, photorealistic details, or hard edges</avoid>
    </restrictions>
  </prompt>`
  },
  "davinci-107": {
    styleID: "davinci-107",
    name: "Leonardo da Vinci",
    prompt: "transform this image including the person/subject in the style of Leonardo da Vinci with subtle modeling, soft sfumato technique, and Renaissance composition. Completely transform the subject with meticulous attention to anatomical detail, subtle shading, and a warm, muted color palette.",
    styleJson: `<prompt>
    <style>Leonardo da Vinci's Renaissance Style</style>
    <artistic_elements>
      <technique>
        <sfumato>Soft, smoky transitions between colors without harsh lines</sfumato>
        <modeling>Subtle gradations of light and shadow creating three-dimensional forms</modeling>
        <precision>Meticulous attention to anatomical detail and proportion</precision>
      </technique>
      <colors>
        <palette>Warm earth tones, browns, ochres, and muted blues</palette>
        <application>Smooth blending with oil painting appearance</application>
        <harmony>Subtle color harmony throughout the composition</harmony>
      </colors>
      <composition>
        <structure>Balanced, harmonious arrangement with classical proportions</structure>
        <perspective>Accurate linear perspective with atmospheric depth</perspective>
        <pose>Dignified pose with psychological presence</pose>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <features>Idealized yet naturalistic features with perfect proportions</features>
      <expression>Subtle, enigmatic expression with psychological depth</expression>
      <anatomy>Accurate anatomical rendering with understanding of underlying structures</anatomy>
    </subject_treatment>
    <background>
      <landscape>Detailed natural elements with atmospheric perspective</landscape>
      <architecture>Classical architectural elements if included</architecture>
      <depth>Gradual fading into distance with aerial perspective</depth>
    </background>
    <restrictions>
      <maintain>Classical dignity and anatomical accuracy</maintain>
      <avoid>Modern elements or expressions that would break the Renaissance aesthetic</avoid>
    </restrictions>
  </prompt>`
  },
  "klimt-108": {
    styleID: "klimt-108",
    name: "Gustav Klimt",
    prompt: "transform this image including the person/subject in the style of Gustav Klimt with ornate gold patterns, decorative motifs, and symbolic imagery. Completely transform the subject with flat, decorative areas combined with realistic elements and incorporate rich textures and Byzantine-inspired gold details.",
    styleJson: `<prompt>
    <style>Gustav Klimt's Golden Phase</style>
    <artistic_elements>
      <technique>
        <ornamentation>Elaborate decorative patterns and symbolic motifs</ornamentation>
        <gilding>Gold leaf appearance in decorative elements</gilding>
        <contrast>Flat decorative areas alongside realistic elements</contrast>
      </technique>
      <colors>
        <palette>Rich golds, deep reds, blues, greens with metallic appearance</palette>
        <application>Mosaic-like areas of color with detailed patterns</application>
        <contrast>Ornate patterned areas against more subdued realistic portions</contrast>
      </colors>
      <composition>
        <flatness>Compressed spatial depth with emphasis on decorative surface</flatness>
        <pattern>Repetitive geometric patterns creating visual rhythm</pattern>
        <symbolism>Abstract and symbolic elements integrated into design</symbolism>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <face>Realistic rendering of face and hands amidst decorative elements</face>
      <body>Body often merged with or enveloped by ornamental patterns</body>
      <clothing>Clothing transformed into elaborate decorative fields</clothing>
    </subject_treatment>
    <background>
      <integration>Background and subject merge through consistent patterning</integration>
      <flatness>Minimal spatial depth with emphasis on decorative surface</flatness>
      <elements>Byzantine-inspired mosaic patterns and symbolic shapes</elements>
    </background>
    <restrictions>
      <maintain>Facial realism amidst decorative elements</maintain>
      <avoid>Deep perspective or realistic spatial arrangements</avoid>
    </restrictions>
  </prompt>`
  },
  "dali-109": {
    styleID: "dali-109",
    name: "Salvador Dalí",
    prompt: "transform this image including the person/subject in the style of Salvador Dalí's Surrealism with dreamlike imagery, melting forms, and symbolic elements. Completely transform the subject with hyper-realistic rendering with impossible juxtapositions and distorted perspective while incorporating surreal dreamscape elements.",
    styleJson: `<prompt>
    <style>Salvador Dalí's Surrealism</style>
    <artistic_elements>
      <technique>
        <rendering>Hyper-realistic rendering of impossible scenes</rendering>
        <distortion>Melting, stretching, or morphing of familiar objects</distortion>
        <juxtaposition>Unexpected combinations of unrelated elements</juxtaposition>
      </technique>
      <colors>
        <palette>Warm earth tones, desert colors, with dramatic lighting</palette>
        <sky>Often dramatic with unusual cloud formations or multiple light sources</sky>
        <shadows>Long, dramatic shadows with symbolic significance</shadows>
      </colors>
      <composition>
        <space>Vast, barren landscapes with strange perspective</space>
        <scale>Dramatic size relationships between elements</scale>
        <horizon>Low horizon line creating vast empty spaces</horizon>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <transformation>Subject partially melting, floating, or transforming</transformation>
      <substitution>Parts replaced with symbolic objects or drawers</substitution>
      <division>Subject potentially divided, duplicated, or fragmented</division>
    </subject_treatment>
    <background>
      <landscape>Barren, dream-like landscape with impossible elements</landscape>
      <objects>Symbolic objects like melting clocks, ants, or crutches</objects>
      <perspective>Exaggerated perspective with multiple vanishing points</perspective>
    </background>
    <restrictions>
      <maintain>Photorealistic rendering despite impossible scenes</maintain>
      <avoid>Abstraction that prevents recognition of transformed elements</avoid>
    </restrictions>
  </prompt>`
  },
  "hokusai-110": {
    styleID: "hokusai-110",
    name: "Hokusai",
    prompt: "transform this image including the person/subject in the style of Katsushika Hokusai's ukiyo-e woodblock prints with flat areas of color, bold outlines, and stylized Japanese aesthetic. Completely transform the subject with distinctive wave-like patterns, limited color palette, and elegant line work typical of The Great Wave off Kanagawa.",
    styleJson: `<prompt>
    <style>Hokusai's Ukiyo-e Woodblock Prints</style>
    <artistic_elements>
      <technique>
        <linework>Bold, calligraphic outlines with varying thickness</linework>
        <coloring>Flat areas of color without gradation</coloring>
        <patterns>Stylized representation of natural elements like waves and clouds</patterns>
      </technique>
      <colors>
        <palette>Limited palette with indigo blue, seafoam green, earth tones, and beige</palette>
        <application>Flat color fields with minimal modulation</application>
        <blocking>Clear separation between color areas</blocking>
      </colors>
      <composition>
        <perspective>Flattened perspective with stacked spatial planes</perspective>
        <framing>Dramatic cropping and asymmetrical balance</framing>
        <rhythm>Repeating curved lines creating visual movement</rhythm>
      </composition>
    </artistic_elements>
    <subject_treatment>
      <stylization>Subject rendered with simplified, elegant lines</stylization>
      <detail>Selective detail with emphasis on characteristic features</detail>
      <lines>Strong contour lines defining the subject</lines>
    </subject_treatment>
    <background>
      <elements>Stylized natural elements like Mount Fuji, waves, or clouds</elements>
      <pattern>Repetitive patterns creating rhythm and movement</pattern>
      <space>Compressed depth with layered planes</space>
    </background>
    <restrictions>
      <maintain>Japanese aesthetic and simplified elegance</maintain>
      <avoid>Western perspective or shading techniques</avoid>
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

