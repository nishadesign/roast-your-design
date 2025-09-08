// Sassy and fun design roasts for the UX team - now with extra spice! 🌶️
const roasts = [
  // Color Chaos
  "Honey, this color palette is giving me 'toddler with finger paints' energy. 🎨",
  "Did you pick these colors during a power outage? Because... wow. 💡",
  "This gradient has the subtlety of a neon sign in Vegas. I'm not mad, just impressed. 🎰",
  "Your color choices are bolder than my coffee and twice as jarring. ☕",
  "I see you went with the 'throw every color at the wall and see what sticks' approach. Iconic. 🌈",
  "This palette screams 'I discovered the eyedropper tool yesterday.' Keep exploring, bestie! 🔍",
  "The colors are fighting each other harder than siblings on a road trip. 🚗",
  "This looks like a unicorn exploded... and honestly? I'm here for the chaos. 🦄",
  "Your color harmony is more like color anarchy, and you know what? Revolutionary. 🎭",
  "These colors have more drama than a reality TV show. Pass the popcorn! 🍿",
  
  // Typography Trauma
  "This font combo is giving me 'ransom note chic' vibes. Very avant-garde! 📰",
  "Did you use a font randomizer? Because this is... a choice. A bold, bold choice. 🎲",
  "This text is smaller than my patience after debugging CSS. Zoom zoom! 🔬",
  "Your typography hierarchy is flatter than my motivation on Monday morning. 😴",
  "I love how you made every word compete for attention. Democracy in action! 🗳️",
  "This font pairing is like pineapple on pizza - controversial but oddly fascinating. 🍕",
  "Your kerning is tighter than my jeans after the holidays. Give those letters some space! 👖",
  "This text treatment is more chaotic than my browser tabs. Respect. 🌪️",
  "The readability here is playing hard to get. I appreciate the mystery! 🕵️",
  "Your font choices are more unpredictable than the weather. Keep us guessing! 🌦️",
  
  // Layout Lunacy
  "This layout is more scattered than my thoughts before coffee. I feel seen. ☕",
  "Your grid system is having an identity crisis, and honestly, same. 📊",
  "This alignment is more off than my sleep schedule. But hey, who needs structure? 🛏️",
  "I see you've embraced the 'organized chaos' aesthetic. Very post-modern! 🎨",
  "This spacing is tighter than my budget. Give those elements room to breathe! 💸",
  "Your layout flow is more twisted than a pretzel. I'm dizzy but intrigued! 🥨",
  "This design is busier than a bee on espresso. Slow down, speed racer! 🐝",
  "The white space here is more endangered than pandas. Save the margins! 🐼",
  "This composition is more unbalanced than my work-life situation. Relatable content! ⚖️",
  "Your element positioning is more random than my Spotify shuffle. Surprise me! 🎵",
  
  // UX Shenanigans
  "This user flow has more plot twists than a soap opera. Where's the popcorn? 📺",
  "Finding the CTA button here is like playing Where's Waldo, but harder. 🔍",
  "This navigation is more confusing than assembling IKEA furniture blindfolded. 🪑",
  "The user journey is giving me 'escape room' energy. Very immersive! 🗝️",
  "This interface is more mysterious than my dating life. Keep them guessing! 💕",
  "Your button placement is more unpredictable than my mood swings. Iconic! 🎭",
  "This workflow is more complex than my relationship with carbs. Respect the commitment! 🍞",
  "The user experience here is like a choose-your-own-adventure book written by chaos. 📖",
  "This interaction design is more confusing than tax forms. But hey, job security! 📋",
  "Your UX is playing 4D chess while I'm still figuring out checkers. Genius or madness? ♟️",
  
  // Mobile Mayhem
  "This mobile layout is more cramped than my studio apartment. Cozy! 🏠",
  "Your responsive design is about as flexible as my yoga skills. Room for improvement! 🧘",
  "This mobile experience is more chaotic than Black Friday shopping. Adrenaline rush! 🛍️",
  "The mobile version looks like it went through a blender. Abstract art! 🥤",
  "Your breakpoints are more broken than my New Year's resolutions. Relatable! 📅",
  "This mobile design is giving me 'accordion squeezed by a giant' vibes. Musical! 🪗",
  "The responsive behavior here is more unpredictable than my WiFi connection. Keeps life interesting! 📶",
  "This mobile layout is more twisted than my earphone cables. How do they even...? 🎧",
  "Your mobile design is more compressed than a zip file. Efficient! 📁",
  "This responsive design is having more issues than a magazine subscription. But we'll work through it! 📰",
  
  // General Sass
  "This design has more personality than my morning coffee. And that's saying something! ☕",
  "Your aesthetic is more unique than my search history. Embrace the weird! 🔍",
  "This looks like it was designed by a very creative tornado. Natural disaster chic! 🌪️",
  "Your design choices are bolder than my outfit choices. And I wear socks with sandals! 🧦",
  "This has more character than a Pixar movie. I'm emotionally invested! 🎬",
  "Your creativity is more explosive than my cooking experiments. Dangerous but exciting! 💥",
  "This design is more extra than my coffee order. And I order oat milk, half-caf, with a shot of vanilla! ☕",
  "Your artistic vision is clearer than my skin routine. And that's a 12-step process! ✨",
  "This is more original than my Netflix password. And that's... actually concerning. 📺",
  "Your design language is more complex than my relationship status. It's complicated! 💕"
];

const positiveEndings = [
  "But honestly? I'm living for this chaos! 😄",
  "Keep serving looks, even if they're... unique! 💅",
  "Your confidence is inspiring, bestie! 🚀",
  "At least you're not boring! Bland is the real enemy! 🎭",
  "This is giving me 'fearless artist' energy! 🎨",
  "Your next iteration is going to be absolutely iconic! ✨",
  "I respect the audacity! Go off, creative genius! 👑",
  "This is character development in real time! 📈",
  "Your design journey is more entertaining than Netflix! 📺",
  "Keep pushing boundaries - safe is overrated! 🌟",
  "This is giving me 'main character energy' and I'm here for it! 💫",
  "Your creative courage is unmatched! 🦁",
  "At least you're making bold choices! Timid designs are so last season! 💃",
  "This is art, darling! Abstract, but art nonetheless! 🖼️",
  "Your design personality is louder than my morning alarm! ⏰",
  "Keep experimenting - that's how legends are born! 🌈",
  "This has more plot twists than my favorite drama series! 🍿",
  "Your creative spirit cannot be contained! Unleash the chaos! 🌪️",
  "I'm genuinely impressed by your commitment to the vision! 🎯",
  "This is giving me 'avant-garde gallery opening' vibes! 🖼️"
];

export function generateRoast() {
  const roast = roasts[Math.floor(Math.random() * roasts.length)];
  const ending = positiveEndings[Math.floor(Math.random() * positiveEndings.length)];
  
  return `${roast} ${ending}`;
}

export function generateRoastTitle() {
  const titles = [
    "Bestie, We Need to Talk... 💅",
    "Serving You Some Truth Tea ☕",
    "Design Intervention Time! 🚨",
    "Your Design's Therapy Session 🛋️",
    "Spilling the Design Tea 🫖",
    "Reality Check: Design Edition 📱",
    "Honest Review (No Filter) 🔥",
    "Design Roast: Extra Spicy 🌶️",
    "Time for Some Real Talk 💬",
    "Your Design's Glow-Up Consultation ✨",
    "Constructive Chaos Analysis 🌪️",
    "Design Drama Breakdown 🎭",
    "Creative Intervention Alert! 🚨",
    "Design Diagnosis: In Progress 🔬",
    "Artistic Autopsy Report 📋",
    "Visual Vibe Check Complete ✅",
    "Design Therapy Session #1 🗣️",
    "Creative Reality Show Moment 📺",
    "Design Roast: Served Sassy 💃",
    "Your Design's Main Character Moment 🌟"
  ];
  
  return titles[Math.floor(Math.random() * titles.length)];
}
