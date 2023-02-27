import React from "react";
import "./Info.scss";
import close from "../../assets/images/close.svg";

const Info = () => {
  
  return (
    <div className="info">
      <div className="container">
        <div className="info-wrap">
        <h2 className="info-title">Ko’p beriladigan savollar</h2>
          <div className="info-text-box">
            <p className="info-text">Savollaringiz qoldimi?</p>
            <button className="info-btn">Savol bermoq</button>
          </div>
          <ul className="info-list">
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Kurs uchun to’lovni qanday amalga oshiraman ?
                </strong>
              </summary>
                <p className="info-item-text">
                Istalgan to’lov turi orqali to’lovni amalga oshirib kursda
                o’qishingiz mumkin <br /> Hammasi juda oddiy va qulaydir!
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Kursni boshlash uchun qanday ko'nikmalar kerak?
                </strong>
              </summary>
              <p className="info-item-text">
                Biz siz bilan butunlay noldan boshlab ishlaymiz sizda kerakli
                ko’nikmalar <br /> shart emas
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Men oldin IT sohasida bo’lmaganman meni qo’limdan keladimi?
                </strong>
              </summary>
              <p className="info-item-text">
                Hammasi sizga va vaqtingizni qanday tashkil qilishingizga
                bog'liq, <br /> bir necha yuz talaba allaqachon bizda o'qitilgan va
                hamma <br /> narsani qilgan. Siz mashg'ulotlarga 2-3 soat ajratishingiz
                kerak, <br /> dam olish kunlarida dam olishingiz yoki ish kunlarida <br />
                bajarishga vaqtingiz bo'lmagan vazifalarni bajarishingiz mumkin.
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Kursdan keyin pul ishlashni boshlaymanmi?
                </strong>
              </summary>
              <p className="info-item-text">
                Biz sizga boshlang’ich IT-mutaxassislik uchun kerak bo'lgan
                hamma narsani beramiz, <br /> lekin barchasi sizga bog'liq{" "}
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Men kurs yakunida sertifikat olamanmi?
                </strong>
              </summary>
              <p className="info-item-text">
                Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                maktabimizdan <br /> Albatta tugatganligingiz haqida Sertifikat olasiz.
              </p>

              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Kuratorlar har bir talabani tekshiradimi?
                </strong>
              </summary>
              <p className="info-item-text">
                Ha, albatta. Bizda bir nechta tajribali o'qituvchilar,
                murabbiylar va kurs <br /> mualliflari bor, ular sizning uy
                vazifangizni tekshirishga vaqt ajratadilar. <br /> Fikr-mulohaza
                o'rganish nuqtai nazaridan bizning kuchli tomonlarimizdan
                biridir.
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Uy vazifasini tekshirish qancha vaqt oladi?
                </strong>
              </summary>
              <p className="info-item-text">
                1-3 ish kuni ichida sizga uy vazifangizning tahlilini olishingiz
                kafolatlanadi.
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Siz talabalarga ishga joylashishda yordam berasizmi?
                </strong>
              </summary>
              <p className="info-item-text">
                Kursda biz sizga o’quvchilarni qanday va qayerdan izlash
                kerakligini aytamiz. Biz ko’p hollarda <br /> ish beruvchilardan
                arizalarni qabul qilamiz va bevosita kompaniyaga <br /> ishga
                joylashtiramiz. Shuningdek, biz frilanser loyihalarni taklif
                qilamiz va <br /> Matrix IT Academy o’quv maktabida Stajor sifatida ish
                faoliyat yuritishingiz <br /> mumkin va Sajorlikdan keyin kerakli
                tartiblardan o’sangiz ishga ham qabul qilamiz
              </p>  
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Info;
