function activeApp(evt,cityName){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();







function myNav() {
  var x = document.getElementById("nav");
  if (x.className === "onlynav") {
    x.className += " responsive";
  } else {
    x.className = "onlynav";
  }
}


const betData = [{
  dates : "17/07/22 22:45PM",
  leftimg : '/Image/Groups/chelsea.png',
  leftgroup: 'Chelsea',
  VS: 'VS',
  rightgroup:'Manchester City',
  rightimg: '/Image/Groups/manchester-city.png',
  bet1coef :'1.25',
  betxcoef :'2.05',
  bet2coef :'3.75'
},
{
  dates : "17/07/22 22:45PM",
  leftimg : '/Image/Groups/barcelona.png',
  leftgroup: 'FC Barcelona',
  VS: 'VS',
  rightgroup:'Real Madrid',
  rightimg: '/Image/Groups/real-madrid.png',
  bet1coef :'3.45',
  betxcoef :'2.75',
  bet2coef :'1.15'
},
{
  dates : "17/07/22 22:45PM",
  leftimg : '/Image/Groups/chelsea.png',
  leftgroup: 'Chelsea',
  VS: 'VS',
  rightgroup:'Manchester City',
  rightimg: '/Image/Groups/manchester-city.png',
  bet1coef :'1.01',
  betxcoef :'3.25',
  bet2coef :'2.25'
},{
  dates : "17/07/22 22:45PM",
  leftimg : '/Image/Groups/chelsea.png',
  leftgroup: 'Chelsea',
  VS: 'VS',
  rightgroup:'Manchester City',
  rightimg: '/Image/Groups/manchester-city.png',
  bet1coef :'1.05',
  betxcoef :'3.25',
  bet2coef :'2.25'
},{
  dates : "17/07/22 22:45PM",
  leftimg : '/Image/Groups/chelsea.png',
  leftgroup: 'Chelsea',
  VS: 'VS',
  rightgroup:'Manchester City',
  rightimg: '/Image/Groups/manchester-city.png',
  bet1coef :'1.05',
  betxcoef :'3.25',
  bet2coef :'2.25'
},{
  dates : "17/07/22 22:45PM",
  leftimg : '/Image/Groups/chelsea.png',
  leftgroup: 'Chelsea',
  VS: 'VS',
  rightgroup:'Manchester City',
  rightimg: '/Image/Groups/manchester-city.png',
  bet1coef :'1.05',
  betxcoef :'3.25',
  bet2coef :'2.25'
},{
  dates : "17/07/22 22:45PM",
  leftimg : '/Image/Groups/chelsea.png',
  leftgroup: 'Chelsea',
  VS: 'VS',
  rightgroup:'Manchester City',
  rightimg: '/Image/Groups/manchester-city.png',
  bet1coef :'1.05',
  betxcoef :'3.25',
  bet2coef :'2.25'
}
]
let groupData = [{
     groupimg: "/Image/Groups/germany.png",
     name:"Germany" ,
},
{
  groupimg: "/Image/Groups/spain.png",
  name:"Spain" ,
},{
  groupimg: "/Image/Groups/georgia.png",
  name:"Georgia" ,
},{
  groupimg: "/Image/Groups/English.png",
  name:"English" ,
},{
  groupimg: "/Image/Groups/russia.png",
  name:"Russia" ,

},{
  groupimg: "/Image/Groups/belgium.png",
  name:"Belgium" ,
},{
  groupimg: "/Image/Groups/france.png",
  name:"France" ,
}
]


 document.getElementById("bet-card").innerHTML = betData.map(index => {
 
  return  `  <div  class="all-bet-card"> 
  <div class="row">
  <div class="column">
    <div class="card">
      <h5>${index.dates}<h5/>
      <h4><img  src=${index.leftimg} /> ${index.leftgroup}</h4>
      <h4> ${index.VS}</h4>
      <h4><img src=${index.rightimg}> ${index.rightgroup}</h4>
      <p> 1 <button>${index.bet1coef}</button></p>
      <p> X  <button>${index.betxcoef}</button></p>
      <p> 2  <button>${index.bet2coef}</button></p>
    </div>
  </div>
  </div> `
}).join('');

document.getElementById("bet-species").innerHTML = groupData.map(index => {
  return `<div class="bet-species-container">
  <img width="20px" src=${index.groupimg} />
  <p  style="color:white;">${index.name}</p>
  </div>`
}).join('');
