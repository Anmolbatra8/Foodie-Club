import SearchComponent from "./SearchComponent";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useOnline } from "../Hooks/useOnline";

import RestaurantMenu from "./RestaurantMenu";

// const restaurant_details = [
//     {
//         id: 0,
//         name: "Chinese Wok",
//         avgRating: 4.5,
//         time: "30 mins",
//         cuisines: ["Chinese", "Fast Food"],
//         imageUrl: "https://b.zmtcdn.com/data/pictures/2/20437352/358ee886382866b32e82279dffbaa0ab_featured_v2.jpg",
//         menu: [
//             { dishName: "Kung Pao Chicken", price: 250 ,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/omaikmpqmpjcqxyzgxgq",resid:0},
//             { dishName: "Spring Rolls", price: 120,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/f80a248a-44d2-47d4-ab8e-05d62291d360_8a8b1128-60b2-4233-b0fb-46f8594c5a32.jpg_compressed",resid:0 },
//             { dishName: "Manhurian Gravy", price: 300,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/jxlfpc8pbrlacbx4zhld",resid:0 } , 
//             {dishName: "Fried Veg Wheat Momos With Momo Chutney",price:200,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/29be8f92-533f-4971-9221-7795af038fc3_8e6adf85-8578-48bb-a5e8-20c50c3c3695.jpg_compressed"} ,
//             {dishName: "Veg Chinese Fried Rice ",price:300,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/cd329ac9-c1c4-4d0e-ac59-911bd2c5e0a0_2292a3a7-5b4c-4f56-9a74-5184766af366.jpg_compressed"}


//         ]
//     },
//     {
//         id: 1,
//         name: "LunchBox: Meals and Thalis",
//         avgRating: 4.02,
//         time: "30 mins",
//         cuisines: ["Biryani", "North Indian", "Punjabi"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/14/2ae32ed3-56ac-41c2-849a-d06caeaf730e_62965.jpg",
//         menu: [
//             { dishName: "Paneer Butter Masala", price: 200,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/26/31d2c5b6-8763-4436-b092-d1dd00da0e84_ddde349b-f53d-4e34-ab52-354be4d72cef.jpeg", resid:1},
//             { dishName: "Chicken Biryani", price: 250 ,dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ohddcm29gcijztfdpjme", resid:1},
//             { dishName: "Lassi", price: 80 ,dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/44a00a1b53bf6b214c47b6b656c8c039", resid:1} 

//             ,
//             { dishName: "Rajma Masala Lunch", price: 249 ,dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/2/4f4ede5c-3016-4a49-a966-3b78dbb21df0_70dd83a4-6c02-490b-9999-541fee92112c.jpeg", resid:1} 

//             ,
//             { dishName: "Dal Makhni and Rice", price: 180 ,dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/wfq92zk3kss0vbdgoulf", resid:1}


//         ]
//     },
//     {
//         id: 2,
//         name: "The Oberoma",
//         avgRating: 4.0,
//         time: "20 mins",
//         cuisines: ["Bakery, Desserts"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/e6e85196-5078-454f-9994-0fcfd88015e9_58217.jpg",
//         menu: [
//             { dishName: "Chocolate Truffle Cake",dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/29/907a31f7-25ba-44c4-a421-579f6b7cf4b4_e0784ca2-3b54-41a3-873c-79a9097067f4.JPG", price: 400, resid: 2 },
//             { dishName: "Blueberry Cheesecake", dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f3978b035364c8f52aeab195ca9fa3c2 ",price: 350, resid: 2 },
//             { dishName: "Choco Lava",dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ak0prlbosmnhondhuwls", price: 200, resid: 2 },

//             { dishName: "Cassata Pastry", price: 170,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/5a48a635f23114af8c416c3cf8135ce3", resid: 2 },
//             { dishName: "Pineapple Pastry", price: 200,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/85398d6a36f8809e937ace0391fb19dc", resid: 2 },
//             { dishName: "Butterscoth Pastry", price: 180,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/12/9f89cd49-d262-41f8-9c6c-5100fa2924aa_9885110d-4277-4b9e-837d-d835583822ae.jpeg", resid: 2 },
//             { dishName: "Nutella Donut", price: 190,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/6078c7705db98ac7db35442744ddd586", resid: 2 },
//             { dishName: "Apple Pie", price: 220, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/bbec8427e13489d3a98b4af23953eb34",resid: 2 }
//         ]
//     },
//     {
//         id: 3,
//         name: "Chayoos: Chai + Snacks = Relax",
//         avgRating: 4.5,
//         time: "50 mins",
//         cuisines: ["Bakery, Beverages, Chaat"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_107452.JPG",
//         menu: [
//             { dishName: "Masala Chai", price: 50,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/11/24bf2d43-4cc6-4150-985d-ffd907c33014_7fd3a2b1-edc5-4b29-a031-58cd9d3576ad.jpg", resid: 3 },
//             { dishName: "Mix Pakoda", price: 350,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/1/b886c7d7-4796-4397-913e-6021c4a9e9f4_e43e249a-18ea-47d8-9fa3-f4b698a1c7d1.jpg", resid: 3 },
//             { dishName: "Samosa Chaat", price: 120, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/1/6d6a37fe-5f2b-4156-9a38-0587f232558d_f466d911-b8ea-40f2-b1c5-95716516d57b.jpg",resid: 3 },
//             { dishName: "Paneer Tikka Roll", price: 250,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/1/b7870bd7-3eec-464e-85ca-6fd32fec4ead_08a346f1-489b-46a4-9cb9-53da31955b93.jpg", resid: 3 },
//             { dishName: "Bhelpuri", price: 160, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/1/c1a8d2d6-4688-47d1-a2d5-bbac0dabbf4c_48f78a11-4bba-4967-ac91-b4526ca56253.jpg",resid: 3 },
//             { dishName: "Paneer Sandwich", price: 90,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/1/b7101485-2955-47ef-8f46-d0da71024b66_b06865b6-9145-4046-b27d-bf5aa7629072.jpg", resid: 3 },
//             { dishName: "Pav Bhaji", price: 280, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/1/82c34f5a-b71c-4f60-b974-0f641617d759_ebe42175-48b4-4efc-9dd5-5f02317885ec.jpg",resid: 3 },
//             { dishName: "Bun Maska", price: 100,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/1/3795b498-d570-4731-987e-427e67ca0158_db78939c-735a-4b60-bcd0-a49c10791164.jpg", resid: 3 }
//         ]
//     },
//     {
//         id: 4,
//         name: "McDonald's",
//         avgRating: 3.4,
//         time: "35-40 mins",
//         cuisines: ["American"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/8/a750ba79-2fd0-4f55-9aad-397cb584d0ba_253727.jpg",
//         menu: [
//             { dishName: "Big Mac", price: 180, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/kx593cavjojl7ykda9uv",resid: 4 },
//             { dishName: "French Fries", price: 100, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/wi0hrjmyfit6zxkqffe3", resid: 4 },
//             { dishName: "Chicken Nuggets", price: 250,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/wwg9chdmfoilpmx2iqgc", resid: 4 },
//             { dishName: "McFlurry", price: 180,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/hkxcqhy4m6jfebyh0js0", resid: 4 },
//             { dishName: "Crispy Veg Burger", price: 180, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/26/21cf6ab6-d5e7-4ea0-88e4-5362b504bdaf_5ba17de1-8cce-4fc8-b21a-35cbed511b7e.png",resid: 4 },
//             { dishName: "Mc Veggie Mealr", price: 198, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/yvmrmeforpv4kaqksfy0",resid: 4 },
//             { dishName: "Aloo Wrap", price: 91,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2bebb02ac62ec20ed8fe299e7dd971a6", resid: 4 }
//         ]
//     },
//     {
//         id: 5,
//         name: "Rama Ke Chole Bhature",
//         avgRating: 4.5,
//         time: "30 mins",
//         cuisines: ["North Indian"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/59980bedba3be7e4c6a208877b74fa32",
//         menu: [
//             { dishName: "Chole Bhature(2pcs)", price: 80, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/e31b96e52ebfa9152da47e8e2951b18f",resid: 5 },
//             { dishName: "Raita", price: 70, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/1168087b-b673-44d9-a9f4-67bc842e66d3_95f10b53-3306-41aa-acb4-a7bd0327dae6.jpg",resid: 5 },
//             { dishName: "Lassi", price: 60, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/5c31c464bb47465e49607ae81ac48344",resid: 5 },
//             { dishName: "Extra Chole", price: 110, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/7c18a5b2e87af21e04e06b4e7d677fef",resid: 5 },
//             { dishName: "Chole Puri", price: 90,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/e31b96e52ebfa9152da47e8e2951b18f", resid: 5 },
//            ,
//             { dishName: "Gulab Jamun", price: 100,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/b9b3b843abc2cce644b3b4921d379342", resid: 5 },
//             { dishName: "Gajar Ka Halwa", price: 120, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/e7686d73771e5ad28b02b1f350f50898",resid: 5 }
//         ]
//     },
//     {
//         id: 6,
//         name: "Nagpal Di Hatti",
//         avgRating: 3.1,
//         time: "30-35 mins",
//         cuisines: ["North Indian"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tbprrdfgtamn6tnexyxp",
//         menu: [
//             { dishName: "Aalo Pyaz Parantha", price: 190,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/8/fb5fb6dd-39cc-4fa4-9159-d666a895f0b5_82971fe1-a306-4e88-b44e-40b0db0e29af.jpg", resid: 6 },
//             { dishName: "Chole Bhature", price: 120,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/438cf759-5c94-4795-9463-66f2bed684d9_b97040b6-6dd7-409f-a1c8-8c14f8925851.jpg", resid: 6 },
//             { dishName: "Puri Chole", price: 30, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/136d453d-3734-464c-bc38-21ed87368718_c45110e6-432a-4819-90e2-18510ed96f10.jpg",resid: 6 },
//             { dishName: "Bedmi Puri with Aloo", price: 190, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/10/8451f28d-c29c-4d4d-90c0-2a31fbcaab35_f7dba1bc-a5e1-4cd9-a7a7-940a60a72a34.jpg",resid: 6 },
//             { dishName: "Chole Rice", price: 120, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/c278863cb542d51edc3dad596871eb0e",resid: 6 },
//             { dishName: "Paneer Bhurjir", price: 240,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/4a9d8d082e392143c691b57937165860", resid: 6 },
//             { dishName: "Shahi Paneer", price: 100,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gey7b58isgl1zxu8szyp", resid: 6 },
//             { dishName: "Mixed Raita", price: 100,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dfa423b6a616ac6285f04a0c763109f8", resid: 6 }
//         ]
//     },
//     {
//         id: 7,
//         name: "Great Indian Khichdi By Eatfit",
//         avgRating: 4.6,
//         time: "30 mins",
//         cuisines: ["Home Food, North Indian"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e44fd7f1e5cd9967edfe47c10247671",
//         menu: [
//             { dishName: "Dal Palak Khichi", price: 70,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/b48f3668b64b9e5f1e085e096b6b676b", resid: 7 },
//             { dishName: "Masala Khichdi", price: 90, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/20/242d3cbe-ad4f-4758-9bc3-55cf2333faac_11a67a73-91b0-488a-a742-12a5fa7cc201.jpg",resid: 7 },
//             { dishName: "Sabudana Khichdi", price: 80,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/rivbxskliqtftvmlojgv", resid: 7 },
//             { dishName: "Dal Khichdi", price: 100,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/20/127a3554-92ba-4f09-889b-1cc276a01db0_fb215f73-b512-44f0-bff5-436bd9eb0e0d.jpg", resid: 7 },
//             { dishName: "Aloo Gobhi", price: 120, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/t4fqfueokbnkt9tds4xg",resid: 7 },
//             { dishName: "Butter Pulao", price: 100,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/16/2bf35041-b5fd-431d-afd3-d29b637931b1_b7fff120-97ec-485f-b5d8-483fd9c21a33.jpg", resid: 7 },
//             { dishName: "Dal Tadka Chawal", price: 140,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/23/6e51c639-2eb2-4f21-9d2a-e95c9bc7c5b7_047ce6b4-0446-4b49-8c22-9feddc719d08.jpg", resid: 7 },
//             { dishName: "Rajma Chawal", price: 60,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/23/0d3c1faf-7c2c-4255-b738-77b3b70002c3_18da074a-3f65-4dc4-a0d5-3bd36efd9ed7.jpg", resid: 7 }
//         ]
//     },
//     {
//         id: 8,
//         name: "Burger King",
//         avgRating: 4.1,
//         time: "25 mins",
//         cuisines: ["American, Fast Food"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/6fdcbc7a-399b-4ebb-81ee-3b0cfd696b4f_10208.jpg",
//         menu: [
//             {
//                 dishName: "Whopper",
//                 price: 250,
//                 dishImg: "https://foodish-api.com/api/",
//                 resid: 8,
                
//               },
//               {
//                 dishName: "Chicken Fries",
//                 price: 150,
//                 dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
//                 resid: 8,
//                               },
//               {
//                 dishName: "Onion Rings",
//                 price: 100,
//                 dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/03972ff7-ca47-4b34-a777-bec55c47869e_8944b667-7b9c-418b-88f3-df885ddadd6b.jpg",
//                 resid: 8,
//               },
//               {
//                 dishName: "Veggie Burger",
//                 price: 180,
//                 dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/788d4363-50c2-4b63-b049-f7eb5f6da1b9_9bc014a8-214f-448a-9d3b-e1a8af76b9f5.jpg",
//                 resid: 8,
                
//               },
//               {
//                 dishName: "Cheesy Jalapeno Fries",
//                 price: 120,
//                 dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/bs5oedbj1ihduwvbuj8z",
//                 resid: 8,
                
//               },
//               {
//                 dishName: "Chocolate Shake",
//                 price: 120,
//                 dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/14/6be9a774-f62e-4eb3-8893-d6bbe90ddd60_6280dee6-41d3-4dbf-8208-dcb8bfe698a2.jpg",
//                 resid: 8,
                
//               },
//               {
//                 dishName: "Crispy Chicken Burger",
//                 price: 200,
//                 dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/33c28282a0b1fafa3a1fd2e781833f7d",
//                 resid: 8,
                
//               }
//         ]
//     },
//     {
//         id: 9,
//         name: "Pizza Hut",
//         avgRating: 3.9,
//         time: "40 mins",
//         cuisines:[ "Pizza, Italian"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/d281ae33-578d-482f-a4e2-8cf0d8ee3d58_55473.jpg",
//         menu: [
//             { dishName: "Margherita Pizza", price: 200, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/s5ld93rsknx0fhj6xarn", resid: 9 },
//             { dishName: "Farmhouse Pizza", price: 300, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10", resid: 9 },
//             { dishName: "Pepperoni Pizza", price: 350, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/z0c4xpovma1qtmu4tlls", resid: 9 },
//             { dishName: "Garlic Breadsticks", price: 120, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/m8ecjvtqcjtnt31uvobl", resid: 9 },
//             { dishName: "Chicken Supreme", price: 400, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ckbnw98n6tffy50wvuzm", resid: 9 },
//             { dishName: "Veggie Supreme", price: 280, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/s5ld93rsknx0fhj6xarn", resid: 9 },
//             { dishName: "Tandoori Paneer Pizza", price: 300, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10", resid: 9 },
//             { dishName: "Choco Volcano Cake", price: 150, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/k76b8gwkiskwhc9p7nbt", resid: 9 }
//         ]
//     },
//     {
//         id: 10,
//         name: "Starbucks",
//         avgRating: 4.2,
//         time: "20 mins",
//         cuisines: ["Beverages, Cafe"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/28/41381f21-0ae2-4f09-bd53-54f1ca13906d_862073.JPG",
//         menu: [
//             { dishName: "Classic Hot Coffee", price: 220,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/17/66661dfc-62fc-497f-9de7-c0112bf64a60_af376f6c-200e-4e4c-9d33-22306d75094d.jpg", resid: 10 },
//             { dishName: "Classic Iced Coffee", price: 200, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/10/79edb456-9584-4ee9-9aea-3a8fcfc40a85_290e350e-78f5-4fa0-ac8a-e5468e8499f6.jpg",resid: 10 },
//             { dishName: "Paneer Tikka Sandwich", price: 350,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/20/d7261255-4015-4c78-b6d1-2910d2078c0e_48aab3c9-c1f5-4c50-9b72-2d226422f6a6.jpg", resid: 10 },
//             { dishName: "Espresso", price: 400,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/941109213cfd61b695033c90c8e0bf1f", resid: 10 },
//             { dishName: "Iced Coffee Latte", price: 260,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/32632f33976aede26beb407156b51057", resid: 10 },
//             { dishName: "Vanilla Coffee Latte", price: 335,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/68ee40a1b229ac0fc54c955b81190c91", resid: 10 },
//             { dishName: "Cookie Creme Latte", price: 180, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/17/342251cf-d3d2-4a89-858b-e371fecdfd73_448a4832-8cfd-46d0-b2af-8e68b412ac67.jpg",resid: 10 },
//             { dishName: "Filter Coffee", price: 130, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/0c685119085657406f83377693bc1a70.jpg", resid: 10 }
//         ]
//     },
//     {
//         id: 11,
//         name: "Domino's Pizza",
//         avgRating: 3.8,
//         time: "30 mins",
//         cuisines: ["Pizza, Italian"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/233cea26-a7a5-43b0-973b-21639d83a4a7_239856.JPG",
//         menu: [
//             { dishName: "Cheese Burst Pizza", price: 320, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/s5ld93rsknx0fhj6xarn", resid: 11 },
//             { dishName: "Pepper Barbecue Chicken", price: 350, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/z0c4xpovma1qtmu4tlls", resid: 11 },
//             { dishName: "Garlic Bread", price: 150, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/m8ecjvtqcjtnt31uvobl", resid: 11 },
//             { dishName: "Veg Extravaganza", price: 280, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10", resid: 11 },
//             { dishName: "Chicken Dominator", price: 400, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ckbnw98n6tffy50wvuzm", resid: 11 },
//             { dishName: "Paneer Tikka Pizza", price: 300, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dpventcrozvfni0lqb10", resid: 11 },
//             { dishName: "Stuffed Garlic Bread", price: 170, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/m8ecjvtqcjtnt31uvobl", resid: 11 },
//             { dishName: "Choco Lava Cake", price: 120, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/k76b8gwkiskwhc9p7nbt", resid: 11 }
//         ]
//     },
//     {
//         id: 12,
//         name: "Subway",
//         avgRating: 4.0,
//         time: "20 mins",
//         cuisines: ["Healthy Food, Fast Food"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/c264faf3-3bc6-4359-9f80-a51edcfd442f_425922.jpg",
//         menu: [
//             { dishName: "Veggie Delight Sub", price: 180, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/26/ced32329-7cdf-40c2-b29a-52efd4e6a2e9_6d59567f-d609-4eb0-9ab7-24b9a29b8166.png", resid: 12 },
//             { dishName: "Chicken Teriyaki Sub", price: 220, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/26/01d55263-199d-44c8-b1b4-6430ddb2713b_9e847df7-582f-4d11-91da-74c6bdd93a79.png", resid: 12 },
//             { dishName: "Tuna Sub", price: 240, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/23/db150a3a-6f10-4781-accc-4913a6ffebba_ead68be3-70f9-4b43-9b9d-69b854117b74.png", resid: 12 },
//             { dishName: "Egg & Cheese Wrap", price: 150, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ee64a82a067f0184fb83510609668666", dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/26/01d55263-199d-44c8-b1b4-6430ddb2713b_9e847df7-582f-4d11-91da-74c6bdd93a79.png",resid: 12 },
//             { dishName: "Turkey Breast Sub", price: 260,dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/26/01d55263-199d-44c8-b1b4-6430ddb2713b_9e847df7-582f-4d11-91da-74c6bdd93a79.png", resid: 12 },
//             { dishName: "Italian BMT Sub", price: 280,dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/26/01d55263-199d-44c8-b1b4-6430ddb2713b_9e847df7-582f-4d11-91da-74c6bdd93a79.png", resid: 12 },
//             { dishName: "Chocolate Chip Cookie", price: 50,dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/26/01d55263-199d-44c8-b1b4-6430ddb2713b_9e847df7-582f-4d11-91da-74c6bdd93a79.png", resid: 12 },
//             { dishName: "Cold Coffee", price: 100, dishImg: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/26/01d55263-199d-44c8-b1b4-6430ddb2713b_9e847df7-582f-4d11-91da-74c6bdd93a79.png",resid: 12 }
//         ]
//     }
//         ,
//     {
//         id: 13,
//         name: "KFC",
//         avgRating: 4.3,
//         time: "25 mins",
//         cuisines: ["Fast Food, Fried Chicken"],
//         imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_26724.JPG",
//         menu: [
//             { dishName: "Zinger Burger", price: 210, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/13/d6b9be59-10a4-420d-9ff6-44f91b87c7c0_4f367b42-73b8-428c-a801-8f0cf51021b3.jpg",
//                 resid: 13 },
//             { dishName: "Hot Wings", price: 150, dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ubpofq5tlhdgwh2lzo8d",resid: 13 },
//             { dishName: "Chicken Popcorn", price: 180,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/13/d6b9be59-10a4-420d-9ff6-44f91b87c7c0_4f367b42-73b8-428c-a801-8f0cf51021b3.jpg",
//                 resid: 13 },
//             { dishName: "Smoky Grilled Chicken", price: 220,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ubpofq5tlhdgwh2lzo8d",
//                 resid: 13 },
//             { dishName: "French Fries", price: 100,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ubpofq5tlhdgwh2lzo8d",
//                 resid: 13 },
//             { dishName: "Chocolate Brownie Sundae", price: 150,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ubpofq5tlhdgwh2lzo8d",
//                 resid: 13 },
//             { dishName: "Krushers", price: 130,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ubpofq5tlhdgwh2lzo8d",
//                 resid: 13 },
//             { dishName: "Chicken Bucket", price: 500,dishImg:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/vq4hhfaphd4fam2kieqq",

//                 resid: 13 }
//         ]
//     }

// ];



const BodyComponent = () => {
  //all restaurants will never be changed to keep original copy of restaurant data intact
  //when getting data from API setALLRestaurants(data) will be used
  
    
  
  
  const[allRestaurants,setAllRestaurants] = useState([]);

    const[filteredRestState,setFilteredRestState] = useState([]);
    
  
  //GET
  useEffect(() => {
    // Fetch data from the Express server
    fetch('http://localhost:8000/restaurants')
      .then(response => response.json())
      .then(data => { setFilteredRestState(data)
         setAllRestaurants(data)
        console.log("Data Now: ",data);
        
      })

      .catch(error => console.error('Error fetching Restaurants', error));
  }, []);

  
  
  
  
  
    <RestaurantMenu restaurant_details = {filteredRestState} />
      
    const isOnline = useOnline();
    
    if(!isOnline) {
        return <h2>Check your Internet Connection !</h2>
    }
  
        function updateRestaurants(filteredRestaurants) {
            console.log("Filtered restaurants from Search Componrnt:  ",filteredRestaurants);
            setFilteredRestState(filteredRestaurants);
        }

      
    return(
    <>
    <SearchComponent Restaurants = {allRestaurants} updateRestaurants= {updateRestaurants}
     filteredRestaurants = {filteredRestState}  />
 
   <div className="res-container" >
   {filteredRestState && filteredRestState.length > 0 ? (
    filteredRestState.map(res => (
        <Link to={`restaurant/${res.id}`} key={res.id} state={{ restaurant_Detail: res }}>
            <RestaurantCard key={res.id} rest_details={res} />
        </Link>
    ))
) : (
    <div className="no-data-message">
        <h2>Oops! No restaurants found!</h2>
        <p>It seems the amazing meals couldn't make it here this time.</p>
        <p>Please check your server or database connections, or try refreshing the page.</p>
        <p>In the meantime, imagine the delicious aromas of your favorite dishes wafting your way!</p>
    </div>
)}
  {
    <br/>
     
}
</div>

     {/* <Checkclass colour = "purTHH" />
     <Checkfunction />
      */}
       
   </>
    )
}
export default BodyComponent;