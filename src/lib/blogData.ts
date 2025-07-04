export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  category: string;
  audioAvailable?: boolean;
  featured?: boolean;
  authorImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'tulu-coastal-heritage',
    title: 'The Magnificent Coastal Heritage of Tulu Nadu',
    excerpt: 'Discover the pristine beaches, ancient temples, and rich maritime traditions that define the coastal beauty of Tulu Nadu.',
    content: `
      <h2>The Coastal Splendor of Tulu Nadu</h2>
      <p>The coastline of Tulu Nadu stretches magnificently along the Arabian Sea, offering a unique blend of natural beauty and cultural heritage. From the pristine beaches of Malpe to the historic shores of Ullal, every stretch tells a story of maritime traditions, fishing communities, and ancient trade routes.</p>
      
      <h3>St. Mary's Islands - A Geological Wonder</h3>
      <p>Located off the coast of Malpe, St. Mary's Islands are a geological marvel featuring unique hexagonal basalt rock formations. These islands, also known as Coconut Island, are believed to have been formed by volcanic activity millions of years ago. The crystal-clear waters and the distinctive rock formations make it a paradise for nature lovers and geology enthusiasts.</p>
      
      <h3>The Fishing Heritage</h3>
      <p>The traditional fishing communities of Tulu Nadu have preserved their ancient practices for generations. The sight of colorful fishing boats returning with their catch at dawn, the rhythmic chants of fishermen pulling their nets, and the bustling fish markets create an authentic coastal experience that connects visitors to the region's maritime soul.</p>
      
      <h3>Temple Towns by the Sea</h3>
      <p>The coastal region is dotted with ancient temples that have withstood the test of time and sea breeze. The Anantheshwara Temple in Udupi, with its unique architecture and spiritual significance, stands as a testament to the region's religious heritage. These temples serve as cultural anchors, hosting festivals that bring communities together in celebration of their shared traditions.</p>
      
      <h3>Culinary Treasures</h3>
      <p>The coastal cuisine of Tulu Nadu is a delightful fusion of fresh seafood, coconut, and aromatic spices. From the famous Mangalore fish curry to the delicate Kane fish preparations, every dish tells a story of the sea. The traditional cooking methods, passed down through generations, create flavors that are both unique and deeply satisfying.</p>
    `,
    author: 'Cultural Heritage Team',
    date: '2024-12-01',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    tags: ['Coastal Heritage', 'St. Mary\'s Islands', 'Fishing Culture', 'Temples'],
    category: 'Heritage',
    audioAvailable: true
  },
  {
    id: 'yakshagana-art-form',
    title: 'Yakshagana: The Mesmerizing Dance-Drama of Tulu Nadu',
    excerpt: 'Journey into the captivating world of Yakshagana, where ancient stories come alive through vibrant costumes, rhythmic music, and powerful performances.',
    content: `
      <h2>The Enchanting World of Yakshagana</h2>
      <p>Under the starlit skies of coastal Karnataka, a magical transformation takes place. As the sun sets and darkness embraces the earth, the ancient art of Yakshagana awakens, bringing mythological tales to life through a spectacular fusion of dance, drama, music, and visual artistry. This is not merely a performance—it's a spiritual journey that connects the earthly realm with divine stories.</p>
      
      <h3>The Sacred Origins</h3>
      <p>Born in the fertile cultural landscape of Tulu Nadu over eight centuries ago, Yakshagana emerged from the devotional fervor of temple rituals and folk traditions. The very name 'Yakshagana' translates to 'songs of the celestials,' reflecting its divine inspiration. Legend speaks of how this art form was blessed by the gods themselves, making every performance a sacred offering to the divine forces that govern human destiny.</p>
      
      <h3>The Transformation Ritual</h3>
      <p>Witnessing a Yakshagana artist's transformation is like watching magic unfold. Hours before the performance, the process begins in humble green rooms where ordinary men become gods, demons, and heroes. The elaborate makeup, called 'Chutti,' is an art form in itself. Natural pigments create intricate patterns that transform faces into divine visages. Red symbolizes valor and passion, black represents evil and mystery, while white embodies purity and wisdom.</p>
      
      <h3>The Language of Movement</h3>
      <p>Every gesture in Yakshagana tells a story. The 'Mudras' (hand gestures) speak a language older than words, where a slight movement of the fingers can convey love, anger, or divine blessing. The dancers' feet beat complex rhythms on the earth, creating a conversation between the performer and the cosmic forces. The swirling of elaborate costumes mimics the dance of celestial beings, while the ornate headgear catches moonlight and torchlight, creating an otherworldly spectacle.</p>
      
      <h3>The Musical Soul</h3>
      <p>The heartbeat of Yakshagana lies in its music. The 'Chenda' drums thunder like divine announcement, while the 'Jagave' tambourines shimmer like stars in the night sky. The 'Harmonium' weaves melodies that can make stones weep, and the conch shell's call connects earth to heaven. Each musical phrase guides the dancers through emotional landscapes—from the gentle love songs of Radha and Krishna to the thunderous war cries of the Mahabharata.</p>
      
      <h3>Stories That Never Age</h3>
      <p>Yakshagana breathes life into the great epics—the Ramayana, Mahabharata, and Puranas. But these are not mere retellings. Each performance becomes a fresh interpretation, where ancient wisdom meets contemporary understanding. The audience doesn't just watch; they participate, cheering heroes, booing villains, and sometimes even engaging in dialogue with the characters. This interactive element makes each performance unique and alive.</p>
      
      <h3>The Night-Long Journey</h3>
      <p>Traditional Yakshagana performances are marathon spiritual journeys that begin at sunset and conclude at dawn. As the night deepens, the stories unfold layer by layer, taking the audience through a complete emotional and spiritual cycle. The performers, sustained by devotion and artistic passion, maintain their energy through the entire night, creating an experience that transcends ordinary entertainment.</p>
      
      <h3>Masters and Disciples</h3>
      <p>The art of Yakshagana is passed down through generations in the sacred tradition of Guru-Shishya Parampara. Master artists, some now legendary figures, have dedicated their entire lives to preserving and refining this art form. Names like Keremane Shivarama Hegde, Sheni Gopalakrishna, and Patla Sathish Shetty are revered like deities in the Yakshagana world.</p>
      
      <h3>Modern Renaissance</h3>
      <p>Today, Yakshagana stands at an exciting crossroads. While maintaining its traditional essence, the art form embraces innovation. Modern lighting enhances the visual spectacle, contemporary themes find expression through ancient techniques, and international stages welcome this coastal Karnataka treasure. Young artists bring fresh energy while respecting age-old traditions.</p>
      
      <h3>A Living Heritage</h3>
      <p>Yakshagana is more than performance art—it's a living library of human emotions, spiritual wisdom, and cultural identity. In every village where it's performed, in every temple where it's celebrated, and in every heart it touches, Yakshagana continues its eternal dance, proving that some traditions are truly timeless.</p>
    `,
    author: 'Dr. Prasanna Kumar, Yakshagana Scholar',
    date: '2024-11-28',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800',
    tags: ['Yakshagana', 'Traditional Arts', 'Cultural Heritage', 'Dance Drama', 'Coastal Karnataka'],
    category: 'Arts',
    audioAvailable: true
  },
  {
    id: 'tulu-language-script',
    title: 'The Ancient Tulu Language and Its Rich Literary Heritage',
    excerpt: 'Delve into the fascinating world of the Tulu language, its unique script, and the literary treasures that have been preserved through centuries.',
    content: `
      <h2>Tulu: A Language of Ancient Wisdom</h2>
      <p>The Tulu language, spoken by over 2 million people primarily in the coastal districts of Karnataka and northern Kerala, is one of the oldest Dravidian languages with a rich literary heritage spanning over a millennium. Despite being primarily oral for much of its history, Tulu has a sophisticated structure and a wealth of literature that reflects the wisdom and creativity of its speakers.</p>
      
      <h3>The Tigalari Script</h3>
      <p>Tulu was traditionally written in the Tigalari script, which is closely related to the Malayalam script. This ancient script has been used to preserve numerous literary works, including the famous 'Siri Paddana' and other oral epics. The script's unique characteristics make it perfectly suited for capturing the nuances of Tulu pronunciation and rhythm.</p>
      
      <h3>Oral Traditions and Epics</h3>
      <p>The oral tradition of Tulu is extraordinarily rich, with numerous paddanas (epic ballads) that narrate heroic tales, spiritual journeys, and community histories. The 'Siri Paddana,' considered one of the longest epic poems in any language, tells the story of Siri, a folk deity, and spans several volumes when transcribed. These oral epics are performed during religious festivals and community gatherings, keeping the tradition alive.</p>
      
      <h3>Modern Revival</h3>
      <p>In recent decades, there has been a renewed interest in Tulu language and literature. Scholars, writers, and cultural activists are working to document oral traditions, create new literary works, and develop educational materials. The advent of digital technology has opened new possibilities for preserving and promoting Tulu culture.</p>
      
      <h3>Cultural Significance</h3>
      <p>Tulu is not just a means of communication; it's a repository of cultural knowledge, traditional wisdom, and community values. Proverbs, folk songs, and storytelling traditions in Tulu carry deep insights into the philosophy and worldview of the Tulu people, making language preservation crucial for cultural continuity.</p>
    `,
    author: 'Linguistics Research Team',
    date: '2024-11-25',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
    tags: ['Tulu Language', 'Tigalari Script', 'Literature', 'Oral Traditions'],
    category: 'Language',
    audioAvailable: false
  },
  {
    id: 'udupi-krishna-temple',
    title: 'Sri Krishna Matha Udupi: The Spiritual Heart of Tulu Nadu',
    excerpt: 'Journey through the sacred halls of the Sri Krishna Matha in Udupi, a temple that has been the center of devotion and learning for over 700 years.',
    content: `
      <h2>The Divine Legacy of Sri Krishna Matha</h2>
      <p>Founded by the great philosopher-saint Madhvacharya in the 13th century, the Sri Krishna Matha in Udupi stands as one of the most significant spiritual and cultural centers of South India. This ancient temple complex is not just a place of worship but a living institution that has preserved and propagated the Dvaita philosophy and Udupi traditions for over seven centuries.</p>
      
      <h3>The Sacred Architecture</h3>
      <p>The temple's unique architecture reflects the traditional South Indian style with distinct local influences. The silver-plated entrance door, the intricately carved pillars, and the sacred pond create an atmosphere of divine serenity. The temple's layout follows ancient Vastu principles, creating a harmonious space that facilitates spiritual contemplation and community gathering.</p>
      
      <h3>The Paryaya Tradition</h3>
      <p>One of the most unique aspects of Sri Krishna Matha is the Paryaya system, where the administration of the temple rotates among eight different Mathas (monasteries) every two years. This ancient democratic system ensures that the temple's spiritual and administrative responsibilities are shared, maintaining a balance of power and preserving diverse traditions within the Madhva sampradaya.</p>
      
      <h3>Center of Learning</h3>
      <p>Throughout its history, the Matha has been a center of learning, attracting scholars and students from across India. The temple complex houses libraries containing rare manuscripts, philosophical treatises, and religious texts. The tradition of scholarly debates and spiritual discourses continues to this day, making it a living university of ancient wisdom.</p>
      
      <h3>Cultural Festivals</h3>
      <p>The temple hosts numerous festivals throughout the year, each with its own significance and traditions. The Krishna Janmashtami celebrations, the Paryaya festival, and the daily rituals create a continuous cycle of spiritual activities that bind the community together in devotion and celebration.</p>
      
      <h3>The Divine Cuisine</h3>
      <p>The temple is also famous for its prasadam (sacred food offerings) and the traditional Udupi cuisine that originated in the temple kitchens. The pure vegetarian cooking style, the use of traditional recipes, and the emphasis on sattvic (pure) ingredients have made Udupi cuisine famous worldwide.</p>
    `,
    author: 'Temple Heritage Documentation',
    date: '2024-11-22',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800',
    tags: ['Udupi Temple', 'Madhvacharya', 'Spiritual Heritage', 'Architecture'],
    category: 'Spirituality',
    audioAvailable: true
  },
  {
    id: 'mangalore-spice-gardens',
    title: 'The Aromatic Spice Gardens of Mangalore: A Sensory Journey',
    excerpt: 'Explore the fragrant spice plantations around Mangalore that have made this region the spice capital of the western coast.',
    content: `
      <h2>Mangalore: The Spice Capital of the Coast</h2>
      <p>The hills surrounding Mangalore are home to some of India's most productive spice plantations, where cardamom, pepper, cinnamon, and nutmeg grow in abundance. These aromatic gardens have been the source of prosperity for the region for centuries, attracting traders from around the world and establishing Mangalore as a major spice trading hub.</p>
      
      <h3>The Geography of Flavor</h3>
      <p>The Western Ghats' unique climate, with its heavy monsoons and tropical temperatures, creates the perfect conditions for spice cultivation. The well-drained slopes, rich soil, and consistent rainfall patterns allow for the cultivation of premium quality spices that are sought after in international markets.</p>
      
      <h3>Traditional Cultivation Methods</h3>
      <p>Local farmers have perfected traditional cultivation techniques passed down through generations. The intercropping system, where different spices are grown together, not only maximizes land use but also creates natural pest control systems. The shade-grown methods used for cardamom and the careful processing techniques for pepper ensure the highest quality produce.</p>
      
      <h3>The Spice Market Heritage</h3>
      <p>Mangalore's spice markets are vibrant centers of commerce where the air is thick with aromatic fragrances. The traditional weighing methods, the art of spice blending, and the expertise of local traders create an authentic market experience that connects visitors to centuries-old trading traditions.</p>
      
      <h3>Culinary Impact</h3>
      <p>The abundance of fresh spices has profoundly influenced the local cuisine. Mangalorean dishes are known for their complex spice blends, creating flavors that are both bold and balanced. The traditional methods of roasting and grinding spices just before cooking ensure maximum flavor and aroma in every dish.</p>
      
      <h3>Modern Sustainability</h3>
      <p>Today's spice farmers are embracing sustainable practices, organic cultivation methods, and fair trade principles. These initiatives ensure that the spice gardens continue to thrive while preserving the environment and supporting local communities.</p>
    `,
    author: 'Agricultural Heritage Team',
    date: '2024-11-20',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800',
    tags: ['Spice Gardens', 'Agriculture', 'Trade Heritage', 'Mangalore'],
    category: 'Agriculture',
    audioAvailable: false
  },
  {
    id: 'karkala-gomateshwara',
    title: 'The Majestic Gomateshwara of Karkala: A Monument to Peace',
    excerpt: 'Witness the serene grandeur of the 42-foot tall Gomateshwara statue in Karkala, a masterpiece of Jain art and devotion.',
    content: `
      <h2>Gomateshwara: The Peaceful Giant of Karkala</h2>
      <p>Standing majestically atop a granite hill in Karkala, the 42-foot tall monolithic statue of Gomateshwara Bahubali is a testament to the artistic brilliance and spiritual devotion of the Jain community. Carved from a single block of granite in 1432 CE, this magnificent sculpture represents the pinnacle of medieval Indian stone carving artistry.</p>
      
      <h3>The Legend of Bahubali</h3>
      <p>Gomateshwara, also known as Bahubali, was the son of Adinatha, the first Tirthankara of Jainism. According to Jain tradition, after winning a fierce battle with his brother Bharata, Bahubali realized the futility of worldly conquest and renounced his kingdom to pursue spiritual enlightenment. The statue depicts him in the kayotsarga posture, standing in deep meditation.</p>
      
      <h3>Architectural Marvel</h3>
      <p>The statue's proportions and details showcase the sophisticated understanding of human anatomy and artistic principles possessed by medieval Indian sculptors. The serene facial expression, the perfectly balanced posture, and the intricate details of the body create a powerful visual representation of inner peace and spiritual transcendence.</p>
      
      <h3>The Mastakabhisheka Ceremony</h3>
      <p>Every 12 years, the statue is anointed in a grand ceremony called Mastakabhisheka, where devotees pour milk, coconut water, turmeric, and other sacred substances over the statue. This ceremony attracts thousands of pilgrims and visitors, creating a spectacular display of devotion and community participation.</p>
      
      <h3>Cultural Significance</h3>
      <p>The Gomateshwara statue is not just a religious monument but a symbol of peace, non-violence, and spiritual aspiration. It represents the Jain principles of ahimsa (non-violence) and spiritual liberation, inspiring visitors regardless of their religious background to contemplate the deeper meanings of existence.</p>
      
      <h3>The Surrounding Complex</h3>
      <p>The hill complex includes several other Jain temples and monuments, creating a spiritual landscape that has been a center of pilgrimage for centuries. The climb to the summit offers panoramic views of the surrounding countryside, adding to the spiritual experience of visiting this sacred site.</p>
    `,
    author: 'Monument Conservation Society',
    date: '2024-11-18',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800',
    tags: ['Gomateshwara', 'Jain Heritage', 'Sculpture', 'Karkala'],
    category: 'Heritage',
    audioAvailable: true
  }
];

export const categories = [
  'All',
  'Heritage',
  'Arts',
  'Language',
  'Spirituality',
  'Agriculture'
];

export const featuredPosts = blogPosts.slice(0, 3);

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};
