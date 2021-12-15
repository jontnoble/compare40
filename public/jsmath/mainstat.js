//wound rolls of 6 cause -ap
// poison/ always wound on a 2/3/4
// unmodified hit rolls
// reroll save rolls of one
//6's generate 1 extra hit roll
//reroll failed wound rolls
// d6, d3 for wound, damage and attacks



//Theme Section
const ultra = document.getElementById('ultra');
const body = document.body;


console.log("Connected");
const firstScore = document.getElementById('firstScore');
const secondScore = document.getElementById('secondScore');
const kill2 = document.getElementById("killT2");
const kill = document.getElementById("killT");
const subBoth = document.getElementById("subBoth")
const diceForm = document.getElementById("diceForm");
const compare = document.getElementById('compare');
const toggleForm2 = document.getElementById('diceForm2');
const toggleRes2 = document.getElementById('results2');
const solo = document.getElementById('solo');
const toBot = document.getElementById('botOfPage');
const hideBot1 = document.getElementById('hideBot1');
const hideBot2 = document.getElementById('hideBot2');
const results = document.getElementById('results');
const def = document.getElementById('def');
const machine = document.getElementById('machine');
const darkMode = document.getElementById('darkMode');
const lightMode = document.getElementById('lightMode');
const ldMode = document.getElementById('ldMode');
const topPanel = document.getElementById('topPanel');
const midButs = document.getElementById('midButs');
const botPage =document.getElementById('botOfPage');
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


//Light/dark Mode Toggle
ldMode.addEventListener('click', () => {
  lightMode.classList.toggle('hidden');
  darkMode.classList.toggle('hidden');
  diceForm.classList.toggle('dark');
  toggleForm2.classList.toggle('dark');
  toggleRes2.classList.toggle('light');
  results.classList.toggle('light');
  toggleRes2.classList.toggle('dark')
  results.classList.toggle('dark');
  topPanel.classList.toggle('light');
  topPanel.classList.toggle('dark');
  midButs.classList.toggle('light');
  midButs.classList.toggle('dark');
  botPage.classList.toggle('light');
  botPage.classList.toggle('dark');
})

//Uses cookies
const cookies = document.cookie
.split(';')
.map(cookie => cookie.split('='))
.reduce((accumulator, [key, value]) =>
({accumulator, [key.trim()]: decodeURIComponent(value) }),
{});

body.classList.add(cookies.theme);

def.addEventListener('click', () => {
  body.removeAttribute('class');
})

ultra.addEventListener('click', () => {
  body.removeAttribute('class');
  body.classList.add('ultra');
  document.cookie="theme=ultra";
})

machine.addEventListener('click', () => {
  body.removeAttribute('class');
  body.classList.add('machine');
  document.cookie="theme=machine";
})

plague.addEventListener('click', () => {
  body.removeAttribute('class');
  body.classList.add('plague');
  document.cookie="theme=plague";
})

def.addEventListener('click', () => {
  body.removeAttribute('class');
  body.classList.add('default');
  document.cookie="theme=default";
})


function hasNum(killString) {
  let killNum = [];
  for (let i = 0; i < killString.length; i++) {
    let theNum = /\d/.test(killString[i]);
    if(theNum === true) {
      killNum.push(killString[i]);
    }
  } 
    if (killNum[1] === NaN || killNum[1] === undefined) {
    killNum[1] = 0;
  }  
    if (killNum[2] === NaN || killNum[2] === undefined) {
    killNum[2] = 0;
  } 
    if (killNum[3] === NaN || killNum[3] === undefined) {
    killNum[3] = 0;
  }
  return `${killNum[0]}${killNum[1]}${killNum[2]}${killNum[3]}`;
  
}


let score1 = 0;
let score2 = 0;
function compareData() {
  getFormData();
  getFormData2();
  let sum1 = hasNum(kill.textContent);
  let sum2 = hasNum(kill2.textContent);
  if (sum1 > sum2) {
    score1++;
  } else if (sum1 < sum2) {
    score2++
  }
  if(score1 > score2) {
    firstScore.classList.add('higherS');
    firstScore.classList.remove('lowerS')
    secondScore.classList.remove('higherS')
    secondScore.classList.add('lowerS');
  } else if (score1 < score2){
    firstScore.classList.add('lowerS');
    firstScore.classList.remove('higherS');
    secondScore.classList.add('higherS');
    secondScore.classList.remove('lowerS');
  } else {
    firstScore.classList.remove('lowerS');
    firstScore.classList.remove('higherS');
    secondScore.classList.remove('higherS');
    secondScore.classList.remove('lowerS');
  }
  firstScore.innerText = score1;
  secondScore.innerText= score2;
}
 
  

subBoth.addEventListener("click", (e) => {
  e.preventDefault;
  compareData();
})


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
const resetBtn = document.getElementById("resetBtn");
const hideScore1 = document.getElementById("hideScore1");
const sub100 = document.getElementById("sub100");
const process = document.getElementById('process');

//Toggle Hidden Section
compare.addEventListener("click", () => {
  hideBot1.classList.toggle('hidden');
  hideBot2.classList.toggle('hidden');
  toBot.classList.toggle('hidden');
  toggleForm2.classList.toggle('hidden');
  toggleRes2.classList.toggle('hidden');
  compare.classList.toggle('hidden');
  solo.classList.toggle('hidden');
  subBoth.classList.toggle('hidden');
  hideScore1.classList.toggle('hidden');
  hideScore1.classList.add('wrap');
  resetBtn.classList.toggle('hidden');
  sub100.classList.toggle('hidden');
  })
solo.addEventListener('click', () => {
  hideBot1.classList.toggle('hidden');
  hideBot2.classList.toggle('hidden');
  toBot.classList.toggle('hidden');
  toggleForm2.classList.toggle('hidden');
  toggleRes2.classList.toggle('hidden');
  compare.classList.toggle('hidden');
  solo.classList.toggle('hidden');
  subBoth.classList.toggle('hidden')
  hideScore1.classList.remove('wrap');
  hideScore1.classList.toggle('hidden');
  resetBtn.classList.toggle('hidden');
  sub100.classList.toggle('hidden');
})

//submit compare data 100 times
function subMulti () {
  setTimeout (function(){
for (let i = 0; i < 100; i++){
  compareData();
}
process.classList.toggle("hidden");
sub100.classList.toggle("hidden"); }, 3000);
}
sub100.addEventListener('click', () => {
  process.classList.toggle("hidden");
  sub100.classList.toggle("hidden");
  subMulti(); 
})

//resets score
resetBtn.addEventListener('click', () => {
  score1 = 0;
  score2 = 0;
  firstScore.innerText = 0;
  secondScore.innerText = 0;
  firstScore.classList.remove('lowerS');
  firstScore.classList.remove('higherS');
  secondScore.classList.remove('higherS');
  secondScore.classList.remove('lowerS');
})


function getFormData() {
  let formObj = {ints: ['att', 'wsbs', 'posHit', 'negHit', 'str', 'posWnd', 'negWnd',
  'weapDmg', 'ap', 'hp', 'tough', 'sv', 'invul', 'cover', 'shrug'], 
  boolean: ['reW1', 'autoH', 'autoWnd', 'reSv', 'spill', 'reH1', 'gen1Ex', 'gen2Ex', 'mw6', 'adMw6']
  }
  let parseIntArr = [];
  let parseBoolArr = [];
  let finalArr = [];
for(const int of formObj.ints) {
  parseIntArr.push(document.getElementById(`${int}`).value);
}
for (const bool of formObj.boolean) {
  parseBoolArr.push(document.getElementById(`${bool}`).value);
}
for (const parseStr of parseIntArr) {
  if(`${parseStr}`.includes('d6') || `${parseStr}`.includes('d3')) {
  finalArr.push(parseStr);  
  } else {
  finalArr.push(parseInt(parseStr));
}
}
for (const parseBoo of parseBoolArr) {
  finalArr.push(parseBoo === '1');
}
  let subD1 = finalArr[0];
  let subD2 = finalArr[1];
  let subD3 = finalArr[2];
  let subD4 = finalArr[3];
  let subD5 = finalArr[4];
  let subD6 = finalArr[5];
  let subD7 = finalArr[6];
  let subD8 = finalArr[7];
  let subD9 = finalArr[8];
  let subD10 = finalArr[9];
  let subD11 = finalArr[10];
  let subD12 = finalArr[11];
  let subD13 = finalArr[12];
  let subD14 = finalArr[13];
  let subD15 = finalArr[14];
  let subD16 = finalArr[15];
  let subD17 = finalArr[16];
  let subD18 = finalArr[17];
  let subD19 = finalArr[18];
  let subD20 = finalArr[19];
  let subD21 = finalArr[20];
  let subD22 = finalArr[21];
  let subD23 = finalArr[22];
  let subD24 = finalArr[23];
  let subD25 = finalArr[24];
  let subD26 = finalArr[25];

submitData(subD1, subD2, subD3, subD4, subD5, subD6, subD7, subD8, subD9, subD10, subD11, subD12,
  subD13, subD14, subD15, subD16, subD17, subD18, subD19, subD20, subD21, subD22, subD23, subD24, subD25, subD26);
}

// Retrieves diceForm1's inputs; parses them into integers/booleans and passes data to "submitData"
diceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getFormData();
})

//Tidy up variables in Calculation function to match EJS
function submitData(
  attacks, wsbs, poshitmod,
  neghitmod, str, posWoundMod,
  negWoundMod, weapdmg, ap, tarhp,
  tough, sv, invuln, cover,
  shrug, rerollWound1,
  autoHit, autoWound, reFailedSave,
  spillDmg, rerollHit1, gen1ex,
  gen2ex, MWOn6, addMWOn6
) {
  let hit = 0;
  let hitArr = [];
  let wsbsVal = wsbs;
  let woundArr = [];
  let woundVal = 0;
  let wounded = 0;
  let toSaveArr = [];
  let damaged = 0;
  let preSave = sv - cover + ap;
  let dirMW = 0;
  let autoWdmg = 0;
  let hitReroll = 0;
  let woundReroll = 0;
  let reHitArr = [];
  let reWoundArr = [];
  let shrugDmg = 0;
  let shrugArr = [];
  let shrugArrMW = [];
  let shrugMWDmg = 0;
  let toSaveReArr = [];
  let toSaveRe = 0;
  
  const d3 = "d3";
  const d6 = "d6";
  let attackData = 0;
  let num = Math.floor(Math.random() * 6 + 1);

  // resets previous actual kills
  let actual = document.getElementById('actualKT');
  actual.innerText='';
 
  // Hit Calculation Section

  //d3 and d6 section
  
  if(`${attacks}`.indexOf(d6) > -1 && attacks[0] === 'd') {
   attackData = num;
 } else if(`${attacks}`.indexOf(d3) > -1 && attacks[0] === 'd') {
   attackData = Math.ceil(num / 2);
  } else if (`${attacks}`.indexOf(d6) > -1 && attacks[0] != 'd') {
    let i = 0;
    while (i < attacks[0]) {
      attackData += Math.floor(Math.random() * 6 + 1);
      i++;
    }
  } else if (`${attacks}`.indexOf(d3) > -1 && attacks[0] != 'd') {
    let i = 0;
    while (i < attacks[0]) {
      attackData += Math.ceil(Math.floor(Math.random() * 6 + 1) / 2);
      i++;
    } 
  } else if(Number.isInteger(attacks)) {
    attackData = attacks;
  }
  // To Hit Modifiers Section
  if (wsbs === 2 && poshitmod >= 1 && neghitmod < 1) {
  } else if (wsbs === 3 && poshitmod >= 2) {
    wsbsVal--;
  } else if (poshitmod === 1) {
    wsbsVal--;
  } else if (poshitmod == 2) {
    wsbsVal -= 2;
  }

  if (wsbs >= 6) {
  } else if (wsbs === 5 && neghitmod === 2) {
    wsbsVal++;
  } else if (neghitmod === 1) {
    wsbsVal++;
  } else if (neghitmod === 2) {
    wsbsVal += 2;
  }
  document.getElementById("hitValT").innerText=`Final hit value: ${wsbsVal}`;

  //To Hit Dice Roll Section

  if (autoHit === true) {
    hit += attackData;
    document.getElementById("hRollT").innerText=`Automatic hits: ${attackData}`;
  }

  if (autoHit === false) {
    for (let i = 0; i < attackData; i++) {
      let randRoll = function randRoll() {
        let num = Math.floor(Math.random() * 6 + 1);
        hitArr.push(num);
      };
      randRoll();
    }
    for (const doesHit of hitArr) {
      if (doesHit === 6 && autoWound === true) {
        autoWdmg++;
      } else if (doesHit === 1 && rerollHit1 === true) {
        hitReroll++;
      } else if (doesHit >= wsbsVal && doesHit === 6 && gen1ex === true) {
        hit += 2;
      } else if (doesHit >= wsbsVal && doesHit === 6 && gen2ex === true) {
        hit += 3;
      } else if (MWOn6 === true && doesHit === 6) {
        dirMW++;
      } else if (addMWOn6 === true && doesHit === 6) {
        dirMW++;
        hit++;
      } else if (doesHit >= wsbsVal) {
        hit++;
      }
    }

    if (hitReroll >= 1) {
      for (let i = 0; i < hitReroll; i++) {
        let randRoll = function randRoll() {
          let num = Math.floor(Math.random() * 6 + 1);
          reHitArr.push(num);
        };
        randRoll();
      }
    }
    for (const doesHit of reHitArr) {
      if (rerollHit1 === true) {
        if (doesHit === 6 && autoWound === true) {
          autoWdmg++;
        } else if (doesHit >= wsbsVal && doesHit === 6 && gen1ex === true) {
          hit += 2;
        } else if (doesHit >= wsbsVal && doesHit === 6 && gen2ex === true) {
          hit += 3;
        } else if (MWOn6 === true && doesHit === 6) {
          dirMW++;
        } else if (addMWOn6 === true && doesHit === 6) {
          dirMW++;
          hit++;
        } else if (doesHit >= wsbsVal) {
          hit++;
        }
      }
    }
  }
  if (autoHit === false) {
    document.getElementById("hRollT").innerText=`Hit rolls: ${hitArr}
    Hits successful: ${hit}`
  }
  if (rerollHit1 === true) {
    document.getElementById("hReRollT").innerText=`Hit rerolls: ${reHitArr}`;
  }

  
  if (MWOn6 === true || addMWOn6 === true) {
    document.getElementById("dMWT").innerText=`Mortal wounds: ${dirMW}`;
  }

  //Wound Calculation Section

  if (str === tough) {
    woundVal = 4;
  } else if (str >= tough * 2) {
    woundVal = 2;
  } else if (tough >= str * 2) {
    woundVal = 6;
  } else if (str < tough) {
    woundVal = 5;
  } else if (str > tough) {
    woundVal = 3;
  }

  if (posWoundMod >= 1) {
    woundVal -= posWoundMod;
  } else if (negWoundMod >= 1) {
    woundVal += negWoundMod;
  }

  if (autoWdmg >= 1) {
    document.getElementById("wValT").innerText=`Final wound value: ${woundVal}
    Automatic wounds: ${autoWdmg}`
  } else {document.getElementById("wValT").innerText=`Final wound value: ${woundVal}`}

  for (let i = 0; i < hit; i++) {
    let randRoll = function randRoll() {
      let num = Math.floor(Math.random() * 6 + 1);
      woundArr.push(num);
    };
    randRoll();
  }
  for (const doesWound of woundArr) {
    if (doesWound >= woundVal) {
      wounded++;
    } else if (rerollWound1 === true && doesWound === 1) {
      woundReroll++;
    }
  }

  document.getElementById("wRollT").innerText=`Wound rolls: ${woundArr}`;

  if (rerollWound1 === true) {
    document.getElementById("wReNumT").innerText=`Wounds to reroll: ${woundReroll}`;
    for (let i = 0; i < woundReroll; i++) {
      let randRoll = function randRoll() {
        let num = Math.floor(Math.random() * 6 + 1);
        reWoundArr.push(num);
      };
      randRoll();
    }
    for (const doesWound of reWoundArr) {
      if (doesWound >= woundVal) {
        wounded++;
      }
    }
    document.getElementById("wReRollT").innerText=`Wound rerolls: ${reWoundArr}`;
  }

  document.getElementById("wSucT").innerText=`Total wounds to save: ${wounded + autoWdmg}`;

  //Save Calculation Section

  for (let i = 0; i < wounded + autoWdmg; i++) {
    let randRoll = function randRoll() {
      let num = Math.floor(Math.random() * 6 + 1);
      toSaveArr.push(num);
    };
    randRoll();
  }

  for (const doesSave of toSaveArr) {
    if (doesSave < preSave && doesSave < invuln && reFailedSave === false) {
      damaged++;
    } else if (doesSave < preSave && invuln === 0 && reFailedSave === false) {
      damaged++;
    } else if (doesSave < preSave && reFailedSave === true) {
      toSaveRe++;
    }
  }

  if (invuln < 2) {
  document.getElementById("svT").innerText=`Final Save Value: ${preSave}`;
  }
  if (invuln >= 2) {
    document.getElementById("svT").innerText=`Final Save Value: ${preSave}
    Invulnerable Save: ${invuln}`;  
  }

  document.getElementById("svRollsT").innerText=`Save Rolls: ${toSaveArr}`;

  if (reFailedSave === true) {
    for (let i = 0; i < toSaveRe; i++) {
      let randRoll = function randRoll() {
        let num = Math.floor(Math.random() * 6 + 1);
        toSaveReArr.push(num);
      };
      randRoll();
    }
    document.getElementById("svReRollsT").innerText=`Save rerolls: ${toSaveReArr}`;

    for (const doesSave of toSaveReArr) {
      if (doesSave < preSave && doesSave < invuln) {
        damaged++;
      } else if (doesSave < preSave && invuln === 0) {
        damaged++;
      }
    }
  }
  document.getElementById("finalDmgT").innerText=`Wounds passing save: ${damaged}`
  ;

  // Damage with No Shrug Calculations Section

  // d6 and d3 damage calculation
  let weapdmgF = 0;
  let weapdmgN = 0;
  let weapdmgNtot = 0;
  let remainKill = 0;
  

  if(`${weapdmg}`.indexOf(d6) > -1 && weapdmg[0] === 'd') {
    
    for(let i = 0; i < damaged; i++) {
      let dmgDice6 = Math.floor(Math.random() * 6 + 1);
      weapdmgN += dmgDice6;
      weapdmgNtot += dmgDice6; 
     if(weapdmgN >= tarhp) {
       remainKill += 1;
       weapdmgN = 0;
     }
     let divideDmg = tarhp / weapdmgN;
     console.log(remainKill);
     console.log(divideDmg);
     weapdmgF = weapdmgNtot / damaged;
     document.getElementById("killT").innerText=`Total Kills: ${remainKill + divideDmg}`
    } 
  }
  // Damage with No Shrug Calculations Section

  if (shrug === 0 && dirMW === 0) {
    let weaponCalcGT = damaged * tarhp / tarhp;
    let weaponCalcLT = damaged * weapdmg / tarhp;
    let spillDmgCalc = damaged * weapdmg / tarhp;

    if (weapdmg > tarhp && spillDmg === false) {
      document.getElementById("killT").innerText=`Total kills: ${weaponCalcGT} models`;
    } else if (shrug === 0 && spillDmg === true && weapdmg > tarhp) {
      document.getElementById("killT").innerText=`Total kills: ${spillDmgCalc} models`;
    } else {
      document.getElementById("killT").innerText=`Total kills: ${weaponCalcLT} models`;
    }
  }

  if (shrug === 0 && dirMW >1) {
    let mwCalc = dirMW / tarhp;
    let weaponCalcGT = damaged * tarhp / tarhp;
    let weaponCalcLT = damaged * weapdmg / tarhp;
    let spillDmgCalc = damaged * weapdmg / tarhp;
    let mwDiv2 = document.getElementById('mwDiv');
    if (weapdmg >= tarhp && spillDmg === false) {
      mwDiv2.innerText= `Weapon Kills: ${weaponCalcGT}
       Mortal Wound Kills: ${mwCalc}`
      document.getElementById("killT").innerText=`Total kills: ${weaponCalcGT + mwCalc} models`;
    } else if (shrug === 0 && spillDmg === true && weapdmg > tarhp) {
      mwDiv2.innerText= `Weapon Kills: ${spillDmgCalc} 
      Mortal Wound Kills: ${mwCalc}`
      document.getElementById("killT").innerText=`Total kills: ${spillDmgCalc + mwCalc}models`;
    } else {
      mwDiv2.innerText= `Weapon Kills: ${weaponCalcLT} 
      Mortal Wound Kills: ${mwCalc}`
      document.getElementById("killT").innerText=`Total kills: ${weaponCalcLT + mwCalc} models`;
    }
  }

  //Shrug Calculation Section

  // Shrug for weapon damage

  if (shrug > 4 && dirMW === 0) {
    for (let i = 0; i < damaged; i++) {
      let randRoll = function randRoll() {
        let num = Math.floor(Math.random() * 6 + 1);
        shrugArr.push(num);
      };
      randRoll();
    }
    for (const doesShrug of shrugArr) {
      if (doesShrug < shrug) {
        shrugDmg++;
      }
    }

    let weaponCalcGT = (shrugDmg * tarhp) / tarhp;
    let weaponCalcLT = (shrugDmg * weapdmg) / tarhp;
    let spillDmgCalc = (shrugDmg * weapdmg) / tarhp;

    if (weapdmg > tarhp && spillDmg == false) {
      document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr}
      Total kills: ${weaponCalcGT} models`;
    } else if (spillDmg === true && weapdmg > tarhp) {
      document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr}
      Total kills: ${spillDmgCalc} models`;
    } else {
      document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr}
      Total kills: ${weaponCalcLT} models`;
    }
  }

  if (shrug > 4 && dirMW >= 1) {
    for (let i = 0; i < dirMW; i++) {
      let randRoll = function randRoll() {
        let num = Math.floor(Math.random() * 6 + 1);
        shrugArrMW.push(num);
      };
      randRoll();
    }
    for (const doesShrug of shrugArrMW) {
      if (doesShrug < shrug) {
        shrugMWDmg++;
      }
    }
    let weaponCalcGT = (shrugDmg * tarhp) / tarhp;
    let weaponCalcLT = (shrugDmg * weapdmg) / tarhp;
    let spillDmgCalc = (shrugDmg * weapdmg) / tarhp;
    let shrugMWCalc = shrugMWDmg / tarhp;

    if (weapdmg >= tarhp && spillDmg == false) {
      document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr + shrugArrMW}
      Total kills: ${weaponCalcGT + shrugMWCalc} models`;
    } else if (spillDmg === true && weapdmg > tarhp) {
      document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr + shrugArrMW}
      Total kills: ${spillDmgCalc + shrugMWCalc} models`;
    } else {
      document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr + shrugArrMW}
      Total kills: ${weaponCalcLT + shrugMWCalc} models`;
    }

  }
}