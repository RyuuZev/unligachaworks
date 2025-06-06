document.addEventListener('DOMContentLoaded', () => {

    const RARITY_5_STAR_RATE = 0.006; // 0.6%
    const RARITY_4_STAR_RATE = 0.051; // 5.1%

    const SOFT_PITY_5_STAR_THRESHOLD = 74;
    const HARD_PITY_5_STAR_THRESHOLD = 90;
    const HARD_PITY_4_STAR_THRESHOLD = 10;

    const HSR_CHARACTERS = [
        // --- 5-STAR CHARACTERS ---
        {
            id: 'acheron',
            name: 'Acheron',
            rarity: 5,
            imageUrl: 'images/characters/acheron.webp'
        }, {
            id: 'aventurine',
            name: 'Aventurine',
            rarity: 5,
            imageUrl: 'images/characters/aventurine.webp'
        }, {
            id: 'bailu',
            name: 'Bailu',
            rarity: 5,
            imageUrl: 'images/characters/bailu.webp'
        }, {
            id: 'blade',
            name: 'Blade',
            rarity: 5,
            imageUrl: 'images/characters/blade.webp'
        }, {
            id: 'bronya',
            name: 'Bronya',
            rarity: 5,
            imageUrl: 'images/characters/bronya.webp'
        }, {
            id: 'dr_ratio',
            name: 'Dr. Ratio',
            rarity: 5,
            imageUrl: 'images/characters/dr_ratio.webp'
        }, {
            id: 'fu_xuan',
            name: 'Fu Xuan',
            rarity: 5,
            imageUrl: 'images/characters/fu_xuan.webp'
        }, {
            id: 'gepard',
            name: 'Gepard',
            rarity: 5,
            imageUrl: 'images/characters/gepard.webp'
        }, {
            id: 'himeko',
            name: 'Himeko',
            rarity: 5,
            imageUrl: 'images/characters/himeko.webp'
        }, {
            id: 'jing_yuan',
            name: 'Jing Yuan',
            rarity: 5,
            imageUrl: 'images/characters/jing_yuan.webp'
        }, {
            id: 'jingliu',
            name: 'Jingliu',
            rarity: 5,
            imageUrl: 'images/characters/jingliu.webp'
        }, {
            id: 'kafka',
            name: 'Kafka',
            rarity: 5,
            imageUrl: 'images/characters/kafka.webp'
        }, {
            id: 'clara',
            name: 'Clara',
            rarity: 5,
            imageUrl: 'images/characters/clara.webp'
        }, {
            id: 'luocha',
            name: 'Luocha',
            rarity: 5,
            imageUrl: 'images/characters/luocha.webp'
        }, {
            id: 'seele',
            name: 'Seele',
            rarity: 5,
            imageUrl: 'images/characters/seele.webp'
        }, {
            id: 'silver_wolf',
            name: 'Silver Wolf',
            rarity: 5,
            imageUrl: 'images/characters/silver_wolf.webp'
        }, {
            id: 'topaz',
            name: 'Topaz',
            rarity: 5,
            imageUrl: 'images/characters/topaz.webp'
        }, {
            id: 'welt',
            name: 'Welt',
            rarity: 5,
            imageUrl: 'images/characters/welt.webp'
        }, {
            id: 'yanqing',
            name: 'Yanqing',
            rarity: 5,
            imageUrl: 'images/characters/yanqing.webp'
        }, {
            id: 'sparkle',
            name: 'Sparkle',
            rarity: 5,
            imageUrl: 'images/characters/sparkle.webp'
        }, {
            id: 'robin',
            name: 'Robin',
            rarity: 5,
            imageUrl: 'images/characters/robin.webp'
        }, {
            id: 'phainon',
            name: 'Phainon',
            rarity: 5,
            imageUrl: 'images/characters/phainon.webp'
        }, {
            id: 'mydei',
            name: 'Mydei',
            rarity: 5,
            imageUrl: 'images/characters/mydei.webp'
        }, {
            id: 'firefly',
            name: 'Firefly',
            rarity: 5,
            imageUrl: 'images/characters/firefly.webp'
        }, {
            id: 'anaxa',
            name: 'Anaxa',
            rarity: 5,
            imageUrl: 'images/characters/anaxa.webp'
        }, {
            id: 'sunday',
            name: 'Sunday',
            rarity: 5,
            imageUrl: 'images/characters/sunday.webp'
        }, {
            id: 'castorice',
            name: 'Castorice',
            rarity: 5,
            imageUrl: 'images/characters/castorice.webp'
        }, {
            id: 'aglaea',
            name: 'Aglaea',
            rarity: 5,
            imageUrl: 'images/characters/aglaea.webp'
        }, {
            id: 'cipher',
            name: 'Cipher',
            rarity: 5,
            imageUrl: 'images/characters/cipher.webp'
        }, {
            id: 'hyacine',
            name: 'Hyacine',
            rarity: 5,
            imageUrl: 'images/characters/hyacine.webp'
        }, {
            id: 'the_herta',
            name: 'The Herta',
            rarity: 5,
            imageUrl: 'images/characters/the_herta.webp'
        }, {
            id: 'tribbie',
            name: 'Tribbie',
            rarity: 5,
            imageUrl: 'images/characters/tribbie.webp'
        }, {
            id: 'feixiao',
            name: 'Feixiao',
            rarity: 5,
            imageUrl: 'images/characters/feixiao.webp'
        }, {
            id: 'firefly',
            name: 'Firefly',
            rarity: 5,
            imageUrl: 'images/characters/firefly.webp'
        },

        // --- 4-STAR CHARACTERS ---
        {
            id: 'asta',
            name: 'Asta',
            rarity: 4,
            imageUrl: 'images/characters/asta.webp'
        }, {
            id: 'arlan',
            name: 'Arlan',
            rarity: 4,
            imageUrl: 'images/characters/arlan.webp'
        }, {
            id: 'dan_heng',
            name: 'Dan Heng',
            rarity: 4,
            imageUrl: 'images/characters/dan_heng.webp'
        }, {
            id: 'hook',
            name: 'Hook',
            rarity: 4,
            imageUrl: 'images/characters/hook.webp'
        }, {
            id: 'herta',
            name: 'Herta',
            rarity: 4,
            imageUrl: 'images/characters/herta.webp'
        }, {
            id: 'march_7th',
            name: 'March 7th',
            rarity: 4,
            imageUrl: 'images/characters/march_7th.webp'
        }, {
            id: 'natasha',
            name: 'Natasha',
            rarity: 4,
            imageUrl: 'images/characters/natasha.webp'
        }, {
            id: 'pela',
            name: 'Pela',
            rarity: 4,
            imageUrl: 'images/characters/pela.webp'
        }, {
            id: 'qingque',
            name: 'Qingque',
            rarity: 4,
            imageUrl: 'images/characters/qingque.webp'
        }, {
            id: 'sampo',
            name: 'Sampo',
            rarity: 4,
            imageUrl: 'images/characters/sampo.webp'
        }, {
            id: 'serval',
            name: 'Serval',
            rarity: 4,
            imageUrl: 'images/characters/serval.webp'
        }, {
            id: 'sushang',
            name: 'Sushang',
            rarity: 4,
            imageUrl: 'images/characters/sushang.webp'
        }, {
            id: 'tingyun',
            name: 'Tingyun',
            rarity: 4,
            imageUrl: 'images/characters/tingyun.webp'
        }, {
            id: 'yukong',
            name: 'Yukong',
            rarity: 4,
            imageUrl: 'images/characters/yukong.webp'
        }, {
            id: 'luka',
            name: 'Luka',
            rarity: 4,
            imageUrl: 'images/characters/luka.webp'
        }, {
            id: 'lynx',
            name: 'Lynx',
            rarity: 4,
            imageUrl: 'images/characters/lynx.webp'
        }, {
            id: 'guinaifen',
            name: 'Guinaifen',
            rarity: 4,
            imageUrl: 'images/characters/guinaifen.webp'
        }, {
            id: 'hanya',
            name: 'Hanya',
            rarity: 4,
            imageUrl: 'images/characters/hanya.webp'
        }, {
            id: 'xueyi',
            name: 'Xueyi',
            rarity: 4,
            imageUrl: 'images/characters/xueyi.webp'
        }, {
            id: 'misha',
            name: 'Misha',
            rarity: 4,
            imageUrl: 'images/characters/misha.webp'
        }, {
            id: 'gallagher',
            name: 'Gallagher',
            rarity: 4,
            imageUrl: 'images/characters/gallagher.webp'
        }, {
            id: 'moze',
            name: 'Moze',
            rarity: 4,
            imageUrl: 'images/characters/moze.webp'
        }, {
            id: 'furina',
            name: 'Furina',
            rarity: 4,
            imageUrl: 'images/characters/furina.webp'
        }, {
            id: '3_star_lc_1',
            name: '3-Star Light Cone A',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_2',
            name: '3-Star Light Cone B',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_3',
            name: '3-Star Light Cone C',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_4',
            name: '3-Star Light Cone D',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_5',
            name: '3-Star Light Cone E',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_6',
            name: '3-Star Light Cone F',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_7',
            name: '3-Star Light Cone G',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_8',
            name: '3-Star Light Cone H',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }
    ];

    const HSR_LIGHT_CONES = [
    // --- 5-STAR LIGHT CONES ---
    { id: 'lc_5_star_1', name: 'Light Cone 5-Star A', rarity: 5, imageUrl: 'images/lightcones/lc_5s_a.webp' },
    { id: 'lc_5_star_2', name: 'Light Cone 5-Star B', rarity: 5, imageUrl: 'images/lightcones/lc_5s_b.webp' },
    // Tambahkan lebih banyak Light Cone 5-bintang jika ada
    // Contoh:
    // { id: 'earths_call', name: "Earth's Call", rarity: 5, imageUrl: 'images/lightcones/earths_call.webp' },
    // { id: 'past_self_in_mirror', name: "Past Self in Mirror", rarity: 5, imageUrl: 'images/lightcones/past_self_in_mirror.webp' },


    // --- 4-STAR LIGHT CONES ---
    { id: 'lc_4_star_1', name: 'Light Cone 4-Star A', rarity: 4, imageUrl: 'images/lightcones/lc_4s_a.webp' },
    { id: 'lc_4_star_2', name: 'Light Cone 4-Star B', rarity: 4, imageUrl: 'images/lightcones/lc_4s_b.webp' },
    // Tambahkan lebih banyak Light Cone 4-bintang jika ada
    // Contoh:
    // { id: 'fermata', name: "Fermata", rarity: 4, imageUrl: 'images/lightcones/fermata.webp' },
    // { id: 'good_night_and_sleepwell', name: "Good Night and Sleepwell", rarity: 4, imageUrl: 'images/lightcones/good_night_and_sleepwell.webp' },

    // --- 3-STAR LIGHT CONES (ini biasanya yang kamu dapat dari karakter 3-bintang yang sudah ada) ---
    // Kamu mungkin sudah punya beberapa yang di-hardcode sebagai GENERIC_3_STAR,
    // tapi ini untuk light cone murni. Jika ingin lebih detail, bisa tambahkan di sini.
    { id: 'lc_3_star_1', name: 'Light Cone 3-Star A', rarity: 3, imageUrl: 'images/lightcones/lc_3s_a.webp' },
    { id: 'lc_3_star_2', name: 'Light Cone 3-Star B', rarity: 3, imageUrl: 'images/lightcones/lc_3s_b.webp' },
    // ...
];


    const CHARACTERS_5_STAR = HSR_CHARACTERS.filter(c => c.rarity === 5);
    const CHARACTERS_4_STAR = HSR_CHARACTERS.filter(c => c.rarity === 4);
    const GENERIC_3_STAR = HSR_CHARACTERS.filter(c => c.rarity === 3);

    const LIGHT_CONES_5_STAR = HSR_LIGHT_CONES.filter(lc => lc.rarity === 5);
    const LIGHT_CONES_4_STAR = HSR_LIGHT_CONES.filter(lc => lc.rarity === 4);
    const LIGHT_CONES_3_STAR = HSR_LIGHT_CONES.filter(lc => lc.rarity === 3);

    const pullButton = document.getElementById('pullButton');
    const pull10Button = document.getElementById('pull10Button');
    const pullResultsDiv = document.getElementById('pullResults');
    const characterInventoryDiv = document.getElementById('characterInventory');
    const clearResultsButton = document.getElementById('clearResultsButton');
    const clearInventoryButton = document.getElementById('clearInventoryButton');
    const resetStatsButton = document.getElementById('resetStatsButton'); 
    const totalPullsDisplay = document.getElementById('totalPullsDisplay');
    const pityCountDisplay = document.getElementById('pityCountDisplay');
    const previousPityDisplay = document.getElementById('previousPityDisplay');

    const clickSFX = document.getElementById('clickSFX');
    const backgroundMusic = document.getElementById('backgroundMusic');

    let hasUserInteracted = false;

    let totalPulls = parseInt(localStorage.getItem('totalPulls')) || 0;
    let pityCount = parseInt(localStorage.getItem('pityCount')) || 0;
    let pity4StarCount = parseInt(localStorage.getItem('pity4StarCount')) || 0;
    let previousPity = parseInt(localStorage.getItem('previousPity')) || 0;

    const characterInventory = new Map(
        JSON.parse(localStorage.getItem('hsrCharacterInventory')) || []
    );

    function saveStats() {
        localStorage.setItem('totalPulls', totalPulls);
        localStorage.setItem('pityCount', pityCount);
        localStorage.setItem('pity4StarCount', pity4StarCount);
        localStorage.setItem('previousPity', previousPity);
    }


    function updatePityDisplay() {
        totalPullsDisplay.textContent = totalPulls;
        
        pityCountDisplay.textContent = pityCount + 0;
        previousPityDisplay.textContent = previousPity;

    }

    function saveInventory() {
        localStorage.setItem(
            'hsrCharacterInventory',
            JSON.stringify(Array.from(characterInventory.entries()))
        );
    }

    function getPulledCharacter() {
        
        if (pityCount + 1 === HARD_PITY_5_STAR_THRESHOLD) {
            console.log("Hard Pity 5-Star reached!");
            return CHARACTERS_5_STAR[Math.floor(Math.random() * CHARACTERS_5_STAR.length)];
        }

        
        if (pity4StarCount + 1 === HARD_PITY_4_STAR_THRESHOLD) {
            console.log("Hard Pity 4-Star reached!");
            return CHARACTERS_4_STAR[Math.floor(Math.random() * CHARACTERS_4_STAR.length)];
        }


        let current5StarRate = RARITY_5_STAR_RATE; 


        if (pityCount >= SOFT_PITY_5_STAR_THRESHOLD) {
            
            current5StarRate += (pityCount - SOFT_PITY_5_STAR_THRESHOLD + 1) * 0.06;
            current5StarRate = Math.min(current5StarRate, 1.0);
            console.log(`Soft Pity: Pull ${pityCount + 1}, New 5-star rate: ${(current5StarRate * 100).toFixed(2)}%`);
        }

        const rand = Math.random();


        if (rand < current5StarRate) {
            return CHARACTERS_5_STAR[Math.floor(Math.random() * CHARACTERS_5_STAR.length)];
        } else if (rand < (current5StarRate + RARITY_4_STAR_RATE)) { 
            return CHARACTERS_4_STAR[Math.floor(Math.random() * CHARACTERS_4_STAR.length)];
        } else {
            return GENERIC_3_STAR[Math.floor(Math.random() * GENERIC_3_STAR.length)];
        }
    }

    function createCharacterCard(character, isNew = false) {
        const card = document.createElement('div');
        card
            .classList
            .add('character-card', `rarity-${character.rarity}`);

        let newBadge = '';

        if (isNew && character.rarity > 3) {
            newBadge = '<span class="new-badge">NEW!</span>';
        }

        card.innerHTML = `
            <img src="${character.imageUrl}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p class="rarity">Rarity: ${character.rarity}-Star</p>
            ${newBadge}
        `;
        return card;
    }

    function updateCharacterInventory(character) {
        if (character.rarity >= 4) {
            const currentCount = characterInventory.get(character.id) || 0;
            characterInventory.set(character.id, currentCount + 1);
            saveInventory();
            renderCharacterInventory();
        }
    }

    function renderCharacterInventory() {
        characterInventoryDiv.innerHTML = '';
        const initialMessage = characterInventoryDiv.querySelector('.initial-message');
        if (initialMessage) {
            initialMessage.remove();
        }

        if (characterInventory.size === 0) {
            characterInventoryDiv.innerHTML = '<p class="initial-message">Belum ada karakter dalam koleksi Anda. Pull sekarang!</p>';
            return;
        }

        const sortedCharacters = Array
            .from(characterInventory.keys())
            .map(charId => {
                const char = HSR_CHARACTERS.find(c => c.id === charId);
                if (!char) {
                    console.warn(`Karakter dengan ID '${charId}' ditemukan di inventaris tetapi tidak ada di daftar HSR_CHARACTERS. Mengabaikan.`);
                    return null; 
                }
                return {
                    ...char,
                    count: characterInventory.get(charId)
                };
            })
            .filter(item => item !== null)
            .sort((a, b) => {
                if (b.rarity !== a.rarity) {
                    return b.rarity - a.rarity;
                }
                return a
                    .name
                    .localeCompare(b.name);
            });

        sortedCharacters.forEach(item => {
            const card = createCharacterCard(item);
            const countSpan = document.createElement('span');
            countSpan
                .classList
                .add('item-count');
            countSpan.textContent = ` x${item.count}`;
            card
                .querySelector('h3')
                .appendChild(countSpan);
            characterInventoryDiv.appendChild(card);
        });
    }

    async function performPull(numPulls) {
        pullResultsDiv.innerHTML = '';
        const initialMessage = pullResultsDiv.querySelector('.initial-message');
        if (initialMessage) {
            initialMessage.remove();
        }

        const pulledCharacters = [];
        for (let i = 0; i < numPulls; i++) {
            totalPulls++;
            pityCount++;
            pity4StarCount++; 

            const character = getPulledCharacter();
            pulledCharacters.push(character);

            if (character.rarity === 5) {
                previousPity = pityCount;
                pityCount = 0; 
                pity4StarCount = 0; 
                console.log("Got 5-star! Pity reset.");
            } else if (character.rarity === 4) {
                pity4StarCount = 0;
                console.log("Got 4-star! 4-star pity reset.");
            }
        }

        for (const character of pulledCharacters) {
            const isNew = !characterInventory.has(character.id) && character.rarity > 3;

            const card = createCharacterCard(character, isNew);
            pullResultsDiv.appendChild(card);

            updateCharacterInventory(character);

            pullResultsDiv.scrollTop = pullResultsDiv.scrollHeight;

            await new Promise(resolve => setTimeout(resolve, 300));
        }
        updatePityDisplay();
        saveStats();
    }

    function handleFirstInteraction() {
        if (!hasUserInteracted) {
            backgroundMusic.muted = false;
            backgroundMusic.play().then(() => {
                console.log("BGM started after first user interaction.");
            }).catch(e => {
                console.error("Gagal memutar BGM setelah interaksi:", e);
            });
            hasUserInteracted = true;
        }
    }


    pullButton.addEventListener('click', () => {
        handleFirstInteraction();
        clickSFX.volume = 0.5;
        clickSFX.currentTime = 0;
        clickSFX
            .play()
            .catch(e => console.warn("Gagal memutar click SFX:", e));
        performPull(1);
    });

    pull10Button.addEventListener('click', () => {
        handleFirstInteraction();
        clickSFX.volume = 0.5;
        clickSFX.currentTime = 0;
        clickSFX
            .play()
            .catch(e => console.warn("Gagal memutar click SFX:", e));
        performPull(10);
    });

    clearResultsButton.addEventListener('click', () => {
        handleFirstInteraction();
        pullResultsDiv.innerHTML = '<p class="initial-message">Tekan tombol \'Pull\' untuk memulai!</p>';
    });

    clearInventoryButton.addEventListener('click', () => {
        handleFirstInteraction();
        if (confirm('Apakah Anda yakin ingin menghapus semua karakter dari koleksi?')) {
            characterInventory.clear();
            saveInventory();
            renderCharacterInventory();
            alert('Koleksi karakter berhasil dihapus!');
        }
    });

    
    if (resetStatsButton) { 
        resetStatsButton.addEventListener('click', () => {
            handleFirstInteraction();
            if (confirm('Apakah Anda yakin ingin mereset semua statistik Pull dan Pity? Ini tidak akan menghapus Inventory Karakter Anda.')) {
                totalPulls = 0;
                pityCount = 0;
                pity4StarCount = 0;
                saveStats();
                updatePityDisplay();
                alert('Statistik Pull dan Pity berhasil direset!');
            }
        });
    }

    renderCharacterInventory();
    updatePityDisplay();
    saveStats();

    if (backgroundMusic) {
        backgroundMusic.play().then(() => {
            console.log("BGM muted autoplay attempted.");
        }).catch(e => {
            console.warn("Muted autoplay BGM blocked, waiting for user interaction.", e);
        });
    } else {
        console.error("Elemen audio BGM dengan ID 'backgroundMusic' tidak ditemukan!");
    }
});
