const DECKS = {"easy":[{"from":"CAT","to":"ACT","hint":"To do something.","accepted":["ACT"]},{"from":"EAT","to":"TEA","hint":"A drink often served hot.","accepted":["TEA","ATE"]},{"from":"PAN","to":"NAP","hint":"A short sleep.","accepted":["NAP"]},{"from":"RAT","to":"ART","hint":"Painting, drawing or music.","accepted":["ART","TAR"]},{"from":"EAR","to":"ERA","hint":"A period of history.","accepted":["ERA","ARE"]},{"from":"NOW","to":"WON","hint":"The past form of WIN.","accepted":["WON","OWN"]},{"from":"POT","to":"TOP","hint":"The highest part.","accepted":["TOP","OPT"]},{"from":"NOTE","to":"TONE","hint":"The sound or mood of a voice.","accepted":["TONE"]},{"from":"MEAT","to":"TEAM","hint":"A group working together.","accepted":["TEAM","MATE","TAME"]},{"from":"EAST","to":"SEAT","hint":"A place to sit.","accepted":["SEAT","EATS","TEAS"]},{"from":"STOP","to":"POST","hint":"A letter in the mail or a message online.","accepted":["POST","SPOT","POTS","TOPS"]},{"from":"CARE","to":"RACE","hint":"A competition to see who is fastest.","accepted":["RACE","ACRE"]},{"from":"LEMON","to":"MELON","hint":"A sweet, juicy fruit.","accepted":["MELON"]},{"from":"SALT","to":"LAST","hint":"The opposite of FIRST.","accepted":["LAST"]},{"from":"PART","to":"TRAP","hint":"Something used to catch an animal.","accepted":["TRAP"]}],"medium":[{"from":"SHORE","to":"HORSE","hint":"An animal you can ride.","accepted":["HORSE"]},{"from":"TRIED","to":"TIRED","hint":"How you feel when you need sleep.","accepted":["TIRED"]},{"from":"BREAK","to":"BAKER","hint":"A person who makes bread.","accepted":["BAKER"]},{"from":"SHAPE","to":"PHASE","hint":"A stage in a process.","accepted":["PHASE"]},{"from":"BELOW","to":"ELBOW","hint":"The joint in the middle of your arm.","accepted":["ELBOW"]},{"from":"ANGEL","to":"ANGLE","hint":"A corner measured in degrees.","accepted":["ANGLE"]},{"from":"HEART","to":"EARTH","hint":"Our planet.","accepted":["EARTH"]},{"from":"DIARY","to":"DAIRY","hint":"A place where milk products are made.","accepted":["DAIRY"]},{"from":"FRIED","to":"FIRED","hint":"Lost a job.","accepted":["FIRED"]},{"from":"THREE","to":"THERE","hint":"In that place.","accepted":["THERE"]},{"from":"WOLF","to":"FLOW","hint":"To move smoothly like water.","accepted":["FLOW"]},{"from":"CHIN","to":"INCH","hint":"A unit of length.","accepted":["INCH"]},{"from":"SCARE","to":"RACES","hint":"More than one running competition.","accepted":["RACES"]},{"from":"RESCUE","to":"SECURE","hint":"Safe or firmly fixed.","accepted":["SECURE"]},{"from":"RAILS","to":"LIARS","hint":"People who do not tell the truth.","accepted":["LIARS"]}],"hard":[{"from":"TEACHER","to":"CHEATER","hint":"Someone who breaks the rules to win.","accepted":["CHEATER"]},{"from":"MASTER","to":"STREAM","hint":"A small river.","accepted":["STREAM"]},{"from":"DANGER","to":"GARDEN","hint":"A place where flowers and vegetables grow.","accepted":["GARDEN"]},{"from":"SINGER","to":"SIGNER","hint":"Someone who signs a document.","accepted":["SIGNER"]},{"from":"PLAYERS","to":"PARSLEY","hint":"A green herb used in cooking.","accepted":["PARSLEY"]},{"from":"TRAINER","to":"RETRAIN","hint":"To learn a job or skill again.","accepted":["RETRAIN"]},{"from":"STUDY","to":"DUSTY","hint":"Covered in fine dirt.","accepted":["DUSTY"]},{"from":"REACT","to":"TRACE","hint":"A faint mark or sign.","accepted":["TRACE","CRATE","CATER"]},{"from":"STONE","to":"NOTES","hint":"Short written reminders.","accepted":["NOTES","TONES","ONSET"]},{"from":"SPARE","to":"SPEAR","hint":"A long weapon with a pointed end.","accepted":["SPEAR","PEARS","REAPS","PARSE"]},{"from":"LEAST","to":"STEAL","hint":"To take something without permission.","accepted":["STEAL","STALE","SLATE","TALES"]},{"from":"EVIL","to":"LIVE","hint":"To be alive.","accepted":["LIVE","VILE","VEIL"]},{"from":"UNCLEAR","to":"NUCLEAR","hint":"Relating to the centre of an atom.","accepted":["NUCLEAR"]},{"from":"INTEGRAL","to":"TRIANGLE","hint":"A shape with three sides.","accepted":["TRIANGLE","ALTERING"]},{"from":"CREATION","to":"REACTION","hint":"A response to something.","accepted":["REACTION"]}],"expert":[{"from":"SILENT","to":"LISTEN","hint":"What you do when you pay attention to sounds.","accepted":["LISTEN","ENLIST","TINSEL"]},{"from":"THE EYES","to":"THEY SEE","hint":"What eyes do.","accepted":["THEY SEE"]},{"from":"DORMITORY","to":"DIRTY ROOM","hint":"A very messy place.","accepted":["DIRTY ROOM"]},{"from":"SCHOOLMASTER","to":"THE CLASSROOM","hint":"A room where students learn.","accepted":["THE CLASSROOM"]},{"from":"ASTRONOMER","to":"MOON STARER","hint":"Someone who looks at the moon.","accepted":["MOON STARER"]},{"from":"ELEVEN PLUS TWO","to":"TWELVE PLUS ONE","hint":"An addition with the same total.","accepted":["TWELVE PLUS ONE"]},{"from":"THE MORSE CODE","to":"HERE COME DOTS","hint":"A phrase about arriving dots.","accepted":["HERE COME DOTS"]},{"from":"A GENTLEMAN","to":"ELEGANT MAN","hint":"A smartly dressed man.","accepted":["ELEGANT MAN"]},{"from":"CONVERSATION","to":"CONSERVATION","hint":"Protecting nature and resources.","accepted":["CONSERVATION"]},{"from":"ORCHESTRA","to":"CART HORSE","hint":"A horse that pulls a wagon.","accepted":["CART HORSE"]},{"from":"DEBIT CARD","to":"BAD CREDIT","hint":"A poor borrowing record.","accepted":["BAD CREDIT"]}]};

const STRINGS = {
  en: {
    eyebrow:'WORDPLAY FOR CURIOUS MINDS',heroOne:'Same letters.',heroTwo:'New meaning.',heroText:'Sometimes a word is hiding another word. Rearrange the letters and find the surprise.',playNow:"Let's play",artLabel:'A LITTLE LETTER MAGIC',beforeStart:'BEFORE YOU START',whatAnagram:'What is an anagram?',ruleStrong:'Same letters, same number of letters.',ruleMore:'You may change their order, but you may not add or remove any.',challengeLabel:'YOUR WORD CHALLENGE',gameTitle:'Ready to rearrange?',levelEasy:'Easy',levelMedium:'Medium',levelHard:'Challenge',levelExpert:'Expert',roundLabel:'ROUND',scoreLabel:'SCORE',instruction:'Make another English word or phrase using all the letters.',answerLabel:'Your answer',check:'Check',tapOrType:'Tap the letters or type your answer.',erase:'Erase',hint:'Get a hint',skip:'Skip word →',next:'Next word',noLogin:'No login. No tracking. Just words.',restart:'Start this level again',footerText:'A little word game for big imaginations.',placeholder:'TYPE A WORD...',letters:'letters',letter:'letter',fill:'Write an answer first.',notExact:'Use exactly the same letters — no more, no fewer.',sameWord:'Try a different word, not the original.',unknown:'The letters match, but that answer is not in this game. Try another anagram.',correct:'Brilliant! ✳  {answer} is an anagram of {source}.',incorrect:'Not quite. Take another look at the letters.',hintText:'Hint: {hint}',secondHint:'Another hint: the answer begins with {first}.',skipped:'One possible answer: {answer}.',finished:'Level complete! ✳',finishedFeedback:'You scored {score} points across {total} puzzles. Choose another level or play again.',winPoints:'points',answerLengths:'Answer: {lengths}',scoreNote:'10 points per correct answer. No time pressure.'
  },
  cs: {
    eyebrow:'HRÁTKY SE SLOVY PRO ZVÍDAVÉ',heroOne:'Stejná písmena.',heroTwo:'Jiný význam.',heroText:'Někdy se v jednom slově schovává jiné. Přeskládej písmena a objev ho.',playNow:'Jdeme hrát',artLabel:'MALÉ KOUZLO S PÍSMENY',beforeStart:'NEŽ ZAČNEŠ',whatAnagram:'Co je anagram?',ruleStrong:'Stejná písmena, stejný počet.',ruleMore:'Můžeš měnit jejich pořadí, ale žádné přidat ani vynechat.',challengeLabel:'SLOVNÍ VÝZVA',gameTitle:'Připraven/a přeskládat?',levelEasy:'Lehké',levelMedium:'Střední',levelHard:'Výzva',levelExpert:'Expert',roundLabel:'KOLO',scoreLabel:'BODY',instruction:'Vytvoř jiné anglické slovo nebo spojení ze všech písmen.',answerLabel:'Tvoje odpověď',check:'Ověřit',tapOrType:'Klepni na písmena nebo odpověď napiš.',erase:'Smazat',hint:'Nápověda',skip:'Přeskočit →',next:'Další slovo',noLogin:'Bez přihlášení. Bez sledování. Jen slova.',restart:'Začít tuto úroveň znovu',footerText:'Malá slovní hra pro velkou fantazii.',placeholder:'NAPIŠ SLOVO...',letters:'písmen',letter:'písmeno',fill:'Nejdřív napiš odpověď.',notExact:'Použij přesně stejná písmena — žádná navíc ani méně.',sameWord:'Zkus jiné slovo, ne původní.',unknown:'Písmena souhlasí, ale tato odpověď není v databázi hry. Zkus jinou přesmyčku.',correct:'Skvělé! ✳ {answer} je anagram slova {source}.',incorrect:'Zatím ne. Zkus písmena přeskládat jinak.',hintText:'Nápověda (anglicky): {hint}',secondHint:'Další nápověda: odpověď začíná na {first}.',skipped:'Jedna možná odpověď: {answer}.',finished:'Úroveň dokončena! ✳',finishedFeedback:'Získal/a jsi {score} bodů za {total} úloh. Zkus další úroveň nebo si zahraj znovu.',winPoints:'bodů',answerLengths:'Délka odpovědi: {lengths}',scoreNote:'10 bodů za správnou odpověď. Bez časového limitu.'
  },
  uk: {
    eyebrow:'ГРА СЛОВАМИ ДЛЯ ДОПИТЛИВИХ',heroOne:'Ті самі літери.',heroTwo:'Нове значення.',heroText:'Іноді в одному слові ховається інше. Перестав літери та знайди його.',playNow:'Почати гру',artLabel:'ТРОХИ МАГІЇ ЛІТЕР',beforeStart:'ПЕРЕД ПОЧАТКОМ',whatAnagram:'Що таке анаграма?',ruleStrong:'Ті самі літери, та сама кількість.',ruleMore:'Можна змінювати порядок, але не можна додавати чи забирати літери.',challengeLabel:'ТВОЄ ЗАВДАННЯ',gameTitle:'Готовий / готова?',levelEasy:'Легко',levelMedium:'Середньо',levelHard:'Виклик',levelExpert:'Експерт',roundLabel:'РАУНД',scoreLabel:'БАЛИ',instruction:'Склади інше англійське слово або фразу з усіх літер.',answerLabel:'Твоя відповідь',check:'Перевірити',tapOrType:'Натискай на літери або введи відповідь.',erase:'Стерти',hint:'Підказка',skip:'Пропустити →',next:'Наступне слово',noLogin:'Без реєстрації. Без відстеження. Лише слова.',restart:'Почати рівень спочатку',footerText:'Маленька гра зі словами для великої уяви.',placeholder:'ВВЕДИ СЛОВО...',letters:'літер',letter:'літера',fill:'Спочатку введи відповідь.',notExact:'Використай точно ті самі літери — без зайвих і пропущених.',sameWord:'Спробуй інше слово, не початкове.',unknown:'Літери збігаються, але цього варіанта немає в грі. Спробуй іншу анаграму.',correct:'Чудово! ✳ {answer} — анаграма слова {source}.',incorrect:'Ще не зовсім. Спробуй переставити літери.',hintText:'Підказка (англійською): {hint}',secondHint:'Ще підказка: відповідь починається з {first}.',skipped:'Один із можливих варіантів: {answer}.',finished:'Рівень пройдено! ✳',finishedFeedback:'Ти набрав / набрала {score} балів за {total} завдань. Обери інший рівень або зіграй ще раз.',winPoints:'балів',answerLengths:'Довжина відповіді: {lengths}',scoreNote:'10 балів за правильну відповідь. Без обмеження часу.'
  }
};

const state = { language:'en', level:'easy', order:[], index:0, score:0, resolved:false, hintCount:0, tileUsed:[], lastResult:null };
const $ = id => document.getElementById(id);
const by = selector => Array.from(document.querySelectorAll(selector));
const trimWord = text => (text || '').toUpperCase().replace(/[^A-Z]/g, '');
const signature = text => trimWord(text).split('').sort().join('');
const loc = (key, values={}) => (STRINGS[state.language][key] || STRINGS.en[key] || '').replace(/\{(\w+)\}/g, (_,k) => values[k] ?? '');
function shuffle(arr){const list=[...arr];for(let i=list.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[list[i],list[j]]=[list[j],list[i]];}return list;}
function current(){return state.order[state.index];}
function translateUI(){
  document.documentElement.lang=state.language;
  by('[data-i18n]').forEach(node=>node.textContent=loc(node.dataset.i18n));
  by('.lang-button').forEach(el=>{const active=el.dataset.lang===state.language;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
  $('answer').placeholder=loc('placeholder');
  $('word-length').textContent=state.index<state.order.length ? lengthsLabel(current().to) : '';
  if(state.index>=state.order.length && state.order.length){renderComplete();}
}
function lengthsLabel(target){const parts=target.split(' ').filter(Boolean).map(w=>w.length).join(' + ');return loc('answerLengths',{lengths:parts});}
function renderTiles(){
  const rack=$('letter-rack');rack.replaceChildren();
  if(!current())return;
  const letters=trimWord(current().from).split('');
  // Shuffle display letters; repeated letters each remain individual buttons.
  const indices=shuffle(letters.map((_,i)=>i));
  state.tileUsed=[];
  for(const index of indices){const b=document.createElement('button');b.type='button';b.className='letter-tile';b.textContent=letters[index];b.dataset.id=String(index);b.setAttribute('aria-label',`Add ${letters[index]}`);b.addEventListener('click',()=>{
      if(state.resolved)return;
      $('answer').value+=b.textContent;
      b.disabled=true;
      state.tileUsed.push(index);
      syncTiles();
      setFeedback('','');
    });rack.appendChild(b);}
}
function syncTiles(){
  // Text entry and tile input can both be used. Disable only letters accounted for by the typed answer.
  const needs={};for(const c of trimWord($('answer').value))needs[c]=(needs[c]||0)+1;
  by('.letter-tile').forEach(b=>{if(needs[b.textContent]>0){b.disabled=true;needs[b.textContent]--;}else b.disabled=false;});
}
function setFeedback(type,message){const box=$('feedback');box.className=`feedback ${type}`;box.textContent=message;}
function renderRound(){
  document.body.classList.remove('is-complete');
  if(state.index>=state.order.length){renderComplete();return;}
  const q=current();state.resolved=false;state.hintCount=0;state.lastResult=null;
  $('challenge-word').textContent=q.from;
  $('challenge-word').classList.remove('done-icon');
  $('word-length').textContent=lengthsLabel(q.to);
  $('round-number').textContent=`${String(state.index+1).padStart(2,'0')} / ${state.order.length}`;
  $('score').textContent=state.score;
  $('progress-fill').style.width=(state.index/state.order.length*100)+'%';
  $('answer').value='';$('answer').disabled=false;$('check-button').disabled=false;
  $('answer-form').classList.remove('hidden');
  $('skip-button').classList.remove('hidden');$('hint-button').classList.remove('hidden');$('next-button').classList.add('hidden');
  $('letter-rack').classList.remove('hidden');
  $('hint-button').disabled=false;
  $('hint-button').querySelector('span[data-i18n]').textContent=loc('hint');
  by('.instruction').forEach(n=>n.textContent=loc('instruction'));
  setFeedback('','');renderTiles();
}
function settle(success,answer){
  state.resolved=true;state.lastResult={success,answer};
  if(success)state.score+=10;
  $('score').textContent=state.score;
  $('progress-fill').style.width=((state.index+1)/state.order.length*100)+'%';
  $('answer').disabled=true;$('check-button').disabled=true;
  by('.letter-tile').forEach(b=>b.disabled=true);
  $('hint-button').classList.add('hidden');$('skip-button').classList.add('hidden');$('next-button').classList.remove('hidden');
  setFeedback(success?'success':'info',success?loc('correct',{answer,source:current().from}):loc('skipped',{answer}));
}
function checkAnswer(e){if(e)e.preventDefault();if(state.resolved||!current())return;
  const guess=$('answer').value.trim();if(!trimWord(guess)){setFeedback('error',loc('fill'));return;}
  if(signature(guess)!==signature(current().from)){setFeedback('error',loc('notExact'));return;}
  if(trimWord(guess)===trimWord(current().from)){setFeedback('error',loc('sameWord'));return;}
  const accepted=current().accepted.find(a=>trimWord(a)===trimWord(guess));
  if(accepted){settle(true,accepted);}else{setFeedback('error',loc('unknown'));}
}
function showHint(){if(state.resolved||!current())return;
  state.hintCount+=1;
  if(state.hintCount===1){setFeedback('info',loc('hintText',{hint:current().hint}));}
  else{setFeedback('info',loc('secondHint',{first:current().to[0]}));$('hint-button').disabled=true;}
}
function renderComplete(){
  document.body.classList.add('is-complete');
  $('challenge-word').textContent='✳';$('challenge-word').classList.add('done-icon');
  $('word-length').textContent='';$('round-number').textContent=`${state.order.length} / ${state.order.length}`;
  $('progress-fill').style.width='100%';
  $('letter-rack').classList.add('hidden');$('answer-form').classList.add('hidden');
  $('hint-button').classList.add('hidden');$('skip-button').classList.add('hidden');$('next-button').classList.add('hidden');
  by('.instruction').forEach(n=>n.textContent=loc('finished'));
  setFeedback('success',loc('finishedFeedback',{score:state.score,total:state.order.length}));
}
function startLevel(level){
  state.level=level;state.index=0;state.score=0;state.resolved=false;
  state.order=shuffle(DECKS[level]);
  by('.level-button').forEach(b=>{let selected=b.dataset.level===level;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
  renderRound();
}
function init(){
  by('.lang-button').forEach(b=>b.addEventListener('click',()=>{state.language=b.dataset.lang;translateUI();if(current()&&!state.resolved){setFeedback('','');}else if(current()&&state.resolved&&state.lastResult){setFeedback(state.lastResult.success?'success':'info',state.lastResult.success?loc('correct',{answer:state.lastResult.answer,source:current().from}):loc('skipped',{answer:state.lastResult.answer}));}}));
  by('.level-button').forEach(b=>b.addEventListener('click',()=>startLevel(b.dataset.level)));
  $('answer-form').addEventListener('submit',checkAnswer);
  $('answer').addEventListener('input',()=>{if(!state.resolved){syncTiles();setFeedback('','');}});
  $('hint-button').addEventListener('click',showHint);
  $('skip-button').addEventListener('click',()=>settle(false,current().to));
  $('next-button').addEventListener('click',()=>{state.index++;renderRound();});
  $('restart-button').addEventListener('click',()=>startLevel(state.level));
  $('erase-button').addEventListener('click',()=>{$('answer').value='';syncTiles();setFeedback('','');$('answer').focus();});
  translateUI();startLevel('easy');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();