import { useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hero" ref={ref} style={{minHeight:"100vh",background:"var(--g)",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",padding:"90px 5% 60px"}}>
      {/* Decorative glows */}
      <div style={{position:"absolute",top:-120,left:-120,width:500,height:500,background:"radial-gradient(circle,rgba(212,167,44,.15) 0%,transparent 70%)",borderRadius:"50%",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:-80,right:"10%",width:350,height:350,background:"radial-gradient(circle,rgba(212,167,44,.10) 0%,transparent 70%)",borderRadius:"50%",pointerEvents:"none"}}/>

      <div style={{position:"relative",zIndex:2,width:"100%",maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}} className="hero-inner">

        {/* Text */}
        <div className="reveal">
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(212,167,44,.18)",border:"1px solid rgba(212,167,44,.4)",color:"var(--gold)",fontSize:".85rem",fontWeight:700,padding:"6px 16px",borderRadius:25,marginBottom:20}}>
            {t("🎒 موسم الرجوع للمدارس 2026 · عروض حصرية","🎒 Back to School 2026 · Exclusive Deals")}
          </div>
          <h1 style={{fontSize:"clamp(2rem,5vw,3.4rem)",fontWeight:900,color:"var(--w)",lineHeight:1.3,marginBottom:16}}>
            {t("استقبل مدرستك الجديدة مع ","Start Your New School Year with ")}
            <span style={{color:"var(--gold)",position:"relative"}}>شهد المعارف</span> 📚
          </h1>
          <p style={{fontSize:"1.1rem",color:"rgba(255,255,255,.8)",marginBottom:32}}>
            <span style={{color:"var(--gl)",fontWeight:700}}>{t("مستقبلك بيبدأ من هنا","Your future starts here")}</span>
            {t(" — أكثر من مجرد مكتبة، نحن جزء من رحلتك التعليمية"," — More than a bookshop, we're part of your journey")}
          </p>
          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            <a href="#products" style={{background:"var(--gold)",color:"var(--g)",padding:"14px 32px",borderRadius:40,fontWeight:700,fontSize:"1rem",border:"2px solid var(--gold)",display:"inline-flex",alignItems:"center",gap:8}}>
              {t("🛍️ تصفح العروض دلوقتي","🛍️ Browse Deals Now")}
            </a>
            <a href="#contact" style={{background:"transparent",color:"var(--w)",padding:"14px 32px",borderRadius:40,fontWeight:700,fontSize:"1rem",border:"2px solid rgba(255,255,255,.5)",display:"inline-flex",alignItems:"center",gap:8}}>
              {t("📞 اطلب دلوقتي","📞 Order Now")}
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="reveal" style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div style={{position:"absolute",width:340,height:340,background:"radial-gradient(circle,rgba(212,167,44,.2) 0%,transparent 70%)",borderRadius:"50%"}}/>
          <div style={{position:"absolute",width:320,height:320,borderRadius:"50%",border:"2px solid rgba(212,167,44,.25)",animation:"spin 12s linear infinite"}}/>
          <img src="backpack-hero.jpg" alt="شهد المعارف" style={{position:"relative",zIndex:2,width:"100%",maxWidth:420,height:360,objectFit:"cover",borderRadius:14,boxShadow:"0 20px 60px rgba(0,0,0,.4)"}}/>
        </div>

        {/* Features strip */}
        <div className="reveal" style={{gridColumn:"1/-1",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,background:"rgba(255,255,255,.06)",border:"1px solid rgba(212,167,44,.2)",borderRadius:14,padding:"20px 24px"}} className="hero-features reveal">
          {[
            ["✅", t("جودة عالية مضمونة","Guaranteed Quality")],
            ["🎨", t("تصاميم عصرية","Modern Designs")],
            ["🏫", t("لجميع المراحل","All Grades")],
            ["🤝", t("معك في كل خطوة","With You Every Step")],
          ].map(([icon, label]) => (
            <div key={label} style={{display:"flex",alignItems:"center",gap:10,color:"rgba(255,255,255,.85)",fontSize:".9rem",fontWeight:600}}>
              <div style={{width:40,height:40,background:"rgba(212,167,44,.15)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",flexShrink:0}}>{icon}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @media(max-width:900px){
          .hero-inner{grid-template-columns:1fr!important;text-align:center}
          .hero-features{grid-template-columns:repeat(2,1fr)!important}
        }
        @media(max-width:580px){
          .hero-inner a{width:100%;justify-content:center}
        }
      `}</style>
    </section>
  );
}
