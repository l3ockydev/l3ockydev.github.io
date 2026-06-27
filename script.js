const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

const INDONESIA_TIMEZONES = new Set(["Asia/Jakarta", "Asia/Makassar", "Asia/Jayapura"]);

const idTranslations = {
  "Templates": "Template",
  "Services": "Layanan",
  "Showcase": "Showcase",
  "Pricing": "Harga",
  "Contact": "Kontak",
  "Menu": "Menu",
  "Developer Showroom • Website Templates • Digital Tools": "Showroom Developer • Template Website • Tools Digital",
  "Modern website templates built for": "Template website modern untuk",
  "real businesses.": "bisnis nyata.",
  "I create premium landing pages, business websites, dashboard concepts, and digital tools for UMKM, creators, streamers, and growing brands.": "Saya membuat landing page premium, website bisnis, konsep dashboard, dan tools digital untuk UMKM, kreator, streamer, dan brand yang sedang berkembang.",
  "View Templates": "Lihat Template",
  "Start a Project": "Mulai Proyek",
  "Mobile-first": "Mobile-first",
  "Responsive layout": "Layout responsif",
  "Premium UI": "UI Premium",
  "Clean modern style": "Gaya modern yang bersih",
  "GitHub Pages": "GitHub Pages",
  "Live public showcase": "Showcase publik live",
  "Featured Template": "Template Unggulan",
  "Premium Kedai Kopi": "Premium Kedai Kopi",
  "Online ordering concept for coffee shops with buyer page, cashier flow, stock guard, and owner panel.": "Konsep pemesanan online untuk kedai kopi dengan halaman pembeli, alur kasir, penjaga stok, dan panel owner.",
  "Buyer Page": "Halaman Pembeli",
  "Kasir": "Kasir",
  "Owner": "Owner",
  "Wedding Invitation": "Undangan Pernikahan",
  "Elegant event page": "Halaman event elegan",
  "Booking Lapangan": "Booking Lapangan",
  "Mobile booking flow": "Alur booking mobile",
  "Streamer Tools": "Tools Streamer",
  "Community dashboard": "Dashboard komunitas",
  "Landing Page": "Landing Page",
  "Company Profile": "Company Profile",
  "Template Website": "Template Website",
  "Dashboard UI": "UI Dashboard",
  "GitHub Showcase": "Showcase GitHub",
  "Template Collection": "Koleksi Template",
  "Showcase products that can become real digital assets.": "Showcase produk yang bisa menjadi aset digital nyata.",
  "Ready Concept": "Konsep Siap",
  "Coffee shop website concept with product menu, cart, QRIS-ready flow, cashier alert, and owner dashboard.": "Konsep website kedai kopi dengan menu produk, keranjang, alur siap QRIS, notifikasi kasir, dan dashboard owner.",
  "UMKM": "UMKM",
  "Food & Beverage": "Food & Beverage",
  "Dashboard": "Dashboard",
  "View showcase →": "Lihat showcase →",
  "Demo Soon": "Demo Segera",
  "Elegant digital invitation template with couple story, gallery, countdown, location, guest book, and RSVP.": "Template undangan digital elegan dengan cerita pasangan, galeri, countdown, lokasi, buku tamu, dan RSVP.",
  "Event": "Event",
  "Mobile": "Mobile",
  "Template": "Template",
  "In Build": "Sedang Dibuat",
  "Simple mobile-first booking website for futsal or badminton using booking ID and transaction ID.": "Website booking mobile-first sederhana untuk futsal atau badminton dengan booking ID dan transaction ID.",
  "Booking": "Booking",
  "QRIS": "QRIS",
  "No Login": "Tanpa Login",
  "Custom": "Custom",
  "Website concept for streamer communities with giveaway, tournament, bonus hunt, overlays, and admin pages.": "Konsep website untuk komunitas streamer dengan giveaway, turnamen, bonus hunt, overlay, dan halaman admin.",
  "Kick": "Kick",
  "Streamer": "Streamer",
  "From simple landing pages to polished dashboard concepts.": "Dari landing page sederhana sampai konsep dashboard yang rapi.",
  "The focus is clean UI, mobile-ready layouts, and websites that look ready to sell.": "Fokusnya adalah UI bersih, layout siap mobile, dan website yang terlihat siap jual.",
  "One-page website for products, personal brands, services, and marketing campaigns.": "Website satu halaman untuk produk, personal brand, layanan, dan campaign marketing.",
  "Business Website": "Website Bisnis",
  "Company profile or UMKM website with sections for services, products, gallery, and contact.": "Website company profile atau UMKM dengan bagian layanan, produk, galeri, dan kontak.",
  "Template Customization": "Kustomisasi Template",
  "Customize an existing template into a new brand, layout, color style, or business category.": "Mengubah template yang ada menjadi brand, layout, warna, atau kategori bisnis baru.",
  "Dashboard UI Concept": "Konsep UI Dashboard",
  "Admin, owner, cashier, streamer, booking, or customer dashboard interface design concept.": "Konsep desain interface dashboard untuk admin, owner, kasir, streamer, booking, atau customer.",
  "Showcase Direction": "Arah Showcase",
  "This GitHub page becomes my digital showroom.": "Halaman GitHub ini menjadi showroom digital saya.",
  "Every template can later have its own live demo page, screenshot gallery, feature list, documentation, and order button.": "Setiap template nantinya bisa punya halaman demo live, galeri screenshot, daftar fitur, dokumentasi, dan tombol order sendiri.",
  "Discuss a project →": "Diskusikan proyek →",
  "Live Domain": "Domain Live",
  "Current Focus": "Fokus Saat Ini",
  "Templates & Web Services": "Template & Layanan Website",
  "Design Style": "Gaya Desain",
  "Premium Dark UI": "UI Dark Premium",
  "Next Step": "Langkah Berikutnya",
  "Separate demo pages": "Halaman demo terpisah",
  "Simple Pricing Direction": "Arah Harga Sederhana",
  "Clear packages for clients who need a website fast.": "Paket yang jelas untuk klien yang butuh website cepat.",
  "Starter": "Starter",
  "For personal profile, service introduction, or simple product page.": "Untuk profil pribadi, pengenalan layanan, atau halaman produk sederhana.",
  "1 page design": "Desain 1 halaman",
  "Mobile responsive": "Responsif di mobile",
  "WhatsApp CTA": "CTA WhatsApp",
  "Ask Price": "Tanya Harga",
  "Most Useful": "Paling Berguna",
  "For UMKM, local brands, shops, service providers, and small businesses.": "Untuk UMKM, brand lokal, toko, penyedia jasa, dan bisnis kecil.",
  "Multiple sections": "Beberapa section",
  "Product/service showcase": "Showcase produk/layanan",
  "Contact and social links": "Kontak dan link sosial",
  "Start Order": "Mulai Order",
  "Template / Dashboard": "Template / Dashboard",
  "For custom template, dashboard UI, admin panel concept, or special business flow.": "Untuk template custom, UI dashboard, konsep admin panel, atau alur bisnis khusus.",
  "Custom layout": "Layout custom",
  "Feature planning": "Perencanaan fitur",
  "Demo-ready structure": "Struktur siap demo",
  "Discuss": "Diskusi",
  "Available for custom work": "Tersedia untuk pekerjaan custom",
  "Let’s build a website that looks premium and ready to sell.": "Mari buat website yang terlihat premium dan siap jual.",
  "Send your idea, business type, reference design, and required pages. I can help turn it into a landing page, company profile, or template concept.": "Kirim ide, jenis bisnis, referensi desain, dan halaman yang dibutuhkan. Saya bisa membantu mengubahnya menjadi landing page, company profile, atau konsep template.",
  "WhatsApp": "WhatsApp",
  "Email": "Email",
  "GitHub": "GitHub",
  "l3ocky Dev Lab. Built with GitHub Pages.": "l3ocky Dev Lab. Dibuat dengan GitHub Pages.",
  "Back to top": "Kembali ke atas",
  "Page navigation": "Navigasi halaman",
  "Features": "Fitur",
  "Workflow": "Alur Kerja",
  "Packages": "Paket",
  "Order": "Order",
  "Public Showcase • Full Source Private": "Showcase Publik • Source Lengkap Private",
  "Premium Coffee Cafe": "Premium Coffee Cafe",
  "Website Template.": "Template Website.",
  "A premium coffee shop website concept with buyer page, online menu, cart flow, cashier workflow, owner dashboard direction, and mobile-first design.": "Konsep website kedai kopi premium dengan halaman pembeli, menu online, alur keranjang, workflow kasir, arah dashboard owner, dan desain mobile-first.",
  "Order / Customize": "Order / Kustomisasi",
  "View Repo": "Lihat Repo",
  "Buyer page layout": "Layout halaman pembeli",
  "Owner & cashier concept": "Konsep owner & kasir",
  "Private Source": "Source Private",
  "Available by request": "Tersedia sesuai permintaan",
  "Coffee Nala": "Coffee Nala",
  "Fresh coffee, modern ordering experience.": "Kopi segar, pengalaman order modern.",
  "Es Kopi Susu": "Es Kopi Susu",
  "Matcha Latte": "Matcha Latte",
  "Cold Brew": "Cold Brew",
  "Template Features": "Fitur Template",
  "Designed for cafés that want a professional online ordering presence.": "Dirancang untuk kafe yang ingin punya tampilan online ordering yang profesional.",
  "Modern landing page, menu sections, product cards, cart direction, and mobile-first checkout concept.": "Landing page modern, section menu, kartu produk, arah keranjang, dan konsep checkout mobile-first.",
  "Cashier Flow": "Alur Kasir",
  "Incoming order direction, accept/reject workflow, receipt print concept, and cashier operation flow.": "Arah order masuk, workflow terima/tolak, konsep cetak struk, dan alur operasional kasir.",
  "Owner Dashboard": "Dashboard Owner",
  "Product management, order list, report direction, banner control, and business identity settings.": "Manajemen produk, daftar order, arah laporan, kontrol banner, dan pengaturan identitas bisnis.",
  "Operational Flow": "Alur Operasional",
  "Clear website direction from buyer to cashier to owner.": "Arah website yang jelas dari pembeli ke kasir sampai owner.",
  "This showcase explains the product structure without exposing the premium full source code publicly. The full implementation can be customized for each coffee shop brand.": "Showcase ini menjelaskan struktur produk tanpa membuka source code premium secara publik. Implementasi lengkap bisa dikustomisasi untuk setiap brand kedai kopi.",
  "Customer browses menu": "Customer melihat menu",
  "Buyer opens the site, checks products, chooses category, and adds items to cart.": "Pembeli membuka website, melihat produk, memilih kategori, dan menambahkan item ke keranjang.",
  "Order is created": "Order dibuat",
  "Checkout flow can be customized for QRIS-ready payment, cash, WhatsApp order, or manual confirmation.": "Alur checkout bisa dikustomisasi untuk pembayaran siap QRIS, cash, order WhatsApp, atau konfirmasi manual.",
  "Cashier handles order": "Kasir menangani order",
  "Cashier receives incoming order, confirms it, and continues to kitchen or receipt print direction.": "Kasir menerima order masuk, mengonfirmasi, lalu melanjutkan ke dapur atau arah cetak struk.",
  "Owner manages business": "Owner mengelola bisnis",
  "Owner dashboard direction includes products, orders, marketing banners, reports, and identity settings.": "Arah dashboard owner mencakup produk, order, banner marketing, laporan, dan pengaturan identitas.",
  "Available Direction": "Arah yang Tersedia",
  "Use it as a template, landing page, or custom coffee shop system.": "Gunakan sebagai template, landing page, atau sistem kedai kopi custom.",
  "Preview Page": "Halaman Preview",
  "Public product page for showing the template idea and collecting buyer interest.": "Halaman produk publik untuk menampilkan ide template dan mengumpulkan minat pembeli.",
  "Feature overview": "Ringkasan fitur",
  "Public GitHub repo": "Repo GitHub publik",
  "Order CTA": "CTA order",
  "Ask Details": "Tanya Detail",
  "Recommended": "Direkomendasikan",
  "Customized Template": "Template Dikustomisasi",
  "Template customized with brand name, colors, logo, menu, WhatsApp, and business information.": "Template dikustomisasi dengan nama brand, warna, logo, menu, WhatsApp, dan informasi bisnis.",
  "Brand customization": "Kustomisasi brand",
  "Menu and CTA setup": "Setup menu dan CTA",
  "Order Custom": "Order Custom",
  "Advanced": "Advanced",
  "Business System": "Sistem Bisnis",
  "Custom implementation with dashboard direction, cashier flow, stock logic, and operational features.": "Implementasi custom dengan arah dashboard, alur kasir, logika stok, dan fitur operasional.",
  "Owner/cashier flow": "Alur owner/kasir",
  "Custom development": "Development custom",
  "Discuss System": "Diskusi Sistem",
  "Important Notice": "Catatan Penting",
  "This is a public showcase page. Premium source code, backend logic, payment flow, database structure, and full template package are not published publicly.": "Ini adalah halaman showcase publik. Source code premium, logic backend, alur pembayaran, struktur database, dan paket template lengkap tidak dipublikasikan secara terbuka.",
  "Order / Custom Request": "Order / Request Custom",
  "Want this coffee shop template for your brand or client?": "Mau template kedai kopi ini untuk brand atau klienmu?",
  "Send your brand name, menu list, logo, preferred color, reference design, and the features you need. I can customize the template direction for your business.": "Kirim nama brand, daftar menu, logo, warna pilihan, referensi desain, dan fitur yang dibutuhkan. Saya bisa menyesuaikan arah template untuk bisnismu.",
  "Contact WhatsApp": "Hubungi WhatsApp",
  "Back to Showroom": "Kembali ke Showroom",
  "L3ocky Dev Lab. Premium Coffee Cafe Template Showcase.": "L3ocky Dev Lab. Showcase Template Premium Coffee Cafe.",
  "Overview": "Overview",
  "Screenshots": "Screenshot",
  "Real cafe storefront preview": "Preview storefront kafe realistis",
  "A realistic coffee shop storefront with online menu, cart flow, cashier POS screenshot, and owner dashboard screenshot. This showcase uses selected visuals from the full template without exposing the private backend.": "Storefront kedai kopi realistis dengan menu online, alur keranjang, screenshot POS kasir, dan screenshot dashboard owner. Showcase ini memakai visual pilihan dari template lengkap tanpa membuka backend private.",
  "View Menu Preview": "Lihat Preview Menu",
  "See Dashboard Screenshots": "Lihat Screenshot Dashboard",
  "Template highlights": "Sorotan template",
  "Menu and cart flow": "Alur menu dan keranjang",
  "Cashier POS": "POS Kasir",
  "Walk-in order screen": "Layar order walk-in",
  "Owner Panel": "Panel Owner",
  "Sales and stock view": "Tampilan sales dan stok",
  "Menu Preview": "Preview Menu",
  "Real product photos,": "Foto produk realistis,",
  "clean ordering cards.": "kartu order yang rapi.",
  "Cold black coffee with a bright roasted finish.": "Kopi hitam dingin dengan rasa roasted yang clean.",
  "Balanced espresso, steamed milk, and soft foam.": "Espresso seimbang, steamed milk, dan foam lembut.",
  "Creamy matcha latte with a fresh green tea aroma.": "Matcha latte creamy dengan aroma green tea yang fresh.",
  "Butter Croissant": "Butter Croissant",
  "Flaky pastry for dine-in, takeaway, and bundles.": "Pastry flaky untuk dine-in, takeaway, dan paket bundle.",
  "Ordering Direction": "Arah Pemesanan",
  "From storefront to": "Dari storefront ke",
  "cashier and owner control.": "kontrol kasir dan owner.",
  "The public page shows the real buying direction only. The private source can include product management, QRIS-ready checkout, cash orders, stock guard, delivery notes, and WhatsApp notifications.": "Halaman publik hanya menunjukkan arah pembelian. Source private bisa mencakup manajemen produk, checkout siap QRIS, order cash, penjaga stok, catatan delivery, dan notifikasi WhatsApp.",
  "Products use real photos, prices, categories, and mobile-first ordering cards.": "Produk memakai foto asli, harga, kategori, dan kartu order mobile-first.",
  "The checkout direction can support QRIS, cash, take away, dine in, or delivery.": "Arah checkout bisa mendukung QRIS, cash, take away, dine in, atau delivery.",
  "Cashier can process walk-in orders, print tickets, and monitor online orders.": "Kasir bisa memproses order walk-in, mencetak tiket, dan memantau order online.",
  "Owner dashboard direction includes sales, stock, products, marketing, and reports.": "Arah dashboard owner mencakup penjualan, stok, produk, marketing, dan laporan.",
  "Panel Screenshots": "Screenshot Panel",
  "Cashier and owner previews": "Preview kasir dan owner",
  "without publishing backend files.": "tanpa mempublikasikan file backend.",
  "Walk-in order screen with product picker, cash cart, customer field, and print-ready action.": "Layar order walk-in dengan pemilih produk, cart cash, field customer, dan aksi siap print.",
  "Owner screen direction for daily sales, QRIS and cash split, recent orders, and stock alerts.": "Arah layar owner untuk penjualan harian, pembagian QRIS dan cash, order terbaru, dan alert stok.",
  "Use it as a showcase, template, or custom cafe system.": "Gunakan sebagai showcase, template, atau sistem kafe custom.",
  "Realistic storefront": "Storefront realistis",
  "Selected screenshots": "Screenshot pilihan",
  "Template customized with brand name, logo, colors, menu, WhatsApp, and business information.": "Template dikustomisasi dengan nama brand, logo, warna, menu, WhatsApp, dan informasi bisnis.",
  "Mobile menu layout": "Layout menu mobile",
  "Content and CTA setup": "Setup konten dan CTA",
  "Owner and cashier flow": "Alur owner dan kasir",
  "Send your brand name, menu list, logo, preferred color, reference design, and the features you need. The full source, backend flow, and database structure stay private until requested.": "Kirim nama brand, daftar menu, logo, warna pilihan, referensi desain, dan fitur yang dibutuhkan. Source lengkap, alur backend, dan struktur database tetap private sampai diminta.",
  "Premium Coffee Cafe Template Showcase.": "Showcase Template Premium Coffee Cafe."
};

const idAttributeTranslations = {
  "l3ocky Dev Lab — Premium Website Templates & Digital Tools": "l3ocky Dev Lab — Template Website Premium & Tools Digital",
  "L3ocky Dev Lab builds premium website templates, landing pages, and digital tools for businesses, creators, and streamers.": "L3ocky Dev Lab membuat template website premium, landing page, dan tools digital untuk bisnis, kreator, dan streamer.",
  "Premium Coffee Cafe Template — L3ocky Dev Lab": "Template Premium Coffee Cafe — L3ocky Dev Lab",
  "Premium coffee shop website template showcase with buyer page, online menu, cashier flow, and owner dashboard concept.": "Showcase template website kedai kopi premium dengan halaman pembeli, menu online, alur kasir, dan konsep dashboard owner.",
  "l3ocky Dev Lab": "l3ocky Dev Lab",
  "Main navigation": "Navigasi utama",
  "Open menu": "Buka menu",
  "Featured projects preview": "Preview proyek unggulan",
  "Highlights": "Sorotan",
  "Page navigation": "Navigasi halaman",
  "Coffee website preview mockup": "Mockup preview website kopi",
  "Premium Coffee Cafe Template - L3ocky Dev Lab": "Template Premium Coffee Cafe - L3ocky Dev Lab",
  "Realistic premium coffee shop website template showcase with online menu, cashier POS screenshot, and owner dashboard screenshot.": "Showcase template website kedai kopi premium realistis dengan menu online, screenshot POS kasir, dan screenshot dashboard owner.",
  "Back to L3ocky Dev Lab": "Kembali ke L3ocky Dev Lab",
  "Template highlights": "Sorotan template"
};

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const getForcedLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");

  if (lang === "id" || lang === "en") {
    try {
      window.localStorage.setItem("preferredLanguage", lang);
    } catch (error) {
      // Storage can be blocked by browser privacy settings.
    }

    return lang;
  }

  try {
    const stored = window.localStorage.getItem("preferredLanguage");
    if (stored === "id" || stored === "en") {
      return stored;
    }
  } catch (error) {
    // Ignore storage errors and fall back to automatic detection.
  }

  return null;
};

const shouldUseIndonesian = () => {
  const forcedLanguage = getForcedLanguage();

  if (forcedLanguage) {
    return forcedLanguage === "id";
  }

  const languages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ""];
  const hasIndonesianLanguage = languages.some((language) =>
    language.toLowerCase().startsWith("id")
  );

  let timezone = "";
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  } catch (error) {
    timezone = "";
  }

  return hasIndonesianLanguage || INDONESIA_TIMEZONES.has(timezone);
};

const translateTextContent = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return normalizeText(node.textContent)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const normalized = normalizeText(node.textContent);
    const translation = idTranslations[normalized];

    if (translation) {
      const leading = node.textContent.match(/^\s*/)[0];
      const trailing = node.textContent.match(/\s*$/)[0];
      node.textContent = leading + translation + trailing;
    }
  });
};

const translateAttributes = () => {
  document.querySelectorAll("[aria-label], [title]").forEach((element) => {
    ["aria-label", "title"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      const translation = value && idAttributeTranslations[normalizeText(value)];

      if (translation) {
        element.setAttribute(attribute, translation);
      }
    });
  });

  const titleTranslation = idAttributeTranslations[normalizeText(document.title)];
  if (titleTranslation) {
    document.title = titleTranslation;
  }

  const description = document.querySelector('meta[name="description"]');
  const descriptionTranslation = description && idAttributeTranslations[normalizeText(description.content)];
  if (descriptionTranslation) {
    description.setAttribute("content", descriptionTranslation);
  }
};

if (shouldUseIndonesian()) {
  document.documentElement.lang = "id";
  translateAttributes();
  translateTextContent();
}

if (menuBtn && navLinks) {
  menuBtn.setAttribute("aria-expanded", "false");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(navLinks.classList.contains("open")));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
