import sofa1 from './images/sofa-1.jpg';
import sofa2 from './images/sofa-2.jpg';
import sofa3 from './images/sofa-3.jpg';
import smartTv1 from './images/smart-tv-1.jpg'
import smartTv2 from './images/smart-tv-2.jpg'
import smartTv3 from './images/smart-tv-3.jpg'
import crystalLamp1 from './images/CrystalChandelier-1.jpg'
import crystalLamp2 from './images/CrystalChandelier-2.jpg'
import crystalLamp3 from './images/CrystalChandelier-3.jpg'
import modernChair1 from './images/modernChair-1.webp'
import modernChair2 from './images/modernChair-2.webp'
import modernChair3 from './images/modernChair-3.webp'
import coffeTable1 from './images/coffe-table-1.webp'
import coffeTable2 from './images/coffe-table-2.webp'
import coffeTable3 from './images/coffe-table-3.webp'
import facialCream1 from './images/facialCream-1.jpg'
import facialCream2 from './images/facialCream-2.jpg'
import facialCream3 from './images/facialCream-3.jpg'
import wirlessHeadPhones1 from './images/wirlessHeadphones-1.jpg'
import wirlessHeadPhones2 from './images/wirlessHeadphones-2.jpg'
import wirlessHeadPhones3 from './images/wirlessHeadphones-3.jpg'
import floorLamp1 from './images/floor-lamps-1.webp'
import floorLamp2 from './images/floor-lamps-2.webp'
import floorLamp3 from './images/floor-lamps-3.webp'
import bedframe1 from './images/bed-frame-1.jpg'
import bedframe2 from './images/bed-frame-2.jpg'
import bedframe3 from './images/bed-frame-3.jpg'
import desklamp1 from './images/desk-lamp-1.jpg'
import desklamp2 from './images/desk-lamp-2.jpg'
import desklamp3 from './images/desk-lamp-3.jpg'
import serum1 from './images/serum-1.webp'
import serum2 from './images/serum-2.jpg'
import serum3 from './images/serum-3.jpg'
import wookware1 from './images/wookware-1.webp'
import wookware2 from './images/wookware-2.webp'
import wookware3 from './images/wookware-3.webp'
import readibgLamp1 from './images/readinglamp-1.webp'
import readibgLamp2 from './images/readinglamp-2.webp'
import readibgLamp3 from './images/readinglamp-3.webp'
import bakeset1 from './images/bakeware-set-1.webp'
import bakeset2 from './images/bakeware-set-2.webp'
import bakeset3 from './images/bakeware-set-3.webp'
import penLamp1 from './images/penLight-1.webp'
import penLamp2 from './images/penLight-2.webp'
import penLamp3 from './images/penLight-3.webp'
import officeChair1 from './images/office-chair-1.jpg'
import officeChair2 from './images/office-chair-2.jpg'
import officeChair3 from './images/office-chair-3.jpg'
import wallLamp1 from './images/wall-lamp-1.jpg'
import wallLamp2 from './images/wall-lamp-2.jpg'
import wallLamp3 from './images/wall-lamp-3.jpg'
import outdoorChair1 from './images/outdoorChair-1.webp'
import outdoorChair2 from './images/outdoorChair-2.webp'
import outdoorChair3 from './images/outdoorChair-3.webp'
import bodyLotion1 from './images/bodyLotion-1.webp'
import bodyLotion2 from './images/bodyLotion-2.webp'
import bodyLotion3 from './images/bodyLotion-3.webp'
import vintageDesk1 from './images/vintage-desk-1.jpg'
import vintageDesk2 from './images/vintage-desk-2.jpg'
import vintageDesk3 from './images/vintage-desk-3.jpg'
import armchair1 from './images/armchair-1.webp'
import armchair2 from './images/armchair-2.webp'
import armchair3 from './images/armchair-3.webp'

export const data = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "Furniture",
    price: 599,
    description: "Stylish and comfortable sofa for your living room. This modern sofa features sleek lines and plush cushions, offering both style and comfort. Upholstered in high-quality leather, it's easy to clean and maintain. The perfect centerpiece for any contemporary living space.",
    texture: "Leather",
    weight: "30kg",
    size: "80x200x90cm",
    images: [sofa1, sofa2, sofa3],
    trendingNow: true,
    proud: true,
  },
  {
    id: 2,
    name: "Smart LED TV",
    category: "Electronics",
    price: 899,
    description: "High-quality 4K Smart TV with built-in streaming apps. Enjoy immersive entertainment with stunning clarity and vibrant colors. This sleek TV is perfect for movie nights and gaming sessions. With its smart features, you can access your favorite streaming services with ease.",
    texture: "Plastic",
    weight: "15kg",
    size: "55 inches",
    images: [smartTv1, smartTv2, smartTv3],
    trendingNow: true,
    proud: false,
  },
  {
    id: 3,
    name: "Crystal Chandelier",
    category: "Lamps",
    price: 499,
    description: "Elegant crystal chandelier for adding a touch of luxury. Illuminate your space with elegance and sophistication. This stunning chandelier features sparkling crystals and a timeless design. Perfect for enhancing the ambiance of your dining room or foyer.",
    texture: "Crystal",
    weight: "15kg",
    size: "80x80x50cm",
    images: [crystalLamp1, crystalLamp2, crystalLamp3],
    trendingNow: false,
    proud: true,
  },
  {
    id: 4,
    name: "Modern Dining Chair",
    category: "Chairs",
    price: 99,
    description: "Sleek and modern dining chair for your kitchen or dining room. Upgrade your dining experience with this stylish and comfortable chair. Made from durable plastic, it's easy to clean and maintain. The perfect addition to any contemporary dining space.",
    texture: "Plastic",
    weight: "5kg",
    size: "40x40x90cm",
    images: [modernChair1, modernChair2, modernChair3],
    trendingNow: false,
    proud: false,
  },
  {
    id: 5,
    name: "Modern Coffee Table",
    category: "Furniture",
    price: 199,
    description: "Sleek and minimalist coffee table for your living room. Add a touch of modern elegance to your living space with this stylish coffee table. Featuring a glass top and sleek metal legs, it's both functional and chic. The perfect centerpiece for any contemporary living room.",
    texture: "Glass",
    weight: "20kg",
    size: "90x90x45cm",
    images: [coffeTable1, coffeTable2, coffeTable3],
    trendingNow: false,
    proud: false,
  },
  {
    id: 6,
    name: "Hydrating Facial Cream",
    category: "Skin Care",
    price: 39,
    description: "Nourishing facial cream for hydrated and glowing skin. Pamper your skin with this luxurious facial cream. Formulated with nourishing ingredients, it deeply hydrates and revitalizes your skin. Say goodbye to dryness and hello to a radiant complexion.",
    texture: "Cream",
    weight: "50g",
    size: "Small jar",
    images: [facialCream1, facialCream2, facialCream3],
    trendingNow: false,
    proud: false,
  },
  {
    id: 7,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 199,
    description: "Premium wireless headphones for immersive listening experience. Immerse yourself in your favorite music with these high-quality wireless headphones. With advanced sound technology and comfortable design, they offer superior sound quality and all-day comfort.",
    texture: "Metal",
    weight: "0.5kg",
    size: "Adjustable",
    images: [wirlessHeadPhones1, wirlessHeadPhones2, wirlessHeadPhones3],
    trendingNow: false,
    proud: true,
  },
  {
    id: 8,
    name: "Modern Floor Lamp",
    category: "Lamps",
    price: 129,
    description: "Sleek and adjustable floor lamp for ambient lighting. Illuminate any room with this stylish floor lamp. Featuring an adjustable design, it allows you to direct light exactly where you need it. Perfect for creating a cozy atmosphere in your living room or bedroom.",
    texture: "Metal",
    weight: "8kg",
    size: "160cm height",
    images: [floorLamp1, floorLamp2, floorLamp3],
    trendingNow: true,
    proud: true,
  },
  {
    id: 9,
    name: "Elegant Bedframe",
    category: "Furniture",
    price: 799,
    description: "Luxurious bedframe for a good night's sleep. Create a stylish and comfortable bedroom with this elegant bedframe. Crafted from durable metal, it provides sturdy support for your mattress. With its timeless design, it's sure to elevate the look of your bedroom.",
    texture: "Metal",
    weight: "40kg",
    size: "160x200cm",
    images: [bedframe1, bedframe2, bedframe3],
    trendingNow: true,
    proud: false,
  },
  {
    id: 10,
    name: "Minimalist Desk Lamp",
    category: "Lamps",
    price: 59,
    description: "Simple and elegant desk lamp for focused task lighting. Illuminate your workspace with this minimalist desk lamp. Featuring a sleek design and adjustable brightness, it provides optimal lighting for reading, studying, or working on your computer.",
    texture: "Metal",
    weight: "2kg",
    size: "30x30x50cm",
    images: [desklamp1, desklamp2, desklamp3],
    trendingNow: false,
    proud: false,
  },
  {
    id: 11,
    name: "Anti-Aging Serum",
    category: "Skin Care",
    price: 69,
    description: "Advanced anti-aging serum for reducing wrinkles and fine lines. Turn back the clock with this powerful anti-aging serum. Formulated with potent ingredients, it helps diminish the appearance of wrinkles and fine lines, leaving your skin looking youthful and radiant.",
    texture: "Serum",
    weight: "30g",
    size: "Dropper bottle",
    images: [serum1, serum2, serum3],
    trendingNow: false,
    proud: false,
  },
  {
    id: 12,
    name: "Stainless Steel Cookware Set",
    category: "Kitchen",
    price: 129,
    description: "Complete set of high-quality stainless steel cookware. Upgrade your kitchen with this versatile cookware set. Made from durable stainless steel, it ensures even heat distribution for perfect cooking results. From frying pans to saucepans, it has everything you need to cook like a pro.",
    texture: "Stainless steel",
    weight: "10kg",
    size: "Various",
    images: [wookware1, wookware2, wookware3],
    trendingNow: false,
    proud: false,
  },
  {
    id: 13,
    name: "Adjustable Reading Lamp",
    category: "Lamps",
    price: 39,
    description: "Flexible reading lamp with adjustable brightness levels. Enjoy comfortable reading with this adjustable reading lamp. With multiple brightness levels, you can customize the lighting to suit your needs. Its flexible design allows you to direct light exactly where you need it.",
    texture: "Plastic",
    weight: "1kg",
    size: "30x20x40cm",
    images: [readibgLamp1, readibgLamp2, readibgLamp3],
    trendingNow: true,
    proud: false,
  },
  {
    id: 14,
    name: "Non-Stick Bakeware Set",
    category: "Kitchen",
    price: 79,
    description: "Essential bakeware set for all your baking needs. Bake like a pro with this comprehensive bakeware set. Featuring non-stick coating, it ensures easy release of baked goods. From cakes to cookies, you'll have everything you need to create delicious treats.",
    texture: "Non-stick coating",
    weight: "7kg",
    size: "Various",
    images: [bakeset1, bakeset2, bakeset3],
    trendingNow: false,
    proud: true,
  },
  {
    id: 15,
    name: "Vintage Pendant Light",
    category: "Lamps",
    price: 79,
    description: "Classic pendant light for adding a retro touch to your space. Add a vintage touch to your home with this charming pendant light. Featuring a brass finish and elegant design, it adds warmth and character to any room. Perfect for creating a cozy ambiance in your living space.",
    texture: "Brass",
    weight: "3kg",
    size: "50x50x25cm",
    images: [penLamp1, penLamp2, penLamp3],
    trendingNow: true,
    proud: false,
  },
  {
    id: 16,
    name: "Ergonomic Office Chair",
    category: "Chairs",
    price: 249,
    description: "Comfortable and adjustable chair for long hours of work. Stay comfortable during long workdays with this ergonomic office chair. Featuring adjustable height and lumbar support, it provides optimal comfort and support for your back. The perfect chair for staying productive and focused.",
    texture: "Fabric",
    weight: "15kg",
    size: "60x60x100cm",
    images: [officeChair1, officeChair2, officeChair3],
    trendingNow: true,
    proud: true,
  },
  {
    id: 17,
    name: "Industrial Wall Sconce",
    category: "Lamps",
    price: 49,
    description: "Stylish wall sconce with an industrial design aesthetic. Add an industrial touch to your space with this stylish wall sconce. Featuring a metal construction and minimalist design, it complements a variety of decor styles. Perfect for illuminating hallways, bedrooms, or living rooms.",
    texture: "Metal",
    weight: "1kg",
    size: "25x15x30cm",
    images: [wallLamp1, wallLamp2, wallLamp3],
    trendingNow: false,
    proud: true,
  },
  {
    id: 18,
    name: "Outdoor Lounge Chair",
    category: "Chairs",
    price: 199,
    description: "Stylish and durable lounge chair for your outdoor space. Relax in style with this outdoor lounge chair. Made from durable wicker, it's built to withstand the elements. Whether you're lounging by the pool or enjoying a barbecue, this chair is the perfect addition to your outdoor oasis.",
    texture: "Wicker",
    weight: "12kg",
    size: "70x80x90cm",
    images: [outdoorChair1, outdoorChair2, outdoorChair3],
    trendingNow: true,
    proud: false,
  },
  {
    id: 19,
    name: "Moisturizing Body Lotion",
    category: "Skin Care",
    price: 29,
    description: "Rich and creamy body lotion for soft and supple skin. Pamper your skin with this luxurious body lotion. Formulated with nourishing ingredients, it hydrates and softens your skin, leaving it feeling silky smooth. The perfect way to indulge in some self-care.",
    texture: "Lotion",
    weight: "200ml",
    size: "Pump bottle",
    images: [bodyLotion1, bodyLotion2, bodyLotion3],
    trendingNow: true,
    proud: true,
  },
  {
    id: 20,
    name: "Vintage Desk",
    category: "Furniture",
    price: 299,
    description: "Classic wooden desk for your home office. Create a cozy and inviting workspace with this vintage desk. Crafted from solid wood, it's both durable and stylish. With its timeless design and ample storage, it's the perfect addition to any home office or study.",
    texture: "Wood",
    weight: "25kg",
    size: "120x60x75cm",
    images: [vintageDesk1, vintageDesk2, vintageDesk3],
    trendingNow: false,
    proud: true,
  },
  {
    id: 21,
    name: "Leather Recliner Armchair",
    category: "Chairs",
    price: 349,
    description: "Luxurious leather armchair with reclining feature for ultimate comfort. Relax in style with this luxurious leather armchair. Featuring a reclining feature and plush cushions, it offers unparalleled comfort and support. The perfect spot for unwinding after a long day.",
    texture: "Leather",
    weight: "25kg",
    size: "80x90x100cm",
    images: [armchair1, armchair2, armchair3],
    trendingNow: true,
    proud: true,
  },
];
