import AsyncStorage from "@react-native-async-storage/async-storage";
export default {
  set: async (key: string, data: string, { Console = false }) =>
    await AsyncStorage.setItem(key, data)
      .then(() => {
        Console && console.log("!saved");
      })
      .catch((err) => console.log(err)),
  get: async (key: string) =>
    await AsyncStorage.getItem(key)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => console.log(err)),

  clearAll: async ({ Console = false }) =>
    await AsyncStorage.clear().then(() => {
      Console && console.log("storage cleared");
    }),
  multiset: async (keyValuePairs: [string, string][], { Console = false }) =>
    await AsyncStorage.multiSet(keyValuePairs)
      .then(() => {
        Console && console.log("Multiple variables set ");
      })
      .catch((err) => console.log(err)),
  multiget: async (keys: string[], { Console = false }) =>
    await AsyncStorage.multiGet(keys)
      .then((response) => {
        Console && console.log(response);
        return response;
      })
      .catch((err) => console.log(err)),
};
