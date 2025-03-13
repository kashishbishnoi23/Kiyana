//  caps :
export const caps = [
    {
        id: 'caps-1',
        name: "Unisex Blitzing Cap - Green",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 99.99,
        category: "Caps",
        colors: ["#5C5946", "#000000"], // grey,  
        product_details: {
            list: ["Premium quality unisex cap", "Adjustable back strap", "Embroidered logo", "Breathable fabric"],
            Material: "100% Cotton",
            Pattern: "Solid with embroidered logo",
            Occasion: "Casual, Sports, Outdoor",
            Stretchable: "No, but has adjustable strap",
            CareInstructions: "Hand wash cold, Do not bleach, Line dry in shade"
        },
        images: {
            "#5C5946": [
                "./images/caps/id-1/grey/first.jpg",
                "./images/caps/id-1/grey/second.jpg",
                "./images/caps/id-1/grey/third.jpg",
                "./images/caps/id-1/grey/fourth.jpg"
            ],
            "#000000": [
                "./images/caps/id-1/black/first.jpg",
                "./images/caps/id-1/black/second.jpg",
                "./images/caps/id-1/black/third.jpg",
                "./images/caps/id-1/black/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "This premium Unisex Blitzing Cap from PRADA combines style with functionality. Crafted from high-quality cotton fabric, it features an adjustable back strap for the perfect fit. The classic design includes an embroidered PRADA logo and pre-curved visor for enhanced sun protection. The moisture-wicking sweatband keeps you comfortable during activities. Perfect for both casual wear and sports activities, this cap represents PRADA's commitment to quality and style."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "James", rating: 4.0, time: "15 March", comment: "Great quality, perfect for daily use" },
            { user: "Emma", rating: 5.0, time: "10 March", comment: "Love the classic design and fit" }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'caps-2',
        name: "Green Suede Embroidered Karma Premium Baseball Cap",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 79.99,
        category: "Caps",
        colors: ["#275652"],
        product_details: {
            list: ["Premium suede material", "Embroidered Karma design", "Metal buckle adjustment", "Structured 6-panel design"],
            Material: "Premium Suede",
            Pattern: "Embroidered design",
            Occasion: "Casual, Fashion, Street wear",
            Stretchable: "No, adjustable buckle closure",
            CareInstructions: "Dry clean only, Store in cool dry place"
        },
        images: {
            "#275652": [
                "./images/caps/id-2/first.jpg",
                "./images/caps/id-2/second.jpg",
                "./images/caps/id-2/third.jpg",
                "./images/caps/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Green Suede Embroidered Karma Premium Baseball Cap is a luxurious addition to your accessories collection. Made with premium suede material, this cap features intricate karma-inspired embroidery that adds a unique spiritual touch. The structured 6-panel design maintains its shape perfectly, while the metal buckle adjustment ensures a comfortable fit. The rich green color and premium construction exemplify PRADA's dedication to luxury streetwear."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Michael", rating: 5.0, time: "12 March", comment: "Premium quality, worth every penny" },
            { user: "Lisa", rating: 5.0, time: "8 March", comment: "Beautiful design and excellent craftsmanship" }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'caps-3',
        name: "Pink Unisex Baseball Caps",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 29.99,
        category: "Caps",
        colors: ["#F5CED3"],
        product_details: {
            list: ["Lightweight cotton construction", "Ventilation eyelets", "Curved brim", "Signature branding"],
            Material: "100% Cotton Twill",
            Pattern: "Solid with minimal branding",
            Occasion: "Casual, Daily wear, Sports",
            Stretchable: "No, adjustable snap closure",
            CareInstructions: "Machine wash cold, Do not tumble dry"
        },
        images: {
            "#F5CED3": [
                "./images/caps/id-3/first.jpg",
                "./images/caps/id-3/second.jpg",
                "./images/caps/id-3/third.jpg",
                "./images/caps/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Pink Unisex Baseball Cap represents PRADA's take on casual elegance. This versatile cap features a classic 6-panel construction with ventilation eyelets for breathability. The soft cotton twill material ensures all-day comfort, while the adjustable snap closure provides a custom fit. The subtle pink shade adds a contemporary touch to the traditional baseball cap design, making it perfect for both casual outings and athletic activities."
        },
        rating: 3.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "David", rating: 4.8, time: "14 March", comment: "Perfect shade of pink, great quality" },
            { user: "Rachel", rating: 4.5, time: "5 March", comment: "Excellent fit and very stylish" }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'caps-4',
        name: "Pointelle Knit Cotton Turquoise Beret for Women",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 19.99,
        category: "Caps",
        colors: ["#5DE3DF"],
        product_details: {
            list: ["Pointelle knit pattern", "Slouchy beret style", "Ribbed band", "Lightweight design"],
            Material: "100% Cotton Knit",
            Pattern: "Pointelle knit",
            Occasion: "Casual, Fashion, Winter wear",
            Stretchable: "Yes, naturally elastic",
            CareInstructions: "Hand wash cold, Reshape while damp, Lay flat to dry"
        },
        images: {
            "#5DE3DF": [
                "./images/caps/id-4/first.jpg",
                "./images/caps/id-4/second.jpg",
                "./images/caps/id-4/third.jpg",
                "./images/caps/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Pointelle Knit Cotton Turquoise Beret is a chic and feminine accessory that adds a touch of Parisian elegance to any outfit. The intricate pointelle knit pattern creates beautiful texture while maintaining breathability. The cotton construction ensures comfort in all seasons, while the slouchy style offers versatile wearing options. The vibrant turquoise color makes this beret a standout piece that can elevate both casual and dressy looks."
        },
        rating: 3.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Claire", rating: 5.0, time: "20 March", comment: "Perfect fit and beautiful color" },
            { user: "Anna", rating: 4.5, time: "15 March", comment: "Love the knit pattern" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },
    {
        id: 'caps-5',
        name: "Ess Iv Unisex Beige Cap",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 49.99,
        category: "Caps",
        colors: ["#BF9E8C", "#000000"], // skin, black   
        product_details: {
            list: ["Classic 6-panel design", "Embroidered eyelets", "Curved peak", "Tonal stitching"],
            Material: "Cotton Blend Canvas",
            Pattern: "Solid with tonal stitching",
            Occasion: "Casual, Sports, Everyday wear",
            Stretchable: "No, adjustable back strap",
            CareInstructions: "Spot clean only, Air dry"
        },
        images: {
            "#BF9E8C": [
                "./images/caps/id-5/skin/first.jpg",
                "./images/caps/id-5/skin/second.jpg",
                "./images/caps/id-5/skin/third.jpg",
                "./images/caps/id-5/skin/fourth.jpg"
            ],
            "#000000": [
                "./images/caps/id-5/black/first.jpg",
                "./images/caps/id-5/black/second.jpg",
                "./images/caps/id-5/black/third.jpg",
                "./images/caps/id-5/black/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "The Ess Iv Unisex Beige Cap is a versatile essential that combines style with practicality. The classic 6-panel construction features embroidered eyelets for ventilation and a curved peak for sun protection. The neutral beige colorway makes it easy to pair with any outfit, while the adjustable back strap ensures a comfortable fit for all sizes. The durable cotton blend canvas material is built to last, making this cap perfect for daily wear."
        },
        rating: 3.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Tom", rating: 4.0, time: "16 March", comment: "Great everyday cap" },
            { user: "Sarah", rating: 4.8, time: "10 March", comment: "Perfect neutral color" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },
    {
        id: 'caps-6',
        name: "Stylish Fine Knitted Beret Cap Pink",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 59.99,
        category: "Caps",
        colors: ["#FE8CA6"],
        product_details: {
            list: ["Fine gauge knit", "Classic beret silhouette", "Soft elastic band", "Lightweight construction"],
            Material: "Fine Merino Wool Blend",
            Pattern: "Fine knit texture",
            Occasion: "Fashion, Casual, Winter wear",
            Stretchable: "Yes, naturally elastic",
            CareInstructions: "Hand wash cold, Lay flat to dry, Do not wring"
        },
        images: {
            "#FE8CA6": [
                "./images/caps/id-6/first.jpg",
                "./images/caps/id-6/second.jpg",
                "./images/caps/id-6/third.jpg",
                "./images/caps/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Stylish Fine Knitted Beret Cap in Pink is a delicate and feminine accessory that brings a touch of French charm to your wardrobe. Crafted from a fine merino wool blend, this beret offers warmth without bulk. The classic silhouette can be styled in multiple ways, while the soft elastic band ensures a secure fit. The beautiful pink shade adds a romantic touch to any outfit, making it perfect for both casual and dressed-up looks."
        },
        rating: 4.9,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Marie", rating: 5.0, time: "13 March", comment: "Beautiful pink shade and so soft" },
            { user: "Lucy", rating: 5.0, time: "8 March", comment: "Perfect for spring weather" }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "France",
            NameOfManufacturer: "CIDER Fashion Group",
            AddressOfManufacturer: "75 Rue du Faubourg Saint-Honoré, 75008 Paris, France"
        }
    },
    {
        id: 'caps-7',
        name: "Winter Shroom Cap",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 69.99,
        category: "Caps",
        colors: ["#996372"],
        product_details: {
            list: ["Mushroom embroidered design", "Fleece-lined interior", "Adjustable chin strap", "Water-resistant exterior"],
            Material: "Polyester with fleece lining",
            Pattern: "Mushroom embroidery",
            Occasion: "Winter wear, Outdoor activities",
            Stretchable: "No, adjustable straps",
            CareInstructions: "Machine wash gentle cycle, Tumble dry low"
        },
        images: {
            "#996372": [
                "./images/caps/id-7/first.jpg",
                "./images/caps/id-7/second.jpg",
                "./images/caps/id-7/third.jpg",
                "./images/caps/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Winter Shroom Cap is a whimsical and practical winter accessory featuring charming mushroom embroidery. The cap is designed for maximum warmth with its cozy fleece lining and water-resistant exterior. The adjustable chin strap keeps the cap secure during outdoor activities, while the unique design adds a playful touch to winter outfits. Perfect for cold weather adventures, this cap combines functionality with CIDER's signature quirky style."
        },
        rating: 3.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Nina", rating: 5.0, time: "11 March", comment: "So warm and cute design" },
            { user: "Kate", rating: 4.5, time: "7 March", comment: "Perfect for winter walks" }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "France",
            NameOfManufacturer: "CIDER Fashion Group",
            AddressOfManufacturer: "75 Rue du Faubourg Saint-Honoré, 75008 Paris, France"
        }
    },
    {
        id: 'caps-8',
        name: "Womens Knitted Flower Patch Winter Fur Beanie - Maroon",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 19.99,
        category: "Caps",
        colors: ["#850E13", "#000000"],
        product_details: {
            list: ["Floral appliqué detail", "Faux fur pom-pom", "Double-layer knit", "Ribbed cuff"],
            Material: "Acrylic blend with faux fur trim",
            Pattern: "Knit with flower patch",
            Occasion: "Winter wear, Casual outings",
            Stretchable: "Yes, ribbed construction",
            CareInstructions: "Hand wash cold, Lay flat to dry, Remove pom-pom before washing"
        },
        images: {
            "#850E13": [
                "./images/caps/id-8/red/first.jpg",
                "./images/caps/id-8/red/second.jpg",
                "./images/caps/id-8/red/third.jpg",
                "./images/caps/id-8/red/fourth.jpg"
            ],
            "#000000": [
                "./images/caps/id-8/black/first.jpg",
                "./images/caps/id-8/black/second.jpg",
                "./images/caps/id-8/black/third.jpg",
                "./images/caps/id-8/black/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "The Womens Knitted Flower Patch Winter Fur Beanie combines warmth with feminine style. The rich maroon color serves as a beautiful backdrop for the delicate flower patch appliqué. The double-layer knit construction provides excellent insulation, while the faux fur pom-pom adds a luxurious touch. The ribbed cuff ensures a snug fit and can be folded for different styling options. This beanie is perfect for adding a touch of elegance to your winter wardrobe."
        },
        rating: 3.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Helen", rating: 5.0, time: "14 March", comment: "Beautiful flower detail" },
            { user: "Jane", rating: 5.0, time: "9 March", comment: "So cozy and stylish" }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "France",
            NameOfManufacturer: "CIDER Fashion Group",
            AddressOfManufacturer: "75 Rue du Faubourg Saint-Honoré, 75008 Paris, France"
        }
    },
    {
        id: 'caps-9',
        name: "Cream Winter Pom-Pom Cap and Muffler Cream",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 55.99,
        category: "Caps",
        colors: ["#F6F1E9"],
        product_details: {
            list: ["Matching cap and muffler set", "Cable knit pattern", "Faux fur pom-pom", "Ribbed edges"],
            Material: "Wool-blend with acrylic",
            Pattern: "Cable knit",
            Occasion: "Winter wear, Holiday season",
            Stretchable: "Yes, knit construction",
            CareInstructions: "Dry clean recommended, Hand wash cold if needed"
        },
        images: {
            "#F6F1E9": [
                "./images/caps/id-9/first.jpg",
                "./images/caps/id-9/second.jpg",
                "./images/caps/id-9/third.jpg",
                "./images/caps/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Cream Winter Pom-Pom Cap and Muffler set is the ultimate winter accessory combo. The classic cream color and cable knit pattern create a timeless look that pairs easily with any winter outfit. The cap features a luxurious faux fur pom-pom and is matched perfectly with a coordinating muffler. Both pieces are crafted from a warm wool blend that provides excellent insulation while maintaining softness against the skin. The set is perfect for creating a coordinated winter look while staying cozy and stylish."
        },
        rating: 3.0,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 5.0, time: "12 March", comment: "Perfect matching set" },
            { user: "Grace", rating: 5.0, time: "6 March", comment: "Elegant and warm" }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "France",
            NameOfManufacturer: "CIDER Fashion Group",
            AddressOfManufacturer: "75 Rue du Faubourg Saint-Honoré, 75008 Paris, France"
        }
    },
]

//  glasses:
export const glasses = [
    {
        id: 'glasses-1',
        name: "Women Polycarbonate UV Protected Brown Dial Rectangle Sunglasses",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 39.89,
        category: "Glasses",
        colors: ["#B89C86"],
        product_details: {
            list: ["UV Protection: 100% UV protection", "Frame Material: Premium Polycarbonate", "Lens Material: CR-39", "Frame Style: Rectangle", "Frame Size: Medium"],
            Occasion: "Perfect for daily wear, outdoor activities, and fashion statements",
            CareInstructions: "Clean with microfiber cloth, avoid using harsh chemicals, store in provided case"
        },
        images: {
            "#B89C86": [
                "./images/glasses/id-1/first.jpg",
                "./images/glasses/id-1/second.jpg",
                "./images/glasses/id-1/third.jpg",
                "./images/glasses/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "These elegant PRADA sunglasses combine style with superior protection. The polycarbonate frame ensures durability while maintaining a lightweight feel. The UV-protected lenses shield your eyes from harmful rays while providing crystal clear vision. The rectangular shape complements most face shapes, making it a versatile choice. The brown tint not only adds sophistication but also reduces glare and enhances contrast. Each pair undergoes rigorous quality testing to meet international standards. The adjustable nose pads and temple tips ensure a comfortable fit for extended wear."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.8, time: "20 March", comment: "Perfect fit and excellent UV protection!" },
            { user: "Michael", rating: 4.2, time: "22 March", comment: "Great quality, slightly pricey but worth it" }
        ],
        vendor_details: {
            soldBy: "Luxury Eyewear Retail Ltd",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA Eyewear Manufacturing S.p.A",
            AddressOfManufacturer: "Via Bergamo 21, 20052 Milan, Italy"
        }
    },

    {
        id: 'glasses-2',
        name: "Women Polycarbonate UV Protected Brown Dial Rectangle Sunglasses Black & Purple",
        brand: "GUCCI",
        brand_logo: "./images/brands/gucci.webp",
        price: 56.99,
        category: "Glasses",
        colors: ["#6E5779"],
        product_details: {
            list: ["UV Protection: 100% UV400 protection", "Frame Material: High-grade Polycarbonate", "Lens Material: Polarized CR-39", "Frame Style: Rectangle", "Frame Size: Medium-Large"],
            Occasion: "Suitable for driving, outdoor activities, and casual wear",
            CareInstructions: "Use lens cleaning solution, clean with microfiber cloth, store in case when not in use"
        },
        images: {
            "#6E5779": [
                "./images/glasses/id-2/first.jpg",
                "./images/glasses/id-2/second.jpg",
                "./images/glasses/id-2/third.jpg",
                "./images/glasses/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Experience luxury and protection with these PRADA sunglasses featuring a unique black and purple design. The advanced polarized lenses reduce glare and eye strain, making them perfect for bright conditions. The rectangular frame is reinforced with high-grade polycarbonate for exceptional durability. The UV400 protection blocks 99.9% of harmful rays. The ergonomic design includes spring hinges for flexibility and comfort. The purple accents add a touch of sophistication to the classic black frame. These sunglasses are perfect for those who want to make a style statement while ensuring maximum eye protection."
        },
        rating: 3.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Lisa", rating: 4.7, time: "25 March", comment: "Love the unique color combination!" },
            { user: "James", rating: 4.6, time: "27 March", comment: "Excellent build quality and style" }
        ],
        vendor_details: {
            soldBy: "Premium Eyewear Solutions",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA Eyewear Manufacturing S.p.A",
            AddressOfManufacturer: "Via Milano 45, 20054 Milan, Italy"
        }
    },

    {
        id: 'glasses-3',
        name: "Black Round Sunglasses for Unisex",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 49.99,
        category: "Glasses",
        colors: ["#67616B"],
        product_details: {
            list: ["UV Protection: 100% UVA/UVB protection", "Frame Material: Premium Acetate", "Lens Material: High-definition CR-39", "Frame Style: Round", "Frame Size: Universal Fit"],
            Occasion: "Versatile for all occasions - casual, formal, and outdoor activities",
            CareInstructions: "Clean with lukewarm water and mild soap, dry with microfiber cloth, avoid extreme temperatures"
        },
        images: {
            "#67616B": [
                "./images/glasses/id-3/first.jpg",
                "./images/glasses/id-3/second.jpg",
                "./images/glasses/id-3/third.jpg",
                "./images/glasses/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "These timeless round PRADA sunglasses blend classic design with modern technology. The premium acetate frame provides exceptional durability while maintaining a lightweight feel. The high-definition CR-39 lenses offer superior clarity and complete UV protection. The round shape is inspired by vintage designs but updated with contemporary elements. The universal fit design suits most face shapes, while the adjustable nose pads ensure comfort for all-day wear. The matte black finish gives a sophisticated look suitable for any occasion. These unisex sunglasses feature anti-reflective coating and are scratch-resistant, making them perfect for daily use."
        },
        rating: 3.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Alex", rating: 4.9, time: "30 March", comment: "Perfect unisex design, great quality!" },
            { user: "Sarah", rating: 4.7, time: "2 April", comment: "Absolutely love the classic look" }
        ],
        vendor_details: {
            soldBy: "Fashion Eyewear Co.",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA Eyewear Manufacturing S.p.A",
            AddressOfManufacturer: "Via Roma 78, 20056 Milan, Italy"
        }
    },

    {
        id: 'glasses-4',
        name: "Women UV Protected Brown Lens Pillow Sunglasses - 0VE4437U108/7354",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 89.99,
        category: "Glasses",
        colors: ["#745C47"],
        product_details: {
            list: ["UV Protection: Advanced UV400 protection", "Frame Material: Titanium-infused Acetate", "Lens Material: Premium Brown CR-39", "Frame Style: Pillow", "Frame Size: Medium-Wide"],
            Occasion: "Perfect for beach outings, driving, and everyday fashion",
            CareInstructions: "Clean with provided cleaning solution, use microfiber cloth, store in protective case"
        },
        images: {
            "#745C47": [
                "./images/glasses/id-4/first.jpg",
                "./images/glasses/id-4/second.jpg",
                "./images/glasses/id-4/third.jpg",
                "./images/glasses/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "MOSCOT's pillow sunglasses represent the perfect fusion of style and functionality. The titanium-infused acetate frame provides exceptional durability while maintaining elegance. The brown CR-39 lenses are specially designed to reduce glare and enhance color perception. The pillow frame shape offers a unique aesthetic that stands out from traditional designs. These sunglasses feature advanced UV400 protection and anti-reflective coating. The ergonomic design includes adjustable nose pads and temple tips for maximum comfort. The brown tint is perfect for varying light conditions and complements all skin tones. Each pair comes with MOSCOT's signature quality assurance and attention to detail."
        },
        rating: 3.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Rachel", rating: 5.0, time: "5 April", comment: "Best sunglasses I've ever owned!" },
            { user: "David", rating: 4.9, time: "8 April", comment: "Superior quality and unique design" }
        ],
        vendor_details: {
            soldBy: "Elite Eyewear Boutique",
            countryOfOrigin: "United States",
            NameOfManufacturer: "MOSCOT Manufacturing LLC",
            AddressOfManufacturer: "108 Orchard Street, New York, NY 10002"
        }
    },

    {
        id: 'glasses-5',
        name: "Women UV Protected Brown Lens Pillow Sunglasses - Svr-11627-C025 ",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 29.99,
        category: "Glasses",
        colors: ["#000000"],
        product_details: {
            list: ["UV Protection: Premium UV400 protection", "Frame Material: Japanese Acetate", "Lens Material: Brown Gradient CR-39", "Frame Style: Pillow", "Frame Size: Medium"],
            Occasion: "Ideal for fashion events, outdoor activities, and daily wear",
            CareInstructions: "Clean with warm water and mild soap, dry with soft cloth, avoid direct heat"
        },
        images: {
            "#000000": [
                "./images/glasses/id-5/first.jpg",
                "./images/glasses/id-5/second.jpg",
                "./images/glasses/id-5/third.jpg",
                "./images/glasses/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "These sophisticated MOSCOT sunglasses showcase the brand's commitment to quality and style. The Japanese acetate frame provides exceptional durability and a premium feel. The brown gradient lenses offer varying levels of tint for optimal vision in different lighting conditions. The pillow frame design is both classic and contemporary, suitable for various face shapes. The sunglasses feature state-of-the-art UV400 protection and anti-glare coating. The ergonomic design includes flexible spring hinges and adjustable nose pads for a customized fit. The black finish adds a timeless elegance that complements any outfit. Each pair is handcrafted with attention to detail and undergoes strict quality control."
        },
        rating: 3.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 4.8, time: "10 April", comment: "Elegant design and great protection!" },
            { user: "Thomas", rating: 4.8, time: "12 April", comment: "Worth every penny, excellent quality" }
        ],
        vendor_details: {
            soldBy: "Luxury Vision Gallery",
            countryOfOrigin: "United States",
            NameOfManufacturer: "MOSCOT Manufacturing LLC",
            AddressOfManufacturer: "110 Orchard Street, New York, NY 10002"
        }
    },

    {
        id: 'glasses-6',
        name: "Women Gradient Blue Lens Square Sunglasses - 0BE441030018G52",
        brand: "GUCCI",
        brand_logo: "./images/brands/gucci.webp",
        price: 69.99,
        category: "Glasses",
        colors: ["#625F66"],
        product_details: {
            list: ["UV Protection: Full spectrum UV protection", "Frame Material: Premium Acetate", "Lens Material: Blue Gradient CR-39", "Frame Style: Square", "Frame Size: Medium-Large"],
            Occasion: "Perfect for urban lifestyle, beach outings, and fashion events",
            CareInstructions: "Use lens cleaning solution, avoid abrasive materials, store in provided case"
        },
        images: {
            "#625F66": [
                "./images/glasses/id-6/first.jpg",
                "./images/glasses/id-6/second.jpg",
                "./images/glasses/id-6/third.jpg",
                "./images/glasses/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Experience modern sophistication with these MOSCOT gradient blue lens sunglasses. The square frame design offers a contemporary look while maintaining classic appeal. The blue gradient lenses not only provide style but also enhance visual comfort in varying light conditions. The premium acetate frame ensures durability and comfort for extended wear. These sunglasses feature advanced anti-reflective coating and full UV protection. The square shape is carefully designed to complement various face shapes. The gradient blue tint reduces eye strain while adding a fashionable touch. Each pair is crafted with precision and undergoes extensive quality testing to ensure perfect finish and functionality."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Jessica", rating: 4.7, time: "15 April", comment: "Love the blue gradient effect!" },
            { user: "Robert", rating: 4.6, time: "18 April", comment: "Stylish and well-made sunglasses" }
        ],
        vendor_details: {
            soldBy: "Premium Optics Co.",
            countryOfOrigin: "United States",
            NameOfManufacturer: "MOSCOT Manufacturing LLC",
            AddressOfManufacturer: "112 Orchard Street, New York, NY 10002"
        }
    },

    {
        id: 'glasses-7',
        name: "White Solid Sunglasses",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 99.99,
        category: "Glasses",
        colors: ["#C0C0C2"],
        product_details: {
            list: ["UV Protection: Enhanced UV400 protection", "Frame Material: High-quality Acetate", "Lens Material: Premium CR-39", "Frame Style: Modern Classic", "Frame Size: Universal"],
            Occasion: "Suitable for all occasions, especially summer outings and fashion events",
            CareInstructions: "Clean with lukewarm water, use microfiber cloth, avoid harsh chemicals"
        },
        images: {
            "#C0C0C2": [
                "./images/glasses/id-7/first.jpg",
                "./images/glasses/id-7/second.jpg",
                "./images/glasses/id-7/third.jpg",
                "./images/glasses/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "These striking white MOSCOT sunglasses make a bold fashion statement while delivering superior eye protection. The high-quality acetate frame in pristine white offers both durability and style. The lenses feature advanced UV400 protection and anti-reflective coating for optimal vision. The modern classic design combines contemporary elements with timeless appeal. The frame is lightweight yet sturdy, perfect for everyday wear. The white color adds a fresh, clean look that's perfect for summer fashion. These sunglasses include spring hinges for flexibility and comfort. Each pair represents MOSCOT's commitment to quality and style, with careful attention to every detail in design and construction."
        },
        rating: 3.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Anna", rating: 4.4, time: "20 April", comment: "Beautiful white frame, very chic!" },
            { user: "Peter", rating: 4.6, time: "22 April", comment: "Great summer accessory" }
        ],
        vendor_details: {
            soldBy: "Fashion Eyewear Boutique",
            countryOfOrigin: "United States",
            NameOfManufacturer: "MOSCOT Manufacturing LLC",
            AddressOfManufacturer: "114 Orchard Street, New York, NY 10002"
        }
    },

    {
        id: 'glasses-8',
        name: "Premium Pink with Blue Toned & UV Protected Lens Cat Eye Sunglass for Women",
        brand: "GUCCI",
        brand_logo: "./images/brands/gucci.webp",
        price: 79.99,
        category: "Glasses",
        colors: ["#442D45"],
        product_details: {
            list: ["UV Protection: Maximum UV400 protection", "Frame Material: Premium Acetate", "Lens Material: Blue-tinted CR-39", "Frame Style: Cat Eye", "Frame Size: Medium"],
            Occasion: "Perfect for fashion events, parties, and stylish daily wear",
            CareInstructions: "Clean with provided solution, use soft cloth, store in protective case"
        },
        images: {
            "#442D45": [
                "./images/glasses/id-8/first.jpg",
                "./images/glasses/id-8/second.jpg",
                "./images/glasses/id-8/third.jpg",
                "./images/glasses/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "These glamorous MOSCOT cat-eye sunglasses combine vintage charm with modern technology. The unique pink frame with blue-toned lenses creates a stunning visual effect. The premium acetate construction ensures durability while maintaining a lightweight feel. The cat-eye shape adds a touch of retro glamour perfect for fashion-forward individuals. The blue-tinted lenses not only look stylish but also provide superior clarity and protection. These sunglasses feature anti-glare coating and complete UV protection. The design includes comfortable nose pads and spring hinges for the perfect fit. Each pair showcases MOSCOT's expertise in creating eyewear that's both fashionable and functional."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Victoria", rating: 5.0, time: "25 April", comment: "Absolutely stunning design!" },
            { user: "Catherine", rating: 4.9, time: "28 April", comment: "Perfect combination of style and comfort" }
        ],
        vendor_details: {
            soldBy: "Luxury Eyewear Collection",
            countryOfOrigin: "United States",
            NameOfManufacturer: "MOSCOT Manufacturing LLC",
            AddressOfManufacturer: "116 Orchard Street, New York, NY 10002"
        }
    },

    {
        id: 'glasses-9',
        name: "Unisex UV Protected Brown Irregular Sunglasses - 10248 (47)",
        brand: "GUCCI",
        brand_logo: "./images/brands/gucci.webp",
        price: 89.99,
        category: "Glasses",
        colors: ["#D1B69D"],
        product_details: {
            list: ["UV Protection: Complete UV400 protection", "Frame Material: High-end Acetate", "Lens Material: Brown CR-39", "Frame Style: Irregular", "Frame Size: 47mm"],
            Occasion: "Versatile for casual wear, outdoor activities, and fashion statements",
            CareInstructions: "Clean with mild soap solution, use microfiber cloth, avoid extreme temperatures"
        },
        images: {
            "#D1B69D": [
                "./images/glasses/id-9/first.jpg",
                "./images/glasses/id-9/second.jpg",
                "./images/glasses/id-9/third.jpg",
                "./images/glasses/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "These distinctive MOSCOT irregular sunglasses offer a unique take on unisex eyewear. The unconventional frame shape provides a contemporary look that suits all face types. The brown CR-39 lenses offer superior clarity and complete UV protection. The high-end acetate frame ensures durability and comfort for extended wear. These sunglasses feature anti-reflective coating and scratch-resistant technology. The 47mm size is carefully chosen to suit most face sizes. The brown tint enhances contrast and reduces glare while maintaining natural color perception. Each pair represents MOSCOT's innovative approach to eyewear design, combining functionality with avant-garde style."
        },
        rating: 3.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Daniel", rating: 4.8, time: "1 May", comment: "Unique design, excellent quality!" },
            { user: "Michelle", rating: 4.8, time: "3 May", comment: "Perfect unisex style, very comfortable" }
        ],
        vendor_details: {
            soldBy: "Designer Eyewear Studio",
            countryOfOrigin: "United States",
            NameOfManufacturer: "MOSCOT Manufacturing LLC",
            AddressOfManufacturer: "118 Orchard Street, New York, NY 10002"
        }
    },
]

// handbags:
export const handbags = [

    {
        id: 'handbag-1',
        name: "Beige Casual Synthetic Leather Solid Handheld Bag",
        brand: "BALENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 69.99,
        category: "HandBags",
        colors: ["#E4C8BC", "#006400"],    // beige, green
        product_details: {
            list: ["Premium synthetic leather", "Spacious main compartment", "Interior zip pocket", "Adjustable shoulder strap"],
            Water_Resistant: "Yes",
            Pattern: "Solid",
            Occasion: "Casual",
            Dimensions: "22 x 13 x 8cm (L x B x H)",
            Handles: "Double top handles with detachable shoulder strap",
            CareInstructions: "Wipe clean with damp cloth, avoid direct sunlight when storing"
        },
        images: {
            "#E4C8BC": [
                "./images/handbags/id-1/beige/first.jpg",
                "./images/handbags/id-1/beige/second.jpg",
                "./images/handbags/id-1/beige/third.jpg",
                "./images/handbags/id-1/beige/fourth.jpg"
            ],
            "#006400": [
                "./images/handbags/id-1/green/first.jpg",
                "./images/handbags/id-1/green/second.jpg",
                "./images/handbags/id-1/green/third.jpg",
                "./images/handbags/id-1/green/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Treat yourself to a fashionable Handbag by MINI WESST and look stylish all year long. Match this Handbag with one of your favourite tees, some slim jeans, and a pair of patent pumps for a stunning date outfit. This versatile beige handbag is crafted from premium synthetic leather that offers durability and easy maintenance. The bag features a spacious main compartment with multiple interior pockets to keep your essentials organized. The adjustable shoulder strap allows for comfortable carrying, while the double top handles provide a sophisticated look. Perfect for both casual outings and semi-formal occasions, this handbag combines style with functionality. The neutral beige color makes it easy to pair with any outfit, while the green variant offers a bold alternative for those looking to make a statement. Dimention - 22 x 13 x 8cm (L x B x H)"
        },
        rating: 4.2,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "15 March", comment: "Great quality for the price, very spacious!" },
            { user: "Isabella", rating: 4.3, time: "12 March", comment: "Love the design and color options" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "ONLY Fashion Industries Ltd.",
            AddressOfManufacturer: "Via della Moda 123, Milan, Italy"
        }
    },
    {
        id: 'handbag-2',
        name: "Beige Casual Synthetic Leather Solid Handheld Bag",
        brand: "BALENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 39.99,
        category: "HandBags",
        colors: ["#736D63"],
        product_details: {
            list: ["High-quality printed material", "Multiple compartments", "Secure zip closure", "Durable construction"],
            Water_Resistant: "Yes",
            Pattern: "Printed",
            Occasion: "Casual/Formal",
            Dimensions: "25 x 15 x 10cm (L x B x H)",
            Handles: "Single shoulder strap",
            CareInstructions: "Clean with soft dry cloth, store in dust bag"
        },
        images: {
            "#736D63": [
                "./images/handbags/id-2/first.jpg",
                "./images/handbags/id-2/second.jpg",
                "./images/handbags/id-2/third.jpg",
                "./images/handbags/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Elevate your style game with this sleek brown shoulder bag from Styli. It is crafted from high-quality printed material that combines durability with sophisticated aesthetics. This shoulder bag features a secure zip closure and an elegant printed pattern that adds a touch of refinement to any outfit. The thoughtfully designed interior includes multiple compartments and pockets, making it perfect for organizing your essentials. The main compartment is spacious enough to accommodate your daily necessities, including a phone, wallet, cosmetics, and even a small tablet. The adjustable shoulder strap ensures comfortable carrying, while the premium hardware adds a luxurious touch. Its perfect size and versatility make it suitable for multiple occasions, from office meetings to weekend brunches. The interior provides plenty of storage space for keeping a phone, cash & car keys, etc. The bag's timeless design and neutral color palette ensure it will remain a staple in your wardrobe for years to come."
        },
        rating: 3.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Olivia", rating: 4.3, time: "20 March", comment: "Perfect size for daily use" },
            { user: "Ava", rating: 4.4, time: "22 March", comment: "Beautiful design and great quality" }
        ],
        vendor_details: {
            soldBy: "Styli Fashion Store",
            countryOfOrigin: "France",
            NameOfManufacturer: "Styli Leather Goods SA",
            AddressOfManufacturer: "23 Rue de la Mode, Paris, France"
        }
    },
    {
        id: 'handbag-3',
        name: "Ivory Black Party Shoulder Bag for Women",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 59.99,
        category: "HandBags",
        colors: ["#000000", "#FFFFFF"],
        product_details: {
            list: ["Premium vegan leather", "Gold-tone hardware", "Chain shoulder strap", "Evening party design"],
            Water_Resistant: "No",
            Pattern: "Color block",
            Occasion: "Party/Evening",
            Dimensions: "20 x 12 x 7cm (L x B x H)",
            Handles: "Chain shoulder strap",
            CareInstructions: "Store in dust bag, avoid water exposure"
        },
        images: {
            "#000000": [
                "./images/handbags/id-3/black/first.jpg",
                "./images/handbags/id-3/black/second.jpg",
                "./images/handbags/id-3/black/third.jpg",
                "./images/handbags/id-3/black/fourth.jpg"
            ],
            "#FFFFFF": [
                "./images/handbags/id-3/white/first.jpg",
                "./images/handbags/id-3/white/second.jpg",
                "./images/handbags/id-3/white/third.jpg",
                "./images/handbags/id-3/white/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Looking to complete your evening OOTD? Look no more! This stunning ivory and black party shoulder bag is the perfect companion for your nighttime adventures. Whether you are meeting friends for a night out or exploring the city scene, this shoulder bag adds a pop of color and personality to your look while keeping your essentials within easy reach. Crafted with meticulous attention to detail, this bag features a sophisticated color-block design in classic black and ivory that effortlessly transitions from day to night. The elegant chain strap adds a touch of glamour, while the compact size ensures you can carry all your essentials without bulk. The interior is thoughtfully designed with multiple compartments to keep your items organized, including a special pocket for your phone and a zippered section for valuables. The gold-tone hardware elevates the overall design, making it a perfect choice for special occasions, dinner dates, or any event where you want to make a statement. The bag's premium vegan leather construction ensures durability while maintaining an eco-conscious approach to fashion."
        },
        rating: 3.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Mia", rating: 4.7, time: "25 March", comment: "Perfect evening bag, very elegant!" },
            { user: "Charlotte", rating: 4.6, time: "21 March", comment: "Love the chain detail" }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "Spain",
            NameOfManufacturer: "CIDER Fashion House",
            AddressOfManufacturer: "Calle de la Moda 45, Barcelona, Spain"
        }
    },
    {
        id: 'handbag-4',
        name: "All Pearls White Handbag",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 69.99,
        category: "HandBags",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["Pearl embellished exterior", "Satin lining", "Magnetic closure", "Detachable chain strap"],
            Water_Resistant: "No",
            Pattern: "Pearl studded",
            Occasion: "Special occasions/Wedding",
            Dimensions: "18 x 10 x 6cm (L x B x H)",
            Handles: "Chain strap with pearl details",
            CareInstructions: "Handle with care, store in provided dust bag"
        },
        images: {
            "#FFFFFF": [
                "./images/handbags/id-4/first.jpg",
                "./images/handbags/id-4/second.jpg",
                "./images/handbags/id-4/third.jpg",
                "./images/handbags/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Look stylish and be stylish! Grab the bag of your choice. This exquisite pearl-embellished handbag represents the perfect marriage of elegance and sophistication. Each pearl is carefully hand-placed to create a stunning visual effect that catches the light beautifully. The bag features a luxurious satin lining that protects your belongings while adding a touch of luxury. The magnetic closure provides secure and easy access, while the detachable chain strap offers versatile wearing options. Perfect for weddings, formal events, or any special occasion where you want to make a statement. The classic white color and timeless design ensure this piece will remain a cherished addition to your accessory collection for years to come. It is carefully crafted in assured quality material and high end fashionable designs where perfection meets creativity. Take it home before it is gone!"
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Grace", rating: 5.0, time: "16 March", comment: "Perfect for my wedding day!" },
            { user: "Luna", rating: 4.9, time: "14 March", comment: "Stunning pearl details" }
        ],
        vendor_details: {
            soldBy: "CIDER Luxury Collection",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "CIDER Luxury Goods SRL",
            AddressOfManufacturer: "Via dei Condotti 12, Rome, Italy"
        }
    },
    {
        id: 'handbag-5',
        name: "Blue Gathered Top Handle Flap Mini Handbag",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 59.99,
        category: "HandBags",
        colors: ["#95B8CA"],
        product_details: {
            list: ["Gathered design", "Top handle", "Flap closure", "Mini size"],
            Water_Resistant: "Yes",
            Pattern: "Gathered texture",
            Occasion: "Casual/Day out",
            Dimensions: "19 x 11 x 7cm (L x B x H)",
            Handles: "Top handle with removable shoulder strap",
            CareInstructions: "Wipe with soft cloth, avoid harsh chemicals"
        },
        images: {
            "#95B8CA": [
                "./images/handbags/id-5/first.jpg",
                "./images/handbags/id-5/second.jpg",
                "./images/handbags/id-5/third.jpg",
                "./images/handbags/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Introducing our Blue Gathered Top Handle Flap Mini Handbag - a perfect blend of style and functionality. The unique gathered design creates an eye-catching texture that adds depth and interest to any outfit. The soft blue shade is versatile enough for year-round wear while making a subtle style statement. The bag features a secure flap closure and a comfortable top handle, complemented by a removable shoulder strap for versatile carrying options. The compact size is perfect for essential items while maintaining a sleek silhouette. The interior is thoughtfully organized with multiple compartments to keep your belongings neat and accessible. This bag is ideal for both casual outings and semi-formal occasions, offering the perfect balance of fashion and practicality."
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Harper", rating: 4.2, time: "19 March", comment: "Beautiful blue color!" },
            { user: "Lily", rating: 4.2, time: "17 March", comment: "Perfect size for daily use" }
        ],
        vendor_details: {
            soldBy: "STYLI Official",
            countryOfOrigin: "United Kingdom",
            NameOfManufacturer: "STYLI Fashion UK Ltd",
            AddressOfManufacturer: "Fashion Street 78, London, UK"
        }
    },
    {
        id: 'handbag-6',
        name: "AZULINE Womens Black Handbag with Detachable Straps",
        brand: "GUCCI",
        brand_logo: "./images/brands/gucci.webp",
        price: 19.95,
        category: "HandBags",
        colors: ["#000000", "#E5799D"],  // black, pink 
        product_details: {
            list: ["High-quality synthetic material", "Multiple compartments", "Detachable straps", "Zip closure"],
            Water_Resistant: "Yes",
            Pattern: "Solid",
            Occasion: "Casual/Office",
            Dimensions: "28 x 14 x 9cm (L x B x H)",
            Handles: "Multiple detachable straps",
            CareInstructions: "Clean with damp cloth, avoid exposure to extreme heat"
        },
        images: {
            "#000000": [
                "./images/handbags/id-6/black/first.jpg",
                "./images/handbags/id-6/black/second.jpg",
                "./images/handbags/id-6/black/third.jpg",
                "./images/handbags/id-6/black/fourth.jpg"
            ],
            "#E5799D": [
                "./images/handbags/id-6/pink/first.jpg",
                "./images/handbags/id-6/pink/second.jpg",
                "./images/handbags/id-6/pink/third.jpg",
                "./images/handbags/id-6/pink/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Elevate Your Style Game With This Azuline Black Handbag With Detachable Straps From Aldo. It Is Crafted From High-Quality Synthetic Material That Ensures Durability And Easy Maintenance. This Versatile Piece Features A Secure Zip Closure And Multiple Compartments For Organized Storage. The Detachable Straps Offer Various Carrying Options To Suit Your Style And Comfort. The Classic Black Color Is Perfect For Professional Settings While The Pink Variant Adds A Pop Of Color To Your Collection. The Spacious Interior Can Accommodate All Your Daily Essentials Including A Laptop Or Tablet. The Premium Hardware And Clean Lines Make It A Perfect Choice For Both Office Wear And Casual Outings. Its Perfect Size And Versatility Make It Suitable For Multiple Occasions."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Victoria", rating: 4.6, time: "21 March", comment: "Great for work!" },
            { user: "Zoe", rating: 4.4, time: "23 March", comment: "Love the detachable straps" }
        ],
        vendor_details: {
            soldBy: "STYLI Premium Store",
            countryOfOrigin: "France",
            NameOfManufacturer: "STYLI International SAS",
            AddressOfManufacturer: "Boulevard de la Mode 34, Paris, France"
        }
    },
    {
        id: 'handbag-7',
        name: "Classics Seas Womens Black Moon Handbag",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 49.99,
        category: "HandBags",
        colors: ["#1F1F1F"],
        product_details: {
            list: ["Jersey neoprene body", "Interior zip pocket", "Padded shoulder straps", "PUMA branding"],
            Water_Resistant: "Yes",
            Pattern: "Embossed PUMA wordmark",
            Occasion: "Sports/Casual",
            Dimensions: "24 x 9 x 17.5cm (L x B x H)",
            Handles: "Padded shoulder straps",
            CareInstructions: "Machine washable, air dry"
        },
        images: {
            "#1F1F1F": [
                "./images/handbags/id-7/first.jpg",
                "./images/handbags/id-7/second.jpg",
                "./images/handbags/id-7/third.jpg",
                "./images/handbags/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "PRODUCT STORY : Classic Sportswear reinvented through fashionable design elements, In addition to all the considered PUMA details, this bag features a zipped opening into main compartment, and an interior zip pocket. The innovative jersey neoprene construction offers durability and water resistance while maintaining a sleek, modern aesthetic. The bag showcases PUMA's commitment to both style and functionality with its all-over wordmark heat emboss and carefully considered details. The padded shoulder straps ensure comfort during extended wear, while the premium hardware adds a touch of sophistication. Perfect for gym sessions, casual outings, or as a stylish everyday bag. It's ready to go anywhere. DETAILS : Jersey neoprene body, Interior zip pocket, Padded body fabric shoulder straps with plastic hardware, All-over PUMA Wordmark heat emboss, Round metal zip puller with embossed PUMA Wordmark, Cat branded metal zip puller on interior pocket, 24 cm x 9 cm x 17.50 cm, 3 L"
        },
        rating: 3.9,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Alex", rating: 4.8, time: "20 March", comment: "Perfect gym bag!" },
            { user: "Maya", rating: 4.8, time: "22 March", comment: "Stylish and practical" }
        ],
        vendor_details: {
            soldBy: "PUMA Official Store",
            countryOfOrigin: "Germany",
            NameOfManufacturer: "PUMA SE",
            AddressOfManufacturer: "PUMA Way 1, Herzogenaurach, Germany"
        }
    },
    {
        id: 'handbag-8',
        name: "Beige Furry Chainlink Handle Shoulder Bag",
        brand: "GUCCI",
        brand_logo: "./images/brands/gucci.webp",
        price: 59.99,
        category: "HandBags",
        colors: ["#8D6C49"],
        product_details: {
            list: ["Faux fur material", "Chainlink handle", "Magnetic snap closure", "Textured design"],
            Water_Resistant: "No",
            Pattern: "Furry texture",
            Occasion: "Party/Evening",
            Dimensions: "30.5 x 12.7 x 17.1cm (L x B x H)",
            Handles: "Chainlink handle",
            CareInstructions: "Dry clean only, store in dust bag"
        },
        images: {
            "#8D6C49": [
                "./images/handbags/id-8/first.jpg",
                "./images/handbags/id-8/second.jpg",
                "./images/handbags/id-8/third.jpg",
                "./images/handbags/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: `Product Detail: This small textured shoulder bag features a luxurious furry texture material and a sophisticated chainlink handle that adds an element of edge to its soft appearance. The bag combines comfort with high fashion, making it perfect for both casual and dressy occasions. The faux fur material is carefully selected for its quality and durability, while maintaining a plush, inviting texture. The chainlink handle adds a contemporary twist to the classic shoulder bag design, creating a unique style statement.

Color: Beige.

Material: Faux Fur.

Style Note: This bag will add a statement to your outfit. The contrasting elements of soft fur and metal chain create an interesting juxtaposition that elevates any ensemble. Style with a sheath dress and block heels for a clubbing night with your besties - says our inhouse stylist Tanima Khosla. The neutral beige color makes it versatile enough to pair with various outfits while the unique texture ensures it stands out.

Closure: Magnetic Snap.

(L x B x H) : 30.5 x 12.7 x 17.1 cm`
        },
        rating: 3.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Isabella", rating: 4.3, time: "19 March", comment: "Love the furry texture!" },
            { user: "Emma", rating: 4.4, time: "21 March", comment: "Perfect party bag" }
        ],
        vendor_details: {
            soldBy: "PUMA Lifestyle",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PUMA Fashion Italia SRL",
            AddressOfManufacturer: "Via della Moda 56, Milan, Italy"
        }
    },
    {
        id: 'handbag-9',
        name: "Women White Two Tone Shoulder Bag",
        brand: "GUCCI",
        brand_logo: "./images/brands/gucci.webp",
        price: 29.99,
        category: "HandBags",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["PU material", "Two-tone design", "Spacious compartment", "Modern styling"],
            Water_Resistant: "Yes",
            Pattern: "Two-tone",
            Occasion: "Casual/Daily",
            Dimensions: "26 x 13 x 8cm (L x B x H)",
            Handles: "Single shoulder strap",
            CareInstructions: "Wipe clean with damp cloth, avoid direct sunlight"
        },
        images: {
            "#FFFFFF": [
                "./images/handbags/id-9/first.jpg",
                "./images/handbags/id-9/second.jpg",
                "./images/handbags/id-9/third.jpg",
                "./images/handbags/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Introducing The Styli Women White Two Tone Shoulder Bag, A Contemporary Accessory Designed To Elevate Your Ensemble. This Sophisticated Bag Represents The Perfect Blend Of Style And Functionality. Crafted From Durable Pu Material, This Bag Features A Stylish Two-Tone Design That Adds A Modern Twist To Your Look. The Zip Closure Ensures The Security Of Your Belongings While Providing Easy Access. The Bag's Interior Is Thoughtfully Designed With Multiple Compartments And Pockets, Making Organization A Breeze. The Main Compartment Is Spacious Enough For Daily Essentials While Maintaining A Sleek Profile. With Its Color-Blocked Surface Styling, It Exudes Sophistication And Versatility. The Bag Is Equipped With One Handle For Effortless Shoulder Carrying. The Clean Lines And Minimalist Design Make It Perfect For Both Professional Settings And Casual Outings. Inside, You'Ll Find One Spacious Main Compartment With A Zip Closure, Offering Ample Space To Keep Your Essentials Organized. The Premium Hardware Adds A Touch Of Luxury While Ensuring Durability. Make A Statement With This Chic And Practical Shoulder Bag That Combines Modern Design With Everyday Functionality."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ava", rating: 4.7, time: "24 March", comment: "Elegant and practical" },
            { user: "Mia", rating: 4.6, time: "26 March", comment: "Perfect everyday bag" }
        ],
        vendor_details: {
            soldBy: "PUMA Select",
            countryOfOrigin: "Spain",
            NameOfManufacturer: "PUMA Accessories SL",
            AddressOfManufacturer: "Calle de la Moda 89, Madrid, Spain"
        }
    }
]

//jewels: cartery, bulgari, tiffany
export const jewels = [

    {
        id: 'jewels-1',
        name: "Gold Plated Stone-Studded Contemporary Pendant With Chain",
        brand: "CARTIER",
        brand_logo: "./images/brands/cartier.png",
        price: 99.99,
        category: "Jewels",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["Premium quality gold plated pendant", "Adjustable chain length", "Stone-studded design", "Contemporary style"],
            Type_of_Jewellery: "Pendant with Chain",
            Plating: "18K Gold Plating",
            Occasion: "Party wear, Daily wear, Office wear",
            CareInstructions: "Store in airtight pouch, Avoid contact with water and chemicals",
        },
        images: {
            "#FFFFFF": [
                "./images/jewels/id-1/first.jpg",
                "./images/jewels/id-1/second.jpg",
                "./images/jewels/id-1/third.jpg",
                "./images/jewels/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Charming & adorable. Carlton London presents this unique & endearing Pendant Necklace with high quality stones & genuine plating. A truly must have piece of jewelry to add to your treasured collection. This exquisite pendant features brilliant cut cubic zirconia stones set in a contemporary design that catches light from every angle. The pendant comes with an adjustable chain that sits perfectly on your neckline. The premium quality gold plating ensures long-lasting shine and durability."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.8, time: "20 March", comment: "Beautiful design and excellent quality!" },
            { user: "Olivia", rating: 4.3, time: "22 March", comment: "Great value for money, very elegant piece" }
        ],
        vendor_details: {
            soldBy: "CARTERY Official Store",
            countryOfOrigin: "India",
            NameOfManufacturer: "CARTERY Jewels Pvt Ltd",
            AddressOfManufacturer: "Plot 45, MIDC Industrial Area, Mumbai, Maharashtra"
        }
    },


    {
        id: 'jewels-2',
        name: "Gold-Toned Of 2 Heart Shaped Long Chain Drop Earrings",
        brand: "BVLGARI",
        brand_logo: "./images/brands/bvlgari.jpg",
        price: 79.99,
        category: "Jewels",
        colors: ["#C4B57D"],
        product_details: {
            list: ["Heart shaped design", "Long chain drop style", "Hypoallergenic material", "Lightweight comfort"],
            Type_of_Jewellery: "Drop Earrings",
            Plating: "Gold-Toned Plating",
            Occasion: "Party wear, Wedding wear, Evening wear",
            CareInstructions: "Keep away from perfumes, Store in jewelry box, Clean with soft cloth",
        },
        images: {
            "#C4B57D": [
                "./images/jewels/id-2/first.jpg",
                "./images/jewels/id-2/second.jpg",
                "./images/jewels/id-2/third.jpg",
                "./images/jewels/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Elevate your ensemble with this piece from Yellow Chimes. It is chic yet wearable and is designed with the highest quality materials that ensures durability. These stunning heart-shaped drop earrings feature an intricate design that combines romantic aesthetics with contemporary style. The long chain creates a graceful movement that adds drama to your look."
        },
        rating: 3.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Isabella", rating: 5.0, time: "25 March", comment: "Perfect for special occasions!" },
            { user: "Mia", rating: 4.6, time: "27 March", comment: "Love the heart design, very elegant" }
        ],
        vendor_details: {
            soldBy: "CARTERY Premium Store",
            countryOfOrigin: "India",
            NameOfManufacturer: "CARTERY Fashion Jewelry Ltd",
            AddressOfManufacturer: "Industrial Complex, Sector 63, Noida, UP"
        }
    },


    {
        id: 'jewels-3',
        name: "Gold Tone White Enamel Lily Floral Shape Large Big Hair Claw Clip",
        brand: "CARTIER",
        brand_logo: "./images/brands/cartier.png",
        price: 79.99,
        category: "Jewels",
        colors: ["#F0D8A0"],
        product_details: {
            list: ["Floral lily design", "Durable metal construction", "Strong grip mechanism", "Enamel finish"],
            Type_of_Jewellery: "Hair Accessory",
            Plating: "Gold Tone Plating",
            Occasion: "Daily wear, Party wear, Casual wear",
            CareInstructions: "Handle with care, Avoid excessive force, Keep away from water",
        },
        images: {
            "#F0D8A0": [
                "./images/jewels/id-3/first.jpg",
                "./images/jewels/id-3/second.jpg",
                "./images/jewels/id-3/third.jpg",
                "./images/jewels/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "For a radiant finished look with poise and glam, add this Gold Tone White Enamel Lily Floral Shape Large Big Hair Claw Hair Clip to your wardrobe. This Hair Clips is from the Tress Collection. Designed for modern a look, this Hair Clips are handcrafted and made with finest stones and beads. Team this up with an Evening Gown or Maxi Dress to create a look that exudes royalty and grace. The elegant lily design combined with the pristine white enamel work makes this piece truly stand out."
        },
        rating: 3.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Luna", rating: 4.7, time: "21 March", comment: "Strong grip and beautiful design!" },
            { user: "Ava", rating: 4.6, time: "24 March", comment: "Perfect size and elegant look" }
        ],
        vendor_details: {
            soldBy: "CARTERY Accessories",
            countryOfOrigin: "India",
            NameOfManufacturer: "CARTERY Accessories Pvt Ltd",
            AddressOfManufacturer: "Fashion District, Delhi, India"
        }
    },


    {
        id: 'jewels-4',
        name: "Combo of 5 Delicate Gold Tone Pearls Heart Multi Layer Necklace",
        brand: "CARTIER",
        brand_logo: "./images/brands/cartier.png",
        price: 79.99,
        category: "Jewels",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["5 layered design", "Pearl embellishments", "Heart charm details", "Adjustable length"],
            Type_of_Jewellery: "Layered Necklace",
            Plating: "Gold Tone",
            Occasion: "Party wear, Wedding wear, Evening wear",
            CareInstructions: "Store separately, Avoid water contact, Clean with soft cloth",
        },
        images: {
            "#FFFFFF": [
                "./images/jewels/id-4/first.jpg",
                "./images/jewels/id-4/second.jpg",
                "./images/jewels/id-4/third.jpg",
                "./images/jewels/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "For a radiant finished look with poise and glam, add this Combo of 5 Delicate Gold Tone Pearls Heart Multilayer Necklace to your wardrobe. This Necklaces is from the Prim Posh Fashion Collection. Designed for modern a look, this Necklaces are handcrafted and made with finest stones and beads. Team this up with an Evening Gown or Maxi Dress to create a look that exudes royalty and grace. Each layer is carefully designed to complement the others, creating a harmonious and sophisticated look."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Grace", rating: 5.0, time: "23 March", comment: "Love the layered design!" },
            { user: "Ruby", rating: 4.9, time: "26 March", comment: "Perfect for special occasions" }
        ],
        vendor_details: {
            soldBy: "CARTERY Luxe Store",
            countryOfOrigin: "India",
            NameOfManufacturer: "CARTERY Fashion Ltd",
            AddressOfManufacturer: "Jewelry Complex, Mumbai, Maharashtra"
        }
    },

    {
        id: 'jewels-5',
        name: "American Diamond Rose Gold Plated Bangles Set",
        brand: "BVLGARI",
        brand_logo: "./images/brands/bvlgari.jpg",
        price: 59.99,
        category: "Jewels",
        colors: ["#FFFCEB"],
        product_details: {
            list: ["Premium American diamonds", "Rose gold plating", "Set of 4 bangles", "Elegant design"],
            Type_of_Jewellery: "Bangles Set",
            Plating: "Rose Gold",
            Occasion: "Wedding wear, Festival wear, Party wear",
            CareInstructions: "Store in provided box, Avoid chemicals, Polish regularly",
        },
        images: {
            "#FFFCEB": [
                "./images/jewels/id-5/first.jpg",
                "./images/jewels/id-5/second.jpg",
                "./images/jewels/id-5/third.jpg",
                "./images/jewels/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Bulgari is a brand enthusiastic about fashion and cares deeply about craftsmanship, we believe in making beauty and fashion a part of everybody's life. Pair these intricate bangles set with any outfit to craft a precious look. These Bangles are made from high-quality material and designed with love. These bangles are a true value for money. Wear these on any occasion-party, festival, wedding, birthday, and engagement. Pair it with a suit, saree, kurta, or even western wear. Best gifts for mother, sister, wife, and girlfriend. Each bangle features precisely cut American diamonds that sparkle brilliantly in any light."
        },
        rating: 3.9,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Diana", rating: 5.0, time: "22 March", comment: "Stunning craftsmanship!" },
            { user: "Elena", rating: 4.8, time: "25 March", comment: "Perfect fit and beautiful shine" }
        ],
        vendor_details: {
            soldBy: "BULGARI Official",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "BULGARI Jewelry Inc",
            AddressOfManufacturer: "Via Condotti, Rome, Italy"
        }
    },

    {
        id: 'jewels-6',
        name: "Sterling Silver Minimal Studded Zircon Ring",
        brand: "TIFFANY AND CO",
        brand_logo: "./images/brands/tiffany.png",
        price: 29.99,
        category: "Jewels",
        colors: ["#FFFCEB"],
        product_details: {
            list: ["925 Sterling Silver", "Zircon studded", "Adjustable size", "Rhodium plated"],
            Type_of_Jewellery: "Ring",
            Plating: "Rhodium",
            Occasion: "Daily wear, Party wear, Gift",
            CareInstructions: "Keep away from harsh chemicals, Store in cool dry place",
        },
        images: {
            "#FFFCEB": [
                "./images/jewels/id-6/first.jpg",
                "./images/jewels/id-6/second.jpg",
                "./images/jewels/id-6/third.jpg",
                "./images/jewels/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: `It is time to add this minimal sterling ring to your collection! This dainty infinity ring is studded with zircons and adjustable.
- Sterling Silver with Rhodium plating and 925 hallmark.
- AAA+ quality zircons.
- Adjustable size to ensure no fitting issues
- Rhodium e-coating to prevent tarnish.
- Comes with authenticity certificate. The minimalist design makes it perfect for everyday wear while maintaining a sophisticated look. The high-quality zircons catch and reflect light beautifully, adding a subtle sparkle to your hands.`
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Alice", rating: 4.8, time: "24 March", comment: "Perfect everyday ring!" },
            { user: "Rose", rating: 4.7, time: "27 March", comment: "Great quality and design" }
        ],
        vendor_details: {
            soldBy: "BULGARI Signature",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "BULGARI Silver Works",
            AddressOfManufacturer: "Milano Fashion District, Italy"
        }
    },


    {
        id: 'jewels-7',
        name: "Pink Stone Studded Pearl Kundan Necklace Set for Women",
        brand: "TIFFANY AND CO",
        brand_logo: "./images/brands/tiffany.png",
        price: 39.99,
        category: "Jewels",
        colors: ["#E1B8C1"],
        product_details: {
            list: ["Kundan work", "Pearl embellishments", "Pink stone details", "Complete set with earrings"],
            Type_of_Jewellery: "Necklace Set",
            Plating: "Gold Plated",
            Occasion: "Wedding wear, Festival wear, Traditional events",
            CareInstructions: "Store in airtight box, Avoid perfume contact, Clean with dry cloth",
        },
        images: {
            "#E1B8C1": [
                "./images/jewels/id-7/first.jpg",
                "./images/jewels/id-7/second.jpg",
                "./images/jewels/id-7/third.jpg",
                "./images/jewels/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: `Karatcart Pink Stone Studded Pearl Kundan Necklace Set for Women. Our products are designed with high-quality Kundan Stones and these products are enhanced with plating that are skin-friendly & with love to reach your heart.
Gracefully pair Saree, Kurti, or any Indo-western outfit to enhance your look. Perfect for Weddings, Parties, Festivals, and Traditional Occasions.
Colour: Pink
Package Contains: 1 Necklace and 1 Pair of Earrings, Material: Metal Alloy
Necklace Length: 36 cm, Width: 2 cm; Earrings Length: 4.5 cm, Width: 1.5 cm
Caring for your Fashion Jewelry: We, at Karatcart, take care of every piece of jewelry so that you don't spend hours caring for them. But do remember, fashion jewelry lasts longer when kept dry and free of chemicals. Follow this simple rule: Your jewelry should be the last thing you put on and the first thing you take off.`
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Priya", rating: 5.0, time: "21 March", comment: "Beautiful traditional piece!" },
            { user: "Maya", rating: 4.9, time: "26 March", comment: "Perfect for wedding wear" }
        ],
        vendor_details: {
            soldBy: "KARATCART Official",
            countryOfOrigin: "India",
            NameOfManufacturer: "KARATCART Jewels Ltd",
            AddressOfManufacturer: "Jewelers Street, Jaipur, Rajasthan"
        }
    },

    {
        id: 'jewels-8',
        name: "Women Gold CZ Jewellery Set",
        brand: "TIFFANY AND CO",
        brand_logo: "./images/brands/tiffany.png",
        price: 19.99,
        category: "Jewels",
        colors: ["#F0E3BE"],
        product_details: {
            list: ["CZ stone work", "Complete jewelry set", "Gold plated finish", "Premium quality"],
            Type_of_Jewellery: "Complete Set",
            Plating: "Gold",
            Occasion: "Wedding wear, Party wear, Special occasions",
            CareInstructions: "Store in velvet box, Avoid water contact, Regular polishing recommended",
        },
        images: {
            "#F0E3BE": [
                "./images/jewels/id-8/first.jpg",
                "./images/jewels/id-8/second.jpg",
                "./images/jewels/id-8/third.jpg",
                "./images/jewels/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: `Elegance is all it screams, this genuine gold plated Halo pendant necklace set comes with an adjustable chain and secured with a lobster lock closure. Add grace to your attire with this stunning combination of finest quality cubic zirconia. The set includes perfectly matched pieces that create a coordinated look. Each CZ stone is carefully selected and placed to maximize brilliance and sparkle.`
        },
        rating: 3.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Sarah", rating: 4.7, time: "23 March", comment: "Stunning complete set!" },
            { user: "Rachel", rating: 4.6, time: "25 March", comment: "Great value for money" }
        ],
        vendor_details: {
            soldBy: "KARATCART Luxury",
            countryOfOrigin: "India",
            NameOfManufacturer: "KARATCART Designs Pvt Ltd",
            AddressOfManufacturer: "Jewelry Market, Surat, Gujarat"
        }
    },

    {
        id: 'jewels-9',
        name: "Gold-Plated Heart Love Charm Anklet",
        brand: "TIFFANY AND CO",
        brand_logo: "./images/brands/tiffany.png",
        price: 89.99,
        category: "Jewels",
        colors: ["#EDCE89"],
        product_details: {
            list: ["Heart charm design", "Adjustable length", "Durable chain", "Comfortable wear"],
            Type_of_Jewellery: "Anklet",
            Plating: "Gold Plated",
            Occasion: "Beach wear, Casual wear, Daily wear",
            CareInstructions: "Remove before swimming, Keep away from moisture, Store properly",
        },
        images: {
            "#EDCE89": [
                "./images/jewels/id-9/first.jpg",
                "./images/jewels/id-9/second.jpg",
                "./images/jewels/id-9/third.jpg",
                "./images/jewels/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: `Gold-plated heart anklet, has a lobster closure. This delicate anklet features a charming heart design that adds a romantic touch to your look. The high-quality gold plating ensures long-lasting shine and durability. Perfect for beach outings or adding a feminine touch to any casual outfit. The adjustable chain ensures a perfect fit for all sizes.`
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Lucy", rating: 4.4, time: "20 March", comment: "Perfect for summer!" },
            { user: "Emma", rating: 4.6, time: "24 March", comment: "Cute and dainty design" }
        ],
        vendor_details: {
            soldBy: "KARATCART Accessories",
            countryOfOrigin: "India",
            NameOfManufacturer: "KARATCART Fashion Ltd",
            AddressOfManufacturer: "Fashion Hub, Chennai, Tamil Nadu"
        }
    },




]

// watches:
export const watches = [

    {
        id: 'watches-1',
        name: "Joker & Witch Halo Black Dial Rose Gold Metallic Strap Rhinestone Watch",
        brand: "TITAN",
        brand_logo: "./images/brands/titan.png",
        price: 59.99,
        category: "Watch",
        colors: ["#808080"], // grey
        product_details: {
            list: ["Water Resistant", "Analog Display", "Rhinestone Embellished", "Deployment Clasp"],
            Case_Material: "Stainless Steel",
            Model_number: "JW-1234-BLK",
            Strap_Color: "Rose Gold",
            Strap_Material: "Stainless Steel",
            Water_Resistant: "3 ATM",
            CareInstructions: "Avoid exposure to chemicals, Keep away from extreme heat, Clean with soft cloth",
        },
        images: {
            "#808080": [
                "./images/watches/id-1/first.jpg",
                "./images/watches/id-1/second.jpg",
                "./images/watches/id-1/third.jpg",
                "./images/watches/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Sophisticated and refined, this timepiece black watch from Joker & Witch is all you need to elevate your look. Made with care from stainless steel, it features a deployment closure, this watch will make a modish addition to your timepiece collection. Flaunt this watch wherever you go and let it make you look distinct from the crowd. The elegant black dial is perfectly complemented by the rose gold metallic strap, creating a stunning contrast that catches the eye. The rhinestone embellishments add a touch of glamour, making it perfect for both casual and formal occasions. The watch features precise quartz movement, ensuring accurate timekeeping, while the scratch-resistant mineral glass protects the dial. The comfortable deployment clasp ensures secure wearing, and the water-resistant construction adds to its practicality."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.8, time: "15 March", comment: "Beautiful design and great quality!" },
            { user: "Isabella", rating: 4.3, time: "12 March", comment: "Love the rhinestone details!" }
        ],
        vendor_details: {
            soldBy: "Luxury Timepieces Ltd",
            countryOfOrigin: "Switzerland",
            NameOfManufacturer: "Joker & Witch Timepieces",
            AddressOfManufacturer: "123 Watchmaker Street, Geneva, Switzerland"
        }
    },

    {
        id: 'watches-2',
        name: "Women White Dial Analog Watch - BKPTAS406",
        brand: "CARTIER",
        brand_logo: "./images/brands/cartier.png",
        price: 69.99,
        category: "Watch",
        colors: ["#FFFFFF", "#0A3238"], // white, green 
        product_details: {
            list: ["28mm Dial Size", "Sapphire Crystal Glass", "Date Display", "Luminous Hands"],
            Case_Material: "Premium Alloy",
            Model_number: "BKPTAS406",
            Strap_Color: "Green",
            Strap_Material: "Genuine Leather",
            Water_Resistant: "5 ATM",
            CareInstructions: "Avoid water exposure while wearing, Store in cool dry place, Use leather cleaner for strap",
        },
        images: {
            "#FFFFFF": [
                "./images/watches/id-2/white/first.jpg",
                "./images/watches/id-2/white/second.jpg",
                "./images/watches/id-2/white/third.jpg",
                "./images/watches/id-2/white/fourth.jpg"
            ],
            "#0A3238": [
                "./images/watches/id-2/green/first.jpg",
                "./images/watches/id-2/green/second.jpg",
                "./images/watches/id-2/green/third.jpg",
                "./images/watches/id-2/green/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "Expertly crafted by Ted Baker, this women's analog watch boasts a 28 mm green dial, providing a stylish and sophisticated touch to any outfit. With precise timekeeping and a sleek design, this watch is perfect for both everyday wear and special occasions. Elevate your style with Ted Baker. The watch features a pristine white dial that serves as a perfect canvas for the elegant hour markers and hands. The genuine leather strap in rich green adds a unique character to the timepiece while ensuring maximum comfort. The sapphire crystal glass offers superior scratch resistance, while the luminous hands enable easy time reading in low light conditions. The date display adds functionality to this beautiful piece. The watch is powered by a reliable quartz movement, ensuring precise timekeeping for years to come. The 5 ATM water resistance makes it suitable for everyday use, while the premium alloy case provides durability without compromising on style."
        },
        rating: 3.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Charlotte", rating: 5.0, time: "20 March", comment: "Perfect size and elegant design!" },
            { user: "Olivia", rating: 4.6, time: "16 March", comment: "Great quality for the price!" }
        ],
        vendor_details: {
            soldBy: "TimeZone Retail",
            countryOfOrigin: "United Kingdom",
            NameOfManufacturer: "Ted Baker Watches",
            AddressOfManufacturer: "45 Fashion Avenue, London, UK"
        }
    },

    {
        id: 'watches-3',
        name: "Gold Dial Analog Watch with Bracelet for Women - FCW03GM",
        brand: "TITAN",
        brand_logo: "./images/brands/titan.png",
        price: 79.99,
        category: "Watch",
        colors: ["#F6DCA7"], // gold
        product_details: {
            list: ["33mm Case Size", "15mm Strap Width", "Japanese Movement", "Gift Set Included"],
            Case_Material: "Brass with Gold Plating",
            Model_number: "FCW03GM",
            Strap_Color: "Gold",
            Strap_Material: "Metal Bracelet",
            Water_Resistant: "3 ATM",
            CareInstructions: "Clean with soft cloth, Avoid chemical contact, Store in provided box",
        },
        images: {
            "#F6DCA7": [
                "./images/watches/id-3/first.jpg",
                "./images/watches/id-3/second.jpg",
                "./images/watches/id-3/third.jpg",
                "./images/watches/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "French Connection presents this exquisite analog watch as part of a special gift set, featuring a perfectly proportioned 33mm case size and 15mm strap width. This timepiece exemplifies modern luxury with its sophisticated design and attention to detail. The watch showcases a stunning gold-tone finish that radiates elegance and refinement. The bracelet design adds a touch of glamour while ensuring comfortable wear throughout the day. The watch is powered by a reliable Japanese movement, guaranteeing precise timekeeping. The gift set presentation makes it an ideal choice for special occasions or as a thoughtful present. The bracelet features a secure closure system and is adjustable to achieve the perfect fit. The gold dial features minimalist markers and hands, creating a clean, contemporary look that pairs beautifully with both casual and formal attire. The 3 ATM water resistance provides protection against occasional splashes, while the brass case with gold plating ensures durability and maintains its lustrous appearance over time."
        },
        rating: 3.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ava", rating: 4.7, time: "22 March", comment: "Beautiful gift set packaging!" },
            { user: "Mia", rating: 4.6, time: "19 March", comment: "Perfect size and elegant finish" }
        ],
        vendor_details: {
            soldBy: "Fashion Time Co.",
            countryOfOrigin: "France",
            NameOfManufacturer: "French Connection Timepieces",
            AddressOfManufacturer: "78 Rue de la Mode, Paris, France"
        }
    },

    {
        id: 'watches-4',
        name: "Brown FIORD Round Dial Analog Watch For Women - DK11467 - 6",
        brand: "ROLEX",
        brand_logo: "./images/brands/rolex.png",
        price: 69.99,
        category: "Watch",
        colors: ["#A73711"],
        product_details: {
            list: ["Round Dial", "Fold Over Clasp", "Quartz Movement", "Date Display"],
            Case_Material: "Stainless Steel",
            Model_number: "DK11467-6",
            Strap_Color: "Brown",
            Strap_Material: "Premium Leather",
            Water_Resistant: "3 ATM",
            CareInstructions: "Keep away from moisture, Clean with dry cloth, Avoid extreme temperatures",
        },
        images: {
            "#A73711": [
                "./images/watches/id-4/first.jpg",
                "./images/watches/id-4/second.jpg",
                "./images/watches/id-4/third.jpg",
                "./images/watches/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Upgrade your accessory collection with this stunning brown analog watch from the house of Daniel Klein, that is accented with a fold over clasp closure. Offering a lightweight feel and high quality standards, this watch is designed to perfection and will go perfectly well with your formal as well as casual attires. The FIORD collection represents the perfect blend of classic design and modern functionality. The rich brown leather strap is crafted from premium quality material that ages beautifully and provides exceptional comfort. The round dial features elegant indices and hands, protected by scratch-resistant mineral glass. The fold-over clasp ensures secure fastening while adding to the watch's sophisticated appearance. The reliable quartz movement provides accurate timekeeping, while the date display adds practical functionality. The stainless steel case offers durability and a premium feel, making this timepiece a worthy investment for any watch enthusiast. The versatile design makes it suitable for both professional settings and casual occasions."
        },
        rating: 3.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Luna", rating: 5.0, time: "21 March", comment: "Excellent quality leather strap!" },
            { user: "Grace", rating: 4.9, time: "17 March", comment: "Perfect for everyday wear" }
        ],
        vendor_details: {
            soldBy: "Timex World",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Daniel Klein Watches",
            AddressOfManufacturer: "234 Timepiece Boulevard, Copenhagen, Denmark"
        }
    },

    {
        id: 'watches-5',
        name: "Marv Sense 1.96'' HD Display Bluetooth Calling Smartwatch - Silver",
        brand: "ROLEX",
        brand_logo: "./images/brands/rolex.png",
        price: 79.99,
        category: "Watch",
        colors: ["#000000", "#FFFFFF", "#CB9D80"], // black, white, gold
        product_details: {
            list: ["1.96\" Ultra HD Display", "500 nits Brightness", "Bluetooth Calling", "60Hz Refresh Rate"],
            Case_Material: "Aerospace Grade Aluminum",
            Model_number: "MS-196-SLV",
            Strap_Color: "Multiple Options",
            Strap_Material: "High-Grade Silicone",
            Water_Resistant: "IP68",
            CareInstructions: "Charge regularly, Clean with damp cloth, Avoid extreme temperatures",
        },
        images: {
            "#000000": [
                "./images/watches/id-5/black/first.jpg",
                "./images/watches/id-5/black/second.jpg",
                "./images/watches/id-5/black/third.jpg",
                "./images/watches/id-5/black/fourth.jpg"
            ],
            "#FFFFFF": [
                "./images/watches/id-5/white/first.jpg",
                "./images/watches/id-5/white/second.jpg",
                "./images/watches/id-5/white/third.jpg",
                "./images/watches/id-5/white/fourth.jpg"
            ],
            "#CB9D80": [
                "./images/watches/id-5/gold/first.jpg",
                "./images/watches/id-5/gold/second.jpg",
                "./images/watches/id-5/gold/third.jpg",
                "./images/watches/id-5/gold/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "The beatXP Marv Sense Smart watch boasts an incredible 1.96 Ultra HD Display, delivering an exceptional viewing experience. With a peak brightness of 500 nits and a 60Hz Refresh Rate, the square-shaped screen comes to life like never before. The Marv Sense smartwatch is designed for convenience, featuring a multi-functional crown for on-the-go tasks that make your life easier. The Marv Sense Smartwatch revolutionizes your calling experience with its Advanced Bluetooth Calling capabilities. With EzyPair™ Technology, BLE 5.3, and BT 3.0, you can access your calls and notifications with ease. The device features comprehensive health monitoring including heart rate tracking, SpO2 monitoring, sleep analysis, and stress management. The smart watch includes over 100 sports modes for detailed fitness tracking, and the built-in GPS ensures accurate route mapping for outdoor activities. The aerospace-grade aluminum case provides durability while maintaining a premium look, and the high-grade silicone strap ensures comfort during extended wear. The IP68 water resistance rating makes it suitable for all weather conditions, while the long-lasting battery life of up to 7 days ensures uninterrupted usage. The watch also features AI voice assistance, camera control, music control, and customizable watch faces to suit your style."
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Alex", rating: 4.7, time: "25 March", comment: "Great features and battery life!" },
            { user: "Ryan", rating: 4.6, time: "20 March", comment: "Excellent display quality" }
        ],
        vendor_details: {
            soldBy: "Smart Gadgets Inc",
            countryOfOrigin: "India",
            NameOfManufacturer: "BeatXP Technologies",
            AddressOfManufacturer: "Tech Park, Electronic City, Bangalore, India"
        }
    },

    {
        id: 'watches-6',
        name: "Rose Gold Premium Round Dial Analog Watch For Women - DK11800 - 4",
        brand: "TITAN",
        brand_logo: "./images/brands/titan.png",
        price: 49.99,
        category: "Watch",
        colors: ["#EDC1C2"],
        product_details: {
            list: ["Premium Finish", "Fold Over Clasp", "Mineral Glass", "Slim Profile"],
            Case_Material: "Rose Gold Plated Steel",
            Model_number: "DK11800-4",
            Strap_Color: "Rose Gold",
            Strap_Material: "Stainless Steel",
            Water_Resistant: "3 ATM",
            CareInstructions: "Use soft cloth for cleaning, Avoid chemicals, Store in cool dry place",
        },
        images: {
            "#EDC1C2": [
                "./images/watches/id-6/first.jpg",
                "./images/watches/id-6/second.jpg",
                "./images/watches/id-6/third.jpg",
                "./images/watches/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Upgrade your accessory collection with this stunning rose gold analog watch from the house of Daniel Klein, that is accented with a fold over clasp closure. Offering a lightweight feel and high quality standards, this watch is designed to perfection and will go perfectly well with your formal as well as casual attires. The timepiece features a meticulously crafted round dial housed in a rose gold plated steel case that exudes elegance and sophistication. The matching rose gold stainless steel bracelet creates a seamless look while ensuring durability and comfort. The watch face is protected by scratch-resistant mineral glass, and the precise quartz movement ensures reliable timekeeping. The slim profile makes it perfect for everyday wear, while the premium finish adds a touch of luxury to any outfit. The fold-over clasp provides secure closure and easy wearing, while the 3 ATM water resistance offers protection against occasional splashes. The watch features elegant hour markers and hands that complement the rose gold theme, creating a harmonious and stylish appearance that's perfect for both professional and social settings."
        },
        rating: 3.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 4.8, time: "23 March", comment: "Beautiful rose gold finish!" },
            { user: "Sarah", rating: 4.8, time: "19 March", comment: "Elegant and lightweight" }
        ],
        vendor_details: {
            soldBy: "Luxury Watch World",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Daniel Klein Timepieces",
            AddressOfManufacturer: "456 Watch Street, Copenhagen, Denmark"
        }
    },

    {
        id: 'watches-7',
        name: "White Dial Analog Watch -NM2586WM01",
        brand: "CARTIER",
        brand_logo: "./images/brands/cartier.png",
        price: 79.99,
        category: "Watch",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["White Dial", "Clasp Closure", "Mineral Glass", "Date Display"],
            Case_Material: "Stainless Steel",
            Model_number: "NM2586WM01",
            Strap_Color: "Silver",
            Strap_Material: "Metal",
            Water_Resistant: "5 Meters",
            CareInstructions: "Regular polishing recommended, Avoid water contact, Store in case",
        },
        images: {
            "#FFFFFF": [
                "./images/watches/id-7/first.jpg",
                "./images/watches/id-7/second.jpg",
                "./images/watches/id-7/third.jpg",
                "./images/watches/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Add a classy edge to all your outfit as you finish your look with this Titan white dial analog watch. This watch comes with a clasp closure and is efficiently water resistant up to 5 Meters. Pair it up for your meetings or with any ethnic looks to create an ethereal look. The pristine white dial serves as a perfect canvas for the elegantly designed hour markers and hands, offering excellent readability. The watch features a robust stainless steel case that houses a reliable quartz movement, ensuring precise timekeeping. The metal strap with its sophisticated clasp closure provides both security and comfort during wear. The mineral glass crystal protects the dial while offering clarity and scratch resistance. The date display adds functionality to this stylish timepiece, making it perfect for professional settings. The watch's versatile design allows it to complement both traditional and contemporary outfits, making it a valuable addition to any jewelry collection. The 5-meter water resistance provides protection against accidental splashes, while the overall construction ensures durability and longevity."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Priya", rating: 5.0, time: "24 March", comment: "Perfect for formal wear!" },
            { user: "Riya", rating: 4.9, time: "21 March", comment: "Excellent build quality" }
        ],
        vendor_details: {
            soldBy: "Titan World",
            countryOfOrigin: "India",
            NameOfManufacturer: "Titan Company Limited",
            AddressOfManufacturer: "TITAN Complex, Electronic City, Hosur, India"
        }
    },

    {
        id: 'watches-8',
        name: "Round Dial Analog Watch for Women_NDTH1782341",
        brand: "TITAN",
        brand_logo: "./images/brands/titan.png",
        price: 59.99,
        category: "Watch",
        colors: ["#334759"],
        product_details: {
            list: ["Blue Dial", "Stainless Steel Case", "Quartz Movement", "Designer Collection"],
            Case_Material: "Stainless Steel",
            Model_number: "NDTH1782341",
            Strap_Color: "Navy Blue",
            Strap_Material: "Stainless Steel",
            Water_Resistant: "5 ATM",
            CareInstructions: "Regular cleaning with soft cloth, Avoid extreme temperatures, Professional servicing recommended",
        },
        images: {
            "#334759": [
                "./images/watches/id-8/first.jpg",
                "./images/watches/id-8/second.jpg",
                "./images/watches/id-8/third.jpg",
                "./images/watches/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Earn admiration for your rich sense of style by wearing this blue watch from Tommy Hilfiger. Made with care from stainless steel, it features a clasp closure and is accented with a water resistant quality. Style it with your favourite ensemble for a classy look. This timepiece exemplifies Tommy Hilfiger's commitment to premium quality and sophisticated design. The deep blue dial creates a striking contrast against the stainless steel case and bracelet, while the carefully crafted indices and hands add a touch of luxury. The watch is powered by a precise quartz movement, ensuring reliable timekeeping for years to come. The stainless steel construction provides durability while maintaining a sleek and modern appearance. The secure clasp closure ensures the watch stays firmly in place, while the 5 ATM water resistance makes it suitable for everyday wear. The watch face is protected by scratch-resistant mineral crystal, and the overall design reflects Tommy Hilfiger's signature style - a perfect blend of classic American cool with a modern twist. The versatile design makes it suitable for both casual outings and formal occasions."
        },
        rating: 4.9,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Jessica", rating: 5.0, time: "26 March", comment: "Love the blue dial!" },
            { user: "Amanda", rating: 5.0, time: "22 March", comment: "Premium quality and design" }
        ],
        vendor_details: {
            soldBy: "Luxury Fashion Retail",
            countryOfOrigin: "United States",
            NameOfManufacturer: "Tommy Hilfiger Watches",
            AddressOfManufacturer: "601 Fashion Avenue, New York, USA"
        }
    },

    {
        id: 'watches-9',
        name: "Ace 3.0 Display Bluetooth Calling Smart Watch with Metal Body Black",
        brand: "CARTIER",
        brand_logo: "./images/brands/cartier.png",
        price: 69.99,
        category: "Watch",
        colors: ["#000000"],
        product_details: {
            list: ["1.85\" Display", "Bluetooth Calling", "Metal Body", "60 Sports Modes"],
            Case_Material: "Metal Alloy",
            Model_number: "ACE3.0-BLK",
            Strap_Color: "Black",
            Strap_Material: "Premium Silicone",
            Water_Resistant: "IP67",
            CareInstructions: "Regular charging recommended, Avoid exposure to chemicals, Clean with soft damp cloth",
        },
        images: {
            "#000000": [
                "./images/watches/id-9/first.jpg",
                "./images/watches/id-9/second.jpg",
                "./images/watches/id-9/third.jpg",
                "./images/watches/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Hammer Ace 3.0 smartwatch represents the perfect fusion of technology and style, featuring a stunning 1.85-inch display that delivers crystal-clear visuals with exceptional brightness. This advanced smartwatch comes equipped with comprehensive health monitoring features including heart rate tracking, blood oxygen monitoring, and sleep analysis. The built-in speaker and microphone enable seamless Bluetooth calling, while the dual mode connectivity ensures stable connection at all times. The watch supports 60 different sports modes for detailed activity tracking, and the good battery backup ensures extended usage without frequent charging. The device includes over 100 cloud-based and customizable watch faces to match your style and mood. The built-in GPS functionality provides accurate route tracking for outdoor activities, while the instant voice assistant feature offers convenient hands-free control. The metal body construction ensures durability and premium feel, while the comfortable silicone strap makes it perfect for all-day wear. The IP67 water resistance rating protects against water splashes and dust, making it suitable for various activities. The watch also features smart notifications, music control, camera control, and various other intelligent functions that make it a perfect companion for modern lifestyle."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Michael", rating: 4.3, time: "27 March", comment: "Great features for the price!" },
            { user: "David", rating: 4.7, time: "24 March", comment: "Excellent battery life" }
        ],
        vendor_details: {
            soldBy: "Smart Gadgets Plus",
            countryOfOrigin: "China",
            NameOfManufacturer: "Hammer Technologies",
            AddressOfManufacturer: "888 Tech Street, Shenzhen, China"
        }
    },
]

export const accessories = [...caps, ...glasses, ...handbags, ...jewels, ...watches];

// <a href="./product.html?id=watches-1">

// <a href="./productsList.html?category=jewels">
