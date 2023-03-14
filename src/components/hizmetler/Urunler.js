import "./Urunler.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";
import Hydrafacial from "./cihazImage/hydrafacial.webp";
import Hydrafacial2 from "./cihazImage/hydra2.webp";
import Diode from "./cihazImage/liparisCihaz.webp";
import Baslik from "./cihazImage/baslik.webp";
import Magic from "./cihazImage/magicSlim.webp";
import CiltAnaliz from "./cihazImage/ciltAnaliz.webp";

export default function Urunler() {
  useDocumentTitle("Erzurum Güzellik Merkezi - Lazer Epilasyon");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <Title page_title="Cihazlarımız" />
        <div class="open">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Orijinal Diode Lazer
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div>
                    <img
                      class="accPho"
                      alt=""
                      src={Diode}
                      style={{ width: "30%", height: "500px" }}
                    ></img>
                    <p class="urunbaslik">
                      MİKROSKOP ASİSTANLI LAZER EPİLASYON CİHAZI
                    </p>
                    <p class="urunyazi">
                      Orjinal 808-810 nanometre Diode Lazer Kullanıyoruz. IPL
                      Değil. 808-810 nm Dalga Boyuna Sahip Diode Lazerimiz
                      Alexandrete ve Buz Lazere Göre Daha Derine İner. Koyu ve
                      Açık Renklerde Bile Etkili Olup Dört Mevsim Lazer
                      Uygulaması Yapabilme İmkanı Sağlar. Jelli Kullanım ve -20
                      Derece Buzlu Başlığı Sayesinde Acısız Ağrısız ve Konforlu
                      Epilasyon Rahatlığı Sağlar.
                    </p>
                    <br />
                    <p class="urunyazi">
                      Ütüleme lazer olarak da bilinen diode lazer tüm cilt
                      tiplerinde kullanıma uygun olduğu için çok fazla tercih
                      edilen bir lazer uygulamasıdır. İnsan vücudunda çıkan
                      tüylerin şekli, cinsi, yönü, tüyün ciltteki derinliği ve
                      kalınlığı farklılık gösterdiği için bazı lazerler lazer
                      epilasyon tedavisinde yetersiz kalır, ama diode lazerde
                      tüyün cinsi ne olursa olsun %100 dökülme sağlar. Yüz, sırt
                      ve kol bölgesinde özellikle tercih edilir, tüylerin rengi
                      sarı olsa bile lazer her türlü tüyü görebilir ve ışın
                      atar. Kişinin cilt ve kıl tipine göre 800 nanometre - 950
                      nanometre dalga boyları ile kullanan kişilere hızlı ve
                      etkin lazer epilasyon imkânı sağlar. Cihaza bütünleşmiş
                      bilgisayar sistemi ile belirlenen programa göre işlemi
                      yönetir ve dalga boylarının doğru atışlar yapmasını
                      sağlar.
                    </p>

                    
                    <p class="urunyazi">
                      <b>Buz Başlıklı Diode Lazer</b>
                      <br />
                      Buz başlıklı diode lazer kullanım kolaylığı ve
                      derinlemesine kıl kökü yakmada dünyanın en çok tercih
                      edilen lazer epilasyonudur, aşağıda diode lazer
                      epilasyonun özelliklerini görebilirsiniz;
                      <ul>
                        <li>
                          Soğutma sistemi diğer eski cihazlara göre çok daha
                          başarılıdır.
                        </li>
                        <li>
                          Eksi üç dereceye kadar soğutma sağlar ve hatta
                          epilasyon sırasında buz tutar.
                        </li>
                        <li>
                          Buz başlıklı diode lazer kullanımda acı eşiği
                          kadınlara oranla daha yüksek olan erkeklerde bile
                          acısız epilasyon imkânı sağlar.
                        </li>
                        <li>
                          Tüm vücut için toplam süre maksimum elli dakikadır.
                          Altı -sekiz seans yapılmaktadır.
                        </li>
                        <li>
                          Bölgesel uygulamalarda işlem çok daha kısa sürer.
                        </li>
                        <li>
                          Tüm bunların yanında ince ve açık renkli tüylerin
                          alınmasında en etkili ve acısız tek yöntemdir.
                        </li>
                      </ul>
                    </p>
                    <p class="urunyazi">
                      <b>Diode Lazerin Avantajları</b>
                      <br />
                      Diode lazer makineleri yurt dışında ve Türkiye’de
                      neredeyse tüm güzellik merkezlerinde vardır. Diğer lazer
                      yöntemlerinde daha avantajlı olduğu için çok fazla tercih
                      ediliyor
                      <ul>
                        <li>
                          Koyu renk ciltlerde bile kullanım kolaylığı sağlar,
                        </li>
                        <li>
                          Pulse süreleri ayarlanabilen cihazlar üretilmiştir,
                        </li>
                        <li>
                          Derin ve kalın kıllarda etkinliği daha fazladır. Erkek
                          sırtı ve kolunda en başarılı lazerdir.
                        </li>
                      </ul>
                    </p>
                  </div>
                  <br />
                  <div>
                    <img
                      class="accPho"
                      alt="Soğuk Üflemeli Başlık"
                      title="Soğuk Üflemeli Başlık"
                      src={Baslik}
                      style={{ float: "left", width: "200px", height: "200px" }}
                    ></img>
                    <p class="urunbaslik">SOĞUK HAVA ÜFLEMELİ BAŞLIK</p>
                    <p class="urunyazi">
                      Dünya’nın En Güçlü Soğuk Hava Üflemeli Epilasyon Başlığı
                      Xenon ışık led aydınlatma sayesinde loop kullanmadan en
                      ince kılları dahi rahatlıkla görebilirsiniz. Güvenli
                      modda, soğuk havanın cildi soğutacak kadar cilt yüzeyinde
                      durduğundan emin olunmasını sağlayan otomatik zamanlayıcı
                      bulunmaktadır. Yeni nesil değiştirilebilir hijyenik
                      silikon aparat atış esnasında ışınların operatörün gözüne
                      yansımasını ve oluşabilecek göz bozukluklarını engeller.
                      Bu cihazın kullanılmasının önemi oldukça fazladır. UmeX
                      cihazı üfleme etkisi ile deriye zarar vermeden yalnızca
                      kıl köküne temas ederek orayı yakmayı hedefler. Derinize
                      hedef alınmayıp, temas edilmediği için herhangi bir acı
                      hissi de duyulmayacaktır. Diğer lazer epilasyon
                      makinelerinden turbo soğuk hava üflemeli cilt soğutma
                      etkisi lazer epilasyon makinesini ayıran bu özelliktir. –
                      15 dereceye kadar soğuk hava üfler. Ve güvenlik modu ile
                      derinizi yanığa karşı da korur. Eğer herhangi bir sorunda
                      üfleme durursa lazer otomatik olarak devre dışı
                      bırakılarak kapatılır. Bu da turbo soğuk hava üflemeli
                      cilt soğutma etkisi lazer epilasyon cihazını daha fazla
                      tercih edilir hale getirdi. Üstelik bu cihaz yüz
                      epilasyonu için de çok uygundur. Cilde zarar vermediği
                      için uzmanlar tarafından da önerilmektedir. Böylece yüz de
                      yanık izi olmadan tüysüz bir cilde sahip olabilirsiniz.
                    </p>
                  </div>
                  <br />
                  <div>
                    <img
                      class="accPho"
                      alt=""
                      src="https://www.capitalmedikal.com/upload/kararan-gozluk.png"
                      style={{ float: "left", width: "200px", height: "86px" }}
                    ></img>
                    <p class="urunbaslik">OTOMATİK KARARAN GÖZLÜK</p>
                    <p class="urunyazi">
                      UmeXUltra Otomatik Kararan Gözlük, atış sırasında otomatik
                      karararak konforlu bir uygulama sağlar UmeXUltra Otomatik
                      Kararan Gözlük, tüm UmeXUltra cihazlarıyla birlikte
                      ücretsiz olarak verilir. Koruma Özellikleri: Çok yönlü
                      absorpsiyon. Basit tasarım, etkili koruma boyutu Yüksek
                      kaliteli malzeme, güçlü darbe direnci, koruyucu etkisi ile
                      üretilmiştir dikkat çekicidir Ayarlanabilir kol uzunluğu,
                      en iyi aşınma pozisyonunu kolayca bulmanızı sağlayabilir
                      Özellikle lazer koruma tasarımı için, gözlerinize lazer
                      hasarını etkili bir şekilde engelleyebilirsiniz.
                    </p>
                  </div>

                  <br />
                  <div>
                    <img
                      class="accPho"
                      alt="Diode Lazer"
                      title="Erzurum Lazer Epilasyon"
                      src={CiltAnaliz}
                      style={{
                        width: "200px",
                        height: "108px",
                        float: "right",
                      }}
                    ></img>
                    <p class="urunbaslik">CİLT TİPİ ANALİZ CİHAZI</p>
                    <p class="urunyazi">
                      Dilerseniz UmeXUltra’nın üzerinde takılı olan Hybrid
                      Alexandrtie başlığını ve Hybrid Diode başlığını dilerseniz
                      jelsiz hijyenik silikon ile tek tek patlatma atış modunda
                      dilersniz buzlanan başlık olarak jel ile birlikte hızlı
                      atışlarla ütüleme modunda kullanabilir toplam 4 farklı
                      cihaz sisteminden aynı cihaz üzerinde faydalanabilirsiniz.
                      Cilt tipi analizi, kendi yüzünüzü ve spesifik
                      ihtiyaçlarınızı tanımanızı kolaylaştırır. Yağlı, kuru,
                      karma ve normal temel cilt tipleri olsa da bunların kendi
                      arasında çok farklı alt kategorileri bulunur. Yağlı ve
                      akne eğilimli ciltler, kuru ve çizgilenmelere sahip yüzler
                      bu alt kategorilerden bazılarıdır.
                    </p>
                  </div>
                  <br />
                  <div>
                    <img
                      class="accPho"
                      lt="Diode Lazer"
                      title="Erzurum Lazer Epilasyon"
                      src="https://www.capitalmedikal.com/upload/a92ogv6v-1kvqud3-ah4.png"
                      style={{ width: "250px", height: "98px" }}
                    ></img>
                    <p class="urunbaslik">
                      SİEMENS İLE DAHA GÜÇLÜ, BOSCH VEYA DURACELL İLE KESİNTİSİZ{" "}
                    </p>
                    <p class="urunyazi">
                      UmeXUltra üstün kullanım ömrü sunarken elektrik
                      dalgalanmaları veya kesintileri yüzünden meydana gelen
                      arızalar ortadan kalkar. Elektrik akımı düzensizlikleri
                      ile meydana gelen Anakart ve İşlemci arızaları ortadan
                      kalkar. Dokunmatik ekranlar donmalara, takılmalara ve
                      arızalara karşı korumalı hale gelir. Kullanım ömürleri 10
                      yıla kadar uzar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Magic Born Slim Cihazı
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div>
                    <img
                      class="accPho"
                      alt=""
                      src={Magic}
                      style={{
                        width: "30%",
                        height: "40%",
                        marginRight: "1rem",
                      }}
                    ></img>
                    <p class="urunyazi">
                      Magic Born Slim sarkık cilt, lokalize yağ, fibrotik alan,
                      çatlaklar ile gevşek ve yumuşak selülit bölgelerinin
                      normalleşmesi için geliştirilmiş ses dalgaları ile yağ
                      yakma makinesidir. 27–40 Khzlik darbeler 1,7 Mhz operasyon
                      frekansına bindirilerek farklı cilt tipleri için rezonans
                      sorunları ortadan kaldırılmıştır. Bölge deformasyonuna
                      göre 12 seans kafidir. İlk seans dan sonra netice fark
                      edilir ve 6. seans da olgunluğa erişir. Magic Born Slim
                      yüksek frekanslı ses dalgaları kullanılarak geliştirilmiş
                      yağ yakma cihazıdır. Karın, kalça, basen, bacak, boyun ve
                      kol bölgelerinde biriken lokalize yağ çeperlerini
                      küçülterek incelme sağlar. Aynı zamanda sarkık cilt,
                      çatlaklar ve selülit gibi sorunların giderilmesinde büyük
                      oranda etkilidir. Hem kadınlarda hem erkeklerde
                      uygulanabilen Magic Born Slim selülitli bölgeler ve lokal
                      fazlalıkların giderilmesinde etkili olduğu kadar çene
                      altında oluşan deformasyon ve sarkmalarda da toparlayıcı
                      etkiye sahiptir. Magic Born Slim, bölgesel zayıflama söz
                      konusu olduğunda ilk akla gelen yöntemlerden biridir.
                      Düzenli spor ve yoğun diyet gibi kilo verme programları
                      bölgesel olarak incelmek isteyen kişilerde zorlu bir süreç
                      olabilir. Bu aşamada, bir dış etkene ihtiyaç duyulan
                      durumlarda cerrahi müdahaleye gerek kalmadan, heykeltraş
                      yöntemi olarak da anılan Magic Born Slim devreye girer.
                    </p>
                  </div>

                  <div>
                    <p class="urunbaslik">
                      Magic Born Slim ile Bölgesel Zayıflama İşlemi Nasıl
                      Uygulanır?
                    </p>
                    <p class="urunyazi">
                      Cilt yüzeyine jel sürülerek ses dalgalarının cilt altına
                      iletilmesi sağlanır. İletilen enerji ciltteki kolajen
                      üretimini tetikleyerek doku elastikiyeti kazandırır. İşlem
                      süresi 30 dakikadır. Uygulama sırasında ve sonrasında
                      herhangi bir acı ve ağrı oluşmaz.
                    </p>

                    <p class="urunbaslik">
                      Magic Born Slim Kaç Seansta Sonuç Verir?
                    </p>
                    <p class="urunyazi">
                      İlk seanstan itibaren incelme etkisi gözle görülür bir
                      orandadır. Bölgedeki deformasyona ve vücuttaki yağ
                      kalınlığına bağlı olarak kişinin ihtiyacına uygun bir
                      program belirlenerek ortalama 8 seansta 10 – 12 cm
                      garantili incelme gerçekleşir. Parçalanmış yağ hücreleri
                      vücuttan lenfatik yollarla atıldığından alınan sonuç
                      kalıcıdır.
                    </p>

                    <p class="urunbaslik">
                      Magic Born Slim yaptıranlar Nelere Dikkat Etmelidir?
                    </p>
                    <p class="urunyazi">
                      Seans öncesinde mutlaka aç olunmalı sonrasında ise yağlı
                      yiyecekler ve karbonhidrattan mümkün olduğunca uzak
                      durulmalıdır. Tedavi sürecinde bol su içmek parçalanmış
                      yağ hücrelerinin vücuttan atılmasını hızlandırır. Atılan
                      yağlar yerine kas oluşumu mümkün olduğundan
                      hareketsizlikten ve yanlış beslenmeden kaçınılmalıdır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Hydrafacial Cihazı
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div>
                    <img
                      class="accPho"
                      alt=""
                      src={Hydrafacial2}
                      style={{
                        width: "40%",
                        height: "40%",
                        marginRight: "1rem",
                      }}
                    ></img>
                    <p class="urunyazi">
                      Hydrafacial Cihazı Cilt bakım ürünleri ve cilt bakım
                      cihazları, cilt sağlığının korunması üzerine üretilmekte
                      ve tasarlanmaktadır. Hydrafacial cihazı da bu cihazlar
                      arasında yer almaktadır. En kapsamlı su bazlı cilt bakım
                      cihazlarından biri olarak kullanılmaktadır. Cildin en
                      derinliklerine nüfuz ederek temiz bir deriye sahip olmayı
                      sağlar ve makyaj uygulamalarında da gözeneklerin
                      işlevselliğinin korunmasında etkin bir rol oynar. Sprey ve
                      su bazlı tabanlı olarak çalışarak birçok cilt bakım seti
                      ürünlerinin kullanılmasını kolaylaştıran ve takviye eden
                      özellikleri sayesinde Hydrafacial cihazı sıklıkla tercih
                      edilen cilt bakım ürünleri arasında yer almaktadır. Cildin
                      temizlenmesinde hiçbir kalıntı bırakmayacak şekilde
                      detaylı çalışmalar yapılmasına imkan sağlayan gelişmiş
                      teknolojik özellikleriyle cilt sağlığını önceleyen ve
                      koruyan özellikleri vazgeçilmez bir ürün olmasını
                      sağlamaktadır. Birçok cilt bakım ürün ve cihazına göre
                      uygun fiyatlarda ve geniş teknolojik özelliklerde birçok
                      kullanıcı tarafından hassasiyetle tercih edilmekte ve cilt
                      sağlığının korunmasında ön sıralarda yer almaktadır. Bu
                      nedenle cihazların satın alınması ya da kiralanması da söz
                      konusu olmaktadır. Hydrafacial cihazı sayesinde detaylı
                      temizlik yaparak cilt sağlığının korunması, insan
                      sağlığının her şeyden önce gelmesine binaen oldukça
                      önemlidir. Cihaz hem çok fonksiyonel olarak kullanılmakta
                      hem de oldukça işe yaramaktadır. Masaüstü pratik setleri,
                      kapsamlı setleri, kendi içerik ve fonksiyonlarıyla özel
                      ürünlerin kullanılmasına da imkan sağlayan Hydrafacial
                      cihazı en iyi temizlik ve kişisel bakım ürünleri arasında
                      yer almaktadır. Yaygın olarak kullanılan ve sabit,
                      taşınabilir olma özellikleri de bulunan bir cilt bakım
                      cihazı olması sebebiyle en çok aranan ürünler arasında yer
                      almaktadır. Hemen her bütçeye uygun şartlarda ve
                      modellerde satışa sunulan ve pratik kullanıma uygun,
                      kullanışlı, ergonomik ürünlerden biri olarak Hydrafacial
                      cihazı internet ortamında da satışa sunulmaktadır. Birçok
                      kuaför ve güzellik merkezi tarafından da tercih edilerek
                      kişisel kullanıma da uygun özellikleri barındırmaktadır.
                      Bayanların cilt bakımı ihtiyacının karşılanmasında su ve
                      sprey destekli ve tabanlı olarak çok yönlü işlevsel
                      özellikleri gün geçtikçe geliştirilmekte ve cihaz birçok
                      bayan tarafından özellikle tercih edilerek temizlik
                      işlemlerinin başarılı bir şekilde yapılması
                      amaçlanmaktadır.
                    </p>
                  </div>

                  <div>
                    <p class="urunbaslik">Hydrafacial Cihazı nın Özellikleri</p>
                    <p class="urunyazi">
                      RF kolu: Rf’nin derin ısıtması, doku elektroniğini insan
                      dokuları yoluyla polarizasyon elektronik hareketliliğinin
                      biyolojik yanıtı ile etkiler. sonuçta elektronikler,
                      moleküllerin bükülmesi ve birbirine çarpmasıyla oluşur,
                      böylece biyoenerji üretilir, böylece kollajen hemen
                      kasılmayı teşvik etmek için deriyi derinlemesine ısıtır,
                      Kollajen atrofisini kaybetme boşluğunu doldurmak için yeni
                      kollajenin salgılanmasını teşvik etmek ve cilt yumuşak
                      çerçevesini yeniden oluşturmak için yeniden düzenlemek ve
                      sonuçta cildi sıkılaştırmak, kırışıklıkları gidermek,
                      cildin esnekliğini ve parlaklığını geri yükler.
                      <br />
                      Ultrasonik sap: Müşterinin tedavi edilen amacına göre,
                      ilgili özler ve besinlerle, onları derinin içine derin bir
                      şekilde enjekte etmek için probu kullanın, tam emilim
                      sağlayın, bu yüzden en iyi güzellik etkisini elde edin.
                      <br />
                      Soğuk çekiç: Gözenekleri küçültür, cildi sıkılaştırır,
                      kırışıklıkları giderir, kollajen hiperplazisini teşvik
                      eder, kızarıklığı ve duyarlılığı ortadan kaldırır ve
                      gözlerin altındaki koyu halkaları ve torbaları kaybolur.
                      <br />
                      Cilt temizleyici: Ultrasonik cilt temizleyici, birden
                      fazla cihaz arasında güzellik uzmanlarıyla en popüler
                      olanıdır. Saniyede 24000 kez elektrik titreşimini saniyede
                      binlerce kez mekanik titreşime kaydırır. Ultrasonik nüfuz
                      etkisi cilt masajı yanı sıra temizlik verir.
                    </p>
                  </div>

                  <div>
                    <img
                      class="accPho"
                      alt=""
                      src={Hydrafacial}
                      style={{ width: "300px", height: "300px" }}
                    ></img>
                    <p class="urunbaslik">
                      Hydrafacial Cihazının Çalışma prensibi:
                    </p>
                    <p class="urunyazi">
                      1) ultrason kafası: mikro dolaşımı teşvik, cilt
                      gençleştirici
                      <br />
                      2) çok kutuplu RF: kompakt şekillendirme, yüz germe
                      <br />
                      3) biyo mikro akım: çene çizgisinin sıkılmasına izin
                      verin, biyo yüz cildinin genel sıkılaşmasını artırın
                      <br />
                      4) hidrodermabrazyon: yüz temizleme, soyma, gözenek
                      temizleme
                      <br />
                      5) soğuk çekiç: treamtent sonra soğuk aşağı cilt
                      <br />
                      6) oksijen sprey tabanca: cilt gençleştirici
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
