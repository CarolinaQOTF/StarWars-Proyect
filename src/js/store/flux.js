const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            personajes: [],
            planetas: [],
            favorites: [],
            theIds: {},
            enciende: [],

            urlImg: {
                "Luke Skywalker": "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536&width=768",
                "C-3PO": "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536&width=768",
                "R2-D2": "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536&width=768",
                "Darth Vader": "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768",
                "Leia Organa": "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768",
                "Owen Lars": "https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "Beru Whitesun lars": "https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "R5-D4": "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=768",
                "Biggs Darklighter": "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "Obi-Wan Kenobi": "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_95819950.jpeg?region=0%2C0%2C1280%2C720&width=768"
            },

            description: {
                "Luke Skywalker": "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.",
                "C-3PO": "C-3PO longs for more peaceful times, but his continued service to the Resistance — and his knowledge of more than seven million forms of communication — keeps the worry-prone droid in the frontlines of galactic conflict. Programmed for etiquette and protocol, Threepio was built by a young Anakin Skywalker, and has been a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxy’s most defining moments and thrilling battles. Since the Empire’s defeat, C-3PO has served Leia Organa, head of a Resistance spy ring aimed at undermining the First Order.",
                "R2-D2": "A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils. A skilled starship mechanic and fighter pilot's assistant, he has an unlikely but enduring friendship with the fussy protocol droid C-3PO.",
                "Darth Vader": "Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led the Empire’s eradication of the Jedi Order. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the fledgling Rebel Alliance. But there was still good in him…",
                "Leia Organa": "Princess Leia Organa was one of the greatest leaders of the Rebel Alliance, fearless on the battlefield and dedicated to ending the Empire’s tyranny. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranked among the galaxy’s great heroes. But life under the New Republic proved difficult for her. Sidelined by a new generation of political leaders, she struck out on her own to oppose the First Order as founder of the Resistance. These setbacks in her political career were accompanied by more personal losses, which she endured with her seemingly inexhaustible will.",
                "Owen Lars": "Owen Lars continued his father Cliegg’s efforts to build his homestead into a productive farm, working alongside his wife, Beru. Helping with the dreary chores required to keep the farm profitable, Owen relied on his nephew Luke Skywalker. He could not rein in Luke's drive for adventure, though. Young Skywalker longed to leave Tatooine and join the Imperial Academy, to live life among the stars. Owen forbade it, reminding Luke that he was needed on the moisture farm. Skywalker would eventually leave the farm, but under tragic circumstances. Imperials searching for missing droids razed the Lars homestead and killed Owen and Beru.",
                "Beru Whitesun lars": "As a young, shy girl, Beru Whitesun's aspirations did not reach beyond Tatooine. She was content to marry Owen Lars and lead the tough life of a moisture farmer. Beru also fulfilled the role of guardian and substitute mother to young Luke Skywalker, and repeatedly voiced her support for his dream of joining his friends at the Academy. Beru fell victim to the Empire when Imperial stormtroopers raided the family farm in search of droids thought to have top-secret plans for the Empire's ultimate weapon, the Death Star.",
                "R5-D4": "A red astromech droid, R5-D4 thought he'd found a home when the Jawas sold him to Owen Lars, along with the protocol droid C-3PO. But R5's motivator blew as he rolled away from the sandcrawler, forcing the Jawas to take him back in exchange for R2-D2.",
                "biggs": "Biggs Darklighter grew up on Tatooine with Luke Skywalker, and shared his friend's dreams of escaping the dull desert world. After graduating from the Imperial Academy, he defected from the Empire's service to join the Rebellion. He and Luke were reunited at Yavin 4's Rebel base, and flew together against the Death Star. Luke returned from that mission as a hero, but Biggs did not survive.",
                "obi": "A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor."

            },

            frasesPersonajes: {
                "Luke Skywalker": "I want to talk to you about someone you remind me of a lot. His name was Yoda. He was small like you, but his heart was huge and the force was strong in him",
                "C-3PO": "DEATH, JEDI DOGS! Oops… what did I just say?!",
                "R2-D2": "beep beeeee ooooooo beeeeeee",
                "Darth Vader": "I am your father",
                "Leia Organa": "Help me Obi-Wan Kenobi, you are my only hope",
                "Owen Lars": "I'm not stupid, Kenobi. Just because I haven't crossed the Galaxy like you, doesn't make me some kind of ignorant idiot.",
                "Beru Whitesun lars": "If they tracked down the robots, they know who they sold them to, and that will have brought them home.",
                "R5-D4": "beep beeeee ooooooo beeeeeee",
                "biggs": "every pilot should know every last detail of his ship",
                "obi": "May the force be with you… always",

            },

            urlPlanets: {
                "Tatooine": "https://lumiere-a.akamaihd.net/v1/images/tatooine-main_1633e73f.jpeg?region=164%2C0%2C953%2C536&width=768",
                "Alderaan": "https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "Yavin IV": "https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "Hoth": "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675&width=768",
                "Dagobah": "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711&width=768",
                "Bespin": "https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "Endor": "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "Naboo": "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "Coruscant": "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=768",
                "Kamino": "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542&width=768"
            },
            descriptionPlanets: {
                "Tatooine": "Tatooine is harsh desert world orbiting twin suns in the galaxy’s Outer Rim. In the days of the Empire and the Republic, many settlers scratched out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa served as home base for smugglers, criminals, and other rogues. Anakin Skywalker and Luke Skywalker both once called Tatooine home, although across the stars it was more widely known as a hive of scum and villainy ruled by the crime boss Jabba the Hutt.",
                "Alderaan": "If ever one needed an example of the irredeemable evil that was the Empire, turn to the shattered remains of Alderaan. An influential world, Alderaan was represented in the waning days of the Republic by such venerated politicians as Bail Antilles and Bail Organa. A peaceful world, Alderaan was bereft of weaponry in an era of galactic strife. It was not without spirit, however. Alderaan was one of the earliest supporters of the Alliance to Restore the Republic, though its officials prudently kept all ties to the Rebellion secret. Despite such discretion, the Empire knew it to be a haven of Rebel activity, and Grand Moff Tarkin targeted the beautiful world for reprisal as soon as the Death Star was operational. The massive primary weapon of the battle station obliterated Alderaan, leaving only a lifeless asteroid field behind.",
                "Yavin IV": "One of a number of moons orbiting the gas giant Yavin in the galaxy’s Outer Rim, Yavin 4 is a steamy world covered in jungle and forest. It was the location of the principal rebel base early in the Galactic Civil War, and the site from which the Rebellion launched the attack that destroyed the first Death Star -- a confrontation known thereafter as the Battle of Yavin.",
                "Hoth": "Hoth is the sixth planet in the remote system of the same name, and was the site of the Rebel Alliance's Echo Base. It is a world of snow and ice, surrounded by numerous moons, and home to deadly creatures like the wampa.",
                "Dagobah": "Home to Yoda during his final years, Dagobah was a swamp-covered planet strong with the Force -- a forgotten world where the wizened Jedi Master could escape the notice of Imperial forces. Characterized by its bog-like conditions and fetid wetlands, the murky and humid quagmire was undeveloped, with no signs of technology. Though it lacked civilization, the planet was teeming with life -- from its dense, jungle undergrowth to its diverse animal population. Home to a number of fairly common reptilian and amphibious creatures, Dagobah also boasted an indigenous population of much more massive -- and mysterious -- lifeforms. Surrounded by creatures generating the living Force, Yoda learned to connect with the deeper cosmic Force and waited for one who might bring about the return of the Jedi Order.",
                "Bespin": "Secluded from galactic turmoil by its location in a little-visited sector of space, Bespin is an astrophysical rarity. An immense gas giant surrounded by a number of moons, the planet contains a band of habitable atmosphere among its endless clouds. In this stratum of life, enterprising prospectors have established floating mining complexes devoted to extracting valuable gasses from deep within the planet. The most well known of these ventures is the opulent Cloud City, formerly under the administration of Lando Calrissian. During the tail end of the Galactic Civil War, the Empire garrisoned Bespin and took over Cloud City, though the outpost and the planet enjoyed freedom after the defeat of the Emperor at the Battle of Endor.",
                "Endor": "Secluded in a remote corner of the galaxy, the forest moon of Endor would easily have been overlooked by history were it not for the decisive battle that occurred there. The lush, forest home of the Ewok species is the gravesite of Darth Vader and the Empire itself. It was here that the Rebel Alliance won its most crucial victory over the Galactic Empire.",
                "Naboo": "An idyllic world close to the border of the Outer Rim Territories, Naboo is inhabited by peaceful humans known as the Naboo, and an indigenous species of intelligent amphibians called the Gungans. Naboo's surface consists of swampy lakes, rolling plains and green hills. Its population centers are beautiful -- Naboo's river cities are filled with classical architecture and greenery, while the underwater Gungan settlements are a beautiful display of exotic hydrostatic bubble technology.",
                "Coruscant": "A city-covered planet, Coruscant is the vibrant heart and capital of the galaxy, featuring a diverse mix of citizens and culture. It features towering skyscrapers, streams of speeder-filled air traffic, and inner levels that stretch far below the world’s surface. Coruscant was the seat of government for the Galactic Republic and the Empire that followed, and was the site of numerous historic events during the Clone Wars. It also housed the Jedi Temple and Archives, which hosted Jedi training and learning for over a thousand generations -- traditions that ended when the planet bore witness to Order 66.",
                "Kamino": "Once purged from the otherwise complete Jedi Archives was all evidence of the mysterious world of Kamino. A lonely world beyond the Outer Rim and just south of the Rishi Maze, few could have predicted that Kamino would become a key contributor to a massive shift in political power in the final days of the Republic. Kamino is a planet of endless oceans and storms. Few features mark its surface, save for massive stilt-mounted cities wherein reside the planet's natural inhabitants, the Kaminoans. From Tipoca City, the planet's prime minister rules. Lama Su and Kamino’s chief medical scientist Nala Se closely monitor the operations of Kamino's most prized export -- clones -- even after the Clone Wars reaches a conclusion."
            },




        },
        actions: {
            charactersData: () => {
                fetch("https://swapi.dev/api/people")
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            personajes: data.results
                        })
                    })

            },

            planetsData: () => {

                fetch("https://swapi.dev/api/planets")
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            planetas: data.results
                        });
                    })
            },

            addFavorites: (newItem) => {
                const store = getStore();
                setStore({
                    ...store.favorites,
                    favorites: store.favorites.concat(newItem)
                })
            },

            deleteFavorites: (character) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter((item) => item

                        !==
                        character)
                })
            },

            // enciende: () => {
            //     const store = getStore();
            //     setStore({
            //         ...store.favorites,
            //         enciende: luz,
            //         enciende: store.favorites = luz ? glow : false

            //     })
            // }


            //     //reset the global store
            //     setStore({
            //         demo: demo
            //     });
            // }
        }
    };
};

export default getState;