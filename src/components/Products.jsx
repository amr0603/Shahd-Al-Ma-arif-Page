import { useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import { products } from "../data/products";

function ProductCard({ item }) {
  const { t } = useLang();
  return (
    <article style={{background:"var(--w)",borderRadius:"var(--r)",boxShadow:"var(--sh)",overflow:"hidden",display:"flex",flexDirection:"column",transition:"transform .3s,box-shadow .3s",cursor:"default"}}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-8px)";e.currentTarget.style.boxShadow="0 16px 48px rgba(0,0,0,.16)"}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="var(--sh)"}}>
      <div style={{position:"relative",overflow:"hidden"}}>
        <img src={item.img} alt={t(item.nameAr,item.nameEn)} style={{width:"100%",height:200,objectFit:"cover",display:"block",transition:"transform .4s"}}
          onMouseEnter={e=>e.target.style.transform="scale(1.07)"}
          onMouseLeave={e=>e.target.style.transform=""}/>
        {(t(item.badgeAr,item.badgeEn)) && (
          <span style={{position:"absolute",top:12,left:12,background:"var(--gold)",color:"var(--g)",fontSize:".75rem",fontWeight:700,padding:"4px 10px",borderRadius:20}}>
            {t(item.badgeAr,item.badgeEn)}
          </span>
        )}
      </div>
      <div style={{padding:20,display:"flex",flexDirection:"column",flex:1}}>
        <h3 style={{fontSize:"1.05rem",fontWeight:700,color:"var(--g)",marginBottom:6}}>{t(item.nameAr,item.nameEn)}</h3>
        <p style={{fontSize:".85rem",color:"var(--tm)",marginBottom:12,flex:1}}>{t(item.descAr,item.descEn)}</p>
        <p style={{fontSize:"1rem",fontWeight:900,color:"var(--gold)",marginBottom:16}}>{t(item.priceAr,item.priceEn)}</p>
        <a href="#contact" style={{background:"var(--g)",color:"var(--w)",padding:10,borderRadius:8,textAlign:"center",fontWeight:700,fontSize:".9rem",display:"block",transition:"background .3s"}}
          onMouseEnter={e=>e.target.style.background="var(--gm)"}
          onMouseLeave={e=>e.target.style.background="var(--g)"}>
          {t("اطلب الآن","Order Now")}
        </a>
      </div>
    </article>
  );
}

export default function Products() {
  const { t } = useLang();
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);} }), {threshold:0.1});
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="products" ref={ref} style={{padding:"90px 5%",background:"var(--cream)"}}>
      <div className="reveal" style={{textAlign:"center",marginBottom:56}}>
        <p style={{display:"inline-block",color:"var(--gold)",fontWeight:700,fontSize:".85rem",letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>
          {t("🌟 موسم الدراسة 2026","🌟 School Season 2026")}
        </p>
        <h2 style={{fontSize:"clamp(1.6rem,4vw,2.4rem)",fontWeight:900,color:"var(--g)",marginBottom:12}}>
          {t("عروض الرجوع للمدارس 🎒","Back to School Deals 🎒")}
        </h2>
        <p style={{color:"var(--tm)",fontSize:"1rem",maxWidth:540,margin:"0 auto"}}>
          {t("كل اللي محتاجه في مدرستك الجديدة، بأفضل الأسعار وأعلى جودة","Everything you need — best prices & top quality")}
        </p>
      </div>

      <div className="reveal" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:28,maxWidth:1200,margin:"0 auto 48px"}}>
        {products.map(p => <ProductCard key={p.id} item={p}/>)}
      </div>

      {/* Promo Banner */}
      <div className="reveal" style={{maxWidth:1200,margin:"0 auto",background:"linear-gradient(135deg,var(--gold) 0%,var(--gl) 100%)",borderRadius:"var(--r)",padding:"32px 40px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:24,flexWrap:"wrap",boxShadow:"0 8px 32px rgba(212,167,44,.35)"}}>
        <div>
          <p style={{fontSize:".8rem",fontWeight:700,color:"var(--g)",opacity:.7,marginBottom:4,textTransform:"uppercase",letterSpacing:2}}>
            {t("🔥 عرض لفترة محدودة","🔥 Limited Time Offer")}
          </p>
          <h3 style={{fontSize:"clamp(1.3rem,3vw,1.9rem)",fontWeight:900,color:"var(--g)",marginBottom:6}}>
            {t("خصم 20% على كل الحقائب المدرسية","20% OFF on All School Bags")}
          </h3>
          <p style={{color:"var(--g)",fontSize:".95rem",opacity:.8}}>
            {t("استغل العرض قبل بداية الدراسة — الكميات محدودة!","Grab the deal before school starts — limited stock!")}
          </p>
        </div>
        <a href="#contact" style={{background:"var(--g)",color:"var(--w)",padding:"14px 36px",borderRadius:40,fontWeight:700,fontSize:"1rem",whiteSpace:"nowrap",transition:"background .3s,transform .3s"}}
          onMouseEnter={e=>{e.target.style.background="#0a2e22";e.target.style.transform="scale(1.04)"}}
          onMouseLeave={e=>{e.target.style.background="var(--g)";e.target.style.transform=""}}>
          {t("احجز حصتك الآن","Book Your Order Now")}
        </a>
      </div>
    </section>
  );
}