import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScoce from "./CriticScoce";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
        <HStack marginY={3} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScoce score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
