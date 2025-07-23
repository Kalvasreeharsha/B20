const states = document.querySelectorAll('.state');
const stateNames = document.querySelectorAll('.state-name');
const infoDialog = document.getElementById('info-dialog');
const stateNameElement = document.getElementById('state-name');
const stateInfoElement = document.getElementById('state-info');
const overlayElement = document.getElementById('overlay');
const stateData = {
  'Telangana': {
     cuisine: '<b>Hyderabad Dum Biryani</b><br>Telangana is known for its spicy cuisine, including dishes like Hyderabadi Biryani and Mirchi Ka Salan.',
     ingredients:'<br><b>Hyderabad Dum Biryani</b><br>Sure, heres a simplified ingredients for Hyderabadi Biryani:<br><b>Ingredients:</b><br>- 2 cups basmati rice<br>- 500g meat (chicken, mutton, or beef)<br>- 1 cup yogurt<br>- 2 large onions, thinly sliced<br>- 2 tomatoes, chopped<br>- 4 tablespoons ghee or oil<br>- Whole spices (cumin, cardamom, cloves, cinnamon)<br>- 1 teaspoon ginger-garlic paste<br>- 1 teaspoon red chili powder<br>- 1/2 teaspoon turmeric powder<br>- Saffron strands soaked in warm milk<br>- Fresh coriander and mint leaves<br>- Salt to taste<br>',
     recipe: '<br><b>Hyderabad Dum Biryani Recipe:</b><br><b>Step 1:</b> Marinate meat with yogurt, half the ginger-garlic paste, red chili powder, turmeric, and salt for 2 hours.<br><b>Step 2:</b> Deep fry sliced onions until golden brown. Reserve half for garnish.<br><b>Step 3:</b> Cook marinated meat with fried onions, tomatoes, and whole spices until 70% done.<br><b>Step 4:</b> Boil rice with whole spices until 70% cooked. Drain.<br><b>Step 5:</b> Layer rice over meat. Sprinkle remaining fried onions, mint, coriander, and saffron milk.<br><b>Step 6:</b> Cover with aluminum foil, then lid. Cook on high heat for 3 minutes, then on low heat for 45 minutes.<br><b>Step 7:</b> Let it rest for 10 minutes before serving with raita and shorba.',
     imageSrc: 'food/telangana.avif',
     secondImageSrc: 'qrimages/telangana.png'
  },
  'Andhra Pradesh': {
     cuisine: '<b>GONGURA PICKLE</b><br>Andhra cuisine is famous for its spicy and tangy flavors, with dishes like Andhra Chicken Curry and Gongura Pickle.',
     ingredients: '<br><b>Ingredients<br></b>8 cups tightly packed gongura leaves <br>3/4 cup gingelly / sesame oil<br>Salt to taste<br><br><b> For 1st tempering:<br></b>1 tsp mustard seeds<br>1/2 tsp fenugreek seeds<br>8 dry red chillies<br>4 green chillies<br>A few curry leaves<br>1/2 cup chopped coriander leaves<br>1 tsp hing powder / asafoetida powder / perungaayam<br><br><b>The 2nd tempering:<br></b>1/2 tsp mustard seeds<br>1/2 tsp fenugreek seeds<br>2 red chillies<br>1/4 tsp hing powder / asafoetida powder / perungaayam<br>8 flakes of garlic<br>',
     recipe: '<br><b>Gongura Pickle Recipe:</b><br><b>Step 1:</b> Clean gongura leaves and remove stems. Wash and drain thoroughly.<br><b>Step 2:</b> Heat 1/2 cup oil in a pan. Add first tempering ingredients and fry until aromatic.<br><b>Step 3:</b> Add gongura leaves and cook until wilted and reduced by half.<br><b>Step 4:</b> Add salt and cook until leaves are completely cooked and oil separates.<br><b>Step 5:</b> Cool completely and store in a clean jar.<br><b>Step 6:</b> For second tempering, heat remaining oil with mustard seeds, fenugreek seeds, red chillies, hing, and garlic.<br><b>Step 7:</b> Pour hot tempering over stored pickle. Mix well and store in refrigerator.<br><b>Serving:</b> Serve with hot rice and ghee.',
     imageSrc: 'food/andhrapradesh.jpg',
     secondImageSrc: 'qrimages/andhra pradesh.png'
 
    },
   'Kerala': {
      cuisine: '<b>APPAM</b><br>It is a kind of dosa ingredients or a pancake native to the kerala cuisine which is mainly prepared from fermented premixed rice and coconut batter. ',
      ingredients:'Certainly! Appam is a popular South Indian dish, known for its soft and fluffy texture. Heres a simple ingredients:<br><b>Ingredients:<br></b>- 1 cup raw rice<br>- 1/4 cup cooked rice <br>- 1/4 cup grated coconut<br>- 1/2 teaspoon active dry yeast<br>- 1 teaspoon sugar<br>- 1/2 cup lukewarm water<br>- A pinch of salt<br>',
      recipe: '<br><b>Appam Recipe:</b><br><b>Step 1:</b> Soak raw rice for 4 hours, then drain.<br><b>Step 2:</b> Dissolve yeast and sugar in lukewarm water. Let it foam for 5 minutes.<br><b>Step 3:</b> Grind soaked rice, cooked rice, and coconut with little water to make smooth batter.<br><b>Step 4:</b> Add yeast mixture and salt to batter. Mix well.<br><b>Step 5:</b> Keep in warm place for 8-10 hours to ferment until doubled.<br><b>Step 6:</b> Heat appam pan or wok. Pour batter in center and swirl to spread edges thin.<br><b>Step 7:</b> Cover and cook for 2-3 minutes until edges are crispy and center is fluffy.<br><b>Step 8:</b> Carefully remove and serve hot with coconut milk or curry.',
      imageSrc:'food/kerala.jpg',
      secondImageSrc: 'qrimages/kerala.png'
   },
   'Tamil Nadu':{
      cuisine: '<b>PONGAL</b><br>This is a staple meal during every auspicious festival of Tamil Nadu. Besides the rice and sweet milk, the dish is cooked with ingredients like cardamom, green gram, raisins and cashew nuts. According to the traditional beliefs, Pongal is cooked in open space in the sunlight, as it is dedicated to the sun god.',
      ingredients:'Certainly! Here are the simple ingredients for making Pongal, a popular South Indian dish:<br><b>Ingredients:-<br></b> 1 cup rice<br>- 1/4 cup split yellow moong dal (lentils)<br>- 4 cups water<br>- 1 cup milk<br>- 1/2 teaspoon black pepper, freshly ground<br>- 1/2 inch ginger, finely chopped<br>- 1 tablespoon ghee (clarified butter)<br>- 1/2 teaspoon cumin seeds<br>- A pinch of asafoetida (hing)<br>- Cashews and curry leaves for garnish<br>- Salt to taste<br>',
      recipe: '<br><b>Pongal Recipe:</b><br><b>Step 1:</b> Dry roast moong dal until fragrant and golden. Set aside.<br><b>Step 2:</b> Wash rice and dal together. Boil with water and milk until very soft and mushy.<br><b>Step 3:</b> Mash the cooked rice-dal mixture until smooth. Add salt.<br><b>Step 4:</b> Heat ghee in a small pan. Add cumin seeds and let them splutter.<br><b>Step 5:</b> Add chopped ginger, black pepper, and asafoetida. Fry for a minute.<br><b>Step 6:</b> Add cashews and curry leaves. Fry until cashews turn golden.<br><b>Step 7:</b> Pour this tempering over the pongal and mix well.<br><b>Step 8:</b> Serve hot with coconut chutney and sambar.',
      imageSrc:'food/tamil nadu.jpg',
      secondImageSrc: 'qrimages/tamil nadu.png'    
   },
   'Maharashtra':{
      cuisine: '<b>MISAL PAV</b><br>Misal Pav is quintessentially from Pune and is one of the most popular Maharashtrian breakfast, snack or even brunch. It is a street food popularly found in Mumbai. It has a spicy and tangy lentil curry which is made with moth beans and is served with Pav bread. At times, it is eaten with yoghurt to lessen the spice.',
      ingredients:'To make Masala Pav, heres a simple ingredients<br><b>Ingredients:<br></b>- 4 pav buns<br>- 2 tbsp butter<br>- 1 cup finely chopped onions<br>- 1/2 cup finely chopped tomatoes<br>- 1/4 cup finely chopped capsicum<br>- 1 tbsp ginger-garlic paste<br>- 1 tsp pav bhaji masala<br>- 1/2 tsp red chili powder<br>- 1/4 tsp turmeric powder<br>- Salt to taste<br>- Chopped coriander leaves for garnish<br>- Lemon wedges<br>',
      recipe: '<br><b>Misal Pav Recipe:</b><br><b>Step 1:</b> Soak moth beans overnight. Pressure cook until soft.<br><b>Step 2:</b> Heat oil in a pan. Add cumin seeds, onions, and sauté until golden.<br><b>Step 3:</b> Add ginger-garlic paste, tomatoes, and cook until soft.<br><b>Step 4:</b> Add turmeric, red chili powder, and pav bhaji masala. Cook for 2 minutes.<br><b>Step 5:</b> Add cooked moth beans with water to make a curry consistency.<br><b>Step 6:</b> Simmer for 15 minutes. Garnish with onions, coriander, and sev.<br><b>Step 7:</b> Heat pav with butter on a griddle.<br><b>Step 8:</b> Serve hot misal with buttered pav, lemon wedges, and yogurt.',
      imageSrc:'food/maharashtra.jpg',
      secondImageSrc: 'qrimages/maharastra.png'
   },
    'Madhya Pradesh':{
      cuisine: '<b>BHUTTE KA KEES</b><br>healthy and yet delicious delicacy of Madhya Pradesh is Bhutte Ka Kees. As the name clearly suggests, this dish mainly comprises of corns. Grated corns are well-cooked with spices and skimmed milk which adds a slightly sweet taste to the dish. Mustard seeds and green chillies are further added to enhance the taste of this authentic cuisine of Madhya Pradesh.',
      ingredients:'<br><b>Ingredients<br></b>5 Medium Fresh corn cobs<br>4 tbsp Oil/ghee1/<br>2 tsp Cumin seeds<br>1/8 tsp Asafoetida<br>2 tsp Ginger paste<br>1/2 tsp Green chilli paste<br>1 1/2 tsp Salt<br>1 cup Milk<br> Coriander , finely chopped<br>1/2 cup Coconut , grated',
      recipe: '<br><b>Bhutte Ka Kees Recipe:</b><br><b>Step 1:</b> Grate fresh corn cobs using a grater to extract corn kernels and pulp.<br><b>Step 2:</b> Heat oil/ghee in a heavy-bottomed pan. Add cumin seeds and let them splutter.<br><b>Step 3:</b> Add asafoetida, ginger paste, and green chili paste. Sauté for 30 seconds.<br><b>Step 4:</b> Add grated corn and mix well. Cook on medium heat for 8-10 minutes, stirring frequently.<br><b>Step 5:</b> Add salt and mix. Cook until corn is tender and starts leaving the pan.<br><b>Step 6:</b> Add milk gradually and cook until it thickens to a creamy consistency.<br><b>Step 7:</b> Garnish with fresh coriander and grated coconut.<br><b>Step 8:</b> Serve hot as a snack or side dish.',
      imageSrc:'food/madhya pradesh.jpg',
      secondImageSrc: 'qrimages/madhya pradesh.png'
    },
    'Karnataka':{
      cuisine:'<b>BISI BELE BATH</b><br>Bisi Bele Bath is a traditional ingredients of Karnataka that is prepared in every Kannadigas home. The dish has a distinct coconut flavour and is available at any restaurant in Bangalore. The ingredients is a complicated one that involves many vegetables and flavours',
      ingredients:'<b>Ingredients:</b><br>- 1 cup rice<br>- 1/2 cup toor dal (split pigeon peas)<br>- 2 cups mixed vegetables (carrots, beans, peas)<br>- 1 small tamarind ball (soaked in water)<br>- 2 tablespoons Bisi Bele Bath masala powder<br>- 1 teaspoon mustard seeds<br>- A pinch of asafoetida (hing)<br>- 1 sprig curry leaves<br>- 2 tablespoons ghee<br>- Salt to taste<br>',
      recipe: '<br><b>Bisi Bele Bath Recipe:</b><br><b>Step 1:</b> Pressure cook rice and toor dal together with turmeric until very soft.<br><b>Step 2:</b> Cook mixed vegetables separately until tender.<br><b>Step 3:</b> Extract tamarind juice and boil with salt until it reduces slightly.<br><b>Step 4:</b> Mash the cooked rice-dal mixture until smooth.<br><b>Step 5:</b> Add cooked vegetables, tamarind juice, and Bisi Bele Bath masala powder.<br><b>Step 6:</b> Mix well and simmer for 10 minutes until well combined.<br><b>Step 7:</b> Heat ghee in a small pan. Add mustard seeds, asafoetida, and curry leaves.<br><b>Step 8:</b> Pour tempering over the dish and serve hot with ghee and papad.',
      imageSrc: 'food/karnataka.jpg',
      secondImageSrc: 'qrimages/karnataka.png'
    },
    'Goa':{
      cuisine:'<b>GOAN FISH CURRY</b><br>The Goan fish curry or the Xitti Kodi is the staple diet of every Goan. The Goan fish curry is loaded with various spices along with coconut. Raw mango is also used to give the dish a tangy flavour. The main ingredients of the dish are a decent sized Pomfret and a raw mango. Instead of Pomfret, Kingfish may also be used',
      ingredients:'<br><b>Ingredients<br></b>1 kilograms king fish (surmai)<br>1 tablespoon tamarind paste<br>2 teaspoon coriander seeds<br>1/2 teaspoon cumin seeds<br>7 cloves garlic<br>2 pinches salt<br>1 1/2 tablespoon refined oil<br>4 cup water<br>1 large chopped onion<br>5 dry red chili<br>2 tablespoon grated coconut<br>1 sliced & slit green chilli<br>1/2 teaspoon powdered turmeric<br>',
      recipe: '<br><b>Goan Fish Curry Recipe:</b><br><b>Step 1:</b> Clean and cut fish into medium pieces. Marinate with turmeric and salt for 15 minutes.<br><b>Step 2:</b> Grind coconut, red chilies, coriander seeds, cumin seeds, and garlic with little water to make smooth paste.<br><b>Step 3:</b> Heat oil in a clay pot or heavy-bottomed pan. Add chopped onions and sauté until golden.<br><b>Step 4:</b> Add ground masala paste and cook for 3-4 minutes until oil separates.<br><b>Step 5:</b> Add tamarind paste and water. Bring to a boil.<br><b>Step 6:</b> Add fish pieces and green chilies. Cook for 8-10 minutes until fish is done.<br><b>Step 7:</b> Adjust salt and consistency. Simmer for 2 minutes.<br><b>Step 8:</b> Serve hot with steamed rice.',
      secondImageSrc: 'qrimages/goa.png',
      imageSrc: 'food/goa.jpg'
    },
    'Orissa':{
      cuisine:'<b>CHHENA PODA</b><br>Odishas very own cheesecake! The one sweet that Odisha is famous for - Chhena Poda, also known to be Lord Jagannaths favourite sweet and is often offered to him at the Puri Temple. The lingering taste of burnt home-made cottage cheese and semolina combined with sugar syrup simply blow away your mind. This rare dessert is baked for several hours until it becomes red and the caramelised sugar brings out the distinct flavour of Chhena Poda.',
      ingredients:'Chhena Poda is a traditional Oriya dessert from the Indian state of Odisha. Its a delicious baked cheesecake made with cottage cheese. Heres a simple ingredients: <br><b>Ingredients:</b><br>- 2 cups fresh paneer (cottage cheese), crumbled<br>- 1 cup sugar (adjust according to taste)<br>- 1/4 cup suji (semolina)<br>- 1/4 cup wheat flour<br>- 1/4 cup ghee (clarified butter)<br>- 1/2 teaspoon baking powder<br>- 1/2 teaspoon cardamom powder<br>- A pinch of salt<br>- Chopped nuts for garnish (optional)<br>',
      recipe: '<br><b>Chhena Poda Recipe:</b><br><b>Step 1:</b> Preheat oven to 180°C. Grease a baking dish with ghee.<br><b>Step 2:</b> Mix crumbled paneer with sugar and knead until smooth paste forms.<br><b>Step 3:</b> Add semolina, flour, baking powder, cardamom powder, and salt. Mix well.<br><b>Step 4:</b> Add melted ghee and mix to form a smooth batter.<br><b>Step 5:</b> Pour batter into greased baking dish and level the surface.<br><b>Step 6:</b> Bake for 45-60 minutes until top is golden brown and caramelized.<br><b>Step 7:</b> Cool completely before cutting into pieces.<br><b>Step 8:</b> Garnish with chopped nuts and serve at room temperature.',
      imageSrc: 'food/orissa.jpg',
      secondImageSrc: 'qrimages/orissaa.png'
    },
    'Chhattisgarh':{
      cuisine:'<b>MUTHIA</b><br>Muthia are dumplings cooked in the traditional style of the Chhattisgarh state. Muthia is prepared with the rice batter which is seasoned with various spices. The dish is not fried but is steamed and hence it retains the original flavor of its ingredients. Muthia is a famous dish of the state which is usually enjoyed in the breakfast',
      ingredients:'<br><b>Ingredients:<br></b>1 cup whole wheat flour<br>1/4 cup besan (gram flour)<br>1/4 cup semolina (sooji)<br>1 cup finely chopped fenugreek leaves (methi)<br>2 tbsp oil1 tsp mustard seeds<br>1/2 tsp cumin seeds<br>1/4 tsp asafoetida (hing)<br1/2 tsp turmeric powder<br>1 tsp red chili powder (adjust to taste)<br>Salt to taste<br>1 tbsp yogurt<br>1 tsp sugar<br>1 tsp baking sodaWater (as needed)',
      recipe: '<br><b>Muthia Recipe:</b><br><b>Step 1:</b> Mix wheat flour, besan, semolina, and chopped fenugreek leaves in a bowl.<br><b>Step 2:</b> Add turmeric, red chili powder, salt, sugar, and yogurt. Mix well.<br><b>Step 3:</b> Add baking soda and 1 tbsp oil. Mix and add water gradually to form firm dough.<br><b>Step 4:</b> Divide dough into portions and shape into cylindrical logs.<br><b>Step 5:</b> Steam the muthia logs for 15-20 minutes until cooked through.<br><b>Step 6:</b> Cool and cut into round slices.<br><b>Step 7:</b> Heat remaining oil in a pan. Add mustard seeds, cumin seeds, and asafoetida.<br><b>Step 8:</b> Add muthia slices and fry until golden. Serve hot with green chutney.',
      secondImageSrc: 'qrimages/chhattisgarh.png',
      imageSrc: 'food/chhattisgarh.jpg'
    },
    'Gujarat':{
      cuisine:'<b>DHOKLA</b><br>Dhokla is an authentic snack which has originated from the state of Gujarat. This traditional food item is prepared out of gram flour and chana dal. Plus it is a reasonably easy ingredients which can be prepared quickly within half an hour. Dhokla coupled with some chilli paste and chutney makes for the perfect snack ',
      ingredients:'Certainly! Dhokla is a popular Indian steamed cake made from fermented rice and chickpea flour batter. Here are the  basic ingredients: <br><b>Ingredients: </b><br>For Batter 1 cup gram flour (besan)<br>- 1 cup semolina (sooji/rava)<br>- 1 cup plain yogur <br>- 1 teaspoon ginger paste <br>1 green chili,finely chopped <br>- 1/2 teaspoon turmeric powder<br>- Salt to tast<br>- 1 1/2 cups water (adjust as needed) <br>For Tempering:- <br>2 tablespoons oil<br>- 1 teaspoon mustard seeds<br>- 1 teaspoon cumin seeds<br>- A pinch of asafoetida (hing)<br>- 8-10 curry leaves<br>- 2 green chilies, slit<br>- 2 tablespoons chopped coriander leaves <br>For Garnish:<br>- Grated coconut<br>- Chopped coriander leaves',
      recipe: '<br><b>Dhokla Recipe:</b><br><b>Step 1:</b> Mix gram flour, semolina, yogurt, ginger paste, green chili, turmeric, and salt.<br><b>Step 2:</b> Add water gradually to make smooth batter. Rest for 4-5 hours to ferment.<br><b>Step 3:</b> Add fruit salt/baking soda to batter just before steaming and mix gently.<br><b>Step 4:</b> Pour batter into greased steaming plates and steam for 12-15 minutes.<br><b>Step 5:</b> Check doneness with a toothpick. Cool for 5 minutes and cut into pieces.<br><b>Step 6:</b> Heat oil in a pan. Add mustard seeds, cumin seeds, asafoetida, and curry leaves.<br><b>Step 7:</b> Add green chilies and pour tempering over dhokla pieces.<br><b>Step 8:</b> Garnish with coriander and coconut. Serve with green chutney.',
      secondImageSrc: 'qrimages/gujarat.png',
      imageSrc: 'food/gujarat.jpg'
    },
    'Jharkhand':{
      cuisine:'<b>RUGRA</b><br>Rugra is an item which tastes like mushroom and is very delicious to eat. Rugra is basically an indigenous variety of vegetable, rich in protein and minerals and high on calorific value. This is thus a very healthy dish.',
      ingredients:'<br><b>Ingredients:<br></b>1 cup Rugra (wild mustard greens)<br>2 tablespoons mustard oil<br>1 teaspoon cumin seeds<br>1/2 teaspoon asafoetida (hing)<br>1/2 teaspoon turmeric powder<br>1 teaspoon fennel powder<br>1 teaspoon ginger powder<br>1 teaspoon red chili powder (adjust to taste)<br>Salt to taste<br>',
      recipe: '<br><b>Rugra Recipe:</b><br><b>Step 1:</b> Clean rugra thoroughly and remove any stems or debris.<br><b>Step 2:</b> Heat mustard oil in a heavy-bottomed pan until it smokes. Cool slightly.<br><b>Step 3:</b> Add cumin seeds and let them splutter.<br><b>Step 4:</b> Add asafoetida and turmeric powder. Fry for 30 seconds.<br><b>Step 5:</b> Add cleaned rugra and mix well with the spices.<br><b>Step 6:</b> Add fennel powder, ginger powder, red chili powder, and salt.<br><b>Step 7:</b> Cook on low heat for 15-20 minutes, stirring occasionally.<br><b>Step 8:</b> Serve hot with rice or roti.',
      secondImageSrc: 'qrimages/jharkhand.png',
      imageSrc: 'food/jharkhand.jpg'
    },
    'West Bengal':{
      cuisine:'<b>KOSHA MANGSHO</b><br>Kosha Mangsho is a traditional dish prepared of Mutton (Goat meat) in every Bengali house. This dish of mutton with some thick curry is high on spices and richness. This dish is made with mutton and spices such as cloves, cinnamon, onion and garlic are used.',
      ingredients:'Heres are the ingredients for preparing Kosha Mangsho:<br></br><b>*Ingredients:*</b><br>- 500 grams mutton, cut into pieces<br>- 3 large onions, finely sliced<br>- 2 tomatoes, finely chopped<br>- 2 tablespoons ginger-garlic paste<br>- 1/2 cup plain yogurt<br>- 4 tablespoons mustard oil<br>- 2-3 green chilies, slit<br>- 2 teaspoons cumin powder<br>- 2 teaspoons coriander powder<br>- 1 teaspoon red chili powder<br>- 1/2 teaspoon turmeric powder<br>- 1 teaspoon garam masala<br>- Salt to taste<br>- Fresh coriander leaves for garnish<br>',
      recipe: '<br><b>Kosha Mangsho Recipe:</b><br><b>Step 1:</b> Heat mustard oil in a heavy-bottomed pan. Fry mutton pieces until browned. Remove and set aside.<br><b>Step 2:</b> In the same oil, fry sliced onions until deep golden brown. Remove half for garnish.<br><b>Step 3:</b> Add ginger-garlic paste to remaining onions and cook for 2 minutes.<br><b>Step 4:</b> Add tomatoes and cook until they break down and become mushy.<br><b>Step 5:</b> Add all spice powders and cook for 2 minutes until fragrant.<br><b>Step 6:</b> Add fried mutton pieces and yogurt. Mix well and cook for 5 minutes.<br><b>Step 7:</b> Add hot water to barely cover the meat. Bring to boil, then simmer covered for 1 hour.<br><b>Step 8:</b> Cook uncovered until thick. Garnish with fried onions and coriander. Serve with rice.',
      secondImageSrc: 'qrimages/west bengal.png',
      imageSrc: 'food/west bengal.jpg'
    },
    'Rajasthan':{
      cuisine:'<b>DAL BATI CHURMA</b><br>This famous Rajasthani dish needs no introduction. Dal bati churma is synonymous to Rajasthan; known for its crunchy batis, dipped in ghee along with spicy daal and sweet churma',
      ingredients:'Certainly! Heres a simple ingredients for Dal Bati Churma:<br><b>Ingredients:<br></b><br><b>For Bati:<br></b>- 2 cups whole wheat flour<br>- 1/2 cup semolina (sooji)<br>- 1/2 cup ghee (clarified butter)<br></br>- 1/2 cup yogurt<br>- 1 teaspoon baking powder<br>- Salt to taste<br></br>- Water (as needed to knead the dough)<b></b><br><b>For Dal:<br></b>- 1 cup split yellow lentils (toor dal)<br>- 1 small onion, finely chopped<br>- 2 tomatoes, chopped<br>- 1-inch ginger, grated<br>- 2-3 cloves garlic, minced<br>- 1/2 teaspoon turmeric powder<br>- 1 teaspoon red chili powder<br>- 1 teaspoon coriander powder<br>- 1/2 teaspoon cumin seeds<br>- 1/2 teaspoon mustard seeds<br>- A pinch of asafoetida (hing)<br>- 2 tablespoons ghee<br>- Salt to taste<br>- Fresh coriander leaves for garnish<br><br><b>For Churma:<br></b>- 1 cup whole wheat flour<br>- 1/4 cup semolina (sooji)<br>- 1/2 cup ghee<br>- 1/4 cup powdered jaggery<br>',
      recipe: '<b>Dal Bati Churma Recipe:</b><br><b>For Bati:</b><br>1. Mix flour, semolina, ghee, yogurt, baking powder, and salt. Knead into stiff dough.<br>2. Divide into balls and bake at 180°C until golden brown.<br>3. Dip the hot batis in ghee before serving.<br><b>For Dal:</b><br>1. Boil lentils with turmeric and salt until soft.<br>2. In ghee, sauté cumin, mustard seeds, hing, then add onion, garlic, and ginger.<br>3. Add tomatoes and spices. Mix with boiled dal and simmer.<br><b>For Churma:</b><br>1. Make coarse dough from flour and ghee. Bake small balls.<br>2. Crush them, mix with jaggery and more ghee.',
      secondImageSrc: 'qrimages/rajasthan.png',
      imageSrc: 'food/rajasthan.jpg'
    },
    'Uttar Pradesh':{
      cuisine:'<b>TUNDAY KEBAB</b><br>The tender Tunday kebabs of Lucknow are famous for their savoury and melt in your mouth flavour. These Kebabs are made from lamb or buffalo meat with more than a 100 spices are added to give it its a unique flavour. ',
      ingredients:'To make Tundey Kebabs, you need:<br><b>Ingredients:<br></b>- 500g minced mutton<br>- 2 tbsp roasted gram flour (besan)<br>- 1 large onion, finely chopped<br>- 2 tbsp ginger-garlic paste<br>- 1 tsp red chili powder<br>- 1 tsp garam masala<br>- 1/2 tsp turmeric powder<br>- 1/2 cup raw papaya paste (tenderizer)<br>- Salt to taste<br>- Oil for frying<br>',
      secondImageSrc: 'qrimages/uttar pradesh.png',
      recipe: '<b>Tunday Kebab Recipe:</b><br>1. Marinate finely minced meat with raw papaya paste and salt. Set aside for 2–4 hours.<br>2. Add ginger-garlic paste, fried onion paste, ground spices (including red chilli, coriander, cumin, garam masala, nutmeg, mace, black pepper), saffron milk, rose water, kewra water, and roasted besan. Mix well.<br>3. (Optional) For smoky aroma, place hot charcoal in a small bowl inside the mixture, pour ghee over it, cover and let it infuse for 15–20 minutes.<br>4. Shape the mixture into soft, flat patties.<br>5. Shallow fry in ghee or oil on low-medium heat until golden brown and cooked through.<br>6. Serve hot with green chutney, onion rings, and paratha or naan.',
      imageSrc: 'food/uttar pradesh.jpg'
    },
    'Bihar':{
      cuisine:'<b>LITTI CHOKHA</b><br>The lip-smacking taste of Litti Chokha, savoured by one and all, needs no introduction. It is your grand welcome to the food of Bihar, in all its ghee-dripping glory. It consists of wheat and sattu with spices, kneaded into round spicy balls, dipped in ghee. The texture of Litti along with the crunchy crust makes it a foodie’s delight. Chokha is prepared by mashing boiled vegetables most common being potatoes, brinjal, tomatoes,',
      ingredients:'<br><b>Ingridients:<br></b><br><b>Litti:<br></b>2 cups whole wheat flour<br>1 cup gram flour <br>1/4 cup  gram flour <br>1 teaspoon carom seeds <br>1 teaspoon nigella seeds <br>2 tablespoons ghee<br>Chopped green chilies  <br>ginger<br>Salt to taste<br>Water  <br><b>Chokha:<br></b>4-5 roasted <br>mashed brinjals 2-3 boiled <br>mashed tomatoes,<br>Chopped onions, <br>green chilies<br>coriander leaves<br>Mustard oil<br>Salt <br>pepper to taste<br>',
      recipe: '<b>Litti Chokha Recipe:</b><br><b>For Litti:</b><br>1. Mix wheat flour with ghee and knead into a dough.<br>2. Make sattu stuffing with spices, mustard oil, ginger, and green chilies.<br>3. Shape dough into balls, fill with stuffing, and bake or roast until golden.<br><b>For Chokha:</b><br>1. Roast brinjals, boil potatoes, tomatoes. Mash them.<br>2. Mix with chopped onion, mustard oil, green chili, salt, coriander.<br>3. Serve hot with ghee-dipped litti.',
      secondImageSrc: 'qrimages/bihar.png',
      imageSrc: 'food/bihar.jpg'
    },
    'Punjab':{
      cuisine:'<b>Makki di Roti and Sarson da Saag</b><br>Makki di Roti and Sarson da Saag make for the staple food in North India especially in the state of Punjab. This traditional Indian dish may not look very enticing at first, but it has an authentic flavour to it, and it is rich in nutritive value.',
      ingredients:'<br><b>Ingredients :<br></b>2 cups Makki ka Atta (Corn Flour)<br>Water as required<br>Salt to taste<br>Ghee or Butter for cooking<br><br><b>For Sarson ka Saag:<br></b>500 grams Sarson (Mustard Leaves)<br>250 grams Bathua (Chenopodium) leaves<br>250 grams Spinach leaves<br>2-3 Green Chilies (chopped)<br>1 large Onion (finely chopped)<br>1 Tomato (chopped)<br>1 inch Ginger (grated)<br>4-5 Garlic Cloves (crushed)<br>1 tbsp Ghee<br>1 tsp Cumin Seeds<br>1/2 tsp Turmeric Powder<br>1 tsp Red Chili Powder<br>1 tsp Garam Masala<br>1/2 tsp Asafoetida (Hing)<br>Salt to taste<br>2 tbsp Makki ka Atta (Corn Flour) for thickening<br>Ghee for garnish<br>',
      recipe: '<b>Makki di Roti & Sarson da Saag Recipe:</b><br><b>For Saag:</b><br>1. Boil sarson, bathua, and spinach until soft. Blend to a coarse paste.<br>2. Heat ghee, sauté cumin, garlic, onion, ginger, and tomato.<br>3. Add saag paste, spices, corn flour, and cook till thick.<br><b>For Roti:</b><br>1. Knead corn flour with warm water and salt.<br>2. Roll into flat rounds. Cook on tawa with ghee.<br>3. Serve hot with butter and saag.',
      secondImageSrc: 'qrimages/punjab.png',
      imageSrc: 'food/punjab.avif'
    },
    'Uttarakhand':{
      cuisine:'<b>KAFULI</b><br>Kafuli is a delicacy of Uttarakhand prepared out of leafy greens such as palak (spinach) and methi (fenugreek) leaves. ',
      ingredients:'Certainly! Here are the simple ingridients for Kaufli:<br><b>Ingredients:<br></b>- 2 cups chopped spinach (palak)<br>- 1/2 cup chopped fenugreek leaves (methi)<br>- 1/2 cup finely chopped onions<br>- 2-3 green chilies, finely chopped<br>- 1/2 cup grated coconut (optional)<br>- 1/2 cup water<br>- 2 tbsp ghee or oil<br>- 1 tsp cumin seeds<br>- 1 tsp mustard seeds<br>- 1/2 tsp asafoetida (hing)<br>- 1 tsp turmeric powder<br>- 1 tsp red chili powder<br>- Salt to taste<br>',
      recipe: '<b>Kafuli Recipe:</b><br>1. Blanch spinach and methi. Blend into paste.<br>2. Heat ghee, add cumin, mustard seeds, hing.<br>3. Add onion, green chili, and sauté.<br>4. Add turmeric, chili powder, then the blended greens.<br>5. Simmer for 10–15 minutes, add water if needed. Serve hot with rice or roti.',
      secondImageSrc: 'qrimages/uttarakhand.jpg',
      imageSrc: 'food/uttarakhand.jpg'
    },
    'Haryana':{
      cuisine:'<b>BAJARA KHICHRI</b><br>Healthy dish made of crushed pearl millet and garnished with ghee or sesame oil.',
      ingredients:'Certainly! Here are the simple ingridients for Bajara Khichri:<br><b>Ingredients:<br></b>1 cup pearl millet (bajra)<br>- 1/2 cup moong dal (split yellow lentils)<br>- 2 tbsp ghee or oil<br>- 1 tsp cumin seeds<br>- 1 tsp mustard seeds<br>- 1/2 tsp asafoetida (hing)<br>- 1 inch ginger, finely chopped<br>- 2-3 green chilies, finely chopped<br>- 1/2 cup chopped onions<br>- 1/2 cup chopped tomatoes<br>- 1/2 tsp turmeric powder<br>- 1 tsp red chili powder<br>- Salt to taste<br>- Water as needed<br>- Chopped coriander leaves for garnish<br>',
      recipe: '<b>Bajra Khichri Recipe:</b><br>1. Wash bajra and moong dal, soak for 1 hour.<br>2. Heat ghee, add cumin, mustard seeds, hing, ginger, green chilies.<br>3. Add chopped onion, tomato, turmeric, chili powder.<br>4. Add soaked bajra-dal, water, salt. Pressure cook for 4–5 whistles.<br>5. Garnish with coriander. Serve with ghee or curd.',
      secondImageSrc: 'qrimages/haryana.png',
      imageSrc: 'food/haryana.jpg'
    },
    'Himachal Pradesh':{
      cuisine:'<b>DHAM</b><br>Red kidney beans, green lentils, and curd rice together make up Dham. Served with mashed dal, boor ki kari, and a sweet & sour chutney of jaggery and tamarind.',
      ingredients:'Certainly! Here are the simple ingridients for Kaufli:<br><b>Ingredients:<br></b>- 1 cup basmati rice<br>- 1 cup arhar dal (pigeon pea lentils)<br>- 1/2 cup ghee or oil<br>- 1 tsp cumin seeds<br>- 1 tsp mustard seeds<br>- 2-3 cloves<br>- 2-3 green cardamom pods<br>- 2-3 black cardamom pods<br>- 1-inch cinnamon stick<br>- 2 bay leaves<br>- 1/2 tsp asafoetida (hing)<br>- 1/2 tsp turmeric powder<br>- 1 tsp red chili powder<br>- Salt to taste<br>- 2 cups mixed vegetables (potatoes, carrots, peas)<br>- 1/2 cup yogurt<br>- 1/2 cup chopped coriander leaves<br>- 1/2 cup chopped mint leaves<br>',
      recipe: '<b>Dham Recipe:</b><br>1. Cook rice and arhar dal separately. Temper dal with ghee, cumin, mustard seeds, asafoetida.<br>2. In another pan, sauté whole spices in ghee, add yogurt and cooked vegetables.<br>3. Simmer until thick.<br>4. Serve rice with dal, vegetable curry, and chutneys.',
      secondImageSrc: 'qrimages/himachal pradesh.png',
      imageSrc: 'food/himachalpradesh.jpg'
    },
    'Jammu and Kashmir':{
      cuisine:'<b>ROGAN JOSH</b><br>Lamb ingredients with browned onions, spices and curd. Served with steamed rice.',
      ingredients:'Certainly! Here are the simple ingridients for Rogan Josh:<br><b>Ingredients:<br></b>- 500g mutton, cut into pieces<br>- 1/2 cup yogurt<br>- 4 tbsp oil or ghee<br>- 2 onions, finely chopped<br>- 2 tomatoes, pureed<br>- 1 tbsp ginger-garlic paste<br>- 2-3 green chilies, slit<br>- 1 tsp cumin seeds<br>- 1 tsp fennel seeds<br>- 2-3 black cardamom pods<br>- 1-2 bay leaves<br>- 1-inch cinnamon stick<br>- 4-5 cloves<br>- 1 tsp turmeric powder<br>- 2 tsp red chili powder<br>- 1 tsp ground coriander<br>- Salt to taste<br>',
      recipe: '<b>Rogan Josh Recipe:</b><br>1. Heat oil, add cardamom, cinnamon, cloves, bay leaves.<br>2. Add onions, sauté until golden. Add ginger-garlic paste and fry.<br>3. Add mutton, sauté till browned.<br>4. Add yogurt and all spices, cook till oil separates.<br>5. Add water, cover, and simmer till mutton is tender. Serve hot with rice.',
      secondImageSrc: 'qrimages/jammu.png',
      imageSrc: 'food/jammu and kashmir.jpg'
    },
    'Ladakh':{
      cuisine:'<b>SKYU</b><br> Skyu is another traditional soup-based Ladakhi speciality. It is a stew made with barley or wheat dough kneaded into thumb-sized flatten balls.',
      ingredients:'Certainly! Here are the simple ingridients for Skyu:<br><b>Ingredients:<br></b>- 2 cups whole wheat flour<br>- 1 cup all-purpose flour<br>- 1 cup water<br>- 1/4 cup oil<br>- 1/2 tsp salt<br>- 1/2 tsp baking powder<br>- 1/4 tsp baking soda<br>- 1/2 cup butter or ghee<br>- 1/2 cup powdered sugar<br>- 1/2 cup milk<br>- 1/2 cup chopped nuts (walnuts, almonds)<br>- 1/2 cup raisins<br>',
      recipe: '<b>Skyu Recipe:</b><br>1. Make dough with wheat flour and water. Roll into small discs.<br>2. Boil water with chopped vegetables (turnip, carrots, beans).<br>3. Drop dough pieces in, simmer till soft.<br>4. Add salt, butter or ghee. Cook till stew thickens.<br>5. Serve hot for warmth and energy.',
      secondImageSrc: 'qrimages/ladakh.png',
      imageSrc: 'food/ladakh.jpg'
    },
    'Delhi':{
      cuisine:'<b>CHOLE BHATURA</b><br>Chole stands for a spiced tangy chickpea curry and Bhatura is a soft and fluffy fried leavened bread.',
      ingredients:'Certainly! Heres a simple ingredients for Chole Bhature:<br><b>*Chole (Chickpea Curry):*<br></b><b>*Ingredients:*<br></b>- 1 cup dried chickpeas (chole), soaked overnight<br>- 2 large onions, finely chopped<br>- 2 tomatoes, finely chopped<br>- 2 green chilies, chopped<br>- 1 tablespoon ginger-garlic paste<br>- 1 teaspoon cumin seeds<br>- 1 teaspoon coriander powder<br>- 1/2 teaspoon turmeric powder<br>- 1 teaspoon red chili powder<br>- 1 teaspoon garam masala<br>- Salt to taste<br>- Fresh coriander leaves for garnish<br>- Cooking oil<br><b>*Bhature (Fried Bread):*</b><br><b>*Ingredients:*</b><br>- 2 cups all-purpose flour<br>- 1/2 cup plain yogurt<br>- 1 teaspoon sugar<br>- 1/2 teaspoon baking powder<br>- Salt to taste<br>- Water (as needed)<br>- Oil for deep frying<br>',
      recipe: '<b>Chole Bhature Recipe:</b><br><b>For Chole:</b><br>1. Boil soaked chickpeas. Sauté onions, add ginger-garlic paste, tomatoes, and spices.<br>2. Add chickpeas, simmer for 15–20 minutes.<br><b>For Bhature:</b><br>1. Mix flour, yogurt, sugar, baking powder, and salt. Knead to soft dough.<br>2. Rest dough 2 hours. Roll and deep-fry until golden and puffed. Serve hot.',
      secondImageSrc: 'qrimages/delhi.png',
      imageSrc: 'food/delhi.cms'
    },
    'Sikkim':{
      cuisine:'<b>MOMOS</b><br>North Indian dumpling (= a small piece of dough or pastry) that is filled with meat, fish, or vegetables with herbs and spices and cooked in steam',
      ingredients:'Certainly! Heres a basic ingredients for making momos:<br><b>Ingredients:<br></b><b>For the Dough:<br></b>- 2 cups all-purpose flour<br>- 1/2 teaspoon salt<br>- Water (as needed)<br><b>For the Filling:<br></b>- 1 cup minced meat (chicken, lamb, or pork)<br>- 1 cup finely chopped vegetables (cabbage, carrots, and spring onions)<br>- 2 cloves garlic, minced<br>- 1-inch piece of ginger, minced<br>- 2 tablespoons soy sauce<br>- 1 tablespoon oil<br>- Salt and pepper to taste</br>',
      recipe: '<b>Momos Recipe:</b><br>1. Mix all filling ingredients (meat/veg, garlic, soy sauce, etc.).<br>2. Make dough with flour and water. Roll into small discs.<br>3. Place filling, fold and seal edges.<br>4. Steam in momo steamer for 10–12 minutes. Serve with spicy chutney.',
      secondImageSrc: 'qrimages/sikkim.png',
      imageSrc: 'food/sikkim.jpg'
    },
    'Nagaland':{
      cuisine:'<b>PORK WITH BAMBOO SHOOT</b><br>Dry bamboo shoots,  pork, chillies and herbs make up this ingredients.',
      ingredients:'<br><b>Ingredients:<br></b>500g pork, thinly sliced<br>1 cup bamboo shoots, thinly sliced<br>1 large onion, finely chopped<br>2-3 green chilies, sliced<br>1 tablespoon ginger-garlic paste<br>1 teaspoon turmeric powder<br>1 teaspoon cumin powder<br>1 teaspoon coriander powder<br>1/2 teaspoon black pepper powder<br>Salt to taste<br>2 tablespoons oil<br>Fresh coriander leaves for garnish<br>',
      recipe: '<b>Pork with Bamboo Shoot Recipe:</b><br>1. Heat oil, sauté onion, green chilies, ginger-garlic paste.<br>2. Add pork and cook till it changes color.<br>3. Add turmeric, cumin, coriander, salt.<br>4. Add bamboo shoots and little water.<br>5. Cover and simmer till pork is tender and dry. Garnish and serve hot.',
      secondImageSrc: 'qrimages/nagaland.png',
      imageSrc: 'food/nagaland.jpg'
    },
    'Mizoram':{
      cuisine:'<b>MISA MACH POORA</b><br>Roasted shrimp with the sprinkle of lemon makes it tastier.',
      ingredients:'<br><b>Ingredients:<br></b>- 500g tiger prawns cleaned, peeled and deveined<br>- 1 tbsp black peppercorns roughly crushed<br>- 1 tbsp coriander seeds roughly crushed<br>-1 tbsp coriander powder<br>- 1/2 cup mustard oil<br>- 1 tsp turmeric powder<br>- 1 tbsp ginger-garlic paste<br>- 1 tsp turmeric powder<br>- salt to taste<br>-wooden skewers soaked in water for 30 minutes<br><b>For garnishing</b><br>- 2 tbsp lemon juice<br>- 1 tbsp dil leaves chopped<br>',
      recipe: '<b>Misa Mach Poora Recipe:</b><br>1. Marinate prawns in mustard oil, turmeric, crushed spices, salt, and ginger-garlic paste.<br>2. Skewer prawns and roast on open flame or grill until cooked.<br>3. Sprinkle lemon juice and chopped dill before serving. Serve hot as a starter.',
      secondImageSrc: 'qrimages/mizoram.png',
      imageSrc: 'food/mizoram.jpg'
    },
    'Tripura':{
      cuisine:'<b>CHAKHWI</b><br>Bamboo shoots, green papaya and lentil varieties make up the dish of chakhwi.',
      ingredients:'<br><b>Ingredients:<br></b>- 2 cups rice flour<br>- 1/2 cup black sesame seeds<br>- 1/2 cup grated coconut<br>- 1/4 cup jaggery, grated<br>- 1/2 tsp cardamom powder<br>- Pinch of salt<br>- Water as needed<br>- Oil for frying<br>',
      recipe: '<b>Chakhwi Recipe:</b><br>1. Wash and slice bamboo shoots thinly.<br>2. Peel and chop green papaya into small cubes.<br>3. In a pan, boil papaya with bamboo shoots and a little salt.<br>4. Add lentils (pre-soaked moong dal or yellow peas) and cook until soft.<br>5. Add crushed garlic and green chilies. Optionally, add a piece of fermented fish (Berma).<br>6. Cook until everything is tender and flavors are well combined.<br>7. Adjust salt. Serve hot with steamed rice.',
      secondImageSrc: 'qrimages/tripura.png',
      imageSrc: 'food/tripura.jpg'
    },
    'Arunachal Pradesh':{
      cuisine:'<b>THUKPA</b><br>Thukpa is the staple food of people of Ladakh. It is a soupy noodle dish with assorted vegetables (for vegetarians) and minced meat (for non-vegetarians). The noodle is made of wheat or barley flour',
      ingredients:'<br><b>Ingredients of  nonveg Thukpa<br></b>Half Kg chicken- (small chicken pieces)<br>1 onion , chopped<br>1 cup capsicum , chopped<br>2 cups spinach , chopped<br>1 cup cabbage , chopped<br>1 cup peas<br>1 carrots , chopped<br>2-3 tbsp oil<br>5-6 garlic buds<br>2 green chili<br>2 cups noodles<br>Fresh coriander<br>Lemon Juice<br>1 tbsp pepper<br>1/2 tbsp red chili<br>Salt as per taste<br>1/2 tsp vinegar<br>1/2 tsp soy sauce. <br><b>Ingredients of Veg Thukpa Soup<br></b>1 Packet Any Noodles<br>1/4 cup Beans<br>1/2 cup Chopped Cabbage<br>1/2 cup Chopped Onion<br>1/2 cup Spring Onion<br>4 cups Vegetable broth<br>2 tsp Oil<br>2 tbsp Sweet Chilli Sauce<br>1/2 tbsp Chilli Sauce<br>2 tsp Soya SauceTo Taste <br>Garam MasalaTo Taste <br>Black PepperTo Taste Salt<br>4 Cloves Chopped Garlic<br>1/4 cup Chopped Carrot',
      recipe: '<b>Thukpa Recipe:</b><br><b>For Non-Veg:</b><br>1. Heat oil in a pan, sauté chopped onion, garlic, and green chilies.<br>2. Add chicken pieces and cook until lightly browned.<br>3. Add chopped vegetables (capsicum, spinach, cabbage, peas, carrot).<br>4. Season with pepper, chili, vinegar, soy sauce, and salt.<br>5. Add water and simmer until chicken is tender.<br>6. Boil noodles separately, add to soup. Garnish with coriander and lemon.<br><b>For Veg:</b><br>1. Heat oil, sauté garlic and chopped vegetables (beans, carrot, cabbage, onions).<br>2. Add vegetable broth and bring to a boil.<br>3. Stir in sauces, salt, pepper, garam masala.<br>4. Add boiled noodles. Simmer for 5 minutes. Serve hot.',
      secondImageSrc: 'qrimages/arunachal pradesh.png',
      imageSrc: 'food/arunachal pradesh.jpg'
    },
    'Assam':{
      cuisine:'<b>PAPAYA KHAR</b><br>This dish of Assamese cuisine is one of a kind. It is a delicious curry made from raw papaya, pulses, taro and also with a main non-vegetarian ingredient.',
      ingredients:'<br><b>Ingredients:<br></b>1 raw papaya, <br>peeled and chopped<br>1 cup grated coconut<br>1 tablespoon mustard oil<br>1 teaspoon mustard seeds<br>2-3 dry red chilies<br>1tablespoon grated ginger<br>1 tablespoon grated garlic<br>1 teaspoon turmeric powder<br>2-3 tablespoons khar<br>Salt to taste<br>Water<br>',
      recipe: '<b>Papaya Khar Recipe:</b><br>1. Heat mustard oil, add mustard seeds and dry red chilies.<br>2. Add ginger and garlic, sauté for 1 minute.<br>3. Add chopped raw papaya and turmeric. Stir well.<br>4. Add grated coconut and enough water to cover.<br>5. Add khar and salt, bring to a boil.<br>6. Simmer until papaya is tender. Serve hot with rice.',
      secondImageSrc: 'qrimages/assam.png',
      imageSrc: 'food/assam.jpg'
    },
    'Manipur':{
      cuisine:'<b>KANGSHOI</b><br>This dish is very popular in Manipur. It is a vegetable stew. It consists of seasonal vegetables that are boiled and flavoured with sliced onions, cloves, salt, garlic, maroi and a bit of ginger.',
      ingredients:'<br><b>Ingredients:<br></b>1 cup mixed vegetables<br>1 small onion, finely chopped<br>2-3 green chilies, sliced<br>1 tablespoon mustard oil<br>1 teaspoon cumin seeds<br>1/2 teaspoon turmeric powder<br>Salt to taste<br>Water<br>Fresh coriander leaves for garnish<br>',
      recipe: '<b>Kangshoi Recipe:</b><br>1. In a pot, add mixed seasonal vegetables with water.<br>2. Add chopped onions, garlic, ginger, green chilies, and salt.<br>3. Bring to a boil, then simmer until vegetables are soft.<br>4. Add a spoon of mustard oil for aroma.<br>5. Garnish with coriander leaves. Serve hot with rice.',
      secondImageSrc: 'qrimages/manipur.png',
      imageSrc: 'food/manipur.jpg'
    },
    'Meghalaya':{
      cuisine:'<b>JADOH</b><br>Jadoh is a very popular dish among the Khasi community of Meghalaya. It is especially appetising because of its rich and unique colour.  Jadoh is basically red rice, cooked with generous amounts of pork meat.',
      ingredients:'<br><b>Ingredients:<br></b>- 1 cup rice<br>- 1/2 cup pork meat, diced<br>- 1/2 cup pork liver, diced<br>- 1/2 cup pork fat, diced<br>- 1 onion, chopped<br>- 2-3 green chilies, chopped<br>- 1 inch ginger, grated<br>- 2 cloves garlic, minced<br>- 1/2 tsp turmeric powder<br>- Salt to taste<br>- Water as needed<br>- Chopped coriander leaves for garnish<br>',
      recipe: '<b>Jadoh Recipe:</b><br>1. Heat a pan, cook pork fat until it releases oil.<br>2. Add chopped onion, garlic, ginger, and green chilies. Sauté well.<br>3. Add pork meat and liver. Cook till lightly browned.<br>4. Add turmeric and salt. Stir in the rice.<br>5. Add enough water to cook the rice. Cover and simmer till done.<br>6. Garnish with coriander and serve hot.',
      secondImageSrc: 'qrimages/meghalaya.png',
      imageSrc: 'food/meghalaya.jpg'
    },

   // Add more states and their information as needed
};

// Function to show overlay with state details
function showOverlay(stateName) {
    const stateDetails = stateData[stateName];
    if (!stateDetails) return;  // Prevent errors if state data is missing

    overlayElement.innerHTML = `
    <div class="detailed-info">
        <h2>${stateName} Cuisine</h2>
        <p>${stateDetails.cuisine}</p>
        <img src="${stateDetails.imageSrc}" alt="${stateName} Image" >
        <button onclick="toggleIngredients('${stateName}')">Show Ingredients</button>
        <p id="ingredients-${stateName}" style="display:none;">${stateDetails.ingredients}</p>
        <button onclick="toggleRecipe('${stateName}')">Show Recipe</button>
        <p id="recipe-${stateName}" style="display:none;">${stateDetails.recipe}</p>
        <button onclick="toggleSecondImage('${stateName}')">Show QR for AR</button>
        <img id="second-image-${stateName}" src="${stateDetails.secondImageSrc}" alt="AR QRCode image of ${stateName}" style="display:none;">
        <p id="ar-experience-${stateName}" style="display:none;">Scan the QR AR Experience</p>
        <button onclick="closeOverlay()">Close</button>
    </div>
`;


    overlayElement.style.display = 'block';
}

// Function to show tooltip with minimal info
function getStateInfo(stateName) {
    return 'Click for cuisine details.';
}

// Function to toggle ingredient visibility
function toggleIngredients(stateName) {
  const ingredientsElement = document.getElementById(`ingredients-${stateName}`);
  if (ingredientsElement.style.display === "none") {
    ingredientsElement.style.display = "block"; // Show the second image
} else {
  ingredientsElement.style.display = "none"; // Hide the second image
}
}

function toggleRecipe(stateName) {
  const recipeElement = document.getElementById(`recipe-${stateName}`);
  if (recipeElement.style.display === "none") {
    recipeElement.style.display = "block"; // Show the second image
} else {
  recipeElement.style.display = "none"; // Hide the second image
}
}


function toggleSecondImage(stateName) {
  const secondImageElement = document.getElementById(`second-image-${stateName}`);
  const arExperienceText = document.getElementById(`ar-experience-${stateName}`);

  
  if (secondImageElement.style.display === "none") {
      secondImageElement.style.display = "block"; // Show the second image
      arExperienceText.style.display = "block";

  } else {
      secondImageElement.style.display = "none"; // Hide the second image
      arExperienceText.style.display = "none";

  }
}
   

// Function to close overlay
function closeOverlay() {
    overlayElement.style.display = 'none';
}



// Add event listeners for all states (map regions)
states.forEach(state => {
    state.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        const dialogWidth = infoDialog.clientWidth;
        const dialogHeight = infoDialog.clientHeight;
        const maxX = window.innerWidth - dialogWidth;
        const maxY = window.innerHeight - dialogHeight;
        const adjustedX = Math.min(posX, maxX);
        const adjustedY = Math.min(posY, maxY);

        infoDialog.style.top = adjustedY + 'px';
        infoDialog.style.left = adjustedX + 'px';
    });

    state.addEventListener('mouseover', () => {
        const stateName = state.getAttribute('name');
        stateNameElement.textContent = stateName;
        stateInfoElement.innerHTML = getStateInfo(stateName);
        infoDialog.style.display = 'block';
    });

    state.addEventListener('mouseout', () => {
        infoDialog.style.display = 'none';
    });

    state.addEventListener('click', () => {
        const stateName = state.getAttribute('name');
        showOverlay(stateName);
    });
});

// Add event listeners for state names (list)
stateNames.forEach(stateName => {
    stateName.addEventListener('click', () => {
        const state = stateName.dataset.state;
        showOverlay(state);
    });
});


//new

document.getElementById("quiz-button").addEventListener("click", function () {
  window.open("quiz.html", "_blank"); // Open quiz page in a new window
});
