/* Irregular verbs learning module for the A2-C1 grammar explorer.
   Spoken audio uses the visitor's browser SpeechSynthesis (no uploaded recordings). */
(function(){
"use strict";
const all=window.YANA_IRREGULAR_VERBS||[];
let level="all",search="",quiz=false,quizIndex=0,quizCorrect=0,questions=[],answered=false;
const $=id=>document.getElementById(id);
const language=()=>typeof state!=="undefined"&&["cs","en","uk"].includes(state.lang)?state.lang:"cs";
const T={
cs:{heading:"Nepravidelná slovesa",sub:"Tři tvary, význam, poslech a procvičování. Úrovně jsou orientační.",all:"Všechna slovesa",search:"Hledej sloveso, tvar nebo překlad…",translation:"Význam",listen:"Přehrát výslovnost",allforms:"Přehrát tři tvary",note:"Výslovnost používá anglický hlas tvého prohlížeče. Dostupnost a kvalita závisí na zařízení. U read se přítomný a minulé tvary vyslovují jinak.",noVoice:"Prohlížeč nepodporuje hlasové přehrávání.",none:"Žádná slovesa neodpovídají výběru.",start:"Procvičit tvary",end:"Ukončit kvíz",next:"Další otázka",again:"Procvičit znovu",correct:"Správně!",wrong:"Správný tvar je:",test:"Doplň správný tvar",input:"Napiš odpověď",check:"Zkontrolovat",score:"Výsledek",back:"Zpět na gramatiku",verb:"Sloveso",past:"Past Simple",participle:"Past Participle",hint:"Vyplň tvar podle zadání; ve variantách přijímáme běžné britské i americké tvary.",heard:"K poslechu lze kliknout na každý tvar.",need:"Nejdřív napiš odpověď.",progress:"Otázka",table:"Přehled sloves",known:"Znalost se netestuje jako CEFR certifikace."},
en:{heading:"Irregular Verbs",sub:"Three forms, meanings, pronunciation and practice. Levels are approximate.",all:"All verbs",search:"Search a verb, form or meaning…",translation:"Meaning",listen:"Play pronunciation",allforms:"Play all three forms",note:"Pronunciation uses your browser's English voice. Availability and quality depend on your device. READ is pronounced differently in the base and past forms.",noVoice:"Speech playback is not supported in this browser.",none:"No verbs match.",start:"Practise forms",end:"End quiz",next:"Next question",again:"Try again",correct:"Correct!",wrong:"Correct form:",test:"Type the missing form",input:"Your answer",check:"Check",score:"Your score",back:"Back to grammar",verb:"Verb",past:"Past Simple",participle:"Past Participle",hint:"Type the form shown in the prompt; common British and American variants are accepted.",heard:"Click any form to hear it.",need:"Please enter an answer first.",progress:"Question",table:"Verb overview",known:"This is practice, not an official CEFR test."},
uk:{heading:"Неправильні дієслова",sub:"Три форми, значення, вимова й вправи. Рівні приблизні.",all:"Усі дієслова",search:"Пошук дієслова, форми або перекладу…",translation:"Значення",listen:"Прослухати вимову",allforms:"Усі три форми",note:"Вимова використовує англійський голос вашого браузера. Якість залежить від пристрою. READ вимовляється по-різному.",noVoice:"Браузер не підтримує озвучення.",none:"Дієслів не знайдено.",start:"Практикувати форми",end:"Завершити тест",next:"Наступне питання",again:"Спробувати ще",correct:"Правильно!",wrong:"Правильна форма:",test:"Введіть потрібну форму",input:"Ваша відповідь",check:"Перевірити",score:"Ваш результат",back:"До граматики",verb:"Дієслово",past:"Past Simple",participle:"Past Participle",hint:"Введіть форму за завданням; приймаються поширені британські й американські варіанти.",heard:"Натисніть будь-яку форму, щоб прослухати.",need:"Спочатку введіть відповідь.",progress:"Питання",table:"Список дієслів",known:"Це практика, а не офіційне тестування CEFR."}
};
function tr(){return T[language()]}
function active(){return $("irregular-panel")&&!$("irregular-panel").hidden}
function filtered(){const needle=search.toLocaleLowerCase();return all.filter(v=>(level==="all"||v.level===level)&&[v.base,v.past,v.participle,v.cs,v.uk].join(" ").toLocaleLowerCase().includes(needle))}
/* Mobile WebKit: no cancel() immediately before speak() and always start
   directly from the real tap/click. Hold a strong utterance reference. */
let activeUtterances=[];
function stopSpeech(){
 activeUtterances=[];
 if("speechSynthesis" in window){try{window.speechSynthesis.cancel()}catch(e){}}
 const el=$("iv-speech-status");if(el)el.textContent="";
}
function readText(v,form){
 if(v.base==="read"&&form!=="base")return "red";
 return v[form].split(" / ")[0];
}
function voices(){
 if(!("speechSynthesis" in window))return [];
 try{return window.speechSynthesis.getVoices().filter(v=>/^en([_-]|$)/i.test(v.lang))}
 catch(e){return []}
}
function speechStatus(message){
 const node=$("iv-speech-status");if(node)node.textContent=message;
}
function englishVoice(){
 const list=voices();
 return list.find(x=>/^en-GB$/i.test(x.lang))||list.find(x=>/^en-US$/i.test(x.lang))||list[0]||null;
}
function speakNow(text){
 if(!("speechSynthesis" in window)||typeof SpeechSynthesisUtterance==="undefined"){
   speechStatus(tr().noVoice);return;
 }
 const synth=window.speechSynthesis;
 const utterance=new SpeechSynthesisUtterance(text);
 utterance.lang="en-GB";utterance.rate=.85;utterance.pitch=1;utterance.volume=1;
 const voice=englishVoice();if(voice){utterance.voice=voice;utterance.lang=voice.lang}
 activeUtterances.push(utterance);
 const status=language()==="cs"?"🔊 Přehrávání…":language()==="uk"?"🔊 Відтворення…":"🔊 Speaking…";
 speechStatus(status);
 utterance.onstart=()=>speechStatus(status);
 utterance.onend=()=>{
  activeUtterances=activeUtterances.filter(x=>x!==utterance);
  if(!activeUtterances.length)speechStatus("");
 };
 utterance.onerror=e=>{
  activeUtterances=activeUtterances.filter(x=>x!==utterance);
  const help=language()==="cs"?"Zvuk se nepodařilo spustit. Zkus otevřít stránku přímo v Safari a klepnout znovu.":language()==="uk"?"Не вдалося відтворити. Відкрийте сторінку в Safari й спробуйте знову.":"Playback failed. Open this page directly in Safari and tap again.";
  if(e.error!=="canceled"&&e.error!=="interrupted")speechStatus(help);
 };
 // The speak() call must remain synchronously inside the button click on iOS.
 try{
  if(synth.paused)synth.resume();
  synth.speak(utterance);
 }catch(e){speechStatus(tr().noVoice)}
}
function play(v,form){
 // Do not cancel the previous utterance here: mobile Safari can silently
 // discard the next utterance if cancel() is immediately followed by speak().
 speakNow(readText(v,form));
}
function playThree(v){
 const parts=["base","past","participle"].map(form=>{
  if(v.base==="be"&&form==="past")return "was, were";
  if(v.base==="get"&&form==="participle")return "got, gotten";
  return readText(v,form);
 });
 speakNow(parts.join(". "));
}
window.stopIrregularAudio=stopSpeech;
window.playIrregular=play;
window.playIrregularTriple=playThree;
function button(text,click,cls){const b=document.createElement("button");b.type="button";b.className=cls||"btn btn-secondary";b.textContent=text;b.addEventListener("click",click);return b}
function makeSpeechBtn(v,form){const b=button("🔊 "+v[form],()=>play(v,form),"iv-speech");b.title=tr().listen+" · "+v[form];b.setAttribute("aria-label",tr().listen+": "+v[form]);return b}
function renderTable(){const body=$("iv-results");body.replaceChildren();const matches=filtered();$("iv-count").textContent=matches.length+" / "+all.length;$("iv-search").placeholder=tr().search;
 if(!matches.length){const p=document.createElement("p");p.textContent=tr().none;body.append(p);return}
 const wrap=document.createElement("div");wrap.className="iv-scroll";const table=document.createElement("table");table.className="grammar-table iv-table";const thead=document.createElement("thead"),head=document.createElement("tr");
 [tr().verb,tr().past,tr().participle,tr().translation,"🔊"].forEach(h=>{const th=document.createElement("th");th.textContent=h;head.append(th)});thead.append(head);table.append(thead);
 const tbody=document.createElement("tbody");
 matches.forEach(v=>{const row=document.createElement("tr");const fields=[["base",v.base],["past",v.past],["participle",v.participle]];
 fields.forEach(([form])=>{const td=document.createElement("td");td.append(makeSpeechBtn(v,form));row.append(td)});
 const td=document.createElement("td");td.textContent=language()==="uk"?v.uk:language()==="en"?v.cs+" / "+v.uk:v.cs;row.append(td);
 const audio=document.createElement("td");audio.append(button("▶ 1–2–3",()=>playThree(v),"btn btn-secondary iv-triple"));row.append(audio);tbody.append(row)});
 table.append(tbody);wrap.append(table);body.append(wrap)}
function showIntro(){quiz=false;$("iv-learning").hidden=false;$("iv-quiz").hidden=true;$("iv-start").textContent=tr().start;renderTable()}
function quizPool(){const pool=filtered();if(pool.length<4)return all.filter(v=>level==="all"||v.level===level);return pool}
function startQuiz(){stopSpeech();questions=quizPool().map(v=>({v,form:Math.random()<.5?"past":"participle"})).sort(()=>Math.random()-.5).slice(0,Math.min(10,quizPool().length));
 if(!questions.length)return;quizIndex=0;quizCorrect=0;answered=false;quiz=true;$("iv-learning").hidden=true;$("iv-quiz").hidden=false;renderQuiz()}
function norm(s){return s.toLocaleLowerCase().trim().replace(/\s+/g," ").replace(/’/g,"'")}
function answerOK(text,v,form){let variants=v[form].split(" / ").map(norm);if(v.base==="be"&&form==="past")variants=["was","were"];return variants.includes(norm(text))}
function renderQuiz(){
 const root=$("iv-quiz");root.replaceChildren();const t=tr();
 if(quizIndex>=questions.length){const header=document.createElement("h2");header.textContent=t.score+": "+quizCorrect+" / "+questions.length;root.append(header);const paragraph=document.createElement("p");paragraph.textContent=t.known;root.append(paragraph);root.append(button(t.again,startQuiz,"btn btn-primary")," ",button(t.end,showIntro));return}
 const item=questions[quizIndex],label=document.createElement("p");label.className="kpi-caption";label.textContent=t.progress+" "+(quizIndex+1)+" / "+questions.length+" · "+item.v.level;root.append(label);
 const prompt=document.createElement("h2");prompt.className="topic-title";prompt.textContent=item.v.base+" → "+(item.form==="past"?t.past:t.participle);root.append(prompt);
 const meaning=document.createElement("p");meaning.textContent=language()==="uk"?item.v.uk:item.v.cs;root.append(meaning);
 const input=document.createElement("input");input.className="text-input";input.placeholder=t.input;input.setAttribute("aria-label",t.input);input.autocomplete="off";root.append(input);
 const feedback=document.createElement("div");feedback.className="iv-feedback";root.append(feedback);
 const action=button(t.check,()=>{if(answered)return;if(!input.value.trim()){feedback.textContent=t.need;return}answered=true;const ok=answerOK(input.value,item.v,item.form);if(ok)quizCorrect++;feedback.textContent=ok?t.correct:t.wrong+" "+item.v[item.form];feedback.className="iv-feedback "+(ok?"iv-good":"iv-bad");input.disabled=true;action.textContent=(quizIndex===questions.length-1?t.score:t.next)+" →";action.onclick=null;action.addEventListener("click",nextQuiz,{once:true});},"btn btn-primary");
 root.append(action," ",button("🔊",()=>play(item.v,item.form),"btn btn-secondary")," ",button(t.end,showIntro,"btn btn-secondary"));input.focus();
 input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!answered){e.preventDefault();action.click()}});
}
function nextQuiz(){quizIndex++;answered=false;renderQuiz()}
function update(){const t=tr();$("iv-title").textContent=t.heading;$("iv-sub").textContent=t.sub;$("iv-guide").textContent=t.note;$("iv-search").placeholder=t.search;$("iv-search").setAttribute("aria-label",t.search);
 $("iv-close").textContent="← "+t.back;$("iv-start").textContent=t.start;$("iv-hint").textContent=t.heard;
 Array.from($("iv-levels").children).forEach(b=>{b.textContent=b.dataset.level==="all"?t.all:b.dataset.level;b.setAttribute("aria-pressed",String(level===b.dataset.level))});
 if(quiz)renderQuiz();else renderTable()}
function open(){stopSpeech();if(typeof closeDiagnostic==="function"&&typeof diagnosticActive!=="undefined"&&diagnosticActive)closeDiagnostic();
 ["diagnostic-intro","module-nav","module-workspace"].forEach(id=>$(id).hidden=true);
 $("irregular-panel").hidden=false;$("iv-learning").hidden=!(!quiz);$("iv-quiz").hidden=!quiz;update();$("irregular-panel").scrollIntoView({behavior:"smooth",block:"start"});
}
function close(){stopSpeech();$("irregular-panel").hidden=true;["diagnostic-intro","module-nav","module-workspace"].forEach(id=>$(id).hidden=false)}
window.openIrregularVerbs=open;window.closeIrregularVerbs=close;window.refreshIrregularVerbs=()=>{if(active())update()};
document.addEventListener("DOMContentLoaded",()=>{if(!$("iv-levels"))return;
 ["all","A2","B1","B2","C1"].forEach(l=>{const b=button(l,()=>{level=l;search="";$("iv-search").value="";quiz=false;showIntro();update()},"cat-pill");b.dataset.level=l;b.setAttribute("aria-pressed",String(l===level));$("iv-levels").append(b)});
 $("iv-search").addEventListener("input",e=>{search=e.target.value;renderTable()});
 $("iv-close").addEventListener("click",close);
 $("iv-start").addEventListener("click",startQuiz);
 update();
});
})();