export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", direction: "rtl", textAlign: "right", background: "#f8fafc", color: "#111", lineHeight: "1.8" }}>

      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          مشروع مثوى
        </h1>
        <p style={{ color: "#555" }}>
          مشروع سكني فاخر في حي الزهرة من ديار العقارية
        </p>
      </section>

      <section style={{ padding: "20px" }}>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" style={{ width: "100%", borderRadius: "12px" }} />
      </section>

      <section style={{ padding: "20px" }}>
        <h2>تفاصيل المشروع</h2>
        <p>
          نقدم إليكم مشروع مثوى في حي الزهرة من ديار العقارية، تصميم عصري وموقع مميز وخدمات متكاملة.
        </p>
      </section>

      <section style={{ padding: "20px" }}>
        <h2>تواصل معنا</h2>
        <p>📞 0558200237</p>
        <a href="https://wa.me/966558200237" target="_blank">
          تواصل واتساب
        </a>
      </section>

    </main>
  );
}
