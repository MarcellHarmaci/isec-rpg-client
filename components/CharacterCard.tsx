import { Player } from "@/model/Player";
import { Card, ProgressBar, Text } from "react-native-paper";

interface CharacterCardProps {
  player: Player;
}

const CharacterCard = ({ player }: CharacterCardProps) => {
  const calcHealthColor = (health: number) => {
    if (health <= 3) {
      return "red";
    } else if (health <= 6) {
      return "orange";
    } else {
      return "green";
    }
  };
  const healthColor = calcHealthColor(player.health);

  return (
    <Card>
      <Card.Content className="items-center justify-center">
        <Text variant="titleLarge">{player.name}</Text>
        <Text variant="bodyMedium">Health: {player.health} / 10</Text>
        <ProgressBar progress={player.health / 10} color={healthColor} />
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
