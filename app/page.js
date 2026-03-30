export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", direction: "rtl", background: "#ffffff", color: "#111" }}>

      {/* NAVBAR */}
      <section style={{ padding: "20px 40px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
        <h2>ديار العقارية</h2>
        <div>
          <a href="#" style={{ margin: "0 10px" }}>الرئيسية</a>
          <a href="#" style={{ margin: "0 10px" }}>المشاريع</a>
          <a href="#" style={{ margin: "0 10px" }}>من نحن</a>
          <a href="#" style={{ margin: "0 10px" }}>تواصل</a>
        </div>
      </section>

      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#f8fafc" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          ديار العقارية
        </h1>
        <p style={{ fontSize: "20px", color: "#555", maxWidth: "700px", margin: "auto" }}>
          التطوير والتسويق العقاري والحلول التمويلية بأعلى معايير الجودة والتصميم العصري
        </p>
      </section>

      {/* IMAGE */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          style={{ width: "100%", maxWidth: "1000px", borderRadius: "16px" }}
        />
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>من نحن</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", color: "#555" }}>
          شركة ديار العقارية تقدم خدمات متكاملة في التطوير والتسويق العقاري والحلول التمويلية،
          ونحرص على تقديم مشاريع عالية الجودة تلبي تطلعات عملائنا.
        </p>
      </section>

      {/* PROJECT */}
      <section style={{ padding: "60px 20px", background: "#f8fafc" }}>
        <h2 style={{ textAlign: "center" }}>مشروع مثوى</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", textAlign: "center" }}>
          نقدم إليكم مشروع مثوى في حي الزهرة، المشروع عبارة عن 12 وحدة سكنية
          على شارعين مع استقلالية كاملة لكل وحدة.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center" }}>خدماتنا</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "600px", margin: "auto" }}>
          <div>التطوير العقاري</div>
          <div>التسويق العقاري</div>
          <div>الحلول التمويلية</div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#111", color: "#fff" }}>
        <h2>تواصل معنا</h2>
        <p>📞 0558200237</p>
        <a href="https://wa.me/966558200237" style={{ color: "#4ade80" }}>
          واتساب
        </a>
      </section>

    </main>
  );
}
