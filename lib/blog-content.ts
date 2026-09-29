export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  intro: string;
  sections: Array<{ heading: string; body: string[] }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tente-omru-kac-yildir",
    title: "Tente Ömrü Kaç Yıldır? Daha Uzun Kullanım İçin Neler Yapılabilir?",
    description: "Tente kumaşı ve mekanizmasının ortalama ömrü, ömrü etkileyen faktörler ve düzenli bakımın ne fark yarattığına dair kapsamlı rehber.",
    date: "2024-09-01",
    readingTime: "5 dk",
    category: "Bakım & İpuçları",
    intro: "Tente alırken aklınıza gelen ilk sorulardan biri muhtemelen \"Bu tente kaç yıl dayanır?\" oluyor. Net bir yanıt vermek zor olsa da ortalama rakamlar ve ömrü uzatan alışkanlıklar hakkında bilgi sahibi olmak, hem doğru seçim yapmanıza hem de yatırımınızı korumanıza yardımcı olur.",
    sections: [
      {
        heading: "Ortalama Tente Ömrü Ne Kadardır?",
        body: [
          "Kaliteli bir tente kumaşı ortalama 7–12 yıl kullanılabilir. Mekanizma ise iyi bakım yapıldığında 10–15 yıl sorunsuz çalışabilir. Bu rakamlar yalnızca kaba bir ortalamadır; iklim, kullanım alışkanlıkları ve bakım düzeni ömrü büyük ölçüde etkiler.",
          "İstanbul gibi dört mevsimi yoğun yaşayan bir şehirde UV ışığı, rüzgar ve yağmur etkisi tenteler üzerinde ciddi birikim yaratır. Düzenli bakım yapılmayan bir tente 4–5 yılda göçebilirken, iyi bakım gören bir tente 12–15 yıl servis verebilir.",
        ],
      },
      {
        heading: "Tente Ömrünü Etkileyen Faktörler",
        body: [
          "Kumaş kalitesi: Akrilik kumaşlar UV'ye karşı polyester veya PVC'den daha dayanıklıdır. Acrylic %100 çözgülü dokumalar (solution-dyed) rengi ve yapısı en uzun koruyan seçeneklerdir.",
          "Güneş maruziyeti: Güneye bakan cephelerdeki tenteler, kuzeye bakanlardan ortalama %30–40 daha hızlı solar. Kumaşın düzenli UV koruyucu ile emprenye edilmesi bu farkı azaltır.",
          "Rüzgar yükü: Güçlü rüzgarda açık bırakılan tenteler mekanizma ve kol bağlantılarını çok daha hızlı yıpratır. Tente kapatma alışkanlığı mekanizma ömrünü ciddi şekilde uzatır.",
          "Kış depolama: Kışın kullanılmayan tenteler temizlenip kuru depolanırsa kumaş ve mekanizma yıllık wear'ini çok daha az yaşar.",
        ],
      },
      {
        heading: "Ömrü Uzatan 4 Temel Alışkanlık",
        body: [
          "1. Düzenli temizlik: Ayda bir sabunlu su ve yumuşak fırça ile silmek, biriken kir ve nemden kaynaklanan küfü engeller.",
          "2. Rüzgarda kapatmak: Rüzgar hızı saatte 40 km'yi geçtiğinde tenteyi kapatmak mekanizmanın ana yaylarını ve kol bağlantılarını korur.",
          "3. Yıllık bakım: Bir servis teknisyeni, gözle görülmeden önce oluşan mekanizma aşınması, gergi kaybı ve küçük yırtıkları tespit edebilir.",
          "4. Kış bakımı: Kış öncesinde kumaşı temizlemek, mekanizmaya hafif yağ uygulamak ve mümkünse kapalı tutmak bahar bakım maliyetini önemli ölçüde düşürür.",
        ],
      },
      {
        heading: "Ne Zaman Tamir, Ne Zaman Değişim?",
        body: [
          "Kumaşta 10 cm'nin altında yırtık, birkaç dikişin açılması veya küçük solma: tamir genellikle yeterlidir.",
          "Kumaş genelinde erime, ağır solma veya birden fazla bölgede yırtık: kumaş değişimi daha ekonomik olur.",
          "Mekanizma sesi, yavaş açılma veya eğri duruş: mekanizma bakımı veya yay değişimi.",
          "Kol profili kırılması ya da ciddi bükülme: kol değişimi gerekebilir; ancak mekanizmanın sağlam olması durumunda sistem tamamen değiştirilmez.",
          "Tentelisa olarak her durumu yerinde değerlendiriyor, gereksiz yenileme önermiyoruz. Sorunuz varsa fotoğraf göndererek ücretsiz ön değerlendirme alabilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "pergola-ve-tente-arasindaki-fark",
    title: "Pergola ile Tente Arasındaki Fark Nedir? Hangisi Size Uygun?",
    description: "Pergola ve tente sistemleri arasındaki farklar, avantajlar, dezavantajlar ve hangi kullanım alanına hangisinin daha uygun olduğuna dair kapsamlı karşılaştırma.",
    date: "2024-09-10",
    readingTime: "6 dk",
    category: "Rehber",
    intro: "Balkon, teras veya bahçenizi gölgelendirmeyi düşünürken \"pergola mı, tente mi?\" sorusuyla karşılaşmak çok yaygın. Her iki sistem de etkili birer gölgelendirme çözümüdür; ancak yapı, maliyet, bakım ve estetik açısından önemli farklar vardır. Bu rehber, karar vermenizi kolaylaştıracak.",
    sections: [
      {
        heading: "Tente Nedir?",
        body: [
          "Tente, bir duvara ya da tavana monte edilen ve açılıp kapanabilen kumaş gölgelendirme sistemidir. Kollu tenteler en yaygın tiptir: mekanizma sayesinde tente kumaşı kollar üzerinde açılır ve istendiğinde geri katlanır. Sabit tenteler ise açılmaz; kalıcı bir gölge kumaş konstrüksiyonudur.",
          "Avantajları: Kompakt ve duvara montajlı olduğu için zemin alanı kaplanmaz. Kapatıldığında yere minimum yer kaplar. Kurulum maliyeti genellikle pergoladan düşüktür. Hızlı kurulabilir ve taşınabilir.",
          "Dezavantajları: Büyük açılımlar mekanik stres yaratır. Yüksek rüzgarda kapatılması gerekir. Kollu tente sistemlerinde açılım genişliği sınırlıdır (genellikle 6–7 metreye kadar).",
        ],
      },
      {
        heading: "Pergola Nedir?",
        body: [
          "Pergola, serbest duran ya da duvara bağlanan bir çerçeve (genellikle alüminyum profil) üzerine kurulan gölgelendirme sistemidir. Üst kısım sabit lameller, hareketli lamel veya kumaş sistemlerinden oluşabilir.",
          "Avantajları: Daha büyük alanları tek parça kapatabilir (10 metreye ve üzeri). Sağlam yapısı sayesinde yüksek rüzgara daha iyi dayanır. Estetik görünümü ve kalıcı mimarisi ile mülke değer katar. Aydınlatma, ısıtma ve yan panel entegrasyonu mümkündür.",
          "Dezavantajları: Kurulum maliyeti tenteden yüksektir. Taşınamaz; sabit bir konstrüksiyondur. Belediye izni bazı yapı tiplerine göre gerekebilir.",
        ],
      },
      {
        heading: "Hangisi Size Uygun?",
        body: [
          "Balkon veya küçük teras (0–20 m²): Kollu tente genellikle en pratik ve ekonomik seçimdir. Yer kaplamaz, hızla kurulur.",
          "Orta büyüklükte teras (20–50 m²): Tente veya pergola ikisi de çalışabilir. Bütçeniz ve kullanım sıklığınız belirleyicidir.",
          "Büyük bahçe, kafe veya işletme terası (50 m² üzeri): Pergola sistemi daha uygun ve kalıcı bir çözüm sunar. Yatırım geri dönüşü uzun vadede daha yüksektir.",
          "Kış kullanımı istiyorsanız: Yan panelli ve ısıtmalı pergola sistemleri kışın da kullanım sağlar; kollu tenteler kışın kapalı tutulur.",
          "Tentelisa olarak her iki sistem için de keşif, ölçüm, montaj ve servis hizmeti sunuyoruz. Fotoğraf göndererek alanınıza en uygun sistemin ücretsiz değerlendirmesini alabilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "esenlerde-tente-servisi",
    title: "Esenler'de Tente Servisi: Tentelisa ile Hızlı ve Güvenilir Onarım",
    description: "Esenler ve çevre ilçelerde tente tamiri, pergola servisi ve branda onarımı için Tentelisa'ya nasıl ulaşabilirsiniz? Süreç, hizmet kapsamı ve fiyatlandırma hakkında bilgiler.",
    date: "2024-09-20",
    readingTime: "4 dk",
    category: "Yerel Hizmet",
    intro: "Esenler, Bağcılar, Güngören ve çevre ilçelerde tente tamiri, pergola servisi veya branda onarımı için doğru adres Tentelisa. Fatih Caddesi üzerindeki atölyemizden İstanbul Avrupa yakasının tamamına servis götürüyoruz. Bu yazıda servis sürecimizi ve neden Tentelisa'yı tercih etmeniz gerektiğini anlattık.",
    sections: [
      {
        heading: "Tentelisa Kimdir?",
        body: [
          "Tentelisa, Esenler'de kurulu bir tente ve pergola sistemi servisidir. Adresimiz: Fatih, Fatih Cd. No:30, 34000 Esenler/İstanbul. Tente tamiri, otomatik tente servisi, pergola bakımı, branda ve çadır onarımı konularında uzmanlaşmış ekibimizle müşterilerimizin yaşadığı sistemi anlamak ve en az müdahaleyle çözüm üretmek önceliğimizdir.",
          "Esenler merkezi konum sayesinde Bağcılar, Güngören, Sultangazi, Gaziosmanpaşa, Küçükçekmece, Bakırköy ve Avcılar gibi ilçelere kısa sürede ulaşabiliyoruz. İstanbul'un diğer ilçelerine de randevu bazlı servis sağlıyoruz.",
        ],
      },
      {
        heading: "Servis Süreci Nasıl İşler?",
        body: [
          "1. WhatsApp ile fotoğraf gönderin: Tentenin genel görünümü, arızalı bölge ve mümkünse model bilgisi. Fotoğraf sayısı 3–5 arası yeterlidir.",
          "2. Ön değerlendirme: 24 saat içinde geri dönüyoruz. Sorunun niteliğine göre yerinde servis mi yoksa parça temini gerekip gerekmediğini belirtiyoruz.",
          "3. Randevu ve fiyat onayı: İşlemi başlatmadan önce tahmini fiyatı ve randevu gününü netleştiriyoruz. Sürpriz maliyet yok.",
          "4. Yerinde servis: Teknisyenimiz belirtilen gün ve saatte geliyor, onarımı tamamlıyor, sistemi test edip teslim ediyor.",
        ],
      },
      {
        heading: "Esenler ve Çevre İlçelerde Servis Kapsamımız",
        body: [
          "Tente tamiri (kollu, sabit, motorlu), otomatik tente motor ve kumanda servisi, pergola kumaş ve mekanizma bakımı, branda ve PVC kapama onarımı, çadır sistemi tamiri ve yeni tente montajı konularında hizmet veriyoruz.",
          "Esenler, Bağcılar, Güngören, Sultangazi, Gaziosmanpaşa, Eyüpsultan, Arnavutköy, Küçükçekmece, Bahçelievler ve Bakırköy ilçeleri öncelikli servis bölgelerimizdir.",
        ],
      },
      {
        heading: "Bize Nasıl Ulaşabilirsiniz?",
        body: [
          "Telefon / WhatsApp: 0545 364 31 44 — Mesai saatleri içinde arayabilir veya WhatsApp üzerinden fotoğraflı mesaj gönderebilirsiniz.",
          "Adres: Fatih, Fatih Cd. No:30, 34000 Esenler/İstanbul — Atölyemizi ziyaret ederek birebir bilgi alabilirsiniz.",
          "Web: tentelisa.com — Hizmet detayları ve servis formu için web sitemizi ziyaret edebilirsiniz.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}
