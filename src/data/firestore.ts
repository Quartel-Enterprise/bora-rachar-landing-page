'use server'

import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore'

import { env } from '@/env'

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export async function emailAlreadyExistsInFirestore(email: string) {
  const queryFindByEmail = query(
    collection(db, 'leads'),
    where('email', '==', email),
  )

  const emailSnapshot = await getDocs(queryFindByEmail)

  return emailSnapshot.size > 0
}

export async function addEmailToFirestore(email: string) {
  await addDoc(collection(db, 'leads'), {
    email,
  })
}
