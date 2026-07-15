// Static reference data for the Sankalp Foundation exam portal.
// Everything here is front-end only mock data — swap for real API calls later.

export const MEDIUMS = ["Marathi", "English", "Semi-English"];

export const CLASSES = [
  "Std 1st", "Std 2nd", "Std 3rd", "Std 4th", "Std 5th",
  "Std 6th", "Std 7th", "Std 8th",
];

// District -> Taluka -> Centers (each center has a coordinator assigned)
export const LOCATION_TREE = {
  "Pune": {
    talukas: {
      "Haveli": {
        centers: [
          { id: "PUN-HAV-01", name: "New English School, Wagholi", coordinator: "Mr. Suresh Kadam" },
          { id: "PUN-HAV-02", name: "Vidya Mandir, Hadapsar", coordinator: "Mrs. Anjali Deshmukh" },
        ],
      },
      "Baramati": {
        centers: [
          { id: "PUN-BAR-01", name: "Shardabai Pawar School, Baramati", coordinator: "Mr. Vikram Jagtap" },
        ],
      },
    },
  },
  "Ahilyanagar": {
    talukas: {
      "Rahata": {
        centers: [
          { id: "AHN-RAH-01", name: "Sai Vidyalaya, Shirdi", coordinator: "Mrs. Pooja Thorat" },
        ],
      },
      "Shrirampur": {
        centers: [
          { id: "AHN-SRP-01", name: "Zilla Parishad School, Shrirampur", coordinator: "Mr. Ramesh Gaikwad" },
        ],
      },
    },
  },
  "Nashik": {
    talukas: {
      "Niphad": {
        centers: [
          { id: "NSK-NIP-01", name: "Lok Vidyalaya, Niphad", coordinator: "Mr. Ganesh Pawar" },
        ],
      },
      "Sinnar": {
        centers: [
          { id: "NSK-SIN-01", name: "Saraswati Vidya Mandir, Sinnar", coordinator: "Mrs. Kavita More" },
        ],
      },
    },
  },
  "Aurangabad (Chh. Sambhajinagar)": {
    talukas: {
      "Paithan": {
        centers: [
          { id: "AUR-PAI-01", name: "Dnyanprakash School, Paithan", coordinator: "Mr. Santosh Bhosale" },
        ],
      },
    },
  },
};

export const DISTRICTS = Object.keys(LOCATION_TREE);

export const getTalukas = (district) =>
  district && LOCATION_TREE[district] ? Object.keys(LOCATION_TREE[district].talukas) : [];

export const getCenters = (district, taluka) =>
  district && taluka && LOCATION_TREE[district]?.talukas[taluka]
    ? LOCATION_TREE[district].talukas[taluka].centers
    : [];

// Static staff logins (demo credentials — shown on the login page for convenience)
export const STATIC_CREDENTIALS = {
  admin: { username: "admin@sankalpfoundation.org", password: "Admin@123", name: "Portal Administrator" },
  coordinator: { username: "coordinator@sankalpfoundation.org", password: "Coord@123", name: "Exam Coordinator" },
};

export const AVAILABLE_TESTS = [
  {
    id: "gk-2026-std1-4",
    title: "Sankalp GK Test 2026 — Std 1st to 4th",
    group: "Junior (1st - 4th)",
    duration: 20,
    totalMarks: 50,
    date: "2026-08-16",
    status: "upcoming",
  },
  {
    id: "gk-2026-std5-8",
    title: "Sankalp GK Test 2026 — Std 5th to 8th",
    group: "Senior (5th - 8th)",
    duration: 30,
    totalMarks: 100,
    date: "2026-08-16",
    status: "upcoming",
  },
  {
    id: "gk-mock-01",
    title: "Free Practice Mock Test",
    group: "All Classes",
    duration: 10,
    totalMarks: 20,
    date: "Available anytime",
    status: "practice",
  },
];

// A small practice question bank used for the in-browser mock test
export const SAMPLE_QUESTIONS = [
  { id: 1, q: "What is the capital of Maharashtra?", options: ["Nagpur", "Mumbai", "Pune", "Nashik"], answer: 1 },
  { id: 2, q: "Who wrote the Indian National Anthem?", options: ["Bankim Chandra", "Sarojini Naidu", "Rabindranath Tagore", "Rabindranath Roy"], answer: 2 },
  { id: 3, q: "Which is the longest river in India?", options: ["Yamuna", "Godavari", "Ganga", "Narmada"], answer: 2 },
  { id: 4, q: "How many states are there in India?", options: ["28", "29", "27", "26"], answer: 0 },
  { id: 5, q: "The Sun rises in the ______.", options: ["West", "North", "East", "South"], answer: 2 },
  { id: 6, q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
  { id: 7, q: "National animal of India?", options: ["Lion", "Elephant", "Tiger", "Peacock"], answer: 2 },
  { id: 8, q: "Which gas do plants absorb from the air?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
];

// Sample published results / toppers used on the public Result page
export const TOPPERS = [
  { rank: 1, name: "Aarav Deshmukh", district: "Pune", class: "Std 7th", marks: 98, total: 100 },
  { rank: 2, name: "Sanika Patil", district: "Nashik", class: "Std 8th", marks: 96, total: 100 },
  { rank: 3, name: "Om Gaikwad", district: "Ahilyanagar", class: "Std 6th", marks: 95, total: 100 },
  { rank: 4, name: "Riya Jagtap", district: "Pune", class: "Std 5th", marks: 93, total: 100 },
  { rank: 5, name: "Yash Thorat", district: "Aurangabad (Chh. Sambhajinagar)", class: "Std 7th", marks: 92, total: 100 },
];
