import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name:"", phone:"", product:"", notes:"" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);} }), {threshold:0.1});
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const categories = [
    { v:"books",     ar:"كتب مدرسية",          en:"School Books" },
    { v:"supplies",  ar:"أدوات مكتبية",         en:"Stationery" },
    { v:"notebooks", ar:"كراسات ودفاتر",        en:"Notebooks" },
    { v:"bags",      ar:"حقائب مدرسية",         en:"School Bags" },
    { v:"colors",    ar:"ألوان وفنون",           en:"Colors & Arts" },
    { v:"teacher",   ar:"لوازم المعلمين",        en:"Teacher Supplies" },
    { v:"gifts",     ar:"هدايا وإكسسوارات",     en:"Gifts & Accessories" },
    { v:"other",     ar:"أخرى",                 en:"Other" },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    const errs = {};
    if(!form.name.trim()) errs.name = true;
    if(!form.phone.trim()) errs.phone = true;
    if(Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSuccess(true);
    setForm({ name:"", phone:"", product:"", notes:"" });
    setTimeout(() => setSuccess(false), 5000);
  };

  const inputStyle = (err) => ({
    width:"100%",padding:"12px 16px",borderRadius:10,
    border: err ? "1.5px solid #e74c3c" : "1.5px solid rgba(255,255,255,.15)",
    background:"rgba(255,255,255,.08)",color:"var(--w)",
    fontFamily:"Cairo,sans-serif",fontSize:".95rem",outline:"none",
    direction: lang === "ar" ? "rtl" : "ltr",
    transition:"border-color .3s,background .3s",
  });

  const labelStyle = { display:"block",fontWeight:600,color:"rgba(255,255,255,.85)",marginBottom:8,fontSize:".9rem" };

  return (
    <section id="contact" ref={ref} style={{padding:"90px 5%",background:"var(--g)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-100,left:-100,width:400,height:400,background:"radial-gradient(circle,rgba(212,167,44,.08) 0%,transparent 70%)",borderRadius:"50%",pointerEvents:"none"}}/>

      <div className="reveal" style={{textAlign:"center",marginBottom:56,position:"relative",zIndex:1}}>
        <p style={{display:"inline-block",color:"var(--gl)",fontWeight:700,fontSize:".85rem",letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>
          {t("📞 تواصل معنا","📞 Contact Us")}
        </p>
        <h2 style={{fontSize:"clamp(1.6rem,4vw,2.4rem)",fontWeight:900,color:"var(--w)",marginBottom:12}}>
          {t("اطلب دلوقتي وهنجهزلك طلبك 🚀","Order Now & We'll Prepare It For You 🚀")}
        </h2>
        <p style={{color:"rgba(255,255,255,.65)",fontSize:"1rem",maxWidth:540,margin:"0 auto"}}>
          {t("املي الفورم وهنتواصل معاك في أقرب وقت","Fill the form and we will contact you ASAP")}
        </p>
      </div>

      <div style={{position:"relative",zIndex:1,maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"start"}} className="contact-grid">

        {/* Form */}
        <div className="reveal" style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(212,167,44,.2)",borderRadius:"var(--r)",padding:36}}>
          <form onSubmit={handleSubmit} noValidate>
            <div style={{marginBottom:20}}>
              <label style={labelStyle}>{t("👤 الاسم الكامل *","👤 Full Name *")}</label>
              <input type="text" value={form.name} placeholder={t("مثال: أحمد محمد","e.g. Ahmed Mohamed")}
                onChange={e=>setForm({...form,name:e.target.value})} style={inputStyle(errors.name)}/>
            </div>
            <div style={{marginBottom:20}}>
              <label style={labelStyle}>{t("📱 رقم الهاتف *","📱 Phone Number *")}</label>
              <input type="tel" value={form.phone} placeholder="01xxxxxxxxx" dir="ltr"
                onChange={e=>setForm({...form,phone:e.target.value})} style={{...inputStyle(errors.phone),direction:"ltr"}}/>
            </div>
            <div style={{marginBottom:20}}>
              <label style={labelStyle}>{t("🛍️ الفئة المطلوبة","🛍️ Category")}</label>
              <select value={form.product} onChange={e=>setForm({...form,product:e.target.value})} style={inputStyle(false)}>
                <option value="">{t("-- اختر --","-- Select --")}</option>
                {categories.map(c => <option key={c.v} value={c.v}>{t(c.ar,c.en)}</option>)}
              </select>
            </div>
            <div style={{marginBottom:20}}>
              <label style={labelStyle}>{t("📝 ملاحظات (اختياري)","📝 Notes (optional)")}</label>
              <textarea value={form.notes} placeholder={t("اكتب تفاصيل طلبك هنا...","Write your order details here...")}
                onChange={e=>setForm({...form,notes:e.target.value})}
                style={{...inputStyle(false),resize:"vertical",minHeight:110}}/>
            </div>
            <button type="submit" style={{width:"100%",background:"var(--gold)",color:"var(--g)",padding:15,border:"none",borderRadius:40,fontSize:"1.05rem",fontWeight:700,cursor:"pointer",transition:"background .3s,transform .3s"}}
              onMouseEnter={e=>{e.target.style.background="var(--gl)";e.target.style.transform="translateY(-2px)"}}
              onMouseLeave={e=>{e.target.style.background="var(--gold)";e.target.style.transform=""}}>
              {t("✉️ أرسل طلبي الآن","✉️ Send My Order Now")}
            </button>
            {success && (
              <div style={{background:"rgba(212,167,44,.15)",border:"1.5px solid var(--gold)",color:"var(--gold)",padding:"16px 20px",borderRadius:10,textAlign:"center",fontWeight:700,fontSize:".95rem",marginTop:20}}>
                {t("✅ تم استلام طلبك بنجاح! هنتواصل معاك قريبًا 🎉","✅ Order received! We will contact you soon 🎉")}
              </div>
            )}
          </form>
        </div>

        {/* Info */}
        <div className="reveal">
          <h3 style={{fontSize:"1.5rem",fontWeight:900,color:"var(--w)",marginBottom:8}}>{t("كلمنا مباشرة 👋","Contact Us Directly 👋")}</h3>
          <p style={{color:"rgba(255,255,255,.6)",fontSize:".95rem",marginBottom:36}}>{t("متترددش — هنرد عليك بأسرع وقت ممكن","Don't hesitate — we reply as fast as possible")}</p>

          {[
            { icon:"📱", titleAr:"واتساب / تليفون", titleEn:"WhatsApp / Phone", val:"01110164098", ltr:true },
            { icon:"📍", titleAr:"العنوان",          titleEn:"Address",         valAr:"المنيا - بني مزار", valEn:"Minya - Bani Mazar" },
            { icon:"🕐", titleAr:"ساعات العمل",       titleEn:"Working Hours",   valAr:"يوميًا 8ص – 10م", valEn:"Daily 8 AM – 10 PM" },
          ].map((item, i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:14,marginBottom:22}}>
              <div style={{width:48,height:48,background:"rgba(212,167,44,.15)",border:"1px solid rgba(212,167,44,.3)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",flexShrink:0}}>
                {item.icon}
              </div>
              <div>
                <strong style={{display:"block",color:"var(--gold)",fontWeight:700,fontSize:".85rem"}}>{t(item.titleAr,item.titleEn)}</strong>
                <span style={{fontSize:".95rem",color:"rgba(255,255,255,.85)",direction:item.ltr?"ltr":"inherit",display:"inline-block"}}>{item.val || t(item.valAr,item.valEn)}</span>
              </div>
            </div>
          ))}

          <p style={{color:"rgba(255,255,255,.7)",fontSize:".9rem",fontWeight:600,marginBottom:14,marginTop:32}}>{t("تابعونا على السوشيال ميديا:","Follow us on social media:")}</p>
          <div style={{display:"flex",gap:14}}>
            {[
              { href:"#", bg:"#1877f2", icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
              { href:"#", bg:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
              { href:"https://wa.me/+201110164098", bg:"#25d366", icon:<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{width:48,height:48,borderRadius:"50%",background:s.bg,display:"flex",alignItems:"center",justifyContent:"center",transition:"transform .3s"}}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-4px)"}
                onMouseLeave={e=>e.currentTarget.style.transform=""}>{s.icon}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
    </section>
  );
}