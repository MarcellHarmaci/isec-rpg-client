import CharacterCard from "@/components/CharacterCard";
import { db } from "@/firebaseConfig";
import { Player } from "@/model/Player";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const playerCollection = collection(db, "player");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      playerCollection,
      (querySnapshot) => {
        setPlayers(
          querySnapshot.docs.map((doc: any) => ({
            id: doc.id,
            ...doc.data(),
          })),
        );
      },
      (error) => {
        console.error("Firestore onSnapshot error:", error);
      },
    );

    return () => unsubscribe();
  }, []);

  return (
    <ScrollView className="pb-6">
      {players.map((player) => (
        <div key={player.id} className="mx-6 mt-6">
          <CharacterCard player={player} />
        </div>
      ))}
    </ScrollView>
  );
}
