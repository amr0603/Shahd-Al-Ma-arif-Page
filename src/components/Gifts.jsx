import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import { gifts, giftCategories } from "../data/products";

function Lightbox({ img, caption, onClose }) {
  useEffect(() => {
    const h = e => { if(e.key==="Escape") onClose(); };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.93)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16}}>
      <button onClick={onClose} style={{position:"absolute",top:20,right:24,background:"none",border:"none",color:"#fff",fontSize:"2.5rem",lineHeight:1,cursor:"pointer"}}>×</button>
      <img src={img} alt={caption} onClick={e=>e.stopPropagation()} style={{maxWidth:"90vw",maxHeight:"80vh",borderRadius:12,boxShadow:"0 0 60px rgba(212,167,44,.3)",objectFit:"contain"}}/>
      <p style={{color:"rgba(255,255,255,.8)",fontSize:".95rem",fontFamily:"Cairo,sans-serif"}}>{caption}</p>
    </div>
  );
}

export default function Gifts() {
  const { t } = useLang();
  const [lightbox, setLightbox]   = useState(null);
  const [activeCat, setActiveCat] = useState("all");
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);} }), {threshold:0.08});
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [activeCat]);

  const filtered = activeCat === "all" ? gifts : gifts.filter(g => g.cat === activeCat);

  const tabStyle = (active) => ({
    padding:"8px 20px", borderRadius:25, border:"1.5px solid var(--gold)",
    background: active ? "var(--gold)" : "transparent",
    color: active ? "var(--g)" : "var(--gold)",
    fontWeight:700, fontSize:".85rem", cursor:"pointer",
    transition:"background .25s,color .25s", fontFamily:"Cairo,sans-serif",
  });

  return (
    <section id="gifts" ref={ref} style={{padding:"90px 5%",background:"var(--g)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-100,left:-100,width:400,height:400,background:"radial-gradient(circle,rgba(212,167,44,.08) 0%,transparent 70%)",borderRadius:"50%",pointerEvents:"none"}}/>

      {/* Header */}
      <div className="reveal" style={{textAlign:"center",marginBottom:40,position:"relative",zIndex:1}}>
        <p style={{display:"inline-block",color:"var(--gl)",fontWeight:700,fontSize:".85rem",letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>
          {t("🎁 كوليكشن الهدايا","🎁 Gifts Collection")}
        </p>
        <h2 style={{fontSize:"clamp(1.6rem,4vw,2.4rem)",fontWeight:900,color:"var(--w)",marginBottom:12}}>
          {t("هدايا وإكسسوارات 💐","Gifts & Accessories 💐")}
        </h2>
        <p style={{color:"rgba(255,255,255,.65)",fontSize:"1rem",maxWidth:540,margin:"0 auto"}}>
          {t("باقات ورد، أكواب مطبوعة، إطارات تذكارية، وأكتر — هدية لكل مناسبة","Bouquets, mugs, frames & more — a gift for every occasion")}
        </p>
      </div>

      {/* Category Filter */}
      <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap",marginBottom:36,position:"relative",zIndex:1}}>
        {giftCategories.map(c => (
          <button key={c.id} style={tabStyle(activeCat===c.id)} onClick={() => setActiveCat(c.id)}>
            {t(c.ar, c.en)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))",gap:16,maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1}}>
        {filtered.map(g => (
          <div key={g.id} className="reveal"
            onClick={() => setLightbox({img:g.img, caption:t(g.nameAr,g.nameEn)})}
            style={{borderRadius:12,overflow:"hidden",position:"relative",cursor:"pointer",boxShadow:"0 4px 18px rgba(0,0,0,.25)",transition:"transform .3s,box-shadow .3s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px) scale(1.02)";e.currentTarget.style.boxShadow="0 12px 36px rgba(0,0,0,.4)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 4px 18px rgba(0,0,0,.25)"}}>
            <img src={g.img} alt={t(g.nameAr,g.nameEn)} style={{width:"100%",height:220,objectFit:"cover",display:"block",transition:"transform .4s"}}
              onMouseEnter={e=>e.target.style.transform="scale(1.07)"}
              onMouseLeave={e=>e.target.style.transform=""}/>
            <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(to top,rgba(14,61,46,.92),transparent)",color:"#fff",padding:"22px 12px 10px",fontSize:".85rem",fontWeight:700,textAlign:"center"}}>
              {t(g.nameAr, g.nameEn)}
            </div>
          </div>
        ))}
      </div>

      <div style={{textAlign:"center",marginTop:44,position:"relative",zIndex:1}}>
        <a href="#contact" style={{background:"var(--gold)",color:"var(--g)",padding:"14px 36px",borderRadius:40,fontWeight:700,fontSize:"1rem",display:"inline-flex",alignItems:"center",gap:8,border:"2px solid var(--gold)"}}>
          {t("🎁 اطلب هديتك دلوقتي","🎁 Order Your Gift Now")}
        </a>
      </div>

      {lightbox && <Lightbox img={lightbox.img} caption={lightbox.caption} onClose={() => setLightbox(null)}/>}
    </section>
  );
}