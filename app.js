const fmt=d=>new Date(d+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
const esc=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
document.getElementById("log").innerHTML=[...UPDATES].sort((a,b)=>b.date.localeCompare(a.date)).map(u=>`<li><time>${fmt(u.date)}</time><b>${esc(u.title)}</b><p>${esc(u.text)}</p></li>`).join("");
document.getElementById("next").innerHTML=NEXT.map(n=>`<li>${esc(n)}</li>`).join("");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
