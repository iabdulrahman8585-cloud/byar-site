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

        <img src="/logo.png.jpg" style={{ height: "45px" }} />

        <nav>
          <a href="#" style={{ margin: "0 12px", color: "#111", textDecoration: "none" }}>الرئيسية</a>
          <a href="#about" style={{ margin: "0 12px", color: "#111", textDecoration: "none" }}>من نحن</a>
          <a href="#services" style={{ margin: "0 12px", color: "#111", textDecoration: "none" }}>خدماتنا</a>
          <a href="#projects" style={{ margin: "0 12px", color: "#111", textDecoration: "none" }}>مشاريعنا</a>
          <a href="#contact" style={{ margin: "0 12px", color: "#111", textDecoration: "none" }}>تواصل</a>
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
          color: "#fff",
          textAlign: "center",
          padding: "20px"
        }}>
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
            ديار العقارية
          </h1>

          <p style={{ fontSize: "20px" }}>
            للتطوير العقاري والتسويق العقاري والحلول التمويلية
          </p>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 20px", textAlign: "center", background: "#f9fafb" }}>
        <h2 style={{ fontSize: "28px" }}>من نحن</h2>

        <p style={{ maxWidth: "800px", margin: "20px auto", lineHeight: "1.8" }}>
          ديار العقارية نتميز في التطوير العقاري العصري والتسويق الحديث للعقارات
          وتوفير الحلول التمويلية مستفيدة من قاعدة بيانات واسعة للعملاء وفريق
          خبراء لترويج المشاريع بشكل فعال وجذاب، ومخصص لتلبية احتياجات العملاء.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px" }}>خدماتنا</h2>

        <div style={{ maxWidth: "900px", margin: "30px auto" }}>

          <div style={{ background: "#fff", padding: "25px", marginBottom: "20px", borderRadius: "12px" }}>
            <h3>التطوير العقاري</h3>
            <p>تصميم وتنفيذ بأعلى معايير الجودة لتلبي جميع احتياجات الراغبين في تملك منزل الأحلام</p>
          </div>

          <div style={{ background: "#fff", padding: "25px", marginBottom: "20px", borderRadius: "12px" }}>
            <h3>التسويق العقاري</h3>
            <p>
              فريق متكامل من مسوقين بخبرات عالية وموظفين متابعة البنوك والجهات التمويلية
              بالإضافة إلى موظفين ميدانيين لجمع أفضل العروض العقارية لنلبي جميع احتياجاتكم
            </p>
          </div>

          <div style={{ background: "#fff", padding: "25px", borderRadius: "12px" }}>
            <h3>الحلول التمويلية</h3>
            <ul style={{ textAlign: "right", lineHeight: "2" }}>
              <li>توفير دفعة أولى وسداد الالتزامات بدون فوائد</li>
              <li>متابعة المعاملة حتى الإفراغ</li>
              <li>توفير عروض من جهات التمويل</li>
              <li>توفير الفائض</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "80px 20px", textAlign: "center", background: "#f9fafb" }}>
        <h2 style={{ fontSize: "28px" }}>مشاريعنا</h2>

        <div style={{ marginTop: "30px" }}>
          <img src="/mathwa-logo.jpg" style={{ width: "120px", marginBottom: "10px" }} />

          <h3>مشروع مثوى</h3>
          <p>أحد مشاريع ديار العقارية المتميزة</p>

          <a href="/mathwa" style={{
            display: "inline-block",
            marginTop: "10px",
            background: "#111",
            color: "#fff",
            padding: "12px 25px",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
            عرض المشروع
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "70px 20px",
        textAlign: "center",
        background: "#111",
        color: "#fff"
      }}>
        <h2>تواصل معنا</h2>

        <p style={{ margin: "15px 0" }}>0558200237</p>

        <a href="https://wa.me/966558200237" style={{
          background: "#25D366",
          padding: "14px 30px",
          borderRadius: "10px",
          color: "#fff",
          textDecoration: "none"
        }}>
          تواصل واتساب
        </a>
      </section>

    </main>
  );
}
