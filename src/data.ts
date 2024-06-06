import { color } from "@mui/system";

export const menu = [
    {
        id : 1,
        title: "main",
        listItems:[
            {
                id:1,
                title:"Homepage",
                url: "/",
                icon:"home.png"
            },
            {
                id:2,
                title:"Profile",
                url:"/users/1",
                icon:"profile.png"
            },
        ],
    },
    {
        id:2,
        title:"lists",
        listItems:[
            {
                id:1,
                title:"Users",
                url:"/users",
                icon:"users.png"
            },
            {
                id:2,
                title:"Cars",
                url:"/cars",
                icon:"cars.jpg"
            },
            {
                id:3,
                title:"Appointement",
                url:"/appointement",
                icon:"appointment-4.png",
            },
        ],
    },
];

export const topAppointement = [
    {
        carId : 1,
        name : "voarhary",
        firstname: "mampionona",
        email: "voahary@gmail.com",
        message:"je vous demande une rendez vous",
        contact:"+261 33 12 745 15",
        appointementDate:"2025-12-12 12:12:00012",
        status: true,
    },
       {
        carId : 1,
        name : "voarhary",
        firstname: "mampionona",
        email: "voahary@gmail.com",
        message:"je vous demande une rendez vous",
        contact:"+261 33 12 745 15",
        appointementDate:"2025-12-12 12:12:00012",
        status: true,
       },
{
    carId : 1,
    name : "voarhary",
    firstname: "mampionona",
    email: "voahary@gmail.com",
    message:"je vous demande une rendez vous",
    contact:"+261 33 12 745 15",
    appointementDate:"2025-12-12 12:12:00012",
    status: true
    },
{
        id : 4,
        img : "dazo.png",
        username : "Zoarisoa Voahary",
        email:"vohary@gmail.com",
        amount:"3.6583",
    },
{
        id : 5,
        img : "user2.jpg",
        username : "Zoarisoa Voahary",
        email:"vohary@gmail.com",
        amount:"3.6583",
    },
{
        id : 6,
        img : "zo.jpg",
        username : "Zoarisoa Voahary",
        email:"vohary@gmail.com",
        amount:"3.6583",
    },
{
        id : 7,
        img : "user1.jpg",
        username : "Zoarisoa Voahary",
        email:"vohary@gmail.com",
        amount:"3.6583",
    },
];

export const ChartBoxUser = {
color: "#8884d8",
icon: "/userIcon.svg",
title:"Total Users",
number:"11.238",
dataKey:"users",
percentage:45,
chartData : [
    { name: "Sun", users:400},
    {name: "Mon", users:600},
    {name:"Tue", users:500},
    {name:"Wed", users:700},
    {name:"Thu", users:400},
    {name:"Fri", users:500},
    {name:"Sat", users:450},
],
};
export const ChartBoxProduct = {
color: "skyblue",
icon: "/productIcon.svg",
title:"Total Products",
number:"238",
dataKey:"products",
percentage:21,
chartData : [
    { name: "Sun", products:400},
    {name: "Mon", products:600},
    {name:"Tue", products:500},
    {name:"Wed", products:700},
    {name:"Thu", products:400},
    {name:"Fri", products:500},
    {name:"Sat", products:450},
],
};
    export const ChartBoxRevenue = {
      color: "teal",
      icon: "/revenueIcon.svg",
      title: "Total Revenue",
      number: "$56.432",
      dataKey: "revenue",
      percentage: -12,
      chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 1000 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
      ],
    };
    export const ChartBoxConversion = {
      color: "gold",
      icon: "/conversionIcon.svg",
      title: "Total Ratio",
      number: "2.6",
      dataKey: "ratio",
      percentage: 12,
      chartData: [
        { name: "Sun", ratio: 700 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
      ],
    };
    export const barChartBoxRevenue = {
        title: "Profit Earned",
        color:"#8884d8",
        datakey:"profit",
        chartData: [
            {
                name:"Sun",
                profit:4000,
            },
            {
                name:"Mon",
                profit:3000,
            },
            {
                name:"Tue",
                profit:2000,
            },
            {
                name:"Wed",
                profit:2780,
            },
            {
                name:"Thu",
                profit:1890,
            },
            {
                name:"Fri",
                profit:1390,
            },
            {
                name:"Sat",
                profit:490,
            },
        ],
    };
    export const barChartBoxVisit = {
        title: "Appointement List",
        color:"#FF8042",
        datakey:"visit",
        chartData: [
            {
                name:"Sun",
                visit:0,
            },
            {
                name:"Mon",
                visit:0,
            },
            {
                name:"Tue",
                visit:0,
            },
            {
                name:"Wed",
                visit:0,
            },
            {
                name:"Thu",
                visit:0,
            },
            {
                name:"Fri",
                visit:0,
            },
            {
                name:"Sat",
                visit:3490,
            },
        ],
    };
    export const userRows = [
        {
            id:1,
            img:{

            },
            lastName:"voahary",
            firstName:"zoarisoa",
            email:"hei.zoarisoa@gmail.com",
            phone:"038 33 427 54",
            createdAt:"01.02.2024",
            verified:true
        },

        {
            id:2,
            img:"/dazo.png",
            lastName:"voahary",
            firstName:"zoarisoa",
            email:"hei.zoarisoa@gmail.com",
            phone:"038 33 427 54",
            createdAt:"01.02.2024",
            verified:true
        },
        {
            id:3,
            img:"/dazo.png",
            lastName:"voahary",
            firstName:"zoarisoa",
            email:"hei.zoarisoa@gmail.com",
            phone:"038 33 427 54",
            createdAt:"01.02.2024",
            verified:true
        },
        {
            id:4,
            img:"/dazo.png",
            lastName:"voahary",
            firstName:"zoarisoa",
            email:"hei.zoarisoa@gmail.com",
            phone:"038 33 427 54",
            createdAt:"01.02.2024",
            verified:true
        },
        {
            id:5,
            img:"/dazo.png",
            lastName:"voahary",
            firstName:"zoarisoa",
            email:"hei.zoarisoa@gmail.com",
            phone:"038 33 427 54",
            createdAt:"01.02.2024",
            verified:true
        },
        {
            id:6,
            img:"/dazo.png",
            lastName:"voahary",
            firstName:"zoarisoa",
            email:"hei.zoarisoa@gmail.com",
            phone:"038 33 427 54",
            createdAt:"01.02.2024",
            verified:true
        },
        {
            id:7,
            img:"/dazo.png",
            lastName:"voahary",
            firstName:"zoarisoa",
            email:"hei.zoarisoa@gmail.com",
            phone:"038 33 427 54",
            createdAt:"01.02.2024",
            verified:true
        },
        {
            id:8,
            img:"/dazo.png",
            lastName:"voahary",
            firstName:"zoarisoa",
            email:"hei.zoarisoa@gmail.com",
            phone:"038 33 427 54",
            createdAt:"01.02.2024",
            verified:true
        },
        {
            id:9,
            img:"/dazo.png",
            lastName:"voahary",
            firstName:"zoarisoa",
            email:"hei.zoarisoa@gmail.com",
            phone:"038 33 427 54",
            createdAt:"01.02.2024",
            verified:true
        },
    ];
    export const carRows = [
        {
            id:1,
            img:"/noavatar",
            title:"voahary",
            color:"black",
            producer:"matelas",
            price:"$97000",
            createdAt:"01.02.2024",
            inStock:true
        },

        {
            id:1,
            img:"/noavatar",
            title:"voahary",
            color:"black",
            producer:"matelas",
            price:"$97000",
            createdAt:"01.02.2024",
            inStock:true
        },
        {
            id:2,
            img:"/noavatar",
            title:"voahary",
            color:"black",
            producer:"matelas",
            price:"$97000",
            createdAt:"01.02.2024",
            inStock:true
        },
        {
            id:3,
            img:"/noavatar",
            title:"voahary",
            color:"black",
            producer:"matelas",
            price:"$97000",
            createdAt:"01.02.2024",
            inStock:true
        },
        {
            id:4,
            img:"/noavatar",
            title:"voahary",
            color:"black",
            producer:"matelas",
            price:"$97000",
            createdAt:"01.02.2024",
            inStock:true
        },
        {
            id:5,
            img:"/noavatar",
            title:"voahary",
            color:"black",
            producer:"matelas",
            price:"$97000",
            createdAt:"01.02.2024",
            inStock:true
        },
        {
            id:6,
            img:"/noavatar",
            title:"voahary",
            color:"black",
            producer:"matelas",
            price:"$97000",
            createdAt:"01.02.2024",
            inStock:true
        },
        {
            id:7,
            img:"/noavatar",
            title:"voahary",
            color:"black",
            producer:"matelas",
            price:"$97000",
            createdAt:"01.02.2024",
            inStock:true
        },
        {
            id:8,
            img:"/noavatar",
            title:"voahary",
            color:"black",
            producer:"matelas",
            price:"$97000",
            createdAt:"01.02.2024",
            inStock:true
        },
    ];
    export const singleUser = {
        id:1,
        email:"gsfdgfdgs",
        name:"fsqdfdsqf",
        password:"dfdsfdsf"
    }
    export const singleCar = {
        id:1,
        brand:"gsfdgfdgs",
        color:"fsqdfdsqf",
        description:"dfdsfdsf",
        model:"fsfdfsqdf",
        motor_type:"fqdsfd",
        name:"dfsfdsqfd",
        place_number:"fsqfsqfsq",
        power:123,
        price:4556,
        status:"PINNED",
        type:"fsdfs"
    }