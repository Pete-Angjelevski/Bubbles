
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { id: 1, artist: 'Dua Lipa', name: 'Levitating' },
        { id: 2, artist: 'Miley Cyrus', name: 'Midnight Sky' },
        { id: 3, artist: '24kGoldn feat. Iann Dior', name: 'Mood' },
        { id: 4, artist: 'Joel Corry x MNEK', name: 'Head & Heart' },
        { id: 5, artist: 'Billie Eilish', name: 'Therefore I Am' },
        { id: 6, artist: 'Miley Cyrus feat. Dua Lipa', name: 'Prisoner' },
        { id: 7, artist: 'Tones And I', name: 'Fly Away' },
        { id: 8, artist: 'Taylor Swift', name: 'willow' },
        { id: 9, artist: 'Sigala x James Arthur', name: 'Lasting Lover' },
        { id: 10, artist: 'Ariana Grande', name: 'positions' },
        { id: 11, artist: 'Travis Scott', name: 'Goosebumps' },
        { id: 12, artist: 'Kanye West', name: 'I Love It' },
        { id: 13, artist: 'Bruno Mars', name: '24K Magic' },
        { id: 14, artist: 'J. Cole', name: 'Work Out' },
        { id: 15, artist: 'Jack Harlow', name: 'Tyler Herro' },
        { id: 16, artist: 'Big Sean', name: 'Wolves' },
        { id: 17, artist: 'DaBaby', name: 'BOP' },
        { id: 18, artist: 'Roddy Ricch', name: 'High Fasion' },
        { id: 19, artist: 'Playboi Carti', name: 'Slay3r' },
        { id: 20, artist: 'Hp Boyz', name: 'Rumours' },
        { id: 21, artist: 'Gorgon City', name: 'There For You' },
        { id: 22, artist: 'Diplo', name: 'Turn Back Time' },
        { id: 23, artist: 'Camelphat', name: 'Easier' },
        { id: 24, artist: 'Sonny Fodera', name: 'Moving Blind (Biscits Remix)' },
        { id: 25, artist: 'MK', name: '17' },
        { id: 26, artist: 'Decyfer Down', name: 'Fading' },
        { id: 27, artist: 'Alterbridge', name: 'Buried Alive' },
        { id: 28, artist: 'Puddle Of Mudd', name: 'Blurry' },
        { id: 29, artist: 'Disturbed', name: 'Prayer' },
        { id: 30, artist: 'Breaking Benjamin', name: 'Psycho' },
        { id: 31, artist: 'Stormzy', name: 'Superheroes' },
        { id: 32, artist: 'Stormzy', name: 'Own it' },
        { id: 33, artist: 'Stormzy', name: 'Audacity' },
        { id: 34, artist: 'Stormzy', name: 'Rainfall' },
        { id: 35, artist: 'Stormzy', name: 'Vossi Bop' },
        { id: 36, artist: 'Stormzy', name: 'Handsome' },
        { id: 37, artist: 'Stormzy', name: 'Do better' },
        { id: 38, artist: 'Stormzy', name: 'Big Michael' },
        { id: 39, artist: 'Stormzy', name: 'Lessons' },
        { id: 40, artist: 'Stormzy', name: 'Bronze' },
        { id: 41, artist: 'Frozen', name: 'Let It Go' },
        { id: 42, artist: 'Aladdin', name: 'A Whole New World' },
        { id: 43, artist: 'The Lion King', name: 'Circle Of Life' },
        { id: 44, artist: 'The Lion King', name: 'Hakuna Matata' },
        { id: 45, artist: 'Toy Story', name: `You've Got a Friend in Me` },
        { id: 46, artist: 'Cat Stevens', name: 'Father and Son' },
        { id: 47, artist: 'John Denver', name: 'Country Roads' },
        { id: 48, artist: 'John Denver', name: 'Leaving On A Jet Plane' },
        { id: 49, artist: 'Disturbed', name: 'The Sound of Silence' },
        { id: 50, artist: 'Rick Astley', name: 'Never Gonna Give You Up' },
      ]);
    });
};