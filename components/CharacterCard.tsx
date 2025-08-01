import { Player } from "@/model/Player";
import { Button, Card, Text } from "react-native-paper";

interface CharacterCardProps {
  player: Player;
}

const CharacterCard = ({ player }: CharacterCardProps) => {
  if (!player) {
    return <Text>Wow such emptyness.</Text>;
  }

  return (
    <Card >
      <Card.Content>
        <Text variant="titleLarge">{player.name}</Text>
        <Text variant="bodyMedium">Health: {player.health} / 10</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained">Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default CharacterCard;
