var playlist = {TaylorSwift : `Blank Space`}
function updatePlaylist(playlist,artist,songTitle){
  playlist[artist]=songTitle
  delete playlist.Slowdive
}
function removeFromPlaylist(playlist, artistName){

  delete playlist.artistName
}
