import { nanoid } from "nanoid";
const DATA = {
  MEN: {
      "T-Shirts": [
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9901805/2019/7/16/8139e933-b2a1-4d35-8a9f-d01cf3e1ace81563256634726-Roadster-Men-Tshirts-5541563256633223-1.jpg",
        brand: "Roadster",
        name: "Solid Round Neck T-shirt",
        price: "274Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10943392/2020/2/13/347ce3e2-c3d0-4de7-b244-9fe678a3f50a1581569766726-Roadster-Men-Navy-Blue-Embossed-Printed-Round-Neck-T-shirt-5-1.jpg",
        brand: "Roadster",
        name: "Embossed Printed T-shirt",
        price: "239Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10307423/2019/11/7/7f8bf98e-96b3-490c-9512-dad6a7279feb1573110418783-Roadster-Men-Tshirts-241573110416534-1.jpg",
        brand: "Roadster",
        name: "Solid Greenturn Organic Cotton T-shirt",
        price: " 244Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14911264/2021/11/3/3f319adc-08cc-4484-b9a4-e248c8859b421635915318413-HERENOW-Men-Tshirts-7541635915317922-1.jpg",
        brand: "HERE&NOW",
        name: "Men Brand Logo Printed Pure Cotton T-shirt",
        price: " 251Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1295511/2018/5/2/11525248119235-Roadster-Men-Navy--Blue-Melange-Colour-Blocked-T-Shirt-751525248119047-1.jpg",
        brand: "Roadster",
        name: "Colourblocked Contrast Pocket T-shirt",
        price: "244Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22329364/2023/3/13/f08f4730-ee77-4a34-a0cd-379d50ae9fcf1678726664526maxMenGreenPrintedT-shirt1.jpg",
        brand: "max",
        name: "Typography Printed T-shirt",
        price: "248Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10940528/2023/4/7/804698e8-146c-45ec-ab98-b247318a4f451680851736218-Roadster-Men-Navy-Blue-Printed-Round-Neck-T-shirt-7191680851-1.jpg",
        brand: "Roadster",
        name: "Printed Pure Cotton T-shirt",
        price: "263Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12816444/2020/12/8/41c43a66-acfe-4ada-ba01-77ef4794b0711607426483074-HERENOW-Men-Tshirts-1181607426481184-1.jpg",
        brand: "HERE&NOW",
        name: "Men Solid T-shirt",
        price: "263Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12816476/2020/12/7/e9fcc4cf-33fe-4db5-8d9b-1f18dde5be711607321799713-HERENOW-Men-Tshirts-4681607321797914-1.jpg",
        brand: "HERE&NOW",
        name: "Printed Round Neck T-shirt",
        price: "239Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11534192/2020/7/8/3c17918a-82d7-4261-9772-45e9bf9c36a51594203795272-Roadster-Men-Tshirts-9791594203793483-1.jpg",
        brand: "Roadster",
        name: "Fast and Furious Printed Pure Cotton T-shirt",
        price: "272Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22067574/2023/5/3/a06dd519-23d0-47bb-833e-f419270b79e51683097409181-HRX-by-Hrithik-Roshan-Men-Tshirts-2631683097408620-1.jpg",
        brand: "HRX by Hrithik Roshan",
        name: "Running Typography T-shirt",
        price: "269Rs",
      },
    ],
     "Casual Shirts":[ {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22642774/2023/6/8/315b50d7-ae50-4080-b51c-dd4b68e3d10d1686218414024-FUBAR-Modern-Spread-Collar-Casual-Shirt-7981686218413679-1.jpg",
        brand: "FUBAR",
        name: "Spread Collar Casual Shirt",
        price: " 399Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2022/11/21/57eb174b-cbf1-4d1e-906c-dd87fcfb059d1669021381999-HIGHLANDER-Men-Green--White-Slim-Fit-Printed-Casual-Shirt-27-1.jpg",
        brand: "HIGHLANDER",
        name: "Slim Fit Casual Shirt",
        price: "399Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17504790/2022/3/12/51886a42-c316-4194-8056-4da791d6fa931647092199674HIGHLANDERMenPeach-ColouredSlimFitCasualShirt1.jpg",
        brand: "HIGHLANDER",
        name: "Slim Fit Casual Shirt",
        price: "374Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11889120/2020/5/28/b74b650f-a321-4b1f-bd27-108614006c041590656156603HIGHLANDERMenNavyBlueWhiteSlimFitPrintedCasualShirt1.jpg",
        brand: "HIGHLANDER",
        name: "Slim Fit Casual Shirt",
        price: "399Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22988248/2023/5/3/3acfa0cc-fc75-48ff-8c3e-b0ee000d25cd1683058615508FUBARMenBlueSlimFitOpaqueCasualShirt1.jpg",
        brand: "FUBAR",
        name: "Slim Fit Casual Shirt",
        price: "399Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22559596/2023/6/8/26ebb469-9e45-41fc-87ca-514a4c38493d1686219525535-FUBAR-Mandarin-Collar-Cotton-Casual-Shirt-6291686219525136-1.jpg",
        brand: "FUBAR",
        name: "Cotton Casual Shirt",
        price: "399Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11780930/2022/7/13/bd6bc2fd-ec78-49ae-ba4a-5f2969bab9fd1657686574038HIGHLANDERMenGreenBeigeSlimFitPrintedCasualShirt1.jpg",
        brand: "HIGHLANDER",
        name: "Slim Fit Casual Shirt",
        price: "399Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17655310/2022/3/28/a21d5c56-45aa-4e3e-917c-e90f5bcd46dc1648468810900KETCHMenBeigeSlimFitTartanChecksCheckedCasualShirt1.jpg",
        brand: "KETCH",
        name: "Men Slim Fit Casual Shirt",
        price: "439Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20098956/2022/9/20/976a0f05-1c7f-4a24-99a6-c6aea40c8c021663696483968Shirts1.jpg",
        brand: "LOCOMOTIVE",
        name: "Slim Fit Printed Casual Shirt",
        price: "362Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22988212/2023/5/3/96fb34d0-6876-42be-8c9a-1e6fb9cd77f21683061464494FUBARMenBlackSlimFitOpaqueCasualShirt1.jpg",
        brand: "FUBAR",
        name: "Slim Fit Casual Shirt",
        price: "399Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15873490/2021/10/20/663d8ba6-59e8-4d36-a8a3-408b61857eab1634718084125HIGHLANDERMenWhiteSlimFitOpaquePrintedCasualShirt1.jpg",
        brand: "HIGHLANDER",
        name: "Slim Fit Cotton Casual Shirt",
        price: "434Rs",
      },
    ],
     "Sweaters":[ {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19635108/2022/8/24/a309e8a0-6828-4cbb-ac35-d7149a2aa2961661329872836PoloRalphLaurenMenNavyBlueSweaters1.jpg",
        brand: "Polo Ralph Lauren",
        name: "Men Cotton-Linen Sweaters",
        price: "Rs43000",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14320088/2021/7/16/0288c719-10ef-4fca-9ce8-1d4bab317b4b1626430264579-Roadster-Men-Black-Pullover-1461626430264119-1.jpg",
        brand: "Roadster",
        name: "Men Pullover",
        price: "899Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15654420/2021/10/6/de60b7e8-93e2-4b9f-96d2-635f81909eed1633503008970-Computerised-Jacquard-Sweater-2101633503008471-1.jpg",
        brand: "Roadster",
        name: "Men Cable Knit Pullover",
        price: "899Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15654416/2021/10/6/2baa3df0-7590-4fcc-b291-9d84a775caa61633502646677-Computerised-Jacquard-Sweater-381633502646109-1.jpg",
        brand: "Roadster",
        name: "Men Checked Knitted Pullover",
        price: "899Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14320068/2021/8/26/95103e09-8da6-4df2-9256-23032d4add461629954610060-Roadster-Men-Sweaters-5701629954609372-1.jpg",
        brand: "Roadster",
        name: "Men Self-Striped Pullover",
        price: "1104Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1317276/2016/9/6/11473142679350-Roadster-Grey-Melange-Sweater-1081473142679106-1.jpg",
        brand: "Roadster",
        name: "Sweater",
        price: "839Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14320204/2021/11/16/fa351714-78a2-49ad-9651-53f6779ada651637052357985-Roadster-Men-Sweaters-7851637052357484-1.jpg",
        brand: "Roadster",
        name: "Design Pullover",
        price: "899Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19324180/2022/7/30/b34ed27c-5ee4-4460-a39a-a32a1ae49a1a1659189928239Sweaters1.jpg",
        brand: "GANT",
        name: "Colourblocked Pullover",
        price: "8999Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19813884/2022/11/17/7e3f5f48-7721-46aa-b991-22c9ca2a41001668677158776-Roadster-Men-Sweaters-3331668677158591-1.jpg",
        brand: "Roadster",
        name: "Cable Knit Pullover",
        price: "899Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19384380/2022/8/4/58c30c3d-ea97-405f-9c7c-f12569e717d61659606151197Sweaters1.jpg",
        brand: "Jack & Jones",
        name: "Pullover",
        price: "1124Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15654426/2021/10/6/7e0abdfc-0430-46d5-af8b-e34e79ffcbd41633502377365-Computerised-Jacquard-Sweater-6701633502376814-1.jpg",
        brand: "Roadster",
        name: "Pullover",
        price: "899Rs",
      },
    ],
     "Jackets":[ {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/4453297/2019/12/2/77b5d9e0-8d65-4a36-94e7-290ed271db6b1575267599079-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-1.jpg",
        brand: "HRX by Hrithik Roshan",
        name: "Active Bomber Jacket",
        price: "1599",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18981588/2022/8/22/7a219224-1c2b-4834-9a4d-0ca2824232f81661149536957-Puma-Men-Black-Slim-Fit-Zippered-Sporty-Jacket-7231661149536-1.jpg",
        brand: "Puma",
        name: "Slim Fit Sporty Jacket",
        price: "1819Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22483440/2023/3/23/35487c10-3705-4749-9274-5f593893045d1679576283721RainJacket1.jpg",
        brand: "Zeel",
        name: "Men Hooded Rain Jacket",
        price: "1349rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/4923946/2018/11/2/177f456a-cb69-4cf2-8a06-ea00e47a66a91541159319717-HRX-by-Hrithik-Roshan-Men-Navy-Blue-Solid-Sporty-Jacket-2131541159319609-1.jpg",
        brand: "HRX by Hrithik Roshan",
        name: "Men Solid Sporty Jacket",
        price: "1039Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11275832/2022/4/6/0fedd175-efa2-4346-a6dd-a592b4790f2f1649234504796-High-Star-Men-Black-Solid-Denim-Jacket-3971649234504005-1.jpg",
        brand: "High Star",
        name: "Men Solid Denim Jacket",
        price: "1149Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18973508/2022/11/2/11408afd-2e79-4d3f-a37e-a8ae5ce7305c1667371473265-Levis-Men-Navy-Blue-Denim-Jacket-4691667371472318-1.jpg",
        brand: "Levis",
        name: "Men Denim Jacket",
        price: "3359Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18981596/2022/8/22/085e7b67-0e23-4900-9de4-3772fa49051a1661143649316-Puma-Men-White-Solid-EvoStripe-Hooded-Sporty-Jacket-74516611-1.jpg",
        brand: "Puma",
        name: "Men Solid Sporty Jacket",
        price: "2799Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12834804/2020/11/20/d4af0ff2-ccca-4733-a05c-7f54ad932fc11605851402891-Hubberholme-Men-Jackets-9941605851401202-1.jpg",
        brand: "Hubberholme",
        name: "Solid Denim Jacket",
        price: "859Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11966854/2021/12/17/0c9bbf61-905c-498a-bf64-df4a6e9ff9061639736811596-Roadster-Men-Olive-Green-Solid-Lightweight-Tailored-Jacket-8-1.jpg",
        brand: "Roadster",
        name: "Lightweight Tailored Jacket",
        price: "629Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20470294/2023/5/12/c6698a36-5c2d-4de2-9c2e-5904c558a8c81683883186905-ADIDAS-Originals-Men-Jackets-91683883186300-1.jpg",
        brand: "ADIDAS Originals",
        name: "Classics BECKENBAUER Jacket",
        price: "6999Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20073256/2022/11/21/f4b2eaf4-9933-4e3f-928b-4b7b64c8f8321669008045190-Nike-Therma-FIT-Mens-Full-Zip-Fitness-Hoodie-524166900804466-1.jpg",
        brand: "Nike",
        name: "Men Therma-FIT Training Jacket",
        price: "3595",
      },],
     "Blazers": [{
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16698514/2022/1/6/3a85935d-2b4f-4af3-aae1-0565a8dbc9b81641448352255PeterEnglandMenBlackSolidSlim-FitSingle-BreastedBlazer1.jpg",
        brand: "Peter England",
        name: "Men Solid Slim-Fit Single-Breasted Blazer",
        price: "3199Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13556186/2021/3/8/42d1cf34-b1dd-46ea-9495-2e553ae925c81615184220158-Arrow-Men-Blazers-1581615184218358-1.jpg",
        brand: "Arrow",
        name: "Zero Calorie Fit Formal Blazer",
        price: "2749Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10777836/2019/10/16/d9ae4409-16a9-4f7e-83b1-2022d3bf353c1571215965504-MANQ-Men-Blazers-6291571215962908-1.jpg",
        brand: "MANQ",
        name: "Men Slim Fit Formal Blazer",
        price: "2759Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10313487/2019/12/11/41ac7fdf-a86f-4d96-bada-ea4c1f605a7a1576043803149-Mast--Harbour-Men-Maroon-Solid-Regular-Fit-Single-Breasted-C-1.jpg",
        brand: "Mast & Harbour",
        name: "Single-Breasted Casual Blazer",
        price: "5999",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23132776/2023/5/11/4a135d2d-9abe-4692-a426-62ab85de25981683803271757Blazers1.jpg",
        brand: "RARE RABBIT",
        name: "Single-Breasted Formal Blazer",
        price: "6299Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14453770/2021/7/29/e27ba71e-51e9-423d-89dd-3d92917f1d601627537065886-INVICTUS-Men-Black-Solid-Single-Breasted-Slim-Fit-Blazer-135-1.jpg",
        brand: "INVICTUS",
        name: "Solid Slim Fit Blazer",
        price: "4558Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20714128/2022/11/12/0ec6bc0d-56b4-49ca-ae6d-1b9966a3263f1668231005494BlackberrysMenOlive-GreenSolidSingle-BreastedFormalBlazer1.jpg",
        brand: "Blackberrys",
        name: "Men Solid Single-Breasted Formal Blazer",
        price: "6995",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19451006/2022/8/9/3d5b9dd5-847c-4325-be93-50d7ecdad95a1660045403382VastramayMensGreenSilkBlendJodhpuri1.jpg",
        brand: "VASTRAMAY",
        name: "Men Bandhgala Blazer",
        price: "1949Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12311750/2022/1/13/0e693752-389b-4dc4-85bf-c927292cf34c1642066456757-Mast--Harbour-Men-Navy-Blue-And-Brown-Striped-Regular-Fit-Sm-1.jpg",
        brand: "Mast & Harbour",
        name: "Striped Smart Casual Blazer",
        price: "3899Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20181162/2022/9/27/302fe473-08c5-4d7a-809b-b376f05c33e91664263715128Blazers1.jpg",
        brand: "Jack & Jones",
        name: "Men Solid Slim-Fit Single Breasted Blazers",
        price: "3599Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23402372/2023/5/25/1313db9f-0573-434d-8268-2f4b089cee1a1685018878634Blazers1.jpg",
        brand: "SHOWOFF",
        name: "Slim Fit Bandhgala Blazer",
        price: "2624Rs",
      },
    ],
    "Suits": [ {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11353956/2020/2/12/9c48b7b7-a6f6-4620-8e9f-d000ba3016a11581497225150-Louis-Philippe-Men-Suits-4981581497221685-1.jpg",
        brand: "Louis Philippe",
        name: "Slim Fit Single-Breasted Suit",
        price: "7999Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10777776/2019/10/17/0c3d2adc-bae2-4d1f-ad24-ed8b7203e20d1571309007603-MANQ-Men-Suits-7301571309004151-1.jpg",
        brand: "MANQ",
        name: "Men Slim Fit Formal Suit",
        price: "3299Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19596264/2022/8/22/57feb84c-62d4-40b2-b31d-7b5237956be91661159801045MenMaroonTwoPieceSuit1.jpg",
        brand: "Peter England Elite",
        name: "Men Solid Single-Breasted 2-Piece Formal Suit",
        price: "5399Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23514220/2023/6/2/7a587b81-0bd7-4197-9144-849d7bc753301685713026938MenBlueTexturedSkinnyFitFormalThreePieceSuit1.jpg",
        brand: "V Dot",
        name: "Men 3-Piece Formal Suit",
        price: "12749Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21191774/2022/12/14/7f725ba1-d728-4889-b4de-eee395a0706d1671017067718MenNavySlimFitSolidFormalThreePieceSuit1.jpg",
        brand: "Allen Solly",
        name: "Men Slim-Fit Three Piece Suit",
        price: "8969Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20974312/2022/11/29/af96ec30-a33e-485f-94e3-67c5510b31e31669707515174MenNavySolidSlimFitFormalTwoPieceSuit1.jpg",
        brand: "Peter England Elite",
        name: "Piece Single Breasted Suit",
        price: "5999Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12554502/2020/10/16/ac876d67-e1a6-4633-8e40-ab55949fcd661602823813191-MANQ-Men-Suits-3201602823811476-1.jpg",
        brand: "MANQ",
        name: "Men Solid Slim Bandhgala Suit",
        price: "3519Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20671538/2022/11/9/d3eb48a5-b22c-4e04-84e0-21df330c93051667957417994MenBlueSlimFitTexturedFormalTwoPieceSuit1.jpg",
        brand: "Allen Solly",
        name: "Men Two Piece Formal Suit",
        price: "7149Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22821290/2023/4/19/e50f401b-8183-4e13-a7f9-ab8b8c3008b216819048884993PieceSLIMFITDOBBYSuits1.jpg",
        brand: "Blackberrys",
        name: "3-Piece Formal Suit",
        price: "15995",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20276790/2022/10/6/42d711c0-5f38-4c6a-a123-ac6bf862dfd31665038713926MenBlackTwoPieceSuit1.jpg",
        brand: "Peter England Elite",
        name: "Men Single-Breasted Suit",
        price: "5999Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10777826/2020/1/3/7f512e00-ab27-4f43-a6d5-155eda281a3f1578040453219-MANQ-Men-Black-Solid-Slim-Fit-Tuxedo-Suit-7081578040451665-1.jpg",
        brand: "MANQ",
        name: "Men Slim Fit Tuxedo Suit",
        price: "2924Rs",
      },
    ],
     "Rain Jackets": [{
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22483440/2023/3/23/35487c10-3705-4749-9274-5f593893045d1679576283721RainJacket1.jpg",
        brand: "Zeel",
        name: "Men Hooded Rain Jacket",
        price: "1349",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23478792/2023/5/30/586c9177-e511-4d7c-8318-f9ce382513131685448092780RainJacket1.jpg",
        brand: "Zeel",
        name: "Colourblocked Rain Hood Jacket",
        price: "1899",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21854762/2023/2/9/cb9fc736-7901-4900-9c51-5e2f2461fdfe1675939596253-Columbia-Mens-Orange-Colour-Polyester-Watertight-II-Jacket-4-1.jpg",
        brand: "Columbia",
        name: "Men Watertight II Rain Jacket",
        price: "5499",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22859616/2023/4/22/4f3e4f66-c061-4127-a5b8-dc8632a46d191682158980467RainSuit1.jpg",
        brand: "THE CLOWNFISH",
        name: "Waterproof Long Rain Jacket",
        price: "999Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21854770/2023/5/18/3d7df9eb-8d39-4089-ba43-6aafc666f6681684404641256-Columbia-Mens-Brown-Colour-Polyester-Hikebound-Jacket-778168-1.jpg",
        brand: "Columbia",
        name: "Hikebound Jacket",
        price: "7499",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21854782/2023/5/18/133b5f84-e28f-4121-88f8-7dd5a64ab6b41684404892612-Columbia-Mens-Orange-Colour-Polyester-Hikebound-Jacket-78516-1.jpg",
        brand: "Hikebound",
        name: "Jacket",
        price: "7499",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23478788/2023/5/30/51a5169f-610a-4a36-9a2e-2ca5fe7768aa1685448640890RainJacket1.jpg",
        brand: "Zeel",
        name: "Colourblocked Rain Jacket",
        price: "1849",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9360499/2019/4/30/a60538b6-ccba-41ef-b677-c0eb50eb63ff1556627382618-Plutus-Men-Navy-Solid-Hooded-Longline-Rain-Jacket-7361556627-1.jpg",
        brand: "Plutus",
        name: "Solid Hooded Rain Jacket",
        price: "1049Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15945684/2021/11/16/3dffb3dc-e46c-4e0c-ab60-2d0b0411fcfe1637059173974-EvaPOURation-Jacket-9281637059173211-1.jpg",
        brand: "Columbia",
        name: "Men EvaPOURation Rain Jacket",
        price: "7999",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18350066/2022/5/20/26d9ac15-47bd-44cc-9590-2d9e93c464461653046364040WildcraftMenRedSolidWaterproofRainwearJacket1.jpg",
        brand: "Wildcraft",
        name: "Men Solid Waterproof Rainwear Jacket",
        price: "2589Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18350096/2022/5/20/f76321e0-36c5-4424-b0bc-d8a901f479231653041764555RainAnorakUpperMust_BlackL1.jpg",
        brand: "Wildcraft",
        name: "Men Solid Hooded Rain Jacket",
        price: "1899",
      },
    ],
     "Kurta and Kurta Sets":[ {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17593278/2022/7/6/d53617f3-7840-4f9d-af76-f8c25aa6e3f51657110309550-Anouk-Men-Kurtas-521657110309090-1.jpg",
        brand: "Anouk",
        name: "Men Pure Cotton Printed Kurta",
        price: "494Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19834508/2022/9/8/2145ea88-70ea-4ce6-9195-ab98de88776a1662634859727SeeDesignsMenWhiteThreadWorkKurta1.jpg",
        brand: "See Designs",
        name: "Chikankari Pure Cotton Kurta",
        price: "1253Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20038544/2022/9/17/eae29efd-88d6-4ac5-982f-8db5afd7d40d1663406125913JompersMenBlackFlaredSleevesPathaniKurta1.jpg",
        brand: "Jompers",
        name: "Men Floral Embroidered Kurta",
        price: "1461Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9108493/2019/3/27/5b945c54-266d-45bc-b188-4557dab9c12f1553679422801-Deyann-Nehru-Jaket-Kurta-Set-7791553679421171-1.jpg",
        brand: "DEYANN",
        name: "Men Solid Kurta with Churidar",
        price: "1397Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17094592/2022/3/9/c9a6cdbf-15ed-4601-970f-0fd30a4fb4ac1646816023045-Anouk-Men-Kurtas-9491646816022683-1.jpg",
        brand: "Anouk",
        name: "Men Geometric Printed Kurta",
        price: "629Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23275510/2023/5/19/15b0ffb7-078d-4fc3-aea5-96550814c4531684480360469KurtaSets1.jpg",
        brand: "Sanwara",
        name: "Embroidered Kurta & Churidar",
        price: "3449Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20036548/2022/9/18/b793e41e-71a2-4e79-aead-adb265b7e5711663477350650EmbroideredKurtaPyjama1.jpg",
        brand: "Jompers",
        name: "Men Embroidered Kurta with Churidar",
        price: "1574Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23426082/2023/5/26/d2668ac6-cc4a-4f44-9296-e233b1a7e89c1685098561742KurtaSets1.jpg",
        brand: "Ode by House of Pataudi",
        name: "Men Printed Kurta with Pyjamas",
        price: "599Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17502638/2022/3/24/0032ea03-37c2-4156-89c7-82d380682de01648104391932-Indo-Era-Off-White-Multi-Stripes-Cotton-Straight-High-Low-Ku-1.jpg",
        brand: "Indo Era",
        name: "Men Printed Cotton Kurta",
        price: "1099Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14121958/2021/8/18/3978bd53-2a9f-4a5f-9bc0-cbf3b97692591629280721018-Anouk-Men-Kurta-Sets-5031629280720347-7.jpg",
        brand: "Anouk",
        name: "Men Pure Cotton Kurta Set",
        price: "1279Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23517974/2023/6/3/ee61d7cc-c7a1-49b4-8c37-d3db2f84a9f11685774002434JompersMenBlackGeometricThreadWorkKurta1.jpg",
        brand: "Jompers",
        name: "Straight Pure Cotton Kurta",
        price: "890Rs",
      },],
     "Sherwanis":[ {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23056766/2023/5/6/54b3b08d-a87a-4109-9711-0b896d0db9b71683367362028ManyavarBlackBlendedRayonSelfDesignIndoWesternSet1.jpg",
        brand: "Manyavar",
        name: "Self-Design Sherwani Set",
        price: "24999",
      },
    ],

    "Nehru Jackets": [ {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15001756/2021/10/11/4809b431-5e72-473f-a213-ae9a6437aa251633928930774VASTRAMAYBoysPinkGreenFloralDigitalPrintedSlim-FitNehruJacke1.jpg",
        brand: "VASTRAMAY",
        name: "Boys Printed Nehru Jacket",
        price: "449Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23415910/2023/5/26/f8e77bc0-aee1-4697-a41a-fc7d1247cb201685083641206NehruJackets1.jpg",
        brand: "Kaifoo",
        name: "Printed Nehru Jacket",
        price: "2999",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/19/5f12ab9e-6ab0-48de-976b-8b7173430c9b1618832541138-1.jpg",
        brand: "Van Heusen",
        name: "Men Solid Nehru Jacket",
        price: "2449Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19902078/2022/9/12/988b5b20-930b-4f5f-83de-45b93be5aded1662981155249AllenSollyBlueNehruJacket1.jpg",
        brand: "Allen Solly",
        name: "Men Solid Nehru Jacket",
        price: "2759Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/5/49067638-6b70-427d-a85c-143bc1a4aa101607145444421-1.jpg",
        brand: "Vartah",
        name: "Men Printed Pure Cotton Nehru Jacket",
        price: "2549Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22979272/2023/5/2/a5ad5b47-4caf-4bf1-aa99-37003d2d2c761683011300283NehruJackets1.jpg",
        brand: "SHOWOFF",
        name: "Printed Woven Nehru Jacket",
        price: "1624Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16123786/2021/11/17/81e98ff8-f344-4ff2-b24c-8cabe4ba1fee1637142927462KISAHMenGreyTailoredJacket1.jpg",
        brand: "KISAH",
        name: "Printed Nehru Jacket",
        price: "1763Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23101158/2023/5/9/16f8ced2-1c5d-4f67-bac0-c7b8686812871683634599311NehruJackets1.jpg",
        brand: "SHOWOFF",
        name: "Woven Design Nehru Jackets",
        price: "1376Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19902072/2022/9/12/684f613e-70c5-4e74-8feb-0781aea8ef321662981050156AllenSollyGreenNehruJacket1.jpg",
        brand: "Allen Solly",
        name: "Men Printed Nehru Jacket",
        price: "2759Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/29/6f08b787-f5bf-44f2-8f32-ea5281e8d02b1611938347334-1.jpg",
        brand: "KLOTTHE",
        name: "Men Solid Nehru Jacket",
        price: "659Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22615066/2023/4/3/1483e785-92cb-41cf-85e2-f48e7eb0b3a31680497586328WovenDesignNehruJacket1.jpg",
        brand: "Anouk",
        name: "Men Woven Design Nehru Jackets",
        price: "1151Rs",
      },
    ],
    "Dhotis":[
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23136886/2023/5/11/8e654f0f-eb4c-44a2-ad64-6cc4f5187c511683816830201Dhotis1.jpg",
        brand: "Ramraj",
        name: "Men Cotton Panchakacham Dhoti",
        price: "1195Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23136892/2023/5/12/9793e353-3925-403f-8caa-d0f3af15febd1683868092684Dhotis1.jpg",
        brand: "Ramraj",
        name: "Men Cotton Panchakacham Dhoti",
        price: "1240Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21635414/2023/1/20/178541a9-acca-4b20-9ee3-e32d2f6cff661674200616718SochWomenOffWhiteViscoseRayonSolidDhoti1.jpg",
        brand: "Soch",
        name: "Women Self-Designed Dhoti",
        price: "1498Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15122482/2021/8/12/c4392404-f377-4577-bbf6-accddbc7038a1628755879039VastramayMensWhiteCottonTraditionalDhoti1.jpg",
        brand: "VASTRAMAY",
        name: "Men Solid Pure Cotton Dhoti Pants",
        price: "779Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23525894/2023/6/5/ce6f5c02-28ee-46e1-8c36-5a907052be501685942343613Dhotis1.jpg",
        brand: "Ramraj",
        name: "Tissue With Zari Border Dhoti",
        price: "600Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23095130/2023/5/10/39dc2cee-6739-4b96-9275-50424134e2151683664204833Dhotis1.jpg",
        brand: "Ramraj",
        name: "Men Double Layer Cotton Dhotis",
        price: "1250Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23602354/2023/6/12/11e58438-9d5e-45c3-87e8-a25ce254c6981686559293271PATRORNAMidRiseDhotiPant1.jpg",
        brand: "PATRORNA",
        name: "Women Ankle-Length Dhoti Pants",
        price: "999Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23006470/2023/5/4/8a1d9b72-2db9-4f2f-816d-4a42560e66fa1683176413774Dhotis1.jpg",
        brand: "Ramraj",
        name: "Wrap Around Pure Cotton Dhoti",
        price: "660Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/5/6/4220d593-89a1-4ec9-94eb-0951b4db2c901620295458110-1.jpg",
        brand: "DEYANN",
        name: "Men Printed Dupion Silk Dhoti",
        price: "696Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23526470/2023/6/5/328a542a-b05b-48f7-b831-f8e5cb83b3f21685949355713Dhotis1.jpg",
        brand: "Ramraj",
        name: "Cotton With Zari Border Dhoti",
        price: "605Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16367192/2021/12/4/474b6ea1-3bc7-4f4f-b11b-9869297e6c7d1638602042395VastramayMensGreenCottonSilkDhoti1.jpg",
        brand: "VASTRAMAY",
        name: "Men Floral Cotton Silk Dhoti",
        price: "809Rs",
      },
    ],
    "Jeans":[
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13961910/2021/4/6/f47a9ae4-caf6-483c-9819-ff59b6226e051617685910330-Hubberholme-Men-Jeans-6731617685909546-1.jpg",
        brand: "Hubberholme",
        name: "Men Slim Fit Jeans",
        price: "475Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19488582/2022/8/12/85f69563-f0d4-4cbb-b712-e8ec73331a101660310792989HighStarMenBlueSlimFitJeans1.jpg",
        brand: "High Star",
        name: "Men Slim Fit Jeans",
        price: "408Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19138598/2022/7/16/65785259-bf5d-4013-8312-8ad072b3dde91657976684924Jeans1.jpg",
        brand: "Hubberholme",
        name: "Men Slim Fit Jeans",
        price: "492Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15896552/2022/9/26/a5457c87-03db-4f5f-a837-106367bb85be1664185254201HIGHLANDERMenGreyTaperedFitStretchableJeans1.jpg",
        brand: "HIGHLANDER",
        name: "Men Tapered Fit Jeans",
        price: "489Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12834592/2020/11/21/24b9774d-eb4b-48e1-a703-ddc24b5aa4ea1605950710086-Hubberholme-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchab-1.jpg",
        brand: "Hubberholme",
        name: "Men Slim Fit Jeans",
        price: "475Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12834606/2020/11/17/b9217230-afe6-4d94-a561-493d177f648f1605596142112ShirtsParkAvenueMenSuitsParkAvenueMenSuitsParkAvenueMenShirt1.jpg",
        brand: "Hubberholme",
        name: "Men Slim Fit Jeans",
        price: "492Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12834580/2020/11/21/ad428e74-8fb7-4cd8-a558-5af62db10fe41605951558248-Hubberholme-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchab-1.jpg",
        brand: "Hubberholme",
        name: "Men Slim Fit Jeans",
        price: "492Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23096426/2023/5/9/d02da0d6-5f25-49a9-83b0-a01e199902731683626068704FUBARMenBlackSlimFitSlashKneeJeans1.jpg",
        brand: "FUBAR",
        name: "Men Slim Fit Mid-Rise Jeans",
        price: "479Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23096428/2023/5/9/4d7a3be8-0bc8-417c-abf7-8cb4c3ea05551683631588769FUBARMenGreySlimFitJeans1.jpg",
        brand: "FUBAR",
        name: "Men Slim Fit Mid-Rise Jeans",
        price: "479Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23096430/2023/5/9/1c8f4fef-8e15-4d0d-bfbd-7458fe299a6d1683626031509FUBARMenBlueSlimFitLowDistressJeans1.jpg",
        brand: "FUBAR",
        name: "Men Slim Fit Mid-Rise Jeans",
        price: "479Rs",
      },
      {
        image:
          "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23096434/2023/5/9/484d49e0-dd47-4c4c-a61b-27bc15ddab9f1683626092408FUBARMenBlueSlimFitLowDistressJeans1.jpg",
        brand: "FUBAR",
        name: "Men Slim Fit Mid-Rise Jeans",
        price: "479Rs",
      },
    ],
    "Casual Shoes":[
      {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17990342/2022/4/22/9b07013a-6b53-4e96-99c5-5768885840081650619111596KillerMenBlackWovenDesignSlip-OnSneakers7.jpg",
        brand:"Killer",
        name:"Men Woven Design Slip-On Sneakers",
        price:"549Rs"
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16572054/2022/9/29/d4c2d0e0-64e7-424c-b574-0b735a93385a1664440798390BigFoxMenBlackLoafers1.jpg",
        brand:"Big Fox",
        name:"Men Loafers",
        price:"599Rs"
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19706550/2022/8/29/bc871684-cca2-4164-af03-62214c1beaf01661760489971ASIANMenGreyColourblockedSneakers1.jpg",
        brand:"ASIAN",
        name:"Men Colourblocked Sneakers",
        price:"597Rs"
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17990344/2022/4/22/dc61e654-4eb4-43f8-97fc-6ca39ff4c5231650617297958KillerMenGreyWovenDesignSlip-OnSneakers7.jpg",
        brand:"Killer",
        name:"Men Woven Design Slip-On Sneakers",
        price:"549Rs",
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20479568/2022/10/20/25e1c583-223c-4d06-9a4f-cd189aabd92a1666276785899BigFoxMenBlackTexturedLoafers1.jpg",
        brand:"Big Fox",
        name:"Men Slip-On Loafers",
        price:"599Rs"
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16572094/2022/9/27/a128cf5b-8e40-4c3a-9205-57606ba332361664277435180BigFoxMenBlackLoafers1.jpg",
        brand:"Big Fox",
        name:"Men Loafers",
        price:"599Rs"
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23168008/2023/5/13/2f7f3274-d865-4f50-9de4-8b7b6d3791571683970530010HRXbyHrithikRoshanMenTealWovenDesignSlip-OnSneakers1.jpg",
        brand:"HRX by Hrithik Roshan",
        name:"Men Slip-On Sneakers",
        price:"599Rs"
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15467210/2022/6/3/eda2ba26-9259-4d20-867c-81ab366f8f711654258777631BigFoxMenBlackLoafers7.jpg",
        brand:"Big Fox",
        name:"Men Black Loafers",
        price:"599Rs"
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19608466/2022/8/23/29c6245a-441d-4c40-aacd-77ce4633baca1661236459353ELIXIRMANMenWhiteColourblockedSneakers1.jpg",
        brand:"ELIXIR MAN",
        name:"Men Colourblocked Sneakers",
        price:"623Rs"
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18787396/2022/6/20/9af7db32-e91a-4a03-998f-1534bb558d2c1655717270397Delta-141.jpg",
        brand:"ASIAN",
        name:"Men Woven Design Sneakers",
        price:"610Rs"
        },
        {
        "image":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17435794/2022/3/8/2db68408-82c5-4e41-9d7e-534352350c361646729241497M7byMetronautMenGreyWovenDesignSneakers1.jpg",
         brand:"M7 by Metronaut",
         name:"Men Woven Design Sneakers",
         price:"659Rs"
        },
        
    ],
  },
  WOMEN:{

  }
};

  Object.values(DATA).flatMap(category=>Object.values(category)).flatMap(subcategory=>Object.values(subcategory)).map((item,index)=>{
    item.id=index+1;
    item.userId="";
    item.quantity=null;
    item.size="";

  })


// for (const category in DATA) {
//   for (const subcategory in DATA[category]) {
//     const items=DATA[category][subcategory]
//     items.map((item,index)=>{
//      item.id=nanoid()
//     })
//   }
// }
// console.log(DATA)

export default DATA;
