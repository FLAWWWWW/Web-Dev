import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Technique' },
    { id: 2, name: 'Jewelry' },
    { id: 3, name: 'Shoes' },
    { id: 4, name: 'Pet food' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Клавиатура Ultra-S ULTKB03 серый',
      description: 'Представляем игровую клавиатуру от Ultra-S — мощный инструмент, созданный для побед и максимального комфорта!',
      price: 23408,
      rating: 2.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/p48/72176322.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3d/p48/72176322.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/p48/72176323.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p48/72176324.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/ultra-s-ultkb03-seryi-147884231/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Мышь Ultra-S ULTMICE11-H2 белый',
      description: 'Представляем игровую мышь от Ultra-S — сочетание стиля, мощности и высокой функциональности для настоящих побед.',
      price: 9800,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pee/69280945.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/pee/69280945.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/ultra-s-ultmice11-h2-belyi-146975135/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Серьги N бижутерный сплав, стразы',
      description: 'Серьги N — стильный аксессуар, который добавит изысканности вашему образу. Изготовленные из бижутерного сплава и украшенные блеском страз, они идеально подойдут для любого случая.',
      price: 217,
      rating: 1.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h18/69466220003358.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h18/69466220003358.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/ser-gi-n-bizhuternyi-splav-strazy-109090969/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 4,
      name: 'Серьги ChengSe Базовая коллекция бижутерный сплав, медицинская сталь, без вставок',
      description: 'Серьги ChengSe из медицинской стали',
      price: 235,
      rating: 3.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h0d/84611066658846.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h18/69466220003358.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/ser-gi-chengse-bazovaja-kollektsija-bizhuternyi-splav-meditsinskaja-stal-bez-vstavok-114980290/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 5,
      name: 'Тапочки ByRonica графит, черный',
      description: 'Тапочки ByRonica MV Br-D2 — стильный и комфортный выбор для домашнего использования, который сочетает в себе премиальные материалы и современный дизайн.',
      price: 1895,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p88/79780202.jpeg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p88/79780202.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/tapochki-byronica-mv-br-d2-grafit-chernyi-38-39-150066532/?c=750000000&hasVariants=true',
      likes: 0,
      categoryId: 3
    },
    {
      id: 6,
      name: 'Галоши RT черный',
      description: 'Галоши RT — стильное и практичное решение для защиты ваших ног в любую погоду.',
      price: 1559,
      rating: 2.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/hec/85318467190814.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/hec/85318467190814.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/galoshi-rt-art-106m-chernyi-36-110870621/?c=750000000&hasVariants=true',
      likes: 0,
      categoryId: 3
    },
    {
      id: 7,
      name: 'Корм Felix кусочки в желе ягненок 75 г 1 шт',
      description: 'Каждый котик желает наслаждаться совершенно особенным кормом, у которого будет такой аппетитный вид и аромат, словно Вы приготовили его сами.',
      price: 204,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p05/p11/5058379.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p05/p11/5058379.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/felix-kusochki-v-zhele-jagnenok-75-g-1-sht-100218721/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 8,
      name: 'Корм Darling Darling кусочки в соусе говядина 75 г 1 шт',
      description: 'Корм Дарлинг для кошек - это сбалансированное питание, в котором содержится на 100% всё, что нужно кошке каждый день.',
      price: 189,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h18/84798257594398.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h18/84798257594398.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/darling-darling-kusochki-v-souse-govjadina-75-g-1-sht-110583732/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 9,
      name: 'Пароочиститель atreon DFHS-01 белый, черный',
      description: 'Пароочиститель Atreon 3 в 1 — мощная уборка без химии! Универсальный помощник для дома: Пароочиститель. Отпариватель. Стеклоочиститель',
      price: 24900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd7/p7b/97012559.jpeg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h3d/69203311656990.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/paroochistitel-atreon-dfhs-01-belyi-chernyi-142540734/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 10,
      name: 'Аэрогриль Merlin FD-1017B 16 л черно-серебристый',
      description: 'Аэрогриль FD-1017B — современное решение для приготовления вкусных и полезных блюд с минимальными усилиями.',
      price: 54990,
      rating: 3.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd2/pd6/89142749.jpeg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/merlin-fd-1017b-16-l-cherno-serebristyi-150681417/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 11,
      name: 'Пылесос AINOMI A1 Premium Power Черный, Мокрый Асфальт',
      description: 'AINOMI A1 Premium Power — это современный вертикальный беспроводной пылесос с мощностью 400 Вт, созданный для идеальной уборки любых поверхностей.',
      price: 79990,
      rating: 3.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p69/pd2/87533453.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/ainomi-a1-premium-power-chernyi-mokryi-asfal-t-137712147/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 12,
      name: 'Серьги Лепестки бижутерный сплав, без вставок',
      description: 'Серьги Лепестки — это стильное и элегантное украшение, которое добавит изысканности вашему образу. Изготовленные из бижутерного сплава, они идеально подойдут для повседневной носки и особых случаев.',
      price: 69,
      rating: 1.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h46/81270775021598.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/ser-gi-lepestki-bizhuternyi-splav-bez-vstavok-110853997/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 13,
      name: 'Цепь Raderico QR583022258 длина 50 см, вес 1.29 г золото, плетение нонна',
      description: 'Эта изысканная цепочка от бренда Raderico выполнена из высококачественного золота 585 пробы, что гарантирует долговечность и блеск изделия.',
      price: 96999,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hda/83591672463390.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/raderico-qr583022258-dlina-50-sm-ves-1-29-g-zoloto-pletenie-nonna-113173613/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 14,
      name: 'Цепь Кубачи 632 длина 65 см, вес 45 г серебро, плетение питон',
      description: 'Цепь Кубачи 632 — стильное украшение для мужчин, выполненное из серебра 925 пробы. Эта цепь длиной 65 см станет отличным дополнением к любому образу, подчеркивая вашу индивидуальность и вкус.',
      price: 137852,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/hed/84920174346270.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/kubachi-632-dlina-65-sm-ves-45-g-serebro-pletenie-piton-115913585/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 15,
      name: 'Кроссовки Термо Кроссовки синий, черный',
      description: 'Кроссовки Термо Кроссовки — идеальный выбор для активных мужчин, которые ценят комфорт и стиль в повседневной жизни. Эти кроссовки обеспечивают надежную защиту от холода и влаги, благодаря использованию высококачественных материалов.',
      price: 14998,
      rating: 3.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1b/p99/82899568.jpeg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/krossovki-termo-krossovki-16425159-934663601-sinii-chernyi-39-151038080/?c=750000000&hasVariants=true',
      likes: 0,
      categoryId: 3
    },
    {
      id: 16,
      name: 'Тапочки ByRonica черный',
      description: 'Тапочки ByRonica PREMIUM — стильный выбор для домашнего комфорта, который сочетает высокое качество и современный дизайн. Эти тапочки идеально подойдут для круглогодичного использования, обеспечивая уют и поддержку вашим ногам.',
      price: 3150,
      rating: 1.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p40/69029876.jpeg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/tapochki-byronica-premium-chernyi-44-45-146912871/?c=750000000&hasVariants=true',
      likes: 0,
      categoryId: 3
    },
    {
      id: 17,
      name: 'Дутики FASHION 015 черный',
      description: 'Дутики FASHION 015 — стильное и комфортное решение для зимнего сезона, обеспечивающее тепло и защиту в холодную погоду.',
      price: 6500,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p91/p20/95595536.bin?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dutiki-fashion-015-chernyi-37-115262300/?c=750000000&hasVariants=true',
      likes: 0,
      categoryId: 3
    },
    {
      id: 18,
      name: 'Корм Monge Sterilised для стерилизованных утка 1.5 кг',
      description: 'Monge Natural Superpremium Monoprotein Duck сухой монобелковый рацион из линейки Speciality Line для стерилизованных кошек с пониженным содержанием калорий.',
      price: 12500,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/hef/63916229656606.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/monge-sterilised-dlja-sterilizovannyh-utka-1-5-kg-100475937/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'ZABAVA когтеточка Z21 белый, серый',
      description: 'Когтеточка Забава Z21 — идеальное место для отдыха и игр вашей кошки, сочетая функциональность и комфорт.',
      price: 33000,
      rating: 3.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h78/86568103378974.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/zabava-kogtetochka-z21-belyi-seryi-119372404/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Наполнитель Fyrst Буся Тофу Зеленый чай комкующийся 60 л',
      description: 'Наполнитель для кошачьего лотка Буся c ароматом Зеленого чая изготовлен из натуральных растительных компонентов и является идеальным выбором для котят и кошек.',
      price: 23402,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9c/pf5/38414040.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/fyrst-busja-tofu-zelenyi-chai-komkujuschiisja-60-l-138593264/?c=750000000',
      likes: 0,
      categoryId: 4
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
}