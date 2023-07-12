const menu = [
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: 'https://media.istockphoto.com/id/1137377978/photo/pancakes-with-banana-blueberry-and-maple-syrup-for-a-breakfast.jpg?s=612x612&w=0&k=20&c=3LObE7m_LNH503Hmpd_rDdCTL95-4ynHDLWQM7N2_ck=',
      desc: `Buttermilk pancakes are a popular breakfast dish made from a simple batter that typically includes flour, buttermilk, eggs, and a leavening agent like baking powder or baking soda. The batter is mixed until smooth and then cooked on a griddle or frying pan until golden brown.`,
    },
    {
      id: 2,
      title: 'pulao Rice',
      category: 'lunch',
      price: 13.99,
      img: 'https://media.gettyimages.com/id/1334103993/photo/pulao-an-indian-speciality-a-dish-made-of-rice-with-mint-chutney.jpg?s=612x612&w=gi&k=20&c=zVCmK9CaqU2XP-SEYeEWGXVBImGqe7jGL7HKFmOJuHM=',
      desc: `
      Pulao rice, also known as pilaf rice, is a flavorful and aromatic dish made by cooking rice with various ingredients such as vegetables, meat, spices, and herbs. It is a popular dish in many cuisines around the world, including Indian, Middle Eastern, and Mediterranean. `,
    },
    {
      id: 3,
      title: 'milkshake',
      category: 'shakes',
      price: 6.99,
      img: 'https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/07/12/1373669549008-11-Ted-s-Bulletin-four-shakes-1307121931_16_9.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
      desc: `
      A milkshake is a delicious and creamy beverage made by blending milk, ice cream, and various flavorings together. It is a popular treat enjoyed by people of all ages, offering a refreshing and indulgent experience.`,
    },
    {
      id: 4,
      title: 'paratha',
      category: 'breakfast',
      price: 20.99,
      img: 'https://www.cookwithnabeela.com/wp-content/uploads/2022/11/Paratha.webp',
      desc: `
      Paratha is a popular and versatile unleavened flatbread originating from the Indian subcontinent. It is commonly enjoyed as a breakfast or lunch item and is known for its flaky, layered texture and delicious taste. Parathas can be plain or stuffed with various fillings, making them a versatile and satisfying dish. `,
    },
    {
      id: 5,
      title: 'egg biryani',
      category: 'lunch',
      price: 22.99,
      img: 'https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe.jpg',
      desc: `Egg biryani is a flavorful and aromatic rice dish that features boiled eggs as the main protein component. It is a popular variation of biryani, a traditional Indian and Pakistani rice dish known for its rich and complex flavors. `,
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img: 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Oreo-Milkshake-10.jpg',
      desc: `An Oreo shake is a delectable and indulgent beverage made by blending Oreo cookies with ice cream and milk. It is a popular treat enjoyed by Oreo cookie lovers of all ages, offering a creamy and delightful flavor.`,
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: 'https://previews.123rf.com/images/bhofack2/bhofack21708/bhofack2170800542/84631255-healthy-full-american-breakfast-with-eggs-bacon-and-pancakes.jpg',
      desc: `: Eggs are a staple in American breakfasts and can be prepared in various ways such as scrambled, fried, poached, or made into omelets. `,
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img: 'https://media.cntraveler.com/photos/586eb8449d2b725a71af8123/4:3/w_2048,h_1536,c_limit/hot-dogs-gene-and-judes-photo-credit-Nick-Holmes.jpg',
      desc: `The hamburger is a quintessential American classic. It consists of a ground beef patty served in a bun and can be customized with various toppings such as cheese, lettuce, tomatoes, onions, pickles, and condiments like ketchup, mustard, and mayonnaise.  `,
    },
    {
      id: 9,
      title: 'shammam shake',
      category: 'shakes',
      price: 16.99,
      img: 'https://gayathriscookspot.com/wp-content/uploads/2017/01/1-10.jpg',
      desc: `Shamam Milkshake is so creamy and so rich despite the fact there is no ice cream added. These kind of milkshakes where you add just fruits and milk are a great way to make kids drink along with the benefits of fruits. `,
    },
    {
      id:10,
      title:'Dhokla',
      category:'breakfast',
      price:'15.88',
      img:'https://www.cookwithkushi.com/wp-content/uploads/2021/05/IMG_4672s.jpg',
      desc:'Dhokla is a savory steamed cake made of fermented batter that is mainly a mixture of rice flour and chickpea flour'
    },
    {
    id:11,
    title:'French Beans and Carrot Thoran',
    category:'lunch',
    price:'17.00',
    img:'https://www.tarladalal.com/td_cont_img/French-Beans-and-Carrot-Thoran-3.JPG',
    desc:'Thoran  veg stir fry with coconut, is an integral part of everyday Kerala lunch. Thoran is made with almost any vegetable, here Iam sharing a very basic thoran recipe with easily available vegetables like carrot & beans'
    },
    {
    id:12,
    title:'Caramel Frappuccino',
    category:'shakes',
    price:'16.06',
    img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F10%2F15%2Fcaramel-frappuccino-mr.jpg&w=200&c=sc&poi=face&q=60',
    desc:'This is my version of Starbucks Caramel Frappuccino! Its easy to make at home by blending coffee with milk, caramel sauce, and ice. Top each glass with whipped cream and drizzle more caramel sauce on top. Serve with a straw.'
    },
    {
    id:13,
    title:'chole batura',
    category:'breakfast',
    price:'16.09',
    img:'https://www.cookwithkushi.com/wp-content/uploads/2021/01/IMG_7765.jpg',
    desc:'chole bhature is packed full of flavor and it is a complete breakfast meal recipe full of carbohydrates, fats, and proteins. However, since refined flour (maida) is used, it is not healthy to eat if you are on a weight loss program or following any diet plan.'
    },
    {
    id:14,
    title:' Allahabad Ki Tehri',
    category:'lunch',
    price:'17.08',
    img:'https://i.ndtvimg.com/i/2015-04/pulao_625x350_51429707247.jpg',
    desc:'Also known as vegetable pulao, this one pot rice meal is unique to the rich state of Uttar Pradesh. Its aromatic, made with a lot of bright vegetables, fiery masalas and topped with desi ghee. Cook for lunch accompanied with curd.'

    },
    {
    id:15,
    title:'Maple-Peach Milk Shake',
    category:'shakes',
    price:'17.00',
    img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F07%2F23%2Fmaple-peach-milk-shake-ck.jpg&w=200&c=sc&poi=face&q=60',
    desc:'Blend maple syrup, peaches, low-fat frozen yogurt, and low-fat milk to make this flavorfull milkshake. '

    },
    {
    id:16,
    title:'undi',
    category:'breakfast',
    price:'17.67',
    img:'https://www.cookwithkushi.com/wp-content/uploads/2021/11/IMG_4514s.jpg',
    desc:'Undi or Coconut Rice Dumplings is an easy-to-make, traditional,  healthy, and tasty breakfast recipe from the coastal Karnataka region (Udupi, Mangalore) prepared using rice and coconut.'
    },
    {
    id:17,
    title:'Paneer Kofta',
    category:'lunch',
    price:'18.00',
    img:'https://i.ndtvimg.com/i/2017-10/paneer-kofta_620x330_81507018575.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
    desc:'This paneer kofta is stuffed with aromatic goodness of raisins and khoya along with various spices, deep fried and simmering hot in a creamy gravy.'
    },
    {
    id:18,
    title:'Chocolate-Peanut Butter Banana Shake',
    category:'shakes',
    price:'18.90',
    img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F02%2F03%2Fpeanut-butter-chocolate-banan-shake-mr-final-2000.jpg&w=200&c=sc&poi=face&q=60',
    desc:'This chocolate, peanut butter, and banana shake is like an explosion of flavors all in one glass. Top this shake with a generous (and messy) crown of whipped cream and chocolate syrup for the perfect answer to your chocolate craving.'
    }
  ];
  export default menu;