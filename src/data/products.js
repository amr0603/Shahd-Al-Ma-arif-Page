export const products = [
  { id:1, img:"product-1.jpg", nameAr:"كتب مدرسية",           nameEn:"School Books",          descAr:"منهج كامل لجميع المراحل الابتدائية والإعدادية والثانوية", descEn:"Full curriculum for primary, preparatory & secondary", priceAr:"يبدأ من 25 جنيه",  priceEn:"From 25 EGP",  badgeAr:"الأكثر طلبًا", badgeEn:"Best Seller" },
  { id:2, img:"product-2.jpg", nameAr:"أدوات مكتبية",          nameEn:"Stationery",            descAr:"أقلام، ممحاة، مساطر، براية، وكل أدوات الكتابة بأعلى جودة", descEn:"Pens, erasers, rulers, sharpeners & all writing tools", priceAr:"يبدأ من 5 جنيه",   priceEn:"From 5 EGP",   badgeAr:"عرض خاص",    badgeEn:"Special Offer" },
  { id:3, img:"product-3.jpg", nameAr:"كراسات ودفاتر",         nameEn:"Notebooks",             descAr:"كراسات مسطرة وعلوم ورسم بجميع المقاسات والألوان",          descEn:"Lined, science & drawing notebooks in all sizes",      priceAr:"يبدأ من 8 جنيه",   priceEn:"From 8 EGP",   badgeAr:"",           badgeEn:"" },
  { id:4, img:"product-4.jpg", nameAr:"حقائب مدرسية",          nameEn:"School Bags",           descAr:"تصميمات عصرية، خامات ممتازة، مناسبة لجميع الأعمار",         descEn:"Modern designs, premium materials, for all ages",       priceAr:"يبدأ من 150 جنيه", priceEn:"From 150 EGP", badgeAr:"خصم 20%",    badgeEn:"20% OFF" },
  { id:5, img:"product-5.jpg", nameAr:"ألوان وفنون",            nameEn:"Colors & Arts",         descAr:"ألوان خشب، تلوين، بوية، وكل مستلزمات الرسم والفن",          descEn:"Colored pencils, paint & all art supplies",            priceAr:"يبدأ من 30 جنيه",  priceEn:"From 30 EGP",  badgeAr:"",           badgeEn:"" },
  { id:6, img:"product-6.jpg", nameAr:"لوازم المعلمين والمكتب", nameEn:"Teacher & Office Supplies", descAr:"طباشير، لوح، ماركر، أختام، وكل اللي يحتاجه المعلم",   descEn:"Chalk, boards, markers, stamps & teacher essentials",   priceAr:"يبدأ من 10 جنيه",  priceEn:"From 10 EGP",  badgeAr:"",           badgeEn:"" },
];

export const gifts = [
  // باقات ورد
  { id:1,  img:"gift-bouquet-pink.jpg",       nameAr:"باقة ورد وردي",            nameEn:"Pink Bouquet",           cat:"flowers" },
  { id:2,  img:"gift-bouquet-red2.jpg",        nameAr:"باقة ورد أحمر كبيرة",     nameEn:"Large Red Bouquet",      cat:"flowers" },
  { id:3,  img:"gift-bouquet-blue.jpg",        nameAr:"باقة ورد أزرق",            nameEn:"Blue Bouquet",           cat:"flowers" },
  { id:4,  img:"gift-bouquet-cream.jpg",       nameAr:"باقة ورد كريمي ذهبي",     nameEn:"Cream Gold Bouquet",     cat:"flowers" },
  { id:5,  img:"gift-bouquet-red3.jpg",        nameAr:"باقة قلب أحمر",            nameEn:"Heart Red Bouquet",      cat:"flowers" },
  { id:6,  img:"gift-bouquet-white.jpg",       nameAr:"باقة ورد أبيض",            nameEn:"White Bouquet",          cat:"flowers" },
  { id:7,  img:"gift-bouquet-red.jpg",         nameAr:"باقة ورد أحمر صغيرة",     nameEn:"Small Red Bouquet",      cat:"flowers" },
  { id:8,  img:"gift-bouquet-heart-pink.jpg",  nameAr:"باقة قلب وردي",            nameEn:"Pink Heart Bouquet",     cat:"flowers" },
  // أكواب
  { id:9,  img:"gift-mug-sister.jpg",          nameAr:"كوب — هدية الأخت",        nameEn:"Sister Mug",             cat:"mugs" },
  { id:10, img:"gift-mug-cat.jpg",             nameAr:"كوب مطبوع كيوت",           nameEn:"Cute Printed Mug",       cat:"mugs" },
  { id:11, img:"gift-mug-teacher.jpg",         nameAr:"كوب — شكراً معلمتي",      nameEn:"Teacher Thank You Mug",  cat:"mugs" },
  { id:12, img:"gift-mug-magic.jpg",           nameAr:"كوب سحري بالصورة",        nameEn:"Magic Photo Mug",        cat:"mugs" },
  { id:13, img:"gift-mug-magic2.jpg",          nameAr:"كوب سحري ملون",           nameEn:"Color-Change Magic Mug", cat:"mugs" },
  // كوبايات زجاج
  { id:14, img:"gift-glass-cups.jpg",          nameAr:"كوبايات زجاج مزهرة",      nameEn:"Floral Glass Cups",      cat:"mugs" },
  // إطارات
  { id:15, img:"gift-frame-butterfly.jpg",     nameAr:"إطار ديكور فراشة",        nameEn:"Butterfly Frame",        cat:"frames" },
  { id:16, img:"gift-frame-baby.jpg",          nameAr:"إطار مولود جديد",         nameEn:"Baby Frame",             cat:"frames" },
  { id:17, img:"gift-frame-friend.jpg",        nameAr:"إطار — هدية الصديقة",     nameEn:"Friendship Frame",       cat:"frames" },
  { id:18, img:"gift-frame-grad.jpg",          nameAr:"إطار تخرج مميز",          nameEn:"Graduation Frame",       cat:"frames" },
  { id:19, img:"gift-frame-twins.jpg",         nameAr:"إطار مولود توأم",         nameEn:"Twins Baby Frame",       cat:"frames" },
  { id:20, img:"gift-frame-wedding.jpg",       nameAr:"إطار زواج فاخر",          nameEn:"Wedding Frame",          cat:"frames" },
  { id:21, img:"gift-frame-islamic.jpg",       nameAr:"إطار إسلامي للزواج",      nameEn:"Islamic Wedding Frame",  cat:"frames" },
  // متفرقات
  { id:22, img:"gift-bottles.jpg",             nameAr:"زجازات مياه ملونة",        nameEn:"Colorful Water Bottles", cat:"other" },
  { id:23, img:"gift-box-choco.jpg",           nameAr:"بوكس هدايا فاخر",          nameEn:"Luxury Gift Box",        cat:"other" },
  { id:24, img:"gift-planner.jpg",             nameAr:"بلانر أسبوعي",             nameEn:"Weekly Planner",         cat:"other" },
];

// كراسات HEGAZY الجديدة 🆕
export const notebooks = [
  { id:1, img:"notebook-princess.jpg",  nameAr:"كراسة أميرات ديزني",       nameEn:"Disney Princess Notebook",    cat:"girls" },
  { id:2, img:"notebook-batman.jpg",    nameAr:"كراسة باتمان وأبطال",      nameEn:"Batman & Heroes Notebook",    cat:"boys" },
  { id:3, img:"notebook-dino.jpg",      nameAr:"كراسة ديناصورات وأنجري",   nameEn:"Dino & Angry Birds Notebook", cat:"boys" },
  { id:4, img:"notebook-stitch.jpg",    nameAr:"كراسة ستيتش وإنسايد أوت", nameEn:"Stitch & Inside Out Notebook", cat:"girls" },
  { id:5, img:"notebook-frozen.jpg",    nameAr:"كراسة فروزن ورابونزل",     nameEn:"Frozen & Rapunzel Notebook",  cat:"girls" },
  { id:6, img:"notebook-baby-fish.jpg", nameAr:"كراسة بيبي مربعات",        nameEn:"Baby Fish Grid Notebook",     cat:"girls" },
  { id:7, img:"notebook-mickey.jpg",    nameAr:"كراسة ميكي وحيوانات",      nameEn:"Mickey & Animals Notebook",   cat:"boys" },
  { id:8, img:"notebook-sanrio.jpg",    nameAr:"دفتر سانريو كيوت",          nameEn:"Sanrio Cute Notebook",        cat:"girls" },
];

// أدوات مكتبية كيوت جديدة 🆕
export const cuteStationery = [
  { id:1, img:"stationery-stickynotes.jpg",  nameAr:"ستيكي نوتس كيوت",       nameEn:"Cute Sticky Notes" },
  { id:2, img:"stationery-stickynotes2.jpg", nameAr:"ستيكي نوتس سانريو",     nameEn:"Sanrio Sticky Notes" },
  { id:3, img:"stationery-stickynotes3.jpg", nameAr:"ستيكي نوتس سمكة وقرش",  nameEn:"Fish Sticky Notes" },
  { id:4, img:"stationery-cute.jpg",         nameAr:"أدوات كيوت متنوعة",     nameEn:"Cute Stationery Set" },
];

export const giftCategories = [
  { id:"all",     ar:"الكل",       en:"All" },
  { id:"flowers", ar:"باقات ورد",  en:"Bouquets" },
  { id:"mugs",    ar:"أكواب",      en:"Mugs" },
  { id:"frames",  ar:"إطارات",     en:"Frames" },
  { id:"other",   ar:"متفرقات",    en:"Other" },
];

export const notebookCategories = [
  { id:"all",   ar:"الكل",     en:"All" },
  { id:"girls", ar:"بنات 🎀",  en:"Girls 🎀" },
  { id:"boys",  ar:"أولاد ⚡", en:"Boys ⚡" },
];