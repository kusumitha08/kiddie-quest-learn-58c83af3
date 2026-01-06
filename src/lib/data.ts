export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  subject: string;
  grade: number;
  videoUrl: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: string;
  grade: number;
}

export const subjects: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    icon: '🔢',
    color: 'math',
    description: 'Have fun with numbers and problem-solving!'
  },
  {
    id: 'english',
    name: 'English',
    icon: '📚',
    color: 'english',
    description: 'Learn reading, writing, and storytelling!'
  },
  {
    id: 'kannada',
    name: 'Kannada',
    icon: '🇮🇳',
    color: 'kannada',
    description: 'Learn Kannada language - reading and writing!'
  },
  {
    id: 'evs',
    name: 'EVS',
    icon: '🌱',
    color: 'science',
    description: 'Explore environment and science!'
  },
  {
    id: 'storytelling',
    name: 'Story Telling',
    icon: '📖',
    color: 'english',
    description: 'Share and create wonderful stories!'
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    color: 'science',
    description: 'Explore the wonders of nature and experiments!'
  },
  {
    id: 'social',
    name: 'Social Studies',
    icon: '🌍',
    color: 'social',
    description: 'Learn about people, places, and communities!'
  }
];

// Grade 1 Videos
export const sampleVideos: Video[] = [
  // Grade 1 - Math
  {
    id: 'v1',
    title: 'Addition for Kids - Learn to Add',
    duration: '8:12',
    thumbnail: 'https://img.youtube.com/vi/AQ7THUKx6Es/maxresdefault.jpg',
    subject: 'math',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/AQ7THUKx6Es'
  },
  {
    id: 'v2',
    title: 'Subtraction for Kids',
    duration: '7:45',
    thumbnail: 'https://img.youtube.com/vi/ug0lSgRZ3eQ/maxresdefault.jpg',
    subject: 'math',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/ug0lSgRZ3eQ'
  },
  {
    id: 'v3',
    title: 'Counting Numbers 1-100',
    duration: '10:23',
    thumbnail: 'https://img.youtube.com/vi/0TgLtF3PMOc/maxresdefault.jpg',
    subject: 'math',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/0TgLtF3PMOc'
  },
  // Grade 1 - English
  {
    id: 'v4',
    title: 'Phonics Song - ABC Alphabet',
    duration: '6:30',
    thumbnail: 'https://img.youtube.com/vi/BELlZKpi1Zs/maxresdefault.jpg',
    subject: 'english',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/BELlZKpi1Zs'
  },
  {
    id: 'v5',
    title: 'Learn to Read - Sight Words',
    duration: '12:15',
    thumbnail: 'https://img.youtube.com/vi/pje5ROe5Qvk/maxresdefault.jpg',
    subject: 'english',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/pje5ROe5Qvk'
  },
  {
    id: 'v6',
    title: 'Action Words - Verbs for Kids',
    duration: '5:45',
    thumbnail: 'https://img.youtube.com/vi/puTqJpGXbM4/maxresdefault.jpg',
    subject: 'english',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/puTqJpGXbM4'
  },
  // Grade 1 - EVS
  {
    id: 'v7',
    title: 'Parts of a Plant',
    duration: '4:30',
    thumbnail: 'https://img.youtube.com/vi/X6TLFZUC9gI/maxresdefault.jpg',
    subject: 'evs',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/X6TLFZUC9gI'
  },
  {
    id: 'v8',
    title: 'My Family - Family Members',
    duration: '5:20',
    thumbnail: 'https://img.youtube.com/vi/FHaObkHEkHQ/maxresdefault.jpg',
    subject: 'evs',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/FHaObkHEkHQ'
  },
  {
    id: 'v9',
    title: 'Good Habits for Kids',
    duration: '6:15',
    thumbnail: 'https://img.youtube.com/vi/GnRGA7XS-Yk/maxresdefault.jpg',
    subject: 'evs',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/GnRGA7XS-Yk'
  },
  // Grade 1 - Storytelling
  {
    id: 'v10',
    title: 'The Lion and the Mouse Story',
    duration: '5:30',
    thumbnail: 'https://img.youtube.com/vi/JaANyGF0N2c/maxresdefault.jpg',
    subject: 'storytelling',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/JaANyGF0N2c'
  },
  {
    id: 'v11',
    title: 'The Tortoise and the Hare',
    duration: '6:45',
    thumbnail: 'https://img.youtube.com/vi/1ysRdKJgnOc/maxresdefault.jpg',
    subject: 'storytelling',
    grade: 1,
    videoUrl: 'https://www.youtube.com/embed/1ysRdKJgnOc'
  },

  // Grade 2 - Math
  {
    id: 'v12',
    title: 'Two Digit Addition',
    duration: '8:30',
    thumbnail: 'https://img.youtube.com/vi/cDPRyVVmO9c/maxresdefault.jpg',
    subject: 'math',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/cDPRyVVmO9c'
  },
  {
    id: 'v13',
    title: 'Multiplication Tables 2-5',
    duration: '10:15',
    thumbnail: 'https://img.youtube.com/vi/qDYlMCfppPI/maxresdefault.jpg',
    subject: 'math',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/qDYlMCfppPI'
  },
  {
    id: 'v14',
    title: 'Skip Counting by 2s, 5s, 10s',
    duration: '7:20',
    thumbnail: 'https://img.youtube.com/vi/GvTcpfSnOMQ/maxresdefault.jpg',
    subject: 'math',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/GvTcpfSnOMQ'
  },
  // Grade 2 - English
  {
    id: 'v15',
    title: 'Nouns - Naming Words',
    duration: '6:00',
    thumbnail: 'https://img.youtube.com/vi/UejPoczanf4/maxresdefault.jpg',
    subject: 'english',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/UejPoczanf4'
  },
  {
    id: 'v16',
    title: 'Opposite Words - Antonyms',
    duration: '5:45',
    thumbnail: 'https://img.youtube.com/vi/0LOI7xF-qaA/maxresdefault.jpg',
    subject: 'english',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/0LOI7xF-qaA'
  },
  {
    id: 'v17',
    title: 'Sentence Formation',
    duration: '7:30',
    thumbnail: 'https://img.youtube.com/vi/OV6Lp7cnX7s/maxresdefault.jpg',
    subject: 'english',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/OV6Lp7cnX7s'
  },
  // Grade 2 - EVS
  {
    id: 'v18',
    title: 'Types of Animals - Wild & Domestic',
    duration: '6:30',
    thumbnail: 'https://img.youtube.com/vi/owgD5EWkqsY/maxresdefault.jpg',
    subject: 'evs',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/owgD5EWkqsY'
  },
  {
    id: 'v19',
    title: 'Water Cycle for Kids',
    duration: '5:15',
    thumbnail: 'https://img.youtube.com/vi/ncORPosDrjI/maxresdefault.jpg',
    subject: 'evs',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/ncORPosDrjI'
  },
  {
    id: 'v20',
    title: 'Food We Eat - Healthy Food',
    duration: '6:00',
    thumbnail: 'https://img.youtube.com/vi/mMHVEFWNLMc/maxresdefault.jpg',
    subject: 'evs',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/mMHVEFWNLMc'
  },
  // Grade 2 - Science
  {
    id: 'v21',
    title: 'Living and Non-Living Things',
    duration: '5:45',
    thumbnail: 'https://img.youtube.com/vi/DFcGTLLkvnA/maxresdefault.jpg',
    subject: 'science',
    grade: 2,
    videoUrl: 'https://www.youtube.com/embed/DFcGTLLkvnA'
  },

  // Grade 3 - Math
  {
    id: 'v22',
    title: 'Multiplication Tables 6-10',
    duration: '12:00',
    thumbnail: 'https://img.youtube.com/vi/Pr5grfdGYlI/maxresdefault.jpg',
    subject: 'math',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/Pr5grfdGYlI'
  },
  {
    id: 'v23',
    title: 'Division for Beginners',
    duration: '9:30',
    thumbnail: 'https://img.youtube.com/vi/rGMXWTULS7w/maxresdefault.jpg',
    subject: 'math',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/rGMXWTULS7w'
  },
  {
    id: 'v24',
    title: 'Introduction to Fractions',
    duration: '8:45',
    thumbnail: 'https://img.youtube.com/vi/n0FZhQ_GkKw/maxresdefault.jpg',
    subject: 'math',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/n0FZhQ_GkKw'
  },
  // Grade 3 - English
  {
    id: 'v25',
    title: 'Parts of Speech',
    duration: '8:00',
    thumbnail: 'https://img.youtube.com/vi/YPBK8IKvFLQ/maxresdefault.jpg',
    subject: 'english',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/YPBK8IKvFLQ'
  },
  {
    id: 'v26',
    title: 'Tenses - Past, Present, Future',
    duration: '7:30',
    thumbnail: 'https://img.youtube.com/vi/t2BjdOBzHqs/maxresdefault.jpg',
    subject: 'english',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/t2BjdOBzHqs'
  },
  {
    id: 'v27',
    title: 'Synonyms and Antonyms',
    duration: '6:15',
    thumbnail: 'https://img.youtube.com/vi/gllTMbq0T48/maxresdefault.jpg',
    subject: 'english',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/gllTMbq0T48'
  },
  // Grade 3 - Science
  {
    id: 'v28',
    title: 'Solar System for Kids',
    duration: '10:00',
    thumbnail: 'https://img.youtube.com/vi/Qd6nLM2QlWw/maxresdefault.jpg',
    subject: 'science',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/Qd6nLM2QlWw'
  },
  {
    id: 'v29',
    title: 'States of Matter',
    duration: '6:30',
    thumbnail: 'https://img.youtube.com/vi/btNeVPTqvOc/maxresdefault.jpg',
    subject: 'science',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/btNeVPTqvOc'
  },
  {
    id: 'v30',
    title: 'Food Chain Explained',
    duration: '5:45',
    thumbnail: 'https://img.youtube.com/vi/MuKs9o1s8h8/maxresdefault.jpg',
    subject: 'science',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/MuKs9o1s8h8'
  },
  // Grade 3 - Social Studies
  {
    id: 'v31',
    title: 'Maps and Directions',
    duration: '7:00',
    thumbnail: 'https://img.youtube.com/vi/djLKrZlI4tc/maxresdefault.jpg',
    subject: 'social',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/djLKrZlI4tc'
  },
  {
    id: 'v32',
    title: 'Our Country India',
    duration: '8:30',
    thumbnail: 'https://img.youtube.com/vi/JthApv2R0K8/maxresdefault.jpg',
    subject: 'social',
    grade: 3,
    videoUrl: 'https://www.youtube.com/embed/JthApv2R0K8'
  },

  // Grade 4 - Math
  {
    id: 'v33',
    title: 'Long Division',
    duration: '11:00',
    thumbnail: 'https://img.youtube.com/vi/LGqBQrUYua4/maxresdefault.jpg',
    subject: 'math',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/LGqBQrUYua4'
  },
  {
    id: 'v34',
    title: 'Fractions - Add & Subtract',
    duration: '9:30',
    thumbnail: 'https://img.youtube.com/vi/5juto2ze8Lg/maxresdefault.jpg',
    subject: 'math',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/5juto2ze8Lg'
  },
  {
    id: 'v35',
    title: 'Area and Perimeter',
    duration: '8:45',
    thumbnail: 'https://img.youtube.com/vi/rYvyFpGDQ54/maxresdefault.jpg',
    subject: 'math',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/rYvyFpGDQ54'
  },
  // Grade 4 - English
  {
    id: 'v36',
    title: 'Punctuation Marks',
    duration: '7:15',
    thumbnail: 'https://img.youtube.com/vi/cnmlAUesjSg/maxresdefault.jpg',
    subject: 'english',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/cnmlAUesjSg'
  },
  {
    id: 'v37',
    title: 'Essay Writing Tips',
    duration: '8:00',
    thumbnail: 'https://img.youtube.com/vi/XLq5R9a0lHA/maxresdefault.jpg',
    subject: 'english',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/XLq5R9a0lHA'
  },
  {
    id: 'v38',
    title: 'Prefixes and Suffixes',
    duration: '6:45',
    thumbnail: 'https://img.youtube.com/vi/IqM-vKD35nI/maxresdefault.jpg',
    subject: 'english',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/IqM-vKD35nI'
  },
  // Grade 4 - Science
  {
    id: 'v39',
    title: 'Human Body - Digestive System',
    duration: '9:00',
    thumbnail: 'https://img.youtube.com/vi/Og5xAdC8EUI/maxresdefault.jpg',
    subject: 'science',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/Og5xAdC8EUI'
  },
  {
    id: 'v40',
    title: 'Simple Machines',
    duration: '7:30',
    thumbnail: 'https://img.youtube.com/vi/fvOmaf2GfCY/maxresdefault.jpg',
    subject: 'science',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/fvOmaf2GfCY'
  },
  {
    id: 'v41',
    title: 'Electricity and Circuits',
    duration: '8:15',
    thumbnail: 'https://img.youtube.com/vi/6Fy5CwaCSHQ/maxresdefault.jpg',
    subject: 'science',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/6Fy5CwaCSHQ'
  },
  // Grade 4 - Social Studies
  {
    id: 'v42',
    title: 'Indian Freedom Struggle',
    duration: '10:00',
    thumbnail: 'https://img.youtube.com/vi/8T7rOH8BjCg/maxresdefault.jpg',
    subject: 'social',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/8T7rOH8BjCg'
  },
  {
    id: 'v43',
    title: 'Continents and Oceans',
    duration: '8:30',
    thumbnail: 'https://img.youtube.com/vi/K6DSMZ8b3LE/maxresdefault.jpg',
    subject: 'social',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/K6DSMZ8b3LE'
  },
  {
    id: 'v44',
    title: 'National Symbols of India',
    duration: '6:45',
    thumbnail: 'https://img.youtube.com/vi/6k3u__I_UDE/maxresdefault.jpg',
    subject: 'social',
    grade: 4,
    videoUrl: 'https://www.youtube.com/embed/6k3u__I_UDE'
  }
];

export const sampleQuizzes: Quiz[] = [
  // Grade 1 - Science
  {
    id: 'q1',
    question: 'What do plants need to grow?',
    options: ['Only water', 'Only sunlight', 'Water, sunlight, and soil', 'Only soil'],
    correctAnswer: 2,
    subject: 'science',
    grade: 1
  },
  {
    id: 'q2',
    question: 'What are the three states of matter?',
    options: ['Hot, cold, warm', 'Solid, liquid, gas', 'Big, small, tiny', 'Fast, slow, stopped'],
    correctAnswer: 1,
    subject: 'science',
    grade: 1
  },
  {
    id: 'q3',
    question: 'Which season comes after winter?',
    options: ['Summer', 'Fall', 'Spring', 'Winter again'],
    correctAnswer: 2,
    subject: 'science',
    grade: 1
  },
  // Grade 1 - Math
  {
    id: 'q4',
    question: 'What is 8 + 7?',
    options: ['13', '14', '15', '16'],
    correctAnswer: 2,
    subject: 'math',
    grade: 1
  },
  {
    id: 'q5',
    question: 'What time is shown when the big hand is on 12 and the small hand is on 3?',
    options: ['12 o\'clock', '3 o\'clock', '6 o\'clock', '9 o\'clock'],
    correctAnswer: 1,
    subject: 'math',
    grade: 1
  },
  {
    id: 'q6',
    question: 'How many pennies make 1 dime?',
    options: ['5', '10', '20', '25'],
    correctAnswer: 1,
    subject: 'math',
    grade: 1
  },
  // Grade 1 - English
  {
    id: 'q7',
    question: 'Which word starts with the blend "bl"?',
    options: ['Cat', 'Blue', 'Dog', 'Run'],
    correctAnswer: 1,
    subject: 'english',
    grade: 1
  },
  {
    id: 'q8',
    question: 'Which is a sight word?',
    options: ['Elephant', 'The', 'Strawberry', 'Butterfly'],
    correctAnswer: 1,
    subject: 'english',
    grade: 1
  },
  // Grade 1 - Social Studies
  {
    id: 'q9',
    question: 'Who helps put out fires?',
    options: ['Doctor', 'Teacher', 'Firefighter', 'Chef'],
    correctAnswer: 2,
    subject: 'social',
    grade: 1
  },
  {
    id: 'q10',
    question: 'What direction is at the top of a map?',
    options: ['South', 'East', 'West', 'North'],
    correctAnswer: 3,
    subject: 'social',
    grade: 1
  },

  // Grade 2 - Science
  {
    id: 'q11',
    question: 'What is a habitat?',
    options: ['A place where animals live', 'A type of food', 'A kind of plant', 'A weather pattern'],
    correctAnswer: 0,
    subject: 'science',
    grade: 2
  },
  {
    id: 'q12',
    question: 'In the water cycle, what happens when water vapor cools?',
    options: ['It evaporates', 'It condenses into clouds', 'It melts', 'It freezes'],
    correctAnswer: 1,
    subject: 'science',
    grade: 2
  },
  {
    id: 'q13',
    question: 'Which is an example of a simple machine?',
    options: ['Computer', 'Lever', 'Car', 'Phone'],
    correctAnswer: 1,
    subject: 'science',
    grade: 2
  },
  // Grade 2 - Math
  {
    id: 'q14',
    question: 'What is 145 + 238?',
    options: ['373', '383', '393', '403'],
    correctAnswer: 1,
    subject: 'math',
    grade: 2
  },
  {
    id: 'q15',
    question: 'What is 4 groups of 5?',
    options: ['9', '15', '20', '25'],
    correctAnswer: 2,
    subject: 'math',
    grade: 2
  },
  {
    id: 'q16',
    question: 'How many inches are in 1 foot?',
    options: ['6', '10', '12', '24'],
    correctAnswer: 2,
    subject: 'math',
    grade: 2
  },
  // Grade 2 - English
  {
    id: 'q17',
    question: 'What should you do when reading to understand better?',
    options: ['Read very fast', 'Skip hard words', 'Ask questions about the story', 'Only look at pictures'],
    correctAnswer: 2,
    subject: 'english',
    grade: 2
  },
  {
    id: 'q18',
    question: 'What goes at the end of a sentence?',
    options: ['Comma', 'Period, question mark, or exclamation point', 'Quotation mark', 'Apostrophe'],
    correctAnswer: 1,
    subject: 'english',
    grade: 2
  },
  // Grade 2 - Social Studies
  {
    id: 'q19',
    question: 'How many continents are there?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    subject: 'social',
    grade: 2
  },
  {
    id: 'q20',
    question: 'What is someone who makes goods called?',
    options: ['Consumer', 'Producer', 'Teacher', 'Doctor'],
    correctAnswer: 1,
    subject: 'social',
    grade: 2
  },

  // Grade 3 - Science
  {
    id: 'q21',
    question: 'In a food chain, what are plants called?',
    options: ['Consumers', 'Decomposers', 'Producers', 'Predators'],
    correctAnswer: 2,
    subject: 'science',
    grade: 3
  },
  {
    id: 'q22',
    question: 'How long does it take for the Moon to go through all its phases?',
    options: ['One week', 'About one month', 'One year', 'One day'],
    correctAnswer: 1,
    subject: 'science',
    grade: 3
  },
  {
    id: 'q23',
    question: 'What do magnets attract?',
    options: ['Plastic', 'Wood', 'Metal', 'Paper'],
    correctAnswer: 2,
    subject: 'science',
    grade: 3
  },
  // Grade 3 - Math
  {
    id: 'q24',
    question: 'What is 7 × 8?',
    options: ['54', '56', '63', '64'],
    correctAnswer: 1,
    subject: 'math',
    grade: 3
  },
  {
    id: 'q25',
    question: 'Which fraction is larger: 1/2 or 1/4?',
    options: ['1/4', '1/2', 'They are equal', 'Cannot compare'],
    correctAnswer: 1,
    subject: 'math',
    grade: 3
  },
  {
    id: 'q26',
    question: 'What is the perimeter of a rectangle with length 5 and width 3?',
    options: ['8', '15', '16', '20'],
    correctAnswer: 2,
    subject: 'math',
    grade: 3
  },
  // Grade 3 - English
  {
    id: 'q27',
    question: 'What is the main idea of a paragraph?',
    options: ['The first sentence', 'What the paragraph is mostly about', 'The last sentence', 'The longest sentence'],
    correctAnswer: 1,
    subject: 'english',
    grade: 3
  },
  {
    id: 'q28',
    question: 'How many paragraphs should a basic essay have?',
    options: ['1', '2', 'At least 3 (introduction, body, conclusion)', '10'],
    correctAnswer: 2,
    subject: 'english',
    grade: 3
  },
  // Grade 3 - Social Studies
  {
    id: 'q29',
    question: 'Who explored the Americas in 1492?',
    options: ['George Washington', 'Christopher Columbus', 'Abraham Lincoln', 'Benjamin Franklin'],
    correctAnswer: 1,
    subject: 'social',
    grade: 3
  },
  {
    id: 'q30',
    question: 'How many branches of U.S. government are there?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    subject: 'social',
    grade: 3
  },

  // Grade 4 - Science
  {
    id: 'q31',
    question: 'Which body system helps you move?',
    options: ['Digestive system', 'Muscular system', 'Respiratory system', 'Circulatory system'],
    correctAnswer: 1,
    subject: 'science',
    grade: 4
  },
  {
    id: 'q32',
    question: 'What type of rock is formed from cooled lava?',
    options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Limestone'],
    correctAnswer: 2,
    subject: 'science',
    grade: 4
  },
  {
    id: 'q33',
    question: 'What is energy in motion called?',
    options: ['Potential energy', 'Kinetic energy', 'Chemical energy', 'Solar energy'],
    correctAnswer: 1,
    subject: 'science',
    grade: 4
  },
  // Grade 4 - Math
  {
    id: 'q34',
    question: 'What is 144 ÷ 12?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    subject: 'math',
    grade: 4
  },
  {
    id: 'q35',
    question: 'What decimal is equal to 1/4?',
    options: ['0.25', '0.5', '0.75', '0.1'],
    correctAnswer: 0,
    subject: 'math',
    grade: 4
  },
  {
    id: 'q36',
    question: 'What is a 90-degree angle called?',
    options: ['Acute angle', 'Obtuse angle', 'Right angle', 'Straight angle'],
    correctAnswer: 2,
    subject: 'math',
    grade: 4
  },
  // Grade 4 - English
  {
    id: 'q37',
    question: 'What is the theme of a story?',
    options: ['The main character', 'The setting', 'The lesson or message', 'The title'],
    correctAnswer: 2,
    subject: 'english',
    grade: 4
  },
  {
    id: 'q38',
    question: 'When writing a research report, what should you include?',
    options: ['Only your opinions', 'Facts from reliable sources', 'Made-up information', 'Only pictures'],
    correctAnswer: 1,
    subject: 'english',
    grade: 4
  },
  // Grade 4 - Social Studies
  {
    id: 'q39',
    question: 'What does "Westward Expansion" mean?',
    options: ['Moving north', 'Americans moving west across the continent', 'Trading with Europe', 'Building cities'],
    correctAnswer: 1,
    subject: 'social',
    grade: 4
  },
  {
    id: 'q40',
    question: 'Which U.S. region is known for its mountains and national parks?',
    options: ['Southeast', 'Northeast', 'West', 'Midwest'],
    correctAnswer: 2,
    subject: 'social',
    grade: 4
  }
];
