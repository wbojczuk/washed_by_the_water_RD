interface Service{
    name: string
    shortDesc: string
    desc: string
    img: string
}

const serviceData: Service[] = [
    
    {
        img: "./img/services/landscaping.webp",
        name: "Landscaping",
        shortDesc: "Our landscaping service transforms outdoor spaces into beautiful, functional areas tailored to your needs.",
        desc: `Our landscaping service transforms outdoor spaces into beautiful, functional areas tailored to your needs. We handle everything from planting and lawn care to designing and installing stunning garden features, ensuring your property looks its best year-round.`
    },
    
    
    {
        img: "./img/services/lawn.webp",
        name: "Lawncare",
        shortDesc: "Our professional lawn care services ensure your grass stays lush, green, and well-manicured all year round.",
        desc: `Lawn care involves maintaining the health and appearance of your lawn through regular mowing, fertilizing, and weed control. Our professional lawn care services ensure your grass stays lush, green, and well-manicured all year round. Let us handle the hard work so you can enjoy a beautiful, hassle-free lawn. `
    },
    
    {
        img: "./img/services/window-cleaning.webp",
        name: "Window Cleaning",
        shortDesc: "Window cleaning is a professional service that ensures your windows are spotless and streak-free, enhancing the appearance of your home or business.",
        desc: `Window cleaning is a professional service that ensures your windows are spotless and streak-free, enhancing the appearance of your home or business.
        
        Our team uses specialized tools and techniques to remove dirt, grime, and smudges, allowing more natural light to brighten your space. Trust us to keep your windows looking their best, providing a clear and beautiful view.`
    },
    {
        img: "./img/services/general.webp",
        name: "General Repairs",
        shortDesc: "Our General Home Repairs service covers everything from fixing leaky faucets and repairing drywall to replacing broken tiles and addressing minor electrical issues.",
        desc: `Our General Home Repairs service covers everything from fixing leaky faucets and repairing drywall to replacing broken tiles and addressing minor electrical issues.
        
        We ensure that your home stays in top condition with prompt, reliable, and high-quality repairs. Let our skilled professionals handle your home maintenance needs, so you can enjoy a hassle-free living environment.`
    },
    {
        img: "./img/services/painting.webp",
        name: "Painting and Staining",
        shortDesc: "Our Painting and Staining service offers professional expertise to breathe new life into your space. Whether it's refreshing the exterior of your home or adding a touch of color indoors.",
        desc: `Our Painting and Staining service offers professional expertise to breathe new life into your space. Whether it's refreshing the exterior of your home or adding a touch of color indoors. 
        
        Our team brings skill and precision to every brushstroke. With a keen eye for detail and quality materials, we ensure a vibrant, long-lasting finish that enhances the beauty of your property.`
    },
    {
        img: "./img/services/plumbing.webp",
        name: "Plumbing",
        shortDesc: "Plumbing services ensure your home's water systems run smoothly, handling everything from leaky faucets to full pipe replacements.",
        desc: `Plumbing services ensure your home's water systems run smoothly, handling everything from leaky faucets to full pipe replacements. Whether it's fixing a clogged drain or installing new fixtures, plumbers are experts in keeping your water flowing efficiently and safely.
        
        With their expertise and attention to detail, they ensure your plumbing works seamlessly, providing peace of mind for your home or business.`
    },
    {
        img: "./img/services/electrical.webp",
        name: "Electrical Work",
        shortDesc: "Our Electrical Work service ensures your home or business stays powered and safe.",
        desc: `Our Electrical Work service ensures your home or business stays powered and safe. From installing new outlets to troubleshooting electrical issues, our experienced technicians handle it all with precision and care.
        
        Trust us to keep your electrical systems running smoothly, providing peace of mind for you and your space.`
    },
    {
        img: "./img/services/house-washing.webp",
        name: "House Washing",
        shortDesc: "House washing is a professional service that cleans the exterior of your home, removing dirt, mold, mildew, and other grime.",
        desc: `House washing is a professional service that cleans the exterior of your home, removing dirt, mold, mildew, and other grime.
        
        Using specialized equipment and cleaning solutions, we ensure your house looks fresh and well-maintained. This not only enhances curb appeal but also protects your home from damage over time.`
    },
    {
        img: "./img/services/deck.webp",
        name: "Deck Cleaning / Staining",
        shortDesc: "Our Deck Cleaning and Staining service ensures your outdoor space looks its best while protecting it from the elements.",
        desc: `Our Deck Cleaning and Staining service ensures your outdoor space looks its best while protecting it from the elements.
        
        We thoroughly clean your deck to remove dirt, grime, and mildew, then apply a high-quality stain to enhance its appearance and durability. Enjoy a beautiful, long-lasting deck with our professional care. `
    },
    {
        img: "./img/services/carpentry.webp",
        name: "Carpentry",
        shortDesc: "Carpentry services offer expert craftsmanship in woodworking for your home or business needs.",
        desc: `Carpentry services offer expert craftsmanship in woodworking for your home or business needs. Whether you're looking to build custom furniture, install new cabinets, or renovate your space, carpenters bring precision and skill to every project.
        
        From shaping raw materials to the finishing touches, trust carpentry professionals to deliver quality results that enhance the beauty and functionality of your space.`
    },
    {
        img: "./img/services/flooring.webp",
        name: "Flooring",
        shortDesc: "Our flooring service offers a comprehensive solution for your home or business.",
        desc: `Our flooring service offers a comprehensive solution for your home or business. From elegant hardwood to durable laminate and cozy carpeting, we provide a wide range of options to suit your style and needs.
        
        With expert installation and top-quality materials, we ensure a beautiful, long-lasting foundation for your space.`
    },
    {
        img: "./img/services/furniture.webp",
        name: "Furniture Assembly",
        shortDesc: "Furniture Assembly service takes the hassle out of putting together your new furniture pieces.",
        desc: `Furniture Assembly service takes the hassle out of putting together your new furniture pieces. Our skilled professionals will expertly assemble your items, ensuring they are sturdy and secure for immediate use.
        
        Save time and effort by letting us handle the intricate assembly process, leaving you free to enjoy your newly furnished space stress-free.`
    },
    {
        img: "./img/services/gutter-cleaning.webp",
        name: "Gutter Cleaning / Repair",
        shortDesc: "Ensure your home's gutters are in top condition with our professional Gutter Cleaning and Repair service.",
        desc: `Ensure your home's gutters are in top condition with our professional Gutter Cleaning and Repair service. We'll clear away debris, leaves, and blockages, preventing water damage and ensuring proper drainage.
        
        Our expert team will also inspect for any damage or leaks, providing prompt repairs to keep your gutters functioning efficiently and protecting your property from potential water-related issues. Trust us to keep your gutters clear and your home safe.`
    },
    {
        img: "./img/services/appliance.webp",
        name: "Appliance Installation / Repair",
        shortDesc: "Our Appliance Installation/Repair service ensures hassle-free solutions for your home appliances.",
        desc: `Our Appliance Installation/Repair service ensures hassle-free solutions for your home appliances. Whether it's installing a new dishwasher or fixing a malfunctioning refrigerator, our expert technicians deliver prompt and professional service.
        
        Rest easy knowing that your appliances are in capable hands, with our commitment to reliability and customer satisfaction.`
    },
    {
        img: "./img/services/deck-maintenance.webp",
        name: "Deck / Patio Maintenance",
        shortDesc: "Our Deck/Patio Maintenance service ensures that your outdoor space remains a cherished retreat year-round.",
        desc: `Our Deck/Patio Maintenance service ensures that your outdoor space remains a cherished retreat year-round. From routine cleaning to sealing and repairs, we keep your deck or patio looking its best, protecting it from weathering and wear.
        
        With our professional touch, you can relax and enjoy your outdoor oasis without worrying about maintenance hassles.`
    },
    {
        img: "./img/services/security.webp",
        name: "Home Security",
        shortDesc: "Home Security provides peace of mind by safeguarding your residence against potential threats.",
        desc: `Home Security provides peace of mind by safeguarding your residence against potential threats. With advanced technology such as alarm systems, surveillance cameras, and smart locks, our service ensures that your home is protected around the clock.
        
        Our team of experts works tirelessly to create a tailored security solution that meets your specific needs, keeping your loved ones and belongings safe at all times.`
    },
    {
        img: "./img/services/weatherproofing.webp",
        name: "Weatherproofing",
        shortDesc: "eatherproofing is the essential service that shields your property against the elements, ensuring durability and longevity.",
        desc: `Weatherproofing is the essential service that shields your property against the elements, ensuring durability and longevity.
        
        By applying specialized coatings and sealants, we create a protective barrier against rain, wind, and sunlight, preventing damage and maintaining structural integrity.
        
        Our weatherproofing solutions provide peace of mind, safeguarding your investment and preserving the beauty of your property for years to come.`
    },
    {
        img: "./img/services/odd.webp",
        name: "Odd Jobs",
        shortDesc: "\"Odd Jobs\" is your go-to service for tackling those miscellaneous tasks around your home or office.",
        desc: `"Odd Jobs" is your go-to service for tackling those miscellaneous tasks around your home or office. From assembling furniture to fixing leaky faucets, our skilled professionals are here to help. With prompt service and attention to detail, we make sure every odd job is done efficiently and to your satisfaction.`
    },
    


]

export default serviceData