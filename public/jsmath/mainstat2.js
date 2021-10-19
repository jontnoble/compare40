const diceForm2 = document.getElementById("diceForm2");

diceForm2.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form 2 has been submitted!");
  getFormData2();
});


function getFormData2() {

  const rAtt = document.getElementById("att2").value;
  const rWsbs = document.getElementById("wsbs2").value;
  const rAutoH = document.getElementById("autoH2").value;
  const rReH1 = document.getElementById("reH12").value;
  const rAutoWnd = document.getElementById("autoWnd2").value;
  const rGen1Ex = document.getElementById("gen1Ex2").value;
  const rGen2Ex = document.getElementById("gen2Ex2").value;
  const rMw6 = document.getElementById("mw62").value;
  const rAdMw6 = document.getElementById("adMw62").value;
  const rPosHit = document.getElementById("posHit2").value;
  const rNegHit = document.getElementById("negHit2").value;
  const rStr = document.getElementById("str2").value;
  const rPosWnd = document.getElementById("posWnd2").value;
  const rNegWnd = document.getElementById("negWnd2").value;
  const rReW1 = document.getElementById("reW12").value;
  const rWeapDmg = document.getElementById("weapDmg2").value;
  const rAp = document.getElementById("ap2").value;
  const rHp = document.getElementById("hp2").value;
  const rTough = document.getElementById("tough2").value;
  const rSv = document.getElementById("sv2").value;
  const rInvul = document.getElementById("invul2").value;
  const rCover = document.getElementById("cover2").value;
  const rReSv = document.getElementById("reSv2").value;
  const rShrug = document.getElementById("shrug2").value;
  const rSpill = document.getElementById("spill2").value;
  
  //Parses form strings into numbers and booleans * come back to make a function to do this. Parseint function/check true function

  const cAtt = parseInt(rAtt);
  const cWsbs = parseInt(rWsbs);
  const cAutoH = rAutoH === "1";
  const cReH1 = rReH1 === "1";
  const cAutoWnd = rAutoWnd === "1";
  const cGen1Ex = rGen1Ex === "1";
  const cGen2Ex = rGen2Ex === "1";
  const cMw6 = rMw6 === "1";
  const cAdMw6 = rAdMw6 === "1";
  const cPosHit = parseInt(rPosHit);
  const cNegHit = parseInt(rNegHit);
  const cStr = parseInt(rStr);
  const cPosWnd = parseInt(rPosWnd);
  const cNegWnd = parseInt(rNegWnd);
  const cReW1 = rReW1 === "1";
  const cWeapDmg = parseInt(rWeapDmg);
  const cAp = parseInt(rAp);
  const cHp = parseInt(rHp);
  const cTough = parseInt(rTough);
  const cSv = parseInt(rSv);
  const cInvul = parseInt(rInvul);
  const cCover = parseInt(rCover);
  const cReSv = rReSv === "1";
  const cShrug = parseInt(rShrug);
  const cSpill = rSpill === "1";

  submitData2(
    cAtt,
    cWsbs,
    cAutoH,
    cAutoWnd,
    cReH1,
    cGen1Ex,
    cGen2Ex,
    cMw6,
    cSpill,
    cAdMw6,
    cPosHit,
    cNegHit,
    cStr,
    cTough,
    cPosWnd,
    cNegWnd,
    cReW1,
    cSv,
    cReSv,
    cCover,
    cAp,
    cInvul,
    cShrug,
    cHp,
    cWeapDmg,
  );
}

//Tidy up variables in Calculation function to match EJS
function submitData2(
  attacks,
  wsbs,
  autoHit,
  autoWound,
  rerollHit1,
  gen1ex,
  gen2ex,
  MWOn6,
  spillDmg,
  addMWOn6,
  poshitmod,
  neghitmod,
  str,
  tough,
  posWoundMod,
  negWoundMod,
  rerollWound1,
  sv,
  reFailedSave,
  cover,
  ap,
  invuln,
  shrug,
  tarhp,
  weapdmg
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
  // Hit Calculation Section

  console.log(attacks);
  if(`${attacks}`.indexOf(d3)) {
   attackData = num;
 } else if(`${attacks}`.indexOf(d6)) {
   attackData = Math.ceil(num / 2);
   console.log(attackData);
 } 
 if(Number.isInteger(attacks)) {
    attackData = attacks;
    console.log(attackData);
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
  document.getElementById("hitValT2").innerText=`Final hit value: ${wsbsVal}`;

  //To Hit Dice Roll Section

  if (autoHit === true) {
    hit += attackData;
    document.getElementById("hRollT2").innerText=`Automatic hits: ${attackData}`;
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
    document.getElementById("hRollT2").innerText=`Hit rolls: ${hitArr}.
    Hits successful: ${hit}`;
  }
  if (rerollHit1 === true) {
    document.getElementById("hReRollT2").innerText=`Hit rerolls: ${reHitArr}`;
  }
  
  if (MWOn6 === true || addMWOn6 === true) {
    document.getElementById("dMWT2").innerText=`Mortal wounds: ${dirMW}`;
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
    document.getElementById("wValT2").innerText=`Final wound value: ${woundVal}
    Automatic wounds: ${autoWdmg}`
  } else {document.getElementById("wValT2").innerText=`Final wound value: ${woundVal}`}

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

  document.getElementById("wRollT2").innerText=`Wound rolls: ${woundArr}`;

  if (rerollWound1 === true) {
    document.getElementById("wReNumT2").innerText=`Wounds to reroll: ${woundReroll}`;
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
    document.getElementById("wReRollT2").innerText=`Wound rerolls: ${reWoundArr}`;
  }

  document.getElementById("wSucT2").innerText=`Total wounds to save: ${wounded + autoWdmg}`;

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
  document.getElementById("svT2").innerText=`Final Save Value: ${preSave}`;
  }
  if (invuln >= 2) {
    document.getElementById("svT2").innerText=`Final Save Value: ${preSave}
    Invulnerable Save: ${invuln}`;  
  }

  document.getElementById("svRollsT2").innerText=`Save Rolls: ${toSaveArr}`;

  if (reFailedSave === true) {
    for (let i = 0; i < toSaveRe; i++) {
      let randRoll = function randRoll() {
        let num = Math.floor(Math.random() * 6 + 1);
        toSaveReArr.push(num);
      };
      randRoll();
    }
    document.getElementById("svReRollsT2").innerText=`Save rerolls: ${toSaveReArr}`;

    for (const doesSave of toSaveReArr) {
      if (doesSave < preSave && doesSave < invuln) {
        damaged++;
      } else if (doesSave < preSave && invuln === 0) {
        damaged++;
      }
    }
  }

  document.getElementById("finalDmgT2").innerText=`Wounds passing save: ${damaged}`
  ;

  // Damage with No Shrug Calculations Section

  if (shrug === 0 && dirMW === 0) {
    let weaponCalcGT = damaged * tarhp / tarhp;
    let weaponCalcLT = damaged * weapdmg / tarhp;
    let spillDmgCalc = damaged * weapdmg / tarhp;

    if (weapdmg > tarhp && spillDmg === false) {
      document.getElementById("killT2").innerText=`Total kills: ${weaponCalcGT} models`;
    } else if (shrug === 0 && spillDmg === true && weapdmg > tarhp) {
      document.getElementById("killT2").innerText=`Total kills: ${spillDmgCalc} models`;
    } else {
      document.getElementById("killT2").innerText=`Total kills: ${weaponCalcLT} models`;
    }
  }

  if (shrug === 0 && dirMW >1) {
    let mwCalc = dirMW / tarhp;
    let weaponCalcGT = damaged * tarhp / tarhp;
    let weaponCalcLT = damaged * weapdmg / tarhp;
    let spillDmgCalc = damaged * weapdmg / tarhp;
    let mwDiv2 = document.getElementById('mwDiv2');
    if (weapdmg > tarhp && spillDmg === false) {
      mwDiv2.innerText= `Weapon Kills: ${weaponCalcGT}
       Mortal Wound Kills: ${mwCalc}`
      document.getElementById("killT2").innerText=`Total kills: ${weaponCalcGT + mwCalc} models`;
    } else if (shrug === 0 && spillDmg === true && weapdmg > tarhp) {
      mwDiv2.innerText= `Weapon Kills: ${spillDmgCalc} 
      Mortal Wound Kills: ${mwCalc}`
      document.getElementById("killT2").innerText=`Total kills: ${spillDmgCalc + mwCalc}models`;
    } else {
      mwDiv2.innerText= `Weapon Kills: ${weaponCalcLT} 
      Mortal Wound Kills: ${mwCalc}`
      document.getElementById("killT2").innerText=`Total kills: ${weaponCalcLT + mwCalc} models`;
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
      document.getElementById("killT2").innerText=`Shrug Rolls: ${shrugArr}
      Total kills: ${weaponCalcGT} models`;
    } else if (spillDmg === true && weapdmg > tarhp) {
      document.getElementById("killT2").innerText=`Shrug Rolls: ${shrugArr}
      Total kills: ${spillDmgCalc} models`;
    } else {
      document.getElementById("killT2").innerText=`Shrug Rolls: ${shrugArr}
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

    if (weapdmg > tarhp && spillDmg == false) {
      document.getElementById("killT2").innerText=`Shrug Rolls: ${shrugArr + shrugArrMW}
      Total kills: ${weaponCalcGT + shrugMWCalc} models`;
    } else if (spillDmg === true && weapdmg > tarhp) {
      document.getElementById("killT2").innerText=`Shrug Rolls: ${shrugArr + shrugArrMW}
      Total kills: ${spillDmgCalc + shrugMWCalc} models`;
    } else {
      document.getElementById("killT2").innerText=`Shrug Rolls: ${shrugArr + shrugArrMW}
      Total kills: ${weaponCalcLT + shrugMWCalc} models`;
    }

  }
}
