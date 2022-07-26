
import data from "../data.json";




 document.getElementById("bet-card").innerHTML = data.map(index => {
  return  `<div  class="all-bet-card"> 
  <h3 class="bet-group">${index.groups}</h3> 
  <div class="flex-box-bet">
  <div class="bet-1-left">  ${index.bet1}
    <button> ${index.bet1coef}<button/>
  </div>
  <div class="bet-x-mid"> 
  ${index.betx}
  <button> 
  ${index.betxcoef}</button> </div>
  <div class="bet-2-right">
   ${index.bet2}
   <button> ${index.bet2coef}</button>
    </div>
  </div>
  </div> `
});

