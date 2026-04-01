This is a modern storefront I built using React and Vite. The main goal was to create a "Single Page App" (SPA) feel where the user can browse, add items to a cart, and checkout without the screen ever flashing or reloading.

🎥 Live Link: https://digitools-rosy.vercel.app/
🛠️ Features I Implemented
1. "Smart" State Navigation
Instead of using heavy routing libraries, I handled the entire page flow using State Lifting. By keeping the activeTab state in App.jsx, I can instantly hide the Hero, Stats, and Pricing sections when the user switches to the Cart. This makes the transitions feel incredibly snappy.

2. Persistent Sync (Navbar + Cart)
I linked the Navbar’s cart icon to the main shop logic.
Real-time Count: The red badge on the Navbar stays updated no matter where you are on the page.
Direct Access: Clicking the Navbar icon triggers the state switch to show the Cart immediately.

3. Interactive Cart Logic
The cart isn't just a list; it’s fully interactive:
Duplicate Prevention: I wrote a check to make sure you can't accidentally buy the same tool twice.
Automatic Totals: Used the .reduce() method to calculate the price dynamically as you add or remove items.
One-Click Checkout: The "Proceed" button clears the entire state and resets the UI with a single function.

4. User Experience with Toastify
To make the app feel professional, I integrated React Toastify.
Success: Green toast when an item is added.
Warning: Yellow toast if you try to add a duplicate.
Error: Red toast when you remove an item.

5. Clean & Dark UI
I used Tailwind CSS to build a custom design system.
Glassmorphism: The Navbar uses backdrop-blur to stay visible but elegant while scrolling.
Deep Dark Footer: A high-contrast footer with a purple accent border to match the brand identity.
💻 Technical Stack
Core: React 18, Vite
Styling: Tailwind CSS, DaisyUI
Animations: Framer Motion (for smooth tab fades)
Feedback: React Toastify
Icons: Lucide React / SVG

🚧 Challenges I Solved
Prop Drilling: Passing the setActiveTab function from the top-level App.jsx down to the Navbar and New components was a great exercise in understanding how data flows in React.
Layout Shifts: I used Framer Motion’s AnimatePresence to ensure that when sections disappear, they fade out smoothly rather than just "snapping" away.

🏃 How to Run Locally
Clone the repo: git clone ...
Install: npm install
Start: npm run dev