# My React Native Expo Project

This is a React Native application built using Expo. It includes authentication with Firebase, basic navigation, and several screens such as Login, Sign Up, Welcome, Profile, and Splash.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    ```bash
    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context
    npm install @react-navigation/stack
    npm install firebase
    expo install @react-native-async-storage/async-storage
   
    ```

3. **Set up Firebase:**

    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Add a new web app to your Firebase project.
    - Copy the Firebase configuration and replace it in `FirebaseConfig.ts`.

## Running the Application

To start the application, run:

```bash
npx expo start



This will start the Expo development server. You can then use the Expo Go app on your mobile device to scan the QR code and load the app.


Screens
Login: The screen for user login.
Sign Up: The screen for user registration.
Welcome: The welcome screen for logged-in users.
Profile: The screen displaying user profile information.
Splash: The splash screen shown while the app is loading.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.