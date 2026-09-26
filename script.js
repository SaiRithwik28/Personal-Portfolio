document.querySelectorAll('.sec-head, .project, .card, .tl-item, .facts').forEach(el=>el.classList.add('reveal'));
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('show'));
}else{
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
