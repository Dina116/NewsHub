# 📱 News Hub
A React Native News Application  

News Hub is a modern, clean, and fast mobile news application built with **React Native (TypeScript)**.  
It allows users to know the latest news, open full article details, and save their favourite articles easily.

---

## 🚀 Features

### 🔐 **Authentication System**
A complete authentication system built with Firebase Authentication to allow users to create secure accounts and log in.
- Sign Up Screen:
    - Allows new users to create an account using an email, password, and username.
    - Includes input validation to display alerts for errors (e.g., email already in use).
    - Updates the user's profile with their displayName immediately after account creation.
- Login Screen:
  - Allows registered users to sign in to their accounts.
  - Validates credentials and provides clear error messages.
  - Automatically navigates the user to the home screen upon successful login.

### 📰 **Top Headlines**
- Displays the latest breaking news from trusted sources.
- Clean and responsive UI.

### 🗂️ **Everything News**
- A separate section that lists more articles.
- Implemented using a regular `FlatList`.
- Helps users explore more general content easily.

### 📄 **Article Details**
When the user taps any article:
- image  
- Title  
- Description  
- Button to **Back to the Home Screen**
- Button to **Add to Favourite**

### ❤️ **Favourite Articles**
- Users can save articles they like.
- Stored using **Zustand**.
- Accessible from a dedicated Favourites screen.

### 📝 **Private Notes**
A powerful feature using Cloud Firestore that allows each user to save private notes linked to their account.
-Full CRUD Functionality:
  - Create new notes.
  - Read a list of all personal notes, sorted from newest to oldest.
  - Update any existing note.
  - Delete any note, with a confirmation dialog to prevent accidental deletion.
- Data Security: Notes are fetched based on the user's uid, ensuring that each user can only see their own notes.
- Real-time Updates: Uses onSnapshot to instantly update the UI whenever data changes in Firestore.


### 👤**User Profile**
A dedicated screen that lets users view and manage their account information.
 - Displays the current user's email and username.
 - Ability to edit the username and save it directly to Firebase.
 - A button to Change Password (future feature).
 - A Logout button to securely sign out of the application.


### 🧭 **Navigation**
- Built using **React Navigation**
- **Stack Navigator** → For authentication screens (Login, Sign Up) and the main app flow 
- **Bottom Tabs** → For navigating between the primary screens (Home, Favorites, Notes, Profile).  

---

## 🛠️ Technologies Used

- **React Native (TypeScript)**
- **React Navigation**
- **Firebase (Authentication & Cloud Firestore)**
- **Zustand** (state management)
- **Axios**
- **react-native-safe-area-context**
- **Kotlin Native Module**

---

## 🔧 Native Kotlin Integration

This app also includes a simple Android-native module written in **Kotlin** to show a Toast message:

```ts
ToastExample.showToast("Added to Favourites ");
```
---

---
## App Video

https://github.com/user-attachments/assets/5703ffe2-9615-4f4d-8f8c-3d7c7088059a
