var playlist = {TaylorSwift : Blank Space}
function updatePlaylist(playlist,artist,songTitle){
  return Object.assign({},playlist,{[artist]: songTitle})
}
function removeFromPlaylist(playlist,artist){
  delete playlist.artist
}
