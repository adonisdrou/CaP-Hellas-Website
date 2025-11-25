export type Language = 'en' | 'el' | 'pl';

export interface Translations {
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    import: {
      title: string;
      description: string;
    };
    export: {
      title: string;
      description: string;
    };
    range: {
      title: string;
      description: string;
    };
  };
  products: {
    title: string;
    categories: {
      fruits: string;
      vegetables: string;
      other: string;
      all: string;
    };
    origin: {
      greece: string;
      poland: string;
    };
    items: {
      strawberries: string;
      oranges: string;
      mandarins: string;
      lemons: string;
      grapes: string;
      apples: string;
      peaches: string;
      watermelon: string;
      kiwi: string;
      apricots: string;
      nectarines: string;
      bananas: string;
      tomatoes: string;
      cucumbers: string;
      peppers: string;
      lettuce: string;
      carrots: string;
      broccoli: string;
      cabbage: string;
      oliveOil: string;
      olives: string;
      pomegranateJuice: string;
      raisins: string;
      whiteWine: string;
      roseWine: string;
      halva: string;
      honey: string;
      pepperSpreads: string;
      jams: string;
      tomatoSauces: string;
      stuffedPeppers: string;
      pickledBeets: string;
      pickledCucumbers: string;
      capers: string;
      fetaCheese: string;
      yogurt: string;
      longPeppers: string;
      florinaPeppersInBrine: string;
      redPeppersInOil: string;
      driedFigs: string;
      driedFruits: string;
    };
  };
  about: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      language: string;
      submit: string;
      success: string;
    };
    info: {
      company: string;
      contact: string;
      address: string;
    };
  };
  footer: {
    company: string;
    quickLinks: string;
    languages: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Fresh Produce Trading Between Greece & Poland',
      subtitle: 'Premium quality fruits, vegetables, and specialty products. Your trusted partner in international trade.',
      cta: 'View Products',
    },
    services: {
      title: 'Our Services',
      import: {
        title: 'Import Services',
        description: 'High-quality Greek products delivered to Poland, including Mediterranean fruits, vegetables, and specialty items.',
      },
      export: {
        title: 'Export Services',
        description: 'Polish agricultural excellence exported to Greece, ensuring fresh delivery and competitive pricing.',
      },
      range: {
        title: 'Wide Product Range',
        description: 'From fresh seasonal fruits and vegetables to specialty products, we offer comprehensive trading solutions.',
      },
    },
    products: {
      title: 'Featured Products',
      categories: {
        fruits: 'Fruits',
        vegetables: 'Vegetables',
        other: 'Other Products',
        all: 'All Products',
      },
      origin: {
        greece: 'Greece',
        poland: 'Poland',
      },
      items: {
        strawberries: 'Strawberries',
        oranges: 'Oranges',
        mandarins: 'Mandarins',
        lemons: 'Lemons',
        grapes: 'Grapes',
        apples: 'Apples',
        peaches: 'Peaches',
        watermelon: 'Watermelon',
        kiwi: 'Kiwi',
        apricots: 'Apricots',
        nectarines: 'Nectarines',
        bananas: 'Bananas',
        tomatoes: 'Tomatoes',
        cucumbers: 'Cucumbers',
        peppers: 'Bell Peppers',
        lettuce: 'Lettuce',
        carrots: 'Carrots',
        broccoli: 'Broccoli',
        cabbage: 'Cabbage',
        oliveOil: 'Olive Oil',
        olives: 'Olives',
        pomegranateJuice: 'Pomegranate Juice',
        raisins: 'Raisins',
        whiteWine: 'White Wine',
        roseWine: 'Rose Wine',
        halva: 'Halva',
        honey: 'Honey',
        pepperSpreads: 'Pepper Spreads',
        jams: 'Jams',
        tomatoSauces: 'Tomato Sauces',
        stuffedPeppers: 'Stuffed Peppers',
        pickledBeets: 'Pickled Beets',
        pickledCucumbers: 'Pickled Cucumbers',
        capers: 'Capers',
        fetaCheese: 'Feta Cheese',
        yogurt: 'Yogurt',
        longPeppers: 'Long Macedonian Peppers',
        florinaPeppersInBrine: 'Florina Peppers in Brine',
        redPeppersInOil: 'Red Peppers in Oil',
        driedFigs: 'Dried Figs',
        driedFruits: 'Dried Fruits & Nuts',
      },
    },
    about: {
      title: 'About CaP Hellas E.E',
      content: 'CaP Hellas E.E specializes in the import and export of fresh produce between Greece and Poland. With deep expertise in both markets, we ensure the highest quality standards and reliable logistics for our B2B partners. Our mission is to bridge the agricultural excellence of both countries, delivering fresh, premium products while maintaining competitive pricing and exceptional service.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Contact us for inquiries about our products and services',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        language: 'Preferred Language',
        submit: 'Send Message',
        success: 'Thank you! We will contact you soon.',
      },
      info: {
        company: 'Company Information',
        contact: 'Contact Person',
        address: 'Address',
      },
    },
    footer: {
      company: 'Company',
      quickLinks: 'Quick Links',
      languages: 'Languages',
      copyright: '© 2025 CaP Hellas E.E. All rights reserved.',
    },
  },
  el: {
    nav: {
      home: 'Αρχική',
      products: 'Προϊόντα',
      about: 'Σχετικά',
      contact: 'Επικοινωνία',
    },
    hero: {
      title: 'Εμπόριο Φρέσκων Προϊόντων μεταξύ Ελλάδας & Πολωνίας',
      subtitle: 'Προϊόντα premium ποιότητας φρούτων, λαχανικών και ειδικών προϊόντων. Ο αξιόπιστος συνεργάτης σας στο διεθνές εμπόριο.',
      cta: 'Δείτε Προϊόντα',
    },
    services: {
      title: 'Οι Υπηρεσίες μας',
      import: {
        title: 'Υπηρεσίες Εισαγωγής',
        description: 'Ελληνικά προϊόντα υψηλής ποιότητας που παραδίδονται στην Πολωνία, συμπεριλαμβανομένων μεσογειακών φρούτων, λαχανικών και ειδικών προϊόντων.',
      },
      export: {
        title: 'Υπηρεσίες Εξαγωγής',
        description: 'Πολωνική γεωργική αριστεία που εξάγεται στην Ελλάδα, εξασφαλίζοντας φρέσκια παράδοση και ανταγωνιστικές τιμές.',
      },
      range: {
        title: 'Ευρεία Γκάμα Προϊόντων',
        description: 'Από φρέσκα εποχιακά φρούτα και λαχανικά έως ειδικά προϊόντα, προσφέρουμε ολοκληρωμένες εμπορικές λύσεις.',
      },
    },
    products: {
      title: 'Προτεινόμενα Προϊόντα',
      categories: {
        fruits: 'Φρούτα',
        vegetables: 'Λαχανικά',
        other: 'Άλλα Προϊόντα',
        all: 'Όλα τα Προϊόντα',
      },
      origin: {
        greece: 'Ελλάδα',
        poland: 'Πολωνία',
      },
      items: {
        strawberries: 'Φράουλες',
        oranges: 'Πορτοκάλια',
        mandarins: 'Μανταρίνια',
        lemons: 'Λεμόνια',
        grapes: 'Σταφύλια',
        apples: 'Μήλα',
        peaches: 'Ροδάκινα',
        watermelon: 'Καρπούζι',
        kiwi: 'Ακτινίδια',
        apricots: 'Βερικοκά',
        nectarines: 'Νεκταρίνιες',
        bananas: 'Μπανάνες',
        tomatoes: 'Ντομάτες',
        cucumbers: 'Αγγούρια',
        peppers: 'Πιπεριές',
        lettuce: 'Μαρούλι',
        carrots: 'Καρότα',
        broccoli: 'Μπρόκολο',
        cabbage: 'Λάχανο',
        oliveOil: 'Ελαιόλαδο',
        olives: 'Ελιές',
        pomegranateJuice: 'Χυμός Ρόδι',
        raisins: 'Σταφίδες',
        whiteWine: 'Λευκό Κρασί',
        roseWine: 'Ροζέ Κρασί',
        halva: 'Χαλβάς',
        honey: 'Μέλι',
        pepperSpreads: 'Αλοιφές Πιπεριάς',
        jams: 'Μαρμελάδες',
        tomatoSauces: 'Σάλτσες Ντομάτας',
        stuffedPeppers: 'Πιπεριές Γεμιστές Φλώρινας',
        pickledBeets: 'Παντζάρι σε Άλμη',
        pickledCucumbers: 'Αγγουράκια σε Άλμη',
        capers: 'Κάπαρη',
        fetaCheese: 'Τυρί Φέτα',
        yogurt: 'Γιαούρτι',
        longPeppers: 'Μακροστενές Πιπεριές',
        florinaPeppersInBrine: 'Πιπεριές Φλώρινας σε Άλμη',
        redPeppersInOil: 'Μικρά Κόκκινα Πιπεράκια σε Λάδι',
        driedFigs: 'Αποξηραμένα Σύκα',
        driedFruits: 'Ξηροί Καρποί',
      },
    },
    about: {
      title: 'Σχετικά με την CaP Hellas E.E',
      content: 'Η CaP Hellas E.E ειδικεύεται στην εισαγωγή και εξαγωγή φρέσκων προϊόντων μεταξύ Ελλάδας και Πολωνίας. Με βαθιά τεχνογνωσία και στις δύο αγορές, διασφαλίζουμε τα υψηλότερα πρότυπα ποιότητας και αξιόπιστη logistics για τους B2B συνεργάτες μας. Η αποστολή μας είναι να γεφυρώσουμε τη γεωργική αριστεία και των δύο χωρών, παραδίδοντας φρέσκα, premium προϊόντα διατηρώντας ανταγωνιστικές τιμές και εξαιρετική εξυπηρέτηση.',
    },
    contact: {
      title: 'Επικοινωνήστε μαζί μας',
      subtitle: 'Επικοινωνήστε μαζί μας για ερωτήσεις σχετικά με τα προϊόντα και τις υπηρεσίες μας',
      form: {
        name: 'Ονοματεπώνυμο',
        email: 'Διεύθυνση Email',
        phone: 'Τηλέφωνο',
        message: 'Το Μήνυμά σας',
        language: 'Προτιμώμενη Γλώσσα',
        submit: 'Αποστολή Μηνύματος',
        success: 'Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα.',
      },
      info: {
        company: 'Στοιχεία Εταιρείας',
        contact: 'Υπεύθυνος Επικοινωνίας',
        address: 'Διεύθυνση',
      },
    },
    footer: {
      company: 'Εταιρεία',
      quickLinks: 'Γρήγοροι Σύνδεσμοι',
      languages: 'Γλώσσες',
      copyright: '© 2025 CaP Hellas E.E. Όλα τα δικαιώματα διατηρούνται.',
    },
  },
  pl: {
    nav: {
      home: 'Strona główna',
      products: 'Produkty',
      about: 'O nas',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Handel Świeżymi Produktami między Grecją a Polską',
      subtitle: 'Owoce, warzywa i produkty specjalne najwyższej jakości. Twój zaufany partner w handlu międzynarodowym.',
      cta: 'Zobacz Produkty',
    },
    services: {
      title: 'Nasze Usługi',
      import: {
        title: 'Usługi Importowe',
        description: 'Wysokiej jakości greckie produkty dostarczane do Polski, w tym śródziemnomorskie owoce, warzywa i produkty specjalne.',
      },
      export: {
        title: 'Usługi Eksportowe',
        description: 'Polska doskonałość rolnicza eksportowana do Grecji, zapewniając świeżą dostawę i konkurencyjne ceny.',
      },
      range: {
        title: 'Szeroka Gama Produktów',
        description: 'Od świeżych sezonowych owoców i warzyw po produkty specjalne, oferujemy kompleksowe rozwiązania handlowe.',
      },
    },
    products: {
      title: 'Polecane Produkty',
      categories: {
        fruits: 'Owoce',
        vegetables: 'Warzywa',
        other: 'Inne Produkty',
        all: 'Wszystkie Produkty',
      },
      origin: {
        greece: 'Grecja',
        poland: 'Polska',
      },
      items: {
        strawberries: 'Truskawki',
        oranges: 'Pomarańcze',
        mandarins: 'Mandarynki',
        lemons: 'Cytryny',
        grapes: 'Winogrona',
        apples: 'Jabłka',
        peaches: 'Brzoskwinie',
        watermelon: 'Arbuz',
        kiwi: 'Kiwi',
        apricots: 'Morele',
        nectarines: 'Nektarynki',
        bananas: 'Banany',
        tomatoes: 'Pomidory',
        cucumbers: 'Ogórki',
        peppers: 'Papryka',
        lettuce: 'Sałata',
        carrots: 'Marchewki',
        broccoli: 'Brokuły',
        cabbage: 'Kapusta',
        oliveOil: 'Oliwa z oliwek',
        olives: 'Oliwki',
        pomegranateJuice: 'Sok z granatu',
        raisins: 'Rodzynki',
        whiteWine: 'Białe Wino',
        roseWine: 'Rosé Wino',
        halva: 'Helwa',
        honey: 'Miód',
        pepperSpreads: 'Pasty z Papryki',
        jams: 'Dżemy',
        tomatoSauces: 'Sosy Pomidorowe',
        stuffedPeppers: 'Papryka Faszerowana',
        pickledBeets: 'Buraki w Zalewie',
        pickledCucumbers: 'Ogórki Kiszone',
        capers: 'Kaparki',
        fetaCheese: 'Ser Feta',
        yogurt: 'Jogurt',
        longPeppers: 'Długie Papryki Macedońskie',
        florinaPeppersInBrine: 'Papryka Florina w Zalewie',
        redPeppersInOil: 'Małe Czerwone Papryczki w Oliwie',
        driedFigs: 'Suszone Figi',
        driedFruits: 'Suszone Owoce i Orzechy',
      },
    },
    about: {
      title: 'O CaP Hellas E.E',
      content: 'CaP Hellas E.E specjalizuje się w imporcie i eksporcie świeżych produktów między Grecją a Polską. Dzięki głębokiej wiedzy o obu rynkach, zapewniamy najwyższe standardy jakości i niezawodną logistykę dla naszych partnerów B2B. Naszą misją jest łączenie doskonałości rolniczej obu krajów, dostarczając świeże, premium produkty przy zachowaniu konkurencyjnych cen i wyjątkowej obsługi.',
    },
    contact: {
      title: 'Skontaktuj się z nami',
      subtitle: 'Skontaktuj się z nami w sprawie zapytań dotyczących naszych produktów i usług',
      form: {
        name: 'Imię i nazwisko',
        email: 'Adres email',
        phone: 'Numer telefonu',
        message: 'Twoja wiadomość',
        language: 'Preferowany język',
        submit: 'Wyślij wiadomość',
        success: 'Dziękujemy! Skontaktujemy się wkrótce.',
      },
      info: {
        company: 'Informacje o firmie',
        contact: 'Osoba kontaktowa',
        address: 'Adres',
      },
    },
    footer: {
      company: 'Firma',
      quickLinks: 'Szybkie linki',
      languages: 'Języki',
      copyright: '© 2025 CaP Hellas E.E. Wszelkie prawa zastrzeżone.',
    },
  },
};
