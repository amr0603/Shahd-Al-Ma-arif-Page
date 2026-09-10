import { useLang } from "../context/LangContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer style={{background:"#061e15",padding:"32px 5%",textAlign:"center",color:"rgba(255,255,255,.45)",fontSize:".85rem"}}>
      <div style={{fontSize:"1.2rem",fontWeight:900,color:"var(--gold)",marginBottom:8}}>📚 شهد المعارف | Shahd Al-Maarif</div>
      <div style={{marginBottom:16,fontStyle:"italic"}}>{t("مستقبلك بيبدأ من هنا · المنيا - بني مزار","Your future starts here · Minya - Bani Mazar")}</div>
      <p>
        <span>{t("جميع الحقوق محفوظة","All Rights Reserved")}</span> © {new Date().getFullYear()} ·{" "}
        <a href="tel:01110164098" style={{color:"var(--gold)"}}>01110164098</a> ·{" "}
        <a href="#hero" style={{color:"var(--gold)"}}>{t("العودة للأعلى ↑","Back to Top ↑")}</a>
      </p>
    </footer>
  );
}