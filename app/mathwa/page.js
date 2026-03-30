export default function Mathwa() {
  return (
    <main style={{ fontFamily: "Arial", direction: "rtl", textAlign: "center" }}>

      {/* HERO (الشعار فقط) */}
      <section style={{
        height: "300px",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <img 
          src="/mathwa-logo.jpg"
          style={{ width: "200px", maxWidth: "80%" }}
        />
      </section>

      {/* TITLE */}
      <section style={{ padding: "30px 20px" }}>
        <h1 style={{ fontSize: "32px" }}>مشروع مثوى</h1>
        <p>مشروع سكني فاخر بمعايير حديثة</p>
      </section>

      {/* IMAGE (واجهة المشروع) */}
      <section>
        <img 
          src="/mathwa-cover.jpg"
          style={{ width: "100%" }}
        />
      </section>

      {/* DESCRIPTION */}
      <section style={{ padding: "60px 20px" }}>
        <h2>نبذة عن المشروع</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto" }}>
          نقدم إليكم مشروع مثوى في حي الزهرة من ديار العقارية،
          المشروع عبارة عن 12 وحدة على شارعين (10م شمالي و15م جنوبي)،
          جميع الوحدات بصكوك وعدادات وخزانات مستقلة.
        </p>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 20px", background: "#f8fafc" }}>
        <h2>مميزات المشروع</h2>

        <ul style={{ maxWidth: "800px", margin: "auto", textAlign: "right" }}>
          <li>تصميم وتشطيب عصري</li>
          <li>المصاعد جاهزة</li>
          <li>غرفة سائق للدور الأول</li>
          <li>دخول ذكي</li>
          <li>عدادات مستقلة لكل وحدة</li>
          <li>خزان مستقل لكل وحدة</li>
          <li>موقف خاص لكل وحدة</li>
          <li>أبواب خشب سويدي وقشرة جوز</li>
          <li>تمديد جاهز للكاميرات والإنترنت</li>
          <li>تمديد للغاز</li>
        </ul>
      </section>

      {/* LOCATION */}
      <section style={{ padding: "60px 20px" }}>
        <h2>مميزات الموقع</h2>

        <ul style={{ maxWidth: "800px", margin: "auto", textAlign: "right" }}>
          <li>يبعد 4 دقائق عن مستشفى الحبيب</li>
          <li>يبعد 4 دقائق عن طريق حمزة بن عبدالمطلب</li>
          <li>يبعد 6 دقائق عن حديقة الفريان</li>
          <li>يبعد 4 دقائق عن الدائري الغربي</li>
          <li>يبعد 6 دقائق عن سلام مول</li>
          <li>يبعد 6 دقائق عن محطة المترو</li>
        </ul>
      </section>

      {/* GUARANTEE */}
      <section style={{ padding: "60px 20px", background: "#f8fafc" }}>
        <h2>ضمانات المشروع</h2>

        <ul style={{ maxWidth: "800px", margin: "auto", textAlign: "right" }}>
          <li>المواد الصحية: 10 سنوات</li>
          <li>الهيكل الإنشائي: 10 سنوات (التعاونية)</li>
          <li>الكهرباء: 25 سنة</li>
          <li>العزل المائي: 10 سنوات</li>
        </ul>
      </section>

      {/* TOURS */}
      <section style={{ padding: "60px 20px" }}>
        <h2>جولات تفاعلية</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="https://tour.panoee.net/69a42bb744d1c7e11b2f66de" target="_blank">الدور الأرضي</a>
          <a href="https://tour.panoee.net/69a4f5070544472ffa62ee9a" target="_blank">الدور الأول</a>
          <a href="https://tour.panoee.net/69a514cc054447ca8662f2ea" target="_blank">الشقة</a>
        </div>
      </section>

      {/* VIDEOS */}
      <section style={{ padding: "60px 20px", background: "#f8fafc" }}>
        <h2>فيديوهات المشروع</h2>

        <video controls style={{ width: "100%", maxWidth: "800px" }}>
          <source src="https://h.top4top.io/m_3718cmboc0.mp4" />
        </video>

        <video controls style={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}>
          <source src="https://i.top4top.io/m_3718iutlt1.mp4" />
        </video>

        <video controls style={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}>
          <source src="https://j.top4top.io/m_3718tvmi42.mp4" />
        </video>
      </section>

      {/* MAP */}
      <section style={{ padding: "60px 20px" }}>
        <h2>موقع المشروع</h2>

        <a href="https://maps.app.goo.gl/vb25A7vGyp5oxfby8" target="_blank">
          عرض الموقع على الخريطة
        </a>
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
