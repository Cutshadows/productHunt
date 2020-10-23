console.log(process.env.API_KEY);
const firebaseConfig = {
   apiKey: process.env.API_KEY,
    authDomain: "product-nextjs.firebaseapp.com",
    databaseURL: "https://product-nextjs.firebaseio.com",
    projectId: "product-nextjs",
    storageBucket: "product-nextjs.appspot.com",
    messagingSenderId: "72641806238",
    appId: "1:72641806238:web:e7dd86c7a10ce76af9608f"
  };

    /* apiKey: "AIzaSyBU45x6AEmqrtPbTKWplEpGrUwcU_fwA0M",
    authDomain: "product-nextjs.firebaseapp.com",
    databaseURL: "https://product-nextjs.firebaseio.com",
    projectId: "product-nextjs",
    storageBucket: "product-nextjs.appspot.com",
    messagingSenderId: "72641806238",
    appId: "1:72641806238:web:e7dd86c7a10ce76af9608f" */
export default firebaseConfig;