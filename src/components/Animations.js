export const gridAnimation = {
    show: { transition: { staggerChildren: 0.1 } },
    hide: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
}

export const cardAnimation = {
    show: { y: [200, 0], opacity: [0, 1], scale: [0.95, 1] },
    hide: { y: [0, 200], opacity: [1, 0], scale: [1, 0.95] },
}

export const h3Animation = {
    show: { x: [-100, 0], opacity: [0, 1], scale: [0.9, 1] },
    hide: { x: [0, -100], opacity: [1, 0], scale: [1, 0.9] },
}

export const carAnimation = {
    show: { width: ["1000px", "500px"], opacity: [0, 1] },
    hide: { width: ["500px", "1000px"], opacity: [1, 0] },
};