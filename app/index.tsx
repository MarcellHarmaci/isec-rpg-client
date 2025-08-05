import CharacterDetails from "@/components/CharacterDetails";
import { db } from "@/firebaseConfig";
import { Player } from "@/model/Player";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Home() {
  const [player, setPlayer] = useState<Player>();
  const docId = "marcell";
  const currentPlayer = doc(db, "player", docId);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      currentPlayer,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const doc = docSnapshot.data();
          const player = {
            id: docId,
            ...doc,
          } as Player;
          setPlayer(player);
        }
      },
      (error) => {
        console.error("Firestore onSnapshot error:", error);
      },
    );

    return () => unsubscribe();
  }, []);

  if (!player) {
    return (
      <Text variant="titleLarge" style={{ textAlign: "center" }}>
        Such empty!
      </Text>
    );
  }

  return (
    <View
      className="p-6"
    >
      <CharacterDetails player={player} />
    </View>
  );
}
