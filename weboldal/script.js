



document.addEventListener('DOMContentLoaded', function() {
  const btns = [
    ['menuBtn','mobileMenu'],
    ['menuBtn2','mobileMenu2'],
    ['menuBtn3','mobileMenu3'],
    ['menuBtn4','mobileMenu4'],
    ['menuBtn5','mobileMenu5']
  ];
  btns.forEach(pair => {
    const b = document.getElementById(pair[0]);
    const m = document.getElementById(pair[1]);
    if (b && m) {
      b.addEventListener('click', () => m.classList.toggle('hidden'));
    }
  });
});


function calcBMI(weightKg, heightCm) {
  if (heightCm <= 0) return null;
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return Math.round(bmi * 10) / 10;
}

function handleBMICalc() {
  const w = parseFloat(document.getElementById('bmiWeight').value) || 0;
  const h = parseFloat(document.getElementById('bmiHeight').value) || 0;
  const bmi = calcBMI(w, h);
  if (bmi === null) {
    document.getElementById('bmiResult').textContent = 'Érvénytelen magasság';
    return;
  }
  let cat = '';
  if (bmi < 18.5) cat = 'Alultáplált';
  else if (bmi < 25) cat = 'Normál';
  else if (bmi < 30) cat = 'Túlsúlyos';
  else cat = 'Elhízott';
  document.getElementById('bmiResult').textContent = `BMI: ${bmi} — ${cat}`;
}


function estimateCalories(weightKg, met, minutes) {
  
  const hours = minutes / 60;
  const calories = met * weightKg * hours;
  return Math.round(calories);
}

function handleCalorieCalc() {
  const w = parseFloat(document.getElementById('calWeight').value) || 0;
  const met = parseFloat(document.getElementById('activity').value) || 3;
  const mins = parseFloat(document.getElementById('duration').value) || 0;
  const cal = estimateCalories(w, met, mins);
  document.getElementById('calResult').textContent = `Becsült elégetett kalória: ${cal} kcal`;
}


const EXERCISES = {
  strength: ["Guggolás","Fekvenyomás","Fel húzás","Kitörés","Evezés","Plank","Lábhajlítás","Váll nyomás"],
  cardio: ["Futás","Ugrókötelezés","Burpee","Mountain climber","HIIT sprint","Elliptikus"],
  mix: ["Fekvőtámasz","Guggolás","Futás","Plank","Kitörés","Ugrókötelezés"]
};

function generateWorkout() {
  const goal = document.getElementById('goal').value;
  const count = Math.max(1, Math.min(12, parseInt(document.getElementById('count').value) || 5));
  const pool = EXERCISES[goal] || EXERCISES['mix'];
 
  const copy = pool.slice();
  const result = [];
  
  for (let i = 0; i < count && copy.length > 0; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx,1)[0]);
  }
  const listEl = document.getElementById('workoutList');
  listEl.innerHTML = '';
  result.forEach((ex, i) => {
    const li = document.createElement('li');
    li.textContent = (i+1) + '. ' + ex;
    listEl.appendChild(li);
  });
}


function isOpenAt(hour) {
  
  if (hour < 0 || hour > 23) return false;
  const today = new Date().getDay(); 
  const weekend = (today === 0 || today === 6);
  if (weekend) return hour >= 8 && hour <= 20;
  return hour >= 6 && hour <= 22;
}

function checkOpenFromInput() {
  const h = parseInt(document.getElementById('checkHour').value,10);
  const out = isOpenAt(h) ? 'NYITVA' : 'ZÁRVA';
  document.getElementById('openResult').textContent = `A FitZone most: ${out} (${h}:00)`;
}


function sumArray(arr) {
  
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]) || 0;
  }
  return total;
}

function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}


function demoWeekly() {
  const arr = [30,40,0,45,20,0,60];
  const total = sumArray(arr);
  document.getElementById('result').textContent = 'Heti összidő: ' + total + ' perc';
}

function demoMax() {
  const arr = [128,135,140,150,132];
  const m = findMax(arr);
  document.getElementById('result').textContent = 'Példa pulzusok: ['+arr.join(',')+'] — max: ' + m;
}

function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const msg = document.getElementById('contactMessage').value.trim();
  if (!name || !email || !msg) {
    document.getElementById('contactResult').textContent = 'Kérlek, tölts ki minden mezőt.';
    return;
  }
  document.getElementById('contactResult').textContent = 'Köszönjük, üzenetedet rögzítettük (demo).';
  document.getElementById('contactForm').reset();
}


window.calcBMI = calcBMI;
window.estimateCalories = estimateCalories;
window.generateWorkout = generateWorkout;
window.isOpenAt = isOpenAt;
window.sumArray = sumArray;
window.findMax = findMax;
