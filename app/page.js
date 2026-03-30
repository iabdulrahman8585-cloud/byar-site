export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", direction: "rtl", background: "#f8fafc", color: "#111", lineHeight: "1.8" }}>

      {/* HEADER */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px" }}>ديار العقارية</h1>
        <p style={{ color: "#555", fontSize: "18px" }}>
          نقدم مشاريع سكنية فاخرة بأعلى معايير الجودة والتصميم العصري
        </p>
      </section>

      {/* HERO IMAGE */}
      <section style={{ padding: "20px", textAlign: "center" }}>
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          style={{ width: "100%", maxWidth: "900px", borderRadius: "12px" }}
        />
      </section>

      {/* PROJECT DESCRIPTION */}
      <section style={{ padding: "30px", textAlign: "center" }}>
        <h2>مشروع مثوى</h2>
        <p style={{ maxWidth: "800px", margin: "auto" }}>
          نقدم إليكم مشروع مثوى في حي الزهرة من ديار العقارية، المشروع عبارة عن 12 وحدة على شارعين 
          (10م شمالي و15م جنوبي) مع استقلالية كاملة لكل وحدة.
        </p>
      </section>

      {/* GUARANTEES */}
      <section style={{ padding: "30px" }}>
        <h2 style={{ textAlign: "center" }}>ضمانات المشروع</h2>
        <ul style={{ maxWidth: "600px", margin: "auto" }}>
          <li>المواد الصحية: 10 سنوات</li>
          <li>الهيكل الإنشائي: 10 سنوات</li>
          <li>الكهرباء: 25 سنة</li>
          <li>العزل المائي: 10 سنوات</li>
        </ul>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "30px" }}>
        <h2 style={{ textAlign: "center" }}>مميزات المشروع</h2>
        <ul style={{ maxWidth: "600px", margin: "auto" }}>
          <li>تصميم عصري وتشطيب فاخر</li>
          <li>دخول ذكي</li>
          <li>مواقف خاصة</li>
          <li>عدادات مستقلة</li>
          <li>تمديد كاميرات وانترنت</li>
          <li>تمديد غاز</li>
        </ul>
      </section>

      {/* LOCATION */}
      <section style={{ padding: "30px", textAlign: "center" }}>
        <h2>موقع المشروع</h2>
        <a href="https://maps.app.goo.gl/vb25A7vGyp5oxfby8" target="_blank">
          عرض الموقع على الخريطة
        </a>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "30px", textAlign: "center" }}>
        <h2>تواصل معنا</h2>
        <p>📞 0558200237</p>
        <a href="https://wa.me/966558200237" target="_blank">
          تواصل واتساب
        </a>
      </section>

    </main>
  );
}
