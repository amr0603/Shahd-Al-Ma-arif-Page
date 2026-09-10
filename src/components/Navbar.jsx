import { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#hero",     ar: "الرئيسية",  en: "Home" },
    { href: "#products", ar: "المنتجات",  en: "Products" },
    { href: "#gifts",    ar: "الهدايا",   en: "Gifts" },
    { href: "#contact",  ar: "تواصل معنا", en: "Contact" },
  ];

  const navStyle = {
    position:"fixed",top:0,right:0,left:0,zIndex:1000,
    background: scrolled ? "rgba(14,61,46,0.97)" : "var(--g)",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    padding:"0 5%",display:"flex",alignItems:"center",
    justifyContent:"space-between",height:70,
    boxShadow:"0 2px 16px rgba(0,0,0,.3)",gap:12,
    transition:"background .3s ease",
  };

  return (
    <nav style={navStyle}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:44,height:44,background:"var(--gold)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem"}}>📚</div>
        <div style={{display:"flex",flexDirection:"column",lineHeight:1.2}}>
          <span style={{fontSize:"1.05rem",fontWeight:900,color:"var(--gold)"}}>شهد المعارف</span>
          <span style={{fontSize:".65rem",color:"rgba(255,255,255,.7)",fontStyle:"italic",fontFamily:"Playfair Display, serif"}}>Bookshop & School Supplies</span>
        </div>
      </div>

      <ul style={{display:"flex",gap:22,margin:"0 auto"}} className="nav-links-desktop">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}
               style={{color:"rgba(255,255,255,.85)",fontWeight:600,fontSize:".9rem",transition:"color .3s"}}
               onMouseEnter={e=>e.target.style.color="var(--gold)"}
               onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.85)"}>
              {t(l.ar, l.en)}
            </a>
          </li>
        ))}
      </ul>

      <div style={{display:"flex",alignItems:"center",gap:10}}>
        {/* Language Toggle */}
        <div style={{display:"flex",border:"1.5px solid var(--gold)",borderRadius:25,overflow:"hidden",flexShrink:0}}>
          {["ar","en"].map(l => (
            <button key={l} onClick={() => setLang(l)}
              style={{background: lang===l ? "var(--gold)" : "transparent",color: lang===l ? "var(--g)" : "var(--gold)",border:"none",padding:"5px 14px",fontSize:".82rem",fontWeight:700,transition:"background .3s,color .3s"}}>
              {l==="ar" ? "عربي" : "EN"}
            </button>
          ))}
        </div>

        <a href="#contact" style={{background:"var(--gold)",color:"var(--g)",padding:"8px 18px",borderRadius:25,fontWeight:700,fontSize:".85rem",whiteSpace:"nowrap"}}>
          {t("اطلب دلوقتي 🎒", "Order Now 🎒")}
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu"
          style={{display:"none",flexDirection:"column",gap:5,background:"none",border:"none",padding:4}} className="hamburger-btn">
          {[0,1,2].map(i => <span key={i} style={{display:"block",width:26,height:3,background:"var(--gold)",borderRadius:3}}/>)}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{position:"fixed",top:70,right:0,left:0,background:"var(--g)",padding:"20px 5%",display:"flex",flexDirection:"column",gap:16,borderTop:"1px solid rgba(212,167,44,.2)",boxShadow:"0 8px 20px rgba(0,0,0,.3)"}}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               style={{color:"rgba(255,255,255,.85)",fontWeight:600,fontSize:"1rem"}}>
              {t(l.ar, l.en)}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .nav-links-desktop{display:none!important}
          .hamburger-btn{display:flex!important}
        }
      `}</style>
    </nav>
  );
}
