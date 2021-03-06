const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
  getUsers,
  getSongsArtist,
  joinUsersWithPlaylist,
  insertUser,
  getSong
}

function getSong (id, db = database) {
  return db('songs')
  .where('id', id)
  .first()
  .select()
}

function getUsers (db = database) {
  return db('users')
    .select()
}

function getSongsArtist (id, db = database) {
  return db('playlistsongs')
    .join('songs', 'playlistsongs.song_id', 'songs.id')
    .join('playlists', 'playlistsongs.playlist_id', 'playlists.id')
    .where('playlist_id', id)
    .select()
}

function joinUsersWithPlaylist(id, db = database) {
  return db('users')
    .join('playlists', 'users.id', 'playlists.user_id')
    .where('users.id', id)
    .select('users.id', 'users.name as userName',  'playlists.name as playlistName', 'img', 'city', 'playlists.id as playlistId')
    .then(result => {
      return {
        img: result[0].img,
        userName: result[0].userName,
        city: result[0].city,
        playlists: result.map(post => ({
          playlistName: post.playlistName,
          playlistId: post.playlistId
        }))
      }
    })
}


function insertUser (input, db = database) {
    return db('users')
      .insert( { name: input.name, city: input.city, img: input.img } )
}
