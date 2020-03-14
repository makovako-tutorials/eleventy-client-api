const vibes = [
    "lala",
    "lele",
    "lolo",
    "lili"
]

const vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector('.vibe').append(vibe);