/* ================= icons ================= */
const ICONS={
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.5 12h2M19.5 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  calendar:'<rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
  notes:'<path d="M14 2.5H6.5A2.5 2.5 0 0 0 4 5v14a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 20 19V8.5z"/><path d="M14 2.5v6h6M8 13h8M8 17h5"/>',
  tasks:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="m8 12 3 3 5-6"/>',
  graph:'<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="9" cy="18" r="2.5"/><path d="M8.4 6.4l7.1 1.2M6.6 8.4l1.8 7.2M16.6 10.1l-5.8 6"/>',
  board:'<rect x="3" y="3.5" width="5" height="17" rx="1.5"/><rect x="10" y="3.5" width="5" height="11" rx="1.5"/><rect x="17" y="3.5" width="4" height="7" rx="1.5"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.5-4.5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  pin:'<path d="M12 16.5V22M9 3h6M10 3v6l-4 4v2.5h12V13l-4-4V3"/>',
  focus:'<path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/>',
  more:'<path d="M5 12h.01M12 12h.01M19 12h.01" stroke-width="3"/>',
  trash:'<path d="M3.5 6h17M9 6V4h6v2M6 6l1 14.5h10L18 6"/>',
  upload:'<path d="M12 15V3M7 8l5-5 5 5M4 15v4.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V15"/>',
  download:'<path d="M12 3v12M7 10l5 5 5-5M4 15v4.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V15"/>',
  ask:'<path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.4-5.6A8.5 8.5 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" stroke-width="2.4"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',
  link:'<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
  shuffle:'<path d="M3 7h3.5c4 0 6 10 10 10H21M3 17h3.5c1.5 0 2.7-1.4 3.7-3.2M14 10.2C15 8.4 16 7 17.5 7H21M18 4l3 3-3 3M18 14l3 3-3 3"/>',
  moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  keyboard:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6.5 10h.01M10 10h.01M14 10h.01M17.5 10h.01M7.5 14h9"/>',
  list:'<path d="M8.5 6h12M8.5 12h12M8.5 18h12M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  grid:'<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>',
  inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5.5 5h13L21 13v5.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5V13z"/>',
  template:'<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5zM4 19.5A1.5 1.5 0 0 0 5.5 21H20"/>',
  pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  hash:'<path d="M5 9h15M4 15h15M10 3 8 21M16 3l-2 18"/>',
  refresh:'<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>'
};
const ic=(n,cls)=>`<svg class="i${cls?" "+cls:""}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||""}</svg>`;
const LOGO=`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8.5 21.5C10.5 11 20 10 23.5 10.5" stroke="var(--eosin)" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="8.5" cy="22" r="5" fill="var(--hema)"/><circle cx="24" cy="10" r="3.8" fill="var(--eosin)"/></svg>`;
const EMOJI="📝 💡 🌱 🌿 🌳 🍅 📚 📖 🧭 🎯 🧠 🔭 🧪 🛠️ 🗂️ 📌 ⭐ ❤️ 🔥 ☕ 🎵 🎨 ✈️ 🏡 💼 💬 🗓️ ✅ 🌊 ⛰️ 🌙 ☀️ 🍳 🥟 🐝 🪴 🔑 🧩 📈 🗺️ 🎬 🧵 🕯️ 🧘 🏃 💰 🗼 🎁".split(" ");
const NAV=[["today","Today","sun"],["journal","Journal","calendar"],["notes","Notes","notes"],["board","Board","board"],["tasks","Tasks","tasks"],["graph","Graph","graph"]];
const isMac=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||"");
const MOD=isMac?"⌘":"Ctrl";

/* ================= small UI helpers ================= */
function toast(msg,o){
  o=o||{};const t=$("#toast");clearTimeout(toast.t);
  t.className="toast";t.innerHTML=`<span>${esc(msg)}</span>`+(o.action?`<button type="button">${esc(o.action)}</button>`:"");
  if(o.action)t.querySelector("button").onclick=()=>{t.className="hide";o.fn&&o.fn();};
  toast.t=setTimeout(()=>{t.className="hide";},o.ms||(o.action?6500:3200));
}
function confirmBox(title,msg,ok,danger){
  return new Promise(res=>{
    const d=$("#cfm");
    d.innerHTML=`<div class="sheet" style="width:min(26rem,calc(100vw - 2rem))"><h2>${esc(title)}</h2><p>${esc(msg)}</p><div class="row-btns" style="justify-content:flex-end;margin-top:1.2rem"><button class="btn ghost" data-r="0">Cancel</button><button class="btn ${danger?"danger":"accent"}" data-r="1">${esc(ok)}</button></div></div>`;
    const done=v=>{d.close();res(v);};
    d.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>done(b.dataset.r==="1"));
    d.oncancel=()=>res(false);d.showModal();d.querySelector('[data-r="1"]').focus();
  });
}
function markSaving(){const s=$("#saved");if(s)s.textContent="Saving…";}
function markSaved(){const s=$("#saved");if(s)s.textContent="Saved";}
function autosize(el){if(!el)return;el.style.height="auto";el.style.height=el.scrollHeight+"px";}
function ctx(nid,stat){return {nid,static:!!stat,resolve:t=>S.titleIdx.get(String(t).toLowerCase()),label:(id,l)=>{const n=S.notes.get(id);return n&&n.daily&&l===n.title?titleOf(n):l;}};}
function iconOf(n){return n.icon?`<span class="ic" aria-hidden="true">${esc(n.icon)}</span>`:"";}
function isTyping(el){el=el||document.activeElement;return el&&(/INPUT|TEXTAREA|SELECT/.test(el.tagName)||el.isContentEditable);}
function applyTheme(t){const r=document.documentElement;if(t==="light"||t==="dark")r.setAttribute("data-theme",t);else r.removeAttribute("data-theme");}
function isDark(){const t=document.documentElement.getAttribute("data-theme");if(t)return t==="dark";return matchMedia("(prefers-color-scheme: dark)").matches;}
function css(k){return getComputedStyle(document.documentElement).getPropertyValue(k).trim();}
function allTagCounts(){const m=new Map();for(const n of S.notes.values())for(const t of tagsOf(n))m.set(t,(m.get(t)||0)+1);return [...m].sort((a,b)=>b[1]-a[1]);}
function openTasks(){let c=0;for(const n of S.notes.values())for(const t of taskLines(n.body))if(!t.done)c++;return c;}

/* ================= shell ================= */
function renderShell(){
  $("#nav").innerHTML=NAV.map(([k,l,i])=>`<a href="#/${k}" data-nav="${k}">${ic(i)}<span>${l}</span><span class="n" id="n-${k}"></span></a>`).join("");
  $("#dock").innerHTML=NAV.filter(x=>x[0]!=="board").map(([k,l,i])=>`<a href="#/${k}" data-nav="${k}">${ic(i)}<span>${l}</span></a>`).join("");
  $$(".brand").forEach(b=>b.insertAdjacentHTML("afterbegin",LOGO));
  $(".search-trigger kbd").textContent=MOD+" K";
}
function renderRail(){
  const pins=[...S.notes.values()].filter(n=>n.pinned).sort((a,b)=>touched(b)-touched(a)).slice(0,8);
  $("#rail-pinned").innerHTML=pins.length?`<h4>Pinned</h4><div class="list">${pins.map(n=>`<a href="#/note/${enc(n.id)}"><span class="dot" data-src="${srcKey(n)}"></span><span class="t">${n.icon?esc(n.icon)+" ":""}${esc(titleOf(n))}</span></a>`).join("")}</div>`:"";
  const tags=allTagCounts().slice(0,14);
  $("#rail-tags").innerHTML=tags.length?`<h4>Tags</h4><div class="tags">${tags.map(([t,c])=>`<a href="#/notes/tag/${enc(t)}" title="${c} notes">#${esc(t)}</a>`).join("")}</div>`:"";
}
function setNav(name){
  $$("[data-nav]").forEach(a=>{const on=a.dataset.nav===name;a.classList.toggle("on",on);if(on)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
}
function statsLine(){
  const inbox=[...S.notes.values()].filter(n=>n.inbox).length;
  if(S.progress!==null)return `${S.notes.size.toLocaleString()} notes · finding connections ${Math.round(S.progress*100)}%`;
  return `${S.notes.size.toLocaleString()} notes · ${S.edges.size.toLocaleString()} connections · ${inbox} in inbox`;
}
function paintStatus(){
  const el=$("#status");if(!el)return;
  const set=(k,v)=>{const e=$("#n-"+k);if(e)e.textContent=v||"";};
  set("notes",S.notes.size?S.notes.size.toLocaleString():"");
  const ot=S.ready?openTasks():0;set("tasks",ot?String(ot):"");
  if(S.progress!==null)el.innerHTML=`Finding connections… ${Math.round(S.progress*100)}%<span class="bar"><i style="width:${Math.round(S.progress*100)}%"></i></span>`;
  else if(!S.savedLocal)el.textContent="This browser is not keeping notes between visits. Back up before you leave.";
  else el.textContent=S.notes.size?`${S.notes.size.toLocaleString()} notes · ${S.edges.size.toLocaleString()} connections · saved in this browser`:"";
  const ts=$("#today-stats");if(ts)ts.textContent=statsLine();
}

/* ================= today ================= */
function sampleBanner(){
  if(![...S.notes.values()].some(n=>n.meta&&n.meta.sample))return "";
  return `<div class="banner"><span>You are exploring <b>sample notes</b>. Bring in your Google Keep notes, Claude chats or Markdown files when you are ready.</span><div class="row-btns"><button class="btn accent sm" data-act="tools">${ic("upload")}Import my notes</button><button class="btn ghost sm" data-act="rmsample">Remove samples</button></div></div>`;
}
function emptyState(){
  return `<div class="empty-state"><div class="eyebrow">Commonplace</div><h1 class="hero-h" style="margin:.6rem 0 1rem">A place for every thought, and the threads between them.</h1>
  <p>Bring in your Google Keep notes, your Claude conversations or a folder of Markdown files, or write a first note. Connections appear as soon as there is something to connect.</p>
  <div class="row-btns" style="margin-top:1.4rem"><button class="btn accent" data-act="tools">${ic("upload")}Bring notes in</button><button class="btn ghost" data-act="new">${ic("plus")}Write a note</button><button class="lk" data-act="sample">Explore with sample notes</button></div></div>`;
}
function viewToday(){
  if(!S.notes.size)return emptyState();
  const now=new Date();const hr=now.getHours();
  const greet=hr<5?"Still up?":hr<12?"Good morning.":hr<18?"Good afternoon.":"Good evening.";
  return sampleBanner()+`<div class="today"><div>
    <div class="eyebrow">${esc(now.toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"long",year:"numeric"}))}</div>
    <h1 class="hero-h" style="margin-top:.55rem">${greet}</h1>
    <p class="sub mono" id="today-stats">${statsLine()}</p>
    <form class="capture" data-form="capture"><textarea id="cap" rows="1" placeholder="What’s on your mind? Capture it now, sort it later." aria-label="Capture a thought"></textarea>
      <div class="bar"><span class="hint">↵ inbox · ⇧↵ new line · ${MOD}↵ journal</span><button type="button" class="btn ghost sm" data-act="cap-journal">${ic("calendar")}Add to journal</button><button class="btn sm" type="submit">${ic("inbox")}Save to inbox</button></div></form>
    ${insightHtml()}${resurfaceHtml()}${inboxHtml()}
  </div><aside class="side">${journalMini()}${tasksMini()}${heatHtml()}${recentHtml()}</aside></div>`;
}
function insightHtml(){
  if(!S.ix)return "";
  const pool=insightPool();
  if(!pool.length)return S.progress===null?`<section class="sec"><div class="sec-h"><h2>Found for you</h2></div><p class="muted">No new pairs to suggest. Write a few more notes, or bring in your Keep and Claude exports.</p></section>`:"";
  const i=S.insIdx%pool.length;const e=pool[i];const a=S.notes.get(e.a),b=S.notes.get(e.b);
  const ex=explain(S.ix,S.tagSets,a.id,b.id);const src=hlSrc(ex.terms);
  const chips=ex.tags.slice(0,2).map(t=>`<span class="w tg">#${esc(t)}</span>`).join("")+ex.terms.slice(0,4-Math.min(2,ex.tags.length)).map(t=>`<span class="w">${esc(t)}</span>`).join("");
  const card=n=>`<a class="card syn-card" href="#/note/${enc(n.id)}" data-act="peek" data-hl="${esc(src)}"><span class="mono"><span class="dot" data-src="${srcKey(n)}"></span>${SRC[srcKey(n)]||"Note"} · ${ago(touched(n))}</span><h3>${iconOf(n)}${esc(titleOf(n))}</h3><p>${snippetFor(n,src,220)||"&nbsp;"}</p></a>`;
  return `<section class="sec"><div class="sec-h"><h2>Found for you</h2><span class="eyebrow">${pool.length>1?`pair ${i+1} of ${pool.length}`:""}</span>${pool.length>1?`<button class="lk" data-act="nextpair">Show another pair</button>`:""}</div>
  <div class="synapse" id="syn"><svg class="thread" aria-hidden="true"><path class="base"/><path class="flow"/><circle r="4.5"/><circle r="4.5"/></svg>
  ${card(a)}<div class="syn-mid">${chips||'<span class="w">similar wording</span>'}</div>${card(b)}</div>
  <div class="syn-foot"><span class="why">${esc(reasonText(ex))} Linking them adds a [[link]] you can follow both ways.</span><button class="btn accent sm" data-act="linkpair" data-a="${esc(a.id)}" data-b="${esc(b.id)}">${ic("link")}Link them</button><button class="btn ghost sm" data-act="dismisspair" data-a="${esc(a.id)}" data-b="${esc(b.id)}">Not related</button></div></section>`;
}
function drawSynapse(){
  const box=$("#syn");if(!box)return;const cards=$$(".syn-card",box);if(cards.length<2)return;
  const r0=box.getBoundingClientRect(),a=cards[0].getBoundingClientRect(),b=cards[1].getBoundingClientRect();
  let x1,y1,x2,y2,d;
  if(b.top>=a.bottom-4){x1=a.left+a.width/2-r0.left;y1=a.bottom-r0.top;x2=b.left+b.width/2-r0.left;y2=b.top-r0.top;const m=(y2-y1)/2;d=`M${x1} ${y1}C${x1} ${y1+m} ${x2} ${y2-m} ${x2} ${y2}`;}
  else{x1=a.right-r0.left;y1=a.top+a.height/2-r0.top;x2=b.left-r0.left;y2=b.top+b.height/2-r0.top;const m=(x2-x1)/2;d=`M${x1} ${y1}C${x1+m} ${y1-18} ${x2-m} ${y2+18} ${x2} ${y2}`;}
  const svg=$("svg.thread",box);$$("path",svg).forEach(p=>p.setAttribute("d",d));
  const c=$$("circle",svg);c[0].setAttribute("cx",x1);c[0].setAttribute("cy",y1);c[1].setAttribute("cx",x2);c[1].setAttribute("cy",y2);
}
function resurfaceHtml(){
  const fg=forgotten(3);if(!fg.length)return "";
  return `<section class="sec"><div class="sec-h"><h2>Worth another look</h2><span class="eyebrow">old notes, newly relevant</span></div><div class="resurface">`+fg.map(p=>{
    const why=p.rc?`Related to ${p.rc} recent ${p.rc===1?"note":"notes"}`:`${p.deg} ${p.deg===1?"connection":"connections"}`;
    return `<a class="card rs" href="#/note/${enc(p.n.id)}"><span class="age">Untouched ${ago(touched(p.n)).replace(" ago","")}</span><h3>${iconOf(p.n)}${esc(titleOf(p.n))}</h3><p>${snippetFor(p.n,"",170)}</p><span class="mono faint">${why}</span></a>`;}).join("")+`</div></section>`;
}
function inboxHtml(){
  const inbox=[...S.notes.values()].filter(n=>n.inbox).sort((a,b)=>b.created-a.created);if(!inbox.length)return "";
  return `<section class="sec"><div class="sec-h"><h2>Inbox</h2><span class="eyebrow">${inbox.length} to sort</span></div><ul class="rows">`+inbox.slice(0,8).map(n=>`<li style="display:flex;align-items:center;gap:.4rem">${rowHtml(n)}<button class="ib" data-act="sorted" data-id="${esc(n.id)}" title="Mark as sorted" aria-label="Mark ${esc(titleOf(n))} as sorted">${ic("check")}</button></li>`).join("")+`</ul>${inbox.length>8?`<p class="mono faint" style="margin-top:.6rem">${inbox.length-8} more in Notes.</p>`:""}</section>`;
}
function journalMini(){
  const k=dkey(new Date());const id=S.dailyIdx.get(k);const n=id&&S.notes.get(id);
  const body=n&&String(n.body||"").trim()?`<div class="reader" style="font-size:.95rem;min-height:0;cursor:auto;max-height:11rem;overflow:hidden;-webkit-mask-image:linear-gradient(#000 70%,transparent)">${mdToHtml(n.body.split("\n").slice(0,8).join("\n"),ctx(n.id))}</div>`:`<p class="muted" style="margin:0;font-size:.9rem">Nothing written today yet.</p>`;
  return `<section><div class="sec-h"><h2>Today’s page</h2><a class="lk" href="#/journal">Open</a></div>${body}</section>`;
}
function allTasks(){
  const out=[];for(const n of S.notes.values()){const ts=taskLines(n.body);if(ts.length)out.push({n,ts});}
  out.sort((a,b)=>touched(b.n)-touched(a.n));return out;
}
function taskHtml(n,t,showFrom){
  return `<div class="task${t.done?" done":""}"><button class="cb${t.done?" on":""}" data-act="tick" data-nid="${esc(n.id)}" data-ln="${t.ln}" aria-pressed="${t.done}" aria-label="${t.done?"Mark not done":"Mark done"}"></button><span class="tx">${inlineMd(t.text,ctx(n.id))||"&nbsp;"}${showFrom?`<a class="from" href="#/note/${enc(n.id)}">${esc(titleOf(n))}</a>`:""}</span></div>`;
}
function tasksMini(){
  const list=[];for(const g of allTasks())for(const t of g.ts)if(!t.done&&t.text.trim())list.push([g.n,t]);
  if(!list.length)return "";
  return `<section><div class="sec-h"><h2>Open tasks</h2><a class="lk" href="#/tasks">All ${list.length}</a></div><div>${list.slice(0,6).map(([n,t])=>taskHtml(n,t,true)).join("")}</div></section>`;
}
function activityMap(){
  const m=new Map();const bump=(ts)=>{if(!ts)return;const k=dkey(ts);m.set(k,(m.get(k)||0)+1);};
  for(const n of S.notes.values()){bump(n.created);if(n.updated&&dkey(n.updated)!==dkey(n.created))bump(n.updated);}
  return m;
}
function heatHtml(){
  const m=activityMap();const weeks=20;const today=new Date();today.setHours(0,0,0,0);
  const start=new Date(today);start.setDate(start.getDate()-((today.getDay()+6)%7)-(weeks-1)*7);
  let cells="",total=0;const tk=dkey(today);
  for(let i=0;i<weeks*7;i++){const d=new Date(start);d.setDate(start.getDate()+i);const k=dkey(d);
    if(d>today){cells+=`<i style="visibility:hidden"></i>`;continue;}
    const c=m.get(k)||0;total+=c;const l=c===0?0:c===1?1:c<=3?2:c<=6?3:4;
    cells+=`<i data-l="${l}" class="${k===tk?"today":""}" title="${esc(prettyDay(k,{day:"numeric",month:"short"}))}: ${c} ${c===1?"note":"notes"}"></i>`;}
  return `<section><div class="sec-h"><h2>Activity</h2><span class="mono faint">${total} in 20 weeks</span></div><div class="heat" role="img" aria-label="Notes written or edited per day over the last 20 weeks">${cells}</div><div class="heat-legend"><span>${esc(start.toLocaleDateString(undefined,{month:"short",day:"numeric"}))}</span><span>today</span></div></section>`;
}
function recentHtml(){
  const list=[...S.notes.values()].filter(n=>!n.daily).sort((a,b)=>(b.updated||0)-(a.updated||0)).slice(0,6);
  return `<section><div class="sec-h"><h2>Recently edited</h2></div><div class="mini">${list.map(n=>`<a href="#/note/${enc(n.id)}"><span class="dot" data-src="${srcKey(n)}"></span><span class="t">${n.icon?esc(n.icon)+" ":""}${esc(titleOf(n))}</span><span class="m">${ago(n.updated)}</span></a>`).join("")}</div></section>`;
}

/* ================= notes: list, cards, board ================= */
function rowHtml(n,snip){
  const deg=(S.adj.get(n.id)||[]).length;
  const sn=snip!==undefined?snip:esc(plainText(n.body).slice(0,200));
  return `<a class="row" href="#/note/${enc(n.id)}" style="flex:1;min-width:0"><span class="dot" data-src="${srcKey(n)}" title="${SRC[srcKey(n)]||""}"></span><span class="t">${iconOf(n)}${esc(titleOf(n))}</span><span class="m">${n.pinned?ic("pin"):""}${deg?`<span class="links">${deg} ${deg===1?"link":"links"}</span>`:""}<span>${ago(touched(n))}</span></span>${sn?`<span class="s">${sn}</span>`:""}</a>`;
}
function viewNotes(board){
  if(!S.notes.size)return emptyState();
  const f=S.filter;const counts={all:S.notes.size,written:0,keep:0,chat:0,file:0,daily:0};for(const n of S.notes.values())counts[srcKey(n)]=(counts[srcKey(n)]||0)+1;
  const segs=[["all","All"],["written","Written"],["daily","Journal"],["keep","Keep"],["chat","Chats"],["file","Files"]].filter(s=>s[0]==="all"||counts[s[0]]);
  const tags=allTagCounts().slice(0,100);const mode=board?"board":f.mode;
  return `<div class="sec-h" style="align-items:center;margin:0"><h1 class="page-h">${board?"Board":f.tag?"#"+esc(f.tag):"Notes"}</h1>
    <div class="seg" role="group" aria-label="Layout">${[["list","List","list"],["grid","Cards","grid"],["board","Board","board"]].map(([k,l,i])=>`<button data-act="mode" data-v="${k}" class="${mode===k?"on":""}" aria-pressed="${mode===k}">${ic(i)}${l}</button>`).join("")}</div></div>
  ${board?`<p class="sub" style="max-width:40rem">Grow ideas from seedling to evergreen. Drag a card to another column when a note matures.</p>`:""}
  <div class="toolbar">
    <label class="field">${ic("search")}<input type="search" id="q" placeholder="Search words, titles and tags" value="${esc(f.q)}" aria-label="Search notes" autocomplete="off"></label>
    <div class="seg" role="group" aria-label="Source">${segs.map(([k,l])=>`<button data-act="src" data-v="${k}" class="${f.src===k?"on":""}">${l}<span class="n">${counts[k].toLocaleString()}</span></button>`).join("")}</div>
    <select class="sel" id="tagsel" data-sel="tag" aria-label="Filter by tag"><option value="">Any tag</option>${tags.map(([t,c])=>`<option value="${esc(t)}" ${f.tag===t?"selected":""}>#${esc(t)} (${c})</option>`).join("")}</select>
    ${board?"":`<select class="sel" data-sel="sort" aria-label="Order"><option value="recent" ${f.sort==="recent"?"selected":""}>Recently touched</option><option value="oldest" ${f.sort==="oldest"?"selected":""}>Longest untouched</option><option value="linked" ${f.sort==="linked"?"selected":""}>Most connected</option><option value="az" ${f.sort==="az"?"selected":""}>Title A to Z</option></select>`}
  </div><div id="results"></div>`;
}
function lcOf(n){let c=S.lc.get(n.id);if(!c){c={t:titleOf(n).toLowerCase(),b:(n.body||"").toLowerCase(),g:[...tagsOf(n)].join(" ")};S.lc.set(n.id,c);}return c;}
function filtered(){
  const f=S.filter;let list=[...S.notes.values()];
  if(f.src!=="all")list=list.filter(n=>srcKey(n)===f.src);
  if(f.tag)list=list.filter(n=>tagsOf(n).has(f.tag));
  const ws=f.q.toLowerCase().split(/\s+/).filter(Boolean);let snipSrc="";
  if(ws.length){
    const scored=[];
    for(const n of list){const c=lcOf(n);let sc=0,ok=true;
      for(const w of ws){let s=0;if(c.t.includes(w))s+=5;if(c.g.includes(w))s+=3;if(c.b.includes(w))s+=1;if(!s){ok=false;break;}sc+=s;}
      if(ok)scored.push([n,sc]);}
    scored.sort((a,b)=>(b[1]-a[1])||(touched(b[0])-touched(a[0])));
    list=scored.map(x=>x[0]);snipSrc=ws.map(reEsc).join("|");
  }else{
    const deg=n=>(S.adj.get(n.id)||[]).length;
    if(f.sort==="oldest")list.sort((a,b)=>touched(a)-touched(b));
    else if(f.sort==="linked")list.sort((a,b)=>deg(b)-deg(a));
    else if(f.sort==="az")list.sort((a,b)=>titleOf(a).localeCompare(titleOf(b)));
    else list.sort((a,b)=>touched(b)-touched(a));
  }
  return {list,snipSrc};
}
function renderResults(){
  const el=$("#results");if(!el)return;const f=S.filter;const {list,snipSrc}=filtered();
  if(!list.length){el.innerHTML=`<p class="muted">Nothing matches. Try fewer words, or clear the filters.</p>`;return;}
  if(S.view==="board"){renderBoard(el,list.filter(n=>!n.daily));return;}
  const show=list.slice(0,f.shown);
  let h=`<p class="count">${list.length.toLocaleString()} ${list.length===1?"note":"notes"}</p>`;
  if(f.mode==="grid")h+=`<div class="grid">${show.map(gcardHtml).join("")}</div>`;
  else h+=`<ul class="rows">`+show.map(n=>`<li>${rowHtml(n,snipSrc?snippetFor(n,snipSrc,200):undefined)}</li>`).join("")+`</ul>`;
  if(list.length>show.length)h+=`<p style="margin-top:1rem"><button class="btn ghost sm" data-act="more">Show ${Math.min(150,list.length-show.length)} more</button></p>`;
  el.innerHTML=h;
}
function gcardHtml(n){
  const deg=(S.adj.get(n.id)||[]).length;const body=String(n.body||"").slice(0,700);
  return `<a class="card gcard" href="#/note/${enc(n.id)}"><h3>${iconOf(n)}${esc(titleOf(n))}</h3>${body.trim()?`<div class="b">${mdToHtml(body,ctx(n.id,true))}</div>`:""}<div class="f"><span class="dot" data-src="${srcKey(n)}"></span>${SRC[srcKey(n)]||""}<span style="margin-left:auto">${deg?deg+" links · ":""}${ago(touched(n))}</span></div></a>`;
}
function renderBoard(el,list){
  const cols=STAGES.map(([k,name,desc],ci)=>{
    const items=list.filter(n=>(n.stage||"capture")===k);const show=items.slice(0,60);
    return `<div class="col" data-stage="${k}"><div class="col-h"><i style="width:${5+ci*2}px;height:${5+ci*2}px"></i><h3>${name}</h3><p>${items.length}</p></div><div class="desc">${desc}</div>
    ${show.map(n=>`<div class="card bcard" draggable="true" data-id="${esc(n.id)}" data-act="open" tabindex="0" role="link" aria-label="${esc(titleOf(n))}"><h4>${iconOf(n)}${esc(titleOf(n))}</h4><p>${esc(plainText(n.body).slice(0,140))}</p>
      <span class="mv">${ci>0?`<button data-act="stagemv" data-id="${esc(n.id)}" data-v="${STAGES[ci-1][0]}" aria-label="Move to ${STAGES[ci-1][1]}" title="Move to ${STAGES[ci-1][1]}">‹</button>`:""}${ci<2?`<button data-act="stagemv" data-id="${esc(n.id)}" data-v="${STAGES[ci+1][0]}" aria-label="Move to ${STAGES[ci+1][1]}" title="Move to ${STAGES[ci+1][1]}">›</button>`:""}</span></div>`).join("")}
    ${items.length>show.length?`<div class="more">${items.length-show.length} more. Search or filter to narrow.</div>`:""}</div>`;}).join("");
  el.innerHTML=`<div class="board">${cols}</div>`;
}
function setStage(id,v){const n=S.notes.get(id);if(!n||n.stage===v)return;n.stage=v;n.updated=Date.now();queueSave(n);toast(`Moved to ${stageName(v)}.`);}

/* ================= tasks ================= */
function viewTasks(){
  const groups=allTasks();const sh=S.tasks.show;let open=0,done=0;
  for(const g of groups)for(const t of g.ts)t.done?done++:open++;
  const vis=groups.map(g=>({n:g.n,ts:g.ts.filter(t=>t.text.trim()&&(sh==="all"||(sh==="done")===t.done))})).filter(g=>g.ts.length);
  return `<div style="max-width:52rem"><div class="sec-h" style="align-items:center;margin:0"><h1 class="page-h">Tasks</h1>
  <div class="seg" role="group" aria-label="Show">${[["open","Open",open],["done","Done",done],["all","All",open+done]].map(([k,l,c])=>`<button data-act="tshow" data-v="${k}" class="${sh===k?"on":""}">${l}<span class="n">${c}</span></button>`).join("")}</div></div>
  <p class="sub">Every checkbox from every note, in one place. Tick one here and it updates in its note.</p>
  <form class="capture" data-form="task" style="margin:1.2rem 0 1.6rem;padding:.6rem .8rem"><div style="display:flex;gap:.6rem;align-items:center"><span class="cb" aria-hidden="true" style="margin:0"></span><input id="newtask" style="flex:1;border:0;outline:none;background:transparent;font:1.02rem var(--read);min-width:0" placeholder="Add a task to today’s journal" aria-label="New task" autocomplete="off"><button class="btn sm" type="submit">Add</button></div></form>
  ${vis.length?vis.slice(0,80).map(g=>`<div class="card tgroup"><h3><span class="dot" data-src="${srcKey(g.n)}"></span><a href="#/note/${enc(g.n.id)}">${iconOf(g.n)}${esc(titleOf(g.n))}</a><span class="mono faint" style="margin-left:auto">${ago(touched(g.n))}</span></h3>${g.ts.map(t=>taskHtml(g.n,t,false)).join("")}</div>`).join(""):`<p class="muted">${sh==="done"?"Nothing ticked off yet.":"No open tasks. Type - [ ] in any note to add one."}</p>`}</div>`;
}
function tickTask(nid,ln){
  const n=S.notes.get(nid);if(!n)return;n.body=toggleTaskLine(n.body,+ln);n.updated=Date.now();queueSave(n);queueReindex(n.id);
}

/* ================= journal ================= */
function viewJournal(){
  const today=dkey(new Date());const k=S.jdate||today;const id=S.dailyIdx.get(k);const n=id&&S.notes.get(id);
  S.curId=n?n.id:null;
  if(!S.cal){const d=parseKey(k);S.cal={y:d.getFullYear(),m:d.getMonth()};}
  const past=[...S.notes.values()].filter(x=>x.daily&&x.daily<k&&String(x.body||"").trim()).sort((a,b)=>a.daily<b.daily?1:-1).slice(0,6);
  const d=parseKey(k);
  return `<div class="journal"><div>
    <section class="jday cur"><div class="jday-h"><h2>${esc(d.toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"long"}))}</h2><span class="mono">${d.getFullYear()}${k===today?" · today":""}</span>${k!==today?`<a class="lk" href="#/journal" style="margin-left:auto">Back to today</a>`:""}</div>
    <div class="card paper" id="body">${jBody(n)}</div></section>
    ${past.map(p=>`<section class="jday past"><div class="jday-h"><a href="#/journal/${p.daily}"><h2>${esc(parseKey(p.daily).toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"long"}))}</h2></a><span class="mono">${parseKey(p.daily).getFullYear()}</span></div><div class="card paper"><div class="reader" style="cursor:auto">${mdToHtml(p.body,ctx(p.id))}</div></div></section>`).join("")}
  </div><aside class="side-panel">${calHtml(k)}${onThisDay(k)}</aside></div>`;
}
function jBody(n){
  if(S.edit||!n||!String(n.body||"").trim())return editorHtml(n,"Write about your day. Type / for blocks, [[ to link a note, - [ ] for a task.");
  return `<div class="reader" data-act="startedit">${mdToHtml(n.body,ctx(n.id))}</div>`;
}
function calHtml(sel){
  const {y,m}=S.cal;const first=new Date(y,m,1);const startOff=(first.getDay()+6)%7;const days=new Date(y,m+1,0).getDate();
  const act=activityMap();const today=dkey(new Date());
  let cells=["M","T","W","T","F","S","S"].map(x=>`<span class="dw">${x}</span>`).join("");
  const total=Math.ceil((startOff+days)/7)*7;
  for(let i=0;i<total;i++){const d=new Date(y,m,1-startOff+i);const k=dkey(d);const id=S.dailyIdx.get(k);const has=id&&String((S.notes.get(id)||{}).body||"").trim();
    const cls=[d.getMonth()!==m?"out":"",act.get(k)?"act":"",has?"has":"",k===today?"today":"",k===sel?"sel":""].filter(Boolean).join(" ");
    cells+=`<button class="${cls}" data-act="jday" data-k="${k}" aria-label="${esc(prettyDay(k))}${has?", has a journal entry":""}">${d.getDate()}</button>`;}
  return `<section class="card cal"><div class="cal-h"><button class="ib" data-act="calnav" data-d="-1" aria-label="Previous month">${ic("left")}</button><b>${esc(first.toLocaleDateString(undefined,{month:"long",year:"numeric"}))}</b><button class="ib" data-act="calnav" data-d="1" aria-label="Next month">${ic("right")}</button></div><div class="cal-g">${cells}</div></section>`;
}
function onThisDay(k){
  const d=parseKey(k);const md=k.slice(5);
  const same=[...S.notes.values()].filter(n=>!n.daily&&(dkey(n.created)===k||dkey(n.updated||0)===k)).slice(0,8);
  const past=[...S.notes.values()].filter(n=>!n.daily&&dkey(n.created).slice(5)===md&&new Date(n.created).getFullYear()<d.getFullYear()).slice(0,6);
  const li=n=>`<a href="#/note/${enc(n.id)}"><span class="dot" data-src="${srcKey(n)}"></span><span class="t">${esc(titleOf(n))}</span><span class="m">${new Date(n.created).getFullYear()}</span></a>`;
  return `<section><h2>Written this day</h2>${same.length?`<div class="mini">${same.map(li).join("")}</div>`:`<p class="muted" style="font-size:.85rem;margin:0">No other notes from this day.</p>`}</section>
  <section><h2>On this day, other years</h2>${past.length?`<div class="mini">${past.map(li).join("")}</div>`:`<p class="muted" style="font-size:.85rem;margin:0">Nothing from ${esc(d.toLocaleDateString(undefined,{day:"numeric",month:"long"}))} in earlier years.</p>`}</section>`;
}

/* ================= note ================= */
function editorHtml(n,ph){
  return `<div class="edit-wrap"><textarea class="editor" id="editor" aria-label="Note text" placeholder="${esc(ph||"Start writing. Type / for blocks, [[ to link a note, #tag to group.")}">${esc(n?n.body:"")}</textarea>
  <div class="edit-hint"><span><kbd>/</kbd> blocks</span><span><kbd>[[</kbd> link a note</span><span><kbd>${MOD}</kbd><kbd>B</kbd> bold</span><span><kbd>Esc</kbd> done</span></div></div>`;
}
function bodyHtml(n){
  if(S.edit)return editorHtml(n);
  if(!String(n.body||"").trim())return `<div class="reader" data-act="startedit"><p class="empty">Empty note. Click here to start writing.</p></div>`;
  return `<div class="reader" data-act="startedit">${highlightHtml(mdToHtml(n.body,ctx(n.id)),S.hl)}</div>`;
}
function viewNote(id){
  const n=S.notes.get(id);
  if(!n)return `<div class="empty-state"><h1 class="page-h">That note is not here.</h1><p>It may have been deleted. <a href="#/notes">Back to your notes</a>.</p></div>`;
  const wc=words(n.body);
  return `<div class="note"><article class="doc">
    <div class="crumbs"><a href="#/${n.daily?"journal":"notes"}" class="hide-focus">${n.daily?"Journal":"Notes"}</a><span class="hide-focus">/</span><span class="ct-t">${esc(titleOf(n))}</span><span class="saved" id="saved"></span>
      <button class="ib hide-focus${n.pinned?" on":""}" data-act="pin" aria-pressed="${!!n.pinned}" title="${n.pinned?"Unpin":"Pin to sidebar"}" aria-label="${n.pinned?"Unpin":"Pin to sidebar"}">${ic("pin")}</button>
      <button class="ib hide-focus" data-act="focus" title="Focus mode (F)" aria-label="Focus mode">${ic("focus")}</button>
      <button class="ib hide-focus" data-act="notemenu" title="More" aria-label="More actions">${ic("more")}</button></div>
    <button class="icon-slot${n.icon?"":" empty"}" data-act="icon" aria-label="${n.icon?"Change icon":"Add an icon"}">${n.icon?esc(n.icon):"+ Add icon"}</button>
    ${n.daily?`<h1 class="title-in">${esc(prettyDay(n.daily))}</h1>`:`<textarea class="title-in" id="title" rows="1" placeholder="Untitled" aria-label="Title">${esc(n.title)}</textarea>`}
    <div class="props"><span class="chip"><span class="dot" data-src="${srcKey(n)}"></span>${SRC[srcKey(n)]||"Note"}${n.src==="chat"&&n.meta&&n.meta.msgs?` · ${n.meta.msgs} messages`:""}</span>
      <div class="stage" role="group" aria-label="Growth stage">${STAGES.map(([k,l])=>`<button data-act="stage" data-v="${k}" class="${(n.stage||"capture")===k?"on":""}" aria-pressed="${(n.stage||"capture")===k}"><i></i>${l}</button>`).join("")}</div>
      <span class="mono">Edited ${ago(n.updated)} · ${wc.toLocaleString()} words · ${Math.max(1,Math.round(wc/230))} min read</span>
      ${n.inbox?`<button class="btn soft sm" data-act="sorted">${ic("check")}Mark as sorted</button>`:""}</div>
    <div class="tagrow" id="tagrow">${tagRowHtml(n)}</div>
    <div id="body">${bodyHtml(n)}</div>
    <div class="doc-foot" id="docfoot">${footHtml()}</div>
  </article><aside class="side-panel" id="side" aria-label="Connections"></aside></div>${$("body").classList.contains("focus")?`<button class="btn soft sm focus-exit" data-act="focus">Exit focus</button>`:""}`;
}
function footHtml(){
  return `${S.edit?`<button class="btn sm" data-act="edit">${ic("check")}Done</button>`:`<button class="btn ghost sm" data-act="edit">${ic("pen")}Edit</button>`}${S.hl?`<button class="lk" data-act="clearhl">Clear highlights</button>`:""}`;
}
function tagRowHtml(n){
  const own=new Set((n.tags||[]).map(t=>String(t).toLowerCase()));
  return [...tagsOf(n)].map(t=>own.has(t)?`<span class="tg"><a href="#/notes/tag/${enc(t)}">#${esc(t)}</a><button data-act="rmtag" data-t="${esc(t)}" aria-label="Remove tag ${esc(t)}">×</button></span>`:`<span class="tg inl" title="Tag written in the note"><a href="#/notes/tag/${enc(t)}">#${esc(t)}</a></span>`).join("")+`<input id="addtag" placeholder="+ tag" aria-label="Add a tag" list="taglist"><datalist id="taglist">${allTagCounts().slice(0,60).map(([t])=>`<option value="${esc(t)}">`).join("")}</datalist>`;
}
function connItem(n,oid,kind){
  const o=S.notes.get(oid);if(!o)return "";
  let why="",hl="",meter="",ctxLine="";
  if(kind==="back"){
    const re=new RegExp("\\[\\[\\s*"+reEsc(n.title||"")+"\\s*(\\|[^\\]]*)?\\]\\]","i");
    const line=String(o.body||"").split("\n").find(l=>re.test(l));
    if(line)ctxLine=`<span class="ctx">${inlineMd(line.replace(/^\s*([-*+]|\d+[.)])\s+(\[[ xX]\]\s+)?/,"").slice(0,220),ctx(o.id,true))}</span>`;
    else why="Links to this note.";
  }else if(kind==="out")why="You linked it from this note.";
  else{const ex=explain(S.ix,S.tagSets,n.id,oid);why=reasonText(ex);hl=hlSrc(ex.terms);meter=`<span class="meter" title="Strength ${ex.pct}%"><i style="width:${Math.min(100,ex.pct*2)}%"></i></span>`;}
  return `<li><a class="ct" href="#/note/${enc(oid)}" data-act="peek" data-hl="${esc(hl)}"><span class="dot" data-src="${srcKey(o)}"></span>${o.icon?esc(o.icon)+" ":""}${esc(titleOf(o))}${meter}</a>${why?`<span class="why">${esc(why)}</span>`:""}${ctxLine}${hl?`<span class="acts"><button class="lk" data-act="why" data-hl="${esc(hl)}">Show shared words</button><button class="lk" data-act="linkpair" data-a="${esc(n.id)}" data-b="${esc(oid)}">Link</button></span>`:""}</li>`;
}
function unlinkedMentions(n){
  const t=(n.title||"").trim();if(n.daily||t.length<4)return [];
  let re;try{re=new RegExp("(?<![\\p{L}\\d\\[])"+reEsc(t)+"(?![\\p{L}\\d])","iu");}catch(e){return [];}
  const out=[];
  for(const o of S.notes.values()){
    if(o.id===n.id||(S.links.get(o.id)||new Set()).has(n.id))continue;
    const b=String(o.body||"");const m=re.exec(b);if(!m)continue;
    const s=Math.max(0,m.index-60),e=Math.min(b.length,m.index+t.length+80);
    out.push({o,snip:(s>0?"… ":"")+esc(b.slice(s,m.index))+`<mark class="hl">${esc(m[0])}</mark>`+esc(b.slice(m.index+m[0].length,e))+(e<b.length?" …":"")});
    if(out.length>=8)break;
  }
  return out;
}
function renderSide(id){
  const el=$("#side");const n=S.notes.get(id);if(!el||!n)return;
  if(!S.ix){el.innerHTML=`<p class="mono faint">Finding connections…</p>`;return;}
  const outs=[...(S.links.get(id)||[])];
  const backs=[];for(const [src,set] of S.links)if(set.has(id)&&src!==id)backs.push(src);
  const found=(S.adj.get(id)||[]).filter(a=>a.k==="sys").sort((a,b)=>b.s-a.s);
  const heads=headingsOf(n.body);const um=unlinkedMentions(n);
  let h=`<section><h2>Local graph</h2><div class="lgraph"><canvas id="lg" aria-label="Notes connected to this one"></canvas></div></section>`;
  if(heads.length>1)h+=`<section><h2>Outline</h2><div class="outline">${heads.slice(0,24).map((x,i)=>`<a href="#" data-act="goto" data-h="${i}" data-l="${Math.min(3,x.lv)}">${esc(x.text)}</a>`).join("")}</div></section>`;
  if(backs.length)h+=`<section><h2>Linked mentions <span class="n">${backs.length}</span></h2><ul class="conn">${backs.map(o=>connItem(n,o,"back")).join("")}</ul></section>`;
  if(found.length)h+=`<section><h2>Found in your notes <span class="n">${found.length}</span></h2><ul class="conn">${found.slice(0,8).map(a=>connItem(n,a.o,"sys")).join("")}</ul></section>`;
  if(outs.length)h+=`<section><h2>You linked <span class="n">${outs.length}</span></h2><ul class="conn">${outs.map(o=>connItem(n,o,"out")).join("")}</ul></section>`;
  if(um.length)h+=`<section><h2>Unlinked mentions <span class="n">${um.length}</span></h2><ul class="conn">${um.map(x=>`<li><a class="ct" href="#/note/${enc(x.o.id)}"><span class="dot" data-src="${srcKey(x.o)}"></span>${esc(titleOf(x.o))}</a><span class="ctx">${x.snip}</span><span class="acts"><button class="lk" data-act="linkmention" data-id="${esc(x.o.id)}">Turn into a link</button></span></li>`).join("")}</ul></section>`;
  if(!backs.length&&!found.length&&!outs.length)h+=`<section><h2>Connections</h2><p class="muted" style="font-size:.86rem;margin:0">Nothing connected yet. Connections appear when another note shares tags or distinctive words, or when you link with [[double brackets]].</p></section>`;
  el.innerHTML=h;LG.draw(id);
}

/* ================= local graph (2D) ================= */
const LG={nodes:[],id:null,hover:null,
  draw(id){
    const cv=$("#lg");if(!cv)return;this.id=id;
    const adj=(S.adj.get(id)||[]).slice().sort((a,b)=>(b.k==="user")-(a.k==="user")||b.s-a.s).slice(0,12);
    const nodes=new Map();const seed=(nid,k)=>(parseInt(hash(nid+k).slice(0,5),36)%600)/10-30;const add=(nid,depth)=>{if(!nodes.has(nid)&&S.notes.has(nid))nodes.set(nid,{id:nid,depth,x:seed(nid,"x"),y:seed(nid,"y"),vx:0,vy:0});};
    add(id,0);adj.forEach(a=>add(a.o,1));
    for(const a of adj){if(nodes.size>=26)break;(S.adj.get(a.o)||[]).slice().sort((x,y)=>y.s-x.s).slice(0,2).forEach(b=>{if(nodes.size<26)add(b.o,2);});}
    const edges=[];for(const e of S.edges.values()){if(nodes.has(e.a)&&nodes.has(e.b))edges.push({a:nodes.get(e.a),b:nodes.get(e.b),k:e.kind});}
    const N=[...nodes.values()];const c0=nodes.get(id);c0.x=0;c0.y=0;
    for(let it=0;it<220;it++){
      for(let i=0;i<N.length;i++)for(let j=i+1;j<N.length;j++){const p=N[i],q=N[j];let dx=p.x-q.x,dy=p.y-q.y;let d2=dx*dx+dy*dy||1;const f=1600/d2;p.vx+=dx*f*.02;p.vy+=dy*f*.02;q.vx-=dx*f*.02;q.vy-=dy*f*.02;}
      for(const e of edges){const dx=e.b.x-e.a.x,dy=e.b.y-e.a.y;const d=Math.hypot(dx,dy)||1;const l=(d-(e.a.depth+e.b.depth>2?34:48))/d*.06;e.a.vx+=dx*l;e.a.vy+=dy*l;e.b.vx-=dx*l;e.b.vy-=dy*l;}
      for(const p of N){if(p===c0)continue;p.vx-=p.x*.004;p.vy-=p.y*.004;p.vx*=.7;p.vy*=.7;p.x+=p.vx;p.y+=p.vy;}
    }
    this.nodes=N;this.edges=edges;this.paint();
    if(!cv.dataset.bound){cv.dataset.bound="1";
      cv.addEventListener("mousemove",e=>{const p=this.at(e);const hid=p?p.id:null;if(hid!==this.hover){this.hover=hid;cv.style.cursor=hid?"pointer":"default";this.paint();}});
      cv.addEventListener("mouseleave",()=>{this.hover=null;this.paint();});
      cv.addEventListener("click",e=>{const p=this.at(e);if(p&&p.id!==this.id)location.hash="#/note/"+enc(p.id);});}
  },
  at(e){const r=e.target.getBoundingClientRect();const x=e.clientX-r.left,y=e.clientY-r.top;let best=null,bd=14;for(const p of this.nodes){const d=Math.hypot(p.sx-x,p.sy-y);if(d<bd){bd=d;best=p;}}return best;},
  paint(){
    const cv=$("#lg");if(!cv)return;const r=cv.parentElement.getBoundingClientRect();const dpr=window.devicePixelRatio||1;
    const w=Math.max(100,r.width),h=Math.max(100,r.height);cv.width=w*dpr;cv.height=h*dpr;const c=cv.getContext("2d");c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);
    const N=this.nodes;let mx=.2,my=.2;for(const p of N){mx=Math.max(mx,Math.abs(p.x)/(w/2-40));my=Math.max(my,Math.abs(p.y)/(h/2-20));}
    for(const p of N){p.sx=w/2+p.x/mx;p.sy=h/2+p.y/my;}
    const col={written:css("--c-written"),keep:css("--c-keep"),chat:css("--c-chat"),file:css("--c-file"),daily:css("--c-daily")};
    for(const e of this.edges){const hot=this.hover&&(e.a.id===this.hover||e.b.id===this.hover);c.globalAlpha=hot?.9:(e.a.depth===0||e.b.depth===0?.55:.22);c.strokeStyle=e.k==="user"?css("--hema"):css("--eosin");c.lineWidth=hot?1.8:1;c.setLineDash(e.k==="user"?[]:[3,3]);c.beginPath();c.moveTo(e.a.sx,e.a.sy);c.lineTo(e.b.sx,e.b.sy);c.stroke();}
    c.setLineDash([]);c.globalAlpha=1;
    const fam=getComputedStyle(document.body).fontFamily;
    for(const p of N){const n=S.notes.get(p.id);const rr=p.depth===0?7:p.depth===1?4.5:3;c.globalAlpha=p.depth===2&&this.hover!==p.id?.55:1;c.fillStyle=col[srcKey(n)]||col.written;c.beginPath();c.arc(p.sx,p.sy,rr,0,6.2832);c.fill();
      if(p.depth===0){c.strokeStyle=css("--eosin");c.lineWidth=2;c.beginPath();c.arc(p.sx,p.sy,rr+4,0,6.2832);c.stroke();}}
    c.globalAlpha=1;c.textBaseline="middle";
    const placed=[];const order=N.slice().sort((a,b)=>(b.id===this.hover)-(a.id===this.hover)||a.depth-b.depth);
    for(const p of order){if(p.depth===2&&this.hover!==p.id)continue;const n=S.notes.get(p.id);let t=titleOf(n);t=t.length>22?t.slice(0,21)+"…":t;
      c.font=(p.depth===0||this.hover===p.id?"600 12px ":"500 11px ")+fam;const tw=c.measureText(t).width;let x=p.sx+8;if(x+tw>w-4)x=p.sx-8-tw;
      const box=[x-2,p.sy-8,x+tw+2,p.sy+8];if(placed.some(b=>box[0]<b[2]&&box[2]>b[0]&&box[1]<b[3]&&box[3]>b[1]))continue;placed.push(box);
      c.lineWidth=3.5;c.strokeStyle=css("--surface");c.strokeText(t,x,p.sy);c.fillStyle=p.depth===0||this.hover===p.id?css("--ink"):css("--ink2");c.fillText(t,x,p.sy);}
  }
};

/* ================= 3D graph ================= */
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const Brain={
  cv:null,ctx:null,w:0,h:0,dpr:1,nodes:[],edges:[],byId:new Map(),yaw:.5,pitch:.3,zoom:1,alpha:1,sel:null,hover:null,dirty:true,raf:0,ro:null,ptrs:new Map(),moved:0,t0:0,pd:0,capped:false,total:0,spin:true,match:null,
  init(){
    this.stop();const cv=$("#bcv");if(!cv)return;this.cv=cv;this.ctx=cv.getContext&&cv.getContext("2d");if(!this.ctx)return;
    this.sel=null;this.spin=!matchMedia("(prefers-reduced-motion: reduce)").matches;this.build();this.bind();this.size();this.panel();this.search(S.brain.q);this.kick();
    if(window.ResizeObserver){this.ro=new ResizeObserver(()=>{this.size();this.invalidate();});this.ro.observe(cv.parentElement);}
  },
  stop(){cancelAnimationFrame(this.raf);this.raf=0;if(this.ro){this.ro.disconnect();this.ro=null;}},
  build(){
    const deg=n=>(S.adj.get(n.id)||[]).length;
    let list=[...S.notes.values()].filter(n=>S.brain.chats||n.src!=="chat");
    this.total=list.length;
    if(list.length>150)list=list.filter(n=>deg(n)>0);
    list.sort((a,b)=>deg(b)-deg(a));
    this.capped=list.length>450;if(this.capped)list=list.slice(0,450);
    this.byId=new Map();
    this.nodes=list.map(n=>{const r=110,th=Math.random()*6.2832,ph=Math.acos(2*Math.random()-1);
      const o={id:n.id,n,x:r*Math.sin(ph)*Math.cos(th),y:r*Math.sin(ph)*Math.sin(th),z:r*Math.cos(ph),vx:0,vy:0,vz:0,deg:deg(n),sx:0,sy:0,sr:0,old:(Date.now()-touched(n))>182*DAY};
      this.byId.set(n.id,o);return o;});
    this.hubs=new Set(this.nodes.slice(0,7).map(p=>p.id));
    this.edges=[];
    for(const e of S.edges.values()){const s=this.byId.get(e.a),t=this.byId.get(e.b);if(s&&t)this.edges.push({s,t,kind:e.kind,sc:e.s});}
    const bc=$("#bcount");if(bc)bc.textContent=this.nodes.length<this.total?`${this.nodes.length.toLocaleString()} most connected of ${this.total.toLocaleString()}`:`${this.nodes.length.toLocaleString()} notes · ${this.edges.length.toLocaleString()} threads`;
    this.alpha=1;
    if(matchMedia("(prefers-reduced-motion: reduce)").matches){for(let i=0;i<260;i++)this.tick();this.alpha=0;}
  },
  tick(){
    const N=this.nodes,a=this.alpha;if(a<=0)return;
    for(let i=0;i<N.length;i++){const p=N[i];
      for(let j=i+1;j<N.length;j++){const q=N[j];
        let dx=p.x-q.x,dy=p.y-q.y,dz=p.z-q.z;let d2=dx*dx+dy*dy+dz*dz;if(d2>62500)continue;if(d2<1){dx=Math.random()-.5;dy=Math.random()-.5;dz=Math.random()-.5;d2=1;}
        const f=36*a/d2;p.vx+=dx*f;p.vy+=dy*f;p.vz+=dz*f;q.vx-=dx*f;q.vy-=dy*f;q.vz-=dz*f;}
    }
    for(const e of this.edges){const s=e.s,t=e.t;
      let dx=t.x+t.vx-s.x-s.vx,dy=t.y+t.vy-s.y-s.vy,dz=t.z+t.vz-s.z-s.vz;const d=Math.sqrt(dx*dx+dy*dy+dz*dz)||1;
      const dist=e.kind==="user"?30:clamp(58-e.sc*90,30,58);const l=(d-dist)/d*a*0.3;
      dx*=l;dy*=l;dz*=l;t.vx-=dx*.5;t.vy-=dy*.5;t.vz-=dz*.5;s.vx+=dx*.5;s.vy+=dy*.5;s.vz+=dz*.5;}
    for(const p of N){p.vx-=p.x*.012*a;p.vy-=p.y*.012*a;p.vz-=p.z*.012*a;p.vx*=.6;p.vy*=.6;p.vz*=.6;p.x+=p.vx;p.y+=p.vy;p.z+=p.vz;}
    this.alpha*=0.977;if(this.alpha<0.012)this.alpha=0;
  },
  size(){const cv=this.cv;if(!cv)return;const r=cv.parentElement.getBoundingClientRect();this.dpr=window.devicePixelRatio||1;this.w=Math.max(200,r.width);this.h=Math.max(200,r.height);cv.width=this.w*this.dpr;cv.height=this.h*this.dpr;},
  kick(){if(!this.raf)this.raf=requestAnimationFrame(()=>this.frame());},
  invalidate(){this.dirty=true;this.kick();},
  frame(){
    this.raf=0;if(!this.cv||!this.cv.isConnected)return;
    if(this.alpha>0){for(let k=0;k<(this.alpha>.3?3:1);k++)this.tick();this.dirty=true;}
    if(this.spin&&!this.sel&&!document.hidden){this.yaw+=.0018;this.dirty=true;}
    if(this.dirty){this.draw();this.dirty=false;}
    if(this.alpha>0||(this.spin&&!this.sel))this.kick();
  },
  project(){
    const cy=Math.cos(this.yaw),sy=Math.sin(this.yaw),cp=Math.cos(this.pitch),sp=Math.sin(this.pitch);
    const sc=Math.min(this.w,this.h)/400*this.zoom;
    for(const p of this.nodes){
      const x1=p.x*cy+p.z*sy,z1=-p.x*sy+p.z*cy;const y2=p.y*cp-z1*sp,z2=p.y*sp+z1*cp;
      const per=700/(700+z2);p.sx=this.w/2+x1*sc*per;p.sy=this.h/2+y2*sc*per;p.pz=z2;p.per=per;
      p.sr=(2.6+1.6*Math.sqrt(p.deg))*per*Math.max(.7,sc*.7);
    }
  },
  draw(){
    const c=this.ctx;if(!c)return;
    const ink=css("--ink"),surface=css("--surface"),hema=css("--hema"),eosin=css("--eosin"),keep=css("--c-keep");
    const srcCol={written:css("--c-written"),keep,chat:css("--c-chat"),file:css("--c-file"),daily:css("--c-daily")};
    c.setTransform(this.dpr,0,0,this.dpr,0,0);c.clearRect(0,0,this.w,this.h);this.project();
    const sel=this.sel?this.byId.get(this.sel):null;const nb=new Set();
    if(sel){nb.add(sel.id);for(const e of this.edges){if(e.s===sel)nb.add(e.t.id);else if(e.t===sel)nb.add(e.s.id);}}
    const M=this.match;const focus=sel?nb:M;
    c.lineCap="round";
    for(const e of this.edges){
      const on=sel&&(e.s===sel||e.t===sel);const dim=focus&&!(focus.has(e.s.id)&&focus.has(e.t.id))&&!on;
      c.globalAlpha=dim?.05:on?.95:clamp(.14+e.sc*1.1,.16,.5)*Math.min(1,(e.s.per+e.t.per)/2.1);
      c.strokeStyle=e.kind==="user"?hema:eosin;c.lineWidth=on?2:(e.kind==="user"?1.3:.8);c.setLineDash(e.kind==="user"?[]:[3,4]);
      c.beginPath();c.moveTo(e.s.sx,e.s.sy);c.lineTo(e.t.sx,e.t.sy);c.stroke();
    }
    c.setLineDash([]);
    const order=[...this.nodes].sort((a,b)=>b.pz-a.pz);
    for(const p of order){
      const dim=focus&&!focus.has(p.id);const depth=clamp((p.per-.75)*2.2,.35,1);c.globalAlpha=dim?.12:depth;
      const r=Math.max(2,p.sr);
      if(S.brain.glow&&p.old&&!dim){c.fillStyle=keep;c.globalAlpha=.25;c.beginPath();c.arc(p.sx,p.sy,r+6,0,6.2832);c.fill();c.globalAlpha=depth;}
      c.fillStyle=srcCol[srcKey(p.n)]||ink;c.beginPath();c.arc(p.sx,p.sy,r,0,6.2832);c.fill();
      if((sel&&p===sel)||(M&&M.has(p.id)&&!sel)){c.globalAlpha=1;c.strokeStyle=eosin;c.lineWidth=2;c.beginPath();c.arc(p.sx,p.sy,r+4,0,6.2832);c.stroke();}
    }
    c.globalAlpha=1;c.textBaseline="middle";c.lineJoin="round";const fam=getComputedStyle(document.body).fontFamily;
    const label=(p,strong)=>{let t=titleOf(p.n);t=t.length>34?t.slice(0,33)+"…":t;c.font=(strong?"600 13px ":"500 11.5px ")+fam;const x=p.sx+Math.max(6,p.sr)+5;c.strokeStyle=surface;c.lineWidth=4;c.globalAlpha=strong?1:.8;c.strokeText(t,x,p.sy);c.fillStyle=strong?ink:css("--ink2");c.fillText(t,x,p.sy);c.globalAlpha=1;};
    if(sel){for(const p of order)if(nb.has(p.id))label(p,p===sel);}
    else if(M){let k=0;for(const p of order)if(M.has(p.id)&&k++<14)label(p,true);}
    else{for(const p of order)if(this.hubs.has(p.id)&&p.per>.95)label(p,false);if(this.hover){const p=this.byId.get(this.hover);if(p)label(p,true);}}
  },
  at(x,y){let best=null,bd=1e9;for(const p of this.nodes){const d=Math.hypot(p.sx-x,p.sy-y);const lim=Math.max(14,p.sr+8);if(d<lim&&(d<bd||(best&&p.pz<best.pz&&d<bd+4))){best=p;bd=d;}}return best;},
  tap(x,y){const p=this.at(x,y);this.select(p?p.id:null);},
  hoverAt(e){const r=this.cv.getBoundingClientRect();const p=this.at(e.clientX-r.left,e.clientY-r.top);const id=p?p.id:null;
    if(id!==this.hover){this.hover=id;this.cv.style.cursor=id?"pointer":"grab";if(!this.sel)this.invalidate();}},
  select(id){this.sel=id;this.panel();this.invalidate();},
  search(q){
    q=String(q||"").trim().toLowerCase();if(!q){this.match=null;this.invalidate();return;}
    const ws=q.split(/\s+/);this.match=new Set(this.nodes.filter(p=>{const c=lcOf(p.n);return ws.every(w=>c.t.includes(w)||c.g.includes(w));}).map(p=>p.id));this.invalidate();
  },
  bind(){
    const cv=this.cv;
    cv.addEventListener("pointerdown",e=>{this.spin=false;try{cv.setPointerCapture(e.pointerId);}catch(_){}this.ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});this.moved=0;this.t0=performance.now();
      if(this.ptrs.size===2){const [a,b]=[...this.ptrs.values()];this.pd=Math.hypot(a.x-b.x,a.y-b.y);}});
    cv.addEventListener("pointermove",e=>{const p=this.ptrs.get(e.pointerId);if(!p){this.hoverAt(e);return;}
      const dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;this.moved+=Math.abs(dx)+Math.abs(dy);
      if(this.ptrs.size===1){this.yaw+=dx*.008;this.pitch=clamp(this.pitch+dy*.008,-1.4,1.4);}
      else if(this.ptrs.size===2){const [a,b]=[...this.ptrs.values()];const d=Math.hypot(a.x-b.x,a.y-b.y);if(this.pd)this.zoom=clamp(this.zoom*d/this.pd,.35,5);this.pd=d;}
      this.invalidate();});
    const up=e=>{const had=this.ptrs.delete(e.pointerId);
      if(had&&this.ptrs.size===0&&this.moved<6&&performance.now()-this.t0<600){const r=cv.getBoundingClientRect();this.tap(e.clientX-r.left,e.clientY-r.top);}this.pd=0;};
    cv.addEventListener("pointerup",up);cv.addEventListener("pointercancel",e=>{this.ptrs.delete(e.pointerId);this.pd=0;});
    cv.addEventListener("dblclick",e=>{const r=cv.getBoundingClientRect();const p=this.at(e.clientX-r.left,e.clientY-r.top);if(p)location.hash="#/note/"+enc(p.id);});
    cv.addEventListener("wheel",e=>{e.preventDefault();this.spin=false;this.zoom=clamp(this.zoom*(e.deltaY<0?1.12:.89),.35,5);this.invalidate();},{passive:false});
    cv.addEventListener("keydown",e=>{const k=e.key;if(k==="ArrowLeft")this.yaw-=.15;else if(k==="ArrowRight")this.yaw+=.15;else if(k==="ArrowUp")this.pitch=clamp(this.pitch-.15,-1.4,1.4);else if(k==="ArrowDown")this.pitch=clamp(this.pitch+.15,-1.4,1.4);else if(k==="+"||k==="=")this.zoom=clamp(this.zoom*1.15,.35,5);else if(k==="-")this.zoom=clamp(this.zoom/1.15,.35,5);else return;e.preventDefault();this.spin=false;this.invalidate();});
  },
  panel(){
    const el=$("#gpanel");if(!el)return;
    if(!this.sel){el.className="hide";$("#ghint")&&$("#ghint").classList.remove("hide");return;}
    $("#ghint")&&$("#ghint").classList.add("hide");
    const n=S.notes.get(this.sel);if(!n){el.className="hide";return;}
    const adj=(S.adj.get(n.id)||[]).slice().sort((a,b)=>(b.k==="user")-(a.k==="user")||b.s-a.s);
    el.className="card gpanel";
    el.innerHTML=`<div class="mono faint" style="display:flex;align-items:center;gap:.4rem"><span class="dot" data-src="${srcKey(n)}"></span>${SRC[srcKey(n)]||""} · ${ago(touched(n))}<button class="ib" data-act="bclear" aria-label="Close" style="margin-left:auto;width:1.8rem;height:1.8rem">${ic("x")}</button></div><h3>${iconOf(n)}${esc(titleOf(n))}</h3>
    <p class="muted" style="font:.9rem/1.5 var(--read);margin:.3rem 0 .7rem">${esc(plainText(n.body).slice(0,150))}</p>
    <div class="row-btns" style="margin-bottom:.8rem"><a class="btn accent sm" href="#/note/${enc(n.id)}">Open note${ic("arrow")}</a><span class="mono faint">${adj.length} ${adj.length===1?"connection":"connections"}</span></div>
    <ul class="conn">${adj.slice(0,8).map(a=>{const o=S.notes.get(a.o);if(!o)return "";const why=a.k==="user"?"Linked by you.":reasonText(explain(S.ix,S.tagSets,n.id,a.o));
      return `<li><button class="lk" data-act="bsel" data-id="${esc(a.o)}" style="text-decoration:none;color:var(--ink);font:600 .88rem var(--display);text-align:left">${esc(titleOf(o))}</button><span class="why">${esc(why)}</span></li>`;}).join("")}</ul>`;
  }
};
function viewGraph(){
  if(!S.notes.size)return emptyState();
  const chats=[...S.notes.values()].some(n=>n.src==="chat");
  return `<div class="gwrap"><canvas id="bcv" tabindex="0" aria-label="Interactive 3D map of your notes. Drag to turn, scroll to zoom, arrow keys to rotate."></canvas>
  <div class="gctl"><label class="field">${ic("search")}<input id="gq" type="search" placeholder="Highlight notes" value="${esc(S.brain.q)}" aria-label="Highlight notes by title or tag" autocomplete="off"></label>
  ${chats?`<label class="gtog"><input type="checkbox" data-chk="chats" ${S.brain.chats?"checked":""}>Claude chats</label>`:""}
  <label class="gtog"><input type="checkbox" data-chk="glow" ${S.brain.glow?"checked":""}>Glow untouched 6+ months</label>
  <span class="mono faint" id="bcount" style="margin-left:auto"></span></div>
  <div class="glegend"><span><span class="dot"></span>Written</span><span><span class="dot" data-src="daily"></span>Journal</span><span><span class="dot" data-src="keep" style="border-radius:50%"></span>Keep</span><span><span class="dot" data-src="chat"></span>Chat</span><span><span class="dot" data-src="file" style="border-radius:50%;transform:none"></span>File</span><span><b></b>You linked</span><span><b class="d"></b>Found</span></div>
  <div class="ghint" id="ghint">Drag to turn · scroll to zoom<br>Click a note to see its threads · double-click to open</div>
  <div id="gpanel" class="hide"></div></div>`;
}

/* ================= editor: slash commands, [[ links, lists ================= */
const Ed={mode:null,start:0,items:[],idx:0};
function slashItems(){
  return [
    {l:"Heading 1",k:"h1",t:"# "},{l:"Heading 2",k:"h2",t:"## "},{l:"Heading 3",k:"h3",t:"### "},
    {l:"Checklist",k:"todo",t:"- [ ] "},{l:"Bullet list",k:"bullet",t:"- "},{l:"Numbered list",k:"number",t:"1. "},
    {l:"Quote",k:"quote",t:"> "},{l:"Code block",k:"code",t:"```\n",after:"\n```"},{l:"Divider",k:"divider hr",t:"---\n"},
    {l:"Link to a note",k:"link wiki",t:"[["},{l:"Today’s journal",k:"date today journal",t:()=>`[[${dkey(new Date())}]] `},
    ...TEMPLATES.map(tp=>({l:"Template: "+tp.name,k:"template "+tp.k+" "+tp.name.toLowerCase(),tpl:tp}))
  ];
}
function caretXY(ta,pos){
  const cs=getComputedStyle(ta);const d=document.createElement("div");
  ["boxSizing","width","paddingTop","paddingRight","paddingBottom","paddingLeft","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","lineHeight","textTransform","wordSpacing","tabSize","fontVariationSettings"].forEach(p=>d.style[p]=cs[p]);
  Object.assign(d.style,{position:"absolute",visibility:"hidden",whiteSpace:"pre-wrap",overflowWrap:"break-word",top:"0",left:"-9999px"});
  d.textContent=ta.value.slice(0,pos);const s=document.createElement("span");s.textContent=ta.value.slice(pos)||".";d.appendChild(s);document.body.appendChild(d);
  const r=ta.getBoundingClientRect();const lh=parseFloat(cs.lineHeight)||20;const x=r.left+s.offsetLeft-ta.scrollLeft,y=r.top+s.offsetTop-ta.scrollTop;d.remove();return {x,y,lh};
}
function insertText(ta,text,from,to){
  ta.focus();if(from!=null)ta.setSelectionRange(from,to);let ok=false;
  try{ok=document.execCommand("insertText",false,text);}catch(e){}
  if(!ok){ta.setRangeText(text,ta.selectionStart,ta.selectionEnd,"end");ta.dispatchEvent(new Event("input",{bubbles:true}));}
}
function edUpdate(ta){
  const pos=ta.selectionStart;if(pos!==ta.selectionEnd)return edClose();
  const before=ta.value.slice(0,pos);let m;
  if((m=before.match(/\[\[([^\]\[\n|]{0,60})$/))){
    const q=m[1].toLowerCase().trim();Ed.mode="wiki";Ed.start=pos-m[1].length;
    const cur=S.curId;const scored=[];
    for(const n of S.notes.values()){if(n.id===cur)continue;const t=(n.title||"").toLowerCase();if(!t)continue;const i=q?t.indexOf(q):0;if(i<0)continue;scored.push([n,(i===0?0:1)+(n.daily?.5:0),touched(n)]);}
    scored.sort((a,b)=>a[1]-b[1]||b[2]-a[2]);
    Ed.items=scored.slice(0,8).map(([n])=>({l:titleOf(n),sub:n.daily?n.title:"",ins:n.title,n}));
    if(q&&!scored.some(([n])=>(n.title||"").toLowerCase()===q))Ed.items.push({l:`Link to new note “${m[1].trim()}”`,ins:m[1].trim(),create:true});
  }else if((m=before.match(/(^|\s)\/([\w-]{0,18})$/))){
    const q=m[2].toLowerCase();Ed.mode="slash";Ed.start=pos-m[2].length-1;
    Ed.items=slashItems().filter(it=>!q||it.l.toLowerCase().includes(q)||it.k.includes(q));
  }else return edClose();
  if(!Ed.items.length)return edClose();
  Ed.idx=0;edPaint(ta);
}
function edPaint(ta){
  let p=$("#edpop");if(!p){p=document.createElement("div");p.id="edpop";p.className="pop";p.setAttribute("role","listbox");document.body.appendChild(p);
    p.addEventListener("mousedown",e=>{e.preventDefault();const b=e.target.closest("button[data-i]");if(b){Ed.idx=+b.dataset.i;edApply($("#editor"));}});}
  p.innerHTML=`<div class="ph">${Ed.mode==="wiki"?"Link to note":"Insert"}</div>`+Ed.items.map((it,i)=>`<button data-i="${i}" class="${i===Ed.idx?"on":""}" role="option" aria-selected="${i===Ed.idx}">${Ed.mode==="wiki"?(it.create?ic("plus"):`<span class="dot" data-src="${srcKey(it.n)}"></span>`):""}<span>${esc(it.l)}</span>${it.sub?`<span class="k">${esc(it.sub)}</span>`:""}</button>`).join("");
  const {x,y,lh}=caretXY(ta,Ed.start);const pw=Math.min(352,innerWidth-32);
  let top=y+lh+4;const ph=Math.min(288,p.scrollHeight||200);if(top+ph>innerHeight-12)top=Math.max(12,y-ph-6);
  p.style.left=Math.max(16,Math.min(x,innerWidth-pw-16))+"px";p.style.top=top+"px";
  const on=p.querySelector(".on");on&&on.scrollIntoView({block:"nearest"});
}
function edClose(){Ed.mode=null;const p=$("#edpop");if(p)p.remove();}
function edApply(ta){
  const it=Ed.items[Ed.idx];if(!it||!ta)return edClose();const pos=ta.selectionStart;const mode=Ed.mode;edClose();
  if(mode==="wiki"){
    const after=ta.value.slice(pos,pos+2);insertText(ta,it.ins+(after==="]]"?"":"]]"),Ed.start,pos);
    if(after==="]]")ta.setSelectionRange(ta.selectionStart+2,ta.selectionStart+2);
  }else if(it.tpl){
    insertText(ta,fillTpl(it.tpl.body),Ed.start,pos);
    const n=S.notes.get(S.curId);if(n){n.tags=[...new Set([...(n.tags||[]),...it.tpl.tags])];queueSave(n);const tr=$("#tagrow");if(tr)tr.innerHTML=tagRowHtml(n);}
  }else{
    const t=typeof it.t==="function"?it.t():it.t;insertText(ta,t+(it.after||""),Ed.start,pos);
    if(it.after){const c=ta.selectionStart-it.after.length;ta.setSelectionRange(c,c);}
    if(t==="[[")edUpdate(ta);
  }
  autosize(ta);
}
function edKeydown(e,ta){
  if(Ed.mode){
    if(e.key==="ArrowDown"){e.preventDefault();Ed.idx=(Ed.idx+1)%Ed.items.length;edPaint(ta);return true;}
    if(e.key==="ArrowUp"){e.preventDefault();Ed.idx=(Ed.idx-1+Ed.items.length)%Ed.items.length;edPaint(ta);return true;}
    if(e.key==="Enter"||e.key==="Tab"){e.preventDefault();edApply(ta);return true;}
    if(e.key==="Escape"){e.preventDefault();edClose();return true;}
  }
  const mod=e.metaKey||e.ctrlKey;
  if(mod&&(e.key==="b"||e.key==="i")){e.preventDefault();const w=e.key==="b"?"**":"*";const s=ta.selectionStart,en=ta.selectionEnd;const sel=ta.value.slice(s,en);insertText(ta,w+sel+w,s,en);if(!sel)ta.setSelectionRange(s+w.length,s+w.length);else ta.setSelectionRange(s+w.length,en+w.length);return true;}
  if(e.key==="Escape"||(mod&&e.key==="Enter")){e.preventDefault();finishEdit();return true;}
  if(e.key==="Enter"&&!e.shiftKey&&!mod&&ta.selectionStart===ta.selectionEnd){
    const pos=ta.selectionStart;const ls=ta.value.lastIndexOf("\n",pos-1)+1;const line=ta.value.slice(ls,pos);
    const m=line.match(/^(\s*)([-*+]|(\d+)([.)]))\s+(\[[ xX]\]\s+)?/);
    if(m){e.preventDefault();
      if(line.slice(m[0].length).trim()===""){insertText(ta,"",ls,pos);return true;}
      const bullet=m[3]?(+m[3]+1)+m[4]:m[2];insertText(ta,"\n"+m[1]+bullet+" "+(m[5]?"[ ] ":""));autosize(ta);return true;}
  }
  return false;
}
function startEdit(){
  S.edit=true;const n=S.notes.get(S.curId);
  if(S.view==="journal"){$("#body").innerHTML=jBody(n);}else{if(!n)return;$("#body").innerHTML=bodyHtml(n);$("#docfoot").innerHTML=footHtml();}
  const ed=$("#editor");if(ed){autosize(ed);ed.focus();ed.setSelectionRange(ed.value.length,ed.value.length);}
}
function finishEdit(){
  edClose();S.edit=false;const n=S.notes.get(S.curId);
  if(S.view==="journal"){$("#body").innerHTML=jBody(n);return;}
  if(!n)return;$("#body").innerHTML=bodyHtml(n);$("#docfoot").innerHTML=footHtml();renderSide(n.id);
}

/* ================= hover preview ================= */
let pvTimer=0;
function showPreview(a){
  const id=decodeURIComponent((a.getAttribute("href")||"").replace("#/note/",""));const n=S.notes.get(id);if(!n)return;
  let p=$("#preview");if(!p){p=document.createElement("div");p.id="preview";p.className="card preview";document.body.appendChild(p);}
  p.innerHTML=`<div class="mono faint" style="display:flex;gap:.4rem;align-items:center;margin-bottom:.3rem"><span class="dot" data-src="${srcKey(n)}"></span>${SRC[srcKey(n)]||""} · ${ago(touched(n))}</div><h4>${iconOf(n)}${esc(titleOf(n))}</h4><div class="reader">${String(n.body||"").trim()?mdToHtml(String(n.body).slice(0,900),ctx(n.id,true)):'<p class="empty">Empty note.</p>'}</div>`;
  const r=a.getBoundingClientRect();const pw=Math.min(384,innerWidth-32);let top=r.bottom+8;if(top+300>innerHeight)top=Math.max(12,r.top-310);
  p.style.left=Math.max(16,Math.min(r.left,innerWidth-pw-16))+"px";p.style.top=top+"px";
}
function hidePreview(){clearTimeout(pvTimer);const p=$("#preview");if(p)p.remove();}

/* ================= menus (popover) ================= */
function openMenu(anchor,html,onClick){
  closeMenu();const p=document.createElement("div");p.id="menu";p.className="pop";p.innerHTML=html;document.body.appendChild(p);
  const r=anchor.getBoundingClientRect();const pw=p.offsetWidth;let top=r.bottom+6;if(top+p.offsetHeight>innerHeight-12)top=Math.max(12,r.top-p.offsetHeight-6);
  p.style.left=Math.max(16,Math.min(r.right-pw,innerWidth-pw-16))+"px";p.style.top=top+"px";
  p.addEventListener("click",e=>{const b=e.target.closest("button[data-m]");if(b){closeMenu();onClick(b.dataset.m);}});
  setTimeout(()=>{const f=p.querySelector("button");f&&f.focus();},0);
}
function closeMenu(){const m=$("#menu");if(m)m.remove();}

/* ================= command palette ================= */
const Pal={items:[],idx:0,
  open(q){
    const d=$("#palette");
    d.innerHTML=`<div class="sheet"><div class="pal-in">${ic("search")}<input id="palq" placeholder="Search notes or type a command" autocomplete="off" aria-label="Search notes and commands" role="combobox" aria-controls="palres" aria-expanded="true"><kbd>esc</kbd></div><div class="pal-res" id="palres" role="listbox"></div><div class="pal-foot"><span>↑↓ move</span><span>↵ open</span><span># tag</span>${S.sample?"<span>⇧↵ ask your notes</span>":""}</div></div>`;
    if(!d.open)d.showModal();const i=$("#palq");i.value=q||"";this.render();i.focus();
  },
  commands(){
    const cur=S.view==="note"&&S.notes.get(S.curId);const hasSample=[...S.notes.values()].some(n=>n.meta&&n.meta.sample);
    const go=h=>()=>{location.hash=h;};
    const list=[
      {l:"New note",i:"plus",k:"N",run:()=>newNote()},
      ...TEMPLATES.map(t=>({l:"New from template: "+t.name,i:"template",run:()=>newNote(t)})),
      {l:"Open today’s journal",i:"calendar",k:"J",run:go("#/journal")},
      {l:"Go to Today",i:"sun",k:"T",run:go("#/today")},{l:"Go to Notes",i:"notes",run:go("#/notes")},{l:"Go to Board",i:"board",k:"B",run:go("#/board")},
      {l:"Go to Tasks",i:"tasks",run:go("#/tasks")},{l:"Go to Graph",i:"graph",k:"G",run:go("#/graph")},
      {l:"Open a random note",i:"shuffle",k:"R",run:randomNote},
      S.sample?{l:"Ask your notes",i:"ask",run:()=>openAsk("")}:null,
      cur?{l:cur.pinned?"Unpin this note":"Pin this note",i:"pin",run:()=>togglePin()}:null,
      cur?{l:"Focus mode",i:"focus",k:"F",run:()=>toggleFocus()}:null,
      {l:"Import notes",i:"upload",run:openTools},{l:"Back up everything",i:"download",run:exportBackup},
      {l:"Theme: light",i:"sun",run:()=>setTheme("light")},{l:"Theme: dark",i:"moon",run:()=>setTheme("dark")},{l:"Theme: match system",i:"refresh",run:()=>setTheme("system")},
      {l:"Keyboard shortcuts",i:"keyboard",k:"?",run:openKeys},
      hasSample?{l:"Remove sample notes",i:"trash",run:removeSamples}:{l:"Add sample notes",i:"plus",run:addSamples}
    ];
    return list.filter(Boolean);
  },
  render(){
    const q=($("#palq")||{}).value||"";const ql=q.trim().toLowerCase();const items=[];
    if(ql.startsWith("#")){
      const t=ql.slice(1);const tags=allTagCounts().filter(([x])=>x.startsWith(t)).slice(0,10);
      tags.forEach(([x,c])=>items.push({grp:"Tags",l:"#"+x,sub:`${c} notes`,i:"hash",run:()=>{location.hash="#/notes/tag/"+enc(x);}}));
    }else{
      if(ql&&S.sample)items.push({grp:"Ask",ask:true,l:`Ask your notes: “${q.trim()}”`,i:"ask",k:"⇧↵",run:()=>openAsk(q.trim())});
      let notes;
      if(!ql)notes=[...S.notes.values()].sort((a,b)=>touched(b)-touched(a)).slice(0,6);
      else{const ws=ql.split(/\s+/);const sc=[];for(const n of S.notes.values()){const c=lcOf(n);let s=0,ok=true;for(const w of ws){let x=0;if(c.t.startsWith(w))x+=8;else if(c.t.includes(w))x+=5;if(c.g.includes(w))x+=3;if(c.b.includes(w))x+=1;if(!x){ok=false;break;}s+=x;}if(ok)sc.push([n,s]);}
        sc.sort((a,b)=>b[1]-a[1]||touched(b[0])-touched(a[0]));notes=sc.slice(0,8).map(x=>x[0]);}
      notes.forEach(n=>items.push({grp:ql?"Notes":"Recent",n,l:titleOf(n),sub:plainText(n.body).slice(0,90),k:ago(touched(n)),run:()=>{location.hash="#/note/"+enc(n.id);}}));
      const cmds=this.commands().filter(c=>!ql||c.l.toLowerCase().includes(ql)).slice(0,ql?6:7);
      cmds.forEach(c=>items.push(Object.assign({grp:"Commands"},c)));
      if(ql&&!S.titleIdx.has(ql))items.push({grp:"Commands",l:`Create note “${q.trim()}”`,i:"plus",run:()=>newNote(null,q.trim())});
    }
    this.items=items;this.idx=Math.min(this.idx,Math.max(0,items.length-1));if(!ql)this.idx=0;
    let h="",g="";
    items.forEach((it,i)=>{if(it.grp!==g){g=it.grp;h+=`<div class="ph">${esc(g)}</div>`;}
      h+=`<button class="pal-it${it.ask?" ask":""}${i===this.idx?" on":""}" data-pi="${i}" role="option" aria-selected="${i===this.idx}">${it.n?`<span class="dot" data-src="${srcKey(it.n)}"></span>`:ic(it.i||"arrow")}<span class="tx"><b>${it.n&&it.n.icon?esc(it.n.icon)+" ":""}${esc(it.l)}</b>${it.sub?`<small>${esc(it.sub)}</small>`:""}</span>${it.k?`<span class="k">${esc(it.k)}</span>`:""}</button>`;});
    $("#palres").innerHTML=h||`<p class="muted" style="padding:1rem">No matches. Press Enter to create a note with this title.</p>`;
    const on=$("#palres .on");on&&on.scrollIntoView({block:"nearest"});
  },
  run(i){const it=this.items[i];$("#palette").close();if(it)it.run();},
  key(e){
    if(e.key==="ArrowDown"){e.preventDefault();this.idx=(this.idx+1)%Math.max(1,this.items.length);this.render();}
    else if(e.key==="ArrowUp"){e.preventDefault();this.idx=(this.idx-1+this.items.length)%Math.max(1,this.items.length);this.render();}
    else if(e.key==="Enter"){e.preventDefault();const q=$("#palq").value.trim();
      if(e.shiftKey&&S.sample&&q){$("#palette").close();openAsk(q);return;}
      if(this.items.length)this.run(this.idx);else if(q){$("#palette").close();newNote(null,q);}}
  }
};

/* ================= ask your notes (Claude) ================= */
let askCtl=null;
function openAsk(q){
  const d=$("#dlg");
  d.innerHTML=`<div class="sheet" style="width:min(46rem,calc(100vw - 2rem))"><button class="ib x" data-act="closedlg" aria-label="Close">${ic("x")}</button><h2>Ask your notes</h2>
  <p>Claude reads the notes that best match your question and answers with links back to them. Only those excerpts are sent with the question.</p>
  <form class="ask-q" data-form="ask"><label class="field">${ic("ask")}<input id="askq" placeholder="What have I written about…" autocomplete="off" aria-label="Your question"></label><button class="btn accent" type="submit" id="askgo">Ask</button></form><div id="askout"></div></div>`;
  if(!d.open)d.showModal();const i=$("#askq");i.value=q||"";i.focus();if(q)runAsk(q);
}
const ASK_ERR={not_granted:"Asking Claude was not allowed in this view.",rate_limited:"Too many questions at once. Wait a moment, then ask again.",prompt_too_large:"Those notes are too long to send at once. Ask something more specific.",sampling_disabled:"Asking Claude is turned off for this account.",session_expired:"Your session expired. Reload the page and ask again."};
async function runAsk(q){
  const out=$("#askout");if(!out||!S.sample)return;
  const notes=retrieve(q,8);
  if(!notes.length){out.innerHTML=`<p class="muted">None of your notes mention those words. Try different words, or capture a note about it first.</p>`;return;}
  let budget=18000;const parts=[];
  for(const n of notes){const t=String(n.body||"").slice(0,Math.min(2600,budget));budget-=t.length;parts.push(`=== [[${n.title||titleOf(n)}]] (${SRC[srcKey(n)]}, edited ${fmtDate(n.updated)})\n${t}`);if(budget<400)break;}
  const prompt=`You are helping someone think with their personal notes. Answer the question using only the notes below. Be concise: a short paragraph or a few bullets, in plain Markdown. When you use a note, cite it inline with its exact title in double square brackets, like [[Title]]. If the notes do not answer the question, say so in one sentence and suggest what they could write down.\n\nQuestion: ${q}\n\nNotes:\n${parts.join("\n\n")}`;
  askCtl&&askCtl.abort();askCtl=new AbortController();
  out.innerHTML=`<div class="answer" id="ans"><span class="thinking"><i></i><i></i><i></i> Reading ${notes.length} notes</span></div><div class="row-btns" style="margin-top:1rem" id="askacts"><button class="btn ghost sm" data-act="askstop">${ic("stop")}Stop</button></div>`;
  const srcHtml=`<div class="srcs"><span class="eyebrow" style="align-self:center">Read</span>${notes.map(n=>`<a class="chip" href="#/note/${enc(n.id)}" data-act="closedlg"><span class="dot" data-src="${srcKey(n)}"></span>${esc(titleOf(n).slice(0,40))}</a>`).join("")}</div>`;
  try{
    const res=await S.sample(prompt,{signal:askCtl.signal,onText:({text})=>{const a=$("#ans");if(a)a.innerHTML=`<div class="reader">${mdToHtml(text,ctx())}</div>`;}});
    const a=$("#ans");if(a)a.innerHTML=`<div class="reader">${mdToHtml(res.text,ctx())}</div>`;
    const acts=$("#askacts");if(acts){acts.innerHTML=`<button class="btn soft sm" data-act="asksave">${ic("plus")}Save as note</button>`;acts.insertAdjacentHTML("afterend",srcHtml);}
    S.lastAsk={q,a:res.text,notes:notes.map(n=>n.title).filter(Boolean)};
  }catch(e){
    const a=$("#ans");const acts=$("#askacts");if(acts)acts.innerHTML="";
    if(a){if(e&&e.text)a.innerHTML=`<div class="reader">${mdToHtml(e.text,ctx())}</div>`;else a.innerHTML="";
      if(!e||e.code!=="cancelled")a.insertAdjacentHTML("beforeend",`<p class="muted">${esc(ASK_ERR[e&&e.code]||"Claude could not answer just now. Try again in a moment.")}</p>`);}
  }
}

/* ================= dialogs ================= */
function openTools(){
  const d=$("#dlg");const hasSample=[...S.notes.values()].some(n=>n.meta&&n.meta.sample);const th=LS.get("theme","system");
  d.innerHTML=`<div class="sheet"><button class="ib x" data-act="closedlg" aria-label="Close">${ic("x")}</button><h2>Import and backup</h2>
  <p>Everything is read inside this browser and stays here.</p>
  <div class="drop" id="drop">${ic("upload")}<div><b>Drop files here</b><br><span class="muted" style="font-size:.88rem">Google Keep or Claude export (zip or json), Markdown files, or a Commonplace backup</span></div>
  <div class="row-btns" style="justify-content:center"><label class="btn accent sm" for="f-any">Choose files</label><input id="f-any" type="file" multiple accept=".zip,.json,.md,.markdown,.txt" hidden><label class="btn ghost sm" for="f-dir">Choose a folder</label><input id="f-dir" type="file" webkitdirectory multiple hidden></div></div>
  <details><summary>How do I get my exports?</summary>
  <p><strong>Google Keep.</strong> Open takeout.google.com, press Deselect all, tick Keep, and create the export. Download the zip and choose it here.</p>
  <p><strong>Claude.</strong> In Claude, open Settings, then Privacy, then Export data. The zip arrives by email. Choose it here.</p>
  <p><strong>Obsidian, Bear, Logseq.</strong> Choose your vault folder or exported Markdown files. Tags in front matter and #hashtags come along, and [[links]] keep working.</p>
  <p>Notes already here are skipped, so you can import again later.</p></details>
  <h3>Back up</h3><p>Your notes live in this browser only. Save a copy now and then.</p>
  <div class="row-btns"><button class="btn ghost sm" data-act="expjson">${ic("download")}Full backup (JSON)</button><button class="btn ghost sm" data-act="expmd">${ic("download")}Every note as Markdown (zip)</button></div>
  <h3>Appearance</h3><div class="seg" role="group" aria-label="Theme">${[["system","System"],["light","Light"],["dark","Dark"]].map(([k,l])=>`<button data-act="settheme" data-v="${k}" class="${th===k?"on":""}">${l}</button>`).join("")}</div>
  <h3>Housekeeping</h3><div class="row-btns"><button class="lk" data-act="rebuild">Rebuild connections</button>${hasSample?`<button class="lk" data-act="rmsample">Remove sample notes</button>`:`<button class="lk" data-act="sample">Add sample notes</button>`}<button class="lk danger" data-act="clearall">Delete everything</button></div></div>`;
  if(!d.open)d.showModal();
  const dz=$("#drop");["dragenter","dragover"].forEach(t=>dz.addEventListener(t,e=>{e.preventDefault();dz.classList.add("over");}));
  ["dragleave","drop"].forEach(t=>dz.addEventListener(t,()=>dz.classList.remove("over")));
}
function openKeys(){
  const d=$("#dlg");const k=(a,b)=>`<span>${a.map(x=>`<kbd>${x}</kbd>`).join("")}</span><span>${b}</span>`;
  d.innerHTML=`<div class="sheet" style="width:min(30rem,calc(100vw - 2rem))"><button class="ib x" data-act="closedlg" aria-label="Close">${ic("x")}</button><h2>Keyboard shortcuts</h2><p>Single keys work when you are not typing.</p>
  <div class="keys">${k([MOD,"K"],"Search and commands")+k(["/"],"Search and commands")+k(["N"],"New note")+k(["J"],"Today’s journal")+k(["T"],"Today")+k(["B"],"Board")+k(["G"],"Graph")+k(["R"],"Random note")+k(["E"],"Edit this note")+k(["F"],"Focus mode")+k(["Esc"],"Stop editing, leave focus")+k([MOD,"B"],"Bold")+k([MOD,"I"],"Italic")+k(["/"],"Blocks menu, inside a note")+k(["[["],"Link to a note")+k(["?"],"This list")}</div></div>`;
  if(!d.open)d.showModal();
}

/* ================= actions ================= */
async function newNote(tpl,title){
  const n=await createNote({title:title!=null?title:(tpl?tpl.title:""),body:tpl?fillTpl(tpl.body):"",tags:tpl?[...tpl.tags]:[],stage:"capture"});
  S.edit=true;S.curId=null;location.hash="#/note/"+enc(n.id);
}
function randomNote(){const arr=[...S.notes.values()].filter(n=>!n.daily&&String(n.body||"").trim());if(!arr.length)return;const n=arr[Math.floor(Math.random()*arr.length)];location.hash="#/note/"+enc(n.id);}
function togglePin(){const n=S.notes.get(S.curId);if(!n)return;n.pinned=!n.pinned;queueSave(n);renderRail();const b=$('[data-act="pin"]');if(b){b.classList.toggle("on",n.pinned);b.setAttribute("aria-pressed",n.pinned);}toast(n.pinned?"Pinned to the sidebar.":"Unpinned.");}
function toggleFocus(){document.body.classList.toggle("focus");if(S.view==="note")route();}
function setTheme(t){LS.set("theme",t);applyTheme(t);toast(t==="system"?"Theme matches your system.":`Theme: ${t}.`);if(S.view==="graph")Brain.invalidate();if(S.view==="note")LG.paint();}
async function addSamples(){await addNotes(sampleNotes());await indexAll();toast("Sample notes added. Remove them any time from Import and backup.");route();}
async function removeSamples(){const ids=[...S.notes.values()].filter(n=>n.meta&&n.meta.sample).map(n=>n.id);ids.forEach(i=>S.notes.delete(i));await DB.del(ids);await indexAll();if($("#dlg").open)$("#dlg").close();toast("Sample notes removed.");location.hash="#/today";route();}
async function deleteNote(id){
  const n=S.notes.get(id);if(!n)return;S.notes.delete(id);await DB.del([id]);S.curId=null;S.edit=false;
  location.hash=n.daily?"#/journal":"#/notes";
  toast(`Deleted “${titleOf(n).slice(0,40)}”.`,{action:"Undo",fn:async()=>{await addNotes([n]);await indexAll();location.hash="#/note/"+enc(n.id);}});
  await indexAll();route();
}
function linkPair(aId,bId){
  const a=S.notes.get(aId),b=S.notes.get(bId);if(!a||!b)return false;
  if(!b.title){toast("Give the second note a title first.");return false;}
  const body=(a.body||"").replace(/\s+$/,"");const m=body.match(/(^|\n)Related: .*$/);
  a.body=m?body+`, [[${b.title}]]`:body+(body?"\n\n":"")+`Related: [[${b.title}]]`;a.updated=Date.now();queueSave(a);
  rebuildTitles();rebuildUserEdges();rebuildAdj();toast(`Linked “${titleOf(a).slice(0,30)}” to “${titleOf(b).slice(0,30)}”.`);return true;
}

/* ================= routing ================= */
let curRoute="";
function route(){
  const h=decodeURIComponent((location.hash||"#/today").slice(1));const parts=h.split("/").filter(Boolean);const name=parts[0]||"today";
  Brain.stop();hidePreview();edClose();closeMenu();
  if(!S.ready)return;
  if(name==="new"){const title=parts.slice(1).join("/");createNote({title,stage:"capture"}).then(n=>{S.edit=true;location.replace("#/note/"+enc(n.id));});return;}
  if(name!=="note"&&document.body.classList.contains("focus"))document.body.classList.remove("focus");
  const prevView=S.view;
  if(name==="notes"&&parts[1]==="tag"){S.filter.tag=parts.slice(2).join("/").toLowerCase();S.filter.src="all";S.filter.q="";S.filter.shown=150;}
  else if((name==="notes"||name==="board")&&!["notes","board","note"].includes(prevView))S.filter.tag="";
  const m=$("#main");S.view=name;
  if(name==="note"){
    const id=parts.slice(1).join("/");
    if(S.curId!==id||prevView!=="note"){if(S.curId!==id)S.edit=S.edit&&S.curId===null;S.hl=S.keepHl||"";S.keepHl="";}else if(S.keepHl){S.hl=S.keepHl;S.keepHl="";}
    S.curId=id;const n=S.notes.get(id);if(n){n.opened=Date.now();queueSave(n);}
    if(n&&!String(n.body||"").trim()&&!n.daily)S.edit=true;
    setNav(n&&n.daily?"journal":"notes");m.innerHTML=viewNote(id);
    const t=$("#title");if(t){autosize(t);if(S.edit&&!t.value)t.focus();}
    renderSide(id);const ed=$("#editor");if(ed){autosize(ed);if(!t||t.value)ed.focus();}
    if(S.hl){const mk=$("#body mark.hl");mk&&setTimeout(()=>mk.scrollIntoView({block:"center",behavior:"smooth"}),60);}
  }else if(name==="notes"||name==="board"){S.view=name;setNav(name);S.edit=false;m.innerHTML=viewNotes(name==="board");renderResults();}
  else if(name==="graph"){setNav("graph");m.innerHTML=viewGraph();Brain.init();}
  else if(name==="tasks"){setNav("tasks");m.innerHTML=viewTasks();}
  else if(name==="journal"){
    const k=parts[1]&&/^\d{4}-\d{2}-\d{2}$/.test(parts[1])?parts[1]:dkey(new Date());
    if(S.jdate!==k){S.edit=false;const d=parseKey(k);S.cal={y:d.getFullYear(),m:d.getMonth()};}
    S.jdate=k;setNav("journal");m.innerHTML=viewJournal();const ed=$("#editor");if(ed)autosize(ed);
  }
  else{S.view="today";setNav("today");m.innerHTML=viewToday();autosize($("#cap"));requestAnimationFrame(drawSynapse);document.fonts&&document.fonts.ready.then(drawSynapse);}
  renderRail();
  if(curRoute!==h)window.scrollTo(0,0);curRoute=h;paintStatus();
}

/* ================= events ================= */
document.addEventListener("click",async e=>{
  if(!e.target.closest("#menu")&&!e.target.closest('[data-act="notemenu"],[data-act="icon"]'))closeMenu();
  const dlg=e.target.closest("dialog");if(dlg&&e.target===dlg){dlg.close();return;}
  const pi=e.target.closest("[data-pi]");if(pi){Pal.run(+pi.dataset.pi);return;}
  const el=e.target.closest("[data-act]");if(!el)return;const act=el.dataset.act;
  switch(act){
    case "palette":Pal.open("");break;
    case "ask":openAsk("");break;
    case "new":newNote();break;
    case "peek":S.keepHl=el.dataset.hl||"";break;
    case "open":if(!e.target.closest("button"))location.hash="#/note/"+enc(el.dataset.id);break;
    case "tick":{e.preventDefault();e.stopPropagation();const nid=el.dataset.nid||S.curId;tickTask(nid,el.dataset.ln);const on=!el.classList.contains("on");el.classList.toggle("on",on);el.setAttribute("aria-pressed",on);const row=el.closest(".task,li.chk");if(row)row.classList.toggle("done",on);paintStatus();break;}
    case "startedit":{if(e.target.closest("a,button,.cb")||String(getSelection())!=="")break;startEdit();break;}
    case "edit":S.edit?finishEdit():startEdit();break;
    case "why":{S.hl=el.dataset.hl;const n=S.notes.get(S.curId);if(S.edit)finishEdit();$("#body").innerHTML=bodyHtml(n);$("#docfoot").innerHTML=footHtml();
      const mk=$("#body mark.hl");if(mk)mk.scrollIntoView({block:"center",behavior:"smooth"});else toast("Those words are in the other note, not this one.");break;}
    case "clearhl":{S.hl="";const n=S.notes.get(S.curId);$("#body").innerHTML=bodyHtml(n);$("#docfoot").innerHTML=footHtml();break;}
    case "sorted":{const n=S.notes.get(el.dataset.id||S.curId);if(!n)break;n.inbox=false;queueSave(n);toast("Marked as sorted.");if(S.view==="today")route();else el.remove();break;}
    case "rmtag":{const n=S.notes.get(S.curId);n.tags=(n.tags||[]).filter(t=>String(t).toLowerCase()!==el.dataset.t);n.updated=Date.now();queueSave(n);queueReindex(n.id);$("#tagrow").innerHTML=tagRowHtml(n);break;}
    case "stage":{setStage(S.curId,el.dataset.v);$$(".stage button").forEach(b=>{const on=b.dataset.v===el.dataset.v;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on);});break;}
    case "stagemv":{e.stopPropagation();setStage(el.dataset.id,el.dataset.v);renderResults();break;}
    case "pin":togglePin();break;
    case "focus":toggleFocus();break;
    case "icon":{openMenu(el,`<div class="ph">Icon</div><div class="emoji-grid">${EMOJI.map(x=>`<button data-m="${x}" aria-label="${x}">${x}</button>`).join("")}</div>${S.notes.get(S.curId).icon?`<button data-m="" style="margin-top:.3rem">${ic("x")}Remove icon</button>`:""}`,v=>{const n=S.notes.get(S.curId);n.icon=v;queueSave(n);route();});break;}
    case "notemenu":{const n=S.notes.get(S.curId);openMenu(el,`<button data-m="copy">${ic("copy")}Copy as Markdown</button><button data-m="export">${ic("download")}Export as .md file</button><button data-m="random">${ic("shuffle")}Open a random note</button><button data-m="delete" style="color:var(--danger)">${ic("trash")}Delete note</button>`,async m=>{
      if(m==="copy"){try{await navigator.clipboard.writeText(noteToMd(n));toast("Copied as Markdown.");}catch(_){toast("Copying is blocked here. Use Export as .md file instead.");}}
      else if(m==="export"){if(await saveFile((slug(titleOf(n)).slice(0,60)||"note")+".md",noteToMd(n)))toast("Exported.");}
      else if(m==="random")randomNote();else if(m==="delete")deleteNote(n.id);});break;}
    case "goto":{e.preventDefault();if(S.edit)finishEdit();const t=$("#h-"+el.dataset.h);t&&t.scrollIntoView({block:"start",behavior:"smooth"});break;}
    case "linkpair":{if(linkPair(el.dataset.a,el.dataset.b)){if(S.view==="note"){const n=S.notes.get(S.curId);if(!S.edit)$("#body").innerHTML=bodyHtml(n);renderSide(S.curId);}else route();}break;}
    case "dismisspair":{S.dismissed.add(edgeKey(el.dataset.a,el.dataset.b));DB.setMeta("dismissed",[...S.dismissed]);toast("Got it. That pair will not come up again.");route();break;}
    case "nextpair":S.insIdx++;route();break;
    case "linkmention":{const o=S.notes.get(el.dataset.id),n=S.notes.get(S.curId);if(!o||!n)break;
      const re=new RegExp("(?<![\\p{L}\\d\\[])"+reEsc(n.title.trim())+"(?![\\p{L}\\d])","iu");o.body=String(o.body).replace(re,m=>m.toLowerCase()===n.title.trim().toLowerCase()&&m!==n.title.trim()?`[[${n.title.trim()}|${m}]]`:`[[${m}]]`);
      o.updated=Date.now();queueSave(o);rebuildTitles();rebuildUserEdges();rebuildAdj();renderSide(n.id);toast(`Linked from “${titleOf(o).slice(0,40)}”.`);break;}
    case "src":S.filter.src=el.dataset.v;S.filter.shown=150;route();break;
    case "mode":{const v=el.dataset.v;if(v==="board"){location.hash="#/board";}else{S.filter.mode=v;LS.set("mode",v);if(S.view==="board")location.hash="#/notes";else route();}break;}
    case "more":S.filter.shown+=150;renderResults();break;
    case "tshow":S.tasks.show=el.dataset.v;route();break;
    case "jday":location.hash="#/journal/"+el.dataset.k;break;
    case "calnav":{let {y,m}=S.cal;m+=+el.dataset.d;if(m<0){m=11;y--;}if(m>11){m=0;y++;}S.cal={y,m};const c=$(".cal");if(c)c.outerHTML=calHtml(S.jdate);break;}
    case "cap-journal":{const t=$("#cap");if(!t.value.trim()){t.focus();break;}capture(t.value,true).then(()=>{toast("Added to today’s journal.");route();});break;}
    case "tools":openTools();break;
    case "keys":openKeys();break;
    case "theme":{const order=["system","dark","light"];const cur=LS.get("theme","system");setTheme(order[(order.indexOf(cur)+1)%3]);break;}
    case "settheme":{setTheme(el.dataset.v);$$('[data-act="settheme"]').forEach(b=>b.classList.toggle("on",b===el));break;}
    case "closedlg":{askCtl&&askCtl.abort();const d=el.closest("dialog");if(d)d.close();break;}
    case "askstop":askCtl&&askCtl.abort();break;
    case "asksave":{const a=S.lastAsk;if(!a)break;$("#dlg").close();const n=await createNote({title:a.q.slice(0,80),body:a.a+"\n\n---\nAnswered from: "+a.notes.map(t=>`[[${t}]]`).join(", "),tags:["asked"]});location.hash="#/note/"+enc(n.id);break;}
    case "sample":{if($("#dlg").open)$("#dlg").close();addSamples();break;}
    case "rmsample":{if(await confirmBox("Remove sample notes?","Your own notes stay. Only the sample notes go.","Remove samples"))removeSamples();break;}
    case "clearall":{$("#dlg").close();if(!await confirmBox("Delete every note?","This removes every note from this browser and cannot be undone. Make a backup first.","Delete everything",true))break;await DB.clear();S.notes=new Map();await indexAll();location.hash="#/today";route();break;}
    case "rebuild":{$("#dlg").close();await indexAll();toast("Connections rebuilt.");route();break;}
    case "expmd":exportMarkdown();break;
    case "expjson":exportBackup();break;
    case "bsel":Brain.select(el.dataset.id);break;
    case "bclear":Brain.select(null);break;
  }
});
document.addEventListener("submit",e=>{
  const f=e.target.dataset.form;if(!f)return;e.preventDefault();
  if(f==="capture"){const t=$("#cap");const v=t.value;if(!v.trim())return;capture(v).then(()=>{toast("Saved to your inbox.");route();});}
  else if(f==="task"){const i=$("#newtask");const v=i.value.trim();if(!v)return;const n=ensureDaily(dkey(new Date()));n.body=(n.body||"").replace(/\s+$/,"")+((n.body||"").trim()?"\n":"")+"- [ ] "+v;n.updated=Date.now();queueSave(n);reindexNote(n.id);toast("Added to today’s journal.");route();setTimeout(()=>{const x=$("#newtask");x&&x.focus();},30);}
  else if(f==="ask"){const q=$("#askq").value.trim();if(q)runAsk(q);}
});
document.addEventListener("keydown",e=>{
  const t=e.target;const mod=e.metaKey||e.ctrlKey;
  if(t.id==="editor"&&edKeydown(e,t))return;
  if(t.id==="palq"){Pal.key(e);return;}
  if($("#menu")&&e.key==="Escape"){closeMenu();return;}
  if(t.id==="cap"&&e.key==="Enter"&&!e.shiftKey){e.preventDefault();if(mod)$('[data-act="cap-journal"]').click();else $('[data-form="capture"]').requestSubmit();return;}
  if(t.id==="title"&&e.key==="Enter"){e.preventDefault();startEdit();return;}
  if(t.classList&&t.classList.contains("bcard")&&e.key==="Enter"){location.hash="#/note/"+enc(t.dataset.id);return;}
  if(t.id==="addtag"&&(e.key==="Enter"||e.key===",")){e.preventDefault();const v=slug(t.value.replace(/^#/,""));if(!v)return;const n=S.notes.get(S.curId);n.tags=[...new Set([...(n.tags||[]),v])];n.updated=Date.now();queueSave(n);queueReindex(n.id);$("#tagrow").innerHTML=tagRowHtml(n);const ni=$("#addtag");ni&&ni.focus();return;}
  if(mod&&e.key.toLowerCase()==="k"){e.preventDefault();if($("#palette").open)$("#palette").close();else Pal.open("");return;}
  if(document.querySelector("dialog[open]")||isTyping(t)||mod||e.altKey)return;
  const k=e.key;
  if(k==="/"){e.preventDefault();Pal.open("");}
  else if(k==="n"){e.preventDefault();newNote();}
  else if(k==="j")location.hash="#/journal";
  else if(k==="t")location.hash="#/today";
  else if(k==="g")location.hash="#/graph";
  else if(k==="b")location.hash="#/board";
  else if(k==="r")randomNote();
  else if(k==="?")openKeys();
  else if(k==="e"&&(S.view==="note"||S.view==="journal")&&!S.edit){e.preventDefault();startEdit();}
  else if(k==="f"&&S.view==="note")toggleFocus();
  else if(k==="Escape"&&document.body.classList.contains("focus"))toggleFocus();
});
let qTimer=0;
document.addEventListener("input",e=>{
  const t=e.target;
  if(t.id==="q"){clearTimeout(qTimer);qTimer=setTimeout(()=>{S.filter.q=t.value;S.filter.shown=150;renderResults();},140);}
  else if(t.id==="palq"){Pal.idx=0;Pal.render();}
  else if(t.id==="gq"){S.brain.q=t.value;Brain.search(t.value);}
  else if(t.id==="cap")autosize(t);
  else if(t.id==="title"){autosize(t);const n=S.notes.get(S.curId);if(!n)return;n.title=t.value.replace(/\n/g," ");n.updated=Date.now();queueSave(n);queueReindex(n.id);const ct=$(".crumbs .ct-t");if(ct)ct.textContent=titleOf(n);}
  else if(t.id==="editor"){
    autosize(t);let n=S.notes.get(S.curId);
    if(!n&&S.view==="journal"){n=ensureDaily(S.jdate||dkey(new Date()));S.curId=n.id;}
    if(!n)return;n.body=t.value;n.updated=Date.now();queueSave(n);queueReindex(n.id);edUpdate(t);
  }
});
document.addEventListener("selectionchange",()=>{const a=document.activeElement;if(Ed.mode&&a&&a.id==="editor"){const p=a.selectionStart;if(p<Ed.start)edClose();}});
document.addEventListener("focusout",e=>{if(e.target.id==="editor")setTimeout(()=>{if(document.activeElement&&document.activeElement.id!=="editor")edClose();},120);});
document.addEventListener("change",e=>{
  const t=e.target;
  if(t.dataset.sel==="tag"){S.filter.tag=t.value;S.filter.shown=150;renderResults();}
  else if(t.dataset.sel==="sort"){S.filter.sort=t.value;renderResults();}
  else if(t.dataset.chk==="chats"){S.brain.chats=t.checked;route();}
  else if(t.dataset.chk==="glow"){S.brain.glow=t.checked;Brain.invalidate();}
  else if(t.id==="f-any"||t.id==="f-dir"){const fl=[...t.files];t.value="";$("#dlg").close();importFiles(fl);}
});
document.addEventListener("mouseover",e=>{
  const a=e.target.closest&&e.target.closest('a.wl[href^="#/note/"],.conn a.ct');if(!a||!matchMedia("(hover: hover)").matches)return;
  clearTimeout(pvTimer);pvTimer=setTimeout(()=>showPreview(a),380);
});
document.addEventListener("mouseout",e=>{const a=e.target.closest&&e.target.closest('a.wl,.conn a.ct');if(a&&!a.contains(e.relatedTarget))hidePreview();});
/* board drag and drop */
document.addEventListener("dragstart",e=>{const c=e.target.closest&&e.target.closest(".bcard");if(!c)return;c.classList.add("dragging");e.dataTransfer.setData("text/x-note",c.dataset.id);e.dataTransfer.effectAllowed="move";});
document.addEventListener("dragend",e=>{const c=e.target.closest&&e.target.closest(".bcard");if(c)c.classList.remove("dragging");$$(".col.over").forEach(x=>x.classList.remove("over"));});
document.addEventListener("dragover",e=>{
  const col=e.target.closest&&e.target.closest(".col");
  if(col&&[...e.dataTransfer.types].includes("text/x-note")){e.preventDefault();$$(".col.over").forEach(x=>x!==col&&x.classList.remove("over"));col.classList.add("over");return;}
  if(e.dataTransfer&&[...e.dataTransfer.types].includes("Files"))e.preventDefault();
});
document.addEventListener("drop",e=>{
  const col=e.target.closest&&e.target.closest(".col");const id=e.dataTransfer.getData("text/x-note");
  if(col&&id){e.preventDefault();setStage(id,col.dataset.stage);renderResults();return;}
  if(e.dataTransfer&&e.dataTransfer.files.length){e.preventDefault();if($("#dlg").open)$("#dlg").close();importFiles(e.dataTransfer.files);}
});
window.addEventListener("hashchange",route);
window.addEventListener("resize",()=>{drawSynapse();if(S.view==="note")LG.paint();});
matchMedia("(prefers-color-scheme: dark)").addEventListener&&matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{if(S.view==="graph")Brain.invalidate();if(S.view==="note")LG.paint();});

/* ================= start ================= */
(async function start(){
  applyTheme(LS.get("theme","system"));renderShell();
  $("#main").innerHTML=`<p class="mono faint" style="padding:2rem 0">Opening your notes…</p>`;
  const ok=await DB.open();S.savedLocal=ok;
  try{
    const arr=await DB.all();arr.forEach(n=>S.notes.set(n.id,n));
    const dm=await DB.getMeta("dismissed");if(Array.isArray(dm))S.dismissed=new Set(dm);
    if(!arr.length&&!(await DB.getMeta("seeded"))){await DB.setMeta("seeded",1);await addNotes(sampleNotes());}
  }catch(e){}
  rebuildTitles();S.ready=true;route();
  if(S.notes.size)await indexAll();else{S.progress=null;S.ix={ids:[],pos:new Map(),vec:[],idf:new Map(),post:new Map(),N:0};}
  paintStatus();if(S.view!=="note"||!S.edit)route();
  try{if(window.claude&&claude.use){const s=await claude.use("sample");if(s){S.sample=s;$("#askBtn").classList.remove("hide");}}}catch(e){}
})();
