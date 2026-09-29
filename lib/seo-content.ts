export type SeoService = {
  slug: string;
  title: string;
  description: string;
  image: string;
  introduction: string[];
  highlights: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const SITE_ROOT = "https://www.tentetamiri.com.tr";

export const seoServices: SeoService[] = [
  {
    slug: "tente-tamiri",
    title: "Tente Tamiri Esenler İstanbul",
    description: "Esenler ve İstanbul genelinde kollu, sabit ve motorlu tente tamiri, mekanizma bakımı ve kumaş onarımı. Tentelisa güvencesiyle hızlı servis.",
    image: `${SITE_ROOT}/admin/image/114-tente-tamiri1.jpg`,
    introduction: [
      "Tentenin açılmaması, eğri durması, kumaşın yırtılması veya kol mekanizmasının ses yapması sistemin tamamen yenilenmesi gerektiği anlamına gelmez. Tentelisa olarak önce arızanın kaynağını bulur, sağlam parçaları koruyarak uygulanabilir onarımı belirleriz. Yıllık kullanım süresince karşılaşılan sorunların büyük çoğunluğu, yerinde müdahaleyle çözülebilecek türdendir.",
      "Esenler merkezli atölyemizden İstanbul'un tüm ilçelerine hizmet götürüyoruz. Kollu tente, sabit tente ve motorlu tente sistemleri için kumaş, kol, bağlantı, yay ve mekanizma kontrollerini yerinde yapıyoruz. Fotoğraf ve kısa video üzerinden ön değerlendirme ile servis kapsamını daha hızlı netleştirebiliriz; böylece randevu gününde tüm gerekli parçalar hazır olur ve zaman kaybetmezsiniz.",
      "Tente tamirinde en sık karşılaştığımız sorunlar şunlardır: yırtık veya solmuş kumaş, kırılan veya bükülmüş kol profili, kopan veya gerginliğini yitiren yay, ses çıkaran ya da takılan mekanizma, düşük ya da eğri duran tente ve çözülen bağlantı vidaları. Her biri için ayrı bir çözüm yolumuz vardır ve müdahale öncesinde size net bir fiyat bildiririz.",
      "Servis talebi oluştururken tentenin genel görünümünü, arızalı bölgeyi ve mümkünse motor veya mekanizma bağlantısını gösteren fotoğrafları WhatsApp üzerinden paylaşmanız yeterlidir. 24 saat içinde geri dönüş sağlıyoruz. Esenler, Bağcılar, Güngören, Sultangazi, Gaziosmanpaşa ve çevre ilçelere öncelikli servis sunuyoruz; İstanbul'un diğer ilçeleri için de randevu alabilirsiniz.",
    ],
    highlights: [
      "Kumaş, kol ve bağlantı kontrolü",
      "Mekanizma ve motor arızası tespiti",
      "Yırtık, ek ve dikiş onarımı",
      "Bakım, ayar ve parça değişimi",
      "Kol profili onarımı ve değişimi",
      "Yerinde servis, net fiyat garantisi",
    ],
    faqs: [
      { question: "Tente tamiri için fotoğraf yeterli olur mu?", answer: "Çoğu ön değerlendirme için genel görünüm, arızalı bölge ve bağlantıları gösteren birkaç fotoğraf yeterlidir. Gerekirse kısa bir video isteriz; bu sayede servis günüde gerekli parçaları hazır getiririz." },
      { question: "Tente tamiri mi yoksa kumaş değişimi mi gerekir?", answer: "Kumaşın, mekanizmanın ve bağlantıların durumunu birlikte değerlendirerek yalnızca gerekli işlemi öneririz. Mekanizma sağlamsa yalnızca kumaş değişimi yapılabilir; ya da tam tersi." },
      { question: "Tente tamiri ne kadar sürer?", answer: "Küçük onarımlar (dikiş, bağlantı sıkıştırma, limit ayarı) genellikle aynı gün tamamlanır. Kumaş değişimi veya kol tamiri 1–2 gün sürebilir; parça temin edilmesi gereken durumlarda önceden bilgi verilir." },
      { question: "Esenler dışı ilçelere de servis geliyor musunuz?", answer: "Evet. Esenler merkezli atölyemizden İstanbul'un tüm ilçelerine servis gidiyoruz. Uzak ilçeler için ulaşım bilgisini görüşme sırasında netleştiriyoruz." },
      { question: "Garanti veriyor musunuz?", answer: "Yaptığımız tüm onarımlar için işçilik garantisi veriyoruz. Kullanılan parçalar için üretici garantisi geçerlidir; detaylar servis öncesinde paylaşılır." },
    ],
  },
  {
    slug: "otomatik-tente-servisi",
    title: "Otomatik Tente Servisi Esenler İstanbul",
    description: "Esenler ve İstanbul'da otomatik tente motoru, kumanda, sensör, limit ayarı ve mekanizma servisi. Tentelisa ile hızlı ve garantili çözüm.",
    image: `${SITE_ROOT}/admin/image/609-tente-tamiri30.jpg`,
    introduction: [
      "Otomatik tente sistemlerinde motor, kumanda, sensör ve limit ayarı birlikte çalışır. Tente hiç hareket etmiyor, yarıda kalıyor veya kapanırken zorlanıyorsa arızayı parça parça değil, sistemin tamamı üzerinden değerlendiriyoruz. Tek bir sensör arızası tüm sistemi durdurabilir; bu yüzden elektrik beslemesinden mekanik sürtünmeye kadar her noktayı kontrol ediyoruz.",
      "Tentelisa olarak motorlu kollu tente ve otomatik gölgelendirme sistemlerinde bağlantı, elektrik beslemesi, kumanda eşleştirmesi, limit ayarı ve mekanik sürtünme kontrolleri yapıyoruz. Uygun durumlarda mevcut sistemi koruyarak yalnızca arızalı parçayı değiştiriyoruz. Bu yaklaşım hem maliyeti düşürür hem de sistemin mevcut uyumunu korur.",
      "Sık karşılaştığımız otomatik tente arızaları: motorun hiç çalışmaması veya tek yönde çalışması, kumandanın motor ile eşleşememesi, limit ayarının kayması (tente çok açılıyor ya da kapanmıyor), rüzgar sensörünün sürekli tetiklenmesi veya hiç tetiklenmemesi ve kablo ya da sigorta arızaları. Her biri için sistematik teşhis ve net çözüm sunuyoruz.",
      "Model, motor etiketi ve arızayı gösteren fotoğrafları göndererek servis için ön bilgi alabilirsiniz. Doğru model bilgisi parça ve randevu planını hızlandırır. Esenler, Bağcılar, Bakırköy, Küçükçekmece ve çevre ilçelere öncelikli servis veriyoruz.",
    ],
    highlights: [
      "Motor ve kumanda kontrolü",
      "Limit ve kapanma ayarı",
      "Sensör ve bağlantı kontrolü",
      "Mekanizma bakım ve onarımı",
      "Kumanda eşleştirme ve programlama",
      "Elektrik ve sigorta kontrolü",
    ],
    faqs: [
      { question: "Otomatik tente motoru çalışmıyorsa ne göndermeliyim?", answer: "Motor etiketi, kumanda, bağlantı noktası ve tentenin mevcut konumunu gösteren fotoğraflar ilk değerlendirme için yeterlidir. Ayrıca tentenin en son nasıl davrandığını (yarıda mı kaldı, hiç açılmadı mı, ses çıkardı mı) belirtin." },
      { question: "Mevcut otomatik tente motoru değiştirilebilir mi?", answer: "Motorun modeli, taşıdığı yük ve mekanizmanın durumu kontrol edildikten sonra uygun değişim seçeneği belirlenir. Çoğu sistemde mevcut mekanizma korunarak yalnızca motor değişimi yapılabilir." },
      { question: "Kumanda eşleştirme yapıyor musunuz?", answer: "Evet. Yeni kumanda programlama, mevcut kumandanın yeniden eşleştirilmesi ve akıllı ev sistemleriyle entegrasyon konusunda destek veriyoruz." },
      { question: "Rüzgar sensörü kalibrasyonu yapıyor musunuz?", answer: "Evet. Sensörün hassasiyetini, tetikleme eşiğini ve tentenin bu komuta verdiği tepkiyi yerinde test edip ayarlıyoruz." },
    ],
  },
  {
    slug: "pergola-tente-servisi",
    title: "Pergola Tente Servisi Esenler İstanbul",
    description: "Esenler ve İstanbul'da pergola tente sistemleri için kumaş, ray, motor, bağlantı ve yağmur oluğu servis desteği. Tentelisa güvencesiyle.",
    image: `${SITE_ROOT}/admin/image/322-tente-tamiri2.jpg`,
    introduction: [
      "Pergola tente sistemlerinde gölgelendirme kumaşı kadar ray, taşıyıcı profil, motor ve su tahliye detayları da önemlidir. Sistem zorlanıyor, ses yapıyor veya yağmurda su biriktiriyorsa önce hareket ve bağlantı noktalarını inceleriz. Pergolalar, kollu tentelerden farklı olarak çok daha büyük yüzey alanlarını kapsar; bu yüzden her parçanın doğru çalışması kritiktir.",
      "Tentelisa olarak kumaş, ray, motor, bağlantı, gergi ve yağmur oluğu kontrollerini aynı servis planında ele alıyoruz. Küçük bir ayar veya bağlantı onarımı ile çözülebilecek sorunlarda gereksiz yenileme önermiyoruz. Pergola sisteminin tüm bileşenlerini birlikte değerlendirerek en az maliyetli ve en kalıcı çözümü sunuyoruz.",
      "Pergola servisinde sık karşılaştığımız sorunlar: kumaşın raydan çıkması veya gerilimini yitirmesi, motorun takılması ya da ses çıkarması, yağmur oluğunun tıkanması veya su sızdırması, profil bağlantılarının gevşemesi ve ray içindeki kirlilik nedeniyle oluşan sürtünme. Esenler ve İstanbul'un Avrupa yakasındaki tüm pergola markalarında servis veriyoruz.",
      "Pergolanın açık ve kapalı fotoğrafları, ölçüsü, motor bilgisi ve sorunun ne zaman başladığı servis kapsamını doğru belirlememize yardımcı olur. WhatsApp üzerinden göndereceğiniz 3–4 fotoğraf ile aynı gün ön değerlendirme yapabiliyoruz.",
    ],
    highlights: [
      "Ray ve taşıyıcı profil kontrolü",
      "Motor ve hareket sistemi bakımı",
      "Kumaş ve gergi ayarı",
      "Yağmur oluğu ve su tahliye kontrolü",
      "Pergola kumaş değişimi",
      "Tüm marka pergola sistemleri",
    ],
    faqs: [
      { question: "Pergola tente servisi hangi parçaları kapsar?", answer: "Kumaş, ray, motor, gergi, bağlantılar ve su tahliye detayları sistemin ihtiyacına göre kontrol edilir. Hangi parçanın değişeceği yerinde tespit edildikten sonra onayınızla işleme başlanır." },
      { question: "Pergola tente yağmurda su geçiriyorsa tamir edilebilir mi?", answer: "Sorunun kumaş, eğim, gergi veya tahliye kaynaklı olup olmadığı belirlendikten sonra uygun onarım seçeneği paylaşılır. Çoğu su sızdırma sorunu gergi ayarı veya tıkanmış tahliye kanalının temizlenmesiyle çözülür." },
      { question: "Pergola sistemimin markasını bilmiyorum; yine de servis verebilir misiniz?", answer: "Evet. Marka bilmek servis için zorunlu değildir. Pergolanın fotoğrafını gönderin; sistem tipini ve ihtiyacını yerinde belirleriz." },
      { question: "Pergola kumaş değişimi ne kadar sürer?", answer: "Pergolanın boyutuna bağlı olarak genellikle 1 günde tamamlanır. Kumaş temin süresi önceden belirtilir." },
    ],
  },
  {
    slug: "branda-tamiri",
    title: "Branda Tamiri Esenler İstanbul",
    description: "Esenler ve İstanbul'da branda, PVC kapama ve şeffaf tente yüzeylerinde yırtık, ek, dikiş ve bağlantı onarımı. Tentelisa ile hızlı servis.",
    image: `${SITE_ROOT}/admin/image/148-branda-tamiri1.jpg`,
    introduction: [
      "Branda ve PVC kapama sistemlerinde yırtık, dikiş açılması, kuşgözü kopması veya bağlantı gevşemesi alanın kullanımını kısa sürede etkiler. Hasarın büyümesini beklemeden sorunlu bölgeyi ve bağlantıları birlikte kontrol etmek gerekir; küçük bir yırtık zamanla çok daha büyük bir hasara dönüşebilir.",
      "Tentelisa olarak branda tamirinde malzemenin türünü, yırtığın yönünü, gerilimi ve mevcut bağlantı noktalarını değerlendiriyoruz. Gerektiğinde ek, dikiş, parça takviyesi veya bağlantı yenileme seçenekleri sunuyoruz. PVC branda, şeffaf PVC kapama, polyester branda ve halka bağlantılı sistemlerin tümünde onarım yapabiliyoruz.",
      "Branda tamirinde en sık karşılaştığımız sorunlar: UV ışığı nedeniyle kumaşın yırtılması veya çatlaması, dikiş yerlerinin açılması, kuşgözü bağlantılarının kopması, gergi telinin veya halatının çözülmesi ve PVC yüzeylerde su kaçağına neden olan delikler. Her durumda önce mevcut malzemenin durumunu değerlendiriyor, onarılabilir olduğunu teyit ettikten sonra işleme başlıyoruz.",
      "Branda yüzeyinin tamamını ve hasarlı bölgeyi aynı karede gösteren fotoğraflar ön keşif için yeterli bir başlangıç sağlar. Alanın ölçüsünü de eklemeniz fiyatlandırmayı kolaylaştırır. Esenler ve çevre ilçelere hızlı randevu; İstanbul genelinde de servis veriyoruz.",
    ],
    highlights: [
      "Yırtık ve dikiş onarımı",
      "PVC ve şeffaf kapama onarımı",
      "Kuşgözü ve bağlantı yenileme",
      "Parça takviyesi ve ek uygulaması",
      "Gergi teli ve halat yenileme",
      "Polyester ve PVC branda tamiri",
    ],
    faqs: [
      { question: "Branda yırtığı yerinde onarılır mı?", answer: "Hasarın ölçüsü, konumu ve malzemenin durumuna göre yerinde onarım veya parça işlemi planlanabilir. Küçük yırtıklar genellikle yerinde kaynak veya ek yöntemiyle aynı gün giderilebilir." },
      { question: "Branda tamiri için ölçü gerekli mi?", answer: "Yaklaşık ölçü, malzeme türü ve hasarın fotoğrafı ön değerlendirme ve servis planı için yardımcı olur. Kesin ölçü yerinde alınır." },
      { question: "Şeffaf PVC brandada da onarım yapabiliyor musunuz?", answer: "Evet. Şeffaf PVC yüzeylerde kaynakla doldurma, yamama ve dikiş onarımı yapabiliyoruz. Renk ve şeffaflık uyumu gözetilerek çalışılır." },
      { question: "Branda yerine tamamen yenisini yaptırabilir miyim?", answer: "Evet. Mevcut sisteminizin ölçüsünde yeni branda üretimi ve montajı da yapıyoruz. Fiyat için ölçü ve malzeme tercihinizi belirtirsek teklif sunabiliriz." },
    ],
  },
  {
    slug: "cadir-tamiri",
    title: "Çadır Tamiri Esenler İstanbul",
    description: "Esenler ve İstanbul'da çadır ve kapama sistemleri için kumaş, iskelet, fermuar, bağlantı ve kullanım onarımı. Tentelisa güvencesiyle.",
    image: `${SITE_ROOT}/admin/image/22-cadir-tamiri1.jpg`,
    introduction: [
      "Çadır sistemlerinde kumaş, iskelet ve bağlantı noktalarının birlikte çalışması gerekir. Kumaş yırtığı, profil eğilmesi, fermuar arızası veya bağlantı gevşemesi kullanım güvenini ve alanın kapalı kalmasını etkileyebilir. Tentelisa olarak hem kamp çadırlarında hem de etkinlik ve depo amaçlı büyük çadır yapılarında servis veriyoruz.",
      "Çadırın kumaşını, taşıyıcı parçalarını, bağlantılarını ve kapanma detaylarını kontrol ederek onarım kapsamını belirliyoruz. Uygun olan sağlam parçaları koruyup gerekli noktaya müdahale ediyoruz. Çadır tamirinde kullanılan yöntem; hasarın türüne, malzemin cinsine ve kullanım koşullarına göre değişir.",
      "Sık karşılaştığımız çadır arızaları: kumaşta yırtık veya delik oluşması, iskelet profilinin bükülmesi ya da kırılması, fermuar dişlerinin kilitlenmesi veya kopması, bağlantı mandallarının çalışmaması ve dikişlerin su geçirmeye başlaması. Tüm bu sorunlar için yerinde ya da atölye bazlı onarım seçeneklerimiz mevcuttur.",
      "Çadırın kurulu halini, hasarlı bölgesini ve bağlantı noktalarını gösteren fotoğrafları WhatsApp üzerinden paylaşarak İstanbul geneli servis için bilgi alabilirsiniz. 24 saat içinde geri dönüş sağlıyoruz.",
    ],
    highlights: [
      "Kumaş ve dikiş onarımı",
      "İskelet ve profil kontrolü",
      "Fermuar ve kapama yenilemesi",
      "Bağlantı ve gergi ayarı",
      "Su geçirmezlik testi ve onarımı",
      "Atölye ve yerinde servis seçenekleri",
    ],
    faqs: [
      { question: "Çadır tamiri için çadırı sökmek gerekir mi?", answer: "Arızanın konumuna göre işlem kurulu sistem üzerinde veya kontrollü sökümle yapılabilir; servis öncesinde size bilgi verilir. Büyük yüzey onarımları atölyede yapılması tercih edilir." },
      { question: "Çadır kumaşı değişmeden onarılabilir mi?", answer: "Kumaşın sağlamlık durumu ve hasarın ölçüsüne göre dikiş, ek veya parça takviyesi yeterli olabilir. Eğer kumaşın genel durumu bozulmuşsa değişim önerilebilir." },
      { question: "Kamp çadırı da onarıyor musunuz?", answer: "Kamp çadırlarından büyük etkinlik çadırlarına kadar her türlü çadır sisteminde servis veriyoruz. Fotoğraf göndererek hangi işlemlerin yapılabileceğini öğrenebilirsiniz." },
    ],
  },
  {
    slug: "tente-montaji",
    title: "Tente Montajı Esenler İstanbul",
    description: "Esenler ve İstanbul'da kollu, sabit ve otomatik tente sistemleri için ölçü, montaj ve kullanım ayarı. Tentelisa ile profesyonel kurulum.",
    image: `${SITE_ROOT}/admin/image/653-tente-tamiri10.jpg`,
    introduction: [
      "Yeni tente montajında yalnızca kumaş ve model seçimi değil, duvarın taşıma durumu, açılım mesafesi, güneş yönü ve kullanım şekli de değerlendirilmelidir. Doğru ölçü ve doğru montaj noktası, sistemin daha uzun süre sorunsuz çalışmasının temel koşuludur. Tentelisa olarak montaj öncesinde alana özel bir değerlendirme yapıyoruz.",
      "Kollu, sabit ve otomatik tente sistemleri için alanın ölçüsünü, montaj yüzeyini ve kullanım amacını değerlendirerek uygulanabilir seçenekleri konuşuyoruz. Montaj sonrasında açılım, kapanma ve bağlantı ayarlarını kontrol ediyoruz; sistemi size teslim etmeden çalışır duruma getiriyoruz.",
      "Tente montajı için önemli kriterler: duvarın ve tavan yüzeyinin taşıma kapasitesi, bağlantı noktalarının yapıya uygunluğu, rüzgar ve yağmur gibi çevresel faktörler, açılım genişliği ve çıkma mesafesi. Tüm bu faktörleri hesaba katarak montaj planı oluşturuyoruz.",
      "Montaj alanının cepheden ve yandan fotoğraflarını, yaklaşık genişlik ve çıkma ölçüsünü paylaşarak ön görüşme başlatabilirsiniz. Esenler, Bağcılar, Güngören ve çevre ilçelerde hızlı keşif randevusu alabilirsiniz.",
    ],
    highlights: [
      "Alan ve montaj yüzeyi ölçümü",
      "Kollu ve sabit tente montajı",
      "Otomatik sistem kurulum planı",
      "Açılım, kapanma ve bağlantı ayarı",
      "Kumaş renk ve model seçimi",
      "Montaj sonrası kontrol ve garanti",
    ],
    faqs: [
      { question: "Tente montajı için keşif gerekiyor mu?", answer: "Montaj yüzeyi, ölçü ve açılım mesafesi görülerek doğru model ve bağlantı yöntemi belirlenir. Fotoğraflarla ön değerlendirme yapılabilir; kesin ölçü için kısa bir keşif ziyareti genellikle gereklidir." },
      { question: "Otomatik tente montajı yapıyor musunuz?", answer: "Evet. Motorlu ve otomatik tente sistemleri için uygun model, bağlantı ve kullanım ayarları birlikte planlanır. Rüzgar sensörü ve akıllı kontrol entegrasyonu da yapabiliyoruz." },
      { question: "Tente montajı ne kadar sürer?", answer: "Standart bir kollu tente montajı yarım ila bir iş günü sürer. Daha büyük sistemler veya otomatik kurulumlar 1–2 gün alabilir. Önceden bildirilir." },
      { question: "Hangi tente markalarını monte ediyorsunuz?", answer: "Markal bağımsız çalışıyoruz; piyasada bulunan tüm standart tente sistemleri için montaj yapabiliyoruz. Ölçünüzü ve kullanım amacınızı bildirirseniz en uygun sistem seçeneğini öneririz." },
    ],
  },
];

export function getSeoService(slug: string) {
  return seoServices.find((service) => service.slug === slug);
}

export function servicePath(service: SeoService) {
  return `/hizmetler/${service.slug}`;
}
