import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

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
      categoryId: 0
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
      categoryId: 0
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
      categoryId: 0
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
      categoryId: 0
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
      categoryId: 0
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
      categoryId: 0
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
      categoryId: 0
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
      categoryId: 0
    },
    {
      id: 9,
      name: 'Бутылка для воды 2 литра 1007 2000 мл голубой',
      description: 'Вы можете выбирать любой цвет бутылки! (голубой, зеленый, фиолетовый) только напишите пожалуйста какой вам цвет нужен.',
      price: 1284,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h3d/69203311656990.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h3d/69203311656990.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/butylka-dlja-vody-2-litra-1007-2000-ml-goluboi-108970626/?c=750000000',
      likes: 0,
      categoryId: 0
    },
    {
      id: 10,
      name: 'Креатин Qazprotein Creatine Monohydrate нейтральный 150 г',
      description: 'Особенности: 100% Халяльный продукт. Микронизирован до минимальной фракции. Без вкуса и запаха.',
      price: 4190,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h64/86530483650590.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hde/86304170045502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h60/86304170111070.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/kreatin-qazprotein-creatine-monohydrate-neitral-nyi-150-g-112792116/?c=750000000',
      likes: 0,
      categoryId: 0
    },
  ];
}
