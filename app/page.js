export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", direction: "rtl", background: "#f1f5f9", color: "#111" }}>

      {/* HERO */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "white" }}>
        <h1 style={{ fontSize: "42px" }}>مشروع مثوى</h1>
        <p style={{ color: "#555", fontSize: "18px" }}>
          مشروع سكني فاخر في حي الزهرة من ديار العقارية
        </p>

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          style={{ width: "100%", maxWidth: "900px", borderRadius: "16px", marginTop: "30px" }}
        />
      </section>

      {/* DESCRIPTION */}
      <section style={{ padding: "30px", textAlign: "center" }}>
        <p style={{ maxWidth: "800px", margin: "auto", fontSize: "18px" }}>
          نقدم إليكم مشروع مثوى في حي الزهرة من ديار العقارية .. المشروع عبارة عن 12 وحدة على شارعين متظاهرة شارع 10م شمالي وشارع 15م جنوبي، جميع الوحدات بصكوك وعدادات وخزانات مستقلة ..
        </p>
      </section>

      {/* GUARANTEES */}
      <section style={{ padding: "30px" }}>
        <h2 style={{ textAlign: "center" }}>ضمانات المشروع</h2>
        {[
          "المواد الصحية 10 سنوات",
          "الهيكل الإنشائي 10 سنوات",
          "الكهرباء 25 سنة",
          "العزل المائي 10 سنوات"
        ].map((item, i) => (
          <div key={i} style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "10px"
          }}>
            {item}
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "30px" }}>
        <h2 style={{ textAlign: "center" }}>مميزات المشروع</h2>
        {[
          "تصميم عصري",
          "مصاعد",
          "دخول ذكي",
          "مواقف خاصة",
          "عدادات مستقلة",
          "خزانات مستقلة"
        ].map((item, i) => (
          <div key={i} style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "10px"
          }}>
            {item}
          </div>
        ))}
      </section>

      {/* TOURS */}
      <section style={{ padding: "30px", textAlign: "center" }}>
        <h2>جولات المشروع</h2>
        <a href="https://tour.panoee.net/69a42bb744d1c7e11b2f66de" target="_blank">الدور الارضي</a><br/>
        <a href="https://tour.panoee.net/69a4f5070544472ffa62ee9a" target="_blank">الدور الاول</a><br/>
        <a href="https://tour.panoee.net/69a514cc054447ca8662f2ea" target="_blank">الشقة</a>
      </section>

      {/* VIDEOS */}
      <section style={{ padding: "30px" }}>
        <h2 style={{ textAlign: "center" }}>فيديوهات المشروع</h2>

        <video controls style={{ width: "100%", marginTop: "10px" }}>
          <source src="https://h.top4top.io/m_3718cmboc0.mp4" />
        </video>

        <video controls style={{ width: "100%", marginTop: "10px" }}>
          <source src="https://i.top4top.io/m_3718iutlt1.mp4" />
        </video>

        <video controls style={{ width: "100%", marginTop: "10px" }}>
          <source src="https://j.top4top.io/m_3718tvmi42.mp4" />
        </video>
      </section>

      {/* MAP */}
      <section style={{ padding: "30px", textAlign: "center" }}>
        <h2>موقع المشروع</h2>
        <a href="https://maps.app.goo.gl/vb25A7vGyp5oxfby8" target="_blank">
          فتح الموقع على الخريطة
        </a>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "40px", textAlign: "center", background: "#111", color: "white" }}>
        <h2>تواصل معنا</h2>
        <p>0558200237</p>

        <a href="https://wa.me/966558200237" target="_blank" style={{
          background: "#25D366",
          padding: "12px 20px",
          borderRadius: "8px",
          color: "white",
          display: "inline-block",
          marginTop: "10px"
        }}>
          واتساب
        </a>
      </section>

    </main>
  );
}
