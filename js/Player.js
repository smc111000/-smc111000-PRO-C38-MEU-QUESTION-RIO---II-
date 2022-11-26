class Player {
  constructor (){}


getCount(){
  // leia os dados e armazene o valor de playerCount
  var playerCountRef = database.ref('playerCount');
   playerCountRef.on ("value",(data)=>{
     playerCount = data.val(); })
  
}

updateCount (count){
  // atualize o playerCount
  database.ref("/").update({
   playerCount: count
  })

}
}
