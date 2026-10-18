"use strict";
/* ================= text + connection engine (pure) ================= */
const STOP=new Set(("the and for are but not you all any can had her was one our out day get has him his how its may new now old see two way who did let put say she too use that with have this will your from they know want been much some time very when come here just like long make many over such take than them well were what also back into more only other then these would about after again being could every first found great little might never place right still their there thing think those three under where which while yeah really maybe actually something anything everything because should need needs using used uses makes made going gone doing done does don didn doesn isn wasn won aren couldn shouldn wouldn ive youre thats theres lets amp quot nbsp claude human assistant sure okay thanks thank please yes").split(" "));
function stem(w){
  if(w.length>4&&w.endsWith("ies"))return w.slice(0,-3)+"y";
  if(w.length>4&&/(oes|xes|ches|shes|sses)$/.test(w))return w.slice(0,-2);
  if(w.length>3&&w.endsWith("s")&&!/(ss|us|is)$/.test(w))return w.slice(0,-1);
  return w;
}
function tokenize(text){
  text=String(text||"").slice(0,24000).toLowerCase().replace(/https?:\/\/\S+/g," ").replace(/```[\s\S]*?```/g," ");
  const out=[];const re=/\p{L}[\p{L}\d]{2,23}/gu;let m;
  while((m=re.exec(text))){let w=m[0];if(STOP.has(w))continue;w=stem(w);if(w.length<3||STOP.has(w))continue;out.push(w);}
  return out;
}
function reEsc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");}
function hlRegexFor(st){if(st.endsWith("y")&&st.length>3)return reEsc(st.slice(0,-1))+"(?:y|ies)";return reEsc(st)+"(?:s|es)?";}
function hlSrc(terms){return (terms||[]).map(hlRegexFor).join("|");}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function unesc(s){return String(s).replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");}
function inlineMd(s,ctx){
  ctx=ctx||{};
  s=esc(s);
  s=s.replace(/`([^`]+)`/g,"<code>$1</code>");
  s=s.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");
  s=s.replace(/(^|[^*])\*([^*\n]+)\*/g,"$1<em>$2</em>");
  s=s.replace(/~~([^~]+)~~/g,"<s>$1</s>");
  s=s.replace(/\[\[([^\]\n]+)\]\]/g,(m,t)=>{
    const parts=t.split("|");const title=unesc(parts[0]).trim();let label=(parts[1]||parts[0]).trim();
    const id=ctx.resolve?ctx.resolve(title):null;
    if(id&&ctx.label)label=esc(ctx.label(id,unesc(label)));
    if(ctx.static)return `<span class="wl">${label}</span>`;
    return id?`<a class="wl" href="#/note/${encodeURIComponent(id)}">${label}</a>`
             :`<a class="wl missing" href="#/new/${encodeURIComponent(title)}" title="No note with this title yet. Open it to create one.">${label}</a>`;
  });
  if(!ctx.static)s=s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  s=s.replace(/(^|[\s(])#([\p{L}][\p{L}\d_-]*)/gu,(m,p,t)=>ctx.static?`${p}<span class="tag">#${t}</span>`:`${p}<a class="tg tag" href="#/notes/tag/${encodeURIComponent(t.toLowerCase())}">#${t}</a>`);
  return s;
}
const LI=/^\s*([-*+]|\d+[.)])\s+/;
function mdToHtml(src,ctx){
  ctx=ctx||{};
  const lines=String(src||"").replace(/\r\n?/g,"\n").split("\n");const out=[];let i=0,hn=0;
  while(i<lines.length){
    const l=lines[i];let m;
    if(/^```/.test(l)){const buf=[];i++;while(i<lines.length&&!/^```/.test(lines[i])){buf.push(lines[i]);i++;}i++;out.push("<pre><code>"+esc(buf.join("\n"))+"</code></pre>");continue;}
    if((m=l.match(/^(#{1,6})\s+(.*)$/))){const lv=m[1].length;out.push(`<h${lv} id="h-${hn++}">${inlineMd(m[2],ctx)}</h${lv}>`);i++;continue;}
    if(/^\s*([-*_])\1\1+\s*$/.test(l)){out.push("<hr>");i++;continue;}
    if(/^>\s?/.test(l)){const buf=[];while(i<lines.length&&/^>\s?/.test(lines[i])){buf.push(lines[i].replace(/^>\s?/,""));i++;}out.push("<blockquote>"+inlineMd(buf.join(" "),ctx)+"</blockquote>");continue;}
    if(LI.test(l)){
      const ordered=/^\s*\d/.test(l);const items=[];
      while(i<lines.length&&LI.test(lines[i])){items.push([lines[i].replace(LI,""),i]);i++;}
      out.push((ordered?"<ol>":"<ul>")+items.map(([t,ln])=>{const c=t.match(/^\[( |x|X)\]\s+(.*)$/);
        if(!c)return `<li>${inlineMd(t,ctx)}</li>`;
        const done=c[1]!==" ";
        const box=ctx.static?`<span class="cb${done?" on":""}"></span>`:`<button class="cb${done?" on":""}" data-act="tick" data-ln="${ln}"${ctx.nid?` data-nid="${esc(ctx.nid)}"`:""} aria-pressed="${done}" aria-label="${done?"Mark not done":"Mark done"}"></button>`;
        return `<li class="chk${done?" done":""}">${box}<span>${inlineMd(c[2],ctx)}</span></li>`;}).join("")+(ordered?"</ol>":"</ul>"));
      continue;
    }
    if(!l.trim()){i++;continue;}
    const buf=[];
    while(i<lines.length&&lines[i].trim()&&!/^(```|#{1,6}\s|>)/.test(lines[i])&&!LI.test(lines[i])){buf.push(lines[i]);i++;}
    if(!buf.length){buf.push(lines[i]);i++;}
    out.push("<p>"+inlineMd(buf.join("\n"),ctx).replace(/\n/g,"<br>")+"</p>");
  }
  return out.join("\n");
}
function highlightHtml(html,src){
  if(!src)return html;
  let re;try{re=new RegExp("(?<![\\p{L}\\d])(?:"+src+")(?![\\p{L}\\d])","giu");}catch(e){return html;}
  return html.split(/(<[^>]*>)/).map(p=>p.startsWith("<")?p:p.replace(re,m=>'<mark class="hl">'+m+"</mark>")).join("");
}
function inlineTags(body){
  const out=new Set();const t=String(body||"").replace(/```[\s\S]*?```/g," ");const re=/(^|[\s(])#([\p{L}][\p{L}\d_-]*)/gu;let m;
  while((m=re.exec(t)))out.add(m[2].toLowerCase());return out;
}
function wikiLinks(body){
  const out=[];const re=/\[\[([^\]\n|]+)(?:\|[^\]\n]*)?\]\]/g;let m;const t=String(body||"");
  while((m=re.exec(t)))out.push(m[1].trim());return out;
}
function taskLines(body){
  const out=[];let fence=false;
  String(body||"").replace(/\r\n?/g,"\n").split("\n").forEach((l,i)=>{
    if(/^```/.test(l)){fence=!fence;return;}if(fence)return;
    const m=l.match(/^\s*(?:[-*+]|\d+[.)])\s+\[( |x|X)\]\s+(.*)$/);if(m)out.push({ln:i,done:m[1]!==" ",text:m[2]});
  });
  return out;
}
function toggleTaskLine(body,ln){
  const lines=String(body||"").replace(/\r\n?/g,"\n").split("\n");const l=lines[ln];if(l==null)return body;
  lines[ln]=l.replace(/\[( |x|X)\]/,m=>m==="[ ]"?"[x]":"[ ]");return lines.join("\n");
}
function headingsOf(body){
  const out=[];let fence=false;
  String(body||"").replace(/\r\n?/g,"\n").split("\n").forEach(l=>{if(/^```/.test(l)){fence=!fence;return;}if(fence)return;const m=l.match(/^(#{1,6})\s+(.*)$/);if(m)out.push({lv:m[1].length,text:m[2].replace(/[*_`[\]]/g,"")});});
  return out;
}
const tick=()=>new Promise(r=>setTimeout(r,0));
function weigh(tf,idf,N){
  let arr=[];for(const [t,c] of tf){arr.push([t,(1+Math.log(c))*(idf.get(t)??Math.log(N+1))]);}
  arr.sort((a,b)=>b[1]-a[1]);arr=arr.slice(0,80);
  let n=0;for(const [,w] of arr)n+=w*w;n=Math.sqrt(n)||1;
  return new Map(arr.map(([t,w])=>[t,w/n]));
}
async function buildIndexAsync(docs,onProgress){
  const ix={ids:[],pos:new Map(),vec:[],idf:new Map(),post:new Map(),N:docs.length};
  const df=new Map(),tfs=[];
  for(let i=0;i<docs.length;i++){
    const d=docs[i];ix.ids.push(d.id);ix.pos.set(d.id,i);
    const tf=new Map();for(const t of tokenize(d.text))tf.set(t,(tf.get(t)||0)+1);
    tfs.push(tf);for(const t of tf.keys())df.set(t,(df.get(t)||0)+1);
    if(i%120===0){await tick();onProgress&&onProgress(i/docs.length*0.5);}
  }
  const N=docs.length;
  for(const [t,c] of df)ix.idf.set(t,Math.log((N+1)/(c+0.5)));
  const maxDf=Math.max(25,Math.floor(N*0.04));
  for(let i=0;i<tfs.length;i++){
    const v=weigh(tfs[i],ix.idf,N);ix.vec[i]=v;
    for(const t of v.keys()){const c=df.get(t)||0;if(c<2||c>maxDf)continue;let p=ix.post.get(t);if(!p){p=[];ix.post.set(t,p);}p.push(i);}
    if(i%400===0)await tick();
  }
  return ix;
}
function makeTagIdx(tagSets){const m=new Map();tagSets.forEach((s,i)=>{for(const t of s){let a=m.get(t);if(!a){a=[];m.set(t,a);}a.push(i);}});return m;}
function candidates(ix,i,tagSets,tagIdx,K){
  K=K||5;const cand=new Map();const v=ix.vec[i];let kt=0;
  if(v)for(const [t,w] of v){
    if(++kt>40)break;
    const p=ix.post.get(t);if(!p)continue;
    for(const j of p){if(j===i)continue;const w2=ix.vec[j]&&ix.vec[j].get(t);if(w2===undefined||w2===null)continue;
      let c=cand.get(j);if(!c){c={s:0,n:0,tags:0};cand.set(j,c);}c.s+=w*w2;c.n++;}
  }
  const mine=tagSets[i];
  if(mine)for(const tg of mine){
    const mem=tagIdx.get(tg);if(!mem)continue;const bonus=mem.length<=40?0.1:0.03;
    for(const j of mem){if(j===i)continue;let c=cand.get(j);if(!c){c={s:0,n:0,tags:0};cand.set(j,c);}c.tags++;c.s+=bonus;}
  }
  const arr=[];
  for(const [j,c] of cand){if((c.n>=2&&c.s>=0.07)||(c.tags>=1&&c.s>=0.1))arr.push([j,c.s]);}
  arr.sort((a,b)=>b[1]-a[1]);return arr.slice(0,K);
}
function edgeKey(a,b){return a<b?a+"\u0001"+b:b+"\u0001"+a;}
function addSysEdges(ix,tagSets,tagIdx,i,edges){
  for(const [j,s] of candidates(ix,i,tagSets,tagIdx)){
    const a=ix.ids[i],b=ix.ids[j];const k=edgeKey(a,b);const e=edges.get(k);
    if(!e)edges.set(k,{a,b,s,kind:"sys"});else if(s>e.s)e.s=s;
  }
}
async function buildEdgesAsync(ix,tagSets,tagIdx,onProgress){
  const edges=new Map();
  for(let i=0;i<ix.ids.length;i++){addSysEdges(ix,tagSets,tagIdx,i,edges);if(i%80===0){await tick();onProgress&&onProgress(0.5+i/ix.ids.length*0.5);}}
  return edges;
}
function explain(ix,tagSets,a,b){
  const i=ix.pos.get(a),j=ix.pos.get(b);if(i===undefined||j===undefined)return {tags:[],terms:[],pct:0};
  const tags=[...(tagSets[i]||[])].filter(t=>tagSets[j]&&tagSets[j].has(t));
  const va=ix.vec[i],vb=ix.vec[j];const sh=[];let dot=0;
  if(va&&vb)for(const [t,w] of va){const w2=vb.get(t);if(w2!==undefined){sh.push([t,w*w2]);dot+=w*w2;}}
  sh.sort((x,y)=>y[1]-x[1]);
  return {tags,terms:sh.slice(0,4).map(x=>x[0]),pct:Math.round(dot*100)};
}
function reasonText(ex){
  const parts=[];
  if(ex.tags.length)parts.push("Both tagged "+ex.tags.slice(0,3).map(t=>"#"+t).join(" "));
  if(ex.terms.length)parts.push((ex.tags.length?"and mention ":"Both mention ")+ex.terms.slice(0,4).join(", "));
  return parts.length?parts.join(" ")+".":"These notes read alike.";
}
function slug(s){return String(s||"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\p{L}\d_-]/gu,"");}
function firstLine(s){return String(s||"").split("\n").map(x=>x.replace(/^[#>*\-\s\[\]xX]+/,"").replace(/\*\*/g,"").trim()).find(x=>x)||"";}
function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return (h>>>0).toString(36);}
function plainText(body){return String(body||"").replace(/\[\[([^\]|\n]+)(?:\|([^\]\n]+))?\]\]/g,(m,a,b)=>b||a).replace(/[#*_`>~]/g," ").replace(/- \[[ xX]\]/g," ").replace(/\s+/g," ").trim();}

/* ================= storage ================= */
const $=(s,r)=>(r||document).querySelector(s);
const $$=(s,r)=>[...(r||document).querySelectorAll(s)];
const DAY=864e5;
const DB={
  db:null,ok:false,mem:new Map(),
  open(){return new Promise(res=>{try{
    const r=indexedDB.open("commonplace",1);
    r.onupgradeneeded=()=>{const d=r.result;d.createObjectStore("notes",{keyPath:"id"});d.createObjectStore("meta");};
    r.onsuccess=()=>{DB.db=r.result;DB.ok=true;res(true);};
    r.onerror=()=>res(false);r.onblocked=()=>res(false);
  }catch(e){res(false);}});},
  all(){if(!DB.ok)return Promise.resolve([...DB.mem.values()].filter(x=>x&&x.id));
    return new Promise((res,rej)=>{const q=DB.db.transaction("notes").objectStore("notes").getAll();q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error);});},
  putMany(arr){if(!DB.ok){arr.forEach(n=>DB.mem.set(n.id,n));return Promise.resolve();}
    return new Promise((res,rej)=>{const tx=DB.db.transaction("notes","readwrite");const st=tx.objectStore("notes");arr.forEach(n=>st.put(n));tx.oncomplete=()=>res();tx.onerror=()=>rej(tx.error);tx.onabort=()=>rej(tx.error);});},
  del(ids){if(!DB.ok){ids.forEach(i=>DB.mem.delete(i));return Promise.resolve();}
    return new Promise((res,rej)=>{const tx=DB.db.transaction("notes","readwrite");const st=tx.objectStore("notes");ids.forEach(i=>st.delete(i));tx.oncomplete=()=>res();tx.onerror=()=>rej(tx.error);});},
  clear(){if(!DB.ok){for(const k of [...DB.mem.keys()])if(!String(k).startsWith("meta:"))DB.mem.delete(k);return Promise.resolve();}
    return new Promise((res,rej)=>{const tx=DB.db.transaction("notes","readwrite");tx.objectStore("notes").clear();tx.oncomplete=()=>res();tx.onerror=()=>rej(tx.error);});},
  getMeta(k){if(!DB.ok)return Promise.resolve(DB.mem.get("meta:"+k));
    return new Promise(res=>{const q=DB.db.transaction("meta").objectStore("meta").get(k);q.onsuccess=()=>res(q.result);q.onerror=()=>res(undefined);});},
  setMeta(k,v){if(!DB.ok){DB.mem.set("meta:"+k,v);return Promise.resolve();}
    return new Promise(res=>{const tx=DB.db.transaction("meta","readwrite");tx.objectStore("meta").put(v,k);tx.oncomplete=()=>res();tx.onerror=()=>res();});}
};
const LS={get(k,d){try{const v=localStorage.getItem("cp-"+k);return v===null?d:JSON.parse(v);}catch(e){return d;}},set(k,v){try{localStorage.setItem("cp-"+k,JSON.stringify(v));}catch(e){}}};

/* ================= state ================= */
const S={
  notes:new Map(),ix:null,tagSets:[],tagIdx:new Map(),titleIdx:new Map(),dailyIdx:new Map(),edges:new Map(),adj:new Map(),links:new Map(),
  dismissed:new Set(),progress:null,view:"",curId:null,edit:false,hl:"",keepHl:"",lc:new Map(),insIdx:0,
  filter:{q:"",src:"all",tag:"",sort:"recent",shown:150,mode:LS.get("mode","list")},
  brain:{chats:true,glow:false,q:""},tasks:{show:"open"},savedLocal:true,ready:false,jdate:null,cal:null,sample:null
};
const touched=n=>Math.max(n.updated||0,n.opened||0,0);
const enc=encodeURIComponent;
const uid=()=>"n_"+Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const SRC={written:"Written",keep:"Keep",chat:"Claude chat",file:"File",daily:"Journal"};
const srcKey=n=>n.daily?"daily":n.src;
const STAGES=[["capture","Seedling","Raw captures and fragments"],["developing","Budding","Being worked on and linked"],["evergreen","Evergreen","Settled ideas you can build on"]];
const stageName=v=>(STAGES.find(s=>s[0]===v)||STAGES[0])[1];
function dkey(d){d=d instanceof Date?d:new Date(d);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
function parseKey(k){const [y,m,d]=String(k).split("-").map(Number);return new Date(y,(m||1)-1,d||1);}
const prettyDay=(k,o)=>parseKey(k).toLocaleDateString(undefined,o||{weekday:"long",day:"numeric",month:"long",year:"numeric"});
function titleOf(n){if(n.daily)return prettyDay(n.daily,{weekday:"short",day:"numeric",month:"short",year:"numeric"});return n.title||firstLine(n.body).slice(0,70)||"Untitled";}
function tagsOf(n){const s=new Set((n.tags||[]).map(t=>String(t).toLowerCase()));for(const t of inlineTags(n.body))s.add(t);return s;}
function ago(ts){
  const diff=Date.now()-ts;const d=Math.floor(diff/DAY);
  if(d<1){const h=Math.floor(diff/36e5);if(h<1)return "just now";return h+"h ago";}
  if(d<2)return "yesterday";if(d<30)return d+" days ago";
  if(d<365){const m=Math.round(d/30);return m+(m===1?" month":" months")+" ago";}
  const y=Math.floor(d/365);return y+(y===1?" year":" years")+" ago";
}
const fmtDate=ts=>new Date(ts).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"});
const words=s=>(String(s||"").match(/\S+/g)||[]).length;

/* ================= indexing ================= */
function noteText(n){const t=n.daily?"":(n.title||"");return t+"\n"+t+"\n"+(n.body||"");}
function rebuildTitles(){
  S.titleIdx=new Map();S.dailyIdx=new Map();
  for(const n of S.notes.values()){const t=(n.title||"").trim().toLowerCase();if(t&&!S.titleIdx.has(t))S.titleIdx.set(t,n.id);if(n.daily&&!S.dailyIdx.has(n.daily))S.dailyIdx.set(n.daily,n.id);}
}
function rebuildUserEdges(){
  for(const [k,e] of [...S.edges]){if(e.kind==="user")S.edges.delete(k);}
  S.links=new Map();
  for(const n of S.notes.values()){
    const set=new Set();
    for(const t of wikiLinks(n.body)){const id=S.titleIdx.get(t.toLowerCase());if(id&&id!==n.id)set.add(id);}
    if(set.size){S.links.set(n.id,set);
      for(const id of set){const k=edgeKey(n.id,id);const e=S.edges.get(k);if(e)e.kind="user";else S.edges.set(k,{a:n.id,b:id,s:1,kind:"user"});}}
  }
}
function rebuildAdj(){
  S.adj=new Map();
  for(const e of S.edges.values()){
    if(!S.notes.has(e.a)||!S.notes.has(e.b))continue;
    (S.adj.get(e.a)||S.adj.set(e.a,[]).get(e.a)).push({o:e.b,s:e.s,k:e.kind});
    (S.adj.get(e.b)||S.adj.set(e.b,[]).get(e.b)).push({o:e.a,s:e.s,k:e.kind});
  }
}
async function indexAll(){
  S.progress=0;paintStatus();
  const arr=[...S.notes.values()];
  S.tagSets=arr.map(tagsOf);S.tagIdx=makeTagIdx(S.tagSets);rebuildTitles();S.lc=new Map();
  const onP=p=>{S.progress=p;paintStatus();};
  S.ix=await buildIndexAsync(arr.map(n=>({id:n.id,text:noteText(n)})),onP);
  S.edges=await buildEdgesAsync(S.ix,S.tagSets,S.tagIdx,onP);
  rebuildUserEdges();rebuildAdj();
  S.progress=null;paintStatus();
}
function reindexNote(id){
  const n=S.notes.get(id);if(!n||!S.ix)return;
  const ix=S.ix;let i=ix.pos.get(id);
  if(i===undefined){i=ix.ids.length;ix.ids.push(id);ix.pos.set(id,i);ix.N++;}
  else{const old=ix.vec[i];if(old)for(const t of old.keys()){const p=ix.post.get(t);if(p){const k=p.indexOf(i);if(k>=0)p.splice(k,1);}}}
  const tf=new Map();for(const t of tokenize(noteText(n)))tf.set(t,(tf.get(t)||0)+1);
  const v=weigh(tf,ix.idf,ix.N);ix.vec[i]=v;
  for(const t of v.keys()){if(!ix.idf.has(t))ix.idf.set(t,Math.log(ix.N+1));let p=ix.post.get(t);if(!p){p=[];ix.post.set(t,p);}if(!p.includes(i))p.push(i);}
  S.tagSets[i]=tagsOf(n);S.tagIdx=makeTagIdx(S.tagSets);rebuildTitles();S.lc.delete(id);
  for(const [k,e] of [...S.edges]){if(e.a===id||e.b===id)S.edges.delete(k);}
  addSysEdges(ix,S.tagSets,S.tagIdx,i,S.edges);
  rebuildUserEdges();rebuildAdj();
}
/* retrieval for "Ask your notes": score every note against the question's terms */
function retrieve(q,k){
  const terms=tokenize(q);if(!terms.length||!S.ix)return [];
  const ix=S.ix;const out=[];
  ix.vec.forEach((v,i)=>{
    const n=S.notes.get(ix.ids[i]);if(!n||!v)return;let s=0;
    for(const t of terms){const w=v.get(t);if(w)s+=w*(ix.idf.get(t)||1);}
    const tl=(n.title||"").toLowerCase();for(const t of terms)if(tl.includes(t))s+=.4;
    if(s>0)out.push([n,s]);
  });
  out.sort((a,b)=>b[1]-a[1]);return out.slice(0,k||8).map(x=>x[0]);
}

/* ================= notes ================= */
let saveTimer=0,reTimer=0;const dirty=new Set();
function queueSave(n){
  dirty.add(n.id);clearTimeout(saveTimer);markSaving();
  saveTimer=setTimeout(async()=>{const arr=[...dirty].map(i=>S.notes.get(i)).filter(Boolean);dirty.clear();try{await DB.putMany(arr);markSaved();}catch(e){toast("Could not save. Make a backup from Import and backup.");}},400);
}
function queueReindex(id){
  clearTimeout(reTimer);reTimer=setTimeout(()=>{reindexNote(id);paintStatus();if(S.view==="note"&&S.curId===id)renderSide(id);},1100);
}
function mkNote(o){
  const now=Date.now();
  return Object.assign({id:uid(),title:"",body:"",tags:[],src:"written",stage:"capture",created:now,updated:now,opened:now,inbox:false,pinned:false,icon:"",meta:{}},o);
}
async function addNotes(arr){for(const n of arr)S.notes.set(n.id,n);await DB.putMany(arr);}
async function createNote(o){const n=mkNote(o);await addNotes([n]);reindexNote(n.id);paintStatus();return n;}
function ensureDaily(k){
  const id=S.dailyIdx.get(k);if(id&&S.notes.has(id))return S.notes.get(id);
  const t=parseKey(k).getTime()+9*36e5;
  const n=mkNote({id:"daily:"+k,title:k,daily:k,stage:"capture",created:Math.min(Date.now(),t),updated:Date.now()});
  S.notes.set(n.id,n);S.dailyIdx.set(k,n.id);queueSave(n);reindexNote(n.id);return n;
}
function capture(text,toJournal){
  text=text.trim();if(!text)return null;
  if(toJournal){
    const n=ensureDaily(dkey(new Date()));const hm=new Date().toLocaleTimeString(undefined,{hour:"2-digit",minute:"2-digit"});
    const lines=text.split("\n");const entry=`- ${hm} ${lines[0]}`+(lines.length>1?"\n"+lines.slice(1).map(l=>"  "+l).join("\n"):"");
    n.body=(n.body||"").replace(/\s+$/,"")+((n.body||"").trim()?"\n":"")+entry;n.updated=Date.now();queueSave(n);reindexNote(n.id);return Promise.resolve(n);
  }
  const one=text.split("\n");let title,body;
  if(one.length===1&&text.length<=90){title=text;body="";}
  else{title=firstLine(text).split(/\s+/).slice(0,8).join(" ");body=text;}
  return createNote({title,body,inbox:true});
}
const TEMPLATES=[
  {k:"meeting",name:"Meeting",title:"Meeting: ",body:"**Date:** [[{date}]]\n**With:** \n\n## Agenda\n- \n\n## Notes\n\n\n## Decisions\n- \n\n## Actions\n- [ ] \n",tags:["meeting"]},
  {k:"book",name:"Book notes",title:"Book: ",body:"**Author:** \n**Started:** [[{date}]]\n\n## In one sentence\n\n\n## Ideas worth keeping\n- \n\n## Quotes\n> \n\n## How this connects\n- [[]]\n",tags:["reading"]},
  {k:"idea",name:"Idea",title:"",body:"## The idea\n\n\n## Why it might matter\n\n\n## What it reminds me of\n- [[]]\n\n## Next small step\n- [ ] \n",tags:["idea"]},
  {k:"project",name:"Project",title:"Project: ",body:"## Outcome\nWhat does done look like?\n\n## Why now\n\n\n## Milestones\n- [ ] \n- [ ] \n\n## Log\n- [[{date}]] Started.\n",tags:["projects"]},
  {k:"person",name:"Person",title:"",body:"**Met:** [[{date}]]\n**Works on:** \n\n## What I learned from them\n\n\n## Things to follow up\n- [ ] \n",tags:["people"]}
];
function fillTpl(s){return String(s).replace(/\{date\}/g,dkey(new Date()));}

/* ================= resurfacing ================= */
function daySeed(){return Math.floor(Date.now()/DAY);}
function pickPool(pool,count,keyFn){const d=daySeed();return pool.map(x=>[hash(keyFn(x)+d),x]).sort((a,b)=>a[0]<b[0]?-1:1).slice(0,count).map(x=>x[1]);}
function insightPool(){
  const arr=[];
  for(const e of S.edges.values()){
    if(e.kind!=="sys")continue;const a=S.notes.get(e.a),b=S.notes.get(e.b);if(!a||!b)continue;
    if(S.dismissed.has(edgeKey(e.a,e.b)))continue;
    if(a.src==="chat"&&b.src==="chat")continue;
    if((S.links.get(e.a)||new Set()).has(e.b)||(S.links.get(e.b)||new Set()).has(e.a))continue;
    arr.push(e);
  }
  arr.sort((x,y)=>y.s-x.s);
  return pickPool(arr.slice(0,12),12,e=>e.a+e.b);
}
function forgotten(count){
  const now=Date.now();const recent=new Set();
  for(const n of S.notes.values())if(now-touched(n)<30*DAY)recent.add(n.id);
  let pool=[];
  for(const n of S.notes.values()){
    if(n.daily)continue;const age=(now-touched(n))/DAY;if(age<120)continue;
    const adj=S.adj.get(n.id)||[];if(!adj.length)continue;
    pool.push({n,age,rc:adj.filter(a=>recent.has(a.o)).length,deg:adj.length});
  }
  const nonChat=pool.filter(p=>p.n.src!=="chat");if(nonChat.length>=count)pool=nonChat;
  pool.sort((a,b)=>(b.rc-a.rc)||(b.age-a.age));
  return pickPool(pool.slice(0,20),count,p=>p.n.id);
}
function snippetFor(n,src,len){
  const plain=plainText(n.body);if(!plain)return "";
  let idx=0;
  if(src){try{const m=new RegExp("(?<![\\p{L}\\d])(?:"+src+")(?![\\p{L}\\d])","iu").exec(plain);if(m)idx=m.index;}catch(e){}}
  const start=Math.max(0,idx-60);const end=Math.min(plain.length,start+(len||190));
  let t=plain.slice(start,end);if(start>0)t="… "+t;if(end<plain.length)t+=" …";
  return highlightHtml(esc(t),src);
}

/* ================= import ================= */
const isKeep=o=>o&&typeof o==="object"&&!Array.isArray(o)&&("textContent" in o||"listContent" in o)&&("isTrashed" in o||"userEditedTimestampUsec" in o);
function keepToNote(o,fname){
  if(o.isTrashed)return null;
  let body=o.textContent||"";
  if(Array.isArray(o.listContent)&&o.listContent.length)body+=(body?"\n\n":"")+o.listContent.map(x=>`- [${x.isChecked?"x":" "}] ${x.text||""}`).join("\n");
  const title=(o.title||"").trim();if(!title&&!body.trim())return null;
  const c=Math.floor(Number(o.createdTimestampUsec)/1000)||Date.now(),u=Math.floor(Number(o.userEditedTimestampUsec)/1000)||c;
  return {id:"keep:"+(o.createdTimestampUsec||hash(fname||title+body)),title:title||firstLine(body).slice(0,70),body,
    tags:(o.labels||[]).map(l=>slug(l.name)).filter(Boolean),src:"keep",stage:"capture",created:c,updated:u,opened:0,inbox:false,pinned:!!o.isPinned,icon:"",meta:{archived:!!o.isArchived}};
}
function chatToNote(c){
  const parts=[];
  for(const m of (c.chat_messages||[])){
    let t=m.text;if(!t&&Array.isArray(m.content))t=m.content.filter(x=>x&&x.type==="text"&&x.text).map(x=>x.text).join("\n");
    if(!t||!String(t).trim())continue;parts.push((m.sender==="human"?"**You:** ":"**Claude:** ")+String(t).trim());
  }
  if(!parts.length)return null;
  let body=parts.join("\n\n");if(body.length>80000)body=body.slice(0,80000)+"\n\n… (cut for length)";
  const created=Date.parse(c.created_at)||Date.now(),updated=Date.parse(c.updated_at)||created;
  return {id:"chat:"+(c.uuid||hash(body)),title:(c.name||"").trim()||firstLine(parts[0].replace(/^\*\*You:\*\*\s*/,"")).slice(0,70)||"Untitled chat",body,tags:[],src:"chat",stage:"capture",created,updated,opened:0,inbox:false,pinned:false,icon:"",meta:{msgs:parts.length}};
}
function mdToNote(text,name,mod){
  let body=String(text).replace(/\r\n?/g,"\n");const tags=[];
  const fm=body.match(/^---\n([\s\S]*?)\n---\n?/);
  if(fm){body=body.slice(fm[0].length);const tl=fm[1].match(/^tags:\s*(.*)$/m);if(tl){tl[1].replace(/[\[\]]/g,"").split(/[,\s]+/).forEach(t=>{t=slug(t.replace(/^#/,""));if(t)tags.push(t);});}
    const tb=fm[1].match(/^tags:\s*\n((?:\s*-\s*.+\n?)+)/m);if(tb)tb[1].split("\n").forEach(l=>{const t=slug(l.replace(/^\s*-\s*/,"").replace(/^#/,""));if(t)tags.push(t);});}
  const base=name.split("/").pop().replace(/\.(md|markdown|txt)$/i,"");
  const h1=body.match(/^#\s+(.+)$/m);let title=base;
  if(h1&&base.length<2)title=h1[1].trim();
  return {id:"file:"+hash(name+":"+body.length),title,body:body.trim(),tags:[...new Set(tags)],src:"file",stage:"capture",created:mod||Date.now(),updated:mod||Date.now(),opened:0,inbox:false,pinned:false,icon:"",meta:{path:name}};
}
async function importFiles(fileList){
  const files=[...fileList];if(!files.length)return;
  const r={keep:0,chat:0,file:0,skipped:0,restored:0,unknown:0};const add=[];const seen=new Set();
  const push=(n,kind)=>{if(!n)return;if(S.notes.has(n.id)||seen.has(n.id)){r.skipped++;return;}seen.add(n.id);add.push(n);r[kind]++;};
  const handleJson=(obj,name)=>{
    if(Array.isArray(obj)){
      if(obj.length&&obj[0]&&Array.isArray(obj[0].chat_messages)){obj.forEach(c=>push(chatToNote(c),"chat"));}
      else if(obj.length&&isKeep(obj[0])){obj.forEach((o,i)=>push(keepToNote(o,name+i),"keep"));}
    }else if(obj&&obj.format==="commonplace-backup"&&Array.isArray(obj.notes)){
      obj.notes.forEach(n=>{if(!n||!n.id)return;if(S.notes.has(n.id)||seen.has(n.id)){r.skipped++;return;}seen.add(n.id);add.push(n);r.restored++;});
    }else if(isKeep(obj)){push(keepToNote(obj,name),"keep");}
  };
  toast("Reading files…",{ms:60000});
  for(const f of files){
    const nm=(f.webkitRelativePath||f.name);const low=nm.toLowerCase();
    try{
      if(low.endsWith(".zip")){
        if(!window.JSZip){toast("Zip support did not load. Unzip the file first, then choose the files inside.",{ms:7000});continue;}
        const z=await JSZip.loadAsync(f);const entries=Object.values(z.files).filter(e=>!e.dir);let k=0;
        for(const e of entries){const en=e.name.toLowerCase();
          if(en.endsWith(".json")){try{handleJson(JSON.parse(await e.async("string")),e.name);}catch(_){}}
          else if(/\.(md|markdown)$/.test(en)){push(mdToNote(await e.async("string"),e.name,f.lastModified),"file");}
          if(++k%80===0){toast(`Reading ${f.name}… ${k} of ${entries.length}`,{ms:60000});await tick();}}
      }else if(low.endsWith(".json")){handleJson(JSON.parse(await f.text()),nm);}
      else if(/\.(md|markdown|txt)$/.test(low)){if(/labels\.txt$/.test(low))continue;push(mdToNote(await f.text(),nm,f.lastModified),"file");}
      else r.unknown++;
    }catch(err){r.unknown++;}
  }
  if(add.length){await addNotes(add);toast("Finding connections…",{ms:60000});await indexAll();}
  const bits=[];if(r.keep)bits.push(`${r.keep} Keep notes`);if(r.chat)bits.push(`${r.chat} chats`);if(r.file)bits.push(`${r.file} files`);if(r.restored)bits.push(`${r.restored} notes restored`);
  let msg=bits.length?"Added "+bits.join(", ")+".":"No new notes found.";
  if(r.skipped)msg+=` ${r.skipped} already here.`;if(r.unknown&&!bits.length)msg+=" Choose a Keep or Claude export, or Markdown files.";
  toast(msg,{ms:6500});route();
}

/* ================= export ================= */
async function saveFile(filename,data){
  try{
    const dl=window.claude&&claude.use?await claude.use("downloads"):null;
    if(dl){await dl.save({filename,data});return true;}
  }catch(e){if(e&&e.code==="declined")return false;}
  try{const blob=data instanceof Blob?data:new Blob([data]);const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1500);return true;}
  catch(e){toast("This view cannot save files. Open the page in a normal browser tab to back up.");return false;}
}
function noteToMd(n){
  const tags=[...new Set((n.tags||[]).map(String))];
  const fm=["---",`title: ${JSON.stringify(titleOf(n))}`,`source: ${n.src}`,`created: ${new Date(n.created).toISOString()}`,`updated: ${new Date(n.updated).toISOString()}`,`stage: ${n.stage}`];
  if(n.daily)fm.push(`date: ${n.daily}`);
  if(tags.length)fm.push(`tags: [${tags.join(", ")}]`);fm.push("---","");
  return fm.join("\n")+(n.title&&!n.daily?`# ${n.title}\n\n`:"")+n.body+"\n";
}
async function exportMarkdown(){
  if(!window.JSZip){toast("Zip support did not load. Use the full backup instead.");return;}
  const z=new JSZip();const used=new Set();
  for(const n of S.notes.values()){let base=(n.daily||slug(titleOf(n)).slice(0,60))||"note";let name=base,i=2;while(used.has(name)){name=base+"-"+i++;}used.add(name);
    z.file((n.daily?"journal/":n.src==="chat"?"chats/":n.src==="keep"?"keep/":"")+name+".md",noteToMd(n));}
  const blob=await z.generateAsync({type:"blob"});if(await saveFile("commonplace-markdown.zip",blob))toast("Markdown export ready.");
}
async function exportBackup(){
  const data=JSON.stringify({format:"commonplace-backup",version:2,exported:new Date().toISOString(),notes:[...S.notes.values()]});
  if(await saveFile("commonplace-backup.json",data))toast("Backup ready.");
}

/* ================= samples ================= */
function sampleNotes(){
  const now=Date.now(),yr=365*DAY,today=dkey(new Date()),yest=dkey(new Date(now-DAY)),wk=dkey(new Date(now-6*DAY));
  const mk=(k,title,body,age,extra)=>mkNote(Object.assign({id:"sample:"+k,title,body,created:now-age,updated:now-age,opened:0,meta:{sample:true},stage:"developing"},extra||{}));
  return [
    mk("tomato","My grandmother’s tomato garden","Every August the garden behind her house smelled of tomato leaves and hot brick. She saved seeds from the best tomato each year in a tin and gave them to neighbours.\n\n#garden #seeds",2.6*yr,{stage:"evergreen",icon:"🍅"}),
    mk("balcony","Balcony ecosystem, year two","Aphids destroyed the chillies last spring. This year I planted marigolds and dill and waited, and the ladybirds arrived on their own.\n\n> One plant is a target, fifteen kinds of plant is a system.\n\nSaved seeds from the best tomato again. Same lesson as [[Resilience is redundancy]].\n\n## Still to try\n- [x] Marigolds along the railing\n- [ ] A water tray for the bees\n- [ ] Swap seeds at the [[Meeting: garden club seed swap|seed swap]]\n\n#garden #seeds",20*DAY,{icon:"🌿",pinned:true}),
    mk("resilience","Resilience is redundancy","Redundancy looks like waste when things are going well. Two pots failed in July and the third carried the whole balcony. Seed tins in kitchen drawers outlived the vaults. Systems survive by having more than one of everything.\n\n#systems",1.1*yr,{stage:"evergreen",pinned:true}),
    mk("small","Small systems grow into complex ones","Start with the smallest version that actually works, then let it grow. Complex systems that work evolved from simple systems that worked. A system built whole never works and cannot be patched into working.\n\n#systems",1.9*yr,{stage:"evergreen"}),
    mk("novel","The unfinished novel folder","Fourteen drafts of the same novel, none finished. Every draft tried to build the whole book at once and stalled around chapter four. The folder is called lighthouse after the working title.\n\n#writing #projects",4*yr,{stage:"capture",icon:"🗼"}),
    mk("tending","Tending, not organizing","I thought my notes needed a better filing system. They needed attention. Organizing is a one-time act; tending is opening three old notes, fixing a sentence, linking one to something newer. What survives is whatever I keep returning to for ten minutes at a time.\n\n#notes #projects",35*DAY),
    mk("dumplings","Sunday dumplings","Made dumplings again with the family. The dough recipe survives because we make it every month, not because anyone wrote it down carefully. Small repeated practice keeps it alive.\n\n- [ ] Write down Mum's ratio for the dough\n\n#cooking #family",8*DAY,{src:"keep",stage:"capture"}),
    mk("starter","The mistake with the sourdough starter","I fed the starter irregularly and it nearly died. Then I kept a tiny jar in the fridge as a backup and fed the main one every day. Redundancy and a small daily habit saved it.\n\n#cooking",0.8*yr,{src:"keep",stage:"capture"}),
    mk("forgotten","The value of forgotten ideas","Old notes are compost. An idea I dismissed years ago about seeds and sharing turned out to be the missing piece for this project. Revisit forgotten notes on purpose.\n\n#notes",1.4*yr),
    mk("curiosity","Curiosity has a half-life","Interest in an idea fades within days unless it is captured and revisited. Capture quickly, then return to it within a week.\n\n#notes",2.2*yr,{src:"keep",stage:"capture"}),
    mk("overstory","Reading log: The Overstory","Trees share nutrients through root networks. Forests are systems with redundancy, the mother tree idea. Connects to the balcony garden and to seeds.\n\n#garden #reading",0.5*yr,{src:"file",icon:"🌳"}),
    mk("planning","Quarterly planning habits","Plan small, review weekly, and keep a backup plan. Projects fail when the whole plan is built at once.\n\n## Weekly review\n- [ ] Empty the inbox\n- [ ] Revisit one old note\n- [x] Choose three priorities\n\n#projects #systems",3*DAY,{icon:"🧭"}),
    mk("seedswap","Meeting: garden club seed swap","**Date:** [["+wk+"]]\n**With:** Priya, Tom, the allotment group\n\n## Notes\nEveryone brings saved seeds in paper envelopes, labelled with the year. Tom keeps a duplicate tin at his sister's house in case of a flood, which is [[Resilience is redundancy]] in practice.\n\n## Actions\n- [ ] Label this year's tomato seeds\n- [ ] Bring spare marigold seeds\n\n#meeting #garden #seeds",6*DAY,{stage:"capture"}),
    mk("chat-systems","How to start a habit that sticks","**You:** Why do my big new routines always collapse after a week?\n\n**Claude:** Large routines depend on everything going right at once. Start with a version so small it is hard to skip, and grow it once it runs on its own. Complex systems that work tend to grow out of simple ones that worked.",40*DAY,{src:"chat",stage:"capture",meta:{sample:true,msgs:2}}),
    mk("daily-today",today,"- [x] Water the balcony plants\n- [ ] Draft the review for [[Quarterly planning habits]]\n- [ ] Call Mum about the dumpling dough\n\nRead a chapter of The Overstory on the train. The idea that forests share through root networks keeps coming back. #reading",0.05*DAY,{daily:today,stage:"capture"}),
    mk("daily-yest",yest,"Walked the long way home. Noticed how the community garden plots that survive the summer are the ones with three or four kinds of plants, not one.\n\n- [x] Seed envelopes for the swap",1*DAY,{daily:yest,stage:"capture"})
  ];
}
