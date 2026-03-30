export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", direction: "rtl", background: "#f8fafc" }}>

      {/* NAVBAR */}
      <section style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <img src="/logo.png.jpg" style={{ height: "50px" }} />

        <div>
          <a href="#" style={{ margin: "0 10px" }}>الرئيسية</a>
          <a href="#about" style={{ margin: "0 10px" }}>من نحن</a>
          <a href="#services" style={{ margin: "0 10px" }}>خدماتنا</a>
          <a href="#projects" style={{ margin: "0 10px" }}>مشاريعنا</a>
          <a href="#contact" style={{ margin: "0 10px" }}>تواصل</a>
        </div>
      </section>

      {/* HERO */}
      <section style={{
        position: "relative",
        height: "500px",
        backgroundImage: "url('/mathwa-cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)"
        }}></div>

        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "42px" }}>ديار العقارية</h1>
          <p style={{ fontSize: "20px" }}>
            للتطوير العقاري والتسويق العقاري والحلول التمويلية
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>من نحن</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto" }}>
          ديار العقارية نتميز في التطوير العقاري العصري والتسويق الحديث للعقارات
          وتوفير الحلول التمويلية مستفيدة من قاعدة بيانات واسعة للعملاء وفريق
          خبراء لترويج المشاريع بشكل فعال وجذاب، ومخصص لتلبية احتياجات العملاء.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>خدماتنا</h2>

        <div style={{ maxWidth: "900px", margin: "30px auto" }}>

          <div style={{ background: "#fff", padding: "20px", marginBottom: "20px", borderRadius: "10px" }}>
            <h3>التطوير العقاري</h3>
            <p>
              تصميم وتنفيذ بأعلى معايير الجودة لتلبي جميع احتياجات الراغبين في تملك منزل الأحلام
            </p>
          </div>

          <div style={{ background: "#fff", padding: "20px", marginBottom: "20px", borderRadius: "10px" }}>
            <h3>التسويق العقاري</h3>
            <p>
              فريق متكامل من مسوقين بخبرات عالية وموظفين متابعة البنوك والجهات التمويلية
              لتسهيل الإجراءات التمويلية بالإضافة إلى موظفين ميدانيين لجمع أفضل العروض العقارية
              لنلبي جميع احتياجاتكم
            </p>
          </div>

          <div style={{ background: "#fff", padding: "20px", borderRadius: "10px" }}>
            <h3>الحلول التمويلية</h3>
            <ul style={{ textAlign: "right" }}>
              <li>توفير دفعة أولى وسداد الالتزامات بدون فوائد</li>
              <li>متابعة المعاملة مع جميع الجهات ذات العلاقة حتى الإفراغ</li>
              <li>توفير عروض من البنوك وشركات التمويل للمقارنة</li>
              <li>توفير الفائض</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>مشاريعنا</h2>

        <div style={{ marginTop: "30px" }}>
          <img src="/mathwa-logo.jpg" style={{ width: "120px" }} />
          <h3>مشروع مثوى</h3>
          <p>أحد مشاريع ديار العقارية المتميزة</p>

          <a href="/mathwa" style={{
            display: "inline-block",
            marginTop: "10px",
            background: "#111",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px"
          }}>
            عرض المشروع
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "60px 20px",
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
          color: "#fff",
          display: "inline-block"
        }}>
          تواصل واتساب
        </a>
      </section>

    </main>
  );
}
