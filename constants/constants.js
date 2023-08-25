import {
    Banknote,
    Clock12,
    Database,
    Layout,
    Server,
    Users,
    Mail, MapPin, ExternalLink
} from "lucide-react";


export const FeatureData = [
    {
        headText: "24/7 Customer Service",
        subHeading:
            "You will get 24/7 technical and guidance support to get you started with our platform.",
        icon: <Clock12 size={18} />,
    },
    {
        headText: "Fast Domain Handover",
        subHeading:
            "After the successful registration of your company, your custom domain with your organization name will be handed over to you under 30 minutes.",
        icon: <Server size={18} />,
    },
    {
        headText: "User friendly Interface",
        subHeading:
            "Easy and interactive user interface and smooth user-experience.",
        icon: <Layout size={18} />,
    },
    {
        headText: "Multiple Roles",
        subHeading:
            "You can create multiple users and assign them different tasks based on their dynamic roles.",
        icon: <Users size={18} />,
    },
    {
        headText: "Easy Payments",
        subHeading:
            "You can make an easy payment using digital wallets, e-banking as well as debit and credit cards.",
        icon: <Banknote size={18} />,
    },
    {
        headText: "Separate Database",
        subHeading:
            "You will get your own database for your organization under your subdomain.",
        icon: <Database size={18} />,
    },
];


export const ConsData = [
    {
        content: 'Complex recording process due to every administrative file in a different place.'
    },
    {
        content: 'Need more effort to pay manually one by one invoice because there is no payment accommodation.'
    },
    {
        content: 'Manual data arranging needs a long time because the different months/years are not in the same place.'
    }
]

export const ProsData = [
    {
        content: 'Analyze your business cost easily with group transaction through tagging feature.'
    },
    {
        content: 'Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.'
    },
    {
        content: 'Arrange your business expenses by date, name, etc.,  with just one click.'
    },
]

export const TestominalData = [
    {
        headText: 'It’s just incredible!',
        desText: 'It’s just 1 month since I’m using EBS to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to EBS!',
        imgUrl: 'https://github.com/shadcn.png',
        name: 'Jimmy Bartney',
        position: 'Product Manager at Picko Lab'
    },
    {
        headText: 'Satisfied User Here!',
        desText: 'Never thought that with EBS managing my business expenses is so easy! Been using this platform for 3 months and still counting!',
        imgUrl: 'https://github.com/shadcn.png',
        name: 'Natasha Romanoff',
        position: 'Black Widow'
    },
    {
        headText: 'No doubt, EBS is the best!',
        desText: '“The best”! That’s what I want to say to this platform, didn’t know that there’s a platform to help you manage your business expenses like this! Very recommended to you who have a big business!',
        imgUrl: 'https://github.com/shadcn.png',
        name: 'Moritika Kazuki',
        position: 'Finance Manager at Mangan'
    },
    {
        headText: 'It’s just incredible!',
        desText: 'It’s just 1 month since I’m using EBS to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to EBS!',
        imgUrl: 'https://github.com/shadcn.png',
        name: 'Jimmy Bartney',
        position: 'Product Manager at Picko Lab'
    },
    {
        headText: 'It’s just incredible!',
        desText: 'It’s just 1 month since I’m using EBS to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to EBS!',
        imgUrl: 'https://github.com/shadcn.png',
        name: 'Jimmy Bartney',
        position: 'Product Manager at Picko Lab'
    },
    {
        headText: 'It’s just incredible!',
        desText: 'It’s just 1 month since I’m using EBS to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to EBS!',
        imgUrl: 'https://github.com/shadcn.png',
        name: 'Jimmy Bartney',
        position: 'Product Manager at Picko Lab'
    },

]

export const PlanData = [
    {
        planText: "Unlimited bills per day"
    },
    {
        planText: "Unlimited stocks per day"
    },
    {
        planText: "Backup everyday"
    },
    {
        planText: "Unlimited users and roles"
    },
    {
        planText: "Hourly Statistics and Report"
    },
]


export const usefulLinks = [
    {
        link: "/",
        text: "Home",
    },
    {
        link: "/features",
        text: "Features",
    },
    {
        link: "/blog",
        text: "Blog",
    },
    {
        link: "/#pricing",
        text: "Pricing",
    },
    {
        link: "/about",
        text: "About",
    },
];


export const contactLinks = [
    {
        icon: <MapPin size={18} />,
        text: "Siddhartha Chowk, Pokhara",
        link: 'https://www.google.com/maps/place/Everest+Technologies/@28.2245119,83.9667459,15z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3995953849bb6c9b:0x7f4b1a7c6558bb10!2sEverest+Technologies!8m2!3d28.2244942!4d83.9851785!16s%2Fg%2F11p1026n0f!3m5!1s0x3995953849bb6c9b:0x7f4b1a7c6558bb10!8m2!3d28.2244942!4d83.9851785!16s%2Fg%2F11p1026n0f?entry=ttu'
    },
    {
        icon: <Mail size={18} />,
        text: "tech.everest.2021@gmail.com",
        link: 'mailto:tech.everest.2021@gmail.com'
    },

    {
        icon: <ExternalLink size={18} />,
        text: "Everest Technologies",
        link: 'https://everesttechnologies.com.np/'
    },
];

export const featureData = [
    {
        heading: 'Manage your Stock',
        desc: 'Easily manage your products, stocks-in, stocks-out and many more.',
        imgUrl: '/assets/feature_stock_img.png',
        textContainerClassName: 'order-2 text-left',
        imgContainerClassName: 'order-1'
    },
    {
        heading: 'Track your Purchase',
        desc: 'Keep tracks of your purchases and other business expendetures.',
        imgUrl: '/assets/feature_purchase_img.png',
        textContainerClassName: 'order-1  ',
        imgContainerClassName: 'order-2  '
    },
    {
        heading: 'Maintain you Sales',
        desc: 'Maintain and keep track of your sales and other business incomes.',
        imgUrl: '/assets/feature_sales_img.png',
        textContainerClassName: 'order-2 text-left',
        imgContainerClassName: 'order-1'
    },
    {
        heading: 'Add your Bills',
        desc: 'Add your purchaes bill or create and print your sales bill with wired or wireless printing facility.',
        imgUrl: '/assets/feature_bills.png',
        textContainerClassName: 'order-1   ',
        imgContainerClassName: 'order-2   '
    },
    {
        heading: 'Generate your Report',
        desc: 'Generate you daily, weekly or monthly reports and compare other with other reports to calculate your growth',
        imgUrl: '/assets/feature_report.png',
        textContainerClassName: 'order-2 text-left',
        imgContainerClassName: 'order-1'
    },
    {
        heading: 'Analyse your business',
        desc: 'Analyse your over all business, purchaes, sales, profit or loss to create a more compact business ideas.',
        imgUrl: '/assets/hero_img.png',
        textContainerClassName: 'order-1   ',
        imgContainerClassName: 'order-2   '
    },
]

export const cutomWrapperSectionData = [
    {
        imgUrl: '/assets/resources_yt.png',
        heading: 'Video Tutorials',
        desc: 'Learn to use EBS through our videos tutorial',
        link: '#'
    },
    {
        imgUrl: '/assets/resources_docs.png',
        heading: 'Blogs',
        desc: 'Learn to use EBS through our extensive blog',
        link: '/blog'
    },

]


export const missionData = [
    {
        header: 'OUR TEAM AND OUR SOCIAL IMPACT ',
        heading: 'Creating a community for impact',
        desc: ' With millions of businesses powered by EBS, we invest in our people and our communities. Our Social Impact initiatives focus on enabling an equitable future by building products and programs to support our team and merchants.',
        imgUrl: '/assets/about-3.png',
        textContainerClassName: 'order-2 ',
        imgContainerClassName: 'order-1 '
    },
    {
        header: 'Let\'s empower every business',
        heading: 'Empowering the businesses',
        desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugit delectus aliquam dicta voluptates vel nostrum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cum dicta cupiditate perspiciatis fuga!',
        imgUrl: '/assets/benefit.png',
        textContainerClassName: 'order-2 ',
        imgContainerClassName: 'order-1'
    },
]