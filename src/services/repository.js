import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialRequests } from "../data/seed";

const KEY = "central-demandas.requests.v1";
const USER_KEY = "central-demandas.user.v1";
export async function getRequests() {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) {
    await AsyncStorage.setItem(KEY, JSON.stringify(initialRequests));
    return initialRequests;
  }
  return JSON.parse(raw);
}

export async function saveRequests(requests) {
  await AsyncStorage.setItem(KEY, JSON.stringify(requests));
}

export async function getUser() {
  return AsyncStorage.getItem(USER_KEY);
}

export async function saveUser(name) {
  await AsyncStorage.setItem(USER_KEY, name);
}
