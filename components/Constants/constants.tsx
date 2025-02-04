import { ProductList as ProductListType } from "@/lib/types/ProductType";

interface ModalData {
  modalData: string;
}

export const modalData: ModalData = {
  modalData: `
      Thank you for shopping with NextCommerce. Your privacy is important to us. 
      This Privacy Policy explains how we collect, use, disclose, and safeguard 
      your information when you visit our website and use our services.
  
      1. Information We Collect
      - Personal Information: Name, email address, phone number, shipping address, billing information, and payment details.
      - Account Information: Username, password, and order history.
      - Usage Data: IP address, browser type, pages visited, and interactions with our website.
      - Cookies & Tracking Technologies: We use cookies and similar technologies to enhance user experience and improve our services.
  
      2. How We Use Your Information
      - To process and fulfill orders, payments, and deliveries.
      - To provide customer support and respond to inquiries.
      - To send order updates, promotional offers, and newsletters (with your consent).
      - To analyze trends and improve our website and services.
      - To comply with legal obligations and prevent fraud.
  
      3. How We Share Your Information
      - We do not sell or rent your personal information.
      - We may share data with service providers (e.g., payment processors, shipping partners).
      - Legal authorities if required by law.
  
      4. Security of Your Information
      - We implement reasonable security measures to protect your personal data.
  
      5. Your Rights & Choices
      - You may have rights to access, correct, delete, or restrict your data.
      - Opt-out options for marketing communications.
  
      6. Contact Us
      - NextCommerce@gmail.com
      - 6293,Nairobi,Kenya
    `,
};

export const termsOfUseData: ModalData = {
  modalData: `
      Thank you for choosing to shop with us. By accessing and using our website, you agree to be bound by these Terms of Use.
  
      1. **Acceptance of Terms**
        - By using our website, you accept and agree to these Terms of Use. If you disagree with any part of these terms, please refrain from using our services.
  
      2. **User Accounts**
        - To access certain features, you may need to create an account. You are responsible for keeping your login credentials secure.
        - You agree to provide accurate, current, and complete information when creating your account.
  
      3. **Product Information**
        - We strive for accuracy in product descriptions, pricing, and availability. However, we do not guarantee the accuracy or completeness of the content.
  
      4. **Orders and Payments**
        - All orders are subject to availability and acceptance.
        - Payment for products will be processed securely via trusted payment gateways.
  
      5. **Shipping and Delivery**
        - Delivery times may vary based on product availability, location, and shipping method.
        - You will be notified of estimated delivery times upon checkout.
  
      6. **Returns and Refunds**
        - We offer a return and refund policy for eligible products. Returned items must be in their original condition, and the return process must be initiated within a specified period (usually 14-30 days).
      
      7. **Privacy and Data Protection**
        - We collect personal information in accordance with our Privacy Policy. By using our services, you consent to our collection and use of your data as outlined in the policy.
  
      8. **Limitation of Liability**
        - We are not liable for any damages, losses, or costs arising from your use of the website or products purchased.
  
      9. **Amendments to Terms**
        - We reserve the right to update these Terms of Use. Any changes will be posted on this page, and it is your responsibility to review them periodically.
    `,
};

export const faqData: ModalData = {
  modalData: `
      **Frequently Asked Questions (FAQ)**
  
      1. **How do I place an order?**
        - Browse our product catalog, add items to your cart, and proceed to checkout. You will be prompted to create an account or log in, then enter your shipping details and payment information.
  
      2. **How can I track my order?**
        - After placing your order, you will receive an email with a tracking number. You can use this to track your package through the shipping carrier's website.
  
      3. **What payment methods do you accept?**
        - We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment options.
  
      4. **Can I modify or cancel my order?**
        - Once an order is placed, it is processed immediately to ensure quick delivery. Therefore, we cannot modify or cancel an order once it's confirmed. Please review your order carefully before checkout.
  
      5. **How do I return a product?**
        - If you're not satisfied with your purchase, please visit our Returns & Refunds page for detailed instructions. Products must be returned within the allowed time frame and in their original condition.
  
      6. **What do I do if my product is damaged or defective?**
        - If your product arrives damaged or defective, please contact our customer service team immediately. We will assist you in resolving the issue, including issuing a replacement or refund if applicable.
  
      7. **How can I contact customer support?**
        - For assistance, you can reach us via email at support@yourstore.com or through our contact page on the website.
  
      8. **Do you offer gift cards?**
        - Yes, we offer digital gift cards that can be purchased directly from our website and used at checkout.
  
      9. **Is my personal information safe?**
        - Yes, we take your privacy seriously. We use industry-standard encryption and security measures to protect your personal data. Please refer to our Privacy Policy for more information.
    `,
};

export const ProductList: ProductListType = {
  productList: [
    {
      _id: "1",
      name: "BULLMER Men Red Cotton Blend Printed Single T-shirt T Shirt For Men Update",
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727720331/zrn25ekpdtf7mszsrd3r.webp",
      oldprice: 10,
      newprice: 5,
      rating: 5,
      discount: 10,
    },
    {
      _id: "2",
      name: "Gespo Solid Teal Blue Spread Collar Half Sleeve Casual Shirt",
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727777838/rwrdgdp0llbx7ga2hi8p.webp",
      oldprice: 15,
      newprice: 10,
      rating: 4,
      discount: 20,
    },
    {
      _id: "3",
      name: "Popwings Casual Women Solid White Square Neck Regular Top | Short Sleeves Tops | Regular Tops | Women Tops | Tops | Latest Design Tops | Stylish Tops | Trendy Tops",
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727778053/jwqmjobotwfyt5fyouow.webp",
      oldprice: 20,
      newprice: 15,
      rating: 3,
      discount: 30,
    },
    {
      _id: "4",
      name: "1 Stop Fashion Women's Multicolor Printed Crepe Straight Kurta",
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727778206/golhehprtctxtuitg3i0.webp",
      oldprice: 25,
      newprice: 20,
      rating: 2,
      discount: 40,
    },
    {
      _id: "5",
      name: "RUPELIK Samsung Galaxy Note 10 Black Polycarbonate Magnetic, Shock-Absorbent Mirror Flip Case Cover|FLIP CPOVER| MOBILE COVER| BACK COVER| MOBILE CASE| FLIP COVE",
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727778403/ehbn9gu0sprfpfsg7mrs.webp",
      oldprice: 30,
      newprice: 25,
      rating: 1,
      discount: 50,
    },
    {
      _id: "6",
      name: "Apple iPhone 16 128 GB, Ultramarine",
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727778585/zppwhm1manh1uvcnhu6q.webp",
      oldprice: 35,
      newprice: 30,
      rating: 5,
      discount: 60,
    },
    {
      _id: "7",
      name: "TP-Link UE200 USB 2.0 to 100 Mbps Ethernet Network Adapter - Plug and Play",
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727778738/mfocra2okisyjbkveux3.webp",
      oldprice: 40,
      newprice: 35,
      rating: 4,
      discount: 70,
    },
    {
      _id: "8",
      name: 'CHUWI HeroBook Plus 15.6" FHD Laptop, Intel Celeron N4020 Dual Core Processor Upto 2.80GHz, 8GB RAM, 256GB SSD, Intel UHD Graphics, Windows 11,WiFi 6,Webcam,BT 5.2,HDMI Port,38Wh, 1.74kg (Iron Gray)',
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727778894/kmh5u8impdxfkys0kpym.webp",
      oldprice: 45,
      newprice: 40,
      rating: 3,
      discount: 80,
    },
    {
      _id: "9",
      name: "Tomato 1 kg",
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727779031/tchv3vz5d5d6w9aw7bwh.webp",
      oldprice: 50,
      newprice: 45,
      rating: 2,
      discount: 90,
    },
    {
      _id: "10",
      name: "Mosambi 1 kg",
      image:
        "https://res.cloudinary.com/doiqwg8h9/image/upload/v1727779182/pkk40midde2nkde2hj8p.webp",
      oldprice: 55,
      newprice: 50,
      rating: 1,
      discount: 100,
    },
  ],
};
