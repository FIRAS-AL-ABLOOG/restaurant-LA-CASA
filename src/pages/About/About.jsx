import React from "react";

import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <span>OUR STORY</span>

        <h1>
          أكثر من مجرد
          <br />
          مطعم
        </h1>

      </section>

      <section className="about-content">

        <div>

          <span>LA CASA</span>

          <h2>
            مكان يجمع الطعام
            والناس والذكريات.
          </h2>

        </div>

        <div>

          <p>
            تأسس مطعم LA CASA ليكون مكاناً يجتمع فيه
            الأصدقاء والعائلات حول الطعام الجيد.
          </p>

          <p>
            نقدم المأكولات الغربية والبيتزا والمقبلات
            والمشروبات والكوكتيلات، مع التركيز على
            جودة المكونات وطريقة التقديم.
          </p>

          <p>
            هدفنا بسيط:
            أن تغادر المطعم وأنت تريد العودة مرة أخرى.
          </p>

        </div>

      </section>

      <section className="about-values">

        <div>
          <strong>01</strong>
          <h3>جودة</h3>
          <p>
            مكونات مختارة بعناية.
          </p>
        </div>

        <div>
          <strong>02</strong>
          <h3>طعم</h3>
          <p>
            وصفات محضرة بحب.
          </p>
        </div>

        <div>
          <strong>03</strong>
          <h3>تجربة</h3>
          <p>
            تفاصيل تجعل الزيارة مختلفة.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;