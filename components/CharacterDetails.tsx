import { Player } from "@/model/Player";
import { Card, Divider, ProgressBar, Text } from "react-native-paper";

interface CharacterDetailsProps {
  player: Player;
}

const CharacterDetails = ({ player }: CharacterDetailsProps) => {
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
      <Card.Content>
        <Text variant="titleLarge" style={{ textAlign: "center" }}>
          {player.name}
        </Text>
        <ProgressBar
          style={{ height: 5 }}
          progress={player.health / 10}
          color={healthColor}
          className="mb-2"
        >
          {player.health} / 10
        </ProgressBar>
        <Text variant="bodyMedium">Health: {player.health} / 10</Text>
        <Text variant="bodyMedium">Background: {player.background}</Text>
        <Text variant="bodyMedium">Level: {player.level}</Text>
        <Text variant="bodyMedium">Inspiration: {player.inspiration}</Text>
        <Text variant="bodyMedium">Willpower: {player.willpower}</Text>
        <Text variant="bodyMedium">Ratiation: {player.ratiation}</Text>

        <Text variant="bodyLarge" className="mt-2">
          Attributes
        </Text>
        <Divider />
        <Text variant="bodyMedium">
          Constitution: {player.attributes?.constitution}
        </Text>
        <Text variant="bodyMedium">
          Perception: {player.attributes?.perception}
        </Text>
        <Text variant="bodyMedium">
          Movement: {player.attributes?.movement}
        </Text>
        <Text variant="bodyMedium">
          Fighting: {player.attributes?.fighting}
        </Text>
        <Text variant="bodyMedium">
          Intellect: {player.attributes?.intellect}
        </Text>
        <Text variant="bodyMedium">
          Communication: {player.attributes?.communication}
        </Text>

        <Text variant="bodyLarge" className="mt-2">
          Skills
        </Text>
        <Divider />
        {Object.entries(player.skills ?? {}).map(
          ([skillName, skillDescription]) => (
            <div key={skillName} className="mt-1">
              <Text variant="bodyMedium" style={{ fontWeight: "bold" }}>
                {skillName}
              </Text>
              <br />
              <Text variant="bodyMedium">{skillDescription}</Text>
            </div>
          ),
        )}
      </Card.Content>
    </Card>
  );
};

export default CharacterDetails;
