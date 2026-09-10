import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import { notebooks, notebookCategories } from "../data/products";

export default function Notebooks() {
  const { t } = useLang();
  const [activeCat, setActiveCat] = useState("all");
  const [lightbox, setLightbox]   = useState(null);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}
    }), {threshold:0.08});
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [activeCat]);

  const filtered = activeCat === "all" ? notebooks : notebooks.filter(n => n.cat === activeCat);

  const tabStyle = (active) => ({
    padding:"8px 22px", borderRadius:25,
    border:"1.5px solid var(--gold)",
    background: active ? "var(--gold)" : "transparent",
    color: active ? "var(--g)" : "var(--gold)",
    fontWeight:700, fontSize:".85rem", cursor:"pointer",
    transition:"all .25s", fontFamily:"Cairo,sans-serif",
  });

  return (
    <section id="notebooks" ref={ref} style={{padding:"90px 5%",background:"var(--cream)"}}>
      <div className="reveal" style={{textAlign:"center",marginBottom:40}}>
        <p style={{display:"inline-block",color:"var(--g)",fontWeight:700,fontSize:".85rem",letterSpacing:2,textTransform:"uppercase",marginBottom:10,opacity:.7}}>
          {t("📒 كراسات HEGAZY","📒 HEGAZY Notebooks")}
        </p>
        <h2 style={{fontSize:"clamp(1.6rem,4vw,2.4rem)",fontWeight:900,color:"var(--g)",marginBottom:12}}>
          {t("كراسات كرتون كيوت للأطفال 🎒","Cute Cartoon Notebooks for Kids 🎒")}
        </h2>
        <p style={{color:"var(--tm)",fontSize:"1rem",maxWidth:540,margin:"0 auto"}}>
          {t("كراسات HEGAZY بشخصيات الكارتون المفضلة — ديزني، باتمان، فروزن، وأكتر!",
             "HEGAZY notebooks with favorite cartoon characters — Disney, Batman, Frozen & more!")}
        </p>
      </div>

      {/* Filter */}
      <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap",marginBottom:36}}>
        {notebookCategories.map(c => (
          <button key={c.id} style={tabStyle(activeCat===c.id)} onClick={() => setActiveCat(c.id)}>
            {t(c.ar, c.en)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:20,maxWidth:1200,margin:"0 auto 40px"}}>
        {filtered.map(nb => (
          <div key={nb.id} className="reveal"
            onClick={() => setLightbox({img:nb.img, caption:t(nb.nameAr,nb.nameEn)})}
            style={{borderRadius:14,overflow:"hidden",boxShadow:"var(--sh)",background:"var(--w)",cursor:"pointer",transition:"transform .3s,box-shadow .3s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-8px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(0,0,0,.15)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="var(--sh)"}}>
            <img src={nb.img} alt={t(nb.nameAr,nb.nameEn)}
              style={{width:"100%",height:240,objectFit:"cover",display:"block",transition:"transform .4s"}}
              onMouseEnter={e=>e.target.style.transform="scale(1.06)"}
              onMouseLeave={e=>e.target.style.transform=""}/>
            <div style={{padding:"12px 16px",textAlign:"center"}}>
              <p style={{fontWeight:700,color:"var(--g)",fontSize:".9rem",margin:0}}>{t(nb.nameAr,nb.nameEn)}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{textAlign:"center"}}>
        <a href="#contact" style={{background:"var(--g)",color:"var(--w)",padding:"14px 36px",borderRadius:40,fontWeight:700,fontSize:"1rem",display:"inline-flex",alignItems:"center",gap:8,transition:"background .3s"}}
          onMouseEnter={e=>e.target.style.background="var(--gm)"}
          onMouseLeave={e=>e.target.style.background="var(--g)"}>
          {t("📒 اطلب كراساتك الآن","📒 Order Your Notebooks Now")}
        </a>
      </div>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.92)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16}}>
          <button onClick={() => setLightbox(null)} style={{position:"absolute",top:20,right:24,background:"none",border:"none",color:"#fff",fontSize:"2.5rem",cursor:"pointer"}}>×</button>
          <img src={lightbox.img} alt={lightbox.caption} onClick={e=>e.stopPropagation()} style={{maxWidth:"90vw",maxHeight:"80vh",borderRadius:12,objectFit:"contain"}}/>
          <p style={{color:"rgba(255,255,255,.8)",fontSize:".95rem",fontFamily:"Cairo,sans-serif"}}>{lightbox.caption}</p>
        </div>
      )}
    </section>
  );
}