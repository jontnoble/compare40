//actual Kills


if(`${weapdmg}`.indexOf(d6) > -1 && weapdmg[0] === 'd') {
    for(let i = 0; i < damaged; i++) {
      weapdmgN += Math.floor(Math.random() * 6 + 1); 
      weapdmgF += Math.floor(Math.random() * 6 + 1);
     if(weapdmgN >= tarhp) {
       remainKill += 1;
       weapdmgN = 0;
     }
     document.getElementById("actualKT").innerText=`Actual Kills: ${remainKill} 
     Damage: ${weapdmgN}`;
    } 
    console.log(weapdmgF + " 1");
  } else if(`${weapdmg}`.indexOf(d3) > -1 && weapdmg[0] === 'd') {
    for(let i = 0; i < damaged; i++) {
      weapdmgN += Math.ceil(num / 2); 
      weapdmgF += Math.ceil(num / 2);
     if(weapdmgN >= tarhp) {
       remainKill += 1;
       weapdmgN = 0;
     }
       document.getElementById("actualKT").innerText=`Actual Kills: ${remainKill} 
     Damage: ${weapdmgN}`;
    }
  } else if(Number.isInteger(weapdmg)) {
     weapdmgF = weapdmg;
     console.log(weapdmgF + " 3");
   } else if (`${weapdmg}`.indexOf(d6) > -1 && weapdmg[0] != 'd') {
    let i = 0;
    while (i < weapdmg[0]) {
      weapdmgF += Math.floor(Math.random() * 6 + 1);
      i++;
      console.log(weapdmgF);
    }
  } else if (`${weapdmg}`.indexOf(d3) > -1 && weapdmg[0] != 'd') {
    let i = 0;
    while (i < weapdmg[0]) {
      weapdmgF += Math.ceil(Math.floor(Math.random() * 6 + 1) / 2);
      i++;
      console.log(weapdmgF);
    }}


    // old damage section

    let weapdmgF = 0;
    let weapdmgN = 0;
    let weapdmgNtot = 0;
    let remainKill = 0;
    let divideDmg = weapdmgN / tarhp;
  
    if(`${weapdmg}`.indexOf(d6) > -1 && weapdmg[0] === 'd') {
      for(let i = 0; i < damaged; i++) {
        let dmgDice6 = Math.floor(Math.random() * 6 + 1);
        weapdmgN += dmgDice6;
        weapdmgNtot += dmgDice6; 
       if(weapdmgN >= tarhp) {
         remainKill += 1;
         weapdmgN = 0;
       }
       weapdmgF = weapdmgNtot / damaged;
       document.getElementById("killT").innerText=`Total Kills: ${remainKill + divideDmg}`
      } 
      console.log(weapdmgF + " 1");
    } else if(`${weapdmg}`.indexOf(d3) > -1 && weapdmg[0] === 'd') {
      for(let i = 0; i < damaged; i++) {
        let dmgDice3 = Math.ceil(num / 2); 
        weapdmgN += dmgDice3;
        weapdmgNtot += dmgDice3; 
       if(weapdmgN >= tarhp) {
         remainKill += 1;
         weapdmgN = 0;
       }
       weapdmgF = weapdmgNtot / damaged;
         document.getElementById("actualKT").innerText=`Actual Kills: ${remainKill} 
       Damage: ${weapdmgN}`;
      }
    } else if(Number.isInteger(weapdmg)) {
       weapdmgF = weapdmg;
       console.log(weapdmgF + " 3");
     } else if (`${weapdmg}`.indexOf(d6) > -1 && weapdmg[0] != 'd') {
      let i = 0;
      while (i < weapdmg[0]) {
        weapdmgF += Math.floor(Math.random() * 6 + 1);
        i++;
        console.log(weapdmgF);
      }
    } else if (`${weapdmg}`.indexOf(d3) > -1 && weapdmg[0] != 'd') {
      let i = 0;
      while (i < weapdmg[0]) {
        weapdmgF += Math.ceil(Math.floor(Math.random() * 6 + 1) / 2);
        i++;
        console.log(weapdmgF);
      }}
  
    if (shrug === 0 && dirMW === 0 && weapdmgF[0] != 'd') {
      let weaponCalc = damaged * weapdmgF;
      if (weapdmgF > tarhp && spillDmg === false) {
        document.getElementById("killT").innerText=`Kill Value: ${weaponCalc}`;
        document.getElementById("actualKT").innerText=`Actual Kills: ${damaged}`
      } else if (shrug === 0 && spillDmg === true && weapdmgF > tarhp) {
        document.getElementById("killT").innerText=`Kill Value: ${spillDmgCalc}`;
      } else {
        for(let i = 0; i < damaged; i++) {
          weapdmgN += weapdmgF;
          weapdmgNtot += weapdmgF; 
         if(weapdmgN >= tarhp) {
           remainKill += 1;
           weapdmgN = 0;
         }
        }
        
        weapdmgF = weapdmgNtot / damaged;
         document.getElementById("actualKT").innerText=`Actual Kills: ${remainKill} 
         Damage: ${weapdmgN}`; 
        document.getElementById("killT").innerText=`Kill Value: ${weaponCalc}`;
      }
    }
  
    if (shrug === 0 && dirMW >1) {
      let weaponCalc = damaged * weapdmgF;
      let spillDmgCalc = damaged * weapdmgF / tarhp;
      let mwDiv = document.getElementById('mwDiv');
      if (weapdmgF > tarhp && spillDmg === false) {
        for(let i = 0; i < damaged; i++) {
          weapdmgN += weapdmgF;
          weapdmgNtot += weapdmgF; 
         if(weapdmgN >= tarhp) {
           remainKill += 1;
           weapdmgN = 0;
         }
        }
        for(let j = 0; j < dirMW; j++) {
          weapdmgN += weapdmgF;
          weapdmgNtot += weapdmgF; 
         if(weapdmgN >= tarhp) {
           remainKill += 1;
           weapdmgN = 0;
         }
        }
        document.getElementById("actualKT").innerText=`Actual Kills: ${remainKill} 
        Damage: ${weapdmgN}`; 
       document.getElementById("killT").innerText=`Kill Value: ${weaponCalc + dirMW}`;
      } else if (shrug === 0 && spillDmg === true && weapdmg > tarhp) {
        mwDiv.innerText= `Weapon Kills: ${spillDmgCalc}
         Mortal Wound Kill Value: ${dirMW}`
        document.getElementById("killT").innerText=`Kill Value: ${spillDmgCalc + dirMW}`;
      } else {
        mwDiv.innerText= `Weapon Kills: ${weaponCalc}
        Mortal Wound Kill Value: ${dirMW}`
        document.getElementById("killT").innerText=`Kill Value: ${weaponCalc + dirMW}`; 
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
      let weaponCalcLT = (shrugDmg * weapdmgF) / tarhp;
      let spillDmgCalc = (shrugDmg * weapdmgF) / tarhp;
  
      if (weapdmgF > tarhp && spillDmg == false) {
        document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr}
        Kill Value: ${weaponCalcGT}`;
      } else if (spillDmg === true && weapdmgF > tarhp) {
        document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr}
        Kill Value: ${spillDmgCalc}`;
      } else {
        for(let i = 0; i < shrugDmg; i++) {
          weapdmgN += weapdmgF;
          weapdmgNtot += weapdmgF; 
         if(weapdmgN >= tarhp) {
           remainKill += 1;
           weapdmgN = 0;
         }
        }
        weapdmgF = weapdmgNtot / damaged;
         document.getElementById("actualKT").innerText=`Actual Kills: ${remainKill} 
         Damage: ${weapdmgN}`; 
        document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr}
        Kill Value: ${weaponCalcLT}`;
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
      let weaponCalcLT = (shrugDmg * weapdmgF) / tarhp;
      let spillDmgCalc = (shrugDmg * weapdmgF) / tarhp;
      let shrugMWCalc = shrugMWDmg / tarhp;
  
      if (weapdmgF > tarhp && spillDmg == false) {
        document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr + shrugArrMW}
        Kill Value: ${weaponCalcGT + shrugMWCalc}`;
      } else if (spillDmg === true && weapdmgF > tarhp) {
        document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr + shrugArrMW}
        Kill Value: ${spillDmgCalc + shrugMWCalc}`;
      } else {
        document.getElementById("killT").innerText=`Shrug Rolls: ${shrugArr + shrugArrMW}
        Kill Value: ${weaponCalcLT + shrugMWCalc}`;
      }
  
    }
  }
  