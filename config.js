const CONFIG = {
    // Your Valentine's name
    valentineName: "Samir, My Handsome",

    // Browser tab title
    pageTitle: "Will You Be My Valentine? 💖",

    // Floating emojis
    floatingEmojis: {
        hearts: ['❤️', '💖', '🥰', '💗', '🌹'],
        stars: ['⭐', '✨', '🌟']
    },

    // Questions for stories
    first: {
        text: "Do you like my stories?",
        yesBtn: "Yes!",
        noBtn: "No",
        secretAnswer: "I don't like you, I love you! ❤️"
    },
    second: {
        text: "Shall we plan our next adventure?",
        startText: "Absolutely!",
        nextBtn: "Later..."
    },
    third: {
        text: "Will you be my Valentine on February 16th, 2026?",
        yesBtn: "Yes!",
        noBtn: "No"
    },

    // Love meter messages
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 😍",
        high: "To infinity and beyond! 💖",
        normal: "And beyond! 💗"
    },

    // Colors
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animations
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Music
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://cdn1.sefon.pro/download/c8B8ITtzhZwiR6DEm-K27w/1771281482/1/Jason%20Donovan%20-%20Sealed%20With%20A%20Kiss.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't touch below
window.VALENTINE_CONFIG = CONFIG;
