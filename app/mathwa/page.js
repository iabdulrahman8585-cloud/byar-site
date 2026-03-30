export default function Mathwa() {
  return (
    <main style={{ fontFamily: "Arial", direction: "rtl", textAlign: "center" }}>

      {/* HERO */}
      <section style={{
        position: "relative",
        height: "450px",
        backgroundImage: "url('/mathwa-cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)"
        }}></div>

        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff"
        }}>
          <h1 style={{ fontSize: "40px" }}>مشروع مثوى</h1>
          <p style={{ fontSize: "18px" }}>مشروع سكني فاخر بمعايير حديثة</p>
        </div>
      </section>

      {/* DETAILS */}
      <section style={{ padding: "60px 20px" }}>
        <h2>تفاصيل المشروع</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto" }}>
          مشروع مثوى هو أحد مشاريع ديار العقارية في حي الزهرة، يتميز بتصميم عصري وجودة عالية
          ومساحات مدروسة لتناسب جميع احتياجات العائلة السعودية.
        </p>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "60px 20px", background: "#f8fafc" }}>
        <h2>صور المشروع</h2>

        <img
          src="/mathwa-cover.jpg"
          style={{ width: "100%", maxWidth: "900px", borderRadius: "10px", marginTop: "20px" }}
        />
      </section>

      {/* CONTACT */}
      <section style={{
        padding: "60px 20px",
        background: "#111",
        color: "#fff"
      }}>
        <h2>تواصل معنا</h2>
        <p>0558200237</p>

        <a href="https://wa.me/966558200237" style={{
          background: "#25D366",
          padding: "12px 25px",
          borderRadius: "8px",
          color: "#fff",
          display: "inline-block",
          marginTop: "10px"
        }}>
          تواصل واتساب
        </a>
      </section>

    </main>
  );
}
