const tgVInput = document.getElementById("tgVInput")
const tgTInput = document.getElementById("tgTInput")
const finalInput = document.getElementById("finalInput")
const tdP = document.getElementById("timedifference")

const meEInput = document.getElementById("meEInput")
const meMInput = document.getElementById("meMInput")

c = 299792458; /* m/s */
v = tgVInput.value;
t = tgTInput.value;
t1 = null;
vSquared = null;
cSquared = null;
x = null;
y = null;
z = null;
timedilation = null;
timeDifference = null;
m = null;
e = null;
eE = null;
mE = null;


function startCalculating(){
    v = tgVInput.value;
    t = tgTInput.value;

    /*start calculating*/
    vSquared = (v * v);
    cSquared = (c * c);
    console.log(vSquared);
    console.log(cSquared);

    x = vSquared / cSquared;
    console.log(x);

    y = 1 - x;
    z = Math.sqrt(y);
    
    timedilation = t / z;
    finalInput.value =  timedilation;
    timeDifference = timedilation - t;
    tdP.textContent = (timeDifference.toFixed(20) + " seconds");
}

function calculateMassToEnergy(){
    e = meEInput.value;
    m = meMInput.value;

    cSquared = (c * c);
    eE = m * cSquared;

    meEInput.value =  eE.toFixed(20);
}
function calculateEnergyToMass(){
    e = meEInput.value;
    m = meMInput.value;

    cSquared = (c * c);
    mE = e / cSquared;

    meMInput.value =  mE.toFixed(20);
}