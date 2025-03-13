
// t-shirts:
export const tshirts = [
    {
        id: 't-shirt-1',
        name: "Oversized Acid Wash T-Shirt with Badge Detail Blue",
        brand: "Styli Elevate",
        brand_logo: "./images/t-shirts/elevate.png",
        price: 10.59,
        category: "T-shirts",
        colors: ["#B4B9CB", "#D9D2C0"],
        product_details: {
            list: ["Trendy oversized fit", "Soft, breathable fabric", "Machine washable"],
            Material: "Cotton",
            Pattern: "Self design",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Regular Machine Wash",
        },
        images: {
            "#B4B9CB": ["./images/t-shirts/id-1/Blue/first.jpg", "./images/t-shirts/id-1/Blue/second.jpg","./images/t-shirts/id-1/Blue/third.jpg", "./images/t-shirts/id-1/Blue/fourth.jpg"],
            "#D9D2C0": ["./images/t-shirts/id-1/Olive/first.jpg", "./images/t-shirts/id-1/Olive/second.jpg","./images/t-shirts/id-1/Olive/third.jpg", "./images/t-shirts/id-1/Olive/fourth.jpg"  ],
          
        },
        KnowYourProduct: {
            text: "Styli Oversized Acid Wash T-Shirt with Badge Detail Blue",
       
        },
        rating: 4.0,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "David", rating: 4.5, time: "3 January", comment: "Great value for money!" },

            { user: "Liam", rating: 4, time: "2 September", comment: "Stylish but slightly oversized." }
        ],
        vendor_details: {
            soldBy: "Premiere Retail Trading Private Limited",
            countryOfOrigin: "India",
            NameOfManufacturer: "Premiere Retail Trading Private Limited",
            AddressOfManufacturer: "Khasra No 36/1,vpo Bamdoli Main Bijwasan Road Delhi 110077"
        }
    },
  
    {
        id: 't-shirt-2',
        name: "Women Cotton Black T-Shirt",
        brand: "90 DEGREE NORTH",
        brand_logo: "./images/t-shirts/90degreenorth.jpg",
        price: 20.56,
        category: "T-shirts",
        colors: ["#000000"],
        product_details: {
            list: ["Comfortable cotton fabric", "Breathable design", "Available in multiple sizes", "Classic fit with round neck"],
            Material: "Cotton",
            Pattern: "Solid/Plain",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Regular Machine Wash",
        },
        images: {
            "#000000": ["./images/t-shirts/id-2/first.jpg", "./images/t-shirts/id-2/second.jpg","./images/t-shirts/id-2/third.jpg", "./images/t-shirts/id-2/fourth.jpg" ]
        },
        KnowYourProduct: {
            text: "98 Degree North Women Cotton Solid Round Neck Oversize Tshirt. Half Sleeve with a straight hem for a modern style."
        },
        rating: 4.5,
        reviews: [
            { user: "Alice", rating: 5, time: "5 April", comment: "Perfect fit and stylish!" },
            { user: "David", rating: 4.5, time: "3 January", comment: "Great value for money!" },
            { user: "John", rating: 3.5, time: "12 July", comment: "Nice but a bit too oversized." }
        ],
        vendor_details: {
            soldBy: "98 DEGREE NORTH Retailers",
            countryOfOrigin: "India",
            NameOfManufacturer: "98 DEGREE NORTH Textiles",
            AddressOfManufacturer: "Plot No. 45, Textile Park, Tirupur, Tamil Nadu - 641604"
        }
    },
    {
        id: 't-shirt-3',
        name: "Blue Boat Neck Studded Backless Tee",
        brand: "CIDER",
        brand_logo: "./images/t-shirts/cider.png",
        price: 30.00,
        category: "T-shirts",
        colors: ["#B9D3ED"],
        product_details: {
            list: ["Boat neck design", "Breathable fabric", "Stylish studded backless design", "Comfort fit for casual wear"],
            Material: "Polyester",
            Pattern: "Solid/Plain",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Handwash, do Not Bleach, dry Flat, iron On Low Heat",
        },
        images: {
            "#B9D3ED": ["./images/t-shirts/id-3/first.jpg", "./images/t-shirts/id-3/second.jpg","./images/t-shirts/id-3/third.jpg", "./images/t-shirts/id-3/fourth.jpg"]
        },
        KnowYourProduct: {
            text: "Upgrade your look with this Blue Boat Neck Studded Backless Tee by Cider. Perfect for evenings out with friends."
        },
        rating: 4.3,
        reviews: [
            { user: "Emma", rating: 5, time: "22 May", comment: "Love the backless design!" },
            { user: "David", rating: 4.5, time: "3 January", comment: "Great value for money!" },

            { user: "Oliver", rating: 4, time: "8 August", comment: "Unique style, very comfortable." }
        ],
        vendor_details: {
            soldBy: "CIDER International",
            countryOfOrigin: "India",
            NameOfManufacturer: "CIDER Apparels",
            AddressOfManufacturer: "Block A, Garment City, Bangalore, Karnataka - 560001"
        }
    },
    {
        id: 't-shirt-4',
        name: "Multi-Colour Printed Oversized T-Shirt",
        brand: "ONLY",
        brand_logo: "./images/t-shirts/only.png",
        price: 40.00,
        category: "T-shirts",
        colors: ["#234254", "#000000", "#E6E6FA"],
        product_details: {
            list: ["Trendy oversized fit", "Multi-colour print", "Soft, breathable fabric", "Machine washable"],
            Material: "Cotton",
            Pattern: "Typography",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Regular Machine Wash",
        },
        images: {
            "#234254": ["./images/t-shirts/id-4/teal/first.jpg", "./images/t-shirts/id-4/teal/second.jpg","./images/t-shirts/id-4/teal/third.jpg", "./images/t-shirts/id-4/teal/fourth.jpg" ],
            "#000000": ["./images/t-shirts/id-4/black/first.jpg", "./images/t-shirts/id-4/black/second.jpg","./images/t-shirts/id-4/black/third.jpg", "./images/t-shirts/id-4/black/fourth.jpg",  ],
            "#E6E6FA": ["./images/t-shirts/id-4/lavender/first.jpg", "./images/t-shirts/id-4/lavender/second.jpg","./images/t-shirts/id-4/lavender/third.jpg", "./images/t-shirts/id-4/lavender/fourth.jpg"]
        },
        KnowYourProduct: {
            text: "Add a contemporary edge to your look with this oversized t-shirt from ONLY. Ideal for a relaxed, trendy look.",
        },
        rating: 4.0,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "David", rating: 4.5, time: "3 January", comment: "Great value for money!" },

            { user: "Liam", rating: 4, time: "2 September", comment: "Stylish but slightly oversized." }
        ],
        vendor_details: {
            soldBy: "ONLY India",
            countryOfOrigin: "India",
            NameOfManufacturer: "ONLY Fashion Co.",
            AddressOfManufacturer: "No. 20, Industrial Area, Mumbai, Maharashtra - 400001"
        }
    },

    {
        id: 't-shirt-5',
        name: "Multi-Colour Printed Oversized T-Shirt",
        brand: "ONLY",
        brand_logo: "./images/t-shirts/only.png",
        price: 45.00,
        category: "T-shirts",
        colors: ["#F5CAD1"],
        product_details: {
            list: ["Trendy oversized fit", "Multi-colour print", "Soft, breathable fabric", "Machine washable"],
            Material: "Cotton",
            Pattern: "Typography",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Regular machine wash",
        },
        images: {
            "#F5CAD1": ["./images/t-shirts/id-5/first.jpg", "./images/t-shirts/id-5/second.jpg","./images/t-shirts/id-5/third.jpg", "./images/t-shirts/id-5/fourth.jpg"  ]
        },
        KnowYourProduct: {
            text: "Elevate your street style with this multi-colour oversized t-shirt from ONLY."
        },
        rating: 4.4,
        reviews: [
            { user: "Nina", rating: 5, time: "2 February", comment: "Amazing style and comfort." },
            { user: "Owen", rating: 4, time: "3 June", comment: "Comfortable, but could improve the fit." },
            { user: "David", rating: 4.5, time: "3 January", comment: "Great value for money!" }
        ],
        vendor_details: {
            soldBy: "ONLY India",
            countryOfOrigin: "India",
            NameOfManufacturer: "ONLY Fashion Co.",
            AddressOfManufacturer: "No. 20, Industrial Area, Mumbai, Maharashtra - 400001"
        }
    },

    {
        id: 't-shirt-6',
        name: "90 Satin V-Neck Graphic Short Sleeve Oversized Tee",
        brand: "CIDER",
        brand_logo: "./images/t-shirts/cider.png",
        price: 10.00,
        category: "T-shirts",
        colors: ["#F4E8ED"],
        product_details: {
            list: [""],
            Material: "Polyster",
            Pattern: "Graphic",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Iron On Low Heat,tumble Dry With Low Heat,do Not Bleach,machine Wash With Cold Water",
        },
        images: {
            "#F4E8ED": ["./images/t-shirts/id-6/first.jpg", "./images/t-shirts/id-6/second.jpg","./images/t-shirts/id-6/third.jpg", "./images/t-shirts/id-6/fourth.jpg"  ]
        },
        KnowYourProduct: {
            text: "90 Satin V-Neck Graphic Short Sleeve Oversized Tee",
        },
        rating: 5.0,
        reviews: [
            { user: "Nina", rating: 5, time: "2 February", comment: "Amazing style and comfort." },
            { user: "Owen", rating: 4, time: "3 June", comment: "Comfortable, but could improve the fit." },
            { user: "David", rating: 4.5, time: "3 January", comment: "Great value for money!" }
        ],
        vendor_details: {
            soldBy: "Arvind Lifestyle Brands Limited-parent",
            countryOfOrigin: "India",
            NameOfManufacturer: "M/s. Fairway Fashions",
            AddressOfManufacturer: "No. 18, Avm Layout, Samundipuram South, Gandhinagar Post, Tirupur, Tamil Nadu - 641603"
        }
    },

    {
        id: 't-shirt-7',
        name: "Official The Office- Angela's Cats Women Oversized T-shirts",
        brand: "ONLY",
        brand_logo: "./images/t-shirts/only.png",
        price: 98.67,
        category: "T-shirts",
        colors: ["#E8E5E4"],
        product_details: {
            list: ["Water resistant", "Packable into bag"],
            Material: "Cotton",
            Pattern: "ColorBlock",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Machine Wash Cold With Like Colours. Line Dry In Shade",
        },
        images: {
            "#E8E5E4": ["./images/t-shirts/id-7/first.jpg", "./images/t-shirts/id-7/second.jpg","./images/t-shirts/id-7/third.jpg", "./images/t-shirts/id-7/fourth.jpg"  ]
        },
        KnowYourProduct: {
            text: "Official Licensed The Office Oversized T-Shirts.Shop for The Office Angela's Cats Women Oversized T-Shirts and other Cool merchandise online in India exclusively at The Souled Store.MRP: Rs. 1499/- incl. of all taxes. Tailored to sartorial perfection from premium quality fabric, it assures a soft and soothing touch against the skin. The exquisite silhouette adds to its appeal.",
            
        },
        rating: 4.6,
        reviews: [
            { user: "Nina", rating: 5, time: "2 February", comment: "Amazing style and comfort." },
            { user: "Owen", rating: 4, time: "3 June", comment: "Comfortable, but could improve the fit." },
            { user: "David", rating: 4.5, time: "3 January", comment: "Great value for money!" }
        ],
        vendor_details: {
            soldBy: "Arvind Lifestyle Brands Limited-parent",
            countryOfOrigin: "India",
            NameOfManufacturer: "M/s. Fairway Fashions",
            AddressOfManufacturer: "No. 18, Avm Layout, Samundipuram South, Gandhinagar Post, Tirupur, Tamil Nadu - 641603"
        }
    },

 

    {
        id: 't-shirt-8',
        name: "Green Womens Cotton Blend Typography Oversized T-Shirt",
        brand: "Elevate",
        brand_logo: "./images/t-shirts/elevate.png",
        price: 90.70,
        category: "T-shirts",
        colors: ["#168445"],
        product_details: {
            list: ["Stand collar with zip-off hood; front zip closure", "Water resistant", "Packable into bag", "Two side zip pockets; two inner open pockets"],
            Material: "Cotton",
            Pattern: "Typography",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Machine Wash Cold With Like Colours.",
        },
        images: {
            "#168445": ["./images/t-shirts/id-8/first.jpg", "./images/t-shirts/id-8/second.jpg","./images/t-shirts/id-8/third.jpg", "./images/t-shirts/id-8/fourth.jpg"  ]
        },
        KnowYourProduct: {
            text: "Green Womens Cotton Blend Typography Oversized T-Shirt",
    
        },
        rating: 4.4,
        reviews: [
            { user: "Nina", rating: 5, time: "2 February", comment: "Amazing style and comfort." },
            { user: "Owen", rating: 4, time: "3 June", comment: "Comfortable, but could improve the fit." },
            { user: "David", rating: 4.5, time: "3 January", comment: "Great value for money!" }
        ],
        vendor_details: {
            soldBy: "Arvind Lifestyle Brands Limited-parent",
            countryOfOrigin: "India",
            NameOfManufacturer: "M/s. Fairway Fashions",
            AddressOfManufacturer: "No. 18, Avm Layout, Samundipuram South, Gandhinagar Post, Tirupur, Tamil Nadu - 641603"
        }
    },

    {
        id: 't-shirt-9',
        name: "Pink Panther: The Art Of Chilling Women Oversized T-Shirt",
        brand: "ONLY",
        brand_logo: "./images/t-shirts/only.png",
        price: 85.00,
        category: "T-shirts",
        colors: ["#7AB8C7"],
        product_details: {
            list: ["Oversized", "Available in all sizes", "Comfortable"],
            Material: "Cotton",
            Pattern: "Printed",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Regular Machine Wash",
        },
        images: {
            "#7AB8C7": ["./images/t-shirts/id-9/first.jpg", "./images/t-shirts/id-9/second.jpg","./images/t-shirts/id-9/third.jpg", "./images/t-shirts/id-9/fourth.jpg"  ]
        },
        KnowYourProduct: {
            text: "Pink Panther: The Art Of Chilling Women Oversized T-Shirt"
        },
        rating: 3.4,
        reviews: [
            { user: "Nina", rating: 5, time: "2 February", comment: "Amazing style and comfort." },
            { user: "Owen", rating: 4, time: "3 June", comment: "Comfortable, but could improve the fit." },
            { user: "David", rating: 4.5, time: "3 January", comment: "Great value for money!" }
        ],
        vendor_details: {
            soldBy: "Arvind Lifestyle Brands Limited-parent",
            countryOfOrigin: "India",
            NameOfManufacturer: "M/s. Fairway Fashions",
            AddressOfManufacturer: "No. 18, Avm Layout, Samundipuram South, Gandhinagar Post, Tirupur, Tamil Nadu - 641603"
        }
    },
 
];


//  tank tops:
export const tanktops = [
    {
        id: 'tank-top-1',
        name: "Cotton Collar Striped Button Tank Top",
        brand: "Cider",
        brand_logo: "./images/t-shirts/cider.png",
        price: 20.50,
        category: "Tank-Tops",
        colors: ["#F2D5DB"],
        product_details: {
            list: ["Button closure", "Striped pattern", "Sleeveless design"],
            Material: "Cotton",
            Pattern: "Striped",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#F2D5DB": [
                "./images/tank-tops/id-1/first.jpg",
                "./images/tank-tops/id-1/second.jpg",
                "./images/tank-tops/id-1/third.jpg",
                "./images/tank-tops/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Comfortable and stylish tank top perfect for summer.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Liam", rating: 4.0, time: "20 March", comment: "Good fit, but a bit see-through." },
            { user: "Emma", rating: 5.0, time: "25 March", comment: "Absolutely love this top!" }
        ],
        vendor_details: {
            soldBy: "Cider Store",
            countryOfOrigin: "USA",
            NameOfManufacturer: "Cider",
            AddressOfManufacturer: "123 Fashion St, New York, NY"
        }
    },
    {
        id: 'tank-top-2',
        name: "Originals Evil Eye Cropped Tank Top",
        brand: "Cider",
        brand_logo: "./images/t-shirts/cider.png",
        price: 22.00,
        category: "Tank-Tops",
        colors: ["#CDCCD8"],
        product_details: {
            list: ["Cropped length", "Evil Eye print", "Sleeveless"],
            Material: "Polyester",
            Pattern: "Printed",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Hand wash only",
        },
        images: {
            "#CDCCD8": [
                "./images/tank-tops/id-2/first.jpg",
                "./images/tank-tops/id-2/second.jpg",
                "./images/tank-tops/id-2/third.jpg",
                "./images/tank-tops/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Trendy cropped tank with an eye-catching design.",
        },
        rating: 4.2,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "John", rating: 4.0, time: "19 March", comment: "Cute design but a little tight." },
            { user: "Olivia", rating: 5.0, time: "21 March", comment: "Perfect for summer outings!" }
        ],
        vendor_details: {
            soldBy: "Cider Store",
            countryOfOrigin: "USA",
            NameOfManufacturer: "Cider",
            AddressOfManufacturer: "123 Fashion St, New York, NY"
        }
    },
    {
        id: 'tank-top-3',
        name: "Another Boyfriend Cami Top",
        brand: "Cider",
        brand_logo: "./images/t-shirts/cider.png",
        price: 19.99,
        category: "Tank-Tops",
        colors: ["#E4B28D"],
        product_details: {
            list: ["Relaxed fit", "Cami style", "Soft fabric"],
            Material: "Rayon",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, hang to dry",
        },
        images: {
            "#E4B28D": [
                "./images/tank-tops/id-3/first.jpg",
                "./images/tank-tops/id-3/second.jpg",
                "./images/tank-tops/id-3/third.jpg",
                "./images/tank-tops/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A versatile cami top that can be dressed up or down.",
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Daniel", rating: 4.2, time: "19 March", comment: "Great for layering." },
            { user: "Emma", rating: 5.0, time: "22 March", comment: "Absolutely love this top!" }
        ],
        vendor_details: {
            soldBy: "Cider Store",
            countryOfOrigin: "USA",
            NameOfManufacturer: "Cider",
            AddressOfManufacturer: "123 Fashion St, New York, NY"
        }
    },
    {
        id: 'tank-top-4',
        name: "Women Textured Black Tank Top",
        brand: "BELENCIAGA",
        brand_logo: "./images/t-shirts/balenciaga.png",
        price: 25.00,
        category: "Tank-Tops",
        colors: ["#000000"],
        product_details: {
            list: ["Textured fabric", "Regular fit", "Sleeveless"],
            Material: "Cotton Blend",
            Pattern: "Textured",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Dry clean only",
        },
        images: {
            "#000000": [
                "./images/tank-tops/id-4/first.jpg",
                "./images/tank-tops/id-4/second.jpg",
                "./images/tank-tops/id-4/third.jpg",
                "./images/tank-tops/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Elegant tank top with a unique texture.",
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ella", rating: 4.8, time: "20 March", comment: "Stylish and chic." },
            { user: "Ava", rating: 5.0, time: "23 March", comment: "My favorite tank top!" }
        ],
        vendor_details: {
            soldBy: "BELENCIAGA Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "BELENCIAGA",
            AddressOfManufacturer: "456 Fashion St, Milan, Italy"
        }
    },
    {
        id: 'tank-top-5',
        name: "Asymmetrical Neckline Tank Top - Black",
        brand: "ONLY",
        brand_logo: "./images/t-shirts/only.png",
        price: 18.00,
        category: "Tank-Tops",
        colors: ["#000000"],
        product_details: {
            list: ["Asymmetrical neckline", "Regular fit", "Sleeveless"],
            Material: "Viscose",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, lay flat to dry",
        },
        images: {
            "#000000": [
                "./images/tank-tops/id-5/first.jpg",
                "./images/tank-tops/id-5/second.jpg",
                "./images/tank-tops/id-5/third.jpg",
                "./images/tank-tops/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A trendy tank with a unique neckline.",
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Mia", rating: 4.3, time: "19 March", comment: "Very flattering fit." },
            { user: "Isabella", rating: 5.0, time: "22 March", comment: "Love the style!" }
        ],
        vendor_details: {
            soldBy: "ONLY Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "ONLY",
            AddressOfManufacturer: "789 Fashion St, Copenhagen, Denmark"
        }
    },
    {
        id: 'tank-top-6',
        name: "Pink Solid Tank Top",
        brand: "STYLI ELEVATE",
        brand_logo: "./images/t-shirts/elevate.png",
        price: 16.00,
        category: "Tank-Tops",
        colors: ["#15181B", "#A8A4CA", "#CBB5A8"],
        product_details: {
            list: ["Solid color", "Regular fit", "Sleeveless"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#15181B": [
                "./images/tank-tops/id-6/black/first.jpg",
                "./images/tank-tops/id-6/black/second.jpg",
                "./images/tank-tops/id-6/black/third.jpg",
                "./images/tank-tops/id-6/black/fourth.jpg"
            ],
            "#A8A4CA": [
                "./images/tank-tops/id-6/purple/first.jpg",
                "./images/tank-tops/id-6/purple/second.jpg",
                "./images/tank-tops/id-6/purple/third.jpg",
                "./images/tank-tops/id-6/purple/fourth.jpg"
            ],
            "#CBB5A8": [
                "./images/tank-tops/id-6/skin/first.jpg",
                "./images/tank-tops/id-6/skin/second.jpg",
                "./images/tank-tops/id-6/skin/third.jpg",
                "./images/tank-tops/id-6/skin/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A must-have tank top for casual outings.",
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Noah", rating: 4.5, time: "20 March", comment: "Perfect for summer." },
            { user: "Emma", rating: 5.0, time: "25 March", comment: "So soft and comfy!" }
        ],
        vendor_details: {
            soldBy: "Styli Elevate Store",
            countryOfOrigin: "India",
            NameOfManufacturer: "Styli Elevate",
            AddressOfManufacturer: "101 Fashion St, Mumbai, India"
        }
    },
    {
        id: 'tank-top-7',
        name: "Graphic Printed Tank Top",
        brand: "BELANCIAGA",
        brand_logo: "./images/t-shirts/belanciaga.png",
        price: 22.50,
        category: "Tank-Tops",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["Graphic print", "Relaxed fit", "Sleeveless"],
            Material: "Cotton",
            Pattern: "Graphic",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, hang to dry",
        },
        images: {
            "#FFFFFF": [
                "./images/tank-tops/id-7/first.jpg",
                "./images/tank-tops/id-7/second.jpg",
                "./images/tank-tops/id-7/third.jpg",
                "./images/tank-tops/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Stand out with this trendy graphic tank top.",
        },
        rating: 4.3,
        reviews: [
            { user: "James", rating: 4.5, time: "30 March", comment: "Looks great and fits well!" },
            { user: "Liam", rating: 4.0, time: "1 April", comment: "Nice quality!" },
            { user: "Ella", rating: 5.0, time: "5 April", comment: "So stylish!" }
        ],
        vendor_details: {
            soldBy: "Stylish Fit Store",
            countryOfOrigin: "USA",
            NameOfManufacturer: "Stylish Fit",
            AddressOfManufacturer: "789 Fashion St, Los Angeles, CA"
        }
    },
    {
        id: 'tank-top-8',
        name: "Cotton Spaghetti Strap Tank Top",
        brand: "STYLI ELEVATE",
        brand_logo: "./images/t-shirts/elevate.png",
        price: 45.99,
        category: "Tank-Tops",
        colors: ["#FF6347"],
        product_details: {
            list: ["Spaghetti straps", "Regular fit", "Soft cotton"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#FF6347": [
                "./images/tank-tops/id-8/first.jpg",
                "./images/tank-tops/id-8/second.jpg",
                "./images/tank-tops/id-8/third.jpg",
                "./images/tank-tops/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A stylish spaghetti strap tank for warm days.",
        },
        rating: 4.5,
        reviews: [
            { user: "Oliver", rating: 4.0, time: "28 March", comment: "Comfortable and cute!" },
            { user: "Ava", rating: 4.7, time: "29 March", comment: "Perfect fit!" },
            { user: "Lucas", rating: 5.0, time: "30 March", comment: "Love it!" }
        ],
        vendor_details: {
            soldBy: "Trendy Wear Store",
            countryOfOrigin: "UK",
            NameOfManufacturer: "Trendy Wear",
            AddressOfManufacturer: "456 Fashion St, London, UK"
        }
    },
    {
        id: 'tank-top-9',
        name: "Luxe Satin Tank Top",
        brand: "BELENCIAGA",
        brand_logo: "./images/t-shirts/belenciaga.png",
        price: 92.99,
        category: "Tank-Tops",
        colors: ["#B0E0E6"],
        product_details: {
            list: ["Satin finish", "Regular fit", "Adjustable straps"],
            Material: "Satin",
            Pattern: "Solid",
            Occasion: "Evening",
            Stretchable: "No",
            CareInstructions: "Dry clean only",
        },
        images: {
            "#B0E0E6": [
                "./images/tank-tops/id-9/first.jpg",
                "./images/tank-tops/id-9/second.jpg",
                "./images/tank-tops/id-9/third.jpg",
                "./images/tank-tops/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Elevate your evening look with this luxe satin tank.",
        },
        rating: 4.9,
        reviews: [
            { user: "Mia", rating: 4.5, time: "30 March", comment: "Beautiful and elegant!" },
            { user: "Ella", rating: 5.0, time: "31 March", comment: "My favorite evening top!" },
            { user: "James", rating: 4.8, time: "1 April", comment: "So chic!" }
        ],
        vendor_details: {
            soldBy: "Elegant Fashion Store",
            countryOfOrigin: "France",
            NameOfManufacturer: "Elegant Fashion",
            AddressOfManufacturer: "123 Fashion St, Paris, France"
        }
    }
];

// //  crop tops:
export const croptops = [
    {
        id: 'crop-top-1',
        name: "Womens Maroon Cowl Neck Top",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 29.99,
        category: "Crop-Tops",
        colors: ["#790E28", "#486694", "#C3D3CF"], // red, blue, green
        product_details: {
            list: ["Cowl neck design", "Stylish and elegant", "Perfect for casual wear"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#790E28": [
                "./images/crop-tops/id-1/red/first.jpg",
                "./images/crop-tops/id-1/red/second.jpg",
                "./images/crop-tops/id-1/red/third.jpg",
                "./images/crop-tops/id-1/red/fourth.jpg"
            ],
            "#486694": [
                "./images/crop-tops/id-1/blue/first.jpg",
                "./images/crop-tops/id-1/blue/second.jpg",
                "./images/crop-tops/id-1/blue/third.jpg",
                "./images/crop-tops/id-1/blue/fourth.jpg"

            ],
            "#C3D3CF":[
                "./images/crop-tops/id-1/green/first.jpg",
                "./images/crop-tops/id-1/green/second.jpg",
                "./images/crop-tops/id-1/green/third.jpg",
                "./images/crop-tops/id-1/green/fourth.jpg"

            ]


        },
        KnowYourProduct: {
            text: "This top features a stylish cowl neck design that adds a touch of elegance to your casual look.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 5, time: "20 March", comment: "Love the color and fit!" },
            { user: "Olivia", rating: 4, time: "22 March", comment: "Good quality, but runs a bit small." }
        ],
        vendor_details: {
            soldBy: "Fashion Hub",
            countryOfOrigin: "India",
            NameOfManufacturer: "Fashion Inc.",
            AddressOfManufacturer: "123 Fashion St, Mumbai, India"
        }
    },
    {
        id: 'crop-top-2',
        name: "Open Back Long Sleeve Top in Black",
        brand: "BELANCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 39.99,
        category: "Crop-Tops",
        colors: ["#15120F"],
        product_details: {
            list: ["Open back design", "Long sleeves", "Casual yet chic"],
            Material: "Polyester",
            Pattern: "Plain",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Hand wash only",
        },
        images: {
            "#15120F": [
                "./images/crop-tops/id-2/first.jpg",
                "./images/crop-tops/id-2/second.jpg",
                "./images/crop-tops/id-2/third.jpg",
                "./images/crop-tops/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This stylish open back top is perfect for a night out.",
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Liam", rating: 4, time: "19 March", comment: "Great for layering!" },
            { user: "Ava", rating: 3.5, time: "21 March", comment: "Nice, but the fabric could be softer." }
        ],
        vendor_details: {
            soldBy: "Trendy Wear",
            countryOfOrigin: "USA",
            NameOfManufacturer: "Fashion Co.",
            AddressOfManufacturer: "456 Style Ave, New York, USA"
        }
    },
    {
        id: 'crop-top-3',
        name: "Women Casual Black Check Colour Notched Lapel Checked Regular Top",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 34.99,
        category: "Crop-Tops",
        colors: ["#A89E93"],
        product_details: {
            list: ["Checkered pattern", "Notched lapel design", "Versatile for casual wear"],
            Material: "Cotton",
            Pattern: "Checkered",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash warm, do not bleach",
        },
        images: {
            "#A89E93": [
                "./images/crop-tops/id-3/first.jpg",
                "./images/crop-tops/id-3/second.jpg",
                "./images/crop-tops/id-3/third.jpg",
                "./images/crop-tops/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A trendy checkered top that adds a fun touch to your outfit.",
        },
        rating: 4.2,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "James", rating: 4.2, time: "20 March", comment: "Perfect for casual outings." },
            { user: "Mia", rating: 4, time: "22 March", comment: "Good fit, but needs ironing." }
        ],
        vendor_details: {
            soldBy: "Casual Chic",
            countryOfOrigin: "India",
            NameOfManufacturer: "Style Makers",
            AddressOfManufacturer: "789 Fashion Rd, Delhi, India"
        }
    },
    {
        id: 'crop-top-4',
        name: "Denim Busting Crop Top",
        brand: "STYLI ELEVATE",
        brand_logo: "./images/brands/styli_elevate.png",
        price: 49.99,
        category: "Crop-Tops",
        colors: ["#9BA8B7"],
        product_details: {
            list: ["Denim material", "Classic style", "Perfect for casual wear"],
            Material: "Denim",
            Pattern: "Plain",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Machine wash cold, hang dry",
        },
        images: {
            "#9BA8B7": [
                "./images/crop-tops/id-4/first.jpg",
                "./images/crop-tops/id-4/second.jpg",
                "./images/crop-tops/id-4/third.jpg",
                "./images/crop-tops/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A chic denim crop top that is a must-have for your wardrobe.",
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Lucas", rating: 4.8, time: "19 March", comment: "Love this top, great fit!" },
            { user: "Isabella", rating: 4, time: "21 March", comment: "Stylish and versatile." }
        ],
        vendor_details: {
            soldBy: "Elevate Fashion",
            countryOfOrigin: "Bangladesh",
            NameOfManufacturer: "Trendy Designs",
            AddressOfManufacturer: "321 Style Blvd, Dhaka, Bangladesh"
        }
    },
    {
        id: 'crop-top-5',
        name: "Navy Blue & Mustard Yellow Floral Print Crop Top",
        brand: "STYLI ELEVATE",
        brand_logo: "./images/brands/styli_elevate.png",
        price: 44.99,
        category: "Crop-Tops",
        colors: ["#192438", "#67111B", "#81615F"], // blue, red, brown
        product_details: {
            list: ["Floral print design", "Bright colors", "Ideal for summer"],
            Material: "Polyester",
            Pattern: "Floral",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#192438": [
                "./images/crop-tops/id-5/blue/first.jpg",
                "./images/crop-tops/id-5/blue/second.jpg",
                "./images/crop-tops/id-5/blue/third.jpg",
                "./images/crop-tops/id-5/blue/fourth.jpg"
            ],
            "#67111B": [
                "./images/crop-tops/id-5/red/first.jpg",
                "./images/crop-tops/id-5/red/second.jpg",
                "./images/crop-tops/id-5/red/third.jpg",
                "./images/crop-tops/id-5/red/fourth.jpg"
            ],
            "#81615F": [
                "./images/crop-tops/id-5/brown/first.jpg",
                "./images/crop-tops/id-5/brown/second.jpg",
                "./images/crop-tops/id-5/brown/third.jpg",
                "./images/crop-tops/id-5/brown/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A vibrant floral print that adds a pop of color to any outfit.",
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ethan", rating: 4.6, time: "20 March", comment: "Flattering fit and great fabric." },
            { user: "Avery", rating: 4.2, time: "22 March", comment: "Nice colors, I love it!" }
        ],
        vendor_details: {
            soldBy: "Floral Fashion",
            countryOfOrigin: "India",
            NameOfManufacturer: "Flower Power",
            AddressOfManufacturer: "654 Blossom St, Pune, India"
        }
    },
    {
        id: 'crop-top-6',
        name: "Aqua Blue Sleeveless Crop Top",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 29.99,
        category: "Crop-Tops",
        colors: ["#A0E4EA"],
        product_details: {
            list: ["Sleeveless design", "Lightweight material", "Perfect for layering"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, do not bleach",
        },
        images: {
            "#A0E4EA": [
                "./images/crop-tops/id-6/first.jpg",
                "./images/crop-tops/id-6/second.jpg",
                "./images/crop-tops/id-6/third.jpg",
                "./images/crop-tops/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A versatile sleeveless crop top that is a summer essential.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Oliver", rating: 4.7, time: "19 March", comment: "Great fit and color!" },
            { user: "Charlotte", rating: 4.3, time: "21 March", comment: "Lightweight and perfect for summer." }
        ],
        vendor_details: {
            soldBy: "Summer Styles",
            countryOfOrigin: "USA",
            NameOfManufacturer: "Sunshine Apparel",
            AddressOfManufacturer: "987 Beach Rd, Miami, USA"
        }
    },
    {
        id: 'crop-top-7',
        name: "Black and White Striped Crop Top",
        brand: "cider",
        brand_logo: "./images/brands/cider.png",
        price: 25.89,
        category: "Crop-Tops",
        colors: ["#3C3C3D"], // black
        product_details: {
            list: ["Striped pattern", "Casual style", "Great for layering"],
            Material: "Cotton",
            Pattern: "Striped",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, hang dry",
        },
        images: {
            "#3C3C3D": [
                "./images/crop-tops/id-7/first.jpg",
                "./images/crop-tops/id-7/second.jpg",
                "./images/crop-tops/id-7/third.jpg",
                "./images/crop-tops/id-7/fourth.jpg"
            ],

        },
        KnowYourProduct: {
            text: "A classic striped crop top that pairs well with jeans or skirts.",
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "James", rating: 4.0, time: "19 March", comment: "Good quality and fit." },
            { user: "Mia", rating: 4.2, time: "21 March", comment: "Simple yet stylish." }
        ],
        vendor_details: {
            soldBy: "Trendy Boutique",
            countryOfOrigin: "Germany",
            NameOfManufacturer: "Fashion World",
            AddressOfManufacturer: "654 Style St, Berlin, Germany"
        }
    },
    {
        id: 'crop-top-8',
        name: "Lightweight Casual Top",
        brand: "STYLI ELEVATE",
        brand_logo: "./images/brands/styli_elevate.png",
        price: 39.99,
        category: "Crop-Tops",
        colors: ["#D7D2D8"],
        product_details: {
            list: ["Lightweight and breathable", "Casual design", "Perfect for layering"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#D7D2D8": [
                "./images/crop-tops/id-8/first.jpg",
                "./images/crop-tops/id-8/second.jpg",
                "./images/crop-tops/id-8/third.jpg",
                "./images/crop-tops/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A trendy corset-style top that accentuates your figure.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Mason", rating: 4.7, time: "19 March", comment: "Great quality and fit!" },
            { user: "Charlotte", rating: 4.3, time: "21 March", comment: "Love this top, very flattering." }
        ],
        vendor_details: {
            soldBy: "Corset Couture",
            countryOfOrigin: "USA",
            NameOfManufacturer: "Fashion House",
            AddressOfManufacturer: "789 Trend St, San Francisco, USA"
        }
    },
    {
        id: 'crop-top-9',
        name: "Trendy Corset Style Top",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 45.99,
        category: "Crop-Tops",
        colors: ["#D7C8D7"], // ligh  pink and light blue
        product_details: {
            list: ["Corset-style design", "Fitted silhouette", "Perfect for dressing up"],
            Material: "Polyester Blend",
            Pattern: "Solid",
            Occasion: "Party",
            Stretchable: "No",
            CareInstructions: "Hand wash cold, lay flat to dry",
        },
        images: {
            "#D7C8D7": [
                "./images/crop-tops/id-9/first.jpg",
                "./images/crop-tops/id-9/second.jpg",
                "./images/crop-tops/id-9/third.jpg",
                "./images/crop-tops/id-9/fourth.jpg"
            ]
         
        },
        KnowYourProduct: {
            text: "A trendy corset-style top that accentuates your figure.",
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.8, time: "22 March", comment: "Absolutely stunning! Fits perfectly." },
            { user: "Liam", rating: 4.5, time: "23 March", comment: "Great quality and very stylish." },
            { user: "Emma", rating: 4.4, time: "25 March", comment: "Beautiful design but a bit tight." }
        ],
        vendor_details: {
            soldBy: "Zara Online",
            countryOfOrigin: "Spain",
            NameOfManufacturer: "Zara Manufacturing",
            AddressOfManufacturer: "123 Fashion Ave, Madrid, Spain"
        }
    }
    
];


// // sweat shirts:
export const sweatshirts = [
    {
        id: 'sweatshirt-1',
        name: "Women Full Sleeve Round Neck Solid Purple Sweatshirt",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 39.99,
        category: "Sweatshirts",
        colors: ["#179A57", "#CBA9E7", "#FFFFFF"], // green, purple, white
        product_details: {
            list: ["Comfortable fit", "Durable fabric"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold",
        },
        images: {
            "#179A57": [
                "./images/sweatshirts/id-1/green/first.jpg",
                "./images/sweatshirts/id-1/green/second.jpg",
                "./images/sweatshirts/id-1/green/third.jpg",
                "./images/sweatshirts/id-1/green/fourth.jpg"
            ],
            "#CBA9E7": [
                "./images/sweatshirts/id-1/purple/first.jpg",
                "./images/sweatshirts/id-1/purple/second.jpg",
                "./images/sweatshirts/id-1/purple/third.jpg",
                "./images/sweatshirts/id-1/purple/fourth.jpg"
            ],
            "#FFFFFF": [
                "./images/sweatshirts/id-1/white/first.jpg",
                "./images/sweatshirts/id-1/white/second.jpg",
                "./images/sweatshirts/id-1/white/third.jpg",
                "./images/sweatshirts/id-1/white/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "Explore the perfect blend of style and comfort.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 4.0, time: "25 March", comment: "Great quality but runs a bit small." },
            { user: "Mia", rating: 5.0, time: "30 March", comment: "I love this sweatshirt!" }
        ],
        vendor_details: {
            soldBy: "Fashion Hub",
            countryOfOrigin: "India",
            NameOfManufacturer: "Fashion Co.",
            AddressOfManufacturer: "123 Fashion Street, Delhi"
        }
    },

    {
        id: 'sweatshirt-2',
        name: "Crew Neck Solid Sweatshirt",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 29.99,
        category: "Sweatshirts",
        colors: ["#EA7176"], // red
        product_details: {
            list: ["Casual style", "Easy to pair with jeans"],
            Material: "Polyester",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Hand wash only",
        },
        images: {
            "#EA7176": [
                "./images/sweatshirts/id-2/first.jpg",
                "./images/sweatshirts/id-2/second.jpg",
                "./images/sweatshirts/id-2/third.jpg",
                "./images/sweatshirts/id-2/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "A stylish addition to your wardrobe.",
        },
        rating: 4.0,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Olivia", rating: 3.5, time: "20 March", comment: "It's nice but not very soft." },
            { user: "Ava", rating: 4.2, time: "22 March", comment: "Good value for money." }
        ],
        vendor_details: {
            soldBy: "Style Store",
            countryOfOrigin: "Bangladesh",
            NameOfManufacturer: "Cider Apparel",
            AddressOfManufacturer: "456 Style Ave, Dhaka"
        }
    },
   
    {
        id: 'sweatshirt-3',
        name: "Women Solid Pink SweatShirt",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 34.99,
        category: "Sweatshirts",
        colors: ["#DDBBD5"], // pink
        product_details: {
            list: ["Soft fabric", "Perfect for layering"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash",
        },
        images: {
            "#DDBBD5": [
                "./images/sweatshirts/id-3/first.jpg", 
                "./images/sweatshirts/id-3/second.jpg",
                "./images/sweatshirts/id-3/third.jpg",
                "./images/sweatshirts/id-3/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "Stay cozy and stylish.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.8, time: "19 March", comment: "Perfect fit!" },
            { user: "Ava", rating: 4.2, time: "21 March", comment: "Great for chilly days." }
        ],
        vendor_details: {
            soldBy: "Fashion Store",
            countryOfOrigin: "India",
            NameOfManufacturer: "Only Brand",
            AddressOfManufacturer: "789 Fashion Rd, Mumbai"
        }
    },

    {
        id: 'sweatshirt-4',
        name: "Black Full Zip Placket Solid Sweatshirt",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 49.99,
        category: "Sweatshirts",
        colors: ["#000000"], // black
        product_details: {
            list: ["Zippered front", "Versatile style"],
            Material: "Fleece",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Dry clean only",
        },
        images: {
            "#000000": [
                "./images/sweatshirts/id-4/first.jpg", 
                "./images/sweatshirts/id-4/second.jpg",
                "./images/sweatshirts/id-4/third.jpg",
                "./images/sweatshirts/id-4/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "A classic piece for your wardrobe.",
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Isabella", rating: 4.0, time: "20 March", comment: "Stylish and warm." },
            { user: "Mia", rating: 4.9, time: "22 March", comment: "My favorite sweatshirt!" }
        ],
        vendor_details: {
            soldBy: "Trend Fashion",
            countryOfOrigin: "Turkey",
            NameOfManufacturer: "Cider Co.",
            AddressOfManufacturer: "321 Trendy Blvd, Istanbul"
        }
    },

    {
        id: 'sweatshirt-5',
        name: "Crew Neck Brand Embroidered Sweatshirt",
        brand: "BALENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 69.99,
        category: "Sweatshirts",
        colors: ["#155547"], // green
        product_details: {
            list: ["Embroidered logo", "Stylish design"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash",
        },
        images: {
            "#155547": [
                "./images/sweatshirts/id-5/first.jpg", 
                "./images/sweatshirts/id-5/second.jpg",
                "./images/sweatshirts/id-5/third.jpg",
                "./images/sweatshirts/id-5/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "Luxury meets comfort.",
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Charlotte", rating: 4.9, time: "19 March", comment: "High quality!" },
            { user: "Amelia", rating: 4.7, time: "20 March", comment: "Love the fit!" }
        ],
        vendor_details: {
            soldBy: "Luxury Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Balenciaga",
            AddressOfManufacturer: "987 Luxury Ave, Milan"
        }
    },

    {
        id: 'sweatshirt-6',
        name: "PUMA Solid Sweatshirt",
        brand: "PUMA",
        brand_logo: "./images/brands/puma.png",
        price: 59.99,
        category: "Sweatshirts",
        colors: ["#FF9933"], // orange
        product_details: {
            list: ["Athletic style", "Perfect for workouts"],
            Material: "Polyester",
            Pattern: "Solid",
            Occasion: "Sport",
            Stretchable: "Yes",
            CareInstructions: "Machine wash",
        },
        images: {
            "#FF9933": [
                "./images/sweatshirts/id-6/first.jpg", // removed "orange" from the path
                "./images/sweatshirts/id-6/second.jpg",
                "./images/sweatshirts/id-6/third.jpg",
                "./images/sweatshirts/id-6/fourth.jpg"
            ]
        },
        KnowYourProduct: {
            text: "Get active in style.",
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Grace", rating: 4.2, time: "20 March", comment: "Great for exercising." },
            { user: "Ella", rating: 4.5, time: "22 March", comment: "Highly recommend!" }
        ],
        vendor_details: {
            soldBy: "Sporty Store",
            countryOfOrigin: "Germany",
            NameOfManufacturer: "PUMA",
            AddressOfManufacturer: "654 Sport Rd, Hamburg"
        }
    },
        {
            id: 'sweatshirt-7',
            name: "Foil Logo Boxy Sweatshirt",
            brand: "ONLY",
            brand_logo: "./images/brands/only.png",
            price: 49.99, // added price
            category: "Sweatshirts",
            colors: ["#000000"], 
            product_details: {
                list: ["Stylish foil logo", "Boxy fit for comfort"],
                Material: "Cotton Blend",
                Pattern: "Solid",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash cold",
            },
            images: {
                "#000000": [
                    "./images/sweatshirts/id-7/first.jpg",
                    "./images/sweatshirts/id-7/second.jpg",
                    "./images/sweatshirts/id-7/third.jpg",
                    "./images/sweatshirts/id-7/fourth.jpg"
                ]
            },
            KnowYourProduct: {
                text: "Elevate your casual look with this stylish boxy sweatshirt.",
            },
            rating: 4.3, // added rating
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Emma", rating: 4.0, time: "20 March", comment: "Nice quality, but a bit loose." },
                { user: "Olivia", rating: 4.2, time: "22 March", comment: "Love the style!" }
            ],
            vendor_details: {
                soldBy: "Fashion Hub",
                countryOfOrigin: "Denmark",
                NameOfManufacturer: "ONLY",
                AddressOfManufacturer: "123 Style St, Copenhagen"
            }
        },
    
        {
            id: 'sweatshirt-8',
            name: "Dark Blue Color Blocked Cotton Poly Fleece Women's Sweatshirt",
            brand: "STYLI ELEVATE",
            brand_logo: "./images/brands/elevate.png",
            price: 55.99, // added price
            category: "Sweatshirts",
            colors: ["#BFD9F4"], 
            product_details: {
                list: ["Color-block design", "Soft fleece material"],
                Material: "Cotton-Poly Blend",
                Pattern: "Color Blocked",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash warm",
            },
            images: {
                "#BFD9F4": [
                    "./images/sweatshirts/id-8/first.jpg",
                    "./images/sweatshirts/id-8/second.jpg",
                    "./images/sweatshirts/id-8/third.jpg",
                    "./images/sweatshirts/id-8/fourth.jpg"
                ]
            },
            KnowYourProduct: {
                text: "Stay cozy and stylish with this color-blocked sweatshirt.",
            },
            rating: 4.6, // added rating
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Liam", rating: 4.4, time: "20 March", comment: "Very soft and warm." },
                { user: "Ava", rating: 4.7, time: "22 March", comment: "Perfect for chilly days!" }
            ],
            vendor_details: {
                soldBy: "Elevate Apparel",
                countryOfOrigin: "India",
                NameOfManufacturer: "STYLI ELEVATE",
                AddressOfManufacturer: "456 Fashion Rd, Mumbai"
            }
        },
    
        {
            id: 'sweatshirt-9',
            name: "Pink Crew Neck Graphic Print Sweatshirt",
            brand: "ONLY",
            brand_logo: "./images/brands/only.png",
            price: 90.99, // added price
            category: "Sweatshirts",
            colors: ["#CD8BA4"], 
            product_details: {
                list: ["Trendy graphic print", "Soft and comfy"],
                Material: "Cotton",
                Pattern: "Graphic",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash cold",
            },
            images: {
                "#CD8BA4": [
                    "./images/sweatshirts/id-9/first.jpg",
                    "./images/sweatshirts/id-9/second.jpg",
                    "./images/sweatshirts/id-9/third.jpg",
                    "./images/sweatshirts/id-9/fourth.jpg"
                ]
            },
            KnowYourProduct: {
                text: "Make a statement with this graphic print sweatshirt.",
            },
            rating: 4.5, // added rating
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Noah", rating: 4.3, time: "20 March", comment: "Nice fit and design." },
                { user: "Mia", rating: 4.2, time: "22 March", comment: "Super cute!" }
            ],
            vendor_details: {
                soldBy: "Fashion Forward",
                countryOfOrigin: "Spain",
                NameOfManufacturer: "ONLY",
                AddressOfManufacturer: "789 Trend St, Madrid"
            }
        }
    
    
];

// polo shirts:
export const poloshirts = [ 

        {
            id: 'poloshirt-1',
            name: "Embroidered Yoke Dobby Pink Shirt",
            brand: "ONLY",
            brand_logo: "./images/brands/only.png",
            price: 29.99,
            category: "PoloShirt",
            colors: ["#D5B7B8"], 
            product_details: {
                list: ["Embroidered yoke", "Short sleeves", "Casual fit", "Dobby texture"],
                Material: "Cotton",
                Pattern: "Dobby",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash cold",
            },
            images: {
                "#D5B7B8": [
                    "./images/polo-shirts/id-1/first.jpg",
                    "./images/polo-shirts/id-1/second.jpg",
                    "./images/polo-shirts/id-1/third.jpg",
                    "./images/polo-shirts/id-1/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "This shirt features a unique embroidered yoke design for a stylish look.",
            },
            rating: 4.5,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Liam", rating: 4.0, time: "20 March", comment: "Good quality but a bit tight." },
                { user: "Emma", rating: 5.0, time: "22 March", comment: "Perfect for casual outings!" }
            ],
            vendor_details: {
                soldBy: "Fashion Store",
                countryOfOrigin: "Bangladesh",
                NameOfManufacturer: "Fashion Manufacturer Co.",
                AddressOfManufacturer: "123 Fashion St, Dhaka, Bangladesh"
            }
        },
    
        {
            id: 'poloshirt-2',
            name: "White Contrast Collar Solid Polo Shirt",
            brand: "CIDER",
            brand_logo: "./images/brands/cider.png",
            price: 25.50,
            category: "PoloShirt",
            colors: ["#FFFFFF"], 
            product_details: {
                list: ["Contrast collar", "Solid color", "Short sleeves", "Regular fit"],
                Material: "Cotton",
                Pattern: "Solid",
                Occasion: "Casual",
                Stretchable: "No",
                CareInstructions: "Hand wash only",
            },
            images: {
                "#FFFFFF": [
                    "./images/polo-shirts/id-2/first.jpg",
                    "./images/polo-shirts/id-2/second.jpg",
                    "./images/polo-shirts/id-2/third.jpg",
                    "./images/polo-shirts/id-2/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "A classic white polo shirt with a stylish contrast collar.",
            },
            rating: 4.2,
            reviews: [
                { user: "Noah", rating: 4.5, time: "19 March", comment: "Great fit and comfortable!" },
                { user: "Olivia", rating: 4.0, time: "21 March", comment: "Simple and elegant." },
                { user: "Lucas", rating: 4.7, time: "23 March", comment: "Perfect for summer!" }
            ],
            vendor_details: {
                soldBy: "CIDER Official",
                countryOfOrigin: "India",
                NameOfManufacturer: "CIDER Apparel",
                AddressOfManufacturer: "456 Fashion Ave, Mumbai, India"
            }
        },
    
        {
            id: 'poloshirt-3',
            name: "Blue Striped Collar Pique Polo Shirt",
            brand: "BELENCIAGA",
            brand_logo: "./images/brands/balenciaga.png",
            price: 34.99,
            category: "PoloShirt",
            colors: ["#E7F2F9"], 
            product_details: {
                list: ["Striped collar", "Pique fabric", "Short sleeves", "Casual fit"],
                Material: "Polyester",
                Pattern: "Striped",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash warm",
            },
            images: {
                "#E7F2F9": [
                    "./images/polo-shirts/id-3/first.jpg",
                    "./images/polo-shirts/id-3/second.jpg",
                    "./images/polo-shirts/id-3/third.jpg",
                    "./images/polo-shirts/id-3/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "This pique polo features a classic striped collar for a timeless look.",
            },
            rating: 4.8,
            reviews: [
                { user: "Mia", rating: 5.0, time: "24 March", comment: "Absolutely love this shirt!" },
                { user: "Ethan", rating: 4.5, time: "26 March", comment: "Great quality for the price." },
                { user: "Ava", rating: 4.0, time: "28 March", comment: "Nice shirt but runs a bit small." }
            ],
            vendor_details: {
                soldBy: "BELENCIAGA Store",
                countryOfOrigin: "Italy",
                NameOfManufacturer: "BELENCIAGA Group",
                AddressOfManufacturer: "789 Style St, Milan, Italy"
            }
        },
    
        {
            id: 'poloshirt-4',
            name: "Logo Solid Polo Shirt",
            brand: "BELENCIAGA",
            brand_logo: "./images/brands/balenciaga.png",
            price: 52.00,
            category: "PoloShirt",
            colors: ["#EA606D"], 
            product_details: {
                list: ["Logo detail", "Solid color", "Short sleeves", "Regular fit"],
                Material: "Cotton Blend",
                Pattern: "Solid",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash cold",
            },
            images: {
                "#EA606D": [
                    "./images/polo-shirts/id-4/first.jpg",
                    "./images/polo-shirts/id-4/second.jpg",
                    "./images/polo-shirts/id-4/third.jpg",
                    "./images/polo-shirts/id-4/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "A solid logo polo shirt perfect for casual outings.",
            },
            rating: 4.4,
            reviews: [
                { user: "Charlotte", rating: 4.6, time: "29 March", comment: "Very comfortable!" },
                { user: "Aiden", rating: 4.3, time: "30 March", comment: "Fits well, good material." },
                { user: "Ella", rating: 4.1, time: "31 March", comment: "Cute design!" }
            ],
            vendor_details: {
                soldBy: "BELENCIAGA Official",
                countryOfOrigin: "Spain",
                NameOfManufacturer: "BELENCIAGA Inc.",
                AddressOfManufacturer: "123 Trend Ave, Barcelona, Spain"
            }
        },
    
        {
            id: 'poloshirt-5',
            name: "Paisley Print Chiffon Shirt",
            brand: "ONLY",
            brand_logo: "./images/brands/only.png",
            price: 88.00,
            category: "PoloShirt",
            colors: ["#383035"], 
            product_details: {
                list: ["Paisley print", "Chiffon material", "Short sleeves", "Lightweight"],
                Material: "Chiffon",
                Pattern: "Paisley",
                Occasion: "Casual",
                Stretchable: "No",
                CareInstructions: "Dry clean only",
            },
            images: {
                "#383035": [
                    "./images/polo-shirts/id-5/first.jpg",
                    "./images/polo-shirts/id-5/second.jpg",
                    "./images/polo-shirts/id-5/third.jpg",
                    "./images/polo-shirts/id-5/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "This paisley print shirt adds a unique touch to your wardrobe.",
            },
            rating: 4.7,
            reviews: [
                { user: "James", rating: 4.5, time: "1 April", comment: "Very stylish!" },
                { user: "Sophia", rating: 4.8, time: "2 April", comment: "Perfect for summer events." },
                { user: "Benjamin", rating: 4.2, time: "3 April", comment: "Nice design, fits well." }
            ],
            vendor_details: {
                soldBy: "ONLY Brand",
                countryOfOrigin: "Bangladesh",
                NameOfManufacturer: "ONLY Fashion",
                AddressOfManufacturer: "321 Style St, Dhaka, Bangladesh"
            }
        },
    
        {
            id: 'poloshirt-6',
            name: "Pure Cotton Floral Shirt",
            brand: "STYLI ELEVATE",
            brand_logo: "./images/brands/styli_elevate.png",
            price: 35.00,
            category: "PoloShirt",
            colors: ["#C7C7CC"], 
            product_details: {
                list: ["Floral print", "Pure cotton", "Short sleeves", "Regular fit"],
                Material: "Cotton",
                Pattern: "Floral",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash warm",
            },
            images: {
                "#C7C7CC": [
                    "./images/polo-shirts/id-6/first.jpg",
                    "./images/polo-shirts/id-6/second.jpg",
                    "./images/polo-shirts/id-6/third.jpg",
                    "./images/polo-shirts/id-6/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "A pure cotton floral shirt ideal for casual gatherings.",
            },
            rating: 4.6,
            reviews: [
                { user: "Lucas", rating: 4.7, time: "4 April", comment: "Great summer shirt!" },
                { user: "Mia", rating: 4.5, time: "5 April", comment: "Looks amazing in person." },
                { user: "Noah", rating: 4.8, time: "6 April", comment: "My new favorite!" }
            ],
            vendor_details: {
                soldBy: "STYLI ELEVATE Store",
                countryOfOrigin: "India",
                NameOfManufacturer: "STYLI Group",
                AddressOfManufacturer: "654 Fashion Ave, New Delhi, India"
            }
        },

        {
            id: 'poloshirt-7',
            name: "Orange Colourblocked Knit Polo Shirt",
            brand: "CIDER",
            brand_logo: "./images/brands/cider.png",
            price: 29.99,
            category: "PoloShirt",
            colors: ["#EFA937"], 
            product_details: {
                list: ["Knit Fabric", "Short Sleeves"],
                Material: "Cotton Blend",
                Pattern: "Colourblocked",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash cold",
            },
            images: {
                "#EFA937": [
                    "./images/polo-shirts/id-7/first.jpg",
                    "./images/polo-shirts/id-7/second.jpg",
                    "./images/polo-shirts/id-7/third.jpg",
                    "./images/polo-shirts/id-7/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "A trendy and comfortable polo shirt perfect for everyday wear.",
            },
            rating: 4.5,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Liam", rating: 4.3, time: "20 March", comment: "Great fit and color!" },
                { user: "Olivia", rating: 4.6, time: "22 March", comment: "Perfect for casual outings." }
            ],
            vendor_details: {
                soldBy: "CIDER Store",
                countryOfOrigin: "India",
                NameOfManufacturer: "CIDER Apparel",
                AddressOfManufacturer: "456 Fashion Rd, Delhi, India"
            }
        },
    
        {
            id: 'poloshirt-8',
            name: "Mocha Brown Long-Collared Polo Shirt",
            brand: "CIDER",
            brand_logo: "./images/brands/styli_elevate.png",
            price: 34.99,
            category: "PoloShirt",
            colors: ["#945B3D"], 
            product_details: {
                list: ["Long Collared", "Short Sleeves"],
                Material: "100% Cotton",
                Pattern: "Solid",
                Occasion: "Casual",
                Stretchable: "No",
                CareInstructions: "Hand wash only",
            },
            images: {
                "#945B3D": [
                    "./images/polo-shirts/id-8/first.jpg",
                    "./images/polo-shirts/id-8/second.jpg",
                    "./images/polo-shirts/id-8/third.jpg",
                    "./images/polo-shirts/id-8/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "A versatile long-collared polo shirt that pairs well with jeans or shorts.",
            },
            rating: 4.4,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "James", rating: 4.0, time: "19 March", comment: "Nice quality, but a bit tight." },
                { user: "Emma", rating: 4.2, time: "21 March", comment: "Great for a smart casual look." }
            ],
            vendor_details: {
                soldBy: "CIDER Store",
                countryOfOrigin: "India",
                NameOfManufacturer: "CIDER Apparel",
                AddressOfManufacturer: "456 Fashion Rd, Delhi, India"
            }
        },
    
        {
            id: 'poloshirt-9',
            name: "Mandarin Collar Viscose Linen Shirt",
            brand: "ONLY",
            brand_logo: "./images/brands/only.png",
            price: 39.99,
            category: "PoloShirt",
            colors: ["#F9E398"], 
            product_details: {
                list: ["Cutwork Design", "Short Sleeves"],
                Material: "Pure Cotton",
                Pattern: "Self Design",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash cold",
            },
            images: {
                "#F9E398": [
                    "./images/polo-shirts/id-9/first.jpg",
                    "./images/polo-shirts/id-9/second.jpg",
                    "./images/polo-shirts/id-9/third.jpg",
                    "./images/polo-shirts/id-9/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "A chic cutwork shirt made from pure cotton for maximum comfort.",
            },
            rating: 4.7,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Ava", rating: 4.8, time: "20 March", comment: "Lovely fabric and fit!" },
                { user: "Mia", rating: 4.6, time: "22 March", comment: "Perfect for summer wear." }
            ],
            vendor_details: {
                soldBy: "ONLY Store",
                countryOfOrigin: "Bangladesh",
                NameOfManufacturer: "ONLY Fashion",
                AddressOfManufacturer: "789 Style St, Dhaka, Bangladesh"
            }
        }
]

// // denim shirts:
export const denimshirts = [
    {
        id: 'denimshirt-1',
        name: "Blue Denim Shirt",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 32.00,
        category: "DenimShirt",
        colors: ["#87A8D1"], 
        product_details: {
            list: ["Soft fabric", "Full sleeves", "Buttoned cuffs"],
            Material: "100% Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Machine wash cold",
        },
        images: {
            "#87A8D1": [
                "./images/denim-shirts/id-1/first.jpg",
                "./images/denim-shirts/id-2/second.jpg",
                "./images/denim-shirts/id-3/third.jpg",
                "./images/denim-shirts/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This denim shirt is perfect for a casual look with a comfortable fit.",
        },
        rating: 4.2,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Liam", rating: 4, time: "20 March", comment: "Great quality but a bit loose." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "India",
            NameOfManufacturer: "Only Ltd.",
            AddressOfManufacturer: "123 Denim St, Mumbai"
        }
    },

    {
        id: 'denimshirt-2',
        name: "Blue Denim Shirt",
        brand: "BALENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 30.00,
        category: "DenimShirt",
        colors: ["#849BB1"], 
        product_details: {
            list: ["High-quality fabric", "Full sleeves", "Comfortable fit"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Hand wash recommended",
        },
        images: {
            "#849BB1": [
                "./images/denim-shirts/id-2/first.jpg",
                "./images/denim-shirts/id-2/second.jpg",
                "./images/denim-shirts/id-2/third.jpg",
                "./images/denim-shirts/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A premium denim shirt crafted for a casual yet sophisticated look.",
        },
        rating: 4.8,
        reviews: [
            { user: "Emma", rating: 5, time: "22 March", comment: "Premium quality and stylish!" },
            { user: "Noah", rating: 4.5, time: "25 March", comment: "Very comfortable." }
        ],
        vendor_details: {
            soldBy: "LuxuryFashion",
            countryOfOrigin: "France",
            NameOfManufacturer: "Balenciaga Fashion",
            AddressOfManufacturer: "1 Rue Cambon, Paris"
        }
    },

    {
        id: 'denimshirt-3',
        name: "Women's Solid Regular Fit Denim Shirt",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 15.00,
        category: "DenimShirt",
        colors: ["#ADBECF"], 
        product_details: {
            list: ["Durable fabric", "Classic collar", "Button-down front"],
            Material: "Denim",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Do not bleach",
        },
        images: {
            "#ADBECF": [
                "./images/denim-shirts/id-3/first.jpg",
                "./images/denim-shirts/id-3/second.jpg",
                "./images/denim-shirts/id-3/third.jpg",
                "./images/denim-shirts/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "An essential denim shirt for everyday style and comfort.",
        },
        rating: 4.4,
        reviews: [
            { user: "Olivia", rating: 4.5, time: "26 March", comment: "Good fit and very comfortable." }
        ],
        vendor_details: {
            soldBy: "DenimCo",
            countryOfOrigin: "India",
            NameOfManufacturer: "Only Ltd.",
            AddressOfManufacturer: "456 Style Rd, Delhi"
        }
    },

    {
        id: 'denimshirt-4',
        name: "Women's Solid Regular Fit Denim Shirt",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 36.00,
        category: "DenimShirt",
        colors: ["#ADBECF"], 
        product_details: {
            list: ["Soft texture", "Double chest pockets", "Casual fit"],
            Material: "Cotton Denim",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Machine wash warm",
        },
        images: {
            "#ADBECF": [
                "./images/denim-shirts/id-4/first.jpg",
                "./images/denim-shirts/id-4/second.jpg",
                "./images/denim-shirts/id-4/third.jpg",
                "./images/denim-shirts/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Comfortable and trendy for a relaxed day out.",
        },
        rating: 4.3,
        reviews: [
            { user: "Ava", rating: 4, time: "29 March", comment: "Love the fabric!" }
        ],
        vendor_details: {
            soldBy: "UrbanFashion",
            countryOfOrigin: "India",
            NameOfManufacturer: "Only Pvt Ltd.",
            AddressOfManufacturer: "789 Fashion Ln, Mumbai"
        }
    },

    {
        id: 'denimshirt-5',
        name: "Light Green Denim Shirt",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 12.50,
        category: "DenimShirt",
        colors: ["#BACED7"], 
        product_details: {
            list: ["Lightweight", "Button-down", "Relaxed fit"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Tumble dry low",
        },
        images: {
            "#BACED7": [
                "./images/denim-shirts/id-5/first.jpg",
                "./images/denim-shirts/id-5/second.jpg",
                "./images/denim-shirts/id-5/third.jpg",
                "./images/denim-shirts/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A lightweight denim shirt ideal for a relaxed summer look.",
        },
        rating: 4.1,
        reviews: [
            { user: "Isabella", rating: 4.5, time: "31 March", comment: "Perfect for summer!" }
        ],
        vendor_details: {
            soldBy: "CoolWear",
            countryOfOrigin: "India",
            NameOfManufacturer: "Only Ltd.",
            AddressOfManufacturer: "101 Cool St, Bangalore"
        }
    },

    {
        id: 'denimshirt-6',
        name: "Tinted Full Sleeve Denim Shirt",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 22.00,
        category: "DenimShirt",
        colors: ["#BECFCB"], 
        product_details: {
            list: ["Unique tint", "Stylish", "Regular fit"],
            Material: "Denim",
            Pattern: "Tinted",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Do not iron",
        },
        images: {
            "#BECFCB": [
                "./images/denim-shirts/id-6/first.jpg",
                "./images/denim-shirts/id-6/second.jpg",
                "./images/denim-shirts/id-6/third.jpg",
                "./images/denim-shirts/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A trendy tinted denim shirt for a chic look.",
        },
        rating: 4.6,
        reviews: [
            { user: "James", rating: 4.7, time: "2 April", comment: "Stylish and unique tint!" }
        ],
        vendor_details: {
            soldBy: "ChicWear",
            countryOfOrigin: "India",
            NameOfManufacturer: "Cider Co.",
            AddressOfManufacturer: "202 Tint St, Mumbai"
        }
    },

    {
        id: 'denimshirt-7',
        name: "Black Solid Oversized Contrasting Stitch Crop Denim Shirt",
        brand: "STYLI ELEVATE",
        brand_logo: "./images/brands/styli_elevate.png",
        price: 28.00,
        category: "DenimShirt",
        colors: ["#222126"], 
        product_details: {
            list: ["Oversized fit", "Contrasting stitch", "Cropped style"],
            Material: "Denim",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Hand wash cold",
        },
        images: {
            "#222126": [
                "./images/denim-shirts/id-7/first.jpg",
                "./images/denim-shirts/id-7/second.jpg",
                "./images/denim-shirts/id-7/third.jpg",
                "./images/denim-shirts/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A cropped denim shirt with contrasting stitching, perfect for street style.",
        },
        rating: 4.5,
        reviews: [
            { user: "Oliver", rating: 4.6, time: "5 April", comment: "Very trendy and unique!" }
        ],
        vendor_details: {
            soldBy: "StreetWear",
            countryOfOrigin: "India",
            NameOfManufacturer: "Styli Elevate",
            AddressOfManufacturer: "303 Fashion Rd, Pune"
        }
    },

    {
        id: 'denimshirt-8',
        name: "Denim Western Shirt with Embroidery",
        brand: "STYLI ELEVATE",
        brand_logo: "./images/brands/styli_elevate.png",
        price: 26.00,
        category: "DenimShirt",
        colors: ["#768EAC"], 
        product_details: {
            list: ["Western style", "Embroidered details", "Slim fit"],
            Material: "Denim",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Dry clean only",
        },
        images: {
            "#768EAC": [
                "./images/denim-shirts/id-8/first.jpg",
                "./images/denim-shirts/id-8/second.jpg",
                "./images/denim-shirts/id-8/third.jpg",
                "./images/denim-shirts/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A western-inspired denim shirt with intricate embroidery.",
        },
        rating: 4.7,
        reviews: [
            { user: "Charlotte", rating: 5, time: "7 April", comment: "Beautiful embroidery and great fit!" }
        ],
        vendor_details: {
            soldBy: "WesternTrends",
            countryOfOrigin: "India",
            NameOfManufacturer: "Wrangler Co.",
            AddressOfManufacturer: "404 Western Ln, Jaipur"
        }
    },

    {
        id: 'denimshirt-9',
        name: "Vintage Wash Denim Shirt",
        brand: "STYLI ELEVATE",
        brand_logo: "./images/brands/styli_elevate.png",
        price: 28.00,
        category: "DenimShirt",
        colors: ["#8C9DAE"], 
        product_details: {
            list: ["Vintage wash", "Classic fit", "Buttoned front"],
            Material: "Denim",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Machine wash cold",
        },
        images: {
            "#8C9DAE": [
                "./images/denim-shirts/id-9/first.jpg",
                "./images/denim-shirts/id-9/second.jpg",
                "./images/denim-shirts/id-9/third.jpg",
                "./images/denim-shirts/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A vintage wash denim shirt for timeless style.",
        },
        rating: 4.9,
        reviews: [
            { user: "William", rating: 5, time: "10 April", comment: "Classic look and great quality!" }
        ],
        vendor_details: {
            soldBy: "ClassicDenim",
            countryOfOrigin: "India",
            NameOfManufacturer: "Levi's India",
            AddressOfManufacturer: "505 Classic Rd, Gurgaon"
        }
    }
];

// // formal shirts:
export const formalshirts = [
        {
            id: 'formalshirt-1',
            name: "Chino Shirt Tops Striped Regular Fit Top For Women",
            brand: "ONLY",
            brand_logo: "./images/brands/only.png",
            price: 32.78,
            category: "FormalShirt",
            colors: ["#BEC3C3"], 
            product_details: {
                list: ["Soft fabric", "Breathable", "Striped pattern", "Full sleeve"],
                Material: "Cotton Blend",
                Pattern: "Striped",
                Occasion: "Formal",
                Stretchable: "No",
                CareInstructions: "Machine wash cold, tumble dry low",
            },
            images: {
                "#BEC3C3": [
                    "./images/formal-shirts/id-1/first.webp",
                    "./images/formal-shirts/id-2/second.webp",
                    "./images/formal-shirts/id-3/third.webp",
                    "./images/formal-shirts/id-4/fourth.webp"
                ],
            },
            KnowYourProduct: {
                text: "Experience the perfect blend of comfort and style with this striped formal shirt.",
            },
            rating: 4.2,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
            ],
            vendor_details: {
                soldBy: "Trendy Fashions Ltd",
                countryOfOrigin: "India",
                NameOfManufacturer: "Trendy Fashions Pvt. Ltd.",
                AddressOfManufacturer: "123 Fashion St, Mumbai, India"
            }
        },
        {
            id: 'formalshirt-2',
            name: "Women's Black Formal And Casual Shirt",
            brand: "CIDER",
            brand_logo: "./images/brands/cider.png",
            price: 34.99,
            category: "FormalShirt",
            colors: ["#000000"], 
            product_details: {
                list: ["Classic collar", "Full sleeve", "Solid color"],
                Material: "Polyester",
                Pattern: "Solid",
                Occasion: "Formal",
                Stretchable: "Yes",
                CareInstructions: "Hand wash only",
            },
            images: {
                "#000000": [
                    "./images/formal-shirts/id-2/first.webp",
                    "./images/formal-shirts/id-2/second.webp",
                    "./images/formal-shirts/id-2/third.webp",
                    "./images/formal-shirts/id-2/fourth.webp"
                ],
            },
            KnowYourProduct: {
                text: "A sleek black shirt that transitions easily from office to evening wear.",
            },
            rating: 4.0,
            reviews: [
                { user: "Lily", rating: 4.0, time: "10 April", comment: "Love the versatility!" },
                { user: "Sarah", rating: 3.5, time: "14 April", comment: "Material is a bit thin for my taste." }
            ],
            vendor_details: {
                soldBy: "Cider House",
                countryOfOrigin: "China",
                NameOfManufacturer: "Cider Fashion Ltd.",
                AddressOfManufacturer: "456 Style Ave, Shanghai, China"
            }
        },
        {
            id: 'formalshirt-3',
            name: "Women Solid Formal Full Sleeve Shirt",
            brand: "ONLY",
            brand_logo: "./images/brands/only.png",
            price: 18.50,
            category: "FormalShirt",
            colors: ["#FD72C3"], 
            product_details: {
                list: ["Solid color", "Button closure", "Regular fit"],
                Material: "Cotton",
                Pattern: "Solid",
                Occasion: "Formal",
                Stretchable: "No",
                CareInstructions: "Machine wash gentle",
            },
            images: {
                "#FD72C3": [
                    "./images/formal-shirts/id-3/first.webp",
                    "./images/formal-shirts/id-3/second.webp",
                    "./images/formal-shirts/id-3/third.webp",
                    "./images/formal-shirts/id-3/fourth.webp"
                ],
            },
            KnowYourProduct: {
                text: "Elegant and comfortable, ideal for formal occasions and meetings.",
            },
            rating: 4.3,
            reviews: [
                { user: "Olivia", rating: 4.5, time: "12 May", comment: "Perfect for the office!" },
                { user: "Mia", rating: 4.0, time: "20 May", comment: "Great color and fit." }
            ],
            vendor_details: {
                soldBy: "ONLY Retail",
                countryOfOrigin: "India",
                NameOfManufacturer: "ONLY Manufacturing Ltd.",
                AddressOfManufacturer: "789 Garment Park, Delhi, India"
            }
        },

        {
            id: 'formalshirt-4',
            name: "Women Blue Formal Shirt",
            brand: "CIDER",
            brand_logo: "./images/brands/cider.png",
            price: 16.20,
            category: "FormalShirt",
            colors: ["#E6EDF3"], 
            product_details: {
                list: ["Casual fit", "Blue solid color", "Full sleeve"],
                Material: "Linen Blend",
                Pattern: "Solid",
                Occasion: "Formal",
                Stretchable: "No",
                CareInstructions: "Dry clean recommended",
            },
            images: {
                "#E6EDF3": [
                    "./images/formal-shirts/id-4/first.webp",
                    "./images/formal-shirts/id-4/second.webp",
                    "./images/formal-shirts/id-4/third.webp",
                    "./images/formal-shirts/id-4/fourth.webp"
                ],
            },
            KnowYourProduct: {
                text: "A classic blue shirt for a sharp professional look.",
            },
            rating: 3.9,
            reviews: [
                { user: "Ava", rating: 4.0, time: "15 June", comment: "Nice fit but wrinkles easily." },
                { user: "Sophia", rating: 3.8, time: "17 June", comment: "Good color but needs ironing." }
            ],
            vendor_details: {
                soldBy: "BlueBerry Fashion",
                countryOfOrigin: "Bangladesh",
                NameOfManufacturer: "Cider Textiles Ltd.",
                AddressOfManufacturer: "123 Fabric Lane, Dhaka, Bangladesh"
            }
        },

        {
            id: 'formalshirt-5',
            name: "Long Sleeves Women White Shirt",
            brand: "CIDER",
            brand_logo: "./images/brands/cider.png",
            price: 20.00,
            category: "FormalShirt",
            colors: ["#F1F1F2"], 
            product_details: {
                list: ["Long sleeves", "White solid color", "Regular fit"],
                Material: "Cotton",
                Pattern: "Solid",
                Occasion: "Formal",
                Stretchable: "No",
                CareInstructions: "Machine wash cold",
            },
            images: {
                "#F1F1F2": [
                    "./images/formal-shirts/id-5/first.webp",
                    "./images/formal-shirts/id-5/second.webp",
                    "./images/formal-shirts/id-5/third.webp",
                    "./images/formal-shirts/id-5/fourth.webp"
                ],
            },
            KnowYourProduct: {
                text: "A versatile white shirt for all your formal needs.",
            },
            rating: 4.5,
            reviews: [
                { user: "Ella", rating: 4.6, time: "22 July", comment: "Elegant and classy!" },
                { user: "Lily", rating: 4.4, time: "25 July", comment: "Perfect for formal meetings." }
            ],
            vendor_details: {
                soldBy: "Classic Whites",
                countryOfOrigin: "Vietnam",
                NameOfManufacturer: "Cider Apparel Ltd.",
                AddressOfManufacturer: "456 Silk Road, Ho Chi Minh, Vietnam"
            }
        },
        {
            id: 'formalshirt-6',
            name: "Cotton Women Shirt Regular",
            brand: "BELENCIAGA",
            brand_logo: "./images/brands/balenciaga.png",
            price: 15.00,
            category: "FormalShirt",
            colors: ["#F9EFEC"], 
            product_details: {
                list: ["Comfort fit", "Solid color", "Breathable fabric"],
                Material: "Cotton",
                Pattern: "Solid",
                Occasion: "Formal",
                Stretchable: "No",
                CareInstructions: "Machine wash cold, gentle cycle",
            },
            images: {
                "#F9EFEC": [
                    "./images/formal-shirts/id-6/first.webp",
                    "./images/formal-shirts/id-6/second.webp",
                    "./images/formal-shirts/id-6/third.webp",
                    "./images/formal-shirts/id-6/fourth.webp"
                ],
            },
            KnowYourProduct: {
                text: "Classic and comfortable, suitable for all-day wear.",
            },
            rating: 4.2,
            reviews: [
                { user: "Aria", rating: 4.3, time: "5 August", comment: "Simple yet elegant." },
                { user: "Grace", rating: 4.1, time: "7 August", comment: "Soft fabric, feels great!" }
            ],
            vendor_details: {
                soldBy: "Balenciaga Apparel",
                countryOfOrigin: "India",
                NameOfManufacturer: "Balenciaga Fashion House",
                AddressOfManufacturer: "100 Couture Lane, Mumbai, India"
            }
        },

    

            {
                id: 'formalshirt-7',
                name: "EyeBogler Women's Regular Fit Shirt Style Top",
                brand: "BELENCIAGA",
                brand_logo: "./images/brands/balenciaga.png",
                price: 14.99,
                category: "FormalShirt",
                colors: ["#FFFFFF"],
                product_details: {
                    list: ["Comfortable fabric", "Machine-washable"],
                    Material: "Polyester",
                    Pattern: "Solid",
                    Occasion: "Formal",
                    Stretchable: "No",
                    CareInstructions: "Machine wash cold, tumble dry low",
                },
                images: {
                    "#FFFFFF": [
                        "./images/formal-shirts/id-7/first.webp",
                        "./images/formal-shirts/id-7/second.webp",
                        "./images/formal-shirts/id-7/third.webp",
                        "./images/formal-shirts/id-7/fourth.webp"
                    ],
                },
                KnowYourProduct: {
                    text: "A regular-fit shirt style top that blends style with comfort.",
                },
                rating: 4.5,
                reviews: [
                    { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                    { user: "Aria", rating: 4.3, time: "20 March", comment: "Nice fit and finish." }
                ],
                vendor_details: {
                    soldBy: "Belenciaga Retail",
                    countryOfOrigin: "India",
                    NameOfManufacturer: "Belenciaga Fashion House",
                    AddressOfManufacturer: "123 Fashion Ave, Mumbai, India"
                }
            },
        
            {
                id: 'formalshirt-8',
                name: "Urbane Latest Women Shirt",
                brand: "BELENCIAGA",
                brand_logo: "./images/brands/balenciaga.png",
                price: 13.99,
                category: "FormalShirt",
                colors: ["#ECD4D9"],
                product_details: {
                    list: ["Breathable fabric", "Soft on skin"],
                    Material: "Cotton Blend",
                    Pattern: "Plain",
                    Occasion: "Formal",
                    Stretchable: "No",
                    CareInstructions: "Hand wash preferred",
                },
                images: {
                    "#ECD4D9": [
                        "./images/formal-shirts/id-8/first.webp",
                        "./images/formal-shirts/id-8/second.webp",
                        "./images/formal-shirts/id-8/third.webp",
                        "./images/formal-shirts/id-8/fourth.webp"
                    ],
                },
                KnowYourProduct: {
                    text: "Latest women's shirt with a stylish and formal appeal.",
                },
                rating: 4.2,
                reviews: [
                    { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                    { user: "Grace", rating: 4.0, time: "22 March", comment: "Good fabric but could be softer." }
                ],
                vendor_details: {
                    soldBy: "Urbane Clothing Co.",
                    countryOfOrigin: "India",
                    NameOfManufacturer: "Urbane Manufacturing",
                    AddressOfManufacturer: "456 Style St, New Delhi, India"
                }
            },
        
            {
                id: 'formalshirt-9',
                name: "Urbane Pretty Classy Stylish Shirt",
                brand: "ONLY",
                brand_logo: "./images/brands/only.png",
                price: 15.99,
                category: "FormalShirt",
                colors: ["#CFE4D8"],
                product_details: {
                    list: ["Wrinkle-resistant", "Lightweight"],
                    Material: "Rayon",
                    Pattern: "Striped",
                    Occasion: "Formal",
                    Stretchable: "Yes",
                    CareInstructions: "Machine wash warm",
                },
                images: {
                    "#CFE4D8": [
                        "./images/formal-shirts/id-9/first.webp",
                        "./images/formal-shirts/id-9/second.webp",
                        "./images/formal-shirts/id-9/third.webp",
                        "./images/formal-shirts/id-9/fourth.webp"
                    ],
                },
                KnowYourProduct: {
                    text: "Stylish shirt with a classy finish, perfect for any formal occasion.",
                },
                rating: 4.4,
                reviews: [
                    { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                    { user: "Emma", rating: 4.3, time: "25 March", comment: "Great for work, comfortable and stylish." }
                ],
                vendor_details: {
                    soldBy: "ONLY India",
                    countryOfOrigin: "India",
                    NameOfManufacturer: "ONLY Fashion Ltd.",
                    AddressOfManufacturer: "789 Couture Blvd, Bangalore, India"
                }
            }

]




// BOTTOMS:

// // bodycon:
export const bodycon = [

    {
        id: 'bodycon-1',
        name: "EyeBogler, Women Slim Fit Full Sleeve Dress",
        brand: "H&M",
        brand_logo: "./images/brands/h&m.png",
        price: 80.78,
        category: "Bodycon",
        colors: ["#1F0904"], 
        product_details: {
            list: ["Slim fit", "Full sleeve", "Versatile design"],
            Material: "Polyester blend",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#1F0904": [
                "./images/bodycon/id-1/first.webp",
                "./images/bodycon/id-1/second.webp",
                "./images/bodycon/id-1/third.webp",
                "./images/bodycon/id-1/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "This sleek bodycon dress offers a perfect blend of comfort and style, suitable for various occasions.",
        },
        rating: 4.25,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "H&M Official Store",
            countryOfOrigin: "Bangladesh",
            NameOfManufacturer: "H&M Group",
            AddressOfManufacturer: "H&M Hennes & Mauritz AB, SE-106 38 Stockholm, Sweden"
        }
    },

    {
        id: 'bodycon-2',
        name: "Aahwan Women's Dresses",
        brand: "H&M",
        brand_logo: "./images/brands/h&m.png",
        price: 56.00,
        category: "Bodycon",
        colors: ["#DED078"], 
        product_details: {
            list: ["Figure-hugging fit", "Elegant design", "Comfortable wear"],
            Material: "Cotton blend",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Hand wash cold, lay flat to dry",
        },
        images: {
            "#DED078": [
                "./images/bodycon/id-2/first.webp",
                "./images/bodycon/id-2/second.webp",
                "./images/bodycon/id-2/third.webp",
                "./images/bodycon/id-2/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "An elegant bodycon dress that accentuates your curves while providing all-day comfort.",
        },
        rating:4.25,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "H&M Official Store",
            countryOfOrigin: "India",
            NameOfManufacturer: "Aahwan Fashions Pvt. Ltd.",
            AddressOfManufacturer: "Plot No. 45, Sector 5, IMT Manesar, Gurugram, Haryana 122050, India"
        }
    },

    {
        id: 'bodycon-3',
        name: "Trendy Stylish Short Bodycon Dress - Black",
        brand: "Prada",
        brand_logo: "./images/brands/prada.jpg",
        price: 89.99,
        category: "Bodycon",
        colors: ["#000000"], 
        product_details: {
            list: ["Premium quality", "Stylish design", "Perfect fit"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes", 
            CareInstructions: "Machine wash cold",
        },
        images: {
            "#000000": [
                "./images/bodycon/id-3/first.webp",
                "./images/bodycon/id-3/second.webp",
                "./images/bodycon/id-3/third.webp",
                "./images/bodycon/id-3/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "A trendy black bodycon dress perfect for any occasion, combining style with comfort.",
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "Prada Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada S.p.A.",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },

    {
        id: 'bodycon-4',
        name: "Anbich Designs Split Hem Pencil Dress",
        brand: "Prada",
        brand_logo: "./images/brands/prada.jpg",
        price: 95.99,
        category: "Bodycon",
        colors: ["#B6D8F0"], 
        product_details: {
            list: ["Elegant design", "Comfortable fit", "Split hem detail"],
            Material: "Polyester",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Hand wash cold",
        },
        images: {
            "#B6D8F0": [
                "./images/bodycon/id-4/first.webp",
                "./images/bodycon/id-4/second.webp",
                "./images/bodycon/id-4/third.webp",
                "./images/bodycon/id-4/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "Stylish pencil dress with split hem design for a modern look, perfect for both office and evening wear.",
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "Prada Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada S.p.A.",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },

    {
        id: 'bodycon-5',
        name: "Fancy Sensational Women Dresses",
        brand: "GUCCI",
        brand_logo: "./images/brands/gucci.webp",
        price: 12.99,
        category: "Bodycon",
        colors: ["#DFDBD2"], 
        product_details: {
            list: ["Fancy design", "Premium fabric", "Sensational fit"],
            Material: "Polyester Blend",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Dry clean only",
        },
        images: {
            "#DFDBD2": [
                "./images/bodycon/id-5/first.webp",
                "./images/bodycon/id-5/second.webp",
                "./images/bodycon/id-5/third.webp",
                "./images/bodycon/id-5/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "A sensational bodycon dress that combines style with comfort, perfect for making a statement at any event.",
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "GUCCI Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Gucci S.p.A.",
            AddressOfManufacturer: "Via Tornabuoni 73-R, 50123 Firenze FI, Italy"
        }
    },

    {
        id: 'bodycon-6',
        name: "Dress for woman Two Piece",
        brand: "GUCCI",
        brand_logo: "./images/brands/gucci.webp",
        price: 49.99,
        category: "Bodycon",
        colors: ["#BF6C50"], 
        product_details: {
            list: ["Two-piece design", "Modern style", "Versatile wear"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold",
        },
        images: {
            "#BF6C50": [
                "./images/bodycon/id-6/first.webp",
                "./images/bodycon/id-6/second.webp",
                "./images/bodycon/id-6/third.webp",
                "./images/bodycon/id-6/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "Trendy two-piece bodycon dress for a contemporary look, offering versatility and style for various occasions.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "GUCCI Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Gucci S.p.A.",
            AddressOfManufacturer: "Via Tornabuoni 73-R, 50123 Firenze FI, Italy"
        }
    },

    
    {
        id: 'bodycon-7',
        name: "Stylish Sensational Women Dresses",
        brand: "prada",
        brand_logo: "./images/brands/prada.jpg",
        price: 10.99,
        category: "Bodycon",
        colors: ["#673327"], 
        product_details: {
            list: ["Stylish design", "Comfortable fit", "Premium quality"],
            Material: "Polyester",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Hand wash recommended",
        },
        images: {
            "#673327": [
                "./images/bodycon/id-7/first.webp",
                "./images/bodycon/id-7/second.webp",
                "./images/bodycon/id-7/third.webp",
                "./images/bodycon/id-7/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "A stylish and sensational bodycon dress for the modern woman, combining comfort with high-end fashion.",
        },
        rating: 4.2,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "Prada Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada S.p.A.",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },

    {
        id: 'bodycon-8',
        name: "Women and Girl Latest Denim Dress",
        brand: "prada",
        brand_logo: "./images/brands/prada.jpg",
        price: 85.99,
        category: "Bodycon",
        colors: ["#CCDBED"], 
        product_details: {
            list: ["Denim material", "Latest design", "Perfect fit"],
            Material: "Denim",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold",
        },
        images: {
            "#CCDBED": [
                "./images/bodycon/id-8/first.webp",
                "./images/bodycon/id-8/second.webp",
                "./images/bodycon/id-8/third.webp",
                "./images/bodycon/id-8/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "Contemporary denim bodycon dress for a casual yet stylish look, perfect for everyday wear or casual outings.",
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "Prada Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada S.p.A.",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },

    {
        id: 'bodycon-9',
        name: "Trendy Elegant Women Dresses",
        brand: "H&M",
        brand_logo: "./images/brands/h&m.png",
        price: 79.99,
        category: "Bodycon",
        colors: ["#C27A51"], 
        product_details: {
            list: ["Trendy design", "Elegant style", "Comfortable wear"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold",
        },
        images: {
            "#C27A51": [
                "./images/bodycon/id-9/first.webp",
                "./images/bodycon/id-9/second.webp",
                "./images/bodycon/id-9/third.webp",
                "./images/bodycon/id-9/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "An elegant bodycon dress that combines comfort with style, suitable for both casual and formal occasions.",
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "H&M Official Store",
            countryOfOrigin: "Bangladesh",
            NameOfManufacturer: "H&M Group",
            AddressOfManufacturer: "H&M Hennes & Mauritz AB, SE-106 38 Stockholm, Sweden"
        }
    },

]

// // floral-dress:

export const floraldress = [
    {
        id: 'floraldress-1',
        name: "Zarin White",
        brand: "H&M",
        brand_logo: "./images/brands/H&M.png",
        price: 49.99,
        category: "FloralDress",
        colors: ["#F6F2F1"],
        product_details: {
            list: ["Soft Fabric", "Lightweight", "Breathable"],
            Material: "Polyester",
            Pattern: "Floral",
            Occasion: "Casual/Formal",
            Stretchable: "No",
            CareInstructions: "Machine wash cold, tumble dry low."
        },
        images: {
            "#F6F2F1": [
                "./images/floral-dress/id-1/first.webp",
                "./images/floral-dress/id-1/second.webp",
                "./images/floral-dress/id-1/third.webp",
                "./images/floral-dress/id-1/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "This dress is perfect for summer outings, providing a comfortable and stylish fit."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "H&M Official Store",
            countryOfOrigin: "Bangladesh",
            NameOfManufacturer: "H&M Group",
            AddressOfManufacturer: "H&M Hennes & Mauritz AB, Mäster Samuelsgatan 46A, 106 38 Stockholm, Sweden"
        }
    },
    {
        id: 'floraldress-2',
        name: "Maheshvi Casual Polyester Blend Puff Sleeves SweetHeart Neck Knee Length DrawString Dress",
        brand: "H&M",
        brand_logo: "./images/brands/H&M.png",
        price: 59.99,
        category: "FloralDress",
        colors: ["#83BAD4"],
        product_details: {
            list: ["Puff Sleeves", "Knee Length", "Drawstring"],
            Material: "Polyester Blend",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Hand wash recommended."
        },
        images: {
            "#83BAD4": [
                "./images/floral-dress/id-2/first.webp",
                "./images/floral-dress/id-2/second.webp",
                "./images/floral-dress/id-2/third.webp",
                "./images/floral-dress/id-2/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "A versatile dress that can be dressed up or down, ideal for various occasions."
        },
        rating: 4.6,
        reviews: [
            { user: "Mia", rating: 4.7, time: "20 March", comment: "Great quality for the price!" },
            { user: "Olivia", rating: 4.5, time: "25 March", comment: "Love the puff sleeves!" }
        ],
        vendor_details: {
            soldBy: "H&M Official Store",
            countryOfOrigin: "India",
            NameOfManufacturer: "Maheshvi",
            AddressOfManufacturer: "123 Fashion St, Mumbai, Maharashtra, India"
        }
    },
    {
        id: 'floraldress-3',
        name: "Adorable Russian Dress",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 99.99,
        category: "FloralDress",
        colors: ["#FCE9CA"],
        product_details: {
            list: ["Elegant Design", "Comfort Fit", "Perfect for Parties"],
            Material: "Silk",
            Pattern: "Floral Print",
            Occasion: "Formal/Party",
            Stretchable: "No",
            CareInstructions: "Dry clean only."
        },
        images: {
            "#FCE9CA": [
                "./images/floral-dress/id-3/first.webp",
                "./images/floral-dress/id-3/second.webp",
                "./images/floral-dress/id-3/third.webp",
                "./images/floral-dress/id-3/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "A luxurious dress that adds elegance to your wardrobe."
        },
        rating: 4.8,
        reviews: [
            { user: "Isabella", rating: 5.0, time: "15 April", comment: "Absolutely stunning dress!" },
            { user: "Liam", rating: 4.6, time: "10 April", comment: "Perfect for evening parties." }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A.",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'floraldress-4',
        name: "Trendy Graceful Women Dresses",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 89.99,
        category: "FloralDress",
        colors: ["#BAB0BD"],
        product_details: {
            list: ["Trendy Style", "Graceful Design", "Comfortable Fit"],
            Material: "Cotton Blend",
            Pattern: "Solid",
            Occasion: "Casual/Formal",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold."
        },
        images: {
            "#BAB0BD": [
                "./images/floral-dress/id-4/first.webp",
                "./images/floral-dress/id-4/second.webp",
                "./images/floral-dress/id-4/third.webp",
                "./images/floral-dress/id-4/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "Perfect for both casual and formal occasions."
        },
        rating: 4.7,
        reviews: [
            { user: "Emily", rating: 4.8, time: "12 March", comment: "Very stylish and comfortable!" },
            { user: "Noah", rating: 4.5, time: "19 March", comment: "Good quality fabric." }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A.",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'floraldress-5',
        name: "Georgette Long Sleeves Floral Print",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 69.99,
        category: "FloralDress",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["Long Sleeves", "Floral Print", "Flowy Design"],
            Material: "Georgette",
            Pattern: "Floral",
            Occasion: "Casual/Beach",
            Stretchable: "No",
            CareInstructions: "Hand wash with cold water."
        },
        images: {
            "#FFFFFF": [
                "./images/floral-dress/id-5/first.webp",
                "./images/floral-dress/id-5/second.webp",
                "./images/floral-dress/id-5/third.webp",
                "./images/floral-dress/id-5/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "Ideal for beach outings and casual gatherings."
        },
        rating: 4.6,
        reviews: [
            { user: "Ava", rating: 4.5, time: "30 March", comment: "Beautiful flow and design." },
            { user: "William", rating: 4.3, time: "05 April", comment: "Perfect for summer!" }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A.",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'floraldress-6',
        name: "Chidi Elegant Printed Dresses",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 74.99,
        category: "FloralDress",
        colors: ["#99B4B4"],
        product_details: {
            list: ["Elegant Design", "Stylish Fit", "Perfect for Parties"],
            Material: "Silk Blend",
            Pattern: "Printed",
            Occasion: "Formal/Party",
            Stretchable: "No",
            CareInstructions: "Dry clean only."
        },
        images: {
            "#99B4B4": [
                "./images/floral-dress/id-6/first.webp",
                "./images/floral-dress/id-6/second.webp",
                "./images/floral-dress/id-6/third.webp",
                "./images/floral-dress/id-6/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "Dress to impress with this elegant and stylish design."
        },
        rating: 4.9,
        reviews: [

            { user: "Sophia", rating: 5.0, time: "25 March", comment: "Absolutely gorgeous dress!" },
            { user: "James", rating: 4.7, time: "29 March", comment: "Great for formal occasions." }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A.",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'floraldress-7',
        name: "Sophisticated Floral Dress",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 79.99,
        category: "FloralDress",
        colors: ["#F2E3DE"],
        product_details: {
            list: ["Sophisticated Design", "Comfortable Fit", "Chic Look"],
            Material: "Cotton",
            Pattern: "Floral",
            Occasion: "Casual/Party",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold."
        },
        images: {
            "#F2E3DE": [
                "./images/floral-dress/id-7/first.webp",
                "./images/floral-dress/id-7/second.webp",
                "./images/floral-dress/id-7/third.webp",
                "./images/floral-dress/id-7/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "A chic dress that combines sophistication with comfort."
        },
        rating: 4.4,
        reviews: [
            { user: "Isabella", rating: 4.3, time: "20 April", comment: "Great quality and design." },
            { user: "Liam", rating: 4.5, time: "25 April", comment: "Perfect for any event." }
        ],
        vendor_details: {
            soldBy: "ZARA Official Store",
            countryOfOrigin: "Spain",
            NameOfManufacturer: "Industria de Diseño Textil, S.A.",
            AddressOfManufacturer: "Avenida de la Diputación, 151, 22540 Barbastro, Huesca, Spain"
        }
    },

    {
        id: 'floraldress-8',
        name: "Green Printed Floral Dress",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 49.99,
        category: "FloralDress",
        colors: ["#D2E8DE"],
        product_details: {
            list: ["Stylish Design", "Lightweight Fabric", "Comfortable Fit"],
            Material: "Polyester",
            Pattern: "Floral",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Machine wash cold."
        },
        images: {
            "#D2E8DE": [
                "./images/floral-dress/id-8/first.webp",
                "./images/floral-dress/id-8/second.webp",
                "./images/floral-dress/id-8/third.webp",
                "./images/floral-dress/id-8/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "Elevate your casual wardrobe with this stunning blue printed floral dress."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "ONLY",
            AddressOfManufacturer: "Lars Bjørnstrup, 8000 Aarhus C, Denmark"
        }
    },
    
    {
        id: 'floraldress-9',
        name: "Shiva Blue Flower Print Dress 0106",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 39.99,
        category: "FloralDress",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["Eye-catching Design", "Soft Material", "Versatile Style"],
            Material: "Cotton",
            Pattern: "Floral",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold."
        },
        images: {
            "#FFFFFF": [
                "./images/floral-dress/id-9/first.webp",
                "./images/floral-dress/id-9/second.webp",
                "./images/floral-dress/id-9/third.webp",
                "./images/floral-dress/id-9/fourth.webp"
            ],
        },
        KnowYourProduct: {
            text: "Brighten up your day with this vibrant blue flower print dress."
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "ONLY",
            AddressOfManufacturer: "Lars Bjørnstrup, 8000 Aarhus C, Denmark"
        }
    }
    
]

// //  formal trousers:
export const formaltrousers = [

    {
    id: 'formaltrouser-1',
    name: "Dark Brown High Rise Wide Leg Pant",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 59.99,
    category: "FormalTrouser",
    colors: ["#633526", "#DEC8C3" ],  // brown, skin
    product_details: {
        list: ["High-rise waist", "Wide leg design", "Soft and comfortable fabric"],
        Material: "65% Polyester, 35% Viscose",
        Pattern: "Solid",
        Occasion: "Formal",
        Stretchable: "Slightly",
        CareInstructions: "Machine wash cold, gentle cycle. Do not bleach. Tumble dry low.",
    },
    images: {
        "#633526": [
            "./images/formal-trousers/id-1/brown/first.jpg",
            "./images/formal-trousers/id-1/brown/second.jpg",
            "./images/formal-trousers/id-1/brown/third.jpg",
            "./images/formal-trousers/id-1/brown/fourth.jpg"
        ],
        "#DEC8C3": [
            "./images/formal-trousers/id-1/skin/first.jpg",
            "./images/formal-trousers/id-1/skin/second.jpg",
            "./images/formal-trousers/id-1/skin/third.jpg",
            "./images/formal-trousers/id-1/skin/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "These dark brown high-rise wide-leg pants offer a sophisticated and versatile option for your formal wardrobe. The rich color and elegant silhouette make them perfect for office wear or special occasions.",
    },
    rating: 4.3,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "Bangladesh",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},
{
    id: 'formaltrouser-2',
    name: "Black trousers",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 49.99,
    category: "FormalTrouser",
    colors: ["#000000"], 
    product_details: {
        list: ["Classic black color", "Straight leg", "Wrinkle-resistant fabric"],
        Material: "70% Polyester, 30% Rayon",
        Pattern: "Solid",
        Occasion: "Formal",
        Stretchable: "Yes",
        CareInstructions: "Machine wash cold. Hang to dry. Iron on low heat if needed.",
    },
    images: {
        "#000000": [
            "./images/formal-trousers/id-2/first.jpg",
            "./images/formal-trousers/id-2/second.jpg",
            "./images/formal-trousers/id-2/third.jpg",
            "./images/formal-trousers/id-2/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "These classic black trousers are a staple for any formal wardrobe. Their versatile design and comfortable fit make them suitable for various professional settings and formal events.",
    },
    rating: 4.5,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "Vietnam",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
    },
    {
        id: 'formaltrouser-3',
        name: "Women Off White Pleated Band Trouser",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 99.99,
        category: "FormalTrouser",
        colors: ["#FFFFFF"], 
        product_details: {
            list: ["Pleated design", "High-waisted", "Relaxed fit"],
            Material: "100% Cotton",
            Pattern: "Solid with pleats",
            Occasion: "Formal",
            Stretchable: "No",
            CareInstructions: "Dry clean only",
        },
        images: {
            "#FFFFFF": [
                "./images/formal-trousers/id-3/first.jpg",
                "./images/formal-trousers/id-3/second.jpg",
                "./images/formal-trousers/id-3/third.jpg",
                "./images/formal-trousers/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "These off-white pleated band trousers from Prada offer a luxurious and sophisticated option for formal wear. The pleated design and high-waisted cut create a flattering silhouette, perfect for both office and evening events.",
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada S.p.A.",
            AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
        }
        },

        {
            id: 'formaltrouser-4',
            name: "Poly Cotton Formal Trouser - Sage Green",
            brand: "PRADA",
            brand_logo: "./images/brands/prada.jpg",
            price: 79.99,
            category: "FormalTrouser",
            colors: ["#E8E8E2"],  
            product_details: {
                list: ["Sage green color", "Slim fit", "Crease-resistant fabric"],
                Material: "60% Cotton, 40% Polyester",
                Pattern: "Solid",
                Occasion: "Formal",
                Stretchable: "Slightly",
                CareInstructions: "Machine wash cold. Tumble dry low. Iron if needed.",
            },
            images: {
                "#E8E8E2": [
                    "./images/formal-trousers/id-4/first.jpg",
                    "./images/formal-trousers/id-4/second.jpg",
                    "./images/formal-trousers/id-4/third.jpg",
                    "./images/formal-trousers/id-4/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "These sage green formal trousers from Prada offer a unique and stylish option for your professional wardrobe. The poly-cotton blend ensures comfort and durability, while the slim fit provides a modern silhouette.",
            },
            rating: 4.6,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
            ],
            vendor_details: {
                soldBy: "PRADA Official Store",
                countryOfOrigin: "Italy",
                NameOfManufacturer: "Prada S.p.A.",
                AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
            }
            },

            {
                id: 'formaltrouser-5',
                name: "Together Pink Satin Trouser",
                brand: "BELENCIAGA",
                brand_logo: "./images/brands/balenciaga.png",
                price: 49.99,
                category: "FormalTrouser",
                colors: ["#DABFBE"],   // light-brown , dark-brown
                product_details: {
                    list: ["Luxurious satin fabric", "Wide-leg design", "High-waisted"],
                    Material: "100% Polyester Satin",
                    Pattern: "Solid",
                    Occasion: "Formal",
                    Stretchable: "No",
                    CareInstructions: "Dry clean only",
                },
                images: {
                    "#DABFBE": [
                        "./images/formal-trousers/id-5/first.jpg",
                        "./images/formal-trousers/id-5/second.jpg",
                        "./images/formal-trousers/id-5/third.jpg",
                        "./images/formal-trousers/id-5/fourth.jpg"
                    ],
                },
                KnowYourProduct: {
                    text: "These Together Pink Satin Trousers from Belenciaga offer a bold and luxurious option for formal events. The wide-leg design and high-waisted cut create a dramatic silhouette, perfect for making a statement at special occasions.",
                },
                rating: 4.8,
                reviews: [
                    { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                    { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
                ],
                vendor_details: {
                    soldBy: "BELENCIAGA Official Store",
                    countryOfOrigin: "Italy",
                    NameOfManufacturer: "Belenciaga S.p.A.",
                    AddressOfManufacturer: "Via delle Finiture 16, 50123 Firenze, Italy"
                }
                },

            {
                    id: 'formaltrouser-6',
                    name: "Red High Rise Straight Fit Pant",
                    brand: "BELENCIAGA",
                    brand_logo: "./images/brands/only.png",
                    price: 29.99,
                    category: "FormalTrouser",
                    colors: ["#9F161D", "#252734"],   // red, blue
                    product_details: {
                        list: ["Bold red color", "High-rise waist", "Straight leg fit"],
                        Material: "98% Cotton, 2% Elastane",
                        Pattern: "Solid",
                        Occasion: "Formal",
                        Stretchable: "Slightly",
                        CareInstructions: "Machine wash cold. Hang to dry. Iron on low heat if needed.",
                    },
                    images: {
                        "#9F161D": [
                            "./images/formal-trousers/id-6/red/first.jpg",
                            "./images/formal-trousers/id-6/red/second.jpg",
                            "./images/formal-trousers/id-6/red/third.jpg",
                            "./images/formal-trousers/id-6/red/fourth.jpg"
                        ],
                        "#252734": [
                            "./images/formal-trousers/id-7/blue/first.jpg",
                            "./images/formal-trousers/id-7/blue/second.jpg",
                            "./images/formal-trousers/id-7/blue/third.jpg",
                            "./images/formal-trousers/id-7/blue/fourth.jpg"
                        ],
                    },
                    KnowYourProduct: {
                        text: "Make a bold statement with these Red High Rise Straight Fit Pants from Belenciaga. The vibrant color and sleek silhouette offer a modern twist on formal wear, perfect for those who want to stand out while maintaining a professional look.",
                    },
                    rating: 4.5,
                    reviews: [
                        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                        { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
                    ],
                    vendor_details: {
                        soldBy: "BELENCIAGA Official Store",
                        countryOfOrigin: "Italy",
                        NameOfManufacturer: "Belenciaga S.p.A.",
                        AddressOfManufacturer: "Via delle Finiture 16, 50123 Firenze, Italy"
                    }
                    },
            
                    {
                        id: 'formaltrouser-7',
                        name: "Women Grey Check Formal Slim Fit Trousers",
                        brand: "H&M",
                        brand_logo: "./images/brands/h&m.png",
                        price: 39.99,
                        category: "FormalTrouser",
                        colors: ["#B3B3B3"],  
                        product_details: {
                            list: ["Grey check pattern", "Slim fit", "Ankle length"],
                            Material: "65% Polyester, 33% Viscose, 2% Elastane",
                            Pattern: "Check",
                            Occasion: "Formal",
                            Stretchable: "Yes",
                            CareInstructions: "Machine wash warm. Do not bleach. Tumble dry low.",
                        },
                        images: {
                            "#B3B3B3": [
                                "./images/formal-trousers/id-7/first.jpg",
                                "./images/formal-trousers/id-7/second.jpg",
                                "./images/formal-trousers/id-7/third.jpg",
                                "./images/formal-trousers/id-7/fourth.jpg"
                            ],
                        },
                        KnowYourProduct: {
                            text: "These Women's Grey Check Formal Slim Fit Trousers from H&M offer a classic and versatile option for your work wardrobe. The subtle check pattern adds interest to the sleek silhouette, making them perfect for pairing with a variety of tops and blazers.",
                        },
                        rating: 4.2,
                        reviews: [
                            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                            { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
                        ],
                        vendor_details: {
                            soldBy: "H&M Official Store",
                            countryOfOrigin: "Bangladesh",
                            NameOfManufacturer: "H & M Hennes & Mauritz AB",
                            AddressOfManufacturer: "Mäster Samuelsgatan 46A, 106 38 Stockholm, Sweden"
                        }
                        },

                        {
                            id: 'formaltrouser-8',
                            name: "Women Black Stripe Formal Regular Fit Trouser",
                            brand: "H&M",
                            brand_logo: "./images/brands/h&m.png",
                            price: 44.99,
                            category: "FormalTrouser",
                            colors: ["#000000"],  
                            product_details: {
                                list: ["Black with subtle stripes", "Regular fit", "Full length"],
                                Material: "75% Polyester, 23% Viscose, 2% Elastane",
                                Pattern: "Pinstripe",
                                Occasion: "Formal",
                                Stretchable: "Slightly",
                                CareInstructions: "Machine wash cold. Hang to dry. Iron on low heat if needed.",
                            },
                            images: {
                                "#000000": [
                                    "./images/formal-trousers/id-8/first.jpg",
                                    "./images/formal-trousers/id-8/second.jpg",
                                    "./images/formal-trousers/id-8/third.jpg",
                                    "./images/formal-trousers/id-8/fourth.jpg"
                                ],
                            },
                            KnowYourProduct: {
                                text: "These Women's Black Stripe Formal Regular Fit Trousers from H&M offer a timeless and professional look. The subtle pinstripe pattern adds a touch of sophistication to the classic black color, making them a versatile choice for various formal settings.",
                            },
                            rating: 4.4,
                            reviews: [
                                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                                { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
                            ],
                            vendor_details: {
                                soldBy: "H&M Official Store",
                                countryOfOrigin: "Turkey",
                                NameOfManufacturer: "H & M Hennes & Mauritz AB",
                                AddressOfManufacturer: "Mäster Samuelsgatan 46A, 106 38 Stockholm, Sweden"
                            }
                            },

                            {
                                id: 'formaltrouser-9',
                                name: "Off White Elsa Wide Leg Pant",
                                brand: "H&M",
                                brand_logo: "./images/brands/h&m.png",
                                price: 54.99,
                                category: "FormalTrouser",
                                colors: ["#E9DFD3"],  
                                product_details: {
                                    list: ["Off-white color", "Wide leg design", "High-waisted"],
                                    Material: "55% Linen, 45% Viscose",
                                    Pattern: "Solid",
                                    Occasion: "Formal",
                                    Stretchable: "No",
                                    CareInstructions: "Machine wash cold. Tumble dry low. Iron on medium heat if needed.",
                                },
                                images: {
                                    "#E9DFD3": [
                                        "./images/formal-trousers/id-9/first.jpg",
                                        "./images/formal-trousers/id-9/second.jpg",
                                        "./images/formal-trousers/id-9/third.jpg",
                                        "./images/formal-trousers/id-9/fourth.jpg"
                                    ],
                                },
                                KnowYourProduct: {
                                    text: "The Off White Elsa Wide Leg Pants from H&M offer a fresh and elegant option for formal wear. The linen-viscose blend provides a lightweight and breathable feel, perfect for warmer weather or indoor events. The wide-leg silhouette and high-waisted design create a flattering and sophisticated look.",
                                },
                                rating: 4.6,
                                reviews: [
                                    { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                                    { user: "Emma", rating: 4.0, time: "22 March", comment: "Nice fit but could be softer." }
                                ],
                                vendor_details: {
                                    soldBy: "H&M Official Store",
                                    countryOfOrigin: "India",
                                    NameOfManufacturer: "H & M Hennes & Mauritz AB",
                                    AddressOfManufacturer: "Mäster Samuelsgatan 46A, 106 38 Stockholm, Sweden"
                                }
                                },


]


// //  jeans:
export const jeans = [

        {
            id: 'jeans-1',
            name: "Womens High Rise Cotton Lycra Jeans",
            brand: "PRADA",
            brand_logo: "./images/brands/prada.jpg",
            price: 99.99,
            category: "Jeans",
            colors: ["#DDE6EC"], 
            product_details: {
                list: ["High-quality denim", "Loose fit", "Comfortable for all-day wear"],
                Material: "100% Cotton",
                Pattern: "Solid",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash cold, tumble dry low",
            },
            images: {
                "#DDE6EC": [
                    "./images/jeans/id-1/first.jpg",
                    "./images/jeans/id-1/second.jpg",
                    "./images/jeans/id-1/third.jpg",
                    "./images/jeans/id-1/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "These high-rise jeans offer a stylish and comfortable fit for everyday wear, made from premium-quality fabric.",
            },
            rating: 4.3,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Emma", rating: 4.0, time: "20 March", comment: "Good quality, but fits a bit large." },
                { user: "Mia", rating: 4.7, time: "25 March", comment: "My new favorite jeans!" }
            ],
            vendor_details: {
                soldBy: "PRADA Official",
                countryOfOrigin: "Italy",
                NameOfManufacturer: "PRADA Denim Ltd",
                AddressOfManufacturer: "Milan, Italy"
            }
        },
    
        {
            id: 'jeans-2',
            name: "Women Blue Dreamy Drape Super High-Waisted Baggy Wide-Leg Jeans",
            brand: "PRADA",
            brand_logo: "./images/brands/prada.jpg",
            price: 49.99,
            category: "Jeans",
            colors: ["#7B93AB"], 
            product_details: {
                list: ["Wide-leg design", "High waist", "Soft and comfortable fabric"],
                Material: "Cotton blend",
                Pattern: "Plain",
                Occasion: "Casual/Formal",
                Stretchable: "No",
                CareInstructions: "Hand wash recommended",
            },
            images: {
                "#7B93AB": [
                    "./images/jeans/id-2/first.jpg",
                    "./images/jeans/id-2/second.jpg",
                    "./images/jeans/id-2/third.jpg",
                    "./images/jeans/id-2/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "The perfect combination of comfort and style with a high-waist fit that complements various looks.",
            },
            rating: 4.6,
            reviews: [
                { user: "Lily", rating: 5.0, time: "22 March", comment: "Super comfortable and stylish!" },
                { user: "Olivia", rating: 4.3, time: "24 March", comment: "Fits well and very comfortable." },
            ],
            vendor_details: {
                soldBy: "PRADA Official",
                countryOfOrigin: "Italy",
                NameOfManufacturer: "PRADA Denim Ltd",
                AddressOfManufacturer: "Milan, Italy"
            }
        },
    
        {
            id: 'jeans-3',
            name: "Women's Regular Black Jeans",
            brand: "PRADA",
            brand_logo: "./images/brands/prada.jpg",
            price: 29.99,
            category: "Jeans",
            colors: ["#000000"], 
            product_details: {
                list: ["Trendy style", "Perfect for casual outings"],
                Material: "Cotton",
                Pattern: "Faded",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash cold",
            },
            images: {
                "#000000": [
                    "./images/jeans/id-3/first.jpg",
                    "./images/jeans/id-3/second.jpg",
                    "./images/jeans/id-3/third.jpg",
                    "./images/jeans/id-3/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "Stylish jeans with a straight fit, made for comfort and fashion.",
            },
            rating: 4.0,
            reviews: [
                { user: "Ella", rating: 4.0, time: "15 March", comment: "Very trendy and comfortable." },
            ],
            vendor_details: {
                soldBy: "PRADA Official",
                countryOfOrigin: "Italy",
                NameOfManufacturer: "PRADA Denim Ltd",
                AddressOfManufacturer: "Milan, Italy"
            }
        },
    
        {
            id: 'jeans-4',
            name: "Women Blue High-Rise Slash Knee Light Fade Jeans",
            brand: "H&M",
            brand_logo: "./images/brands/h&m.png",
            price: 89.99,
            category: "Jeans",
            colors: ["#7590AF"], 
            product_details: {
                list: ["High-rise fit", "Slim fit", "Classic blue denim"],
                Material: "Denim",
                Pattern: "Solid",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Dry clean only",
            },
            images: {
                "#7590AF": [
                    "./images/jeans/id-4/first.jpg",
                    "./images/jeans/id-4/second.jpg",
                    "./images/jeans/id-4/third.jpg",
                    "./images/jeans/id-4/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "High-rise blue jeans, perfect for a stylish casual look.",
            },
            rating: 4.7,
            reviews: [
                { user: "Sophia", rating: 4.8, time: "18 March", comment: "Absolutely love the fit and feel." },
            ],
            vendor_details: {
                soldBy: "H&M Official",
                countryOfOrigin: "Sweden",
                NameOfManufacturer: "H&M Denim Ltd",
                AddressOfManufacturer: "Stockholm, Sweden"
            }
        },
    

    

        {
            id: 'jeans-5',
            name: "Denim Mid Rise Solid Bowknot Pocket Wide Leg Jeans",
            brand: "H&M",
            brand_logo: "./images/brands/h&m.png",
            price: 14.99,
            category: "Jeans",
            colors: ["#AEB7BE"],
            product_details: {
                list: ["Mid Rise wide leg", "Stretchable fabric", "Comfort fit"],
                Material: "Denim",
                Pattern: "Bowknot",
                Occasion: "Casual/Formal",
                Stretchable: "Yes",
                CareInstructions: "Machine wash cold with like colors, tumble dry low",
            },
            images: {
                "#AEB7BE": [
                    "./images/jeans/id-5/first.jpg",
                    "./images/jeans/id-5/second.jpg",
                    "./images/jeans/id-5/third.jpg",
                    "./images/jeans/id-5/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "This denim jean offers both style and functionality with its bowknot design, ideal for everyday wear.",
            },
            rating: 4.3,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Lily", rating: 4.0, time: "22 April", comment: "Good fit but slightly heavy." },
                { user: "Emma", rating: 5.0, time: "1 May", comment: "Perfect for casual outings!" }
            ],
            vendor_details: {
                soldBy: "H&M Retail",
                countryOfOrigin: "India",
                NameOfManufacturer: "H&M Manufacturing Pvt Ltd",
                AddressOfManufacturer: "123 H&M St, New Delhi, India"
            }
        },
        
        {
            id: 'jeans-6',
            name: "Wide Leg Mid Rise Jeans Blue",
            brand: "H&M",
            brand_logo: "./images/brands/h&m.png",
            price: 17.99,
            category: "Jeans",
            colors: ["#64778C"],
            product_details: {
                list: ["Mid rise", "Blue denim", "Flare leg"],
                Material: "Polyester Blend",
                Pattern: "Solid",
                Occasion: "Casual/Formal",
                Stretchable: "No",
                CareInstructions: "Hand wash only, do not bleach, tumble dry low",
            },
            images: {
                "#64778C": [
                    "./images/jeans/id-6/first.jpg",
                    "./images/jeans/id-6/second.jpg",
                    "./images/jeans/id-6/third.jpg",
                    "./images/jeans/id-6/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "Elegant mid-rise trousers perfect for both professional and casual settings.",
            },
            rating: 4.6,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Olivia", rating: 5.0, time: "2 May", comment: "Super stylish and fits well!" },
                { user: "Ava", rating: 4.3, time: "10 May", comment: "Love the flare style!" }
            ],
            vendor_details: {
                soldBy: "H&M Retail",
                countryOfOrigin: "India",
                NameOfManufacturer: "H&M Manufacturing Pvt Ltd",
                AddressOfManufacturer: "456 H&M St, Mumbai, India"
            }
        },
        
        {
            id: 'jeans-7',
            name: "Blue High Waist Floral Pocket Wide Leg Jeans",
            brand: "PRADA",
            brand_logo: "./images/brands/prada.jpg",
            price: 24.99,
            category: "Jeans",
            colors: ["#AEBDC5"],
            product_details: {
                list: ["Blue High Waist", "Relaxed fit", "Floral Pockets",  "Durable fabric"],
                Material: "Denim",
                Pattern: "Solid",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Machine wash, tumble dry low",
            },
            images: {
                "#AEBDC5": [
                    "./images/jeans/id-7/first.jpg",
                    "./images/jeans/id-7/second.jpg",
                    "./images/jeans/id-7/third.jpg",
                    "./images/jeans/id-7/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "Designed for comfort and practicality, this flowery denim is perfect for outdoor and casual wear.",
            },
            rating: 4.8,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Isabella", rating: 4.9, time: "15 April", comment: "Great quality and style." },
                { user: "Mia", rating: 4.8, time: "20 April", comment: "Perfect for a relaxed look!" }
            ],
            vendor_details: {
                soldBy: "PRADA Retail",
                countryOfOrigin: "Italy",
                NameOfManufacturer: "PRADA Manufacturing",
                AddressOfManufacturer: "789 PRADA Lane, Milan, Italy"
            }
        },
        
        {
            id: 'jeans-8',
            name: "Straight Fit Rinsed Jeans",
            brand: "PRADA",
            brand_logo: "./images/brands/prada.jpg",
            price: 22.99,
            category: "Jeans",

            colors: ["#2C3B4E"],
            product_details: {
                list: ["Cut-out style", "Straight fit", "Navy blue color"],
                Material: "Denim",
                Pattern: "Solid",
                Occasion: "Casual",
                Stretchable: "Yes",
                CareInstructions: "Wash separately, avoid bleach",
            },
            images: {
                "#2C3B4E": [
                    "./images/jeans/id-8/first.jpg",
                    "./images/jeans/id-8/second.jpg",
                    "./images/jeans/id-8/third.jpg",
                    "./images/jeans/id-8/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "Trendy cut-out jeans that add a modern twist to any outfit.",
            },
            rating: 4.4,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Ella", rating: 4.2, time: "10 May", comment: "Unique style, good fit." },
                { user: "Grace", rating: 4.5, time: "5 June", comment: "Love the cut-out design!" }
            ],
            vendor_details: {
                soldBy: "PRADA Retail",
                countryOfOrigin: "Italy",
                NameOfManufacturer: "PRADA Manufacturing",
                AddressOfManufacturer: "789 PRADA Lane, Milan, Italy"
            }
        },
        
        {
            id: 'jeans-9',
            name: "Blue Solid Skinny High Rise Denim Jeans",
            brand: "PRADA",
            brand_logo: "./images/brands/prada.jpg",
            price: 19.99,
            category: "Jeans",
            colors: ["#6B94BA"],
            product_details: {
                list: ["High rise style", "Blue color", "Denim"],
                Material: "Cotton Blend",
                Pattern: "Solid",
                Occasion: "Casual",
                Stretchable: "No",
                CareInstructions: "Machine wash cold, do not bleach",
            },
            images: {
                "#6B94BA": [
                    "./images/jeans/id-9/first.jpg",
                    "./images/jeans/id-9/second.jpg",
                    "./images/jeans/id-9/third.jpg",
                    "./images/jeans/id-9/fourth.jpg"
                ],
            },
            KnowYourProduct: {
                text: "Functional and stylish blue skinny jeans, ideal for casual wear.",
            },
            rating: 4.7,
            reviews: [
                { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
                { user: "Charlotte", rating: 4.6, time: "25 April", comment: "Perfect for everyday wear!" },
                { user: "Amelia", rating: 4.7, time: "10 June", comment: "Great pockets and style." }
            ],
            vendor_details: {
                soldBy: "PRADA Retail",
                countryOfOrigin: "Italy",
                NameOfManufacturer: "PRADA Manufacturing",
                AddressOfManufacturer: "789 PRADA Lane, Milan, Italy"
            }
        }
        


]

// joggers :
export const joggers = [

    {
        id: 'joggers-1',
        name: "Women Solid Maroon Joggers Pant",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 19.99,
        category: "Joggers",
        colors: ["#430C0F"], 
        product_details: {
            list: ["Elastic waistband", "Tapered leg", "Side pockets"],
            Material: "95% Cotton, 5% Elastane",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#430C0F": [
                "./images/joggers/id-1/first.jpg",
                "./images/joggers/id-1/second.jpg",
                "./images/joggers/id-1/third.jpg",
                "./images/joggers/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "These maroon joggers offer the perfect blend of style and comfort. The rich color adds a touch of sophistication to your casual wardrobe, while the soft cotton blend fabric ensures all-day comfort. The tapered leg design provides a modern silhouette, making these joggers versatile enough for both lounging at home and running errands in town. With their elastic waistband and side pockets, they're as practical as they are fashionable."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.8, time: "22 April", comment: "Love the color and fit!" },
            { user: "Olivia", rating: 4.6, time: "5 May", comment: "Great for casual wear, very comfortable." }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Bangladesh",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },

    {
        id: 'joggers-2',
        name: "Pintuck Drawstring Waistband Wide Leg Jogger",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 99.99,
        category: "Joggers",
        colors: ["#C9C9C9"], 
        product_details: {
            list: ["Wide leg design", "Drawstring waistband", "Pintuck detailing"],
            Material: "100% Polyester",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Slightly",
            CareInstructions: "Hand wash cold, line dry",
        },
        images: {
            "#C9C9C9": [
                "./images/joggers/id-2/first.jpg",
                "./images/joggers/id-2/second.jpg",
                "./images/joggers/id-2/third.jpg",
                "./images/joggers/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Elevate your casual style with these chic wide-leg joggers. The pintuck detailing adds a touch of sophistication, while the drawstring waistband ensures a comfortable, adjustable fit. The light grey color is versatile and easy to pair with various tops. The wide-leg silhouette offers a trendy look that's perfect for both lounging and casual outings. Made from soft polyester, these joggers provide comfort without compromising on style."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ava", rating: 4.7, time: "30 April", comment: "Love the wide-leg style, very flattering!" },
            { user: "Isabella", rating: 4.4, time: "15 May", comment: "Comfortable and stylish, great for casual wear." }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "China",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },

    {
        id: 'joggers-3',
        name: "Zink Z by Zink London Brown Chocopie Printed Joggers",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 20.99,
        category: "Joggers",
        colors: ["#6E300F"], 
        product_details: {
            list: ["All-over print", "Elastic waistband", "Relaxed fit"],
            Material: "95% Cotton, 5% Spandex",
            Pattern: "Printed",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#6E300F": [
                "./images/joggers/id-3/first.jpg",
                "./images/joggers/id-3/second.jpg",
                "./images/joggers/id-3/third.jpg",
                "./images/joggers/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Add a playful touch to your casual wardrobe with these brown chocopie printed joggers. The all-over print adds a fun and unique element to your outfit, while the relaxed fit ensures maximum comfort. Made from a soft cotton blend with a touch of spandex, these joggers offer both comfort and flexibility. The elastic waistband provides a secure fit, making these joggers perfect for lounging at home or running errands. The rich brown color and quirky print make these joggers a standout piece in your collection."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Mia", rating: 4.6, time: "7 April", comment: "Love the fun print, so comfortable!" },
            { user: "Charlotte", rating: 4.3, time: "20 May", comment: "Cute and comfy, but runs a bit large." }
        ],
        vendor_details: {
            soldBy: "Zink London Official Store",
            countryOfOrigin: "India",
            NameOfManufacturer: "Zink Retail Pvt. Ltd.",
            AddressOfManufacturer: "Plot No. 1, Sector 16A, Noida, Uttar Pradesh 201301, India"
        }
    },

    {
        id: 'joggers-4',
        name: "Solid Pink Jogger",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 29.99,
        category: "Joggers",
        colors: ["#E0B6B8"], 
        product_details: {
            list: ["Elastic waistband with drawstring", "Side pockets", "Ribbed cuffs"],
            Material: "80% Cotton, 20% Polyester",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, do not bleach, tumble dry low",
        },
        images: {
            "#E0B6B8": [
                "./images/joggers/id-4/first.jpg",
                "./images/joggers/id-4/second.jpg",
                "./images/joggers/id-4/third.jpg",
                "./images/joggers/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Embrace comfort and style with these solid pink joggers. The soft pastel hue adds a feminine touch to your casual wardrobe, making these joggers perfect for both lounging and light workouts. The cotton-polyester blend offers a perfect balance of comfort and durability. The elastic waistband with drawstring allows for a customizable fit, while the side pockets add practicality. The ribbed cuffs provide a snug fit around the ankles, creating a sleek silhouette. These joggers are versatile enough to pair with a variety of tops, from simple tees to stylish crop tops."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 5.0, time: "2 April", comment: "Absolutely love these! So soft and the color is beautiful." },
            { user: "Lily", rating: 4.7, time: "25 May", comment: "Great fit and very comfortable for everyday wear." }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Turkey",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },

    
    {
        id: 'joggers-5',
        name: "Black Urban Cargo Joggers",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 39.99,
        category: "Joggers",
        colors: ["#1A1F23"], 
        product_details: {
            list: ["Multiple cargo pockets", "Elastic waistband with drawstring", "Tapered leg"],
            Material: "98% Cotton, 2% Spandex",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Slightly",
            CareInstructions: "Machine wash cold, hang dry",
        },
        images: {
            "#1A1F23": [
                "./images/joggers/id-5/first.jpg",
                "./images/joggers/id-5/second.jpg",
                "./images/joggers/id-5/third.jpg",
                "./images/joggers/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Combine style and functionality with these black urban cargo joggers. The multiple cargo pockets offer ample storage space, making these joggers perfect for those who love a utilitarian look. The elastic waistband with drawstring ensures a comfortable and adjustable fit, while the tapered leg provides a modern silhouette. Made from a cotton-spandex blend, these joggers offer both comfort and slight stretch for ease of movement. The sleek black color makes these joggers versatile and easy to style for various casual occasions. Whether you're running errands or meeting friends for a casual outing, these cargo joggers will keep you looking stylish and feeling comfortable."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Zoe", rating: 4.8, time: "10 April", comment: "Love the cargo style and all the pockets!" },
            { user: "Grace", rating: 4.6, time: "5 June", comment: "Great quality and fit, very versatile." }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "China",
            NameOfManufacturer: "Guangzhou Cider Clothing Co., Ltd",
            AddressOfManufacturer: "Room 401, No. 7 Longkou West Road, Tianhe District, Guangzhou, China"
        }
    },

    {
        id: 'joggers-6',
        name: "Womens Lavender Mid Rise Elastic Waist Jegging",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 39.99,
        category: "Joggers",
        colors: ["#E6E6FA"], 
        product_details: {
            list: ["Mid-rise waist", "Elastic waistband", "Skinny fit"],
            Material: "75% Cotton, 23% Polyester, 2% Elastane",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#E6E6FA": [
                "./images/joggers/id-6/first.jpg",
                "./images/joggers/id-6/second.jpg",
                "./images/joggers/id-6/third.jpg",
                "./images/joggers/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Embrace comfort and style with these lavender mid-rise elastic waist jeggings. The soft, pastel hue adds a touch of femininity to your casual wardrobe, while the jegging style offers the perfect blend of jeans and leggings. The mid-rise waist and elastic waistband ensure a comfortable, flattering fit that moves with you throughout the day. Made from a cotton-polyester blend with a touch of elastane, these jeggings offer both comfort and stretch. The skinny fit creates a sleek silhouette that pairs well with both casual and dressier tops. Whether you're running errands or meeting friends for coffee, these jeggings will keep you looking stylish and feeling comfortable."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ava", rating: 4.7, time: "15 April", comment: "Love the color and the comfortable fit!" },
            { user: "Emma", rating: 4.4, time: "2 June", comment: "Great for everyday wear, very versatile." }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "China",
            NameOfManufacturer: "Guangzhou Cider Clothing Co., Ltd",
            AddressOfManufacturer: "Room 401, No. 7 Longkou West Road, Tianhe District, Guangzhou, China"
        }
    },

    {
        id: 'joggers-7',
        name: "Livin Skinny Fit Mid Rise Regular Trousers - Maroon",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 49.99,
        category: "Joggers",
        colors: ["#42141F", "#1E2134", "#0B150D"], // maroon, black, navy blue 
        product_details: {
            list: ["Skinny fit", "Mid-rise waist", "Regular length"],
            Material: "98% Cotton, 2% Elastane",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Slightly",
            CareInstructions: "Machine wash cold, do not bleach, tumble dry low",
        },
        images: {
            "#42141F": [
                "./images/joggers/id-7/maroon/first.jpg",
                "./images/joggers/id-7/maroon/second.jpg",
                "./images/joggers/id-7/maroon/third.jpg",
                "./images/joggers/id-7/maroon/fourth.jpg"
            ],
            "#1E2134": [
                "./images/joggers/id-7/black/first.jpg",
                "./images/joggers/id-7/black/second.jpg",
                "./images/joggers/id-7/black/third.jpg",
                "./images/joggers/id-7/black/fourth.jpg"
            ],

            "#0B150D": [
                "./images/joggers/id-7/blue/first.jpg",
                "./images/joggers/id-7/blue/second.jpg",
                "./images/joggers/id-7/blue/third.jpg",
                "./images/joggers/id-7/blue/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Elevate your casual style with these Livin skinny fit mid-rise regular trousers in rich maroon. The sleek skinny fit offers a modern, streamlined look that's perfect for both casual and semi-formal occasions. The mid-rise waist provides comfortable coverage and pairs well with various top styles. Made from a cotton blend with a touch of elastane, these trousers offer both comfort and slight stretch for ease of movement. The regular length ensures versatility in styling with different types of footwear. Available in three classic colors - maroon, black, and navy blue - these trousers are a versatile addition to any wardrobe, easily transitioning from day to night looks."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Olivia", rating: 4.6, time: "5 May", comment: "Great fit and color, very flattering!" },
            { user: "Isabella", rating: 4.3, time: "12 June", comment: "Comfortable for all-day wear, but runs slightly small." }
        ],
        vendor_details: {
            soldBy: "Livin Official Store",
            countryOfOrigin: "India",
            NameOfManufacturer: "Livin Lifestyle Pvt. Ltd.",
            AddressOfManufacturer: "Plot No. 762, Phase V, Udyog Vihar, Gurugram, Haryana 122016, India"
        }
    },

    {
        id: 'joggers-8',
        name: "Black Solid High Waist Skinny Leather Jegging",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 79.99,
        category: "Joggers",
        colors: ["#282422"], 
        product_details: {
            list: ["High waist", "Skinny fit", "Faux leather material"],
            Material: "60% Polyurethane, 40% Viscose",
            Pattern: "Solid",
            Occasion: "Casual/Party",
            Stretchable: "Yes",
            CareInstructions: "Hand wash cold, do not tumble dry",
        },
        images: {
            "#282422": [
                "./images/joggers/id-8/first.jpg",
                "./images/joggers/id-8/second.jpg",
                "./images/joggers/id-8/third.jpg",
                "./images/joggers/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Make a bold statement with these black solid high waist skinny leather jeggings. The faux leather material adds an edgy, luxurious touch to your outfit, while the high waist and skinny fit create a sleek, flattering silhouette. These jeggings offer the perfect blend of comfort and style, with a stretchy fabric that moves with you throughout the day. The versatile black color makes these jeggings easy to pair with a variety of tops and shoes, from casual tees and sneakers to dressy blouses and heels. Whether you're heading to a party or just want to add some edge to your everyday look, these leather jeggings are sure to make a statement."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Mia", rating: 4.8, time: "20 April", comment: "Love the leather look, very flattering!" },
            { user: "Ava", rating: 4.6, time: "8 June", comment: "Great for nights out, comfortable despite the leather look." }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "China",
            NameOfManufacturer: "Guangzhou Cider Clothing Co., Ltd",
            AddressOfManufacturer: "Room 401, No. 7 Longkou West Road, Tianhe District, Guangzhou, China"
        }
    },

    {
        id: 'joggers-9',
        name: "Green High Rise Jeggings",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 69.99,
        category: "Joggers",
        colors: ["#344C4B"], 
        product_details: {
            list: ["High rise waist", "Skinny fit", "Elastic waistband"],
            Material: "75% Cotton, 23% Polyester, 2% Elastane",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low",
        },
        images: {
            "#344C4B": [
                "./images/joggers/id-9/first.jpg",
                "./images/joggers/id-9/second.jpg",
                "./images/joggers/id-9/third.jpg",
                "./images/joggers/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Add a pop of color to your wardrobe with these green high rise jeggings. The rich, forest green hue offers a refreshing alternative to traditional denim colors, while still maintaining versatility in styling. The high rise waist provides excellent coverage and pairs well with both cropped and tucked-in tops. Made from a cotton-polyester blend with a touch of elastane, these jeggings offer both comfort and stretch for all-day wear. The skinny fit creates a sleek silhouette that's perfect for both casual and slightly dressier occasions. The elastic waistband ensures a comfortable, secure fit that moves with you. Whether you're running errands or meeting friends for lunch, these green jeggings will keep you looking stylish and feeling comfortable."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.7, time: "25 April", comment: "Love the color, fits perfectly!" },
            { user: "Olivia", rating: 4.4, time: "10 June", comment: "Great for everyday wear, very comfortable." }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "China",
            NameOfManufacturer: "Guangzhou Cider Clothing Co., Ltd",
            AddressOfManufacturer: "Room 401, No. 7 Longkou West Road, Tianhe District, Guangzhou, China"
        }
    },





]

// // jumpsuits:
export const jumpsuits = [
    {
    id: 'jumpsuit-1',
    name: "Black Wrap Jumpsuit",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 59.99,
    category: "JumpSuit",
    colors: ["#000000"], 
    product_details: {
        list: ["Wrap style", "V-neckline", "Wide-leg pants", "Belted waist"],
        Material: "95% Polyester, 5% Elastane",
        Pattern: "Solid",
        Occasion: "Evening, Formal",
        Stretchable: "Slightly",
        CareInstructions: "Dry clean only",
    },
    images: {
        "#000000": [
            "./images/jumpsuits/id-1/first.jpg",
            "./images/jumpsuits/id-1/second.jpg",
            "./images/jumpsuits/id-1/third.jpg",
            "./images/jumpsuits/id-1/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Elevate your evening wear with this sophisticated black wrap jumpsuit from Prada. The sleek design features a flattering V-neckline and a belted waist that accentuates your figure. The wide-leg pants offer a modern, elongated silhouette that's both comfortable and stylish. Crafted from a high-quality polyester blend with a touch of elastane, this jumpsuit provides a luxurious feel with just the right amount of stretch for ease of movement. The wrap style adds a touch of elegance, making it perfect for formal events or upscale dinners. Pair it with statement jewelry and heels for a show-stopping look that's sure to turn heads. This versatile piece can be dressed up or down, making it a valuable addition to any fashion-forward wardrobe."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emma", rating: 5.0, time: "22 April", comment: "Absolutely stunning! Perfect for my gala event." },
        { user: "Olivia", rating: 4.5, time: "5 May", comment: "Luxurious fabric and great fit. A bit pricey but worth it." }
    ],
    vendor_details: {
        soldBy: "Prada Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "Prada S.p.A.",
        AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
    }
},
{
    id: 'jumpsuit-2',
    name: "Women Black & White Checked Culotte Jumpsuit",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 59.99,
    category: "JumpSuit",
    colors: ["#000000"], 
    product_details: {
        list: ["Checked pattern", "Culotte style", "Sleeveless", "High waist"],
        Material: "100% Cotton",
        Pattern: "Checked",
        Occasion: "Casual, Semi-formal",
        Stretchable: "No",
        CareInstructions: "Machine wash cold, gentle cycle",
    },
    images: {
        "#000000": [
            "./images/jumpsuits/id-2/first.jpg",
            "./images/jumpsuits/id-2/second.jpg",
            "./images/jumpsuits/id-2/third.jpg",
            "./images/jumpsuits/id-2/fourth.jpg"
        ],

    },
    KnowYourProduct: {
        text: "Make a bold statement with this chic black and white checked culotte jumpsuit from Prada. The eye-catching pattern adds a playful yet sophisticated touch to your wardrobe. The sleeveless design and high waist create a flattering silhouette, while the culotte-style pants offer a modern twist on classic jumpsuit designs. Crafted from 100% cotton, this piece ensures breathability and comfort throughout the day. The versatile nature of this jumpsuit makes it suitable for various occasions, from casual outings to semi-formal events. Style it with sneakers for a laid-back look or dress it up with heels and statement jewelry for a more polished appearance. The timeless black and white color scheme ensures this piece will remain a staple in your wardrobe for seasons to come. Experience the perfect blend of comfort and style with this Prada creation that embodies contemporary fashion at its finest."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Ava", rating: 4.8, time: "30 April", comment: "Love the pattern! Gets so many compliments." },
        { user: "Isabella", rating: 4.5, time: "12 May", comment: "Great quality, but runs a bit large." }
    ],
    vendor_details: {
        soldBy: "Prada Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "Prada S.p.A.",
        AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
    }
},

{
    id: 'jumpsuit-3',
    name: "Brown Wrap Jumpsuit",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 19.99,
    category: "JumpSuit",
    colors: ["#AD7E60"], 
    product_details: {
        list: ["Wrap style", "Long sleeves", "Wide-leg pants", "Self-tie belt"],
        Material: "70% Viscose, 30% Linen",
        Pattern: "Solid",
        Occasion: "Casual, Work",
        Stretchable: "No",
        CareInstructions: "Dry clean recommended",
    },
    images: {
        "#AD7E60": [
            "./images/jumpsuits/id-3/first.jpg",
            "./images/jumpsuits/id-3/second.jpg",
            "./images/jumpsuits/id-3/third.jpg",
            "./images/jumpsuits/id-3/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Embrace effortless elegance with this stunning brown wrap jumpsuit from Prada. The rich, earthy tone exudes sophistication and versatility, making it a perfect choice for various occasions. Crafted from a luxurious blend of viscose and linen, this jumpsuit offers a beautiful drape and a comfortable feel against the skin. The wrap style flatters all body types, while the self-tie belt allows you to customize the fit to your liking. Long sleeves add a touch of refinement, making this piece suitable for both casual outings and professional settings. The wide-leg pants create a flowing silhouette that elongates your figure and provides ease of movement. This jumpsuit embodies Prada's commitment to combining style with functionality. Whether you're heading to the office, attending a lunch date, or enjoying a weekend brunch, this versatile piece will ensure you look polished and feel confident. Pair it with sleek heels and minimalist jewelry for a sophisticated ensemble, or dress it down with sandals for a more relaxed vibe. Experience the perfect fusion of comfort and high fashion with this exquisite Prada creation."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Mia", rating: 5.0, time: "7 April", comment: "Absolutely love the color and fit. Worth every penny!" },
        { user: "Charlotte", rating: 4.8, time: "20 May", comment: "Elegant and versatile. My new go-to for work and events." }
    ],
    vendor_details: {
        soldBy: "Prada Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "Prada S.p.A.",
        AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
    }
},

{
    id: 'jumpsuit-4',
    name: "Womens Black V-Neck Full Sleeve Embellished Wrap Georgette Jumpsuit",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 29.99,
    category: "JumpSuit",
    colors: ["#000000"], 
    product_details: {
        list: ["V-neckline", "Full sleeves", "Embellished details", "Wrap style"],
        Material: "100% Georgette",
        Pattern: "Solid with embellishments",
        Occasion: "Evening, Cocktail",
        Stretchable: "Slightly",
        CareInstructions: "Dry clean only",
    },
    images: {
        "#000000": [
            "./images/jumpsuits/id-4/first.jpg",
            "./images/jumpsuits/id-4/second.jpg",
            "./images/jumpsuits/id-4/third.jpg",
            "./images/jumpsuits/id-4/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Dazzle and delight in this exquisite black V-neck full sleeve embellished wrap georgette jumpsuit from Prada. This stunning piece combines the sophistication of a classic black jumpsuit with the glamour of intricate embellishments, creating a show-stopping ensemble perfect for evening events and cocktail parties. The V-neckline adds a touch of allure, while the full sleeves provide elegant coverage. Crafted from 100% georgette, this jumpsuit offers a luxurious, flowing silhouette that moves gracefully with every step. The wrap style accentuates your waist, creating a flattering and feminine shape. The embellished details catch the light beautifully, adding a touch of sparkle and elevating the overall design. This jumpsuit embodies Prada's commitment to luxury and attention to detail. It's a versatile piece that can be styled for various upscale occasions - pair it with strappy heels and a clutch for a glamorous evening look, or layer it with a sleek blazer for a more formal event. The slightly stretchy fabric ensures comfort throughout the night, allowing you to dance and mingle with ease. Make a lasting impression and feel like a true fashion icon in this breathtaking Prada creation that seamlessly blends timeless elegance with contemporary flair."
    },
    rating: 4.9,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Ella", rating: 5.0, time: "2 April", comment: "Absolutely stunning! Wore it to a gala and felt like a celebrity." },
        { user: "Amelia", rating: 5.0, time: "15 May", comment: "The embellishments are exquisite. Worth every penny for special occasions." }
    ],
    vendor_details: {
        soldBy: "Prada Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "Prada S.p.A.",
        AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
    }
},

{
    id: 'jumpsuit-5',
    name: "Women Pink Round Neck With V Cut Kimono Sleeves Waist Tie-Up Longline Jumpsuit",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 39.99,
    category: "JumpSuit",
    colors: ["#F4E4E1", "#B69CC2", "#9D9548"], // pink, purple, green 
    product_details: {
        list: ["Round neck with V-cut", "Kimono sleeves", "Waist tie-up", "Longline design"],
        Material: "95% Silk, 5% Elastane",
        Pattern: "Solid",
        Occasion: "Casual, Resort wear",
        Stretchable: "Slightly",
        CareInstructions: "Dry clean recommended",
    },
    images: {
        "#F4E4E1": [
            "./images/jumpsuits/id-5/green/first.jpg",
            "./images/jumpsuits/id-5/green/second.jpg",
            "./images/jumpsuits/id-5/green/third.jpg",
            "./images/jumpsuits/id-5/green/fourth.jpg"
        ],

        "#B69CC2": [
            "./images/jumpsuits/id-5/pink/first.jpg",
            "./images/jumpsuits/id-5/pink/second.jpg",
            "./images/jumpsuits/id-5/pink/third.jpg",
            "./images/jumpsuits/id-5/pink/fourth.jpg"
        ],

        "#9D9548": [
            "./images/jumpsuits/id-5/purple/first.jpg",
            "./images/jumpsuits/id-5/purple/second.jpg",
            "./images/jumpsuits/id-5/purple/third.jpg",
            "./images/jumpsuits/id-5/purple/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Embrace effortless elegance with this stunning pink round neck jumpsuit from Prada, featuring a unique V-cut, flowing kimono sleeves, and a flattering waist tie-up. This longline jumpsuit is the epitome of sophisticated comfort, perfect for various occasions from casual outings to resort wear. Crafted from a luxurious blend of 95% silk and 5% elastane, it offers a sumptuous feel against the skin with just the right amount of stretch for all-day comfort. The round neck with a V-cut adds a subtle allure, while the kimono sleeves provide a graceful, feminine silhouette. The waist tie-up allows you to customize the fit, accentuating your figure beautifully. Available in three elegant colors - soft pink, rich purple, and earthy green - this jumpsuit offers versatility to suit your personal style. The longline design elongates your silhouette, creating a sleek and statuesque appearance. This Prada creation embodies the perfect balance between comfort and high fashion, making it an ideal choice for those who appreciate luxury in their everyday wear. Style it with strappy sandals and delicate jewelry for a daytime look, or dress it up with heels and statement accessories for evening events. Experience the joy of wearing a piece that combines the ease of a jumpsuit with the sophistication of Prada's exquisite design."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Lily", rating: 5.0, time: "10 April", comment: "The kimono sleeves are so elegant. Perfect for my beach vacation!" },
        { user: "Grace", rating: 4.5, time: "25 May", comment: "Love the silk blend. Drapes beautifully on the body." }
    ],
    vendor_details: {
        soldBy: "Prada Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "Prada S.p.A.",
        AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
    }
},

{
    id: 'jumpsuit-6',
    name: "Women Solid Sleeveless White Jumpsuit",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 69.99,
    category: "JumpSuit",
    colors: ["#FFFFFF"], 
    product_details: {
        list: ["Sleeveless design", "Wide-leg pants", "High waist", "Back zipper closure"],
        Material: "97% Polyester, 3% Elastane",
        Pattern: "Solid",
        Occasion: "Casual, Semi-formal",
        Stretchable: "Slightly",
        CareInstructions: "Machine wash cold, gentle cycle",
    },
    images: {
        "#FFFFFF": [
            "./images/jumpsuits/id-6/first.jpg",
            "./images/jumpsuits/id-6/second.jpg",
            "./images/jumpsuits/id-6/third.jpg",
            "./images/jumpsuits/id-6/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Step into summer with this chic and versatile women's solid sleeveless white jumpsuit from ONLY. This stunning piece combines simplicity with sophistication, making it a perfect addition to your warm-weather wardrobe. The crisp white color exudes freshness and pairs effortlessly with any accessories or jackets. Crafted from a high-quality blend of 97% polyester and 3% elastane, this jumpsuit offers both durability and comfort with a slight stretch that allows for easy movement. The sleeveless design keeps you cool on warm days while also showcasing your arms beautifully. The wide-leg pants create a flowing, elongated silhouette that flatters all body types, while the high waist accentuates your natural curves. A convenient back zipper closure ensures a smooth, streamlined fit. This jumpsuit is incredibly versatile - dress it up with heels and statement jewelry for a semi-formal event, or keep it casual with flat sandals and a denim jacket for a day out. The solid white color serves as a blank canvas, allowing you to express your personal style through accessories. Whether you're heading to a beach party, a summer wedding, or a casual brunch with friends, this ONLY jumpsuit will have you looking effortlessly stylish and feeling confidently comfortable. Experience the perfect blend of fashion and function with this must-have piece that will quickly become a staple in your summer rotation."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Zoe", rating: 4.8, time: "5 April", comment: "Perfect for summer! So versatile and easy to style." },
        { user: "Harper", rating: 4.5, time: "20 May", comment: "Great quality for the price. Fits true to size." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "Bangladesh",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},

{
    id: 'jumpsuit-7',
    name: "Denim Buckle Wide Leg Jumpsuit",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 19.99,
    category: "JumpSuit",
    colors: ["#627280"], 
    product_details: {
        list: ["Denim fabric", "Buckle detail", "Wide-leg design", "Adjustable straps"],
        Material: "100% Cotton",
        Pattern: "Solid",
        Occasion: "Casual",
        Stretchable: "No",
        CareInstructions: "Machine wash cold, tumble dry low",
    },
    images: {
        "#627280": [
            "./images/jumpsuits/id-7/first.jpg",
            "./images/jumpsuits/id-7/second.jpg",
            "./images/jumpsuits/id-7/third.jpg",
            "./images/jumpsuits/id-7/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Embrace casual cool with this trendy denim buckle wide leg jumpsuit from ONLY. This piece combines the timeless appeal of denim with a modern silhouette, creating a look that's both comfortable and fashion-forward. The jumpsuit features a versatile blue-grey shade (#627280) that pairs easily with a variety of tops and accessories. Crafted from 100% cotton, it offers breathability and durability, ensuring it will be a long-lasting addition to your wardrobe. The wide-leg design provides a relaxed fit and creates a flattering, elongated silhouette. The standout feature is the buckle detail, which adds an edgy, industrial touch to the overall design. Adjustable straps allow you to customize the fit to your liking, ensuring comfort throughout the day. This jumpsuit is perfect for casual outings - pair it with a simple t-shirt and sneakers for a laid-back weekend look, or dress it up with a blouse and heels for a more polished appearance. The versatility of denim means this piece can be styled for various seasons - layer it with a turtleneck and boots in cooler months, or wear it on its own with sandals in the summer. The lack of stretch in the 100% cotton fabric means it will maintain its shape wear after wear. Whether you're running errands, meeting friends for coffee, or attending a casual outdoor event, this ONLY denim jumpsuit will keep you looking effortlessly stylish and feeling comfortably confident."
    },
    rating: 4.5,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Chloe", rating: 4.7, time: "12 April", comment: "Love the denim quality. The wide legs are so flattering!" },
        { user: "Aria", rating: 4.3, time: "30 May", comment: "Great casual piece. Wish it had a bit of stretch though." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "Turkey",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},

{
    id: 'jumpsuit-8',
    name: "Black Solid Sweetheart Neck Straight Fit Jumpsuit",
    brand: "ONLY",
    brand_logo: "./images/brands/prada.png",
    price: 39.99,
    category: "JumpSuit",
    colors: ["#000000"], 
    product_details: {
        list: ["Sweetheart neckline", "Straight fit", "Sleeveless design", "Hidden back zipper"],
        Material: "95% Polyester, 5% Elastane",
        Pattern: "Solid",
        Occasion: "Evening, Cocktail",
        Stretchable: "Slightly",
        CareInstructions: "Hand wash cold, line dry",
    },
    images: {
        "#000000": [
            "./images/jumpsuits/id-8/first.jpg",
            "./images/jumpsuits/id-8/second.jpg",
            "./images/jumpsuits/id-8/third.jpg",
            "./images/jumpsuits/id-8/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Make a striking impression with this elegant black solid sweetheart neck straight fit jumpsuit from ONLY. This sophisticated piece combines timeless style with modern design, perfect for evening events or cocktail parties. The deep black color exudes classic elegance and versatility, allowing for endless styling options. Crafted from a luxurious blend of 95% polyester and 5% elastane, this jumpsuit offers a comfortable fit with just the right amount of stretch to flatter your curves. The sweetheart neckline adds a touch of feminine charm and draws attention to your décolletage, while the sleeveless design keeps you cool and showcases your arms beautifully. The straight fit silhouette creates a sleek, elongated look that's both flattering and on-trend. A hidden back zipper ensures a smooth, seamless appearance and easy dressing. This jumpsuit is incredibly versatile - pair it with statement jewelry and high heels for a glamorous evening look, or dress it down with a blazer and flats for a chic office ensemble. The solid black color serves as a perfect canvas for accessorizing, allowing you to express your personal style through your choice of jewelry, shoes, and bags. Whether you're attending a cocktail party, a formal dinner, or a night out with friends, this ONLY jumpsuit will have you looking effortlessly stylish and feeling confidently sophisticated. Experience the perfect blend of comfort and elegance with this must-have piece that will quickly become a go-to in your eveningwear rotation."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Ava", rating: 5.0, time: "8 April", comment: "Absolutely stunning! The fit is perfect and so flattering." },
        { user: "Isabella", rating: 4.8, time: "27 May", comment: "Wore this to a wedding and got so many compliments. Love it!" }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "China",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},

{
    id: 'jumpsuit-9',
    name: "Blue Striped Back Cut Tie Up Jumpsuit",
    brand: "ONLY",
    brand_logo: "./images/brands/prada.png",
    price: 49.99,
    category: "JumpSuit",
    colors: ["#B9D0E1"], 
    product_details: {
        list: ["Striped pattern", "Back cut-out", "Tie-up detail", "Wide-leg design"],
        Material: "100% Cotton",
        Pattern: "Striped",
        Occasion: "Casual, Beach wear",
        Stretchable: "No",
        CareInstructions: "Machine wash cold, tumble dry low",
    },
    images: {
        "#B9D0E1": [
            "./images/jumpsuits/id-9/first.jpg",
            "./images/jumpsuits/id-9/second.jpg",
            "./images/jumpsuits/id-9/third.jpg",
            "./images/jumpsuits/id-9/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Embrace summer vibes with this charming blue striped back cut tie up jumpsuit from ONLY. This playful piece combines casual comfort with a touch of flirty style, perfect for beach outings or relaxed weekend activities. The soft blue and white striped pattern (#B9D0E1) evokes a fresh, nautical feel that's ideal for warm weather. Crafted from 100% cotton, this jumpsuit offers breathability and comfort, ensuring you stay cool even on the hottest days. The wide-leg design provides a relaxed fit and creates a breezy, laid-back silhouette. The standout feature is the back cut-out with a tie-up detail, adding a flirtatious touch and allowing for a customizable fit. This design element also provides ventilation, making it perfect for sunny days. The jumpsuit is versatile in its styling options - pair it with flat sandals and a sun hat for a day at the beach, or dress it up with wedges and statement earrings for a casual dinner out. The striped pattern adds visual interest and can be easily accessorized with solid-colored pieces. The 100% cotton fabric means it's easy to care for and will maintain its shape and color through multiple washes. Whether you're strolling along the boardwalk, enjoying a picnic in the park, or meeting friends for a casual brunch, this ONLY striped jumpsuit will keep you looking effortlessly stylish and feeling comfortably cool. It's a must-have addition to your summer wardrobe, offering both style and practicality in one charming package."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Mia", rating: 5.0, time: "15 April", comment: "Perfect for my beach vacation! The back detail is so cute." },
        { user: "Lily", rating: 4.5, time: "3 June", comment: "Love the striped pattern. Very flattering and comfortable." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "India",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},
]

// // midi-dress:
export const mididress = [
    {
    id: 'mididress-1',
    name: "Green Shirt Collar Tie Ups Shirt Midi Dress",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 59.99,
    category: "mididress",
    colors: ["#BEB444"], 
    product_details: {
        list: ["Shirt collar", "Tie-up detail", "Button-down front", "Midi length"],
        Material: "100% Cotton",
        Pattern: "Solid",
        Occasion: "Casual, Office wear",
        Stretchable: "Slightly",
        CareInstructions: "Machine wash cold, gentle cycle. Do not bleach. Tumble dry low.",
    },
    images: {
        "#BEB444": [
            "./images/midi-dress/id-1/first.jpg",
            "./images/midi-dress/id-1/second.jpg",
            "./images/midi-dress/id-1/third.jpg",
            "./images/midi-dress/id-1/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Elevate your wardrobe with this sophisticated Green Shirt Collar Tie Ups Shirt Midi Dress from PRADA. This versatile piece seamlessly blends casual comfort with professional polish, making it perfect for both office settings and weekend outings. The dress features a classic shirt collar and a button-down front, giving it a timeless appeal. The tie-up detail at the waist allows for a customizable fit, accentuating your silhouette beautifully. The midi length offers a modern, elegant look that's appropriate for various occasions. Crafted from 100% cotton, this dress ensures breathability and comfort throughout the day. The rich green hue (#BEB444) is both eye-catching and versatile, easily paired with a variety of accessories. Whether you're heading to a business meeting or a casual lunch date, this PRADA midi dress will keep you looking stylish and feeling confident. The slightly stretchable fabric provides ease of movement, while the solid pattern offers a clean, sophisticated look. Pair it with heels and statement jewelry for a more formal look, or dress it down with sandals and a denim jacket for a casual day out. This Green Shirt Collar Tie Ups Shirt Midi Dress is more than just a garment; it's a testament to PRADA's commitment to combining functionality with high fashion."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emma", rating: 5.0, time: "22 April", comment: "Perfect for office wear. Received many compliments!" },
        { user: "Olivia", rating: 4.8, time: "5 May", comment: "Love the versatility of this dress. The tie-up detail is a nice touch." }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A.",
        AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
    }
},

{
    id: 'mididress-2',
    name: "Three Fourth Sleeve Schiffli Shirt Midi Dress",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 49.99,
    category: "mididress",
    colors: ["#FFFFFF"], 
    product_details: {
        list: ["Three-quarter sleeves", "Schiffli embroidery", "Shirt dress style", "Midi length"],
        Material: "100% Cotton with Schiffli embroidery",
        Pattern: "Embroidered",
        Occasion: "Semi-formal, Brunch, Day events",
        Stretchable: "No",
        CareInstructions: "Dry clean only. Iron on low heat if needed.",
    },
    images: {
        "#FFFFFF": [
            "./images/midi-dress/id-2/first.jpg",
            "./images/midi-dress/id-2/second.jpg",
            "./images/midi-dress/id-2/third.jpg",
            "./images/midi-dress/id-2/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Indulge in timeless elegance with this Three Fourth Sleeve Schiffli Shirt Midi Dress from PRADA. This exquisite piece showcases the brand's commitment to combining classic silhouettes with intricate detailing. The dress features beautiful Schiffli embroidery, a type of machine-made lace that adds a touch of romance and sophistication to the garment. The crisp white color (#FFFFFF) serves as the perfect canvas for the delicate embroidery, creating a look that's both fresh and refined. The three-quarter sleeves offer versatility, making this dress suitable for various seasons and occasions. The shirt dress style, complete with a collar and button-down front, gives a nod to traditional tailoring while the midi length keeps it modern and chic. Crafted from 100% cotton, this dress ensures breathability and comfort, perfect for long days of wear. The non-stretchable fabric maintains the dress's structured silhouette, enhancing its polished appearance. This PRADA midi dress is ideal for semi-formal events, brunches, or day events where you want to make a subtle yet striking impression. Pair it with delicate jewelry to highlight the intricate embroidery, and choose between heels for a more formal look or flat sandals for a relaxed, yet elegant ensemble. The Three Fourth Sleeve Schiffli Shirt Midi Dress is more than just a garment; it's a piece of wearable art that showcases PRADA's mastery in combining traditional craftsmanship with contemporary design."
    },
    rating: 4.9,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Isabella", rating: 5.0, time: "10 April", comment: "The Schiffli embroidery is absolutely stunning. Worth every penny!" },
        { user: "Ava", rating: 5.0, time: "2 May", comment: "Perfect for summer events. The fabric is light and the design is so elegant." }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A.",
        AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
    }
},

{
    id: 'mididress-3',
    name: "Cotton Button Down Dress - Blue",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 89.99,
    category: "mididress",
    colors: ["#9FB1E1"], 
    product_details: {
        list: ["Full button-down front", "Collared neckline", "Belted waist", "Side pockets"],
        Material: "100% Cotton",
        Pattern: "Solid",
        Occasion: "Casual, Workwear",
        Stretchable: "Slightly",
        CareInstructions: "Machine wash cold. Tumble dry low. Iron if needed.",
    },
    images: {
        "#9FB1E1": [
            "./images/midi-dress/id-3/first.jpg",
            "./images/midi-dress/id-3/second.jpg",
            "./images/midi-dress/id-3/third.jpg",
            "./images/midi-dress/id-3/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Step into effortless style with this Cotton Button Down Dress in a serene blue shade (#9FB1E1) from PRADA. This versatile midi dress embodies the perfect blend of casual comfort and refined elegance, making it an essential addition to any wardrobe. The full button-down front offers both style and functionality, allowing for easy wear and the option to adjust the neckline to your preference. The collared neckline adds a touch of sophistication, elevating this dress from a simple casual piece to a potential office staple. The belted waist is a standout feature, allowing you to cinch and define your silhouette for a flattering fit. Side pockets add a practical element, perfect for keeping small essentials close at hand. Crafted from 100% cotton, this dress promises breathability and comfort, ideal for all-day wear in various settings. The solid blue color is both calming and versatile, easy to accessorize for different looks. Whether you're heading to the office, running errands, or meeting friends for lunch, this PRADA Cotton Button Down Dress adapts effortlessly to your needs. The slight stretch in the fabric ensures comfort and ease of movement, while the midi length offers a modern, sophisticated silhouette. Pair it with sneakers for a casual day out, or dress it up with heels and statement jewelry for a more polished look. This dress isn't just a garment; it's a testament to PRADA's commitment to creating pieces that seamlessly blend functionality with high fashion, ensuring you look and feel your best in any situation."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Mia", rating: 5.0, time: "7 April", comment: "The perfect work dress. The pockets are a game-changer!" },
        { user: "Charlotte", rating: 4.5, time: "25 April", comment: "Love the color and the fit. Wish it came in more colors." }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A.",
        AddressOfManufacturer: "Via Antonio Fogazzaro 28, 20135 Milano, Italy"
    }
},

{
    id: 'mididress-4',
    name: "Pink Puff Sleeves Lace Insert Frill Hem Bodycon Midi Dress",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 69.99,
    category: "mididress",
    colors: ["#8F0F36"], 
    product_details: {
        list: ["Puff sleeves", "Lace inserts", "Frill hem", "Bodycon fit"],
        Material: "95% Polyester, 5% Elastane",
        Pattern: "Solid with lace details",
        Occasion: "Party, Evening wear",
        Stretchable: "Yes",
        CareInstructions: "Hand wash cold. Do not bleach. Hang to dry.",
    },
    images: {
        "#8F0F36": [
            "./images/midi-dress/id-4/first.jpg",
            "./images/midi-dress/id-4/second.jpg",
            "./images/midi-dress/id-4/third.jpg",
            "./images/midi-dress/id-4/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Make a statement with this Pink Puff Sleeves Lace Insert Frill Hem Bodycon Midi Dress from ONLY. This dress is a perfect blend of romantic and contemporary styles, designed to turn heads at any event. The rich pink color (#8F0F36) exudes femininity and confidence, making it an ideal choice for those who love to stand out. The puff sleeves add a touch of drama and vintage charm, while the lace inserts introduce an element of delicate sophistication. The frill hem provides a playful finish to the sleek bodycon silhouette, creating a beautiful contrast that flatters the figure. Crafted from a blend of 95% Polyester and 5% Elastane, this dress offers both comfort and a figure-hugging fit. The stretchable fabric ensures ease of movement, perfect for a night of dancing or a special dinner. The solid pattern with lace details strikes a balance between simplicity and intricacy, allowing for versatile styling options. This ONLY midi dress is particularly suited for party and evening wear, where its elegant yet eye-catching design will shine. The bodycon fit accentuates your curves, while the midi length maintains a sense of sophistication. Pair it with high heels and minimal jewelry to let the dress take center stage, or add a statement necklace to complement the neckline. For cooler evenings, a cropped jacket or wrap can be added without detracting from the dress's beautiful design. This Pink Puff Sleeves Lace Insert Frill Hem Bodycon Midi Dress isn't just a garment; it's a celebration of feminine style, perfect for those who appreciate a blend of classic and modern fashion elements."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 5.0, time: "5 April", comment: "Wore this to a wedding and got so many compliments. The fit is perfect!" },
        { user: "Zoe", rating: 4.5, time: "20 April", comment: "Love the lace details and the color. Runs a bit small, so size up." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "Bangladesh",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},

{
    id: 'mididress-5',
    name: "Women Black Wrap Neck Gathered Waist A-Line Midi Dress With Belt",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 39.99,
    category: "mididress",
    colors: ["#000000"], 
    product_details: {
        list: ["Wrap neckline", "Gathered waist", "A-line silhouette", "Belted design"],
        Material: "100% Polyester",
        Pattern: "Solid",
        Occasion: "Formal, Office wear, Evening events",
        Stretchable: "Slightly",
        CareInstructions: "Machine wash cold. Gentle cycle. Do not bleach. Hang to dry.",
    },
    images: {
        "#000000": [
            "./images/midi-dress/id-5/first.jpg",
            "./images/midi-dress/id-5/second.jpg",
            "./images/midi-dress/id-5/third.jpg",
            "./images/midi-dress/id-5/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Embrace timeless elegance with this Women Black Wrap Neck Gathered Waist A-Line Midi Dress With Belt from ONLY. This sophisticated piece is a versatile addition to any wardrobe, perfect for those seeking a dress that transitions seamlessly from day to night. The classic black color (#000000) ensures this dress will never go out of style, while offering endless accessorizing possibilities. The wrap neckline adds a touch of sophistication and femininity, creating a flattering V-shape that elongates the neck. The gathered waist cinches in at the smallest part of your torso, creating a beautiful silhouette that's further enhanced by the included belt. The A-line silhouette skims over the hips and thighs, providing a flattering fit for all body types. Crafted from 100% Polyester, this dress offers durability and ease of care, perfect for busy lifestyles. The fabric has a slight stretch, ensuring comfort throughout the day or night. This ONLY midi dress is particularly suited for formal occasions, office wear, and evening events, where its elegant design will ensure you look polished and put-together. The solid black color serves as a perfect canvas for accessorizing - pair it with colorful statement jewelry for a pop of color, or keep it sleek with minimalist silver or gold pieces. For office wear, add a blazer for a professional touch. For evening events, swap the blazer for a shawl or statement clutch. The versatility of this dress makes it a true wardrobe staple. This Women Black Wrap Neck Gathered Waist A-Line Midi Dress With Belt isn't just a garment; it's a testament to the enduring appeal of classic design, perfect for those who appreciate timeless style with a modern twist."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Olivia", rating: 5.0, time: "2 April", comment: "My new go-to dress for work. Flattering and professional." },
        { user: "Emma", rating: 5.0, time: "15 April", comment: "Love the versatility. Dressed it up for a wedding and down for office." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "Bangladesh",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},

{
    id: 'mididress-6',
    name: "Emily In Paris Pink Tiered Summer Dress",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 29.99,
    category: "mididress",
    colors: ["#F53483"], 
    product_details: {
        list: ["Tiered design", "Puff sleeves", "V-neckline", "Midi length"],
        Material: "100% Cotton",
        Pattern: "Solid",
        Occasion: "Casual, Summer events",
        Stretchable: "No",
        CareInstructions: "Machine wash cold. Tumble dry low. Iron on low heat if needed.",
    },
    images: {
        "#F53483": [
            "./images/midi-dress/id-6/first.jpg",
            "./images/midi-dress/id-6/second.jpg",
            "./images/midi-dress/id-6/third.jpg",
            "./images/midi-dress/id-6/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Channel your inner Emily Cooper with this Emily In Paris Pink Tiered Summer Dress from ONLY. Inspired by the hit Netflix series, this dress embodies the romantic and whimsical style of Paris, perfect for those who love to make a statement with their fashion choices. The vibrant pink color (#F53483) radiates joy and femininity, making it an ideal choice for summer events or anytime you want to add a pop of color to your day. The tiered design adds movement and dimension to the dress, creating a playful and flirty silhouette that's perfect for twirling through city streets or garden parties. The puff sleeves add a touch of vintage charm and romanticism, while the V-neckline flatters the décolletage and elongates the neck. The midi length strikes the perfect balance between modesty and style, making this dress suitable for a variety of occasions. Crafted from 100% cotton, this dress ensures breathability and comfort, essential for warm summer days. The non-stretchable fabric maintains the structured tiered silhouette, enhancing the dress's design elements. This ONLY midi dress is particularly suited for casual outings and summer events, where its cheerful color and breezy design will shine. Pair it with espadrille wedges and a straw bag for a perfect daytime look, or dress it up with strappy heels and statement earrings for an evening out. For a true Emily in Paris vibe, add a beret and a cropped cardigan for cooler evenings. This Emily In Paris Pink Tiered Summer Dress isn't just a garment; it's a celebration of Parisian-inspired style, perfect for those who love to infuse their wardrobe with romance, color, and a touch of on-screen magic."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Claire", rating: 5.0, time: "8 April", comment: "Just like Emily would wear! So fun and flirty." },
        { user: "Lily", rating: 4.5, time: "22 April", comment: "The color is gorgeous. Perfect for summer parties." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "India",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},

{
    id: 'mididress-7',
    name: "Over Lap Neck Green Dress",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 39.99,
    category: "mididress",
    colors: ["#C0D184"], 
    product_details: {
        list: ["Overlap neckline", "Wrap style", "Tie waist", "Flowy skirt"],
        Material: "95% Viscose, 5% Elastane",
        Pattern: "Solid",
        Occasion: "Casual, Day events",
        Stretchable: "Yes",
        CareInstructions: "Machine wash cold. Do not tumble dry. Hang to dry.",
    },
    images: {
        "#C0D184": [
            "./images/midi-dress/id-7/first.jpg",
            "./images/midi-dress/id-7/second.jpg",
            "./images/midi-dress/id-7/third.jpg",
            "./images/midi-dress/id-7/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Embrace effortless elegance with this Over Lap Neck Green Dress from ONLY. This versatile piece combines comfort with style, making it perfect for various casual occasions and day events. The soft green color (#C0D184) evokes a sense of freshness and nature, ideal for spring and summer wardrobes. The overlap neckline adds a touch of sophistication and creates a flattering V-shape that elongates the neck and draws attention to the décolletage. The wrap style of the dress is universally flattering, cinching at the waist to create an hourglass silhouette. The tie waist allows for customizable fit and adds a stylish detail to the overall design. The flowy skirt provides comfortable movement and a feminine silhouette, perfect for both relaxed and more dressed-up looks. Crafted from a blend of 95% Viscose and 5% Elastane, this dress offers a soft, lightweight feel with just the right amount of stretch for all-day comfort. The fabric drapes beautifully, enhancing the flowing design of the dress. This ONLY midi dress is particularly suited for casual outings, brunches, or day events where you want to look put-together without sacrificing comfort. Pair it with flat sandals and a denim jacket for a casual day out, or dress it up with wedges and statement jewelry for a garden party or outdoor event. The versatile green color allows for various accessorizing options - try gold jewelry for a warm, earthy look, or silver for a cool, fresh vibe. This Over Lap Neck Green Dress isn't just a garment; it's a versatile piece that embodies ONLY's commitment to creating fashionable, comfortable clothing that adapts to your lifestyle."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Ava", rating: 5.0, time: "12 April", comment: "Love the color and the wrap style. So flattering!" },
        { user: "Mia", rating: 4.5, time: "28 April", comment: "Perfect for my summer events. The fabric is so soft." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "India",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},

{
    id: 'mididress-8',
    name: "Rust Textured V Neck Bodycon Midi Sweater Dress",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 89.99,
    category: "mididress",
    colors: ["#A13C24"], 
    product_details: {
        list: ["Textured knit", "V-neckline", "Bodycon fit", "Midi length"],
        Material: "70% Acrylic, 30% Polyester",
        Pattern: "Textured solid",
        Occasion: "Casual, Fall/Winter events",
        Stretchable: "Yes",
        CareInstructions: "Hand wash cold. Lay flat to dry. Do not iron.",
    },
    images: {
        "#A13C24": [
            "./images/midi-dress/id-8/first.jpg",
            "./images/midi-dress/id-8/second.jpg",
            "./images/midi-dress/id-8/third.jpg",
            "./images/midi-dress/id-8/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Embrace the cozy elegance of fall with this Rust Textured V Neck Bodycon Midi Sweater Dress from ONLY. This stunning piece combines the comfort of a sweater with the sleek silhouette of a bodycon dress, making it a perfect choice for cooler seasons. The rich rust color (#A13C24) evokes the warm hues of autumn, adding a touch of sophistication to your cold-weather wardrobe. The textured knit adds depth and interest to the solid color, creating a visually appealing and tactile experience. The V-neckline is both flattering and practical, allowing for layering with collared shirts or scarves for added warmth and style versatility. The bodycon fit hugs your curves in all the right places, creating a sleek and feminine silhouette that's perfect for showcasing your figure. The midi length offers a modern and sophisticated look, hitting at just the right spot to elongate your legs. Crafted from a blend of 70% Acrylic and 30% Polyester, this dress offers warmth and comfort without sacrificing style. The stretchable fabric ensures a comfortable fit that moves with you throughout the day. This ONLY midi sweater dress is particularly suited for casual outings and fall/winter events where you want to look put-together while staying cozy. Pair it with ankle boots and a leather jacket for a chic daytime look, or dress it up with heels and statement jewelry for an evening out. Layer it with a long cardigan or coat for extra warmth on colder days. The versatile rust color complements a variety of skin tones and pairs well with both gold and silver accessories. This Rust Textured V Neck Bodycon Midi Sweater Dress isn't just a garment; it's a seasonal staple that combines comfort, style, and versatility, perfect for those who appreciate fashion that adapts to the changing seasons."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emma", rating: 5.0, time: "5 April", comment: "Perfect for fall! So cozy and flattering." },
        { user: "Olivia", rating: 4.5, time: "20 April", comment: "Love the texture and color. Fits like a glove." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "China",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},

{
    id: 'mididress-9',
    name: "Women Stunning Navy Blue Solid Sun Dress",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 39.99,
    category: "mididress",
    colors: ["#4B668F"], 
    product_details: {
        list: ["Spaghetti straps", "Sweetheart neckline", "Fitted bodice", "Flared skirt"],
        Material: "100% Cotton",
        Pattern: "Solid",
        Occasion: "Casual, Beach wear, Summer events",
        Stretchable: "Slightly",
        CareInstructions: "Machine wash cold. Tumble dry low. Iron on low heat if needed.",
    },
    images: {
        "#4B668F": [
            "./images/midi-dress/id-9/first.jpg",
            "./images/midi-dress/id-9/second.jpg",
            "./images/midi-dress/id-9/third.jpg",
            "./images/midi-dress/id-9/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Step into summer elegance with this Women Stunning Navy Blue Solid Sun Dress from ONLY. This charming piece embodies the essence of warm weather fashion, perfect for those seeking a versatile and stylish addition to their summer wardrobe. The deep navy blue color (#4B668F) offers a sophisticated alternative to traditional summer pastels, making it stand out at any beach gathering or outdoor event. The spaghetti straps provide a delicate and feminine touch, perfect for showcasing sun-kissed shoulders. The sweetheart neckline adds a romantic flair and flatters the bust area, creating a beautiful silhouette. The fitted bodice accentuates the waist, while the flared skirt adds movement and a playful touch to the overall design. This combination creates a classic silhouette that's flattering on various body types. Crafted from 100% cotton, this dress ensures breathability and comfort, essential for hot summer days. The fabric has a slight stretch, allowing for ease of movement and a comfortable fit. This ONLY midi sun dress is particularly suited for casual outings, beach wear, and summer events where you want to look effortlessly chic. Pair it with flat sandals and a wide-brimmed hat for a day at the beach, or dress it up with wedges and statement earrings for a summer dinner party. The versatile navy color allows for various accessorizing options - try gold jewelry for a warm, sun-kissed look, or white accessories for a crisp, nautical vibe. For cooler evenings, throw on a light cardigan or denim jacket to extend its wearability. This Women Stunning Navy Blue Solid Sun Dress isn't just a garment; it's a summer essential that combines timeless style with modern comfort, perfect for those who appreciate versatile fashion that adapts to various summer occasions."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Isabella", rating: 5.0, time: "10 April", comment: "My new favorite summer dress! The fit is perfect." },
        { user: "Ava", rating: 5.0, time: "25 April", comment: "Love the navy color. It's so versatile and flattering." }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "India",
        soldBy: "",
        countryOfOrigin: "",
        NameOfManufacturer: "",
        AddressOfManufacturer: ""
    }
},

]

// // off-shoulders:
export const offshoulder = [
    {
        id: 'offshoulder-1',
        name: "Women Half Sleeve Off Shoulder Green Top",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 49.99,
        category: "OffShoulder",
        colors: ["#E5F3C0"], 
        product_details: {
            list: ["Half Sleeve", "Off Shoulder"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine Wash",
        },
        images: {
            "#E5F3C0": [
                "./images/off-shoulders/id-1/first.jpg",
                "./images/off-shoulders/id-1/second.jpg",
                "./images/off-shoulders/id-1/third.jpg",
                "./images/off-shoulders/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This trendy off-shoulder top is perfect for a casual day out. It is made of high-quality cotton and is stretchable for a comfortable fit. The solid pattern and half sleeves add to its charm. It is machine washable for easy care.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "20 March", comment: "Great fit and color!" },
            { user: "Olivia", rating: 5.0, time: "22 March", comment: "Love the off-shoulder style!" }
        ],
        vendor_details: {
            soldBy: "PRADA",
            countryOfOrigin: "India",
            NameOfManufacturer: "PRADA",
            AddressOfManufacturer: "123, ABC Street, XYZ City"
        }
    },
    {
        id: 'off-shoulders-2',
        name: "Women Off Shoulder Neck Regular Fit Solid Top",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 29.99,
        category: "Off-Shoulders",
        colors: ["#FFFFFF"], 
        product_details: {
            list: ["Off Shoulder", "Regular Fit"],
            Material: "Polyester",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Hand Wash",
        },
        images: {
            "#FFFFFF": [
                "./images/off-shoulders/id-2/first.jpg",
                "./images/off-shoulders/id-2/second.jpg",
                "./images/off-shoulders/id-2/third.jpg",
                "./images/off-shoulders/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This regular fit off-shoulder top is a must-have for your casual wardrobe. It is made of high-quality polyester and is not stretchable. The solid pattern and off-shoulder neck add to its charm. It is recommended to hand wash this top for long-lasting use.",
        },
        rating: 4.0,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "20 March", comment: "Great fit and color!" },
            { user: "Olivia", rating: 5.0, time: "22 March", comment: "Love the off-shoulder style!" }
        ],
        vendor_details: {
            soldBy: "PRADA",
            countryOfOrigin: "India",
            NameOfManufacturer: "PRADA",
            AddressOfManufacturer: "123, ABC Street, XYZ City"
        }
    },
    {
        id: 'off-shoulders-3',
        name: "Maxton Off-Shoulder Black Top",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 19.99,
        category: "Off-Shoulders",
        colors: ["#000000", "#FFFFFF"], 
        product_details: {
            list: ["Off Shoulder"],
            Material: "Cotton",
            Pattern: "Printed",
            Occasion: "Party",
            Stretchable: "Yes",
            CareInstructions: "Dry Clean",
        },
        images: {
            "#000000": [
                "./images/off-shoulders/id-3/black/first.jpg",
                "./images/off-shoulders/id-3/black/second.jpg",
                "./images/off-shoulders/id-3/black/third.jpg",
                "./images/off-shoulders/id-3/black/fourth.jpg"
            ],

            "#FFFFFF": [
                "./images/off-shoulders/id-3/white/first.jpg",
                "./images/off-shoulders/id-3/white/second.jpg",
                "./images/off-shoulders/id-3/white/third.jpg",
                "./images/off-shoulders/id-3/white/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This black off-shoulder top is perfect for a party. It is made of high-quality cotton and is stretchable for a comfortable fit. The printed pattern and off-shoulder style add to its charm. It is recommended to dry clean this top for long-lasting use.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "20 March", comment: "Great fit and color!" },
            { user: "Olivia", rating: 5.0, time: "22 March", comment: "Love the off-shoulder style!" }
        ],
        vendor_details: {
            soldBy: "PRADA",
            countryOfOrigin: "India",
            NameOfManufacturer: "PRADA",
            AddressOfManufacturer: "123, ABC Street, XYZ City"
        }
    },
    {
        id: 'off-shoulders-4',
        name: "Women Printed Yellow Top",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 19.99,
        category: "Off-Shoulders",
        colors: ["#EEC87C"], 
        product_details: {
            list: ["Printed"],
            Material: "Cotton",
            Pattern: "Printed",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine Wash",
        },
        images: {
            "#EEC87C": [
                "./images/off-shoulders/id-4/first.jpg",
                "./images/off-shoulders/id-4/second.jpg",
                "./images/off-shoulders/id-4/third.jpg",
                "./images/off-shoulders/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This printed yellow top is perfect for a casual day out. It is made of high-quality cotton and is stretchable for a comfortable fit. The printed pattern adds to its charm. It is machine washable for easy care.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "20 March", comment: "Great fit and color!" },
            { user: "Olivia", rating: 5.0, time: "22 March", comment: "Love the printed pattern!" }
        ],
        vendor_details: {
            soldBy: "ONLY",
            countryOfOrigin: "India",
            NameOfManufacturer: "ONLY",
            AddressOfManufacturer: "123, ABC Street, XYZ City"
        }
    },
    {
        id: 'off-shoulders-5',
        name: "One Shoulder Frill Fitted Black Top",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 59.99,
        category: "Off-Shoulders",
        colors: ["#000000"], 
        product_details: {
            list: ["One Shoulder", "Fitted"],
            Material: "Polyester",
            Pattern: "Solid",
            Occasion: "Party",
            Stretchable: "No",
            CareInstructions: "Hand Wash",
        },
        images: {
            "#000000": [
                "./images/off-shoulders/id-5/first.jpg",
                "./images/off-shoulders/id-5/second.jpg",
                "./images/off-shoulders/id-5/third.jpg",
                "./images/off-shoulders/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This one shoulder frill fitted black top is perfect for a party. It is made of high-quality polyester and is not stretchable. The frill and one shoulder style add to its charm. It is recommended to hand wash this top for long-lasting use.",
        },
        rating: 4.0,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "20 March", comment: "Great fit and color!" },
            { user: "Olivia", rating: 5.0, time: "22 March", comment: "Love the one shoulder style!" }
        ],
        vendor_details: {
            soldBy: "ONLY",
            countryOfOrigin: "India",
            NameOfManufacturer: "ONLY",
            AddressOfManufacturer: "123, ABC Street, XYZ City"
        }
    },
    {
        id: 'off-shoulders-6',
        name: "Women Western Wear Tops - Green",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 79.99,
        category: "Off-Shoulders",
        colors: ["#FCFBE5"], 
        product_details: {
            list: ["Western Wear"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine Wash",
        },
        images: {
            "#FCFBE5": [
                "./images/off-shoulders/id-6/first.jpg",
                "./images/off-shoulders/id-6/second.jpg",
                "./images/off-shoulders/id-6/third.jpg",
                "./images/off-shoulders/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This green western wear top is perfect for a casual day out. It is made of high-quality cotton and is stretchable for a comfortable fit. The solid pattern and western wear style add to its charm. It is machine washable for easy care.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "20 March", comment: "Great fit and color!" },
            { user: "Olivia", rating: 5.0, time: "22 March", comment: "Love the western wear style!" }
        ],
        vendor_details: {
            soldBy: "ONLY",
            countryOfOrigin: "India",
            NameOfManufacturer: "ONLY",
            AddressOfManufacturer: "123, ABC Street, XYZ City"
        }
    },
    {
        id: 'off-shoulders-7',
        name: "Blue Off-shoulder Top",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 59.99,
        category: "Off-Shoulders",
        colors: ["#ADE5E8"], 
        product_details: {
            list: ["Off Shoulder"],
            Material: "Polyester",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Hand Wash",
        },
        images: {
            "#ADE5E8": [
                "./images/off-shoulders/id-7/first.jpg",
                "./images/off-shoulders/id-7/second.jpg",
                "./images/off-shoulders/id-7/third.jpg",
                "./images/off-shoulders/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This blue off-shoulder top is perfect for a casual day out. It is made of high-quality polyester and is not stretchable. The solid pattern and off-shoulder style add to its charm. It is recommended to hand wash this top for long-lasting use.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "20 March", comment: "Great fit and color!" },
            { user: "Olivia", rating: 5.0, time: "22 March", comment: "Love the off-shoulder style!" }
        ],
        vendor_details: {
            soldBy: "PRADA",
            countryOfOrigin: "India",
            NameOfManufacturer: "PRADA",
            AddressOfManufacturer: "123, ABC Street, XYZ City"
        }
    },
    {
        id: 'off-shoulders-8',
        name: "Women Solid Casual Top",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 69.99,
        category: "Off-Shoulders",
        colors: ["#5985B2"], 
        product_details: {
            list: ["Solid"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine Wash",
        },
        images: {
            "#5985B2": [
                "./images/off-shoulders/id-8/first.jpg",
                "./images/off-shoulders/id-8/second.jpg",
                "./images/off-shoulders/id-8/third.jpg",
                "./images/off-shoulders/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This solid casual top is perfect for a casual day out. It is made of high-quality cotton and is stretchable for a comfortable fit. The solid pattern adds to its charm. It is machine washable for easy care.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "20 March", comment: "Great fit and color!" },
            { user: "Olivia", rating: 5.0, time: "22 March", comment: "Love the solid pattern!" }
        ],
        vendor_details: {
            soldBy: "ONLY",
            countryOfOrigin: "India",
            NameOfManufacturer: "ONLY",
            AddressOfManufacturer: "123, ABC Street, XYZ City"
        }
    },
    {
        id: 'off-shoulders-9',
        name: "Women Solid Casual Wear Green Top",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 89.99,
        category: "Off-Shoulders",
        colors: ["#01A993"], 
        product_details: {
            list: ["Solid"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine Wash",
        },
        images: {
            "#01A993": [
                "./images/off-shoulders/id-9/first.jpg",
                "./images/off-shoulders/id-9/second.jpg",
                "./images/off-shoulders/id-9/third.jpg",
                "./images/off-shoulders/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This solid casual wear green top is perfect for a casual day out. It is made of high-quality cotton and is stretchable for a comfortable fit. The solid pattern and green color add to its charm. It is machine washable for easy care.",
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "20 March", comment: "Great fit and color!" },
            { user: "Olivia", rating: 5.0, time: "22 March", comment: "Love the green color!" }
        ],
        vendor_details: {
            soldBy: "ONLY",
            countryOfOrigin: "India",
            NameOfManufacturer: "ONLY",
            AddressOfManufacturer: "123, ABC Street, XYZ City"
        }
    },
    ]





    // shorts:
    export const shorts = [
        {
        id: 'shorts-1',
        name: "Original Solids: Midnight Black Lounge Shorts for Womens",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 59.99,
        category: "Shorts",
        colors: ["#000000"], 
        product_details: {
            list: ["Midnight black color", "Lounge shorts for women", "Made from high-quality fabric"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#000000": [
                "./images/shorts/id-1/first.jpg",
                "./images/shorts/id-1/second.jpg",
                "./images/shorts/id-1/third.jpg",
                "./images/shorts/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Experience the ultimate comfort and style with our Original Solids Midnight Black Lounge Shorts for Women. Crafted from high-quality cotton, these shorts are designed to provide a relaxed fit and a soft touch against your skin. The midnight black color is perfect for casual outings or lounging around. Pair them with your favorite tops and shoes for a chic look. The stretchable material ensures a comfortable fit, and the easy care instructions make them a practical choice for your wardrobe."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 4.8, time: "22 April", comment: "Love the color and the fit is perfect!" },
            { user: "Rachel", rating: 4.2, time: "10 May", comment: "Great for casual wear, but could be a bit longer." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada Manufacturing",
            AddressOfManufacturer: "Milan, Italy"
        }
    },
    {
        id: 'shorts-2',
        name: "Women Yellow Stretchable Mid-Rise Frayed Denim Shorts",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 39.99,
        category: "Shorts",
        colors: ["#F5D886", "#ABA5B3", "#479573"], // yellow, purple, green 
        product_details: {
            list: ["Yellow, purple, and green colors", "Stretchable mid-rise denim shorts", "Frayed hem for a trendy look"],
            Material: "Denim",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#F5D886": [
                "./images/shorts/id-2/yellow/first.jpg",
                "./images/shorts/id-2/yellow/second.jpg",
                "./images/shorts/id-2/yellow/third.jpg",
                "./images/shorts/id-2/yellow/fourth.jpg"
            ],

            "#ABA5B3": [
                "./images/shorts/id-2/purple/first.jpg",
                "./images/shorts/id-2/purple/second.jpg",
                "./images/shorts/id-2/purple/third.jpg",
                "./images/shorts/id-2/purple/fourth.jpg"
            ],

            "##479573": [
                "./images/shorts/id-2/green/first.jpg",
                "./images/shorts/id-2/green/second.jpg",
                "./images/shorts/id-2/green/third.jpg",
                "./images/shorts/id-2/green/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Add a pop of color to your wardrobe with our Women Yellow Stretchable Mid-Rise Frayed Denim Shorts. These shorts are designed to provide a comfortable fit with their stretchable denim material. The mid-rise design and frayed hem give them a trendy look that's perfect for casual outings. The yellow, purple, and green colors are sure to brighten up your day. Pair them with your favorite tops and shoes for a stylish look. The easy care instructions make them a practical choice for your wardrobe."
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 4.3, time: "22 April", comment: "Love the colors and the fit is great!" },
            { user: "Rachel", rating: 4.1, time: "10 May", comment: "Great for casual wear, but could be a bit longer." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada Manufacturing",
            AddressOfManufacturer: "Milan, Italy"
        }
    },
    {
        id: 'shorts-3',
        name: "Black Faux Leather Shorts & Belt (Set of 2)",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 29.99,
        category: "Shorts",
        colors: ["#000000"],
        product_details: {
            list: ["Black faux leather shorts", "Includes a matching belt", "Set of 2"],
            Material: "Faux Leather",
            Pattern: "Solid",
            Occasion: "Formal",
            Stretchable: "No",
            CareInstructions: "Spot clean with a damp cloth"
        },
        images: {
            "#000000": [
                "./images/shorts/id-3/first.jpg",
                "./images/shorts/id-3/second.jpg",
                "./images/shorts/id-3/third.jpg",
                "./images/shorts/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Elevate your style with our Black Faux Leather Shorts & Belt (Set of 2). This set includes a pair of black faux leather shorts and a matching belt, perfect for formal occasions. The faux leather material gives them a luxurious look and feel. The solid black color is versatile and can be paired with a variety of tops and shoes. The set of 2 makes it a great value for the price. The spot clean care instructions make them easy to maintain."
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 4.2, time: "22 April", comment: "Love the look and the belt is a great addition!" },
            { user: "Rachel", rating: 4.0, time: "10 May", comment: "Great for formal events, but could be a bit more comfortable." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada Manufacturing",
            AddressOfManufacturer: "Milan, Italy"
        }
    },
    
    {
        id: 'shorts-4',
        name: "Womens Blue Relaxed Fit Mid Rise Highly Distressed Regular Denim Shorts",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 19.99,
        category: "Shorts",
        colors: ["#95BDE5"],
        product_details: {
            list: ["Blue color", "Relaxed fit mid-rise denim shorts", "Highly distressed for a trendy look"],
            Material: "Denim",
            Pattern: "Distressed",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#95BDE5": [
                "./images/shorts/id-4/first.jpg",
                "./images/shorts/id-4/second.jpg",
                "./images/shorts/id-4/third.jpg",
                "./images/shorts/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Get ready to turn heads with our Womens Blue Relaxed Fit Mid Rise Highly Distressed Regular Denim Shorts. These shorts are designed to provide a relaxed fit and a trendy look with their highly distressed denim material. The blue color is perfect for casual outings or lounging around. The mid-rise design and stretchable material ensure a comfortable fit. Pair them with your favorite tops and shoes for a stylish look. The easy care instructions make them a practical choice for your wardrobe."
        },
        rating: 4.2,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 4.1, time: "22 April", comment: "Love the color and the fit is great!" },
            { user: "Rachel", rating: 4.0, time: "10 May", comment: "Great for casual wear, but could be a bit more comfortable." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "China",
            NameOfManufacturer: "Cider Manufacturing",
            AddressOfManufacturer: "Shanghai, China"
        }
    },
    
    {
        id: 'shorts-5',
        name: "White Linen Paper Bag Shorts",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 35.99,
        category: "Shorts",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["White linen paper bag shorts", "Perfect for warm weather", "Breathable material"],
            Material: "Linen",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "No",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#FFFFFF": [
                "./images/shorts/id-5/first.jpg",
                "./images/shorts/id-5/second.jpg",
                "./images/shorts/id-5/third.jpg",
                "./images/shorts/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Stay cool and stylish with our White Linen Paper Bag Shorts. These shorts are made from breathable linen material, perfect for warm weather. The white color is crisp and clean, and the paper bag design adds a touch of elegance. Pair them with your favorite tops and sandals for a chic look. The easy care instructions make them a practical choice for your wardrobe."
        },
        rating: 4.1,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 4.0, time: "22 April", comment: "Love the color and the fit is great!" },
            { user: "Rachel", rating: 3.9, time: "10 May", comment: "Great for warm weather, but could be a bit more comfortable." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "China",
            NameOfManufacturer: "Cider Manufacturing",
            AddressOfManufacturer: "Shanghai, China"
        }
    },
    
    {
        id: 'shorts-6',
        name: "Rx72 Womens Super Combed Cotton Fabric Relaxed Fit Sleep Shorts - Black",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 15.99,
        category: "Shorts",
        colors: ["#000000", "#D4848D", "#201E39"], // black, pink, blue
        product_details: {
            list: ["Black, pink, and blue colors", "Super combed cotton fabric", "Relaxed fit sleep shorts"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Sleep",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#000000": [
                "./images/shorts/id-6/black/first.jpg",
                "./images/shorts/id-6/black/second.jpg",
                "./images/shorts/id-6/black/third.jpg",
                "./images/shorts/id-6/black/fourth.jpg"
            ],

            "#D4848D": [
                "./images/shorts/id-6/pink/first.jpg",
                "./images/shorts/id-6/pink/second.jpg",
                "./images/shorts/id-6/pink/third.jpg",
                "./images/shorts/id-6/pink/fourth.jpg"
            ],
            "#201E39": [
                "./images/shorts/id-6/blue/first.jpg",
                "./images/shorts/id-6/blue/second.jpg",
                "./images/shorts/id-6/blue/third.jpg",
                "./images/shorts/id-6/blue/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Get a good night's sleep with our Rx72 Womens Super Combed Cotton Fabric Relaxed Fit Sleep Shorts. These shorts are designed to provide a relaxed fit and a soft touch against your skin with their super combed cotton fabric. The black, pink, and blue colors are perfect for lounging around. The stretchable material ensures a comfortable fit, and the easy care instructions make them a practical choice for your wardrobe."
        },
        rating: 4.0,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 3.9, time: "22 April", comment: "Love the colors and the fit is great!" },
            { user: "Rachel", rating: 3.8, time: "10 May", comment: "Great for sleep, but could be a bit more comfortable." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "China",
            NameOfManufacturer: "Cider Manufacturing",
            AddressOfManufacturer: "Shanghai, China"
        }
    },
    
    {
        id: 'shorts-7',
        name: "Women Solid Mustard Mid Rise Shorts",
        brand: "BELENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 37.99,
        category: "Shorts",
        colors: ["#FADB83"],
        product_details: {
            list: ["Mustard color", "Mid-rise shorts", "Solid pattern"],
            Material: "Cotton",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#FADB83": [
                "./images/shorts/id-7/first.jpg",
                "./images/shorts/id-7/second.jpg",
                "./images/shorts/id-7/third.jpg",
                "./images/shorts/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Add a touch of elegance to your wardrobe with our Women Solid Mustard Mid Rise Shorts. These shorts are designed to provide a comfortable fit with their stretchable cotton material. The mustard color is perfect for casual outings or lounging around. The mid-rise design and solid pattern give them a stylish look. Pair them with your favorite tops and shoes for a chic look. The easy care instructions make them a practical choice for your wardrobe."
        },
        rating: 4.0,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 3.9, time: "22 April", comment: "Love the color and the fit is great!" },
            { user: "Rachel", rating: 3.8, time: "10 May", comment: "Great for casual wear, but could be a bit more comfortable." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "Spain",
            NameOfManufacturer: "Belenciaga Manufacturing",
            AddressOfManufacturer: "Barcelona, Spain"
        }
    },
    
    {
        id: 'shorts-8',
        name: "Women Navy Blue Mid-Rise Above Knee Regular Fit Denim Shorts",
        brand: "BELENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 85.99,
        category: "Shorts",
        colors: ["#3B4869"],
        product_details: {
            list: ["Navy blue color", "Mid-rise above knee denim shorts", "Regular fit"],
            Material: "Denim",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#3B4869": [
                "./images/shorts/id-8/first.jpg",
                "./images/shorts/id-8/second.jpg",
                "./images/shorts/id-8/third.jpg",
                "./images/shorts/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Stay stylish and comfortable with our Women Navy Blue Mid-Rise Above Knee Regular Fit Denim Shorts. These shorts are designed to provide a regular fit and a stylish look with their navy blue denim material. The mid-rise design and above knee length make them perfect for casual outings or lounging around. The stretchable material ensures a comfortable fit, and the easy care instructions make them a practical choice for your wardrobe."
        },
        rating: 3.9,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 3.8, time: "22 April", comment: "Love the color and the fit is great!" },
            { user: "Rachel", rating: 3.7, time: "10 May", comment: "Great for casual wear, but could be a bit more comfortable." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "Spain",
            NameOfManufacturer: "Belenciaga Manufacturing",
            AddressOfManufacturer: "Barcelona, Spain"
        }
    },
    
    {
        id: 'shorts-9',
        name: "Women Grey Super High Rise Distressed Denim Shorts",
        brand: "BELENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 56.99,
        category: "Shorts",
        colors: ["#ADB3A9"],
        product_details: {
            list: ["Grey color", "Super high rise distressed denim shorts", "Trendy look"],
            Material: "Denim",
            Pattern: "Distressed",
            Occasion: "Casual",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#ADB3A9": [
                "./images/shorts/id-9/first.jpg",
                "./images/shorts/id-9/second.jpg",
                "./images/shorts/id-9/third.jpg",
                "./images/shorts/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Make a statement with our Women Grey Super High Rise Distressed Denim Shorts. These shorts are designed to provide a trendy look with their distressed denim material and super high rise design. The grey color is perfect for casual outings or lounging around. The stretchable material ensures a comfortable fit, and the easy care instructions make them a practical choice for your wardrobe."
        },
        rating: 3.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emily", rating: 3.7, time: "22 April", comment: "Love the color and the fit is great!" },
            { user: "Rachel", rating: 3.6, time: "10 May", comment: "Great for casual wear, but could be a bit more comfortable." }
        ],
        vendor_details: {
            soldBy: "FashionHub",
            countryOfOrigin: "Spain",
            NameOfManufacturer: "Belenciaga Manufacturing",
            AddressOfManufacturer: "Barcelona, Spain"
        }
    },
    
    ]

// skirts:
export const skirts = [
    {
    id: 'skirts-1',
    name: "Black Solid Below Knee Slit Women Pencil Midi Skirt",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 20.99,
    category: "Skirts",
    colors: ["#000000", "#FEA547"], // black, orange
    product_details: {
        list: ["100% Cotton", "Solid Pattern", "Below Knee Length", "Slit Detail", "Pencil Silhouette"],
        Material: "Cotton",
        Pattern: "Solid",
        Occasion: "Casual, Formal",
        Stretchable: "No",
        CareInstructions: "Machine Wash Cold, Do Not Bleach, Iron Low Heat"
    },
    images: {
        "#000000": [
            "./images/skirts/id-1/black/first.jpg",
            "./images/skirts/id-1/black/second.jpg",
            "./images/skirts/id-1/black/third.jpg",
            "./images/skirts/id-1/black/fourth.jpg"
        ],
        "#FEA547": [
            "./images/skirts/id-1/orange/first.jpg",
            "./images/skirts/id-1/orange/second.jpg",
            "./images/skirts/id-1/orange/third.jpg",
            "./images/skirts/id-1/orange/fourth.jpg"
        ]
    },
    KnowYourProduct: {
        text: "This black solid below knee slit women pencil midi skirt is a must-have for any fashion-conscious woman. Made from 100% cotton, it features a solid pattern and a pencil silhouette that creates a flattering fit. The below knee length and slit detail add a touch of sophistication, making it perfect for both casual and formal occasions. Pair it with your favorite top and heels for a chic look."
    },
    rating: 4.5,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 4.8, time: "22 April", comment: "Love the slit detail, adds a touch of sophistication." },
        { user: "Rachel", rating: 4.2, time: "10 May", comment: "Fits perfectly, great for formal events." }
    ],
    vendor_details: {
        soldBy: "FashionHub",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "Prada Manufacturing",
        AddressOfManufacturer: "Milan, Italy"
    }
},
{
    id: 'skirts-2',
    name: "Green Satin Draped Skirt",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 29.99,
    category: "Skirts",
    colors: ["#99A743"],
    product_details: {
        list: ["100% Satin", "Draped Pattern", "Midi Length", "Flared Silhouette"],
        Material: "Satin",
        Pattern: "Draped",
        Occasion: "Formal",
        Stretchable: "No",
        CareInstructions: "Dry Clean Only, Iron Low Heat"
    },
    images: {
        "#99A743": [
            "./images/skirts/id-2/first.jpg",
            "./images/skirts/id-2/second.jpg",
            "./images/skirts/id-2/third.jpg",
            "./images/skirts/id-2/fourth.jpg"
        ]
    },
    KnowYourProduct: {
        text: "Elevate your formal wear with this stunning green satin draped skirt. Crafted from 100% satin, it features a draped pattern and a flared silhouette that creates a dramatic effect. The midi length makes it perfect for formal events, and the satin material gives it a luxurious feel. Pair it with a crisp white blouse and heels for a sophisticated look."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 5.0, time: "22 April", comment: "Perfect for formal events, love the draped detail." },
        { user: "Rachel", rating: 4.9, time: "10 May", comment: "Fits perfectly, great for weddings." }
    ],
    vendor_details: {
        soldBy: "FashionHub",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "Prada Manufacturing",
        AddressOfManufacturer: "Milan, Italy"
    }
},
{
    id: 'skirts-3',
    name: "Curved Slit Blue Midi Skirt",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 78.99,
    category: "Skirts",
    colors: ["#113653"],
    product_details: {
        list: ["95% Cotton, 5% Polyester", "Curved Slit Pattern", "Midi Length", "A-Line Silhouette"],
        Material: "Cotton Blend",
        Pattern: "Curved Slit",
        Occasion: "Casual, Formal",
        Stretchable: "Yes",
        CareInstructions: "Machine Wash Cold, Do Not Bleach, Iron Low Heat"
    },
    images: {
        "#113653": [
            "./images/skirts/id-3/first.jpg",
            "./images/skirts/id-3/second.jpg",
            "./images/skirts/id-3/third.jpg",
            "./images/skirts/id-3/fourth.jpg"
        ]
    },
    KnowYourProduct: {
        text: "Add a touch of elegance to your wardrobe with this curved slit blue midi skirt. Made from a comfortable cotton blend, it features a curved slit pattern and an A-line silhouette that creates a flattering fit. The midi length makes it suitable for both casual and formal occasions, and the stretchable material ensures a comfortable wear. Pair it with a crisp white top and sneakers for a chic casual look."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 4.9, time: "22 April", comment: "Love the curved slit detail, adds a touch of sophistication." },
        { user: "Rachel", rating: 4.8, time: "10 May", comment: "Fits perfectly, great for casual events." }
    ],
    vendor_details: {
        soldBy: "FashionHub",
        countryOfOrigin: "China",
        NameOfManufacturer: "Only Manufacturing",
        AddressOfManufacturer: "Shanghai, China"
    }
},
{
    id: 'skirts-4',
    name: "Linen Mid Rise Skirt - Pink",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 89.99,
    category: "Skirts",
    colors: ["#C42061"],
    product_details: {
        list: ["100% Linen", "Solid Pattern", "Mid Rise Length", "A-Line Silhouette"],
        Material: "Linen",
        Pattern: "Solid",
        Occasion: "Casual",
        Stretchable: "No",
        CareInstructions: "Machine Wash Cold, Do Not Bleach, Iron Low Heat"
    },
    images: {
        "#C42061": [
            "./images/skirts/id-4/first.jpg",
            "./images/skirts/id-4/second.jpg",
            "./images/skirts/id-4/third.jpg",
            "./images/skirts/id-4/fourth.jpg"
        ]
    },
    KnowYourProduct: {
        text: "Brighten up your wardrobe with this vibrant pink linen mid rise skirt. Crafted from 100% linen, it features a solid pattern and an A-line silhouette that creates a flattering fit. The mid rise length makes it perfect for casual occasions, and the linen material gives it a natural, breathable feel. Pair it with a white tank top and sandals for a chic summer look."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 4.7, time: "22 April", comment: "Love the vibrant color, perfect for summer." },
        { user: "Rachel", rating: 4.6, time: "10 May", comment: "Fits perfectly, great for casual outings." }
    ],
    vendor_details: {
        soldBy: "FashionHub",
        countryOfOrigin: "China",
        NameOfManufacturer: "Only Manufacturing",
        AddressOfManufacturer: "Shanghai, China"
    }
},
{
    id: 'skirts-5',
    name: "Women's Blue Regular Mid Rise Clean Look Light weight Midi Denim Skirt",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 69.99,
    category: "Skirts",
    colors: ["#ACC2D9"],
    product_details: {
        list: ["100% Denim", "Clean Look Pattern", "Mid Rise Length", "Midi Silhouette"],
        Material: "Denim",
        Pattern: "Clean Look",
        Occasion: "Casual",
        Stretchable: "Yes",
        CareInstructions: "Machine Wash Cold, Do Not Bleach, Iron Low Heat"
    },
    images: {
        "#ACC2D9": [
            "./images/skirts/id-5/first.jpg",
            "./images/skirts/id-5/second.jpg",
            "./images/skirts/id-5/third.jpg",
            "./images/skirts/id-5/fourth.jpg"
        ]
    },
    KnowYourProduct: {
        text: "Update your casual wardrobe with this stylish blue denim midi skirt. Made from 100% denim, it features a clean look pattern and a midi silhouette that creates a modern fit. The mid rise length makes it suitable for everyday wear, and the stretchable material ensures a comfortable fit. Pair it with a graphic tee and sneakers for a relaxed, casual look."
    },
    rating: 4.5,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 4.6, time: "22 April", comment: "Love the clean look, perfect for casual wear." },
        { user: "Rachel", rating: 4.5, time: "10 May", comment: "Fits perfectly, great for daily wear." }
    ],
    vendor_details: {
        soldBy: "FashionHub",
        countryOfOrigin: "China",
        NameOfManufacturer: "Only Manufacturing",
        AddressOfManufacturer: "Shanghai, China"
    }
},
{
    id: 'skirts-6',
    name: "Women Beige Panel Perfection Midi Skirt",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 49.99,
    category: "Skirts",
    colors: ["#DFBEAE"],
    product_details: {
        list: ["95% Cotton, 5% Polyester", "Panel Pattern", "Midi Length", "A-Line Silhouette"],
        Material: "Cotton Blend",
        Pattern: "Panel",
        Occasion: "Casual, Formal",
        Stretchable: "Yes",
        CareInstructions: "Machine Wash Cold, Do Not Bleach, Iron Low Heat"
    },
    images: {
        "#DFBEAE": [
            "./images/skirts/id-6/first.jpg",
            "./images/skirts/id-6/second.jpg",
            "./images/skirts/id-6/third.jpg",
            "./images/skirts/id-6/fourth.jpg"
        ]
    },
    KnowYourProduct: {
        text: "Elevate your style with this beige panel perfection midi skirt. Crafted from a comfortable cotton blend, it features a panel pattern and an A-line silhouette that creates a flattering fit. The midi length makes it suitable for both casual and formal occasions, and the stretchable material ensures a comfortable wear. Pair it with a crisp white blouse and heels for a sophisticated look."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 4.8, time: "22 April", comment: "Love the panel detail, adds a touch of sophistication." },
        { user: "Rachel", rating: 4.7, time: "10 May", comment: "Fits perfectly, great for formal events." }
    ],
    vendor_details: {
        soldBy: "FashionHub",
        countryOfOrigin: "China",
        NameOfManufacturer: "Only Manufacturing",
        AddressOfManufacturer: "Shanghai, China"
    }
},
{
    id: 'skirts-7',
    name: "Camel Pleated Midi Skirt",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 39.99,
    category: "Skirts",
    colors: ["#D39564"],
    product_details: {
        list: ["95% Cotton, 5% Polyester", "Pleated Pattern", "Midi Length", "A-Line Silhouette"],
        Material: "Cotton Blend",
        Pattern: "Pleated",
        Occasion: "Casual, Formal",
        Stretchable: "Yes",
        CareInstructions: "Machine Wash Cold, Do Not Bleach, Iron Low Heat"
    },
    images: {
        "#D39564": [
            "./images/skirts/id-7/first.jpg",
            "./images/skirts/id-7/second.jpg",
            "./images/skirts/id-7/third.jpg",
            "./images/skirts/id-7/fourth.jpg"
        ]
    },
    KnowYourProduct: {
        text: "Add a touch of elegance to your wardrobe with this camel pleated midi skirt. Made from a comfortable cotton blend, it features a pleated pattern and an A-line silhouette that creates a flattering fit. The midi length makes it suitable for both casual and formal occasions, and the stretchable material ensures a comfortable wear. Pair it with a crisp white top and heels for a sophisticated look."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 4.7, time: "22 April", comment: "Love the pleated detail, adds a touch of sophistication." },
        { user: "Rachel", rating: 4.6, time: "10 May", comment: "Fits perfectly, great for casual events." }
    ],
    vendor_details: {
        soldBy: "FashionHub",
        countryOfOrigin: "China",
        NameOfManufacturer: "Only Manufacturing",
        AddressOfManufacturer: "Shanghai, China"
    }
},
{
    id: 'skirts-8',
    name: "White Floral Pleated Skirt",
    brand: "CIDER",
    brand_logo: "./images/brands/cider.png",
    price: 12.99,
    category: "Skirts",
    colors: ["#FFFFFF"],
    product_details: {
        list: ["95% Cotton, 5% Polyester", "Floral Pattern", "Midi Length", "A-Line Silhouette"],
        Material: "Cotton Blend",
        Pattern: "Floral",
        Occasion: "Casual, Formal",
        Stretchable: "Yes",
        CareInstructions: "Machine Wash Cold, Do Not Bleach, Iron Low Heat"
    },
    images: {
        "#FFFFFF": [
            "./images/skirts/id-8/first.jpg",
            "./images/skirts/id-8/second.jpg",
            "./images/skirts/id-8/third.jpg",
            "./images/skirts/id-8/fourth.jpg"
        ]
    },
    KnowYourProduct: {
        text: "Brighten up your wardrobe with this white floral pleated midi skirt. Crafted from a comfortable cotton blend, it features a floral pattern and an A-line silhouette that creates a flattering fit. The midi length makes it suitable for both casual and formal occasions, and the stretchable material ensures a comfortable wear. Pair it with a crisp white top and heels for a sophisticated look."
    },
    rating: 4.5,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 4.6, time: "22 April", comment: "Love the floral pattern, perfect for spring." },
        { user: "Rachel", rating: 4.5, time: "10 May", comment: "Fits perfectly, great for casual outings." }
    ],
    vendor_details: {
        soldBy: "FashionHub",
        countryOfOrigin: "China",
        NameOfManufacturer: "Cider Manufacturing",
        AddressOfManufacturer: "Shanghai, China"
    }
},
{
    id: 'skirts-9',
    name: "Work Rust Self Textured A Line Above Knee Skirt",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 57.99,
    category: "Skirts",
    colors: ["#B54339"],
    product_details: {
        list: ["95% Cotton, 5% Polyester", "Self Textured Pattern", "Above Knee Length", "A-Line Silhouette"],
        Material: "Cotton Blend",
        Pattern: "Self Textured",
        Occasion: "Casual, Formal",
        Stretchable: "Yes",
        CareInstructions: "Machine Wash Cold, Do Not Bleach, Iron Low Heat"
    },
    images: {
        "#B54339": [
            "./images/skirts/id-9/first.jpg",
            "./images/skirts/id-9/second.jpg",
            "./images/skirts/id-9/third.jpg",
            "./images/skirts/id-9/fourth.jpg"
        ]
    },
    KnowYourProduct: {
        text: "Elevate your workwear with this rust self textured A-line above knee skirt. Crafted from a comfortable cotton blend, it features a self textured pattern and an A-line silhouette that creates a flattering fit. The above knee length makes it suitable for both casual and formal occasions, and the stretchable material ensures a comfortable wear. Pair it with a crisp white blouse and heels for a sophisticated look."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emily", rating: 4.7, time: "22 April", comment: "Love the self textured detail, adds a touch of sophistication." },
        { user: "Rachel", rating: 4.6, time: "10 May", comment: "Fits perfectly, great for formal events." }
    ],
    vendor_details: {
        soldBy: "FashionHub",
        countryOfOrigin: "China",
        NameOfManufacturer: "Only Manufacturing",
        AddressOfManufacturer: "Shanghai, China"
    }
}
]


// // slip dress:
export const slipdress = [
    {
    id: 'slipdress-1',
    name: "Cherry Blossom Slip Dress",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 67.99,
    category: "Slipdress",
    colors: ["#FFB7C5"], 
    product_details: {
        list: ["Elegant cherry blossom print", "Adjustable spaghetti straps", "Side slit detail", "Midi length"],
        Material: "100% Silk",
        Pattern: "Cherry Blossom Print",
        Occasion: "Evening, Cocktail, Special Events",
        Stretchable: "Slightly",
        CareInstructions: "Dry Clean Only",
    },
    images: {
        "#FFB7C5": [
            "./images/slip-dress/id-1/first.jpg",
            "./images/slip-dress/id-1/second.jpg",
            "./images/slip-dress/id-1/third.jpg",
            "./images/slip-dress/id-1/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "This exquisite Cherry Blossom Slip Dress from PRADA embodies timeless elegance with a modern twist. The delicate cherry blossom print is inspired by Japanese art, carefully placed on premium silk fabric that flows gracefully with every movement. The dress features thoughtfully designed elements including adjustable straps for the perfect fit and a subtle side slit that adds both style and comfort. The midi length makes it versatile for various occasions, from elegant evening events to sophisticated cocktail parties. Each dress is crafted with PRADA's signature attention to detail, ensuring both luxury and durability."
    },
    rating: 4.5,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emma", rating: 5.0, time: "15 March", comment: "The silk quality is exceptional, worth every penny" },
        { user: "Isabella", rating: 4.0, time: "12 March", comment: "Beautiful print, but slightly delicate to maintain" }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A",
        AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
    }
},
{
    id: 'slipdress-2',
    name: "Glam White Slip Dress with Asymmetric Neckline",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 55.99,
    category: "Slipdress",
    colors: ["#FFFFFF"], 
    product_details: {
        list: ["Asymmetric neckline", "Bias cut design", "Back zipper closure", "Knee length"],
        Material: "95% Silk, 5% Elastane",
        Pattern: "Solid",
        Occasion: "Formal, Wedding, Evening",
        Stretchable: "Yes",
        CareInstructions: "Professional Dry Clean Only",
    },
    images: {
        "#FFFFFF": [
            "./images/slip-dress/id-2/first.jpg",
            "./images/slip-dress/id-2/second.jpg",
            "./images/slip-dress/id-2/third.jpg",
            "./images/slip-dress/id-2/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "The Glam White Slip Dress represents modern sophistication at its finest. This PRADA creation features an innovative asymmetric neckline that creates a striking silhouette. The dress is expertly crafted using a bias cut technique that allows the fabric to drape beautifully over the body, creating an effortlessly elegant look. The addition of elastane to the silk provides comfortable stretch while maintaining the luxurious feel. The clean lines and pristine white color make it a perfect choice for brides seeking a contemporary wedding dress alternative, or for those special occasions demanding understated glamour. The knee length cut strikes the perfect balance between sophistication and allure."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Victoria", rating: 5.0, time: "20 March", comment: "Perfect for my civil wedding ceremony!" },
        { user: "Charlotte", rating: 5.0, time: "16 March", comment: "The asymmetric neckline is so unique and flattering" }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A",
        AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
    }
},
{
    id: 'slipdress-3',
    name: "White Printed Slip Dress",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 20.99,
    category: "Slipdress",
    colors: ["#8DCBC5"], 
    product_details: {
        list: ["Abstract print design", "V-neckline", "Thin straps", "Mid-calf length"],
        Material: "100% Silk Crepe",
        Pattern: "Abstract Print",
        Occasion: "Resort Wear, Day Events, Summer Parties",
        Stretchable: "No",
        CareInstructions: "Dry Clean Only",
    },
    images: {
        "#8DCBC5": [
            "./images/slip-dress/id-3/first.jpg",
            "./images/slip-dress/id-3/second.jpg",
            "./images/slip-dress/id-3/third.jpg",
            "./images/slip-dress/id-3/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "This White Printed Slip Dress combines PRADA's minimalist aesthetic with artistic expression. The abstract print in soothing aqua tones is exclusively designed for this collection, making each piece uniquely special. The dress is crafted from premium silk crepe that offers a subtle texture and excellent drape. The mid-calf length and V-neckline create a balanced silhouette that flatters various body types. The design draws inspiration from Mediterranean summers, making it perfect for resort wear or sophisticated daytime events. The careful placement of the print enhances the dress's visual appeal while maintaining its elegant simplicity."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Olivia", rating: 5.0, time: "14 March", comment: "The print is even more beautiful in person" },
        { user: "Mia", rating: 4.5, time: "10 March", comment: "Perfect for my beach vacation" }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A",
        AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
    }
},
{
    id: 'slipdress-4',
    name: "Metallic Slip Short Mini Dress",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 16.99,
    category: "Slipdress",
    colors: ["#BCA488"], 
    product_details: {
        list: ["Metallic finish", "Cowl neckline", "Cross-back straps", "Mini length"],
        Material: "70% Silk, 30% Metallic Fiber",
        Pattern: "Solid Metallic",
        Occasion: "Party, Clubbing, Evening Events",
        Stretchable: "Slightly",
        CareInstructions: "Specialist Dry Clean Only",
    },
    images: {
        "#BCA488": [
            "./images/slip-dress/id-4/first.jpg",
            "./images/slip-dress/id-4/second.jpg",
            "./images/slip-dress/id-4/third.jpg",
            "./images/slip-dress/id-4/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "The Metallic Slip Short Mini Dress is a statement piece that captures the essence of modern glamour. This PRADA creation features an innovative blend of silk and metallic fibers that creates a subtle shimmer effect, catching and reflecting light with every movement. The cowl neckline adds a touch of sophistication, while the cross-back straps provide both style and support. The mini length makes it perfect for showcasing legs, while the careful construction ensures comfort and elegance. The metallic champagne shade is versatile enough to transition from day to night events, making it a valuable addition to any fashion-forward wardrobe."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Luna", rating: 5.0, time: "17 March", comment: "The metallic finish is stunning under lights" },
        { user: "Ava", rating: 4.5, time: "15 March", comment: "Perfect party dress, received many compliments" }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A",
        AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
    }
},
{
    id: 'slipdress-5',
    name: "Women Black Color Woven Margot Slip Dress",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 90.99,
    category: "Slipdress",
    colors: ["#000000"], 
    product_details: {
        list: ["Woven texture", "Square neckline", "Empire waistline", "Midi length"],
        Material: "85% Silk, 15% Wool",
        Pattern: "Textured Solid",
        Occasion: "Formal Events, Business Dinner, Evening",
        Stretchable: "Minimal",
        CareInstructions: "Dry Clean Only",
    },
    images: {
        "#000000": [
            "./images/slip-dress/id-5/first.jpg",
            "./images/slip-dress/id-5/second.jpg",
            "./images/slip-dress/id-5/third.jpg",
            "./images/slip-dress/id-5/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "The Women Black Color Woven Margot Slip Dress is a masterpiece of sophisticated design. This PRADA creation features a unique blend of silk and wool, creating a subtle texture that adds depth to the classic black color. The square neckline frames the décolletage beautifully, while the empire waistline creates a flattering silhouette. The woven texture is achieved through an intricate process that showcases PRADA's commitment to innovative textile development. The midi length makes it appropriate for various formal settings, while the careful construction ensures comfort during extended wear. The dress represents a perfect balance between classic elegance and contemporary design."
    },
    rating: 4.9,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Grace", rating: 5.0, time: "16 March", comment: "The texture adds such a unique element to a black dress" },
        { user: "Eleanor", rating: 5.0, time: "13 March", comment: "Perfect for formal events, very elegant" }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A",
        AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
    }
},
{
    id: 'slipdress-6',
    name: "Satin Asymmetrical Slip Dress",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 70.99,
    category: "Slipdress",
    colors: ["#F3D5CF"], 
    product_details: {
        list: ["Asymmetrical hem", "One-shoulder design", "Side ruching", "High-low silhouette"],
        Material: "100% Silk Satin",
        Pattern: "Solid",
        Occasion: "Red Carpet, Gala, Special Events",
        Stretchable: "No",
        CareInstructions: "Professional Dry Clean Only",
    },
    images: {
        "#F3D5CF": [
            "./images/slip-dress/id-6/first.jpg",
            "./images/slip-dress/id-6/second.jpg",
            "./images/slip-dress/id-6/third.jpg",
            "./images/slip-dress/id-6/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "The Satin Asymmetrical Slip Dress is a testament to PRADA's avant-garde design philosophy. This stunning piece features luxurious silk satin in a delicate blush tone that catches light beautifully. The asymmetrical design creates dynamic movement, with a carefully calculated high-low hem that adds drama to every step. The one-shoulder detail provides a modern twist on classical evening wear, while the side ruching flatters the natural curves of the body. The dress is constructed using advanced draping techniques that ensure the fabric falls perfectly. Each element has been thoughtfully designed to create a show-stopping piece that combines architectural elements with fluid femininity."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Audrey", rating: 5.0, time: "19 March", comment: "Wore this to a gala, absolutely stunning" },
        { user: "Harper", rating: 5.0, time: "14 March", comment: "The asymmetrical design is so unique" }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A",
        AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
    }
},
{
    id: 'slipdress-7',
    name: "Satin Cowl Neck Slip Dress - Black and Pink",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.jpg",
    price: 65.99,
    category: "Slipdress",
    colors: ["#000000"], 
    product_details: {
        list: ["Cowl neckline", "Open back design", "Contrast pink trim", "Ankle length"],
        Material: "100% Silk Satin",
        Pattern: "Color Block",
        Occasion: "Evening Events, Cocktail Parties",
        Stretchable: "No",
        CareInstructions: "Dry Clean Only",
    },
    images: {
        "#000000": [
            "./images/slip-dress/id-7/first.jpg",
            "./images/slip-dress/id-7/second.jpg",
            "./images/slip-dress/id-7/third.jpg",
            "./images/slip-dress/id-7/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "The Satin Cowl Neck Slip Dress combines classic elegance with contemporary color blocking. This PRADA creation features a dramatic cowl neckline that drapes beautifully, complemented by an alluring open back design. The contrast between the sophisticated black base and the feminine pink trim creates a striking visual effect. The ankle length provides a timeless silhouette while allowing for ease of movement. The dress is crafted from the finest silk satin, ensuring a luxurious feel and exceptional drape. The careful construction of the cowl neck requires precise engineering to achieve the perfect fall of fabric, demonstrating PRADA's expertise in working with delicate materials."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Lily", rating: 5.0, time: "15 March", comment: "The pink trim detail is so elegant" },
        { user: "Ruby", rating: 4.5, time: "12 March", comment: "Perfect fit and beautiful draping" }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A",
        AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
    }
},
{
    id: 'slipdress-8',
    name: "Olive Green Turtle Neck Midi Sweater Dress with Belt",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price: 45.99,
    category: "Slipdress",
    colors: ["#4D5144"], 
    product_details: {
        list: ["Turtle neck", "Belted waist", "Ribbed texture", "Long sleeves"],
        Material: "70% Wool, 30% Cashmere",
        Pattern: "Ribbed Knit",
        Occasion: "Winter Events, Office Wear",
        Stretchable: "Yes",
        CareInstructions: "Hand Wash Cold",
    },
    images: {
        "#4D5144": [
            "./images/slip-dress/id-8/first.jpg",
            "./images/slip-dress/id-8/second.jpg",
            "./images/slip-dress/id-8/third.jpg",
            "./images/slip-dress/id-8/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "The Olive Green Turtle Neck Midi Sweater Dress represents ONLY's commitment to combining comfort with style. This sophisticated piece features a luxurious blend of wool and cashmere, creating a soft, warm embrace perfect for cooler weather. The turtle neck design provides both warmth and elegance, while the belted waist allows for customizable silhouette definition. The ribbed texture adds visual interest and provides natural stretch for comfort. The olive green color is versatile and seasonless, making this dress a valuable wardrobe investment. The midi length makes it appropriate for various settings, from office wear to winter events. The dress exemplifies thoughtful design where functionality meets fashion."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Claire", rating: 4.5, time: "16 March", comment: "So cozy yet professional looking" },
        { user: "Zoe", rating: 5.0, time: "13 March", comment: "The cashmere blend is incredibly soft" }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "Denmark",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},
{
    id: 'slipdress-9',
    name: "Floral Slip Dress- White And Purple",
    brand: "ONLY",
    brand_logo: "./images/brands/only.png",
    price:25.99,
    category: "Slipdress",
    colors: ["#FFFFFF"], 
    product_details: {
        list: ["Floral print", "Adjustable straps", "Ruffle hem", "Mini length"],
        Material: "100% Viscose",
        Pattern: "Purple Floral on White",
        Occasion: "Summer Parties, Casual Events",
        Stretchable: "Slightly",
        CareInstructions: "Machine Wash Cold",
    },
    images: {
        "#FFFFFF": [
            "./images/slip-dress/id-9/first.jpg",
            "./images/slip-dress/id-9/second.jpg",
            "./images/slip-dress/id-9/third.jpg",
            "./images/slip-dress/id-9/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "The Floral Slip Dress by ONLY is a celebration of feminine charm and summer style. The dress features a delicate purple floral print against a crisp white background, creating a fresh and romantic look. The design includes thoughtful details like adjustable straps for the perfect fit and a playful ruffle hem that adds movement and charm. The viscose fabric is selected for its lightweight feel and excellent drape, making it perfect for warm weather wear. The mini length and airy construction make it ideal for summer parties and casual outings. The print is carefully placed to ensure a balanced and aesthetically pleasing appearance from all angles. This dress represents ONLY's expertise in creating wearable, trendy pieces that don't compromise on style or comfort."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Bella", rating: 5.0, time: "17 March", comment: "Perfect for summer parties" },
        { user: "Flora", rating: 4.5, time: "14 March", comment: "The floral print is so pretty and feminine" }
    ],
    vendor_details: {
        soldBy: "ONLY Official Store",
        countryOfOrigin: "Denmark",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},
]

// shrugs:
export const shrugs=[
    {
        id: 'shrugs-1',
        name: "Lace Beach Shrug",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg", 
        price: 55.99,
        category: "Shrugs",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["Premium quality lace fabric", "Open front style", "3/4th sleeves", "Scalloped hem"],
            Material: "90% Nylon, 10% Spandex",
            Pattern: "Floral lace",
            Occasion: "Beach, Resort wear, Casual",
            Stretchable: "Slightly stretchy",
            CareInstructions: "Hand wash cold, Do not bleach, Lay flat to dry"
        },
        images:{
            "#FFFFFF": [
                "./images/shrugs/id-1/first.jpg",
                "./images/shrugs/id-1/second.jpg", 
                "./images/shrugs/id-1/third.jpg",
                "./images/shrugs/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This elegant lace beach shrug from PRADA combines luxury with casual beach style. The delicate floral lace pattern adds a feminine touch while providing light coverage. Perfect for throwing over your swimwear or summer dresses, this versatile piece features scalloped edges and an open front design that makes it easy to wear. The breathable nylon-spandex blend ensures comfort even in warm weather while maintaining its shape. The white color makes it a timeless addition to your resort wear collection."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 5, time: "15 March", comment: "Perfect beach cover up, very elegant!" },
            { user: "Isabella", rating: 4, time: "10 March", comment: "Good quality lace, but slightly delicate" }
        ],
        vendor_details: {
            soldBy: "Luxury Fashion House",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'shrugs-2',
        name: "Black Waterfall Collar Front Open Long Shrug",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 25.99,
        category: "Shrugs",
        colors: ["#000000", "#8D8D8D"],
        product_details: {
            list: ["Waterfall collar design", "Long length", "Draped front", "Full sleeves"],
            Material: "95% Polyester, 5% Elastane",
            Pattern: "Solid",
            Occasion: "Formal, Office wear, Evening",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, Gentle cycle, Line dry"
        },
        images: {
            "#000000": [
                "./images/shrugs/id-2/black/first.jpg",
                "./images/shrugs/id-2/black/second.jpg",
                "./images/shrugs/id-2/black/third.jpg",
                "./images/shrugs/id-2/black/fourth.jpg"
            ],

            "#8D8D8D": [
                "./images/shrugs/id-2/grey/first.jpg",
                "./images/shrugs/id-2/grey/second.jpg",
                "./images/shrugs/id-2/grey/third.jpg",
                "./images/shrugs/id-2/grey/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This sophisticated waterfall collar shrug from PRADA is a statement piece for your formal wardrobe. The cascading front creates an elegant drape that flatters any body type. The long length and full sleeves offer complete coverage while maintaining a sleek silhouette. Made from high-quality polyester blend fabric, it provides both comfort and durability. The versatile design makes it perfect for layering over office attire or evening wear. Available in classic black and sophisticated grey, this piece adds instant polish to any outfit."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Rachel", rating: 5, time: "20 March", comment: "Perfect for office wear, very elegant" },
            { user: "Maria", rating: 4.5, time: "25 March", comment: "Love the draping, gets many compliments" }
        ],
        vendor_details: {
            soldBy: "Luxury Fashion House",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'shrugs-3',
        name: "Hem Rib Shrugs",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 39.99,
        category: "Shrugs",
        colors: ["#DAD4D0"],
        product_details: {
            list: ["Ribbed hem and cuffs", "Cropped length", "Open front", "Long sleeves"],
            Material: "80% Cotton, 20% Polyester",
            Pattern: "Ribbed",
            Occasion: "Casual, Daily wear",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, Tumble dry low"
        },
        images: {
            "#DAD4D0": [
                "./images/shrugs/id-3/first.jpg",
                "./images/shrugs/id-3/second.jpg",
                "./images/shrugs/id-3/third.jpg",
                "./images/shrugs/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Hem Rib Shrug from PRADA offers a perfect blend of comfort and style. The ribbed texture adds visual interest while providing a snug fit at the hem and cuffs. The cropped length is ideal for pairing with high-waisted bottoms, creating a balanced silhouette. The cotton-polyester blend ensures breathability while maintaining shape. The neutral stone color makes it a versatile piece that can be styled multiple ways. The ribbed detailing adds a contemporary touch to this casual essential."
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Lucy", rating: 4, time: "22 March", comment: "Great for casual wear, nice quality" },
            { user: "Anna", rating: 4.5, time: "1 April", comment: "Perfect fit, love the ribbed texture" }
        ],
        vendor_details: {
            soldBy: "Luxury Fashion House",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Prada S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'shrugs-4',
        name: "Women White And Pink Printed Tie-up Shrug",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 45.99,
        category: "Shrugs",
        colors: ["#D1C2B9"],
        product_details: {
            list: ["Floral print", "Tie-up closure", "Bell sleeves", "Mid-length"],
            Material: "100% Viscose",
            Pattern: "Floral print",
            Occasion: "Casual, Beach wear",
            Stretchable: "No",
            CareInstructions: "Hand wash cold, Do not bleach, Iron on low heat"
        },
        images: {
            "#D1C2B9": [
                "./images/shrugs/id-4/first.jpg",
                "./images/shrugs/id-4/second.jpg",
                "./images/shrugs/id-4/third.jpg",
                "./images/shrugs/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This charming tie-up shrug from CIDER features a delightful white and pink floral print that brings a fresh, feminine appeal. The bell sleeves add a romantic touch while the tie-up closure allows for adjustable styling. Made from lightweight viscose fabric, it's perfect for warm weather and provides excellent drape. The mid-length cut makes it versatile enough to pair with both dresses and separates. The subtle pink undertones in the print create a soft, romantic look ideal for spring and summer wardrobes."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Grace", rating: 5, time: "12 March", comment: "Beautiful print, perfect for summer" },
            { user: "Harper", rating: 4.2, time: "5 April", comment: "Love the bell sleeves, very feminine" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    {
        id: 'shrugs-5',
        name: "Women Free Fit Georgette Floral Blue Shrug",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 35.99,
        category: "Shrugs",
        colors: ["#44C2BD"],
        product_details: {
            list: ["Flowy georgette fabric", "Floral print", "Kimono sleeves", "Relaxed fit"],
            Material: "100% Georgette",
            Pattern: "Floral",
            Occasion: "Casual, Beach wear, Resort wear",
            Stretchable: "No",
            CareInstructions: "Dry clean only, Cool iron if needed"
        },
        images: {
            "#44C2BD": [
                "./images/shrugs/id-5/first.jpg",
                "./images/shrugs/id-5/second.jpg",
                "./images/shrugs/id-5/third.jpg",
                "./images/shrugs/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This ethereal georgette shrug from CIDER showcases a stunning floral print in refreshing blue tones. The lightweight georgette fabric creates beautiful movement and drape, while the free-flowing silhouette ensures maximum comfort. The kimono-style sleeves add an elegant touch to this casual piece. Perfect for beach vacations or summer outings, this shrug can easily transition from day to evening wear. The vibrant blue color palette brings a cool, refreshing feel to any outfit. The relaxed fit makes it an ideal choice for layering over various outfits."
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Lily", rating: 4.2, time: "25 March", comment: "Beautiful color, perfect for summer" },
            { user: "Maya", rating: 4.5, time: "30 March", comment: "Lovely print, flows beautifully" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    {
        id: 'shrugs-6',
        name: "Black Printed Long Sleeves Bohemian Longline Shrug",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 25.99,
        category: "Shrugs",
        colors: ["#000000"],
        product_details: {
            list: ["Bohemian print", "Long sleeves", "Maxi length", "Side slits"],
            Material: "100% Rayon",
            Pattern: "Bohemian print",
            Occasion: "Festival, Beach wear, Casual",
            Stretchable: "No",
            CareInstructions: "Hand wash cold, Line dry, Do not wring"
        },
        images: {
            "#000000": [
                "./images/shrugs/id-6/first.jpg",
                "./images/shrugs/id-6/second.jpg",
                "./images/shrugs/id-6/third.jpg",
                "./images/shrugs/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This striking bohemian longline shrug from CIDER is a statement piece that embodies free-spirited style. The black base features intricate bohemian prints that create visual interest throughout the garment. The maxi length and side slits provide dramatic movement while ensuring ease of movement. Perfect for festival season or beach vacations, this piece adds instant boho-chic to any outfit. The lightweight rayon fabric ensures comfort in warm weather while maintaining an elegant drape. The long sleeves offer protection from the sun while keeping the overall look sophisticated."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Zara", rating: 5, time: "2 April", comment: "Perfect festival wear, gets many compliments" },
            { user: "Nina", rating: 5, time: "28 March", comment: "Love the bohemian vibes, great quality" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    {
        id: 'shrugs-7',
        name: "Women Black Self Design Lace Open Front Smart Casual Shrug",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 70.99,
        category: "Shrugs",
        colors: ["#000000"],
        product_details: {
            list: ["Self-design lace pattern", "Open front style", "3/4th sleeves", "Mid-length"],
            Material: "85% Nylon, 15% Spandex",
            Pattern: "Self-design lace",
            Occasion: "Smart casual, Evening wear",
            Stretchable: "Yes",
            CareInstructions: "Hand wash cold, Lay flat to dry, Do not iron on lace"
        },
        images: {
            "#000000": [
                "./images/shrugs/id-7/first.jpg",
                "./images/shrugs/id-7/second.jpg",
                "./images/shrugs/id-7/third.jpg",
                "./images/shrugs/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This sophisticated black lace shrug from CIDER combines elegance with versatility. The self-design lace pattern creates a subtle yet striking texture that adds dimension to any outfit. The open front design allows for easy styling while the 3/4th sleeves provide just the right amount of coverage. The mid-length cut makes it perfect for both casual and dressier occasions. The nylon-spandex blend ensures the garment maintains its shape while providing comfortable stretch. The intricate lace work showcases fine craftsmanship and attention to detail."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Victoria", rating: 4.8, time: "5 April", comment: "Beautiful lace work, very versatile" },
            { user: "Diana", rating: 4.5, time: "15 March", comment: "Perfect for evening wear, elegant design" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    {
        id: 'shrugs-8',
        name: "Womens Multicolor Tropical Print Shrug",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 60.99,
        category: "Shrugs",
        colors: ["#9D9C7D"],
        product_details: {
            list: ["Tropical print", "Kimono style", "Wide sleeves", "High-low hem"],
            Material: "100% Polyester",
            Pattern: "Tropical print",
            Occasion: "Beach wear, Resort wear, Casual",
            Stretchable: "No",
            CareInstructions: "Machine wash cold, Gentle cycle, Line dry"
        },
        images: {
            "#9D9C7D": [
                "./images/shrugs/id-8/first.jpg",
                "./images/shrugs/id-8/second.jpg",
                "./images/shrugs/id-8/third.jpg",
                "./images/shrugs/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This vibrant tropical print shrug from CIDER brings resort-style glamour to your wardrobe. The eye-catching print features lush tropical motifs in a harmonious color palette. The kimono-style cut with wide sleeves creates a dramatic silhouette perfect for beach or pool-side wear. The high-low hem adds modern flair while providing extra coverage at the back. The lightweight polyester fabric ensures easy care and quick drying, making it ideal for vacation packing. The relaxed fit allows for easy movement while maintaining an elegant drape."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Mia", rating: 5, time: "10 April", comment: "Perfect vacation piece, beautiful print" },
            { user: "Olivia", rating: 4.5, time: "2 April", comment: "Love the tropical vibes, great quality" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    {
        id: 'shrugs-9',
        name: "Women Grey cotton self design lace crop open front shrug",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 50.99,
        category: "Shrugs",
        colors: ["#7E7E88"],
        product_details: {
            list: ["Cotton lace design", "Cropped length", "Open front", "Short sleeves"],
            Material: "100% Cotton",
            Pattern: "Self-design lace",
            Occasion: "Casual, Day wear",
            Stretchable: "Slightly",
            CareInstructions: "Hand wash cold, Do not bleach, Iron on low heat"
        },
        images: {
            "#7E7E88": [
                "./images/shrugs/id-9/first.jpg",
                "./images/shrugs/id-9/second.jpg",
                "./images/shrugs/id-9/third.jpg",
                "./images/shrugs/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This charming grey cotton shrug from CIDER combines comfort with delicate style. The self-design lace pattern adds feminine detail to the casual silhouette. The cropped length makes it perfect for pairing with high-waisted bottoms or dresses. Made from pure cotton, it offers excellent breathability and comfort for all-day wear. The open front design allows for easy styling while the short sleeves make it perfect for layering. The subtle grey shade ensures versatility while the lace detailing adds a touch of sophistication to casual outfits."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ava", rating: 4.5, time: "8 April", comment: "Perfect light layer, beautiful lace detail" },
            { user: "Charlotte", rating: 4.5, time: "1 April", comment: "Great quality cotton, very comfortable" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    ]
// cardigans:
export const cardigans = [
    {
    id: 'cardigans-1',
    name: "Women Mauve Rib Cardigan",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.png", 
    price: 30.99,
    category: "Cardigans",
    colors: ["#AA7E7F"],
    product_details: {
        list: ["Premium ribbed knit fabric", "Button-front closure", "Long sleeves", "Regular fit", "Mauve color"],
        Material: "80% Cotton, 20% Polyester",
        Pattern: "Ribbed",
        Occasion: "Casual, Work",
        Stretchable: "Yes",
        CareInstructions: "Machine wash cold, Do not bleach, Tumble dry low"
    },
    images: {
        "#AA7E7F": [
            "./images/cardigans/id-1/first.jpg",
            "./images/cardigans/id-1/second.jpg", 
            "./images/cardigans/id-1/third.jpg",
            "./images/cardigans/id-1/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "This luxurious mauve ribbed cardigan from PRADA combines comfort with sophistication. The premium cotton-polyester blend ensures breathability while maintaining shape. The ribbed texture adds visual interest and provides a flattering silhouette. Perfect for layering over both casual and work attire, this versatile piece features quality button closures and carefully finished seams. The mauve shade is specially selected to complement various skin tones and can be paired easily with other wardrobe pieces. The regular fit allows comfortable movement while maintaining a polished appearance."
    },
    rating: 4.5,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Emma", rating: 5, time: "15 March", comment: "Perfect fit and beautiful color. Worth every penny!" },
        { user: "Isabella", rating: 4, time: "12 March", comment: "Great quality, but slightly longer than expected" }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A",
        AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
    }
},
{
    id: 'cardigans-2',
    name: "Teddy-Bear Cardigan",
    brand: "PRADA",
    brand_logo: "./images/brands/prada.png",
    price: 40.99,
    category: "Cardigans",
    colors: ["#F3EFE2"],
    product_details: {
        list: ["Soft teddy bear texture", "Oversized fit", "Drop shoulders", "Front pockets", "Cozy warm fabric"],
        Material: "70% Polyester, 30% Acrylic",
        Pattern: "Textured",
        Occasion: "Casual, Loungewear",
        Stretchable: "Slightly",
        CareInstructions: "Hand wash cold, Lay flat to dry, Do not iron"
    },
    images: {
        "#F3EFE2": [
            "./images/cardigans/id-2/first.jpg",
            "./images/cardigans/id-2/second.jpg",
            "./images/cardigans/id-2/third.jpg",
            "./images/cardigans/id-2/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Experience ultimate comfort with this plush teddy-bear cardigan from PRADA. Designed to provide both warmth and style, this oversized piece features a unique textured fabric that mimics the softness of a teddy bear. The dropped shoulders create a relaxed silhouette while the front pockets add functionality. The neutral cream color makes it a versatile addition to any wardrobe. The carefully chosen fabric blend ensures durability while maintaining its cozy feel wash after wash. Perfect for those chilly days when you want to wrap yourself in luxury."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Olivia", rating: 5, time: "20 March", comment: "So cozy! Like wearing a warm hug" },
        { user: "Mia", rating: 5, time: "22 March", comment: "Best winter purchase ever! Super soft" }
    ],
    vendor_details: {
        soldBy: "PRADA Official Store",
        countryOfOrigin: "Italy",
        NameOfManufacturer: "PRADA S.p.A",
        AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
    }
},
{
    id: 'cardigans-3',
    name: "Poppink Daisy Cardigan",
    brand: "ONLY",
    brand_logo: "./images/brands/prada.png",
    price: 35.99,
    category: "Cardigans",
    colors: ["#CC749A"],
    product_details: {
        list: ["Floral daisy pattern", "Cropped length", "Button-up front", "3/4 sleeves", "Ribbed hem"],
        Material: "100% Cotton",
        Pattern: "Floral",
        Occasion: "Casual, Date",
        Stretchable: "Slightly",
        CareInstructions: "Machine wash cold, Gentle cycle, Line dry"
    },
    images: {
        "#CC749A": [
            "./images/cardigans/id-3/first.jpg",
            "./images/cardigans/id-3/second.jpg",
            "./images/cardigans/id-3/third.jpg",
            "./images/cardigans/id-3/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "The Poppink Daisy Cardigan from ONLY is a delightful blend of vintage charm and modern style. This piece features an adorable daisy pattern set against a vibrant pink background, perfect for adding a pop of color to your outfit. The cropped length makes it ideal for high-waisted bottoms, while the 3/4 sleeves offer versatility across seasons. Made from 100% cotton, it provides breathability and comfort. The ribbed hem ensures a flattering fit, and the button-up front allows for styling flexibility. Each daisy is carefully knitted into the fabric, creating a charming texture that catches the eye."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Luna", rating: 5, time: "25 March", comment: "The pattern is so cute! Gets lots of compliments" },
        { user: "Ava", rating: 4.5, time: "30 March", comment: "Perfect for spring, love the color!" }
    ],
    vendor_details: {
        soldBy: "ONLY Official",
        countryOfOrigin: "Denmark",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},
{
    id: 'cardigans-4',
    name: "Brown Buttoned Front Cardigan",
    brand: "ONLY",
    brand_logo: "./images/brands/prada.png",
    price: 25.99,
    category: "Cardigans",
    colors: ["#BFA08D", "#ED446F"],  // brown, pink
    product_details: {
        list: ["Classic button-front design", "V-neckline", "Regular fit", "Long sleeves", "Ribbed cuffs and hem"],
        Material: "60% Cotton, 40% Modal",
        Pattern: "Solid",
        Occasion: "Casual, Work, Evening",
        Stretchable: "Yes",
        CareInstructions: "Machine wash cold, Lay flat to dry, Iron on low if needed"
    },
    images: {
        "#BFA08D": [
            "./images/cardigans/id-4/brown/first.jpg",
            "./images/cardigans/id-4/brown/second.jpg",
            "./images/cardigans/id-4/brown/third.jpg",
            "./images/cardigans/id-4/brown/fourth.jpg"
        ],
        "#ED446F": [
            "./images/cardigans/id-4/pink/first.jpg",
            "./images/cardigans/id-4/pink/second.jpg",
            "./images/cardigans/id-4/pink/third.jpg",
            "./images/cardigans/id-4/pink/fourth.jpg"
        ],

    },
    KnowYourProduct: {
        text: "This versatile Brown Buttoned Front Cardigan from ONLY is a wardrobe essential that combines timeless style with modern comfort. The premium cotton-modal blend creates a soft, luxurious feel while ensuring excellent drape and durability. The classic V-neckline and button-front design offer traditional appeal, while the contemporary fit keeps it current. Available in both sophisticated brown and playful pink, this cardigan transitions seamlessly from office to evening wear. The ribbed cuffs and hem provide structure and shape retention, while the carefully chosen fabric blend prevents pilling and maintains its shape after multiple washes."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Grace", rating: 4.5, time: "28 March", comment: "Perfect for office wear, very versatile" },
        { user: "Charlotte", rating: 5, time: "1 April", comment: "Bought both colors, love them equally!" }
    ],
    vendor_details: {
        soldBy: "ONLY Official",
        countryOfOrigin: "Denmark",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},
{
    id: 'cardigans-5',
    name: "Cable Knit Bowknot Long Sleeve Shrug",
    brand: "ONLY",
    brand_logo: "./images/brands/prada.png",
    price: 15.99,
    category: "Cardigans",
    colors: ["#000000"],
    product_details: {
        list: ["Elegant cable knit pattern", "Decorative bowknot detail", "Cropped length", "Long sleeves", "Fitted silhouette"],
        Material: "55% Cotton, 45% Wool",
        Pattern: "Cable Knit",
        Occasion: "Evening, Special Occasions",
        Stretchable: "Slightly",
        CareInstructions: "Hand wash cold, Lay flat to dry, Do not wring"
    },
    images: {
        "#000000": [
            "./images/cardigans/id-5/first.jpg",
            "./images/cardigans/id-5/second.jpg",
            "./images/cardigans/id-5/third.jpg",
            "./images/cardigans/id-5/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "The Cable Knit Bowknot Long Sleeve Shrug is a sophisticated piece that combines classic cable knitting with feminine details. The intricate cable pattern showcases exceptional craftsmanship, while the signature bowknot adds a touch of elegance. The cotton-wool blend provides warmth without bulk, making it perfect for special occasions. The cropped length is designed to complement formal dresses and high-waisted outfits. Each cable stitch is carefully crafted to create a textured pattern that catches the light beautifully. The fitted silhouette ensures a flattering look while the stretch in the fabric allows comfortable movement. The classic black color makes it a timeless addition to any formal wardrobe."
    },
    rating: 4.9,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Eleanor", rating: 5, time: "5 April", comment: "Perfect for formal events, very elegant" },
        { user: "Victoria", rating: 5, time: "10 April", comment: "The bow detail is so beautiful!" }
    ],
    vendor_details: {
        soldBy: "ONLY Official",
        countryOfOrigin: "Denmark",
        NameOfManufacturer: "Bestseller A/S",
        AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
    }
},
{
    id: 'cardigans-6',
    name: "Evil Eye Cardigan",
    brand: "CIDER",
    brand_logo: "./images/brands/prada.png",
    price: 20.99,
    category: "Cardigans",
    colors: ["#A8B0B4"],
    product_details: {
        list: ["Unique evil eye pattern", "Oversized fit", "Drop shoulders", "Chunky knit", "Contrast buttons"],
        Material: "70% Acrylic, 30% Wool",
        Pattern: "Graphic",
        Occasion: "Casual, Street Style",
        Stretchable: "Yes",
        CareInstructions: "Hand wash cold, Lay flat to dry, Do not bleach"
    },
    images: {
        "#A8B0B4": [
            "./images/cardigans/id-6/first.jpg",
            "./images/cardigans/id-6/second.jpg",
            "./images/cardigans/id-6/third.jpg",
            "./images/cardigans/id-6/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Make a bold statement with the Evil Eye Cardigan from CIDER. This eye-catching piece features a striking evil eye pattern that serves as both protection symbol and fashion statement. The oversized silhouette and drop shoulders create a contemporary street-style look, while the chunky knit adds texture and warmth. The acrylic-wool blend ensures comfort and durability, perfect for making a statement in cooler weather. The contrast buttons add an extra design element, and the gray color scheme makes it versatile enough to pair with various outfits. Each evil eye motif is carefully knitted into the fabric, creating a unique piece that combines traditional symbolism with modern fashion."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Zara", rating: 5, time: "12 April", comment: "Such a unique design! Always get compliments" },
        { user: "Ruby", rating: 4.5, time: "15 April", comment: "Love the oversized fit and pattern" }
    ],
    vendor_details: {
        soldBy: "CIDER Fashion",
        countryOfOrigin: "China",
        NameOfManufacturer: "CIDER Clothing Co., Ltd",
        AddressOfManufacturer: "Guangzhou Fashion District, China"
    }
},
{
    id: 'cardigans-7',
    name: "Womens Furr Cardigan",
    brand: "CIDER",
    brand_logo: "./images/brands/prada.png",
    price: 17.99,
    category: "Cardigans",
    colors: ["#EED5D1"],
    product_details: {
        list: ["Faux fur texture", "Hook and eye closure", "Collarless design", "3/4 length", "Lined interior"],
        Material: "100% Premium Faux Fur",
        Pattern: "Solid",
        Occasion: "Evening, Luxury Casual",
        Stretchable: "No",
        CareInstructions: "Dry clean only, Store in garment bag"
    },
    images: {
        "#EED5D1": [
            "./images/cardigans/id-7/first.jpg",
            "./images/cardigans/id-7/second.jpg",
            "./images/cardigans/id-7/third.jpg",
            "./images/cardigans/id-7/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Indulge in luxury with this sumptuous Faux Fur Cardigan from CIDER. Crafted with premium quality faux fur in a delicate blush tone, this piece offers the perfect blend of comfort and sophistication. The collarless design creates a clean, modern silhouette while the 3/4 length provides versatile styling options. The hidden hook and eye closures maintain the sleek appearance while the fully lined interior ensures comfort against the skin. Each piece undergoes special treatment to achieve the incredibly soft texture that mimics real fur. The careful color selection of soft blush makes it a luxurious addition to both daytime and evening wear. The structured design holds its shape beautifully while providing elegant draping."
    },
    rating: 4.8,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Lily", rating: 5, time: "20 April", comment: "Luxurious feel, perfect for special occasions" },
        { user: "Harper", rating: 5, time: "25 April", comment: "The quality is outstanding!" }
    ],
    vendor_details: {
        soldBy: "CIDER Fashion",
        countryOfOrigin: "China",
        NameOfManufacturer: "CIDER Clothing Co., Ltd",
        AddressOfManufacturer: "Guangzhou Fashion District, China"
    }
},
{
    id: 'cardigans-8',
    name: "Women Knitted Casual Green Cardigan",
    brand: "CIDER",
    brand_logo: "./images/brands/prada.png",
    price: 60.99,
    category: "Cardigans",
    colors: ["#A8B8B9"],
    product_details: {
        list: ["Fine gauge knit", "V-neck design", "Regular fit", "Patch pockets", "Ribbed trim"],
        Material: "85% Cotton, 15% Cashmere",
        Pattern: "Solid",
        Occasion: "Casual, Work",
        Stretchable: "Yes",
        CareInstructions: "Hand wash cold, Reshape while damp, Lay flat to dry"
    },
    images: {
        "#A8B8B9": [
            "./images/cardigans/id-8/first.jpg",
            "./images/cardigans/id-8/second.jpg",
            "./images/cardigans/id-8/third.jpg",
            "./images/cardigans/id-8/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Experience everyday luxury with this Knitted Casual Green Cardigan from CIDER. The premium cotton-cashmere blend creates an incredibly soft hand feel while maintaining excellent durability. The fine gauge knit provides a polished appearance suitable for both casual and professional settings. The sage green color is carefully chosen to complement various skin tones and outfit combinations. The practical patch pockets add functionality while maintaining the clean lines of the design. The ribbed trim ensures the cardigan keeps its shape through multiple wears. The addition of cashmere elevates this everyday piece to a luxurious essential, providing warmth without bulk. The classic V-neck design and regular fit make it a versatile layering piece that works well with any outfit."
    },
    rating: 4.6,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Alice", rating: 4.5, time: "28 April", comment: "The cashmere blend makes it so soft" },
        { user: "Chloe", rating: 5, time: "1 May", comment: "Perfect for office and weekend wear" }
    ],
    vendor_details: {
        soldBy: "CIDER Fashion",
        countryOfOrigin: "China",
        NameOfManufacturer: "CIDER Clothing Co., Ltd",
        AddressOfManufacturer: "Guangzhou Fashion District, China"
    }
},
{
    id: 'cardigans-9',
    name: "Women Winterwear Self Design Navy White Woollen Over Long Cardigan",
    brand: "CIDER",
    brand_logo: "./images/brands/prada.png",
    price: 45.99,
    category: "Cardigans",
    colors: ["#868AA4", "#000000"], // blue, black
    product_details: {
        list: ["Self-design pattern", "Maxi length", "Shawl collar", "Belt tie closure", "Side pockets"],
        Material: "70% Wool, 30% Polyester",
        Pattern: "Self-design",
        Occasion: "Winter Wear, Casual",
        Stretchable: "Slightly",
        CareInstructions: "Dry clean only, Store folded"
    },
    images: {
        "#868AA4": [
            "./images/cardigans/id-9/blue/first.jpg",
            "./images/cardigans/id-9/blue/second.jpg",
            "./images/cardigans/id-9/blue/third.jpg",
            "./images/cardigans/id-9/blue/fourth.jpg"
        ],
        "#000000": [
            "./images/cardigans/id-9/black/first.jpg",
            "./images/cardigans/id-9/black/second.jpg",
            "./images/cardigans/id-9/black/third.jpg",
            "./images/cardigans/id-9/black/fourth.jpg"
        ],
    },
    KnowYourProduct: {
        text: "Embrace winter elegance with this stunning Over Long Cardigan from CIDER. This maxi-length piece features a sophisticated self-design pattern that adds subtle texture and visual interest. The wool-polyester blend provides exceptional warmth while maintaining a lightweight feel. The shawl collar can be worn multiple ways, offering both style and protection from the cold. The belt tie allows for a customizable fit while creating a flattering silhouette. Available in both navy and black, this cardigan is designed to be a statement winter piece. The side pockets are carefully placed to maintain the clean lines while providing functionality. The self-design pattern is created using a special knitting technique that ensures durability and shape retention. Perfect for those looking for both warmth and style during the colder months."
    },
    rating: 4.7,
    reviews: [
        { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
        { user: "Isabella", rating: 5, time: "5 May", comment: "Perfect winter statement piece" },
        { user: "Scarlett", rating: 4.5, time: "10 May", comment: "Love the length and warmth" }
    ],
    vendor_details: {
        soldBy: "CIDER Fashion",
        countryOfOrigin: "China",
        NameOfManufacturer: "CIDER Clothing Co., Ltd",
        AddressOfManufacturer: "Guangzhou Fashion District, China"
    }
},
]

// denim-jackets:
export const denimjackets=[
    {
        id: 'denimjacket-1',
        name: "Light Blue Stylish Short Women Denim Jacket with Fur Collar and Cozy Hoodie",
        brand: "BELENCIAGA",
        brand_logo: "./images/brands/balenciaga.png", 
        price: 20.99,
        category: "DenimJacket",
        colors: ["#8BBFEE"],
        product_details: {
            list: ["Fur collar with cozy hoodie", "Button closure", "Long sleeves", "2 front pockets", "Cropped length"],
            Material: "100% Cotton Denim",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Slightly stretchable",
            CareInstructions: "Machine wash cold, Do not bleach, Line dry in shade",
        },
        images: {
            "#8BBFEE": [
                "./images/denim-jacket/id-1/first.jpg",
                "./images/denim-jacket/id-1/second.jpg", 
                "./images/denim-jacket/id-1/third.jpg",
                "./images/denim-jacket/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This stylish light blue denim jacket features a cozy fur collar and detachable hood perfect for chilly days. Made from premium cotton denim with slight stretch for comfort. The cropped length and fitted silhouette create a flattering shape. Classic button closure and functional front pockets add practicality. The soft fur collar adds luxe appeal while maintaining casual versatility. An essential piece that effortlessly elevates any casual outfit."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 5, time: "15 March", comment: "Love the fur collar, perfect for winter!" },
            { user: "Olivia", rating: 4, time: "12 March", comment: "Great quality denim, runs slightly small" }
        ],
        vendor_details: {
            soldBy: "Fashion Hub Inc",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Belenciaga Fashion House",
            AddressOfManufacturer: "Via Roma 123, Milan, Italy"
        }
    },
    {
        id: 'denimjacket-2',
        name: "Light Blue Stylish Short Women Denim Jacket with Fur Collar and Cozy Hoodie",
        brand: "BELENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 30.99,
        category: "DenimJacket",
        colors: ["#45628A"],
        product_details: {
            list: ["Premium denim construction", "Button-up front", "Long sleeves with button cuffs", "Chest flap pockets", "Side welt pockets"],
            Material: "98% Cotton, 2% Elastane",
            Pattern: "Solid",
            Occasion: "Casual/Daily wear",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, Tumble dry low",
        },
        images: {
            "#45628A": [
                "./images/denim-jacket/id-2/first.jpg",
                "./images/denim-jacket/id-2/second.jpg",
                "./images/denim-jacket/id-2/third.jpg",
                "./images/denim-jacket/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This classic denim jacket in a rich navy blue shade combines timeless style with modern comfort. The premium stretch denim ensures excellent mobility while maintaining shape. Features traditional jean jacket details like chest flap pockets and adjustable button cuffs. The slightly fitted cut creates a feminine silhouette while still allowing room for layering. Perfect for year-round wear, this versatile piece works equally well over dresses or with casual separates."
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Isabella", rating: 4.0, time: "20 March", comment: "Great fit and beautiful color" },
            { user: "Mia", rating: 4.5, time: "22 March", comment: "Perfect for spring weather" }
        ],
        vendor_details: {
            soldBy: "Luxury Fashion Retail",
            countryOfOrigin: "France",
            NameOfManufacturer: "Belenciaga Paris",
            AddressOfManufacturer: "Rue Saint Honoré 24, Paris, France"
        }
    },
    {
        id: 'denimjacket-3',
        name: "Blue Solid Jacket",
        brand: "BELENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 60.99,
        category: "DenimJacket",
        colors: ["#6883A9"],
        product_details: {
            list: ["Classic collar", "Full button placket", "Long sleeves", "Raw hem detail", "Distressed finish"],
            Material: "100% Cotton Denim",
            Pattern: "Solid with distressed details",
            Occasion: "Casual",
            Stretchable: "Non-stretch",
            CareInstructions: "Hand wash cold, Do not bleach, Hang dry",
        },
        images: {
            "#6883A9": [
                "./images/denim-jacket/id-3/first.jpg",
                "./images/denim-jacket/id-3/second.jpg",
                "./images/denim-jacket/id-3/third.jpg",
                "./images/denim-jacket/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A contemporary take on the classic denim jacket, featuring modern distressed details and raw hem finishing. Made from rigid denim that will develop unique character with wear. The medium-weight fabric provides ideal structure while maintaining comfort. Subtle distressing adds vintage appeal while the clean silhouette keeps it versatile. The classic collar and button placket maintain traditional styling elements. Perfect for achieving that coveted lived-in denim look."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ava", rating: 5.0, time: "25 March", comment: "Love the distressed details!" },
            { user: "Charlotte", rating: 4.5, time: "30 March", comment: "Great quality, classic style" }
        ],
        vendor_details: {
            soldBy: "Premium Denim Co",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "Belenciaga Denim",
            AddressOfManufacturer: "Via Milano 45, Florence, Italy"
        }
    },
    {
        id: 'denimjacket-4',
        name: "Women Black & White Colour Blocked Denim Jacket",
        brand: "BELENCIAGA",
        brand_logo: "./images/brands/balenciaga.png",
        price: 98.99,
        category: "DenimJacket",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["Color blocked design", "Button front closure", "Spread collar", "Long sleeves", "Multiple pockets"],
            Material: "95% Cotton, 5% Elastane",
            Pattern: "Color blocked",
            Occasion: "Casual/Party wear",
            Stretchable: "Moderately stretchy",
            CareInstructions: "Dry clean only",
        },
        images: {
            "#FFFFFF": [
                "./images/denim-jacket/id-4/first.jpg",
                "./images/denim-jacket/id-4/second.jpg",
                "./images/denim-jacket/id-4/third.jpg",
                "./images/denim-jacket/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "Make a bold statement with this striking black and white color blocked denim jacket. The contrasting panels create a modern, artistic aesthetic while maintaining the classic denim jacket silhouette. Premium stretch denim ensures both style and comfort. The strategic color blocking creates a slimming effect while adding visual interest. Multiple pockets and adjustable features maintain functionality. A true statement piece that adds edge to any outfit while remaining surprisingly versatile."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Luna", rating: 5.0, time: "1 April", comment: "Unique design, gets lots of compliments" },
            { user: "Harper", rating: 4.5, time: "5 April", comment: "Perfect fit and great quality" }
        ],
        vendor_details: {
            soldBy: "Designer Denim Boutique",
            countryOfOrigin: "Spain",
            NameOfManufacturer: "Belenciaga España",
            AddressOfManufacturer: "Calle Serrano 30, Madrid, Spain"
        }
    },
    {
        id: 'denimjacket-5',
        name: "Women Solid Black Jacket",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 76.99,
        category: "DenimJacket",
        colors: ["#000000"],
        product_details: {
            list: ["Classic black denim", "Silver hardware", "Adjustable waist tabs", "Chest and side pockets", "Button cuffs"],
            Material: "98% Cotton, 2% Spandex",
            Pattern: "Solid",
            Occasion: "Casual/Evening",
            Stretchable: "Slightly stretchy",
            CareInstructions: "Machine wash cold, Inside out",
        },
        images: {
            "#000000": [
                "./images/denim-jacket/id-5/first.jpg",
                "./images/denim-jacket/id-5/second.jpg",
                "./images/denim-jacket/id-5/third.jpg",
                "./images/denim-jacket/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This sleek black denim jacket is a wardrobe essential that combines versatility with style. The deep black wash creates a sophisticated look that can be dressed up or down. Premium stretch denim ensures comfort while silver hardware adds subtle shine. The classic silhouette features thoughtful details like adjustable waist tabs for a customized fit. Perfect for evening occasions while maintaining casual appeal. The timeless design ensures this piece will remain stylish season after season."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Grace", rating: 5.0, time: "10 April", comment: "Perfect black jacket, very versatile" },
            { user: "Zoe", rating: 5.0, time: "15 April", comment: "Amazing quality and fit" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "ONLY Fashion",
            AddressOfManufacturer: "Copenhagen Fashion District, Denmark"
        }
    },
    {
        id: 'denimjacket-6',
        name: "Love Denim Blue Bomber Jacket",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 23.99,
        category: "DenimJacket",
        colors: ["#6B89AF"],
        product_details: {
            list: ["Bomber style", "Ribbed collar and cuffs", "Zip front closure", "Side pockets", "Quilted lining"],
            Material: "100% Cotton Denim with polyester lining",
            Pattern: "Solid with quilted interior",
            Occasion: "Casual/Streetwear",
            Stretchable: "Non-stretch",
            CareInstructions: "Dry clean recommended",
        },
        images: {
            "#6B89AF": [
                "./images/denim-jacket/id-6/first.jpg",
                "./images/denim-jacket/id-6/second.jpg",
                "./images/denim-jacket/id-6/third.jpg",
                "./images/denim-jacket/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "A unique fusion of classic denim and bomber jacket styles, this piece offers the best of both worlds. The medium wash denim exterior is complemented by sporty ribbed trims and a cozy quilted lining. The bomber silhouette provides a contemporary edge while maintaining denim's timeless appeal. Perfect for transitional weather, the quilted interior adds warmth without bulk. The zip front offers easy wear while side pockets keep essentials close. An innovative take on denim that's perfect for the fashion-forward."
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ruby", rating: 4.0, time: "20 April", comment: "Unique style, warm and comfortable" },
            { user: "Lily", rating: 4.5, time: "25 April", comment: "Love the bomber style in denim" }
        ],
        vendor_details: {
            soldBy: "ONLY Streetwear",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "ONLY Denim Division",
            AddressOfManufacturer: "Aarhus Fashion Center, Denmark"
        }
    },
    {
        id: 'denimjacket-7',
        name: "Pink Spread Collar Long Sleeves Pockets Longline Denim Jacket",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 56.99,
        category: "DenimJacket",
        colors: ["#D66A81"],
        product_details: {
            list: ["Longline cut", "Spread collar", "Multiple pockets", "Side slits", "Adjustable cuffs"],
            Material: "97% Cotton, 3% Elastane",
            Pattern: "Solid pink",
            Occasion: "Casual/Fashion",
            Stretchable: "Moderately stretchy",
            CareInstructions: "Machine wash cold, Gentle cycle",
        },
        images: {
            "#D66A81": [
                "./images/denim-jacket/id-7/first.jpg",
                "./images/denim-jacket/id-7/second.jpg",
                "./images/denim-jacket/id-7/third.jpg",
                "./images/denim-jacket/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This pink longline denim jacket offers a fresh take on classic denim styling. The extended length creates a flattering silhouette while side slits ensure easy movement. The soft pink hue adds a feminine touch to the traditional denim jacket design. Multiple pockets provide functionality while the spread collar maintains a polished look. The stretch denim ensures comfort throughout the longer silhouette. Perfect for those seeking a statement piece that combines trendy styling with practical comfort."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Bella", rating: 5.0, time: "28 April", comment: "Beautiful color, perfect length" },
            { user: "Nina", rating: 4.5, time: "1 May", comment: "Great quality and unique style" }
        ],
        vendor_details: {
            soldBy: "ONLY Fashion Direct",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "ONLY Copenhagen",
            AddressOfManufacturer: "Fashion Street 45, Copenhagen, Denmark"
        }
    },
    {
        id: 'denimjacket-8',
        name: "Womens Spread Collar Sea Green Distressed Solid Crop Denim Jacket",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 46.99,
        category: "DenimJacket",
        colors: ["#B6CAC9", "#E9A49F"],  // green, pink
        product_details: {
            list: ["Cropped length", "Distressed details", "Raw hem", "Button front", "Chest pockets"],
            Material: "100% Cotton",
            Pattern: "Solid with distressing",
            Occasion: "Casual/Festival",
            Stretchable: "Non-stretch",
            CareInstructions: "Hand wash cold, Lay flat to dry",
        },
        images: {
            "#B6CAC9": [
                "./images/denim-jacket/id-8/first.jpg",
                "./images/denim-jacket/id-8/second.jpg",
                "./images/denim-jacket/id-8/third.jpg",
                "./images/denim-jacket/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This cropped denim jacket in sea green offers a fresh perspective on casual wear. The distressed details and raw hem create an effortlessly cool vibe while the cropped length adds modern appeal. Available in both sea green and soft pink for versatile styling options. The rigid denim construction ensures the distressed details maintain their character over time. Perfect for festival season or adding edge to everyday outfits. The spread collar and traditional button front maintain classic denim jacket elements while the unique colors offer contemporary appeal."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Maya", rating: 5.0, time: "5 May", comment: "Love both color options!" },
            { user: "Alice", rating: 4.5, time: "10 May", comment: "Perfect crop length and great colors" }
        ],
        vendor_details: {
            soldBy: "ONLY Youth Fashion",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "ONLY Festival Collection",
            AddressOfManufacturer: "Odense Fashion Hub, Denmark"
        }
    },
    {
        id: 'denimjacket-9',
        name: "Women's Cotton Full Sleeve Denim Jacket with Patch Pockets",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 12.99,
        category: "DenimJacket",
        colors: ["#E4E5D7"],
        product_details: {
            list: ["Oversized patch pockets", "Full sleeves", "Button front", "Contrast stitching", "Washed finish"],
            Material: "100% Cotton",
            Pattern: "Solid with contrast stitching",
            Occasion: "Casual/Workwear",
            Stretchable: "Non-stretch",
            CareInstructions: "Machine wash cold, Line dry",
        },
        images: {
            "#E4E5D7": [
                "./images/denim-jacket/id-9/first.jpg",
                "./images/denim-jacket/id-9/second.jpg",
                "./images/denim-jacket/id-9/third.jpg",
                "./images/denim-jacket/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This utilitarian-inspired denim jacket combines functionality with style through its distinctive patch pockets and classic full-sleeve design. The light wash creates a vintage appeal while contrast stitching adds visual interest. The 100% cotton construction ensures durability and comfort. Large patch pockets provide practical storage while maintaining a fashionable silhouette. Perfect for those seeking a blend of workwear inspiration and contemporary styling. The traditional button front and full sleeves offer classic appeal while the unique pocket design adds modern character."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Claire", rating: 4.5, time: "15 May", comment: "Love the large pockets!" },
            { user: "Eva", rating: 4.5, time: "20 May", comment: "Great everyday jacket" }
        ],
        vendor_details: {
            soldBy: "ONLY Workwear",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "ONLY Essentials",
            AddressOfManufacturer: "Billund Design Center, Denmark"
        }
    }
    ]

// hoodies
export const hoodies=[

    {
        id: 'hoodies-1',
        name: "Warm Quality loose fit hoodie with pocket",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg", 
        price: 59.99,
        category: "Hoodies",
        colors: ["#C29BC8"],
        product_details: {
            list: ["Premium cotton blend fabric", "Loose comfortable fit", "Kangaroo pocket", "Ribbed cuffs and hem", "Drawstring hood"],
            Material: "80% Cotton, 20% Polyester",
            Pattern: "Solid",
            Occasion: "Casual",
            Stretchable: "Slightly stretchy",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#C29BC8": [
                "./images/hoodies/id-1/first.jpg",
                "./images/hoodies/id-1/second.jpg", 
                "./images/hoodies/id-1/third.jpg",
                "./images/hoodies/id-1/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This premium PRADA hoodie exemplifies luxury casual wear at its finest. Crafted from a high-quality cotton-polyester blend, it offers the perfect balance of comfort and durability. The loose fit design provides unrestricted movement while maintaining a fashionable silhouette. The kangaroo pocket adds both functionality and style, while the ribbed cuffs and hem ensure a secure fit. The adjustable drawstring hood offers versatility for different weather conditions. This piece represents PRADA's commitment to combining contemporary street style with luxury craftsmanship."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 5.0, time: "15 March", comment: "Perfect fit and great quality material" },
            { user: "Isabella", rating: 4.0, time: "10 March", comment: "Love the color and pocket design" }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    
    {
        id: 'hoodies-2',
        name: "Women Full Sleeve Round Neck Printed Green Sweatshirt",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg",
        price: 89.99,
        category: "Hoodies",
        colors: ["#169B58", "#D0AEE7"],
        product_details: {
            list: ["Unique printed design", "Full sleeve comfort", "Round neck style", "Soft brushed interior", "Double-needle stitching"],
            Material: "95% Cotton, 5% Elastane",
            Pattern: "Printed",
            Occasion: "Casual, Sports",
            Stretchable: "Yes",
            CareInstructions: "Hand wash cold, do not bleach"
        },
        images: {
            "#169B58": [
                "./images/hoodies/id-2/green/first.jpg",
                "./images/hoodies/id-2/green/second.jpg",
                "./images/hoodies/id-2/green/third.jpg",
                "./images/hoodies/id-2/green/fourth.jpg"
            ],
            "#1#D0AEE7": [
                "./images/hoodies/id-2/purple/first.jpg",
                "./images/hoodies/id-2/purple/second.jpg",
                "./images/hoodies/id-2/purple/third.jpg",
                "./images/hoodies/id-2/purple/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This fashionable PRADA sweatshirt combines style with supreme comfort. The unique printed design showcases artistic expression while maintaining the brand's sophisticated aesthetic. The full sleeve design with round neck offers classic styling that suits various body types. The soft brushed interior provides warmth and comfort, making it perfect for cooler weather. The addition of elastane ensures the garment maintains its shape while providing flexibility in movement. The double-needle stitching demonstrates PRADA's attention to quality and durability, making this piece a worthy addition to any fashion-forward wardrobe."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Olivia", rating: 5.0, time: "12 March", comment: "The print quality is exceptional" },
            { user: "Mia", rating: 4.5, time: "5 March", comment: "Perfect for daily wear, very comfortable" }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    
    {
        id: 'hoodies-3',
        name: "Ivory Embroidered Cotton Poly Fleece Women's Sweatshirt",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.png",
        price: 79.99,
        category: "Hoodies",
        colors: ["#E9DACB"],
        product_details: {
            list: ["Elegant embroidery work", "Poly fleece material", "Ribbed collar", "Drop shoulder design", "Side pockets"],
            Material: "70% Cotton, 30% Polyester Fleece",
            Pattern: "Embroidered",
            Occasion: "Casual, Evening",
            Stretchable: "Moderately",
            CareInstructions: "Gentle machine wash, lay flat to dry"
        },
        images: {
            "#E9DACB": [
                "./images/hoodies/id-3/first.jpg",
                "./images/hoodies/id-3/second.jpg",
                "./images/hoodies/id-3/third.jpg",
                "./images/hoodies/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This exquisite PRADA sweatshirt elevates casual wear to new heights of sophistication. The detailed embroidery work showcases traditional craftsmanship with a modern twist. The poly fleece material provides exceptional warmth without compromising on style. The drop shoulder design creates a relaxed silhouette while maintaining elegance. The ribbed collar ensures durability and shape retention, while side pockets add functionality. The ivory color serves as a perfect canvas for the intricate embroidery, making this piece versatile enough to transition from day to evening wear. The cotton-polyester blend ensures both comfort and longevity, representing PRADA's commitment to quality and style."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Charlotte", rating: 5.0, time: "14 March", comment: "The embroidery detail is stunning" },
            { user: "Ava", rating: 5.0, time: "8 March", comment: "Perfect blend of comfort and style" }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    
    {
        id: 'hoodies-4',
        name: "Women Full Sleeve Round Neck Solid White Sweatshirt",
        brand: "ONLY",
        brand_logo: "./images/brands/prada.jpg",
        price: 69.99,
        category: "Hoodies",
        colors: ["#FFFFFF"],
        product_details: {
            list: ["Classic white design", "Premium cotton blend", "Raglan sleeves", "Reinforced seams", "Crew neck"],
            Material: "85% Cotton, 15% Polyester",
            Pattern: "Solid",
            Occasion: "Casual, Sports, Loungewear",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold, avoid bleach"
        },
        images: {
            "#FFFFFF": [
                "./images/hoodies/id-4/first.jpg",
                "./images/hoodies/id-4/second.jpg",
                "./images/hoodies/id-4/third.jpg",
                "./images/hoodies/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This ONLY white sweatshirt is a testament to timeless style and comfort. The classic design features raglan sleeves for enhanced mobility and a traditional crew neck for a clean look. The premium cotton blend fabric offers breathability while maintaining shape and durability. Reinforced seams ensure longevity, making this piece a reliable wardrobe staple. The versatile white color makes it perfect for layering or wearing alone. The careful construction and attention to detail reflect ONLY's commitment to creating high-quality casual wear that combines style with functionality. This sweatshirt is designed to maintain its pristine appearance through multiple washes while providing consistent comfort."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Luna", rating: 4.5, time: "16 March", comment: "Great basic piece, very versatile" },
            { user: "Grace", rating: 4.8, time: "10 March", comment: "Perfect fit and excellent quality" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },
    
    {
        id: 'hoodies-5',
        name: "Women Lavender Solid Sweatshirt",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 79.99,
        category: "Hoodies",
        colors: ["#C4C5FB"],
        product_details: {
            list: ["Soft lavender shade", "Brushed fleece interior", "Ribbed hem and cuffs", "Relaxed fit", "Dropped shoulders"],
            Material: "80% Cotton, 20% Polyester",
            Pattern: "Solid",
            Occasion: "Casual, Lounge",
            Stretchable: "Slightly",
            CareInstructions: "Machine wash cold, tumble dry low"
        },
        images: {
            "#C4C5FB": [
                "./images/hoodies/id-5/first.jpg",
                "./images/hoodies/id-5/second.jpg",
                "./images/hoodies/id-5/third.jpg",
                "./images/hoodies/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This ONLY lavender sweatshirt embodies casual elegance with its soothing color palette and thoughtful design elements. The brushed fleece interior provides exceptional comfort and warmth, while the relaxed fit ensures unrestricted movement. The dropped shoulders create a contemporary silhouette that's both fashionable and comfortable. The ribbed hem and cuffs add structure while maintaining the garment's shape through repeated wear. The carefully chosen lavender shade offers a fresh take on casual wear, making it perfect for various styling options. The cotton-polyester blend ensures durability while maintaining the soft feel that ONLY is known for. This sweatshirt represents the perfect balance between style, comfort, and practicality."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Harper", rating: 5.0, time: "13 March", comment: "The color is even prettier in person" },
            { user: "Lily", rating: 4.5, time: "7 March", comment: "So soft and cozy, love it!" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },
    
    {
        id: 'hoodies-6',
        name: "Women Checks Crop Hoodie",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 89.99,
        category: "Hoodies",
        colors: ["#A8BFD4"],
        product_details: {
            list: ["Trendy crop length", "Check pattern design", "Adjustable hood", "Front kangaroo pocket", "Raw edge hem"],
            Material: "100% Cotton",
            Pattern: "Checks",
            Occasion: "Casual, Street Style",
            Stretchable: "No",
            CareInstructions: "Cold wash, do not tumble dry"
        },
        images: {
            "#A8BFD4": [
                "./images/hoodies/id-6/first.jpg",
                "./images/hoodies/id-6/second.jpg",
                "./images/hoodies/id-6/third.jpg",
                "./images/hoodies/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This ONLY crop hoodie represents the perfect fusion of classic patterns and contemporary styling. The check pattern adds a sophisticated touch to the casual crop design, making it a versatile piece for modern wardrobes. The 100% cotton construction ensures breathability and comfort, while the raw edge hem adds an element of edgy style. The adjustable hood and kangaroo pocket maintain functionality without compromising the aesthetic appeal. The cropped length is carefully calculated to hit at the perfect point, making it ideal for high-waisted bottoms. The blue-toned check pattern offers a fresh take on a classic design, while the quality construction ensures the pattern maintains its clarity through washing. This piece exemplifies ONLY's ability to transform traditional elements into contemporary fashion statements."
        },
        rating: 4.6,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Zoe", rating: 4.8, time: "11 March", comment: "Perfect crop length, great pattern" },
            { user: "Ruby", rating: 4.5, time: "5 March", comment: "Stylish and well-made" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },
    
    {
        id: 'hoodies-7',
        name: "I'M Not A Morning Person Drawstring Crop Hoodie",
        brand: "CIDER",
        brand_logo: "./images/brands/prada.jpg",
        price: 39.99,
        category: "Hoodies",
        colors: ["#BAB7B2"],
        product_details: {
            list: ["Quirky text print", "Cropped length", "Adjustable drawstring", "Fleece lining", "Relaxed shoulders"],
            Material: "65% Cotton, 35% Polyester",
            Pattern: "Graphic Print",
            Occasion: "Casual, Lounge",
            Stretchable: "Slightly",
            CareInstructions: "Machine wash cold, inside out"
        },
        images: {
            "#BAB7B2": [
                "./images/hoodies/id-7/first.jpg",
                "./images/hoodies/id-7/second.jpg",
                "./images/hoodies/id-7/third.jpg",
                "./images/hoodies/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This playful CIDER crop hoodie combines humor with style in a perfectly balanced casual piece. The witty 'I'M Not A Morning Person' text print adds personality while maintaining a clean, modern aesthetic. The cropped silhouette is designed to be flattering on various body types, while the fleece lining ensures comfort during wear. The adjustable drawstring allows for customizable fit options, and the relaxed shoulders create a comfortable, laid-back look. The neutral gray color serves as a versatile base for the statement text, making it easy to incorporate into various outfits. The cotton-polyester blend provides the perfect balance of comfort and durability, while the quality printing ensures the text remains crisp through multiple washes. This hoodie represents CIDER's commitment to creating fashion that speaks to the modern consumer's desire for both style and self-expression."
        },
        rating: 4.8,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Bella", rating: 5.0, time: "15 March", comment: "Love the message and the fit!" },
            { user: "Nina", rating: 5.0, time: "9 March", comment: "Perfect for lazy mornings, super comfy" }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "United States",
            NameOfManufacturer: "CIDER Apparel Inc.",
            AddressOfManufacturer: "Los Angeles, CA, United States"
        }
    },
    
    {
        id: 'hoodies-8',
        name: "Women Full Sleeve Round Neck Printed Pink Sweatshirt",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 49.99,
        category: "Hoodies",
        colors: ["#D50057"],
        product_details: {
            list: ["Vibrant pink color", "Custom print design", "Ribbed neckline", "Fitted cuffs", "Medium weight fabric"],
            Material: "90% Cotton, 10% Spandex",
            Pattern: "Printed",
            Occasion: "Casual, Street Style",
            Stretchable: "Yes",
            CareInstructions: "Wash with similar colors, low iron if needed"
        },
        images: {
            "#D50057": [
                "./images/hoodies/id-8/first.jpg",
                "./images/hoodies/id-8/second.jpg",
                "./images/hoodies/id-8/third.jpg",
                "./images/hoodies/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This CIDER pink sweatshirt makes a bold statement with its vibrant color and unique print design. The medium-weight fabric provides the perfect balance between warmth and breathability, making it suitable for various weather conditions. The addition of spandex to the cotton blend ensures the garment maintains its shape while offering excellent stretch and recovery. The ribbed neckline provides durability and structure, while the fitted cuffs create a clean, finished look. The custom print is carefully applied using high-quality techniques to ensure longevity. The full sleeve design offers complete coverage while maintaining a fashionable silhouette. This piece exemplifies CIDER's expertise in combining eye-catching designs with practical comfort, creating a sweatshirt that's both a fashion statement and a comfortable everyday essential."
        },
        rating: 4.7,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Maya", rating: 5.0, time: "12 March", comment: "The pink color is perfect!" },
            { user: "Alice", rating: 4.5, time: "6 March", comment: "Great quality and beautiful design" }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "United States",
            NameOfManufacturer: "CIDER Apparel Inc.",
            AddressOfManufacturer: "Los Angeles, CA, United States"
        }
    },
    
    {
        id: 'hoodies-9',
        name: "Warm Quality loose fit hoodie with pocket",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 89.99,
        category: "Hoodies",
        colors: ["#F1EACC"],
        product_details: {
            list: ["Oversized fit", "Large kangaroo pocket", "Heavy-weight fabric", "Double-layered hood", "Extended cuffs"],
            Material: "75% Cotton, 25% Polyester",
            Pattern: "Solid",
            Occasion: "Casual, Winter Wear",
            Stretchable: "Minimal",
            CareInstructions: "Machine wash cold, reshape while damp"
        },
        images: {
            "#F1EACC": [
                "./images/hoodies/id-9/first.jpg",
                "./images/hoodies/id-9/second.jpg",
                "./images/hoodies/id-9/third.jpg",
                "./images/hoodies/id-9/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This CIDER loose fit hoodie represents the ultimate in comfort and practical style. The oversized silhouette is carefully designed to provide a fashionable yet comfortable fit that's perfect for layering. The heavy-weight fabric offers superior warmth while maintaining breathability, making it ideal for colder weather. The double-layered hood provides extra protection against the elements, while the extended cuffs add both style and functionality. The large kangaroo pocket is perfectly positioned for both hand warming and storage. The cream color offers a sophisticated neutral that pairs easily with any outfit. The cotton-polyester blend is chosen specifically for its durability and comfort, ensuring this hoodie maintains its shape and softness through repeated wear. This piece showcases CIDER's attention to both practical details and contemporary styling, creating a hoodie that's both functional and fashionable."
        },
        rating: 4.9,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Claire", rating: 5.0, time: "14 March", comment: "Best hoodie I've ever owned" },
            { user: "Eva", rating: 5.0, time: "8 March", comment: "So warm and cozy, perfect fit" }
        ],
        vendor_details: {
            soldBy: "CIDER Official Store",
            countryOfOrigin: "United States",
            NameOfManufacturer: "CIDER Apparel Inc.",
            AddressOfManufacturer: "Los Angeles, CA, United States"
        }
    }
    
    ]


// blazers:
export const blazers = [ 
    {
        id: 'blazers-1',
        name: "Black Front Open Blazer",
        brand: "PRADA",
        brand_logo: "./images/brands/prada.jpg", 
        price: 67.99,
        category: "Blazers",
        colors: ["#000000"],
        product_details: {
            list: ["Front open style", "Full sleeves", "Regular fit", "Lapel collar", "2 front pockets"],
            Material: "Polyester blend",
            Pattern: "Solid",
            Occasion: "Formal, Office wear",
            Stretchable: "Slightly stretchable",
            CareInstructions: "Dry clean only"
        },
        images: {
            "#000000": [
                "./images/blazers/id-1/first.jpg",
                "./images/blazers/id-2/second.jpg", 
                "./images/blazers/id-3/third.jpg",
                "./images/blazers/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This sophisticated black blazer from PRADA embodies timeless elegance and versatility. The front-open design offers effortless styling, while the premium polyester blend ensures comfort and durability. Perfect for professional settings, its clean lines and expert tailoring create a polished silhouette. The blazer features practical front pockets and a classic lapel collar, making it a must-have piece for any modern wardrobe. The slight stretch in the fabric allows for comfortable movement throughout your day."
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Emma", rating: 4.0, time: "15 March", comment: "Great quality, perfect for office wear" },
            { user: "Isabella", rating: 4.5, time: "10 March", comment: "Excellent fit and very versatile" }
        ],
        vendor_details: {
            soldBy: "PRADA Official Store",
            countryOfOrigin: "Italy",
            NameOfManufacturer: "PRADA S.p.A",
            AddressOfManufacturer: "Via Antonio Fogazzaro, 28, 20135 Milano MI, Italy"
        }
    },
    {
        id: 'blazers-2',
        name: "Navy Asymmetric Cropped Hem Collar Striped Blazer",
        brand: "CIDER",
        brand_logo: "./images/brands/prada.jpg",
        price: 89.99,
        category: "Blazers",
        colors: ["#19181E"],
        product_details: {
            list: ["Asymmetric hem", "Cropped length", "Striped pattern", "Notched collar", "Single button closure"],
            Material: "Cotton blend",
            Pattern: "Striped",
            Occasion: "Casual, Semi-formal",
            Stretchable: "Non-stretchable",
            CareInstructions: "Machine wash cold"
        },
        images: {
            "#19181E": [
                "./images/blazers/id-2/first.jpg",
                "./images/blazers/id-2/second.jpg",
                "./images/blazers/id-2/third.jpg",
                "./images/blazers/id-2/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This contemporary navy blazer from CIDER combines classic tailoring with modern design elements. The asymmetric cropped hem adds a unique twist to the traditional blazer silhouette, while the striped pattern brings subtle sophistication. The cotton blend fabric ensures breathability and comfort. The notched collar and single button closure maintain a sleek profile, perfect for those seeking a fashion-forward yet professional look. This piece works beautifully for both office settings and casual outings, demonstrating versatile style at its best."
        },
        rating: 4.2,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Lily", rating: 4.0, time: "12 March", comment: "Love the unique design, fits perfectly" },
            { user: "Mia", rating: 4.0, time: "5 March", comment: "Great for both work and casual wear" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    {
        id: 'blazers-3',
        name: "Single Breasted Solid Blazer",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 60.99,
        category: "Blazers",
        colors: ["#BBBBB9"],
        product_details: {
            list: ["Single breasted", "Regular fit", "Notched lapel", "Three button closure", "Lined interior"],
            Material: "Wool blend",
            Pattern: "Solid",
            Occasion: "Formal, Business",
            Stretchable: "Non-stretchable",
            CareInstructions: "Dry clean only"
        },
        images: {
            "#BBBBB9": [
                "./images/blazers/id-3/first.jpg",
                "./images/blazers/id-3/second.jpg",
                "./images/blazers/id-3/third.jpg",
                "./images/blazers/id-3/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This classic single-breasted blazer represents timeless sophistication. Crafted from a premium wool blend, it offers warmth and durability while maintaining a refined appearance. The notched lapel and three-button closure follow traditional tailoring standards, ensuring a professional look. The lined interior provides smooth wear and added comfort. This versatile piece is perfect for business meetings, formal events, or any occasion requiring polished attire. The neutral grey tone makes it easy to coordinate with various outfits, while the quality construction ensures long-lasting wear."
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Charlotte", rating: 4.5, time: "8 March", comment: "Perfect fit and excellent quality" },
            { user: "Ava", rating: 4.2, time: "1 March", comment: "Great for business meetings" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    {
        id: 'blazers-4',
        name: "Women Navy Blue Check Blazer",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 45.99,
        category: "Blazers",
        colors: ["#33333F"],
        product_details: {
            list: ["Check pattern", "Slim fit", "Peak lapel", "Double button closure", "Four pocket design"],
            Material: "Polyester blend",
            Pattern: "Check",
            Occasion: "Formal, Office wear",
            Stretchable: "Slightly stretchable",
            CareInstructions: "Dry clean recommended"
        },
        images: {
            "#33333F": [
                "./images/blazers/id-4/first.jpg",
                "./images/blazers/id-4/second.jpg",
                "./images/blazers/id-4/third.jpg",
                "./images/blazers/id-4/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This navy blue check blazer combines classic pattern with modern tailoring. The subtle check design adds visual interest while maintaining professional appeal. The slim fit silhouette creates a flattering shape, while the peak lapel adds a touch of sophistication. Four pockets provide both functionality and style. The slightly stretchable polyester blend ensures comfort during long work days. Perfect for the fashion-conscious professional, this blazer effortlessly transitions from day to evening wear. The timeless navy color and check pattern make it a versatile addition to any wardrobe."
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Grace", rating: 4.2, time: "10 March", comment: "Love the check pattern, very professional" },
            { user: "Zoe", rating: 4.3, time: "5 March", comment: "Great fit and comfortable for all-day wear" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    {
        id: 'blazers-5',
        name: "Collar Solid Button Crop Blazer",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 78.99,
        category: "Blazers",
        colors: ["#765D4F"],
        product_details: {
            list: ["Cropped length", "Regular collar", "Single button", "Side pockets", "Fitted silhouette"],
            Material: "Cotton blend",
            Pattern: "Solid",
            Occasion: "Casual, Semi-formal",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold"
        },
        images: {
            "#765D4F": [
                "./images/blazers/id-5/first.jpg",
                "./images/blazers/id-5/second.jpg",
                "./images/blazers/id-5/third.jpg",
                "./images/blazers/id-5/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This trendy cropped blazer from ONLY offers a fresh take on traditional tailoring. The shortened length makes it perfect for high-waisted bottoms, while the fitted silhouette creates a sleek, modern look. The single button closure and regular collar maintain clean lines, while side pockets add functionality. The cotton blend fabric provides comfort and breathability, with added stretch for ease of movement. This versatile piece works well for both casual outings and semi-formal events. The warm brown tone adds sophistication while being easily paired with various colors and styles."
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Harper", rating: 4.4, time: "15 March", comment: "Perfect cropped length, very versatile" },
            { user: "Luna", rating: 4.3, time: "8 March", comment: "Great quality and stylish design" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },
    {
        id: 'blazers-6',
        name: "Notched Collar Single Button Closure Two Flap Pocket Blazer",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 45.99,
        category: "Blazers",
        colors: ["#DFE6EC"],
        product_details: {
            list: ["Notched collar", "Single button", "Two flap pockets", "Full sleeves", "Regular fit"],
            Material: "Polyester blend",
            Pattern: "Solid",
            Occasion: "Formal, Business casual",
            Stretchable: "Slightly",
            CareInstructions: "Dry clean only"
        },
        images: {
            "#DFE6EC": [
                "./images/blazers/id-6/first.jpg",
                "./images/blazers/id-6/second.jpg",
                "./images/blazers/id-6/third.jpg",
                "./images/blazers/id-6/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This sophisticated blazer combines classic design elements with modern functionality. The notched collar and single button closure create a timeless silhouette, while the two flap pockets add practical storage and visual interest. The light grey color offers versatility and professional appeal. Crafted from a quality polyester blend, this blazer provides comfort with a slight stretch for easy movement. The regular fit ensures a flattering shape without being too tight. Perfect for office wear or business casual settings, this blazer demonstrates ONLY's commitment to combining style with practicality."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Olivia", rating: 4.6, time: "12 March", comment: "Perfect fit and excellent quality" },
            { user: "Emma", rating: 4.4, time: "5 March", comment: "Great for work, very professional looking" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },
    {
        id: 'blazers-7',
        name: "Women Khaki Regular Fit Blazer",
        brand: "ONLY",
        brand_logo: "./images/brands/only.png",
        price: 39.99,
        category: "Blazers",
        colors: ["#A19072"],
        product_details: {
            list: ["Regular fit", "Notched lapel", "Two button closure", "Front pockets", "Back vent"],
            Material: "Cotton blend",
            Pattern: "Solid",
            Occasion: "Casual, Office wear",
            Stretchable: "Yes",
            CareInstructions: "Machine wash cold"
        },
        images: {
            "#A19072": [
                "./images/blazers/id-7/first.jpg",
                "./images/blazers/id-7/second.jpg",
                "./images/blazers/id-7/third.jpg",
                "./images/blazers/id-7/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "This khaki blazer offers a perfect blend of casual comfort and professional style. The regular fit ensures easy movement while maintaining a polished appearance. The cotton blend fabric provides breathability and natural stretch, making it ideal for all-day wear. The classic notched lapel and two-button closure create a timeless look, while the back vent adds mobility. The neutral khaki color makes it incredibly versatile, easily paired with both light and dark pieces. This blazer is perfect for creating sophisticated casual looks or adding a relaxed touch to office attire."
        },
        rating: 4.3,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Isabella", rating: 4.2, time: "10 March", comment: "Great casual blazer, very comfortable" },
            { user: "Mia", rating: 4.3, time: "5 March", comment: "Perfect for business casual wear" }
        ],
        vendor_details: {
            soldBy: "ONLY Official Store",
            countryOfOrigin: "Denmark",
            NameOfManufacturer: "Bestseller A/S",
            AddressOfManufacturer: "Fredskovvej 5, 7330 Brande, Denmark"
        }
    },
    {
        id: 'blazers-8',
        name: "Grey Renee Blazer",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 89.99,
        category: "Blazers",
        colors: ["#A09794"],
        product_details: {
            list: ["Slim fit", "Peaked lapel", "Single button", "Welt pockets", "Lined interior"],
            Material: "Polyester blend",
            Pattern: "Solid",
            Occasion: "Formal, Evening wear",
            Stretchable: "Slightly",
            CareInstructions: "Dry clean only"
        },
        images: {
            "#A09794": [
                "./images/blazers/id-8/first.jpg",
                "./images/blazers/id-8/second.jpg",
                "./images/blazers/id-8/third.jpg",
                "./images/blazers/id-8/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Grey Renee Blazer is a testament to modern sophistication. This slim-fit blazer features a peaked lapel that adds a touch of drama to its sleek silhouette. The single button closure creates a flattering line, while welt pockets maintain the blazer's clean appearance. The fully lined interior ensures smooth wear and adds structure. The versatile grey tone works perfectly for both day and evening occasions. This piece exemplifies CIDER's attention to detail and commitment to creating pieces that transition seamlessly from office to evening events."
        },
        rating: 4.4,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Ava", rating: 4.4, time: "15 March", comment: "Elegant design, perfect for special occasions" },
            { user: "Charlotte", rating: 4.3, time: "8 March", comment: "Beautiful blazer, great quality" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    {
        id: 'blazers-9',
        name: "Grey Poised Perfection Crop Blazer",
        brand: "CIDER",
        brand_logo: "./images/brands/cider.png",
        price: 45.99,
        category: "Blazers",
        colors: ["#D5C9C9", "#F8C9D3"],
        product_details: {
            list: ["Cropped length", "Slim fit", "Notched lapel", "Double button", "Flap pockets"],
            Material: "Polyester blend",
            Pattern: "Solid",
            Occasion: "Casual, Party wear",
            Stretchable: "Yes",
            CareInstructions: "Hand wash cold"
        },
        images: {
            "#D5C9C9": [
                "./images/blazers/id-9/grey/first.jpg",
                "./images/blazers/id-9/grey/second.jpg",
                "./images/blazers/id-9/grey/third.jpg",
                "./images/blazers/id-9/grey/fourth.jpg"
            ],
            "#F8C9D3": [
                "./images/blazers/id-9/pink/first.jpg",
                "./images/blazers/id-9/pink/second.jpg",
                "./images/blazers/id-9/pink/third.jpg",
                "./images/blazers/id-9/pink/fourth.jpg"
            ],
        },
        KnowYourProduct: {
            text: "The Grey Poised Perfection Crop Blazer offers a fresh, youthful take on classic tailoring. Available in both sophisticated grey and feminine pink, this blazer features a modern cropped length perfect for contemporary styling. The slim fit creates a sleek silhouette, while the notched lapel maintains professional appeal. Double button closure and flap pockets add traditional elements to this modern piece. The stretchable polyester blend ensures comfort and ease of movement. This blazer is ideal for those seeking to add a fashion-forward edge to their wardrobe while maintaining versatility."
        },
        rating: 4.5,
        reviews: [
            { user: "Sophia", rating: 4.5, time: "18 March", comment: "Feels comfortable and looks amazing!" },
            { user: "Luna", rating: 4.6, time: "12 March", comment: "Love both colors, perfect cropped length" },
            { user: "Harper", rating: 4.4, time: "5 March", comment: "Stylish and versatile, great purchase" }
        ],
        vendor_details: {
            soldBy: "CIDER Fashion",
            countryOfOrigin: "China",
            NameOfManufacturer: "CIDER Clothing Co., Ltd",
            AddressOfManufacturer: "Guangzhou Fashion District, China"
        }
    },
    ]


export const Clothing = [...tshirts, ...tanktops, ...croptops, ...sweatshirts, ...poloshirts, ...denimshirts, ...formalshirts, ...bodycon, ...floraldress, ...formaltrousers, ...jeans, ...joggers, ...jumpsuits, ...mididress, ...offshoulder, ...shorts, ...skirts, ...slipdress, ...shrugs, ...cardigans, ...denimjackets, ...hoodies, ...blazers];



