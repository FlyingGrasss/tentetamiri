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
    title: "Tente Tamiri İstanbul",
    description: "İstanbul genelinde kollu, sabit ve motorlu tente tamiri, mekanizma bakımı ve kumaş onarımı.",
    image: `${SITE_ROOT}/admin/image/114-tente-tamiri1.jpg`,
    introduction: [
      "Tentenin açılmaması, eğri durması, kumaşın yırtılması veya kol mekanizmasının ses yapması sistemin tamamen yenilenmesi gerektiği anlamına gelmez. Önce arızanın kaynağını bulur, sağlam parçaları koruyarak uygulanabilir onarımı belirleriz.",
      "İstanbul'un tüm ilçelerinde kollu, sabit ve motorlu tente sistemleri için kumaş, kol, bağlantı, yay ve mekanizma kontrolleri yapıyoruz. Fotoğraf ve kısa video üzerinden ön değerlendirme ile servis kapsamını daha hızlı netleştirebiliriz.",
      "Servis talebi oluştururken tentenin genel görünümünü, arızalı bölgeyi ve mümkünse motor veya mekanizma bağlantısını gösteren fotoğrafları WhatsApp üzerinden paylaşmanız yeterlidir.",
    ],
    highlights: [
      "Kumaş, kol ve bağlantı kontrolü",
      "Mekanizma ve motor arızası tespiti",
      "Yırtık, ek ve dikiş onarımı",
      "Bakım, ayar ve parça değişimi",
    ],
    faqs: [
      { question: "Tente tamiri için fotoğraf yeterli olur mu?", answer: "Çoğu ön değerlendirme için genel görünüm, arızalı bölge ve bağlantıları gösteren birkaç fotoğraf yeterlidir. Gerekirse kısa bir video isteriz." },
      { question: "Tente tamiri mi yoksa kumaş değişimi mi gerekir?", answer: "Kumaşın, mekanizmanın ve bağlantıların durumunu birlikte değerlendirerek yalnızca gerekli işlemi öneririz." },
    ],
  },
  {
    slug: "otomatik-tente-servisi",
    title: "Otomatik Tente Servisi İstanbul",
    description: "İstanbul'da otomatik tente motoru, kumanda, sensör, limit ayarı ve mekanizma servisi.",
    image: `${SITE_ROOT}/admin/image/609-tente-tamiri30.jpg`,
    introduction: [
      "Otomatik tente sistemlerinde motor, kumanda, sensör ve limit ayarı birlikte çalışır. Tente hiç hareket etmiyor, yarıda kalıyor veya kapanırken zorlanıyorsa arızayı parça parça değil, sistemin tamamı üzerinden değerlendiriyoruz.",
      "Motorlu kollu tente ve otomatik gölgelendirme sistemlerinde bağlantı, elektrik beslemesi, kumanda eşleştirmesi, limit ayarı ve mekanik sürtünme kontrolleri yapıyoruz. Uygun durumlarda mevcut sistemi koruyarak yalnızca arızalı parçayı değiştiriyoruz.",
      "Model, motor etiketi ve arızayı gösteren fotoğrafları göndererek servis için ön bilgi alabilirsiniz. Doğru model bilgisi parça ve randevu planını hızlandırır.",
    ],
    highlights: [
      "Motor ve kumanda kontrolü",
      "Limit ve kapanma ayarı",
      "Sensör ve bağlantı kontrolü",
      "Mekanizma bakım ve onarımı",
    ],
    faqs: [
      { question: "Otomatik tente motoru çalışmıyorsa ne göndermeliyim?", answer: "Motor etiketi, kumanda, bağlantı noktası ve tentenin mevcut konumunu gösteren fotoğraflar ilk değerlendirme için yeterlidir." },
      { question: "Mevcut otomatik tente motoru değiştirilebilir mi?", answer: "Motorun modeli, taşıdığı yük ve mekanizmanın durumu kontrol edildikten sonra uygun değişim seçeneği belirlenir." },
    ],
  },
  {
    slug: "pergola-tente-servisi",
    title: "Pergola Tente Servisi İstanbul",
    description: "Pergola tente sistemleri için kumaş, ray, motor, bağlantı ve yağmur oluğu servis desteği.",
    image: `${SITE_ROOT}/admin/image/322-tente-tamiri2.jpg`,
    introduction: [
      "Pergola tente sistemlerinde gölgelendirme kumaşı kadar ray, taşıyıcı profil, motor ve su tahliye detayları da önemlidir. Sistem zorlanıyor, ses yapıyor veya yağmurda su biriktiriyorsa önce hareket ve bağlantı noktalarını inceleriz.",
      "Kumaş, ray, motor, bağlantı, gergi ve yağmur oluğu kontrollerini aynı servis planında ele alıyoruz. Küçük bir ayar veya bağlantı onarımı ile çözülebilecek sorunlarda gereksiz yenileme önermiyoruz.",
      "Pergolanın açık ve kapalı fotoğrafları, ölçüsü, motor bilgisi ve sorunun ne zaman başladığı servis kapsamını doğru belirlememize yardımcı olur.",
    ],
    highlights: [
      "Ray ve taşıyıcı profil kontrolü",
      "Motor ve hareket sistemi bakımı",
      "Kumaş ve gergi ayarı",
      "Yağmur oluğu ve su tahliye kontrolü",
    ],
    faqs: [
      { question: "Pergola tente servisi hangi parçaları kapsar?", answer: "Kumaş, ray, motor, gergi, bağlantılar ve su tahliye detayları sistemin ihtiyacına göre kontrol edilir." },
      { question: "Pergola tente yağmurda su geçiriyorsa tamir edilebilir mi?", answer: "Sorunun kumaş, eğim, gergi veya tahliye kaynaklı olup olmadığı belirlendikten sonra uygun onarım seçeneği paylaşılır." },
    ],
  },
  {
    slug: "branda-tamiri",
    title: "Branda Tamiri İstanbul",
    description: "Branda, PVC kapama ve şeffaf tente yüzeylerinde yırtık, ek, dikiş ve bağlantı onarımı.",
    image: `${SITE_ROOT}/admin/image/148-branda-tamiri1.jpg`,
    introduction: [
      "Branda ve PVC kapama sistemlerinde yırtık, dikiş açılması, kuşgözü kopması veya bağlantı gevşemesi alanın kullanımını kısa sürede etkiler. Hasarın büyümesini beklemeden sorunlu bölgeyi ve bağlantıları birlikte kontrol etmek gerekir.",
      "Branda tamirinde malzemenin türünü, yırtığın yönünü, gerilimi ve mevcut bağlantı noktalarını değerlendiriyoruz. Gerektiğinde ek, dikiş, parça takviyesi veya bağlantı yenileme seçenekleri sunuyoruz.",
      "Branda yüzeyinin tamamını ve hasarlı bölgeyi aynı karede gösteren fotoğraflar ön keşif için yeterli bir başlangıç sağlar. Alanın ölçüsünü de eklemeniz fiyatlandırmayı kolaylaştırır.",
    ],
    highlights: [
      "Yırtık ve dikiş onarımı",
      "PVC ve şeffaf kapama onarımı",
      "Kuşgözü ve bağlantı yenileme",
      "Parça takviyesi ve ek uygulaması",
    ],
    faqs: [
      { question: "Branda yırtığı yerinde onarılır mı?", answer: "Hasarın ölçüsü, konumu ve malzemenin durumuna göre yerinde onarım veya parça işlemi planlanabilir." },
      { question: "Branda tamiri için ölçü gerekli mi?", answer: "Yaklaşık ölçü, malzeme türü ve hasarın fotoğrafı ön değerlendirme ve servis planı için yardımcı olur." },
    ],
  },
  {
    slug: "cadir-tamiri",
    title: "Çadır Tamiri İstanbul",
    description: "Çadır ve kapama sistemleri için kumaş, iskelet, fermuar, bağlantı ve kullanım onarımı.",
    image: `${SITE_ROOT}/admin/image/22-cadir-tamiri1.jpg`,
    introduction: [
      "Çadır sistemlerinde kumaş, iskelet ve bağlantı noktalarının birlikte çalışması gerekir. Kumaş yırtığı, profil eğilmesi, fermuar arızası veya bağlantı gevşemesi kullanım güvenini ve alanın kapalı kalmasını etkileyebilir.",
      "Çadırın kumaşını, taşıyıcı parçalarını, bağlantılarını ve kapanma detaylarını kontrol ederek onarım kapsamını belirliyoruz. Uygun olan sağlam parçaları koruyup gerekli noktaya müdahale ediyoruz.",
      "Çadırın kurulu halini, hasarlı bölgesini ve bağlantı noktalarını gösteren fotoğrafları paylaşarak İstanbul geneli servis için bilgi alabilirsiniz.",
    ],
    highlights: [
      "Kumaş ve dikiş onarımı",
      "İskelet ve profil kontrolü",
      "Fermuar ve kapama yenilemesi",
      "Bağlantı ve gergi ayarı",
    ],
    faqs: [
      { question: "Çadır tamiri için çadırı sökmek gerekir mi?", answer: "Arızanın konumuna göre işlem kurulu sistem üzerinde veya kontrollü sökümle yapılabilir; servis öncesinde bilgi verilir." },
      { question: "Çadır kumaşı değişmeden onarılabilir mi?", answer: "Kumaşın sağlamlık durumu ve hasarın ölçüsüne göre dikiş, ek veya parça takviyesi yeterli olabilir." },
    ],
  },
  {
    slug: "tente-montaji",
    title: "Tente Montajı İstanbul",
    description: "Kollu, sabit ve otomatik tente sistemleri için ölçü, montaj ve kullanım ayarı.",
    image: `${SITE_ROOT}/admin/image/653-tente-tamiri10.jpg`,
    introduction: [
      "Yeni tente montajında yalnızca kumaş ve model seçimi değil, duvarın taşıma durumu, açılım mesafesi, güneş yönü ve kullanım şekli de değerlendirilmelidir. Doğru ölçü, sistemin daha uzun süre sorunsuz çalışmasına yardımcı olur.",
      "Kollu, sabit ve otomatik tente sistemleri için alanın ölçüsünü, montaj yüzeyini ve kullanım amacını değerlendirerek uygulanabilir seçenekleri konuşuyoruz. Montaj sonrasında açılım, kapanma ve bağlantı ayarlarını kontrol ediyoruz.",
      "Montaj alanının cepheden ve yandan fotoğraflarını, yaklaşık genişlik ve çıkma ölçüsünü paylaşarak ön görüşme başlatabilirsiniz.",
    ],
    highlights: [
      "Alan ve montaj yüzeyi ölçümü",
      "Kollu ve sabit tente montajı",
      "Otomatik sistem kurulum planı",
      "Açılım, kapanma ve bağlantı ayarı",
    ],
    faqs: [
      { question: "Tente montajı için keşif gerekiyor mu?", answer: "Montaj yüzeyi, ölçü ve açılım mesafesi görülerek doğru model ve bağlantı yöntemi belirlenir. Fotoğraflarla ön değerlendirme yapılabilir." },
      { question: "Otomatik tente montajı yapıyor musunuz?", answer: "Evet. Motorlu ve otomatik tente sistemleri için uygun model, bağlantı ve kullanım ayarları birlikte planlanır." },
    ],
  },
];

export function getSeoService(slug: string) {
  return seoServices.find((service) => service.slug === slug);
}

export function servicePath(service: SeoService) {
  return `/hizmetler/${service.slug}`;
}

