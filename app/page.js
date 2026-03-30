export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", direction: "rtl", background: "#f4f6f8", color: "#111" }}>

      {/* NAVBAR */}
      <section style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <img src="./IMG_1766.jpeg" style={{ height: "50px" }} />
        <div>
          <a href="#" style={{ margin: "0 12px" }}>الرئيسية</a>
          <a href="#" style={{ margin: "0 12px" }}>من نحن</a>
          <a href="#" style={{ margin: "0 12px" }}>خدماتنا</a>
          <a href="#" style={{ margin: "0 12px" }}>مشاريعنا</a>
          <a href="#" style={{ margin: "0 12px" }}>تواصل</a>
        </div>
      </section>

      {/* HERO */}
      <section style={{
        position: "relative",
        height: "450px",
        backgroundImage: "url('./IMG_1783.jpeg')",
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
          color: "#fff",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "42px" }}>ديار العقارية</h1>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>
            للتطوير والتسويق العقاري والحلول التمويلية
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>من نحن</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", color: "#555" }}>
          ديار العقارية نتميز في التطوير العقاري العصري والتسويق الحديث للعقارات وتوفير الحلول التمويلية، مستفيدين من قاعدة بيانات واسعة للعملاء وفريق خبراء لترويج المشاريع بشكل فعال وجذاب، ومخصص لتلبية احتياجات العملاء.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "70px 20px", background: "#ffffff" }}>
        <h2 style={{ textAlign: "center" }}>خدماتنا</h2>

        <div style={{ maxWidth: "900px", margin: "30px auto", display: "grid", gap: "20px" }}>

          <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px" }}>
            <h3>التطوير العقاري</h3>
            <p>تصميم وتنفيذ بأعلى معايير الجودة لتلبي جميع احتياجات الراغبين في تملك منزل الأحلام</p>
          </div>

          <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px" }}>
            <h3>التسويق العقاري</h3>
            <p>
              فريق متكامل من مسوقين بخبرات عالية وموظفين متابعة البنوك والجهات التمويلية لتسهيل الإجراءات التمويلية،
              بالإضافة إلى موظفين ميدانيين لجمع أفضل العروض العقارية بأعلى المواصفات والأسعار، لنلبي جميع احتياجاتكم
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px" }}>
            <h3>الحلول التمويلية</h3>
            <ul>
              <li>توفير دفعة أولى وسداد للالتزامات بدون فوائد</li>
              <li>متابعة المعاملة مع جميع الجهات ذات العلاقة حتى الإفراغ</li>
              <li>توفير محتسب من البنوك وشركات التمويل</li>
              <li>توفير الفائض</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>مشاريعنا</h2>

        <div style={{ marginTop: "30px" }}>
          <img src="./IMG_1765.jpeg" style={{ height: "70px", marginBottom: "15px" }} />
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
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#111",
        color: "#fff"
      }}>
        <h2>تواصل معنا</h2>
        <p>📞 0558200237</p>
        <a href="https://wa.me/966558200237" style={{
          background: "#25D366",
          padding: "12px 20px",
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
