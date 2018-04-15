var playlist = {TaylorSwift : `Blank Space`}
function updatePlaylist(playlist,artist,songTitle){
  playlist[artist]=songTitle
}
function removeFromPlaylist(playlist,artist){
  delete playlist.artist;
  playlist
}
