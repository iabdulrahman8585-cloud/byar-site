export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", direction: "rtl", margin: 0 }}>

      {/* NAVBAR */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 999,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>

        <h2 style={{ margin: 0 }}>ديار العقارية</h2>

        <nav>
          <a href="#" style={{ margin: "0 12px" }}>الرئيسية</a>
          <a href="#about" style={{ margin: "0 12px" }}>من نحن</a>
          <a href="#services" style={{ margin: "0 12px" }}>خدماتنا</a>
          <a href="#projects" style={{ margin: "0 12px" }}>مشاريعنا</a>
          <a href="#contact" style={{ margin: "0 12px" }}>تواصل</a>
        </nav>

      </header>

      {/* HERO */}
      <section style={{
        position: "relative",
        height: "90vh",
        backgroundImage: "url('/mathwa-cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)"
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
          <h1 style={{ fontSize: "48px" }}>ديار العقارية</h1>
          <p>للتطوير العقاري والتسويق العقاري والحلول التمويلية</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>من نحن</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto" }}>
          ديار العقارية نتميز في التطوير العقاري العصري والتسويق الحديث للعقارات
          وتوفير الحلول التمويلية مستفيدة من قاعدة بيانات واسعة للعملاء وفريق
          خبراء لترويج المشاريع بشكل فعال وجذاب.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>خدماتنا</h2>

        <div style={{ maxWidth: "900px", margin: "30px auto" }}>

          <div style={{ background: "#fff", padding: "20px", marginBottom: "20px", borderRadius: "10px" }}>
            <h3>التطوير العقاري</h3>
            <p>تصميم وتنفيذ بأعلى معايير الجودة</p>
          </div>

          <div style={{ background: "#fff", padding: "20px", marginBottom: "20px", borderRadius: "10px" }}>
            <h3>التسويق العقاري</h3>
            <p>فريق متكامل بخبرات عالية لتسويق العقارات</p>
          </div>

          <div style={{ background: "#fff", padding: "20px", borderRadius: "10px" }}>
            <h3>الحلول التمويلية</h3>
            <ul style={{ textAlign: "right" }}>
              <li>دفعة أولى بدون فوائد</li>
              <li>متابعة المعاملة</li>
              <li>أفضل عروض التمويل</li>
              <li>توفير الفائض</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECT */}
      <section id="projects" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>مشاريعنا</h2>

        <img src="/mathwa-logo.jpg" style={{ width: "120px" }} />

        <h3>مشروع مثوى</h3>
        <p>أحد مشاريع ديار العقارية</p>

        <a href="/mathwa" style={{
          background: "#111",
          color: "#fff",
          padding: "12px 25px",
          borderRadius: "8px",
          display: "inline-block",
          marginTop: "10px"
        }}>
          عرض المشروع
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "60px",
        textAlign: "center",
        background: "#111",
        color: "#fff"
      }}>
        <h2>تواصل معنا</h2>
        <p>0558200237</p>

        <a href="https://wa.me/966558200237" style={{
          background: "#25D366",
          padding: "12px 25px",
          borderRadius: "8px",
          color: "#fff"
        }}>
          تواصل واتساب
        </a>
      </section>

    </main>
  );
}
