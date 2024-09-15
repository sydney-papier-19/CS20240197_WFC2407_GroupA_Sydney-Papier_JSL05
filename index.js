// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    //Star-Lord: Rock
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    //Groot:Pop
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    //Drax: R&B
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title:"Redbone", artist: "Childish Gambino", genre: "R&B"}, //added song
    { title:"Best Part", artist: "Daniel Caesar", genre: "R&B"},//added song
    { title:"Really Love", artist: "D'angelo", genre: "R&B"},//added song
    //Gamora: Grunge
    { title:"Black Hole Sun", artist: "Soundgarden", genre: "Grunge"}, //added song
    { title:"Come As You Are", artist: "Nirvana", genre: "Grunge"},//added song
    { title:"Hunger Strike", artist: "Temple of the Dog", genre: "Grunge"}, //added song
    { title:"Alive", artist: "Pearl Jam", genre: "Grunge"}, //added song
    //Rocket: Classic Rock
    { title:"Bohemian Rhapsody", artist: "Queen", genre: "Classic Rock"},//added song
    { title:"Sweet Child O' Mine", artist: "Guns N' Roses", genre: "Classic Rock"},//added song
    { title:"Hotel California", artist: "Eagles", genre: "Classic Rock"},//added song
    { title:"Smoke on the Water", artist: "Deep Purple", genre: "Classic Rock"}, //added song
    { title:"Back in Black", artist:"AC/DC", genre: "Classic Rock"}, //added song
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Groot": "Pop",
    "Drax": "R&B",
    "Gamora": "Grunge",
    "Rocket": "Classic Rock",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    
    return Object.entries(guardians).map(([guardian, genre]) => {
        // Filter songs by the preferred genre of the guardian
        const playlist = songs.filter(song => song.genre === genre);
        return { [guardian]: playlist };
    });
  
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
console.log(playlists);


