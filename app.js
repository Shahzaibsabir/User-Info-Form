// let dataData = async () =>{
//     const result = await fetch("https://api.github.com/users/qasim070")
//     const data  = await result.json()
//     console.log(data)
// }
// dataData()




 <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyC1v1tPc8aHtEEjGgB-MoKNjjU13ZaDjXY",
          authDomain: "fir-check-app.firebaseapp.com",
          projectId: "fir-check-app",
          storageBucket: "fir-check-app.appspot.com",
          messagingSenderId: "836406378863",
          appId: "1:836406378863:web:554c8c8302fa03f180689a",
          measurementId: "G-NRLBNF2C57"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        console.log(app)
      </script>
