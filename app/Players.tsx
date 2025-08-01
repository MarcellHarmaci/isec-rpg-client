import CharacterCard from "@/components/CharacterCard";
import { db } from "@/firebaseConfig";
import { Player } from "@/model/Player";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

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
          }))
        );
      },
      (error) => {
        console.error("Firestore onSnapshot error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <>
      {players.map((player) => (
        <CharacterCard key={player.id} player={player} />
      ))}
    </>
  );
}
