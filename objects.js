var playlist = {TaylorSwift : `Blank Space`}
function updatePlaylist(playlist,artist,songTitle){
  playlist[artist]=songTitle
}
removeFromPlaylist(playlist,artistName){
  delete playlist.artistName
  
}